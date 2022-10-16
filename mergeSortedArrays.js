function mergeSortedArrays(arr1, arr2) {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    merged_array = [];

    let i = 1;
    let j = 1;

    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr2Item);
        if (!arr2Item || arr1Item < arr2Item) {
            merged_array.push(arr1Item);
            arr1Item = arr1[i++];
        } else {
            merged_array.push(arr2Item);
            arr2Item = arr2[j++];
        }
    }

    return merged_array;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
console.log(mergeSortedArrays(arr1, arr2));
