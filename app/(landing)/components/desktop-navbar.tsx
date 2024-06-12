// import { Button } from "@/components/ui/button"
// import { bevan, robotoBold } from "@/fonts"
// import Link from "next/link"

// export const DesktopNavbar = () =>{
//   return(
//     <nav className="w-full fixed max-h-min hidden md:block">
//       <div className={`px-4 md:px-16 py-6 flex flex-row justify-end items-center transition duration-500`}>
//        <Link href="/">
//           <p className={`text-[20px] text-white ${robotoBold.className} px-4 hover:underline`}>HOME</p>
//        </Link> 
//        <Link href="/menu">
//           <p className={`text-[20px] text-white ${robotoBold.className} px-4 hover:underline`}>MENU</p>
//        </Link> 
//        <Link href="/">
//           <p className={`text-[20px] text-gray-800 ${robotoBold.className} px-4 hover:underline`}>ABOUT</p>
//        </Link> 
//        <Link href="/contact">
//           <p className={`text-[20px] text-white ${robotoBold.className} px-4 hover:underline`}>CONTACT</p>
//        </Link>
//        <Link href="/signup">
//           <Button variant={"simcos"}  size={'nav'} className={`${bevan.className} ml-10`}>ORDER</Button>
//        </Link> 
//       </div>
//     </nav>
//   )
// }
'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { bevan, robotoBold } from "@/fonts";
import Link from "next/link";

export const DesktopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-40 fixed max-h-min ">
      {/* Navbar for medium and larger screens */}
      <div className="hidden md:flex px-4 md:px-16 py-6 flex-row justify-end items-center transition duration-500">
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
          <Button variant={"simcos"} size={'nav'} className={`${bevan.className} ml-10`}>ORDER</Button>
        </Link>
      </div>
      {/* Navbar for small screens */}
      <div className="block md:hidden px-4 py-6 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-white">
          {/* Menu button (use an icon or text) */}
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-end px-4 py-6 bg-gray-900">
          <Link href="/">
            <p className={`text-[20px] text-white ${robotoBold.className} px-4 py-2 hover:underline`}>HOME</p>
          </Link>
          <Link href="/menu">
            <p className={`text-[20px] text-white ${robotoBold.className} px-4 py-2 hover:underline`}>MENU</p>
          </Link>
          <Link href="/">
            <p className={`text-[20px] text-gray-800 ${robotoBold.className} px-4 py-2 hover:underline`}>ABOUT</p>
          </Link>
          <Link href="/contact">
            <p className={`text-[20px] text-white ${robotoBold.className} px-4 py-2 hover:underline`}>CONTACT</p>
          </Link>
          <Link href="/signup">
            <Button variant={"simcos"} size={'nav'} className={`${bevan.className} mt-4`}>ORDER</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};