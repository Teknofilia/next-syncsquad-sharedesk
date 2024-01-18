
import { Headerhome } from "@/components/sharedUI/headerhome";
import { dataFocusVisibleClasses } from "@nextui-org/react";
import Image from "next/image";



export default async function Home() {
  return (
    <main className="max-w-5xl m-auto py-8 space-y-20">
      <Headerhome />
      <section className="text-center w-[700px] m-auto space-y-2">
        <h1>
          Temukan <span className="text-emerald-600 animate-pulse">Working Space</span> Favoritmu Di Sini...
        </h1>
        <p>
        Kami menyediakan berbagai tempat dengan lingkungan yang kolaboratif dan inovatif, di mana setiap individu dapat mengekspresikan kreativitas dan keahlian mereka, menciptakan pengalaman kerja yang dinamis dan kreativ.
                  </p>
      </section>
    
    
<section className="py-10 grid grid-cols-3 grid-rows-2 gap-4 p-4 m-auto">
    <div className="row-span-2 col-span-2 flex max-w-full"><Image src="/assets/ws1.jpg" width={725} height={300} alt="pic" /></div>
    <div > <Image src="/assets/ws2.jpg" width={325} height={275} alt="pic" /></div>
    <div className="col-start-2 row-start-2"><Image src="/assets/ws3.jpg" width={325} height={275} alt="pic" /></div>
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
    </main>
  );
}
