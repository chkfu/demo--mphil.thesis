// from package
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// fromn file
import ScrollToTop from './utils/ScrollToTop';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <QueryClientProvider client={ queryClient }>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode >
);
