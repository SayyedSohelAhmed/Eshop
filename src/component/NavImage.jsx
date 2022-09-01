import react from "react"
import { navData } from "../constant/data"
const NavImage = () => {
    return (
        <>
            
                <div className="navImage_container">
                    {navData.map((item, index) => {
                        return (
                            <>
                                <img  src={item.url} alt="" width='5%' />
                                <p>{item.text}</p>
                            </>
                        )
                    })}
                </div>
            
        </>
    )
}
export default NavImage;