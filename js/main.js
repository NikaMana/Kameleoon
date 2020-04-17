// 2 TASK
function Test_2_burger() {
	let burger = document.querySelector('.burger');
	let nav = document.querySelector('nav');
	burger.addEventListener('click', ()=>{
	   nav.classList.toggle('navshow')
	})
   
}
Test_2_burger();


// 5 TASK
const json = {
    "placements":[
       {
          "strategy_message":"People who viewed this item also viewed",
          "recs":[
             {
                "pid":"Prod_1000",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 1",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$10.99"
                
             },
             {
                "pid":"Prod_2001",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 2",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$4.99"
             },
             {
                "pid":"Prod_1202",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 3",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$12.99"
             }
          ]
       },
       {
          "strategy_message":"People who bought this item also bought",
          "recs":[
             {
                "pid":"Prod_1010",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 1",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$100.99"
             },
             {
                "pid":"Prod_1011",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 2",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$30.99"
             },
             {
                "pid":"Prod_1012",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 3",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$20.99"
             },
             {
                "pid":"Prod_1013",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 4",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$16.99"
             },
             {
                "pid":"Prod_1014",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 5",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$22.99"
             },
             {
                "pid":"Prod_1015",
                "ct_url":"http://www.kameleoon.com/",
                "name":"Product 6",
                "img":"http://www.kameleoon.com/images/kameleoon/icon-complet.png",
                "price":"$22.99"
             }
          ]
       }
    ]
 };

function test_5() {
let sideright = document.querySelector('.sideright');
let siderbt = document.querySelector('.sidebott');
let sidebar_right = json.placements[0].recs;
let sidebar_bott = json.placements[1].recs;


for (let i = 0; i < 2; i++) {
	let nelem = $('<div>', { class: 'card'}).appendTo(sideright );
	$('<img>', { class: 'card-img-top', src: 'pic.gif'}).appendTo(nelem);
	let $cb = $('<div>', { class: 'card-body'}).appendTo(nelem);
	$('<h5>', { class: 'card-title', text: sidebar_right[i].name+' | '+sidebar_right[i].price}).appendTo($cb);
	$('<p>', { class: 'card-text', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}).appendTo($cb);
	$('<a>', { href: sidebar_right[i].ct_url, class: 'btn btn-primary', text: 'More'}).appendTo($cb);
// ! sidebar_right[i].img - yours links dont work
};


for (let i = 0; i < 4; i++) {
	let nelem = $('<div>', { class: 'card', width: '18rem'}).appendTo(siderbt);
	$('<img>', { class: 'card-img-top', src: 'pic.gif'}).appendTo(nelem);
	let $cb = $('<div>', { class: 'card-body'}).appendTo(nelem);
	$('<h5>', { class: 'card-title', text: sidebar_bott[i].name+' | '+sidebar_bott[i].price}).appendTo($cb);
	$('<p>', { class: 'card-text', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}).appendTo($cb);
	$('<a>', { href: sidebar_bott[i].ct_url, class: 'btn btn-info', text: 'More'}).appendTo($cb);
	console.log(sidebar_bott[0]);
};

}
test_5();
