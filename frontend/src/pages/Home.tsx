
import { Hero } from "@/components/hero";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function Home(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
    return(
        <div>
            {/* <Navbar className="top-2 "  /> */}
            <Hero />
            <div className="bg-gray-900 text-white font-sans">


     

    
    </div>
    {/* <Footer /> */}
        </div>
    )
}

export default Home;