function Them(x) {
    //lấy dữ liệu bằng dssp
    
   var tr = x.parentilement.parentilement;
    var td = tr.children;
    var mssp = td[0].innerHTML;
    var hinh = td[1].children[0].src;
    var ten = td[2].innerHTML;
    var dongia = td[3].children[0].innerHTML;
    var soluong = td[4].children[0].value;
    var ttien = parseInt(dongia)* parseInt(soluong);

    //tạo elemen cho giỏ hàng

    var giohang_tr = document.createElement("tr");
    // tạo td và nội dung dssp
    var giohang_td = document.createElement("td");
    var giohang_td_mssp = document.createElement(mssp);
    giohang_td.appendChild(giohang_td_mssp);
    giohang_tr.appendChild(giohang_td);

    var giohang_td = document.createElement("td");
    var giohang_td_hinh = document.createElement("img");
    giohang_td_hinh.src = hinh;
    giohang_tr.appendChild(giohang_td_hinh);

    var giohang_td = document.createElement("td");
    var giohang_td_ten = document.createTextNode(ten);
    giohang_td.appendChild(giohang_td_ten);
    giohang_tr.appendChild(giohang_td);

    var giohang_td = document.createElement("td");
    var giohang_td_dongia = document.createTextNode(dongia);
    giohang_td.appendChild(giohang_td_donggia);
    giohang_tr.appendChild(giohang_td);

    var giohang_td = document.createElement("td");
    var giohang_td_soluong = document.createTextNode(soluong);
    giohang_td.appendChild(giohang_td_soluong);
    giohang_tr.appendChild(giohang_td);

    
    var giohang_td = document.createElement("td");
    var giohang_td_ttien= document.createTextNode(ttien);
    giohang_td.appendChild(giohang_td_ttien);
    giohang_tr.appendChild(giohang_td);

    var giohang_td = document.createElement("td");
    var giohang_td_nut = document.createElement("input");
    giohang_td_nut.type = "button";
    giohang_td_nut.value = "xoá";
    giohang_td.appendChild(giohang_td_nut);
    giohang_td.appendChild(giohang_td);

    //gắn tr vào giỏ hàng tbody
    var giohang = document.getElementById("giohang");
    giohang.appendChild(giohang_tr);
}