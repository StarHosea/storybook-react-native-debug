import React, { FC, ForwardRefExoticComponent } from 'react';
import { MarkerProps, TwMapViewProps } from './type';
import { AMapSdk, MapView, Marker } from 'react-native-amap3d';

// @ts-ignore
export const TwMapView: ForwardRefExoticComponent<TwMapViewProps> = MapView as any;
//@ts-ignore
export const TwMapMaker: FC<MarkerProps> = Marker as any;
export const TwMapViewSdk = AMapSdk;
