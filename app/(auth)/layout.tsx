import Navbar from "@/components/ui/navbar"

const AuthLayout = ({children} :{ children: React.ReactNode}) =>{
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      h-full 
      bg-[#EDEDED]
      ">
      <Navbar />
      {children}
    </div>
  )
}

export default AuthLayout