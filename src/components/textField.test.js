import { render, screen, fireEvent } from "@testing-library/react";
import CustomTextField from "./textField";
import { ThemeProvider } from '@mui/material';
import theme from "../theme";
// import userEvent from '@testing-library/user-event';




describe("<CustomTextField />", () => {

    test('render button', () => {
         render(<ThemeProvider theme={theme}>
            <CustomTextField />
        </ThemeProvider>);

        const text = screen.getByTestId("input-field");
        fireEvent.change(text, { target: { value: 'mudasser@gmail.com' } })
        expect(text.value).toBe('mudasser@gmail.com')

    });



});