import { Image, TouchableOpacity } from 'react-native';

const images = {
  ticketIcon: require('@/assets/images/header/ticket.webp'),
};

export default function TicketHeaderRight() {
  return (
    <TouchableOpacity>
      <Image source={images.ticketIcon} style={{ width: 26, height: 26 }} />
    </TouchableOpacity>
  );
}
