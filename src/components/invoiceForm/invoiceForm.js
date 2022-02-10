import './invoiceForm.css'

const InvoiceForm = () => {
	return(
		<div id="main-form">
			<form method="POST" action="/submit_invoice">
				<fieldset>
					<legend>Info factura</legend>
					<div id="info-factura">
						<div>
							<label>Nº de factura</label>
							<input type="number" />
						</div>
						<div>
							<label>Fecha de facturación</label>
							<input type="date" />
						</div>
						<div>
							<label>Fecha de vencimiento</label>
							<input type="date"/>
						</div>
					</div>
					<div id="info-destino">
						<div>
							<label>Destinatario</label>
							<input type="text"/>
						</div>
						<div>
							<label>Dirección</label>
							<input type="text"></input>
						</div>
					</div>
					<div id="info-pago">
						<div>
							<label>Importe</label>
							<input type="number"/>
						</div>
						<div>
							<label>Condiciones de pago</label>
							<input type="text"/>
						</div>
					</div>
				</fieldset>
				<div id="form-btn">
					<button type="submit">Enviar</button>
				</div>
			</form>
		</div>
	)
}

export default InvoiceForm;