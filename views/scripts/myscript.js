const allLi = document.querySelectorAll("li>a");
// console.log(allLi);
allLi.forEach(i => {
    if (i.href == i.baseURI) {
        i.ariaCurrent = "page";
    }
})