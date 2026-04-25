import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const { success, data, error } = EmailSchema.safeParse(body);
    if (!success) {
      return Response.json({ error: error?.message }, { status: 400 });
    }

    // Send email using Resend SDK
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
    return Response.json({ error: "Failed to process request" }, { status: 500 });
  }
}
