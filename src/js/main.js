import '../css/style.css'
import './candidates' // Candidates Array

const candidateTitle = document.querySelector('.candidateAreaTitle span')
const candidateRole = document.querySelector('.candidateRole span')
const candidateInfos = document.querySelector('.candidateInfos')
const instructionArea = document.querySelector('.instructionArea')
const candidateAreaRight = document.querySelector('.candidateAreaRight')
const voteArea = document.querySelector('.voteArea')
const keyboardButtons = document.querySelectorAll('.keyboardButton')

let currentStep = 0
let typedNumbers = ''
let whiteVote = false;
let votes = []

globalThis.typedNumbers = typedNumbers

function startStep() {
    let step = steps[currentStep]

    let numbersHTML = '';
    typedNumbers = '';
    whiteVote = false;

    for (let i = 0; i < step.numbers; i++) {
        i === 0 ? numbersHTML += '<div class="number active"></div>' : numbersHTML += '<div class="number"></div>';
    }

    candidateTitle.style.display = 'none'
    candidateRole.innerHTML = step.role
    candidateInfos.innerHTML = ''
    instructionArea.style.display = 'none'
    candidateAreaRight.innerHTML = ''
    voteArea.innerHTML = numbersHTML;
}

for (let i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].addEventListener('click', function () {
        let value = this.innerText;

        if (value.length === 1) {
            let numbers = document.querySelector('.number.active')

            if (numbers !== null) {
                numbers.innerHTML = value
                typedNumbers = `${typedNumbers}${value}`;

                numbers.classList.remove('active')

                numbers.nextElementSibling !== null ? numbers.nextElementSibling.classList.add('active') : updateInterface()
            }
        }
    })
}

function updateInterface() {
    let step = steps[currentStep]

    let candidate = step.candidates.filter((item) => {
        if (item.number === typedNumbers) {
            return true
        } else {
            return false
        }
    })

    if (candidate.length > 0) {
        candidate = candidate[0]
        candidateTitle.style.display = 'block'
        instructionArea.style.display = 'block'

        if (candidate.vice !== '') {
            candidateInfos.innerHTML = `Nome: ${candidate.name}<br>Partido: ${candidate.party}<br>Vice: ${candidate.vice}`
        } else {
            candidateInfos.innerHTML = `Nome: ${candidate.name}<br>Partido: ${candidate.party}`
        }

        let candidateImages = '';

        for (let i in candidate.images) {
            if (candidate.images[i].small) {
                candidateImages += `<div class="candidateImg candidateSmall"> <img src="/${candidate.images[i].url}" alt=""> ${candidate.images[i].subtitle} </div>`
            } else {
                candidateImages += `<div class="candidateImg"> <img src="/${candidate.images[i].url}" alt=""> ${candidate.images[i].subtitle} </div>`
            }
        }

        candidateAreaRight.innerHTML = candidateImages
    } else {
        candidateTitle.style.display = 'block'
        instructionArea.style.display = 'block'
        candidateInfos.innerHTML = '<div class="alert"> VOTO NULU </div>'
    }
}

const correctButton = document.querySelector('.keyboardButton.correctButton')

correctButton.addEventListener('click', function correctButtonPress() {
    startStep()
})

const whiteButton = document.querySelector('.keyboardButton.whiteButton')

whiteButton.addEventListener('click', function whiteButtonPress() {
    if (typedNumbers === '') {
        whiteVote = true
        candidateTitle.style.display = 'block'
        instructionArea.style.display = 'block'
        candidateInfos.innerHTML = '<div class="alert"> VOTO EM BRANCO </div>'
        voteArea.innerHTML = '';
    } else {
        alert('Para votar em BRANCO, não pode ter digitado nenhum número!')
    }
})

const confirmButton = document.querySelector('.keyboardButton.confirmButton')

confirmButton.addEventListener('click', function confirmButtonPress() {
    let step = steps[currentStep]
    let confirmedVote = false

    if (whiteVote === true) {
        confirmedVote = true

        votes.push({
            Etapa: steps[currentStep].role,
            Voto: 'BRAMCO'
        })
    } else if (typedNumbers.length === step.numbers) {
        confirmedVote = true

        votes.push({
            Etapa: steps[currentStep].role,
            Voto: typedNumbers
        })
    }

    if (confirmedVote) {
        currentStep++

        if (steps[currentStep] !== undefined) {
            startStep()
        } else {
            document.querySelector('.urnScreen').innerHTML = '<div class="endAlert"> FIM </div>'
            console.log(votes)
        }
    }
})

startStep()