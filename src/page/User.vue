<template>
    <div id="user">
        <md-dialog-alert
                :md-content="alert.content"
                :md-ok-text="alert.ok"
                @open="onOpen"
                @close="onClose"
                ref="dialog3">
        </md-dialog-alert>
        <md-button class="md-primary md-raised" @click="openDialog('dialog3')">点此显示</md-button>
    </div>
</template>

<script>
    export default {
        name:"user",
        data:()=>{
            return {
                alert: {
                    content: '此处显示用户信息',
                    ok: '好的'
                },
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
            }
        }
    }
</script>