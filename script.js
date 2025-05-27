const BodyE1 = document.querySelector("body");

BodyE1.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const span = document.createElement("span");
    const size = Math.random() * 100;
    span.style.left = xpos + "px";
    span.style.top = ypos + "px";
    span.style.width = size + "px";
    span.style.height = size + "px";
    BodyE1.appendChild(span);
    
    setTimeout(() => {
        span.remove();
    }, 5000); 
});
