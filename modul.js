class Product {
    constructor(id, type, pic, name, price) {
        this.id = id;
        this.type = type;
        this.pic = pic;
        this.name = name;
        this.price = price;
    }
}

let products = [];
products = [
    new Product(1, "H01", "xe/ducati795.jpg", "Ducati Monster795", 10000),
    new Product(2, "H02", "xe/kawasakiz1000.png", "KaWashaki Z1000", 20000),
    new Product(3, "H03", "xe/yzf-r1.jpg", "YaMaHa R1", 30000),
    new Product(4, "H04", "xe/hondacbr1000rr.jpg", "HonDa CBR1000RR", 40000),
    new Product(5, "H05", "xe/BMW_S1000_RR_.jpg", "BMW S1000rr", 50000)
];

function buildDanhSachSP() {
    document.getElementById('dssp').innerHTML = '';
    let html = '';
        for (let i = 0; i < products.length; i++) {
            html += `
            <tr>
                <td>${products[i].type}</td>
                <td><img src="${products[i].pic}"></td>
                <td>${products[i].name}</td>
                <td><span>${products[i].price}</span> đ</td>
                <td><input id="soLuong_sp_${products[i].id}" type="number" min="1" max="10" value="1"></td>
                <td><input type="button" value="Them" onclick="themGioHang_sp_(${products[i].id})"></td>
            </tr>
         `;
        }
    document.getElementById('dssp').innerHTML = html;
}


class Cart {
    constructor(id, type, pic, name, price, qty, amount) {
        this.id = id;
        this.type = type;
        this.pic = pic;
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.amount = amount;
    }
}
let carts = [];

//giỏ hàng mẫu
// carts = [
//     new Cart(1, "H01", "xe/ducati795.jpg", "Ducati Monster795", 10000, 5, 50000),
//     new Cart(2, "H02", "xe/kawasakiz1000.png", "KaWashaki Z1000", 20000, 4, 80000),
//     new Cart(3, "H03", "xe/yzf-r1.jpg", "YaMaHa R1", 30000, 3, 90000),
//     new Cart(4, "H04", "xe/hondacbr1000rr.jpg", "HonDa CBR1000RR", 40000, 2, 80000),
//     new Cart(5, "H05", "xe/BMW_S1000_RR_.jpg", "BMW S1000rr", 50000, 1, 50000)
// ];

function buildGioHang() {
    document.getElementById('gioHang').innerHTML = '';
    let html = '';
    let tongTien = 0;
    if(carts.length){//có sản phẩm
        for (let i = 0; i < carts.length; i++) {
            html += `
            <tr>
                <td>${carts[i].type}</td>
                <td><img src="${carts[i].pic}"></td>
                <td>${carts[i].name}</td>
                <td><span>${carts[i].price}</span> đ</td>
                <td>${carts[i].qty}</td>
                <td><span>${carts[i].qty * carts[i].price}</span>đ</td>
                <td><input type="button" value="Xoá" onclick="xoaGioHang_sp_(${carts[i].id})"></td>
            </tr>
         `;
         tongTien += (carts[i].qty * carts[i].price);
        }
    }else{//không có sản phẩm
        html += `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
     `;
    }
    
    document.getElementById('gioHang').innerHTML = html;
    document.getElementById('tongTien').innerHTML = tongTien + " đ";
}

function themGioHang_sp_(id){
    let qty = document.getElementById("soLuong_sp_" + id).value;
    if(coTrongGioHang_sp_(id)){
        alert("Sản phẩm đã có trong giỏ hàng !!");
    }else{
        for (let i = 0; i < products.length; i++) {
            if(products[i].id == id){
                carts.push(new Cart(id, products[i].type, products[i].pic, products[i].name, products[i].price, qty, (products[i].price * qty)));
                alert("Bạn muốn Thêm '"+ products[i].name +"' vào giỏ hàng  !!");
                break;
            }
        }
    }
    
    buildGioHang();
}

function coTrongGioHang_sp_(id){
    if(carts.length > 0){
        for (let i = 0; i < carts.length; i++) {
            if(carts[i].id == id){
                return true;
            }
        }
    }

    return false;
}

function xoaGioHang_sp_(id){
    for (let i = 0; i < carts.length; i++) {
        if(carts[i].id == id){
            carts.splice(i, 1);
            alert("bạn muốn xoá ? !!");
            break;
        }
    }

    buildGioHang();
}

function init(){
    buildDanhSachSP();
    buildGioHang();
}
init();
