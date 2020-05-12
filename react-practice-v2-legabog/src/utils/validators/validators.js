export const requiredField = (value) => {
  if (value) {
    return undefined;
  } else {
    return "Field is required";
  }
};


export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Maximum length is a ${maxLength} symbols`;
  } else {
    return undefined;
  }
};

export const maxLength20 = maxLengthCreator(20)
