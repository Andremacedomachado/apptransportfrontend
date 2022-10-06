import { Box, ThemeProvider } from '@mui/material';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { DarkTheme, LitghTheme } from '../themes';

interface IThemeData {
    themeName: 'ligth' | 'dark',
    toggleTheme(): void
}

interface IAppThemeContextProps {
    children: React.ReactNode
}

const AppThemeContext = createContext<IThemeData>({} as IThemeData);

const AppThemeProvider: React.FC<IAppThemeContextProps> = ({ children }: IAppThemeContextProps) => {

    const [themeName, setThemeName] = useState<'ligth' | 'dark'>('dark');

    const toggleTheme = useCallback(() => {
        setThemeName(oldTheme => oldTheme == 'ligth' ? 'dark' : 'ligth');
    }, []);

    const theme = useMemo(() => {
        if (themeName == 'ligth') return LitghTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <AppThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};

const useAppThemeContext = () => { return useContext(AppThemeContext); };

export { AppThemeContext, AppThemeProvider, useAppThemeContext };
