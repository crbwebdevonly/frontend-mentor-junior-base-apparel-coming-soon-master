const arrow = document.getElementById("arrow");
// console.log(arrow);
const emailTag = document.getElementById("email");
//console.log(emailTag.value);

const errorIcon = document.getElementById("errorIcon");
// console.log(errorIcon);
const errorMessage = document.getElementById("errorMessage");
// console.log(errorMessage);

arrow.addEventListener("click", () => {
     //  console.log("clicked");
     //  console.log(emailTag.value);
     let validEmail = false;
     validEmail = emailTag.value.includes("@");
     validEmail = emailTag.value.includes(".");
     //  console.log(validEmail, "isvalid??");

     if (!validEmail) {
          errorIcon.classList.toggle("hide");
          errorMessage.classList.toggle("hide");
          setTimeout(() => {
               errorIcon.classList.toggle("hide");
               errorMessage.classList.toggle("hide");
          }, 1000);
     } else emailTag.value = "";
});
