function updateClock() {
  const clockElem = document.getElementById('clock');
  const now = new Date();
  // 時刻を「hh:mm:ss」の形式で作成
  const timeString = now.toLocaleTimeString();
  clockElem.textContent = timeString;
}

// ページ読み込み時と1秒ごとに時計を更新
updateClock();
setInterval(updateClock, 1000);
