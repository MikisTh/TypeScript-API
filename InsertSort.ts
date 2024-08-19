class InsertionSort
{
   public sort(arr: number[])
   {
       for(let i = 0; i < arr.length; i++)
       {
           const tmp = arr[i];
           let j = i - 1;      
           while(j >= 0 && arr[j] > tmp)
           {
               arr[j + 1] = arr[j];
               j--;
           } 
           arr[j + 1] = tmp;
       }
   }
}

function insertionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;   
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}
