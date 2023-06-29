

//뱃지를 스크롤 할때 사라지고 나타내는 설정
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// throttle() : 0.3 초 단위로 부하를 줘서 함수가 우루루 실행되는걸 방지하는 기능 도입. 스크롤 기능에 쓰기 좋음. 단위는 ms.
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if (window.scrollY > 500){
        //배지 숨기기 gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x:0
        })
    } else {
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x:100
        })
    };
}, 300));


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
});

//순차적으로 요소 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    //애니메이션 처리 기능
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});


// SWIPER

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    //반복재생 유무
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000  //ms 단위
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next',
    }
})



// 버튼 하나로 화면 숨기고 나타내기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    };
})


// YOUTUBE

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

  //size 는 위아래로 움직이는 크기
function floatingObject(selector, delay, size) {
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
        y: size,
        repeat: -1, // -1은 무한 반복
        yoyo: true, //다시 위로 올라가게하는
        ease: Power1.easeInOut,
        delay: random(0, delay) //몇초뒤에 실행하겠다는 지연효과
    })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//scrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement : spyEl, //보여짐의 여부를 감시할 요소를 지정
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); //new ScrollMagic.Controller() 내부의 컨트롤러에 할당해서 실제로 동작하게 하는
});

