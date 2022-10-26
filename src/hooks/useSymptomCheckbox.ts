const useSymptomCheckbox = (optionValues: boolean[], index: number) => {
  if (index == optionValues.length - 1) {
    for (let i = 0; i < optionValues.length - 1; i ++) {
      optionValues[i] = false
    }
  }
  else {
    optionValues[optionValues.length - 1] = false
  }
}

export default useSymptomCheckbox