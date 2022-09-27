 import react, { useState } from "react"
import { Rating } from "@mui/material"
const ShortProduct = ({ SectionTitle, dataForSection,}) => {
    
    const [value, setValue] = useState(1)
 
    console.log(dataForSection,"dataForSection----------------------------")

    return (
        <>
            <h1> {SectionTitle} </h1>
            <div className="main_containerOfCards" style={{ border: "1px solid red" }}>
                {dataForSection?.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="main_container" >
                                <div className="card_container" >
                                    <div className="img_container">
                                        <img className="card_img" src={item.thumbnail} alt="" data-aos="fade-up" />
                                    </div>
                                    <div>
                                        <h3 className="heading">{item.title}</h3>
                                        <div className="rating_price_container">
                                            <h5>{`$ ${item.price}`}</h5>
                                            <p className="discountPercentage">{`${item.discountPercentage}% off`}</p>
                                            <p className="rating" > <Rating
                                                name="size-small"
                                                value={value}
                                                max={1}
                                                sx={{ fontSize: "14px", color: "#FFFFFF" }}
                                            /> {item.rating} </p>
                                        </div>
                                    </div>
                                    <div className="card_description" >
                                        <p> {item.description} </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}
export default ShortProduct;