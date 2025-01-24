const clock=document.querySelector('.clock');
setInterval(function(){
    let date=new Date();
    date=date.toLocaleString();
    console.log(date);
    clock.innerHTML=date;
},1000);