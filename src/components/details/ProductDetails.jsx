import { Typography ,Box, styled, Table, TableBody, TableRow, TableCell} from "@mui/material";

import {LocalOffer as Offer} from '@mui/icons-material'
import {EventAvailable as Calendar} from '@mui/icons-material';

const SmallText = styled(Box)`
    vertical-align: baseline;
    &>p{
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledOffer = styled(Offer)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
`

const EMICalendar = styled(Calendar)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
`

const CustomRow = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    &>td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetails = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                7.5 Ratings & 25 Reviews
                <Box component="span"><img src={fassured} alt="assured-logo" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28, marginRight: '20px' }}>₹{product.price.cost}</Box>
                <Box component='span' style={{ color: '#878787', marginRight: '20px' }}><strike>₹{product.price.mrp}</strike></Box>
                <Box component='span' style={{ color: '#388e3c' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledOffer/>Get extra 55% off (price inclusive of cashback/coupon) T&C</Typography>
                <Typography><StyledOffer/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* Know More</Typography>
                <Typography><StyledOffer/>10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and above T&C</Typography>
                <Typography><StyledOffer/>10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledOffer/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><EMICalendar/>EMI starting from ₹225/month</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <CustomRow>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </CustomRow>
                    <CustomRow>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>One Year Warranty *T&C</TableCell>
                    </CustomRow>
                    <CustomRow>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component='span'  style={{color: '#2874f0'}}>MTAILMODEECOM</Box>
                            <Typography style={{fontSize: 14}}>7 day seller replacement policy/brand assistance for device issues*</Typography>
                            <Typography style={{fontSize: 14}}>GST invoice available</Typography>
                        </TableCell>
                    </CustomRow>
                    <CustomRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt='adUrl' style={{width: '390px'}}/>
                        </TableCell>
                    </CustomRow>
                    <CustomRow>
                        <TableCell style={{color: '#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </CustomRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails;