export function getPassFail(number) {
    if (number >= 60) {
        return 'pass';
    } else {
        return 'fail';
    }
}

export function getCircumference(radius) {
    return 2 * radius * Math.PI;
}

export function getNextLowestKey(arr, val) {
    const min = arr[0];
    const max = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
        let item = +arr[i];

        if (item === val) {
            return val;
        } else if (min > +val) {
            return min;
        } else if (item > +val) {
            return arr[i - 1];
        } else if (item >= max) {
            return max;
        }
    }
}

export function getNextHighestKey(arr, val) {
    const max = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
        let item = +arr[i];

        if (item === +val) {
            return val;
        } else if (item > +val) {
            return arr[i];
        } else if (item >= max) {
            return max;
        }
    }
}
