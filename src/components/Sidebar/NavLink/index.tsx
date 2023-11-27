import { ElementType } from 'react';
import { NavLinkProps as RRDNavLinkProps } from 'react-router-dom';

import { NavLinkStyle } from './styles';

interface NavLinkProps extends RRDNavLinkProps {
  icon: ElementType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export function NavLink({ icon: Icon, title, ...rest }: NavLinkProps) {
  return (
    <NavLinkStyle
      className={({ isActive }) => (isActive ? 'active' : '')}
      {...rest}
    >
      <Icon />
      <span>{title}</span>
    </NavLinkStyle>
  );
}
