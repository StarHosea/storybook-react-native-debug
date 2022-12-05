import { getStorybookUI } from '@storybook/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import './doctools';
import './storybook.requires.js';


const StorybookUIRoot = getStorybookUI({
  //@ts-ignore
  asyncStorage: AsyncStorage,
  onDeviceUI: false,
  disableWebsockets: true,
  shouldPersistSelection: true,
});

export default StorybookUIRoot;
