import api from '../api';

interface UpdateCategoryParams {
  id: string;
  icon: string;
  name: string;
}

interface UpdateCategoryResponse {
  id: string;
  icon: string;
  name: string;
}

export async function update(params: UpdateCategoryParams) {
  const { id, ...rest } = params;

  const { data } = await api.put<UpdateCategoryResponse>(`categories/${id}`, {
    ...rest,
  });

  return data;
}
