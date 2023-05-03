var menu = document.getElementById('dropdown')
var content = document.querySelector('.menu')
var closeIm = document.getElementById('close')

menu.addEventListener('click', showContent)

function showContent(){

    if(content.style.display == 'block'){
        content.style.display = 'none'
    }else{
        content.style.display = 'block'
        document.body.style.backgroundColor = 'rgba(0, 0, 1, 0.200)'
        document.body.style.overflow = 'hidden'        
    }
}

closeIm.addEventListener('click', hideContent)

function hideContent(){
    if(content.style.display == 'block'){
        content.style.display = 'none'
        document.body.style.backgroundColor = 'white'
        document.body.style.overflow = 'scroll'
    }
}