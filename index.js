function arrOrObj(collection) {
  if (Array.isArray(collection)) {
    return [...collection];
  } else {
    return Object.values(collection);
  }
}
const myArray = [1, 2, 3];
const myObject = { four: 4, five: 5, six: 6 };

function myEach(collection, alert) {
  if (Array.isArray(collection)) {
    collection.forEach((element) => {
      alert(element);
    });
  } else {
    const newCollection = Object.values(collection);
    newCollection.forEach((element) => {
      alert(element);
    });
  }
  return collection;
}

function myMap(collection, callback) {
  const result = Array.isArray(collection);

  if (result) {
    const newCollection = collection.map(callback);
    return newCollection;
  } else {
    const getValues = Object.values(collection);
    const newCollection = getValues.map(callback);
    return newCollection;
  }
}

function myReduce(collection, callback, acc) {
  let total = 0;
  const newCollection = arrOrObj(collection);

  if (acc === undefined) {
    total = newCollection[0];
    for (let i = 1; i < newCollection.length; i++) {
      total = callback(total, newCollection[i], newCollection);
    }
  } else {
    total = acc;
    for (let i = 0; i < newCollection.length; i++) {
      total = callback(total, newCollection[i], newCollection);
    }
  }
  return total;
}

function myFind(collection, predicate) {
  const newCollection = arrOrObj(collection);
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      return newCollection[i];
    }
  }
}

function myFilter(collection, predicate) {
  const newArray = [];
  const newCollection = arrOrObj(collection);
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      newArray.push(newCollection[i]);
    }
  }
  return newArray;
}

function mySize(collection) {
  let counter = 0;
  const newCollection = arrOrObj(collection);
  for (let i = 0; i < newCollection.length; i++) {
    counter++;
  }
  return counter;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    const newArray = [];
    for (let index = 0; index < n; index++) {
      newArray.push(array[index]);
    }
    return newArray;
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    const newArray = [];
    for (let i = 1; i <= n; i++) {
      newArray.unshift(array[array.length - i]);
    }
    return newArray;
  }
}

function myKeys(obj) {
  const arrayKeys = [];
  for (const key in obj) {
    arrayKeys.push(key);
  }
  return arrayKeys;
}

function myValues(object) {
  const arrayValues = [];
  for (const key in object) {
    arrayValues.push(object[key]);
  }
  return arrayValues;
}

console.log(myValues({ one: 1, two: 2, three: 3 }));
