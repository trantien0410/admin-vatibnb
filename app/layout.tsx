import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoginProvider } from "@/providers/login-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin VatiBnb",
  description: "Dashboard - The place for you to management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          <LoginProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
