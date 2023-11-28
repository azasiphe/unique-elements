
function findUniqueElements() {
    let array1 = document.getElementById('array1').value.split(',').map(item => item.trim());
    let array2 = document.getElementById('array2').value.split(',').map(item => item.trim());
  
    
   let combinedArray = [...array1, ...array2].sort((a, b) => a - b);
    let uniqueElements = [...new Set(combinedArray)];
    //set is for values not to repeate 
    document.getElementById('results').innerText = `Unique Elements: [${uniqueElements}]`;
  }
  