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
      <div className="basis-1/3 grow relative">
        <Logo />
        <Image
        alt="An image of Simco's logo"
        src="/simcos-logo.png"
        width={300}
        height={300}
        objectFit="none"
        style={{position:"absolute"}}
      />
      </div>
      <div className="relative w-full h-full basis-1/3 grow">
        <Image
          src="/grill-hot-dogs.jpg"
          className="w-full h-full"
          fill
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