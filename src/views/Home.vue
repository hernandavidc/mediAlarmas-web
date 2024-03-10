<script setup>
import { ref } from 'vue'

import Layout from '@/components/Layout.vue'; 
import TableProfiles from '@/components/TableProfiles.vue';
import TablePurchases from '@/components/TablePurchases.vue';
import Actions from '@/components/Actions.vue';

const profiles = ref([{
  name: 'Pepito Perez',
  cantMedicines: '3',
  porxExpirations: '1'
}])
const purchases = ref([{
  medicine: "Neosaldina 300 mg",
  date: "10/02/2024",
  cant: "10",
  total: "$85.000",
}])
</script>

<template>
  <Layout class="home">
    <div class="container mt-5">
      <div class="row">
        <div class="d-flex mb-4">
          <h1 class="mb-0 fs-28 fw-semibold me-3"
            style="text-wrap: nowrap;"
          >Perfiles ({{ profiles.length }})</h1>
          <div class="input-group mb-3">
            <span class="input-group-text bg-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_253_2407)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6612 15.6633C15.8005 15.5239 15.966 15.4132 16.148 15.3377C16.3301 15.2622 16.5253 15.2234 16.7225 15.2234C16.9196 15.2234 17.1148 15.2622 17.2969 15.3377C17.479 15.4132 17.6444 15.5239 17.7837 15.6633L23.5587 21.4383C23.8402 21.7196 23.9984 22.1011 23.9985 22.499C23.9987 22.8969 23.8407 23.2786 23.5595 23.5601C23.2782 23.8415 22.8966 23.9997 22.4987 23.9999C22.1008 24 21.7192 23.8421 21.4377 23.5608L15.6627 17.7858C15.5232 17.6465 15.4126 17.4811 15.3371 17.299C15.2616 17.1169 15.2228 16.9217 15.2228 16.7246C15.2228 16.5274 15.2616 16.3323 15.3371 16.1502C15.4126 15.9681 15.5232 15.8026 15.6627 15.6633H15.6612Z" fill="#152536"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 8.66659 17.7866 7.5938 17.372 6.59286C16.9574 5.59193 16.3497 4.68245 15.5836 3.91637C14.8175 3.15029 13.9081 2.5426 12.9071 2.12799C11.9062 1.71339 10.8334 1.5 9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 11.938 2.36919 14.0365 3.91637 15.5836C5.46354 17.1308 7.56196 18 9.75 18ZM19.5 9.75C19.5 12.3359 18.4728 14.8158 16.6443 16.6443C14.8158 18.4728 12.3359 19.5 9.75 19.5C7.16414 19.5 4.68419 18.4728 2.85571 16.6443C1.02723 14.8158 0 12.3359 0 9.75C0 7.16414 1.02723 4.68419 2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75Z" fill="#152536"/>
                </g>
                <defs>
                  <clipPath id="clip0_253_2407">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <input type="text" class="form-control" placeholder="Busca por nombre del perfil" aria-label="Busca por nombre del perfil">
          </div>
        </div>
        <TableProfiles 
          :users="profiles"
          :perPage="6"
        />
      </div>
      <div class="row">
        <h1 class=" mb-4 fs-28 fw-semibold mt-3"
          style="text-wrap: nowrap;"
        >Compras <span class="expiration">( 1 Medicamento proximo a vencimiento )</span></h1>
        <TablePurchases 
          :purchases="purchases"
          :perPage="6"
        />
      </div>
      <Actions>
        <button class="btn btn-primary fw-semibold">Agregar perfil</button>
        <button class="btn btn-primary fw-semibold">Crear alarma</button>
        <button class="btn btn-primary fw-semibold">Agregar dispositivo</button>
        <button class="btn btn-primary fw-semibold">Agregar compra</button>
      </Actions>
    </div>
  </Layout>
</template>

<style>
.expiration{
  font-size: 14px;
  color: #152536;
  font-weight: 400;
}
</style>
