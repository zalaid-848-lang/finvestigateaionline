import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/__root';
import Index from './routes/index';
import About from './pages/About';
import Product from './pages/Product';
import Technology from './pages/Technology';
import Traction from './pages/Traction';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: 'about', element: <About /> },
      { path: 'product', element: <Product /> },
      { path: 'technology', element: <Technology /> },
      { path: 'traction', element: <Traction /> },
      { path: 'team', element: <Team /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
    ],
  },
]);

export default router;