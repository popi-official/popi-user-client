import { S } from './HeaderLeftWrapper.style';

type Props = {
  children: React.ReactNode;
};

export default function HeaderLeftWrapper({ children }: Props) {
  return <S.HeaderLeftWrapperContainer>{children}</S.HeaderLeftWrapperContainer>;
}
