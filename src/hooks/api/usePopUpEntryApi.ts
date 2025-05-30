import { getUpComingTicketInfo } from '@/apis/popUpEntry/PopUpEntryApi';
import { useQuery } from '@tanstack/react-query';

export const useUpComingTicketInfoApi = () => {
  const query = useQuery({
    queryFn: () => getUpComingTicketInfo(),
    queryKey: ['upcomingTicket'],
  });

  return {
    upComingTicketInfo: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
