let getSleepHours = day => {
switch (day) {
  case 'monday': return 8;
  break;
  case 'tuesday': return 8;
  break;
  case 'wednesday': return 8;
  break;
  case 'thursday': return 8;
  break;
  case 'friday': return 8;
  break;
  case 'saturday': return 8;
  break;
  case 'sunday': return 8;
  break; 
}
};

let getActualSleepHours = () => {
return getSleepHours('monday') + 
getSleepHours('tuesday') + 
getSleepHours('wednesday') + 
getSleepHours('thursday') + 
getSleepHours('friday') + 
getSleepHours('saturday') + 
getSleepHours('sunday');
}

let getIdealSleepHours = () => {
  let idealHours = 9; 
  return idealHours*7;
}

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours ();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than usual! '+ (actualSleepHours - idealSleepHours) + ' hours extra.');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You should get some rest! ' + (idealSleepHours - actualSleepHours) + ' more hours to go!');
  }
}

  calculateSleepDebt();
