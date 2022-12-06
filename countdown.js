function Countdown ()
       {
           var countdown = document.getElementById('countdown')
           s = duree
           m = 0
           h = 0
       if(s<0) {
         // Live launch phrase
           countdown.innerHTML="Le live va commencer dans un instant !"
       }
       else {
           if(s>59){
               m=Math.floor(s/60)
               s=s-m*60
           }
           if(m>59){
               h=Math.floor(m/60)
               m=m-h*60
           }
           if(s<10){
             // if the counter is less than 10 seconds then we add a 0 in front of the seconds digit
               s="0"+s
           }
           if(m<10){
            // if the counter is less than 10 minutes then we add a 0 in front of the minutes number
               m="0"+m
           }
           countdown.innerHTML="LANCEMENT DANS <hr> <b>"+ m + ":" + s + "</b>"// Phrase d'attente de live
       }
       duree=duree-1
       window.setTimeout("Countdown();",999)
       }
       //allows you to change the duration of the countdown (time in seconds)
          duree="300"
          Countdown()
