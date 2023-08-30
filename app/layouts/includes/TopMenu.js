'use client'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
import { BsChevronDown} from 'react-icons/bs'
import {useUser } from '@/app/context/user'
import { useState } from 'react'
import { useCart } from '@/app/context/cart';

export default function TopMenu () {

    const user = useUser();
    const cart = useCart()

    const [isMenu, setIsMenu] = useState(false)

    const isLoggedIn = () => {
        if (user && user?.id) {
            return (
            <button
                onClick={() => !isMenu ? setIsMenu(true): setIsMenu(false)}
                className='flex items-center gap-2 hover:underline cursor-pointer'
            >
                <div>Hi, {user.name}</div>
                <BsChevronDown />
            </button>
            )
        }
        return (
            <Link href='/auth' className='flex items-center gap-2 hover:underline cursor-pointer'>
                                <div>Login</div>
                                <BsChevronDown /> 
            </Link>
        )

    }

    return (
        <>
            <div id='TopMenu' className="border-b">

                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul 
                        id = 'TopMenuLeft'
                        className="flex items-center text-[11px] text-black px-2 h-8"
                    >
                        <li className="relative px-3">
                            {isLoggedIn()}
                            <div id='AuthDropdown'
                                 className={` absolute bg-white w-[200px] text-black z-40 top-[20px] left-0 border shadow-lg ${isMenu? 'visible' : 'hidden'}` }
                            >
                                <div className='flex items-center justify-start gap-1 p-3'>
                                    <img width={50} src ={user?.picture} alt='avatar' className='rounded-full'/> 
                                    <div className='font-bold text-[13px]'> Anas </div>
                                </div>

                                <div className='border-b'>
                                    <ul className='bg-white font-bold'>
                                        <li className='text-[11px] py-2 px-4 w-full hover:underline text-yellow-600 hover:text-yellow-700 cursor-pointer'>
                                            <Link href='/orders'>
                                                My Orders
                                            </Link>
                                        </li>
                                        <li 
                                            onClick={() => {user.signOut(); setIsMenu(false)}}
                                            className='text-[11px] py-2 px-4 w-full hover:underline text-yellow-600 hover:text-yellow-700 cursor-pointer'
                                            >
                                            Sign Out
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                                Trending
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                                Help & Contact
                        </li>
                    </ul>
                    <ul 
                        id='TopMenuRight'
                        className='flex items-center text-[11px] text-black px-2 h-8'
                    >
                        <li className='flex items-center gap-2 px-3 hover:underline cursor-pointer'>
                            <img width={32} alt='flag' src='/images/mar.png'/>
                            
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                            <div className='relative'>
                                <AiOutlineShoppingCart size={22} />

                                {cart.cartCount() > 0 ? 
                                    <div className='absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white'>
                                        <div className='flex items-center justify-center -mt-[1px]'>
                                                {cart.cartCount()}
                                        </div>
                                    </div>    
                                : 
                                <div></div>}

                                
                            </div>
 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}