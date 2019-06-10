const Loader = require("progress-loader");

const loader = new Loader();

let completed = 0;
const download = (delay, total) => {
    const timer = setInterval(() => {
      if (completed < total) {
        loader.printProgressBar((completed / (total - 1)) * 100, completed);
      }
      
      if (completed === total) {
        clearInterval(timer);
        return;
      }

      completed++;
    }, delay)
}

const main = (total) => {
  download(1000, total);
}

main(10);