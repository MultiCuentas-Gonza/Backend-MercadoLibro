**Nota** todos aquellos que tengna signo de exclamacion, no son nulos.

Para realizar las queries y mutaciones en graphql ver los schemas de referencia para armar dichas consultas

## Funciones
### Queries
- **getLibros**
    - void
    **or**
    - categoria **String**
    
    **return** *SendLibro*

- **login**
    correo! **String**
    contrasenia! **String**
    tokenUser! **String**
    **or**
    correo! **String**
    contrasenia! **String**
    **or**
    tokenUser! **String**

    **return** *SendUser*

### Mutaciones
- **realizarCompra**
    - tokenUser! **String**

    **return** *SendMercadoPago*
- **signUp**
    - nombre! **String**
	- contrasenia! **String**
	- correo! **String**

    **return** *SendUser*

- **insertFav**
    - isbn! **String**
    - tokenUser! **String**

    **return** *SendUser*

## SCHEMAS
### SendUser
message! **String**
success! **Boolean**
status! **Integer**
accessToken! **String**
usuario! **[usuario]**

### SendLibro
message! **String**
success! **Boolean**
status! **Integer**
usuario! **[libro]**

### SendMercadoPago
message! **String**
success! **Boolean**
status! **Integer**
init_point! **String**

### Libro
- isbn! **String**
- url_imagen! **String**
- titulo! **String**
- fecha_edicion! **String**
- precio! **Double**
- stock! **Integer**
- descripcion! **String**
- fecha_ingreso! **String**
- descuento **Double**
- idioma! **String**
    - id! **Integer**
    - nombre! **String**
- editorial! **editorial**
    - id! **Integer**
    - nombre! **String**
- autor! **[autor]**
    - id! **Integer**
    - nombre! **String**
- tema! **[tema]**
    - id! **Integer**
    - nombre! **String**
    - url_tema! **String**
- opinion **[opinion]**
    - usuario_libro! **String**
    - comentario! **String**
    - usuario! **usuario**
    - libro! **libro**
- puntuacion **[puntuacion]**
    - usuario_libro! **String**
    - puntuacion! **Integer**
    - usuario! **usuario**
    - libro! **libro**

### Usuario
- id! **Integer**
- nombre! **String**
- correo! **String**
- contrasenia! **String**
- admin! **Boolean**
- favorito **[Libro]**
- orden **[orden]**
    - id! **Integer**
    - fecha! **String**
    - total! **Double**
    - cupon **cupon**
        - codigo_cupon! **String**
        - porc_descuento! **Double**
        - utilziado! **Boolean**
    - direccion_entrega! **Direccion**
        - id! **String**
        - direccion! **String**
        - infoAdicional! **String**
        - dni! **Integer**
        - telefono! **String**
        - usuario! **Integer**
        - ciudad! **ciudad**
            - id! **Integer**
            - nombre! **String**
            - provincia! **provincia**
                - id! **Integer**
                - nombre! **String**
                - pais! **pais**
                    - id! **Integer**
                    - nombre! **String**
        - orden_detalle **[orden_detalle]**
            - id! **String**
            - precio! **String**
            - cantidad! **String**
            - id_orden! **String**
            - libro! **String**
- carrito **[carrito]**
    - nro_linea! **Integer**
    - cantidad! **Integer**
    - libro! **Libro**

### Cupon
codigo_cupon! **String**
porc_descuento! **Double**
utilziado! **Boolean**

### Idioma
- id! **Integer**
- nombre! **String**

### Editorial
- id! **Integer**
- nombre! **String**

### Autor
- id! **Integer**
- nombre! **String**

### Tema
- id! **Integer**
- nombre! **String**
- url_tema! **String**

### Opinion
- usuario_libro! **String**
- comentario! **String**
- usuario! **usuario**
- libro! **libro**

### Puntuacion
- usuario_libro! **String**
- puntuacion! **Integer**
- usuario! **usuario**
- libro! **libro**

### Orden
- id! **Integer**
- fecha! **String**
- total! **Double**
- cupon **cupon**

### Direccion
- id! **String**
- direccion! **String**
- infoAdicional! **String**
- dni! **Integer**
- telefono **String**
- usuario! **Integer**
- ciudad! **ciudad**

### Ciudad
- id! **Integer**
- nombre! **String**
- provincia! **provincia**

### Provincia
- id! **Integer**
- nombre! **String**
- pais! **pais**

### Pais
- id! **Integer**
- nombre! **String**

### Orden_detalle
- id! **String**
- precio! **String**
- cantidad! **String**
- id_orden! **String**
- libro! **String**

### carrito
- nro_linea! **Integer**
- cantidad! **Integer**
- libro! **Libro**