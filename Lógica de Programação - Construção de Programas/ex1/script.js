var game = 0;
var valores = [];
var two = false;
window.addEventListener("load", () => {
    const body = document.getElementsByTagName("body")[0]
    for (let i = 0; i < 14; i++) {

        var newDiv = document.createElement("div")
        newDiv.classList = `game ${i}`
        for (let j = 0; j < 3; j++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.classList = `check${i}`
            newDiv.appendChild(input)
        }

        if (i == 0) newDiv.style.display = "block"
        else newDiv.style.display = "none"
        body.appendChild(newDiv)
    }
    var btn = document.createElement("button")
    btn.textContent = "Próximo jogo"

    btn.addEventListener("click", () => {
        let val = []
        var checks = document.getElementsByClassName(`check${game}`)
        if (!checks[0].checked && !checks[1].checked && !checks[2].checked) {
            alert("Selecione ao menos 1")
            return
        }
        if (checks[0].checked && checks[1].checked && checks[2].checked) {
            alert("Você perdeu!")
            location.reload()
            return
        }
        for (let j = 0; j < checks.length; j++) {
            const element = checks[j];
            val.push(element.checked)
        }
        var one = 0;
        val.forEach(element => {
            if (element) {
                one = one + 1
            }
        });
        if (one == 2) {
            if (two) {
                alert("Você perdeu!!!");
                location.reload()
            }
            two = true
        }
        if(!two && game == 2){
            alert("Você perdeu")
            location.reload()
            return
        }
        if(game == 13){
            alert("Você ganhou!!!")
            location.reload()
        }
        valores.push(val)

        game = game + 1;

        const inputsTotal = document.getElementsByTagName("div")
        for (let i = 0; i < inputsTotal.length; i++) {
            const element = inputsTotal[i];
            element.style.display = "none"
            if(i == game) element.style.display = "block"
        }

    })

    body.appendChild(btn)
})