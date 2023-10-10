<template>
    <el-card class="box-card" shadow="hover">
        <div class="contain">
            <div class="containleft">
                <div class="hospitalName">
                    {{hospitalInfo.hosname}}
                </div>
                <div class="hospitalNamebottom">
                    <span>
                        <svg t="1695465748940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4041" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="4042"></path></svg>
                        {{hospitalInfo.param.hostypeString}}
                    </span>
                    <span>
                        <svg t="1695465836510" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6087" width="16" height="16"><path d="M426.666667 183.466667V128h170.666666v55.466667c149.333333 38.4 256 170.666667 256 328.533333 0 187.733333-153.6 341.333333-341.333333 341.333333s-341.333333-153.6-341.333333-341.333333c0-157.866667 106.666667-294.4 256-328.533333zM512 768c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m110.933333-426.666667L682.666667 401.066667 529.066667 554.666667 469.333333 494.933333 622.933333 341.333333z" fill="#444444" p-id="6088"></path></svg>
                        每天{{hospitalInfo.bookingRule?.releaseTime}}放号
                    </span>
                </div>
            </div>
            <div class="containright">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
//props 接受数据 不需要像vue2那样写了
defineProps(['hospitalInfo']);
</script>

<style scoped lang="scss">
.box-card {
    width: 100%;
    margin: 10px 0;
    .contain{
        width: 100%;
        display:flex;
        justify-content: space-between;
        .containleft{
            width: 70%;
            .hospitalName{
                margin-bottom: 20px;
            }
            .hospitalNamebottom{
                text-align: center;
                color: #7f7f7f;
                display: flex;
                justify-content: space-between;
                svg{
                    transform: translate(0,15%);
                    margin-right: 5px;
                }
            }
        }
        .containright{
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 70px;
            }
        }
    }
}
</style>