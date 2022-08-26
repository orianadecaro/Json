fetch('http://127.0.0.1:5500/libros.json')
    .then((response) => response.json())
    //.then((data) => console.log(data))
    .then((libros) => {
        const nombreLibros = libros.map((libro) => libro.nombre);
        console.log(nombreLibros);

    })

