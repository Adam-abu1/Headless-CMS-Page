const bodyTag = document.getElementsByTagName('body')[0]
const headTag = document.getElementsByTagName('head')[0]

const fileUrl = './assets/json.txt';
let test;
fetch(fileUrl).then(response => response.json()).then(response => {
    test = response
    for (key in test) {
        if (typeof test[key] === 'object') {

        } else if (key === 'title') {
            buildHtml('title', key, test[key], false);
        } else {
            buildHtml('div', key, test[key]);
        }


    }
});

/**
 *
 *
 * @param tagName
 * @param className
 * @param content
 * @param placeInBody
 */
function buildHtml(
    tagName,
    className = false,
    content = false,
    placeInBody = true,
    targetElement
) {
    const tag = document.createElement(tagName);

    if (className) {
        tag.className = className;
    }

    if (content) {
        tag.innerHTML = content
    }

    placeInBody ? bodyTag.appendChild(tag) : headTag.appendChild(tag);
}
