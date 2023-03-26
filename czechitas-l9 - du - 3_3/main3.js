// tady je místo pro náš program

const form = document.querySelector('form')
const textField = document.getElementById('email')

const textFieldValidation = () => {
    if (textField.value === '' || !textField.value.includes('@')) {
		textField.classList.add('emailRed')
	} else {
		textField.classList.remove('emailRed')
        const message = (event) => {
            event.preventDefault()
            const submitted = document.getElementById('email')
            const email = submitted.value
            form.textContent = `Dekujeme za vas zajem. Teste se na novinky ze sveta frontendu a UX na vasi adrese ${email}.`
        }

        const buttonOdebirat = document.getElementById('submit')
        buttonOdebirat.addEventListener('click', message)
	}
}

textField.addEventListener('input', textFieldValidation)


