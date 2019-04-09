<template>
    <div class="classs-list ci-block">
        <el-form :inline="true" :model="searchForm" class="form" size="small">
            <el-form-item label="班级选择：">
                <el-select v-model="searchForm.num_code" placeholder="请输入内容" filterable clearable @change="handleChange">
                    <el-option
                        v-for="item in classSelectList"
                        :key="item.class_id"
                        :label="item.num_code"
                        :value="item.num_code"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-table :data="list">
            <el-table-column
                prop="num_code"
                width="150px"
                label="班级编号"
            >
            </el-table-column>
            <el-table-column
                    prop="course_name"
                    label="课程名称">
            </el-table-column>
            <el-table-column
                    prop="number_student"
                    width="80px"
                    label="学生人数">
            </el-table-column>
            <el-table-column
                    width="150px"
                    prop="course_time"
                    label="上课时间">
            </el-table-column>
            <el-table-column
                    prop="last_lesson_name"
                    label="课程进度(上节课)">
            </el-table-column>
            <el-table-column
                    width="100px"
                    label="操作">
                <template slot-scope="scope">
                    <el-button
                            type="text"
                            @click="handleViewItem(scope.row)">
                        进入班级
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="ci-text-right" v-if="total">
            <el-pagination
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    :page-size="limit"
                    :total="total"
                    :current-page.sync="page"
                    @current-change="handleChangePage"
                    @size-change="handleChangeLimit"/>
        </div>
    </div>
</template>

<script>
    import request from '../../utils/request'
    const WEEKLY = {
        '0': '星期天',
        '1': '星期一',
        '2': '星期二',
        '3': '星期三',
        '4': '星期四',
        '5': '星期五',
        '6': '星期六'
    }
    export default {
        name: "ClassList",
        data () {
            return {
                is_loading:false,
                list:[],
                page:0,
                limit:10,
                total:0,
                searchForm:{
                    num_code:''
                },
                classSelectList:[]
            }
        },
        mounted() {
            this.getParams()
            this.getList()
        },
        watch:{
            $route(route){
                console.log(route)
                this.getParams()
                this.getList()
            }
        },
        methods: {
            getParams(){
                const { page ,limit ,num_code }  = this.$route.query
                console.log(this.$route.query)
                this.page = parseInt(page) || 0
                this.limit = parseInt(limit) || 10
                this.searchForm.num_code = num_code
            },
            getList (){
                this.is_loading = true
                let params = {
                    page:this.page,
                    limit:this.limit,
                    num_code:this.searchForm.num_code
                }
                request.get('sesuapi/teacherapi/class-grade/list',params).then((res)=>{
                    this.is_loading = false
                    this.total = res.data.meta.total
                    this.classSelectList = res.data.classSelectList
                    let list = []
                    res.data.list.map(item =>{
                        let listItem = {
                            class_id: item.class_id,
                            num_code: item.num_code,
                            course_name: item.course_name || '--',
                            number_student:item.number_student + '/' + item.max_people,
                            course_time:`${WEEKLY[item.weekly]}${item.class_start_time}-${item.class_end_time}`,
                            last_lesson_name:item.last_lesson_name || '--'
                        }
                        list.push(listItem)
                    })
                    this.list = list

                }).catch(err=>{
                    this.is_loading = false
                    this.$message({
                        type:'warning',
                        message:err.message || '请求失败'
                    })
                })
            },
            handleChange (val) {
                console.log(val)
                // this.searchForm.num_code = val
                // this.getList()
                this.pathSearch({})
            },
            handleViewItem (row){
                console.log(row)
            },
            handleChangePage (page) {
                console.log(`${page}`)
                // this.page = page
                // this.getList()
                this.pathSearch({page})
            },
            handleChangeLimit (limit) {
                console.log(`${limit}`)
                // this.limit = val
                // this.getList()
                this.pathSearch({limit})
            },
            pathSearch({page=1,limit=10}){
                this.$router.push({
                    path:this.$route.path,
                    query:{
                        page,
                        limit,
                        ...this.searchForm
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>