import { Routes, Route, BrowserRouter } from 'react-router-dom';
import useRoutes from './useRoutes';

export default function Router() {
  const { routes } = useRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routes).map(([key, props]) => (
          <Route key={key} {...props} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
