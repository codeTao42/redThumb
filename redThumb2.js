var main = function(){
  $('.overlay').hide();
  $('.hovered').hover(
    function(){
      $('.overlay').show();
    },
    function(){
      $('.overlay').hide();
    });
  $('.hovered').hover(
    function(){
      $('.post-image').fadeTo(500,0.3);
    },
    function(){
      $('.post-image').fadeTo(500,1);
    });
  $('.hovered').hover(
    function(){
      $(this).css({'background-color':'rgba(30,30,30,0.3'})
    },
    function(){
      $(this).css({'background-color':'transparent'})
    });
  $('.share-box').hide();
  $('.share-button').hover(
    function(){
      $('.share-box').show();
    },
    function(){
      $('.share-box').hide();
    });
  $('.exit-button').click(
    function(){
      $('.hovered').remove();
    });
  $('.exit-button').click(
    function(){
      $('.info').remove();
    });
  $('.up-arrow').click(
    function(){
      var currentScore = $('.score-value').val();
      currentScore = parseInt(currentScore);
      currentScore += 1;
      $('.score-value').val(currentScore);
    });
  $('.down-arrow').click(
    function(){
      var currentScore = $('.score-value').val();
      currentScore = parseInt(currentScore);
      currentScore -= 1;
      $('.score-value').val(currentScore);
    });
};

$(document).ready(main)
