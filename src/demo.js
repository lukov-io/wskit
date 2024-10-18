import { accordion, tabs, cookie, readMore, devices } from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    tabs.run();
    accordion.run();
    readMore.run();
    getDevice();
    cookieManager();
});

const getDevice = ()=> {
    const checkDeviceButtons = document.getElementById('check-device');
    const resultDiv = document.getElementById('result');

    if (!checkDeviceButtons || !resultDiv) {
        return;
    }

    checkDeviceButtons.addEventListener('click', () => {
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

const cookieManager = () => {
    const setCookieButton = document.getElementById('setCookie');
    const getCookieButton = document.getElementById('getCookie');
    const removeCookieButton = document.getElementById('removeCookie');
    const cookieList = document.getElementById('cookieList');
    const cookieValueText = document.getElementById('cookieValueText');

    if (!setCookieButton || !getCookieButton || !removeCookieButton || !cookieList || !cookieValueText) {
        return;
    }

    const updateCookieList = () => {
        cookieList.innerHTML = '';
        const cookies = document.cookie.split('; ');
        cookies.forEach(cookie => {
            const li = document.createElement('li');
            li.textContent = cookie;
            cookieList.appendChild(li);
        });
    };

    setCookieButton.addEventListener('click', () => {
        const name = document.getElementById('cookieName').value;
        const value = document.getElementById('cookieValue').value;
        const days = document.getElementById('cookieDays').value;
        cookie.set(name, value, days);
        updateCookieList();
    });

    getCookieButton.addEventListener('click', () => {
        const name = document.getElementById('getCookieByName').value;
        const value = cookie.get(name);
        cookieValueText.textContent = value ? `Value: ${value}` : 'Cookie not found';
    });

    removeCookieButton.addEventListener('click', () => {
        const name = document.getElementById('removeCookieByName').value;
        cookie.remove(name);
        updateCookieList();
    });

    updateCookieList();
}
