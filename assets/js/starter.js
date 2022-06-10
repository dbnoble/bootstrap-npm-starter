// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

 var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
 var alphabetArray = alphabet.split('');

$(document).ready(function() {

$.wait = function( callback, seconds){
   return window.setTimeout( callback, seconds * 1000 );
}

  	function isLetter(c) {
  		return c.toLowerCase() != c.toUpperCase();
	}
    
  function wagdieText(input) {
    var result = '';
    $.each(input.split(''), function() {
     if(isLetter(this)){
      var calcNum = alphabetArray.indexOf(this[0]) + 120172;
      result += '&#' + calcNum + ';';
	}
	else
		{
			result += this;
		}
    });
    return result;
  }

    var initialText = $('#wagdieField').val();
    $('#wagdieResult').html(wagdieText(initialText));

function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}
function copyButton(){
    copyToClipboard($('#wagdieResult').text());
}
  
  $('#wagdieButton').click(function() {
    var theText = $('#wagdieField').val();
    $('#wagdieResult').html(wagdieText(theText));
    $('#resultsDiv button').attr('disabled', false);
  });
  
  $('#tweetThis').click(function() {
    window.open('https://twitter.com/intent/tweet?text='+$('#wagdieResult').text());
  });
  
  $('#copyToClipboard').click(function() {
    copyButton();
    $(this).html('Copied!');
    $.wait( function(){ $('#copyToClipboard').html('Copy to Clipboard') }, 1);
  });
  
});