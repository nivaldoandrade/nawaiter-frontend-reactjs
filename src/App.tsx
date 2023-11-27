import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';

import { ToastContainer } from './components/Toast/ToastContainer';
import { AuthProvider } from './hooks/useAuth';
import { Router } from './Routes';
import './lib/dayjs';
import { queryClient } from './services/QueryClient';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
          <ToastContainer />
        </AuthProvider>

        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}
