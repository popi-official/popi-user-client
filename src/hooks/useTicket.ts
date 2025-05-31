import { GetUpComingTicketResponse } from '@/types/api/ApiResponseType';
import { useEffect, useState } from 'react';
import { useUpComingTicketInfoApi } from './api/usePopUpEntryApi';
import { ParseStringToJson } from '@/utils/JsonParser';

export const useTicketData = (source?: string, data?: string) => {
  const [ticket, setTicket] = useState<GetUpComingTicketResponse | null>(null);
  const { upComingTicketInfo } = useUpComingTicketInfoApi();

  useEffect(() => {
    if (source === 'home' && upComingTicketInfo) {
      setTicket(upComingTicketInfo);
    } else if (source === 'my' && data) {
      setTicket(ParseStringToJson(data) as GetUpComingTicketResponse);
    }
  }, [source, data, upComingTicketInfo]);

  return ticket;
};
