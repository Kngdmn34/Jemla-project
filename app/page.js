'use client'

import MainLayout from '@/app/layouts/MainLayout'
import CarouselComp from '@/app/components/CarouselComp'
import Product from '@/app/components/Product'
export default function Home() {
 
  const products  = [
    {
        id: 1,
        title: 'Xbox Series X',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'https://picsum.photos/id/10',
        price: '20'
    },
    {
        id: 2,
        title: 'PlayStation 5 ',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'https://picsum.photos/id/20',
        price: 700
    }
]

  return (
    <MainLayout>
        <CarouselComp /> 
        <div className='max-w-[1200px] mx-auto'>
          <div className='text-2xl font-bold mt-4 mb-6 px-4'>
            Products
          </div>
          <div className='grid grid-cols-5 gap-4'>
              {products?.map(product => (

                <Product key={product.id} product={product} /> 
              ))}
          </div>
        </div>
    </MainLayout>
  )
    
}
