import react from "react"
import bootstrap from 'bootstrap'


 const Carousel = () => {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={'https://rukminim1.flixcart.com/fk-p-flap/844/140/image/bd8625be49f192e8.jpg?q=50'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/656736490f797304.jpg?q=50'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2337a1d9e6318e5a.jpeg?q=50'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9e5af0a158ef19cf.jpeg?q=50'} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Carousel;