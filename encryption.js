function encrypt() {
    var p = document.getElementById('input_p').value;
    var q = document.getElementById('input_q').value;
    var text = document.getElementById('plaintext').value;

    if (p != "" && q != "" && text != "") {

        var n = p * q;
        document.getElementById('output_n').value = n;
        var e = 2;
        var phi = (p - 1) * (q - 1);

        while (e < phi) {
            if (gcd(e, phi) == 1)
                break;
            else
                e++;
        }
        document.getElementById('output_e').value = e;

        var c = mod(text, e, n);
        document.getElementById('ciphertext').value = c;
    }
    else {
        alert("Please Enter Details...");
    }
}
function gcd(a, b) {
    var temp;
    while (1) {
        temp = a % b;
        if (temp == 0) {
            return b;
        }
        a = b;
        b = temp;
    }
}
function mod(n, p, m) {
    var result = 1;
    while (p--) {
        result = (result * n) % m;
    }
    return result;
}