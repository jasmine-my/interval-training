function dateAndTime(date: Date) {
    const rawDate = new Date(date);
    return `${rawDate.getFullYear()}.${
        rawDate.getMonth() + 1
    }.${rawDate.getDate()} ${rawDate.getHours()}:${rawDate.getMinutes()}:${rawDate.getSeconds()}`;
}

export { dateAndTime };
