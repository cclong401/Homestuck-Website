var topBtn = document.getElementById("toTopBtn");

window.onscroll = showOnScroll;

function showOnScroll()
{
    if (window.scrollY > 100)
    {        
        topBtn.style.display = "block";
    }
    else
    {
        topBtn.style.display = "none";
    }
}

function toTop()
{
    //alert("Function called.");
    window.scrollTo(0, 0);
}