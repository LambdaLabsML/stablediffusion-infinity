function(mode){
    let app=document.querySelector("gradio-app").shadowRoot;
    console.log(app);
    let frame=app.querySelector("#sdinfframe").contentWindow;
    console.log(frame);
    frame.postMessage(["mode", mode], "*");
    return mode;
}