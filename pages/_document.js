import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Title */}
        <title>OpenEstate – Fractional Real Estate Platform</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="OpenEstate lets you invest in real estate like buying shares. Fractional, transparent, and secure."
        />

        {/* Favicon / Logo */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Optional Apple touch icon */}
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
