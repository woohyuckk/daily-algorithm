function solution(progresses, speeds) {

    const complete = progresses.map((progress, idx) => {
        return Math.ceil((100 - progress) / speeds[idx])
    });
    const result = [];
    let distributeDay = complete[0];
    let count = 0;


    for (let day of complete) {
        if (day <= distributeDay) {
            count++
        } else {
            result.push(count);
            distributeDay = day;
            count = 1;
        }

    }
    result.push(count);

    return result


}
