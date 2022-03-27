'use strict'
document.addEventListener('DOMContentLoaded', () => {
	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	const input = document.querySelector('#requestEmail')

	document.querySelector('#accordion').onclick = e => {
		if (document.querySelector('.shadowCard') != null) {
			document.querySelector('.shadowCard').classList.remove('shadowCard')
		}

		e.target.closest('.accordion-card').classList.toggle('shadowCard')
	}
	document.querySelector('#burgerButton').onclick = e => {
		document.querySelector('#navLinks').classList.toggle('burger__menu__position')
	}
	let customSelect = () => {
		let x, i, j, l, ll, selElmnt, a, b, c

		x = document.getElementsByClassName('custom-select-test')
		l = x.length
		for (i = 0; i < l; i++) {
			selElmnt = x[i].getElementsByTagName('select')[0]
			ll = selElmnt.length

			a = document.createElement('DIV')
			a.setAttribute('class', 'select-selected')

			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
			x[i].appendChild(a)

			b = document.createElement('DIV')
			b.setAttribute('class', 'select-items select-hide')

			for (j = 1; j < ll; j++) {
				c = document.createElement('DIV')
				c.innerHTML = selElmnt.options[j].innerHTML
				c.addEventListener('click', function (e) {
					var y, i, k, s, h, sl, yl
					s = this.parentNode.parentNode.getElementsByTagName('select')[0]
					sl = s.length
					h = this.parentNode.previousSibling

					for (i = 0; i < sl; i++) {
						if (s.options[i].innerHTML == this.innerHTML) {
							s.selectedIndex = i
							h.innerHTML = this.innerHTML
							y = this.parentNode.getElementsByClassName('same-as-selected')
							yl = y.length
							for (k = 0; k < yl; k++) {
								y[k].removeAttribute('class')
							}
							this.setAttribute('class', 'same-as-selected')

							break
						}
					}
					h.click()
				})
				b.appendChild(c)
			}
			x[i].appendChild(b)
			a.addEventListener('click', function (e) {
				e.stopPropagation()
				closeAllSelect(this)
				this.nextSibling.classList.toggle('select-hide')
				this.classList.toggle('select-arrow-active')
				this.classList.add('color-primary-300')
			})
		}

		function closeAllSelect(elmnt) {
			var x,
				y,
				i,
				xl,
				yl,
				arrNo = []
			x = document.getElementsByClassName('select-items')
			y = document.getElementsByClassName('select-selected')
			xl = x.length
			yl = y.length
			for (i = 0; i < yl; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove('select-arrow-active')
					//y[i].classList.remove('color-primary-300')
				}
			}
			for (i = 0; i < xl; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add('select-hide')
				}
			}
		}

		document.addEventListener('click', closeAllSelect)
	}
	let customSelectSort = () => {
		let x, i, j, l, ll, selElmnt, a, b, c
		x = document.getElementsByClassName('custom-select-sort')
		l = x.length
		for (i = 0; i < l; i++) {
			selElmnt = x[i].getElementsByTagName('select')[0]
			ll = selElmnt.length

			a = document.createElement('DIV')
			a.setAttribute('class', 'select-selected-sort')
			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
			x[i].appendChild(a)

			b = document.createElement('DIV')
			b.setAttribute('class', 'select-items-sort select-hide-sort')
			for (j = 1; j < ll; j++) {
				c = document.createElement('DIV')
				c.innerHTML = selElmnt.options[j].innerHTML
				c.addEventListener('click', function (e) {
					var y, i, k, s, h, sl, yl
					s = this.parentNode.parentNode.getElementsByTagName('select')[0]
					sl = s.length
					h = this.parentNode.previousSibling
					for (i = 0; i < sl; i++) {
						if (s.options[i].innerHTML == this.innerHTML) {
							s.selectedIndex = i
							h.innerHTML = this.innerHTML
							y = this.parentNode.getElementsByClassName('same-as-selected-sort')
							yl = y.length
							for (k = 0; k < yl; k++) {
								y[k].removeAttribute('class')
							}
							this.setAttribute('class', 'same-as-selected-sort')
							break
						}
					}
					h.click()
				})
				b.appendChild(c)
			}
			x[i].appendChild(b)
			a.addEventListener('click', function (e) {
				e.stopPropagation()
				closeAllSelect(this)
				this.nextSibling.classList.toggle('select-hide-sort')
				this.classList.toggle('select-arrow-active-sort')
				document.querySelector('.custom-select-sort__open').classList.toggle('d-none')
				document.querySelector('.custom-select-sort__close').classList.toggle('d-none')
			})
		}

		function closeAllSelect(elmnt) {
			var x,
				y,
				i,
				xl,
				yl,
				arrNo = []
			x = document.getElementsByClassName('select-items-sort')
			y = document.getElementsByClassName('select-selected-sort')
			xl = x.length
			yl = y.length
			for (i = 0; i < yl; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove('select-arrow-active-sort')
				}
			}
			for (i = 0; i < xl; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add('select-hide-sort')
				}
			}
		}

		document.addEventListener('click', closeAllSelect)
	}

	customSelect()
	customSelectSort()

	input.onfocus = () => {
		function isEmailValid(value) {
			return EMAIL_REGEXP.test(value)
		}

		function onInput() {
			if (isEmailValid(input.value)) {
				input.style.borderColor = '#507a36'
			} else {
				input.style.borderColor = '#df4e3c'
			}
		}
		input.addEventListener('input', onInput)
	}
})
