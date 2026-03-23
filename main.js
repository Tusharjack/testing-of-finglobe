document.addEventListener("DOMContentLoaded", function () {

alert("Script started");

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
container.classList.remove("sign-up-mode");
});


/* SUPABASE SETUP */

const supabaseUrl = "https://npyijrvbscsgmgkvnezh.supabase.co"
const supabaseKey = "sb_publishable_8IPt-jIop7r5X1pYsdJQcQ_M_s4ZBqF"

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

alert("Supabase Ready")



/* SIGNUP */

document.getElementById("signupForm").addEventListener("submit", async function(e){

alert("Signup button pressed")

e.preventDefault()

const email = document.getElementById("signupEmail").value
const password = document.getElementById("signupPassword").value

alert("Trying signup: " + email)

const { data, error } = await supabase.auth.signUp({
email: email,
password: password
})

if(error){
alert(error.message)
}else{
alert("Signup success")
}

})



/* LOGIN */

document.getElementById("loginForm").addEventListener("submit", async function(e){

alert("Login button pressed")

e.preventDefault()

const email = document.getElementById("loginEmail").value
const password = document.getElementById("loginPassword").value

const { data, error } = await supabase.auth.signInWithPassword({
email: email,
password: password
})

if(error){
alert(error.message)
}else{
alert("Login success")
window.location.href = "telecallerlogin.html"
}

})

});
