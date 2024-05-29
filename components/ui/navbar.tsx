import Image from "next/image"

const Navbar = () => {
  
  return ( 
    <nav className="flex items-center relative max-h-[20vh] justify-center w-full border-red-600 border-solid border-8">
      <Image
        alt="An image of Simco's logo"
        src="/simcos-logo.png"
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </nav>
   );
}
 
export default Navbar;