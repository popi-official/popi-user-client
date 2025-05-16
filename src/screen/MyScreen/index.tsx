import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {RootStackNavigationType} from '../../@types/StackNavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function MyScreen() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackNavigationType, 'Home' | 'Test'>
    >();

  const handleRouteTest = () => {
    navigation.navigate('Home', {screen: 'PopUpList', params: {PopUpId: 1}});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My Screen</Text>
      <Button onPress={handleRouteTest}>
        <Text>버튼</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Test')}>버튼2</Button>
    </View>
  );
}
