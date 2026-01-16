<template>
  <div v-if="totalPages > 1" class="events-pagination-wrapper">
    <nav class="events-pagination" role="navigation" aria-label="Pagination">
      <button
        class="events-pagination__btn events-pagination__btn--prev"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
        aria-label="Previous page"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="events-pagination__numbers">
        <!-- First page -->
        <button
          v-if="showFirstPage"
          class="events-pagination__number"
          :class="{ 'events-pagination__number--active': currentPage === 1 }"
          @click="goToPage(1)"
        >
          1
        </button>

        <!-- Left ellipsis -->
        <span v-if="showLeftEllipsis" class="events-pagination__ellipsis">...</span>

        <!-- Visible pages around current -->
        <button
          v-for="page in centerPages"
          :key="page"
          class="events-pagination__number"
          :class="{ 'events-pagination__number--active': page === currentPage }"
          :aria-current="page === currentPage ? 'page' : undefined"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <!-- Right ellipsis -->
        <span v-if="showRightEllipsis" class="events-pagination__ellipsis">...</span>

        <!-- Last page -->
        <button
          v-if="showLastPage"
          class="events-pagination__number"
          :class="{ 'events-pagination__number--active': currentPage === totalPages }"
          @click="goToPage(totalPages)"
        >
          {{ totalPages }}
        </button>
      </div>

      <button
        class="events-pagination__btn events-pagination__btn--next"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
        aria-label="Next page"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="servv-widget-pagination">
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </nav>

    <div class="events-pagination__info">
      Showing {{ startRecord }}-{{ endRecord }} of {{ totalRecords }} events
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  totalRecords: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  maxVisiblePages: {
    type: Number,
    default: 3,
  },
})

const emit = defineEmits(['page-change'])

const centerPages = computed(() => {
  const pages = []
  const delta = Math.floor(props.maxVisiblePages / 2)

  let start = Math.max(2, props.currentPage - delta)
  let end = Math.min(props.totalPages - 1, props.currentPage + delta)

  if (props.currentPage <= delta + 1) {
    end = Math.min(props.totalPages - 1, props.maxVisiblePages + 1)
  }
  if (props.currentPage >= props.totalPages - delta) {
    start = Math.max(2, props.totalPages - props.maxVisiblePages)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const showFirstPage = computed(() => {
  return props.totalPages > 1
})

const showLastPage = computed(() => {
  return props.totalPages > 1
})

const showLeftEllipsis = computed(() => {
  return centerPages.value.length > 0 && centerPages.value[0] > 2
})

const showRightEllipsis = computed(() => {
  return (
    centerPages.value.length > 0 &&
    centerPages.value[centerPages.value.length - 1] < props.totalPages - 1
  )
})

const startRecord = computed(() => {
  return (props.currentPage - 1) * props.pageSize + 1
})

const endRecord = computed(() => {
  return Math.min(props.currentPage * props.pageSize, props.totalRecords)
})

function goToPage(page) {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('page-change', page)
  }
}
</script>

<style scoped>
.events-pagination-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 0;
  padding: 16px 0;
}

.events-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}

.events-pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #d7d3e5;
  border-radius: 50%;
  background: white;
  color: #818097;
  cursor: pointer;
  transition: all 0.2s;
}

.events-pagination__btn:hover:not(:disabled) {
  background: #f5f4f8;
  border-color: #d7d3e5;
}

.events-pagination__btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  border-color: #e8e6ef;
}

.events-pagination__numbers {
  display: flex;
  gap: 4px;
  align-items: center;
}

.events-pagination__number {
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d7d3e5;
  border-radius: 50%;
  background: white;
  color: rgba(18, 22, 51, 0.5);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.events-pagination__number:hover {
  background: #f5f4f8;
  border-color: #d7d3e5;
}

.events-pagination__number--active {
  background: #d7d3e5;
  border-color: #d7d3e5;
  color: rgba(18, 22, 51, 0.8);
  font-weight: 600;
}

.events-pagination__number--active:hover {
  background: #ccc8dd;
  border-color: #ccc8dd;
}

.events-pagination__ellipsis {
  color: rgba(18, 22, 51, 0.5);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
}

.events-pagination__info {
  color: var(--color-text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

@media (max-width: 640px) {
  .events-pagination__btn,
  .events-pagination__number {
    min-width: 36px;
    height: 36px;
    font-size: 13px;
  }

  .events-pagination__info {
    font-size: 13px;
  }

  .events-pagination {
    gap: 6px;
  }

  .events-pagination__numbers {
    gap: 2px;
  }
  .servv-widget-pagination {
    width: 20px;
    height: 20px;
  }
}
</style>
