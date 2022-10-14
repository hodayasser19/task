var allProducts = document.querySelectorAll(".btn1")
var title = document.querySelectorAll('.card-title')
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var total = document.querySelector('#total')
var show = document.querySelector('.show')

var totalPrice = 0;
allProducts.forEach(function(item) {
    item.onclick = function() {
        totalPrice += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + " + ";


        if (content.innerHTML != "") {
            btn.style.display = "block"
            total.style.display = 'block'
            show.style.display = 'block'
        }
    }
})
btn.onclick = function() {
    total.innerHTML = totalPrice
}