import { Button } from "@/components/ui/button"
import { bevan, robotoBold } from "@/fonts"

export const DesktopNavbar = () =>{
  return(
    <nav className="w-full z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row justify-end items-center transition duration-500`}>
        <p className={`text-[20px] text-white ${robotoBold.className} px-4`}>HOME</p>
        <p className={`text-[20px] text-white ${robotoBold.className} px-4`}>MENU</p>
        <p className={`text-[20px] text-white ${robotoBold.className} px-4`}>ABOUT</p>
        <p className={`text-[20px] text-white ${robotoBold.className} px-4`}>CONTACT</p>
        <Button variant={"simcos"}  size={'nav'} className={`${bevan.className} ml-10`}>ORDER</Button>
      </div>
    </nav>
  )
}