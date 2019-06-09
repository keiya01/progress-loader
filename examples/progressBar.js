const Loader = require("progress-loader");

const loader = new Loader();

let completed = 0;
const download = (delay, total) => {
  (function timeoutSync(done) {
    if(done) {
      loader.printProgressBar(100, completed);
      return;
    }
    
    setTimeout(() => {
      if (completed < total) {
        loader.printProgressBar((completed / (total - 1)) * 100, completed);
      }
      
      if (completed === total) {
        timeoutSync(true);
        return;
      }
      completed++;

      timeoutSync(false);
    }, delay)
  })(false);
}

const main = (total) => {
  download(1000, total);
}

main(10);