let shop = ["apple", "banana", "pear", "strawberry"];
var total = 0;

function addItem() {
  var name = document.getElementById('name').value;
  if (shop.includes(name)){
    var quantity = document.getElementById('quantity').value;
    if (quantity == '') {
      alert("Nemate vneseno quantity");
      return;
    }
    var price = document.getElementById('price').value;
    if (price == '') {
      alert("Nemate vneseno price");
      return;
    }
    
    var table = document.getElementById('table');
    table.style.display = "table";
    var index = table.rows.length - 1;
    var item = table.insertRow(index);
    
    var cell1 = item.insertCell(0);
    var cell2 = item.insertCell(1);
    var cell3 = item.insertCell(2);
    var cell4 = item.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = quantity;
    cell3.innerHTML = price;
    cell4.innerHTML = quantity*price;

    total += quantity * price;
    document.getElementById('total').innerText = total;
  } else {
    alert("Nema takov prozivod");
    return;
  }
}

document.getElementById("addItem").addEventListener('click', addItem);