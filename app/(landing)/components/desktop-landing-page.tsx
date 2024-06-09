import Image from "next/image"
import { DesktopNavbar } from "./desktop-navbar"
import { HotDog } from "./hotdog"
import { bevan, robotoCondensed } from "@/fonts"
import { Button } from "@/components/ui/button"

export const DesktopLandingPage = () => {
  return(
    <div className="
        bg-custom-gradient
        min-h-screen
        max-h-screen
        min-w-full
        flex
        flex-col
        border-2
        border-green-500
      ">
      <DesktopNavbar />
        <div className="flex pt-16 min-h-full max-h-full border-2 border-white flex-grow">
          <div className="
            flex 
            flex-col 
            items-stretch 
            border-blue-700 
            border-s 
            border-2 
            basis-1/2
            max-h-full
            max-w-full
            flex-grow
            relative
            ">
            <div className="basis-1/2 relative flex-grow flex items-center  min-h-fit min-w-fit">
              <Image
                alt="An image of Simco's logo"
                src="/simcos-logo.png"
                fill
                style={{objectFit:"cover",overflow:"visible"}}
                priority={true}
              />
            </div>
            <div className="flex flex-col items-center basis-1/2 relative">
              <h1 className={`text-white text-[40px] m-8 mb-4 ${bevan.className}`}>HUNGRY?</h1>
              <p className={`text-white text-[32px]${robotoCondensed.className}`}>
                {`Welcome to Simco’s Home of the Worlds Largest Old Tyme Franks  Serving iconic food & drink for lunch, dinner, and late-night cravings to the Boston area since 1935.`}
              </p>
              <Button variant={"simcos"} size={'nav'} className={bevan.className}>MENU</Button>  
            </div>
          </div>
          <HotDog />
        </div>
    </div>
  )
}