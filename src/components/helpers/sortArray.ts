function getSort(item: JSON, weight: Array<number>) {
    let i: number = 0;
    let res: number = 0;
    let x: number | string;
    for (x in item) {
        if (i >= 2) {
            res = res + Number(item[x]) * weight[i - 2];
        }
        i++;
    }
    return res;
}

export default function sortArray(array: Array<any>, weight: Array<number>) {
    console.log(weight);
    return array
    .map(a => ({ sort: getSort(a, weight), value: a }))
    .sort((a, b) => b.sort - a.sort)
    .map(a => a.value);
}
