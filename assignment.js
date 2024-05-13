const  form = document.getElementById('form'); //taken form ID by using getElementbyID

form.addEventListener('submit',(e)=>{         //used addeventlistener for submit button to perform onclick
              e.preventDefault();
    const num=Number(e.target.number_1.value);
    const num2=Number(e.target.number_2.value); //for all the input buttons used event.target.name.value
    const operator=e.target.operator.value;
    if(operator=='+'){
      e.target.answer.value=num+num2;       //Here I used if,else if to get perform all the operators
    }
    else if(operator=='-'){
        e.target.answer.value=num-num2;
    }
    else if(operator=='*'){
        e.target.answer.value=num*num2;
    }
    else if(operator =='/'){
        e.target.answer.value=num/num2;
    }
})