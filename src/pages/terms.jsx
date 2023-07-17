import Layout from '../layouts/Layout'

const section_title = 'font-medium'

export default function TermsPage(){
	return (<Layout>
		<div className="text-center py-8 md:py-20">
			<div className="page-title">TÉRMINOS Y CONDICIONES</div>
		</div>

		<div className="text-sm space-y-8">
			<section className="">
				<h3 className={section_title}>1. Quiénes somos</h3>
				<p className="font-light">
					Abbott S.r.l que tiene su domicilio social de Viale G. Ribotta 9/a, 00144 Roma, Italia 
					('<span className="font-medium">Propietario</span>') con número de identificación fiscal 
					00076670595, y el siguiente licenciatario según corresponda en cada territorio 
					('<span className="font-medium">Licenciatario</span>'): Si usted se encuentra en el 
					Reino Unido, ejerce su profesión allí y se dispone a descargar la aplicación en dicho 
					territorio: Abbott Laboratories Limited que tiene su domicilio social en Abbott House 
					Vanwall Business Park, Vanwall Road, Maidenhead, Berkshire, SL6 4XE con número de 
					identificación fiscal 00329102. Si usted se encuentra en Turquía, ejerce su profesión allí 
					y se dispone a descargar la aplicación en dicho territorio: Abbott Laboratuarları İthalat 
					İhracat ve Ticaret Ltd. Şti. que tiene su domicilio social en Saray Mahallesi Dr. Adnan 
					Buyukdeniz Caddesi N.o 2 Akkom ofis Park Kelif Plaza 3. Blok Kat.14 Umraniye, Estambul 
					34768 Turquía con número de identificación fiscal 233204-0 del Registro mercantil de Estambul. 
					Si usted se encuentra en Croacia, ejerce su profesión allí y se dispone a descargar la 
					aplicación en dicho territorio: Abbott Laboratories d.o.o. que tiene en su domicilio 
					social en Koranska 2 10000 Zagreb PIN: 90392016912 con número de identificación fiscal 
					080498236, del Tribunal mercantil de Zagreb. Si usted se encuentra en <span className="font-medium">España</span>, 
					ejerce su profesión allí y se dispone a descargar la aplicación en dicho territorio: 
					<span className="font-medium">Abbott Laboratories S.A. que tiene su do- micilio social 
					en Avda. de Burgos, 91'28050, España, con número de registro fiscal A08099681 del Registro 
					Mercantil de Madrid: Volumen 4019, general 3248 s. 3a del Libro de Sociedades, folio 1 y 25, 
					páginas 31.053, 1o y 2o registros1.</span> (individualmente, cada uno de ellos según corresponda 
					denominado <span className="font-medium">Abbott</span>). Abbott España se encuentra adherida 
					al Código AENE (Asociación Española de Nutrición Enteral) y al Código ANDI (Asociación Nacional 
					de Fabricantes de Productos de Dietética Infantil). Para contacta con Abbott España, por favor, 
					llame a (+34) 91 337 52 00.</p>
			</section>


			<section className="">
				<h3 className={section_title}>2. Uso de la Aplicación</h3>
			</section>
		</div>
	</Layout>)
}