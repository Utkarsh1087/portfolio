import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is too short!")
    .max(80, "Full name must be under 80 characters!"),
  email: z
    .string()
    .trim()
    .email({ message: "Email is invalid!" })
    .max(120, "Email must be under 120 characters!"),
  message: z
    .string()
    .trim()
    .min(3, "Message is too short!")
    .max(3000, "Message must be under 3,000 characters!"),
});

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting (max 5 submissions per 10 minutes per IP)
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(`send-email:${clientIp}`, {
      windowMs: 10 * 60 * 1000,
      maxRequests: 5,
    });

    if (!rateLimit.success) {
      const retryAfterSec = Math.ceil((rateLimit.resetTime - Date.now()) / 1000);
      return Response.json(
        {
          error:
            "You have sent multiple messages recently. Please wait a few minutes before submitting again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSec),
          },
        }
      );
    }

    const body = await req.json();

    // 2. Validate input and enforce strict length bounds
    const { success, data, error } = EmailSchema.safeParse(body);
    if (!success) {
      return Response.json(
        { error: error?.errors?.[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    // 3. Send email using Resend SDK
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Change this after verifying domain in Resend
      to: [config.email],
      subject: `Portfolio Inquiry from ${data.fullName}`,
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      return Response.json({ error: resendError.message }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error: any) {
    console.error("API Route Error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
