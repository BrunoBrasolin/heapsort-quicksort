let tamanho;

function heap_root(input, i) {
  let primeiroFilho = 2 * i + 1;
  let segundoFilho = 2 * i + 2;
  let max = i;

  if (primeiroFilho < tamanho && input[primeiroFilho] > input[max]) {
    max = primeiroFilho;
  }

  if (segundoFilho < tamanho && input[segundoFilho] > input[max]) {
    max = segundoFilho;
  }

  if (max != i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

function heapSort(input) {
  tamanho = input.length;

  for (let i = Math.floor(tamanho / 2); i >= 0; i -= 1) {
    heap_root(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    tamanho--;

    heap_root(input, 0);
  }
}
