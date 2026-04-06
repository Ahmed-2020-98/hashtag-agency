import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "هشتاج | تصميم مواقع إلكترونية احترافية في السعودية",
  description:
    "شركة هشتاج لتصميم وتطوير المواقع الإلكترونية الاحترافية في الرياض والدمام وجدة. نصمم مواقع عصرية تساعدك على النمو وزيادة المبيعات.",
  icons: {
    icon: "/assets/logo/favicon1.webp",
  },
  keywords: [
    "تصميم مواقع",
    "تصميم مواقع إلكترونية",
    "شركة تصميم مواقع",
    "تصميم مواقع الرياض",
    "تصميم مواقع جدة",
    "تصميم مواقع الدمام",
    "هشتاج",
    "تطوير مواقع",
    "تصميم متاجر إلكترونية",
  ],
  openGraph: {
    title: "هشتاج | تصميم مواقع إلكترونية احترافية في السعودية",
    description:
      "نصمم مواقع إلكترونية احترافية للشركات في الرياض والدمام وجدة",
    locale: "ar_SA",
    type: "website",
  },
  verification: {
    google: "ufUlY23F1R1qFJJB_42kyufRf5iReOcVlwuxV5fpo8I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
