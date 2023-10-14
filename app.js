const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id:1,
        title:"AIR FORCE",
        price: 428,
        colors:[
            {
                code: "black",
                img:"./image/air.png"
            },
            {
                code : "dark blue",
                img: "./image/air2.png"
            }
        ],

    },
    {
        id:2,
        title:"JORDAN", 
        price: 750,
        colors:[
            {
                code: "lightgray",
                img:"./image/jordan.png"
            },
            {
                code : "green",
                img: "./image/jordan2.png"
            }
        ],

    },
    {
        id:3,
        title:"BLAZER",
        price: 1052,
        colors:[
            {
                code: "black",
                img:"./image/blazer.png"
            },
            {
                code : "blue",
                img: "./image/blazer2.png"
            }
        ],

    },
    {
        id:4,
        title:"CRATER",
        price: 650,
        colors:[
            {
                code: "black",
                img:"./image/crater.png.png"
            },
            {
                code : "lightgray",
                img: "./image/crater2.png.png"
            }
        ],

    },
    {
        id:5,
        title:"HIPPIE",
        price: 550,
        colors:[
            {
                code: "gray",
                img: "./image/hippie.png"
            },
            {
                code : "black",
                img: "./image/hippie2.png"
            }
        ],

    },

]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size")


menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        //change choosen products
        choosenProduct = products[index]

        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent ="Rs. " + " " + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //change colors

        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code 
        })

    })
})


currentProductColors.forEach((color, index)=>{
    color.addEventListener('click', ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener('click', ()=>{
        currentProductSizes.forEach((size,index)=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productBtn = document.querySelector(".productBtn")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productBtn.addEventListener('click', ()=>{
    payment.style.display ="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display = "none"
})