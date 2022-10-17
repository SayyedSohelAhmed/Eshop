const filterItem = (category,setFilter,data) => {
    let tempArr = data.filter(
        (item) => {
            return (item.category === category)
        })
    console.log("ye temArr hai", tempArr)
    setFilter(tempArr)
}
export default filterItem;

// import react, { useState } from "react"
// import Box from '@mui/material/Box';
// import Tabs, { tabsClasses } from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Button } from "@mui/material";
// const DropVertical = () => {
//     const [tempData,setTempData]=useState([])
//     const [tempFilter,setTempFilter]=useState([])

//     const [value, setValue] = useState(0);

//     const handleChange = (event, newValue) => {
//       setValue(newValue);

//       const filterItem = (category,setFilter, data) => {
//         setTempData(data);
//         let tempArr = data.filter(
//             (item) => {
//                 return (item.category === category)
//             })
//         console.log("ye temArr hai", tempArr)
//         setFilter(tempArr)
//     }
//     };
//         return (
//             <>
//                 <h1> hi drop down</h1>
//                 <Box
//                     sx={{
//                         flexGrow: 1,
//                         maxWidth: { xs: 320, sm: 480 },
//                         bgcolor: 'background.paper',
//                     }}
//                 >
//                     <Tabs
//                         value={value}
//                         onChange={handleChange}
//                         variant="scrollable"
//                         scrollButtons
//                         aria-label="visible arrows tabs example"
//                         sx={{
//                             [`& .${tabsClasses.scrollButtons}`]: {
//                                 '&.Mui-disabled': { opacity: 0.3 },
//                             },
//                         }}
//                     >
//                         <Button onClick={() => setTempFilter(tempData)} > All Products</Button>
//                         <Tab label="Item Two" />
//                         <Tab label="Item Three" />
//                         <Tab label="Item Four" />
//                         <Tab label="Item Five" />
//                         <Tab label="Item Six" />
//                         <Tab label="Item Seven" />
//                     </Tabs>
//                 </Box>
//             </>
//         )
//     }
//     export default DropVertical;