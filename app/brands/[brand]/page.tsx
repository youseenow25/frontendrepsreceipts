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
import { brandSeoData, getRelatedBrands, categoryLabels } from '@/components/brandSeoData'

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
  const seoInfo = brandSeoData[brand]
  const description = seoInfo
    ? `${seoInfo.longDescription} Create ${brandName} receipts with accurate formatting and details.`
    : `Generate professional email receipts for ${brandName} instantly. Realistic ${brandName} receipt generator with customizable details.`
  const logoUrl = `https://www.repsreceipts.com/brand-logos/${brand.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`

  return {
    title: `${brandName} Receipt Generator | Create ${brandName} Receipts Online - RepsReceipts`,
    description: description,
    keywords: [
      `${brandName} receipt`,
      `${brandName} receipt generator`,
      `${brandName} receipt maker`,
      `${brandName} receipt template`,
      `${brandName} invoice generator`,
      `generate ${brandName.toLowerCase()} receipt`,
      `${brandName.toLowerCase()} email receipt`,
      `${brandName.toLowerCase()} order confirmation`,
      'receipt generator',
      'luxury brand receipts',
      ...(seoInfo?.tags || []),
    ].join(', '),
    alternates: {
      canonical: `/brands/${brand}`,
    },
    openGraph: {
      title: `${brandName} Receipt Generator - Create Realistic ${brandName} Receipts`,
      description: description,
      type: 'website',
      locale: 'en_US',
      url: `https://www.repsreceipts.com/brands/${brand}`,
      siteName: 'RepsReceipts',
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
      title: `${brandName} Receipt Generator - RepsReceipts`,
      description: description,
      images: [logoUrl],
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
    taxes_percentatge: "Taxes Percentage",
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
  const seoInfo = brandSeoData[brand]
  const relatedBrands = getRelatedBrands(brand, 6)
  const logoUrl = `https://www.repsreceipts.com/brand-logos/${brand.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`
  const categoryLabel = seoInfo ? categoryLabels[seoInfo.category] : ''

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `${brandName} Receipt Generator`,
    'description': seoInfo?.longDescription || `Generate professional ${brandName} email receipts instantly with accurate formatting and details.`,
    'image': logoUrl,
    'url': `https://www.repsreceipts.com/brands/${brand}`,
    'provider': {
      '@type': 'Organization',
      'name': 'RepsReceipts',
      'url': 'https://www.repsreceipts.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Receipt Generation',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `${brandName} Receipt Plans`,
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': `Single ${brandName} Receipt`,
            'description': `Generate one professional ${brandName} receipt`
          },
          'price': '4.99',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': `Unlimited ${brandName} Receipts - Lifetime`,
            'description': `Lifetime access to generate unlimited ${brandName} receipts and 70+ other brands`
          },
          'price': '29.99',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        }
      ]
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.repsreceipts.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Brands',
        'item': 'https://www.repsreceipts.com/brands'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': `${brandName} Receipt Generator`,
        'item': `https://www.repsreceipts.com/brands/${brand}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <main className="main">
        <div className="luxury-radial" aria-hidden />
        <Header />

        {/* SEO-rich brand hero with unique content */}
        <section className="brand-seo-hero">
          <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
            {/* Breadcrumb navigation */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: 16, fontSize: 14, color: '#888' }}>
              <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/brands" style={{ color: '#888', textDecoration: 'none' }}>Brands</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#333', fontWeight: 500 }}>{brandName}</span>
            </nav>

            <h1 className="brand-hero-title">{brandName} Receipt Generator</h1>

            {seoInfo && (
              <>
                <p className="brand-hero-description">{seoInfo.heroLine}</p>

                {seoInfo.popularProducts.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 16 }}>
                    {seoInfo.popularProducts.map((product) => (
                      <span
                        key={product}
                        style={{
                          background: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          padding: '4px 14px',
                          fontSize: 13,
                          color: '#555',
                          fontWeight: 500,
                        }}
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                )}

                {categoryLabel && (
                  <p style={{ marginTop: 12, fontSize: 14, color: '#999' }}>
                    Category: <Link href="/brands" style={{ color: '#0074d4', textDecoration: 'none', fontWeight: 500 }}>{categoryLabel}</Link>
                  </p>
                )}
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
              <a
                href="https://t.me/+BF4byc1lOas4MDVk"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram-button"
              >
                <p style={{
                  color: "white",
                  fontWeight: "600",
                  margin: 0,
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  Contact Support in Telegram
                  <span style={{ fontSize: "18px" }}>↗</span>
                </p>
              </a>
            </div>
          </div>
        </section>

        <div style={{height:1, width:'150%', background:'linear-gradient(90deg, transparent, #d4af37, #c9b037, transparent)'}} />

        <Hero brandName={brandName} />

        {/* Brand Receipt Generator */}
        <div style={{width:'100%'}}>
          <Suspense fallback={<BrandPageLoading />}>
            <BrandReceiptGenerator preSelectedBrand={brand} />
          </Suspense>
        </div>

        {/* Related brands section - dynamic cross-linking for SEO */}
        {relatedBrands.length > 0 && (
          <section style={{ padding: '40px 0', background: '#fafafa' }}>
            <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
              <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 24 }}>
                More {categoryLabel} Receipt Generators
              </h2>
              <div className="related-brands-grid">
                {relatedBrands.map((relBrand) => {
                  const relName = toLabel(relBrand)
                  const relSeo = brandSeoData[relBrand]
                  return (
                    <Link
                      key={relBrand}
                      href={`/brands/${relBrand}`}
                      className="related-brand-card"
                      aria-label={`${relName} receipt generator`}
                    >
                      <span style={{ fontWeight: 600, color: '#1a1a1a', fontSize: 15 }}>{relName}</span>
                      {relSeo && (
                        <span style={{ fontSize: 13, color: '#666', marginTop: 4, lineHeight: 1.4 }}>
                          {relSeo.shortDescription}
                        </span>
                      )}
                      <span style={{ fontSize: 13, color: '#0074d4', marginTop: 8, fontWeight: 500 }}>
                        Generate {relName} Receipts →
                      </span>
                    </Link>
                  )
                })}
              </div>

              <div style={{ textAlign: 'center', marginTop: 24 }}>
                <Link
                  href="/brands"
                  style={{ color: '#0074d4', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}
                >
                  View all 70+ brand receipt generators →
                </Link>
              </div>
            </div>
          </section>
        )}

        <Footer/>
      </main>

      <style>{`
        .brand-seo-hero {
          padding: 30px 0 20px 0;
          text-align: center;
        }

        .related-brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .related-brand-card {
          display: flex;
          flex-direction: column;
          padding: 20px;
          background: white;
          border: 1px solid #e5e7eb;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .related-brand-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-2px);
          border-color: #0074d4;
        }

        .telegram-button {
          padding: 8px 24px;
          background-color: #0088cc;
          display: flex;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 136, 204, 0.3);
          transition: all 0.3s ease;
        }

        .telegram-button:hover {
          background-color: #006699;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 136, 204, 0.4);
        }

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
          font-size: 2.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #d4af37, #c9b037);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-hero-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.5;
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
            font-size: 1.54rem;
          }

          .brand-hero-description {
            font-size: 1.1rem;
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .brand-hero-title {
            font-size: 1.26rem;
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