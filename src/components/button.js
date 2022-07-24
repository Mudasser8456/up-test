import { Button } from "@mui/material"

const CustomBtn = ({ btnText, btnType, eventType, dataTestid, onClick }) => {
    return (
        <Button sx={{
            textTransform: 'unset'
        }} variant={btnType} type={eventType ? '' : 'submit'} color={'primary'}
            data-testid={dataTestid || 'btn'}
            onClick={onClick}
        >{btnText}</Button>
    );
}


export default CustomBtn;




