import { useEffect } from 'react';
// Router
import { Slot, useSegments } from 'expo-router';
// Context
import { AuthContextProvider, useAuth } from '../Context/AuthContext';
import { DataContextProvider, useData } from '../Context/DataContext';
import { ThemeContextProvider, useTheme } from '../Context/ThemeContext';

const MainLayout = () => {
  const { router, isAuthenticated } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (typeof isAuthenticated == 'undefined') return;

    const inApp = segments[0] == '(app)';
    if (isAuthenticated && !inApp) {
      router.replace('home')
    } else {
      router.replace('SignIn');
    }
  }, [isAuthenticated])
  return <Slot />
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <DataContextProvider>
          <MainLayout />
        </DataContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default RootLayout;
