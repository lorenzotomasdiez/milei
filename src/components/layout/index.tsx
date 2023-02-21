import { ReactNode } from 'react';
import MainLayout from './main';



type Props = {
  children: ReactNode;
  variant?: 'main' | 'dashboard' | 'secondary';
};

export default function Layout({ variant, children }: Props) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}
