<template>
    <div class="table-responsive">
        <form @submit.prevent="submitFormRegistrasi">
            <table class="table table-bordered text-wrap text-break">
                <!-- FORMAT TABEL, 12 TERSEDIA, 6 JI DIPAKE -->
                <colgroup>
                    <col span="12">
                    </col>
                </colgroup>
                <thead class="table-dark">
                    <tr>
                        <th colspan="6" scope="row" class="text-center">
                            <h1 class="mb-0">
                                Formulir Aplikasi Mitra Bisnis
                            </h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" class="text-center">
                            <div>
                                Mohon mengisi, menandatangani, dan mengembalikan formulir ini bersama dengan salinan
                                kartu NPWP, KTP, SITU, SIUP
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center">
                            <div>
                                Untuk persetujuan mitra bisnis yang cepat scan/foto formulir ini (setelah di isi) &
                                whatsapp ke sales atau hubungi ke (0411) 515559
                            </div>
                        </td>
                    </tr>

                    <!-- SECTION: INFORMASI UMUM  -->
                    <tr>
                        <th colspan="6" scope="row" class="text-center table-light">
                            Informasi Umum
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">Nama Perusahaan*</th>
                        <td colspan="5">
                            <input v-model="formRegistrasi.informasiUmum.namaPerusahaan" class="w-100 form-control"
                                type="text" placeholder="Isi dengan nama di KTP jika tidak ada NPWP" required>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">No. NPWP*</th>
                        <td class="align-middle" colspan="3">
                            <input v-model="formRegistrasi.informasiUmum.nomorNPWP" class="w-100 form-control"
                                type="text" placeholder="Isi dengan NIK di KTP jika tidak ada NPWP" required>
                        </td>
                        <td colspan="3">
                            <div>
                                <input name="statusPKP" v-model="formRegistrasi.informasiUmum.statusPKP"
                                    class="me-2 form-check-input" type="radio" value="PKP" required>
                                <label class="form-check-label" for="PKP">PKP</label>
                            </div>
                            <div>
                                <input name="statusPKP" v-model="formRegistrasi.informasiUmum.statusPKP"
                                    class="me-2 form-check-input" type="radio" value="Non-PKP" required>
                                <label class="form-check-label" for="PKP">Non-PKP</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">No. Telf*</th>
                        <td class="align-middle" colspan="3">
                            <input v-model="formRegistrasi.informasiUmum.nomorTelfon" class="w-100 form-control"
                                type="text" placeholder="Nomor telefon perusahaan" required>
                        </td>
                        <td>Fax</td>
                        <td>
                            <input v-model="formRegistrasi.informasiUmum.nomorFax" class="w-100 form-control"
                                type="text" placeholder="Nomor fax perusahaan">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Alamat*</th>
                        <td class="align-middle" colspan="5">
                            <textarea class="form-control" v-model="formRegistrasi.informasiUmum.alamat"
                                placeholder="Alamat sesuai KTP jika tak mempunyai NPWP" required></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle" colspan="6">
                            *Sesuai dengan yang tertera pada kartu NPWP
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Kota*</th>
                        <td class="align-middle" colspan="3">
                            <input v-model="formRegistrasi.informasiUmum.tempatKota" class="w-100 form-control"
                                type="text" placeholder="Isi dengan kota di KTP jika tidak ada NPWP" required>
                        </td>
                        <td class="">
                            PO Box
                        </td>
                        <td class="">
                            <input v-model="formRegistrasi.informasiUmum.tempatPOBox" class="w-100 form-control"
                                type="text" placeholder="Jika ada">
                        </td>
                    </tr>

                    <!-- SECTION: INFORMASI BISNIS -->
                    <tr>
                        <th colspan="6" scope="row" class="text-center table-light">
                            Informasi Bisnis
                        </th>
                    </tr>
                    <tr>
                        <th scope="row" colspan="1" class="fs-">Jenis Usaha*<br /> <small class="text-secondary"> (Pilih
                                Salah Satu) </small></th>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Hotel" required>
                                <label class="form-check-label" for="jenisUsaha">Hotel</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Pastry" required>
                                <label class="form-check-label" for="jenisUsaha">Pastry</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Manufaktur" required>
                                <label class="form-check-label" for="jenisUsaha">Manufaktur</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Restoran" required>
                                <label class="form-check-label" for="jenisUsaha">Restoran</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Distributor" required>
                                <label class="form-check-label" for="jenisUsaha">Distributor</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Ecommerce" required>
                                <label class="form-check-label" for="jenisUsaha">E-commerce</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Kafe" required>
                                <label class="form-check-label" for="jenisUsaha">Kafe</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="FoC" required>
                                <label class="form-check-label" for="jenisUsaha">FoC</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="QSR" required>
                                <label class="form-check-label" for="jenisUsaha">QSR</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Katering" required>
                                <label class="form-check-label" for="jenisUsaha">Katering</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Cabang" required>
                                <label class="form-check-label" for="jenisUsaha">Cabang</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Supermarket" required>
                                <label class="form-check-label" for="jenisUsaha">Supermarket</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Other" required>
                                <label class="form-check-label" for="jenisUsaha">Other</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="formRegistrasi.informasiBisnis.jenisUsaha"
                                    class="me-2 form-check-input" type="radio" value="Toko" required>
                                <label class="form-check-label" for="jenisUsaha">Toko</label>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">Tahun Operasi*</th>
                        <td colspan="1">
                            Tahun
                        </td>
                        <td colspan="2">
                            <input v-model="formRegistrasi.informasiBisnis.tahunOperasi" class="w-100 form-control"
                                type="text" placeholder="Misal: 2022" required>
                        </td>
                        <td colspan="1">
                            Bulan
                        </td>
                        <td colspan="2">
                            <input v-model="formRegistrasi.informasiBisnis.bulanOperasi" class="w-100 form-control"
                                type="text" placeholder="Misal: 03" required>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">Nama Outlet*</th>
                        <td class="align-middle" colspan="5">
                            <input v-model="formRegistrasi.informasiBisnis.namaOutlet" class="w-100 form-control"
                                type="text"
                                placeholder="Nama Outlet (Untuk customer E-commerce tambahkan IG/FB/Website)" required>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Telf Outlet*</th>
                        <td class="align-middle" colspan="5">
                            <input v-model="formRegistrasi.informasiBisnis.nomorTelfonOutlet" class="w-100 form-control"
                                type="text" placeholder="No Telf/WA Outlet" required>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Alamat Outlet* <small class="text-secondary">(Alamat Pengiriman)</small></th>
                        <td class="align-middle" colspan="5">
                            <div class="d-flex flex-row justify-content-center mb-2">
                                <div>
                                    <input name="jenisPengiriman"
                                        v-model="formRegistrasi.informasiBisnis.jenisPengiriman"
                                        class="me-2 form-check-input" type="radio" value="Pengantaran" required>
                                    <label class="form-check-label me-4" for="jenisPengiriman">Pengantaran</label>
                                </div>
                                <div>
                                    <input name="jenisPengiriman"
                                        v-model="formRegistrasi.informasiBisnis.jenisPengiriman"
                                        class="me-2 form-check-input" type="radio" value="AmbilSendiri" required>
                                    <label class="form-check-label" for="jenisPengiriman">Ambil Sendiri</label>
                                </div>
                            </div>
                            <textarea class="form-control" v-model="formRegistrasi.informasiBisnis.alamatOutlet"
                                placeholder="Alamat Outlet/Toko/Tempat Jualan" required></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Kota/Kabupaten Outlet*</th>
                        <td class="align-middle" colspan="2">
                            <input v-model="formRegistrasi.informasiBisnis.kotaOutlet" class="w-100 form-control"
                                type="text" placeholder="Kota atau Kabupaten Lokasi Outlet" required>
                        </td>
                        <th scope="row">Delivery Route </br><small class="text-secondary">(Rute Pengiriman)</small>*
                        </th>
                        <td class="align-middle" colspan="2">
                            <select v-model="formRegistrasi.informasiBisnis.rutePengiriman" class="w-100 form-select"
                                required>
                                <option disabled value="">Pilih salah satu rute</option>
                                <option>Makassar</option>
                                <option>Makassar 1</option>
                                <option>Makassar 2</option>
                                <option>Makassar 3</option>
                                <option>Makassar 4</option>
                                <option>Makassar 5</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary w-sm-100" type="submit">Registrasi Customer</button>
        </form>


    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formRegistrasi = reactive({
    informasiUmum: {
        namaPerusahaan: '',
        nomorNPWP: '',
        statusPKP: '',
        nomorTelfon: '',
        nomorFax: '',
        alamat: '',
        tempatKota: '',
        tempatPOBox: ''
    },
    informasiBisnis: {
        jenisUsaha: '',
        tahunOperasi: '',
        bulanOperasi: '',
        namaOutlet: '',
        jenisPengiriman: '',
        alamatOutlet: '',
        nomorTelfonOutlet: '',
        kotaOutlet: '',
        rutePengiriman: 'Makassar'
    }
});


const submitFormRegistrasi = () => {
    const formRegistrasiJson = JSON.stringify(formRegistrasi)
    console.log(
        formRegistrasiJson
    )
    console.log(
        JSON.parse(formRegistrasiJson)
    )

}

</script>

<style lang="sass" scoped>

</style>