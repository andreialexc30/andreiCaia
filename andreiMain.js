let spanOne = document.getElementById('btnSpan1');
let spanTwo = document.getElementById('btnSpan2');
let spanThree = document.getElementById('btnSpan3');
let section = document.getElementById('extendedjs');
const aboutMe = document.querySelector('#moreaboutme');
const resume = document.querySelector('#resume');
const viewSrc = document.querySelector('#viewSrc');

$(document).ready(function(){
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('nav--open');
        $(this).toggleClass('open')
    })
})

document.querySelector('.arrowBtn').addEventListener('click', () => {
    if(section.style.display === 'block') {
        section.style.display = 'none';
    }else {
        section.style.display = 'block';
    }
})

document.querySelector('.arrowBottom').addEventListener('click', () => {
    if(section.style.display === 'none') {
        section.style.display = 'block';
    }else {
        section.style.display = 'none';
    }
})

aboutMe.addEventListener('mouseover', () => {
    if(spanOne.style.visibility === 'visible') {
        spanOne.style.visibility = 'hidden';
    }else {
        spanOne.style.visibility = 'visible';
    }
})

aboutMe.addEventListener('mouseout', () => {
    if(spanOne.style.visibility === 'hidden') {
        spanOne.style.visibility = 'visible';
    }else {
        spanOne.style.visibility = 'hidden';
    }
})

resume.addEventListener('mouseover', () => {
    if(spanTwo.style.visibility === 'visible') {
        spanTwo.style.visibility = 'hidden';
    }else {
        spanTwo.style.visibility = 'visible';
    }
})

resume.addEventListener('mouseout', () => {
    if(spanTwo.style.visibility === 'hidden') {
        spanTwo.style.visibility = 'visible';
    }else {
        spanTwo.style.visibility = 'hidden';
    }
})

viewSrc.addEventListener('mouseover', () => {
    if(spanThree.style.visibility === 'visible') {
        spanThree.style.visibility = 'hidden';
    }else {
        spanThree.style.visibility = 'visible';
    }
})

viewSrc.addEventListener('mouseout', () => {
    if(spanThree.style.visibility === 'hidden') {
        spanThree.style.visibility = 'visible';
    }else {
        spanThree.style.visibility = 'hidden';
    }
})

document.getElementById('projectsbutton').addEventListener('click', () => {
    location.href = 'pages/projects.html'
})

document.getElementById('moreaboutme').addEventListener('click', () => {
    location.href = 'pages/about.html'
})
