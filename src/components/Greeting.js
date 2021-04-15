function TimeOfDay(greeting) {
  var date = new Date();
  let hour = date.getHours();

  if (hour < 4) {
    greeting = "It is in the middle of the night 😂 ";
  } else if (hour < 10) {
    greeting = "Good Morning.";
  } else if (hour < 20) {
    greeting = "Hello.";
  } else {
    greeting = "Good evening.";
  }

  return greeting;
}

export default TimeOfDay;
