function toggleMenu(){
var menu=document.getElementById("navMenu");

if(menu.style.display==="block"){
menu.style.display="none";
}
else{
menu.style.display="block";
}
}

function addToCart(product){
alert(product + " added to cart!");
}

var products=document.querySelectorAll(".product");

products.forEach(function(item){

item.addEventListener("mouseover",function(){
item.style.transform="scale(1.05)";
});

item.addEventListener("mouseout",function(){
item.style.transform="scale(1)";
});

});