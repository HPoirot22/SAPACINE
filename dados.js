let dados = [
        // Filmes
        {
            titulo: "Carol",
            sinopse: "Romance entre duas mulheres em Nova York dos anos 50.",
            nomeDaPersonagem: "Carol Aird e Therese Belieau",
            direcao: "Todd Haynes",
            anoDeLancamento: "2015",
            ondeAssistir: "Netflix",
            genero: "Drama, Romance"
        },
        {
            titulo: "A Vida Secreta das Abelhas",
            sinopse: "Uma jovem busca refúgio e encontra amor em uma família de mulheres negras.",
            nomeDaPersonagem: "Lily Owens e Rosaleen",
            direcao: "Gina Prince-Bythewood",
            anoDeLancamento: "2008",
            ondeAssistir: "Amazon Prime Video",
            genero: "Drama"
        },
        {
            titulo: "Blue is the Warmest Color",
            sinopse: "Paixão intensa e evolução de um relacionamento lésbico adolescente.",
            nomeDaPersonagem: "Adèle e Emma",
            direcao: "Abdellatif Kechiche",
            anoDeLancamento: "2013",
            ondeAssistir: "Disponível em plataformas digitais",
            genero: "Drama Romântico"
        },
        {
            titulo: "Ammonite",
            sinopse: "Romance proibido entre uma paleontóloga e uma jovem mulher no século XIX.",
            nomeDaPersonagem: "Mary Anning e Charlotte Murchison",
            direcao: "Francis Lee",
            anoDeLancamento: "2020",
            ondeAssistir: "Disponível em plataformas digitais",
            genero: "Drama Romântico"
        },
        {
            titulo: "The Handmaiden",
            sinopse: "Uma jovem ladra é contratada para se aproximar e manipular uma rica herdeira japonesa, mas se envolve em um jogo de sedução e traição.",
            nomeDaPersonagem: "Sook-hee e Lady Hideko",
            direcao: "Park Chan-wook",
            anoDeLancamento: "2016",
            ondeAssistir: "Mubi",
            genero: "Thriller psicológico, Romance, Histórico"
        },
        {
            titulo: "Crush",
            sinopse: "Uma adolescente se apaixona pela nova aluna, mas precisa lidar com seus próprios sentimentos e as expectativas dos outros.",
            nomeDaPersonagem: "Paige Evans e AJ",
            direcao: "Sammi Cohen",
            anoDeLancamento: "2022",
            ondeAssistir: "Paramount+",
            genero: "Romance, Comédia Dramática"
    },
    {
        titulo: "Vita e Virginia",
        sinopse: "História de amor entre as escritoras Vita Sackville-West e Virginia Woolf.",
        nomeDaPersonagem: "Vita Sackville-West e Virginia Woolf",
        direcao: "Chanya Button",
        anoDeLancamento: "2018",
        ondeAssistir: "Amazon Prime Video",
        genero: "Drama, Romance, Biografia"
    },
    {
        titulo: "Imagine You and Me",
        sinopse: "Um jovem filipino se apaixona por um homem mais velho em um relacionamento secreto.",
        nomeDaPersonagem: "Drake Ramirez e Miguel Alvir",
        direcao: "Mike Sandejas",
        anoDeLancamento: "2005",
        ondeAssistir: "Netflix",
        genero: "Romance, Drama"
    },
    {
        titulo: "I Can't Think Straight",
        sinopse: "Uma mulher palestina se apaixona por outra mulher em Londres, lidando com questões de identidade e família.",
        nomeDaPersonagem: "Leyla Maroun e Tala Al-Rashid",
        direcao: "Shamim Sarif",
        anoDeLancamento: "2007",
        ondeAssistir: "Amazon Prime Video",
        genero: "Romance, Drama",
        paisDeOrigem: "Reino Unido"
    },
    {
        titulo: "A World to Come",
        sinopse: "Duas mulheres em uma fazenda isolada no século XIX desenvolvem um relacionamento profundo em meio à solidão e à natureza.",
        nomeDaPersonagem: "Abigail e Tallie",
        direcao: "Mona Fastvold",
        anoDeLancamento: "2020",
        ondeAssistir: "Mubi",
        genero: "Drama, Romance, Histórico",
        paisDeOrigem: "Estados Unidos"
    },
    {
        titulo: "The World Unseen",
        sinopse: "Um romance lésbico entre duas mulheres indianas em uma pequena cidade na África do Sul durante os anos de apartheid.",
        nomeDaPersonagem: "Amina e Miriam",
        direcao: "Shamim Sarif",
        anoDeLancamento: "2007",
        ondeAssistir: "Mubi",
        genero: "Drama, Romance",
        paisDeOrigem: "África do Sul"
    },
    {
        titulo: "Saving Face",
        sinopse: "Uma mulher chinesa-americana tenta equilibrar sua vida profissional e pessoal, enquanto lida com a homossexualidade da mãe e sua própria busca por amor.",
        nomeDaPersonagem: "Wilhelmina 'Wil' Chen e Vivian",
        direcao: "Alice Wu",
        anoDeLancamento: "2004", 
        ondeAssistir: "Hulu",
        genero: "Comédia Dramática, Romance",
        paisDeOrigem: "Estados Unidos"
    },
    {
        titulo: "Loving Annabelle",
        sinopse: "Uma jovem religiosa se apaixona pela líder de um grupo de dança em uma escola católica para meninas.",
        nomeDaPersonagem: "Annabelle and Simone",
        direcao: "Katherine Dieckmann",
        anoDeLancamento: "2006",
        ondeAssistir: "Amazon Prime Video",
        genero: "Drama, Romance",
        paisDeOrigem: "Estados Unidos"
    },
    {
        titulo: "Orange is the New Black",
        sinopse: "Vida dentro de uma prisão feminina, com diversas histórias e relacionamentos lésbicos.",
        nomeDaPersonagem: "Diversas",
        direcao: "Jenji Kohan",
        anoDeLancamento: "2013-2019",
        ondeAssistir: "Netflix",
        genero: "Drama"
    },
    {
        titulo: "The L Word",
        sinopse: "Vida de um grupo de lésbicas em Los Angeles.",
        nomeDaPersonagem: "Bette Porter, Tina Kennard, Jenny Schecter",
        direcao: "Ilene Chaiken",
        anoDeLancamento: "2004-2009",
        ondeAssistir: "Disponível em plataformas digitais",
        genero: "Drama"
    },
    {
        titulo: "Gentleman Jack",
        sinopse: "Vida de Anne Lister, uma rica proprietária de terras no século XIX, e seus romances lésbicos.",
        nomeDaPersonagem: "Anne Lister e Ann Walker",
        direcao: "Sally Wainwright",
        anoDeLancamento: "2019-presente",
        ondeAssistir: "HBO Max",
        genero: "Drama Histórico"
    },
    {
        titulo: "Euphoria",
        sinopse: "Drama adolescente que aborda temas como vício, trauma e sexualidade, com um casal lésbico.",
        nomeDaPersonagem: "Kat Hernandez e Jules Vaughn",
        direcao: "Sam Levinson",
        anoDeLancamento: "2019-presente",
        ondeAssistir: "HBO Max",
        genero: "Drama"
    },
    {
        titulo: "Heartstopper",
        sinopse: "Dois adolescentes se apaixonam e descobrem a si mesmos.",
        nomeDaPersonagem: "Charlie Spring e Nick Nelson",
        direcao: "Otis Kardynal",
        anoDeLancamento: "2022-2024",
        ondeAssistir: "Netflix",
        genero: "Romance"
    },
    {
        titulo: "Dickinson",
        sinopse: "Série que reinventa a vida da poetisa Emily Dickinson.",
        nomeDaPersonagem: "Emily Dickinson",
        direcao: "Alena Smith",
        anoDeLancamento: "2019",
        ondeAssistir: "Apple TV+",
        genero: "Drama, Comédia, Histórico"
    }
   
];