export type ItemPathType = {
  itemId: number;
  title: string;
  imagePath: string;
  price: number;
};

export type ItemUrlType = {
  itemId: number;
  name: string;
  imageUrl: string;
  price: number;
};

export interface TimeSlot {
  reservationId: number;
  time: string;
  isPossible: boolean;
}

export interface ReservableDate {
  date: string;
  isReservable: boolean;
  timeSlots: TimeSlot[];
}
