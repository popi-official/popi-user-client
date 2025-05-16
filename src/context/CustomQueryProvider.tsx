import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function CustomQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
