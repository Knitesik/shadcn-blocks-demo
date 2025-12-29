import {
  BrainIcon,
  ChartAreaIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  PaletteIcon,
  RocketIcon,
  SearchIcon,
  ShieldIcon,
  ZapIcon,
} from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { useState } from 'react'

const items = [
  {
    icon: RocketIcon,
    title: 'Getting Started',
    description:
      'Learn how to set up your account and navigate the comparison tool quickly.',
  },
  {
    icon: ChartAreaIcon,
    title: 'Comparing Models',
    description:
      'Side-by-side performance metrics, benchmarks, and real-world use cases for each AI model.',
  },
  {
    icon: ZapIcon,
    title: 'Speed & Latency',
    description:
      'Understand response times, token throughput, and how models perform under load.',
  },
  {
    icon: BrainIcon,
    title: 'Reasoning & Accuracy',
    description:
      'Compare logical reasoning, math skills, coding ability, and factual accuracy across models.',
  },
  {
    icon: PaletteIcon,
    title: 'Creative Tasks',
    description:
      'Evaluate writing style, image generation prompts, humor, and creative output quality.',
  },
  {
    icon: ShieldIcon,
    title: 'Safety & Alignment',
    description:
      'Review content moderation, refusal rates, bias handling, and ethical considerations.',
  },
]
const articles = [
  {
    question: 'How do I create an account and get started?',
    answer:
      'Signing up is quick and free. Click the "Sign Up" button in the top right, choose to register with email, Google, or X (Twitter). Once logged in, you’ll have full access to compare models, run custom prompts, and view detailed benchmarks.',
  },
  {
    question: 'How do I compare different AI models?',
    answer:
      'Select up to four models from the dropdown menus at the top of the comparison page. You can then enter a single prompt to see side-by-side responses, or browse pre-built benchmark tests like reasoning, coding, math, and creative writing.',
  },
  {
    question: 'Can I test models with my own custom prompts?',
    answer:
      'Yes! In the main comparison view, type your prompt into the input box at the bottom and hit Enter. All selected models will respond simultaneously, allowing you to instantly compare style, accuracy, speed, and creativity.',
  },
  {
    question: 'What do the benchmark scores mean?',
    answer:
      'Benchmarks are standardized tests (e.g., MMLU for knowledge, GSM8K for math, HumanEval for coding) run across models. Higher percentages indicate better performance on that specific task. We show both raw scores and relative rankings for easy comparison.',
  },
  {
    question: 'How often are the models and benchmarks updated?',
    answer:
      'We update model versions and add new benchmarks as soon as they become available. Leaderboards reflect the latest public releases from providers like OpenAI, Anthropic, Google, xAI, Meta, and others. Check the "Last updated" date on each benchmark page.',
  },
]

export default function HelpBlock() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  return (
    <section className={'flex py-14'}>
      <div className={'container mx-auto'}>
        <h2 className={'font-bold border-b pb-3'}>Help Block</h2>
        <div className={'mt-10'}>
          <div className={'text-center max-w-[700px] mx-auto space-y-4'}>
            <h1 className={'text-primary font-bold'}>How can we help you?</h1>
            <p className={'text-muted-foreground'}>
              Search for answers about product comparison, specs and orders.
            </p>
            <div className={'flex gap-3 items-center mt-12'}>
              <SearchIcon className={'text-primary'} />
              <Input />
              <Button>Search</Button>
            </div>
          </div>
          <div className={'mt-10'}>
            <h3 className={'font-bold'}>Browse by category</h3>
            <div
              className={
                'grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 max-w-[1200px] mx-auto'
              }
            >
              {items.map(({ icon: Icon, ...item }, index) => (
                <div key={index} className={'border p-4 grid gap-2'}>
                  <span className={'bg-primary/10 p-4 w-fit'}>
                    <Icon className={'text-primary'} />
                  </span>
                  <h5 className={'font-bold mt-4 text-primary'}>
                    {item.title}
                  </h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={'mt-10'}>
            <h3 className={'font-bold'}>Popular articles</h3>
            <div
              className={
                'bg-muted dark:bg-transparent border rounded mt-10 max-w-[1200px] grid mx-auto'
              }
            >
              {articles.map((article, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index === currentIndex ? null : index)
                  }}
                  className={cn(
                    'px-3 py-5 transition-all h-full hover:bg-primary/10',
                    index !== 0 && 'border-t',
                  )}
                >
                  <div className={' flex justify-between gap-2'}>
                    <span className={' flex items-center gap-4'}>
                      <ClipboardListIcon />
                      <h6 className={'font-semibold'}>{article.question}</h6>
                    </span>
                    <ChevronRightIcon
                      className={cn(
                        'transition-all',
                        currentIndex === index ? 'rotate-90' : 'rotate-0',
                      )}
                    />
                  </div>
                  {currentIndex === index && (
                    <p className={'mt-4 ml-4 text-sm md:w-[80%]'}>
                      {article.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div
              className={
                'border p-8 bg-muted dark:bg-transparent mt-10 flex items-center flex-col space-y-4 lg:flex-row text-center lg:text-start justify-between gap-4 max-w-[1200px] mx-auto'
              }
            >
              <span>
                <h6 className={'font-semibold text-primary'}>
                  Still need help?
                </h6>
                <p className={'text-muted-foreground'}>
                  Our support team is available 24/7 to assist you with any
                  questions.
                </p>
              </span>
              <span className={'space-x-4'}>
                <Button>Start Live Chat</Button>
                <Button variant={'outline'}>Email Us</Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
