<script>
export default {
  props: {
    medicines: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.medicines.length / this.perPage);
    },
    currentPageMedicines() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.medicines.slice(start, end);
    },
  },
};
</script>

<template>
  <div>
    <table class="table table-bordered mb-4">
      <thead>
        <tr>
          <th class="align-middle">Medicamento</th>
          <th class="align-middle">Porximos a vencer</th>
          <th class="text-center align-middle">Cantidades</th>
          <th class="align-middle">Comentario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(medicine, index) in currentPageMedicines" :key="index">
          <td class="align-middle">{{ medicine.name }}</td>
          <td class="align-middle">{{ medicine.expire }}</td>
          <td class="text-center align-middle">{{ medicine.cant }}</td>
          <td class="align-middle">{{ medicine.comment }}</td>
          <td class="">
            <span class="clickable me-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#E9ECEF"/>
                <path d="M25.1574 5.3335C24.4346 5.3335 23.7266 5.61375 23.1809 6.1595L13.8293 15.4816L13.6228 15.6881L13.5638 15.9831L12.9148 19.2871L12.6198 20.6736L14.0063 20.3786L17.3103 19.7296L17.6053 19.6706L17.8118 19.4641L27.1339 10.1125C28.2217 9.02471 28.2217 7.24732 27.1339 6.1595C26.5882 5.61375 25.8802 5.3335 25.1574 5.3335ZM25.1574 7.16251C25.3786 7.16251 25.5962 7.27682 25.8064 7.48701C26.2268 7.90739 26.2268 8.36464 25.8064 8.78502L16.6613 17.9301L15.0388 18.2546L15.3633 16.6321L24.5084 7.48701C24.7186 7.27682 24.9361 7.16251 25.1574 7.16251ZM5.33325 9.08002V27.9602H24.2134V15.5111L22.3254 17.3991V26.0721H7.22127V10.968H15.8943L17.7823 9.08002H5.33325Z" fill="#717171"/>
              </svg>
            </span>
            <span class="clickable">
              <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="34" height="34" rx="7" fill="#E9ECEF"/>
                <rect x="1" y="1" width="34" height="34" rx="7" stroke="white" stroke-width="2"/>
                <rect x="21.7742" y="12" width="1" height="11" transform="rotate(44.6909 21.7742 12)" fill="#C33E2E"/>
                <rect x="14.7034" y="12.0381" width="11" height="1" transform="rotate(44.6909 14.7034 12.0381)" fill="#C33E2E"/>
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-end align-items-center">
      <p class="text-pagination fw-semibold mb-0 me-4">
        {{ currentPage }} - {{ perPage }} de {{ totalPages }}
      </p>
      <nav aria-label="Page navigation example">
        <ul class="pagination mb-0">
          <li class="page-item">
            <a class="page-link" href="#">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3539 1.64592C11.4005 1.69236 11.4374 1.74754 11.4626 1.80828C11.4878 1.86903 11.5008 1.93415 11.5008 1.99992C11.5008 2.06568 11.4878 2.13081 11.4626 2.19155C11.4374 2.2523 11.4005 2.30747 11.3539 2.35392L5.70692 7.99992L11.3539 13.6459C11.4478 13.7398 11.5005 13.8671 11.5005 13.9999C11.5005 14.1327 11.4478 14.26 11.3539 14.3539C11.26 14.4478 11.1327 14.5005 10.9999 14.5005C10.8671 14.5005 10.7398 14.4478 10.6459 14.3539L4.64592 8.35392C4.59935 8.30747 4.56241 8.2523 4.5372 8.19155C4.512 8.1308 4.49902 8.06568 4.49902 7.99992C4.49902 7.93415 4.512 7.86903 4.5372 7.80828C4.56241 7.74754 4.59935 7.69236 4.64592 7.64592L10.6459 1.64592C10.6924 1.59935 10.7475 1.56241 10.8083 1.5372C10.869 1.512 10.9342 1.49902 10.9999 1.49902C11.0657 1.49902 11.1308 1.512 11.1916 1.5372C11.2523 1.56241 11.3075 1.59935 11.3539 1.64592Z" fill="#ADB5BD"/>
              </svg>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64592 1.64592C4.69236 1.59935 4.74754 1.56241 4.80828 1.5372C4.86903 1.512 4.93415 1.49902 4.99992 1.49902C5.06568 1.49902 5.13081 1.512 5.19155 1.5372C5.2523 1.56241 5.30747 1.59935 5.35392 1.64592L11.3539 7.64592C11.4005 7.69236 11.4374 7.74754 11.4626 7.80828C11.4878 7.86903 11.5008 7.93415 11.5008 7.99992C11.5008 8.06568 11.4878 8.1308 11.4626 8.19155C11.4374 8.2523 11.4005 8.30747 11.3539 8.35392L5.35392 14.3539C5.26003 14.4478 5.13269 14.5005 4.99992 14.5005C4.86714 14.5005 4.7398 14.4478 4.64592 14.3539C4.55203 14.26 4.49929 14.1327 4.49929 13.9999C4.49929 13.8671 4.55203 13.7398 4.64592 13.6459L10.2929 7.99992L4.64592 2.35392C4.59935 2.30747 4.56241 2.2523 4.5372 2.19155C4.512 2.13081 4.49902 2.06568 4.49902 1.99992C4.49902 1.93415 4.512 1.86903 4.5372 1.80828C4.56241 1.74754 4.59935 1.69236 4.64592 1.64592Z" fill="#ADB5BD"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
  .btn-primary{
    background: #7749F8;
    border-color: #7749F8;
  }
  .active>.page-link, .page-link.active {
    color: #152536;
    border-color: #F5F5DC;
    background-color: #F5F5DC;
  }
  .text-pagination{
    color: #6C757D;
  }
</style>