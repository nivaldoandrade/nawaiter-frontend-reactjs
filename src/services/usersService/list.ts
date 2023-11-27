import { UserRoles } from '../../types/User';
import api from '../api';

export interface ListUserResponse {
  users: {
    id: string;
    name: string;
    username: string;
    role: UserRoles;
  }[];
  totalCount: number;
}

export interface ListUserParams {
  page?: number;
}

export async function list({ page }: ListUserParams) {
  const { data } = await api.get<ListUserResponse>('/users', {
    params: {
      page,
    },
  });

  return data;
}
