
const randomNumbersContainer = document.getElementById('randomNumbersContainer');
    const randomNumbers = [];
    const min = 0;
    const max = 10;
  
    while (randomNumbers.length < 5) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    console.log(randomNumbers);
    randomNumbersContainer.textContent = randomNumbers.join(', ');


    setTimeout(function(){
        randomNumbersContainer.textContent = '';
    },30000);

    setTimeout(function(){
        const userNumbers = [];
        for (let i = 0; i < 5; i++) {
          const userInput = parseInt(prompt('inserisci un numero'));
          userNumbers.push(userInput);
        }
    
        let matchingNumbers = [];
        for (let i = 0; i < 5; i++) {
          if (userNumbers[i] === randomNumbers[i]) {
            matchingNumbers.push(userNumbers[i]);
          }
        }
    
        if (matchingNumbers.length === randomNumbers) {
          alert('tutti corrispondono');
        } else {
            alert(`Matching numbers: ${matchingNumbers.join(', ')}\nUser numbers: ${userNumbers.join(', ')}\nRandom numbers: ${randomNumbers.join(', ')}`);
        }
    },30100)





