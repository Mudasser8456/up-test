import { Box, TextField, Typography, useTheme } from "@mui/material"
import { styled } from '@mui/material/styles';

const TextFieldWithName = (props) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                height: 53,
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{
                    width: '30%'
                }}
            >{props?.labeltext || ''}
            </Typography>
            <Box
                sx={{
                    width: '70%',
                    '& > :not(style)': { width: '100%' },
                }}
            >
                <TextField variant="standard"
                    bordercolor={theme.palette.primary.main}
                    inputProps={{ "data-testid": props.dataTestid || "input-field" }}
                    {...props}
                />
            </Box>
        </Box>
    );
}


export default TextFieldWithName;