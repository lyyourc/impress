<template>
<div class="explore">
  <div class="boxes" :style="{ height: geometry.containerHeight + 'px' }">
    <div class="box"
      v-for="(index, box) in geometry.boxes"
      :style="{
        width: `${box.width}px`,
        height: `${box.height}px`,
        top: `${box.top}px`,
        left: `${box.left}px`,
      }"
    >
      <img :src="explorePhotos[index].url">
  </div>
</div>
</template>

<script>
import { getExplorePhotosAction } from '../../vuex/explore/explore.actions'

export default {
  vuex: {
    getters: {
      explorePhotos: ({ explore }) => explore.explorePhotos,
      geometry: ({ explore }) => explore.geometry,
    },
    actions: {
      getExplorePhotosAction,
    },
  },
  created () {
    this.getExplorePhotosAction()
  },
}
</script>

<style>
.explore {
  background: #EEE;
}

.boxes {
  position: relative;
  width: 1060px;
  margin: auto;
}

.box {
  position: absolute;
}

.box img {
  width: 100%;
  height: 100%;
}
</style>