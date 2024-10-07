// Carrega livros do localStorage
function loadBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Salva livros no localStorage
function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

// Carrega empréstimos do localStorage
function loadLoans() {
    return JSON.parse(localStorage.getItem('loans')) || [];
}

// Salva empréstimos no localStorage
function saveLoans(loans) {
    localStorage.setItem('loans', JSON.stringify(loans));
}

// Exibe livros disponíveis na tabela
function displayBooks() {
    const books = loadBooks();
    const tbody = document.querySelector('#available-books tbody');
    tbody.innerHTML = '';

    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.genre}</td>
            <td>${book.quantity}</td>
        `;
        tbody.appendChild(row);
    });

    updateBookOptions();
}

// Exibe os empréstimos registrados
function displayLoans() {
    const loans = loadLoans();
    const tbody = document.querySelector('#loan-records tbody');
    tbody.innerHTML = '';

    loans.forEach((loan, index) => {
        const row = document.createElement('tr');
        const returnDate = new Date(loan.loanDate);
        returnDate.setDate(returnDate.getDate() + 20);

        row.innerHTML = `
            <td>${loan.title}</td>
            <td>${loan.borrower}</td>
            <td>${loan.loanDate}</td>
            <td>${returnDate.toISOString().split('T')[0]}</td>
            <td><button class="btn return-book" data-index="${index}">Devolver</button></td>
        `;
        tbody.appendChild(row);
    });
}

// Atualiza as opções de livros nos formulários
function updateBookOptions() {
    const books = loadBooks();
    const bookOptions = document.querySelectorAll('#update-title, #loan-title, #remove-title');
    bookOptions.forEach(select => {
        select.innerHTML = '';
        books.forEach(book => {
            const option = document.createElement('option');
            option.value = book.title;
            option.textContent = book.title;
            select.appendChild(option);
        });
    });
}

// Adicionar livro
document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    const books = loadBooks();

    const existingBook = books.find(book => book.title === title);

    if (existingBook) {
        alert('O livro já existe.');
        return;
    }

    books.push({ title, genre, quantity });
    saveBooks(books);
    displayBooks();

    document.getElementById('add-book-form').reset();
});

// Atualizar quantidade de livros
document.getElementById('update-book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('update-title').value;
    const newQuantity = parseInt(document.getElementById('new-quantity').value, 10);

    const books = loadBooks();
    const book = books.find(book => book.title === title);

    if (book) {
        book.quantity = newQuantity;
        saveBooks(books);
        displayBooks();
    } else {
        alert('Livro não encontrado.');
    }

    document.getElementById('update-book-form').reset();
});

// Registrar empréstimo
document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('loan-title').value;
    const borrower = document.getElementById('borrower').value;
    const loanDate = document.getElementById('loan-date').value;

    const books = loadBooks();
    const book = books.find(book => book.title === title);

    if (book && book.quantity > 0) {
        book.quantity--;

        const loans = loadLoans();
        loans.push({ title, borrower, loanDate });
        saveLoans(loans);

        saveBooks(books);
        displayBooks();
        displayLoans();
    } else {
        alert('Livro não disponível.');
    }

    document.getElementById('loan-form').reset();
});

// Remover livro
document.getElementById('remove-book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('remove-title').value;

    let books = loadBooks();
    books = books.filter(book => book.title !== title);

    saveBooks(books);
    displayBooks();

    document.getElementById('remove-book-form').reset();
});

// Devolver livro e atualizar quantidade
document.querySelector('#loan-records tbody').addEventListener('click', function(event) {
    if (event.target.classList.contains('return-book')) {
        const index = event.target.dataset.index;
        const loans = loadLoans();
        const loan = loans[index];

        const books = loadBooks();
        const book = books.find(book => book.title === loan.title);
        if (book) {
            book.quantity++;
            saveBooks(books);
            displayBooks();
        }

        loans.splice(index, 1);
        saveLoans(loans);
        displayLoans();
    }
});

// Pesquisar empréstimos por nome do leitor
document.getElementById('search-borrower').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const loans = loadLoans();
    const tbody = document.querySelector('#loan-records tbody');
    tbody.innerHTML = '';

    loans
        .filter(loan => loan.borrower.toLowerCase().includes(searchTerm))
        .forEach((loan, index) => {
            const row = document.createElement('tr');
            const returnDate = new Date(loan.loanDate);
            returnDate.setDate(returnDate.getDate() + 20);

            row.innerHTML = `
                <td>${loan.title}</td>
                <td>${loan.borrower}</td>
                <td>${loan.loanDate}</td>
                <td>${returnDate.toISOString().split('T')[0]}</td>
                <td><button class="btn return-book" data-index="${index}">Devolver</button></td>
            `;
            tbody.appendChild(row);
        });
});

// Inicializa a exibição de livros e empréstimos
document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
    displayLoans();
});