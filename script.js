const bottors = document.querySelectorAll('button')

bottors.forEach(botao => {
    botao.addEventListener("click",  curtir)
    let curtiu = false
    function curtir() {
        let curtidas  = document.querySelector("span")
        let curtidas = document.querySelector

       if (curtiu == false){
           curtiu = true
           curtidas.textContext++
           botao.style.backgroundColor == 'green'
       }

    }
});