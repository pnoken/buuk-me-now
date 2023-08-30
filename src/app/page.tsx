'use client'
import { Table } from '@/components/table/table'
import { Campaigns } from '@/components/tabs/campaigns'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className='pt-10 mb-6'>
        <h1 className='font-bold leading-6'>Customers</h1>
        <p className='text-[#808785] leading-6'>See all your Customers in one place</p>
      </div>
      <Campaigns />
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Table />
      </div>
    </main>
  )
}
