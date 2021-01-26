var dToday = new Date();
var d = new Date(dToday.getFullYear(), dToday.getMonth()+1, 0);

//suffix for date
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

//get last wednesday of month for date dx
function lastDayOf(dx) {
  if (dx.getDay() > 3) {
    dx.setDate(dx.getDate()-dx.getDay()+3);
  }
  if (dx.getDay() < 3) {
    dx.setDate(dx.getDate()-dx.getDay()-4);
  }
  return dx;
}

//before this months meeting
lastDayOf(d);

//after this months meeting
if (d.getDate() < dToday.getDate()){
  d = new Date(d.getFullYear(), d.getMonth()+2, 0)
  lastDayOf(d);
}

//no meeting in december
if (d.getMonth() == 11) {
  d = new Date(d.getFullYear()+1, 1, 0)
  lastDayOf(d);
}

var options = { month: 'long'};
$("#meetingdate").html("7.30pm - "+ordinal_suffix_of(d.getDate())+" "+new Intl.DateTimeFormat('en-US', options).format(d)+", "+d.getFullYear());
