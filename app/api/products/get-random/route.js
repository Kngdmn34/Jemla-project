import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';



export async function GET () {
   

    try {
            const productsCount = await prisma.products.count();
            const skip = Math.floor(Math.random() * productsCount)

            const products = await prisma.products.findMany({
                take: 5,
                skip: skip,
                orderBy: { id: 'asc'}
            })
        await prisma.$disconnect();
        return NextResponse.json(products)
                
    } catch (error) {
            
            await prisma.$disconnect()
            return new NextResponse('Somethig went wrong', {status: 400})

    }
}
