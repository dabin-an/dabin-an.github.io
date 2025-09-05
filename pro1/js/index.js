// 스크롤시 어떤 동작을 주려고 할 때 아래 구문이 반드시 포함되어야 한다.
window.onscroll = function() {myFunction()};

function myFunction() {
//    페이지 프로그레스바 
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

// 탑버튼 보이기
 if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    
    // 스크롤바를 20보다 더 크게 내린경우
    document.getElementById("top").style.opacity = "1";
    } 
    // 스크롤바를 20보다 적게 올린경우 즉, 스크롤바를 위로 올리는 경우
    else {
    document.getElementById("top").style.opacity = "0";
    }
}




