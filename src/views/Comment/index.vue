<template>
  <div>
    <van-nav-bar title="评论" fixed left-arrow @click-left="$router.back()" />
    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item.id">
          <template>
            <div class="wrap">
              <div class="img_wrap">
                <img :src="item.user.avatarUrl" alt="" />
              </div>
              <div class="content_wrap">
                <div class="header_wrap">
                  <div class="info_wrap">
                    <p>{{item.user.nickname}}</p>
                    <p>{{item.time}}</p>
                  </div>
                  <div>{{ item.likedCount }}点赞</div>
                </div>
                <div class="footer_wrap">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </template>
        </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>

</template>

<script>
import { getCommentListAPI } from '@/api/index'
export default {
  data() {
    return {
      list: [],
      isLoading: false,
      finished:false, //加载状态（底部）
      loading: false, // 如果设置为true list就不显示数据
      page:0 //当前请求页数
    }
  },
  methods: {
  async onRefresh() {  //下拉刷新
      this.list = []
      this.page = 1
      this.getList()
    },
   async onLoad(){
      this.page++
      this.getList()
    },
    async getList() {
      const res = await getCommentListAPI({
        id: this.$route.query.id,
        limit: 20,
        offset: (this.page - 1) * 20
      })
      // this.list = [...this.list, ...res.data.comments]
      res.data.comments.forEach(item => this.list.push(item))
      //  console.log(res);
      // this.list = res.data.comments
      // 加载过程中isLoading改为了true
      this.isLoading = false
      this.loading = false
    }
  },
 
  }

</script>

<style lang="less" scoped>
.main {
  padding-top: 46px;
}

.wrap {
  display: flex;
}

.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.266667rem;
}

.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.info_wrap {
  flex: 1;
}

.content_wrap {
  flex: 1;
}

.header_wrap {
  display: flex;
}

.info_wrap p:first-child {
  font-size: 0.373333rem;
  color: #666;
}

.info_wrap p:last-of-type {
  font-size: 0.24rem;
  color: #999;
}

.header_wrap div:last-of-type {
  font-size: 0.293333rem;
  color: #999;
}

.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>
