// الحصول على العناصر
const image = document.getElementById('songImage');
const song = document.getElementById('song')
// إضافة حدث النقر على الصورة
image.addEventListener('click', function() {
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
});
// part 2

// الحصول على العناصر
const image2 = document.getElementById('songImage-2');
const song2 = document.getElementById('song-2')
// إضافة حدث النقر على الصورة
image2.addEventListener('click', function() {
    if (song2.paused) {
        song2.play();
    } else {
        song2.pause();
    }
});
// part 3


// الحصول على العناصر
const image3 = document.getElementById('songImage-3');
const song3 = document.getElementById('song-3')
// إضافة حدث النقر على الصورة
image3.addEventListener('click', function() {
    if (song3.paused) {
        song3.play();
    } else {
        song3.pause();
    }
});