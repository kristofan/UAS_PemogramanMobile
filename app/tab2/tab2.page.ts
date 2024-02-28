import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  nama: string = '';
  nohp: string = '';
  email: string = '';
  prodi: string = '';
  usia: string = '';
  tahunlulus: string = '';
  beratbersih: string = '';
  tanggalproduksi: string = '';
  

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider
  ) {}

  ngOnInit() {}

  async addRegister() {
    if (this.nama == '') {
      const toast = await this.toastController.create({
        message: 'Nama obat harus di isi',
        duration: 2000,
      });
      toast.present();
    } else if (this.nohp == '') {
      const toast = await this.toastController.create({
        message: 'jumlah obat harus di isi',
        duration: 2000,
      });
      toast.present();
    } else if (this.email == '') {
      const toast = await this.toastController.create({
        message: 'harga harus di isi',
        duration: 2000,
      });
      toast.present();
    } else if (this.prodi == '') {
      const toast = await this.toastController.create({
        message: 'Password harus di isi',
        duration: 2000,
      });
      toast.present();
    } else if (this.usia == '') {
      const toast = await this.toastController.create({
        message: 'Password harus di isi',
        duration: 2000,
      });
      toast.present();
    } else if (this.tahunlulus == '') {
      const toast = await this.toastController.create({
        message: 'Tahun expired harus di isi',
        duration: 2000,
      });
      toast.present();
    } else if (this.beratbersih == '') {
      const toast = await this.toastController.create({
        message: 'berat harus diisi',
        duration: 2000,
      });
      toast.present();
    } else if (this.tanggalproduksi == '') {
      const toast = await this.toastController.create({
        message: 'tanggal harus di isi',
        duration: 2000,
      });
      toast.present();
    } else {
      let body = {
        nama: this.nama,
        nohp: this.nohp,
        email: this.email,
        prodi: this.prodi,
        usia: this.usia,
        tahunlulus: this.tahunlulus,
        beratbersih: this.beratbersih,
        tanggalproduksi: this.tanggalproduksi,
        aksi: 'add_register',
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async (data) => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tab3']);
          const toast = await this.toastController.create({
            message: 'Data Obat Telah Berhasil Di Input.',
            duration: 2000,
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000,
          });
        }
      });
    }
  }
}


