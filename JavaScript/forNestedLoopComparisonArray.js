const bobsFollowers = ['Angie', 'Dean', 'Erich', 'Paulene' ];
const tinasFollowers = ['Paulene', 'Jonathan', 'Angie'];
let mutualFollowers = [];
for (let i=0; i < bobsFollowers.length; i++) {
  for (let m=0; m < tinasFollowers.length; m++) {
    if (bobsFollowers[i] === tinasFollowers[m]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);

// Outputs the mutual followers of array list Bob's followers as it evaluates what are common followers with Tina's list.
