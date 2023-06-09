import Text from './components/StyledText/index.jsx'
import AlertButton from './components/AlertButton/Index.jsx'

function alertLabel (label){
  alert('A label desse botão é '+label)
}

function App() {
  return (
    <>
    <Text/>
    <AlertButton label='Baixar CV' alertLabel={alertLabel}/>    
    </>    
  );
}

export default App;
