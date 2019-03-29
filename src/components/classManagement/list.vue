<template>
    <div class="classs-list ci-block">
        <el-form :inline="true" :model="searchForm" class="form" size="small">
            <el-form-item label="班级选择：">
                <el-select :model="searchForm.num_code" placeholder="请输入内容" filterable="" clearable="" @change="handleChange">
                    <el-option
                        v-for="(item,i) in classSelectList"
                        :key="i"
                        :label="item.num_code"
                        :value="item.num_code"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-table :data="list">
            <el-table-column
                prop="code"
                width="150px"
                label="班级编号"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="课程名称">
            </el-table-column>
            <el-table-column
                    prop="student_count"
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
            this.getList()
        },
        methods: {
            getList (){
               request.get('sesuapi/teacherapi/class-grade/list',{})
            },
            handleChange () {

            },
            handleViewItem (){

            },
            handleChangePage () {

            },
            handleChangeLimit () {

            }
        }
    }
</script>

<style scoped>

</style>