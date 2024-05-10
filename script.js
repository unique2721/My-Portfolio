/* about */
const btnMoreAbout = document.querySelector(".about-btn-more");
const moreAboutContent = document.querySelector(".more-about-content");
/* goals */
const btnMoreGoalsContent1 = document.querySelector(".btn-more-goal-1-content");
const btnMoreGoalsContent2 = document.querySelector(".btn-more-goal-2-content");
const btnMoreGoalsContent3 = document.querySelector(".btn-more-goal-3-content");
const moreGoalsContent1 = document.querySelector(".more-goals-content-1");
const moreGoalsContent2 = document.querySelector(".more-goals-content-2");
const moreGoalsContent3 = document.querySelector(".more-goals-content-3");
/* background */
const btnMoreBackgroundContent1 = document.querySelector(".btn-more-background-1-content");
const btnMoreBackgroundContent2 = document.querySelector(".btn-more-background-2-content");
const btnMoreBackgroundContent3 = document.querySelector(".btn-more-background-3-content");
const MoreBackgroundContent1 = document.querySelector(".more-background-content-1");
const MoreBackgroundContent2 = document.querySelector(".more-background-content-2");
const MoreBackgroundContent3 = document.querySelector(".more-background-content-3");
/* window */
/* back top top */
const backToTop = document.querySelector(".backToTop");
backToTop.addEventListener("click", () => {
    homeNav.classList.remove("active");
    aboutNav.classList.remove("active");
    goalsNav.classList.remove("active");
    skillsNav.classList.remove("active");
    backgroundNav.classList.remove("active");
    contactNav.classList.remove("active");
})
/* NAVBAR */
/* hidden navbar */

/* code to remove the hidden navbar after getting clicked */

/* to hide the hidden navbar after getting clicked */
const hiddenListItems = document.querySelectorAll(".hidden-list-items");
hiddenListItems.forEach(hiddenList => hiddenList.addEventListener("click" , () => {
    hidden.classList.toggle("hide");
    menuButton.innerHTML = "Menu";
    menuButton.style.fontSize = "1.5rem";
    menuButton.style.marginRight = "15px";
}))

/* date */
const year = document.querySelector(".year");
const date = new Date().getFullYear();
year.innerHTML = date;

/* ACTIVE LINK STYLING */
const listItems = document.querySelectorAll(".list-items");
const homeNav = document.querySelector(".homenav");
const aboutNav = document.querySelector(".aboutnav");
const goalsNav = document.querySelector(".goalsnav");
const skillsNav = document.querySelector(".skillsnav");
const backgroundNav = document.querySelector(".backgroundnav");
const contactNav = document.querySelector(".contactnav");

listItems.forEach(list =>  list.addEventListener("click", () => {

    if(list.classList.contains("homenav")) {
        homeNav.classList.add("active");
        aboutNav.classList.remove("active");
        goalsNav.classList.remove("active");
        skillsNav.classList.remove("active");
        backgroundNav.classList.remove("active");
        contactNav.classList.remove("active");
    }
     else if (list.classList.contains("aboutnav")) {
        aboutNav.classList.add("active");
        homeNav.classList.remove("active");
        goalsNav.classList.remove("active");
        skillsNav.classList.remove("active");
        backgroundNav.classList.remove("active");
        contactNav.classList.remove("active");
     }
     else if (list.classList.contains("goalsnav")) {
        goalsNav.classList.add("active");
        aboutNav.classList.remove("active");
        homeNav.classList.remove("active");
        skillsNav.classList.remove("active");
        backgroundNav.classList.remove("active");
        contactNav.classList.remove("active");
     }
     else if (list.classList.contains("skillsnav")) {
        skillsNav.classList.add("active");
        aboutNav.classList.remove("active");
        homeNav.classList.remove("active");
        goalsNav.classList.remove("active");
        backgroundNav.classList.remove("active");
        contactNav.classList.remove("active");
     }
     else if (list.classList.contains("backgroundnav")) {
        backgroundNav.classList.add("active");
        aboutNav.classList.remove("active");
        homeNav.classList.remove("active");
        goalsNav.classList.remove("active");
        skillsNav.classList.remove("active");
        contactNav.classList.remove("active");
     }
     else if (list.classList.contains("contactnav")) {
        contactNav.classList.add("active");
        aboutNav.classList.remove("active");
        homeNav.classList.remove("active");
        goalsNav.classList.remove("active");
        skillsNav.classList.remove("active");
        backgroundNav.classList.remove("active");
     }
}))

/* menu */
const menuButton = document.querySelector(".menu-button");
const times = document.querySelector(".times");
const hidden = document.querySelector(".hidden");

    menuButton.addEventListener("click" , () => {
        if(!menuButton.classList.contains("times") || (menuButton.textContent =="Menu")) {
            menuButton.classList.add("times");
            menuButton.classList.remove("draw-menu-bar");
            menuButton.innerHTML = "X";
            menuButton.style.fontSize = "2.5rem";
            hidden.classList.add("show");      
            hidden.classList.remove("hide");
        } 
        else {
            menuButton.classList.remove("times");
            menuButton.innerHTML = "Menu";
            menuButton.style.color = "#fff";
            menuButton.style.fontSize = "1.5rem";
            menuButton.style.marginRight = "15px";
            hidden.classList.add("hide");      
            hidden.classList.remove("show");
        }
    })

/* about */
btnMoreAbout.addEventListener("click", () => {
    if(btnMoreAbout.classList.contains("btn-more")) {
        moreAboutContent.innerHTML = "<p>Now I am third year  and next year I am going to be graduated.</p>" + "  <p>My dream is just to become full stack and mobile app developer. </p>" + " <p>I am really passionated at coding and programming.</p>";
        btnMoreAbout.innerHTML = "Read less";
        btnMoreAbout.classList.add("btn-less");
        btnMoreAbout.classList.remove("btn-more");
        moreAboutContent.style.scale = "1.025";
        moreAboutContent.style.transition = "2s";
    } else {
        moreAboutContent.innerHTML = "";
        btnMoreAbout.innerHTML = "Read more..";
        btnMoreAbout.classList.remove("btn-less");
        btnMoreAbout.classList.add("btn-more");
    }
})
/* goals */
btnMoreGoalsContent1.addEventListener("click", () => {
    if(btnMoreGoalsContent1.classList.contains("btn-more")) {
        moreGoalsContent1.innerHTML = "<p>It is because I see that people waste their precious time and effort due to lack of familarity with tech solutions.</p>";
        btnMoreGoalsContent1.innerHTML = "Read Less";
        btnMoreGoalsContent1.classList.add("btn-less");
        btnMoreGoalsContent1.classList.remove("btn-more")
    }
    else {
        moreGoalsContent1.innerHTML = "";
        btnMoreGoalsContent1.innerHTML = "Read more..";
        btnMoreGoalsContent1.classList.remove("btn-less");
        btnMoreGoalsContent1.classList.add("btn-more")
    }
})

btnMoreGoalsContent2.addEventListener("click", () => {
    if(btnMoreGoalsContent2.classList.contains("btn-more")) {
        moreGoalsContent2.innerHTML = "<p>It is because I see that people waste their precious time and effort due to lack of familarity with tech solutions.</p>";
        btnMoreGoalsContent2.innerHTML = "Read Less";
        btnMoreGoalsContent2.classList.add("btn-less");
        btnMoreGoalsContent2.classList.remove("btn-more");
        console.log("clicked")
    }
    else {
        moreGoalsContent2.innerHTML = "";
        btnMoreGoalsContent2.innerHTML = "Read more..";
        btnMoreGoalsContent2.classList.remove("btn-less");
        btnMoreGoalsContent2.classList.add("btn-more")
    }
})

btnMoreGoalsContent3.addEventListener("click", () => {
    if(btnMoreGoalsContent3.classList.contains("btn-more")) {
        moreGoalsContent3.innerHTML = "<p>It is because I see that people waste their precious time and effort due to lack of familarity with tech solutions.</p>";
        btnMoreGoalsContent3.innerHTML = "Read Less";
        btnMoreGoalsContent3.classList.add("btn-less");
        btnMoreGoalsContent3.classList.remove("btn-more")
    }
    else {
        moreGoalsContent3.innerHTML = "";
        btnMoreGoalsContent3.innerHTML = "Read more..";
        btnMoreGoalsContent3.classList.remove("btn-less");
        btnMoreGoalsContent3.classList.add("btn-more")
    }
})
/* background */
btnMoreBackgroundContent1.addEventListener("click", () => {
    if(btnMoreBackgroundContent1.classList.contains("btn-more")) {
        MoreBackgroundContent1.innerHTML = "<p>I just promoted to grade 9 with an average of 85.7 and 99.9 of percentile.</p>";
        btnMoreBackgroundContent1.innerHTML = "Read Less";
        btnMoreBackgroundContent1.classList.add("btn-less");
        btnMoreBackgroundContent1.classList.remove("btn-more")
        console.log("dhfdhfg");
    }
    else {
        MoreBackgroundContent1.innerHTML = "";
        btnMoreBackgroundContent1.innerHTML = "Read more..";
        btnMoreBackgroundContent1.classList.remove("btn-less");
        btnMoreBackgroundContent1.classList.add("btn-more")
    }
})

btnMoreBackgroundContent2.addEventListener("click", () => {
    if(btnMoreBackgroundContent2.classList.contains("btn-more")) {
        MoreBackgroundContent2.innerHTML = " <p>I was 18 years old when i finished my secondary school. I have scored 4(four) in in ethiopian matric examination in 2011. and I just passed to University with a total score of 508 and joined Bahir dar University.</p>";
        btnMoreBackgroundContent2.innerHTML = "Read Less";
        btnMoreBackgroundContent2.classList.add("btn-less");
        btnMoreBackgroundContent2.classList.remove("btn-more")
        console.log("dhfdhfg");
    }
    else {
        MoreBackgroundContent2.innerHTML = "";
        btnMoreBackgroundContent2.innerHTML = "Read more..";
        btnMoreBackgroundContent2.classList.remove("btn-less");
        btnMoreBackgroundContent2.classList.add("btn-more")
    }
})

btnMoreBackgroundContent3.addEventListener("click", () => {
    if(btnMoreBackgroundContent3.classList.contains("btn-more")) {
        MoreBackgroundContent3.innerHTML = "<p>I am really hapy to be a bahir dar University student.</p>";
        btnMoreBackgroundContent3.innerHTML = "Read Less";
        btnMoreBackgroundContent3.classList.add("btn-less");
        btnMoreBackgroundContent3.classList.remove("btn-more")
        console.log("dhfdhfg");
    }
    else {
        MoreBackgroundContent3.innerHTML = "";
        btnMoreBackgroundContent3.innerHTML = "Read more..";
        btnMoreBackgroundContent3.classList.remove("btn-less");
        btnMoreBackgroundContent3.classList.add("btn-more")
    }
})

/* CONTACT */

/* we can code more for further contact form validation if neccessary!! */
const inputElement1 = document.querySelector(".input-element-1");
const inputElement2 = document.querySelector(".input-element-2");
const inputElement3 = document.querySelector(".input-element-3");
const inputElement4 = document.querySelector(".input-element-4");
const submitBtn = document.querySelector(".submit-btn");
const resetBtn = document.querySelector(".reset-btn");
const error = document.querySelector(".error");
const message = document.querySelector(".message");
submitBtn.addEventListener("click" , (e) => {
    e.preventDefault();
        if(inputElement1.value == "" ||inputElement2.value == "" ||inputElement3.value == "" ||inputElement4.value == ""){
            error.innerHTML = "please fill out all required fields";
        }
        else if (inputElement1.value.length <= 2 || inputElement2.value.length <= 2) {
            error.innerHTML = "A minimum of 3 characters is needed for respective names";
        }
       else {
           error.innerHTML = `Thanks ${inputElement1.value}, Your message has been sent successfully.`;
           inputElement1.value = "";
           inputElement2.value = "";
           inputElement3.value = "";
           inputElement4.value = "";
           error.style.color = "aqua";
        setTimeout(() => {
            error.innerHTML = "";
            error.style.color = "red";
        }, 3000)
       }
})

/* reset */
resetBtn.addEventListener("click",() => {
    error.innerHTML = "";
})
