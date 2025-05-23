<template>
    <div class="min-h-screen flex flex-col bg-[#1d201f]">
        <div class="flex-1 flex flex-col items-center justify-center relative">
            <!-- Pattern background (optional, use an SVG or Tailwind pattern) -->
            <div class="absolute inset-0 opacity-30 pointer-events-none z-0">
                <!-- You can add your custom SVG pattern here, or just a bg color -->
            </div>
            <div class="z-10 flex flex-col items-center">
                <Logo />
                <div class="mt-12 bg-white w-full rounded-t-3xl px-8 py-12 shadow-lg max-w-md mx-auto">
                    <h2 class="text-3xl font-bold text-[#1d201f] text-center">Login</h2>
                    <p class="text-gray-500 text-center mt-2 mb-8">Sign in to continue.</p>
                    <form @submit.prevent="onSubmit">
                        <Input v-model="mobile" type="text" placeholder="Enter mobile number" maxlength="10"
                            class="mb-6" />
                        <Button type="submit" :disabled="!validMobile">Continue</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Logo from '@/components/Logo.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const mobile = ref('')

const validMobile = computed(() => /^[6-9]\d{9}$/.test(mobile.value))

function onSubmit() {
    if (!validMobile.value) return
    // Call API or navigate to next page
    alert('Continue with: ' + mobile.value)
}
</script>