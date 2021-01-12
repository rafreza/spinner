const spinner = () => {
  const animation = ['|  ', '/  ', '-  ', '\\  ', '|  ', '\n']; 
  let timer = 100;
  for (let char of animation){
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, timer);
    timer +=200;
  }
} 
spinner();