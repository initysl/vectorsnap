import { useMutation, useQuery } from '@tanstack/react-query';
import { documentApi } from '@/lib/api/document';
import { DocumentResponse, UpdateRequest, DeleteBatchRequest } from '@/types';

export const useDocument = (id?: string) => {
  const getById = useQuery<DocumentResponse>({
    queryKey: ['document', id],
    queryFn: () => documentApi.getById(id!),
    enabled: !!id,
  });

  const update = useMutation<
    DocumentResponse,
    Error,
    { id: string; payload: UpdateRequest }
  >({
    mutationFn: ({ id, payload }) => documentApi.update(id, payload),
  });

  const deleteOne = useMutation<void, Error, string>({
    mutationFn: (id) => documentApi.delete(id),
  });

  const deleteBatch = useMutation<void, Error, DeleteBatchRequest>({
    mutationFn: (payload) => documentApi.deleteBatch(payload),
  });

  const clear = useMutation<void, Error>({
    mutationFn: () => documentApi.clear(),
  });

  return {
    getById,
    update,
    deleteOne,
    deleteBatch,
    clear,
  };
};
