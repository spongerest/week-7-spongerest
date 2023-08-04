
const produkNama: HTMLInputElement = document.getElementById("produkName") as HTMLInputElement;
const produkHarga: HTMLInputElement = document.getElementById("harga") as HTMLInputElement;
const produkMarkup: HTMLInputElement = document.getElementById("markup") as HTMLInputElement;
const produkStok: HTMLInputElement = document.getElementById("stok") as HTMLInputElement;
const produkSelect: HTMLSelectElement = document.getElementById("slct") as HTMLSelectElement;
const produkTambah: HTMLButtonElement = document.getElementById("tambah-produk") as HTMLButtonElement;
const produkList: HTMLTableElement = document.getElementById("list-produk") as HTMLTableElement;
const produkCheck : HTMLInputElement = document.getElementById("flexCheckDefault") as HTMLInputElement
const listProduk: { check: HTMLInputElement ,name: string, value: number, value2: number,category : string }[] = [];

function displayProduk(): void {
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
    listProduk.forEach((data) => {
        const tr:HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML =
        `
    <th class="checkbox">
        <div class="form-check"> 
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="deleteSelect">
        <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
    </th>
    <td>${data.name}</td>
    <td>${data.value}</td>
    <td>${data.value2}</td>
    <td>${data.category}</td>
    <button class="btn-delete btn-primary" type="submit">Delete</button>
    `
    produkList.appendChild(tr);
    })
}

produkTambah.addEventListener('click', () => {
    const namaProduk: string = String(produkNama.value);
    const hargaJualProduk: number = Number((produkHarga.valueAsNumber * 100) / (100 - produkMarkup.valueAsNumber));
    const stokProduk: number = Number(produkStok.value);
    const categoryProduk : string = String(produkSelect.value);

    if (namaProduk && hargaJualProduk && stokProduk) {
        const newProduk = {
            check:produkCheck,
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

    } else {
        alert("Harap Isi Semua Kolom Yang Tersedia");
    }
});

document.addEventListener('click',function(e:MouseEvent):void{
    const isChecked = (e.target as HTMLElement).classList.contains('btn-delete')
    
    if (isChecked == true){
        const btnDelete = e.target as HTMLElement
        const isConfirm = confirm('Are You Sure?');
        if(isConfirm){
            const parentTR = btnDelete.closest('tr');
            if (parentTR) {
            parentTR.remove();
            }
        }
    }
})