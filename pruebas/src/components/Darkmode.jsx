import React from 'react'
import "../Assets/darkmode.css"

export const Darkmode = () => {
let clickdClass = "clicked";
const body = document.body;
const lightTheme = "light"
const darkTheme = "dark"
let theme;

if(localStorage){
    theme  = localStorage.getItem("theme");

}
if(theme === lightTheme || theme === darkTheme){
    body.classList.add(theme);
}else{
    body.classList.add(lightTheme);
}
const swtichTheme = (e) =>{
    if(theme === darkTheme){
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.add(clickdClass);
        localStorage.setItem("theme", "light")
        theme = lightTheme
    }else{
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickdClass);
        localStorage.setItem("theme", "dark")
        theme = darkTheme
    }
};


    return (
    <div>

        <button
        className={theme === "dark" ? clickdClass : ""}
        id='darkmode'
        onClick={(e) => swtichTheme(e)}
        ></button>
    </div>
  )
}
