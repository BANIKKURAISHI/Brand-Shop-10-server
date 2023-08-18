document.getElementById("submit").addEventListener("click",function(){
    const emailField=document.getElementById('email');
    const email =emailField.value;

    const passwordField=document.getElementById('password');
    const password =passwordField.value;

 if(email==="mdkuraishirahmanbanik@gmail.com" && password==='44'){
 window.location.href="login.html"
 }
 else{alert("Please provide a valid email address or passowrd")} 
 
})