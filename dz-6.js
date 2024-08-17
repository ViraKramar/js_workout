function checkYuliaTheory(count) {

	let minNum = 1000;
    let maxNum = 10000;
    let isEvenCount = 0;
    let isOddCount = 0;
    let evenPercentage = 0; 
    let oddPercentage = 0; 

    for (let i = 0; i < count; i++) { 
        let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)); 
        if (randomNumber % 2 === 0) { 
            isEvenCount++;
        } else {
            isOddCount++;

        }
    }

    evenPercentage = Math.floor((isEvenCount / count) * 100);
    oddPercentage = Math.floor((isOddCount / count) * 100);
    console.log("Total numbers:", count + "\nEven count:", isEvenCount, "Even percentage:", evenPercentage +"%\nOdd count:",
        isOddCount, "Odd percentage:", oddPercentage +"%");
}

checkYuliaTheory(11);