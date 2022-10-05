# Rangkuman Materi Javascript lanjutan

### 1. Closure
Closure adalah fungsi di dalam fungsi lain, artinya suatu fungsi sebagai outer function yang di dalamnya terdapat inner function yang dapat mengakses variabel yang dimiliki oleh fungsi luar/outer, juga mengakses variabel lokal dan variabel global. Berikut ini contoh sederhana closure:

![closure](https://user-images.githubusercontent.com/104087436/193445605-5112430d-4e75-4945-835b-54bcad150e54.png)

Pada contoh diatas, `function myNama()` sebagai outer function yang memiliki variabel lokal didalamnya dan juga di dalam fungsi ini terdapat function `tampilNama()` sebagai inner fungsi yang menjalankan `console.log(nama)` lalu dilakukan pemanggilan function `tampilNama` dan juga pemanggilan function `myNama.` Pada kasus ini, fungsi `tampilNama` memiliki akses ke variabel nama sehingga disebut sebagai closure dikarenakan memerlukan variabel nama yang terdapat di parent variabel. Ketika program dijalankan maka akan ditampilkan hasilnya yaitu `Jane.`
Untuk lebih memahami mengenai closure dapat dilihat dari referensi berikut [Klik disini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

### 2. Immediately Invoked Function Expression
Immediately Invoked Function Expression (IIFE) adalah suatu ekspresi fungsi yang memanggil dirinya sendiri atau dapat juga diartikan sebagai fungsi yang ditambahkan langsung setelah dilakukan deklarasi fungsi. IIFE digunakan bertujuan untuk menghindari global namespace pollution yang berakibat adanya tabrakan/collisions antar nama fungsi ataupun variabel yang digunakan. Pada IIFE dapat menggunakan dua pasang tanda kurung buka dan tutup. Untuk kurung pertama sebagai tempat mendeklarasikan anonymous function expression sedangkan kurung kedua untuk memanggil fungsi. Berikut ini contoh sederhana IIFE:

![IIFE](https://user-images.githubusercontent.com/104087436/193565327-2a1c0232-5145-45c7-9e97-caafb315a461.png)

Program diatas adalah contoh sederhana dari IIFE dengan parameter yaitu fungsi pertama dengan parameter nama dan terdapat juga dibaris terakhir digunakan tanda kurung yang berisi suatu nilai atau argument lanjutan yang akan dipanggil. Ketika dieksekusi maka akan keluar hasil output yaitu `Hi Jane, How are You!`.
Berikut referensi mengenai IIFE [Klik disini](https://www.geeksforgeeks.org/javascript-immediately-invoked-function-expressions-iife/).

### 3. First-class function
First-class function adalah suatu fungsi yang dapat di simpan baik dalam bentuk variabel, objek dan array, mengembalikan sebuah fungsi sebagai hasil serta dikirim sebagai argumen fungsi lain. Adapun manfaat dari first class function adalah kefleksibilitasannya. Berikut ini contoh first-class function:

![firstclass](https://user-images.githubusercontent.com/104087436/193565386-c0b0ab84-945e-452c-b503-b2e8c13f086b.png)

Pada program diatas, fungsi di assign dalam array dimana isi fungsi akan dikembalikan jika ditambahkan tanda kurung () di baris akhir kode sebagai proses pemanggilan fungsi. Ketika dijalankan maka pada console akan ditampilkan hasil yaitu `Good luck`. 
Referensi terkait pembahasan First-class function [Klik disini](https://www.geeksforgeeks.org/what-is-the-first-class-function-in-javascript/).

### 4. Higher-order function
Higher-order function merupakan suatu function yang didalamnya memiliki function lain sebagai argument ataupun function yang nilainya dikembalikan sebagai hasil atau output. Function yang terlibat sebagai argument atau nilai pada higher order function ini disebut juga sebagai callback function. Beberapa higher order function yang sering digunakan seperti `find()`, `filter()`, `sort()`, dan lainya. Berikut ini contoh dari higher order function:

![higherorder](https://user-images.githubusercontent.com/104087436/193565412-52954d71-599b-493e-815c-7cae49ac8ead.png)

Pada program diatas digunakan higher order function yaitu filter yang digunakan untuk menfilter array sesuai kriteria yang diinginkan. Program diatas dilakukan filter nilai yaitu tahun yang lebih dari samadengan 2012, sehingga ketika dieksekusi maka akan dikembalikan output array baru yaitu `[2012, 2013, 2014, 2015, 2016]`.
Berikut referensi pembahasan mengenai Higher-order function [Klik disini](https://medium.com/skyshidigital/higher-order-function-in-js-dd9499272ec7).

### 5. Execution Context
Execution context adalah konteks atau lingkungan yang membungkus suatu kode javascript saat dijalankan. Adapun nilai, variabel function dan objek sebagai lingkungan/konteks yang akan diakses oleh kode javascript. Execution context dibagi menjadi dua jenis yaitu global execution context (konteks eksekusi default keseluruhan kode) dan local execution context (konteks eksekusi di dalam function yang hanya dapat diakses fungsi tertentu). Pada javascript terdapat dua fase yaitu creation phase dan execution phase. Berikut ini contoh dari execution context:

![execution context](https://user-images.githubusercontent.com/104087436/193565521-f8058fe7-db19-4794-a445-60f3f3bad3f1.png)

Program diatas menggunakan konteks eksekusi lokal yang didalamnya terjadi fase creation dan fase execution dimana setiap fungsi dijalankan dan isinya ditampilkan namun akan terdapat kejadian dimana suatu fungsi harus menunggu untuk dieksekusi secara bertahap hingga semua function selesai dijalankan. Hasil output yang dikembalikan yaitu `Saya Sam`, `umur 25`, `Hello!!`. Berikut referensi pembahasan execution context [Klik disini](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#amp_tf=Dari%20%251%24s&aoh=16647145406557&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fexecution-context-how-javascript-works-behind-the-scenes%2F).

### 6. Execution Stack
Execution stack adalah proses eksekusi tumpukan struktur data yang menggunakan prinsip Last In First Out/LIFO yaitu data yang terakhir dimasukkan maka data tersebut akan pertama kali dikeluarkan. Pada proses ini dilakukan operasi seperti push, pop, peek data elemen stack yang paling akhir/ tumpukan paling atas. Berikut ini contoh dari execution stack dengan operasi push (menyimpan data ke tumpukan paling atas).

![stack](https://user-images.githubusercontent.com/104087436/193565541-4efb4f75-064f-4845-bbbf-3197b148773d.png)

Pada program ini, akan dilakukan penyimpanan data baru yaitu putri ke tumpukan paling atas setelah data sebelumnya. Hasil yang dikeluarkan setelah dieksekusi yaitu Jane di indeks 0, Sam indeks 1, Toni indeks 2, Smith indeks 3, dan Putri indeks 4 dengan panjang array 5. Berikut referensi pembahasan execution stack [Klik disini](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0). 

### 7. Event Loop
Event loop adalah suatu proses pengulangan yang tak terhingga atau secara terus-menerus dan mempunyai hanya satu thread serta memiliki alur proses seperti proses menambahkan task ke dalam antrian dan akan dieksekusi pada proses loop berikutnya. Setelah proses selesai maka even loop akan memberikan hasil informasi proses. Berikut contohnya:

![eventloop](https://user-images.githubusercontent.com/104087436/193565583-9aee9793-e32a-4741-b068-f85c5b7f9d19.png)

Pada program ini akan terjadi antrian saat proses eksekusi berlangsung sampai semua function selesai dilewati sehingga mengembalikan hasil dalam bentuk urutan stack. Berikut referensi pembahasan mengenai event loop [Klik disini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).

### 8. Callbacks
Callbacks adalah suatu fungsi yang dikembalikan sebagai parameter atau argument ke fungsi lain dan akan dieksekusi setelah function utama selesai dijalankan. Adapun callback dapat digunakan pada proses synchronous dan asynchronous. Berikut contoh dari callbacks:

![callbacks](https://user-images.githubusercontent.com/104087436/193565602-d4d048c6-c0d1-43b9-9bce-1449ceb734de.png)

Pada program ini, argument nama akan digunakan di function kedua setelah function pertama selesai dieksekusi dan ketika argumen nama dipakai saat pemanggilan callback selesai maka akan dikembalikan hasil output yaitu selamat malam diikuti nama yang dinput user. Berikut referensi pembahasan callbacks [Klik disini](https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-2-callback-3a717df6cfdf).

### 9. Promises dan Async/Await
Promises adalah suatu objek yang akan merepresentasikan keberhasilan atau kegagalan suatu proses yang asynchronous dimana proses promise tersebut memiliki dua kemungkinan yaitu dapat terpenuhi atau tidak terpenuhi. Pada promises menggunakan dua parameter yaitu `resolve` dan `reject` serta memiliki state yang kemungkinan terjadi yaitu panding (dalam proses), resolved (promise berhasil/ terpenuhi) dan rejected (tidak terpenuhi/gagal). Untuk resolve dilakukan aksi yaitu method `.then` sedangkan reject dilakukan aksi dengan method `.catch`. Berikut contoh promises:

![promises](https://user-images.githubusercontent.com/104087436/193604543-64be4451-1e36-450c-8e5a-f075cf2355ce.png)

Pada program diatas, aksi yang dijalankan yaitu catch dikarenakan menggunakan parameter reject dimana kejadian yang terjadi tidak terpenuhi. Oleh karena itu, aksi  than tidak terpanggil dan hasil yang dikembalikan setelah di console adalah error : tidak terpenuhi. 

`Async/await` terbagi menjadi asyncronous function dan await. `Asyncronous function` merupakan fungsi yang dijalankan secara asyncronous dan akan menghasilkan sebuah promise sebagai nilai kembaliannya. Sedangkan `await` adalah fungsi yang akan memberhentikan atau menunda proses eksekusi kode hingga proses asyn selesai. Berikut contoh asyinc/await:

![async await](https://user-images.githubusercontent.com/104087436/193604655-0956a7d0-574e-428d-8bab-38afbbdc9785.png)

Pada program ini, digunakan fungsi async dan await dimana ketika program dieksekusi maka akan memerlukan waktu beberapa detik menunggu sampai output resolve atau terpenuhi ditampilkan. Berikut ini referensi pembahasan dari materi promises dan async/await [Klik disini](https://www.w3schools.com/js/js_async.asp) dan [Klik disini](https://www.kawankoding.id/javascript-async-await/). 
