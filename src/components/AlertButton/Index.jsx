const AlertButton = ({label, alertLabel}) => {
    return(
        <button 
        label={label} 
        onClick={() => alertLabel(label)}>
            Clique aqui para ver o alerta com a label do botão
        </button>
    )
}
AlertButton.defaultProps = {
    label: 'vazio'
}

export default AlertButton