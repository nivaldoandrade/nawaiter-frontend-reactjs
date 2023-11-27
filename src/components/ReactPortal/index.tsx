import ReactDOM from 'react-dom';

interface ReactPortalProps {
  children: React.ReactNode;
  containerId: string;
}

export function ReactPortal({
  children,
  containerId = 'portal-root',
}: ReactPortalProps) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');

    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}
