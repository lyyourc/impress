<template>
<div class="explore">
  <div class="boxes" :style="{ height: geometry.containerHeight + 'px' }">
    <div class="box"
      v-for="(i, box) in geometry.boxes"
      :style="{
        width: `${box.width}px`,
        height: `${box.height}px`,
        top: `${box.top}px`,
        left: `${box.left}px`,
      }"
    >
      <img :src="photos[i].url">

      <footer>
        <section class="footer-section">
          <p> {{ photos[i].name}} </p>
        </section>

        <section class="footer-section">
          <div class="likes-section">
            <span class="likes-number">
              {{ photos[i].likes || 0}}
            </span>
            <icon class="likes-btn" name="heart"
              @click="likePhotoAction(!!user, photos[i].id, photos[i].liked)"
              :class="{ 'liked': photos[i].liked }"
            ></icon>
          </div>
        </section>
      </footer>
  </div>
</div>
</template>

<script>
import Icon from 'vue-awesome/src/components/Icon.vue'
import { getCurrentUser } from '../../vuex/getters'
import {
  getExplorePhotosAction,
  likePhotoAction,
} from '../../vuex/explore/explore.actions'

export default {
  vuex: {
    getters: {
      photos: ({ explore }) => explore.explorePhotos,
      geometry: ({ explore }) => explore.geometry,
      user: getCurrentUser,
    },
    actions: {
      getExplorePhotosAction,
      likePhotoAction,
    },
  },
  created () {
    this.getExplorePhotosAction()
  },
  components: {
    Icon,
  },
}
</script>

<style scoped>
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

footer {
  display: none;

  position: absolute;
  bottom: 0;
  left: 0;

  color: #fff;
  width: 100%;
  padding: .5rem 1rem;
}

.box:hover footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, .05) 10%, 
    rgba(0, 0, 0, .2) 40%,
    rgba(0, 0, 0, .4) 70%,
    rgba(0, 0, 0, .6) 100%
  );
}

footer p {
  margin: 0;
}

.likes-section {
  display: flex;
  align-items: center;
}
.likes-number {
  margin-right: .5rem;
}
.likes-btn {
  cursor: pointer;
}

.liked {
  color: rgba(255, 0, 0, .8);
}
</style>