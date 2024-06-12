import { DesktopNavbar } from "./components/desktop-navbar";

const HomeLayout = ({children} :{ children: React.ReactNode}) =>{
  return (
    <div className="
      bg-custom-gradient 
      h-full 
      flex 
      flex-col
      items-center
      max-h-full
      ">
      <DesktopNavbar />
      {children}
    </div>
  )
}

export default HomeLayout