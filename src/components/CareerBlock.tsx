import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { ChevronRightIcon, SearchIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { useState } from 'react'
import { cn } from '@/lib/utils.ts'
import { Input } from '@/components/ui/input.tsx'

const careers = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
  },
  {
    title: 'AI Research Scientist',
    department: 'Research',
    location: 'San Francisco, CA',
  },
  {
    title: 'Product Manager - Model Comparison',
    department: 'Product',
    location: 'New York City, NY',
  },
  {
    title: 'Head of Growth Marketing',
    department: 'Marketing',
    location: 'Remote (Global)',
  },
  {
    title: 'Site Reliability Engineer',
    department: 'Infrastructure',
    location: 'Austin, TX',
  },
  {
    title: 'Data Analyst - Benchmarks',
    department: 'Data',
    location: 'Remote (EU)',
  },
]

export default function CareerBlock() {
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [department, setDepartment] = useState('')
  const [search, setSearch] = useState('')

  return (
    <section className={'flex py-14'}>
      <div className={'container mx-auto flex flex-col'}>
        <h2 className={'font-bold border-b pb-3'}>Career Block</h2>
        <div className={'mt-10 lg:w-2/3 mx-auto w-full'}>
          <div className={'flex gap-3 items-center '}>
            <div className={'w-full'}>
              <Select
                key={department}
                value={department}
                onValueChange={setDepartment}
              >
                <SelectTrigger className="w-full rounded-full">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <Button
                    variant={'ghost'}
                    disabled={!department}
                    onClick={() => setDepartment('')}
                    className={'w-full'}
                  >
                    Clear
                  </Button>
                  {Array(
                    ...new Set(careers.map((career) => career.department)),
                  ).map((department) => (
                    <SelectItem value={department}>{department}</SelectItem>
                  ))}
                  {/*<SelectItem value="system">System</SelectItem>*/}
                </SelectContent>
              </Select>
            </div>
            <div
              // variant={'secondary'}
              onClick={() => isSearchActive || setIsSearchActive(true)}
              className={cn(
                'bg-transparent flex dark:bg-input/30 items-center border w-fit overflow-hidden rounded-full pr-4',
              )}
            >
              <Input
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                className={cn(
                  'active:border-none focus:ring-0! origin-right transition-all bg-transparent! active:ring-0  border-none',
                  isSearchActive ? 'w-[250px]' : 'w-0',
                )}
              />
              <div
                className={cn(
                  'size-fit transition-all text-muted-foreground',
                  isSearchActive
                    ? 'translate-x-0'
                    : '-translate-x-2 sm:-translate-x-1.5',
                )}
              >
                {isSearchActive ? (
                  <XIcon
                    onClick={() => {
                      setSearch('')
                      setIsSearchActive(false)
                    }}
                  />
                ) : (
                  <SearchIcon />
                )}
              </div>
            </div>
          </div>
          <div className={'grid gap-4 mt-6'}>
            {careers
              .filter((pred) =>
                pred.department
                  .toLowerCase()
                  .includes(department.toLowerCase()),
              )
              .filter(
                (pred) =>
                  pred.title.toLowerCase().includes(search.toLowerCase()) ||
                  pred.department
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  pred.location.toLowerCase().includes(search.toLowerCase()),
              )
              .map((career, index) => (
                <div
                  key={index}
                  className={
                    'border p-7 flex flex-col w-full sm:flex-row sm:items-center hover:bg-muted justify-between gap-4 rounded-xl'
                  }
                >
                  <h5 className={'font-bold'}>{career.title}</h5>
                  <div
                    className={
                      'flex items-baseline flex-col sm:flex-row text-muted-foreground gap-2 sm:gap-6 font-mono'
                    }
                  >
                    <p className={'text-sm'}>{career.department}</p>
                    <p className={'uppercase'}>{career.location}</p>
                  </div>
                  <div className={'flex gap-3 items-center'}>
                    <span className={'bg-input grid border p-2 rounded-full'}>
                      <ChevronRightIcon size={12} />
                    </span>
                    <p>Apply</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
