<template>
    <div>
        <p>fetch ki </p>
        <button @click="getCustomers">fetch api skrg</button>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref,computed,onMounted } from 'vue';

const currentPage = 1
const itemsPerPage = 10
const allItems = ref({})
const totalPages = Math.ceil(allItems.length / itemsPerPage)

// const startIndex = (currentPage - 1) * itemsPerPage
// const endIndex = startIndex + itemsPerPage
// const currentItems = allItems.slice(startIndex, endIndex)

const getCustomers = async () => {
    try {
        const res = await axios.get('/api/regcustomer/customers.php')
        allItems.value = res.data
        console.log(res.data)

        console.log(typeof (allItems))
    } catch (error) {
        console.log(error)
        throw error
    }
}




</script>

<style scoped>
p {
    color: black;
}
</style>
