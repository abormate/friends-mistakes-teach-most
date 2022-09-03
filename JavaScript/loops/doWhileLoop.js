// Do While loops run their code block at least once even if the stopping iterator variable evaluates to false at the fist iteration. Unlike regular While loops 

let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);
