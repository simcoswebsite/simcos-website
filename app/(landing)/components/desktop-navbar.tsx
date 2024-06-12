import { Button } from "@/components/ui/button"
import { bevan, robotoBold } from "@/fonts"
import Link from "next/link"

export const DesktopNavbar = () =>{
  return(
    <nav className="w-full fixed max-h-min">
      <div className={`px-4 md:px-16 py-6 flex flex-row justify-end items-center transition duration-500`}>
       <Link href="/">
          <p className={`text-[20px] text-white ${robotoBold.className} px-4 hover:underline`}>HOME</p>
       </Link> 
       <Link href="/menu">
          <p className={`text-[20px] text-white ${robotoBold.className} px-4 hover:underline`}>MENU</p>
       </Link> 
       <Link href="/">
          <p className={`text-[20px] text-gray-800 ${robotoBold.className} px-4 hover:underline`}>ABOUT</p>
       </Link> 
       <Link href="/contact">
          <p className={`text-[20px] text-white ${robotoBold.className} px-4 hover:underline`}>CONTACT</p>
       </Link>
       <Link href="/signup">
          <Button variant={"simcos"}  size={'nav'} className={`${bevan.className} ml-10`}>ORDER</Button>
       </Link> 
      </div>
    </nav>
  )
}