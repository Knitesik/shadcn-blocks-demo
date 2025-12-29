import { BarChart3Icon, SearchIcon, SparklesIcon, ZapIcon } from 'lucide-react'
import { cn } from '@/lib/utils.ts'
import Placeholder from '/placeholder.svg'
import { Badge } from '@/components/ui/badge.tsx'

const features = [
  {
    icon: SearchIcon,
    type: 'Discovery',
    title: 'Instant Model Discovery',
    description:
      'Access the latest AI models from OpenAI, Anthropic, Google, xAI, Meta, and more—all in one place. New releases and versions appear automatically as soon as they launch.',
  },
  {
    icon: ZapIcon,
    type: 'Comparison',
    title: 'Real-Time Side-by-Side Testing',
    description:
      'Enter a single prompt and watch multiple models respond simultaneously. Instantly compare speed, style, accuracy, and creativity without switching tabs or apps.',
  },
  {
    icon: BarChart3Icon,
    type: 'Benchmarks',
    title: 'Objective Performance Metrics',
    description:
      'Dive into standardized benchmarks like MMLU, GPQA, HumanEval, and LiveCodeBench. See clear scores, rankings, and detailed breakdowns to make informed decisions.',
  },
  {
    icon: SparklesIcon,
    type: 'Insights',
    title: 'Deep Analysis & Context',
    description:
      'Get model-specific strengths, weaknesses, use-case recommendations, and cost analysis. Understand not just what performs best, but why and when to choose each model.',
  },
]

export default function FeatureBlock() {
  return (
    <section className={'flex py-14'}>
      <div className={'container mx-auto'}>
        <h2 className={'font-bold border-b pb-3'}>Features Block</h2>
        <div
          className={
            ' grid lg:grid-cols-2 p-2 bg-muted rounded-xl  mt-10 gap-2 border'
          }
        >
          {/*<div className={'border bg-background rounded'}></div>*/}
          {/*<div className={'border bg-background rounded'}></div>*/}
          {/*<div className={'border bg-background rounded'}></div>*/}
          {features.map(({ icon: Icon, ...feature }, index) => (
            <div
              key={index}
              className={cn(
                'border bg-background  rounded flex gap-8 flex-col p-6',
                index === 0 && 'lg:rounded-ss-xl lg:rounded-se rounded-t-xl',
                index === 1 && 'lg:rounded-se-xl',
                index === 2 && 'lg:rounded-es-xl',
                index === 3 && 'lg:rounded-ee-xl lg:rounded-es rounded-b-xl',
              )}
            >
              <div className={'flex-1 bg-muted rounded'}>
                <img
                  src={Placeholder}
                  alt={'Placeholder'}
                  className={'w-full h-[400px]'}
                />
              </div>
              <div className={'space-y-4'}>
                <Badge>
                  <Icon size={16} />
                  <p>{feature.type}</p>
                </Badge>
                <h5 className={'text-primary font-medium'}>{feature.title}</h5>
                <p className={'text-muted-foreground'}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
