
function home() {

    removeAllChildNodes(container);

    const restaurant = document.createElement('div');
    restaurant.classList.add('home');
    restaurant.classList.add('animate');
    restaurant.innerHTML = divs;
    container.append(restaurant);

    const homeLeft = document.getElementById('home_left');
    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = "Chez Mamie";
    homeLeft.append(restaurantName);

    const detail = document.createElement('p');
    detail.innerHTML = `<div>Welcome to our restaurant!</div></p> <p> Come in and taste our delights! Or don't. It's your choice!`;
    homeLeft.append(detail);
}

let divs = `
<div id="home_left">
    </div>
    <div id="home_right">
</div>

`

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export default home;