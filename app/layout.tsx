import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "../components/layout/footer";
import { Suspense } from "react";


export const metadata = {
  title: "8-zense.com",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#130835",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-[url('/images/gitter.png')] opacity-10 bg-contain repeat" />
        <Suspense fallback="...">
          <Nav />
       
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-20">
          {children}
        </main>
           <Footer />
        <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
