function sameValue(arr) {
    const filterArr = arr.filter((a, b) => a == b);
    const newArr = arr.filter(a => a == filterArr[filterArr.length - 1]);

    console.log(`total data paling banyak keluar adalah ${newArr[0]} dengan jumlah ${newArr.length}`);
}


sameValue([1, 1, 1, 2, 2, 4, 1, 1]);
sameValue([2, 1, 2, 2, 2, 8, 1, 1]);
sameValue([3, 3, 3, 3, 2, 4, 1, 1]);