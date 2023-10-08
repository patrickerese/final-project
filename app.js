const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Iphone",
    price: 899,
    colors: [
      {
        code: "black",
        img: "./img/iphone-black.png",
      },
      {
        code: "blue",
        img: "./img/iphone-blue.png",
      },
    ],
  },
  {
    id: 2,
    title: "MacBook",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "./img/macbook-space.png",
      },
      {
        code: "silver",
        img: "./img/macbook-silver.png",
      },
    ],
  },
  {
    id: 3,
    title: "Beats",
    price: 399,
    colors: [
      {
        code: "black",
        img: "./img/beats-black.png",
      },
      {
        code: "white",
        img: "./img/beats-white.png",
      },
    ],
  },
  {
    id: 4,
    title: "Airpods",
    price: 350,
    colors: [
      {
        code: "white",
        img: "./img/airpods.png",
      },
      {
        code: "black",
        img: "./img/airpods-black.png",
      },
    ],
  },
  {
    id: 5,
    title: "Cables",
    price: 45,
    colors: [
      {
        code: "white",
        img: "./img/cables.png",
      },
      {
        code: "black",
        img: "./img/cables-black.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});