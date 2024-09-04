function makeArray(firstArray, secondArray, maxLength) {
    const allArray = firstArray.concat(secondArray);

    return allArray.length > maxLength ? allArray.slice(0, maxLength) : allArray;
    // if (allArray.length > maxLength) {
    //     return allArray.slice(0, maxLength);
    // } else {
    //     return allArray;
    // }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); 