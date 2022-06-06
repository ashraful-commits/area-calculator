



function AlertFunction(msg,type='danger'){
    return `<h5 class ="alert alert-${type} w-100 text-center">${msg}</h5>`;

}


// pattern test 

function numtest(num){
    let pattern = /^[0-9]{1,}$/
    return pattern.test(num);

}


function areaConvertFunc(type,value1,value2 = null){
     switch(type){
         case 'Triangle':
             return `The area of ${type} is ${.5*value1*value2}`;
             break;
         case 'Square':
             return `The area of ${type} is ${value1*value1}`;
             break;
         case 'Rectangle':
             return `The area of ${type} is ${value1*value2}`;
             break;
         case 'Circle':
             return `The area of ${type} is ${(3.1416*(value1*value1)).toFixed(2)}`;
             break;
         default :
             return `Area not found`;
     }

 }
    