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
                            <input v-model="namaPerusahaan" class="w-100 form-control " type="text"
                                placeholder="Isi dengan nama di KTP jika tidak ada NPWP">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">No. NPWP*</th>
                        <td class="align-middle" colspan="3">
                            <input v-model="nomorNPWP" class="w-100 form-control" type="text"
                                placeholder="Isi dengan NIK di KTP jika tidak ada NPWP">
                        </td>
                        <td colspan="3">
                            <div>
                                <input name="statusPKP" v-model="statusPKP" class="me-2 form-check-input" type="radio"
                                    value="PKP">
                                <label class="form-check-label" for="PKP">PKP</label>
                            </div>
                            <div>
                                <input name="statusPKP" v-model="statusPKP" class="me-2 form-check-input" type="radio"
                                    value="Non-PKP">
                                <label class="form-check-label" for="PKP">Non-PKP</label>
                            </div>

                        </td>

                    </tr>
                    <tr>
                        <th scope="row">No. Telf*</th>
                        <td class="align-middle" colspan="3">
                            <input v-model="nomorTelfon" class="w-100 form-control" type="text"
                                placeholder="Nomor telefon perusahaan">
                        </td>
                        <td>Fax</td>
                        <td>
                            <input v-model="nomorFax" class="w-100 form-control" type="text"
                                placeholder="Nomor fax perusahaan">
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">Alamat*</th>
                        <td class="align-middle" colspan="5">
                            <textarea class=" form-control" v-model="alamat"
                                placeholder="Alamat sesuai KTP jika tak mempunyai NPWP"></textarea>
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
                            <input v-model="tempatKota" class="w-100 form-control" type="text"
                                placeholder="Isi dengan kota di KTP jika tidak ada NPWP">
                        </td>
                        <td class="">
                            PO Box
                        </td>
                        <td class="">
                            <input v-model="tempatPOBox" class="w-100 form-control" type="text" placeholder="Jika ada">
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
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Hotel">
                                <label class="form-check-label" for="jenisUsaha">Hotel</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Pastry">
                                <label class="form-check-label" for="jenisUsaha">Pastry</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Manufaktur">
                                <label class="form-check-label" for="jenisUsaha">Manufaktur</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Restoran">
                                <label class="form-check-label" for="jenisUsaha">Restoran</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Distributor">
                                <label class="form-check-label" for="jenisUsaha">Distributor</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Ecommerce">
                                <label class="form-check-label" for="jenisUsaha">E-commerce</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Kafe">
                                <label class="form-check-label" for="jenisUsaha">Kafe</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="FoC">
                                <label class="form-check-label" for="jenisUsaha">FoC</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="QSR">
                                <label class="form-check-label" for="jenisUsaha">QSR</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Katering">
                                <label class="form-check-label" for="jenisUsaha">Katering</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Cabang">
                                <label class="form-check-label" for="jenisUsaha">Cabang</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class=" me-2 form-check-input"
                                    type="radio" value="Supermarket">
                                <label class="form-check-label" for="jenisUsaha">Supermarket</label>
                            </div>
                        </td>
                        <td colspan="1" width="15%">
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class="me-2 form-check-input" type="radio"
                                    value="Other">
                                <label class="form-check-label" for="jenisUsaha">Other</label>
                            </div>
                            <div>
                                <input name="jenisUsaha" v-model="jenisUsaha" class="me-2 form-check-input" type="radio"
                                    value="Toko">
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
                            <input v-model="tahunOperasi" class="w-100 form-control" type="text"
                                placeholder="Misal: 2022">
                        </td>
                        <td colspan="1">
                            Bulan
                        </td>
                        <td colspan="2">
                            <input v-model="bulanOperasi" class="w-100 form-control" type="text"
                                placeholder="Misal: 03">
                        </td>

                    </tr>

                    <tr>
                        <th scope="row">Nama Outlet*</th>
                        <td class="align-middle" colspan="5">
                            <input v-model="namaOutlet" class="w-100 form-control" type="text"
                                placeholder="Nama Outlet (Untuk customer E-commerce tambahkan IG/FB/Website)">
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">Telf Outlet*</th>
                        <td class="align-middle" colspan="5">
                            <input v-model="nomorTelfonOutlet" class="w-100 form-control" type="text"
                                placeholder="No Telf/WA Outlet">
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">Alamat Outlet* <small class="text-secondary">(Alamat Pengiriman)</small></th>
                        <td class="align-middle" colspan="5">
                            <div class="d-flex flex-row justify-content-center mb-2">
                                <div>
                                    <input name="jenisPengiriman" v-model="jenisPengiriman"
                                        class=" me-2 form-check-input" type="radio" value="Pengantaran">
                                    <label class="form-check-label me-4" for="jenisPengiriman">Pengantaran</label>
                                </div>
                                <div>
                                    <input name="jenisPengiriman" v-model="jenisPengiriman"
                                        class=" me-2 form-check-input" type="radio" value="AmbilSendiri">
                                    <label class="form-check-label" for="jenisPengiriman">Ambil Sendiri</label>
                                </div>
                            </div>
                            <textarea class=" form-control" v-model="alamatOutlet"
                                placeholder="Alamat Outlet/Toko/Tempat Jualan"></textarea>

                        </td>

                    </tr>
                    <tr>
                        <th scope="row">Kota/Kabupaten Outlet*</th>
                        <td class="align-middle" colspan="2">
                            <input v-model="kotaOutlet" class="w-100 form-control" type="text"
                                placeholder="Kota atau Kabupaten Lokasi Outlet">
                        </td>
                        <th scope="row">Delivery Route </br><small class="text-secondary">(Rute Pengiriman)</small>*
                        </th>
                        <td class="align-middle" colspan="2">
                            <select v-model="rutePengiriman" class="w-100 form-select">
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
import { ref } from 'vue';


const namaPerusahaan = ref('');
const nomorNPWP = ref('');
const statusPKP = ref('');
const nomorTelfon = ref('');
const nomorFax = ref('');
const alamat = ref('');
const tempatKota = ref('');
const tempatPOBox = ref('');

const jenisUsaha = ref('');
const tahunOperasi = ref('');
const bulanOperasi = ref('');
const namaOutlet = ref('');
const jenisPengiriman = ref('');
const alamatOutlet = ref('');
const nomorTelfonOutlet = ref('')
const kotaOutlet = ref('');
const rutePengiriman = ref('Makassar');

const submitFormRegistrasi = () => {
    console.log(
        namaPerusahaan.value,
        nomorNPWP.value,
        statusPKP.value,
        nomorTelfon.value,
        nomorFax.value,
        alamat.value,
        tempatKota.value,
        tempatPOBox.value,
        jenisUsaha.value,
        tahunOperasi.value,
        bulanOperasi.value,
        namaOutlet.value,
        jenisPengiriman.value,
        alamatOutlet.value,
        nomorTelfonOutlet.value,
        kotaOutlet.value,
        rutePengiriman.value
    )

}

</script>

<style lang="sass" scoped>

</style>