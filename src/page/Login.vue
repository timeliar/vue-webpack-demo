<template>
    <md-dialog
            @open="onOpen"
            @close="onClose"
            ref="login-panel">
        <md-dialog-title>登录</md-dialog-title>
        <md-dialog-content>
            <form novalidate @submit.stop.prevent="submit" ref="loginForm">
                <md-input-container>
                    <label>Username</label>
                    <md-input placeholder="请输入用户名"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Password</label>
                    <md-input type="password" placeholder="请输入密码"></md-input>
                </md-input-container>
            </form>
        </md-dialog-content>
        <md-dialog-actions>
            <md-button class="md-primary" @click.native="closeDialog('login-panel')">取消</md-button>
            <md-button class="md-primary" @click.native="submitForm()">确认登录</md-button>
        </md-dialog-actions>
    </md-dialog>
</template>
<script>
    import MdDialogContent from "../../node_modules/vue-material/src/components/mdDialog/mdDialogContent.vue";
    import MdDialogTitle from "../../node_modules/vue-material/src/components/mdDialog/mdDialogTitle.vue";
    import MdDialogActions from "../../node_modules/vue-material/src/components/mdDialog/mdDialogActions.vue";

    export default {
        name:'md-login',
        components: {
            MdDialogActions,
            MdDialogTitle,
            MdDialogContent},
        props: {},
        data:()=>{
            return {
                alert:{
                    ok:"确认登录"
                }
            }
        },
        methods: {
            openDialog(ref) {
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
            onOpen() {
                console.log('Opened');
            },
            onClose(type) {
                console.log('Closed', type);
            },
            submitForm(){
                console.log(this.$refs['loginForm'])
            }
        }
    }
</script>