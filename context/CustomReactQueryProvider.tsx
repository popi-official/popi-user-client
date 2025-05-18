import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClinet = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function CustomReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
  );
}
