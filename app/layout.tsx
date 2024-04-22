import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./_providers/Providers";
import { ToastContainer } from "react-toastify";
import MainHeader from "./_components/mainHeader/MainHeader";
import MainFooter from "./_components/mainFooter/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Royal Defense",
  description: "Powered by royal defense dev team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body id="root">
          <MainHeader />
          <ToastContainer />
          {children}
          <MainFooter />
        </body>
      </html>
    </Providers>
  );
}
