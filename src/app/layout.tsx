import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-heading-sans",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCVP | Sou Concurseiro e Vou Passar",
  description:
    "Ecossistema de preparação para concursos com metodologia 80/20, mentoria e materiais estratégicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617]">{children}</body>
    </html>
  );
}
