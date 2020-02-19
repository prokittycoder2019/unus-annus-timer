function padZero(n){
  s=""+n;
  if (s.length < 2) return ("0"+s);
  return s;
}

function timer() {
  dayStart = 268;
  hrStart = 12;
  minStart = 0;
  secStart = 0;
  
  clockRate = 1;
  
  totalStartSec = ((dayStart*24 + hrStart)*60 + minStart)*60 + secStart;
  now = new Date();
  secSinceMidnight = 3600*now.getHours() + 60*now.getMinutes() + now.getSeconds();
  curTotalSec = totalStartSec - secSinceMidnight;
  
  curDay = Math.floor(curTotalSec/(24*3600));
  curHr = Math.floor((curTotalSec%(24*3600))/3600);
  curMin = Math.floor((curTotalSec%3600)/60);
  curSec = curTotalSec%60;
  leftTime = padZero(curDay) + ":" + padZero(curHr) + ":" + padZero(curMin) + ":" + padZero(curSec);
  document.getElementById("timer").innerHTML = leftTime;
}
var myTimer = setInterval(timer,1000);
