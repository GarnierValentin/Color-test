//Création de clearGrid afin de supprimer la grille existante
function clearGrid() {
    const invaderElement = document.getElementById('invader');
    invaderElement.innerHTML = '';  
}

function createGrid(howMuchTile, howMuchPixel) {
    const invaderElement = document.getElementById('invader');
    const invaderTileElement = document.querySelectorAll('.invader-tile');
    howMuchTileConvertisseur = howMuchTile * howMuchTile;
    let clickCounter = 0;

    for (let i = 0; i < howMuchTileConvertisseur; i++) {
        const tileElement = document.createElement('div');
        tileElement.classList.add('invader-tile');
        invaderElement.append(tileElement);
        //Gerer le clic et le changement de couleur
        tileElement.addEventListener('click', function () {
            //Gestion couleur
            tileElement.classList.remove('plain', 'light', 'empty', 'highlight');
            tileElement.classList.add(colorChoice);
        });
        //Modification du css directement à la création de chaques tiles
        tileElement.style.height = `${howMuchPixel}px`;
        tileElement.style.width = `${howMuchPixel}px`;

    }
    //Modification du css pour afficher correctement la grid
    invaderElement.style.gridTemplate = `repeat(${howMuchTile}, 1fr) / repeat(${howMuchTile}, 1fr)`;
}

function clearSelectedClass() {
    const paletteColors = document.querySelectorAll('.--rond');

    paletteColors.forEach((color) => {
        color.classList.remove('selected');
    });
}

const app = {
    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],
}

// <input type="number" class="configuration-grid" min=1>
//<input type="number" class="configuration-pixel">

const configurationGridElement = document.createElement('input');
const configurationParent = document.querySelector('.configuration');

configurationGridElement.classList.add('configuration-grid');
configurationGridElement.setAttribute('min', '1');
configurationGridElement.setAttribute('type', 'number');
configurationGridElement.setAttribute('placeholder', 'Taille de la grille');
configurationParent.append(configurationGridElement);

const configurationPixelElement = document.createElement('input');
configurationPixelElement.classList.add('configuration-pixel');
configurationPixelElement.setAttribute('min', '20');
configurationPixelElement.setAttribute('type', 'number');
configurationPixelElement.setAttribute('placeholder', 'Taille des pixels');
configurationParent.append(configurationPixelElement);

const configurationButton = document.createElement('button');
configurationButton.classList.add('configuration-button');
configurationButton.textContent = 'Valider';
configurationParent.append(configurationButton);

configurationButton.addEventListener('click', function (event) {
    event.preventDefault(); //Empêche le raffraichissement de la page suite au 
    
    clearGrid();

    const howMuchTile = Number(configurationGridElement.value);
    console.log("Mon nombre de tuile", howMuchTile);
    const howMuchPixel = Number(configurationPixelElement.value);
    console.log("Mon nombre de pixel", howMuchPixel)


    createGrid(howMuchTile, howMuchPixel);
});

let colorChoice = null;

const palette = document.createElement('div');
palette.classList.add('palette');
configurationParent.append(palette);

const paletteColorEmpty = document.createElement('div');
paletteColorEmpty.classList.add('empty');
paletteColorEmpty.classList.add('--rond');
palette.append(paletteColorEmpty);

paletteColorEmpty.addEventListener('click', function() {
    colorChoice = this.classList[0];
    clearSelectedClass();
    paletteColorEmpty.classList.add('selected');
    console.log(colorChoice);
});


const paletteColorPlain = document.createElement('div');
paletteColorPlain.classList.add('plain');
paletteColorPlain.classList.add('--rond');
palette.append(paletteColorPlain);

paletteColorPlain.addEventListener('click', function() {
    colorChoice = this.classList[0];
    clearSelectedClass();
    paletteColorPlain.classList.add('selected');
    console.log(colorChoice);
});


const paletteColorLight = document.createElement('div');
paletteColorLight.classList.add('light');
paletteColorLight.classList.add('--rond');
palette.append(paletteColorLight);

paletteColorLight.addEventListener('click', function() {
    colorChoice = this.classList[0];
    clearSelectedClass();
    paletteColorLight.classList.add('selected');
    console.log(colorChoice);
});


const paletteColorHighlight = document.createElement('div');
paletteColorHighlight.classList.add('highlight');
paletteColorHighlight.classList.add('--rond');
palette.append(paletteColorHighlight);

paletteColorHighlight.addEventListener('click', function() {
    colorChoice = this.classList[0];
    clearSelectedClass();
    paletteColorHighlight.classList.add('selected');
    console.log(colorChoice);
});