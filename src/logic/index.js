class Calculator {
   constructor() {
      this.data = []
   }
   getData() {
      return this.data.join('')
   }

   clear() {
      this.data = []
   }
   setValue(value) {
      this.data.push(value)
      return this.data.join('')
   }
   division() {
      this.data
   }

   actions() {
      return {
         value: this.setValue,
         clear: this.clear,
         division: this.division,
      }
   }
}

export default new Calculator()
