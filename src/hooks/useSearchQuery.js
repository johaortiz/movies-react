import { useDebounce } from './useDebounce';
import { useQuery } from './useQuery';

export const useSearchQuery = () => {
  const query = useQuery();
  const searchQuery = query.get('search');
  
  const debouncedValue = useDebounce(searchQuery, 700);
  return debouncedValue;
}
