var inp_screen = document.getElementById("screen");
inp_screen.focus();
document.getElementById("clear_btn").addEventListener("click", () => {
    inp_screen.value = "";
});

var noOfBtns = document.querySelectorAll(".btn").length;
for (var i = 0; i < noOfBtns; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var clicked_btn = this.innerHTML;
        inp_screen.value = inp_screen.value + clicked_btn;
    });
}

document.getElementById("btn_cal").addEventListener("click",()=>{
    try{
        var caluculatedValue = eval(inp_screen.value);
        inp_screen.value = caluculatedValue;
    } catch(err){
        inp_screen.value = "Error";
        setTimeout(() => {
            inp_screen.value = "";
        }, 2000);
    }
});