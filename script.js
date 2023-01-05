let lightOffBtn = document.getElementById("btnid1")
let lightOnBtn = document.getElementById("btnid2")
let offBulb = document.getElementById("imgid1")
let onBulb = document.getElementById("imgid2")
let container = document.getElementById("container")
lightOffBtn.addEventListener("click", function () {
    offBulb.style.opacity = "1"
    onBulb.style.opacity = "0"
    container.style.backgroundColor = "#000"
})



lightOnBtn.addEventListener("click", function () {
    // offBulb.style.zIndex = "-1"
    onBulb.style.opacity = "1"
    offBulb.style.opacity = "0"
    container.style.backgroundColor = "#fefefe"

})
