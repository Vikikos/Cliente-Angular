function isNumberOrString(id:string|number): string{
    if(Number.isInteger(id)){
        return 'Es numero'
    }else{
        return 'Es string';
    }
}

let id: string | number;

id = 'hola';
console.log(isNumberOrString(id));

id = 5;
console.log(isNumberOrString(id));