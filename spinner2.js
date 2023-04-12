// Refactor spinner1:
const spinner2 = (array) => {
  for (const index in array) {
    setTimeout(() => {
      // Print each array item 200ms apart from eachother
      process.stdout.write(array[index]);
    }, index * 200);
  }
};

// Refactored all the outputs into an array
const spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r-   ', '\r|   '];

spinner2(spinArray);