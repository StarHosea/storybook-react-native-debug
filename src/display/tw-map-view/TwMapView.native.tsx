/*
 * Copyright (c) 2019 3will Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the 3will License v1.0
 * which accompanies this distribution, and is available at
 *
 *     http://www.3will.cn/licenses/license-v1.0
 *
 * Contributors:
 *    3will - initial API and implementation
 */
import React, { FC, ForwardRefExoticComponent } from 'react';
import { MarkerProps, TwMapViewProps } from './type';
import { AMapSdk, MapView, Marker } from 'react-native-amap3d';

// @ts-ignore
export const TwMapView: ForwardRefExoticComponent<TwMapViewProps> = MapView as any;
//@ts-ignore
export const TwMapMaker: FC<MarkerProps> = Marker as any;
export const TwMapViewSdk = AMapSdk;
