window.addEventListener('DOMContentLoaded', ()=>{
    let products = document.querySelectorAll('.product')
    let buttons = document.querySelectorAll('button')
    let openBtn = document.querySelector('.open')

    const openCart=()=>{
        let cart = document.createElement('div')
        let field = document.createElement('div')
        let heading = document.createElement('h2')
        let closeBtn = document.createElement('button')

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')


        heading.textContent = 'В нашей корзине'
        closeBtn.textContent = 'Закрыть'

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)

    }

    openCart()

    let cart = document.querySelector('.cart')
    let field = document.querySelector('.cart-field')
    let closeBtn = document.querySelector('.close')

    openBtn.addEventListener('click', ()=>{
        cart.style.display = 'block'
    })

    closeBtn.addEventListener('click', ()=>{
        cart.style.display = "none"
    })

    buttons.forEach((item, key)=>{
        item.addEventListener('click', ()=>{
            let cloneItem = products[key].cloneNode(true)
            let btn = cloneItem.querySelector('button')

            btn.remove()

            field.appendChild(cloneItem)
            products[key].remove()
        })
    })

})



