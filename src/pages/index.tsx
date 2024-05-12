'use client'
import Head from 'next/head'
import { ReactNode } from 'react'

// layouts
import LayoutNotApp from 'src/views/layouts/LayoutNotApp'

export default function Home() {
  return (
    <>
      <Head>
        <title>TN Badminton</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

Home.getLayout = (page: ReactNode) => <LayoutNotApp>{page}</LayoutNotApp>
Home.guestGuard = false
Home.authGuard = false
