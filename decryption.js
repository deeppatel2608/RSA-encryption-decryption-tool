function decrypt() {
    var p = document.getElementById('input_p').value;
    var q = document.getElementById('input_q').value;
    var e = document.getElementById('input_e').value;
    var cipher = document.getElementById('ciphertext').value;

    if (p != "" && q != "" && e != "" && cipher != "") {

        var n = p * q;
        document.getElementById('output_n').value = n;

        var phi = (p - 1) * (q - 1);
        document.getElementById('phi_n').value = phi;

        var d = 1;
        while (d < phi) {
            if ((d * e) % phi == 1)
                break;
            d++;
        }
        document.getElementById('output_d').value = d;

        var text = mod(cipher, d, n);
        document.getElementById('plaintext').value = text;
    }
    else {
        alert("Please Enter Details...");
    }
}
function mod(n, p, m) {
    var result = 1;
    while (p--) {
        result = (result * n) % m;
    }
    return result;
}