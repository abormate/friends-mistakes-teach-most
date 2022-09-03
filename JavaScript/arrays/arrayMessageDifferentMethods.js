// JavaScript exercise using Array methods to consolidate and make sense of the array message variable defined earlier

let message = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(message.length);
message.pop();
console.log(message.length);
message.push('to', 'Program');
console.log(message.length);
message[7] = 'right';
console.log(message[7]);
message.shift();
console.log(message.length);
message.unshift('Programming');

message.splice(6, 5, 'know');
console.log(message.join());


// Outputs a meaningful message about learning how to code 
