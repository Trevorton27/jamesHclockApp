var clockTime=document.getElementById('time');
var clockDate=document.getElementById('date');

const theDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const theMonths=["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

function dateSuffix(i){
  if (i==1){
    return "st";
  } else if (i==2){
    return "nd";
  } else if (i==3){
    return "rd";
  } else{
    return "th";
  }
}

function amPm(i){
  if(i<13){
    return "AM";
  } else{
    return "PM";
  }
}

function tic (){
  
  var theTime=new Date();

  var sec=String(theTime.getSeconds()).padStart(2, '0');

  var min=String(theTime.getMinutes()).padStart(2, '0');

  var hr=String((theTime.getHours()% 12) || 12).padStart(2, '0');

  var day=theDays[theTime.getDay()];

  var dd=String(theTime.getDate())+dateSuffix(theTime.getDate());

  var mm=theMonths[theTime.getMonth()];

  var yyyy=theTime.getFullYear();

    clockTime.textContent=hr+':'+min+':'+sec+' '+amPm(theTime.getHours())

    clockDate.textContent=day+', '+mm+' '+dd+' '+yyyy

}
setInterval(tic, 1000);