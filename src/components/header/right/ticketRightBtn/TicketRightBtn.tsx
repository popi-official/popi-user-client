import { Image, TouchableOpacity } from 'react-native';
import HeaderRightWrapper from '../../headerRightWrapper/HeaderRightWrapper';

const images = {
  ticketIcon: require('@/assets/images/header/ticket.webp'),
};

export default function TicketRightBtn() {
  return (
    <HeaderRightWrapper>
      <TouchableOpacity>
        <Image source={images.ticketIcon} style={{ width: 26, height: 26 }} />
      </TouchableOpacity>
    </HeaderRightWrapper>
  );
}
