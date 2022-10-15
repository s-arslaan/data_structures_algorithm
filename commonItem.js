// brute force::: O(n^2)
function commonItemExists(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] == arr2[j]) return true;
        }
    }
    return false;
}

// optimised ::: using Hashtable
/*
    array1 ==> obj {
        a: true,
        b: true,
        c: true,
        x: true,
    }
    Now just check in hash table
        array2[index] === obj.properties
*/

function commonItemExists2(arr1, arr2) {
    let map = {};

    for (let i = 0; i < arr1.length; i++) {
        // if the map (object) does not have the item, we will add that item into map
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    console.log(map);
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
    }
    return false;
}

// JS specific cleaneer way to do the same
function commonItemExists3(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["w", "y", "z", "x"];
// const arr2 = ["w", "y", "z"];

console.log(commonItemExists3(arr1, arr2));
