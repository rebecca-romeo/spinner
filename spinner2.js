// Refactored to reduce repetition

const spinner = function(input) {
  // start the timer at 100
  let spinDelay = 100;
  // Loop through each animation in the sequence
  for (let item of input) {
    setTimeout(() => {
      // rewrite over each item
      process.stdout.write(item);
    }, spinDelay);
    // increase the timer by 200 on each iteration of the loop
    spinDelay += 200;
  }
}

// Put all the animation sequences into an array
const spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r-   ', '\r|   ']
spinner(spinArray)