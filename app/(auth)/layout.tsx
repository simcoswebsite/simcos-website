import Navbar from "@/components/ui/navbar"

const AuthLayout = ({children} :{ children: React.ReactNode}) =>{
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      h-full 
      border-blue-600 
      border-solid 
      border-8
      bg-[#EDEDED]
      ">
      <Navbar />
      {children}
    </div>
  )
}

export default AuthLayout