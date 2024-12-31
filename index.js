import { menuArray } from '/data.js'

/*
     <div class="your-order">
                <h2>Your order</h2>
                <div class="your-choices"></div>
                <button id="complete-order-btn">Complete order</button>
            </div>
*/

function getMenuOptions() {
    let menuOptions = ``

  menuArray.forEach(function(food){
    menuOptions += `
        <div class=menu-options>
        <div class="menu-list">
            <div class="menu-items-listed">
                <div <img class="pic-of-food">${food.emoji}</img>
                </div>
            <div class="food-item-details">  
                <h3 class="food-name">${food.name}</h3>
                <p class="food-ingredients">${food.ingredients}</p>
                <p class="food-price">${food.price}</p>
            </div>
                <div class="add-btn">
                <button id="add-to-order" id="order-this-${food.id}">+</button>
                </div>
            </div>
        </div>
        </div>
    `
  })
  return menuOptions
}

function handleAddingToOrderClick() {
    document.getElementById(`order-this-${food.id}`)
}


function render() {
    document.getElementById('menu-opt').innerHTML = getMenuOptions()

}

render()