export type SupportedMedias =
  | 'mobileDeviceAndUp'
  | 'tabletDeviceAndUp'
  | 'smallDesktopDeviceAndUp'
  | 'largeDesktopDeviceAndUp'
  | 'desktopDeviceAndUp'
  | 'mobileDeviceAndDown'
  | 'tabletDeviceAndDown'
  | 'smallDesktopDeviceAndDown'
  | 'largeDesktopDeviceAndDown'
  | 'desktopDeviceAndDown'
  | 'mobileDeviceOnly'
  | 'tabletDeviceOnly'
  | 'smallDesktopDeviceOnly'
  | 'largeDesktopDeviceOnly'
  | 'desktopDeviceOnly';

export type SupportedMediasWidths =
  // 0 -> mobileDevice.breakPoint - 1
  | 'mobileDevice'

  // mobileDevice.breakPoint -> tabletDevice.breakPoint - 1
  | 'tabletDevice'

  // tabletDevice.breakPoint -> smallDesktopDevice.breakPoint - 1
  | 'smallDesktopDevice'

  // smallDesktopDevice.breakPoint -> desktopDevice.breakPoint - 1
  | 'desktopDevice'

  // desktopDevice.breakPoint -> Infinity
  | 'largeDesktopDevice';
