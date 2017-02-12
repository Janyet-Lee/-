import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 拍卖组件
import Sessions from './components/Sessions/Sessions.vue';
// 当前排卖
import CurrentSessions from './components/Sessions/components/CurrentSessions.vue';
// 历史拍卖
import HistorySessions from './components/Sessions/components/HistorySessions.vue';
// 当前详情
import CurrentDetail from './components/Sessions/components/CurrentDetail.vue';
// 历史详情
import HistoryDetail from './components/Sessions/components/HistoryDetail.vue';
// 拍卖会介绍
import Introduction from './components/Sessions/components/Introduction.vue';
// 拍卖公司介绍
import AuctionOrgs from './components/Sessions/components/AuctionOrgs.vue';
// 专场介绍
import SpecialDetail from './components/Sessions/components/SpecialDetail.vue';

// 送拍界面
import SendAuction from './components/Sessions/components/SendAuction.vue';
// 全球代购
import GlobalPurchase from './components/Sessions/components/GlobalPurchase.vue';
// 搜索界面
import FullSearch from './components/common/FullSearch.vue';
// 拍品搜索
import GoodSearch from './components/common/components/GoodSearch.vue';
// 拍卖会搜索
import SessionSearch from './components/common/components/SessionSearch.vue';

// 推荐组件
import Recommend from './components/Recommend/Recommend.vue';
// 热门推荐
import HotRecommend from './components/Recommend/components/HotRecommend.vue';
// 即将开拍
import AboutToSell from './components/Recommend/components/AboutToSell.vue';
// 待拍展品
import WaitToShow from './components/Recommend/components/WaitToShow.vue';
// 即将开拍-书画
import Paintings from './components/Recommend/components/Paintings.vue';
// 即将开拍-古董
import Antique from './components/Recommend/components/Antique.vue';
// 即将开拍-书画详情页
import DetailPage from './components/Recommend/components/DetailPage.vue';

// 直播组件
import LiveShow from './components/LiveShow/LiveShow.vue';
// 当前直播
import PrensentShow from './components/LiveShow/components/PresentShow.vue';
// 历史直播
import HistoryShow from './components/LiveShow/components/HistoryShow.vue';

// 我界面
import My from './components/My/My.vue';
// 登录界面
import Login from './components/My/components/Login.vue';
// 关于我们
import About from './components/My/components/About.vue';


const routes = [
    // 拍卖部分的定义路由
    {
        path: "/sessions",
        component: Sessions,
        children: [
            { path: 'currentsessions', component: CurrentSessions },
            { path: 'historysessions', component: HistorySessions },
            { path: '/', redirect: '/sessions/currentsessions' },
        ]
    },

    { path: "/sessions/sendauction", component: SendAuction },
    { path: "/sessions/currentdetail", component: CurrentDetail },
    { path: "/sessions/historydetail", component: HistoryDetail },

    { path: "/sessions/currentdetail/introducton", component: Introduction },
    { path: "/sessions/historydetail/introducton", component: Introduction },

    { path: "/sessions/currentdetail/auctionorgs", component: AuctionOrgs },
    { path: "/sessions/historydetail/auctionorgs", component: AuctionOrgs },

    { path: "/sessions/currentdetail/specialdetail", component: SpecialDetail },
    { path: "/sessions/historydetail/specialdetail", component: SpecialDetail },

    {
        path: "/sessions/globalpurchase",
        component: GlobalPurchase,
        children: [
            { path: 'currentsessions', component: CurrentSessions },
            { path: 'historysessions', component: HistorySessions },
            { path: '/', redirect: '/sessions/globalpurchase/currentsessions' },
        ]

    },

    {
        path: "/sessions/fullsearch",
        component: FullSearch,
        children: [
            { path: 'goodsearch', component: GoodSearch },
            { path: 'sessionsearch', component: SessionSearch },
            { path: '/', redirect: '/sessions/fullsearch/goodsearch' },
        ]

    },

    // 推荐组件的定义路由
    {
        path: '/recommend',
        component: Recommend,
        children: [{ path: 'hotrecommend', component: HotRecommend }, 
                   { path: 'abouttosell', component: AboutToSell,
                    children: [
                        { path: 'paintings', component: Paintings }, 
                        { path: 'antique', component: Antique },
                        { path: "/", redirect: "paintings" },
                    ]
                }, 
                { path: 'waittoshow', component: WaitToShow },
                { path: "/", redirect: "abouttosell/paintings" },
        ]
    },

    // 直播组件的定义路由
    {
        path: '/liveshow',
        component: LiveShow,
        children: [
            { path: "prensentshow", component: PrensentShow }, 
            { path: "historyshow", component: HistoryShow },
            { path: "/", redirect: "prensentshow" },
        ]

    },
     { path: '/detailpage', component:DetailPage },
    
    // 我组件的路由
    { path: "/my", component: My },
    { path: '/my/login', component: Login },
    { path: '/my/about', component: About },


    { path: "/", redirect: '/sessions/currentsessions' }


];


export default new VueRouter({
    routes
});
