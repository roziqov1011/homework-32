
function add() {
    var age = Number(document.getElementById('age').value.trim());
    var FIZZ = 3;
    var BUZZ = 5;
    var matn = '';
    if (age == '') {
        matn = "raqam kiriting";
    } else if (age % BUZZ == 0 && age % FIZZ == 0) {
        matn = "FIZZBUZZ";
    } else if (age % BUZZ == 0) {
        matn = "BUZZ";
    } else if (age % FIZZ == 0) {
        matn = "FIZZ";
    } else{
        matn = age;
    }
    document.getElementById('text1').textContent = '<<  '+matn+'  >>';
    document.getElementById('text2').textContent = '<<  '+matn+'  >>';
    document.getElementById('text3').textContent = '<<  '+matn+'  >>';
    document.getElementById('text4').textContent = '<<  '+matn+'  >>';
    document.getElementById('text5').textContent = '<<  '+matn+'  >>';
    document.getElementById('text6').textContent = '<<  '+matn+'  >>';
    document.getElementById('text7').textContent = '<<  '+matn+'  >>';
    document.getElementById('text8').textContent = '<<  '+matn+'  >>';
    document.getElementById('text9').textContent = '<<  '+matn+'  >>';
    document.getElementById('text10').textContent = '<<  '+matn+'  >>';
    document.getElementById('text11').textContent = '<<  '+matn+'  >>';
    document.getElementById('text12').textContent = '<<  '+matn+'  >>';
    document.getElementById('text13').textContent = '<<  '+matn+'  >>';
    document.getElementById('text14').textContent = '<<  '+matn+'  >>';
    document.getElementById('text15').textContent = '<<  '+matn+'  >>';
    document.getElementById('text16').textContent = '<<  '+matn+'  >>';
}