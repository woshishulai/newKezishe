import instance from "./index";
// 登录 
const loginAccount = async () => instance.get('Member/Logon/GetCaptchaImage?uuid=123456')
//请求数据 首页顶部分类导航的
const getCategoryList = () => instance.get('home/category/head')
//轮播
const getBannerList = () => instance.get('home/banner')
//新鲜
const getNewsList = () => instance.get('home/new')
//热门
const getHotList = () => instance.get('home/hot')
//热门品牌
const getPopularBrand = () => instance.get('home/brand?limit=5')
//下面分类大板块
const getGoodsList = () => instance.get('home/goods')
//下面分类大板块
const getSpecialList = () => instance.get('home/special')



//分类
const getCateList = (query) => instance.get(`category?id=${query}`)
//二级分类
const getSubCateList = (data) => instance.post(`category/goods/temporary`, data)



// 详情
const getDetailsList = (query) => instance.get(`/goods?id=${query}`,)
export { loginAccount }