<template>
    <section class="m-main">
        <div class="a-app">
            <div class="tpl-page-state-title am-text-center">AppCenter</div>
        </div>
    </section>
</template>
<script>
    /**
     * 应用中心
     *
     *@date 2019-09-18
     *@author liuzhuang
     */
    export default {
        name: 'AppCenter',
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped>
    .a-app {
        width: 100%;
        min-height: 300px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .tpl-page-state-title {
        font-size: 40px;
        font-weight: bold;
        color: #838fa1;
    }

    .am-text-center {
        text-align: center !important;
    }
</style>