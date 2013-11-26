var EatingPoint = function() {
  this.init();
}

EatingPoint.prototype = {
  init: function() {
    //initialization
    this.orders                = {};
    this.currentOrder          = document.getElementById("currentOrder");
    this.orderAmountDiv        = document.getElementById("orderAmountDiv");
    this.placeOrderBtn         = document.getElementById("placeOrder");
    this.dailyOrders           = document.getElementById("dailyOrders");
    this.currentOrderContainer = document.getElementById("currentOrderContainer");
    this.totalSale             = document.getElementById("totalSale");
    this.totalSaleAmountSpan   = document.getElementById("totalSaleAmount");
    this.orderDetails          = document.getElementById("orderDetails");
    this.submenu               = document.getElementsByClassName("submenu");
    this.breadsOrderElement    = document.getElementById("breadsOrder");
    this.fillingOrderElement   = document.getElementById("fillingOrder");
    this.saucesOrderElement    = document.getElementById("saucesOrder");
    this.drinksOrderElement    = document.getElementById("drinksOrder");
    this.breadsOrderElement.value  = 0;
    this.fillingOrderElement.value = 0;
    this.saucesOrderElement.value  = 0;
    this.drinksOrderElement.value  = 0;
    this.orderAmount               = 0;
    this.totalSaleAmount           = 0;
    this.orderId                   = 0;

    //invoke methods
    this.bindEvents();
  },

  bindEvents: function() {
    var obj = this;
    var li = [];
    for (var i = 0; i < this.submenu.length; i++ ) {
      li[i] = this.submenu[i].getElementsByTagName("ul")[0].children;
    }

    for (var i = 0; i < li.length; i++) {
      for (var j = 0; j < li[i].length; j++) {
        li[i][j].onclick = function() {
          obj.placeOrderBtn.style.display = "inline";
          obj.highlightSelectedItem(this);
        }
      }
    }

    this.placeOrderBtn.onclick = function() {
      obj.inputUserDetails();
      this.style.display = "none";
    }
  },

  highlightSelectedItem: function(selectedItem) {
    for ( var i = 0; i < selectedItem.parentNode.children.length; i++ ) { 
      if ( selectedItem.parentNode.children[i].hasAttribute("selected")) {
        selectedItem.parentNode.children[i].setAttribute("style", "none");
        selectedItem.parentNode.children[i].removeAttribute("selected");
      }
    }
    selectedItem.style.background = "yellow";
    selectedItem.setAttribute("selected", "true");

    this.displayCurrentOrder(selectedItem);
  },

  displayCurrentOrder: function(selectedItem) {
    if (selectedItem.parentNode.id == "breadsBlock") {
      this.breadsOrderElement.innerHTML = selectedItem.innerHTML;
      this.breadsOrderElement.value = selectedItem.value;
    }

    if (selectedItem.parentNode.id == "fillingBlock") {
      this.fillingOrderElement.innerHTML = selectedItem.innerHTML;
      this.fillingOrderElement.value = selectedItem.value;
    }

    if (selectedItem.parentNode.id == "saucesBlock") {
      this.saucesOrderElement.innerHTML = selectedItem.innerHTML;
      this.saucesOrderElement.value = selectedItem.value;
    }

    if (selectedItem.parentNode.id == "drinksBlock") {
      this.drinksOrderElement.innerHTML = selectedItem.innerHTML;
      this.drinksOrderElement.value = selectedItem.value;
    }

    this.evaluateCurrentOrder(this.breadsOrderElement.value, this.fillingOrderElement.value, this.saucesOrderElement.value, this.drinksOrderElement.value);    
  },

  evaluateCurrentOrder: function(val1, val2, val3, val4) {
    this.orderAmount = val1 + val2 + val3 + val4;
    this.orderAmountDiv.innerHTML = "Total: " + this.orderAmount;
  },

  inputUserDetails: function() {
    var fname = (prompt("Enter Customer's name") || "").trim();
    while (!fname) {
      alert("Please enter Customer's name");
      fname = (prompt("Enter Customer's name") || "").trim();
    }

    ++this.orderId;
    this.totalSale.style.display = "block";
    var dailyOrdersContainer = document.getElementById("dailyOrdersContainer");
    dailyOrdersContainer.style.display = "block"
    this.populateAndDisplayOrdersList(this.orderId, fname);
  },

  populateAndDisplayOrdersList: function(orderId, fname) {
    var currentOrderToOrderList = document.createElement("div");
    var orderIdElement = document.createElement("p");
    orderIdElement.setAttribute("class", "dailyOrderNumber")

    orderIdElement.innerHTML = ("Order Id: " + orderId + "<br/>Name: " + fname);
    this.orderDetails.appendChild(orderIdElement);

    currentOrderToOrderList.setAttribute("class", "setBorderBottom");
    currentOrderToOrderList.innerHTML = this.currentOrderContainer.innerHTML;
    this.orderDetails.appendChild(currentOrderToOrderList);

    this.totalSaleAmount += this.orderAmount;
    this.totalSaleAmountSpan.innerHTML = this.totalSaleAmount;

    this.refreshCurrentOrder();
    this.unhighlighItems();
  },

  refreshCurrentOrder: function() {
    this.orderAmountDiv.innerHTML = "";
    this.breadsOrderElement.innerHTML = "";
    this.fillingOrderElement.innerHTML = "";
    this.saucesOrderElement.innerHTML = "";
    this.drinksOrderElement.innerHTML = "";
    this.breadsOrderElement.value = 0;
    this.fillingOrderElement.value = 0;
    this.saucesOrderElement.value = 0;
    this.drinksOrderElement.value = 0;
    this.orderAmount = 0;
  },

  unhighlighItems: function() {
    var menuItems = document.getElementsByClassName("menuItem");
    for (var i = 0; i < menuItems.length; i++ ) {
      menuItems[i].style.background = "white";
    }
  }
}

var eatingPoint = new EatingPoint();