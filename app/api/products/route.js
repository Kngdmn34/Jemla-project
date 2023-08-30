import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';



export async function GET () {
   

    try {
        

        const products = await prisma.products.findMany()
        await prisma.$disconnect();
        return NextResponse.json(products)
                
    } catch (error) {
            
            await prisma.$disconnect()
            return new NextResponse('Somethig went wrong', {status: 400})

    }
}
