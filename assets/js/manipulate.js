function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    window.document.title = "Attiya\'s Portfolio"
}

function changeHeader() {
    // Change the name in the h1 of the page to your name

    let div = document.body.children[1];
    let h1 = div.children[0];
    h1.innerText = "Attiya Kovenburg"
}

function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

     let div = document.body.children[2];
     let paragraph = div.children[1];
     paragraph.innerText = "Software Developer/Engineer"
}
export{changeTitle, changeHeader, changeAboutMe}
