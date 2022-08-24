import { AppRoutes } from './routes';
import { AuThProvider } from './shared/contexts/AuthContext';

function App() {
    return (
        <AuThProvider>
            <AppRoutes />
        </AuThProvider>
    );
}

export default App;
