const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

//돋보기 모양 focus 시키는것.
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    //요소의 속성값을 설정.
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//focus 가 해제 됐을때
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// 자동으로 올해 년도 삽입
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();