import { orange } from "@mui/material/colors";

import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
      mode: "dark",
  
      primaryColor: {
        main: '#FFFFFF',
        light: '#343648'
      },
  
      tertiary: {
        main: '#27293C',
        light: '#525463'
      }
    },
    weight1: {
      fontWeight: 700,
    },
    typography: {
      fontFamily: "Lato",
      allVariants: { color: "#FFFFFF" },
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: "#444454",
  
            "&.MuiTableCell-head": {
              lineHeight: "22px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
  
        variants: [
          {
            props: { color: "primary" },
            style: {
              color: "#FFFFFF",
              fontSize: "14px",
              lineHeight: "17px",
              height: 35
            },
          },
        ],
      },
      MuiTextField: {
        variants: [
          {
            props: { color: "primary" },
            style: {
              "& .MuiOutlinedInput-notchedOutline": {
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
              },
            },
          },
        ],
      },
      MuiSelect: {
        variants: [
          {
            props: { color: "primary" },
            style: {
              "& .MuiOutlinedInput-notchedOutline": {
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
              },
            },
          },
          {
            props: { size: "medium" },
            style: {
              "&.MuiInputBase-root": {
                height: 48,
              },
            },
          },
        ],
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: "#1E1E2E",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "rgba(77, 125, 242, 0.3)",
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "rgba(77, 125, 242, 0.3)",
            },
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "rgba(77, 125, 242, 0.3)",
            },
          },
        },
      },
    },
  });

export default theme;