const links = document.querySelectorAll('#menu-list a');
const icon = document.querySelector('#menu')

links.forEach((link)=>[
    link.addEventListener('click',()=>{
        icon.click()
    })
])
