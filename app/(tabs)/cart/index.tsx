import { FlatList, Image, View, TouchableOpacity } from 'react-native';
import { S } from './CartScreen.style';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'expo-router';
import { usePaymentApi } from '@/hooks/api/usePaymantApi';
import { ParseJsonToString } from '@/utils/JsonParser';
import { useState } from 'react';
import { PostPaymentReadyErrorResponse } from '@/types/api/ApiResponseType';
import NoticeModal from '@/components/noticeModal/NoticeModal';

const Images = {
  minusIcon: require('@/assets/images/cart/minus.webp'),
  plusIcon: require('@/assets/images/cart/plus.webp'),
  nonSelectIcon: require('@/assets/images/cart/select-gray.webp'),
  selectIcon: require('@/assets/images/cart/select-purple.webp'),
  deleteIcon: require('@/assets/images/cart/delete.webp'),
  emptyImage: require('@/assets/images/cart/survey-gift.webp'),
} as const;

type CartItem = {
  itemId: number;
  selected: boolean;
  imagePath: string;
  title: string;
  quantity: number;
  price: number;
};

export default function CartScreen() {
  const { cartItems, cartPopUpId, changeQuantity, toggleSelect, toggleSelectAll, deleteItem } =
    useCartStore();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [errorItemId, setErrorItemId] = useState<number>(0);
  const { postPaymentReadyMutation } = usePaymentApi();

  const isEmpty = cartItems.length === 0;
  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);
  const selectedItems = cartItems.filter(item => item.selected);
  const hasSelectedItems = selectedItems.length > 0;

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => (item.selected ? sum + item.price * item.quantity : sum), 0);

  const handlePaymentResponse = (response: any) => {
    if (response.success) {
      router.push({
        pathname: '/(common)/payment',
        params: {
          paymentReadyInfo: ParseJsonToString(response.data),
        },
      });
    } else {
      const errorData = response.data as PostPaymentReadyErrorResponse;
      setErrorMsg(errorData.message);
      // 에러 API 명세에 따라 수정 필요
      setErrorItemId(1);
    }
  };

  const handlePayment = async () => {
    try {
      setErrorMsg('');
      const response = await postPaymentReadyMutation.mutateAsync({
        popupId: cartPopUpId,
        items: cartItems.map(item => ({ itemId: item.itemId, quantity: item.quantity })),
      });
      handlePaymentResponse(response);
    } catch (error: any) {
      setErrorMsg('네트워크 오류가 발생했습니다.');
    }
  };

  const handleErrorConfirm = () => {
    deleteItem(errorItemId);
    setErrorItemId(0);
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View>
      <S.ItemContainer>
        <TouchableOpacity onPress={() => toggleSelect(item.itemId)}>
          <Image
            source={item.selected ? Images.selectIcon : Images.nonSelectIcon}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>

        <S.ItemImage source={{ uri: item.imagePath }} />

        <S.ItemInfoWrapper>
          <S.ItemTitleRow>
            <S.ItemTitle numberOfLines={2}>{item.title}</S.ItemTitle>
            <TouchableOpacity onPress={() => deleteItem(item.itemId)}>
              <Image source={Images.deleteIcon} style={{ width: 18, height: 18 }} />
            </TouchableOpacity>
          </S.ItemTitleRow>
        </S.ItemInfoWrapper>
      </S.ItemContainer>

      <S.ItemBottomRow>
        <S.QuantityWrapper>
          <S.QuantityButton onPress={() => changeQuantity(item.itemId, -1)}>
            <Image source={Images.minusIcon} style={{ width: 14, height: 14 }} />
          </S.QuantityButton>
          <S.QuantityText>{item.quantity}</S.QuantityText>
          <S.QuantityButton onPress={() => changeQuantity(item.itemId, 1)}>
            <Image source={Images.plusIcon} style={{ width: 14, height: 14 }} />
          </S.QuantityButton>
        </S.QuantityWrapper>
        <View style={{ flex: 1 }} />
        <S.PriceText>{(item.price * item.quantity).toLocaleString()}원</S.PriceText>
      </S.ItemBottomRow>

      <S.DividerCart />
    </View>
  );

  const renderEmptyCart = () => (
    <S.EmptyContainer>
      <S.EmptyText>아직 장바구니에 상품이 없어요</S.EmptyText>
      <S.EmptySubText>QR을 찍어 상품을 추가해주세요</S.EmptySubText>
      <S.EmptyImage source={Images.emptyImage} />
    </S.EmptyContainer>
  );

  const renderCartList = () => (
    <>
      <S.AllSelectRow style={{ marginTop: 22, marginBottom: 12 }}>
        <TouchableOpacity onPress={toggleSelectAll}>
          <Image
            source={allSelected ? Images.selectIcon : Images.nonSelectIcon}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
        <S.AllCheckText>전체 선택</S.AllCheckText>
      </S.AllSelectRow>

      <S.Divider />

      <FlatList
        data={cartItems}
        keyExtractor={item => item.itemId.toString()}
        renderItem={renderCartItem}
        ListFooterComponent={
          <S.TotalRow style={{ marginBottom: 24 }}>
            <S.TotalText>총 결제 금액</S.TotalText>
            <S.TotalPrice>{getTotalPrice().toLocaleString()}원</S.TotalPrice>
          </S.TotalRow>
        }
      />

      <NoticeModal
        title={errorMsg}
        subTitle="해당 상품은 장바구니에서 사라집니다"
        visible={!!errorMsg}
        buttons={[{ title: '확인', onPress: handleErrorConfirm }]}
      />

      <S.BottomButtonWrapper>
        <CustomGradientBtn
          title="구매하기"
          onPress={handlePayment}
          isPending={postPaymentReadyMutation.isPending}
          disabled={!hasSelectedItems || postPaymentReadyMutation.isPending}
        />
      </S.BottomButtonWrapper>
    </>
  );

  return <S.Container>{isEmpty ? renderEmptyCart() : renderCartList()}</S.Container>;
}
