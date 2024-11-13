# bibliotecadosdivos
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/pagina.jpeg">
    <link rel="stylesheet" href="img/peppa.gif">
    <link rel="stylesheet" href="styles32.css">
    <title>Gerenciamamento de Biblioteca</title>
</head>
<body>
    <img src="img/pagina.jpeg" alt="pagina">
    <header>
        <h1>Biblioteca Página Mágica</h1>
    </header>

    <main>
        <!-- Adicionar livro -->
        <section class="form-section">
            <h2>Adicionar Livro</h2>
            <form id="add-book-form">
                <label for="title">Título do Livro:</label>
                <input type="text" id="title" required>

                <label for="genre">Gênero Literário:</label>
                <select id="genre" required>
                    <option value="">Selecione um gênero</option>
                    <option value="Romance">Romance</option>
                    <option value="Ficção Científica">Ficção Científica</option>
                    <option value="Fantasia">Fantasia</option>
                    <option value="Mistério">Mistério</option>
                    <option value="Biografia">Biografia</option>
                    <option value="História">História</option>
                    <option value="Poesia">Poesia</option>
                    <option value="Terror">Terror</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Autoajuda">Autoajuda</option>
                    <option value="Drama">Drama</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Negócios">Negócios</option>
                    <option value="Educação">Educação</option>
                    <option value="Religião">Religião</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Esportes">Esportes</option>
                </select>

                <label for="quantity">Quantidade:</label>
                <input type="number" id="quantity" min="1" required>

                <button type="submit" class="btn">Adicionar Livro</button>
            </form>
        </section>

        <!-- Atualizar quantidade de livro -->
        <section class="form-section">
            <h2>Atualizar Quantidade de Livros</h2>
            <form id="update-book-form">
                <label for="update-title">Título do Livro:</label>
                <select id="update-title"></select>

                <label for="new-quantity">Nova Quantidade:</label>
                <input type="number" id="new-quantity" min="1" required>

                <button type="submit" class="btn">Atualizar Quantidade</button>
            </form>
        </section>

        <!-- Área de Empréstimos -->
        <section class="form-section">
            <h2>Registrar Empréstimo</h2>
            <form id="loan-form">
                <label for="loan-title">Título do Livro:</label>
                <select id="loan-title"></select>

                <label for="borrower">Nome do Leitor:</label>
                <input type="text" id="borrower" required>

                <label for="loan-date">Data de Retirada:</label>
                <input type="date" id="loan-date" required>

                <button type="submit" class="btn">Registrar Empréstimo</button>
            </form>
        </section>

        <!-- Remover Livro -->
        <section class="form-section">
            <h2>Remover Livro</h2>
            <form id="remove-book-form">
                <label for="remove-title">Título do Livro:</label>
                <select id="remove-title"></select>
                <button type="submit" class="btn">Remover Livro</button>
            </form>
        </section>

        <!-- Livros Disponíveis -->
        <section>
            <h2>Livros Disponíveis</h2>
            <table id="available-books" class="styled-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Gênero</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </section>

        <!-- Empréstimos Registrados -->
        <section>
            <h2>Empréstimos Registrados</h2>
            <input type="text" id="search-borrower" placeholder="Pesquisar por nome do leitor" class="search-bar">
            <table id="loan-records" class="styled-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Leitor</th>
                        <th>Data de Retirada</th>
                        <th>Data de Devolução</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </section>
    </main>

    <!-- Rodapé com direitos autorais -->
    <footer>
        <p>&copy; Biblioteca  tem Todos os direitos reservados.</p>
    </footer>

    <script src="script032.js"></script>
</body>
</html>
