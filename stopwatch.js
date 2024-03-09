let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let  hour, min, sec, dsec;


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 100);
}

//시계 중지
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
    return 
}

// 시계 초기화
function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00.0";
    time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    min = parseInt(String(time / 600));
    sec = parseInt(String((time - (min * 600)) / 10));
    dsec = time % 10;
    return String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0') + "." + String(dsec).padStart(1, '0');
}
