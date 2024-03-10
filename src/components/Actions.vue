<script>
export default {
  data() {
    return {
      rotation: "rotate(0deg)",
      isOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
      this.rotation = this.isOpen
        ? "rotate(45deg)"
        : "rotate(0deg)";
      this.updateFillColor();
    },
  },
};
</script>

<template>
  <div>
    <div class="icon-container clickable">
      <div class="position-relative">
        <transition name="fade">
          <div class="buttons-slot" v-if="isOpen">
            <slot></slot>
          </div>
        </transition>
      </div>
      <svg
        @click="toggleOpen"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ transform: rotation }"
      >
        <rect x="13.6365" width="2.72727" height="30" :fill="isOpen ? '#C33E2E' : 'white'" />
        <rect y="13.6362" width="30" height="2.72727" :fill="isOpen ? '#C33E2E' : 'white'" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.icon-container{
  position: absolute;
  padding: 15px;
  background: #89CFF0;
  right: 62px;
  bottom: 40px;
  border-radius: 100px;
}
.icon-container svg, .icon-container .buttons-slot{
  transition: all 300ms ease-out;
}
.buttons-slot{
  position: absolute;
  width: max-content;
  right: calc(100% + 35px);
  bottom: -34px;
}
:deep(.buttons-slot > *) {
  margin-left: 18px;
}
:deep(.buttons-slot .btn-primary) {
  background: #7749F8;
  border-color: #7749F8;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>