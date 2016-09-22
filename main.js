
function BulidPyramid(layer) {
    var raw, line = 0;
    for (raw = 0; raw < layer; raw++) {
        var rawTotal = "";
        for (line = 0; line < layer + raw; line++) {
            if (line < layer - raw - 1) {
                rawTotal += " ";
            }
            else {
                rawTotal += "*";
            }
        }
        console.log(rawTotal);
    }
}
var x = process.argv[2];
BulidPyramid(parseInt(x));
