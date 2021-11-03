/****      rating animation   ****/

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        
        

        if(count < target){
            
            number = count + inc;
            number = Math.ceil(number);
            
            counter.innerText = number;
            
            setTimeout(updateCount, 450);
        }else{
            count.innertext = target;
        }
        
    }

    updateCount();
});