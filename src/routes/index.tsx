import { createFileRoute } from '@tanstack/react-router'
import PricingBlock from '@/components/PricingBlock.tsx'
import FeatureBlock from '@/components/FeatureBlock.tsx'
import CareerBlock from '@/components/CareerBlock.tsx'
import HelpBlock from '@/components/HelpBlock.tsx'
import BannerBlock from '@/components/BannerBlock.tsx'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="min-h-screen px-4">
      <PricingBlock />
      <FeatureBlock />
      <HelpBlock />
      <BannerBlock />
      <CareerBlock />
    </main>
  )
}
