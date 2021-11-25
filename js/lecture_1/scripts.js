function deleteElement() {
    const testParagraph = document.getElementById('img');
    testParagraph.style.display = 'none'; 

}

const myButton = document.getElementById('button');
myButton.addEventListener('click', deleteElement);

function showElement() {
    const testParagraph = document.getElementById('img');
    testParagraph.style.display = 'block'; 
}

const myBTN = document.getElementById('btn');
myBTN.addEventListener('click', showElement);