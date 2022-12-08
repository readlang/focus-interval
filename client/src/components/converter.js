// input total time in seconds (inputs must be positive integers)

function converter(total) { 
    let hours = 0, mins = 0, secs = 0;

    if (total < 60) {
        secs = total;
    } else if (total < 3600) {
        mins = (total - (total % 60))/60
        secs = total - (mins * 60)
    } else {
        hours = (total - (total % 3600))/3600
        mins = (total-(hours*3600) - ((total-(hours*3600)) % 60))/60
        secs = total - (hours * 3600) - (mins * 60)
    }

    return(
        {
        disp: `${hours ? hours+":" : ""}${mins.toLocaleString('en-US', {minimumIntegerDigits: 2})}:${secs.toLocaleString('en-US', {minimumIntegerDigits: 2})}`,
        h: hours,
        m: mins,
        s: secs,
        }
    )
}

export default converter;