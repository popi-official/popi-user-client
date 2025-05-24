import { useRouter } from 'expo-router';
import { S } from './HomeHeader.style';

const images = {
  searchIcon: require('@/assets/images/popupDetailItems/search-icon.webp'),
  ticketIcon: require('@/assets/images/header/ticket.webp'),
};

export default function HomeHeaderRight() {
  const router = useRouter();

  return (
    <S.HomeHeaderContainer>
      <S.HeaderButton onPress={() => router.push('/(common)/popUpDetail')}>
        <S.TicketIcon source={images.ticketIcon} />
      </S.HeaderButton>

      <S.HeaderButton onPress={() => router.push('/(common)/search')}>
        <S.SearchIcon source={images.searchIcon} resizeMode="contain" />
      </S.HeaderButton>
    </S.HomeHeaderContainer>
  );
}
