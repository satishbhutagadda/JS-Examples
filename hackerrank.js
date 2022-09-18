(function (){

    // Source: https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
    // Problem: Given a time in -hour AM/PM format, convert it to military (24-hour) time.
    // Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    // - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
    // Example
    // s = '12:01:00PM' => '12:01:00'.
    // s = '12:01:00AM' => '00:01:00'.

    /**
     * @param { string } dateString;
     * @return { string };
     */

    // IDEA: if time is PM ? then add + 12 to hours

    function timeConversion(dateString) {
        const [hh, mm, ss] = dateString?.split(':');
        const isPM = ss.substring(2) === 'PM';
        console.log(hh, mm, ss);
        return `${isPM ? (isNumberIsTwelve(hh) ? hh : 12 + +hh) : isNumberIsTwelve(hh) ? '00' : hh}:${mm}:${ss.substring(0, 2)}`
    }

    function isNumberIsTwelve(number) {
        return Number(number) === 12
    }

    // console.log(timeConversion('12:01:00AM'));

    // ***************************************// End //************************************** //

    
    // Source: https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
    // Problem: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    // Example: The minimum sum is 1+3+5+7 and the maximum sum is 3+5+7+9. The function prints
    // arr = [1,3,5,7,9] => 16 24
    
    function miniMaxSum(arr) {
        let minValue = 0, maxValue = 0, total = 0;
        
        total = arr?.sort((a, b) => a - b).reduce((acc, crr) => acc + crr, 0);

        minValue = total - arr[arr.length - 1];
        maxValue = total - arr[0];
        return `${+minValue} ${+maxValue}`
    }

    // console.log(miniMaxSum([7, 69, 2, 221, 8974]));

    // ***************************************// End //************************************** //

    
    // Source: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
    // Problem: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
    // Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
    // Example: arr = [1,1,0,-1,-1] There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. 
    
    // Results are printed as: 
        // 0.400000
        // 0.400000
        // 0.200000

    /**
     * @param { Array<number> } arrOfInt;
     * @return { void };
     */
    function plusMinus(arrOfInt) {
        const output = arrOfInt.reduce((acc, int) => {
            if(int > 0){
                acc.positiveInt++;
            } else if(int < 0){
                acc.negativeInt++;
            } else {
                acc.zeroInt++;
            }
            return acc;
        },{positiveInt: 0, negativeInt: 0, zeroInt: 0})

        Object.values(output).forEach((int) => {
            console.log((int/arrOfInt.length).toFixed(6));
        })
    }

    // console.log(plusMinus([1,1,0,-1,-1]))

    // ***************************************// End //************************************** //

    // Source: https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-six
    // 1. append(W) - Append string W to the end of string.
    // 2. delete(k) - Delete the last k characters of string.
    // 3. print(k) - Print the kth character of string.
    // 4. undo() - Undo the last (not previously undone) operation of type  or , reverting  to the state it was in prior to that operation.

    /**
     * @param { string } input;
     * @return { void };
     */
    
    const ops = ['1 fg', '3 6', '2 5', '4', '3 7', '4', '3 4'];
    function processData(input) {
        const cache = [];
        ops.forEach((operationStr) => {
            [operation, perform] = operationStr.split(' ');
            switch(operation){
                case '1':
                    append(perform)
                    break;
                case '2':
                    deleteStr(perform)
                    break;
                case '3':
                    print(input[perform - 1]);
                    break;
                case '4':
                    input = cache.length && cache.pop();
                    break;
                default:
                    break;
            }
            // console.log(input, operationStr);
        });

        function append(str){
            cache.push(input);
            input = input+str;
        }

        function deleteStr(str){
            cache.push(input);
            input = input.substring(0, str.length);
        }

        function print(str){
            console.log(str);
        }
    }

    // console.log(processData('abcde'));
    

    // ***************************************// End //************************************** //

    // Source: https://www.hackerrank.com/challenges/one-week-preparation-kit-jesse-and-cookies/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-six


    
})()