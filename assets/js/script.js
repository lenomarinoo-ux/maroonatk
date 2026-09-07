document.addEventListener('DOMContentLoaded',function(){
var navbar=document.querySelector('.navbar'),backToTopBtn=document.querySelector('.back-to-top');
var ticking=false;
function onScroll(){
var y=window.scrollY;
if(navbar){if(y>50){navbar.classList.add('scrolled');}else{navbar.classList.remove('scrolled');}}
if(backToTopBtn){if(y>400){backToTopBtn.classList.add('visible');}else{backToTopBtn.classList.remove('visible');}}
ticking=false;
}
window.addEventListener('scroll',function(){
if(!ticking){window.requestAnimationFrame(onScroll);ticking=true;}
},{passive:true});
var hamburger=document.querySelector('.hamburger'),navMenu=document.querySelector('.nav-menu');
if(hamburger&&navMenu){
function toggleMenu(open){
var isOpen=typeof open==='boolean'?open:!navMenu.classList.contains('open');
navMenu.classList.toggle('open',isOpen);
var icon=hamburger.querySelector('i');
if(icon){icon.classList.toggle('fa-bars',!isOpen);icon.classList.toggle('fa-times',isOpen);}
}
hamburger.addEventListener('click',function(e){e.stopPropagation();toggleMenu();});
document.addEventListener('click',function(e){if(!navMenu.contains(e.target)&&!hamburger.contains(e.target)){toggleMenu(false);}});
navMenu.querySelectorAll('.nav-link').forEach(function(link){
link.addEventListener('click',function(){if(!this.classList.contains('dropdown-toggle')){toggleMenu(false);}});
});
}
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle){
toggle.addEventListener('click',function(e){
e.preventDefault();
var parent=this.closest('.nav-item-dropdown');
if(parent){parent.classList.toggle('open');}
});
});
if(backToTopBtn){
backToTopBtn.addEventListener('click',function(e){
e.preventDefault();
window.scrollTo({top:0,behavior:'smooth'});
});
}
var faqItems=document.querySelectorAll('.faq-item');
faqItems.forEach(function(item){
var question=item.querySelector('.faq-question, .question');
if(question){
question.addEventListener('click',function(e){
e.preventDefault();
var isActive=item.classList.contains('active');
faqItems.forEach(function(other){if(other!==item){other.classList.remove('active');}});
item.classList.toggle('active',!isActive);
});
}
});
function setActiveNavLink(){
var navLinks=document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
var currentPath=window.location.pathname;
navLinks.forEach(function(link){
var href=link.getAttribute('href');
if(!href||href==='#'){link.classList.remove('active');return;}
var hrefClean=href.replace(/^\.\.\//,'').replace(/^\.\//,'').replace(/^\//,'').replace(/\.html$/,'');
var currentClean=currentPath.replace(/^\//,'').replace(/\.html$/,'').replace(/\/$/,'');
if(hrefClean===''||hrefClean==='index'){
link.classList.toggle('active',currentClean===''||currentClean==='index');
return;
}
var isMatch=(currentClean===hrefClean)||currentClean.endsWith(hrefClean)||currentClean.startsWith(hrefClean+'/');
link.classList.toggle('active',isMatch);
});
}
setActiveNavLink();
});