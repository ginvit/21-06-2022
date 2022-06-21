(function () {
  const names = ["Topolino", "Paperino", "Cip", "Pippo", "Pluto"];

  const indexPlusName = (element, index, array) => index + 1 + " - " + element;
  const indexReverse = (element, index, array) => array.length - 1 - index;
  const nameReverse = (element, index, array) =>
    names[array.length - 1 - index];

  const namesToList = names.map(indexPlusName);
  const indexToList = names.map(indexReverse);
  const nameReverted = names.map(nameReverse);

  console.log(namesToList);
  console.log(indexToList);
  console.log(nameReverted);
})();
