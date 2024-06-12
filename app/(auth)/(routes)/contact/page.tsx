'use client'
import { robotoCondensed, roboto } from "@/fonts"
import { Button } from "@/components/ui/button"

export default function ContactPage(){
  return(
    <div className='w-screen h-full bg-[#EBD6B7] flex flex-col'>
      <div className="flex flex-col h-full w-full basis-1/2">
        <div className="flex flex-row items-center gap-10 justify-center pt-6">
        <Button variant={"filter"} size={"tile"}>
            <div className="flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-[#EFEFEF]"></div>
              <p className={`text-[13px] text-black py-1 ${roboto.className}`}>Pick Up</p>
            </div>
        </Button>
        <Button variant={"filter"} size={"tile"}>
            <div className="flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-[#EFEFEF]"></div>
              <p className={`text-[13px] text-black py-1 ${roboto.className}`}>Devlivery</p>
            </div>
        </Button>
        </div>
      </div>
      <div className="flex flex-col bg-white h-full w-screen basis-1/2 items-center">
        <h1 className={`text-[25px] py-2 text-[#EF370D] ${robotoCondensed.className}`}>NEARBY</h1>
        <div className='bg-[#EF370D] w-full h-[3px]'></div> 
      </div>
    </div>
  )
}