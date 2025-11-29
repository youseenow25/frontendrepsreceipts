import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import brandsSchema from '@/components/brands'

const brandList = Object.keys(brandsSchema.brands || {}).sort()

function toLabel(name: string): string {
  return name
    .split('_')
    .map((word) => (word.length ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')
}

export const metadata: Metadata = {
  title: 'Browse All Brand Receipt Generators | HubReceipts',
  description:
    'Access individual receipt generators for 100+ luxury and streetwear brands. Jump directly to Apple, Nike, Louis Vuitton, StockX, and more.',
  alternates: {
    canonical: '/brands',
  },
}

export default function BrandsIndexPage() {
  return (
    <>
      <main className="main">
        <div className="luxury-radial" aria-hidden />
        <Header />

        <section className="brands-directory">
          <div className="container centered">
           
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
                All our brands available <span style={{ fontSize: "14px" }}></span>
              </p>
            </a>
          

            <div style={{marginTop:20}} className="brands-directory-grid">
              {brandList.map((brand) => (
                <Link
                  key={brand}
                  href={`/brands/${brand}`}
                  className="brands-directory-card"
                  aria-label={`Open ${toLabel(brand)} receipt generator`}
                >
                  <span>{toLabel(brand)}</span>
                  <span className="arrow" aria-hidden>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style>{`
        .brands-directory {
          padding: 80px 0;
          position: relative;
        }

        /* NEW: center everything */
        .container.centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .eyebrow {
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8c8c8c;
          margin-bottom: 12px;
        }

        h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 12px;
          color: #111;
          text-align: center;
        }

        .subtitle {
          font-size: 1.05rem;
          color: #555;
          max-width: 640px;
          margin-bottom: 40px;
          text-align: center;
        }

        .brands-directory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          width: 100%;
          max-width: 900px;
        }

        .brands-directory-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: white;
          text-decoration: none;
          color: #111;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .brands-directory-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
        }

        .arrow {
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .brands-directory {
            padding: 60px 0;
          }
        }
      `}</style>
    </>
  )
}
