<template>
  <div>
    <van-search shape="round" v-model="searchValue" placeholder="请输入搜索关键词" />
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <ul class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <li class="hot_item" v-for="(item, index) in hotList" :key="index" @click="btn(item.first)">{{ item.first }}</li>
      </ul>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <SongItem v-for="item in resultList" :key="item.id"
      :name="item.name"
      :author="item.artists[0].name"
      :id="item.id"
      ></SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from '@/api/index'
import SongItem from '@/components/SongItem.vue'
export default {
  data() {
    return {
      searchValue: '',
      hotList: [], // 热搜关键字
      resultList: [],
      timer: null, //保存定时器
    }
  },
  components: {
    SongItem
  },
  async created() {
    const res = await hotSearchAPI()
    console.log(res);
    this.hotList = res.data.result.hots
  },
  methods: {
    async btn(str) {
      this.searchValue = str // 点击关键字赋予 给输入框显示
      const res = await searchResultAPI({
          type: 1,
          keywords: this.searchValue,
        })
        console.log(res);
        this.resultList = res.data.result.songs
        setTimeout(() => {
            clearTimeout(this.timer)
        }); // 防止下面请求再次执行
    },

  },
  watch: {
    searchValue(val) {
      clearTimeout(this.timer) // 防止输入框空还显示请求回来的数据 保证最后一次网络请求定时器关闭
      if (val.length === 0) return (this.resultList = [])
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        })
        // console.log(res);
        this.resultList = res.data.result.songs
      }, 2000)
    },
  },
}
</script>

<style scoped lang="less">
// 修改 vant 组件 的类名可以找到类名 用deep覆盖
// deep控制scoped加入的随意属性，放到选择器前面，确保能够选中组件内的标签类名
/deep/.van-field__control {
  font-size: 14px;
}

// 搜索容器样式
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
