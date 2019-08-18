'use strict';

const factorial = (num)=> {
  if (num === 1) {
    return 1;
  }
  else if(num ===0){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const probability_calc=()=>{
  let hit = parseInt(document.forms.id_form1.id_textBox1.value,10);
  let stone = parseInt(document.forms.id_form1.id_textBox2.value,10);
  let card =  parseInt(document.forms.id_form1.id_textBox3.value,10);

  let summon_num= Math.round(stone/3)+card+Math.round(stone/30)+Math.round(card/10);
  let r = summon_num*0.01;

  let total_probability = Math.round(Math.exp(-r)*Math.pow(r,hit)/factorial(hit)*10000)/100;

  /*
  let total_probability = 0;
  for(let i=0;i<hit;i++){
    let k=i+1
    let probability = Math.exp(-r)*Math.pow(r,k)/factorial(k);
    total_probability+= probability;
    console.log(probability);
  }
  */

  const target = document.getElementById("output");
  target.innerText = `喜べ少年。召喚回数${summon_num}回で、君の望みは${total_probability}%で叶う。`;

};
