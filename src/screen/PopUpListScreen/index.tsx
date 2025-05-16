import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackWithParams} from '../../@types/StackNavigationType';

type PopUpListScreenProps = NativeStackScreenProps<
  HomeStackWithParams,
  'PopUpList'
>;

export default function PopUpListScreen({route}: PopUpListScreenProps) {
  const {PopUpId} = route.params;

  return (
    <View>
      <Text>PopUpListScreen</Text>
      <Text>PopUpId: {PopUpId}</Text>
    </View>
  );
}
