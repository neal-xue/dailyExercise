<template>
  <div class="categoryCourseList_wrap clearfix">
    <ul class="categoryCourseList_ul">
      <li v-for="item in courseList">
        <a v-bind:href="'http://course.zhihuishu.com/course/home/'+item.rootCourseId">
          <div class="courseImgBox">
            <img class="sp-img " v-bind:src="item.courseImage" width="525" height="296">
            <div class="SuperCourseIco"></div>
            <div class="shadowLayer">
              <div class="courseName txtEllipsis fl" v-bind:title="item.courseName">{{item.courseName}}</div>
            </div>
            <div class="blackLayer">
              <dl class="blackLayer_dl">
                <dd>
                  <i class="">
                    <img class="" width="24" height="24" src="http://image.zhihuishu.com/testzhs/able-commons/demo/201611/2255d3a4e18f4fbc95a043ade1645946.png">
                  </i><span>2</span>学分 <span>28</span>学时</dd>
                <dd>
                  <i class=""><img class="" width="28" height="16" src="http://image.zhihuishu.com/testzhs/able-commons/demo/201611/37bcd9aadd724ff2bb30bce266c30ef3.png"></i><span>4</span> 见面课
                </dd>
                <dd><i class=""><img class="" width="24" height="24" src="http://image.zhihuishu.com/testzhs/able-commons/demo/201611/e25e8e97762a41a288087269fe367907.png"></i><span>1</span>运行学期</dd>
                <dd><i class=""><img class="" width="27" height="20" src="http://image.zhihuishu.com/testzhs/able-commons/demo/201611/dde43823f9c04257adcb72186db2d870.png"></i><span>203811</span> 已学</dd>          
              </dl>
            </div>	  
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../fetch/url"
export default {
  name: "HelloWorld",
  data() {
    return {
      courseList:[]
    };
  },
  created() {
    api.getCourseList().then(json =>{
      this.courseList = json.data;
      console.log(typeof this.courseList)
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$tempColor:#00c7c4;
.courseheaderMenu{position:absolute;left:0;top:0}
.underTreeCourse_wrap .headerMenuBox_fix{width:100%;position:fixed;left:0;box-shadow:0 1px 12px -4px rgba(0, 0, 0, 0.24);-moz-box-shadow:0 1px 12px -4px rgba(0, 0, 0, 0.24);-webkit-box-shadow:0 1px 12px -4px rgba(0, 0, 0, 0.24);background:#fff;z-index:100}
.underTreeCourse_wrap{width:100%;position:relative;/*z-index:10*/}
.underTreeCourseInfo_wrap{width:1070px;position:relative;margin-top:-30px;z-index:50}
.classifCourse_box{width:1070px;height:80px;}
.classifCourse_box li{width:266px;/*width:354px;*/height:78px;cursor:pointer;line-height:80px;text-align:center;border: 1px solid rgba(0, 0, 0, 0.05);
background:#fefefe;box-shadow:5px -5px 25px 0 rgba(0, 0, 0, 0.05) inset;-webkit-box-shadow:5px -5px 25px 0 rgba(0, 0, 0, 0.05) inset;-moz-box-shadow:5px -5px 25px 0 rgba(0, 0, 0, 0.05) inset;
font-size:22px;color:#5F7180;}
.classifCourse_box li.cur{background:#fff;border:1px solid rgba(0, 0, 0, 0.05);box-shadow:none;color:#141E3E}
.classifCourse_box li.tab_title2{width:266px;border-left:none;}
.categoryCourse_box{width:1068px;height:148px;border: 1px solid rgba(0, 0, 0, 0.05);border-top:none;}
.categoryCourse_box li{width:100px;height:148px;cursor:pointer;float:left;margin:0 0 0 95px;text-align:center;color:#293664;font-size:14px;}
.categoryCourse_box li.blur,.categoryCourse_box li:hover p{color:$tempColor}
.categoryCourse_box li em{display:inline-block;vertical-align:middle;background:url(http://image.zhihuishu.com/testzhs/able-commons/demo/201611/cd0043a802d54e82920de8d205d643ec.png) no-repeat;}
.categoryCourse_box li em.all_ico{width:47px;height:47px;margin:38px 0 17px;background-position:0 -99px;}
.categoryCourse_box li em.zfLead_ico{width:47px;height:47px;margin:38px 0 17px;background-position:-377px -104px;}
.categoryCourse_box li em.yszw_ico{width:40px;height:45px;margin:38px 0 20px;background-position:-303px -104px;}
.categoryCourse_box li em.skzw_ico{width:48px;height:37px;margin:46px 0 20px;background-position:-226px -107px;}
.categoryCourse_box li em.zRzw_ico{width:47px;height:47px;margin:38px 0 17px;background-position:-627px -103px;}
.categoryCourse_box li em.zyCourse_ico{width:47px;height:47px;margin:38px 0 17px;background-position:-457px -104px;}
.categoryCourse_box li em.tsRw_ico{width:43px;height:48px;margin:38px 0 17px;background-position:-77px -99px;}
.categoryCourse_box li em.tsSk_ico{width:41px;height:46px;margin:38px 0 17px;background-position:-155px -102px;}
.categoryCourse_box li em.tsZr_ico{width:47px;height:47px;margin:38px 0 17px;background-position:-546px -103px;}
.categoryCourse_box li.blur .all_ico,.categoryCourse_box li:hover .all_ico{background-position:0 -177px;}
.categoryCourse_box li.blur .zfLead_ico,.categoryCourse_box li:hover .zfLead_ico{background-position:-377px -177px;}
.categoryCourse_box li.blur .yszw_ico,.categoryCourse_box li:hover .yszw_ico{background-position:-303px -179px;}
.categoryCourse_box li.blur .skzw_ico,.categoryCourse_box li:hover .skzw_ico{background-position:-227px -185px;}
.categoryCourse_box li.blur .zRzw_ico,.categoryCourse_box li:hover .zRzw_ico{background-position:-627px -183px;}
.categoryCourse_box li.blur .zyCourse_ico,.categoryCourse_box li:hover .zyCourse_ico{background-position:-458px -180px;}
.categoryCourse_box li.blur .tsRw_ico,.categoryCourse_box li:hover .tsRw_ico{background-position:-77px -177px;}
.categoryCourse_box li.blur .tsSk_ico,.categoryCourse_box li:hover .tsSk_ico{background-position:-155px -179px;}
.categoryCourse_box li.blur .tsZr_ico,.categoryCourse_box li:hover .tsZr_ico{background-position:-546px -180px;}

.categoryCourseList_wrap{width:1070px;margin-top:80px;}
.categoryCourseList_wrap ul{margin-right:-20px;/*overflow:hidden;*/}
.categoryCourseList_wrap li{width:523px;height:388px;float:left;position:relative;margin:0 18px 40px 0;border:1px solid rgba(0, 0, 0, 0.05);}
.categoryCourseList_wrap li:hover{box-shadow: 0 10px 50px rgba(102, 136, 153, 0.15);-moz-box-shadow: 0 10px 50px rgba(102, 136, 153, 0.15);-webkit-box-shadow: 0 10px 50px rgba(102, 136, 153, 0.15);}
.courseImgBox{width:525px;height:296px;position:relative;}
.SuperCourseIco{position:absolute;left:-4px;top:-4px;z-index:10}
.shadowLayer{width:485px;height:58px;line-height:58px;padding:0 20px;background:url(http://image.zhihuishu.com/testzhs/able-commons/demo/201611/fbcf4f4583b24730a97285594b1b9bd5.png) repeat-x;
position:absolute;left:0;bottom:0;color:#fff;}
.courseName{width:350px;font-size:20px;}
.newCourseBox{font-size:16px;}
.courseImgWrap{width:483px;}
.teachInfoBox{/*height:41px;line-height:41px;margin:20px 0;*/height:auto;margin:10px 0;line-height:35px;color:#293664;font-size:16px;}
.teacherPicInfo img{width:41px;height:41px;margin-right:12px;border-radius:40px;-webkit-border-radius:40px;-moz-border-radius:40px;}
.lineBar{margin:-2px 10px 0 10px;}
.hybridIcon{margin:-2px 10px 0 0;}
.buildCourseSchool{width:303px;/*width:150px;*/}
.money{margin-left:20px;color:#00C7C4;font-size:20px;}
.blackLayer{width:525px;height:296px;background:rgba(4, 4, 4, 0.7);color:#fff;left:0;opacity:0;overflow:hidden;visibility:hidden;position:absolute;
top:0;transition: all 0.5s ease 0s;z-index:9;}
.categoryCourseList_wrap .blackLayer .blackLayer_dl{padding-top:38px;}
.categoryCourseList_wrap .blackLayer dd{padding:8px 170px;line-height:28px;font-size:16px;color:#fff;}
.categoryCourseList_wrap .blackLayer dd i{width:26px;float:left;margin:-2px 10px 0 0;}
.categoryCourseList_wrap .blackLayer dd span{padding:0 5px;color:#00c7c4;}
.categoryCourseList_wrap li:hover .blackLayer {opacity:1;transform:scale(1, 1);visibility:visible;}
.categoryCourseList_wrap .blackLayer .layer_onlineOld{padding-top:60px;}
.categoryCourseList_wrap .blackLayer .layer_onlineNew{padding-top:106px;}
.categoryCourseList_wrap .blackLayer .layer_hybridNew{padding-top:82px;}

.SharedCourse_wrap .SharedCourseList_ul li{width:343px;height:360px;margin:0px 18px 30px 0;}
.SharedCourse_wrap .SharedCourseList_ul{margin-right:-40px;overflow:hidden;}
.SharedCourse_wrap .SharedCourseList_ul .courseImgBox{width:343px;height:193px;}
.SharedCourse_wrap .SharedCourseList_ul .shadowLayer{width:323px;height:41px;padding:0 10px;line-height:41px;background:url(http://image.zhihuishu.com/testzhs/able-commons/demo/201611/9f59436987d2476cbeb5e33351d6f1bc.png);}
.SharedCourse_wrap .SharedCourseList_ul .CourseInfo_box{width:303px;padding:20px 0;}
.SharedCourse_wrap .SharedCourseList_ul .courseName{width:303px;line-height:20px;color:#141e3e;}
.courseMode,.lineBar,.TypeName_1,.TypeName_2{font-size:16px;color:#5F7180}
.SharedCourse_wrap .SharedCourseList_ul .blackLayer{width:343px;height:193px;}
.SharedCourse_wrap .SharedCourseList_ul .blackLayer dd i{width:22px;}
.app_download{width:1070px;margin:60px auto 10px;text-align:center;}
.app_download h2{font-size:32px;color:#293664}
.app_QrCode{padding:45px 0;}
.SharedCourse_wrap .SharedCourseList_ul .blackLayer dd{padding:0px 95px;line-height:28px;font-size:14px;color:#fff;}
.SharedCourse_wrap .blackLayer .blackLayer_dl{padding-top:30px;}
.SharedCourse_wrap .blackLayer .layer_onlineOld{padding-top:40px;}
.SharedCourse_wrap .blackLayer .layer_onlineNew{padding-top:69px;}
.SharedCourse_wrap .blackLayer .layer_hybridNew{padding-top:58px;}

.course-package-wrap{width:1070px;margin-top:20px;}
.course-package-wrap ul{margin-right:-18px;}
.course-package-wrap li{float:left;position:relative;width:200px;margin:20px 17px 0 0}
.course-package-wrap li img{width:100%;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;}
.maskLayer{width:200px;height:100%;background:#000;opacity:0.15;filter:alpha(opacity=15);position:absolute;left:0;top:0;display:none;}
.course-package-wrap li:hover .maskLayer{display:block;}
.course-package-wrap li:hover{box-shadow:0 10px 50px rgba(102, 136, 153, 0.15);-moz-box-shadow: 0 10px 50px rgba(102, 136, 153, 0.15);-webkit-box-shadow: 0 10px 50px rgba(102, 136, 153, 0.15);}
.SharedCourse-package .course-package-wrap li,.SharedCourse-package .maskLayer{width:165px;}
.new-demand-div{width:320px;}
.new-demand-teachInfo{width:483px;position:relative;}
.new-demand-div,.new-demand-div .teacherNameInfo,.new-demand-div .buildCourseSchool{width:320px;}
.new-demand-teachInfo .courseModelBox,.new-demand-teachInfo .money{height:35px;position:absolute;right:0;top:50%;margin-top:-17px;/*margin-top:20px;*/}

</style>
