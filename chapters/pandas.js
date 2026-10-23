window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "pandas",
  "number": "07",
  "sectionLabel": "Módulo",
  "title": "Pandas",
  "description": "30 questões práticas sobre Series, DataFrame, Index, seleção, filtros, agregações, combinação, limpeza, transformações e séries temporais com Pandas.",
  "questions": [
    {
      "type": "Alternativa correta",
      "topic": "Series",
      "prompt": "Qual descrição representa melhor uma Series do Pandas?",
      "options": [
        "Uma estrutura unidimensional com valores associados a um índice.",
        "Uma estrutura obrigatoriamente bidimensional com linhas e colunas.",
        "Um objeto que só pode armazenar números inteiros.",
        "Um tipo usado exclusivamente para datas e horários."
      ],
      "answer": 0,
      "explanation": "Uma Series é uma estrutura unidimensional rotulada. Cada valor está associado a um índice, que pode ser numérico, textual, temporal ou de outro tipo."
    },
    {
      "type": "Resultado do código",
      "topic": "Series",
      "prompt": "Qual valor será exibido?",
      "code": "import pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s['b'])",
      "options": [
        "10",
        "20",
        "30",
        "'b'"
      ],
      "answer": 1,
      "explanation": "O índice da Series foi definido como 'a', 'b' e 'c'. Ao acessar s['b'], o Pandas retorna o valor associado ao rótulo 'b', que é 20."
    },
    {
      "type": "Resultado do código",
      "topic": "DataFrame",
      "prompt": "Qual é o shape do DataFrame abaixo?",
      "code": "import pandas as pd\ndf = pd.DataFrame({\n    'nome': ['Ana', 'Bia', 'Caio'],\n    'idade': [21, 24, 19]\n})\nprint(df.shape)",
      "options": [
        "(2, 3)",
        "(3, 2)",
        "(3,)",
        "(6, 1)"
      ],
      "answer": 1,
      "explanation": "O DataFrame possui 3 linhas e 2 colunas. O atributo shape retorna a tupla (número de linhas, número de colunas)."
    },
    {
      "type": "Alternativa correta",
      "topic": "Index",
      "prompt": "Qual é o papel principal do Index em um DataFrame?",
      "options": [
        "Identificar e rotular as linhas do DataFrame.",
        "Definir obrigatoriamente o tipo de todas as colunas.",
        "Ordenar automaticamente os valores de cada coluna.",
        "Substituir os nomes das colunas."
      ],
      "answer": 0,
      "explanation": "O Index fornece rótulos para as linhas e é usado em seleção, alinhamento, joins e várias outras operações do Pandas."
    },
    {
      "type": "Resultado do código",
      "topic": "loc",
      "prompt": "Qual valor será retornado por df.loc['B', 'nota']?",
      "code": "import pandas as pd\ndf = pd.DataFrame(\n    {'nota': [7.5, 9.0, 8.0]},\n    index=['A', 'B', 'C']\n)\nprint(df.loc['B', 'nota'])",
      "options": [
        "7.5",
        "9.0",
        "8.0",
        "Erro, pois loc só aceita posições numéricas."
      ],
      "answer": 1,
      "explanation": "loc seleciona por rótulos. A linha de rótulo 'B' e a coluna 'nota' contêm o valor 9.0."
    },
    {
      "type": "Resultado do código",
      "topic": "iloc",
      "prompt": "Qual linha será selecionada por df.iloc[1]?",
      "code": "import pandas as pd\ndf = pd.DataFrame({\n    'produto': ['A', 'B', 'C'],\n    'preco': [10, 20, 30]\n})\nprint(df.iloc[1]['produto'])",
      "options": [
        "A",
        "B",
        "C",
        "1"
      ],
      "answer": 1,
      "explanation": "iloc trabalha com posições inteiras iniciadas em zero. A posição 1 corresponde à segunda linha, cujo produto é 'B'."
    },
    {
      "type": "Resultado do código",
      "topic": "Filtros",
      "prompt": "Quais valores permanecem após o filtro?",
      "code": "import pandas as pd\ndf = pd.DataFrame({'valor': [5, 12, 18, 7]})\nresultado = df[df['valor'] >= 10]\nprint(resultado['valor'].tolist())",
      "options": [
        "[5, 7]",
        "[12, 18]",
        "[5, 12, 18]",
        "[10, 10]"
      ],
      "answer": 1,
      "explanation": "A expressão df['valor'] >= 10 cria uma máscara booleana. Apenas as linhas com valores 12 e 18 satisfazem a condição."
    },
    {
      "type": "Alternativa correta",
      "topic": "Ordenação",
      "prompt": "Como ordenar df pela coluna 'preco' do maior para o menor?",
      "options": [
        "df.sort_values('preco', ascending=False)",
        "df.sort_values('preco', ascending=True)",
        "df.sort_index('preco', descending=True)",
        "df.order_by('preco', reverse=True)"
      ],
      "answer": 0,
      "explanation": "sort_values ordena pelos valores de uma ou mais colunas. ascending=False define a ordem decrescente."
    },
    {
      "type": "Alternativa correta",
      "topic": "rename e drop",
      "prompt": "Qual sequência renomeia a coluna 'old' para 'new' e depois remove a coluna 'temp'?",
      "options": [
        "df.rename(columns={'old': 'new'}).drop(columns=['temp'])",
        "df.rename({'old': 'new'}).drop(rows=['temp'])",
        "df.drop(columns=['old']).rename(columns={'temp': 'new'})",
        "df.replace(columns={'old': 'new'}).delete('temp')"
      ],
      "answer": 0,
      "explanation": "rename(columns={...}) altera nomes de colunas, enquanto drop(columns=[...]) remove colunas explicitamente."
    },
    {
      "type": "Resultado do código",
      "topic": "replace",
      "prompt": "Qual será o conteúdo da coluna status após replace?",
      "code": "import pandas as pd\ndf = pd.DataFrame({'status': ['sim', 'nao', 'sim']})\ndf['status'] = df['status'].replace({'sim': 1, 'nao': 0})\nprint(df['status'].tolist())",
      "options": [
        "['sim', 'nao', 'sim']",
        "[1, 0, 1]",
        "[True, False, True]",
        "[0, 1, 0]"
      ],
      "answer": 1,
      "explanation": "replace substitui valores conforme o mapeamento fornecido. 'sim' vira 1 e 'nao' vira 0."
    },
    {
      "type": "Resultado do código",
      "topic": "apply",
      "prompt": "Qual resultado será produzido?",
      "code": "import pandas as pd\ns = pd.Series([2, 3, 4])\nprint(s.apply(lambda x: x ** 2).tolist())",
      "options": [
        "[2, 3, 4]",
        "[4, 9, 16]",
        "[4, 6, 8]",
        "[2, 6, 12]"
      ],
      "answer": 1,
      "explanation": "apply executa a função fornecida para cada elemento da Series. Cada valor é elevado ao quadrado."
    },
    {
      "type": "Alternativa correta",
      "topic": "map",
      "prompt": "Você possui uma Series com códigos ['PE', 'SP', 'PE'] e quer convertê-los para nomes usando um dicionário. Qual operação é apropriada?",
      "options": [
        "s.map({'PE': 'Pernambuco', 'SP': 'São Paulo'})",
        "s.groupby({'PE': 'Pernambuco', 'SP': 'São Paulo'})",
        "s.merge({'PE': 'Pernambuco', 'SP': 'São Paulo'})",
        "s.iloc({'PE': 'Pernambuco', 'SP': 'São Paulo'})"
      ],
      "answer": 0,
      "explanation": "Series.map é apropriado para transformar cada valor usando uma função, outra Series ou um dicionário de mapeamento."
    },
    {
      "type": "Resultado do código",
      "topic": "groupby",
      "prompt": "Qual será o resultado para a categoria A?",
      "code": "import pandas as pd\ndf = pd.DataFrame({\n    'categoria': ['A', 'A', 'B'],\n    'vendas': [10, 15, 20]\n})\nresultado = df.groupby('categoria')['vendas'].sum()\nprint(resultado['A'])",
      "options": [
        "10",
        "15",
        "20",
        "25"
      ],
      "answer": 3,
      "explanation": "groupby reúne as linhas da categoria A e sum soma 10 + 15, produzindo 25."
    },
    {
      "type": "Alternativa correta",
      "topic": "agg",
      "prompt": "Qual código calcula simultaneamente média, mínimo e máximo de 'salario' por 'setor'?",
      "options": [
        "df.groupby('setor')['salario'].agg(['mean', 'min', 'max'])",
        "df.groupby('setor')['salario'].transform(['mean', 'min', 'max'])",
        "df['salario'].merge(['mean', 'min', 'max'])",
        "df.pivot('setor', 'salario', ['mean', 'min', 'max'])"
      ],
      "answer": 0,
      "explanation": "agg permite executar várias funções de agregação sobre cada grupo, retornando um resultado resumido por grupo."
    },
    {
      "type": "Cenário aplicado",
      "topic": "transform",
      "prompt": "Você quer criar uma nova coluna contendo, para cada linha, a média de vendas da categoria daquela própria linha, preservando o mesmo número de registros. Qual abordagem é mais adequada?",
      "options": [
        "df.groupby('categoria')['vendas'].transform('mean')",
        "df.groupby('categoria')['vendas'].agg('mean')",
        "df['vendas'].sum()",
        "df.pivot_table(index='categoria', values='vendas')"
      ],
      "answer": 0,
      "explanation": "transform retorna um resultado alinhado ao índice original, permitindo atribuir a estatística de cada grupo de volta a todas as linhas correspondentes."
    },
    {
      "type": "Alternativa correta",
      "topic": "Pivot tables",
      "prompt": "Qual operação é mais apropriada para resumir vendas por loja nas linhas, produto nas colunas e soma de valor nas células?",
      "options": [
        "pd.pivot_table(df, index='loja', columns='produto', values='valor', aggfunc='sum')",
        "df.merge(index='loja', columns='produto', values='valor')",
        "df.concat(index='loja', columns='produto')",
        "df.sort_values(['loja', 'produto'])"
      ],
      "answer": 0,
      "explanation": "pivot_table permite reorganizar e agregar dados simultaneamente, definindo índices, colunas, valores e função de agregação."
    },
    {
      "type": "Alternativa correta",
      "topic": "merge",
      "prompt": "df_clientes possui id_cliente e nome; df_pedidos possui id_cliente e valor. Qual operação combina os pedidos com os nomes usando id_cliente?",
      "options": [
        "df_pedidos.merge(df_clientes, on='id_cliente', how='left')",
        "df_pedidos.concat(df_clientes, on='id_cliente')",
        "df_pedidos.groupby(df_clientes, on='id_cliente')",
        "df_pedidos.map(df_clientes, on='id_cliente')"
      ],
      "answer": 0,
      "explanation": "merge combina tabelas usando uma ou mais chaves. Com how='left', todas as linhas de pedidos são preservadas e os dados de clientes são acrescentados quando há correspondência."
    },
    {
      "type": "Alternativa correta",
      "topic": "join",
      "prompt": "Em qual situação DataFrame.join costuma ser especialmente conveniente?",
      "options": [
        "Quando queremos combinar DataFrames principalmente pelos índices.",
        "Quando queremos remover valores ausentes.",
        "Quando queremos ordenar uma coluna numericamente.",
        "Quando queremos converter strings para datetime."
      ],
      "answer": 0,
      "explanation": "join é uma interface conveniente para combinar DataFrames usando seus índices, embora também ofereça opções adicionais através do parâmetro on."
    },
    {
      "type": "Resultado do código",
      "topic": "concat",
      "prompt": "Quantas linhas terá resultado?",
      "code": "import pandas as pd\na = pd.DataFrame({'x': [1, 2]})\nb = pd.DataFrame({'x': [3, 4, 5]})\nresultado = pd.concat([a, b], ignore_index=True)\nprint(len(resultado))",
      "options": [
        "2",
        "3",
        "5",
        "6"
      ],
      "answer": 2,
      "explanation": "concat com axis=0, padrão, empilha as linhas. Os 2 registros de a e os 3 de b resultam em 5 linhas."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dados ausentes",
      "prompt": "Uma coluna numérica possui alguns NaN e você decidiu preenchê-los com a mediana da própria coluna. Qual expressão realiza isso?",
      "options": [
        "df['x'] = df['x'].fillna(df['x'].median())",
        "df['x'] = df['x'].dropna(df['x'].median())",
        "df['x'] = df['x'].replace_nan('median')",
        "df['x'] = df['x'].astype(df['x'].median())"
      ],
      "answer": 0,
      "explanation": "fillna substitui valores ausentes. Passar df['x'].median() usa a mediana calculada da própria coluna como valor de preenchimento."
    },
    {
      "type": "Resultado do código",
      "topic": "Duplicados",
      "prompt": "Quantas linhas restarão após drop_duplicates()?",
      "code": "import pandas as pd\ndf = pd.DataFrame({\n    'id': [1, 1, 2, 2],\n    'valor': [10, 10, 20, 25]\n})\nresultado = df.drop_duplicates()\nprint(len(resultado))",
      "options": [
        "2",
        "3",
        "4",
        "1"
      ],
      "answer": 1,
      "explanation": "Apenas a primeira e a segunda linhas são duplicatas completas entre si. As linhas com id=2 têm valores diferentes, portanto são distintas. Restam 3 linhas."
    },
    {
      "type": "Alternativa correta",
      "topic": "Tipos de dados",
      "prompt": "Uma coluna 'idade' foi carregada como string, mas contém somente valores numéricos válidos. Qual operação a converte explicitamente para inteiro?",
      "options": [
        "df['idade'] = df['idade'].astype(int)",
        "df['idade'] = df['idade'].str(int)",
        "df['idade'] = df['idade'].dtype(int)",
        "df['idade'] = int(df)"
      ],
      "answer": 0,
      "explanation": "astype permite converter explicitamente o dtype de uma Series quando os valores são compatíveis com o tipo desejado."
    },
    {
      "type": "Resultado do código",
      "topic": "Strings",
      "prompt": "Qual será o resultado?",
      "code": "import pandas as pd\ns = pd.Series(['  Recife ', ' Olinda '])\nresultado = s.str.strip().str.lower()\nprint(resultado.tolist())",
      "options": [
        "['Recife', 'Olinda']",
        "['recife', 'olinda']",
        "['  recife ', ' olinda ']",
        "['RECIFE', 'OLINDA']"
      ],
      "answer": 1,
      "explanation": "str.strip remove espaços nas extremidades e str.lower converte os textos para minúsculas, produzindo 'recife' e 'olinda'."
    },
    {
      "type": "Alternativa correta",
      "topic": "Categorias",
      "prompt": "Uma coluna possui poucos valores repetidos, como 'baixo', 'medio' e 'alto'. Qual conversão pode representar semanticamente essa coluna como categórica no Pandas?",
      "options": [
        "df['nivel'] = df['nivel'].astype('category')",
        "df['nivel'] = df['nivel'].astype('datetime64')",
        "df['nivel'] = df['nivel'].to_numpy(float)",
        "df['nivel'] = df['nivel'].reset_index()"
      ],
      "answer": 0,
      "explanation": "O dtype category é apropriado para variáveis com conjunto discreto de categorias e pode reduzir uso de memória em determinados cenários."
    },
    {
      "type": "Resultado do código",
      "topic": "Datas",
      "prompt": "Depois da conversão abaixo, o que dt.year retorna?",
      "code": "import pandas as pd\ns = pd.to_datetime(pd.Series(['2026-01-10', '2025-12-31']))\nprint(s.dt.year.tolist())",
      "options": [
        "['2026', '2025']",
        "[2026, 2025]",
        "[1, 12]",
        "[10, 31]"
      ],
      "answer": 1,
      "explanation": "pd.to_datetime converte os textos em valores datetime. O acessor .dt.year extrai o ano de cada elemento como valores numéricos."
    },
    {
      "type": "Cenário aplicado",
      "topic": "melt",
      "prompt": "Um DataFrame possui colunas id, vendas_jan, vendas_fev e vendas_mar. Você quer transformar as três colunas mensais em duas colunas: mes e vendas, repetindo id quando necessário. Qual operação é indicada?",
      "options": [
        "melt",
        "pivot",
        "sort_values",
        "drop_duplicates"
      ],
      "answer": 0,
      "explanation": "melt transforma dados de formato wide para long, convertendo várias colunas de medidas em pares variável/valor."
    },
    {
      "type": "Alternativa correta",
      "topic": "pivot",
      "prompt": "Você possui dados longos com colunas data, produto e vendas, sem combinações duplicadas de data/produto. Quer que cada produto vire uma coluna. Qual operação é apropriada?",
      "options": [
        "df.pivot(index='data', columns='produto', values='vendas')",
        "df.melt(index='data', columns='produto', values='vendas')",
        "df.concat(index='data', columns='produto')",
        "df.replace(index='data', columns='produto')"
      ],
      "answer": 0,
      "explanation": "pivot reorganiza dados longos para formato wide quando cada combinação de índice e coluna é única. Se fosse necessário agregar duplicatas, pivot_table seria mais apropriado."
    },
    {
      "type": "Resultado do código",
      "topic": "Resampling",
      "prompt": "O que o código abaixo calcula?",
      "code": "import pandas as pd\ndf = pd.DataFrame(\n    {'valor': [1, 2, 3, 4]},\n    index=pd.to_datetime([\n        '2026-01-01 00:00',\n        '2026-01-01 12:00',\n        '2026-01-02 00:00',\n        '2026-01-02 12:00'\n    ])\n)\nresultado = df.resample('D')['valor'].sum()",
      "options": [
        "A soma de valor por dia.",
        "A soma de valor por hora.",
        "A média móvel de dois dias.",
        "A diferença entre dias consecutivos."
      ],
      "answer": 0,
      "explanation": "resample('D') agrupa uma série temporal em frequência diária. Aplicar sum soma os valores pertencentes a cada dia."
    },
    {
      "type": "Resultado do código",
      "topic": "Rolling windows",
      "prompt": "Qual será o último valor de resultado?",
      "code": "import pandas as pd\ns = pd.Series([2, 4, 6, 8])\nresultado = s.rolling(window=2).mean()\nprint(resultado.iloc[-1])",
      "options": [
        "6.0",
        "7.0",
        "8.0",
        "5.0"
      ],
      "answer": 1,
      "explanation": "Uma janela de tamanho 2 calcula a média dos dois valores mais recentes. No último ponto, a janela contém 6 e 8, cuja média é 7."
    },
    {
      "type": "Cenário aplicado",
      "topic": "Shift e lags",
      "prompt": "Em uma série temporal ordenada, você quer criar uma feature contendo o valor observado exatamente uma linha antes, sem usar informação futura. Qual expressão representa esse lag de 1 passo?",
      "options": [
        "df['valor_lag1'] = df['valor'].shift(1)",
        "df['valor_lag1'] = df['valor'].shift(-1)",
        "df['valor_lag1'] = df['valor'].rolling(1).sum().shift(-1)",
        "df['valor_lag1'] = df['valor'].diff(-1)"
      ],
      "answer": 0,
      "explanation": "shift(1) desloca os valores uma posição para baixo, fazendo com que cada linha receba o valor da linha anterior. Em séries temporais, isso é uma forma comum de construir lags sem utilizar o futuro."
    }
  ]
});
