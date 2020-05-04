
//-----------------------------------------------------------------------------
//Define folder of images to use.
var imageFolder = 'card_images/';

// Specify card diameters.
var cardWidthNum  = 800;
var cardHeightNum = 800;

//-----------------------------------------------------------------------------
// Calculate some useful values.
var cardWidth     = cardWidthNum.toString() + 'px';
var cardHalfWidth = cardHeightNum.toString() + 'px';

// Check how much vertical space we have, adjust vertical padding to position
// the card in the middle.
let vertical_padding_element = document.getElementById('vertical_padding');
let vertical_padding = (window.innerHeight - cardHeightNum) / 2;
vertical_padding_element.style.height = vertical_padding.toString() + 'px';

// Initialise the correct amount of horizontal padding.
let horizontal_padding_element = document.getElementById('horizontal_padding');
let horizontal_padding = (window.innerWidth - cardWidthNum) / 2;
horizontal_padding_element.style.width = horizontal_padding.toString() + 'px';
horizontal_padding_element.style.height = cardHeightNum.toString() + 'px';

// Format the card element.
var card = document.getElementById('card');
card.style.position = 'relative';
card.style.transition = 'transform 1s';
card.style.backgroundColor = "green";

//Set the status of the card to 0.
//0 is front facing and closed.
//1 is open.
//2 is rear facing and closed.
var cardStatus = 0;

//Format the LHS of the card.
var cardLHS = document.getElementById('cardLHS');
cardLHS.style.position = 'absolute';
cardLHS.style.zIndex = '1';
cardLHS.style.transformStyle = 'preserve-3d';
cardLHS.style.transition = 'transform 1s';
cardLHS.style.transformOrigin = '0 0 0';
cardLHS.style.width = cardWidthNum.toString() + "px";
cardLHS.style.height = cardHeightNum.toString() + "px";
cardLHS.style.backgroundColor = "red";

//Format the RHS of the card.
var cardRHS = document.getElementById('cardRHS');
cardRHS.style.position = 'absolute';
cardRHS.style.zIndex = '0';
cardRHS.style.transformStyle = 'preserve-3d';
cardRHS.style.transition = 'transform 1s';
cardRHS.style.transformOrigin = '0 0 0';
cardRHS.style.width = cardWidthNum.toString() + "px";
cardRHS.style.height = cardHeightNum.toString() + "px";
cardRHS.style.backgroundColor = "blue";

//Create the first outside face.
cardLHS.innerHTML += '<div id="out1"></div>';
var cardOut1 = document.getElementById('out1');
let card_out_1_image_path = imageFolder + "OutsideFront.jpg"
cardOut1.style.width = cardWidthNum.toString() + "px";
cardOut1.style.height = cardHeightNum.toString() + "px";
cardOut1.style.backgroundImage = 'url(' + card_out_1_image_path + ')';
cardOut1.style.position = 'absolute';
cardOut1.style.backfaceVisibility = 'hidden';

//Create the first inside face.
cardLHS.innerHTML += '<div id="in1"></div>';
var cardIn1 = document.getElementById('in1');
let card_in_1_image_path = imageFolder + "InsideFront.jpg"
cardIn1.style.width = cardWidthNum.toString() + "px";
cardIn1.style.height = cardHeightNum.toString() + "px";
cardIn1.style.backgroundImage = 'url(' + card_in_1_image_path + ')';
cardIn1.style.transform = 'rotateY( 180deg )';
cardIn1.style.position = 'absolute';
cardIn1.style.backfaceVisibility = 'hidden';

//Create the second inside face.
cardRHS.innerHTML += '<div id="in2"></div>';
var cardIn2 = document.getElementById('in2');
let card_in_2_image_path = imageFolder + "InsideBack.jpg"
cardIn2.style.width = cardWidthNum.toString() + "px";
cardIn2.style.height = cardHeightNum.toString() + "px";
cardIn2.style.backgroundImage = 'url(' + card_in_2_image_path + ')';
cardIn2.style.position = 'absolute';
cardIn2.style.backfaceVisibility = 'hidden';

//Create the second outside face.
cardRHS.innerHTML += '<div id="out2"></div>';
var cardOut2 = document.getElementById('out2');
let card_out_2_image_path = imageFolder + "OutsideBack.jpg"
cardOut2.style.width = cardWidthNum.toString() + "px";
cardOut2.style.height = cardHeightNum.toString() + "px";
cardOut2.style.backgroundImage = 'url(' + card_out_2_image_path + ')';
cardOut2.style.transform = 'rotateY( 180deg )';
cardOut2.style.position = 'absolute';
cardOut2.style.backfaceVisibility = 'hidden';

//-----------------------------------------------------------------------------
// Put in a table to hold the videos.
cardIn1.innerHTML = '<table id="video_table"><tbody id="video_table_body"></tbody></table>';
let video_table_body = document.getElementById("video_table_body");

// Add some rows.
video_table_body.innerHTML += '<tr id="video_row_1"></tr>';
video_table_body.innerHTML += '<tr id="video_row_2"></tr>';
video_table_body.innerHTML += '<tr id="video_row_3"></tr>';

// Get pointers to rows.
let video_row_1 = document.getElementById("video_row_1");
let video_row_2 = document.getElementById("video_row_2");
let video_row_3 = document.getElementById("video_row_3");

// Put rhys's video in the card.
let rhys_video_html = '<video id="rhys_video" height="400" controls><source src="card_images/video_rhys.mp4" type="video/mp4"></video>';
video_row_1.innerHTML += '<td>' + rhys_video_html + '</td>';
let rhys_video = document.getElementById("rhys_video");
rhys_video.style.paddingLeft = "50px";
rhys_video.style.paddingTop = "50px";

// Put jonny's video in the card.
let jonny_video_html = '<video id="jonny_video" height="400" controls><source src="card_images/video_jonny.mp4" type="video/mp4"></video>';
video_row_1.innerHTML += '<td>' + jonny_video_html + '</td>';
let jonny_video = document.getElementById("jonny_video");
jonny_video.style.paddingTop = "50px";

// Put chris' video in the card.
let chris_video_html = '<video id="chris_video" width="400" controls><source src="card_images/video_chris.mp4" type="video/mp4"></video>';
video_row_2.innerHTML += '<td>' + chris_video_html + '</td>';
let chris_video = document.getElementById("chris_video");
chris_video.style.paddingLeft = "50px";
chris_video.style.paddingTop = "50px";






// Function to animate the LHS of the card.
function animCardLHS(){

  if(cardStatus == 0){

    cardLHS.style.transform = 'rotateY( -180deg )';
    let horizontal_transform_distance = (cardWidthNum / 2).toString() + "px";
    card.style.transform = 'translateX(' + horizontal_transform_distance + ')';
    cardLHS.style.zIndex = '1';
    cardRHS.style.zIndex = '0';
    cardStatus = 1;

  }else{

    cardLHS.style.transform = 'rotateY( 0deg )';
    card.style.transform = 'translateX(0px)';
    cardLHS.style.zIndex = '1';
    cardRHS.style.zIndex = '0';
    cardStatus = 0;

  };
};

// Function to animate the RHS of the card.
function animCardRHS(){

  if(cardStatus == 1){

    cardRHS.style.transform = 'rotateY( -180deg )';
    card.style.transform = 'translateX(' + cardWidth + ')';
    cardLHS.style.zIndex = '0';
    cardRHS.style.zIndex = '1';
    cardStatus = 2;

  }else{

    cardRHS.style.transform = 'rotateY( 0deg )';
    let horizontal_transform_distance = (cardWidthNum / 2).toString() + "px";
    card.style.transform = 'translateX(' + horizontal_transform_distance +')';
    cardLHS.style.zIndex = '0';
    cardRHS.style.zIndex = '1';
    cardStatus = 1;
    
  };
};

console.log('Loaded!');
