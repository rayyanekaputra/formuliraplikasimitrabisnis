<template>
    <div>
        <p>total banyak {{ totalCustomers }} </p>
        <ul>
            <li v-for="(cust, index) in currentCustomersRange" :key="cust.bp_code">
                <p>{{index}}) Customer {{cust.bp_code}}: {{ cust }}</p>
            </li>
        </ul>
        <button class="btn btn-primary" @click="prevCustomers">
            Prev
        </button>
        <button class="btn btn-primary" @click="nextCustomers">
            Next
        </button>

    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

// DEFINITIONS
const currentPage = ref(1)
const customersPerPage = 10
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
    return Math.ceil(allCustomers.length / customersPerPage)
})
const currentCustomersRange = computed(() => {
    const start = (currentPage.value - 1) * customersPerPage
    const end = start + customersPerPage
    const rangedCustomers = allCustomers.value.slice(start, end)
    console.log(rangedCustomers)
    return rangedCustomers
})

//LOGIC: Next and Prev Range
const nextCustomers = () => currentPage.value++
const prevCustomers = () => currentPage.value--

</script>

<style scoped>
p {
    color: black;
}
</style>
