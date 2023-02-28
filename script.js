const inputText = document.querySelector(".input-text");
const message = document.querySelector(".message");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncrypt(){
    const encryptedText = encrypt(inputText.value);
    message.value = encryptedText;
    message.style.backgroundImage = "none";
    inputText.value="";
}

function encrypt(stringEncrypt){
     let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufa"]];
     stringEncrypt = stringEncrypt.toLowerCase();

     for(let i = 0;i < matrizCode.length; i++){
        if(stringEncrypt.includes(matrizCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCode[i][0],matrizCode[i][1])
        }
     }
     return stringEncrypt;
}

function btnDecrypt(){
    const encryptedText = decrypt(inputText.value);
    message.value = encryptedText
    inputText.value = "";
}



function decrypt(stringDecrypt){
    let matrizCode = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
       if(stringDecrypt.includes(matrizCode[i][1])){
           stringDecrypt = stringDecrypt.replaceAll(matrizCode[i][1],matrizCode[i][0])
       }
    }
    return stringDecrypt;
}

function copy(){
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value = "";
    alert("Texto copiado");
}