// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];
});

function selectRGBDvideos(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    pill = scenePill.getAttribute("data-value");

    video_active0 = document.getElementById("compVideo0");
    video_active0.src = "visual/rgb/" + pill + ".mp4";

    video_active1 = document.getElementById("compVideo1");
    video_active1.src = "visual/dpt/" + pill + ".mp4";

    video_active0.load();    
    video_active1.load();    
}

function selectC2Fvideos(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    pill = scenePill.getAttribute("data-value");

    video_active2 = document.getElementById("compVideo2");
    video_active2.src = "visual/rgb/coarse/" + pill + ".mp4";

    video_active3 = document.getElementById("compVideo3");
    video_active3.src = "visual/rgb/" + pill + ".mp4";

    video_active2.load();    
    video_active3.load();    
}

function selectIAGSvideos(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    pill = scenePill.getAttribute("data-value");

    video_active4 = document.getElementById("compVideo4");
    video_active4.src = "visual/rgb/no_mlp/" + pill + ".mp4";

    video_active5 = document.getElementById("compVideo5");
    video_active5.src = "visual/rgb/" + pill + ".mp4";

    video_active4.load();    
    video_active5.load();    
}

function selectiframe(scenePill) {
    var checkbox = document.getElementById("input_show");
    var pill = scenePill.getAttribute("data-value");
    var frame = document.getElementById("viser_demo");

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    activeScenePill = scenePill

    scenePill.classList.add("active");
    if (checkbox.checked) {
        frame.src = "https://VistaDream-Project-Page.github.io/build/?playbackPath=https://VistaDream-Project-Page.github.io/recordings/" + pill + "_wo_input.viser";
    } else {
        frame.src = "https://VistaDream-Project-Page.github.io/build/?playbackPath=https://VistaDream-Project-Page.github.io/recordings/" + pill + ".viser";
    }
}

function updateiframe() {
    var checkbox = document.getElementById("input_show");
    var frame = document.getElementById("viser_demo");
    pill = activeScenePill.getAttribute("data-value");
    if (checkbox.checked) {
        frame.src = "https://VistaDream-Project-Page.github.io/build/?playbackPath=https://VistaDream-Project-Page.github.io/recordings/" + pill + "_wo_input.viser";
    } else {
        frame.src = "https://VistaDream-Project-Page.github.io/build/?playbackPath=https://VistaDream-Project-Page.github.io/recordings/" + pill + ".viser";
    }
}