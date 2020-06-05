'use strict';

/* What is your name?
Where are you from?
What do you know about massage therapy?
queue to guess how many years I've been in massage therapy

Do you know about massage therapy?
Have you had a massage in the last year?
Are you interested in learning about self massage tips for quarantine?
Have you ever tried partnered massage?
Do you like the color blue?
*/

var knowMassage = prompt('Do you know about massage therapy?');
var knowMassageCase = knowMassage.toLowerCase();

if (knowMassageCase === 'yes') {
  alert('AWESOME! I love massage too!');
} else if (knowMassageCase === 'no') {
  var wantMassage = prompt('Would you like to learn about massage?');
  var wantMassageCase = wantMassage.toLowerCase();
  if (wantMassageCase === 'yes') {
    alert('Awesome! Keep scrolling to learn more!');
  } else {
    alert('Well, some people don\'t like massage and that\'s ok');
  }
} else {
  alert('Why you gotta be like that man?? Breaking my code!');
}

var quarantineMassage = prompt('are you interested in learning partnered massage tricks?');
var quarantineMassageCase = quarantineMassage.toLowerCase();

if (quarantineMassageCase === 'yes') {
  alert('Amazing! I can help you with that.');
} else {
  alert('Well aren\'t you a trickster today?? hmmm?');
}


// questions down here are going to be prompts

var yearsMassage = prompt('Can you guess how long I\'ve been a Massage Therapist?');
var yearsMassageNumber = parseInt(yearsMassage);
for (var i = 0; i < 4; i++) {
  if (yearsMassageNumber === 4) {
    alert('Well, my whole life but professionally, 4 years is correct!');
    i = 4;
  } else if (yearsMassageNumber > 4) {
    yearsMassage = prompt('Too high, Try again!');
  } else if (yearsMassageNumber < 4) {
    yearsMassage = prompt('Too low, try again!');
  } else {
    yearsMassage = prompt('Invalid answer, try again, please.');
  }
}
alert('I\'ve been a massage therapist for 4 years, but have loved bodywork all my life.');
