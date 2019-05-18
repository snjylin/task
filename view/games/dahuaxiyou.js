$(function(){

  var keju_data = data && data.keju && data.keju.xlinfo;
  var dalishi_data = data && data.dalishi && data.dalishi.xlinfo1;

  loadData(8, keju_data);
  opt(keju_data);

  $('li').on('click', function(){
    $(this).addClass('cur');
    $(this).siblings('li').removeClass('cur');
  });

  $('li:first').on('click', function(){
    loadData(8, keju_data);
    opt(keju_data);
  });

  $('li:last').on('click', function(){
    loadData(8, dalishi_data);
    opt(dalishi_data);
  });

  function opt(data){
    $('.opt input').on('input', function(){
      var $this = $(this);
      var search = $this.val();
      console.log(search);
      var html = '';
      for (var i = 0; i < data.length; i++) {
        if (data[i].question.indexOf(search) > -1 || data[i].opt1.indexOf(search) > -1) {
          html += '<tr><td>'+data[i].question+'</td><td>'+data[i].opt1+'</td></tr>';
        }
      }
      if (html) {
        $('table tbody').html(html);
      } else {
        $('table tbody').html('<tr><td colspan="2">没有搜索到相关的结果!</td></tr>');
      }
    });

    $('.reset').on('click', function(){
      $('.opt input').val('');
      loadData(8, data);
    });
  }

  /**
   * [loadData description]
   * @param {[type]}  length   [description]
   * @param {[type]}  data     [description]
   * @param {Boolean} isRandom [description]
   */
  function loadData(length, data, isRandom){
    var arr = [];
    var html = '';
    if (isRandom === true) {
      arr = random_arr(length, data)
    } else {
      arr = [0, 1, 2, 3, 4, 5, 6, 7];
    }
    for (var i = 0; i < arr.length; i++) {
      html += '<tr><td>'+data[arr[i]].question+'</td><td>'+data[arr[i]].opt1+'</td></tr>';
    }
    $('table tbody').html(html);
  }

});


/**
 * 随机整数
 * @param  {[type]} min [description]
 * @param  {[type]} max [description]
 * @return {[type]}     [description]
 */
function random(min, max){
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random()*(max-min)) + min;
}
/**
 * 随机数组
 * @param  {[type]} length     [description]
 * @param  {[type]} data [description]
 * @return {[type]}            [description]
 */
function random_arr(length, data){
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(random(data.length));
  }
  return(arr);
}
