function RemoveElement(element) {
    var father = element.parentNode;
    var grandfather = father.parentNode;
    grandfather.removeChild(father);
}
addLoadEvent(RemoveElement);