document.addEventListener("click",function(e){
    if(e.target.id !== 'sidebar' && e.target.id !=='toggle'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
});

const toggle=document.querySelector("#toggle");
const sidebar=document.querySelector("#sidebar");
toggle.addEventListener("click",function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
})

