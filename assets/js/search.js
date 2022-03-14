function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    let element_Id = document.getElementById(id);
    return element_Id;
}

function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    let element_tag = document.getElementsByTagName(tag)
    return element_tag[0];
}

function findFirstElementOfClass(cls) {
    let element_class = document.getElementsByClassName(cls);
    return element_class[0]
}

function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    let element_tag = document.getElementsByTagName(tag);
    return element_tag;
}

function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    let element_class = document.getElementsByClassName(cls);
    return element_class;

}
export{findElementById, findFirstElementOfTag,findElementsOfClass,findElementsOfTag,findFirstElementOfClass}
