import { useMutation } from '@tanstack/react-query';
import { searchApi } from '@/lib/api/search';
import { SearchRequest, SearchResponse } from '@/types';

export const useSearch = () => {
  return useMutation<SearchResponse, Error, SearchRequest>({
    mutationFn: (payload) => searchApi.search(payload),
  });
};
