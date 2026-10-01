import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bisi Bele — South Indian soul, served hot. | Kharghar",
  description:
    "Concept demo: authentic South Indian flavours in Kharghar, Navi Mumbai. Explore today's menu, visit, or enquire.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
