<template>
    <div class="bottom">
        <div class="content">
            <div class="content_left">
                <p>京ICP备</p>
                <p>13018369号</p>
                <p>电话挂号010-56253825</p>
            </div>
            <div class="content_right">
                <p>联系我们</p>
                <p>合作伙伴</p>
                <p>用户协议</p>
                <p>隐私协议</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom{
    width: 100%;
    height: 50px;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: #f0f2f6;
    .content{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        .content_left{
            display: flex;
            align-items: center;
            p{
                margin-right: 5px;
                color: #989897;
                font-size: 14px;
            }
        }
        .content_right{
            align-items: center;
            display: flex;
            p{
                margin-left: 5px;
                cursor: pointer;
                &:hover{
                    color: #94b1ec;
                }
            }
        }
    }
}
</style>