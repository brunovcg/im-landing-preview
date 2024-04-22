import Apply from 'pages/apply/Apply';
import Home from 'pages/home/Home';

export default function useRoutes() {
  const routes = {
    home: { path: '/', element: <Home /> },
    apply: { path: '/apply', element: <Apply /> },
  } as const;

  const routeKeys = Object.keys(routes) as unknown as keyof typeof routes;

  return { routes, routeKeys };
}
