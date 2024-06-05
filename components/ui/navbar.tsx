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
      border-red-600 
      border-solid border-8
      bg-white
      ">
      <Image
        alt="An image of Simco's logo"
        src="/simcos-logo.png"
        height={250}
        width={250}
        style={{
          border: '1px solid green',
          position: 'absolute'
        }}
      />
    </nav>
   );
}
 
export default Navbar;