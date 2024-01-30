"use server"

import prisma from "@/utils/prisma"

export async function actionSaveReservation({
  reservationDate,
  totalPrice,
  createdBy,
  userId,
  product_listingId  
}){
  try {
    const responseCreate = await prisma.reservation.create({
      data: {
        reservationDate,
        totalPrice,
        createdBy,      
        userId,
        product_listingId
      },
      select: {
        id: true        
      }
    })
    return {status: true, data:responseCreate}
  } catch (error) {
    console.log(error)
    return {status: false, data:{}}
  }
}

export async function actionSaveReservationDetail(data){  
  try {
    await prisma.reservation_Detail.createMany({
      data
    })    
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

