import { useRouter } from 'expo-router';
import { S } from './HomeRightBtn.style';
import HeaderRightWrapper from '../../headerRightWrapper/HeaderRightWrapper';
import CustomPressableBtn from '@/components/CustomPressableBtn';

const images = {
  searchIcon: require('@/assets/images/popupDetailItems/search-icon.webp'),
  ticketIcon: require('@/assets/images/header/ticket.webp'),
};

export default function HomeRightBtn() {
  const router = useRouter();

  return (
    <HeaderRightWrapper>
      <S.HomeHeaderContainer>
        <CustomPressableBtn
          onPress={() =>
            router.push({
              pathname: '/(common)/popUpEntry',
              params: { source: 'home' },
            })
          }
        >
          <S.TicketIcon source={images.ticketIcon} />
        </CustomPressableBtn>
        <CustomPressableBtn onPress={() => router.push('/(common)/search')}>
          <S.SearchIcon source={images.searchIcon} resizeMode="contain" />
        </CustomPressableBtn>
      </S.HomeHeaderContainer>
    </HeaderRightWrapper>
  );
}
