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

import { TwMapViewProps } from '../type';

export const twMapViewMock = (args?: Partial<TwMapViewProps>): Partial<TwMapViewProps> => {
  return {
    myLocationEnabled: true,
    myLocationButtonEnabled: true,
    initialCameraPosition: {
      target: {
        latitude: 31.75,
        longitude: 119.93,
      },
      zoom: 12,
    },
    ...args,
  };
};
