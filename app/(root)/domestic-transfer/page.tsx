import TransferForm from '@/components/TransferForm'
import React from 'react'

function DomesticTransfer() {
  return (
    <section className='flex flex-col scroll-smooth min-h-screen py-4'>
        <TransferForm 
  type="domestic"
/>
    </section>
  )
}

export default DomesticTransfer