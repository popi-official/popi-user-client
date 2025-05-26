import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  startDate: string;
  endDate: string;
};

/**
 * @param startDate reservableDate의 첫번째 날짜입니다. (ex. 2025-05-08)
 * @param endDate reservableDate의 마지막 날짜입니다. (ex. 2025-05-31)
 * @returns
 */

// export default function CustomHeader({ startDate, endDate }: Props) {
//   const startMonth = new Date(startDate).getMonth() + 1;
//   const endMonth = new Date(endDate).getMonth() + 1;

//   const handleNextMonth = () => {

//   }

//   return <View />;
// }

const CustomHeader = ({ month, year, onPressLeft, onPressRight }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: '#1B1B1C',
    }}
  >
    <TouchableOpacity onPress={onPressLeft}>
      <Text style={{ color: 'white', fontSize: 18 }}>‹</Text>
    </TouchableOpacity>

    <Text
      style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'pretendard',
      }}
    >
      {year}년 {month}월
    </Text>

    <TouchableOpacity onPress={onPressRight}>
      <Text style={{ color: 'white', fontSize: 18 }}>›</Text>
    </TouchableOpacity>
  </View>
);

export default CustomHeader;
