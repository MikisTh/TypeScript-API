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
