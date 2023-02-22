var obj=[
    {
        id:1,
        image:"product1.jpg",
        productname:"Praesent In Ante",
        shop:"shop",
        price:"$129.00"

    },
    {
        id:2,
        image:"product2.jpg",
        productname:"Nulla Imperdiet Purus",
        shop:"shop",
        price:"$99.00"

    },
    {
        id:3,
        image:"product3.jpg",
        productname:"Maecenas Non Laoreet",
        shop:"clothes",
        price:"$139.00"

    },
    {
        id:4,
        image:"product4.jpg",
        productname:"Fuse Et Semper",
        shop:"shop",
        price:"$105.00"

    },
    {
        id:5,
        image:"product5.jpg",
        productname:"Nunc Quis Gravida",
        shop:"shop",
        price:"$89.00"

    },
    {
        id:6,
        image:"product6.jpg",
        productname:"Donec Congue Vesti",
        shop:"shop",
        price:"$79.00"

    },
    {
        id:7,
        image:"product7.jpg",
        productname:"Morbi Facilisis Quis",
        shop:"Accessories",
        price:"$119.00"

    },
    {
        id:8,
        image:"product8.jpg",
        productname:"Pellsque Tortor Massa",
        shop:"Accessories",
        price:"$129.00"

    }
]
let productbox=document.getElementById("product-box")

function displaydata(data){
// itemBox.innerHTML="";

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

            //get value
            linkElm1.innerText=elm.productname;
            linkElm2.innerText=elm.shop;
            txtelm3.innerText=elm.price;
            adCartbtn.innerText="Add Cart";

            //structure element
            productimg.appendChild(imagepro);
            txtelm1.appendChild(linkElm1);
            txtelm2.appendChild(linkElm2)
            productbottom.append(txtelm1,txtelm2,txtelm3,adCartbtn);
            productinfo.append(productimg,productbottom);
            colElm.appendChild(productinfo);
            productbox.appendChild(colElm);

});

}
displaydata(obj);



