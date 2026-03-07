import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RepsReceipts - Generate Receipts for StockX, Nike, Gucci & 70+ Brands',
  description: 'Create realistic email receipts for StockX, Farfetch, Nike, Louis Vuitton, Gucci, Canada Goose, Dior, Balenciaga & 70+ luxury and streetwear brands. Instant receipt generator with 1:1 accuracy.',
  alternates: {
    canonical: '/',
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
