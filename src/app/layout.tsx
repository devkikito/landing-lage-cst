import type { Metadata } from "next";
import "./globals.css";
import { HtmlFontSizeProvider } from "@/context/HtmlFontSizeContext";
import { ThemeProvider } from "next-themes";
import { WindowSizeProvider } from "@/context/WindowSizeContext";
import { Epilogue } from "next/font/google";
import { Header } from "@/components/header/Header";
import { BarTools } from "@/components/barra-acessibilidade/BarTools";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { UpdateProvider } from "@/context/UpdateContext";
import { Toaster } from "sonner";
import { Suspense } from "react";

const APP_NAME = "Demência";
const APP_DEFAULT_TITLE = "Demência";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "Demência!";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="transition-all h-full w-full scrollbar-thin scrollbar-webkit duration-200 ease-in-out"
      suppressHydrationWarning
      lang="pt-BR"
    >
      <Script defer data-domain="biomob.org" src="https://plausible.biomob.app/js/script.js" />
      <body className={`${epilogue.variable}`}>
        <WindowSizeProvider>
          <HtmlFontSizeProvider>
            <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={true}>
              <UpdateProvider>
                <Suspense>
                  <div className="header">
                    <BarTools />
                  </div>
                  <Header />
                  <main>{children}</main>
                  <Footer />
                  <Toaster />
                </Suspense>
              </UpdateProvider>
            </ThemeProvider>
          </HtmlFontSizeProvider>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
