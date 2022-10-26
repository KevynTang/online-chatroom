import { Ref } from "vue"

const inputErrorDisp = (theRef: Ref<null | HTMLElement>) => {
  if (theRef.value) {
    theRef.value.classList.remove('border-gray-400')
    theRef.value.classList.add('border-red-600')
    theRef.value.classList.add('border-2')
  }
}

export default inputErrorDisp