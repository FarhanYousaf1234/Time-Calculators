function calculateTime() {
    // Get input values
    const entryHoursInput = document.getElementById('entryHours');
    const entryMinutesInput = document.getElementById('entryMinutes');
    const entrySecondsInput = document.getElementById('entrySeconds');
    const exitHoursInput = document.getElementById('exitHours');
    const exitMinutesInput = document.getElementById('exitMinutes');
    const exitSecondsInput = document.getElementById('exitSeconds');

    const entryHours = parseInt(entryHoursInput.value) || 0;
    const entryMinutes = parseInt(entryMinutesInput.value) || 0;
    const entrySeconds = parseInt(entrySecondsInput.value) || 0;
    const exitHours = parseInt(exitHoursInput.value) || 0;
    const exitMinutes = parseInt(exitMinutesInput.value) || 0;
    const exitSeconds = parseInt(exitSecondsInput.value) || 0;

    entryHoursInput.style.border = '1px solid #ccc';
    entryMinutesInput.style.border = '1px solid #ccc';
    entrySecondsInput.style.border = '1px solid #ccc';
    exitHoursInput.style.border = '1px solid #ccc';
    exitMinutesInput.style.border = '1px solid #ccc';
    exitSecondsInput.style.border = '1px solid #ccc';

    if (!entryHours && !entryMinutes && !entrySeconds) {
        entryHoursInput.style.border = '1px solid red';
        entryMinutesInput.style.border = '1px solid red';
        entrySecondsInput.style.border = '1px solid red';
    }

    if (!exitHours && !exitMinutes && !exitSeconds) {
        exitHoursInput.style.border = '1px solid red';
        exitMinutesInput.style.border = '1px solid red';
        exitSecondsInput.style.border = '1px solid red';
    }

    // Calculate time worked hours, minutes, and seconds
    const entryTimes = entryHours * 3600000 + entryMinutes * 60000 + entrySeconds * 1000;
    const exitTimes = exitHours * 3600000 + exitMinutes * 60000 + exitSeconds * 1000;
    const timeWorkedMss = exitTimes - entryTimes;

    const timeWorkedHourss = Math.floor(timeWorkedMss / 3600000);
    const timeWorkedMinutess = Math.floor((timeWorkedMss % 3600000) / 60000);
    const timeWorkedSecondss = Math.floor((timeWorkedMss % 60000) / 1000);

    // Get selected radio button value
    const selectedRadioButtons = document.querySelector('input[name="advancedDefaultTime"]:checked');
    const selectedRadioValues = parseInt(selectedRadioButtons.value);

    // Calculate remaining time in milliseconds, accounting for hours, minutes, and seconds
    const remainingTimeMss = (selectedRadioValues * 3600000) - timeWorkedMss;

    // Calculate remaining time hours, minutes, and seconds
    const remainingHourss = Math.floor(remainingTimeMss / 3600000);
    const remainingMinutess = Math.floor((remainingTimeMss % 3600000) / 60000);
    const remainingSecondss = Math.floor((remainingTimeMss % 60000) / 1000);

    // Update the result fields
    document.getElementById('totalHours').value = timeWorkedHourss;
    document.getElementById('totalMinutes').value = timeWorkedMinutess;
    document.getElementById('totalSeconds').value = timeWorkedSecondss;
    document.getElementById('remainingHours').value = remainingHourss;
    document.getElementById('remainingMinutes').value = remainingMinutess;
    document.getElementById('remainingSeconds').value = remainingSecondss;
}

function calculateAdvancedTime() {
    // Get input values
    const entryDate = new Date(document.getElementById('entryDate').value);
    const exitDate = new Date(document.getElementById('exitDate').value);
    const entryHourInput = document.getElementById('entryHour');
    const entryMinuteInput = document.getElementById('entryMinute');
    const entrySecondInput = document.getElementById('entrySecond');
    const exitHourInput = document.getElementById('exitHour');
    const exitMinuteInput = document.getElementById('exitMinute');
    const exitSecondInput = document.getElementById('exitSecond');

    const entryHour = parseInt(entryHourInput.value) || 0;
    const entryMinute = parseInt(entryMinuteInput.value) || 0;
    const entrySecond = parseInt(entrySecondInput.value) || 0;
    const exitHour = parseInt(exitHourInput.value) || 0;
    const exitMinute = parseInt(exitMinuteInput.value) || 0;
    const exitSecond = parseInt(exitSecondInput.value) || 0;

    entryHourInput.style.border = '1px solid #ccc';
    entryMinuteInput.style.border = '1px solid #ccc';
    entrySecondInput.style.border = '1px solid #ccc';
    exitHourInput.style.border = '1px solid #ccc';
    exitMinuteInput.style.border = '1px solid #ccc';
    exitSecondInput.style.border = '1px solid #ccc';

    if (!entryHour && !entryMinute && !entrySecond) {
        entryHourInput.style.border = '1px solid red';
        entryMinuteInput.style.border = '1px solid red';
        entrySecondInput.style.border = '1px solid red';
    }

    if (!exitHour && !exitMinute && !exitSecond) {
        exitHourInput.style.border = '1px solid red';
        exitMinuteInput.style.border = '1px solid red';
        exitSecondInput.style.border = '1px solid red';
    }

    // Subtract exit minutes and seconds from entry minutes and seconds
    const entryTime = entryDate.getTime() + entryHour * 3600000 + entryMinute * 60000 + entrySecond * 1000;
    const exitTime = exitDate.getTime() + exitHour * 3600000 + exitMinute * 60000 + exitSecond * 1000;
    const timeWorkedMs = exitTime - entryTime;

    // Calculate time worked hours, minutes, and seconds
    const timeWorkedHours = Math.floor(timeWorkedMs / 3600000);
    const timeWorkedMinutes = Math.floor((timeWorkedMs % 3600000) / 60000);
    const timeWorkedSeconds = Math.floor((timeWorkedMs % 60000) / 1000);

    // Get selected radio button value
    const selectedRadioButton = document.querySelector('input[name="defaultTime"]:checked');
    const selectedRadioValue = parseInt(selectedRadioButton.value);

    // Calculate remaining time in milliseconds, accounting for hours, minutes, and seconds
    const remainingTimeMs = (selectedRadioValue * 3600000) - timeWorkedMs;

    // Calculate remaining time hours, minutes, and seconds
    const remainingHours = Math.floor(remainingTimeMs / 3600000);
    const remainingMinutes = Math.floor((remainingTimeMs % 3600000) / 60000);
    const remainingSeconds = Math.floor((remainingTimeMs % 60000) / 1000);

    // Update the result fields
    document.getElementById('totalHour').value = timeWorkedHours;
    document.getElementById('totalMinute').value = timeWorkedMinutes;
    document.getElementById('totalSecond').value = timeWorkedSeconds;
    document.getElementById('remainingHour').value = remainingHours;
    document.getElementById('remainingMinute').value = remainingMinutes;
    document.getElementById('remainingSecond').value = remainingSeconds;
}



