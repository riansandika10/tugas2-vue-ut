var trackingApp = new Vue({
  el: '#app',
  data: {
    pengirimanList: pengirimanList,
    paket: paket,
    trackingData: trackingData,
    nim: '',
    nama: '',
    ekspedisi: '',
    paketDipilih: '',
    tanggalKirim: '',
    daftarDO: [],
  },
  methods: {
    generateNomorDO() {
      let nomorBaru = Object.keys(this.trackingData).length + 1;
      return 'DO2025-' + nomorBaru.toString().padStart(4, '0');
    },
    tambahDO() {
      if (!this.nim || !this.nama || !this.paketDipilih) {
        alert('Lengkapi data!');
        return;
      }

      let noDO = this.generateNomorDO();
      let paketInfo = this.paket.find(p => p.kode === this.paketDipilih);
      this.trackingData[noDO] = {
        nim: this.nim,
        nama: this.nama,
        ekspedisi: this.ekspedisi,
        tanggalKirim: this.tanggalKirim || new Date().toISOString().split('T')[0],
        paket: this.paketDipilih,
        total: paketInfo.harga
      };
    }
  }
});
