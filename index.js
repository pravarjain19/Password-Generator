let smallCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let symbols = "@#$%^&*()_-!+=";
let randompass = smallCase+upperCase+numbers+symbols;
console.log(randompass.length);
var password = "";


const textFiled =  document.getElementById('qrtext');

function genrateThePassword(){
    textFiled.value = "";
    password = "";
   password += smallCase[Math.round(Math.random()*24)+1];
   password += upperCase[Math.round(Math.random()*24)+1];
   password += numbers[Math.round(Math.random()*8)+1];
   password += symbols[Math.round(Math.random()*12)+1];

    while(password.length<12){
            password += randompass[Math.round(Math.random()*74)+1]; 
    }
    textFiled.value = password;
}



function copyPassword(){
    var data = textFiled.value;
    console.log(data);
    // document.body.appendChild(textFiled);
    if(data == ""){
        alert("Generate Password First")
    }
    else{
        textFiled.select();
  
  // Prompt the user to copy the text
  if (document.queryCommandSupported('copy')) {
    try {
      document.execCommand('copy');
      alert("Password copied");

    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  } else {
    console.log('Copying text is not supported on this device.');
  }
//   document.body.removeChild(textFiled)
    }
}

function check(){
   
    if(textFiled.value == ""){

        alert("Click on Generate Password")
    }
}





