import Image from "next/image"

const Navbar = () => {
  
  return ( 
    <nav className="
      flex 
      items-center 
      relative 
      min-h-[20vh] 
      justify-center 
      w-full 
      bg-white
      border-black 
      border-solid 
      border-b-2
      ">
      <Image
        alt="An image of Simco's logo"
        src="/simcos-logo.png"
        height={250}
        width={250}
        style={{
          position: 'absolute'
        }}
      />
    </nav>
   );
}
 
export default Navbar;