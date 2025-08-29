import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header/header";

export const metadata: Metadata = {
  title: "Steng's resume",
  description: "Steng's Portfolio",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased bg-deepNavyBlue text-foreground rounded-md shadow-md`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
