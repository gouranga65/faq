const answer=document.querySelector(".answer");
const add=document.querySelector(".add").addEventListener("click",function(){
    answer.classList.add("active");
})
const remove=document.querySelector(".remove").addEventListener("click",function(){
    answer.classList.remove("active");
})
const answerTwo=document.querySelector(".answerTwo");
const addTwo=document.querySelector(".addTwo").addEventListener("click",function(){
    answerTwo.classList.add("deactive");
})
const removeTwo=document.querySelector(".removeTwo").addEventListener("click",function(){
    answerTwo.classList.remove("deactive");
})