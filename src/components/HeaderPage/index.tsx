import { ElementType } from 'react';

import { Spinner } from '../Spinner';

import {
  Container,
  TitleContainer,
  TitleContent,
  ContentLoading,
} from './styles';

interface HeaderPageProps {
  icon: ElementType;
  title: string;
  subtitle: string;
  isLoading?: boolean;
}

export function HeaderPage({
  icon: Icon,
  title,
  subtitle,
  isLoading,
}: HeaderPageProps) {
  return (
    <Container>
      <TitleContainer>
        <TitleContent>
          <Icon />
          <h4>{title}</h4>
        </TitleContent>

        <strong>{subtitle}</strong>
      </TitleContainer>
      {isLoading && (
        <ContentLoading>
          <Spinner />
          <strong>Atualizando lista de pedidos...</strong>
        </ContentLoading>
      )}
    </Container>
  );
}
