const steps = [
    // City ​​councilor Object
    {
        role: 'VEREADOR',
        numbers: 5,
        candidates: [
            {
                number: '38111',
                name: 'Fulano da Silva',
                party: 'PPFE', // Partido dos Programadores Front-end
                vice: '',
                images: [
                    {url: '38111.jpg', subtitle: 'Vereador'}
                ],
            },
            {
                number: '77222',
                name: 'Beltrano Santos',
                party: 'PPBE', // Partido dos Programadores Back-end
                vice: '',
                images: [
                    {url: '77222.jpg', subtitle: 'Vereador'}
                ],
            },
        ],
    },

    // Major Object
    {
        role: 'PREFEITO',
        numbers: 2,
        candidates: [
            {
                number: '32',
                name: 'Ciclano Campos',
                party: 'PPFE', // Partido dos Programadores Front-end
                vice: 'Deltrano Rocha',
                images: [
                    {url: '32.jpg', subtitle: 'Prefeito'},
                    {url: '32-2.jpg', subtitle: 'Vice-Prefeito', small: true}
                ],
            },
            {
                number: '16',
                name: 'Zulano Castro',
                party: 'PPBE', // Partido dos Programadores Back-end
                vice: 'Ficlano Macedo',
                images: [
                    {url: '16.jpg', subtitle: 'Prefeito'},
                    {url: '16-2.jpg', subtitle: 'Vice-Prefeito', small: true}

                ],
            },
        ],
    },
]

globalThis.steps = steps