import type { Metadata } from "next";
import { Audiowide, Golos_Text} from "next/font/google"
import localFont from "next/font/local"
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const audiowide = Audiowide ({
    weight: "400",
    variable: "--font-audiowide",
    subsets: ["latin"],
});

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golos-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prismatic Focus",
  description: "Loja de câmeras e lentes fotográficas",
};

const lufga = localFont({
  src: [
    {
        path: '../../public/Lufga/Fontspring-DEMO-lufga-regular.otf',
        weight: '400',
        style: 'normal',
    },

    {
        path: '../../public/Lufga/Fontspring-DEMO-lufga-medium.otf',
        weight: '500',
        style: 'normal',
    },

    {
        path: '../../public/Lufga/Fontspring-DEMO-lufga-bold.otf',
        weight: '700',
        style: 'normal',
    }
  ],
  variable: '--font-lufga',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${lufga.variable} `}
      >

        <NavBar />
        {children}
      </body>
    </html>
  );
}
