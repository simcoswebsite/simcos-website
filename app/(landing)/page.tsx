import { DesktopLandingPage } from "./components/desktop-landing-page"
import { MobileLandingPage } from "./components/mobile-landing-page"

const LandingPage = () =>{
  return(
    //assume minimum width of 960px for desktop
    <DesktopLandingPage />
    // <MobileLandingPage />
  )
}

export default LandingPage
