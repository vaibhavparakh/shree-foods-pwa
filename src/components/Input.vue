<template>
    <input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1d201f] text-gray-700 text-base placeholder-gray-400" />
</template>
<script setup>
defineProps(['modelValue'])
</script>
