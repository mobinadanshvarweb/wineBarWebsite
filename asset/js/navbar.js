let _nav = document.getElementsByTagName('nav')[0]
let sec8 = document.getElementById('sec8')
let scrollfix = document.getElementById('scrollfix')
let sec9 = document.getElementById('sec9')
let sec10 = document.getElementById('sec10')
let regpage = document.getElementById('regpage')

document.getElementById('lock').addEventListener('click',(e)=>{
    e.preventDefault();
    sec8.style.display='flex'
    _nav.style.top='-100%'
    scrollfix.style.display='none'
    sec9.style.display='none'
    sec10.style.display='none'
    regpage.style.display='none'
    logintest.style.display = 'none'
})

document.getElementById('closelock').addEventListener('click',()=>{
   sec8.style.display='none'
    _nav.style.top='0'
    scrollfix.style.display='flex'
})



document.getElementById('search').addEventListener('click',(e)=>{
    e.preventDefault()
    sec9.style.display='flex'
    sec8.style.display='none'
    sec10.style.display='none'
    regpage.style.display='none'
    logintest.style.display = 'none'
})

document.getElementById('closesearch').addEventListener('click',()=>{
    sec9.style.display='none'
})

document.getElementById('login').addEventListener('click',(e)=>{
    e.preventDefault()
    sec10.style.display='flex'
    sec9.style.display='none'
    sec8.style.display='none'
    regpage.style.display='none'
    logintest.style.display = 'none'
})
document.getElementById('closelogin').addEventListener('click',()=>{
    sec10.style.display='none'
    console.log('imeee');
})

document.getElementById('createaccount').addEventListener('click',(e)=>{
    e.preventDefault()
    regpage.style.display='flex'
})
