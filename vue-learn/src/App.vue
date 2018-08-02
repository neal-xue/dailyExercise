<template>
 <div id='app'>
   <el-container>
        <el-header>
			    <img src='http://image.zhihuishu.com/zhs/ablecommons/demo/201806/151b5b6016014f0fb4a7d875bf3039f0.png' />
            <div class="header-right">
                <span class="right-source">我的课程</span>
                <span class="right-line"></span>
                <a class="right-name">
                    <img src="http://image.zhihuishu.com/testzhs/app/content/201602/5c234faba19c4b128bb06241aadcd1e4.png"/>                    
                    <el-dropdown @visible-change='visibleChange'>
                        <span class="el-dropdown-link">
                            <span>小花小花小花小花</span>
                            <i :class="[show ? 'el-icon-arrow-up':'el-icon-arrow-down','el-icon--right']"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item>双皮奶</el-dropdown-item>
                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>      
                </a>
            </div>
        </el-header>
        <el-container>
          <el-aside width="170px">
            <div class="aside-img">
              <img src="http://image.zhihuishu.com/zhs/able-commons/demo/201805/0fca8392e7494e8e951c41e69e4f1354.png">
              <p>很多资源</p>
            </div>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">学习任务</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">教学资源</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">学生管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">学情数据</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">课程设置</span>
                </el-menu-item>
            </el-menu>
          </el-aside>
          <el-container>
              <el-main>
                <router-view></router-view>                  
              </el-main>
              <el-footer height="40px">Copyright © 2003-现在 Zhihuishu. All rights reserved.</el-footer>
          </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import {mapMutations,mapState,mapGetters,mapActions} from 'vuex'
// import axios from 'axios'
export default {
    name: 'app',
    data () {
        return {
            show:false,
        }
    },
    methods:{
        visibleChange(value){
            this.show = value;
        }
    },
}
</script>

<style scoped lang='scss'>
    .el-container{
        background: #E9F4FD;
    }
    .el-header{
        height: 60px;
        color: #3D4059;
        background: #fff;
        box-shadow: 0 1px 12px 0 rgba(1, 39, 78, 0.16);
        z-index: 2;
        position: fixed;
        width: 100%;
        padding: 0 70px;
        img{
            width: 136px;
            height: 38px;
            margin-top: 11px;
        }
        .header-right{
            float: right;
            position: relative;
            .right-source{
                color: #3D4059;
                padding: 0 40px;
                line-height: 60px;
            }
            .right-line{
                color: #ccc;
                width: 1px;
                height: 30px;
                background: #ccc;
                border-radius: 0;
                right: 122px;
                top: 15px;
                position: absolute;
            }
            .right-name{
                position: relative;
                padding-left: 40px;
                img{
                    width: 30px;
                    height: 30px;
                    border-radius: 100%;
                    position: absolute;
                    top: -15px;
                    left: 0;
                }
                .el-dropdown-link{
                    cursor: pointer;
                    span{
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        width: 40px;
                        display: inline-block;
                        line-height: 12px;
                    }
                }
            }
        }
    }
    .el-aside {
        box-shadow: 3px 0 10px 0 rgba(0, 33, 79, 0.11);
        height: 728px;
        background: #fff;
        margin-top: 60px;
        .aside-img{
            margin: 30px 0;
            text-align: center;
            img{
                width: 125px;
                height: 80px;
            }
            p{
                font-size: 12px;
                color: #3D4059;
                margin: 5px 0;
            }
        }
        .is-active{
            background: linear-gradient(-90deg, rgba(244, 250, 255, 0) 0%, #DFF0FF 100%);
        }
    }
    .el-main {
        background: #fff;
        margin: 90px 30px 20px 30px;
    }
    .el-footer {
        height: 40px;
        text-align: center;
        color: #9798A9;
        font-size: 12px;
    }
</style>


