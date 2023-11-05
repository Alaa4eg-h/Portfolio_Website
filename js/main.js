'use strict';


const tabs = document.querySelectorAll('.tab__btn');
const all_content = document.querySelectorAll('.tab__content');


tabs.forEach((tab,index)=> {

    tab.addEventListener('click',()=> {
        tabs.forEach((tab)=> {
            tab.classList.remove('btn--active');

        })
        tab.classList.add('btn--active');
        all_content.forEach((content)=>{
            content.classList.remove('active');
        })
        all_content[index].classList.add('active');
    })
})