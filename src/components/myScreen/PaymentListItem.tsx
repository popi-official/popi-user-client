import { View } from 'react-native';
import { S } from '../../../app/(tabs)/my/Style.style';
import { PaymentItem } from '@/types/MyPageScreen';
import { usePopUpDetailApi } from '@/hooks/api/usePopUpDetailApi';

type Props = {
  popupId: number;
  paidAt: string;
  items: PaymentItem[];
};

export default function PaymentListItem({ popupId, paidAt, items }: Props) {
  const { popUpDetailInfo } = usePopUpDetailApi({ popupId });
  return (
    <View>
      <S.PaymentDateText>
        {new Date(paidAt).toLocaleDateString('en-CA').replace(/-/g, '/')}
      </S.PaymentDateText>

      <S.PaymentDivider />
      <S.PopupNameBox>
        <S.PopupNameText numberOfLines={1} ellipsizeMode="tail">
          {popUpDetailInfo?.popupName}
        </S.PopupNameText>
      </S.PopupNameBox>

      {items.map((item, index) => (
        <S.PurchasedItem key={index}>
          <View style={{ flex: 1 }}>
            <S.ItemTitle numberOfLines={1} ellipsizeMode="tail">
              {item.itemName}
            </S.ItemTitle>
            <S.ItemDetail>
              수량 : {item.quantity}개{'\n'}
              {item.price.toLocaleString()}원
            </S.ItemDetail>
            {index !== items.length - 1 && <S.ItemDivider />}
          </View>
        </S.PurchasedItem>
      ))}
    </View>
  );
}
