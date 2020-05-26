// displaying date when button is clicked
var day;
function todaysDate() {
    document.getElementById('date').innerHTML = new Date();

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case  6:
        day = 'Saturday';
        break;
    default:
        day = 'undefined';
}
document.getElementById('dayToday').innerHTML = 'The date today is ' + day;
}
//Displaying Nav Links
function createChildElementWithText(parentObj, childTagName, textValue, propty, val) {
    var childElementObj = document.createElement(childTagName);
    var textObj = document.createTextNode(textValue);
    childElementObj.appendChild(textObj);
    if (( val != undefined ) && (val.length != 0)){
        childElementObj.setAttribute(propty, val);
    }
    if (parentObj == document.body) {
        parentObj.appendChild(childElementObj);
    } else {
        
        document.getElementById(parentObj).appendChild(childElementObj);
    }
}
function init() {
    var links= ['Home', 'Game Collection', 'Videos and Streams', 'About Us', 'Contact Us'];
    var urls = [ 'index.html', 'games.html', 'videos.html', 'about.html', 'contact.html' ];
    for( var i=0; i<links.length; i++) {
        createChildElementWithText('nav', 'li', '', 'id', 'link1' + (i+1));
        createChildElementWithText('link1' + (i+1), 'a', links[i], 'href', './' + urls[i]);
    }
}