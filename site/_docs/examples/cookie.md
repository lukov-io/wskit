---
title: Examples
permalink: /docs/cookie/example/
tags: 
  - cookie
---

Example of working with cookies
<script type="module">
  import { cookie } from '/js-utils/assets/js/bundle.js';
  document.addEventListener('DOMContentLoaded', function() {
    cookieManager()
  });
  function cookieManager(){
    const setCookieButton = document.getElementById('setCookie');
    const getCookieButton = document.getElementById('getCookie');
    const removeCookieButton = document.getElementById('removeCookie');
    const cookieLists = document.querySelectorAll('.cookie__list');
    const cookieValueText = document.getElementById('cookieValueText');
    if (!setCookieButton || !getCookieButton || !removeCookieButton || !cookieList || !cookieValueText) {
      return;
    }
    function updateCookieList() {
      cookieLists.forEach(function(cookieList) {
        cookieList.innerHTML = '';
        const cookies = document.cookie.split('; ');
        cookies.forEach(function(cookie) {
          const li = document.createElement('li');
          li.textContent = cookie;
          cookieList.appendChild(li);
        });
      });
    }
    setCookieButton.addEventListener('click', function(){
      const name = document.getElementById('cookieName').value;
      const value = document.getElementById('cookieValue').value;
      const days = document.getElementById('cookieDays').value;
      cookie.set(name, value, days);
      updateCookieList();
    });
    getCookieButton.addEventListener('click', function(){
      const name = document.getElementById('getCookieByName').value;
      const value = cookie.get(name);
      cookieValueText.textContent = value ? `Value: ${value}` : 'Cookie not found';
    });
    removeCookieButton.addEventListener('click', function(){
      const name = document.getElementById('removeCookieByName').value;
      cookie.remove(name);
      updateCookieList();
    });
    updateCookieList();
  }
</script>
<style>
  * {
    box-sizing: border-box;
  }

  .cookie {
    max-width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    gap: 10px;
  
    .cookie__managing {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      width: 39%;

      .cookie__container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
      }
    }

    .cookie__viewing {
      height: 100%;
      width: 59%;

      .cookie__container {
        width: 100%;
        height: 100%;

        .cookie__list {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding-left: 10px;

          li {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }

    .cookie__container {
      border: 1px solid #ccc;
      background-color: #f9f9f9;
      padding: 10px;

      .cookie__input {
        margin: 5px 0;
        padding: 0 5px;
      }
    }
  }
</style>

### Set a cookie

<ul class="nav nav-tabs">
  <li class="active">
    <a href="#js1" data-toggle="tab">JS</a>
  </li>
  <li>
    <a href="#js_example1" data-toggle="tab">Result</a>
  </li>
</ul>
<div id="example1" class="tab-content">
  <div class="tab-pane fade active in" id="js1">
{% highlight html %}
<script>
  import cookie from "js-utils";
  cookie.set('profile', 'JohnDoe', 7); //cookie set "profile=JohnDoe"
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade in" id="js_example1">
    <div class="cookie">
      <div class="cookie__managing">
        <div class="cookie__container">
          <h5>Set a cookie</h5>
          <input class="cookie__input" type="text" id="cookieName" placeholder="name"/>
          <input class="cookie__input" type="text" id="cookieValue" placeholder="value"/>
          <input class="cookie__input" type="number" id="cookieDays" placeholder="days"/>
          <button id="setCookie">cookie.set( name, value, days );</button>
        </div>
      </div>
      <div class="cookie__viewing">
        <div class="cookie__container">
          <h5>Current cookies</h5>
          <ul id="cookieList" class="cookie__list"></ul>
        </div>
      </div>
    </div>
  </div>
</div>

### Get a cookie

<ul class="nav nav-tabs">
  <li class="active">
    <a href="#js2" data-toggle="tab">JS</a>
  </li>
  <li>
    <a href="#js_example2" data-toggle="tab">Result</a>
  </li>
</ul>
<div id="example1" class="tab-content">
  <div class="tab-pane fade active in" id="js2">
{% highlight html %}
<script>
  import cookie from "js-utils";
  cookie.get('profile'); //cookie get "JohnDoe"
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade in" id="js_example2">
    <div class="cookie">
      <div class="cookie__managing">
        <div class="cookie__container">
          <h5>Get cookies</h5>
          <input class="cookie__input" type="text" id="getCookieByName" placeholder="name"/>
          <button id="getCookie">cookie.get( name )</button>
        </div>
      </div>
      <div class="cookie__viewing">
        <div class="cookie__container">
          <h5>Cookie value</h5>
          <p id="cookieValueText">No cookie selected</p>
        </div>
      </div>
    </div>
  </div>
</div>

### Remove a cookie

<ul class="nav nav-tabs">
  <li class="active">
    <a href="#js3" data-toggle="tab">JS</a>
  </li>
  <li>
    <a href="#js_example3" data-toggle="tab">Result</a>
  </li>
</ul>
<div id="example1" class="tab-content">
  <div class="tab-pane fade active in" id="js3">
{% highlight html %}
<script>
  import cookie from "js-utils";
  cookie.remove(profile); // remove cookie with name "profile"
</script>  
{% endhighlight %}
  </div>
  <div class="tab-pane fade in" id="js_example3">
    <div class="tab-pane fade active in" id="js_example3">
      <div class="cookie">
        <div class="cookie__managing">
          <div class="cookie__container">
            <h5>Delete cookies</h5>
            <input class="cookie__input" type="text" id="removeCookieByName" placeholder="name"/>
            <button id="removeCookie">cookie.remove( name )</button>
          </div>
        </div>
        <div class="cookie__viewing">
          <div class="cookie__container">
            <h5>Current cookies</h5>
            <ul class="cookie__list"></ul>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>
