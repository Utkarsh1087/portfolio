import SocketContextProvider from "@/contexts/socketio";
import Preloader from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { AIChatProvider } from "@/contexts/ai-chat-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange
  >
    <Preloader>
      <SocketContextProvider>
        <AIChatProvider>
          {children}
        </AIChatProvider>
        <Toaster />
      </SocketContextProvider>
    </Preloader>
  </ThemeProvider>;
};
