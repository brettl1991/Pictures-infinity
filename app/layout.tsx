import { Bebas_Neue } from "@next/font/google";
import "./global.css";

export const metadata = {
  title: "Infinite Scroll",
  description: "Generated by Next.js",
};

const bebasN = Bebas_Neue({
  // Specifying weight is only required for
  // non-variable fonts.
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebasN.className}>
      <body>{children}</body>
    </html>
  );
}
