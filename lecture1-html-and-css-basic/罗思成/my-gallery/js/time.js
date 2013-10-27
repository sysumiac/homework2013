setInterval("time()",1);
function time() 
    {
    var now,year,month,date,hour,minute,second;
    now = new Date();
    year=now.getFullYear();
    month=now.getMonth()+1;
    date=now.getDate();
    hour=now.getHours();
    minute=now.getMinutes();
    second=now.getSeconds();
    if(month<10){month='0'+month;}
    if(hour<10){hour='0'+hour;}
    if(minute<10){minute='0'+minute;}
    if(second<10){second='0'+second;}
    //document.getElementById("clock").value=
    timer.innerHTML=year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second;
    }

    