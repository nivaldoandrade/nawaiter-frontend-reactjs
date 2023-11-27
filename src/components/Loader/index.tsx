import { Spinner } from '../Spinner';

import { Center } from './styles';

export function Loader() {
  return (
    <Center>
      <Spinner size={72} />
    </Center>
  );
}
