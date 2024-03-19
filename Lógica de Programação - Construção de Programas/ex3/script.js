
        const select = document.getElementsByTagName("select")[0]
        const area = document.getElementsByTagName("b")[0]

        const var1 = document.getElementsByTagName("input")[0]
        const var2 = document.getElementsByTagName("input")[1]

        var valor1 = 0;
        var valor2 = 0;

        select.addEventListener("change", () => {
            if (var1.value == "" || var2.value == "") return
            switch (select.value) {
                case "1":
                    var2.style.display = "block"
                    calc(valor1, valor2, select.value)
                    break;
                case "2":
                    var2.style.display = "block"
                    calc(valor1, valor2, select.value)
                    break;
                case "3":
                    var2.style.display = "none"
                    calc(valor1, valor2, select.value)
                    break;
                case "4":
                    var2.style.display = "block"
                    calc(valor1, valor2, select.value)
                    break;
            }
        })

        var1.addEventListener("input", () => {
            try {
                valor1 = parseInt(var1.value);
                calc(valor1, valor2, select.value)
            }
            catch {
                alert("Digite números");
                valor1 = 0;
            }
        })
        var2.addEventListener("input", () => {
            try {
                valor2 = parseInt(var2.value);
                calc(valor1, valor2, select.value)
            }
            catch {
                alert("Digite números");
                valor2 = 0;
            }
        })

        function calc(nm1 = 0, nm2 = 0, type = 1) {
            let valor = 0
            switch (type) {
                case "1":
                    valor = (nm2 * nm1) / 2
                    break;
                case "2":
                    valor = nm2 * nm1
                    break;
                case "3":
                    valor = 3.14 * (nm1 * nm1)
                    break;
                case "4":
                    valor = nm2 * nm1
                    break;
            }
            area.textContent = valor
        }

    