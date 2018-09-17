import {
  Dimensions,
  PixelRatio,
  AsyncStorage
} from 'react-native';

export function pxToDp(Px) {
  //app 只有竖屏模式，所以可以只获取一次 width
  const deviceWidthDp = Dimensions.get('window').width;
  // UI 默认给图是 750
  const uiWidthPx = 750;
  // px to dp

  return (PixelRatio.roundToNearestPixel(Px) * deviceWidthDp) / uiWidthPx;
}

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export class DeviceStorage {
  static get(key) {
    return AsyncStorage.getItem(key).then(value => {
      const jsonValue = JSON.parse(value);
      return jsonValue;
    });
  }

  static setItem(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static update(key, value) {
    return DeviceStorage.get(key).then(item => {
      value =
        typeof value === 'String' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }

  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
}



  // _measure = ()=>{
  //   this.nav.measure((fx, fy, width, height, px, py) => {
  //     console.log('Component width is: ' + width)
  //     console.log('Component height is: ' + height)
  //     console.log('X offset to frame: ' + fx)
  //     console.log('Y offset to frame: ' + fy)
  //     console.log('X offset to page: ' + px)
  //     console.log('Y offset to page: ' + py)
  //   })
  // }