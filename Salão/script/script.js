function mudouTamanho(){
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}

function clickMenu(){
    if(menu.style.display == 'block' ){
        menu.style.display = 'none'
        topo.style.height = '100px'
    }else{
        menu.style.display = 'block'
        topo.style.height = '150px'
    }
}