import React, { useState } from 'react';
import { FlatList, Image, View, TouchableOpacity } from 'react-native';
import { S } from './CartScreen.style';
import { PopUpDetailItem } from '@/types/DetailScreenItem';
import { MockItems } from '@/mocks/PopUpDetailItemMocks';

import MinusIcon from '@/assets/images/cart/minus.webp';
import PlusIcon from '@/assets/images/cart/plus.webp';
import NonSelectIcon from '@/assets/images/cart/select-gray.webp';
import SelectIcon from '@/assets/images/cart/select-purple.webp';
import CartIcon from '@/assets/images/cart/cart.webp';
import DeleteIcon from '@/assets/images/cart/delete.webp';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';

type ExtendedItem = PopUpDetailItem & {
  selected: boolean;
  quantity: number;
};

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<ExtendedItem[]>(
    MockItems.map(item => ({
      ...item,
      selected: false,
      quantity: 1,
    })),
  );
  const [allSelected, setAllSelected] = useState(false);

  const toggleSelect = (id: string) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, selected: !item.selected } : item)),
    );
  };

  const changeQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleSelectAll = () => {
    const newState = !allSelected;
    setAllSelected(newState);
    setCartItems(prev => prev.map(item => ({ ...item, selected: newState })));
  };

  const getNumericPrice = (price: string) => parseInt(price.replace(/[^\d]/g, ''), 10);

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => {
      if (item.selected) {
        return sum + getNumericPrice(item.price) * item.quantity;
      }
      return sum;
    }, 0);

  return (
    <S.Container>
      <S.AllSelectRow style={{ marginTop: 22, marginBottom: 12 }}>
        <TouchableOpacity onPress={toggleSelectAll}>
          <Image
            source={allSelected ? SelectIcon : NonSelectIcon}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity >
        <S.AllCheckText>전체 선택</S.AllCheckText>
      </S.AllSelectRow>
      <S.Divider />

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <S.ItemContainer>
              <TouchableOpacity onPress={() => toggleSelect(item.id)}>
                <Image
                  source={item.selected ? SelectIcon : NonSelectIcon}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>

              <S.ItemImage source={{ uri: item.image }} />

              <S.ItemInfoWrapper>
                <S.ItemTitleRow>
                  <S.ItemTitle numberOfLines={2}>{item.title}</S.ItemTitle>
                  <S.DeleteButton onPress={() => deleteItem(item.id)}>
                    <Image source={DeleteIcon} style={{ width: 18, height: 18 }} />
                  </S.DeleteButton>
                </S.ItemTitleRow>
              </S.ItemInfoWrapper>
            </S.ItemContainer>

            <S.ItemBottomRow>
              <S.QuantityWrapper>
                <S.QuantityButton onPress={() => changeQuantity(item.id, -1)}>
                  <Image source={MinusIcon} style={{ width: 14, height: 14 }} />
                </S.QuantityButton>
                <S.QuantityText>{item.quantity}</S.QuantityText>
                <S.QuantityButton onPress={() => changeQuantity(item.id, 1)}>
                  <Image source={PlusIcon} style={{ width: 14, height: 14 }} />
                </S.QuantityButton>
              </S.QuantityWrapper>
              <View style={{ flex: 1 }} />
              <S.PriceText>
                {(getNumericPrice(item.price) * item.quantity).toLocaleString()}원
              </S.PriceText>
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
        <CustomGradientBtn title="구매하기" onPress={() => {}} />
      </S.BottomButtonWrapper>
    </S.Container>
  );
}
