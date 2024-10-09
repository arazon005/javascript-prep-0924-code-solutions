/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  if (age < 18) {
    return true;
  }
}
let isAdultResult = isAdult(18);
console.log(isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  }
  if (score < 70) {
    return false;
  }
}
let didStudentpassResult = didStudentPass(85);
console.log(didStudentpassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}
let gradeCalculatorResult = gradeCalculator(85);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}
let seasonMessengerResult = seasonMessenger('autumn');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || 'sunday') {
    return 'have a good weekend';
  } else {
    return 'it is a weekday';
  }
}
let dayDetectorResult = dayDetector('sunday');
console.log(dayDetectorResult);
