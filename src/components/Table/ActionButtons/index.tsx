import { EditIcon } from '../../Icons/EditIcon';
import { EyeIcon } from '../../Icons/EyeIcon';
import { TrashIcon } from '../../Icons/TrashIcon';

import { Container, DeleteButton, ViewOrEditButton } from './styles';

interface ActionButtonsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  disabled?: boolean;
}

export function ActionButtons({
  onView,
  onEdit,
  onDelete,
  disabled,
}: ActionButtonsProps) {
  return (
    <Container>
      <ViewOrEditButton type="button" onClick={onEdit || onView}>
        {onEdit ? <EditIcon /> : <EyeIcon />}
      </ViewOrEditButton>
      <DeleteButton type="button" onClick={onDelete} disabled={disabled}>
        <TrashIcon />
      </DeleteButton>
    </Container>
  );
}
