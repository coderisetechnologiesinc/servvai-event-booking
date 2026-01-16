<script setup>
import { ref } from 'vue'
import { generateIframeEmbedCode } from '@/utilities'

const showModal = ref(false)
const iframeCode = ref('')

async function openEmbedModal() {
  iframeCode.value = await generateIframeEmbedCode()
  showModal.value = true
}

function copyCode() {
  navigator.clipboard.writeText(iframeCode.value)
}
</script>
<template>
  <button class="btn-primary" @click="openEmbedModal">Get Embed Code</button>

  <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 w-[90%] max-w-3xl relative shadow-xl">
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-black"
        @click="showModal = false"
      >
        ✕
      </button>

      <h2 class="text-xl font-semibold mb-4">Embed Code</h2>

      <textarea
        readonly
        class="w-full h-64 p-3 font-mono text-sm border rounded bg-gray-50"
        :value="iframeCode"
      ></textarea>

      <button
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        @click="copyCode"
      >
        Copy Code
      </button>
    </div>
  </div>
</template>
<style scoped>
.btn-primary {
  padding: 8px 16px;
  background: #2563eb;
  color: white;
  border-radius: 6px;
  font-weight: 500;
}
</style>
