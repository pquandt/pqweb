


function TimeOfDay(greeting) {
  var date = new Date();
  let hour = date.getHours();

  if (hour < 4) {
    greeting = "Es ist mitten in der Nacht! 😂 ";
  } else if (hour < 10) {
    greeting = "Guten Morgen.";
  } else if (hour < 20) {
    greeting = "Guten Tag.";
  } else {
    greeting = "Guten Abend.";
  }

  return greeting;
}

export default TimeOfDay;
