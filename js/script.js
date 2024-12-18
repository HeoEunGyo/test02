$(document).ready(function () {
  console.log("load!");

  // day_mafia 이미지 클릭 시 이벤트 실행
  $(".day_mafia").on("click", function () {
    // 첫 번째 이미지 등장
    setTimeout(function () {
      $(".night01").removeClass("hidden").addClass("fade-in");

      // 두 번째 이미지 첫 번째 이미지 등장 후 2초 후
      setTimeout(function () {
        $(".night02").removeClass("hidden").addClass("fade-in");

        // 세 번째 이미지 두 번째 이미지 등장 후 2초 후
        setTimeout(function () {
          $(".night03").removeClass("hidden").addClass("fade-in");

          // 모든 이미지 2초 후 사라짐
          setTimeout(function () {
            $(".night_background").removeClass("fade-in").addClass("hidden");
          }, 2000); // 세 번째 이미지 등장 후 2초 기다림
        }, 2000); // 두 번째 이미지 등장 후 2초 기다림
      }, 2000); // 첫 번째 이미지 등장 후 2초 기다림
    }, 0); // day_mafia 클릭 시 즉시 시작
  });

  // 문 클릭 상태 관리
  let doorOpen = true; // 초기 상태: 열림
  $(".door, .door_clicked").on("click", function () {
    if (doorOpen) {
      $(".door").hide(); // 열린 문 숨기기
      $(".door_clicked").show(); // 닫힌 문 보이기
    } else {
      $(".door_clicked").hide(); // 닫힌 문 숨기기
      $(".door").show(); // 열린 문 보이기
    }
    doorOpen = !doorOpen; // 상태 반전
  });

  // lamp 이미지 클릭 이벤트
  $(".lamp").on("click", function () {
    $(".lamp").hide(); // lamp 이미지 숨기기
    $(".lamp_clicked").show(); // lamp_clicked 이미지 표시
  });

  // lamp_clicked 이미지 클릭 이벤트
  $(".lamp_clicked").on("click", function () {
    $(".lamp_clicked").hide(); // lamp_clicked 이미지 숨기기
    $(".lamp").show(); // lamp 이미지 다시 표시
  });

  // 공통 클릭 이벤트 함수: 클릭 시 이미지 3번 나타났다 사라지기
  function repeatFadeInOut(target) {
    let count = 0; // 반복 횟수 초기화
    let interval = setInterval(function () {
      $(target).fadeIn(500).fadeOut(500); // 0.5초 동안 나타났다 사라지기
      count++;
      if (count === 3) {
        clearInterval(interval); // 3번 반복 후 종료
      }
    }, 1000); // 나타났다 사라지는 간격: 1초
  }

  // window 이미지 클릭 이벤트
  $(".window").on("click", function () {
    repeatFadeInOut(".window_clicked");
  });

  // deadman 이미지 클릭 이벤트
  $(".deadman").on("click", function () {
    repeatFadeInOut(".deadman_clicked");
  });

  // blood_footprint 이미지 클릭 이벤트
  $(".blood_footprint").on("click", function () {
    repeatFadeInOut(".blood_footprint_clicked");
  });

  // chair 이미지 클릭 이벤트
  $(".chair").on("click", function () {
    repeatFadeInOut(".chair_clicked");
  });

  // 기존 mop, bucket 클릭 이벤트 유지
  $(".mop").on("click", function () {
    repeatFadeInOut(".mop_clicked");
  });

  $(".bucket").on("click", function () {
    repeatFadeInOut(".bucket_clicked");
  });

  // person01 ~ person04 클릭 시 진동 효과
  $(".person01, .person02, .person03, .person04").on("click", function () {
    $(this).addClass("shake");
    setTimeout(() => {
      $(this).removeClass("shake");
    }, 1000);
  });

  // person01, person02, person03, person04 클릭 시 진동 효과
  $(".person01, .person02, .person03, .person04").on("click", function () {
    $(this).addClass("shake");
    setTimeout(() => {
      $(this).removeClass("shake");
    }, 1000);
  });
});
