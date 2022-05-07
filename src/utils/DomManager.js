const document = window.document || window.document.documentElement;

const hideElement = elementId => {
    const element = document.getElementById(elementId);

    if (!element) return console.log(`The element id ${elementId} not in document`);

    element.style.display = "none";
}

const showElement = (elementId, display="block") => {
    const element = document.getElementById(elementId);

    if (!element) return console.log(`The element id ${elementId} not in document`);

    element.style.display = display;
}

export const DomManager = {
    showElement,
    hideElement
}