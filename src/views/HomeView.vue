<template>
    <div>
        <p>total banyak {{ totalCustomers }} </p>
        <ul>
            <li v-for="(cust, index) in currentCustomersRange" :key="cust.bp_code">
                <p>{{ cust.bp_code }}: {{ cust.date_input }} {{ cust.nama_outlet }} {{ cust.sales }} {{ cust.nama_ar }}</p>
            </li>
        </ul>
        <button class="btn btn-primary" :class="{ 'disabled': currentPage === 1 }" @click="prevCustomers">
            Prev
        </button>
        <button class="btn btn-primary" :class="{ 'disabled': currentPage === totalPages }" @click="nextCustomers">
            Next
        </button>

    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

// DEFINITIONS
const currentPage = ref(1)
const customersPerPage = 20
const allCustomers = ref([])

//DATA: GET to API
onMounted(async () => {
    try {
        const res = await axios.get('/api/regcustomer/customers.php')
        allCustomers.value = res.data
        // console.log(res.data)

    } catch (error) {
        console.log(error)
        throw error
    }
})

//LOGIC: Limit 10 Customers per Page
const totalCustomers = computed(() => {
    return allCustomers.value.length
})
const totalPages = computed(() => {
    return Math.ceil(allCustomers.value.length / customersPerPage)
})

const startPage = computed(() => {
    return (currentPage.value - 1) * customersPerPage
})

const endPage = computed(() => {
    return startPage.value + customersPerPage
})

const currentCustomersRange = computed(() => {
    const rangedCustomers = allCustomers.value.slice(startPage.value, endPage.value)
    console.log(rangedCustomers)
    return rangedCustomers
})


//LOGIC: Next and Prev Range
const nextCustomers = () => currentPage.value !== totalPages && currentPage.value++;
const prevCustomers = () => currentPage.value !== 1 && currentPage.value--;


</script>

<style scoped>
p {
    color: black;
}
</style>
