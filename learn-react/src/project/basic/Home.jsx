import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import HeroSection from "./HeroSection.jsx"
import OurProject from "./OurProject.jsx"

function Home(){


    return(
        <div className="w-full m-auto ">

            <Header/>
            <HeroSection/>
            <OurProject/>
            <Footer/>
        </div>
    )
}

export default Home