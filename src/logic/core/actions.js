import Calculator from '.'
import evaluateExpression from './calculateExpression'

class CalculatorActions extends Calculator {
   getData = () => this.data.join('')

   lastElIndex = () => this.data.length - 1
   setValue = value => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (lastEl === '0' || lastEl === '-0') {
         return false
      }

      if ((!isNaN(lastEl) || lastEl === '-') && lastEl !== '0') {
         this.data[lastElIndex] += value
         return true
      }

      if (value === '0' && lastEl !== '0') {
         this.data.push(value)
         return true
      }
      this.data.push(value)
   }

   clear = () => {
      this.data = []
   }

   change_sign = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (lastEl === '0' || lastEl === undefined) {
         this.data = ['-']
         return true
      }
      if (this.data[lastElIndex - 1] === '+') {
         this.data[lastElIndex - 1] = '-'
         return true
      }

      if (this.data[lastElIndex - 1] === '-') {
         this.data[lastElIndex - 1] = '+'
         return true
      }
      if (this.data.length === 1) {
         this.data[lastElIndex] = '-' + lastEl
      }
      if (lastEl[0] === '-') {
         this.data[lastElIndex] = lastEl.substring(1)
         return true
      }
      // if (!Number(lastEl)) {
      //    this.data[lastElIndex - 1] = '-' + this.data[lastElIndex - 1]
      // }
   }
   percent = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      if (Number(lastEl)) {
         this.data.push('%')
         return true
      }

      return false
   }
   division = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      if (Number(lastEl)) {
         this.data.push('/')
         return true
      }

      return false
   }
   multiply = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      if (Number(lastEl)) {
         this.data.push('*')
         return true
      }

      return false
   }
   minus = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (Number(lastEl) || this.data.length === 0) {
         this.data.push('-')
         return true
      }
      if (lastEl === '+') {
         this.data[lastElIndex] = '-'
         return true
      }
      return false
   }
   sum = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      if (Number(lastEl)) {
         this.data.push('+')
         return true
      }
      if (lastEl === '-') {
         this.data[lastElIndex] = '+'
         return true
      }
      return false
   }
   dot = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      if (lastEl && lastEl.includes('.')) return false
      if (lastEl === '0') {
         this.data[lastElIndex] += '.'

         return true
      }

      if (Number(lastEl)) {
         this.data[lastElIndex] += '.'
         return true
      }
   }
   equal = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      let result = null
      if (Number(lastEl)) {
         result = evaluateExpression(this.data.join(''))
      } else {
         this.data.pop()
         result = evaluateExpression(this.data.join(''))
      }

      this.data = [result ? result : 'error']
      return true
   }

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
