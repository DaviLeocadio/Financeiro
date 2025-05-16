import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import SobreNos from "@/components/Sobre/Sobre";
import Principios from "@/components/Cards/Cards";

export default function Home() {
  return (
    <>
      {/* Banner principal */}
      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="BannerPrincipal.svg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div> */}
      <SobreNos/>
      <Principios/>
    </>
    
  );
}

