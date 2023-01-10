document.querySelectorAll(".animate-input").forEach(e => {
    let input = e.querySelector('input')

    input.onkeyup = () => {
        if(input.value.trim().length > 0) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }
    }
})