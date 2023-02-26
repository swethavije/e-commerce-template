var obj=[
    {
        id:1,
        image:"product1.jpg",
        productname:"Praesent In Ante",
        shop:"shop",
        price:500

    },
    {
        id:2,
        image:"product2.jpg",
        productname:"Nulla Imperdiet Purus",
        shop:"shop",
        price:650

    },
    {
        id:3,
        image:"product3.jpg",
        productname:"Maecenas Non Laoreet",
        shop:"clothes",
        price:300

    },
    {
        id:4,
        image:"product4.jpg",
        productname:"Fuse Et Semper",
        shop:"shop",
        price:1000

    },
    {
        id:5,
        image:"product5.jpg",
        productname:"Nunc Quis Gravida",
        shop:"shop",
        price:400

    },
    {
        id:6,
        image:"product6.jpg",
        productname:"Donec Congue Vesti",
        shop:"shop",
        price:250

    },
    {
        id:7,
        image:"product7.jpg",
        productname:"Morbi Facilisis Quis",
        shop:"Accessories",
        price:300

    },
    {
        id:8,
        image:"product8.jpg",
        productname:"Pellsque Tortor Massa",
        shop:"Accessories",
        price:400
        

    }
]
let productbox=document.getElementById("product-box")

function displaydata(data){
     productbox.innerHTML="";

     data.forEach(function(elm,i,arr){
//create element
            let colElm=document.createElement("div");
            let productinfo=document.createElement("div");
            let productimg=document.createElement("div");
            let imagepro=document.createElement("img")
            let productbottom=document.createElement("div");
            let txtelm1=document.createElement("p")
            let linkElm1=document.createElement("a");
            let txtelm2=document.createElement("p")
            let linkElm2=document.createElement("a");
            let txtelm3=document.createElement("p")
            let adCartbtn=document.createElement("a");

            //set attributes
            colElm.setAttribute("class","col-3");
            productinfo.setAttribute("class","product-info");
            productimg.setAttribute("class","product-img");
            imagepro.setAttribute("src","image/"+elm.image);
            productbottom.setAttribute("class","product-info-bottom");
            linkElm1.setAttribute("class","pro-name");
            linkElm2.setAttribute("class","shop");
            txtelm3.setAttribute("class","price");

            adCartbtn.setAttribute("class","adcart-btn");
            adCartbtn.setAttribute("id","adbtnid");
            adCartbtn.setAttribute("href","#")
            linkElm1.setAttribute("href","#")
            linkElm2.setAttribute("href","#")
            linkElm1.setAttribute("id","proname");
            txtelm3.setAttribute("id","price");

            //get value
            linkElm1.innerText=elm.productname;
            linkElm2.innerText=elm.shop;
            txtelm3.innerText="Rs: "+elm.price;
            adCartbtn.innerText="Add Cart";
            adCartbtn.onclick=addtocart.bind(null,elm.id);

            //structure element
            productimg.appendChild(imagepro);
            txtelm1.appendChild(linkElm1);
            txtelm2.appendChild(linkElm2)
            productbottom.append(txtelm1,txtelm2,txtelm3,adCartbtn);
            productinfo.append(productimg,productbottom);
            colElm.appendChild(productinfo);
            productbox.appendChild(colElm);

});

};
displaydata(obj);

//add cart function
let carticon=document.getElementById("cart-icon");
let addcartid=document.getElementById("adbtnid");

let cartItems=[];
function addtocart(id){
    let finddata=cartItems.find(function(item){
        return item.id ===id;
    });
   if(finddata){
        cartItems.map(function(item){
            if(item.id === id){
                item.quantity +=1;
                return item;
            }else{
                return item;
            }
        });
        console.log(cartItems)
    }else{
       let newitem = obj.find(function(item){
           return  item.id === id;
       });
        newitem.quantity = 1;
        cartItems.push(newitem);
        console.log(cartItems);
        update(cartItems);
     }

};
 

//addcartid.addEventListener('click',addtocart);

//cart display function


let cartbox=document.getElementById("cartcontent");

function update(data){
    cartbox.innerHTML="";
    data.forEach(function(elm){
        //create element
        let cartdiv=document.createElement("div");
        let cartimg=document.createElement("img");
        let cartinfodiv=document.createElement("div");
        let cartproname=document.createElement("h3");
        let cartprice=document.createElement("h4");
        let cartqty=document.createElement("p")
        let plusbtn=document.createElement("button");
        let minusbtn=document.createElement("button");
        let deletebtn=document.createElement("button")
        let delIcon=document.createElement("i")

       
        //set attributes
        cartdiv.setAttribute("class","cartproduct");
        cartimg.setAttribute("src","image/"+elm.image);
    
        cartinfodiv.setAttribute("class","proinfo");
        cartproname.setAttribute("class","cart-proname");
        cartprice.setAttribute("class","cart-proprice");
        cartqty.setAttribute("class","qty");
        plusbtn.setAttribute("id","plus");
       
        minusbtn.setAttribute("id","minus");
        cartnextdiv.setAttribute("class","bottomdiv");
        totalprice.setAttribute("class","total");
        buybtn.setAttribute("class","btn")
        deletebtn.setAttribute("class","delete");
        delIcon.setAttribute("class","fa fa-trash")

        deletebtn.onclick = deletedata.bind(null,elm.id);
        //btn function

      let quantity = 1; // initial quantity

     plusbtn.addEventListener("click",function(){
            quantity++;
            cartqty.innerText ="quantity: "+ quantity;
            });
     minusbtn.addEventListener("click",function(){
                if (quantity > 1) {
                quantity--;
                cartqty.innerText ="quantity: "+ quantity;
                }
            });

        cartinfodiv.append(cartproname, cartprice,cartqty, plusbtn,minusbtn);
        cartdiv.append(cartimg,cartinfodiv,deletebtn);
        
        cartbox.appendChild(cartdiv);
        deletebtn.appendChild(delIcon);
        
        //to get value
        cartproname.innerText=elm.productname;
        cartprice.innerText="Rs "+elm.price; 
        cartqty.innerText="quantity: "+elm.quantity;
        plusbtn.innerText="+";
        minusbtn.innerText="-";
       

    });

}
update(cartItems);

//total function


 let offbody=document.getElementById("off-body");
   
let cartnextdiv=document.createElement("div");
let totalprice=document.createElement("h2");
let buybtn=document.createElement("buttuon");
let hr=document.createElement("hr");

//set attributes
cartnextdiv.setAttribute("class","bottomdiv");
totalprice.setAttribute("class","total");
buybtn.setAttribute("class","btn")

cartnextdiv.append(totalprice,buybtn);
offbody.append(hr,cartnextdiv);     

      
buybtn.innerText="Buy Now";
buybtn.addEventListener("click",function(){
    alert("Your order has been placed")
});
totalprice.innerText="Total=RS: ";

// let initialtotal=0;

 
// function total(elm){
//      let totalVal= initialtotal+(elm.price*elm.qty)
//      totalprice.innerText="Total=RS: "+totalVal;
//      console.log(totalprice);
// }
// total(cartItems);
// function TotalPrice(cartItems) {
//     let totalprice = 0;
//     for (let i = 0; i < cartItems.length; i++) {
//       totalprice += cartItems[i].price * cartItems[i].quantity;
     
     
//     }
//     return totalprice;
   
//   }
  //delete function
  window.onload =update(cartItems);
   
  function deletedata(id){
    let finddata = cartItems.find(function(items){
       return items.id === id;
    })
    if(finddata){
       let updateobject = cartItems.filter(function(items){
           return items.id !== id;

       });
       cartItems =updateobject;
       update(cartItems);
    }
  }