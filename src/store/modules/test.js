

const test ={
    state:{
        goods :[
            {
                id:0,
                name:'vivo-x20',
                price:1999.99,
                num:0
            },
            {
                id:1,
                name:'xiaomi',
                price:2000.00,
                num:0
            },
            {
                id:2,
                name:'meta',
                price:1888.88,
                num:0
            }
        ],
        totalPrice:0,
        totalNum:0
    },
    mutations:{
        ADD_CART: (state,id)=>{
            state.goods[id].num++
            state.totalNum++
            state.totalPrice= parseFloat((state.totalPrice+state.goods[id].price).toFixed(4))
            //eslint-disable-next-line
            console.log('add',state,state.totalPrice,state.totalNum)
        },
        REDUCE_CART: (state,id)=>{
            if(state.goods[id].num>0){
                state.goods[id].num--
                state.totalNum--
                state.totalPrice = parseFloat((state.totalPrice-state.goods[id].price).toFixed(4))
                //eslint-disable-next-line
                console.log('reduce',state)
            }

        }
    },
    actions:{
        // addCart({ commit },id){
        //     commit('ADD_CART',id)
        // },
        // reduceCart({ commit },id){
        //     commit('REDUCE_CART',id)
        // }
    },
    // getters:{
    //     goods_obj:state => state.goods,
    //     goods_length:state => state.goods.length
    // }
}
export default test
