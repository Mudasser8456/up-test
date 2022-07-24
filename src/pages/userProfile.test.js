import { render, screen, fireEvent } from "@testing-library/react";
import UserProfile from "../pages/userProfile";
import { ThemeProvider } from '@mui/material';
import theme from "../theme";
// import { getUser, updateUser } from '../features/userProfileApis'
import { wait } from "@testing-library/user-event/dist/utils";
// import userEvent from '@testing-library/user-event';

jest.mock('../features/userProfileApis')


describe("user profile detail", () => {
    beforeEach(() => jest.clearAllMocks())
    test('user profile', async () => {
        // getUser.mockResolvedValue({ ok: true });
        // updateUser.mockResolvedValue({username: 'mudasser@gmail.com'});

        render(<ThemeProvider theme={theme}>
            <UserProfile />
        </ThemeProvider>);

        const text = screen.getByTestId("profile-user-email");
        const submitBtn = screen.getByTestId("user-profile-update");
        fireEvent.change(text, { target: { value: 'test@gmail.com' } });
        fireEvent.click(submitBtn);
        // expect(text.value).toBe('test@gmail.com');
        // expect(getUser).toHaveBeenCalledTimes(1);
        // expect(getUser).toHaveBeenCalledWith();
        // expect(updateUser).toHaveBeenCalledTimes(1);
        // expect(updateUser).toHaveBeenCalledWith({username: 'mudasser@gmail.com'});


        await wait(() => null)

    });



});



// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import App from '../pages/userProfile';
// import axios from 'axios';
// import { ThemeProvider } from '@mui/material';
// import theme from "../theme";
// // Mock jest and set the type
// jest.mock('axios');
// const mockedAxios = axios

// describe('App', () => {
//   const renderComponent = () => (render(<App />));

//   test('renders learn react link', async () => {

//     const { getByText, getAllByRole } = renderComponent();

//     // Provide the data object to be returned
//     mockedAxios.get.mockResolvedValue({
//       data: [
//         {
//           id: 1,
//           name: 'Joe Doe'
//         },
//         {
//           id: 2,
//           name: 'Jane Doe'
//         }
//       ],
//     });

//     fireEvent.click(getByText('Get users'));

//     await waitFor(() => {
//       const userList = getAllByRole('listitem');
//       expect(userList).toHaveLength(2);
//       expect(userList[0]).toHaveTextContent('Joe Doe');
//       expect(userList[1]).toHaveTextContent('Jane Doe');
//     });
//   });
// })