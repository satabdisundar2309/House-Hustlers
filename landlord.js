// modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");
function openModal() {
  modal.style.scale = 1;
  overlay.style.opacity = 1;
  overlay.style.zIndex = 4;
}
function closeModal() {
  modal.style.scale = 0;
  overlay.style.opacity = 0;
  overlay.style.zIndex = -4;
}
function openModal2() {
  modal2.style.scale = 1;
  overlay2.style.opacity = 1;
  overlay2.style.zIndex = 4;
  document.querySelector('.Yes-logout a').href="index.html"
}
function closeModal2() {
  modal2.style.scale = 0;
  overlay2.style.opacity = 0;
  overlay2.style.zIndex = -4;
  document.querySelector('.Yes-logout a').href="#"
}

// uploading profile photo
let imgSrc = document.querySelector(".view-img img");
let imgSrc2 = document.querySelector(".user-image img");
let choose_input = document.querySelector(".choose-img input");
let choose_img_btn = document.querySelector(".choose-img button");

choose_img_btn.addEventListener("click", () => {
  choose_input.click();
});
imgSrc.addEventListener("click", () => {
  choose_input.click();
});
let file;
choose_input.addEventListener("change", () => {
 file = choose_input.files[0];
  if (!file) {
    return;
  }
  imgSrc.src = URL.createObjectURL(file);
  // console.log(imgSrc.src)
});

// filling the data got from the create account url
let newName = document.getElementById('newName')
let newNumber = document.getElementById('newNumber')
let newEmail = document.getElementById('newEmail')
const params = new URLSearchParams(window.location.search)

// params.forEach((value, key)=>{
//     console.log(key + ': ' + value)
// })

const URLName = params.get('Name')
const URLPNumber = params.get('PNumber')
const URLEmail = params.get('Email id')
// console.log(URLName, URLPNumber)
newName.value = URLName;
newNumber.value= URLPNumber;
newEmail.value=URLEmail

// addinh event listener to the update button
 const updateBTN = document.querySelector('.info-edit-update');
 updateBTN.addEventListener('click', ()=>{
    closeModal();
    if (!file) {
      return;
    }
    imgSrc2.src = URL.createObjectURL(file);
 })