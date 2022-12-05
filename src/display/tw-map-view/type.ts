import type { NativeSyntheticEvent } from 'react-native';
import * as React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';
import {
  MapType,
  CameraPosition,
  CameraEvent,
  Point,
  LatLng,
  MapPoi,
  TwMapCameraPosition,
} from './base-types';

/**
 * 属性
 */
export interface TwMapViewProps extends React.RefAttributes<TwMapHandle>, ViewProps {
  /**
   * 地图类型
   */
  mapType?: MapType;

  /**
   * 初始状态
   */
  initialCameraPosition?: CameraPosition;

  /**
   * 是否显示当前定位
   */
  myLocationEnabled?: boolean;

  /**
   * 是否显示室内地图
   */
  indoorViewEnabled?: boolean;

  /**
   * 是否显示3D建筑
   */
  buildingsEnabled?: boolean;

  /**
   * 是否显示标注
   */
  labelsEnabled?: boolean;

  /**
   * 是否显示指南针
   */
  compassEnabled?: boolean;

  /**
   * 是否显示放大缩小按钮
   *
   * @platform android
   */
  zoomControlsEnabled?: boolean;

  /**
   * 是否显示比例尺
   */
  scaleControlsEnabled?: boolean;

  /**
   * 是否显示定位按钮
   *
   * @platform android
   */
  myLocationButtonEnabled?: boolean;

  /**
   * 是否显示路况
   */
  trafficEnabled?: boolean;

  /**
   * 最大缩放级别
   */
  maxZoom?: number;

  /**
   * 最小缩放级别
   */
  minZoom?: number;

  /**
   * 是否启用缩放手势，用于放大缩小
   */
  zoomGesturesEnabled?: boolean;

  /**
   * 是否启用滑动手势，用于平移
   */
  scrollGesturesEnabled?: boolean;

  /**
   * 是否启用旋转手势，用于调整方向
   */
  rotateGesturesEnabled?: boolean;

  /**
   * 是否启用倾斜手势，用于改变视角
   */
  tiltGesturesEnabled?: boolean;

  /**
   * 设定定位的最小更新距离
   *
   * @platform ios
   */
  distanceFilter?: number;

  /**
   * 设定最小更新角度，默认为 1 度
   *
   * @platform ios
   */
  headingFilter?: number;

  /**
   * 点击事件
   */
  onPress?: (event: NativeSyntheticEvent<LatLng>) => void;

  /**
   * 标注点击事件
   */
  onPressPoi?: (event: NativeSyntheticEvent<MapPoi>) => void;

  /**
   * 长按事件
   */
  onLongPress?: (event: NativeSyntheticEvent<LatLng>) => void;

  /**
   * 地图状态改变事件，随地图状态变化不停地触发
   */
  onCameraMove?: (event: NativeSyntheticEvent<CameraEvent>) => void;

  /**
   * 地图状态改变事件，在停止变化后触发
   */
  onCameraIdle?: (event: NativeSyntheticEvent<CameraEvent>) => void;

  /**
   * 地图初始化完成事件
   */
  onLoad?: (event: NativeSyntheticEvent<void>) => void;

  /**
   * 地图定位更新事件
   */
  onLocation?: (event: NativeSyntheticEvent<GeolocationPosition>) => void;
}

export interface TwMapHandle {
  /**
   * 移动相机
   * @param position 位置
   * @param durationMs 移动时间，必须大于 0，否则不会移动
   */
  moveCamera(position: TwMapCameraPosition, durationMs?: number): void;

  /**
   * 点坐标转地理坐标
   * @param point
   */
  getLatLng(point: Point): Promise<LatLng>;
}

export interface MarkerProps {
  /**
   * 坐标
   */ position: LatLng;

  /**
   * 图标
   */
  icon?: ImageSourcePropType;

  /**
   * 透明度 [0, 1]
   *
   * @platform android
   */
  opacity?: number;

  /**
   * 是否可拖拽
   */
  draggable?: boolean;

  /**
   * 是否平贴地图
   *
   * @platform android
   */
  flat?: boolean;

  /**
   * 层级
   */
  zIndex?: number;

  /**
   * 覆盖物锚点比例
   *
   * @link http://a.amap.com/lbs/static/unzip/Android_Map_Doc/3D/com/amap/api/maps/model/Marker.html#setAnchor-float-float-
   * @platform android
   */
  anchor?: Point;

  /**
   * 覆盖物偏移位置
   *
   * @link http://a.amap.com/lbs/static/unzip/iOS_Map_Doc/AMap_iOS_API_Doc_3D/interface_m_a_annotation_view.html#a78f23c1e6a6d92faf12a00877ac278a7
   * @platform ios
   */
  centerOffset?: Point;

  /**
   * 自定义 View
   */
  children?: React.ReactNode;

  /**
   * 点击事件
   */
  onPress?: () => void;

  /**
   * 拖放开始事件
   */
  onDragStart?: () => void;

  /**
   * 拖放进行事件，类似于 mousemove，在结束之前会不断调用
   */
  onDrag?: () => void;

  /**
   * 拖放结束事件
   */
  onDragEnd?: (event: NativeSyntheticEvent<LatLng>) => void;
}
