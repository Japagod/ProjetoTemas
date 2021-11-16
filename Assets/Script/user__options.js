var nav = document.getElementById("nav")
var onoff = false
document.getElementById("config").addEventListener("click", e => {
    if (onoff == false) {
        nav.style.animation = "anim-config 1s forwards"
        main.style.animation = "anim-config-blur 1s forwards"
        onoff = true
    } else {
        main.style.animation = "anim-config-blur-out 1s forwards"
        nav.style.animation = "anim-config-out 1s forwards"
        onoff = false
    }
})
dark = JSON.parse(window.localStorage.getItem('dark'))
if (dark == true) {
    document.getElementById("main").style.backgroundColor = "#121212"
    document.getElementById("light_dark").style.filter = "invert(96%) sepia(40%) saturate(0%) hue-rotate(292deg) brightness(113%) contrast(101%)"
    document.getElementById("nav").style.backgroundColor = "#121212"
    document.getElementById("nav_label").style.color = "#fff"
    

    
} else {
    document.getElementById("main").style.backgroundColor = "#fff"
    document.getElementById("light_dark").style.filter = "invert(0%) sepia(3%) saturate(23%) hue-rotate(84deg) brightness(96%) contrast(100%)"
    document.getElementById("nav").style.backgroundColor = "#fff"
    document.getElementById("nav_label").style.color = "#121212"

   
}
document.getElementById("light_dark").addEventListener("click", e => {
    dark = JSON.parse(window.localStorage.getItem('dark'))
    if (dark == false) {
        document.getElementById("main").style.backgroundColor = "#121212"
        document.getElementById("light_dark").style.filter = "invert(96%) sepia(40%) saturate(0%) hue-rotate(292deg) brightness(113%) contrast(101%)"
        document.getElementById("nav").style.backgroundColor = "#121212"
        document.getElementById("nav_label").style.color = "#fff"
        

        dark=true
        console.log(dark)
        window.localStorage.setItem('dark', JSON.stringify(dark))
    } else {
        document.getElementById("main").style.backgroundColor = "#fff"
        document.getElementById("light_dark").style.filter = "invert(0%) sepia(3%) saturate(23%) hue-rotate(84deg) brightness(96%) contrast(100%)"
        document.getElementById("nav").style.backgroundColor = "#fff"
        document.getElementById("nav_label").style.color = "#121212"

        dark = false
        console.log(dark)
        window.localStorage.setItem('dark', JSON.stringify(dark))
    }

})

function userspan() {
    var user_time_span = document.getElementById("input_userspan").value
    window.localStorage.setItem('user_time_span', JSON.stringify(user_time_span))
    alert("Para aplicar as mudanças, reinicie a página")
    console.log(user_time_span)
}