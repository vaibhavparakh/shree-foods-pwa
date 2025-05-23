<template>
    <button v-bind="$attrs" :disabled="disabled"
        class="w-full bg-[#1d201f] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-black transition disabled:bg-gray-400">
        <slot />
    </button>
</template>
<script setup>
defineProps({
    disabled: Boolean,
})
</script>
