const inKey = document.getElementById("inKey");
const inValue = document.getElementById("inValue");
const insertB = document.getElementById("insertB");
const locOut = document.getElementById("locOut");

insertB.onclick = function(){
    const key = inKey.value;
    const value = inValue.value;

    console.log(key);
    console.log(value);
    if(key && value){
        localStorage.setItem(key,value);
        location.reload();
    }
};
for(let i = 0 ; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    locOut.innerText += `${key}: ${value}`;
    locOut.innerHTML += "<br>"
}