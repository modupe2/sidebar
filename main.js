const sideButton = document.querySelector(".side-button")
const sideBar = document.querySelector("#side-bar")
const span = document.querySelectorAll("span")
const icon = document.querySelector("#icon")
const none = document.querySelector(".none")


sideButton.addEventListener("click", () => {
    sideBar.classList.toggle("expand")
    span.forEach(n => {
        n.classList.toggle("view")
    })
    sideButton.classList.toggle("push")
    icon.classList.toggle("ri-arrow-left-double-fill")
    icon.classList.toggle("ri-arrow-right-double-fill")
    none.classList.toggle("none")

})

