//? Deshi Deals functionality section with js

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
//? traverse technique

const cardBtns = document.getElementsByClassName("btn_1");

for (let cardBtn of cardBtns) {
  cardBtn.addEventListener("click", function () {
    const productImg =
      cardBtn.parentNode.parentNode.parentNode.children[0].children[0].src;

    const productTitle = cardBtn.parentNode.parentNode.children[1].innerText;

    const productPrice =
      cardBtn.parentNode.parentNode.children[2].children[0].innerText;

    const totalPrice = getElement("total_price").innerText;

    const newCurrentPrice = Number(productPrice) + Number(totalPrice);

    getElement("total_price").innerText = newCurrentPrice;

    const cartContainer = getElement("cart_container");
    const newElementDiv = document.createElement("div");
    newElementDiv.innerHTML = `<div class="bg-gray-200 rounded-xl flex    justify-between items-center p-2 mb-5">
        <img class="w-[50px]" src="${productImg}" alt="">
        <div class="">
          <h2 class="font-bold text-[13px]">${productTitle}</h2>
          <h2 class="">${productPrice}</h2>
        </div>
      </div>`;

      cartContainer.append(newElementDiv);

      const quantity = getElement('total_quantity').innerText;
      const currentQuantity = Number(quantity) + 1; 
      getElement('total_quantity').innerText = currentQuantity;
  });
}


getElement('clear_btn').addEventListener('click', function() {
  const cartContainer = getElement("cart_container");
  cartContainer.innerHTML = '';
  getElement("total_price").innerText = 0;
  getElement('total_quantity').innerText = 0;
})