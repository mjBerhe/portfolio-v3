import "~/styles/globals.css";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "Matthew Berhe",
  description: "Matthew Berhe's Porfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dm_sans.variable}>
      <body>{children}</body>
    </html>
  );
}
