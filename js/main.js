const bodyTag = document.getElementsByTagName('body')[0]
const fileUrl = './assets/json.txt';
let test;
fetch(fileUrl).then(response => response.json()).then(response => {
    test = response
    buildHeaderElement();
});


function buildHeaderElement() {
    const headerTag = document.createElement('header');
    const titleElement = document.createElement('h1');
    const titleText = document.createTextNode(test.title);
    headerTag.className = 'header';
    titleElement.appendChild(titleText);
    headerTag.appendChild(titleElement);
    bodyTag.appendChild(headerTag);
}

/**
 *
 */
function buildMainContent() {
    const mainTag = document.createElement('main');
}
