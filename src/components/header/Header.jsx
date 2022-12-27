import { useState } from 'react';


import {AppBar, Toolbar, Typography, Box, IconButton, styled, Drawer, List, ListItem} from '@mui/material'

// components
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Menu} from '@mui/icons-material'

import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10
})

const ButtonWrapper = styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}))

const MenuButton = styled(IconButton)(({theme})=>({
    display: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{
        display: 'block',
        marginLeft: 'auto'
    }
}))



const Header = ()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }


    return (
        <StyledHeader>
            <Toolbar style={{minHeight: 55 }}>
                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{width:75}}/>
                    <Box style={{display: 'flex'}}> 
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#ffe500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='subLogo'/>
                    </Box>
                </Component>
                <Search/>

                <MenuButton onClick={handleOpen}>
                    <Menu/>
                </MenuButton>
                <Drawer open={open} onClose={handleClose} anchor='right'>
                    <Box style={{width: 200}} onClick={handleClose}>
                        <List>
                            <ListItem>
                                <CustomButtons/>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>

                <ButtonWrapper>
                    <CustomButtons/>
                </ButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
};

export default Header;