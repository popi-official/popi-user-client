import { FlatList, Image, View, TouchableOpacity } from 'react-native';
import { S } from './CartScreen.style';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'expo-router';
import { usePaymentApi } from '@/hooks/api/usePaymantApi';
import { ParseJsonToString } from '@/utils/JsonParser';
import { useEffect } from 'react';

const Images = {
  minusIcon: require('@/assets/images/cart/minus.webp'),
  plusIcon: require('@/assets/images/cart/plus.webp'),
  nonSelectIcon: require('@/assets/images/cart/select-gray.webp'),
  selectIcon: require('@/assets/images/cart/select-purple.webp'),
  deleteIcon: require('@/assets/images/cart/delete.webp'),
  emptyImage: require('@/assets/images/cart/survey-gift.webp'),
  customGradientBtn: require('@/components/customGradientBtn/CustomGradientBtn'),
};

export default function CartScreen() {
  const { cartItems, cartPopUpId, changeQuantity, toggleSelect, toggleSelectAll, deleteItem } =
    useCartStore();

  useEffect(() => {
    console.log(cartItems);
    console.log('CART POPUP ID : ', cartPopUpId);
  }, [cartItems]);
  const { postPaymentReadyMutation } = usePaymentApi();
  const router = useRouter();

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);
  const isEmpty = cartItems.length === 0;

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => {
      if (item.selected) {
        return sum + item.price * item.quantity;
      }
      return sum;
    }, 0);

  const handlePayment = async () => {
    const response = await postPaymentReadyMutation.mutateAsync({
      popupId: cartPopUpId,
      items: cartItems.map(item => ({ itemId: item.itemId, quantity: item.quantity })),
    });

    router.replace({
      pathname: '/(common)/payment',
      params: {
        paymentReadyInfo: ParseJsonToString(response.data),
      },
    });
  };

  return (
    <S.Container>
      {isEmpty ? (
        <>
          <S.EmptyContainer>
            <S.EmptyText>아직 장바구니에 상품이 없어요</S.EmptyText>
            <S.EmptySubText>QR을 찍어 상품을 추가해주세요</S.EmptySubText>
            <S.EmptyImage source={Images.emptyImage} />
          </S.EmptyContainer>
        </>
      ) : (
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
            renderItem={({ item }) => (
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
            )}
            ListFooterComponent={
              <S.TotalRow style={{ marginBottom: 24 }}>
                <S.TotalText>총 결제 금액</S.TotalText>
                <S.TotalPrice>{getTotalPrice().toLocaleString()}원</S.TotalPrice>
              </S.TotalRow>
            }
          />

          <S.BottomButtonWrapper>
            <CustomGradientBtn title="구매하기" onPress={handlePayment} />
          </S.BottomButtonWrapper>
        </>
      )}
    </S.Container>
  );
}
