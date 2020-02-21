function padZero(n){
  s=""+n;
  if (s.length < 2) return ("0"+s);
  return s;
}

function timer() {
  endDate = new Date("15 Sep 2020 00:00:00 PST");  
  now = new Date();
  seconds = endDate.getTime() - now.getTime();
  
  curDay = Math.floor((seconds/(24*3600));
  curHr = Math.floor((seconds%(24*3600))/3600);
  curMin = Math.floor((seconds%3600)/60);
  curSec = seconds%60;
  leftTime = padZero(curDay) + ":" + padZero(curHr) + ":" + padZero(curMin) + ":" + padZero(curSec);
  document.getElementById("timer").innerHTML = leftTime;
}
 
var myTimer = setInterval(timer,1000);
