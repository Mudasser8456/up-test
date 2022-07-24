import { render, screen } from "@testing-library/react";
import CustomBtn from "./button";
import { ThemeProvider } from '@mui/material';
import theme from "../theme";
// import userEvent from '@testing-library/user-event';




describe("<CustomTextField />", () => {
 
    test('render button', () => {
      render(<ThemeProvider theme={theme}>
        <CustomBtn />
        </ThemeProvider>);
   
      const inputEl = screen.getByTestId("btn");
      expect(inputEl).toHaveAttribute("type", "submit");
    });
   
   
   
  });



  // import { render, screen } from '@testing-library/react';
// import App from './App';
// import { ThemeProvider } from '@mui/material';
// import theme from './theme';

// test('renders learn react link', () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>

//   );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();


// beforeEach(() => jest.clearAllMocks())
 // expect(getUser).toHaveBeenCalledTimes(1);
        // expect(getUser).toHaveBeenCalledWith();
      
// });


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


