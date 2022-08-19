$(document).ready(function(){

   function showTime(){
    //Get Current Time
    var date = new Date();

    //Make Variables to get hour, minute and seconds

    var hours = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    //AM, PM 

    var period = 'AM';

    //Condition for the time

    if(hours == 0){
        hours = 12;
    }
    if(hours >= 12){
        period = 'PM'
    }
    if(hours > 12){
        hours = hours - 12
    }
   hours = hours<10? '0'+hours:hours;
   minute = minute<10? '0'+minute:minute;
   seconds = seconds<10? '0'+seconds:seconds;

    $("#hours").text(hours);
    $("#min").text(minute);
    $("#sec").text(seconds);
    $("#period").text(period);


    setTimeout(showTime, 1000)


   }



   showTime();


})