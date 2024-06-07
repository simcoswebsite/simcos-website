import { Button } from "@/components/ui/button"
import Logo from "@/components/ui/logo"
import Link from "next/link"
import Image from 'next/image'
import { bevan } from '@/fonts'

export const MobileLandingPage = () => {
  return(
    <div className="
      bg-[#EF370D] 
      min-h-screen 
      min-w-screen 
      flex 
      flex-col 
      items-center 
      justify-start
      border-solid 
        border-2 
        border-green-300
    ">
      <div className="
        basis-1/3 
        relative 
        grow 
        min-w-full
        max-h-[20vh] 
        border-solid 
        border-2 
        border-white
        flex
        flex-col
        items-center 
        justify-items-center
        ">
          <Logo />
      </div>
      <div className="basis-1/3">
        <Image
          src="/grill-hot-dogs.jpg"
          height={350}
          width={435}
          alt="Picture of hot dogs on a grill" 
        />
      </div>
      <div 
        className="
          bg-gradient-to-tr from-[#3D3D3DDB] to-[#3D3D3D] 
          min-w-full
          basis-1/3 
          grow 
          flex 
          flex-col
          border-solid 
          border-2 
        border-white 
          items-center 
          justify-items-center
        ">
          <h1 className={`text-white text-[40px] m-8 mb-4 ${bevan.className}`}>HUNGRY?
          </h1>
          <Link href="/signup">
            <Button variant={"simcos"} size={"xl"} className={bevan.className}>GET STARTED</Button>
          </Link>
          {/* hi */}
      </div>
    </div>
  )
}