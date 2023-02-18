   
function inputFieldValue(elementId){
    const inputField=document.getElementById(elementId);
    const inputFieldString=inputField.value;

    const inputFieldNumber=parseFloat(inputFieldString);
    inputField.value='';
    return inputFieldNumber;
}

function setTextElement(elementField,value){
    const ElementField=document.getElementById(elementField);
    ElementField.innerText=value;
}
 
function display(elements,values){
    const displayField=document.getElementById(elements);
    displayField.style.display=values;

}


// triangle Area Calculate:
document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleB=inputFieldValue('triangle-b');
    const triangleH=inputFieldValue('triangle-h');
    const triangleArea='1. '+' Triangle '+parseFloat((0.5*triangleB*triangleH).toFixed(2));

    if(triangleB <=0 || triangleH <=0 ||isNaN(triangleB) || isNaN (triangleH)){
        alert('please enter a valid input')
        return;
    } 
    setTextElement('triangleArea1',triangleArea);
    display('btn1','block');
    display('sq','block');
})

// Rectangle area calculation :
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const rectangleW=inputFieldValue('rectangle-w');
    const rectangleL=inputFieldValue('rectangle-l');
    const rectangleArea='2.'+  'Rectangle '+parseFloat((rectangleW*rectangleL).toFixed(2));
    if(rectangleW <=0 || rectangleL <=0 ||isNaN(rectangleW) || isNaN (rectangleL)){
        alert('please enter a valid input')
        return;
    } 
    setTextElement('rectangleArea',rectangleArea);
   display('btn2','block');
   display('sq2','block');
})

// Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramB=inputFieldValue('parallelogram-b');
    const parallelogramH=inputFieldValue('parallelogram-h');
    const parallelogramArea='3.'+'para..   '+parseFloat((parallelogramB*parallelogramH).toFixed(2));
    setTextElement('parallelogramArea',parallelogramArea);
    display('btn-3','block');
    display('sq3','block');
})
// rhombus Area
document.getElementById('btn-rhom').addEventListener('click',function(){
    const rhomd1=inputFieldValue('rhom-d1');
    const rhomd2=inputFieldValue('rhom-d2');
    const rhomArea='4.'+'Rhombus   '+parseFloat((0.5*rhomd1*rhomd2).toFixed(2));
    setTextElement('rhombusArea',rhomArea);
    display('btn-4','block');
    display('sq4','block');
   
})
// Pentagon Area
document.getElementById('btn-penta').addEventListener('click',function(){
    const pentaP=inputFieldValue('penta-p');
    const pentaB=inputFieldValue('penta-b');
    const pentaArea='5.'+'Pentagon   '+parseFloat((0.5*pentaP*pentaB).toFixed(2));
    setTextElement('pentaArea',pentaArea);
    display('btn-5','block');
    display('sq5','block');
   
})
// Ellipse Area
document.getElementById('btn-ellip').addEventListener('click',function(){
    const ellipA=inputFieldValue('ellip-a');
    const ellipB=inputFieldValue('ellip-b');
    const ellipArea='6.'+'Ellipse   '+parseFloat((3.14*ellipA*ellipB).toFixed(2)) ;
    setTextElement('ellipArea',ellipArea);
    display('btn-6','block');
    display('sq6','block');
})