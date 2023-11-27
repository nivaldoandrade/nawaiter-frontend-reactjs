import { AddButton, Container, HeaderInfo, SubTitle } from './styles';

interface TableHeaderProps {
  title: 'Produtos' | 'Categorias' | 'Usuários' | 'Mesas' | string;
  subTitle?: string;
  qtyItens: number;
  onOpenModal?: () => void;
}

const titleButton = {
  Produtos: 'Novo Produto',
  Categorias: 'Nova Categoria',
  Usuários: 'Novo Usuário',
  Mesas: 'Nova Mesa',
} as { [key: string]: string };

export function TableHeader({
  title,
  subTitle,
  qtyItens,
  onOpenModal,
}: TableHeaderProps) {
  return (
    <Container>
      <HeaderInfo>
        <strong>{title}</strong>
        <span>{qtyItens || 0}</span>
      </HeaderInfo>
      {onOpenModal && (
        <AddButton type="button" onClick={onOpenModal}>
          {titleButton[title]}
        </AddButton>
      )}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
}
