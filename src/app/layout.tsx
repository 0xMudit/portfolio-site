import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://mudityaraghav.vercel.app";
const siteTitle = "Muditya Raghav — Backend Developer (Python, Go, FastAPI)";
const siteDescription =
  "Backend developer building reliable systems with Python, Go, FastAPI, PostgreSQL, Redis, and Docker. Open to Backend Developer and SDE I opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Muditya Raghav — Portfolio",
  authors: [{ name: "Muditya Raghav", url: siteUrl }],
  creator: "Muditya Raghav",
  keywords: [
    "Muditya Raghav",
    "Backend Developer",
    "SDE I",
    "Software Engineer",
    "Python",
    "Go",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Docker",
    "REST APIs",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muditya Raghav",
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@0xMudit",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

/**
 * Pre-paint theme bootstrap + the only two behaviors on the page:
 *  - the theme toggle (click on [data-theme-toggle])
 *  - closing the <details> menu on Escape or after following a link
 * Light is the default; only a stored dark choice is applied.
 */
const bootScript = `(function(){
  try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark");}}catch(e){}
  document.addEventListener("click",function(e){
    var t=e.target;
    if(!t||!t.closest)return;
    if(t.closest("[data-theme-toggle]")){
      var r=document.documentElement,n=!r.classList.contains("dark");
      r.classList.toggle("dark",n);
      try{localStorage.setItem("theme",n?"dark":"light");}catch(e){}
      return;
    }
    var m=document.querySelector("details[data-menu]");
    if(m&&m.open&&t.closest("a")){m.open=false;}
  });
  document.addEventListener("keydown",function(e){
    if(e.key!=="Escape")return;
    var m=document.querySelector("details[data-menu]");
    if(m){m.open=false;}
  });
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
