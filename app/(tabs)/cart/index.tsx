import { useState, useEffect } from 'react';
import { FlatList, Image, View, TouchableOpacity } from 'react-native';
import { S } from './CartScreen.style';
import { ItemPathType } from '@/types/DetailScreen';
import { HotItemMocks } from '@/mocks/PopUpDetailItemMocks';
import { useLocalSearchParams } from 'expo-router';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';

type ExtendedItem = ItemPathType & {
  selected: boolean;
  quantity: number;
};

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
  const [cartItems, setCartItems] = useState<ExtendedItem[]>(
    HotItemMocks.map(item => ({
      ...item,
      selected: false,
      quantity: 1,
    })),
  );
  const [allSelected, setAllSelected] = useState(false);

  const params = useLocalSearchParams();

  useEffect(() => {
    if (params?.itemId) {
      const newItem: ExtendedItem = {
        itemId: Number(params.itemId),
        title: params.title as string,
        imagePath: params.imagePath as string,
        price: Number(params.price),
        quantity: 1,
        selected: true,
      };

      setCartItems(prev => {
        const existingIndex = prev.findIndex(item => item.itemId === newItem.itemId);

        // 이미 있으면 수량 +1
        if (existingIndex !== -1) {
          const updated = [...prev];
          updated[existingIndex].quantity += 1;
          return updated;
        }

        // 없으면 새로 추가
        return [...prev, newItem];
      });
    }
  }, [params]);

  const toggleSelect = (id: number) => {
    setCartItems(prev =>
      prev.map(item => (item.itemId === id ? { ...item, selected: !item.selected } : item)),
    );
  };

  const changeQuantity = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.itemId === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    );
  };

  const deleteItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.itemId !== id));
  };

  const toggleSelectAll = () => {
    const newState = !allSelected;
    setAllSelected(newState);
    setCartItems(prev => prev.map(item => ({ ...item, selected: newState })));
  };

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => {
      if (item.selected) {
        return sum + item.price * item.quantity;
      }
      return sum;
    }, 0);

  const isEmpty = cartItems.length === 0;

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
            <CustomGradientBtn
              title="구매하기"
              onPress={() => {
                // TODO: 결제!
              }}
            />
          </S.BottomButtonWrapper>
        </>
      )}
    </S.Container>
  );
}
