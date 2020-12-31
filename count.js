function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (seconds < 10) {
            seconds = "0" + seconds
    }
    if (minutes < 10) {
            minutes = "0" + minutes
    }
    if (hours < 10) {
            hours = "0" + hours
    }
    if (days < 100) {
            days = "0" + days
    }
    else if (days < 10) {
            days = "0" + days
    }
    return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
    };
}

function displayText(txtmessage, txtmessage2, txtSize, Stroke1, Stroke2, Stroke3, Fill1, Fill2, Fill3, y1, y2) {

    textSize(txtSize);
    stroke(Stroke1, Stroke2, Stroke3);
    strokeWeight(3);
    fill(Fill1, Fill2, Fill3);
    textAlign(CENTER);
    if (height > width) {
            y1 *= 2.5;
            y2 *= 2;
    }
    text(txtmessage, width / 2, y1);
    text(txtmessage2, width / 2, y2);
    textSize(18);
    // stroke(Stroke1, Stroke2, Stroke3);
    strokeWeight(0);
}

function changeDeadLine(date) {
    //newdate = Date(date);
    deadline = date;
    isNewYear = false;
}

function changeMessage(n, nmessage) {
    if (!changed) {
            switch (n) {
                    case 1:
                            message = nmessage;
                            break;
                    case 2:
                            message2 = nmessage;

            }
    }
    changed = true;
}