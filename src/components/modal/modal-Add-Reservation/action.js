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

export async function actionSaveReview({
  review,
  userId,
  product_listingId,
  rating
}){
  try {
    const responseCreate = await prisma.review.create({
      data: {
        review,
        userId,
        product_listingId,      
        rating
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