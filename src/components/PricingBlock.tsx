import { cn } from '@/lib/utils.ts'
import { ChevronRightIcon, TriangleIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function PricingBlock() {
  const pricing = [
    {
      type: 'Starter',
      cost: '$49/mo',
      description:
        'Perfect for individuals or small teams testing AI model comparisons.',
      includes: {
        title: 'Everything in Free, plus:',
        items: [
          'Compare up to 3 models at once',
          'Run unlimited custom prompts',
          'Access to basic benchmarks (MMLU, GSM8K)',
          'Export results as CSV',
          'Email support',
        ],
      },
      contact: 'Start 14-day free trial',
    },
    {
      type: 'Pro',
      cost: '$149/mo',
      description:
        'Ideal for power users, researchers, and developers who need deeper insights.',
      includes: {
        title: 'Everything in Starter, plus:',
        items: [
          'Compare up to 6 models simultaneously',
          'Side-by-side latency & speed testing',
          'Save and organize unlimited comparisons',
          'API access (limited rate)',
          'Priority email & chat support',
        ],
      },
      contact: 'Start 14-day free trial',
    },
    {
      type: 'Enterprise',
      cost: 'Custom',
      description:
        'For teams and organizations needing scale, security, and dedicated support.',
      includes: {
        title: 'Everything in Pro, plus:',
        items: [
          'Unlimited model comparisons',
          'Custom benchmark creation',
          'On-premise or private deployment options',
          'SSO & advanced user management',
          'Dedicated account manager',
          'SLA and premium support',
        ],
      },
      contact: 'Contact sales',
    },
  ]
  return (
    <section className={'flex py-14'}>
      <div className={'container mx-auto'}>
        <h2 className={'font-bold border-b pb-3'}>Pricing Block</h2>
        <div
          className={
            ' grid lg:grid-cols-3 max-w-[1200px] mx-auto p-2 bg-muted rounded-xl mt-10 gap-2 border'
          }
        >
          {/*<div className={'border bg-background rounded'}></div>*/}
          {/*<div className={'border bg-background rounded'}></div>*/}
          {/*<div className={'border bg-background rounded'}></div>*/}
          {pricing.map((pricingItem, index) => (
            <div
              key={index}
              className={cn(
                'border bg-background  rounded flex gap-8 flex-col p-6',
                index === 0 && 'lg:rounded-s-xl lg:rounded-tr rounded-t-xl',
                index === pricing.length - 1 &&
                  'lg:rounded-e-xl lg:rounded-bl rounded-b-xl',
              )}
            >
              <div className={'space-y-6'}>
                <p>{pricingItem.type}</p>
                <h1 className={'text-foreground text-primary font-bold'}>
                  {pricingItem.cost}
                </h1>
                <p className={'text-muted-foreground'}>
                  {pricingItem.description}
                </p>
              </div>
              {/*<div ></div>*/}
              <div className={'flex-1 border-t pt-8'}>
                <h5 className={'font-semibold'}>
                  {pricingItem.includes.title}
                </h5>
                <ul className={'space-y-4 mt-4'}>
                  {pricingItem.includes.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={'flex items-center gap-2'}>
                      <TriangleIcon className={'rotate-90 size-4'} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={'/'}
                className={
                  'flex justify-between text-muted-foreground hover:text-foreground hover:border-b-foreground transition-colors mt-10 border-b pb-3'
                }
              >
                <p>{pricingItem.contact}</p>
                <ChevronRightIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
