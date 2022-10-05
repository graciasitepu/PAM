
//contoh closure

    function myNama() {
       let nama = 'Jane'; // variabel lokal
       function tampilNama() { // inner function (closure)
           console.log(nama); // akses ke parent variabel
    }
    tampilNama();
    }
    myNama();