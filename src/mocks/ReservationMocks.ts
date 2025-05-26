import { GetReservationInfoResponse } from '@/types/api/ApiResponseType';
import { ReservableDate, TimeSlot } from '@/types/DetailScreen';

const generateTimeSlots = (isPossiblePattern: boolean[]): TimeSlot[] => {
  const timeSlots: TimeSlot[] = [];
  let reservationId = 1;

  const times = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];

  times.forEach((time, index) => {
    timeSlots.push({
      reservationId: reservationId++,
      time: time,
      isPossible: isPossiblePattern[index % isPossiblePattern.length],
    });
  });

  return timeSlots;
};

export const ReservationInfoMock: GetReservationInfoResponse = {
  popupOpenDate: '2025-05-01',
  popupCloseDate: '2025-06-09',
  reservableDate: [
    {
      date: '2025-05-26',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
      ]),
    },
    {
      date: '2025-05-27',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
      ]),
    },
    {
      date: '2025-05-28',
      isReservable: true,
      timeSlots: generateTimeSlots([
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
      ]),
    },
    {
      date: '2025-05-29',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
      ]),
    },
    {
      date: '2025-05-30',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
      ]),
    },
    {
      date: '2025-05-31',
      isReservable: false,
      timeSlots: generateTimeSlots([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]),
    },
    {
      date: '2025-06-01',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ]),
    },
    {
      date: '2025-06-02',
      isReservable: true,
      timeSlots: generateTimeSlots([
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
      ]),
    },
    {
      date: '2025-06-03',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
      ]),
    },
    {
      date: '2025-06-04',
      isReservable: false,
      timeSlots: generateTimeSlots([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]),
    },
    {
      date: '2025-06-05',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
      ]),
    },
    {
      date: '2025-06-06',
      isReservable: true,
      timeSlots: generateTimeSlots([
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
      ]),
    },
    {
      date: '2025-06-07',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
      ]),
    },
    {
      date: '2025-06-08',
      isReservable: true,
      timeSlots: generateTimeSlots([
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
      ]),
    },
    {
      date: '2025-06-09',
      isReservable: true,
      timeSlots: generateTimeSlots([
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
      ]),
    },
  ],
};

export const getReservableDate = (targetDate: string): ReservableDate | undefined => {
  return ReservationInfoMock.reservableDate.find(item => item.date === targetDate);
};

export const getAvailableTimeSlots = (targetDate: string): TimeSlot[] => {
  const dateInfo = getReservableDate(targetDate);
  if (!dateInfo || !dateInfo.isReservable) return [];

  return dateInfo.timeSlots.filter(slot => slot.isPossible);
};

export const isDateReservable = (targetDate: string): boolean => {
  const dateInfo = getReservableDate(targetDate);
  return dateInfo?.isReservable || false;
};
