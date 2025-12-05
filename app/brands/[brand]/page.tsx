import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import brandsSchema from '@/components/brands'
import BrandReceiptGenerator from '@/components/BrandReceiptGenerator'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero2'
import Link from 'next/link';

import Image from 'next/image'
import Footer from '@/components/Footer'

type Props = {
  params: { brand: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const brand = params.brand
  const brandData = brandsSchema.brands[brand]
  
  

  const brandName = toLabel(brand)
  const description = `Generate emal receipts for ${brandName}  instantly.`
  const logoUrl = `https://www.repsreceipts.com/brand-logos/${brand.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`
  
  return {
    title: `${brandName} 1:1 template, +70 brands `,
    description: description,
    keywords: [
      `${brandName} templates`,
      `${brandName} receipt`,
      `${brandName} receipt generator`,
      `${brandName} invoice template`,
      `${brandName.toLowerCase()} receipt maker`,
      'free receipt generator',
      'luxury brand receipts',
   
    ].join(', '),
    openGraph: {
      title: `${brandName} 1:1 templates, +70 brands`,
      description: description,
      type: 'website',
      locale: 'en_US',
      url: `https://www.repsreceipts.com/brands/${brand}`,
      siteName: 'RepReceipts',
      images: [
        {
          url: logoUrl,
          width: 190,
          height: 190,
          alt: `${brandName} Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brandName} 1:1 template, +70 brands`,
      description: description,
      images: [logoUrl],
    },
    alternates: {
      canonical: `https://www.repsreceipts.com/brands/${brand}`
    },
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
  }
}

function toLabel(name: string): string {
  const special: Record<string, string> = {
    zip_code: "ZIP Code",
    product_id: "Product ID",
    order_number: "Order Number",
    phone_number: "Phone Number",
    brand_name: "Brand Name",
    taxes_percentatge: "Taxes Percentatge",
    currency: "Currency",
  };
  if (special[name]) return special[name];
  return name
    .split("_")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

// Loading component for Suspense fallback
function BrandPageLoading() {
  return (
    <div className="brand-receipt-generator">
      <div className="brand-header">
        <h1>Loading...</h1>
      </div>
    </div>
  )
}

export default function BrandPage({ params }: Props) {
  const brand = params.brand
  const brandData = brandsSchema.brands[brand]

  const brands = [
  "apple", "gucci", "stockx", "nike", "flightclub", "louisvuitton", "saintlaurent","trapstar"
]
  
  if (!brandData) {
    notFound()
  }

  const brandName = toLabel(brand)
  const logoUrl = `https://www.repsreceipts.com/brand-logos/${brand.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`

  // ✅ CORRECT: Page-specific structured data for THIS brand only
  // ✅ CORRECTO para SaaS - Service Schema apropiado
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': `${brandName} receipt template`,
  'description': `Generate 1:1 ${brandName}`,
  'image': logoUrl,
  'provider': {
    '@type': 'Organization',
    'name': 'RepReceipts',
    'url': 'https://www.repsreceipts.com'
  },
  'areaServed': 'Worldwide',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Receipt Generation Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Free Receipt Generation',
          'description': `Generate ${brandName} receipts with basic features`
        },
        'price': '0',
        'priceCurrency': 'USD'
      },
      {
        '@type': 'Offer', 
        'itemOffered': {
          '@type': 'Service',
          'name': 'Premium Receipt Generation',
          'description': `Generate ${brandName} receipts with advanced features and premium templates`
        },
        'price': '4.99',
        'priceCurrency': 'USD'
      }
    ]
  },
 
}

  return (
    <>
      {/* ✅ Add structured data for THIS specific brand page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="main">
        <div className="luxury-radial" aria-hidden />
        <Header />
          {/* Receipts Examples Section */}
        <section style={{marginTop:'1%'}} className="receipts-examples">
          <div className="container">
<div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 200,
              textAlign: "center",
              justifyContent: "center",
              width: '100%',
              fontSize:20
            }}
          >
           

       
  

            <a
              href="/brands"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "3px 16px",
                backgroundColor: "#5462ea",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <p style={{ 
                color: "white", 
                fontWeight: "500", 
                margin: 0, 
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: 4,
                whiteSpace: "nowrap"
              }}>
                Some result examples, see all 69 brands <span style={{ fontSize: "14px" }}>↗</span>
              </p>
            </a>
          </div>
           
            
            <div style={{marginTop:10}} className="receipts-grid">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  href={`/brands/${brand}`}
                  className="receipt-card"
                  aria-label={`View the ${toLabel(brand)} receipt generator`}
                >
                  <div className="receipt-image">
                    <Image
                      src={`/${brand}_example.png`}
                      alt={`${toLabel(brand)} receipt example`}
                      width={120}
                      height={160}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
           <div style={{height:1, width:'150%', background:'linear-gradient(90deg, transparent, #d4af37, #c9b037, transparent)'}} />
        <div style={{width:'100%'}} ></div>
        <Hero brandName={brandName} />
        
        {/* Brand Receipt Generator */}
        <div style={{width:'100%'}}>
          <Suspense fallback={<BrandPageLoading />}>
            <BrandReceiptGenerator preSelectedBrand={brand} />
          </Suspense>
        </div>

        <Footer/>
      </main>

      <style>{`
        .brand-hero-section {
          padding: 80px 0 60px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          text-align: center;
        }
             .receipts-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
          max-width: 900px;
          margin: 0 auto;
        }

        .receipt-card {
          background: transparent;
          padding: 0;
          border-radius: 0;
          text-align: center;
          transition: all 0.2s ease;
          border: none;
          flex-shrink: 0;
        }

        .receipt-card:hover {
          transform: translateY(-2px);
        }

        .receipt-image {
          margin: 0;
          border-radius: 2px;
          overflow: hidden;
          background: transparent;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .brand-hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #d4af37, #c9b037);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-hero-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Luxury radial background */
        .luxury-radial {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 600px 400px at 20% 100px, rgba(212, 175, 55, 0.1), transparent 70%),
            radial-gradient(ellipse 800px 500px at 80% 300px, rgba(201, 176, 55, 0.08), transparent 70%),
            radial-gradient(ellipse 1000px 600px at center, rgba(0, 0, 0, 0.03), transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .main {
          position: relative;
          overflow: hidden;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .brand-hero-section {
            padding: 60px 0 40px;
          }

          .brand-hero-title {
            font-size: 2.2rem;
          }

          .brand-hero-description {
            font-size: 1.1rem;
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .brand-hero-title {
            font-size: 1.8rem;
          }

          .brand-hero-description {
            fontSize: 1rem;
          }
        }
      `}</style>
    </>
  )
}

// Generate static params for all brands
export async function generateStaticParams() {
  const brands = Object.keys(brandsSchema.brands || {})
  
  return brands.map((brand) => ({
    brand: brand,
  }))
}

// Revalidate every 24 hours
export const revalidate = 86400