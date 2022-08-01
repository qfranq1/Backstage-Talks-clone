const sections = document.querySelectorAll('.page');
const main = document.querySelector('main');
const navs = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            main.style.background = entry.target.dataset.clr;

            navs.forEach(nav => {
                nav.classList.remove('current');
                if (nav.dataset.check === entry.target.dataset.clr) {
                    nav.classList.add('current');
                }
            })
        }
    })
}, { threshold: .55 })

sections.forEach(section => {
    sectionObserver.observe(section)
})