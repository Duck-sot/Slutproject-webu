const root = document.documentElement;

const cmc = getComputedStyle(root).getPropertyValue('--bColor')

function ThemeB(){
    if(cmc == cmc){
        root.style.setProperty('--bColor','#1E2952');
        root.style.setProperty('--sColor','#000');
        root.style.setProperty('--inText','#72A0C1');
        root.style.setProperty('--mText','#f2f3f4'); 
    }
    else{
        root.style.setProperty('--bColor','#F1E9DB');
        root.style.setProperty('--sColor','#7C8483');
        root.style.setProperty('--inText','#912F56');
        root.style.setProperty('--mText','#000');
    }
}