const clearChildren = function (element) {
    while (element.firstChild) {
      element.removeChild(element.lastChild);
    }
};