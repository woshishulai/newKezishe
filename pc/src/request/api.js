import instance from "./index";
//请求数据 首页顶部分类导航的
export const getCategoryList =()=>instance.get('home/category/head')
//轮播
export const getBannerList =()=>instance.get('home/banner')
//新鲜
export const getNewsList =()=>instance.get('home/new')
//热门
export const getHotList =()=>instance.get('home/hot')
//热门品牌
export const getPopularBrand =()=>instance.get('home/brand?limit=5')
//下面分类大板块
export const getGoodsList=()=>instance.get('home/goods')
//下面分类大板块
export const getSpecialList=()=>instance.get('home/special')



//分类
export const getCateList=(query)=>instance.get(`category?id=${query}`)
//二级分类
export const getSubCateList=(data)=>instance.post(`category/goods/temporary`,data)



// 详情
export const getDetailsList=(query)=>instance.get(`/goods?id=${query}`,)