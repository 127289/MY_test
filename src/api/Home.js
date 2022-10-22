import  request  from "@/utils/request";

// 封装网络请求方法
// 推荐歌单
export const recommendMusic = params => request({
  url:'/personalized',
  params
})
// 最新音乐
export const hotMusic = params => request({
  url:'/personalized/newSong',
  params
})