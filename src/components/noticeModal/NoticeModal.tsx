import { ImageSourcePropType, Modal, TouchableWithoutFeedback } from 'react-native';
import { S } from './NoticeModal.style';

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

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Backdrop />
      </TouchableWithoutFeedback>

      <S.Container>
        <S.TitleWrapper>
          {icon && <S.Icon source={icon} />}
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        {isTwo ? (
          <S.ButtonRowBetween>
            <S.GrayButton
              title={buttons[0].title}
              onPress={buttons[0].onPress}
              fontSize={15}
              borderRadius={12}
            />
            <S.GradientButton
              title={buttons[1].title}
              onPress={buttons[1].onPress}
              fontSize={15}
              borderRadius={12}
            />
          </S.ButtonRowBetween>
        ) : (
          <S.ButtonRowCenter>
            <S.GradientButton
              title={buttons[0].title}
              onPress={buttons[0].onPress}
              borderRadius={12}
              fontSize={15}
            />
          </S.ButtonRowCenter>
        )}
      </S.Container>
    </Modal>
  );
}
