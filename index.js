const about = ['qwe', 'wefwerfv', 'wefvwev']
const membership = ['iuhi', 'oijoi']
const meeting = ['trtere', 'oijoijvy']
const resources = ['jhjhjhj', 'kjkjkjk', 'iuiuiu']



document.querySelectorAll('.link').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.nextSibling === document.querySelector('.foreign')){
            console.log('1')

        }
        else if([].slice.call(item.children).length>=2){
            console.log([].slice.call(item.children))
            const name = item.getAttribute('data-name')
            console.log(name)
            for(let i = 0; i<=name.length; i++){
                item.lastChild.insertAdjacentHTML('beforeend',`<div>${about[i]}</div>`)
            }
        }
    })
    
})


