const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const str = "A+jk js:2 @dfs 17 tr YY ufds -M5r P87 #18 $&! ^ df3s $Ew e4r J9H # $ 0 * . (! ;) <: :";
const matrix = str.split("");
const font = 12;
const col = width/font;
const arr = [];

for(let i = 0; i<col; i++){
    arr[i] = 1;
}

const draw = ()=>{
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = "#00ff00";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i<arr.length; i++){
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i* font, arr[i] * font);
        if(arr[i] * font > height && Math.random() > 0.975){
            arr[i] = 0;
        }
        arr[i]++;
    }
}
setInterval(draw, 20);
window.addEventListener("resize", ()=> location.reload());