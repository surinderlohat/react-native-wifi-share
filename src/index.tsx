import { NativeModules } from 'react-native';

type WifiShareType = {
  multiply(a: number, b: number): Promise<number>;
};

const { WifiShare } = NativeModules;

export default WifiShare as WifiShareType;
