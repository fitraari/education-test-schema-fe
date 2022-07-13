function contain(word) {
    let wordSplit = word.split(" ").join(""),
        newArr = Array.from(wordSplit),
        containChar = [],
        i;

    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] * 0 == 0 || newArr[i] == "*") {
            containChar.push(newArr[i]);
        }
    }

    if (Number(containChar.join("")) == "NaN") {
        console.log(`Sistem kami menolak untuk inputan berisi simbol ${containChar.join("")}`);
    } else if (Number(containChar.join("")) == 0) {
        console.log(`Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${word}`);
    } else {
        console.log(`Sistem kami menolak untuk inputan berisi angka ${containChar.join("")}`);
    }
}


contain("hallo jesika24 selamat datang!");
contain("hallo anggun selamat datang!");
contain("hallo ** selamat datang!");
contain("hallo Mariage889120! selamat datang!");