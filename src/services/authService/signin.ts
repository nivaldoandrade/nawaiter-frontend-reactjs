import api from '../api';

interface SigninParams {
  username: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

export async function signin(params: SigninParams) {
  const { data } = await api.post<SigninResponse>('/signin', params);

  return data;
}
