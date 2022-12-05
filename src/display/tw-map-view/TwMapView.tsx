import React, { FC } from 'react';
import { View, Text, ViewProps } from 'react-native';
import { MarkerProps } from './type';

export const TwMapView: FC<ViewProps> = props => {
  return (
    <View style={props.style}>
      <Text>Web Not Supported</Text>
    </View>
  );
};
//@ts-ignore
export const TwMapMaker: FC<MarkerProps> = View;
export const TwMapViewSdk = {
  init() {
    //
  },
};
