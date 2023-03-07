/* const args = process.argv.slice(2); 
// Here I am Creating an array to pass those arguments, and excluding first two arguments here it is 'node' 'app.js

if (args.length < 2){
    console.log('Invalid number of arguments');
    return;
}

const operationIndex = args.findIndex(arg => arg === '--operation');
if(operationIndex === -1 || operationIndex === args.length - 1){
    console.log('Invalid operation');
    return;
}
// Here I am finding the index of '--operation' argument in the args array. If '--operation' argument is not found or last
// argument passed to the program it shows as Invalid operation.

const operation = args[operationIndex + 1].toLowerCase();
// Here operationIndex means --operation, +1 means operation like division, addition and converting to lowercase.

const values = args.filter((_, index) => index !== operationIndex && index !== operationIndex + 1).map(Number);
// Here filtering out the --operation argument and it's corresponding value, then mapping the remaining arguments to their numerical values using Number() 

if(values.some(isNaN)){
    console.log('Invalid value');
    return;
}
// If the values are Not a Number it returns Invalid value.

let result;
switch (operation){
    case 'addition':
        result = values.reduce((acc, curr) => acc + curr, 0);
        console.log(`${values.join(' + ')} = ${result}`);
        break;

    case 'subtraction':
        if (values.length !== 2){
            console.log('Subtraction takes exactly 2 values');
            return;
        }    
        result = values[0] - values[1];
        console.log(`${values[0]} - ${values[1]} = ${result}`);
        break;

    case 'multiplication':
        result = values.reduce((acc, curr) => acc * curr, 1);
        console.log(`${values.join(' * ')} = ${result}`);
        break;

    case 'division':
        if (values.length !== 2){
            console.log('Division takes exactly 2 values');
            return;
        }
        if (values[1] == 0){
            console.log('Cannot divide by zero');
        }    
        result = values[0] / values[1];
        console.log(`${values[0]} / ${values[1]} = ${result}`);
        break; 

    default:
        console.log('Unsupported operation');       

} */


const args = process.argv.slice(2); 

if (args.length < 2){
    console.log('Invalid number of arguments');
    return;
}

const operationIndex = args.findIndex(arg => arg === '--operation');
if(operationIndex === -1 || operationIndex === args.length - 1){
    console.log('Invalid operation');
    return;
}

const operation = args[operationIndex + 1].toLowerCase();
const values = args.filter((_, index) => index !== operationIndex && index !== operationIndex + 1).map(Number);

if(values.some(isNaN)){
    console.log('Invalid value');
    return;
}

let result;
switch (operation){
    case 'addition':
        result = values.reduce((acc, curr) => acc + curr, 0);
        console.log(`${values.join(' + ')} = ${result}`);
        break;

    case 'subtraction':
        if (values.length !== 2){
            console.log('Subtraction takes exactly 2 values');
            return;
        }    
        result = values[0] - values[1];
        console.log(`${values[0]} - ${values[1]} = ${result}`);
        break;

    case 'multiplication':
        result = values.reduce((acc, curr) => acc * curr, 1);
        console.log(`${values.join(' * ')} = ${result}`);
        break;

    case 'division':
        if (values.length !== 2){
            console.log('Division takes exactly 2 values');
            return;
        }
        if (values[1] == 0){
            console.log('Cannot divide by zero');
        }    
        result = values[0] / values[1];
        console.log(`${values[0]} / ${values[1]} = ${result}`);
        break; 

    default:
        console.log('Unsupported operation');       

}