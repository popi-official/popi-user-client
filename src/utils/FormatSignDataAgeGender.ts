import { AgeOption, GenderOption } from '@/types/SignUpScreenType';
import { AgeType, GenderType } from '../../app/(common)/signUp';

export const FormatSignDataAgeGender = ({ age, gender }: { age: AgeType; gender: GenderType }) => {
  let formattedGender: GenderOption | null;

  switch (gender) {
    case '남성':
      formattedGender = 'MALE';
      break;
    case '여성':
      formattedGender = 'FEMALE';
      break;
    case null:
      formattedGender = null;
      break;
    default:
      formattedGender = null;
      break;
  }

  let formattedAge: AgeOption | null;

  switch (age) {
    case '10대':
      formattedAge = 'TEENAGER';
      break;
    case '20대':
      formattedAge = 'TWENTIES';
      break;
    case '30대':
      formattedAge = 'THIRTIES';
      break;
    case '40대 이상':
      formattedAge = 'FORTIES_AND_ABOVE';
      break;
    case null:
      formattedAge = null;
      break;
    default:
      formattedAge = null;
      break;
  }

  return {
    formattedGender,
    formattedAge,
  };
};
