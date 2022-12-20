import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SuppliersPageContent } from './components/SuppliersPageContent'

const Suppliers: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <SuppliersPageContent />
    </div>
  )
}

export default Suppliers
