const navButton = document.querySelector('.header__menu-btn')
const headerNavMobile = document.querySelector('.header-nav.mobile')
const navCloseButton = document.querySelector('.header-nav__close-btn')

navButton.addEventListener('click', () => {
    headerNavMobile.setAttribute('active', '')
    function closeHeaderNavHandler() {
        headerNavMobile.removeAttribute('active')
        navCloseButton.removeEventListener('click', closeHeaderNavHandler)
    }
    navCloseButton.addEventListener('click', closeHeaderNavHandler)
})
