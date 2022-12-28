
import {Button, ButtonGroup, styled} from '@mui/material'

const Wrapper = styled(ButtonGroup)`
    margin-top: 30px;
`

const StyledButton = styled(Button)`
    border-radius: 50%;
`

const CartButton = ()=>{
    return(
        <Wrapper>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </Wrapper>
    )
}

export default CartButton;