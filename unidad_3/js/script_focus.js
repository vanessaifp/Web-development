// Focus the first form field when the page loads. This can be useful for accessibility and usability.
window.onload = function () {
    if (document.forms.length > 0) {
        if (document.forms[0].elements.length > 0) 
        { document.forms[0].elements[0].focus();
        }
    }
}




