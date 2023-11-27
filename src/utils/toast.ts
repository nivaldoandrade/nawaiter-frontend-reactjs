import EventManager from '../lib/EventManager';
import { IToast } from '../types/Toast';

export const toastEventManager = new EventManager<Omit<IToast, 'id'>>();

export function toast({ type, title, duration }: Omit<IToast, 'id'>) {
  toastEventManager.emit('addtoast', {
    type,
    title,
    duration,
  });
}
