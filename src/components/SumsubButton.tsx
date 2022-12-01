import { Button } from 'react-native';
import { launchSNSMobileSDK } from '../util/launchSNSMobileSDK ';

export default function SumsubButton() {
  return <Button onPress={launchSNSMobileSDK} title="Launch SumSub SDK" />;
}
