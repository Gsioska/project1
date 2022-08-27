function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
const nav = ["home", "about", "gallery", "contact", "locations"];
const linkebi = ["index.html", "about.html", "gallery.html", "contact.html", "locations.html"];
let navlength = nav.length;
let navtext = "<ul>";

for(let i=0; i<navlength; i++){
    navtext += '<li><a href="' + linkebi[i] +'">' + nav[i] + "</a></li>";
}
navtext += '</ul>';
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }