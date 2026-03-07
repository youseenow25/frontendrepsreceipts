import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Successful - RepsReceipts',
  description: 'Your payment was successful. You can now generate and download professional receipts.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return children
}
