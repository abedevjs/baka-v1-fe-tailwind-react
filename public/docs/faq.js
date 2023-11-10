export const user = [
  {
    question: "Bagaimana cara membuat Akun di Baka?",
    answer:
      "Mudah. Kakak hanya perlu menggunakan salah satu akun yaitu Gmail atau Facebook. Di halaman 'LOGIN', kakak masuk dengan memilih salah satu dari dua akun tersebut.",
  },
  {
    question: "Apakah akun kami aman di Baka?",
    answer:
      "Kami menjamin keamanan data seluruh User di Baka. Kami tidak meminta password User untuk keperluan apapun, sementara aktifitas Registrasi dan Login melalui Gmail atau Facebook sebagai perantara.",
  },
  {
    question: "Apakah User perlu memiliki nomor kontak di Baka?",
    answer:
      "Jika User ingin menjual atau membeli Bagasi, maka User harus memberikan nomor kontak untuk kemudahan komunikasi. Selain itu, User tidak harus memberikan nomor kontak.",
  },
  {
    question: "Bagaimana cara update data User?",
    answer:
      "Update data User melalui halaman 'AREA USER'. Untuk sementara User hanya boleh update nomor kontak.",
  },
  {
    question: "Bagaimana cara menghapus akun?",
    answer: "Kakak boleh menghapus akun di halaman 'AREA USER'.",
  },
  {
    question: "Mengapa saya tidak bisa menghapus akun?",
    answer:
      "Untuk menghapus akun, kakak perlu memastikan tidak memiliki Bagasi atau Order aktif. Bagasi aktif ialah Bagasi yang sudah di beli oleh Jastiper walaupun itu hanya 1Kg. Order aktif ialah Order dalam status 'Ready'.",
  },
  {
    question: "Mengapa saya tidak bisa masuk/login?",
    answer:
      "Pertama, pastikan koneksi internet kakak tidak dalam gangguan. Kedua, pastikan kakak tidak termasuk dalam daftar Blacklist.",
  },
  {
    question: "Mengapa akun saya masuk dalam daftar Blacklist?",
    answer:
      "Akun yang di Blacklist jika akun tersebut pernah melanggar aturan dan syarat ketentuan dengan Baka atau dengan User lain.",
  },
  {
    question: "Bagaimana cara agar akun saya di coret dari daftar Blacklist?",
    answer: "Hubungi Admin di halaman 'HUBUNGI KAMI'.",
  },
];

export const bagasi = [
  {
    question: "Bagaimana cara menjual bagasi?",
    answer:
      "Untuk menjual bagasi, masuk ke halaman 'AREA BAGASI' kemudian klik tombol 'Isi Formulir Jual Bagasi'.",
  },
  {
    question: "Apa syarat untuk jual bagasi?",
    answer:
      "Mengisi formulir jual bagasi, memiliki dokumen perjalanan yang valid berupa tiket penerbangan yang masih berlaku.",
  },
  {
    question: "Apa yang di maksud dengan 'Traveler'?",
    answer: "Label atau nama untuk User yang menjual bagasi.",
  },
  {
    question: "Apa artinya jika status Bagasi 'Scheduled'?",
    answer:
      "Ialah Bagasi yang sudah di registrasi oleh Traveler tapi masih menunggu validasi dokumen perjalanan oleh Admin. Status Bagasi akan tetap 'Scheduled' jika belum dilengkapi dokumen perjalanan atau tidak valid.",
  },
  {
    question: "Apa artinya jika status Bagasi 'Opened'?",
    answer:
      "Ialah Bagasi yang berhasil di validasi oleh Admin. Pada tahap ini Bagasi sudah bisa di order oleh Jastiper.",
  },
  {
    question: "Apa artinya jika status Bagasi 'Closed'?",
    answer:
      "Ialah Bagasi yang sudah tidak bisa di order oleh Jastiper. Disebabkan oleh seluruh berat Bagasi telah di order dan atau masa waktu Bagasi tepat sehari sebelum waktu keberangkatan Traveler (h-1).",
  },
  {
    question: "Apa artinya jika status Bagasi 'Unloaded'?",
    answer:
      "Ialah Bagasi yang telah menyelesaikan misinya dengan sukses. Yaitu seluruh order Jastiper dalam Bagasi tersebut telah diterima dan masa waktu Bagasi telah melewati 3 hari (h+3) tangga kedatangan/tiba Traveler.",
  },
  {
    question: "Apa artinya jika status Bagasi 'Canceled'?",
    answer:
      "Ialah Bagasi yang sudah didaftarkan namun belum berhasil di validasi hingga melewati masa waktu tanggal keberangkatan Traveler.",
  },
  {
    question: "Dalam kondisi apa Bagasi boleh di edit/update?",
    answer:
      "Jika Bagasi masih dalam status 'Scheduled', maka boleh di edit 'Tanggal Keberangkatan', 'Tanggal Tiba', 'Jumlah(Kg)', Harga, dan 'Catatan Traveler'. Jika status 'Opened', Bagasi hanya boleh di update 'Jumlah(Kg)', Harga, dan 'Catatan Traveler' saja.",
  },
  {
    question: "Dalam kondisi apa Bagasi tidak boleh di hapus??",
    answer: "Jika Bagasi sudah di order oleh Jastiper.",
  },
  {
    question: "Mengapa saya tidak bisa menjual bagasi?",
    answer:
      "Kakak sudah atau masih memiliki 3 bagasi aktif (sudah di registrasikan). Kakak harus terlebih dahulu menyelesaikan misi Bagasi tersebut, atau menghapus salah satu Bagasi (jika status Bagasi masih 'Scheduled').",
  },
  {
    question:
      "Berapa batas waktu minimum yang ditentukan sebelum tanggal keberangkatan bagasi?",
    answer:
      "7 hari. Lewat dari masa itu, kakak tidak bisa mendaftarkan bagasi nya untuk dijual.",
  },
  {
    question:
      "Berapa berat minimum dan maksimum jika saya ingin menjual bagasi?",
    answer: "Berat minimum 1 Kg, berat maksimal 80 Kg.",
  },
  {
    question: "Apa mata uang yang digunakan dalam transaksi Jual-Beli Bagasi?",
    answer: "Indonesia Rupiah (IDR).",
  },
  {
    question: "Apa yang dimaksud dengan 'Alamat Kota Asal'?",
    answer:
      "Yaitu alamat kota asal Traveler tempat Jastiper mengirimkan bagasinya untuk di bawa.",
  },
  {
    question: "Apa yang dimaksud dengan 'Alamat Kota Tujuan'?",
    answer:
      "Yaitu alamat kota tujuan Traveler tempat Jastiper mengambil bagasinya.",
  },
  {
    question: "Apa yang dimaksud dengan 'Catatan Traveler'?",
    answer:
      "Catatan tambahan dari Traveler untuk Jastiper yang akan mengirimkan bagasi nya. Misalnya: 'Tidak menerima barang pecah belah'.",
  },
  {
    question:
      "Apakah Kontak, Alamat Kota Asal dan Alamat Kota Tujuan saya akan di share/buka?",
    answer:
      "'Kontak, Alamat Kota Asal' dan 'Alamat Kota Tujuan' hanya akan di share/buka kepada Jastiper dengan pembayaran yang berhasil di validasi.",
  },
  {
    question: "Apakah saya bisa mengubah jumlah bagasi yang dijual?",
    answer:
      "Jumlah bagasi bisa diubah selama status Bagasi masih 'Scheduled' dan 'Opened'.",
  },
  {
    question:
      "Pada halaman 'UPDATE BAGASI', apa yang dimaksud dengan 'Berat(Kg), Booked(Kg) dan Sisa(Kg)'?",
    answer:
      "'Berat(Kg)' adalah berat total bagasi yang di jual. 'Booked(Kg)' adalah berat yang sudah di order oleh Jastiper. 'Sisa(Kg)' adalah sisa berat yang masih tersedia/belum di order.",
  },
  {
    question: "Apakah saya bisa mengubah harga bagasi yang dijual?",
    answer:
      "Harga bagasi bisa diubah selama status Bagasi masih 'Scheduled' dan 'Opened'.",
  },
  {
    question:
      "Pada halaman 'UPDATE BAGASI', apa yang dimaksud dengan 'Balance, Tax dan Net'?",
    answer:
      "'Balance' adalah jumlah total sementara hasil pembayaran yang di terima untuk Bagasi yang sudah di order. 'Tax' adalah potongan pajak/biaya Admin. 'Net' adalah jumlah total akhir (setelah dipotong Tax) yang akan diterima oleh Traveler setelah misi Bagasi selesai.",
  },
  {
    question:
      "Pada halaman 'UPDATE BAGASI', mengapa saya tidak bisa mengganti Kota Asal dan Kota Tujuan?",
    answer:
      "Jika Bagasi sudah di daftarkan, Kota Asal dan Kota Tujuan tidak bisa di ganti. Solusinya, kakak menghapus Bagasi yang sudah di daftarkan dan mengisi formulir Jual Bagasi baru.",
  },
  {
    question: "Mengapa saya belum menerima hasil penjualan bagasi saya?",
    answer:
      "Traveler akan menerimal hasil penjualan ketika misi bagasi telah selesai dan sukses atau status Bagasi 'Unloaded'.",
  },
  {
    question: "Kapan saya akan menerima hasil penjualan bagasi?",
    answer:
      "Traveler akan menerimal hasil penjualan ketika misi bagasi telah selesai dan sukses atau status Bagasi 'Unloaded'.",
  },
  {
    question: "Mengapa upload dokumen saya gagal?",
    answer:
      "Kemungkinan pertama, file yang di upload bukan file gambar atau pdf. Kemungkinan kedua file yang di upload lebih dari 5mb.",
  },
  {
    question: "Apakah saya bisa update/ganti dokumen penerbangan?",
    answer:
      "Dokumen perjalanan/penerbangan bisa di ganti kapan saja selama status Bagasi 'Scheduled' pada halaman 'USER'.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan untuk validasi dokumen penerbangan?",
    answer: "Paling lama 24 jam.",
  },
  {
    question: "Mengapa validasi dokumen penerbangan/bagasi saya ditolak?",
    answer:
      "Karena data formulir dan atau dokumen perjalanan/penerbangan tidak valid.",
  },
  {
    question:
      "Apakah Admin memiliki akun Traveler sendiri dalam menjual bagasi?",
    answer: "Ada. Atas nama: Baka Traveler Official.",
  },
  {
    question:
      "Mengapa Kota Asal / Kota Tujuan saya tidak ada dalam formulir Jual Bagasi?",
    answer:
      "Kakak bisa mengubungi Admin untuk permohonan Kota Asal / Kota Tujuan yang tidak tersedia dalam formulir Jual Bagasi",
  },
  {
    question:
      "Apakah saya bisa tahu siapa saja yang telah membeli bagasi saya?",
    answer:
      "Bagasi kakak bisa dipantau pada halaman 'AREA USER'. Klik 'Edit/Hapus' pada bagasi yang di inginkan. Di halaman itu akan terlihat detail Order pada Bagasi tersebut.",
  },
  {
    question:
      "Bagasimana prosedur pembayaran dana penjualan Bagasi kepada Traveler?",
    answer: "Admin akan menghubungi Traveler",
  },
  // { question: "halo?", answer: "yes" },
];

export const order = [
  {
    question: "Bagaimana cara membuat Order?",
    answer:
      "Untuk membeli bagasi, masuk ke halaman 'AREA BAGASI', pada tabel list bagasi, pilih link 'BELI' di kolom action.",
  },
  {
    question: "Mengapa saya tidak bisa melihat data Traveler?",
    answer:
      "Data Traveler akan di share setelah Jastiper melakukan pembayaran dan berhasil di verikasi oleh Admin.",
  },
  {
    question: "Berapa berat minimum dan maksimal bagasi yang bisa dibeli?",
    answer:
      "Berat minimum 1Kg, berat maksimal sebanyak berat yang di jual oleh Traveler pemilik bagasi tsb.",
  },
  {
    question:
      "Bagaimana jika isi bagasi saya tidak terdapat pada pilihan 'Isi Kiriman'?",
    answer: "Kakak bisa memilih pilihan 'Lain-lain'.",
  },
  {
    question: "Apa yang dimaksud dengan 'Catatan Order'?",
    answer:
      "Ialah catatan yang di buat oleh Jastiper untuk Traveler yang membawa bagasi nya. Misalnya: 'Isi makanan, mohon simpan di kulkas hingga sebelum waktu keberangkatan'.",
  },
  {
    question:
      "Apa yang di maksud dengan 'Konfirmasi' pada kolom Maskapai di detail Bagasi?",
    answer:
      "Admin masih melakukan proses verifikasi data penerbangan pada Traveler tersebut.",
  },
  {
    question: "Apa arti 'Incl. Tax %' pada kolom 'Total Biaya'?",
    answer:
      "Yaitu jumlah biaya admin yang diambil dari persentase pembelian bagasi.",
  },
  {
    question: "Kapan saya bisa mengirimkan bagasi saya ke alamat Traveler?",
    answer:
      "Setelah kakak melakukan pembayaran, dan pembayaran tersebut berhasil di verifikasi oleh Admin. Status Order akan berubah menjadi 'Ready', data Traveler akan dishare di saat yang bersamaan.",
  },
  {
    question:
      "Kapan waktu paling lambat sebaiknya saya melakukan pembelian bagasi?",
    answer:
      "Kakak harus mempertimbangkan dengan waktu keberangkatan Traveler, status Bagasi otomatis 'Closed' sehari sebelum waktu keberangkatan (h-1).",
  },
  {
    question: "Bagaimana proses pembayaran untuk pembelian bagasi?",
    answer: "Kakak bisa melakukan transfer antar bank ke rekening Admin Baka.",
  },
  {
    question: "Bagaimana saya mengirimkan bukti pembayaran?",
    answer:
      "Kakak bisa mengupload bukti pembayaran setelah mengisi formulir Beli Bagasi atau di halaman 'AREA USER'.",
  },
  {
    question: "Mengapa saya tidak bisa upload bukti pembayaran saya?",
    answer:
      "Kami hanya menerima file dalam bentuk gambar dan atau pdf, dengan kapasitas tidak lebih dari 5mb.",
  },
  {
    question: "Apakah saya bisa mengubah dokumen bukti pembayaran saya?",
    answer:
      "Kakak bisa mengubah/mengupload kembali bukti pembayaran dengan mengisi Formulir Upload Dokumen di halaman 'AREA USER'.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan Admin untuk verifikasi pembayaran saya?",
    answer: "Proses verikasi pembayaran paling lama 24 jam.",
  },
  {
    question: "Apakah saya harus melakukan pembayaran saat itu juga?",
    answer:
      "Kakak bisa melakukan pembayaran kemudian setelah Order siap. Untuk mengubah Order, silahkan kunjungi halaman 'AREA USER'.",
  },
  {
    question:
      "Apakah saya masih bisa mengubah detail order saya seperti berat bagasi dan isi kiriman?",
    answer:
      "Bisa kak. Untuk mengubah Order, silahkan kunjungi halaman 'AREA USER'.",
  },
  {
    question: "Apa arti Order status 'Preparing'?",
    answer:
      "Ialah Order yang sudah di daftarkan, tapi masih menunggu proses verifikasi pembayaran oleh Admin. Data Traveler belum bisa di share ke Jastiper.",
  },
  {
    question: "Apa arti Order status 'Ready'?",
    answer:
      "Ialah Order yang berhasil di verikasi. Jastiper boleh melakukan kontak langsung dan mengirimkan bagasi nya ke Alamat Kota Asal Traveler.",
  },
  {
    question: "Apa arti Order status 'Delivered'?",
    answer:
      "Ialah Order yang berhasil dengan aman sampai di Alamat Kota Tujuan dan sudah diterima oleh Jastiper.",
  },
  {
    question: "Apa arti Order status 'Postponed'?",
    answer: "Ialah Order yang belum dan atau tidak memiliki bukti pembayaran.",
  },
  {
    question:
      "Pada halaman 'UPDATE ORDER', apa perbedaan 'Biaya', 'Tax' dan 'Total Biaya' ?",
    answer:
      "'Biaya' adalah biaya total sementara setelah pembelian bagasi. 'Tax' adalah persentase biaya Admin dengan total 'Biaya' sementara. 'Total Biaya' adalah jumlah biaya akhir yang harus di bayar.",
  },
  {
    question: "Kapan saya bisa menerima/mengambil bagasi saya?",
    answer:
      "Setelah bagasi tiba di Alamat Kota Tujuan, kakak bisa berkomunikasi langsung dengan Traveler mengenai hal ini.",
  },
  {
    question: "Dimana saya bisa menerima/mengambil bagasi saya?",
    answer:
      "Di Alamat Kota Tujuan, kakak bisa berkomunikasi langsung dengan Traveler mengenai hal ini.",
  },
  {
    question: "Bagaimana jika bagasi saya di tahan di bandara?",
    answer:
      "Sepenuhnya tergantung kesepakatan antara Traveler dan Jastiper. Hendaknya kedua pihak sudah memahami regulasi pajak dan Bea Cukai di negara asal dan negara tujuan.",
  },
  {
    question:
      "Siapa yang bertanggung jawab jika ada masalah pada bagasi saya (diluar bandara)?.",
    answer:
      "Jika ada masalah di luar bandara terhadap bagasi Jastiper, maka tanggung jawab sepenuhnya diberikan kepada Traveler.",
  },
  {
    question: "Apa arti tombol 'Selesai' pada halaman update Order?",
    answer:
      "Yaitu jika Jastiper sudah menerima bagasi, status Order secara otomatis akan berubah menjadi 'Delivered'.",
  },
  {
    question:
      "Mengapa tombol 'Selesai' tidak tersedia pada halaman update Order?",
    answer:
      "Tombol 'Selesai' akan aktif setelah Traveler tiba di negara Tujuan.",
  },
  {
    question: "Apakah saya bisa membeli bagasi yang sama lebih dari satu kali?",
    answer:
      "Kakak tentunya boleh membeli bagasi yang sama lebih dari satu kali.",
  },
  {
    question:
      "Berapa order maksimal yang bisa saya buat pada satu Bagasi yang sama?",
    answer:
      "Tidak ada batasan tertentu jika kakak ingin membeli Bagasi yang sama.",
  },
  {
    question: "Berapa jumlah Order aktif yang bisa saya buat?",
    answer: "Jumlah maksimal Order aktif adalah 10.",
  },

  {
    question: "Dimana saya bisa mengubah atau menghapus detail Order?",
    answer:
      "Untuk mengubah atau menghapus Order, silahkan kunjungi halaman 'AREA USER'.",
  },
  {
    question: "Bagaimana jika saya ingin Jastip dari negara tujuan?",
    answer: "Silahkan berkomunikasi langsung dengan Traveler ya kak.",
  },
  // { question: "halo?", answer: "yes" },
];
