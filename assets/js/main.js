// Scrooll JS
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        document.getElementById('nav-drop').classList.add('nav-design');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('nav-drop').classList.remove('nav-design');
        document.body.style.paddingTop = '0';
      } 
  });
}); 

// Carsouel Sliders Section Starts

let items = document.querySelectorAll('.trends .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


let similarSLider = document.querySelectorAll('.similar-products .carousel .carousel-item')

similarSLider.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = similarSLider[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


let relatedSlider = document.querySelectorAll('.related-post .carousel .carousel-item')

relatedSlider.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = relatedSlider[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


let itemOffer = document.querySelectorAll('.offer .carousel .carousel-item')

itemOffer.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = itemOffer[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let itemDeal = document.querySelectorAll('.deal .carousel .carousel-item')

itemDeal.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = itemDeal[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let itemBrands = document.querySelectorAll('.brands .carousel .carousel-item')

itemBrands.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = itemBrands[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let itemHealth = document.querySelectorAll('.health .carousel .carousel-item')

itemHealth.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = itemHealth[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// Carsouel ENds


// return refund toggler starts

function howReturn(){
    var x = document.getElementById("how-return");
    var y = document.getElementById("return-policy");
    var z = document.getElementById("refund-policy");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      document.getElementById("btn-how").classList.add("nav-bg");
      document.getElementById("btn-return").classList.remove("nav-bg");
      document.getElementById("btn-refund").classList.remove("nav-bg");
    } else {
      x.style.display = "none";
    }
};

function returnPolicy(){
    var x = document.getElementById("how-return");
    var y = document.getElementById("return-policy");
    var z = document.getElementById("refund-policy");
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      document.getElementById("btn-return").classList.add("nav-bg");
      document.getElementById("btn-how").classList.remove("nav-bg");    
      document.getElementById("btn-refund").classList.remove("nav-bg");
    } else {
      y.style.display = "none";
    }
};

function refundPolicy(){
    var x = document.getElementById("how-return");
    var y = document.getElementById("return-policy");
    var z = document.getElementById("refund-policy");
    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      document.getElementById("btn-return").classList.remove("nav-bg");
      document.getElementById("btn-how").classList.remove("nav-bg");
      document.getElementById("btn-refund").classList.add("nav-bg");
    } else {
      z.style.display = "none";
    }
};

// Return Refund Ends


// History & Reviews

function toReview(){
  var x = document.getElementById("review-content")
  var y = document.getElementById("history-content")

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById("feedback-btn").classList.add("nav-bg");
    document.getElementById("history-btn").classList.remove("nav-bg");
  }
  else{
    x.style.display = "none";
  }
};


function hero(){
  console.log("Worked");
};


function historyView(){
  var x = document.getElementById("review-content")
  var y = document.getElementById("history-content")

  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById("feedback-btn").classList.remove("nav-bg");
    document.getElementById("history-btn").classList.add("nav-bg");
  }
  else{
    y.style.display = "none";
  }
};






