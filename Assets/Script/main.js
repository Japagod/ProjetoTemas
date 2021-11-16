var dataatual = new Date()
var diaatual = dataatual.getDate()
var main = document.getElementById("main")
var horario = 0
var anim_intro = document.getElementById("anim-intro")
var anim_intro_img = document.getElementById("anim-intro-img")
var [minuto, dia, hora, mes] = "0"
var key = JSON.parse(window.localStorage.getItem('key'))
var datalength = JSON.parse(window.localStorage.getItem('datalength'))
const api = "https://discord-moodle-bot.herokuapp.com/api"
async function getISS() {
    const resposta = await fetch(api)
    const data = await resposta.json()
    var datalength = data.events.length
    for (var i = 0; i < data.events.length; i++) {
        nome = data.events[i].name
        date = data.events[i].timestart * 1000
        descrição = data.events[i].description
        curso = data.events[i].course.fullname
        window.localStorage.setItem('key', JSON.stringify(diaatual))
        window.localStorage.setItem('datalength', JSON.stringify(datalength))
        window.localStorage.setItem('nome' + i, JSON.stringify(nome))
        window.localStorage.setItem('date' + i, JSON.stringify(date))
        window.localStorage.setItem('descrição' + i, JSON.stringify(descrição))
        window.localStorage.setItem('curso' + i, JSON.stringify(curso))
    }
    anim_intro.style.animation = "anim-intro-end 1s forwards"
    console.log("CHAMANDO DADOS")
    pega_dados()
}
function pega_dados() {
        datalength = JSON.parse(window.localStorage.getItem('datalength'))
        key = JSON.parse(window.localStorage.getItem('key'))
    console.log("chamou1")
    if (diaatual - key > 1) {
        console.log("chamou2")
        for(var i = 0;i<datalength;){
            localStorage.removeItem("datalength","key","nome"+i,"date"+i,"descrição"+i,"curso"+i)
        }
        console.log("CHAMANDO GETISS")
        anim_intro.style.display = "flex"
        anim_intro_img.style.animation = "anim-intro 3s infinite"
        getISS()
    } else if (diaatual - key < 1) {
        for (var i = 0; i < datalength; i++) {
            console.log("chamou4")
            nome = JSON.parse(window.localStorage.getItem('nome' + i))
            date = JSON.parse(window.localStorage.getItem('date' + i))
            horario = new Date(date)
            minuto = horario.getMinutes()
            dia = horario.getDate()
            hora = horario.getHours()
            mes = horario.getMonth()
            descrição = JSON.parse(window.localStorage.getItem('descrição' + i))
            curso = JSON.parse(window.localStorage.getItem('curso' + i))
            console.log("CHAMANDO CONSTRUTOR")
            construtor()
        }
    }
}

function construtor() {

    // Titulo


    var art = document.createElement("article")
    art.classList.add("article")
    var txt = document.createTextNode(curso)
    var p = document.createElement("p")
    var tit = document.createElement("h1")
    tit.appendChild(txt)
    art.appendChild(tit)
    main.appendChild(art)


    txt = document.createTextNode(nome)
    p.appendChild(txt)
    art.appendChild(p)
    main.appendChild(art)

    var div = document.createElement("div")
    div.classList.add("conteudo")
    div.innerHTML = descrição
    art.appendChild(div)
    main.appendChild(art)





    // DATA DE ENTREGA




    if (2 > minuto.toString().length) {
        var dataentrega = document.createTextNode("A data de entrega é: " + dia + " do " + mes + " às " + hora + ":0" + minuto)
    } else {
        var dataentrega = document.createTextNode("A data de entrega é: " + dia + " do " + mes + " às " + hora + ":" + minuto)
    }
    div = document.createElement("div")
    div.classList.add("bah")
    div.appendChild(dataentrega)
    art.appendChild(div)
    main.appendChild(art)

    user_time_span = JSON.parse(window.localStorage.getItem('user_time_span'))
    if (dia - diaatual <= user_time_span) {
        art.style.border = "red  solid  3px"
        art.style.boxShadow = "0px 0px 50px 5px red"
    } else {
        art.style.border = "green  solid  3px"
        art.style.boxShadow = "0px 0px 50px 5px green"
    }
}
console.log("CHAMANDO DADOS")
pega_dados()