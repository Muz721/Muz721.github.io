init();
function init() {
    var prime_search =document.getElementById("prime_searsh");
    var prime_searsh_form = document.getElementById("prime_searsh_form");
    var prime_cancel = document.getElementById("prime_cancel");
    prime_search.onclick = function() {
        prime_searsh_form.style.display="block";
        prime_cancel.style.display="block";
    }
    prime_cancel.onclick = function(){
        prime_searsh_form.style.display="none";
        prime_cancel.style.display="none";
    }
// 监听 visibility change 事件

document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        document.title = '测试';
    } else {
        document.title = '标题';
    }
    
    });

this.axios.get('/apis/banner/json')
.then(res => {
  console.log("成功")
})
.catch(res => {
  console.log(res.data)
});
}