function hisoblash() {
    let input1 = document.getElementById('input1').value;
    let text = document.getElementById('text');
    if (input1 >= 160) {
        text.textContent = "Garnd asosida qabul qilindingzi";
    }
    else if (85 < input1) {
        text.textContent = "siz super contrak asosida o`qishga kirdingiz";
        if (110 <= input1) {
                hisoblash2();
        } else if (input1 > 110) {
            if (input1 < 120) {
                text.textContent = prompt("kantirak asosida kirdingiz");
                hisoblash3();
            } else { text.textContent = "o`qishga qabul qilindingiz" }
        }
    } else {
        text.textContent = "oqishga kira olmadingiz";
    }
}

function hisoblash2() {
    let xaabrpul = document.getElementById('#xaabrpul');
  
    let xabar = prompt("kontrakt miqdori yiliga 3000$ qancha   pulingiz bor?");
    if (xabar >= 3000) {
        xaabrpul.textContent = alert("oqishga qabul qilindiz");
    }else {
        xaabrpul.textContent = alert("pulingiz yetmaydi");
    }
}
function hisoblash3() {
  
    let xabar = prompt ("kontrakt miqdori yiliga 2000$ qancha   pulingiz bor?")
    if (xabar >= 2000) {
        xaabrpul.textContent = "oqishga qabul qilindiz";
    }
    else {
        xaabrpul.textContent = "pulingiz yetmaydi";
    }
}