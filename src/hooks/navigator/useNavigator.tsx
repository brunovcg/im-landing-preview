import { useNavigate } from 'react-router-dom';
import useRoutes from 'router/useRoutes';

export default function useNavigation() {
  const navigate = useNavigate();
  const { routes } = useRoutes();

  const navigateTo = (key: ReturnType<typeof useRoutes>['routeKeys']) => () => navigate(routes[`${key}`].path);
  return { navigateTo };
}
