<template>
    <div class=".container-fluid">
        <form action="">
            <table class="table table-bordered table-responsive rounded-12">
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
                            <input v-model="namaPerusahaan" class="form-control" type="text"
                                placeholder="Isi dengan nama di KTP jika tidak ada NPWP">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">No. NPWP*</th>
                        <td class="align-middle" colspan="3">
                            <input v-model="nomorNPWP" class="form-control" type="text"
                                placeholder="Isi dengan nama di KTP jika tidak ada NPWP">
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
                            <input v-model="nomorTelfon" class="form-control" type="text"
                                placeholder="Nomor telefon perusahaan">
                        </td>
                        <td>Fax</td>
                        <td>
                            <input v-model="nomorFax" class="form-control" type="text"
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
                            <input v-model="tempatKota" class="form-control" type="text"
                                placeholder="Isi dengan nama di KTP jika tidak ada NPWP">
                        </td>
                        <td class="">
                            PO Box
                        </td>
                        <td class="">
                            <input v-model="tempatPOBox" class="form-control" type="text" placeholder="Jika ada">
                        </td>


                    </tr>

                    <!-- SECTION: INFORMASI BISNIS -->
                    <tr>
                        <th colspan="6" scope="row" class="text-center table-light">
                            Informasi Bisnis
                        </th>
                    </tr>
                    <tr>
                        <th scope="row" colspan="1">Tahun Operasi*</th>
                        <td colspan="1">
                            Tahun
                        </td>
                        <td colspan="1">
                            Tahun
                        </td>
                        <td colspan="1">
                            Tahun
                        </td>
                        <td colspan="1">
                            Tahun
                        </td>
                        <td colspan="1">
                            Tahun
                        </td>

                    </tr>


                    <tr>
                        <th scope="row">Tahun Operasi*</th>
                        <td colspan="1">
                            Tahun
                        </td>
                        <td colspan="2">
                            <input v-model="tahunOperasi" class="form-control" type="text"
                                placeholder="Isi dengan nama di KTP jika tidak ada NPWP">
                        </td>
                        <td colspan="1">
                            Bulan
                        </td>
                        <td colspan="2">
                            <input v-model="bulanOperasi" class="form-control" type="text" placeholder="01">
                        </td>

                    </tr>

                    <tr>
                        <th scope="row">Alamat*</th>
                        <td class="align-middle" colspan="4">
                            <textarea class=" form-control" v-model="alamat"
                                placeholder="Alamat sesuai KTP jika tak mempunyai NPWP"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle" colspan="4">
                            *Sesuai dengan yang tertera pada kartu NPWP
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Kota*</th>
                        <td class="align-middle">
                            <input v-model="tempatKota" class="form-control" type="text"
                                placeholder="Isi dengan nama di KTP jika tidak ada NPWP">
                        </td>
                        <td class="text-center align-middle">
                            PO Box
                        </td>
                        <td class="align-middle">
                            <input v-model="tempatPOBox" class="form-control" type="text" placeholder="Jika ada">
                        </td>


                    </tr>


                </tbody>
            </table>
        </form>

    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>

</style>