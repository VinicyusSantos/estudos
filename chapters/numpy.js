window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "numpy",
  "number": "05",
  "sectionLabel": "Módulo",
  "title": "NumPy",
  "description": "30 questões práticas sobre arrays, dimensões, shape, dtype, indexing, slicing, boolean indexing, broadcasting, operações vetorizadas, agregações, máscaras, matrizes, random e álgebra linear.",
  "questions": [
    {
      "type": "Alternativa correta",
      "topic": "Dimensões",
      "prompt": "Em NumPy, o que representa o atributo ndim de um array?",
      "options": [
        "A quantidade de dimensões ou eixos do array.",
        "A quantidade total de elementos do array.",
        "O tipo de dado armazenado no array.",
        "O tamanho em bytes de cada elemento."
      ],
      "answer": 0,
      "explanation": "ndim informa quantos eixos o array possui. Um vetor possui ndim=1, uma matriz possui ndim=2 e um array tridimensional possui ndim=3."
    },
    {
      "type": "Resultado do código",
      "topic": "Dimensões",
      "prompt": "Qual valor será exibido?",
      "code": "import numpy as np\na = np.array([[1, 2, 3], [4, 5, 6]])\nprint(a.ndim)",
      "options": [
        "1",
        "2",
        "3",
        "6"
      ],
      "answer": 1,
      "explanation": "O array possui linhas e colunas, portanto tem dois eixos e ndim igual a 2."
    },
    {
      "type": "Resultado do código",
      "topic": "Shape",
      "prompt": "Qual é o shape do array abaixo?",
      "code": "import numpy as np\na = np.array([[10, 20, 30],\n              [40, 50, 60]])\nprint(a.shape)",
      "options": [
        "(2, 3)",
        "(3, 2)",
        "(6,)",
        "(2,)"
      ],
      "answer": 0,
      "explanation": "O array tem 2 linhas e 3 colunas. Em um array 2D, shape é dado como (linhas, colunas)."
    },
    {
      "type": "Alternativa correta",
      "topic": "Shape",
      "prompt": "Um array contém 12 elementos. Qual reshape abaixo é válido sem alterar a quantidade de elementos?",
      "options": [
        "reshape(3, 4)",
        "reshape(5, 3)",
        "reshape(2, 7)",
        "reshape(4, 4)"
      ],
      "answer": 0,
      "explanation": "reshape deve preservar o número total de elementos. Como 3 × 4 = 12, esse formato é compatível."
    },
    {
      "type": "Alternativa correta",
      "topic": "dtype",
      "prompt": "Para que serve o atributo dtype de um array NumPy?",
      "options": [
        "Indicar o tipo de dado usado para armazenar seus elementos.",
        "Indicar quantas dimensões o array possui.",
        "Indicar apenas o maior valor do array.",
        "Definir quantas linhas serão exibidas no terminal."
      ],
      "answer": 0,
      "explanation": "dtype descreve o tipo de dado dos elementos, como int64, float64 ou bool. Ele influencia representação, memória e operações numéricas."
    },
    {
      "type": "Resultado do código",
      "topic": "dtype",
      "prompt": "Qual comportamento é esperado ao criar este array?",
      "code": "import numpy as np\na = np.array([1, 2.5, 3])\nprint(a)",
      "options": [
        "Os valores tendem a ser armazenados em um dtype de ponto flutuante, resultando em algo como [1.  2.5 3. ].",
        "O NumPy obrigatoriamente remove o valor 2.5.",
        "O array mantém simultaneamente um dtype int diferente para cada elemento.",
        "A criação sempre gera um erro por misturar int e float."
      ],
      "answer": 0,
      "explanation": "Um ndarray normalmente utiliza um único dtype. Ao misturar inteiros e float, o NumPy promove os valores para um tipo capaz de representar todos, tipicamente float."
    },
    {
      "type": "Resultado do código",
      "topic": "Indexing",
      "prompt": "Qual será a saída?",
      "code": "import numpy as np\na = np.array([5, 10, 15, 20])\nprint(a[-1])",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ],
      "answer": 3,
      "explanation": "Índices negativos contam a partir do final. O índice -1 seleciona o último elemento, que é 20."
    },
    {
      "type": "Resultado do código",
      "topic": "Indexing",
      "prompt": "Qual valor será selecionado?",
      "code": "import numpy as np\na = np.array([[1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]])\nprint(a[1, 2])",
      "options": [
        "3",
        "5",
        "6",
        "8"
      ],
      "answer": 2,
      "explanation": "a[1, 2] acessa a linha de índice 1 e a coluna de índice 2. Como os índices começam em zero, o valor selecionado é 6."
    },
    {
      "type": "Resultado do código",
      "topic": "Slicing",
      "prompt": "Qual será o resultado?",
      "code": "import numpy as np\na = np.array([0, 10, 20, 30, 40, 50])\nprint(a[1:5:2])",
      "options": [
        "[10 30]",
        "[10 20 30 40]",
        "[20 40]",
        "[10 30 50]"
      ],
      "answer": 0,
      "explanation": "O slice começa no índice 1, para antes do índice 5 e avança de 2 em 2. Assim seleciona 10 e 30."
    },
    {
      "type": "Resultado do código",
      "topic": "Slicing",
      "prompt": "O que a expressão a[:, 1] seleciona?",
      "code": "import numpy as np\na = np.array([[1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]])\nprint(a[:, 1])",
      "options": [
        "A segunda coluna: [2 5 8]",
        "A segunda linha: [4 5 6]",
        "A primeira coluna: [1 4 7]",
        "Somente o valor 5"
      ],
      "answer": 0,
      "explanation": "O primeiro ':' seleciona todas as linhas e o índice 1 seleciona a segunda coluna."
    },
    {
      "type": "Resultado do código",
      "topic": "Boolean indexing",
      "prompt": "Qual será o resultado?",
      "code": "import numpy as np\na = np.array([3, 8, 12, 5, 20])\nprint(a[a > 8])",
      "options": [
        "[12 20]",
        "[8 12 20]",
        "[3 5 8]",
        "[True True]"
      ],
      "answer": 0,
      "explanation": "A expressão a > 8 cria uma máscara booleana. Apenas os elementos onde a condição é True são retornados: 12 e 20."
    },
    {
      "type": "Alternativa correta",
      "topic": "Boolean indexing",
      "prompt": "Qual expressão seleciona valores de a que estejam entre 10 e 20, inclusive?",
      "options": [
        "a[(a >= 10) & (a <= 20)]",
        "a[a >= 10 and a <= 20]",
        "a[(a >= 10) | (a <= 20)]",
        "a[10:20]"
      ],
      "answer": 0,
      "explanation": "Para combinar condições elemento a elemento em arrays, usa-se & com cada comparação entre parênteses. 'and' não realiza essa combinação elemento a elemento."
    },
    {
      "type": "Resultado do código",
      "topic": "Broadcasting",
      "prompt": "Qual será o resultado?",
      "code": "import numpy as np\na = np.array([1, 2, 3])\nprint(a + 10)",
      "options": [
        "[11 12 13]",
        "[1 2 3 10]",
        "[10 20 30]",
        "Erro, pois os shapes são diferentes"
      ],
      "answer": 0,
      "explanation": "O escalar 10 é transmitido por broadcasting para cada elemento do array, permitindo a soma elemento a elemento."
    },
    {
      "type": "Alternativa correta",
      "topic": "Broadcasting",
      "prompt": "Quais shapes são compatíveis para broadcasting na soma entre arrays?",
      "options": [
        "(3, 4) e (4,)",
        "(3, 4) e (5,)",
        "(2, 3) e (4, 2)",
        "(3, 4) e (2, 5)"
      ],
      "answer": 0,
      "explanation": "As dimensões são comparadas da direita para a esquerda. (3, 4) e (4,) são compatíveis porque a última dimensão é 4 em ambos; o vetor é aplicado a cada linha."
    },
    {
      "type": "Alternativa correta",
      "topic": "Operações vetorizadas",
      "prompt": "Qual é uma vantagem central das operações vetorizadas com NumPy?",
      "options": [
        "Permitem aplicar operações sobre arrays inteiros sem escrever loops Python explícitos para cada elemento.",
        "Garantem que qualquer algoritmo passe a ter complexidade O(1).",
        "Eliminam completamente o uso de memória.",
        "Funcionam apenas com arrays de uma dimensão."
      ],
      "answer": 0,
      "explanation": "A vetorização expressa operações diretamente sobre arrays. Isso torna o código mais conciso e normalmente aproveita implementações numéricas otimizadas."
    },
    {
      "type": "Resultado do código",
      "topic": "Operações vetorizadas",
      "prompt": "Qual será o resultado?",
      "code": "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a * b)",
      "options": [
        "[4 10 18]",
        "32",
        "[5 7 9]",
        "[[4 5 6], [8 10 12], [12 15 18]]"
      ],
      "answer": 0,
      "explanation": "O operador * entre arrays de mesmo shape realiza multiplicação elemento a elemento: 1×4, 2×5 e 3×6."
    },
    {
      "type": "Resultado do código",
      "topic": "Agregações",
      "prompt": "Qual valor será exibido?",
      "code": "import numpy as np\na = np.array([2, 4, 6, 8])\nprint(a.mean())",
      "options": [
        "4.0",
        "5.0",
        "20.0",
        "8.0"
      ],
      "answer": 1,
      "explanation": "A média é (2 + 4 + 6 + 8) / 4 = 5.0. mean() é uma operação de agregação."
    },
    {
      "type": "Resultado do código",
      "topic": "Agregações",
      "prompt": "Qual será o resultado de sum(axis=0)?",
      "code": "import numpy as np\na = np.array([[1, 2, 3],\n              [4, 5, 6]])\nprint(a.sum(axis=0))",
      "options": [
        "[5 7 9]",
        "[6 15]",
        "21",
        "[1 2 3 4 5 6]"
      ],
      "answer": 0,
      "explanation": "axis=0 agrega ao longo das linhas, produzindo um resultado para cada coluna: 1+4, 2+5 e 3+6."
    },
    {
      "type": "Resultado do código",
      "topic": "Agregações",
      "prompt": "Qual será o resultado de mean(axis=1)?",
      "code": "import numpy as np\na = np.array([[2, 4],\n              [10, 20]])\nprint(a.mean(axis=1))",
      "options": [
        "[3. 15.]",
        "[6. 12.]",
        "9.0",
        "[2. 4. 10. 20.]"
      ],
      "answer": 0,
      "explanation": "axis=1 agrega as colunas dentro de cada linha. As médias são (2+4)/2 = 3 e (10+20)/2 = 15."
    },
    {
      "type": "Resultado do código",
      "topic": "Máscaras",
      "prompt": "Depois da operação abaixo, como ficará o array a?",
      "code": "import numpy as np\na = np.array([1, 5, 10, 15])\nmask = a >= 10\na[mask] = 0\nprint(a)",
      "options": [
        "[1 5 0 0]",
        "[0 0 10 15]",
        "[1 5 10 15]",
        "[False False True True]"
      ],
      "answer": 0,
      "explanation": "A máscara é False, False, True, True. A atribuição altera apenas as posições onde a máscara é verdadeira."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Máscaras",
      "prompt": "Marque a alternativa INCORRETA sobre máscaras booleanas em NumPy.",
      "options": [
        "Podem ser usadas para filtrar elementos.",
        "Podem ser combinadas com operadores como &, | e ~.",
        "Podem ser usadas em atribuições condicionais.",
        "Uma máscara só pode conter números inteiros e nunca valores True ou False."
      ],
      "answer": 3,
      "explanation": "Uma máscara booleana é justamente um array de valores True e False, usado para selecionar ou modificar posições de outro array."
    },
    {
      "type": "Alternativa correta",
      "topic": "Matrizes",
      "prompt": "Qual afirmação diferencia corretamente a * b de a @ b para matrizes NumPy compatíveis?",
      "options": [
        "* realiza multiplicação elemento a elemento; @ realiza produto matricial.",
        "* realiza produto matricial; @ realiza soma elemento a elemento.",
        "Os dois operadores sempre produzem exatamente o mesmo resultado.",
        "@ só funciona para valores booleanos."
      ],
      "answer": 0,
      "explanation": "Em ndarrays, * é elemento a elemento. O operador @ implementa multiplicação matricial quando as dimensões são compatíveis."
    },
    {
      "type": "Resultado do código",
      "topic": "Matrizes",
      "prompt": "Qual será o resultado?",
      "code": "import numpy as np\nA = np.array([[1, 2],\n              [3, 4]])\nB = np.array([[1],\n              [2]])\nprint(A @ B)",
      "options": [
        "[[ 5]\n [11]]",
        "[[1 4]\n [3 8]]",
        "[[3]\n [7]]",
        "[5 11]"
      ],
      "answer": 0,
      "explanation": "O produto matricial calcula 1×1 + 2×2 = 5 na primeira linha e 3×1 + 4×2 = 11 na segunda. O shape resultante é (2, 1)."
    },
    {
      "type": "Resultado do código",
      "topic": "Matrizes",
      "prompt": "Qual é o shape de A.T?",
      "code": "import numpy as np\nA = np.zeros((2, 5))\nprint(A.T.shape)",
      "options": [
        "(5, 2)",
        "(2, 5)",
        "(10,)",
        "(5,)"
      ],
      "answer": 0,
      "explanation": "A transposição troca os eixos de uma matriz 2D. Portanto, um array de shape (2, 5) passa a ter shape (5, 2)."
    },
    {
      "type": "Alternativa correta",
      "topic": "Random",
      "prompt": "Qual é uma vantagem de criar um gerador com np.random.default_rng(42) durante experimentos reproduzíveis?",
      "options": [
        "Usar a mesma semente permite reproduzir a mesma sequência pseudoaleatória com o mesmo gerador e chamadas equivalentes.",
        "A semente transforma números aleatórios em números verdadeiramente imprevisíveis.",
        "A semente garante que todos os números gerados sejam diferentes entre si.",
        "default_rng só pode gerar números inteiros."
      ],
      "answer": 0,
      "explanation": "Uma semente fixa permite reproduzir resultados pseudoaleatórios, o que é útil em testes e experimentos. O Generator também oferece métodos para várias distribuições."
    },
    {
      "type": "Resultado do código",
      "topic": "Random",
      "prompt": "O que este código produz conceitualmente?",
      "code": "import numpy as np\nrng = np.random.default_rng(7)\nx = rng.normal(loc=0, scale=1, size=1000)",
      "options": [
        "Um array com 1000 amostras de uma distribuição normal com média 0 e desvio padrão 1.",
        "Uma matriz identidade 1000×1000.",
        "1000 inteiros obrigatoriamente entre 0 e 1.",
        "Um único valor igual a 7."
      ],
      "answer": 0,
      "explanation": "rng.normal usa uma distribuição normal. loc define a média, scale o desvio padrão e size a quantidade/formato das amostras."
    },
    {
      "type": "Alternativa correta",
      "topic": "Álgebra linear",
      "prompt": "Para resolver diretamente um sistema linear Ax = b, qual função do NumPy é apropriada quando A é quadrada e o sistema possui solução única?",
      "options": [
        "np.linalg.solve(A, b)",
        "np.sum(A, b)",
        "np.random.solve(A, b)",
        "np.reshape(A, b)"
      ],
      "answer": 0,
      "explanation": "np.linalg.solve resolve sistemas lineares da forma Ax = b sem exigir que você calcule explicitamente a inversa de A."
    },
    {
      "type": "Resultado do código",
      "topic": "Álgebra linear",
      "prompt": "Qual solução x satisfaz o sistema representado abaixo?",
      "code": "import numpy as np\nA = np.array([[1., 0.],\n              [0., 2.]])\nb = np.array([3., 8.])\nx = np.linalg.solve(A, b)\nprint(x)",
      "options": [
        "[3. 4.]",
        "[3. 8.]",
        "[1. 2.]",
        "[6. 16.]"
      ],
      "answer": 0,
      "explanation": "O sistema equivale a x1 = 3 e 2x2 = 8, portanto x = [3, 4]."
    },
    {
      "type": "Alternativa correta",
      "topic": "Álgebra linear",
      "prompt": "O que np.linalg.norm(v) calcula, por padrão, para um vetor unidimensional v?",
      "options": [
        "A norma Euclidiana do vetor.",
        "A média aritmética dos elementos.",
        "O determinante do vetor.",
        "A quantidade de dimensões do vetor."
      ],
      "answer": 0,
      "explanation": "Para um vetor 1D, np.linalg.norm usa por padrão a norma Euclidiana, equivalente à raiz quadrada da soma dos quadrados dos componentes."
    },
    {
      "type": "Cenário aplicado",
      "topic": "Integração de conceitos",
      "prompt": "Você possui uma matriz dados com shape (100, 4), em que cada linha é uma observação e cada coluna é uma variável. O vetor medias tem shape (4,). Qual expressão centraliza cada coluna subtraindo sua respectiva média?",
      "options": [
        "dados - medias",
        "dados @ medias",
        "dados[medias]",
        "dados.reshape(4, 100) - medias"
      ],
      "answer": 0,
      "explanation": "O vetor de shape (4,) é compatível por broadcasting com a última dimensão de dados, que também é 4. Assim, cada média é subtraída da coluna correspondente sem loops explícitos."
    }
  ]
});
