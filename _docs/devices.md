---
title: Documentation
permalink: /docs/devices/
tags: 
  - devices
---

A module for determining the type of device and orientation. This module allows you to check whether the 
device is a mobile phone, tablet, or desktop, as well as determine their orientation.

### Usage

Import the module into your JS:
```javascript
import { devices } from '@lukovio/wskit';
```

#### Example Usage
```javascript
if (devices.mobile()) {
  doSomethingOnMobileOnly();
} else if (devices.tablet()) {
  doSomethingOnTabletOnly();
} else {
  doSomethingOnDesktop();
}
```
### API

#### `smallMobile()`
Checks if the device is a small mobile.

**Dimensions:**
- Maximum width: 320px

**Returns:**
- (boolean): `true` if the device is a small mobile, otherwise `false`.

---

#### `smallMobileLandscape()`
Checks if the device is a small mobile in landscape orientation.

**Dimensions:**
- Maximum height: 320px
- Orientation: landscape

**Returns:**
- (boolean): `true` if the device is a small mobile and in landscape orientation, otherwise `false`.

---

#### `smallMobilePortrait()`
Checks if the device is a small mobile in portrait orientation.

**Dimensions:**
- Maximum width: 320px
- Orientation: portrait

**Returns:**
- (boolean): `true` if the device is a small mobile and in portrait orientation, otherwise `false`.

---

#### `mobile()`
Checks if the device is mobile.

**Dimensions:**
- Maximum width: 767px

**Returns:**
- (boolean): `true` if the device is mobile, otherwise `false`.

---

#### `mobileLandscape()`
Checks if the device is mobile in landscape orientation.

**Dimensions:**
- Maximum height: 767px
- Orientation: landscape

**Returns:**
- (boolean): `true` if the device is mobile and in landscape orientation, otherwise `false`.

---

#### `mobilePortrait()`
Checks if the device is mobile in portrait orientation.

**Dimensions:**
- Maximum width: 767px
- Orientation: portrait

**Returns:**
- (boolean): `true` if the device is mobile and in portrait orientation, otherwise `false`.

---

#### `tablet()`
Checks if the device is a tablet.

**Dimensions:**
- Minimum width: 768px
- Maximum width: 1024px

**Returns:**
- (boolean): `true` if the device is a tablet, otherwise `false`.

---

#### `tabletLandscape()`
Checks if the device is a tablet in landscape orientation.

**Dimensions:**
- Minimum width: 768px
- Maximum width: 1024px
- Orientation: landscape

**Returns:**
- (boolean): `true` if the device is a tablet and in landscape orientation, otherwise `false`.

---

#### `tabletPortrait()`
Checks if the device is a tablet in portrait orientation.

**Dimensions:**
- Minimum width: 768px
- Maximum width: 1024px
- Orientation: portrait

**Returns:**
- (boolean): `true` if the device is a tablet and in portrait orientation, otherwise `false`.

---

#### `desktop()`
Checks if the device is a desktop.

**Dimensions:**
- Minimum width: 1025px

**Returns:**
- (boolean): `true` if the device is a desktop, otherwise `false`.

### Notes

This module allows hiding and expanding long texts. Users can see only a portion of the text, and by clicking the "Read more" button, they can reveal the rest. The module also supports setting an active class for customizing the appearance.
