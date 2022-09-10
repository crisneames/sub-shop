import { getOrders, addNewOrder } from './orders.js';

document.getElementById('app').innerHTML = `
<h1>Sub Shop</h1>
<div>
<h3>Make Your Sub</h3>
<div class='subForm'>
<div class='bread'>
<p>Bread: </p>
<label for='wheatBread'>Wheat</label>
<input id='wheatBread' name='bread' type='radio' value='wheat' />
<label for='whiteBread'>White</label>
<input id='whiteBread' name='bread' type='radio' value='white' />
<label for='ryeBread'>Rye</label>
<input id='ryeBread' name='bread' type='radio' value='rye' />
</div>
<div class='protein'> 
<p>Protein: </p>
<label for='steak'>Steak</label>
<input id='steak' name='protein' type='radio' value='steak' />
<label for='chicken'>Chicken</label>
<input id='chicken' name='protein' type='radio' value='chicken' />
<label for='turkey'>Turkey</label>
<input id='turkey' name='protein' type='radio' value='turkey' />
</div>
<div class='toppings'>
<p>Toppings: </p>
<p>Pick your Toppings (Select all that apply)</p>
        <ul>
          <li>
            <input id="lettuce" name="toppings" type="checkbox" value="lettuce" />
            <label for="lettuce">Lettuce</label>
          </li>
          <li>
            <input id="tomato" name="toppings" type="checkbox" value="tomato" />
            <label for="tomato">tomato</label>
          </li>
          <li>
            <input id="mayo" name="toppings" type="checkbox" value="mayo" />
            <label for="mayo">mayo</label>
          </li>
          <li>
            <input id="mustard" name="toppings" type="checkbox" value="mustard" />
            <label for="mustard">mustard</label>
          </li>
          <li>
            <input id="onions" name="toppings" type="checkbox" value="onions" />
            <label for="onions">onions</label>
          </li>
        </ul>
</div>
<div>
      <button id="submitOrder">Submit Order</button>
    </div>

</div>
<h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders();
  let html = '<ul>';
  for (const order of orders) {
    html += `<li>
      <p>Bread: ${order.bread}</p>
      <p>Protein: ${order.protein}</p>
      <p>Toppings: ${order.toppings.join(',')}</p>
    </li>`;

    document.getElementById('orders').innerHTML = html;
  }
  html += '</ul>';
  // Add logic here to put the orders on the DOM
};

document.addEventListener('click', (e) => {
  if (e.target.id === 'submitOrder') {
    console.log('submitting order');
    // Need logic to get all the values from the form
    const bread = document.querySelector('input[name=bread]:checked')?.value;
    const protein = document.querySelector(
      'input[name=protein]:checked'
    )?.value;

    const toppingsElements = document.querySelectorAll(
      'input[name=toppings]:checked'
    );
    const toppingsArray = [];
    const toppings = toppingsElements.forEach((toppingElement) => {
      toppingsArray.push(toppingElement.value);
    });
    console.log(toppingsArray);

    // Format them into an object
    const newOrder = {
      bread: bread,
      protein: protein,
      toppings: toppingsArray,
    };
    console.log('NEW ORDER', newOrder);
    addNewOrder(newOrder);
  }
});

document.addEventListener('stateChanged', (event) => {
  // One line of code should do it.
  displayOrders();
});

// Thi is called when the page is loaded only
displayOrders();
