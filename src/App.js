import Header from '../components/Header';
import AppRoutes from './routes';

const App = () => {
  return (
    <div>
      <Header cartCount={0} />
      <AppRoutes />
    </div>
  );
};

export default App;
