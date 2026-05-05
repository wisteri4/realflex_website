//This javascript file connects to all pages ( index, about us, contact us, locations)

const searchingarea= document.getElementById("searcharea");
const navigbar = document.getElementById("navibar");
const resultSearch = document.getElementById("resultofsearch");
const submittingSearch = document.getElementById("submitSearch");
// ============================ Show & hide navigation ======================
function search_click(){
    searchingarea.classList.toggle("show");
    submittingSearch.classList.toggle("show");

    if(searchingarea.classList.contains("show")){
        navigbar.style.display = 'none';
    }else{
        navigbar.style.display = 'flex';
    }
}
// =============== Search bar autocomplete function ========================

document.getElementById("search-row").addEventListener("submit", function(event) { event.preventDefault();

    const inputUser = document.getElementById("searcharea");
    const needtofind = inputUser.value.toLowerCase().trim();

    const availableSearches = {
        "faq" : "aboutus.html",
        "frequently asked questions" : "aboutus.html",
        "locations" : "locations.html",
        "form" : "contactus.html",
        "about chair" : "aboutus.html",
        "massage chair" : "locations.html",
        "chair benefits" : "index.html",
        "product" : "locations.html"
    };

    if(availableSearches[needtofind]) {
        window.location.href = availableSearches[needtofind]
    }else{ alert("Search cannot be found");

        }
    });

//About us toggle FAQ
function faqshow(){
    document.getElementById("faq-answer").classList.toggle("faq_show");
}

function faqshow2(){
    document.getElementById("faq-answer2").classList.toggle("faq_show");
}

function faqshow3(){
    document.getElementById("faq-answer3").classList.toggle("faq_show");
}

function faqshow4(){
    document.getElementById("faq-answer4").classList.toggle("faq_show");
}

//Locations
function showPage(pageId) {
    // hide homepage
    document.getElementById('locationPage').style.display = 'none';

    // hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // show selected page
    document.getElementById(pageId).style.display = 'block';
}

function goHome() {
    document.getElementById('locationPage').style.display = 'grid';

    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
}

function toggleDropdown() {
    document.getElementById("dropdownContent")
        .classList.toggle("show");
}

function toggleDropdown2() {
    document.getElementById("dropdownContent2")
        .classList.toggle("show");
}

function toggleDropdown3() {
    document.getElementById("dropdownContent3")
        .classList.toggle("show");
}

function toggleDropdown4() {
    document.getElementById("dropdownContent4")
        .classList.toggle("show");
}

