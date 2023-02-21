import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PATH_DASHBOARD } from '../routes/paths';
import { LoadingScreen } from '../components';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const { push } = useRouter();

  const isAuthenticated = {}
    , isInitialized = {};

  useEffect(() => {
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (isInitialized === isAuthenticated) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
