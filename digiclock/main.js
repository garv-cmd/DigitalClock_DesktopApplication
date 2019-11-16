const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

function time()
{             var time = new Date();
              var hrs = time.getHours();
              var min = time.getMinutes();
              var sec = time.getSeconds();
              if (hrs > 12)
              {
                  hrs = hrs - 12;
              }
              if (hrs == 0)
              {
                  hrs = 12;
              }
              if (hrs < 12)
              {
                  hrs = '0'+hrs;

              }
               if (min < 10)
              {
                  min = '0'+min;

              }
               if (sec < 10)
              {
                  sec = '0'+sec;

              }
              document.getElementById('d01').innerHTML=hrs;
              document.getElementById('d02').innerHTML=min;
              document.getElementById('d03').innerHTML=sec;


    }
time()
setInterval(time,1000)