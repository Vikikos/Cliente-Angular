function ordenarArray(array: number[]): number[]{
    return array.sort();
    //return isNumberOrString.sort((a,b)=> a-b);
}

const arrayNum: number[] = [3,6,9,2.6,4,1];
console.log(arrayNum);
console.log(ordenarArray(arrayNum));