import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Home() {
  const count = useSelector((state: RootState) => state.home.count);

  return (
    <div>{count}</div>
  );
}

