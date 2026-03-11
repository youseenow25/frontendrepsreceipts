import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In - RepsReceipts | Access Your Receipt Generator',
  description: 'Log in to your RepsReceipts account. Generate professional receipts for StockX, Nike, Gucci, Louis Vuitton and 70+ luxury brands instantly.',
  openGraph: {
    title: 'Log In - RepsReceipts',
    description: 'Access your RepsReceipts account to generate and download professional receipts for 70+ brands.',
    url: 'https://www.repsreceipt.com/login',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Log In - RepsReceipts',
    description: 'Access your RepsReceipts account to generate professional receipts.',
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/login',
  },
}
