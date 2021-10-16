import Papa from "papaparse";

export function fetchCsvData(filePath: string) {
    return fetch(filePath)
        .then((res) => res.text())
        .then((res) => Papa.parse(res, { header: true }).data)
        .catch((e) => console.error(e));
}