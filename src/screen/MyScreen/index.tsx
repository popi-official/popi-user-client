import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {HomeStackWithParams} from '../../@types/StackNavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackWithParams>;
};

export default function MyScreen({navigation}: Props) {
  const handleRouteTest = () => {
    navigation.navigate('HomeTab', {screen: 'Home'});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My Screen</Text>
      <Button onPress={handleRouteTest}>
        <Text>버튼</Text>
      </Button>
      <Button
        onPress={() =>
          navigation.navigate('HomeTab', {
            screen: 'PopUpList',
            params: {PopUpId: 1},
          })
        }>
        버튼2
      </Button>
    </View>
  );
}
