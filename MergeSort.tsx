function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

// Example usage:
const sortedArray = mergeSort([38, 27, 43, 3, 9, 82, 10]);
console.log(sortedArray);

class MergeSort
{
   arrClone : number[];

   public sort(arr: number[])
   {
       // Clone the array for sorting.
       this.arrClone = Object.assign([], arr);
       this.sortAux(arr, 0, arr.length - 1);

   }

   private sortAux(arr: number[], low: number, high: number)
   {
       if(low < high)
       {
           const mid = Math.floor((low + high) / 2);

           this.sortAux(arr, low, mid);
           this.sortAux(arr, mid + 1, high);

           this.merge(arr, low, mid, high);

       }
   }

   private merge(arr: number[], low: number, mid: number, high: number)
   {
       let i = low;
       let j = mid + 1;
       let k = 0;

       for(k = low; k <= high; k++)
       {
           this.arrClone[k] = arr[k];
       }

       for(k = low; k <= high; k++)
       {
           if( i > mid)
           {
               arr[k] = this.arrClone[j];
               j++;
           }
           else if(j > high)
           {
               arr[k] = this.arrClone[i];
               i++;
           }
           else if(this.arrClone[i] > this.arrClone[j])
           {
               arr[k] = this.arrClone[j];
               j++;
           }
           else
           {
               arr[k] = this.arrClone[i];
               i++;
           }
       }
   }
}
