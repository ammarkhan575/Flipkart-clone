import { Box ,styled} from "@mui/material";

import Slide from "./Slide";

const Component = styled(Box)`
    display: flex;
`

const RightComponent = styled(Box)(({theme})=>({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width: '100%'
    }
}))

const LeftComponent = styled(Box)(({theme})=>({
    background: '#ffffff',
    padding: '5px',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}))

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