import Calculator from '.'

class CalculatorActions extends Calculator {
   setValue = value => {
      this.data.push(value)
   }
   getData = () => {
      return this.data
   }
   clear = () => {
      this.data = []
   }
   change_sign = () => {}
   percent = () => {}
   division = () => {}
   multiply = () => {}
   minus = () => {}
   sum = () => {}
   dot = () => {}
   equal = () => {}

   actions() {
      const { setValue, clear, dot, equal, percent, minus, sum, multiply, change_sign, division } = this
      return {
         setValue,
         clear,
         percent,
         change_sign,
         dot,
         division,
         multiply,
         minus,
         equal,
         sum,
      }
   }
}

export default new CalculatorActions()
