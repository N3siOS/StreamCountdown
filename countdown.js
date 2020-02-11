function t ()
       {
           var compteur = document.getElementById('compteur')
           s = duree
           m = 0
           h = 0
       if(s<0) {
           compteur.innerHTML="Le live va commencer dans un instant !" // Phrase de lancement de live
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
           if(s<10){ // si le compteur est a moins de 10 seconde alors on rajoute un 0 devant le chiffre des secondes
               s="0"+s
           }
           if(m<10){
               m="0"+m // si le compteur est a moins de 10 minutes alors on rajoute un 0 devant le chiffre des minutes
           }
           compteur.innerHTML="LANCEMENT DANS <hr> <b>"+ m + ":" + s + "</b>"// Phrase d'attente de live
       }
       duree=duree-1
       window.setTimeout("t();",999)
       }
          duree="300"//permet de modifier la durée du compte à rebours (temps en secondes)
          t()
