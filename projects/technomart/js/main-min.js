"use strict";var openMap=document.querySelector(".map-icon"),closeMap=document.querySelector(".close-map"),map=document.querySelector(".main-map"),openWrite=document.querySelector(".write-open"),closeWrite=document.querySelector(".close-write"),write=document.querySelector(".write-us"),userName=document.querySelector('[name="name"]'),userEmail=document.querySelector('[name="email"]'),userText=document.querySelector('[name="text"]'),form=document.querySelector(".write-form"),slider=document.querySelector(".slider"),leftInput=document.querySelector("#left"),rightInput=document.querySelector("#right"),controls=document.querySelectorAll(".control"),products=document.querySelector(".products"),popup=document.querySelector(".checkout"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("userName")}catch(e){isStorageSupport=!1}openMap&&openMap.addEventListener("click",function(e){e.preventDefault(),map.classList.remove("hide"),closeMap.focus()}),closeMap&&closeMap.addEventListener("click",function(e){e.preventDefault(),map.classList.add("hide")}),window.addEventListener("keydown",function(e){map&&27===e.keyCode&&(e.preventDefault(),map.classList.add("hide"))}),openWrite&&openWrite.addEventListener("click",function(e){e.preventDefault(),write.classList.remove("hide"),storage?(userName.value=storage,userEmail.focus()):userName.focus()}),closeWrite&&closeWrite.addEventListener("click",function(e){e.preventDefault(),write.classList.add("hide"),write.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){write&&27===e.keyCode&&(e.preventDefault(),write.classList.add("hide"),write.classList.remove("modal-error"))}),form&&form.addEventListener("submit",function(e){if(userName.value&&userEmail.value&&userText.value)isStorageSupport&&localStorage.setItem("userName",userName.value);else{write.offsetWidth;e.preventDefault(),write.classList.remove("modal-error"),write.offsetWidth,write.classList.add("modal-error")}}),slider&&slider.addEventListener("click",function(e){e.target.classList.contains("left-arrow")&&(e.preventDefault(),leftInput.checked=!0),e.target.classList.contains("right-arrow")&&(e.preventDefault(),rightInput.checked=!0)}),products&&products.addEventListener("click",function(e){e.target.classList.contains("card-buy")&&(e.preventDefault(),popup.classList.remove("hide"))}),popup&&popup.addEventListener("click",function(e){var t=e.target;t.classList.contains("close")?popup.classList.add("hide"):t.classList.contains("continue")&&(e.preventDefault(),popup.classList.add("hide"))}),window.addEventListener("keydown",function(e){popup&&27===e.keyCode&&(e.preventDefault(),popup.classList.add("hide"),popup.classList.remove("modal-error"))});