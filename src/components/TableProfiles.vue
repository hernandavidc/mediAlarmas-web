<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="align-middle">#</th>
          <th class="align-middle">Perfil</th>
          <th class="text-center align-middle">Medicamentos</th>
          <th class="text-center align-middle">Proximos vencimientos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in currentPageUsers" :key="user.id">
          <td class="align-middle">{{ index + 1 }}</td>
          <td class="align-middle">{{ user.name }}</td>
          <td class="text-center align-middle">{{ user.cantMedicines }}</td>
          <td class="text-center align-middle">{{ user.porxExpirations }}</td>
          <td class="text-center">
            <button class="btn btn-primary">Ver alarmas</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between align-items-center">
      <p>
        {{ currentPage }} - {{ perPage }} de {{ totalPages }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
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
      return Math.ceil(this.users.length / this.perPage);
    },
    currentPageUsers() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.users.slice(start, end);
    },
  },
};
</script>

<style scoped>
  .btn-primary{
    background: #7749F8;
    border-color: #7749F8;
  }
</style>