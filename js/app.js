let allAge = "0-99"
let acces = "Entery permit"
let accesDenied = "Aproval denied"


let age = prompt("Hellow there" + " " + "whats is your age?" + " " + allAge )

if(age  >= 18){
    console.log(acces)

    let meat = prompt("Do you like to eat MEAT?" + " " + "yes / no")

    if(meat = "yes"){
let hungry = prompt("Do you hungry?" + " " + "yes / no")
            if(hungry = "yes"){
                document.write("Shnizel and Rise")
            }else{
            document.write("Shnizel Only")}
        }else{
    document.write("Salad and Chips")
    }
}else{
console.log(accesDenied);
document.write("ACCES DENIED!")
        
}


    






// document.getElementById('myImage2').src='https://www.pngall.com/wp-content/uploads/13/Schnitzel-PNG-Pic.png'

// document.getElementById('myImage').src='https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2007/07/700544972_564e118f79_b.jpg?fit=1024%2C680&ssl=1'
// document.getElementById('myImage2').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xGLRKCk3mVpZt06iKTXPr__FIx12yeteRg&usqp=CAU'
// document.getElementById('myImage').src='https://www.mastermatkonim.co.il/wp-content/uploads/2020/02/20200218_113610.jpg'
// document.getElementById('myImage').src='https://www.pngall.com/wp-content/uploads/13/Schnitzel-PNG-Pic.png'


// // let password = prompt("you neeed atleest 6 cheracters")
// if(password.length < 6){
// password = prompt("you need more chars")
// }else{
// password = prompt("less chars")
// if(password.length == 6)


// }
// }

