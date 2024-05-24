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
      h-[253px] 
      w-[253px]
    ">
      <Image
        alt="An image of Simco's logo"
        src="/simcos-logo.png"
        fill
        objectFit="none"
      />
    </div>
  )
}

export default Logo