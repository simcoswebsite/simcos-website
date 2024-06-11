'use client'
import { robotoCondensed, roboto } from "@/fonts"
import { SearchBar } from "@/components/ui/searchbar"
import { Button } from "@/components/ui/button"

export default function MenuPage(){
  return(
    <div className='w-full h-full bg-white px-8 flex flex-col'>
      <h1 className={`text-[30px] py-2 ${robotoCondensed.className}`}>MENU</h1>
      <SearchBar className={`${roboto.className}`} placeholder="〇 Search"/>
      <div className="flex py-8 justify-evenly">
        <div className="flex flex-col items-center">
          <Button variant={"filter"} size={"icon"}></Button>
          <p className={`text-[15px] py-1 ${roboto.className}`}>All</p>
        </div>
        <div className="flex flex-col items-center">
          <Button variant={"filter"} size={"icon"}></Button>
          <p className={`text-[15px] py-1 ${roboto.className}`}>Hot Dog</p>
        </div>
        <div className="flex flex-col items-center">
          <Button variant={"filter"} size={"icon"}></Button>
          <p className={`text-[15px] py-1 ${roboto.className}`}>Burger</p>
        </div>
        <div className="flex flex-col items-center">
          <Button variant={"filter"} size={"icon"}></Button>
          <p className={`text-[15px] py-1 ${roboto.className}`}>Pizza</p>
        </div>
      </div>
      <h1 className={`text-[18px] py-2 ${robotoCondensed.className}`}>PROMOTIONS</h1>
    </div>
  )
}