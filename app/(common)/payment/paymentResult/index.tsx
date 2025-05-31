import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { S } from './PaymentResult.style';
import { View } from 'react-native';
import { usePaymentApi } from '@/hooks/api/usePaymantApi';
import { useEffect, useState } from 'react';

const Images = {
  successIcon: require('@/assets/images/payment/success-icon.webp'),
};

export default function PaymentResult() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { postPaymentVerifyMutation } = usePaymentApi();
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState<string>('');

  const impSuccess = params.impSuccess as string;
  const success = params.success as string;
  const impUid = params.impUid as string;
  const errorMsg = params.errorMsg as string;
  const message = params.message as string;

  const isPaymentSuccessful = impSuccess === 'true' || success === 'true';

  useEffect(() => {
    if (isPaymentSuccessful && impUid) {
      verifyPayment(impUid);
    }
  }, []);

  const verifyPayment = async (impUid: string) => {
    try {
      const response = await postPaymentVerifyMutation.mutateAsync({ impUid });

      if (response.success) {
        setIsVerified(true);
      } else {
        setVerificationError('결제 검증에 실패했습니다.');
      }
    } catch (error: any) {
      console.error('Payment verification error:', error);
      setVerificationError('결제 검증 중 오류가 발생했습니다.');
    }
  };

  const handleConfirm = () => {
    if (isVerified) {
      router.replace('/(tabs)/home');
    } else {
      router.back();
    }
  };

  const getDisplayContent = () => {
    if (!isPaymentSuccessful) {
      return {
        title: '결제 실패',
        subtitle: errorMsg || message || '결제가 취소되었습니다.',
        buttonTitle: '다시 시도',
      };
    }

    if (postPaymentVerifyMutation.isPending) {
      return {
        title: '결제 검증 중',
        subtitle: '결제 완료를 확인하고 있습니다.',
        buttonTitle: '확인',
      };
    }

    if (verificationError) {
      return {
        title: '결제 검증 실패',
        subtitle: verificationError,
        buttonTitle: '확인',
      };
    }

    if (isVerified) {
      return {
        title: '결제 완료',
        subtitle: '주문하신 상품 결제가 완료되었습니다',
        buttonTitle: '확인',
      };
    }

    return {
      title: '결제 처리 중',
      subtitle: '결제를 처리하고 있습니다.',
      buttonTitle: '확인',
    };
  };

  const { title, subtitle, buttonTitle } = getDisplayContent();

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: 'black' }}>
      <S.PaymentResultContainer>
        <S.ContentContainer>
          <S.SuccessImage source={Images.successIcon} resizeMode="contain" />
          <S.TitleText>{title}</S.TitleText>
          <S.SubtitleText>{subtitle}</S.SubtitleText>
        </S.ContentContainer>

        <S.ButtonContainer>
          <CustomGradientBtn
            title={buttonTitle}
            onPress={handleConfirm}
            isPending={postPaymentVerifyMutation.isPending}
            disabled={postPaymentVerifyMutation.isPending}
          />
        </S.ButtonContainer>
      </S.PaymentResultContainer>
    </View>
  );
}
