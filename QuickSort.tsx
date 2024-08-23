class Quicksort {
    public sort(arr: number[]): void {
        this.quicksort(arr, 0, arr.length - 1);
    }

    private quicksort(arr: number[], low: number, high: number): void {
        if (low < high) {
            const p = this.partition(arr, low, high);
            this.quicksort(arr, low, p - 1);
            this.quicksort(arr, p + 1, high);
        }
    }

    private partition(arr: number[], low: number, high: number): number {
        const pivot = arr[high];
        let i = low;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                this.swap(arr, i, j);
                i++;
            }
        }
        this.swap(arr, i, high);
        return i;
    }

    private swap(arr: number[], a: number, b: number): void {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}

//# 

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const unsortedArray = [5, 1, 4, 2, 7, 3, 6];
console.log(quickSort(unsortedArray));
