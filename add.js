let first = document.querySelector(".circle")
let second = document.querySelector(".child")
let body = document.querySelector(".full")
let curMode = "left"
first.addEventListener("click", () => {
    if (curMode === "left") {
        curMode = "right"
        first.classList.add("move")
        second.classList.add("try")
        body.classList.add("fill")
        first.classList.remove("move2")
        second.classList.remove("try2")
        body.classList.remove("fill2")

    }
    else {
        curMode = "left"
        first.classList.add("move2")
        second.classList.add("try2")
        body.classList.add("fill2")
        first.classList.remove("move")
        second.classList.remove("try")
        body.classList.remove("fill")

    }

})


