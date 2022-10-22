// 统一出口
import { recommendMusic,hotMusic } from '@/api/Home'
import { hotSearch,searchResult } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'
import { getCommentList } from '@/api/Comment'
export const recommendMusicAPI = recommendMusic //把网络请求方法拿过来 导出
export const hotMusicAPI = hotMusic //把网络请求方法拿过来 导出
export const hotSearchAPI = hotSearch  //热搜
export const searchResultAPI = searchResult  //热搜
export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById
export const getCommentListAPI = getCommentList