import { Navigate } from 'react-router-dom';

import { LayoutAdmin } from '../components/Layout/Admin';
import { useAuth } from '../hooks/useAuth';
import { UserRoles } from '../types/User';

interface UserRoleRouteProps {
  roles: Array<UserRoles>;
}

export function UserRoleRoute({ roles }: UserRoleRouteProps) {
  const { user, signedIn } = useAuth();

  const userHasRequireRole = !!(user && roles.includes(user.role));

  if (signedIn && userHasRequireRole) {
    return <LayoutAdmin />;
  }

  if (signedIn && !userHasRequireRole) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to="/login" replace />;
}
