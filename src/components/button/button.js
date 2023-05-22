const Button = ({label, alertLabel}) => {
    return(
        <button 
        label={label} 
        onClick={() => alertLabel(label)}>
            Clique aqui para ver o alerta com a label do botão
        </button>
    )
}
Button.defaultProps = {
    label: 'vazio'
}

export default Button