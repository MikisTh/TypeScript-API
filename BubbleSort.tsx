class BubbleSort {
    public sort(arr: number[]): number[] {
        const size = arr.length;
        for (let i = 0; i < size - 1; i++) {
            for (let j = 0; j < size - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    }

    private swap(arr: number[], a: number, b: number): void {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}

// Example usage:
const sorter = new BubbleSort();
const sortedArray = sorter.sort([64, 34, 25, 12, 22, 11, 90]);
console.log(sortedArray);

class BubbleSort {
    public sort(arr: number[]): number[] {
        const size = arr.length;
        let swapped: boolean;
        for (let i = 0; i < size - 1; i++) {
            swapped = false;
            for (let j = 0; j < size - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return arr;
    }

    private swap(arr: number[], a: number, b: number): void {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}

// Example usage:
const sorter = new BubbleSort();
const sortedArray = sorter.sort([64, 34, 25, 12, 22, 11, 90]);
console.log(sortedArray);
