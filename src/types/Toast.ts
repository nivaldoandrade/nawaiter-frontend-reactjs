export interface IToast {
  id: number;
  type: 'SUCCESS' | 'DANGER' | 'DEFAULT';
  title: string;
  duration?: number;
}
