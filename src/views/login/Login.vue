<template>
    <div class="login-container">
        <canvas id="canvas" ref="lal">
        </canvas>
        <el-form :model="listForm" label-width="80px" ref="listForm" class="login-form">
            <div class="title-container">
                <h3 class="title">☺☺☺☺</h3>
            </div>
            <el-form-item label="账号" prop="userName"
                          :rules="[
					  {required: true, message: '请输入账号', trigger: 'blur'}
					]">
                <el-input v-model="listForm.userName" placeholder="请输入账号" clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password"
                          :rules="[
					  {required: true, message: '请输入密码', trigger: 'blur'},
					]">
                <el-input type="password" v-model="listForm.password" show-password placeholder="请输入密码" clearable
                          @keyup.enter.native="submitForm('listForm')">
                </el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button class="login-btn" type="primary" @click.native.prevent="submitForm('listForm')">登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import start from '../../utils/loginCanvas.js'

    export default {
        name: "demo",
        data() {
            return {
                // 登录form
                listForm: {
                    // 用户名
                    userName: '',
                    // 密码
                    password: '',
                }
            }
        },
        methods: {
            /**
             * 提交登录
             *
             * @param formName
             */
            submitForm(formName) {

                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        return false;
                    }
                    this.$router.push({
                        path: './homePage'
                    })
                })
            },

        },

        mounted() {
            start.start();
        }
    }
</script>

<style lang="scss">
    canvas {
        height: 100%;
        position: absolute;
    }

    .login-container {
        background-color: black;
        height: 100%;

        .el-input {
            display: inline-block;
            height: 47px;
            width: 100%;


        }


        .login-form {
            position: relative;
            width: 40%;
            max-width: 100%;
            padding: 15% 35px 0 35px;
            margin: 0 auto;

            .el-form-item__label {
                color: #ffffff
            }

            .el-input {
                width: 80%;
            }

            .login-btn {
                width: 80%;
                margin-bottom: 30px;
            }

        }

        .title-container {
            position: relative;

            .title {
                color: #ffffff;
                font-size: 26px;
                margin: 0px auto 40px -30px;
                text-align: center;
                font-weight: bold;
            }
        }
    }

</style>
