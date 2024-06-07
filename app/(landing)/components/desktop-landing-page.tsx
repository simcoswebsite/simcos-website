import Image from "next/image"
import { DesktopNavbar } from "./desktop-navbar"
import { HotDog } from "./hotdog"
import { bevan, robotoCondensed } from "@/fonts"
import { Button } from "@/components/ui/button"

export const DesktopLandingPage = () => {
  return(
    <div className="
        bg-custom-gradient
        min-h-full
        min-w-full
        flex
        flex-col
      ">
      <DesktopNavbar />
        <div className="flex pt-16">
          <div className="
            flex 
            flex-col 
            items-center 
            border-blue-700 
            border-s 
            border-2 
            basis-1/2
            max-h-full
            max-w-full
            ">
            <Image
              alt="An image of Simco's logo"
              src="/simcos-logo.png"
              width={400}
              height={400}
              objectFit="none"
              // style={{overflow:"visible",top:"1.8125rem"}}
              priority={true}
            />
            <h1 className={`text-white text-[40px] m-8 mb-4 ${bevan.className}`}>HUNGRY?</h1>
            <p className={`text-white text-[32px]${robotoCondensed.className}`}>
              {`Welcome to Simco’s Home of the Worlds Largest Old Tyme Franks  Serving iconic food & drink for lunch, dinner, and late-night cravings to the Boston area since 1935.`}
            </p>
            <Button variant={"simcos"} size={'nav'} className={bevan.className}>MENU</Button>  
          </div>
          {/* <HotDog /> */}
        </div>
    </div>
  )
}