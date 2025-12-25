import { useMutation } from '@tanstack/react-query';
import { ingestApi } from '@/lib/api/ingest';
import { IngestRequest, IngestResponse } from '@/types';

export const useIngest = () => {
  return useMutation<IngestResponse, Error, IngestRequest>({
    mutationFn: (payload) => ingestApi.ingest(payload),
  });
};
