import { createTheme } from '@mui/material';
import { common, grey, deepPurple, orange } from '@mui/material/colors';


export const DarkTheme = createTheme({
    palette: {
        background: {
            default: grey[900],
            paper: grey[800]
        },
        primary: {
            main: deepPurple[500],
            dark: deepPurple[800],
            light: deepPurple[400],
            contrastText: common.white
        },
        secondary: {
            main: orange[700],
            dark: orange[800],
            light: orange[500],
            contrastText: common.white
        },
    },
    typography: {
        allVariants: {
            color: common.white
        }
    }
});