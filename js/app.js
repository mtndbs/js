let allAge = "0-99";
let ivalid =
  "invalid answer, plasae check that you wrote it fine (small letters)";
let acces = "Entery permit";
let accesDenied = "Aproval denied";

let age = prompt("Hellow there" + " " + "whats is your age?" + " " + allAge);

if (age >= 18) {
  console.log(acces);
  let meat = prompt("Do you like to eat MEAT?" + " " + "yes / no");
  if (meat == "yes") {
    let hungry = prompt("Do you hungry?" + " " + "yes / no");
    if (hungry == "yes") {
      document.write("Shnizel and Rice");
      document.getElementById("myImage").src =
        "https://www.pngall.com/wp-content/uploads/13/Schnitzel-PNG-Pic.png";
      document.getElementById("myImage2").src =
        "https://s3.envato.com/files/250277205/994.jpg";
    } else if (hungry !== "no" && hungry !== "yes") {
      document.getElementById("h_1").innerHTML = "Welcome to our resteraunt <br> invalid answer <br> try again"
    } else {
      document.write("Shnizel Only");
      document.getElementById("myImage2").src =
        "https://www.pngall.com/wp-content/uploads/13/Schnitzel-PNG-Pic.png";
    }
  } else if (meat !== "no" && meat !== "yes") {
    document.getElementById("h_1").innerHTML = "Welcome to our resteraunt <br> invalid answer <br> try again"
  } else {
    document.write("Salad and Chips");
    document.getElementById("myImage").src =
      "https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2007/07/700544972_564e118f79_b.jpg?fit=1024%2C680&ssl=1";
    document.getElementById("myImage2").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xGLRKCk3mVpZt06iKTXPr__FIx12yeteRg&usqp=CAU";
  }

} else {
  document.getElementById("h_1").innerHTML = "Kosher resteraunt <br> We are sorry, its only for 18+"
  
  console.log(accesDenied);
  document.write("ACCES DENIED!");
}
