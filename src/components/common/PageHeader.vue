<template>
    <div class="l-border">
        <div class="l-line">
        </div>
        <span class="l-title">
                {{pageName}}
        </span>
    </div>
</template>

<script>
    /**
     * 页头组件
     *
     *@date 2019-09-19
     *@author liuzhuang
     */
    export default {
        name: "PageHeader",
        props:{
            pageName: {
                type: String,
                default: () => ''
            },
        }
    }
</script>

<style scoped>
    .l-border{
        width: auto;
        padding: 12px 8px;
        border-bottom: 1px solid #eef1f5;

        margin-bottom: 20px;
        display: flex;
        justify-content: left;
        flex-direction: row;
    }
    .l-line{
        width: 4px;
        height: 14px;
        background: #00aeff;
        top: 6px;
    }
    .l-title{
        margin-top: -4px;
        margin-left: 8px;
        font-size: 15px;
    }
</style>