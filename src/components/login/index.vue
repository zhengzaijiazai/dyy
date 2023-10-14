<template>
  <div class="login">
    <!-- dialogFormVisible控制登录组件是否显示 -->
    <el-button text @click="Users.dialogFormVisible = true">
      登录/注册
    </el-button>
    <el-dialog v-model="Users.dialogFormVisible" title="登录/注册" @close="close">
      <div class="contain">
        <!-- 这是左侧 -->
        <div class="loginfrom" v-if="sence == '0'">
          <el-form :model="loginInfo" :rules="rules" ref="form">
            <!-- prop 必须放在el-form-item里面  直接放在el-input里面没有用 不会生效 -->
            <!-- 前提是要将model给动态绑定数据和rules绑定好规则才会验证 -->
            <el-form-item label="" prop="phone">
              <!-- props 是需要验证的数据 -->
              <el-input :prefix-icon="User" placeholder="请输入手机号码" v-model="loginInfo.phone"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input :prefix-icon="Lock" placeholder="请输入手机验证码" v-model="loginInfo.code">
              </el-input>

            </el-form-item>
            <el-form-item>
              <el-button :disabled="flag || !isPhone" @click="getCode">
                获取验证码 <span v-if="flag">{{ overtime }}</span>
              </el-button>
            </el-form-item>
          </el-form>
          <div class="loginbottom">
            <el-button type="success" @click="goLogin" :disabled="!isPhone || Users.code.length !== 6">用户登录</el-button>
            <p @click="handelechange('1')">微信扫码登录</p>
            <svg t="1696843975001" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="5094" width="32" height="32">
              <path
                d="M639.598608 400.285662c8.233522 0 16.330944 0.61296 24.460088 1.500167-21.919219-100.839663-130.992403-175.736467-255.559467-175.736467-139.241274 0-253.29182 93.714382-253.29182 212.809827 0 68.709895 37.926798 125.137045 101.350293 168.969343l-25.311479 75.254961 88.549755-43.832298c31.670304 6.145977 57.06774 12.502755 88.703251 12.502755 7.960299 0 15.835663-0.349971 23.607674-0.928139-4.9088-16.746406-7.824199-34.243919-7.824199-52.491515C424.335916 489.005286 519.328407 400.285662 639.598608 400.285662L639.598608 400.285662zM503.458975 332.453764c19.142989 0 31.703049 12.416797 31.703049 31.235398 0 18.74083-12.56006 31.286564-31.703049 31.286564-18.937305 0-37.97694-12.544711-37.97694-31.286564C465.482035 344.82042 484.488925 332.453764 503.458975 332.453764L503.458975 332.453764zM326.205968 394.975726c-19.022239 0-38.163181-12.544711-38.163181-31.286564 0-18.818601 19.140942-31.235398 38.163181-31.235398 19.005866 0 31.619138 12.366655 31.619138 31.235398C357.825107 382.431016 345.211834 394.975726 326.205968 394.975726L326.205968 394.975726zM870.836133 595.333964c0-100.0466-101.352339-181.581592-215.179804-181.581592-120.543424 0-215.400838 81.57797-215.400838 181.581592 0 100.30345 94.907557 181.566242 215.400838 181.566242 25.226544 0 50.67617-6.239098 75.989695-12.510942l69.457932 37.652552-19.057031-62.572104C832.910359 701.730179 870.836133 651.752928 870.836133 595.333964L870.836133 595.333964zM585.787028 563.996235c-12.562107 0-25.311479-12.365632-25.311479-25.012673 0-12.4608 12.749372-25.00551 25.311479-25.00551 19.244296 0 31.721469 12.544711 31.721469 25.00551C617.508497 551.630602 605.031325 563.996235 585.787028 563.996235L585.787028 563.996235zM725.116307 563.996235c-12.477172 0-25.176402-12.365632-25.176402-25.012673 0-12.4608 12.647041-25.00551 25.176402-25.00551 19.057031 0 31.704073 12.544711 31.704073 25.00551C756.82038 551.630602 744.173338 563.996235 725.116307 563.996235L725.116307 563.996235zM725.116307 563.996235"
                p-id="5095"></path>
            </svg>
          </div>
        </div>
        <div class="wechatlogin" v-else>
          <!-- 模拟二维码 -->
          <!-- <img src="../../assets/images/code_login_wechat.png" alt=""> -->
          <!-- 真实二维码 -->
          <div id="login_container"></div>
          <!-- <p @click="handelechange('0')">密码账号登录</p> -->
          <div class="phone_code" >
            <span @click="handelechange('0')">
              <svg t="1697172129234" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7727" width="32" height="32">
                <path d="M515.072 508.416m-508.416 0a508.416 508.416 0 1 0 1016.832 0 508.416 508.416 0 1 0-1016.832 0Z"
                  fill="#00A98F" p-id="7728"></path>
                <path d="M387.584 738.304v-455.168h256.512v455.168h-256.512z" fill="#FFFFFF" p-id="7729"></path>
                <path
                  d="M515.584 754.176c16.384 0 30.208 13.312 30.208 29.696 0 15.36-11.776 30.208-30.208 30.208-16.896 0-29.696-11.776-30.208-30.208 0-17.408 14.336-30.208 30.208-29.696zM521.728 222.72c-0.512 3.072-3.584 5.632-6.144 5.12-2.56-0.512-5.12-3.584-5.12-6.144s3.584-5.12 6.144-5.12c2.56 0.512 5.12 3.584 5.12 6.144z"
                  fill="#424242" p-id="7730"></path>
                <path
                  d="M667.648 235.52c0-18.944-11.776-35.84-29.696-41.472-6.656-2.048-14.336-2.048-21.504-3.072 0-1.536-0.512-2.56-1.536-3.072-0.512-0.512-1.024-0.512-1.536-0.512h-44.032c-1.536 0-2.56 1.024-2.56 2.56v1.024h-155.648c-27.136 0-46.592 18.944-46.592 46.08v39.936h-2.048c-1.536 0-1.536 2.048-1.536 3.072v26.112c0 1.536 0.512 2.048 1.536 2.048h2.048v31.232h-2.048c-1.536 0-1.536 0.512-1.536 1.536v19.968c0 1.024 0.512 2.56 1.536 2.56h2.048v29.184h-2.048c-1.536 0-1.536 0-1.536 1.024v19.968c0 1.024 0.512 2.56 1.536 2.56h2.048v366.592c0 5.12 0.512 10.752 2.048 15.872 6.144 19.456 23.04 31.232 45.568 31.232h206.848c3.584 0 7.68 0 11.264-1.024 22.016-4.096 36.864-22.528 36.864-45.568v-477.696c0.512-23.04 0.512-46.592 0.512-70.144z m-157.184-13.824c0-2.56 3.584-5.12 6.144-5.12 2.56 0.512 5.12 3.072 5.12 5.632-0.512 3.072-3.584 5.632-6.144 5.12-3.072 0.512-5.632-2.56-5.12-5.632z m5.632 588.8c-15.36 0-27.136-10.752-27.136-27.136 0-15.872 12.8-27.136 27.136-27.136 14.848 0 27.136 12.288 27.136 27.136 0 13.824-10.24 27.136-27.136 27.136z m128-72.192h-257.024v-455.168h257.024v455.168z"
                  fill="#58585A" p-id="7731"></path>
                <path d="M516.096 783.36m-24.576 0a24.576 24.576 0 1 0 49.152 0 24.576 24.576 0 1 0-49.152 0Z"
                  fill="#58585A" p-id="7732"></path>
                <path
                  d="M543.744 261.12h-61.44c-4.608 0-8.192-3.584-8.192-8.192 0-4.608 3.584-8.192 8.192-8.192h61.44c4.608 0 8.192 3.584 8.192 8.192 0 4.608-3.584 8.192-8.192 8.192z"
                  fill="#424242" p-id="7733"></path>
                <path d="M428.032 283.136h215.04l1.024 225.28z" fill="#E6E6E6" p-id="7734"></path>
              </svg>
            </span>
            <span @click="handelechange('0')">
              手机验证码登录
            </span>
          </div>
        </div>
        <!-- 二维码右侧 -->
        <div class="code">
          <div class="codetop">
            <div>
              <img src="../../assets/images/code_login_wechat.png" alt="">
              <svg t="1696844859022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5382" width="16" height="16">
                <path
                  d="M615.904 388.48c8.8 0 17.536 0.64 26.176 1.6-23.52-109.536-140.608-190.912-274.272-190.912C218.4 199.2 96 301.056 96 430.4c0 74.656 40.736 135.936 108.768 183.488l-27.2 81.792 95.04-47.648c33.984 6.72 61.28 13.632 95.2 13.632 8.544 0 16.992-0.416 25.376-1.088a202.496 202.496 0 0 1-8.384-56.96c0-118.752 101.984-215.136 231.104-215.136zM469.76 314.784c20.48 0 34.016 13.472 34.016 33.92 0 20.352-13.536 34.016-34.016 34.016-20.384 0-40.832-13.664-40.832-34.016 0-20.448 20.448-33.92 40.832-33.92zM279.52 382.72c-20.384 0-40.928-13.664-40.928-34.016 0-20.448 20.544-33.92 40.928-33.92 20.352 0 33.92 13.472 33.92 33.92 0 20.384-13.568 34.016-33.92 34.016z"
                  fill="" p-id="5383"></path>
                <path
                  d="M864 600.352c0-108.672-108.736-197.28-230.88-197.28-129.344 0-231.2 88.576-231.2 197.28 0 108.864 101.856 197.248 231.2 197.248 27.072 0 54.368-6.816 81.568-13.632l74.56 40.8-20.448-67.904C823.328 715.936 864 661.664 864 600.352z m-305.856-34.016c-13.536 0-27.2-13.44-27.2-27.2 0-13.568 13.664-27.2 27.2-27.2 20.576 0 34.016 13.632 34.016 27.2 0 13.76-13.44 27.2-34.016 27.2z m149.536 0c-13.44 0-27.008-13.44-27.008-27.2 0-13.568 13.568-27.2 27.008-27.2 20.352 0 34.016 13.632 34.016 27.2 0 13.76-13.664 27.2-34.016 27.2z"
                  fill="" p-id="5384"></path>
              </svg>
              <p>微信扫一扫关注</p>
              <p>"快速预约挂号"</p>
            </div>
            <div>
              <img src="../../assets/images/code_app.png" alt="">
              <svg t="1696844902722" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7056" width="16" height="16">
                <path
                  d="M406.109091 251.578182v488.727273a23.272727 23.272727 0 0 0 23.272727 23.272727h302.545455a372.363636 372.363636 0 0 0-325.818182-512z m116.363636 465.454545v-46.545454h186.181818v46.545454z"
                  fill="#EDF6FF" p-id="7057"></path>
                <path
                  d="M359.563636 739.374545V252.043636a372.363636 372.363636 0 1 0 349.090909 557.149091h-279.272727a69.818182 69.818182 0 0 1-69.818182-69.818182z"
                  fill="#EDF6FF" p-id="7058"></path>
                <path
                  d="M801.745455 64.465455h-372.363637a69.818182 69.818182 0 0 0-69.818182 69.818181v605.090909a69.818182 69.818182 0 0 0 69.818182 69.818182h372.363637a69.818182 69.818182 0 0 0 69.818181-69.818182v-605.090909a69.818182 69.818182 0 0 0-69.818181-69.818181z m23.272727 674.90909a23.272727 23.272727 0 0 1-23.272727 23.272728h-372.363637a23.272727 23.272727 0 0 1-23.272727-23.272728v-605.090909a23.272727 23.272727 0 0 1 23.272727-23.272727h69.818182a43.752727 43.752727 0 0 0 43.52 42.589091h145.454545a43.752727 43.752727 0 0 0 43.52-42.589091h69.818182a23.272727 23.272727 0 0 1 23.272728 23.272727z"
                  fill="#040405" p-id="7059"></path>
                <path d="M522.472727 669.556364h186.181818v46.545454h-186.181818z" fill="#2394FB" p-id="7060"></path>
              </svg>
              <p>扫一扫下载</p>
              <p>"预约挂号App"</p>
            </div>
          </div>
          <div class="codebuttom">
            <p>冬预约官方指定平台</p>
            <p>
              <x>快速挂号&nbsp;安全放心</x>
            </p>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="Users.dialogFormVisible = false">
            关闭窗口
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
//引入小图标
import { User, Lock } from '@element-plus/icons-vue'

import { ref, reactive, computed, watch } from 'vue';

//引入登录方法

//引入user小仓库
import useUser from '@/store/modules/user.ts'
import { ElMessage } from 'element-plus';

//引入登录数据返回类型

//引入获取微信二维码请求数据  由于不是自己的微信二维码 所以需要返回这个数据
import { reqWxloginMessage } from '@/api/use/index'
//引入二维码数据类型
import type { wxLoginMessageData } from '@/api/use/type'

let Users = useUser()
//控制微信是否扫码登录
let sence = ref<string>('0');
//控制倒计时显示
let flag = ref<boolean>(false);
//这是时间倒计时
let overtime = ref<number>(0);

//接受el-form的标识
let form = ref<any>();

//自定义表单验证规则validator定义
//phone验证
let validataPhone = (rule: any, value: any, callback: any) => {
  //rule
  //value 这是输入框传来的数据
  //callback 是一个放行函数并返回验证结果 里面有一个参数可以写可以不写 写就是提示信息
  let reg = /1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}/
  if (reg.test(value)) {
    callback()
  } else {
    callback('请输入11位的电话号码')
  }
}
//code验证
let validataCode = (rule: any, value: any, callback: any) => {
  //rule
  //value 这是输入框传来的数据
  //callback 是一个放行函数并返回验证结果 里面有一个参数可以写可以不写 写就是提示信息
  if (value.length == 6) {
    callback();
  } else {
    callback('验证码错误')
  }
}

//表单验证 ElementPlus自带
let rules = {
  //这是ElementPlus的内置属性
  // required 必须填写 
  //message 这是错误信息
  //trigger表示验证的时机  change改变时验证  blur失去焦点是验证
  //max最大多少位
  //min最小多少位
  //这是传统的 没有办法验证是否是正确的手机号码或者验证码 所以很少用
  // phone:[
  //   {required:true,message:'请填入11位的手机号码',trigger:'blur',min:11,max:11}
  // ],
  // code:[
  //   {required:true,message:'请填入6位的验证码',trigger:'blur',min:11,max:11}
  // ]

  //自定义校验规则
  //
  phone: [
    { validator: validataPhone, trigger: 'blur' }
  ],
  code: [
    { validator: validataCode, trigger: 'blur' }
  ]
}

//微信扫码登录显示方法
const handelechange = async (text: string) => {
  sence.value = text
  //encodeURIComponent 将网址进行转码 
  let redirect_URL = encodeURIComponent(window.location.origin + '/wxlogin');
  //发送请求获取微信扫码登录页面参数
  let result: wxLoginMessageData = await reqWxloginMessage(redirect_URL);
  //@ts-ignore
  new WxLogin({
    self_redirect: true, //true:手机点击确认登录后可以在 iframe 内跳转到 redirect_uri
    id: "login_container", //显示二维码容器设置
    appid: result.data.appid, //应用位置标识appid
    scope: "snsapi_login", //当前微信扫码登录页面已经授权了
    redirect_uri: result.data.redirectUri, //填写授权回调域路径,就是用户授权成功以后，微信服务器向公司后台推送code地址
    state: result.data.state, //state就是学校服务器重定向的地址携带用户信息
    style: "black",
    href: "",
  });
}

//监听是否微信扫码登录是否成功
//成功就跳转关闭  
watch(
  ()=> sence.value,
  (value:string)=>{
    if(value == '1'){
      Users.queryStatus()
    }
  }
)


//由于发送不到手机上面 就直接后台返回这个数据 所以这里有两个参数
//电话号码和验证码的类型
//电话号码和验证码
let loginInfo = reactive({
  phone: '',
  code: ''
})

//计算电话号码是否正确
let isPhone = computed(() => {
  let reg = /1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}/

  return reg.test(loginInfo.phone)
})
//电话正确后点击获取验证码方法
const getCode = async () => {
  //验证码倒计时
  flag.value = true
  overtime.value = 60
  let timer = setInterval(() => {
    if (overtime.value == 1) {
      flag.value = false
      clearInterval(timer);
    }
    overtime.value--
  }, 1000)
  //发送验证码请求 
  try {
    await Users.getCode(loginInfo.phone)
    loginInfo.code = Users.code
  } catch (error: any) {
    ElMessage({
      message: '获取验证码失败',
      type: "error"
    })
  }
}

//登录方法
const goLogin = async () => {
  //这个方法是elementPlus里面的 这个表单验证都正确才会通过 并且返回的是一个promise对象
  await form.value.validate()
  try {
    await Users.goLogin(loginInfo)
  } catch (error: any) {
    ElMessage({
      message: error.message,
      type: 'error'
    })
  }
}

//关闭对话框的时候将数据和验证效果给重置
//这个事件是ElementPlus里面的内置事件 查看文档
const close = () => {
  //将数据重置为空
  // Object.assign(loginInfo,{phone:'',code:''});
  //将验证效果重置为没有验证过的样子 因为验证效果不会自动关闭 所以需要重置
  //前面是手动重置 但是ElementPuls 的重置方法会将 校验和数据都重置 所以就直接调用这个方法就可以了
  Users.dialogFormVisible = false
  form.value?.resetFields();
}



</script>

<script lang="ts">
export default {
  name: 'login'
}
</script>

<style scoped lang="scss">
.login {
  :deep(.el-dialog__header) {
    width: 100%;
    border-bottom: 2px solid rgba(211, 211, 211, 0.479);
  }

  :deep(.el-dialog__footer) {
    border-top: 2px solid rgba(211, 211, 211, 0.479);
  }
}

.el-dialog {
  --el-dialog-width: 60%;
}

.contain {
  display: flex;
  height: 450px;

  .loginfrom {
    padding: 20px;
    flex: 5;
    height: 330px;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 5px;

    :deep(.el-form) {
      flex-direction: column;

    }


    .el-form {
      display: flex;
      justify-content: center;
    }

    .loginbottom {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;

      .el-button {
        width: 100%;
        background-color: #9cceff;
        color: white;
        font-weight: 900;
        letter-spacing: 0.2em;
      }

      p {
        margin: 15px;

        &:hover {
          color: #9cceff;
        }
      }
    }
  }

  .wechatlogin {
    flex: 5;
    text-align: center;
    display: flex;
    flex-direction: column;
    p {
      margin-top: 10px;

      &:hover {
        color: #9cceff;
      }
    }
    .phone_code{
      flex: 3;
      display: flex;
      flex-direction: column;
    }
    #login_container{
      flex:7
    }
  }

  .code {
    flex: 5;

    .codetop {
      display: flex;

      div {
        flex: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        * {
          margin-bottom: 10px;
        }

        img {
          width: 150px;
        }
      }
    }

    .codebuttom {
      text-align: center;
      margin-top: 50px;
      font-size: 25px;

      p {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
}</style>