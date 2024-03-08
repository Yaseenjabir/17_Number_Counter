function handleRendering(){

    
  let rndrCounter1 = document.querySelector(".counter-1");
  let rndrCounter2 = document.querySelector(".counter-2");
  let rndrCounter3 = document.querySelector(".counter-3");
  let rndrCounter4 = document.querySelector(".counter-4");
  
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  const counterInterval = setInterval(()=>{
    rndrCounter1.textContent = counter1;
    rndrCounter2.textContent = counter2;
    rndrCounter3.textContent = counter3;
    rndrCounter4.textContent = counter4;
    counter1++;
    counter2++;
    counter3++;
    counter4++;
    if(counter1 > 150){
      counter1 = 150;
    }
    if(counter2 > 130){
      counter2 = 130;
    }
    if(counter3 > 99){
      counter3 = 99;
    }
    if(counter4 > 250){
      counter4 = 250;
      clearInterval(counterInterval)
    }
    counterRender = true;
  },5);

}
handleRendering();