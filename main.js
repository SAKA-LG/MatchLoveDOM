document.title = 'MachLove'
const body = document.body
let result = document.createElement('h1')
let reation = document.createElement('h1')

body.append(reation)
reation.style.justifySelf = 'center'
body.append(result)
result.style.justifySelf = 'center'

const userName = document.getElementById('UserName')
const targetName = document.getElementById('targetName')
document.getElementById('submit-button').innerText = 'Match'
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function report() {
    const pesan = 'Mohon Maaf Ada sesatu kesalahan/Bug dalam sistem anda tolong di perbaiki demi kenyamanan masing masing.'
    const FetchUrl = `https://wa.me/62881037637602?text=${pesan}&send=true`;
        window.open(FetchUrl, '_blank')
}

function Match() {
    let matchLoveNumber = getRandomNumber()
        setTimeout(function(){
            result.innerText = `${getRandomNumber()}%`}, 8000)
            setTimeout(function(){
            result.innerText = '•'}, 2000)
            setTimeout(function(){
            result.innerText = '••'
            }, 4000)
            setTimeout(function(){
                result.innerText = '•••'
            }, 6000)

            if(userName.value.trim() === '' || targetName.value.trim() === ''){
                alert('Sory Something Went Wrong /:')
                return
            }else{
                setTimeout(function(){
                    if (matchLoveNumber <= 39) {
                        reation.innerText = 'Kasihan 🤣';
                    } else if (matchLoveNumber <= 69) {
                        reation.innerText = 'Lumayan 😏';
                    } else {
                        reation.innerText = 'Jodoh wok 🥰';
                    }
                }, 8000)
            }
}
