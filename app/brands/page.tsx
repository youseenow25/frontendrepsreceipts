import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { brandSeoData, getAllCategories, categoryLabels } from '@/components/brandSeoData'

function toLabel(name: string): string {
  const special: Record<string, string> = {
    debijenkorf: "De Bijenkorf",
    arcteryx: "Arc'teryx",
    nike_snkrs: "Nike SNKRS",
    taylor_made_golf: "TaylorMade Golf",
    yeezy_gap: "Yeezy Gap",
    maison_margiela: "Maison Margiela",
    louis_vuitton: "Louis Vuitton",
    north_face: "The North Face",
    off_white: "Off-White",
    pop_mort: "Pop Mort",
    saint_laurent: "Saint Laurent",
    vivienne_westwood: "Vivienne Westwood",
    jd_sports: "JD Sports",
    john_lewis: "John Lewis",
    neiman_marcus: "Neiman Marcus",
    flight_club: "Flight Club",
    gallery_dept: "Gallery Dept.",
    canada_goose: "Canada Goose",
    loro_piana: "Loro Piana",
    best_secret: "BestSecret",
    broken_planet: "Broken Planet",
    denim_tears: "Denim Tears",
    culture_kings: "Culture Kings",
    acne_studios: "Acne Studios",
  }
  if (special[name]) return special[name]
  return name
    .split('_')
    .map((word) => (word.length ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')
}

export const metadata: Metadata = {
  title: 'All 70+ Brand Receipt Generators | Luxury, Streetwear, Sports & More - RepsReceipts',
  description:
    'Browse receipt generators for 70+ brands organized by category. Luxury brands like Gucci & Louis Vuitton, streetwear like Supreme & Off-White, marketplaces like StockX & Farfetch, and more.',
  alternates: {
    canonical: '/brands',
  },
  openGraph: {
    title: 'All Brand Receipt Generators - RepsReceipts',
    description: 'Generate receipts for 70+ luxury, streetwear, and sports brands. Browse by category.',
    url: 'https://www.repsreceipt.com/brands',
    type: 'website',
  },
}

const categoryEmojis: Record<string, string> = {
  luxury: '👜',
  streetwear: '🔥',
  sports: '👟',
  marketplace: '🛒',
  electronics: '💻',
  beauty: '✨',
  department_store: '🏬',
  outdoor: '🏔️',
  watches: '⌚',
}

export default function BrandsIndexPage() {
  const categories = getAllCategories()
  const totalBrands = Object.keys(brandSeoData).length

  return (
    <>
      <main className="main">
        <div className="luxury-radial" aria-hidden />
        <Header />

        <section className="brands-directory">
          <div className="container centered">
            <h1>All {totalBrands}+ Brand Receipt Generators</h1>
            <p className="subtitle">
              Generate professional email receipts for luxury fashion, streetwear, sports, electronics, and marketplace brands. Choose your brand below.
            </p>

            {categories.map(({ category, label, brands }) => (
              <div key={category} className="category-section">
                <h2 className="category-title">
                  <span className="category-emoji">{categoryEmojis[category] || '📦'}</span>
                  {label}
                  <span className="category-count">{brands.length} brands</span>
                </h2>
                <div className="brands-directory-grid">
                  {brands.sort().map((brand) => {
                    const seo = brandSeoData[brand]
                    return (
                      <Link
                        key={brand}
                        href={`/brands/${brand}`}
                        className="brands-directory-card"
                        aria-label={`Open ${toLabel(brand)} receipt generator`}
                      >
                        <div className="brand-card-content">
                          <span className="brand-card-name">{toLabel(brand)}</span>
                          {seo && (
                            <span className="brand-card-desc">{seo.shortDescription}</span>
                          )}
                        </div>
                        <span className="arrow" aria-hidden>→</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <style>{`
        .brands-directory {
          padding: 40px 0 80px 0;
          position: relative;
        }

        .container.centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h1 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          margin-bottom: 12px;
          color: #111;
          text-align: center;
          font-weight: 800;
        }

        .subtitle {
          font-size: 1.05rem;
          color: #555;
          max-width: 640px;
          margin-bottom: 40px;
          text-align: center;
          line-height: 1.6;
        }

        .category-section {
          width: 100%;
          margin-bottom: 40px;
        }

        .category-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          text-align: left;
          padding-bottom: 10px;
          border-bottom: 2px solid #e5e7eb;
        }

        .category-emoji {
          font-size: 1.4rem;
        }

        .category-count {
          font-size: 0.85rem;
          font-weight: 500;
          color: #888;
          margin-left: auto;
        }

        .brands-directory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 12px;
          width: 100%;
        }

        .brands-directory-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 20px;
          border: 1px solid #eee;
          background: white;
          text-decoration: none;
          color: #111;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .brands-directory-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          border-color: #0074d4;
        }

        .brand-card-content {
          display: flex;
          flex-direction: column;
          text-align: left;
          gap: 2px;
        }

        .brand-card-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: #111;
        }

        .brand-card-desc {
          font-size: 0.8rem;
          color: #888;
          line-height: 1.3;
        }

        .arrow {
          font-size: 1.3rem;
          color: #ccc;
          flex-shrink: 0;
          transition: color 0.2s;
        }

        .brands-directory-card:hover .arrow {
          color: #0074d4;
        }

        .luxury-radial {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .main {
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .brands-directory {
            padding: 30px 0 60px 0;
          }

          .brands-directory-grid {
            grid-template-columns: 1fr;
          }

          .category-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}
