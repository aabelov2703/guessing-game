class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      console.log(`${this.min} ${this.max} ${Math.ceil((this.min + this.max) / 2)}`);
      return Math.ceil((this.min + this.max) / 2);
    }
  
    lower() {
        this.setRange(this.min, Math.ceil((this.min + this.max) / 2));
        console.log(`lower new range = ${this.min} ${this.max}`)
    }
  
    greater() {
        this.setRange(Math.ceil((this.min + this.max) / 2), this.max);
        console.log(`greater new range = ${this.min} ${this.max}`)
    }
}

module.exports = GuessingGame;
