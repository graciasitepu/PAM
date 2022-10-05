
// contoh higher order function

const tahunLahir = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
const newTahun = tahunLahir.filter(function (a) {
    return a >= 2012;
});
console.log(newTahun);