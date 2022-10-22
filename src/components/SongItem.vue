<template>
  <van-cell :title="name" :label="author + '  ' + name" @click="$router.push({ path: '/comment', query: { id: id } })">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" class="search-icon" @touchstart="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String, //歌名
    author: String, //作者
    id: Number, //歌曲id
  },
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id,
        },
      })
    },
  },
}
</script>

<style scoped>
.search-icon {
  font-size: 24px;
  line-height: inherit;
}
</style>
