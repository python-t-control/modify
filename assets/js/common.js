'use strict';
{
  let time;
  function showNowDate() {
    let target = document.getElementById('Date_now');
    let now = new Date();
    let Hour = now.getHours();
    let Minute = now.getMinutes();
    Hour = ('0' + Hour).slice(-2);
    Minute = ('0' + Minute).slice(-2);
    time = '（' + Hour + ':' + Minute + '）';
    target.innerHTML = '現在時刻' + time;
  }

  window.onload = function () {
    setInterval(showNowDate, 1000);
  };

  $('body').keypress(function () {
    element.focus();
  });

  let element = document.getElementById('text_content');

  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      let text = element.value + time;
      navigator.clipboard.writeText(text);
    }
    return false;
  });

  showNowDate();
}
