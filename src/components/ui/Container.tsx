// src/components/ui/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto lg:px-32 px-4  ${className}`}>
      {children}
    </div>
  );
}