import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';
import { Order } from '../pages/Order';
import { UsersAndTables } from '../pages/UsersAndTables';

import { AuthGuard } from './AuthGuard';
import { UserRoleRoute } from './UserRoleRoute';

export function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>

      <Route element={<AuthGuard isPrivate />}>
        <Route
          element={<UserRoleRoute roles={['admin', 'cozinha', 'garcom']} />}
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<UserRoleRoute roles={['admin']} />}>
          <Route path="order" element={<Order />} />
          <Route path="cardapio" element={<Menu />} />
          <Route path="users" element={<UsersAndTables />} />
        </Route>
      </Route>
    </Routes>
  );
}
