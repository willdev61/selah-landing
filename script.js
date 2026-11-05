// Menu mobile
const toggle = document.querySelector(".nav__toggle")
const menu = document.getElementById("menu")

const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open))
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu")
    menu.classList.toggle("is-open", open)
}

toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"))
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)))
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false)
})

// Apparition douce des cartes au défilement
document.documentElement.classList.add("js")
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-in")
                revealObserver.unobserve(entry.target)
            }
        })
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
)
document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 70}ms`
    revealObserver.observe(el)
})

// Lien de navigation de la section visible
const links = new Map([...document.querySelectorAll(".nav__links a[href^='#']")].map((a) => [a.hash.slice(1), a]))
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const link = links.get(entry.target.id)
            if (link && entry.isIntersecting) {
                links.forEach((a) => a.classList.remove("is-active"))
                link.classList.add("is-active")
            }
        })
    },
    { rootMargin: "-45% 0px -50% 0px" },
)
links.forEach((_, id) => {
    const section = document.getElementById(id)
    if (section) sectionObserver.observe(section)
})
