const generator = () => {
    
    function *gen(){
      let startNumber = 1;
        while(true) {
          startNumber = startNumber * 16807 % 2147483647;
          console.log(startNumber);
          yield startNumber;
        }
        
        return startNumber;
    };

    function *fibonachi() {
      let startNumber = 1;
      let plusNumb = 0;
      let endNumb;

      while(true) {
        endNumb = startNumber + plusNumb;
        plusNumb = startNumber;
        startNumber = endNumb;
        console.log(endNumb)
        yield endNumb;
      }

      return endNumb;
    }
    
      const genResult = gen();
      const res1 = genResult.next();
      console.log( res1 );
      const res2 = genResult.next();
      console.log( res2 );
      const res3 = genResult.next();
      console.log( res3 );
      const retruned = genResult.return();

      const fibonachiSequence = fibonachi();
      const resFi1 = fibonachiSequence.next();
      const resFi2 = fibonachiSequence.next();
      const resFi3 = fibonachiSequence.next();
      const resFi4 = fibonachiSequence.next();
      const resFi5 = fibonachiSequence.next();
      const resFi6 = fibonachiSequence.next();
      const resFi7 = fibonachiSequence.next();
      const resFi8 = fibonachiSequence.next();
      const resFi9 = fibonachiSequence.next();
}

export default generator;