import { Link } from '@nextui-org/react'
import pkg from 'next-i18next/package.json'
import { useTranslation, Trans } from 'next-i18next'

import type { FC } from 'react'

export const Footer: FC =() => {
  const { t } = useTranslation('footer')

  return (
    <footer className='w-full text-black flex justify-center'>
      <div className='container px-2 py-4 ss:gap-2 gap-6 flex-col flex items-start ss:items-center'>
        <div className='flex ss:flex-wrap ss:flex-row flex-col ss:gap-y-2 gap-y-1 ss:divide-x-2 divide-white justify-center'>
          <span className='flex gap-2 items-center ss:px-2 first:pl-0 last:pr-0 '>
            <p>
              &copy; 2024, TuuperCove. Powered by We Got Dumped!
            </p>
          </span>
        </div>
      </div>
    </footer>
  )
}
