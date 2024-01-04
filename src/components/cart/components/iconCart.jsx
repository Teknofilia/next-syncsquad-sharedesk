"use client"
import { Badge } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import { cartAtom } from "../atom/cartAtom";
import { useAtom } from "jotai";


export const iconCart = () => {
    const [cart, setCart] = useAtom(cartAtom);
  return (
    <Badge content={cart} color="danger">
    <ShoppingBag size={24} />
    </Badge>
  )
}
