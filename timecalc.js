document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const addButton = document.getElementById('submitButton');
    const resultDisplay = document.createElement('p');
    
    addButton.addEventListener('click', function() {
      const value1 = parseInt(input1.value);
      const value2 = parseInt(input2.value);
      
      if (!isNaN(value1) && !isNaN(value2)) {
        const sum = value1 + value2;
        resultDisplay.textContent = `Sum: ${sum}`;
      } else {
        resultDisplay.textContent = 'Invalid input';
      }
    });
    
    document.body.appendChild(resultDisplay);
  });
  