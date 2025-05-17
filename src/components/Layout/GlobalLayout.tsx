import React from 'react';
import {S} from './GlobalLayout.style';

type Props = {
  children: React.ReactNode;
};

export default function GlobalLayout({children}: Props) {
  return <S.GlobalLayoutView>{children}</S.GlobalLayoutView>;
}
