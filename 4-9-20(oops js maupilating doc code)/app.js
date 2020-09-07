 const text = document.querySelector('.title');
 const changecolor = document.querySelector('.changecolor')

changecolor.addEventListener('click',function(){
    text.classList.toggle("change");
})
const userlist = document.querySelectorAll('.name-list li');
for (user of userlist){
    user.addEventListener('click',function(){
        console.log(this);


    })
}
