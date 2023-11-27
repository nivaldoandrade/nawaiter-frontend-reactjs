import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface AuthGuardPros {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardPros) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
