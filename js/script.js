document.getElementsByTagName('header')[0].style.height = window.innerHeight+'px';

window.addEventListener('resize', () => {
    document.getElementsByTagName('header')[0].style.height = window.innerHeight+'px';
    
} )