<template>
<nav class="setting-nav tabs">
  <div class="tab"
    v-for="(index, item) in items"
    v-link="{ path: `/setting${item.route}` }"
  >
    {{ item.name }}
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'Photo', route: '/photo' },
        { name: 'Album', route: '/album' },
        { name: 'Favourite', route: '/favourite' },
      ],
    }
  },
}
</script>

<style scoped>
.tabs {
  display: flex;
  border-bottom: 1px solid #D7DBDD;
  
  padding: 1.6rem 2rem;
}

.tab {
  cursor: pointer;
  padding: .5rem 3rem;
  margin: 0 1rem;
  color: #16A2D7;
  border-bottom: 2px solid transparent;
}

.tab.v-link-active,
.tab:hover {
  border-bottom-color: #4EBBE4;
}
</style>