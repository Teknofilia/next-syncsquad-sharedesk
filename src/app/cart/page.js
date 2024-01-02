"use client"
import Image from "next/image";
import { X } from "lucide-react";


export default function Page() {
  
  function removeItem(index) {
    const newCart = [...cart];
    newCart splice(index, 1);
    setCart(newCart);
  }
  
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  
  
  
    return (
    <main className="space-y-8">
    <section>
        <h2>Cart</h2>
        <p>Heres your book place</p>
    </section>
   

    {cart.length === 0 ? <div className="bg-zinc-500 p-5 text-center">No places booked in cart</div> : <> <section className="space-y-4">
        {cart.map((item, index) => {
            return(
            <div key={index} className="flex justify-between gap-4 items-center">
            <div className="flex gap-4 items-center">        
            <Image alt={item.name} src={} width={240} height={400} className="rounded-lg" />
            <h3>{item.name}</h3>
            </div>
            <div className="flex gap-4">
            <h3>Rp.{item.price}</h3>
            <Button onClick={()=> removeItem(index)} size="sm" color="danger" isIconOnly>
                <x size={15}/>
            </Button>
            </div>
            </div>
            );
        })}
    </section>
    <section className="flex justify-between border-t-1 pt-8">
        <h4>Total</h4>
        <div className="space-y-4">
        <Button>Book</Button>
        <h3>Rp.{totalPrice}</h3>
        </div>
        
    </section></>}
    </main>
  )
}
