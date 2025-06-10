import { ImageSourcePropType, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { S } from './NoticeModal.style';
import { Theme } from '@/theme/Theme';

type ButtonConfig = {
  title: string;
  onPress: () => void;
};

type Props = {
  visible: boolean;
  title: string;
  subTitle?: string;
  buttons: ButtonConfig[];
  onClose?: () => void;
  icon?: ImageSourcePropType;
};

export default function NoticeModal({ visible, title, subTitle, buttons, onClose, icon }: Props) {
  const isTwo = buttons.length === 2;
  const { colors, start, end } = Theme.gradients.button;

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Backdrop />
      </TouchableWithoutFeedback>

      <S.Container isSubTitle={!!subTitle}>
        <S.TitleWrapper isSubTitle={!!subTitle}>
          {icon && <S.Icon source={icon} />}
          {subTitle ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <S.Title>{title}</S.Title>
              <S.SubTitle>{subTitle}</S.SubTitle>
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <S.Title>{title}</S.Title>
            </View>
          )}
        </S.TitleWrapper>
        {isTwo ? (
          <S.ButtonTowRowCenter>
            <S.GrayButton onPress={buttons[0].onPress} style={{ marginRight: 13 }}>
              <S.GrayButtonText>{buttons[0].title}</S.GrayButtonText>
            </S.GrayButton>
            <S.ButtonContainer onPress={buttons[1].onPress}>
              <S.GradientBackground
                colors={colors}
                start={start}
                end={end}
                style={{ marginLeft: 13 }}
              >
                <S.GradientButtonText>{buttons[1].title}</S.GradientButtonText>
              </S.GradientBackground>
            </S.ButtonContainer>
          </S.ButtonTowRowCenter>
        ) : (
          <S.ButtonRowCenter>
            <S.ButtonContainer onPress={buttons[0].onPress}>
              <S.GradientBackground colors={colors} start={start} end={end}>
                <S.GradientButtonText>{buttons[0].title}</S.GradientButtonText>
              </S.GradientBackground>
            </S.ButtonContainer>
          </S.ButtonRowCenter>
        )}
      </S.Container>
    </Modal>
  );
}
