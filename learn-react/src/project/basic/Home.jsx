import Footer from "./Footer.jsx"
import Heropage from "./Heropage.jsx"
import OurProject from "./OurProject.jsx"
import Headers from "./Headers.jsx"

function Home(){


    return(
        <div className="w-full m-auto ">

            <Headers/>
            <Heropage/>
            <OurProject/>
            <Footer/>
        </div>
    )
}

export default Home