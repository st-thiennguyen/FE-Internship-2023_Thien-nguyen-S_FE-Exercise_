/**
 * Write a function to find the new time after a specified time from the given time.
 * Input: (givenTime string, period number(s))
 * Output: newTime string
 * Ex: ('12:30:29', 600) => '12:40:29'
 * Ex: ('23:30:29', 6000) => '01:10:29
 */

function getTimeAfterPeriodTime(givenTime, period) {
  var [hour, minute, second] = givenTime.split(":");
  var secondOfHour = Number(hour) * 3600;
  var secondOfMinutes = Number(minute) * 60;
  var second = Number(second);
  var total = secondOfHour + secondOfMinutes + second + period;
  var timeAfter = new Date(total * 1000).toISOString().slice(11, 19);
  return timeAfter;
}
console.log(getTimeAfterPeriodTime("23:30:29", 6000));
