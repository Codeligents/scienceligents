// Js code to make color box enable or disable
let colorIcons = document.querySelector(".color-icon"),
icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click" , ()=>{
  colorIcons.classList.toggle("open");
})

// getting all .btn elements
let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
  button.addEventListener("click", (e)=>{ //adding click event to each button
    let target = e.target;

    let open = document.querySelector(".open");
    if(open) open.classList.remove("open");

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    // js code to switch colors (also day night mode)
    let root = document.querySelector(":root");
    let dataColor = target.getAttribute("data-color"); //getting data-color values of clicked button
    let color = dataColor.split(" "); //splitting each color from space and make them array

    //passing particular value to a particular root variable
    root.style.setProperty("--white-color", color[0]);
    root.style.setProperty("--primary-color", color[1]);
    root.style.setProperty("--primary-color-hover", color[2]);
    root.style.setProperty("--background", color[3]);
    root.style.setProperty("--input-background", color[4]);
    root.style.setProperty("--input-border", color[5]);

    let iconName = target.className.split(" ")[2]; //getting the class name of icon


    if(target.classList.contains("bxs-moon")){ //if icon name is moon
      target.classList.replace(iconName, "bxs-sun") //replace it with the sun
      colorIcons.style.display = "none";
    }else if (target.classList.contains("bxs-sun")) { //if icon name is sun
      target.classList.replace("bxs-sun", "bxs-moon"); //replace it with the sun
      colorIcons.style.display = "block";
      document.querySelector(".btn.black").click();
    }
  });
}
