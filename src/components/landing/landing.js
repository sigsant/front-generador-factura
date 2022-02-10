import BtnGroup from './btngroup/btngroup';

const Landing = () => {
	const buttonLogic = {
		testClick: function(){
			console.log("Click me");
		}
	}
	return(
		<main id="landing--page">
		<h1>Generador de facturas</h1>
		<BtnGroup 
		handlerClick={buttonLogic.testClick}/>
	</main>
	)

}

export default Landing;