class SelectionSort {
    public sort(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
            }
        }
        return arr;
    }
}

// Example usage:
const sorter = new SelectionSort();
const sortedArray = sorter.sort([64, 25, 12, 22, 11]);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
