function randomArray(arr) {
  for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 100));
  return arr;
}

function restartHeap() {
  document.querySelector(".heap_title_array").textContent = "";
  document.querySelector(".heap_body_array").textContent = "";
  let arr = [];
  randomArray(arr);
  for (let i = 0; i < arr.length; i++)
    document.querySelector(".heap_title_array").textContent += `${arr[i]}; `;
    heapSort(arr);
  for (let i = 0; i < arr.length; i++)
    document.querySelector(".heap_body_array").textContent += `${arr[i]}; `;
}

restartHeap();

function restartQuick() {
  let arr = [];
  randomArray(arr);
  document.querySelector(".quick_title_array").textContent = "";
  document.querySelector(".quick_body_array").textContent = "";

  document.querySelector(".quick_title_array").textContent += `${arr}; `;
  document.querySelector(".quick_body_array").textContent += `${quick_Sort(
    arr
  )}; `;
}

restartQuick();
