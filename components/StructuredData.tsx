import brandsSchema from './brands'

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

export default function StructuredData() {
  const brands = Object.keys(brandsSchema.brands || {})
  
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RepsReceipts',
    url: 'https://www.repsreceipt.com',
    description: 'Generate authentic brand receipts instantly. Create professional receipt templates for luxury brands.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.repsreceipt.com/brands?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RepsReceipts',
    url: 'https://www.repsreceipt.com',
    logo: 'https://www.repsreceipt.com/logo.png',
    description: 'Professional receipt generator for luxury brands',
    
  }


  const brandStructuredData = brands.map((brand) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${toLabel(brand)} 1:1 template`,
    description: `Generate 1:1 ${toLabel(brand)} receipts with official templates.`,
    provider: {
      '@type': 'Organization',
      name: 'RepsReceipts'
    },
    serviceType: 'Receipt Generation',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      url: `https://www.repsreceipt.com/brands/${brand}`,
      price: '0',
      priceCurrency: 'USD'
    }
    // Remove aggregateRating unless you actually have reviews
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      {brandStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}