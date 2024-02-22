const Alerta = ({ mensaje }) => {
    // Verificar si mensaje es undefined o no tiene las propiedades esperadas
    if (!mensaje || !mensaje.msj || mensaje.error === undefined) {
        return null; // Retorna null si mensaje no es válido
    }

    // Desestructurar las propiedades del mensaje
    const { msj, error } = mensaje;

    // Renderizar el componente
    return (
        <div style={{ padding: "1rem", color: error ? "red" : "green" }}>
            <h6>
                {msj}
            </h6>
        </div>
    );
};

export default Alerta;
