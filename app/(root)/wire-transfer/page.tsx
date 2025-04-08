import TransferForm from '@/components/TransferForm'
import React from 'react'

function WireTransfer() {
  return (
     <section className='flex flex-col scroll-smooth min-h-screen py-4'>
          <TransferForm 
  type="wire"
/>
        </section>
  )
}

export default WireTransfer