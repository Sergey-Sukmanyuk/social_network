export const required = (value) => {
    if(value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (maxLength < value.length) {
        return `Max lenght ${maxLength} symbols`
    } else {
        return undefined
    }
}