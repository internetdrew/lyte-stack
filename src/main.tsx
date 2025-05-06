import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { queryClient } from '../utils/trpc';
import { QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
