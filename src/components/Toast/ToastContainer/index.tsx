import { useCallback, useEffect, useState } from 'react';

import { IToast } from '../../../types/Toast';
import { toastEventManager } from '../../../utils/toast';
import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

type IPayload = Omit<IToast, 'id'>;

export function ToastContainer() {
  const [messages, setMessages] = useState<IToast[]>([]);
  const [pendingRemoveMessagesIds, setPendingRemoveMessageIds] = useState<
    Array<number>
  >([]);

  useEffect(() => {
    function handleAddToast(payload: IPayload) {
      const { type, title, duration } = payload;

      setMessages((state) =>
        state.concat({
          id: Math.random(),
          type,
          title,
          duration,
        }),
      );
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handlePendingRemoveMessageId = useCallback((messageId: number) => {
    setPendingRemoveMessageIds((state) => [...state, messageId]);
  }, []);

  const handleAnimatedEnd = useCallback((messageId: number) => {
    setMessages((state) => state.filter((message) => message.id !== messageId));
    setPendingRemoveMessageIds((state) =>
      state.filter((id) => id !== messageId),
    );
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onPendingRemoveMessageId={handlePendingRemoveMessageId}
          isLeaving={pendingRemoveMessagesIds.includes(message.id)}
          onAnimatedEnd={handleAnimatedEnd}
        />
      ))}
    </Container>
  );
}
