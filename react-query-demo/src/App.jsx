import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './PostComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>
        <PostsComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
