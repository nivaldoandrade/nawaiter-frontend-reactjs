type IListeners<T> = (payload: T) => void;

export default class EventManager<T> {
  listeners: Map<string, IListeners<T>[]>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: string, listener: (payload: T) => void) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  emit(event: string, payload: T) {
    if (!this.listeners.has(event)) {
      return;
    }
    this.listeners.get(event)!.forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event: string, listenerRemove: (payload: T) => void) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerRemove,
    );

    this.listeners.set(event, filteredListeners);
  }
}
