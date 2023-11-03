let _main = document.getElementsByTagName('main')[0]
let cursor = document.getElementById('cursor')
_main.addEventListener('mousemove',(e)=>{
    let x = e.clientX
    let y = e.clientY
    cursor.style.top = y+'px'
    cursor.style.left = x+'px'
})