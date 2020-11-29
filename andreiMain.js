let spanOne = document.getElementById('btnSpan1');
let spanTwo = document.getElementById('btnSpan2');
let spanThree = document.getElementById('btnSpan3');
let section = document.getElementById('extendedjs');

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

document.querySelector('#moreaboutme').addEventListener('mouseover', () => {
    if(spanOne.style.visibility === 'visible') {
        spanOne.style.visibility = 'hidden';
    }else {
        spanOne.style.visibility = 'visible';
    }
})

document.querySelector('#moreaboutme').addEventListener('mouseout', () => {
    if(spanOne.style.visibility === 'hidden') {
        spanOne.style.visibility = 'visible';
    }else {
        spanOne.style.visibility = 'hidden';
    }
})

document.querySelector('#resume').addEventListener('mouseover', () => {
    if(spanTwo.style.visibility === 'visible') {
        spanTwo.style.visibility = 'hidden';
    }else {
        spanTwo.style.visibility = 'visible';
    }
})

document.querySelector('#resume').addEventListener('mouseout', () => {
    if(spanTwo.style.visibility === 'hidden') {
        spanTwo.style.visibility = 'visible';
    }else {
        spanTwo.style.visibility = 'hidden';
    }
})

document.querySelector('#viewSrc').addEventListener('mouseover', () => {
    if(spanThree.style.visibility === 'visible') {
        spanThree.style.visibility = 'hidden';
    }else {
        spanThree.style.visibility = 'visible';
    }
})

document.querySelector('#viewSrc').addEventListener('mouseout', () => {
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