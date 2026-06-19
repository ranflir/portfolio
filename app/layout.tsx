import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김현제 | Portfolio",
  description: "김현제의 개발자 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
