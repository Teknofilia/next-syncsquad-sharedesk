"use server"

import prisma from "@/utils/prisma"

export async function actionUpdateReview({
  id,
  review,
  rating
}){
  try {
    const updateReview = await prisma.review.update({
      where: {
        id: id,
      },
      data: {
        review: review,
        rating: rating,
      },
    })
    
    return {status: true, data:updateReview}
  } catch (error) {
    console.log(error)
    return {status: false, data:{}}
  }
}