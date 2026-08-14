import path from "node:path";
import type { NextConfig } from "next";

/* ---------------------------------------------------------------------------
   Security headers.

   Railway already terminates TLS and 301s http -> https, so the padlock is
   handled. These close the gaps that redirect alone doesn't: they stop the
   browser trying http at all on later visits, stop MIME sniffing, stop the
   page being framed, and pin every resource to this origin.

   The site makes no external requests — next/font self-hosts the woff2 files
   and every drawing is inline SVG — so a tight CSP costs nothing here.
   'unsafe-inline' stays for styles (inline style attributes, the <style> tag
   in Hero) and scripts (Next's hydration bootstrap); `data:` stays for images
   because the paper grain and dot grid are SVG data URIs in CSS.
   ------------------------------------------------------------------------- */
const CSP = [
  "default-src 'self'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const SECURITY_HEADERS = [
  // Two years, and cover subdomains. Not `preload` — that ships the domain to
  // a browser-baked list and is slow and painful to reverse. Add it later if
  // you're sure every subdomain will always be https.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework and version to anyone scanning.
  poweredByHeader: false,
  // Pin the workspace root. Without this, Turbopack walks up past the repo and
  // picks up an unrelated package-lock.json in the home directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
