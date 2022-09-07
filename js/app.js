document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    /* DOM les objects et propriétés , 
    valeur par default */

    const user = {
        main_title: " cours animation and js ",
        main_date_document: new Date(),
        el: document.querySelectorAll("title"),
        footer: document.querySelector("footer p")
    };
    user.el.innerText = user.main_title;
    user.footer.innerText += ` ${user.main_date_document.getFullYear()}`;
    console.log(typeof user);
    console.log(`${user.main_title} \n ${user.main_date_document}`);
});