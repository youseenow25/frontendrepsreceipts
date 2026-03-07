// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";
import Link from 'next/link';
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/StructuredData";
import styles from './home.module.css';

const brands = [
  "apple", "gucci", "stockx", "nike", "flightclub", "louisvuitton", "saintlaurent","trapstar"
]

function toLabel(name: string): string {
  const special: Record<string, string> = {
    zip_code: "ZIP Code",
    product_id: "Product ID",
    order_number: "Order Number",
    phone_number: "Phone Number",
    brand_name: "Brand Name",
    taxes_percentatge: "Taxes Percentage",
    card_end: "Card Ending",
    seller_name: "Seller Name",
    spain: "Country",
  };
  if (special[name]) return special[name];
  return name
    .split("_")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function Page() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <>

      <main className={styles.main}>
        <div className={styles['luxury-radial']} aria-hidden />
        <Header />

        {/* Receipts Examples Section */}
        <section className={styles['receipts-examples']}>
          <div className={styles.container}>
<div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
              justifyContent: "center",
              width: '100%',
              fontSize:20
            }}
          >
           

       
  

            <a
              href="https://t.me/+BF4byc1lOas4MDVk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['telegram-button']}
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Contact Support in Telegram
                <span style={{ fontSize: "18px" }}>↗</span>
              </p>
            </a>
          </div>
           
            
            <div style={{marginTop:10}} className={styles['receipts-grid']}>
              {brands.map((brand) => (
                <Link
                  key={brand}
                  href={`/brands/${brand}`}
                  className={styles['receipt-card']}
                  aria-label={`View the ${toLabel(brand)} receipt generator`}
                >
                  <div className={styles['receipt-image']}>
                    <Image
                      src={`/${brand}_example.png`}
                      alt={`${toLabel(brand)} receipt example - Generate ${toLabel(brand)} receipts online`}
                      width={120}
                      height={160}
                      priority
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
        <div style={{width:'100%'}} >
          <Hero />
          <ImageUploader />
        </div>


        <section className={styles['luxury-features']}>
          <div className={styles.container}>
            <h2 className={styles['features-title']}>Why RepsReceipts?</h2>

            <div className={styles['features-grid']}>
              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>🎨</div>
                <h3>1:1 Receipts</h3>
                <p>StockX, Farfetch, Apple, Canada Goose +70 other luxury brand receipts.</p>
              </div>

              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>⚡</div>
                <h3>Instant Generation</h3>
                <p>Create professional luxury receipts in seconds with our advanced template system.</p>
              </div>
              
             
              
        
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
