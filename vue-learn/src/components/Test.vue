<template>
    <div>
       <el-button type="primary" v-loading="loading" @click="orderClick">主要按钮</el-button>
       <ul class="live-plat-list" v-loading="loading"
                element-loading-text="拼命加载中">
            <li class='live-palt-item' v-for="item in liveList">
                <p class='item-title' >
                    <img class='img1' src='http://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201807/9fd5f3e7bed14a548a8a666130a23cce.png'/>
                    <span>{{item.planStartTime}}</span>
                    <img v-if="item.status==1" class='img2' src='http://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201807/87fe7ba9c57844b787c741f845224d50.png'/>								
                    <span v-else>直播</span>
                </p>
                <div class="item-con">
                    <img :src="item.logoPic"/>
                    <div class="item-con-center">
                        <h1>{{item.liveName}}</h1>
                        <p>{{item.speakerName}}</p>
                        <span v-if="item.status==1"><img src='http://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201807/9ca2eb67ae604697a1e790e46cf2dc2d.png'/>
                            {{item.watchCount}}人正在观看</span>
                        <span v-else></span>
                    </div>
                    <a v-if="item.status==1" class="come-live-btn" :href="item.liveId"></a>
                    <a v-else class="come-live-btn no-begin" href='#####'></a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../fetch/url'

export default {
    data () {
        return {
            loading:false,
            liveList:[]
        }
    },
    methods:{
        orderClick(){
            this.loading = true;
            api.orderClick({}).then(json=>{
                if(json.status==200){
                    this.liveList = json.rt;
                }
                this.loading = false;
            })
        },
    },
}
</script>

<style scoped lang='scss'>
    .live-plat-list{
        margin-top: 70px;
        list-style: none;
        .live-palt-item{
            .item-title{
                height: 37px;
                line-height: 37px;
                .img1{
                    float: left;
                    margin-top: 2px;
                }
                .img2{
                    float: left;
                    margin-top: -3px;
                }
                span{
                    float: left;
                    font-size: 26px;
                    color: #333;
                    font-weight: bold;
                    margin:0 17px;
                }
            }
            .item-con{
                background: #FFFFFF;
                border: 1px solid #FFFFFF;
                box-shadow: 0 4px 12px 0 rgba(0,0,0,0.07);
                border-radius: 8px;
                width: 1020px;
                margin-top: 20px;
                padding: 20px;
                overflow: hidden;
                margin-bottom: 50px;
                position: relative;
                img{
                    width: 300px;
                    height: 200px;
                    float: left;
                    display: block;
                    border-radius: 5px;
                    margin-right: 20px;
                }
                .item-con-center{
                    float: left;
                    h1{
                        font-size: 22px;
                        color: #333333;
                        margin-top: 26px;
                    }
                    p{
                        font-size: 16px;
                        color: #666666;
                        margin-top: 12px;
                    }
                    span{
                        font-size: 18px;
                        color: #999999;
                        margin-top: 74px;
                        display: block;
                        img{
                            width: 28px;
                            height: 16px;
                            margin-top: 4px;
                        }
                    }
                }
                .come-live-btn{
                    position: absolute;
                    right: 20px;
                    bottom: 0;
                    height: 66px;
                    width: 120px;
                    display: block;
                    background: url('http://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201807/5750f739f1a14b55834e04dfd3302495.png');
                    cursor: pointer;
                    &:hover{
                        background-position: 0 -76px;
                    }
                }
                .no-begin {
                    background:url('http://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201807/69e617c22eb042abace386a6b629161e.png');
                    &:hover {
                        background-position: 0 0; 
                    }
                }
            }
        }
    }
</style>


