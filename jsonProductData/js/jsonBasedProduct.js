var Grid = function() {
  this.init();
}

Grid.prototype = {
  init: function() {
    this.gridContainer = document.getElementById("grid");
    this.list = document.getElementById("sortOption");
    this.createProductContainer(productData);
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
    myProducts.sort(this.sorterFunc(selectedVal));
    this.gridContainer.removeChild(this.gridChild);
    this.createProductContainer(myProducts);
  },

  strCompare: function(a, b, selectedVal) {
    return (a[selectedVal] > b[selectedVal]) ? 1 : (a[selectedVal] < b[selectedVal]) ? -1 : 0;
  },

  sorterFunc: function(selectedVal) {
    var obj = this;
    if (selectedVal == "name") {
      return function(a,b) {
        a[selectedVal] = parseInt(a[selectedVal]);
        b[selectedVal] = parseInt(b[selectedVal]);
        return obj.strCompare(a, b, selectedVal);
      }
    }

    else if (selectedVal == "sold_out") {
      return function(a,b) {
        a[selectedVal] = parseInt(a.sold_out);
        b[selectedVal] = parseInt(b.sold_out);
        return obj.strCompare(a, b, selectedVal);
      }
    }

    else {
      return function(a,b) {
        return obj.strCompare(a,b,selectedVal);
      }
    }
  }
}

var gridObject = new Grid();