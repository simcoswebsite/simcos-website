import { Button } from "@/components/ui/button"
import Logo from "@/components/ui/logo"
import Link from "next/link"
import Image from 'next/image'

const LandingPage = () =>{
  return(
    <div className="
      bg-[#EF370D] 
      min-h-screen 
      min-w-screen 
      flex 
      flex-col 
      items-center 
      justify-center
    ">
      <div className="
        basis-1/3 
        relative 
        grow 
        min-w-full 
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
      <div className="relative basis-1/3">
        <Image
          src="/grill-hot-dogs.jpg"
          height={305}
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
          items-center 
          justify-items-center
        ">
          <h1 className="text-white font-bold text-[40px]">Hungry?</h1>
          <Button variant={"simcos"}>Get Started</Button>
          {/* hi */}
      </div>
    </div>
  )
}

export default LandingPage
