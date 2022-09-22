import { AppProvider } from './providers';
import Routes from './routes';

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
