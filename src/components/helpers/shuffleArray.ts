export default function shuffleArray(array: Array<any>) {
    console.log(array);
    return array
    .map(a => ({ sort: a['prop1'], value: a }))
    .sort((a, b) => b.sort - a.sort)
    .map(a => a.value);
}