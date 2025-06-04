export type MyReservation = {
  reservationId: string;
  popupId: number;
  popupName: string;
  reservationDate: string;
  reservationTime: string;
  reservationDay: string;
  address: string;
  latitude: number;
  longitude: number;
  qrImage: string;
};


export type PaymentRecord = {
  paymentId: number;
  popupId: number;
  paidAt: string;
  items: PaymentItem[];
};

export type PaymentItem = {
  itemName: string;
  quantity: number;
  price: number;
};