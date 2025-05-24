import { S } from './HeaderRightWrapper.style';

type Props = {
  children: React.ReactNode;
};

export default function HeaderRightWrapper({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
