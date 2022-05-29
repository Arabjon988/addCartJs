// addToCart function

var addItemId = 0;

function addToCart(item){
    
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerHTML = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerHTML = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select = item.children[2].children[1].value;
    selectedItem.setAttribute('id', addItemId);
    label.append(select)
    var delBtn = document.createElement('button');
    var info = document.createElement('div');
    info.classList.add('info')
    delBtn.innerText = "Delete product";
    delBtn.setAttribute('onclick', 'del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(info)
    info.append(title)
    info.append(label)
    info.append(delBtn)
    cartItems.append(selectedItem);
}

function del(item) {
    document.getElementById(item).remove();
}