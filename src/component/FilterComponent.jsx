import { Button } from "@mui/material"
import react,{useState} from "react"
export const FilterComponent = ({searchItem})=>{
    const [filterData,setFilterData]=useState()
    const filterItem =(category)=>{
        const updateFilterItem=searchItem.filter((item)=>{
            return item.category===category;
        });
        console.log("filter chala",updateFilterItem)
        setFilterData(updateFilterItem);
    }
    console.log("searchItem===>",searchItem)
    return (
        <>
        <div>
                <Button onClick={()=>filterItem("smartphones")} >Smart phones</Button>
                <Button >Laptop</Button>
                <Button>...</Button>
                <Button>...</Button>
            </div>
        </>
    )
}