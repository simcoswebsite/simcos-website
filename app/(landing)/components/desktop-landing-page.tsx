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
      ">
      <DesktopNavbar />
        <div className="flex pt-16 pb-16 min-h-full max-h-full flex-grow">
          <div className="
            flex 
            flex-col 
            items-stretch 
            basis-1/2
            max-h-full
            max-w-full
            flex-grow
            relative
            ">
            <div className="basis-1/2 relative flex-grow flex items-center min-h-fit min-w-fit max-h-fit">
              <Image
                alt="An image of Simco's logo"
                src="/simcos-logo.png"
                fill
                style={{objectFit:"cover",overflow:"visible"}}
                priority={true}
              />
            </div>
            <div className="flex flex-col items-center basis-1/2 relative flex-grow px-20 text-center">
              <h1 className={`text-white text-5xl m-8 mb-4 ${bevan.className}`}>HUNGRY?</h1>
              <p className={`text-white text-3xl ${robotoCondensed.className}`}>
                {`Welcome to Simco’s`}
              </p>
              <p className={`text-white text-3xl ${robotoCondensed.className}`}>
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