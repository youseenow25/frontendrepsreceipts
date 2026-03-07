import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment - RepsReceipts',
  description: 'Complete your RepsReceipts purchase and start generating professional receipts for 70+ luxury brands.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children
}
