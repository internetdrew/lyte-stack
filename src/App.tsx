import './App.css';
import { trpc } from '../utils/trpc';
import { useQuery } from '@tanstack/react-query';

function App() {
  const { data, isLoading } = useQuery(
    trpc.greeting.queryOptions({ name: 'John' })
  );

  if (isLoading) return <div>Loading...</div>;

  return <h1>{data}</h1>;
}

export default App;
