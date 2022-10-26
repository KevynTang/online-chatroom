const useSingleCheckbox = (optionValues: boolean[], index: number) => {
  for (let i = 0; i < optionValues.length; i ++) {
    optionValues[i] = i == index ? optionValues[i] : false
  }
}

export default useSingleCheckbox