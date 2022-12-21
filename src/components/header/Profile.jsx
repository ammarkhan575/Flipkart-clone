import { Typography ,Box, Menu, MenuItem, styled} from "@mui/material"
import { useState } from "react";

import { PowerSettingsNewOutlined } from "@mui/icons-material";

const CustomMenu = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 10px;
`

const Profile = ({account,setAccount})=>{

    const [open,setOpen] = useState(false);

    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    const logoutUser = ()=>{
        setAccount('');
        handleClose();
    }
    return(
        <>
            <Box onClick={handleClick} style={{cursor: 'pointer'}}>
                <Typography>
                        {account}
                </Typography>
            </Box>
            <CustomMenu
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                <PowerSettingsNewOutlined color="primary" fontSize="small"/>
                    <Logout>
                        Log Out
                    </Logout>
                </MenuItem>
            </CustomMenu>
        </>
    )
}

export default Profile;