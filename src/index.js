// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input[type=number]').value;
  let priceSubtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = priceSubtotal;
  return priceSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelectorAll('.product');
  console.log(singleProduct) */  
  // end of test
  
  // ITERATION 2 Y 3
  //... your code goes here
  const product = document.getElementsByClassName('product');
  let result = 0;
  for (let i = 0; i < product.length; i++){
    result += updateSubtotal(product[i]);
    updateSubtotal(product[i]);
  }
  
  document.querySelector('#total-value span').innerHTML = result;
}

// ITERATION 4
function update(){
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeButton1 = document.getElementsByTagName('button')[0];
  const removeButton2 = document.getElementsByTagName('button')[1];
  if (target === removeButton1){ (document.getElementsByClassName('product')[0]).parentNode.removeChild((document.getElementsByClassName('product')[0])) } 
  else { (document.getElementsByClassName('product')[1]).parentNode.removeChild((document.getElementsByClassName('product')[1]))  }
  
  calculateAll();
} 

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.querySelector('.create-product input[type=text]').value;
  let productPrice = document.querySelector('.create-product input[type=number]').value;
  let newProduct = `
    <tr class = "product">
      <td class = "name">
        <span> ${productName}</span>
      </td>
      <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`

  document.getElementsByTagName('tbody')[0].insertAdjacentHTML('beforeEnd',newProduct);

}

window.addEventListener('load', () => {
  const removeButton1 = document.querySelectorAll('.btn')[0];
  const removeButton2 = document.querySelectorAll('.btn')[1];
  removeButton1.addEventListener('click', removeProduct);
  removeButton2.addEventListener('click', removeProduct);
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
});

