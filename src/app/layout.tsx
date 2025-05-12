import "./globals.scss";
import type { Metadata } from "next";
import Image from "next/image";
import iconMenu from "../../public/icons/menu.svg";
import spiderLogo from "../../public/spider-logo.svg";
import iconLogin from "../../public/icons/user.svg";

export const metadata: Metadata = {
  title: "Spiderverse",
  description: "Um carrossel parallax do Spiderverse com React e Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Image src={iconMenu} alt="Opções de menu" width={36} height={25} />
          <Image
            src={spiderLogo}
            alt="Spiderman Logo"
            width={200}
            height={56}
          />
          <Image src={iconLogin} alt="Icon Login" width={25} height={36} />
        </header>
        {children}
      </body>
    </html>
  );
}
