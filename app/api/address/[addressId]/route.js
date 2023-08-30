import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers'


export async function GET () {
    const supabase = createServerComponentClient({cookies})

    try {
                const { data:{user}} = await supabase.auth.getUser()

                if ( !user) throw Error ()

                const res = await prisma.addresses.findFirst({
                    where: { user_id: user?.id}
                })

                await prisma.$disconnect()
                return NextResponse.json(res)

    } catch (error) {
            
            await prisma.$disconnect()
            return new NextResponse('Somethig went wrong', {status: 400})

    }
}