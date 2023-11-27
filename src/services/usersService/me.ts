import { UserRoles } from '../../types/User';
import api from '../api';

export interface MeResponse {
  id: string;
  name: string;
  username: string;
  role: UserRoles;
}

export async function me() {
  const { data } = await api.get<MeResponse>('/me');

  return data;
}
