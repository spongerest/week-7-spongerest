var produkNama = document.getElementById("produkName");
var produkHarga = document.getElementById("harga");
var produkMarkup = document.getElementById("markup");
var produkStok = document.getElementById("stok");
var produkSelect = document.getElementById("slct");
var produkTambah = document.getElementById("tambah-produk");
var produkList = document.getElementById("list-produk");
var produkCheck = document.getElementById("flexCheckDefault");
var listProduk = [];
function displayProduk() {
    // produkList.innerHTML = '';
    // listProduk.forEach((data, index) => {
    //     const li: HTMLLIElement = document.createElement('li');
    //     li.innerText =
    //         `${index + 1}. ${data.name}
    //         Harga Jual Rp. ${data.value}
    //         Stok Tersedia : ${data.value2}`;
    //     produkList.appendChild(li);
    // });
    produkList.innerHTML = '';
    listProduk.forEach(function (data) {
        var tr = document.createElement('tr');
        tr.innerHTML =
            "\n    <th class=\"checkbox\">\n        <div class=\"form-check\"> \n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\" onclick=\"deleteSelect\">\n        <label class=\"form-check-label\" for=\"flexCheckDefault\"></label>\n        </div>\n    </th>\n    <td>".concat(data.name, "</td>\n    <td>").concat(data.value, "</td>\n    <td>").concat(data.value2, "</td>\n    <td>").concat(data.category, "</td>\n    <button class=\"btn-delete btn-primary\" type=\"submit\">Delete</button>\n    ");
        produkList.appendChild(tr);
    });
}
produkTambah.addEventListener('click', function () {
    var namaProduk = String(produkNama.value);
    var hargaJualProduk = Number((produkHarga.valueAsNumber * 100) / (100 - produkMarkup.valueAsNumber));
    var stokProduk = Number(produkStok.value);
    var categoryProduk = String(produkSelect.value);
    if (namaProduk && hargaJualProduk && stokProduk) {
        var newProduk = {
            check: produkCheck,
            name: namaProduk,
            value: hargaJualProduk,
            value2: stokProduk,
            category: categoryProduk
        };
        listProduk.push(newProduk);
        displayProduk();
        produkNama.value = '';
        produkHarga.value = '';
        produkMarkup.value = '';
        produkStok.value = '';
    }
    else {
        alert("Harap Isi Semua Kolom Yang Tersedia");
    }
});
document.addEventListener('click', function (e) {
    var isChecked = e.target.classList.contains('btn-delete');
    if (isChecked == true) {
        var btnDelete = e.target;
        var isConfirm = confirm('Are You Sure?');
        if (isConfirm) {
            var parentTR = btnDelete.closest('tr');
            if (parentTR) {
                parentTR.remove();
            }
        }
    }
});
