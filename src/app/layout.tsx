import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { AuthContextProvider } from "contexts/AuthContext";

import "styles/tailwind.css";

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--eb_garamond-font",
});

const gordita = localFont({
  src: [
    {
      path: "../styles/fonts/gordita/gordita_medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/gordita/gordita_medium-webfont.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/gordita/gordita_regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/gordita/gordita_regular-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/gordita/Gordita-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../styles/fonts/gordita/Gordita-Light.woff",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--gorditas-font",
});

export const metadata: Metadata = {
  title: {
    default: "Home | The RRHub",
    template: "%s | The RRHub",
  },
  description: "Welcome to The Recruitment Resource Hub",
  icons: {
    icon: [
      {
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
  // themeColor: "#ffffff",
  other: {
    "msapplication-TileColor": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={"en"}
      className={`${garamond.variable} ${gordita.variable} h-full text-black`}
    >
      <body className={"relative h-full"}>
        <div className={"flex h-full flex-col"}>
          <AuthContextProvider>
            <Header />
            <main className={"flex-1"}>{children}</main>
            <Footer />
          </AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
