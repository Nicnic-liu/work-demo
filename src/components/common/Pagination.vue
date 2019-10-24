<template>
    <section>
        <el-row class="f-tac" type="flex" justify="end">
            <div class="p-pagination">总记录:<span>{{total}}</span></div>
        </el-row>
    </section>
</template>
<script>
    /**
     * 分页页码数
     *
     *@date 2019-09-19
     *@author liuzhuang
     */
    export default {
        name: 'Pagination',
        props: {
            total: {
                type: Number,
                default: () => 0
            },
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .p-pagination {
        margin: 20px 16px 20px 0;
        font-size: 14px;
        color: #333;
        span{
            margin-left: 8px;
        }
    }
</style>