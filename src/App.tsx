
import { AppRoutes } from './routes';
import { AuThProvider } from './shared/contexts/AuthContext';
import { AppThemeProvider } from './shared/contexts/ThemeAppContext';
import { UserInfoProvider } from './shared/contexts/UserInfoContext';

function App() {
    return (
        <AuThProvider>
            <UserInfoProvider>
                <AppThemeProvider>
                    <AppRoutes />
                </AppThemeProvider>
            </UserInfoProvider>
        </AuThProvider>
    );
}

export default App;
