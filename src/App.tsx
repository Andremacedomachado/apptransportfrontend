import { AppRoutes } from './routes';
import { AuThProvider } from './shared/contexts/AuthContext';
import { UserInfoProvider } from './shared/contexts/UserInfoContext';

function App() {
    return (
        <AuThProvider>
            <UserInfoProvider>
                <AppRoutes />
            </UserInfoProvider>
        </AuThProvider>
    );
}

export default App;
