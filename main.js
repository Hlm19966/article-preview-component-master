const showLinksButton = document.querySelector("#showLinksButton");
const links = document.querySelector("#shareLinks");


showLinksButton.addEventListener("click" , () =>{
 if (shareLinks.style.display === "none" || shareLinks.style.display === "") {
    shareLinks.style.display = "block";
 } else {
    shareLinks.style.display ="none"
 }
});