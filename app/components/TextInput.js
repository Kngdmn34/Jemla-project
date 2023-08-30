'use client'

import Link from 'next/link'

export default function TextInput({ string, placeholder, error, onUpdate}) {

    return (

        <>
            <input 
                    placeholder={placeholder}
                    className='w-full bg-white text-gray-800 border text-sm border-black p-3 placeholder-gray-500 focus:outline-none focus:shadow-lg hover:shadow-md'
                    value={string || ''} 
                    onChange={(event) => onUpdate(event.target.value)}
                    type = 'text'
                    autoComplete='off'
                    
            />
                    <div className='text-red-500 text-[14px] font-semibold'>
                            {error ? (error) : null}
                    </div>
        </>
    )
}