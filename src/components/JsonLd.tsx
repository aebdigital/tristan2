'use client';

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TRISTAN STUDIO",
    "url": "https://tristan-studio.sk",
    "telephone": "0905 537 289",
    "email": "marianferjo@tristanstudio.sk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Slovenská republika",
      "addressCountry": "SK"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
