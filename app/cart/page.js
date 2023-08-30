'use client'

import MainLayout from '@/app/layouts/MainLayout'
import SimilarProducts from '@/app/components/SimilarProducts'
import CartItem from '@/app/components/CartItem'
import {useCart} from '@/app/context/cart'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ClientOnly from '@/app/components/ClientOnly';
import UseIsLoading from '@/app/hooks/useIsLoading'

export default function Cart() {

    const router = useRouter()
    const cart = useCart()

    useEffect(() => {
        UseIsLoading(true)
        cart.getCart()
        cart.cartTotal()
        UseIsLoading(false)
    }, [cart])
       
    const goToCheckout = () => {
        if (!cart.cartTotal()) {
            alert('Empty Cart')
            return
        }
        router.push('/checkout')
    }

   
       

    return (
        <>

            <MainLayout>
                <div className='max-w-[1200px] mx-auto mb-8 min-h-[300px]'>
                        <div className='text-2xl font-bold my-4'>Shopping cart</div>
                        <div className='relative flex items-baseline justify-between gap-2'>
                                <ClientOnly>
                                <div className='w-[65%]'>
                                    {cart.getCart().map(product => (
                                            <CartItem key={product.id} product={product}/>
                                    ))}
                                    
                                </div>
                                </ClientOnly>
                                <div id='GoToCheckout' className='md:w-[33%] absolute top-0 right-0 m-2'>
                                     <ClientOnly>
                                     <div className='bg-white p-4 border'>
                                                <button 
                                                    onClick = {() => goToCheckout()}
                                                    className='flex items-center justify-center bg-green-600 w-full text-white font-semibold p-3 rounded-full mt-4 hover:underline hover:opacity-80'
                                                
                                                >
                                                        Checkout
                                                </button>
                                                
                                                <div className='flex items-center justify-between mt-4 text-sm mb-1'>
                                                        <div>Items ({cart.getCart().length})</div>
                                                        <div>{(cart.cartTotal() * 10).toFixed(2)}MAD</div>
                                                </div>

                                                <div className='flex items-center justify-between mb-4 text-sm '>
                                                        <div>Shipping: </div>
                                                        <div>Free</div>
                                                </div>
                                                <div className='border-b border-gray-300'/>

                                                <div className='flex items-center justify-between mt-4 mb-1 text-lg font-semibold'>
                                                    <div>Subtotal:</div>
                                                    <div>{(cart.cartTotal() * 10).toFixed(2)} MAD</div>
                                                </div>
                                        </div>
                                        </ClientOnly>   
                                </div>
                        </div>
                </div>
                <SimilarProducts />
            </MainLayout>

        </>
    )
}