import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - RepsReceipts | Receipt Generator Plans from $4.99',
  description: 'Choose your RepsReceipts plan. Generate professional receipts for StockX, Nike, Gucci, Louis Vuitton and 70+ brands. Plans starting at $4.99. One-time payment, no subscription.',
  openGraph: {
    title: 'Pricing - RepsReceipts | Plans from $4.99',
    description: 'Professional receipt generator for 70+ luxury brands. One-time payment plans starting at $4.99. No subscription required.',
    url: 'https://www.repsreceipts.com/pricing',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1150,
        height: 600,
        alt: 'RepsReceipts Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RepsReceipts Pricing | Plans from $4.99',
    description: 'Generate receipts for 70+ luxury brands. One-time payment, no subscription.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/pricing',
  },
}
