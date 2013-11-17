var Grid = function() {
  this.init();
}

Grid.prototype = {
  init: function() {
    this.gridContainer = document.getElementById("grid");
    this.list = document.getElementById("sortOption");
    this.container = document.getElementById("container");
    this.products = productData;
    this.createProductContainer(this.products);
    this.bindEvents();
  },

  bindEvents: function() {
    var obj = this;
    this.list.addEventListener("change", function() {
      var selectedVal = obj.list.selectedOptions[0].value;
      obj.sortProducts(selectedVal);
    });
  },

  createProductContainer: function(products) {
    this.gridChild = document.createElement("div");
    this.gridChild.setAttribute("class", "gridChild")
    for (var i = 0; i < products.length; i++) {
      var productImg = document.createElement("img");
      productImg.src = products[i].url;

      var productCard = document.createElement("div");
      productCard.appendChild(productImg);
      productCard.setAttribute("class", "productCard");

      this.gridChild.appendChild(productCard);
    }
    this.gridContainer.appendChild(this.gridChild);
  },

  sortProducts: function(selectedVal) {
    myProducts = productData;
    myProducts.sort(function(a,b) {
      if (selectedVal == "name") {
        a[selectedVal] = parseInt(a[selectedVal]);
        b[selectedVal] = parseInt(b[selectedVal]);
      }

      else if (selectedVal == "availability") {
        a[selectedVal] = parseInt(a.sold_out);
        b[selectedVal] = parseInt(b.sold_out);
      }

      if (a[selectedVal] > b[selectedVal])
        return 1; 
      if (b[selectedVal] > a[selectedVal])
        return -1; 
      return 0;
    });
    this.gridContainer.removeChild(this.gridChild);
    this.createProductContainer(myProducts);
  }
}

var gridObject = new Grid();