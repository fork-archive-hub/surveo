import { AppProvider } from './providers';
import { AppRoutes } from './router';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
