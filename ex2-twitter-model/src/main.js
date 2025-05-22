import 'bootstrap'
import './scss/styles.scss'

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('switchTheme')

    themeToggle.addEventListener('click', (e) => {
        e.preventDefault()
        const html = document.documentElement
        const currentTheme = html.getAttribute('data-bs-theme')
        const newTheme = currentTheme === "dark" ? "light" : "dark"
        html.setAttribute('data-bs-theme', newTheme)
    })
})