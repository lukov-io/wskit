---
title: Examples
permalink: /docs/devices/example/
---

Device Type Detection Example
<script type="module">
  import { devices } from "/js-utils/assets/js/bundle.js";
  document.addEventListener('DOMContentLoaded', function() {getDevice()});
  function getDevice(){
    const checkDeviceButtons = document.getElementById('check-device');
    const resultDiv = document.getElementById('result');
    if (!checkDeviceButtons || !resultDiv) {
      return;
    }
    checkDeviceButtons.addEventListener('click', function(){
      let message = 'You are using: ';
      if (devices.smallMobileLandscape()) {
        message += 'a small mobile device in landscape mode.';
      } else if (devices.smallMobilePortrait()) {
        message += 'a small mobile device in portrait mode.';
      } else if (devices.mobileLandscape()) {
        message += 'a mobile device in landscape mode.';
      } else if (devices.mobilePortrait()) {
        message += 'a mobile device in portrait mode.';
      } else if (devices.tabletLandscape()) {
        message += 'a tablet in landscape mode.';
      } else if (devices.tabletPortrait()) {
        message += 'a tablet in portrait mode.';
      } else if (devices.desktop()) {
        message += 'a desktop computer.';
      } else {
        message += 'an unknown device.';
      }
      resultDiv.textContent = message;
    })
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .example-container {
    max-width: 100%;
    padding: max(20px, 3vw);
    display: flex;
    flex-direction: column;
    align-items: center
  }
  h5 {
    font-size: max(22px, 1vw);
    width: 100%;
    margin: 0;
    white-space: wrap;
    text-align: center;  
  }
  button {
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    width: max(250px, 10vw);
  }
</style>

### Get a device

<ul class="nav nav-tabs">
  <li class="active">
    <a href="#js" data-toggle="tab">JS</a>
  </li>
  <li>
    <a href="#js_result" data-toggle="tab">Result</a>
  </li>
</ul>
<div id="example" class="tab-content">
  <div class="tab-pane fade active in" id="js">
{% highlight html %}
<script type="module">
  import { devices } from 'js-utils';
  if (devices.smallMobileLandscape()) {
    message += 'a small mobile device in landscape mode.';
  } else if (devices.smallMobilePortrait()) {
    message += 'a small mobile device in portrait mode.';
  } else if (devices.mobileLandscape()) {
    message += 'a mobile device in landscape mode.';
  } else if (devices.mobilePortrait()) {
    message += 'a mobile device in portrait mode.';
  } else if (devices.tabletLandscape()) {
    message += 'a tablet in landscape mode.';
  } else if (devices.tabletPortrait()) {
    message += 'a tablet in portrait mode.';
  } else if (devices.desktop()) {
    message += 'a desktop computer.';
  } else {
    message += 'an unknown device.';
  }
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="js_result">
    <div class="example-container">
      <h5>Device Type Detection Example</h5>
      <button id="check-device">Check Device Type</button>
      <div id="result"></div>
    </div>  
  </div>
</div>


