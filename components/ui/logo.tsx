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
      justify-items-center 
      h-58 
      w-58
      overflow-visible
    ">
      <Image
        alt="An image of Simco's logo"
        src="/simcos-logo.png"
        fill
        objectFit="none"
        style={{overflow:"visible",top:"1.8125rem"}}
      />
    </div>
  )
}

export default Logo