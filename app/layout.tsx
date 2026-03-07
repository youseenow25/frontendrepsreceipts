import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Generate StockX, Farfetch, +70 brands receipts',
  description: 'Create realistic receipts for StockX, Louis Vuitton, Dior, Gucci, Nike, Supreme, Balenciaga, Off-White & 100+ premium brands. Professional receipt generator for luxury documentation and purchase verification.',
  metadataBase: new URL('https://www.repsreceipts.com'),
  alternates: {
    canonical: '/',
  },
  
  openGraph: {
    title: 'StockX, Farfetch, Canada Goose +70 brands receipt',
    description: 'Generate receipts for StockX, Farfetch, Canada Goose +70 brands.',
    url: 'https://www.repsreceipts.com',
    siteName: 'RepsReceipts',
    images: [
      {
        url: '/og-image.jpg',
        width: 1150,
        height: 600,
        alt: 'RepsReceipts - Receipt Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RepsReceipts - Receipt Generator',
    description: 'Generate receipts for StockX, Farfetch +70 brands',
    images: ['/og-image.jpg'],
  },

  keywords: [
    'receipt generator',
    'luxury brand receipts', 
    'invoice generator',
    'stockx receipt',
    'nike receipt',
    'louis vuitton receipt',
    'receipt maker',
    'fake receipt generator',
    'email receipt',
    'professional receipts',
    'luxury fashion receipts',
    'streetwear receipts'
  ],
  authors: [{ name: 'RepsReceipts' }],
  creator: 'RepsReceipts',
  publisher: 'RepsReceipts',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'BusinessSoftware',
  classification: 'SaaS Receipt Generator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ UPDATED GOOGLE TAG (GTAG.JS) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17728207333"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17728207333');
          `}
        </Script>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* FAVICONS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* THEME COLORS */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* ADDITIONAL OG TAGS */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="RepsReceipts - Professional Receipt Generator for Luxury Brands" />
        
        {/* TWITTER ADDITIONAL TAGS */}
        <meta name="twitter:image:alt" content="RepsReceipts Generate receipts for luxury brands" />

        {/* ✅ SCHEMA MARKUP FOR SaaS */}

        {/* 1. Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite", 
              "name": "RepsReceipts",
              "url": "https://www.repsreceipts.com",
              "description": "SaaS platform for generating authentic receipts for 100+ luxury and streetwear brands",
              "thumbnailUrl": "https://www.repsreceipts.com/og-image.jpg",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.repsreceipts.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* 2. Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RepsReceipts",
              "url": "https://www.repsreceipts.com",
              "logo": "https://www.repsreceipts.com/logo.png",
              "description": "SaaS platform providing professional receipt generation services for luxury brands",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
       
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": ["English", "Spanish", "French"]
              }
            })
          }}
        />

        {/* 3. SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "RepsReceipts Receipt Generator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "description": "SaaS platform for generating authentic receipts for 70+ luxury and streetwear brands including StockX, Nike, Gucci, Louis Vuitton and more.",
              "url": "https://www.repsreceipts.com",
              "image": "https://www.repsreceipts.com/og-image.jpg",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "4.99",
                "highPrice": "29.99",
                "priceCurrency": "USD",
                "offerCount": "4",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "author": {
                "@type": "Organization",
                "name": "RepsReceipts"
              }
            })
          }}
        />

        {/* 4. Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Receipt Generation",
              "image": "https://www.repsreceipts.com/og-image.jpg",
              "provider": {
                "@type": "Organization",
                "name": "RepsReceipts"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Receipt Generation Plans",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Single Receipt",
                      "description": "Generate a single professional receipt for any of 70+ brands"
                    },
                    "price": "4.99",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "1 Day Unlimited Access",
                      "description": "24 hours of unlimited receipt generation for all brands"
                    },
                    "price": "8.99",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "1 Week Unlimited Access",
                      "description": "7 days of unlimited receipt generation for all brands"
                    },
                    "price": "13.99",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lifetime Access",
                      "description": "Lifetime unlimited receipt generation for all 70+ brands"
                    },
                    "price": "29.99",
                    "priceCurrency": "USD"
                  }
                ]
              }
            })
          }}
        />

        {/* 5. FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many brands does RepsReceipts support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RepsReceipts supports 70+ brands including StockX, Nike, Gucci, Louis Vuitton, Farfetch, Canada Goose, Dior, Balenciaga, Supreme, Off-White, and many more luxury and streetwear brands."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast are receipts generated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Receipts are generated instantly. Simply fill in your details, and your professional receipt is ready to download in seconds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What pricing plans are available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer flexible plans: 1 Receipt ($4.99), 1 Day Access ($8.99), 1 Week Access ($13.99), and Lifetime Access ($29.99). All plans are one-time payments with no auto-renewal."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do the receipts look realistic?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our receipts are 1:1 replicas of actual brand receipts, designed to look authentic with proper formatting, branding, and details matching the original receipts from each brand."
                  }
                }
              ]
            })
          }}
        />

        {/* 6. BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.repsreceipts.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Brands",
                  "item": "https://www.repsreceipts.com/brands"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Pricing",
                  "item": "https://www.repsreceipts.com/pricing"
                }
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
