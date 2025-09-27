const data = new Date();

const hour = data.getHours().toString().padStart(2, "0");
console.log(hour);
const minutes = data.getMinutes().toString().padStart(2, "0");
console.log(minutes);
const seconds = data.getSeconds().toString().padStart(2, "0");
console.log(seconds);

