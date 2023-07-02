function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(b=>b.addEventListener('click', toggle))


    function toggle (e){
        const profile=e.target.parentElement;// vzima div na butona
        const isActive=profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive){
           let div=profile.querySelector('div');
           
           if(e.target.textContent=='Show more'){
             div.style.display='block'
             e.target.textContent='Hide it'
           }else {
            div.style.display=''
            e.target.textContent='Show more'
           }
        }
    }
}