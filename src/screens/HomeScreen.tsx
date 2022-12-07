import { Text, View } from '@components/Themed';
import { RootTabScreenProps } from '@/types';
import WyreWidget from '../components/widgets/WyreWidget';
import PlaidModal from '../components/widgets/PlaidModal';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View>
      <WyreWidget />
      <PlaidModal />
      <View lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
    </View>
  );
}