document.getElementById("close-banar").onclick = ()=>{
    document.getElementById("banar-sign-up").style.display = "none";
}

document.getElementById("menu-icon").onclick = () => {
    if(document.getElementById("menu").classList.contains("menu")){
        document.getElementById("menu").classList.remove("menu")
    }else{
        document.getElementById("menu").classList.add("menu")
    }
}

document.getElementById("search-field").onclick = ()=>{
    document.getElementById("search-box").classList.toggle("append-field");
}