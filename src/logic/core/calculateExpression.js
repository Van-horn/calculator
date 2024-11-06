export default function evaluateExpression(expression) {
   expression = expression.replace(/\s+/g, '')

   const operators = {
      '+': { precedence: 1, associativity: 'L' },
      '-': { precedence: 1, associativity: 'L' },
      '*': { precedence: 2, associativity: 'L' },
      '/': { precedence: 2, associativity: 'L' },
      '%': { precedence: 2, associativity: 'L' },
   }

   const operate = (a, b, operator) => {
      switch (operator) {
         case '+':
            return a + b
         case '-':
            return a - b
         case '*':
            return a * b
         case '/':
            return a / b
         case '%':
            return (a * b) / 100
         default:
            return b
      }
   }

   const formatResult = number => {
      const str = number.toString()
      const [integerPart, decimalPart] = str.split('.')
      if (!decimalPart) {
         return integerPart
      }
      const formattedDecimal = (decimalPart.substring(0, 5) + '00000').substring(0, 5)
      return integerPart + '.' + formattedDecimal
   }

   const calculate = tokens => {
      const output = []
      const operatorStack = []

      for (const token of tokens) {
         if (!isNaN(token)) {
            output.push(Number(token))
         } else if (operators[token]) {
            while (
               operatorStack.length &&
               operators[operatorStack[operatorStack.length - 1]].precedence >= operators[token].precedence
            ) {
               const b = output.pop()
               const a = output.pop()
               const operator = operatorStack.pop()
               output.push(operate(a, b, operator))
            }
            operatorStack.push(token)
         }
      }

      while (operatorStack.length) {
         const b = output.pop()
         const a = output.pop()
         const operator = operatorStack.pop()
         output.push(operate(a, b, operator))
      }

      return formatResult(output[0])
   }

   const tokens = expression.match(/-?\d+\.?\d*|[+\-*/%]/g)
   return calculate(tokens)
}
