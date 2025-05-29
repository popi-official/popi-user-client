import { ImageSourcePropType, Modal, TouchableWithoutFeedback } from 'react-native';
import { S } from './NoticeModal.style';
import { Theme } from '@/theme/Theme';

type ButtonConfig = {
  title: string;
  onPress: () => void;
};

type Props = {
  visible: boolean;
  title: string;
  buttons: ButtonConfig[];
  onClose?: () => void;
  icon?: ImageSourcePropType;
};

export default function NoticeModal({ visible, title, buttons, onClose, icon }: Props) {
  const isTwo = buttons.length === 2;
  const { colors, start, end } = Theme.gradients.button;

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Backdrop />
      </TouchableWithoutFeedback>

      <S.Container>
        <S.TitleWrapper>
          {icon && <S.Icon source={icon} resizeMode="contain" />}
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        {isTwo ? (
          <S.ButtonRowCenter>
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
          </S.ButtonRowCenter>
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
