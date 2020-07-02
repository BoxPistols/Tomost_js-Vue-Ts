const addMark = <T>(message: T): string => {
    return ('■' + message);
}

console.log(addMark<string>('文字列を指定します'));
console.log(addMark<number>(10));