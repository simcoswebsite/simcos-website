import Image from "next/image"

const Logo = () => {
  return(
    <div 
      className="
      bg-[#EBD6B7] 
      flex 
      flex-col
      relative 
      rounded-full 
      items-center 
      justify-center 
      h-[250px] 
      w-[250px]">
      <Image
        alt="An image of Simco's logo"
        // className="rounded-2xl m-[14px]"
        src="/simcos-logo.png"
        fill
      />
    </div>
  )
}

export default Logo