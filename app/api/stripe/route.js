import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers'


export async function POST (req) {
    const supabase = createServerComponentClient({cookies})

    try {
                const { data:{user}} = await supabase.auth.getUser()

                if ( !user) throw Error ()

               const body = await req.json()
               const stripe = new Stripe(process.env.STRIPE_SK_KEY || '')
              
                const res = await stripe.payamentIntents.create({
                    amount: Number(body.amount),
                    currency: 'mad',
                    automatic_payment_methods: { enabled: true}
                })
                
                return NextResponse.json(res)

    } catch (error) {
            
            await prisma.$disconnect()
            return new NextResponse('Somethig went wrong', {status: 400})

    }
}
