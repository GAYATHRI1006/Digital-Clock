let ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec= padZero(dateTime.getSeconds());
    let date = dateTime.getDate();             // Day of the month (1-31)
    let month = dateTime.getMonth() + 1;       // Month (0-11), so add 1
    let year = dateTime.getFullYear();        // Full year (e.g., 2025)
    let dayindex=dateTime.getDay();
    let dayname=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day=dayname[dayindex];
// Format it as "DD/MM/YYYY"
    let fullDate = `${date.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    document.getElementById('hours').innerHTML=padZero(hr);
    document.getElementById('mins').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    document.getElementById('date').innerHTML=fullDate;
    document.getElementById('day').innerHTML=day;
}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)