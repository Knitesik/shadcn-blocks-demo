import { BadgeCheckIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { useState } from 'react'

export default function BannerBlock() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <section className={'flex py-14'}>
      <div className={'container mx-auto'}>
        <h2 className={'font-bold border-b pb-3'}>Banner Block</h2>
        {showBanner ? (
          <div
            className={
              'mt-10 flex items-center bg-primary/10 justify-between p-4 border'
            }
          >
            <div className={'flex items-center  gap-4'}>
              <span className={'bg-primary/10 grid rounded-full p-2 size-fit'}>
                <BadgeCheckIcon className={'fill-primary text-background'} />
              </span>
              <span>
                <h4 className={'font-semibold text-primary'}>
                  New version available
                </h4>
                <p className={'text-muted-foreground'}>
                  Check out all the new features!
                </p>
              </span>
            </div>
            <div className={'flex items-center  gap-4'}>
              <Button className={'hidden md:block'}>Learn more</Button>
              <Button variant={'ghost'} onClick={() => setShowBanner(false)}>
                <XIcon />
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => setShowBanner(true)} className={'mt-10'}>
            Show Banner
          </Button>
        )}
      </div>
    </section>
  )
}
