import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import Index from './pages/index.js';

const routes = {
  '/': Index,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});
