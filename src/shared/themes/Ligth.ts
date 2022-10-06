import { createTheme } from '@mui/material';
import { common, deepPurple, orange } from '@mui/material/colors';


export const LitghTheme = createTheme({
    palette: {
        background: {
            default: common.white,
            paper: '#f7f6f3'
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
            color: common.black
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                label: orange[700]
            }
        }
    }
});