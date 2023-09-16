(function () {
    const screen = document.querySelector(".screen");
    const button = document.querySelectorAll(".btn");
    const equal = document.querySelector(".btn-equal");
    const clear = document.querySelector(".btn-clear");

    button.forEach(function(buttons){
        buttons.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value +=value;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === " "){
            screen.value = "please enter value";
        }
        else{
            const ans = eval(screen.value);
            screen.value = ans;
        }
    })

    clear.addEventListener('click',function(e){
        screen.value = "";
    });

})();