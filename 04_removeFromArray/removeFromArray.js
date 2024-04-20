const removeFromArray = function (array, ...number) {
  let array = [];
  let halfBeforeTheUnwantedElement = array.slice(0, ...number);
  let halfAfterTheUnwantedElement = array(...(number + 1));
  let copyWithoutNumber = halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement)
 return copyWithoutNumber
};

// const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

// const halfBeforeTheUnwantedElement = arrayOfLetters.slice(0, 2)

// const halfAfterTheUnwantedElement = arrayOfLetters(3);

// const copyWithoutThirdElement = halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement);

// Do not edit below this line
module.exports = removeFromArray;

