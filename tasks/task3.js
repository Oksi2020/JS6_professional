const someCalc = () => {

    class Calc {
      constructor(){
        this.currentValue = 0;
        this.histury = [];
    }
    redo() {
        const rep = this.histury[this.histury.length-1];
        this.histury.push(rep);
        this.currentValue = rep.execute( this.currentValue );
    }

    execute( command ) {
      this.currentValue = command.execute(this.currentValue);
      this.histury.push(command);
    }

    getCurrentValue() {
        return this.currentValue;
      }
    }
    
    function Command( fn, value) {
        this.execute = fn;
        this.value = value;
    }    

    function add(value){
        return value + this.value;
    }
    
    function sub(value){
        return value - this.value;
    }
    
    function multiply(value){
        return value * this.value;
    }
    
    function divide(value){
        return value / this.value;
    }
  
    function AddCommand(value){
        Command.call( this, add, value);
    }
    function SubCommand(value){
        Command.call( this, sub, value);
    }
    function MultiplyCommand(value){
        Command.call( this, multiply, value);
    }
    function DivideCommand(value){
        Command.call( this, divide, value);
    }
      
    const redoExample = new Calc();
    redoExample.execute( new AddCommand( 20 ) );
    redoExample.execute( new AddCommand( 30 ) );
    redoExample.execute( new SubCommand( 50 ) );
    redoExample.execute( new AddCommand( 36 ) );
    redoExample.execute( new MultiplyCommand( 12 ) );
    console.log('after add:', redoExample.getCurrentValue() );
    redoExample.redo();
    console.log('first redo:', redoExample.getCurrentValue() );
    redoExample.redo();
    console.log('second redo:', redoExample.getCurrentValue() );
    console.log(redoExample);

}
  
export default someCalc;  