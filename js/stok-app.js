var stokApp = new Vue({
  el: '#app',
  data: {
    stok: stok,
    upbjjList: upbjjList,
    kategoriList: kategoriList,
    filterUpbjj: '',
    filterKategori: '',
    sortKey: '',
    newItem: { kode: '', judul: '', kategori: '', upbjj: '', lokasiRak: '', qty: 0, safety: 0, harga: 0, catatanHTML: '' }
  },
  computed: {
    filteredStok() {
      let hasil = this.stok;

      if (this.filterUpbjj) hasil = hasil.filter(i => i.upbjj === this.filterUpbjj);
      if (this.filterKategori) hasil = hasil.filter(i => i.kategori === this.filterKategori);

      if (this.sortKey === 'judul') hasil.sort((a, b) => a.judul.localeCompare(b.judul));
      if (this.sortKey === 'stok') hasil.sort((a, b) => a.qty - b.qty);
      if (this.sortKey === 'harga') hasil.sort((a, b) => a.harga - b.harga);

      return hasil;
    }
  },
  methods: {
    addItem() {
      if (!this.newItem.kode || !this.newItem.judul) {
        alert('Semua field wajib diisi');
        return;
      }
      this.stok.push({ ...this.newItem });
      this.newItem = { kode: '', judul: '', kategori: '', upbjj: '', lokasiRak: '', qty: 0, safety: 0, harga: 0, catatanHTML: '' };
    },
    resetFilter() {
      this.filterUpbjj = '';
      this.filterKategori = '';
      this.sortKey = '';
    }
  }
});
