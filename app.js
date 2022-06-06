// get form 

const areaConverter =document.getElementById('area-converter');

// get Alert msg div 
const AlertMsg =document.querySelector('.alertMsg');
const ResultMsg =document.querySelector('.resultMsg');

let area = areaConverter.querySelector('select[name="area"]');
let triangleArea = areaConverter.querySelector('.Triangle');
let squareArea = areaConverter.querySelector('.Square');
let rectangleArea = areaConverter.querySelector('.Rectangle');
let circleArea = areaConverter.querySelector('.Circle');
let Base =areaConverter.querySelector('input[name="Base"]');
let Height =areaConverter.querySelector('input[name="Height"]');
let Side =areaConverter.querySelector('input[name="Side"]');
let Length =areaConverter.querySelector('input[name="Length"]');
let Width =areaConverter.querySelector('input[name="Width"]');
let Radius =areaConverter.querySelector('input[name="Radius"]');




area.onchange=()=>{
    if(area.value == 'Triangle'){
        triangleArea.style.display = 'block'
        ResultMsg.innerHTML ='';
        Base.value= '';
        Height.value = '';
    }else{
        triangleArea.style.display = ''
    }
    
    if(area.value == 'Square'){
        squareArea.style.display = 'block'
        ResultMsg.innerHTML ='';
        Side.value = '';
    }else {
        squareArea.style.display = ''

    }
    
    if(area.value == 'Rectangle'){
        rectangleArea.style.display = 'block'
        ResultMsg.innerHTML ='';
        Length.value = '';
        Width.value = '';
    }else {
        rectangleArea.style.display = ''

    }
    
    if(area.value == 'Circle'){
        circleArea.style.display = 'block'
        ResultMsg.innerHTML ='';
        Radius.value = '';
    }else{
        circleArea.style.display = ''

    }
}

// form submition 

areaConverter.addEventListener('submit',(e)=>{
    e.preventDefault();

// get triangle value 
 if(area.value == 'Triangle'){

    if(Base.value=="" ||Height.value == ''){
        AlertMsg.innerHTML =AlertFunction('All Field are required','danger')
        ResultMsg.innerHTML ='';
    }else{
        ResultMsg.innerHTML=AlertFunction(`${areaConvertFunc(area.value,Base.value,Height.value)}`,'success')
    }
// get square vlaue 
}else if(area.value == 'Square'){
    if(Side.value ==''){
        AlertMsg.innerHTML =AlertFunction('All Field are required','danger')
        ResultMsg.innerHTML ='';
    }else{

        ResultMsg.innerHTML=AlertFunction(`${areaConvertFunc(area.value,Side.value)}`,'success')
    }

//  get rectangle    
}else if(area.value == 'Rectangle'){

    if(Length.value == '' || Width.value == ''){
        AlertMsg.innerHTML =AlertFunction('All Field are required','danger')
        ResultMsg.innerHTML ='';
    }else{
        ResultMsg.innerHTML=AlertFunction(`${areaConvertFunc(area.value,Length.value,Width.value)}`,'success')
    }
// get circle 
}else if(area.value == 'Circle'){

    if(Radius.value == ''){
        AlertMsg.innerHTML =AlertFunction(`Radius Field is required`,'danger')
        ResultMsg.innerHTML ='';
    }else{
        ResultMsg.innerHTML=AlertFunction(`${areaConvertFunc(area.value,Radius.value)}`,'success')
    }
}

})




