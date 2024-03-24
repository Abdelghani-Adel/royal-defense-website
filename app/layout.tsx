import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./_providers/Providers";
import { ToastContainer } from "react-toastify";
import MainHeader from "./_components/mainHeader/MainHeader";

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
        <body>
          <MainHeader />
          <ToastContainer />
          {children}
        </body>
      </html>
    </Providers>
  );
}
