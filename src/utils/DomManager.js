const document = window.document || window.document.documentElement;

const hideElement = elementId => {
    const element = document.getElementById(elementId);

    element.style.display = "none";
}

const showElement = (elementId, display="block") => {
    const element = document.getElementById(elementId);

    element.style.display = display;
}

const toggleElement = elementId => {
    const element = document.getElementById(elementId);
    
    if (element) 
        return console.log(`The element id ${elementId} not in document`);

    if (element.style.display === "none") 
        return showElement(elementId, 'block');

    hideElement(elementId);
}

export const DomManager = {
    showElement,
    hideElement,
    toggleElement
}