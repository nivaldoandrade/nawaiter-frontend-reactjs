const errorsMessagesTables = {
  'This username is already in use': 'Esse usuário já está sendo utilizado',
  'The table is currently being used':
    'Não é possível excluir a mesa enquanto houver um pedido ativo associado',
} as { [key: string]: string };

export default errorsMessagesTables;
