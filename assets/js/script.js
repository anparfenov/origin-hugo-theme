const navButton = document.querySelector('.mb-header__menu-btn')
const headerNavMobile = document.querySelector('.mb-header-nav')
const navCloseButton = document.querySelector('.mb-header-nav__close-btn')
const headerNavListItems = document.querySelectorAll('.mb-header-nav-list__item')

navButton.addEventListener('click', () => {
  headerNavMobile.style.opacity = '0'
  headerNavMobile.classList.add('active')
  window.requestAnimationFrame(() => {
    headerNavMobile.style.opacity = '1'
    headerNavListItems.forEach((item, i) => {
      console.log(item)
      setTimeout(() => {
        item.style.opacity = 1;
      }, 90 * i)
    })
  })
    function closeHeaderNavHandler() {
        headerNavMobile.style.opacity = '0'
      setTimeout(() => {
        headerNavListItems.forEach(item => {
          item.style.opacity = 0
        })
        headerNavMobile.classList.remove('active')
        navCloseButton.removeEventListener('click', closeHeaderNavHandler)
      }, 300)
    }
    navCloseButton.addEventListener('click', closeHeaderNavHandler)
})
