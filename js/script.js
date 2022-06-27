function hideShowSocialIcons(selector) {
    const elem = document.querySelector(selector)
    elem.addEventListener('click', ()=>{
     elem.classList.toggle('active')
    })
}

hideShowSocialIcons('.header-social')