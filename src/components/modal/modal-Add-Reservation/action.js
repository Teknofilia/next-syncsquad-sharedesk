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
    await prisma.reservation.create({
      data: {
        reservationDate,
        totalPrice,
        createdBy,      
        userId,
        product_listingId
      }
    })
    
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}