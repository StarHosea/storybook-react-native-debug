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
import React from 'react';
import {Story} from '@storybook/react';
import {twMapViewMock} from './mock';

import {TwMapView, TwMapViewSdk} from '../TwMapView';
import {TwMapViewProps} from '../type';
import {View} from 'react-native';

export default {
  title: 'display/tw-map-view',
  component: TwMapView,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};
TwMapViewSdk.init("mykey");
const Template: Story<TwMapViewProps> = (args: TwMapViewProps) => {
  return (
    <View style={{ flex: 1 }}>
      <TwMapView
        style={{ flex: 1 }}
      />
    </View>
  );
};

export const Basic = Template.bind({});
Basic.args = twMapViewMock({});
