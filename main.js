function Printx(x) {
    var i, j = 0;
    for (i = 0; i < x; i++) {
        var t = "";
        for (j = 0; j < x + i; j++) {
            if (j < x - i - 1) {
                t += " ";
            }
            else {
                t += "*";
            }
        }
        console.log(t);
    }
}
var x;
Printx(x);
