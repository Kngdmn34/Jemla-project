import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';



export async function GET () {
   

    try {
        const { name } = context.params

       const items = await prisma.products.findMany({
         take: 5,
         where: {
            title: {
                contains: name,
                mode: 'insensitive'
            }
         }
       })
        await prisma.$disconnect();
        return NextResponse.json(items)
                
    } catch (error) {
            
            await prisma.$disconnect()
            return new NextResponse('Somethig went wrong', {status: 400})

    }
}
