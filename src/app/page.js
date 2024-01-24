import { Headerhome } from "@/components/sharedUI/headerhome";
import Image from "next/image";
import {
  Dices,
  Projector,
  AirVent,
  CookingPot,
  Wifi,
  Bean,
} from "lucide-react";

export default async function Home() {
  //const data = await getData();
  return (
    <main className="max-w-5xl m-auto py-8 space-y-10">
      <Headerhome />
      <section className="text-center w-[700px] m-auto space-y-2 pb-1">
        <h1>
          Temukan{" "}
          <span className="text-emerald-600 animate-pulse">Working Space</span>{" "}
          Favoritmu Di Sini...
        </h1>
        <p className="text-zinc-400">
          Kami menyediakan berbagai tempat dengan lingkungan yang kolaboratif
          dan inovatif, di mana setiap individu dapat mengekspresikan
          kreativitas dan keahlian mereka, menciptakan pengalaman kerja yang
          dinamis dan kreatif.
        </p>
      </section>

      <section className="py-10 grid grid-cols-3 grid-rows-2 gap-2 p-0 m-auto">
        <div className="row-span-2 col-span-2 flex max-w-full">
          <Image className= "rounded-lg shadow-md" src="/assets/ws1.jpg" width={670} height={420} alt="pic" />
        </div>
        <div>
          <Image className= "rounded-lg shadow-md" src="/assets/ws2.jpg" width={336} height={275} alt="pic" />
        </div>
        <div className="col-start-3 row-start-2">
          <Image  className= "rounded-lg shadow-md" src="/assets/ws3.jpg" width={336} height={275} alt="pic" />
        </div>
      </section>
    
      <section className="py-10 bg-gray-100 rounded-lg border-2 border-zinc-300 shadow-md">
        <div className="grid grid-cols-2 gap-8 p-2 px-4">
          <div className="p-2">
            <h2 className="text-3xl font-bold mb-6">Kenapa Sharedesk?</h2>
            <p className="text-gray-600 mb-6">Sharedesk menyiapkan ratusan ruang agar kamu menemukan ruang kerja yang ideal</p>
            <div className="flex items-center mb-4">
              <h3 className="text-6xl font-bold text-blue-500 mr-4">600+</h3>
              <p className="text-gray-600">Ruang Kerja di seluruh Indonesia</p>
            </div>
            <div className="flex items-center">
              <h3 className="text-6xl font-bold text-blue-500 mr-4">135+</h3>
              <p className="text-gray-600">Staff yang siap membantu Anda</p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <i className="fas fa-calendar-check fa-3x text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Reservasi Mudah</h3>
              <p className="text-gray-600">Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.</p>
            </div>
            <div>
              <i className="fas fa-clock fa-3x text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Waktu yang Fleksibel</h3>
              <p className="text-gray-600">Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.</p>
            </div>
            <div>
              <i className="fas fa-paint-roller fa-3x text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Kustomisasi Ruang</h3>
              <p className="text-gray-600">Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 border-2 shadow-md border-zinc-300  bg-gray-100 rounded-lg">
        <div className="grid grid-cols-3 grid-rows-3 gap-5 p-4">
          <div className="row-span-3">
            <h2 className="text-3xl text-black font-bold mb-2">Fasilitas</h2>
            <p className="text-gray-600">fasilitas apa saja yang ada di sharedesk ? </p>
          </div>
          <div>
            <Wifi color="#009688" size={34}/>
            <h3>Wifi</h3>
            <p className="text-gray-600">Wifi yang extra kebut ga bakalan buat mood kamu hancur 😊</p>
          </div>
          <div>
            <CookingPot color="#009688" size={34}/>
            <h3>Pantry</h3>
            <p className="text-gray-600">Ada pantry yang siap siaga bisa kamu gunakan</p>
          </div>
          <div className="col-start-2 row-start-2">
            <AirVent color="#009688" size={34}/>
            <h3>Full Ac</h3>
            <p className="text-gray-600">Ruangan yang full ac tidak akan buat harimu gerah 🥶</p>
          </div>
          <div className="col-start-3 row-start-2">
            <Projector color="#009688" size={34}/>
            <h3>Projector</h3>
            <p className="text-gray-600">Presentasi dengan layar yang lebih besar menggunakan projector kami</p>
          </div>
          <div className="col-start-2 row-start-3">
            <Dices color="#009688" size={34}/>
            <h3>Board Game</h3>
            <p className="text-gray-600">Bosen ? serukan waktumu dengan bermain board game 🐲</p>
          </div>
          <div className="col-start-3 row-start-3">
            <Bean color="#009688" size={34}/>
            <h3>Bean Bag</h3>
            <p className="text-gray-600">Kamu juga bisa relax menggunakan bean bag yang kami sediakan</p>
          </div>
        </div>
      </section>

      <section class="px-4 border-2 shadow-md border-zinc-300  bg-gray-100 rounded-lg p-4">
        <div class="mx-auto max-w-3xl text-center">
          <h3 class="mb-6 text-3xl font-bold">Testimoni</h3>
          <p class="mb-6 pb-2 text-zinc-800 text-xl dark:text-neutral-300 md:mb-12">
            Apa kata mereka yang sudah coba sharedesk  
          </p>
        </div>
        <div class="grid gap-12 text-center md:grid-cols-2">
          <div class="mb-6 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
              "Tempat nya nyaman, sejuk cocok buat aku yang sering meeting sama client"
            </p>
            <p class="italic">- Anna Watson</p>
          </div>
        
          <div class="mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
              "God damn tempatnya bagus untuk remote worker seperti aku"
            </p>
            <p class="italic">- Lukker saint feller</p>
          </div>
        </div>
      </section>    
<footer className="">
  <div className="text-center">&copy; Copyright Syncsquad 2024</div>
</footer>
     </main>
  );
}
