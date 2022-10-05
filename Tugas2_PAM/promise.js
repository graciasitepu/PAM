
// contoh promises

var Promise = new Promise(function(resolve, reject) {
    // setTimeout untuk mensimulasikan async function
    setTimeout(function() {
        reject(Error('Tidak terpenuhi'));
    }, 5);
});

// menggunakan method .then dan .catch
Promise.then(function(data) {
    console.log(data); // tidak terpanggil
}).catch(function(error) {
    console.log(error); // berisikan object Error
});

// output tidak ada karena tidak ada yang terpenuhi (objek error)
// pada console halaman html akan ditampilkan: error : tidak terpenuhi