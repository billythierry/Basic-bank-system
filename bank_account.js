let saldo = 0;

function tambahSaldo (){
    while(true) {
        let tambah = Number(prompt("Masukkan jumlah yang ditambahkan : "));

        if(tambah == ""){
            console.log("Tolong masukkan jumlah saldo yang ingin anda tambahkan");
        }else if(isNaN(tambah)){
            console.log("Tolong masukkan angka");
        }else{
            saldo += tambah;
            console.log(`Jumlah saldo anda sekarang Rp ${saldo}`);
            break;
        }
    }
    
};

function kurangiSaldo (){
    while(true) {
        let kurang = Number(prompt("Masukkan jumlah yang ingin diambil : "));
    
        if(kurang == ""){
            console.log("Tolong masukkan jumlah saldo yang ingin anda ambil");
        }else if(isNaN(kurang)){
            console.log("Tolong masukkan angka");
        }else{
            if(kurang > saldo){
                console.log("Saldo anda tidak mencukupi");
            }else if (kurang == saldo){
                console.log("Anda telah mengambil semua isi saldo anda");
                saldo = 0;
            }else{
                saldo -= kurang;
                console.log(`Jumlah saldo anda sekarang Rp ${saldo}`);
                break;
            }
        }
    }
};

console.log(`Jumlah saldo anda saat ini Rp${saldo}`);
tambahSaldo();
kurangiSaldo();

