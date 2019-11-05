function range(from, to, step) {
    let range = [from], start = from;
    while (start < to) {
        range.push(start += step);
    }
    console.log(range);
}

range(1, 20, 2);