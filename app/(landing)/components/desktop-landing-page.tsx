import Image from "next/image";
import { HotDog } from "./hotdog";
import { bevan, robotoCondensed } from "@/fonts";
import { Button } from "@/components/ui/button";

export const DesktopLandingPage = () => {
  return (
      <div className="flex py-24 min-h-full max-h-full min-w-full flex-grow">
        <div className="flex flex-col items-stretch basis-1/2 max-h-full max-w-full relative">
          <div className="relative flex flex-col items-center justify-center min-h-full max-h-full">
            <div className="h-full w-full relative basis-1/2">
              <Image
                alt="An image of Simco's logo"
                src="/simcos-logo.png"
                fill
                priority={true}
                style={{objectFit:"contain"}}
              />
              </div>
            <div className="flex flex-col items-center relative px-20 text-center basis-1/2">
              <h1 className={`text-white text-3xl m-8 mb-4 ${bevan.className}`}>
                HUNGRY?
              </h1>
              <p className={`text-white text-xl ${robotoCondensed.className}`}>
                {`Welcome to Simco’s`}
              </p>
              <p className={`text-white text-xl ${robotoCondensed.className}`}>
                {`Welcome to Simco’s Home of the Worlds Largest Old Tyme Franks Serving iconic food & drink for lunch, dinner, and late-night cravings to the Boston area since 1935.`}
              </p>
              <Button
                variant={"simcos"}
                size={'nav'}
                className={bevan.className}
              >
                MENU
              </Button>
            </div>
          </div>
        </div>
        <HotDog />
      </div>
  )
}