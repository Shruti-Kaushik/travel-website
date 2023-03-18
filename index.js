document.querySelectorAll(".about .left  .controls .control-btn").forEach(btn=>{
    btn.onclick=()=>{
        let srcc=btn.getAttribute("data-src");
        document.querySelector(".about .left .video").src=srcc;

    }
})