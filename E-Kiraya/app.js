let walletConnect = document.querySelector(".btnConnect");
let choice = document.querySelector(".Choice");
choice.addEventListener(("click"),()=>{
  alert("Request has been sent to Owner")
});
function generatepassword() {
  var chars = "0123495a6b7c8d9e0fghijABCDEF45678GHIJKLMNOPQRSTUVWXYZklmnopqrstuvwxyz!@#$%^&*()";
  var passwordLength = 5;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * chars.length);
  password = "0x405d5..."
  }
  // console.log("hi")
  return password;
}

walletConnect.addEventListener("click", ()=>{
  const pass = generatepassword()+"....";
  // console.log(pass)
  setTimeout(()=>{
    walletConnect.innerText = pass;
  },1000);
  setTimeout(()=>{
    alert("MetaMask Connection Successfull");
  },1000);
  
})


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login"); //pura login form ka div
const loginBtn = document.querySelector("label.login"); //sabse upar vala login btn toogle vale mei se
const signupBtn = document.querySelector("label.signup"); //sabse upar vala sign btn toogle vale mei se
const signupLink = document.querySelector("form .signup-link a"); //not a member vala button
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-60%";
    loginText.style.marginLeft = "-60%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

// jab bhi user type change vale kisi bhi radio pe click hoga toh hidden input jo form mei hai uska value change ho jayega
const radioButtons = document.querySelectorAll('input[name="user-type-slide"]');
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        // Set the value of hidden input to the selected radio button's value
        const userType = document.querySelectorAll('input[name="user-type"]');
        userType.forEach((element) => {
            element.value = radioButton.value;
        });
    });
});
//--end

