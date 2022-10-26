const panels = document.querySelectorAll(".panel")
for(let panel of panels){
    panel.addEventListener('click',function(){
        removeActiveClass();
        panel.classList.add("active")
    })
}
function removeActiveClass(){
    for(let panel of panels){
        panel.classList.remove('active')    }
}