const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
     console.log(this.secretNum)
      do{
       this.prevGuesses.push(this.getGuess())
      
       this.render()
       
      }while(this.userInput!== this.secretNum)
      return 
     
    }

}

game.prevGuesses= []

game.getGuess=function(){
this.userInput=prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)

this.userInput= parseInt(this.userInput)
while(isNaN(this.userInput)=== true || this.userInput > this.biggestNum || this.userInput<this.smallestNum){
  this.userInput=prompt(`Reenter a guess between ${this.smallestNum} and ${this.biggestNum}.`) 
  this.userInput= parseInt(this.userInput)}
return this.userInput

}


game.render=function(){
if(this.userInput===this.secretNum){
alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
} else {
  if(this.userInput<this.secretNum){
  alert(`Your Guess is too low. Previous guesses:${this.prevGuesses.join()} `)
  } else {
    alert(`Your Guess is too high. Previous guesses:${this.prevGuesses.join()}`)
  }
}

}
console.log(game.play())

