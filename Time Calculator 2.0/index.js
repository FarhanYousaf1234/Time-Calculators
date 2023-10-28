function calculateTime() {
    const entryHoursInput = document.getElementById('entryHours');
    const exitHoursInput = document.getElementById('exitHours');
    const defaultRadioValue = document.querySelector('input[name="defaultTime"]:checked').value;

    const entryHoursValue = entryHoursInput.value;
    const exitHoursValue = exitHoursInput.value;

    // Reset borders to default
    entryHoursInput.style.border = '1px solid #ccc';
    exitHoursInput.style.border = '1px solid #ccc';

    if (!entryHoursValue || !exitHoursValue) {
        if (!entryHoursValue) {
            entryHoursInput.style.border = '1px solid red';
        }

        if (!exitHoursValue) {
            exitHoursInput.style.border = '1px solid red';
        }
        return;
    }

    // Split hours and minutes
    const entryHours = entryHoursValue.split(':');
    const exitHours = exitHoursValue.split(':');
    const entryHoursVal = parseInt(entryHours[0]);
    const entryMinutes = parseInt(entryHours[1]);
    const exitHoursVal = parseInt(exitHours[0]);
    const exitMinutes = parseInt(exitHours[1]);

    // Convert AM/PM time to 24-hour format
    const entryHours24 = entryHoursValue.includes("AM") ? entryHoursVal : entryHoursVal + 12;
    const exitHours24 = exitHoursValue.includes("AM") ? exitHoursVal : exitHoursVal + 12;

    // Calculate total hours and minutes
    let totalHours = exitHours24 - entryHours24;
    let totalMinutes = exitMinutes - entryMinutes;

    if (totalMinutes < 0) {
        totalHours -= 1;
        totalMinutes += 60;
    }
    totalHours = Math.max(totalHours, 0);
    totalMinutes = Math.max(totalMinutes, 0);

    // Calculate remaining time based on selected default value
    const defaultHours = parseInt(defaultRadioValue);
    let remainingHours = defaultHours - totalHours-1;
    let remainingMinutes = 60 - totalMinutes;

    if(remainingMinutes===60){
        remainingHours+=1;
        remainingMinutes=0;
    }

    document.getElementById('totalTime').textContent = `${totalHours}h ${totalMinutes}min`;
    document.getElementById('timeRemaining').textContent = `${remainingHours}h ${remainingMinutes}min`;
}



function calculateTimeAdvanced() {
    const entryDateInput = document.getElementById('entryDate');
    const exitDateInput = document.getElementById('exitDate');
    const entryTimeInput = document.getElementById('entryTime');
    const exitTimeInput = document.getElementById('exitTime');
    const defaultRadioValue = document.querySelector('input[name="defaultTimeAdvanced"]:checked').value;

    const entryDate = new Date(entryDateInput.value);
    const exitDate = new Date(exitDateInput.value);
    const entryTime = entryTimeInput.value.split(':');
    const exitTime = exitTimeInput.value.split(':');
    const entryHours = parseInt(entryTime[0]);
    const entryMinutes = parseInt(entryTime[1]);
    const exitHours = parseInt(exitTime[0]);
    const exitMinutes = parseInt(exitTime[1]);

    // Reset borders to default
    entryDateInput.style.border = '1px solid #ccc';
    exitDateInput.style.border = '1px solid #ccc';
    entryTimeInput.style.border = '1px solid #ccc';
    exitTimeInput.style.border = '1px solid #ccc';

    if (!entryDate || !exitDate || isNaN(entryHours) || isNaN(entryMinutes) || isNaN(exitHours) || isNaN(exitMinutes)) {
        if (!entryDate) {
            entryDateInput.style.border = '1px solid red';
        }

        if (!exitDate) {
            exitDateInput.style.border = '1px solid red';
        }

        if (isNaN(entryHours) || isNaN(entryMinutes)) {
            entryTimeInput.style.border = '1px solid red';
        }

        if (isNaN(exitHours) || isNaN(exitMinutes)) {
            exitTimeInput.style.border = '1px solid red';
        }
        return;
    }

    // Convert AM/PM time to 24-hour format
    const entryHours24 = entryTimeInput.value.includes("AM") ? entryHours : entryHours + 12;
    const exitHours24 = exitTimeInput.value.includes("AM") ? exitHours : exitHours + 12;

    // Calculate total minutes
    let totalMinutes = (exitDate - entryDate) / (1000 * 60);
    if (entryDate.toDateString() === exitDate.toDateString()) {
        totalMinutes += (exitHours24 - entryHours24) * 60 + (exitMinutes - entryMinutes);
    } else {
        totalMinutes += 24 * 60;
    }
    let totalHours = Math.floor(totalMinutes / 60);
    let totalMinutesWorked = totalMinutes % 60;

    const defaultHours = parseInt(defaultRadioValue);
    let remainingHours = defaultHours - totalHours-1;
    let remainingMinutes = 60 - totalMinutesWorked;

    if(remainingMinutes===60){
        remainingHours+=1;
        remainingMinutes=0;
    }

    const totalTime = `${totalHours}h ${totalMinutesWorked}min`;
   
    document.getElementById('totalTimeAdvanced').textContent = totalTime;
    document.getElementById('timeRemainingAdvanced').textContent = `${remainingHours}h ${remainingMinutes}min`;
}

