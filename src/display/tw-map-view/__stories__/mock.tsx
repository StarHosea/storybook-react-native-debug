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
