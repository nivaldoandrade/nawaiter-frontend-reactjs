import { ElementType, useState } from 'react';

import { HeaderPage } from '../HeaderPage';

import { Button, Container, Content, HeaderContent } from './styles';

interface SelectorPageProps {
  optionMap: Map<string, React.ReactNode>;
  icon: ElementType;
  title: string;
  subtitle: string;
}

export function SelectorPage({
  optionMap,
  icon,
  title,
  subtitle,
}: SelectorPageProps) {
  const [selectedItem, setSelectedItem] = useState<string>(() => {
    const [item] = optionMap.keys();

    return item;
  });

  function handleSelectedItem(item: string) {
    setSelectedItem(item);
  }

  return (
    <Container>
      <HeaderPage icon={icon} title={title} subtitle={subtitle} />
      <Content>
        <HeaderContent>
          {Array.from(optionMap.keys()).map((key) => (
            <Button
              key={key}
              type="button"
              selected={selectedItem === key}
              onClick={() => handleSelectedItem(key)}
            >
              {key}
            </Button>
          ))}
        </HeaderContent>
        {optionMap.get(selectedItem)}
      </Content>
    </Container>
  );
}
