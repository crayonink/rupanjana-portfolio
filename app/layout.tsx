import type { Metadata, Viewport } from "next";
import { Gaegu, Caveat, Nunito } from "next/font/google";
import { site } from "@/content/site";
import { CrayonDefs } from "@/components/Doodles";
import "./globals.css";

/* Gaegu is the crayon: chunky, uneven, unmistakably hand-drawn — headings.
   Caveat is the pen in the margin — annotations and asides.
   Nunito is rounded but genuinely readable — everything you actually read. */
const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-gaegu",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  authors: [{ name: site.name }],
  keywords: [
    site.name,
    site.role,
    "backend engineer",
    "Java",
    "Spring Boot",
    "portfolio",
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf7e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gaegu.variable} ${caveat.variable} ${nunito.variable}`}
    >
      <body>
        {/* Scroll-reveal starts elements at opacity 0 and JS fades them in.
            Without JS there is nothing to fade them in, so show everything. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>.reveal{opacity:1!important;transform:none!important}</style>`,
          }}
        />
        {/* The crayon wobble filter, defined once for every doodle on the page. */}
        <CrayonDefs />
        {children}
      </body>
    </html>
  );
}
