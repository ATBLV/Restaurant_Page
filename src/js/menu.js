
function menu() {

    let container = document.getElementById('container');
    removeAllChildNodes(container);
    
    const menuContent = document.createElement('div');
    menuContent.classList.add('animate');

    const menuHeader = document.createElement('h1');
    menuHeader.innerHTML = "Menu";
    menuContent.append(menuHeader);

    
    let menuItems = document.createElement('div');
    menuItems.classList.add('menuItem');
    menuItems.innerHTML = menuList;
    menuContent.append(menuItems);

    container.append(menuContent);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let menuList = `
    <div>
    <h4>Soupe a l'Oignon</h4>
        <p>French onion soup with gruyere crouton</p>
    </div>

    <div>
        <h4>Steak Tartare</h4>
        <p>Traditional finely hand chopped, grass fed eye fillet, lightly spiced, served with melba toast & condiments</p>
        </div>

    <div>
        <h4>Escargots a la Bourguignonne    </h4>
        <p>Baked snails served with garlic and parsley butter</p>
    </div>

    <div>
        <h4>Boeuf a la Bourguignonne en croute </h4>
        <p>Beef braised in red wine, onions, lardons and mushrooms with puff pastry and mashed potato</p>
    </div>

    <div><h4>Le Steak-Frites 250g </h4>
    <p>Grass fed Eye fillet steak with fries and your choice of sauce</p>
    </div>

    <div>
        <h4>Cuisse de Canard Confit </h4>
        <p>Confit duck legs served with a cauliflower puree, brussel sprout leaves, peas and a truffle sauce</p>
    </div>

    <div>
        <h4>La Salade Cesar </h4>
        <p>Caesar salad with shaved Parmesan, smoked bacon, croutons, anchovies and a free - range poached egg</p>
    </div>

    <div>
        <h4>Pommes Frites </h4>
        <p>French Fries</p>
    </div>`;


export default menu;