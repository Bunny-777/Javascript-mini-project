const button=document.querySelectorAll('.btn,.RESET')

const body=document.querySelector('body')

button.forEach(function(button){
    button.addEventListener('click', function(e){
        
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='greenyellow'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellowgreen'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id='RESET'){
            body.style.backgroundColor='pink';
        }

        
    })
});