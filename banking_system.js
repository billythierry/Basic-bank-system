class BankAccount {
    constructor(nama, saldo) {
        this.nama = nama;
        this.saldo = saldo;
    }

    async deposit() {
        while (true) {
            let tambah = Number(prompt("Masukkan jumlah yang ditambahkan: "));
    
            if (tambah === "" || tambah < 0 || tambah === 0) {
                console.log("Jumlah tidak valid");
            } else if (isNaN(tambah)) {
                console.log("Tolong masukkan angka");
            } else {
                this.saldo += tambah;
                console.log("Proses menambahkan saldo sedang berlangsung...");
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log(`Jumlah saldo anda sekarang Rp ${this.saldo}`);
                break;
            }
        }
    }

    async withdraw() {
        while (true) {
            let kurang = Number(prompt("Masukkan jumlah yang ingin diambil: "));
        
            if (kurang === "" || kurang === 0 || kurang < 0) {
                console.log("Jumlah tidak valid");
            } else if (isNaN(kurang)) {
                console.log("Tolong masukkan angka");
            } else {
                if (kurang > this.saldo) {
                    console.log("Saldo anda tidak mencukupi");
                    break;
                }else {
                    this.saldo -= kurang;
                    console.log("Proses penarikan uang sedang berlangsung...");
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    console.log(`Penarikan berhasil, jumlah saldo anda sekarang Rp ${this.saldo}`);
                    break;
                }
            }
        }
    }
}

(async () => {
    try {
        const Nasabah1 = new BankAccount('Windah', 5000);
        console.log(`Halo ${Nasabah1.nama}, Total saldo anda Rp${Nasabah1.saldo}`);
        await Nasabah1.deposit();
        await Nasabah1.withdraw();
    } catch (err) {
        console.error(err);
    }
})();
