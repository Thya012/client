<template>
  <div>
    <div v-if="item.isHeadr" class="text-gray-600 font-bold my-4 uppercase">
      {{ item.title }}
    </div>
    <router-link
      v-else-if="!item.child"
      :to="{ name: item.link }"
      class="menu-item flex items-center p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md"
    >
      <span :class="item.icon" class="text-lg mr-3"></span>
      <span>{{ item.title }}</span>
    </router-link>
    <div v-else class="menu-group">
      <div
        class="menu-item flex items-center p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md cursor-pointer"
        @click="item.isOpen = !item.isOpen"
      >
        <span :class="item.icon" class="text-lg mr-3"></span>
        <span>{{ item.title }}</span>
        <span class="ml-auto" v-if="item.child">
          <i :class="item.isOpen ? 'icon-chevron-down' : 'icon-chevron-right'"></i>
        </span>
      </div>
      <div v-show="item.isOpen" class="ml-6 mt-2">
        <MenuItem
          v-for="(child, index) in item.child"
          :key="index"
          :item="child"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem", 
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu-item {
  transition: all 0.2s;
}
</style>
