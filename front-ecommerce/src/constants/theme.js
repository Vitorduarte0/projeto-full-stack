import { createTheme } from "@mui/material/styles";
import {
    neutralColor,
    primaryColor,
    PrimaryColor2,
    secondaryColor,
} from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: secondaryColor,
        },
        primary2: {
            main: PrimaryColor2,
        },
        secondary: {
            main: secondaryColor,
        },
        neutral: {
            main: neutralColor,
        },
    },
});

export default theme;
