
import NavBar from './NavaBar';
import Banner from './Banner';

import {Box, styled} from '@mui/material'

const Components = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = ()=>{
    return (
        <>
            <NavBar/>
            <Components>
                <Banner/>
            </Components>
        </>
    )
}

export default Home;