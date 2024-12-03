// ripple effect animation

jQuery(document).ready(function() {
    "use strict";
  
    $(".intro").ripples({
      dropRadius: 50,
      perturbance: 0.05,
      interactive: true,
      resolution: 500
    });
  
    //changes size of ripples based off of browser size
    $(".intro").ripples("updateSize");
  });
  
  //toggles between pages of the site, from title page to alignment chart
  
  $(".chart").hide();
  // $("#x").hide();
  $(".title-swap").hide();
  $("#explanation").hide();
  $(".subtitle").click(chartShow);
  // $("#button2").mouseenter(buttonChange);
  // $("#button2").mouseleave(buttonChangeBack);
  // $("#button2").click(chartHide);
  // $("#x").click(exitOut);
  $(".title").hover(changetoParagraph);
  $(".rectangle1").click(poemPage1);
  $(".rectangle2").click(poemPage2);
  $(".rectangle3").click(poemPage3);
  $(".rectangle4").click(poemPage4);
  $("#poem-container").hide();
  $("#backtochart").hide();
  $("#generateagain").click(exitOut);
  
  function chartShow() {
    // $(".chart").ripples("pause");
    $(".maintext").fadeOut(800);
    $(".title-swap").fadeOut(800);
    $("#explanation")
      .delay(500)
      .fadeIn(800)
      .delay(3500)
      .fadeOut(800);
    $(".chart")
      .delay(4800)
      .fadeIn(800);
  }
  
  function backAgain() {
    $("#poem-container").fadeOut(800);
    $("#generateagain").hide();
    $(".chart")
      .delay(500)
      .fadeIn(800);
  }
  
  function exitOut() {
    $("#poem-container").fadeOut(800);
    $("#backtochart").fadeOut(800);
    $(".maintext")
      .delay(500)
      .fadeIn(800);
    $(".title-swap").hide();
  }
  
  function changetoParagraph() {
    $(".title")
      .delay(1200)
      .fadeOut(500);
    $(".title-swap")
      .delay(1700)
      .fadeIn(800);
  }
  
  function poemPage1() {
    $("#poem-container").css("z-index", "5");
    $(".chart").delay(500).fadeOut(800);
    $("#poem-container").delay(1200).fadeIn(800);
    $("#backtochart").delay(1200).fadeIn(800);
    $(".chosen-alignment").html("An embrace, from a lover");
  }
  
  function poemPage2() {
    $("#poem-container").css("z-index", "5");
    $(".chart").delay(500).fadeOut(800);
    $("#poem-container").delay(1200).fadeIn(800);
    $("#backtochart").delay(1200).fadeIn(800);
    $(".chosen-alignment").html("A caress, from a lover");
  }
  
  function poemPage3() {
    $("#poem-container").css("z-index", "5");
    $(".chart").delay(500).fadeOut(800);
    $("#poem-container").delay(1200).fadeIn(800);
    $("#backtochart").delay(1200).fadeIn(800);
    $(".chosen-alignment").html("A brush, from a stranger");
  }
  
  function poemPage4() {
    $("#poem-container").css("z-index", "5");
    $(".chart").delay(500).fadeOut(800);
    $("#poem-container").delay(1200).fadeIn(800);
    $("#backtochart").delay(1200).fadeIn(800);
    $(".chosen-alignment").html("A kiss, from a stranger");
  }