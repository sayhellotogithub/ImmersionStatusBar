define("biz_wap/safe/mutation_observer_report.js",[],function(){
"use strict";
window.addEventListener&&window.addEventListener("load",function(){
window.__moonsafe_mutation_report_keys||(window.__moonsafe_mutation_report_keys={});
var e=window.moon&&moon.moonsafe_id||29715,o=window.moon&&moon.moonsafe_key||0,t=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},s=function(e,o,s){
s=s||1,n[e]||(n[e]=0),n[e]+=s,o&&(r(o)?t=t.concat(o):t.push(o)),setTimeout(function(){
a();
},1500);
},a=function(){
var r=[],s=t.length,i=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*o)+"_"+n[c]);
for(var c=0;s>c&&!(c>=10);++c)i.push("log"+c+"="+encodeURIComponent(t[c]));
if(!(0==r.length&&i.length<=1)){
var _,d="idkey="+r.join(";")+"&lc="+(i.length-1)+"&"+i.join("&");
if(window.ActiveXObject)try{
_=new ActiveXObject("Msxml2.XMLHTTP");
}catch(w){
try{
_=new ActiveXObject("Microsoft.XMLHTTP");
}catch(f){
_=!1;
}
}else window.XMLHttpRequest&&(_=new XMLHttpRequest);
_&&(_.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),_.setRequestHeader("cache-control","no-cache"),
_.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
_.setRequestHeader("X-Requested-With","XMLHttpRequest"),_.onreadystatechange=function(){
4===_.readyState&&(t.length>10?(t=t.slice(10),a()):(t=[],n={}));
},t=[],n={},_.send(d));
}
};
try{
if(!window.__observer)return;
var i=window.__observer_data;
if(window.__observer.takeRecords){
var c=window.__observer.takeRecords();
if(c&&c.length){
i.count++;
var _=new Date;
c.forEach(function(e){
for(var o=e.addedNodes,t=0;t<o.length;t++){
var n=o[t];
if("SCRIPT"===n.tagName){
var r=n.src;
!r||/qq\.com/.test(r)||/weishi\.com/.test(r)||i.list.push(r);
}
}
}),i.exec_time+=new Date-_;
}
}
window.__observer.disconnect();
for(var d=window.__moonsafe_mutation_report_keys.observer||2,w=window.__moonsafe_mutation_report_keys.script_src||8,f=window.__moonsafe_mutation_report_keys.setattribute||9,u=window.__moonsafe_mutation_report_keys.ajax||10,m=25,v=0;v<i.list.length;v++){
var l=i.list[v],h=["[moonsafe][observer][url]:"+location.href,"[moonsafe][observer][src]:"+l,"[moonsafe][observer][ua]:"+navigator.userAgent];
i.list.length==v+1&&(h.push("[moonsafe][observer][count]:"+i.count),h.push("[moonsafe][observer][exec_time]:"+i.exec_time+"ms")),
s(d,h),"inlinescript_without_nonce"==l&&s(m,h);
}
var p=window.__danger_src;
if(p)for(var y=[{
key:"xmlhttprequest",
idkey:u
},{
key:"script_src",
idkey:w
},{
key:"script_setAttribute",
idkey:f
}],v=0;v<y.length;v++){
var b=y[v].key,g=p[b];
if(g&&g.length)for(var k=0;k<g.length;k++){
var h=["[moonsafe]["+b+"][url]:"+location.href,"[moonsafe]["+b+"][src]:"+g[k],"[moonsafe]["+b+"][ua]:"+navigator.userAgent];
s(y[v].idkey,h);
}
}
}catch(q){
var R=3,h=["[moonsafe][observer][exception]:"+q];
s(R,h);
}
},!1);
});define("appmsg/report.js",["biz_common/dom/event.js","biz_common/utils/huatuo.js","biz_wap/utils/ajax.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_common/utils/monitor.js")),r=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(r=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=window.performance&&window.performance.timing,s=write_sceen_time-r,d=first_sceen__time-r,m=page_endtime-r,g=(window.onload_endtime||+new Date)-r;
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(s=real_show_page_time-r,d=real_show_page_time-r);
var w=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-r:void 0,p=window.logs.a8key_ready_time?window.logs.a8key_ready_time-r:void 0,c=i&&i.connectEnd-i.connectStart,u=i&&i.secureConnectionStart&&i.connectEnd-i.secureConnectionStart,l=i&&i.domainLookupEnd&&i.domainLookupStart&&i.domainLookupEnd-i.domainLookupStart;
if(window.logs.pagetime.wtime=s,window.logs.pagetime.ftime=d,window.logs.pagetime.ptime=m,
window.logs.pagetime.onload_time=g,window.logs.pagetime.jsapi_ready_time=w,window.logs.pagetime.a8key_ready_time=p,
Math.random()<.01){
var f={
28:m,
29:d,
30:g,
31:w,
32:p,
33:c,
34:u
};
o.setFlags(1636,1,1);
for(var _ in f)!f[_]||f[_]<0||o.setPoint(_,f[_]);
o.report();
}
if(need_report_cost?a({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1|1|"+m,"1|2|"+d,"1|3|"+g,"1|4|"+w,"1|5|"+p,"1|6|"+c,"1|7|"+u,"1|8|"+l].join(";")
}
}):Math.random()<.01&&a({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["#1|1|"+m,"1|2|"+d,"1|3|"+g,"1|4|"+w,"1|5|"+p,"1|6|"+c,"1|7|"+u,"1|8|"+l].join(";")
}
}),need_report_cost&&d>3e3){
var v=new Image,h=(new Date).getTime();
v.onload=function(){
var e=(new Date).getTime()-h,t=(new Date).getTime(),i=new Image;
i.onload=function(){
var i=(new Date).getTime()-t;
a({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["^2|1|"+e,"2|2|"+i].join(";")
}
});
},i.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
},v.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
}
if(!(Math.random()>.2||0>g||0>s||0>d||0>m)){
if(w&&t.setAvg(27822,15,w),p&&t.setAvg(27822,17,p),m>=15e3)return t.setAvg(27822,29,m),
void t.send();
t.setAvg(27822,1,m).setAvg(27822,3,g).setAvg(27822,5,d),window.isWeixinCached&&t.setAvg(27822,19,m),
e()?(t.setAvg(27822,9,m),window.isWeixinCached&&t.setAvg(27822,23,m)):"wifi"==networkType?(t.setAvg(27822,7,m),
window.isWeixinCached&&t.setAvg(27822,21,m)):"2g/3g"==networkType?(t.setAvg(27822,11,m),
window.isWeixinCached&&t.setAvg(27822,25,m)):(t.setAvg(27822,13,m),window.isWeixinCached&&t.setAvg(27822,28,m)),
moon&&moon.clearSample&&(t.setAvg(27822,71,m),e()?t.setAvg(27822,73,m):"wifi"==networkType?t.setAvg(27822,75,m):"2g/3g"==networkType?t.setAvg(27822,77,m):t.setAvg(27822,79,m)),
c&&t.setAvg(27822,65,c),u&&t.setAvg(27822,67,u),l&&t.setAvg(27822,69,l),t.send();
}
}(),function(){
window.logs.jsapi_ready_fail&&(t.setSum(24729,55,window.logs.jsapi_ready_fail),t.send());
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content"),n=window.innerHeight||document.documentElement.clientHeight;
if(t&&!(Math.random()>.1)){
var o=function(){
var a=window.pageYOffset||document.documentElement.scrollTop,r=e.offsetTop;
if(a+n>=r){
for(var d,m,g=t.getElementsByTagName("img"),w={},p=[],c=0,u=0,l=0,f=0,_=g.length;_>f;++f){
var v=g[f];
d=v.getAttribute("data-src")||v.getAttribute("src"),m=v.getAttribute("src"),d&&(d.isCDN()?u++:l++,
c++,w[m]={});
}
if(p.push("1="+1e3*c),p.push("2="+1e3*u),p.push("3="+1e3*l),s.getEntries){
var h=s.getEntries(),y=window.logs.img.download,A=[0,0,0],j=[0,0,0];
c=u=0;
for(var f=0,k=h.length;k>f;++f){
var b=h[f],T=b.name;
T&&"img"==b.initiatorType&&w[T]&&(T.isCDN()&&(j[0]+=b.duration,u++),A[0]+=b.duration,
c++,w[T]={
startTime:b.startTime,
responseEnd:b.responseEnd
});
}
A[0]>0&&c>0&&(A[2]=A[0]/c),j[0]>0&&u>0&&(j[2]=j[0]/u);
for(var f in y)if(y.hasOwnProperty(f)){
for(var M=y[f],E=0,x=0,z=0,C=0,S=0,_=M.length;_>S;++S){
var d=M[S];
if(w[d]&&w[d].startTime&&w[d].responseEnd){
var D=w[d].startTime,I=w[d].responseEnd;
E=Math.max(E,I),x=x?Math.min(x,D):D,d.isCDN()&&(z=Math.max(E,I),C=x?Math.min(x,D):D);
}
}
A[1]+=Math.round(E-x),j[1]+=Math.round(z-C);
}
for(var N=4,W=7,f=0;3>f;f++)A[f]=Math.round(A[f]),j[f]=Math.round(j[f]),A[f]>0&&(p.push(N+f+"="+A[f]),
"wifi"==networkType?p.push(N+f+6+"="+A[f]):"2g/3g"==networkType&&p.push(N+f+12+"="+A[f])),
j[f]>0&&(p.push(W+f+"="+j[f]),"wifi"==networkType?p.push(W+f+6+"="+j[f]):"2g/3g"==networkType&&p.push(W+f+12+"="+j[f]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",o,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_common/utils/huatuo.js"),a=e("biz_wap/utils/ajax.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],t();
});
}else t();
},!1);
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(e,t,i,n){
"use strict";
function o(){
var e=a.indexOf("://")<0?"http://"+a:a;
if(-1!=e.indexOf("mp.weixin.qq.com/s")||-1!=e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var t=e.split("#");
e=m.addParam(t[0],"scene",25,!0)+(t[1]?"#"+t[1]:""),e=e.replace(/#rd$/g,"#wechat_redirect");
}else e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(a);
var i={
url:"/mp/advertisement_report"+location.search+"&report_type=3&action_type=0&url="+encodeURIComponent(a)+"&__biz="+biz+"&r="+Math.random(),
type:"GET",
mayAbort:!0,
async:!1
};
return i.timeout=2e3,i.complete=function(){
location.href=e;
},c(i),!1;
}
e("biz_common/utils/string/html.js");
var r=e("biz_common/dom/event.js"),m=e("biz_common/utils/url/parse.js"),c=e("biz_wap/utils/ajax.js"),s=msg_title.htmlDecode(),a=msg_source_url.htmlDecode(),p=document.getElementById("js_report_article3"),l=e("biz_wap/jsapi/core.js");
r.tap(p,function(){
var e=["/mp/infringement?url=",encodeURIComponent(window.msg_link),"&title=",encodeURIComponent(s),"&__biz=",biz].join("");
return location.href=e+"#wechat_redirect",!1;
});
var _=document.getElementById("js_view_source");
r.on(_,"click",function(){
return o(),!1;
});
});define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js"],function(e){
"use strict";
function t(e){
for(var t=5381,o=0;o<e.length;o++)t=(t<<5)+t+e.charCodeAt(o),t&=2147483647;
return t;
}
function o(e,t){
if(e&&!(e.length<=0))for(var o,n,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,d=0,r=e.length;r>d;++d)o=e[d],
o&&(n=o.getAttribute(t),n&&(i=n.match(a),i&&i[2]&&(c[i[2]]=!0)));
}
function n(e){
for(var t=0,o=f.length;o>t;++t)if(f[t]==e)return!0;
return!1;
}
function i(){
c={},o(document.getElementsByTagName("a"),"href"),o(document.getElementsByTagName("link"),"href"),
o(document.getElementsByTagName("iframe"),"src"),o(document.getElementsByTagName("script"),"src"),
o(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in c)c.hasOwnProperty(t)&&(window.networkType&&"wifi"==window.networkType&&!g&&n(t)&&(g=!0),
e.push(t));
return c={},e.join(",");
}
function a(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,o=document.getElementById("js_content"),n=document.documentElement.clientHeight||window.innerHeight,a=document.body.scrollHeight||document.body.offsetHeight,d=Math.ceil(a/n),l=Math.ceil((o.scrollHeight||o.offsetHeight)/n),s=(window.logs.read_height||t)+n,w=document.getElementById("js_toobar3").offsetTop,c=o.getElementsByTagName("img")||[],f=Math.ceil(s/n)||1,u=document.getElementById("media"),p=50,h=0,y=0,v=0,b=0,T=s+p>w?1:0;
f>d&&(f=d);
var j=function(t){
if(t)for(var o=0,n=t.length;n>o;++o){
var i=t[o];
if(i){
h++;
var a=i.getAttribute("src"),d=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(y++,a.isCDN()&&(v++,-1!=a.indexOf("tp=webp")&&b++),d&&(e["img_"+d+"_cnt"]=e["img_"+d+"_cnt"]||0,
e["img_"+d+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=b||0,e.download_img_cnt=y||0,e.download_cdn_img_cnt=v||0,
e.img_cnt=h||0;
},O=window.appmsgstat||{},x=window.logs.img||{},z=window.logs.pagetime||{},E=x.load||{},k=x.read||{},D=[],B=[],N=0,S=0,I=0;
for(var H in k)H&&0==H.indexOf("http")&&k.hasOwnProperty(H)&&B.push(H);
for(var H in E)H&&0==H.indexOf("http")&&E.hasOwnProperty(H)&&D.push(H);
for(var M=0,P=D.length;P>M;++M){
var Y=D[M];
Y&&Y.isCDN()&&(-1!=Y.indexOf("/0")&&N++,-1!=Y.indexOf("/640")&&S++,-1!=Y.indexOf("/300")&&I++);
}
var e={
__biz:biz,
title:msg_title.htmlDecode(),
mid:mid,
idx:idx,
read_cnt:O.read_num||0,
like_cnt:O.like_num||0,
screen_height:n,
screen_num:l,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:window.logs.video_cnt||0,
read_screen_num:f||0,
is_finished_read:T,
scene:source,
content_len:_.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:S,
img_0_cnt:N,
img_300_cnt:I,
wtime:z.onload_time||0,
ftime:z.ftime||0,
ptime:z.ptime||0,
onload_time:z.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:ct
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=D.length,
e.wifi_read_imgs_cnt=B.length),window.logs.webplog&&4==window.logs.webplog.total){
var A=window.logs.webplog;
e.webp_total=1,e.webp_lossy=A.lossy,e.webp_lossless=A.lossless,e.webp_alpha=A.alpha,
e.webp_animation=A.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var R=window.logs.idkeys,C=[];
for(var q in R)if(R.hasOwnProperty(q)){
var J=R[q];
J.val>0&&C.push(q+"_"+J.val);
}
e.idkey=C.join(";");
}
j(!!u&&u.getElementsByTagName("img")),j(c);
var K=(new Date).getDay(),L=i();
(g||0!==user_uin&&Math.floor(user_uin/100)%7==K)&&(e.domain_list=L),g&&(e.html_content=m),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
r({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
});
}
e("biz_common/utils/string/html.js");
{
var d=e("biz_common/dom/event.js"),r=e("biz_wap/utils/ajax.js");
e("biz_common/utils/cookie.js");
}
e("appmsg/cdn_img_lib.js");
var m,l=e("biz_wap/utils/storage.js"),s=new l("ad"),w=new l("page_pos"),_={};
!function(){
if(m=document.getElementsByTagName("html"),m&&1==!!m.length){
m=m[0].innerHTML;
var e=m.replace(/[\x00-\xff]/g,""),t=m.replace(/[^\x00-\xff]/g,"");
_.content_length=1*t.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
window.logs.pageinfo=_;
}();
var c={},g=!1,f=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],u=null,p=0,h=msg_link.split("?").pop(),y=t(h);
!function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(d.on(window,"load",function(){
p=1*w.get(y);
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var o=t.offsetTop;
window.scrollTo(0,o-25);
}else window.scrollTo(0,p);
}),d.on(window,"unload",function(){
if(w.set(o,p,+new Date+72e5),window.__ajaxtest="2",window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,o=[biz,sn,mid,idx].join("_");
s.set(o,{
info:e,
time:t
},+new Date+24e4);
}
a();
}),window.logs.read_height=0,d.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(u),u=setTimeout(function(){
p=window.pageYOffset,w.set(y,p,+new Date+72e5);
},500);
}),d.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(u),u=setTimeout(function(){
p=window.pageYOffset,w.set(y,p,+new Date+72e5);
},500);
}));
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function n(){
function e(e){
var n=[];
for(var i in e)n.push(i+"="+encodeURIComponent(e[i]||""));
return n.join("&");
}
if(networkType){
var n=window.performance||window.msPerformance||window.webkitPerformance;
if(n&&"undefined"!=typeof n.getEntries){
var i,t,o=100,a=document.getElementsByTagName("img"),s=a.length,p=navigator.userAgent,m=!1;
/micromessenger\/(\d+\.\d+)/i.test(p),t=RegExp.$1;
for(var g=0,w=a.length;w>g;g++)if(i=parseInt(100*Math.random()),!(i>o)){
var d=a[g].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,c=n.getEntries(),u=0;u<c.length;u++)if(f=c[u],f.name==d){
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:t,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:a[g].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:s>100?100:s,
delay_time:parseInt(f.duration),
from:window.isSg?"sougou":""
})
}),m=!0;
break;
}
if(m)break;
}
}
}
}
}
var i=e("biz_common/dom/event.js"),t=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),o={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
t.invoke("getNetworkType",{},function(e){
networkType=o[e.err_msg],n();
}),i.on(window,"load",n,!1);
});define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(e,i){
var a=t("appmsg/topic_tpl.html.js");
i.img_url||(i.img_url=topic_default_img);
for(var o in i){
var r=new RegExp("{"+o+"}","g");
a=a.replace(r,i[o]);
}
var n=document.createElement("span");
n.className="db topic_area",n.innerHTML=a,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),
n.onclick=function(){
var t="/mp/topic?action=book_detail_page&isbn="+e.getAttribute("data-isbn")+"&scene=101#wechat_redirect";
location.href=t;
};
}
function a(t){
var a=t.getAttribute("data-isbn");
console.log(a),n({
url:"/mp/topic?action=get_book_info",
type:"post",
data:{
isbn:a,
biz:biz
},
success:function(a){
if(console.log(a),a=JSON.parse(a),0!=a.base_resp.ret)return void e(t);
var o={
title:a.title,
author:a.author,
img_url:a.img_url,
msg_num:a.msg_num
};
i(t,o);
},
error:function(){
e(t);
}
});
}
function o(t){
var e=t.getAttribute("data-type");
"book"===e&&a(t);
}
function r(){
var t=document.getElementsByTagName("wxtopic");
if(0!==t.length)for(var e=0;e<t.length;e++){
var i=t[e].getAttribute("data-type");
if("book"==i){
var a=t[e].getAttribute("data-isbn");
if(a==wxtopic.isbn)return void o(t[e]);
}
}
}
{
var n=t("biz_wap/utils/ajax.js");
t("biz_wap/jsapi/core.js");
}
r();
});define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_tpl.html.js","pages/voice_component.js"],function(e){
"use strict";
function t(){
var e=g("js_content");
return e?(d._oElements=e.getElementsByTagName("mpvoice")||[],d._oElements.length<=0?!1:!0):!1;
}
function i(){
d.musicLen=d._oElements.length;
}
function n(){
for(var e=0,t=0;t<d.musicLen;t++){
var i=d._oElements[t],n={};
n.voiceid=s(decodeURIComponent(i.getAttribute("voice_encode_fileid")||"")),n.voiceid=n.voiceid.replace(/&#61;/g,"="),
n.src=d.srcRoot.replace("#meidaid#",n.voiceid),n.voiceid&&"undefined"!=n.voiceid&&(o(i,n,e),
e++);
}
}
function o(e,t,i){
t.duration=1*e.getAttribute("play_length")||0,t.duration_str=a(t.duration),t.posIndex=i,
t.title=s(decodeURIComponent(e.getAttribute("name")||"")),m.renderPlayer(p,t,e),
c(t),d.musicList[t.voiceid+"_"+t.posIndex]=t;
}
function c(e){
var t=e.voiceid+"_"+e.posIndex,i=r(e.title);
e.player=m.init({
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
duration:1*(e.duration/1e3).toFixed(2),
title:i.length>8?i.substr(0,8)+"...":i,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"playing",
playCssDom:g("voice_main_"+t),
playArea:g("voice_main_"+t),
progress:g("voice_progress_"+t)
});
}
function r(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function s(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function a(e){
if(isNaN(e))return"0:00";
var t=new Date(0),i=new Date(1*e),n=i.getHours()-t.getHours(),o=i.getMinutes()+60*n,c="i:ss".replace(/i|I/g,o).replace(/ss|SS/,l(i.getSeconds(),2));
return c;
}
function l(e,t){
for(var i=0,n=t-(e+"").length;n>i;i++)e="0"+e;
return e+"";
}
function g(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var p=e("pages/voice_tpl.html.js"),m=e("pages/voice_component.js"),d={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
return t()?(i(),n(),d.musicList):void 0;
});define("appmsg/qqmusic.js",["biz_common/utils/string/html.js","pages/qqmusic_tpl.html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=o("js_content");
return e?(l._oElements=e.getElementsByTagName("qqmusic")||[],l._oElements.length<=0?!1:!0):!1;
}
function t(){
l.musicLen=l._oElements.length;
}
function m(){
for(var e=0,i=0;i<l.musicLen;i++){
var t=l._oElements[i],m={};
m.musicid=u(t.getAttribute("musicid")||""),m.comment_id=u(t.getAttribute("commentid")||""),
m.musicid&&"undefined"!=m.musicid&&m.comment_id&&"undefined"!=m.comment_id&&(n(t,m,e),
e++);
}
}
function n(e,i,t){
i.media_id=u(e.getAttribute("mid")||""),i.duration=e.getAttribute("play_length")||0,
i.posIndex=t,i.musicImgPart=u(e.getAttribute("albumurl")||""),i.music_img=l.imgroot+i.musicImgPart,
i.audiourl=u(e.getAttribute("audiourl")||""),i.singer=u(e.getAttribute("singer")||""),
i.music_name=u(e.getAttribute("music_name")||""),g.renderPlayer(a,i,e),c(i),l.musicList[i.musicid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.musicid+"_"+e.posIndex,t=e.comment_id+"_"+e.posIndex,m=["http://i.y.qq.com/v8/playsong.html?songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),n=s(e.music_name);
e.player=g.init({
type:0,
comment_id:e.comment_id,
mid:e.media_id,
songId:e.musicid,
duration:1*(e.duration/1e3).toFixed(2),
title:n.length>8?n.substr(0,8)+"...":n,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"QQ音乐",
coverImgUrl:e.music_img,
playingCss:"qqmusic_playing",
playCssDom:o("qqmusic_main_"+t),
playArea:o("qqmusic_play_"+i),
detailUrl:m,
detailArea:o("qqmusic_home_"+i)
});
}
function s(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function u(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function r(){}
function o(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var a=e("pages/qqmusic_tpl.html.js"),g=e("pages/voice_component.js"),l={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_68",
musicList:{},
musicLen:0
};
return i()?(t(),m(),r(),l.musicList):void 0;
});define("appmsg/iframe.js",["biz_common/utils/string/html.js","new_video/ctl.js","pages/version4video.js","biz_common/dom/attr.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
var t=0;
try{
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var o=e.contentWindow.document.getElementsByTagName("html");
o&&o.length&&(o[0].style.overflow="hidden");
}
}catch(n){}
}
function i(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=r.video_top.length,o=e+r.innerHeight,d=0,m=0;t>m;m++){
var c=r.video_top[m];
c.reported?d++:o>=c.start&&o<=c.end&&(c.reported=!0,n.report({
step:1,
vid:c.vid
}));
}
d==t&&(s.off(window,"scroll",i),r.video_top=r.video_iframe=i=null);
}
e("biz_common/utils/string/html.js");
{
var o,n=e("new_video/ctl.js"),r={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
video_iframe:[],
video_top:[]
},d=e("pages/version4video.js"),m=e("biz_common/dom/attr.js"),s=(m.setProperty,e("biz_common/dom/event.js")),c=document.getElementsByTagName("iframe");
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var a=Math.ceil(1e4*Math.random()),p=0,l=c.length;l>p;++p){
o=c[p];
var v=o.getAttribute("data-src")||"",f=o.className||"",u=o.getAttribute("src")||v;
if(!v||"#"==v){
var h=o.getAttribute("data-display-src");
if(h&&(0==h.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==h.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
h=h.replace(/&amp;/g,"&");
for(var _=h.split("&"),g=["/mp/newappmsgvote?action=show"],p=0;p<_.length;p++)(0==_[p].indexOf("__biz=")||0==_[p].indexOf("supervoteid="))&&g.push(_[p]);
g.length>1&&(v=g.join("&")+"#wechat_redirect");
}
}
if(d.isShowMpVideo()&&u&&(0==u.indexOf("http://v.qq.com/iframe/player.html")||0==u.indexOf("http://v.qq.com/iframe/preview.html")||0==u.indexOf("https://v.qq.com/iframe/player.html")||0==u.indexOf("https://v.qq.com/iframe/preview.html"))){
v=v.replace(/^https:/,location.protocol),v=v.replace(/^http:/,location.protocol),
v=v.replace(/preview.html/,"player.html");
var w=u.match(/[\?&]vid\=([^&]*)/);
if(!w||!w[1])continue;
var x=w[1],y=document.getElementById("js_content").offsetWidth,b=Math.ceil(3*y/4);
window.reportVid.push(x),r.video_iframe.push({
dom:o,
vid:x
}),u=["/mp/videoplayer?video_h=",b,"&scene=",window.source,"&random_num=",a,"&article_title=",encodeURIComponent(window.msg_title.htmlDecode()),"&source=4&vid=",x,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&nodetailbar=",window.is_temp_url?1:0,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join(""),
window.__addIdKeyReport&&window.__addIdKeyReport("28307",11),setTimeout(function(e,t,i,o){
return function(){
o.removeAttribute("style"),o.setAttribute("width",e),o.setAttribute("height",t),
o.setAttribute("marginWidth",0),o.setAttribute("marginHeight",0),o.style.top="0",
o.setAttribute("src",i);
};
}(y,b,u,o),0);
}else if(v&&(v.indexOf("newappmsgvote")>-1&&f.indexOf("js_editor_vote_card")>=0||0==v.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&f.indexOf("card_iframe")>=0||v.indexOf("appmsgvote")>-1||v.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(v=v.replace(/^http:/,location.protocol),f.indexOf("card_iframe")>=0){
var k=v.replace("#wechat_redirect",["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(k+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
o.setAttribute("src",k);
}else{
var O=v.indexOf("#wechat_redirect")>-1,j=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?j+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join(""):f.indexOf("vote_iframe")>=0&&(j+=["&mid=",mid,"&idx=",idx].join(""));
var k=O?v.replace("#wechat_redirect",j):v+j;
o.setAttribute("src",k);
}
-1==v.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&!function(e){
e.onload=function(){
t(e);
};
}(o),o.appmsg_idx=p;
}
if(v&&v.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&y>0){
var q=y,A=3*q/4;
o.width=q,o.height=A,o.style.setProperty&&(o.style.setProperty("width",q+"px","important"),
o.style.setProperty("height",A+"px","important"));
}
}
if(window.iframe_reload=function(){
for(var e=0,i=c.length;i>e;++e){
o=c[e];
var n=o.getAttribute("src");
n&&(n.indexOf("newappmsgvote")>-1||n.indexOf("appmsgvote")>-1)&&t(o);
}
},"getElementsByClassName"in document)for(var H,z=document.getElementsByClassName("video_iframe"),p=0;H=z.item(p++);)H.setAttribute("scrolling","no"),
H.style.overflow="hidden";
r.video_iframe.length>0&&setTimeout(function(){
for(var e=r.video_iframe,t=document.getElementById("js_article"),o=0,n=e.length;n>o;o++){
var d=e[o];
if(!d||!d.dom)return;
for(var m=d.dom,c=m.offsetHeight,a=0;m&&t!==m;)a+=m.offsetTop,m=m.offsetParent;
r.video_top.push({
start:a+c/2,
end:a+c/2+r.innerHeight,
reported:!1,
vid:d.vid
});
}
i(),s.on(window,"scroll",i);
},0);
});define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/log.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e,t){
a.invoke("imagePreview",{
current:e,
urls:t
},function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
}),n("[Appmsg] click image, src: "+e);
}
function i(e){
var i=[],a=e.container,n=e.imgs||[];
if(a)for(var p=a.getElementsByTagName("img")||[],o=0,m=p.length;m>o;o++)n.push(p.item(o));
for(var o=0,m=n.length;m>o;o++){
var c=n[o],d=c.getAttribute("data-src")||c.getAttribute("src"),g=c.getAttribute("data-type");
if(d&&-1==d.indexOf("wx_fmt=gif")){
for(;-1!=d.indexOf("?tp=webp");)d=d.replace("?tp=webp","");
c.dataset&&c.dataset.s&&d.isCDN()&&(d=d.replace(/\/640$/,"/0"),d=d.replace(/\/640\?/,"/0?")),
d.isCDN()&&(d=r.addParam(d,"wxfrom","3",!0)),e.is_https_res&&(d=d.http2https()),
g&&(d=r.addParam(d,"wxtype",g,!0)),i.push(d),function(e){
s.on(c,"click",function(){
return t(e,i),!1;
});
}(d);
}
}
}
var s=e("biz_common/dom/event.js"),a=e("biz_wap/jsapi/core.js"),r=e("biz_common/utils/url/parse.js"),n=e("appmsg/log.js");
return e("appmsg/cdn_img_lib.js"),i;
});define("appmsg/outer_link.js",["biz_common/dom/event.js"],function(e){
"use strict";
function n(e){
var n=e.container;
if(!n)return!1;
for(var r=n.getElementsByTagName("a")||[],i=0,o=r.length;o>i;++i)!function(n){
var i=r[n],o=i.getAttribute("href");
if(!o)return!1;
var a=0,c=i.innerHTML;
/^[^<>]+$/.test(c)?a=1:/^<img[^>]*>$/.test(c)&&(a=2),!!e.changeHref&&(o=e.changeHref(o,a)),
t.on(i,"click",function(){
return location.href=o,!1;
},!0);
}(i);
}
var t=e("biz_common/dom/event.js");
return n;
});define("biz_wap/jsapi/core.js",[],function(n,o,i,e){
"use strict";
document.domain="qq.com";
var t=window.__moon_report||function(){},d=8,r={
ready:function(n){
var o=function(){
try{
n&&n();
}catch(o){
throw t([{
offset:d,
log:"ready",
e:o
}]),o;
}
};
"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?o():top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",o,!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",o),
top.window.document.attachEvent("onWeixinJSBridgeReady",o));
},
invoke:function(n,o,i){
this.ready(function(){
return"object"!=typeof top.window.WeixinJSBridge?(e("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(n,o,function(o){
try{
if(i){
i.apply(window,arguments);
var e=o&&o.err_msg?", err_msg-> "+o.err_msg:"";
console.info("[jsapi] invoke->"+n+e);
}
}catch(r){
throw t([{
offset:d,
log:"invoke",
e:r
}]),r;
}
});
});
},
call:function(n){
this.ready(function(){
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(n);
}catch(o){
throw t([{
offset:d,
log:"call",
e:o
}]),o;
}
});
},
on:function(n,o){
this.ready(function(){
return"object"==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?void top.window.WeixinJSBridge.on(n,function(){
try{
o&&o.apply(window,arguments);
}catch(n){
throw t([{
offset:d,
log:"on",
e:n
}]),n;
}
}):!1;
});
}
};
return r;
});define("biz_common/dom/event.js",[],function(){
"use strict";
function e(e,t,n,o){
a.isPc||a.isWp?i(e,"click",o,t,n):i(e,"touchend",o,function(e){
if(-1==a.tsTime||+new Date-a.tsTime>200)return a.tsTime=-1,!1;
var n=e.changedTouches[0];
return Math.abs(a.y-n.clientY)<=5&&Math.abs(a.x-n.clientX)<=5?t.call(this,e):void 0;
},n);
}
function t(e,t){
if(!e||!t||e.nodeType!=e.ELEMENT_NODE)return!1;
var n=e.webkitMatchesSelector||e.msMatchesSelector||e.matchesSelector;
return n?n.call(e,t):(t=t.substr(1),e.className.indexOf(t)>-1);
}
function n(e,n,i){
for(;e&&!t(e,n);)e=e!==i&&e.nodeType!==e.DOCUMENT_NODE&&e.parentNode;
return e;
}
function i(t,i,o,r,c){
var s,d,u;
return"input"==i&&a.isPc,t?("function"==typeof o&&(c=r,r=o,o=""),"string"!=typeof o&&(o=""),
t==window&&"load"==i&&/complete|loaded/.test(document.readyState)?r({
type:"load"
}):"tap"==i?e(t,r,c,o):(s=function(e){
var t=r(e);
return t===!1&&(e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()),
t;
},o&&"."==o.charAt(0)&&(u=function(e){
var i=e.target||e.srcElement,r=n(i,o,t);
return r?(e.delegatedTarget=r,s(e)):void 0;
}),d=u||s,r[i+"_handler"]=d,t.addEventListener?void t.addEventListener(i,d,!!c):t.attachEvent?void t.attachEvent("on"+i,d,!!c):void 0)):void 0;
}
function o(e,t,n,i){
if(e){
var o=n[t+"_handler"]||n;
return e.removeEventListener?void e.removeEventListener(t,o,!!i):e.detachEvent?void e.detachEvent("on"+t,o,!!i):void 0;
}
}
var r=navigator.userAgent,a={
isPc:/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),
isWp:/Windows\sPhone/i.test(r),
tsTime:-1
};
return a.isPc||i(document,"touchstart",function(e){
var t=e.changedTouches[0];
a.x=t.clientX,a.y=t.clientY,a.tsTime=+new Date;
}),{
on:i,
off:o,
tap:e
};
});define("appmsg/copyright_report.js",["biz_common/dom/event.js"],function(t){
"use strict";
function o(t){
var o=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",t.scene,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&t=",Math.random()].join("");
window.isSg&&(o+="&from=sougou");
var e=new Image;
e.src=o.substr(0,1024);
}
function e(){
var t=__appmsgCgiData;
if("2"==t.copyright_stat){
for(var o=r("copyright_info"),e=r("js_article");o&&e!==o;)c.copyright_top+=o.offsetTop,
o=o.offsetParent;
i.on(window,"scroll",n);
}
}
function n(){
var t=window.pageYOffset||document.documentElement.scrollTop;
t+c.innerHeight>c.copyright_top&&(o({
scene:"1",
card_pos:"0"
}),i.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(t){
return document.getElementById(t);
}
var i=t("biz_common/dom/event.js"),c={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
copyright_top:0
};
return{
card_click_report:o,
card_pv_report:e
};
});define("appmsg/cache.js",["biz_wap/jsapi/core.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function i(){
o();
}
function n(e,i,n,o){
0>o||setTimeout(function(){
"avg"==e?a.setAvg(i,n,o):a.setSum(i,n,o),a.send();
},1150);
}
function o(){
var e=write_sceen_time-window.logs.pagetime.html_begin,i=Math.random()>=.8,o=!1;
try{
var a=t(decodeURIComponent(window.uin));
o=Math.ceil(a/100)%2!=0?!0:!1;
}catch(s){
o=!1;
}
if(window.isInWeixinApp()&&o){
for(var m=(location.href.replace(/\&key\=.*$/g,"#rd"),[]),f=document.getElementsByTagName("link"),u=0;u<f.length;u++)"stylesheet"==f[u].rel&&m.push(f[u].href);
r.invoke("cache",{
disable:!1,
appId:c,
resourceList:m
},function(o){
o&&"cache:ok"==o.err_msg&&i&&n("avg",27822,49,e);
});
}else window.isInWeixinApp()&&i&&n("avg",27822,47,e);
}
function t(e){
var i,n,o,t,r={},a=0,c=0,s="",m=String.fromCharCode,f=e.length,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(i=0;64>i;i++)r[u.charAt(i)]=i;
for(o=0;f>o;o++)for(n=r[e.charAt(o)],a=(a<<6)+n,c+=6;c>=8;)((t=a>>>(c-=8)&255)||f-2>o)&&(s+=m(t));
return s;
}
var r=e("biz_wap/jsapi/core.js"),a=e("biz_common/utils/monitor.js"),c="wx3be6367203f983ac";
i();
});define("appmsg/async.js",["biz_common/utils/string/html.js","appmsg/a_tpl.html.js","appmsg/img_copyright_tpl.html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","biz_wap/utils/storage.js","rt/appmsg/getappmsgext.rt.js","pages/version4video.js","appmsg/cdn_img_lib.js","biz_common/utils/url/parse.js","appmsg/a.js","appmsg/like.js","appmsg/comment.js","appmsg/reward_entry.js","appmsg/iframe.js"],function(require,exports,module,alert){
"use strict";
function saveCopy(e){
var i={};
for(var t in e)if(e.hasOwnProperty(t)){
var r=e[t],a=typeof r;
r="string"==a?r.htmlDecode():r,"object"==a&&(r=saveCopy(r)),i[t]=r;
}
return i;
}
function img_copyright(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var i={},t=e.img_copy_info.list,r=window.__appmsgCgiData.copyright_stat,a=window.__appmsgCgiData.source_biz,n=0,o=t.length;o>n;n++){
var s=t[n];
if(2==s.type){
if(2==r&&a==s.source_uin)continue;
i[s.img_url]={
source_nickname:s.source_nickname,
source_uin:s.source_uin,
source_encode_biz:s.source_encode_biz||""
};
}
}
for(var p=document.getElementsByTagName("img"),n=0,o=p.length;o>n;n++){
var s=p[n],d=s.getAttribute("data-src")||s.getAttribute("data-backsrc")||"";
if(i[d]){
var m=document.createElement("div");
m.innerHTML=TMPL.tmpl(img_copyright_tpl,i[d]);
{
var _=m.children[0],c=s.parentNode,l=c.insertBefore(_,s),f=l.childNodes[0];
(function(e){
DomEvent.on(l,"click",function(){
var i="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene=112#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?location.href=i:JSAPI.invoke("openUrlWithExtraWebview",{
url:i,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=i);
});
});
})(i[d]);
}
l.insertBefore(s,f);
}
}
}
}
function fillVedio(e){
if(vedio_iframes&&vedio_iframes.length>0)for(var i,t,r,a=0,n=vedio_iframes.length;n>a;++a)i=vedio_iframes[a],
t=i.iframe,r=i.src,e&&(r=r.replace(/\&encryptVer=[^\&]*/gi,""),r=r.replace(/\&platform=[^\&]*/gi,""),
r=r.replace(/\&cKey=[^\&]*/gi,""),r=r+"&encryptVer=6.0&platform=61001&cKey="+e),
t.setAttribute("src",r);
}
function fillData(e){
var i=e.adRenderData||{
advertisement_num:0
};
if(!i.flag&&i.advertisement_num>0){
var t=i.advertisement_num,r=i.advertisement_info;
window.adDatas.num=t;
for(var a=0;t>a;++a){
var n=null,o=r[a];
if(o.is_cpm=o.is_cpm||0,o.biz_info=o.biz_info||{},o.app_info=o.app_info||{},o.pos_type=o.pos_type||0,
o.logo=o.logo||"",100==o.pt)n={
usename:o.biz_info.user_name,
pt:o.pt,
url:o.url,
traceid:o.traceid,
adid:o.aid,
ticket:o.ticket,
is_appmsg:!0
};else if(102==o.pt)n={
appname:o.app_info.app_name,
versioncode:o.app_info.version_code,
pkgname:o.app_info.apk_name,
androiddownurl:o.app_info.apk_url,
md5sum:o.app_info.app_md5,
signature:o.app_info.version_code,
rl:o.rl,
traceid:o.traceid,
pt:o.pt,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};else if(101==o.pt)n={
appname:o.app_info.app_name,
app_id:o.app_info.app_id,
icon_url:o.app_info.icon_url,
appinfo_url:o.app_info.appinfo_url,
rl:o.rl,
traceid:o.traceid,
pt:o.pt,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};else if(103==o.pt||104==o.pt||2==o.pt&&o.app_info){
var s=o.app_info.down_count||0,p=o.app_info.app_size||0,d=o.app_info.app_name||"",m=o.app_info.category,_=["万","百万","亿"];
if(s>=1e4){
s/=1e4;
for(var c=0;s>=10&&2>c;)s/=100,c++;
s=s.toFixed(1)+_[c]+"次";
}else s=s.toFixed(1)+"次";
p>=1024?(p/=1024,p=p>=1024?(p/1024).toFixed(2)+"MB":p.toFixed(2)+"KB"):p=p.toFixed(2)+"B",
m=m?m[0]||"其他":"其他";
for(var l=["-","(",":",'"',"'","：","（","—","－","“","‘"],f=-1,u=0,g=l.length;g>u;++u){
var w=l[u],h=d.indexOf(w);
-1!=h&&(-1==f||f>h)&&(f=h);
}
-1!=f&&(d=d.substring(0,f)),o.app_info._down_count=s,o.app_info._app_size=p,o.app_info._category=m,
o.app_info.app_name=d,n={
appname:o.app_info.app_name,
app_rating:o.app_info.app_rating||0,
app_id:o.app_info.app_id,
channel_id:o.app_info.channel_id,
md5sum:o.app_info.app_md5,
rl:o.rl,
pkgname:o.app_info.apk_name,
url_scheme:o.app_info.url_scheme,
androiddownurl:o.app_info.apk_url,
versioncode:o.app_info.version_code,
appinfo_url:o.app_info.appinfo_url,
traceid:o.traceid,
pt:o.pt,
url:o.url,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};
}else if(105==o.pt){
var v=o.card_info.card_id||"",y=o.card_info.card_ext||"";
y=y.htmlDecode();
try{
y=JSON.parse(y),y.outer_str=o.card_info.card_outer_id||"",y=JSON.stringify(y);
}catch(b){
y="{}";
}
n={
card_id:v,
card_ext:y,
pt:o.pt,
ticket:o.ticket||"",
url:o.url,
rl:o.rl,
tid:o.traceid,
traceid:o.traceid,
type:o.type,
adid:o.aid,
is_appmsg:!0
};
}else if(106==o.pt){
var x=o.mp_shop_info.pid||"",j=o.mp_shop_info.outer_id||"";
n={
pid:x,
outer_id:j,
pt:o.pt,
url:o.url,
rl:o.rl,
tid:o.traceid,
traceid:o.traceid,
type:o.type,
adid:o.aid,
is_appmsg:!0
};
}
var k=o.image_url;
require("appmsg/cdn_img_lib.js");
var q=require("biz_common/utils/url/parse.js");
k&&k.isCDN()&&(k=k.replace(/\/0$/,"/640"),k=k.replace(/\/0\?/,"/640?"),o.image_url=q.addParam(k,"wxfrom","50",!0)),
adDatas.ads["pos_"+o.pos_type]={
a_info:o,
adData:n
};
}
var z=function(e){
var i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
"undefined"!=typeof e&&(i=e);
10>=i&&(I.style.display="block",DomEvent.off(window,"scroll",z));
},E=document.getElementById("js_bottom_ad_area"),I=document.getElementById("js_top_ad_area"),D=adDatas.ads;
for(var O in D)if(0==O.indexOf("pos_")){
var n=D[O],o=!!n&&n.a_info;
if(n&&o)if(0==o.pos_type)E.innerHTML=TMPL.tmpl(a_tpl,o);else if(1==o.pos_type){
I.style.display="none",I.innerHTML=TMPL.tmpl(a_tpl,o),DomEvent.on(window,"scroll",z);
var M=0;
window.localStorage&&(M=1*localStorage.getItem(O)||0),window.scrollTo(0,M),z(M);
}
}
require("appmsg/a.js");
}
var S=e.appmsgstat||{};
window.appmsgstat||(window.appmsgstat=S),S.show&&(!function(){
var e=document.getElementById("js_read_area3"),i=document.getElementById("like3");
e.style.display="block",i.style.display="inline",S.liked=window.is_temp_url?window.liked:S.liked,
S.liked&&Class.addClass(i,"praised"),i.setAttribute("like",S.liked?"1":"0");
var t=document.getElementById("likeNum3"),r=document.getElementById("readNum3"),a=window.is_temp_url?window.read_num:S.read_num,n=window.is_temp_url?window.like_num:S.like_num;
a||(a=1),n||(n="赞"),parseInt(a)>1e5?a="100000+":"",parseInt(n)>1e5?n="100000+":"",
r&&(r.innerHTML=a),t&&(t.innerHTML=n);
}(),require("appmsg/like.js")),1==e.comment_enabled&&(window.can_fans_comment_only=e.only_fans_can_comment,
require("appmsg/comment.js")),-1==ua.indexOf("WindowsWechat")&&-1!=ua.indexOf("MicroMessenger")&&e.reward&&(rewardEntry=require("appmsg/reward_entry.js"),
rewardEntry.handle(e.reward,getCountPerLine()));
}
function getAsyncData(){
var is_need_ticket="";
vedio_iframes&&vedio_iframes.length>0&&(is_need_ticket="&is_need_ticket=1");
var is_need_ad=1,_adInfo=null;
if(window.localStorage)try{
var key=[biz,sn,mid,idx].join("_"),_ad=adLS.get(key);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=_ad.time,_now=+new Date;
_adInfo&&18e4>_now-1*_adInfoSaveTime&&1*_adInfo.advertisement_num>0?is_need_ad=0:adLS.remove(key);
}catch(e){
is_need_ad=1,_adInfo=null;
}
(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx)&&(is_need_ad=0);
var screen_num=Math.ceil(document.body.scrollHeight/(document.documentElement.clientHeight||window.innerHeight)),both_ad=screen_num>=2?1:0;
ajax({
url:"/mp/getappmsgext?__biz="+biz+"&appmsg_type="+appmsg_type+"&mid="+mid+"&sn="+sn+"&idx="+idx+"&scene="+source+"&title="+encodeURIComponent(msg_title.htmlDecode())+"&ct="+ct+"&devicetype="+devicetype.htmlDecode()+"&version="+version.htmlDecode()+"&f=json&r="+Math.random()+is_need_ticket+"&is_need_ad="+is_need_ad+"&comment_id="+comment_id+"&is_need_reward="+is_need_reward+"&both_ad="+both_ad+"&reward_uin_count="+(is_need_reward?3*getCountPerLine():0)+(window.send_time?"&send_time="+send_time:""),
data:{
is_only_read:is_only_read,
req_id:window.req_id||"",
is_temp_url:window.is_temp_url||0
},
type:"POST",
dataType:"json",
rtId:"27613",
rtKey:"50",
rtDesc:rtGetAppmsgExt,
async:!0,
success:function(e){
if(e)try{
if(e&&e.base_resp&&e.base_resp.wxtoken&&(window.wxtoken=e.base_resp.wxtoken),window.fromWeixinCached&&require("appmsg/iframe.js"),
fillVedio(e.appmsgticket?e.appmsgticket.ticket:""),img_copyright(e),e.ret)return;
var i={};
if(0==is_need_ad)i=_adInfo,i||(i={
advertisement_num:0
});else{
if(e.advertisement_num>0&&e.advertisement_info){
var t=e.advertisement_info;
i.advertisement_info=saveCopy(t);
}
i.advertisement_num=e.advertisement_num;
}
1==is_need_ad&&(window._adRenderData=i),window.wx_user_can_reward=e.user_can_reward,
fillData({
adRenderData:i,
appmsgstat:e.appmsgstat,
comment_enabled:e.comment_enabled,
only_fans_can_comment:e.only_fans_can_comment,
reward:{
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp
}
});
}catch(r){
var a=new Image;
return a.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(r.toString())+"&r="+Math.random()).substr(0,1024),
void(console&&console.error(r));
}
},
error:function(){
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
function getCountPerLine(){
return DomEvent.on(window,"resize",function(){
onResize(),rewardEntry&&rewardEntry.render(getCountPerLine());
}),onResize();
}
function onResize(){
var e=window.innerWidth||document.documentElement.clientWidth;
try{
var i=document.getElementById("page-content").getBoundingClientRect();
i.width&&(e=i.width);
}catch(t){}
var r=30,a=34,n=Math.floor(.9*(e-r)/a);
return document.getElementById("js_reward_inner")&&(document.getElementById("js_reward_inner").style.width=n*a+"px"),
getCountPerLine=function(){
return n;
},n;
}
require("biz_common/utils/string/html.js");
var a_tpl=require("appmsg/a_tpl.html.js"),img_copyright_tpl=require("appmsg/img_copyright_tpl.html.js"),iswifi=!1,ua=navigator.userAgent,in_mm=-1!=ua.indexOf("MicroMessenger"),inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat"),DomEvent=require("biz_common/dom/event.js"),offset=200,ajax=require("biz_wap/utils/ajax.js"),Class=require("biz_common/dom/class.js"),JSAPI=require("biz_wap/jsapi/core.js"),TMPL=require("biz_common/tmpl.js"),LS=require("biz_wap/utils/storage.js"),rtGetAppmsgExt=require("rt/appmsg/getappmsgext.rt.js"),rewardEntry,adLS=new LS("ad"),iframes=document.getElementsByTagName("iframe"),iframe,js_content=document.getElementById("js_content"),vedio_iframes=[],w=js_content.offsetWidth,h=3*w/4;
window.logs.video_cnt=0;
for(var i=0,len=iframes.length;len>i;++i){
iframe=iframes[i];
var src=iframe.getAttribute("data-src")||"",realsrc=iframe.getAttribute("src")||src;
if(realsrc){
var Version4video=require("pages/version4video.js");
if(!Version4video.isShowMpVideo()&&(0==realsrc.indexOf("http://v.qq.com/iframe/player.html")||0==realsrc.indexOf("https://v.qq.com/iframe/player.html")||0==realsrc.indexOf("http://v.qq.com/iframe/preview.html")||0==realsrc.indexOf("https://v.qq.com/iframe/preview.html"))||0==realsrc.indexOf("http://z.weishi.com/weixin/player.html")){
-1==realsrc.indexOf("http://z.weishi.com/weixin/player.html")&&-1==src.indexOf("http://z.weixin.com/weixin/player.html")&&(src=src.replace(/^https:/,location.protocol),
src=src.replace(/^http:/,location.protocol),src=src.replace(/preview.html/,"player.html"),
realsrc=realsrc.replace(/^https:/,location.protocol),realsrc=realsrc.replace(/^http:/,location.protocol),
realsrc=realsrc.replace(/preview.html/,"player.html")),realsrc=realsrc.replace(/width=\d+/g,"width="+w),
realsrc=realsrc.replace(/height=\d+/g,"height="+h),in_mm&&(0==realsrc.indexOf("http://v.qq.com/iframe/player.html")||0==realsrc.indexOf("https://v.qq.com/iframe/player.html"))||in_mm&&(0==realsrc.indexOf("http://v.qq.com/iframe/preview.html")||0==realsrc.indexOf("https://v.qq.com/iframe/preview.html"))?vedio_iframes.push({
iframe:iframe,
src:realsrc
}):iframe.setAttribute("src",realsrc),iframe.width=w,iframe.height=h,iframe.style.setProperty&&(iframe.style.setProperty("width",w+"px","important"),
iframe.style.setProperty("height",h+"px","important")),window.__addIdKeyReport&&window.__addIdKeyReport("28307",10),
window.logs.video_cnt++;
continue;
}
}
}
window.adDatas={
ads:{},
num:0
};
var js_toobar=document.getElementById("js_toobar3"),innerHeight=window.innerHeight||document.documentElement.clientHeight,onScroll=function(){
var e=window.pageYOffset||document.documentElement.scrollTop,i=js_toobar.offsetTop;
e+innerHeight+offset>=i&&(getAsyncData(),DomEvent.off(window,"scroll",onScroll));
};
iswifi?(DomEvent.on(window,"scroll",onScroll),onScroll()):getAsyncData();
});