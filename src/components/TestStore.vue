<template>
    <div class="test">
        <ul>
            <li v-for="item in goods" :key="item.id">
                <p>名称：{{item.name}}</p>
                <p>价格：￥{{item.price}}</p>
                <div>
                    <span class="reduce s-oper" @click="reduce_num(item.id)">-</span>
                    <span>{{item.num}}</span>
                    <span class="add s-oper" @click="add_num(item.id)">+</span>
                </div>
            </li>
        </ul>
        <div>
            <p>合计：{{totalPrice}}</p>
            <p>总数：{{totalNum}}</p>
        </div>
    </div>
</template>

<script>
    import  { mapState } from 'vuex'
    export default {
        name: "TestStore",
        data () {
            return {
                // goods:this.$store.state.test.goods,
                // totalNum: this.$store.state.test.totalNum
            }
        },
        created (){
        //    eslint-disable-next-line
            console.log(this.$store.state)

        // eslint-disable-next-line

        },
        computed:{
            ...mapState({
                goods:(state) => state.test.goods,
                totalPrice:(state) => state.test.totalPrice,
                totalNum:(state) => state.test.totalNum
            })
        },
        methods:{
            // ...mapMutations([
            //     'ADD_CART',
            //     'REDUCE_CART'
            // ]),
            add_num(id){
                this.$store.commit('ADD_CART',id)
                //    eslint-disable-next-line
                console.log(this.$store.state.test.totalNum)
            },
            reduce_num(id){
                this.$store.commit('REDUCE_CART',id)
            }
        }
    }
</script>

<style scoped>
.s-oper{
    display: inline-block;
    padding:8px 10px;
    border:1px solid #dfdfdf;
    margin:0 8px;
}
</style>