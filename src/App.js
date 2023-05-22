import Text from './components/text/text.js'
import Button from './components/button/button.js'

function alertLabel (label){
  alert('A label desse botão é '+label)
}

function App() {
  return (
    <>
    <Text/>
    <Button label='Baixar CV' alertLabel={alertLabel}/>    
    </>    
  );
}

export default App;
