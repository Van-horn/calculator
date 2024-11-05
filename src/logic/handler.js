import calculator from '.'
import getElById from '../utils/getElById'

const dataInput = getElById('screen_data')
const buttonsEl = getElById('input_buttons')

// const interactiveButtons = {
//    value_0: getElById('value_0'),
//    value_1: getElById('value_1'),
//    value_2: getElById('value_2'),
//    value_3: getElById('value_3'),
//    value_4: getElById('value_4'),
//    value_5: getElById('value_5'),
//    value_6: getElById('value_6'),
//    value_7: getElById('value_7'),
//    value_8: getElById('value_8'),
//    value_9: getElById('value_9'),
//    //    value_0: getElById('value_0'),
// }

buttonsEl.addEventListener('click', e => {
   if (e.target.tagName === 'BUTTON') {
      dataInput.textContent = calculator.getData()
   }
})
