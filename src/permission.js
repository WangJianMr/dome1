import router from "./router/index"
import store  from "./store"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({ 
    showSpinner: true,
    easing:'ease',
    speed:500,
    trickleSpeed:200,
    minimum:0.3
})
router.beforeEach((to,from,next)=>{
    const token = store.getters.TOKEN
    NProgress.start()
    if(token){
        if(to.path=='/login'){
            next(from.path)
        }else{
            next()
        }
    }else{
        if(to.path=='/login'){
            next()
        }else{
            next('/login')
        }
    }
    NProgress.done();
})