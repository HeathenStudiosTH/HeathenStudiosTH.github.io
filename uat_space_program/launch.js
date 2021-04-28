let tableTimer;

function postLaunchData() {

    // Setting up 1 second delay to reveal "data table"
    setTimeout(function () {
        // Show table via bootstrap collapse
        $('#launchData').collapse();
        // Heading and timer section removal to allow room for table
        $('#heading').remove();
        $('#timer').remove();

        dataUpdate();
    }, 1000);
}

// DOM req
function getData() {
    let loadedData = loadData();
    return loadedData;
}

// DOM req
function dataRow(legend, value, units) {
    msg = "<td class=\"col text-right\">" + legend + ": </td><td class=\"col text-left\">" + value + " " + units + "</td>";
    return msg;
}

// function to update data in interval
function dataUpdate() {
    document.getElementById('data').rows["et"].innerHTML = "Reading Data...";
    tableTimer = setInterval(updateDisplay, time_interval);
}

// Class for data to be placed in table
class InputData {
    constructor(
        et,
        long,
        lat,
        gps_alt,
        bmp_alt,
        bmp_press,
        bmp_temp,
        dig_temp,
        css_temp,
        css_eCO2,
        css_tvoc,
        uv,
        accel_x,
        accel_y,
        accel_z,
        mag_x,
        mag_y,
        mag_z,
        gyro_x,
        gyro_y,
        gyro_z
    ) {
        this.et = et;
        this.long = long;
        this.lat = lat;
        this.gps_alt = gps_alt;
        this.bmp_alt = bmp_alt;
        this.bmp_press = bmp_press;
        this.bmp_temp = bmp_temp;
        this.dig_temp = dig_temp;
        this.css_temp = css_temp;
        this.css_eCO2 = css_eCO2;
        this.css_tvoc = css_tvoc;
        this.uv = uv;
        this.accel_x = accel_x;
        this.accel_y = accel_y;
        this.accel_z = accel_z;
        this.mag_x = mag_x;
        this.mag_y = mag_y;
        this.mag_z = mag_z;
        this.gyro_x = gyro_x;
        this.gyro_y = gyro_y;
        this.gyro_z = gyro_z;
    }
}