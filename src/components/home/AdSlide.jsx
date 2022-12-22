import { Box ,styled} from "@mui/material";

import Slide from "./Slide";

const Component = styled(Box)`
    display: flex;
`

const RightComponent = styled(Box)`
    width: 83%
`

const LeftComponent = styled(Box)`
    background: #ffffff;
    padding : 5px;
`

const AdSlide = ({products, title, timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
            <LeftComponent>
                <img src={adURL} alt='ad' style={{width:271}}/>
            </LeftComponent>
            <RightComponent>
                <Slide products={products} title={title} timer={timer}/>
            </RightComponent>
        </Component>
    )
}

export default AdSlide;