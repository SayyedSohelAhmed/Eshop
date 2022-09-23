import react from "react"
import SimpleImageSlider from "react-simple-image-slider";

const BannerCarousel=()=>{
    const images = [
        { url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/57f469b968bb40ab.jpg?q=50"},
        { url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2337a1d9e6318e5a.jpeg?q=50" },
        { url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/21b20432e1c87059.jpg?q=50" },
        { url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9e5af0a158ef19cf.jpeg?q=50" },
        { url: "https://rukminim1.flixcart.com/flap/1688/280/image/ff938f15fd1feb73.jpg?q=50" },
        // { url: "images/6.jpg" },
        // { url: "images/7.jpg" },
      ];
      return(
          <>
          <SimpleImageSlider
            // style={{width:'100%'}}
            width={1350}
            height={300}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
            
        </>
    )
}
export default BannerCarousel;