import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  authors: [{ name: site.name }],
  keywords: [site.name, site.role, "portfolio", "software engineer"],
  // Social share preview (LinkedIn, WhatsApp, X, Slack).
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
  themeColor: "#08060f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Scroll-reveal starts elements at opacity 0 and JS fades them in.
            Without JS there is nothing to fade them in, so show everything. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>.reveal{opacity:1!important;transform:none!important}</style>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
