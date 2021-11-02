const api = "https://discord-moodle-bot.herokuapp.com/api"
let pai = document.getElementById("pai")
async function getISS() {
            // Pegar os dados
    const resposta = await fetch(api)
    const data = await resposta.json()

            // Mensagem "Aguarde"
    let inf = document.getElementById("aviso")
    inf.style.display = "none"

    for (var i = 0; i < data.events.length ; i++) {

                // Área "Pega recurso"
        let curso = data.events[i].course.fullname
        let name = data.events[i].name
        let descrição = data.events[i].description
        let date = data.events[i].timestart*1000
        var diaatual = new Date()
        diaatual = diaatual.getDate()
        console.log(diaatual)

                // Formatação da data
        let horario = new Date(date)
        let [minuto,dia,hora,mes] = [horario.getUTCMinutes(),horario.getDate(),horario.getHours(),horario.getUTCMonth()]

                // Criação dos elementos da pagina
        let titulot = document.createTextNode(curso)
        let titulo = document.createElement("h2")
        let div = document.createElement("div")
        let divdes = document.createElement("div")

                // Aplicação dos elementos (TITULO) 
        div.classList.add("content")
        titulo.appendChild(titulot)
        div.appendChild(titulo)
        pai.appendChild(div)

                // Aplicação dos elementos ("RESUMO")
        let texto = document.createTextNode(name )
        document.createElement("p")
        div.appendChild(texto)
        pai.appendChild(div)

                // Separação
        let br = document.createElement("br")
        div.appendChild(br)
        pai.appendChild(div)
        br = document.createElement("br")
        div.appendChild(br)
        pai.appendChild(div)

                // Aplicação dos elementos (DESCRIÇÃO)
        document.createElement("p")
        divdes.innerHTML = descrição
        div.appendChild(divdes)
        pai.appendChild(div)

                // Separação
        br = document.createElement("br")
        div.appendChild(br)
        pai.appendChild(div)
        br = document.createElement("br")
        div.appendChild(br)
        pai.appendChild(div)

                // Aplicação da data
        if (2>minuto.toString().length) {
            var dataentrega = document.createTextNode("A data de entrega é: "+ dia + " do " + mes + " as " + hora + ":0" + minuto)
       }else{
            var dataentrega = document.createTextNode("A data de entrega é: "+ dia + " do " + mes + " as " + hora + ":" + minuto)
       }    
        document.createElement("p")
        div.appendChild(dataentrega)
        pai.appendChild(div)


                // Simbolo urgente
        if (dia-diaatual<=3) {
            div.style.border = "red  solid  3px"
        } else{
            div.style.border = "green  solid  3px"
        }
    }

}

getISS()