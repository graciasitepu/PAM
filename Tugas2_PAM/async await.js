
// contoh Async await

function samplePromise() {
    return new Promise(resolve => { 
        setTimeout(() => { 
            resolve('Berhasil')
        }, 1000)
    });
}
async function sampleAsync() {
    const sample = await samplePromise();
    console.log(sample);
}
sampleAsync();