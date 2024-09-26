const cookieUtils = (() => {
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name) => {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookieItem = cookies[i];
      while (cookieItem.charAt(0) === ' ') cookieItem = cookieItem.substring(1, cookieItem.length);
      if (cookieItem.indexOf(nameEQ) === 0) return cookieItem.substring(nameEQ.length, cookieItem.length);
    }

    return null;
  };

  return { setCookie, getCookie };
})();

export default cookieUtils;
