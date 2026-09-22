const exampleFunc = (a : number, b : number | string ): number | string => {
    //type guard
    if (typeof b === 'string') {
        return a + b + " ";
    }
    return a + b;
}