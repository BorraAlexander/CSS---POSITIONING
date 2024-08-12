const buyNowButtonEl = document.getElementById("buyNowButton");
const closePaymentEl = document.getElementById("closeButton");
const colorInputEl = document.getElementById("colorInput");
const colorPaletteEl = document.getElementById("colorPalette");
const modalContainerEl = document.getElementById("modalContainer");

const toggleModal = () => {
    modalContainerEl.classList.toggle("display-none");
};

const toggleColorsContainer = () => {
    colorPaletteEl.classList.toggle("display-none");
};

buyNowButtonEl.addEventListener("click", toggleModal);
closePaymentEl.addEventListener("click", toggleModal);
colorInputEl.addEventListener("click", toggleColorsContainer);