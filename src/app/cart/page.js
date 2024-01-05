"use client"
import Image from "next/image";
import {imageUrl} from "@/config/apiUrl";
import { X } from "lucide-react";
import {useAtom} from "jotai";
import { cartAtom } from "@/components/cart/atom/cartAtom";

export default function Page() {
  const [cart, setCart] = useAtom(cartAtom);
  
  function removeItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }
  
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
      
    return (
    <main className="space-y-8">
    <section>
        <h2>Cart</h2>
        <p>Heres your book places</p>
    </section>
   

    {cart.length === 0 ? (
        <div className="bg-zinc-300 p-5 text-center">No book place yet</div>
      ) : (
        <>
          <section className="space-y-8">
            {cart.map((item, index) => {
              return (
                <div key={index} className="flex justify-between gap-4 items-center">
                  <div className="flex gap-4 items-center">
                    <Image alt={item.name} src={`${imageUrl}/tr:h-90/${item.id}/${item.featuredImage}`} width={90} height={90} className="rounded-lg " />
                    <h3>{item.name}</h3>
                  </div>
                  <div className="flex gap-4">
                    <h4>${item.price}</h4>
                    <Button onClick={() => removeItem(index)} size="sm" color="danger" isIconOnly>
                      <X size={15} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="flex justify-between border-t-1 pt-8">
            <h4>Total</h4>
            <div className="space-y-4">
              <h3>Rp. {totalPrice}</h3>
              <Button>Book</Button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
