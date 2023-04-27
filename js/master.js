
// +++++++++++++++++++++++++++ Random background +++++++++++++++++++++++++++++++++++++

LandingPage = document.querySelector(".Landing-page");


TableImages = ["img1.jpg","img2.jpg"];

BackOptions = true;

function RandomBack (){

    if(BackOptions == true){

        interval = setInterval(() => {

                RandomNamber = Math.floor(Math.random() * TableImages.length) 
                LandingPage.style.backgroundImage = "url('images/" +TableImages[RandomNamber]+"')"
                    
            }, 1000);
    }

}

//execution Function
RandomBack();
// +++++++++++++++++++++++++++++Affiche settings Options :+++++++++++++++++++++++++++++++++++
icon = document.querySelector(".fa-gear");
settingsBox = document.querySelector(".settings-box");

icon.onclick = function()
{
        icon.classList.toggle("fa-spin");
        settingsBox.classList.toggle("open");
}
// ++++++++++++++++++++++++++get background options of Local storage:++++++++++++++++++++++++++++++++++++++++
// if(window.localStorage.getItem("data-background")){
//     if(window.localStorage.getItem("data-background") == "yes"){

//         BackOptions = true;
//         RandomBack();
//         document.querySelector(`[data-background="yes"]`).style.backgroundColor = "var(--main-color)";
//         document.querySelector(`[data-background="yes"]`).style.color = "white";
//         document.querySelector(`[data-background="yes"]`).style.fontWeight = "bold";

//         document.querySelector(`[data-background="non"]`).style.backgroundColor = "white";
//         document.querySelector(`[data-background="non"]`).style.color = "var(--main-color)";
//         document.querySelector(`[data-background="non"]`).style.fontWeight = "bold";
//     }
//     else{
//         BackOptions = false;
//         clearInterval(interval);
//         document.querySelector(`[data-background="non"]`).style.backgroundColor = "var(--main-color)";
//         document.querySelector(`[data-background="non"]`).style.color = "white";
//         document.querySelector(`[data-background="non"]`).style.fontWeight = "bold";

//     }
    
// }
// ++++++++++++++++++++++++++get color of Local storage:++++++++++++++++++++++++++++++++++++++++
colors = document.querySelectorAll(".settings-container li")
if(window.localStorage.getItem("--main-color")){
    document.documentElement.style.setProperty("--main-color",window.localStorage.getItem("--main-color"))

    colors.forEach(el => {

        el.style.border = "none";
        el.style.opacity = "0.5";
    });

    document.querySelector(`[data-color = "${window.localStorage.getItem("--main-color")}"]`).style.border="solid 3px white";
    document.querySelector(`[data-color = "${window.localStorage.getItem("--main-color")}"]`).style.opacity="1";
}

//++++++++++++++++++++++++++++++++++++++Settings Colors of page :++++++++++++++++++++++++++++++++++++++

colors.forEach(li => {
    li.onclick = function(e){
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

        window.localStorage.setItem("--main-color",e.target.dataset.color)


        colors.forEach(elm => {

            elm.style.border = "none";
            elm.style.opacity = "0.5";
        });

        e.target.style.border="solid 3px white";
        e.target.style.opacity="1";
        
    }
});


//+++++++++++++++++++++++++++++++++++settings Backgrounds +++++++++++++++++++++++++++++++++++++

buttons = document.querySelectorAll(".settings-container2 button")
buttons.forEach(btn => {
    btn.onclick = function(e){
        if(e.target.dataset.background == "yes"){
            BackOptions = true;
            RandomBack();

            window.localStorage.setItem("data-background","yes")
            e.target.style.backgroundColor = "var(--main-color)";
            e.target.style.color = "white";
            e.target.style.fontWeight = "bold";
            document.querySelector("[data-background = 'non']").style.backgroundColor = "white";
            document.querySelector("[data-background = 'non']").style.color = "var(--main-color)";
            document.querySelector("[data-background = 'non']").style.fontsize = "11px";
        }
        else{
            BackOptions = false;
            clearInterval(interval);
            window.localStorage.setItem("data-background","non")

            e.target.style.backgroundColor = "var(--main-color)";
            e.target.style.color = "white";
            e.target.style.fontWeight = "bold";

            document.querySelector("[data-background = 'yes']").style.backgroundColor = "white";
            document.querySelector("[data-background = 'yes']").style.color = "var(--main-color)";
            document.querySelector("[data-background = 'yes']").style.fontsize = "11px";

        }
    }
});


//+++++++++++++++++++++++++++++++++++ Scrollings of ourskills +++++++++++++++++++++++++++++++++++++



window.onscroll = function()
{
                    let Ourskills = document.querySelector(".skills");
                    let skillsOfSetTop = Ourskills.offsetTop;
                    let skillsOfsetHeight = Ourskills.offsetHeight;
                    let windowHeight = this.innerHeight;
                    let windowScrollTop = this.pageYOffset;

                    if(windowScrollTop > skillsOfSetTop + skillsOfsetHeight - windowHeight){
                        let progresse = document.querySelectorAll(".skills-progress span");

                        progresse.forEach(element => {
                            element.style.width = element.dataset.progress
                        });

                        let skillsH2 = document.querySelector(".skills .Our-skills h2")
                        skillsH2.style.left = "0px";
                    }
                    else{
                        let progresse = document.querySelectorAll(".skills-progress span");

                        progresse.forEach(element => {
                            element.style.width = "0px"
                        });
                        let skillsH2 = document.querySelector(".skills .Our-skills h2")

                        skillsH2.style.left = "-522px";

                    }
                }
//+++++++++++++++++++++++++++++++++++settings Gallery +++++++++++++++++++++++++++++++++++++

let Ourimgs = document.querySelectorAll(".gallery img")


Ourimgs.forEach(img => {

    img.addEventListener("click", (e)=>{
        let overlay = document.createElement("div")
        overlay.classList.add("popup-overlay")// add class to div
        let iconX = document.createElement("span") //create icon
        let texticon = document.createTextNode("X")
        iconX.append(texticon)
        overlay.append(iconX) // add icon To div
        let image = document.createElement("img")
        image.setAttribute("src",e.target.src)
        image.setAttribute("alt",e.target.alt)
        overlay.append(image)
        document.body.append(overlay) // add div to body
        // when we onclick of icon 
        iconX.onclick = function(){
            overlay.remove()
        }
    })
    
});

//+++++++++++++++++++++++++++++++++++Nav bullets +++++++++++++++++++++++++++++++++++++

let allbullets = document.querySelectorAll(".bullet");
allbullets.forEach(bul => {
    bul.addEventListener("click",(e)=>{
        elm = document.querySelector(e.target.dataset.show);
        elm.scrollIntoView({
            behavior : "smooth",
        });
    })
});
let allLinks = document.querySelectorAll(".Header a");
allLinks.forEach(link => {
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        elm = document.querySelector(e.target.dataset.show);
        elm.scrollIntoView({
            behavior : "smooth",
        });
    })
});
// ========================== Click To Card =========================================

const cards = document.querySelectorAll('.card.mb-3.vd');
const blackpage = document.querySelector('.blackpage');
const vd = document.querySelector('.videoContent video');
console.log(vd)
cards.forEach(card => {
    card.addEventListener("click",(e) =>{
        vd.setAttribute('src',card.dataset.video);
        console.log(vd)
        blackpage.style.display = 'flex';
    })
});


const iconaX = document.querySelector('.videoContent span');
const Blackpage = document.querySelector('.blackpage');
iconaX.onclick = function() {
    Blackpage.style.display = 'none';
}












































