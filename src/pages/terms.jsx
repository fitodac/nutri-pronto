import { useEffect } from 'react'

import Layout from '../layouts/Layout'
import Link from 'next/link'
import Matomo from '../utils/matomo'

const section_title = 'font-medium md:font-semibold'

export default function TermsPage(){

	useEffect(() => Matomo(), [])


	return (<Layout>
		<div className="text-center py-8 md:py-20">
			<div className="page-title">TÉRMINOS Y CONDICIONES</div>
		</div>

		<div className="text-sm space-y-6 md:text-base">
			<section className="space-y-2">
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


			<section className="space-y-2">
				<h3 className={section_title}>2. Uso de la Aplicación</h3>

				<div className="flex gap-x-3">
					<p className="font-light">2.1</p>
					<p className="font-light">Estas <span className="font-medium">condiciones</span> (las ‘Condiciones’) 
					se aplican al uso de la herra- mienta de examen remoto NUTRIPRONTO (‘Aplicación’). La Aplicación es 
					propiedad de Abbott S.r.l, para cuyo uso y explotación ha concedido licencia a Abbott Laboratories 
					Limited en el Reino Unido, Abbott Laboratories, S.A. en España, Abbott Laboratuarları Ithalat Ihracat 
					ve Ticaret Ltd. Şti. en Turquía y Abbott Laboratories d.o.o. en Croacia. Esta Aplicación es para uso 
					exclusivo de profe- sionales sanitarios cualificados de cada país en el que la misma sea descargada. 
					Las personas que no estén suficientemente capacita- das y sean profesionales sanitarios cualificados 
					en cada uno de los países de aplicación, según corresponda, no deben descargar, ac- ceder ni utilizar 
					la Aplicación.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">2.2</p>
					<div>
						<p className="font-light">La Aplicación es una aplicación móvil dirigida a usuarios que sean 
						profesionales sanitarios con el objetivo de facilitar diagnósticos y recomendaciones sobre aspectos 
						nutricionales de pacientes a fin de satisfacer mejor las necesidades de estos pacientes, garantizando 
						un enfoque nutricional más completo adaptado a sus necesida- des. Esta Aplicación tiene únicamente 
						fines informativos.</p>
						<p className="text-sm font-light mt-2">1) En cumplimiento de la obligación general de información del 
						art. 10 de la Ley Española 34/2002 de 11 de julio, servicios de la sociedad de la información y comercio 
						electrónico, proporcionamos al usuario los datos del propietario de los derechos de uso y explotación de 
						la Herramienta de examen remoto NUTRIPRONTO para España: Abbott Laboratories S.A. que tiene su domicilio 
						social en Avda. de Burgos, 91 ’ 28050, España, con número de registro fiscal A08099681 del Registro 
						Mercantil de Madrid: Volumen 4019, general 3248 s. 3a del Libro de Sociedades, folio 1 y 25, páginas 31.053, 
						1o y 2o registros.</p>
					</div>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">2.3</p>
					<p className="font-light">Al hacer clic en el botón de Aceptar que aparece a continuación, usted acepta y confirma 
					que es un profesional sanitario cualificado en el Reino Unido, si usted se encuentra allí, ejerce su profesión y 
					se dispone a descargar la aplicación en dicho territorio, Italia si usted se encuentra allí, ejerce su profesión y 
					se dispone a descargar la aplicación en dicho territorio, España si usted se encuentra allí, ejerce su profesión y 
					se dispone a descargar la aplicación en dicho territorio,, Turquía si usted se encuentra allí, ejerce su profesión 
					y se dispone a descargar la aplicación en dicho territorio, o Croacia si usted se encuentra allí, ejerce su profesión 
					y se dispone a descargar la aplicación en dicho territorio, y que al acceder a esta Aplicación actuará de conformidad 
					con estas Condiciones, así como con todas las leyes, normas, códigos y normativas aplicables del territorio de 
					aplicación.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">2.4</p>
					<p className="font-light">Al instalar o utilizar la Aplicación, usted acepta quedar vinculado por estas Condiciones (y cualquier modificación de las mismas).</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>3. Acceso a la Aplicación</h3>

				<div className="flex gap-x-3">
					<p className="font-light">3.1</p>
					<p className="font-light">Su acceso a la Aplicación está sujeto a estas Condiciones, que pueden actualizarse o modificarse 
					ocasionalmente sin previo aviso a los usuarios. Abbott se reserva el derecho a poner fin, de forma total o parcial, al 
					acceso a la Aplicación en cualquier momento y por cualquier motivo sin notificación previa.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">3.2</p>
					<p className="font-light">Al acceder o utilizar la Aplicación, usted acepta que ha leído, comprendido y aceptado estar 
					obligado por estas Condiciones (y cualquier modificación de las mismas). Es usted responsable de revisar periódicamente 
					las presentes Condiciones para consultar las modificaciones que puedan existir. El uso de la Aplicación una vez modificadas 
					estas Condiciones constituye su aceptación de dichas modificaciones. Si no está de acuerdo con estas Condiciones 
					(tal como puedan ser modificadas en su momento) o está insatisfecho con la Aplicación, su único y exclusivo recurso es 
					dejar de utilizarla.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>4. Propiedad de la Aplicación</h3>
				<p className="font-light">La Aplicación es propiedad de Abbott S.r.l y tienen derecho a su explotación y uso en cada uno de 
				los territorios detallados en el apartado 1o, sus Licenciatarios. La dirección del domicilio social de Abbott es Viale G. Ribotta 9/a, 
				00144 Roma, Italia y el número de identificación fiscal de la empresa es 00076670595</p>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>5. Cargos por datos</h3>
				<p className="font-light">Ni el Propietario ni Abbott tendrán responsabilidad alguna respecto a los cargos por los datos en 
				que pueda incurrir por el acceso a la Aplicación. El usuario de la Aplicación tendrá la responsabilidad exclusiva del pago de 
				todos y cualesquiera cargos en que se haya incurrido.</p>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>6. Requisitos del sistema y disponibilidad</h3>
				<p className="font-light">Para utilizar la Aplicación, el usuario que utilice la Aplicación debe tener un teléfono móvil 
				o dispositivo compatible, con conexión a Internet y que cumpla las especificaciones mínimas. La versión del software de 
				la Aplicación puede experimentar actualizaciones periódicas para dar soporte a nuevas funciones y servicios. Los requisitos 
				de software son los siguientes: Dispositivos Android con Android 7.0 y sistemas operativos superiores; requiere iOS 9.0 
				o posteriores.</p>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>7. Ámbito de aplicación de las Condiciones</h3>

				<div className="flex gap-x-3">
					<p className="font-light">7.1</p>
					<p className="font-light">Estas Condiciones son aplicables únicamente al uso de la Aplicación.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>8. Responsabilidad de los profesionales</h3>
				<p className="font-light">El profesional sanitario que sea un usuario de la Aplicación reconoce y acepta 
				que el uso del contenido y/o los servicios ofrecidos por la Aplicación será de su propio riesgo y/o 
				responsabilidad. El profesional sanitario acepta utilizar la Aplicación y todos sus contenidos y servicios 
				de conformidad con la ley, los códigos éticos y las presentes Condiciones. El profesional sanitario se 
				compromete a hacer un uso adecuado de los servicios y/o contenidos de la Aplicación y a no usarlos para 
				llevar a cabo actividades ilícitas o que constituyan un delito, que infrinjan los derechos de terceros 
				y/o que infrinjan las normativas sobre propiedad intelectual e industrial, o cualquier otra normativa 
				aplicable. En particular, el usuario profesional sanitario de la Aplicación acepta no transmitir, introducir, 
				difundir ni poner a disposición de terceros ningún tipo de material e información (datos, mensajes, dibujos, 
				archivos de sonido e imagen, fotografías, software, etc.) que sean contrarias a la ley, a los códigos éticos 
				de aplicación, ni a estas Condiciones.</p>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>9. Quejas sobre productos de Abbott</h3>

				<div className="flex gap-x-3">
					<p className="font-light">9.1</p>
					<div>
						<p className="font-light">Si desea notificar una queja sobre un producto de Abbott, póngase en contacto con nosotros a través de:</p>
						<p className="font-light mt-1">Si se encuentra en Reino Unido, lo puede hacer a través del siguiente Sitio Web:</p>
						<p className="font-light mt-1"><a href="https://www.abbott.co.uk/contact.html" target="_blank" className="text-brand-aqua underline">https://www.abbott.co.uk/contact.html</a></p>
						<p className="font-light mt-1">Si se encuentra en Turquía, lo puede hacer a través del siguiente Sitio Web:</p>
						<p className="font-light mt-1"><a href="https://www.tr.abbott/contact.html" target="_blank" className="text-brand-aqua underline">https://www.tr.abbott/contact.html</a></p>
						<p className="font-light mt-1">Si se encuentra en Italia, lo puede hacer a través del siguiente Sitio Web:</p>
						<p className="font-light mt-1"><a href="https://www.it.abbott/contact.html" target="_blank" className="text-brand-aqua underline">https://www.it.abbott/contact.html</a></p>
						<p className="font-light mt-1">Si se encuentra en Croacia, lo puede hacer a través del siguiente Sitio Web:</p>
						<p className="font-light mt-1"><a href="https://www.abbott.com/contact.Croatia.html" target="_blank" className="text-brand-aqua underline">https://www.abbott.com/contact.Croatia.html</a></p>
						<p className="font-light mt-1">Si se encuentra en España, lo puede hacer a través del siguiente Sitio Web:</p>
						<p className="font-light mt-1"><a href="https://www.es.abbott/contact.html" target="_blank" className="text-brand-aqua underline">https://www.es.abbott/contact.html</a></p>
					</div>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>10. Avisos legales y advertencias sobre la Aplicación</h3>

				<div className="flex gap-x-3">
					<p className="font-light">10.1</p>
					<p className="font-light">Abbott tomará las precauciones razonables para garantizar que la información y 
					el contenido de la Aplicación es preciso, completo, está actualizado, siempre está disponible y no infringe 
					los derechos de ningún tercero. Sin embargo, Abbott no garantiza que este sea siempre el caso. La Aplicación, 
					así como el contenido y la información que hay en él se suministran ‘como tal’ y ‘según disponibilidad’, con 
					todos sus fallos. Hasta donde lo permita la legislación aplicable, Abbott renuncia por la presente a todas las 
					declaraciones y garantías relacionadas con la información y el contenido de la Aplicación, expresas o implícitas, 
					creadas por ley, contratadas o de otro tipo, incluidas, sin limitación, cualquier garantía de comerciabilidad, 
					adecuación para un fin concreto, título o respeto de los derechos de terceros.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">10.2</p>
					<p className="font-light">La información y el contenido de la Aplicación no constituyen asesoramiento médico ni 
					orientación en relación con ninguna afección particular y en ningún caso exime de tratamiento individualizado del 
					paciente por parte del profesional sanitario responsable. Los profesionales de la salud deben investigar el tema 
					o consultar a un experto apropiado, antes de tomar decisiones relacionadas con el tratamiento o la atención de 
					cualquier paciente.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">10.3</p>
					<p className="font-light">Los usuarios profesionales sanitarios de la Aplicación deben saber que la relación es 
					impersonal y se basa en el presupuesto de que el profesional proporciona información veraz y precisa. En consecuencia, 
					ni el Propietario ni Abbott son responsables de las consecuencias que puedan surgir del hecho de que el profesional 
					proporcione información falsa o inexacta durante el proceso de registro de los datos. Del mismo modo, los resultados 
					obtenidos a través del uso de la Aplicación son estimaciones y dependerán de la información proporcionada por el 
					profesional que realiza la consulta. El resultado obtenido a través del uso de la Aplicación no se considera un 
					sustituto de una opinión médica profesional emitida por el médico responsable del tratamiento, ni de la realización 
					de las pruebas diagnósticas pertinentes por parte de los profesionales sanitarios correspondientes con el fin de 
					determinar, a raíz de dichas pruebas, un tratamiento adecuado. Toda aplicación o uso de la información, recursos o 
					recomendaciones que se deriven del uso de la Aplicación es responsabilidad del profesional sanitario usuario de 
					la Aplicación.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">10.4</p>
					<p className="font-light">El diagnóstico o tratamiento de un problema de salud no debe basarse exclusivamente en la 
					información ofrecida a través de la Aplicación. La información proporcionada no puede utilizarse como sustituto de 
					una consulta con un profesional sanitario cualificado. Al utilizar la Aplicación, el usuario profesional sanitario 
					asume plena responsabilidad y todo tipo de riesgos relacionados con el uso pertinente de la información obtenida a 
					través de dicha Aplicación.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">10.5</p>
					<p className="font-light">Por los motivos mencionados, y en la máxima medida permitida por la legislación aplicable, 
					ni el Propietario ni Abbott serán responsables de las consecuencias, daños o acciones que puedan derivarse del uso 
					indebido del diagnóstico y de las recomendaciones obtenidas, y por el presente se descargan de toda responsabilidad 
					por cualquier pérdida o daño que pueda sufrir una persona, ya sea directa o indirectamente, o de forma inmediata o 
					emergente, y tanto si es de origen contractual, extracontractual (como la negligencia) o se desprende de otro modo de, 
					o guarda relación con, el uso de la Aplicación o de cualquier decisión de tratamiento o atención que tome el usuario, 
					excepto en caso de fallecimiento o lesiones personales resultantes de la negligencia de Abbott.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">10.6</p>
					<p className="font-light">Abbott no es responsable y no proporciona ningún tipo de garantía de la precisión, eficacia, 
					puntualidad y conveniencia de informaciones o contenidos que se obtengan de terceros, incluidos hipervínculos a y desde 
					sitios web de terceros</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>11. Su uso</h3>
				<div className="space-y-1">
					<p className="font-light">11.1 Al utilizar la Aplicación, usted acepta:</p>
					<p className="font-light">(a) no perturbar, modificar ni interceptar información publicada en la Aplicación;</p>
					<p className="font-light">(b) no intentar evitar ningún elemento de seguridad del sitio web de la Aplicación; y</p>
					<p className="font-light">(c) cumplir todas las leyes, normas, códigos y regulaciones aplicables, nacionales e internacionales.</p>
				</div>

				<p className="font-light">11.2 Usted no debe:</p>
				<div className="space-y-1">
					<p className="font-light">(a) utilizar la Aplicación de forma ilícita, con fines ilícitos, de manera incoherente con 
					estos términos, actuar de forma fraudulenta o maliciosa, por ejemplo, mediante el hackeo o la inserción de código malicioso, 
					como virus o datos dañinos, en la Aplicación o en cualquier sistema operativo;</p>
					<p className="font-light">(b) infringir nuestros derechos de propiedad intelectual ni los de terceros en relación con su 
					uso de la Aplicación (en la medida en que dicho uso no esté autorizado por estos términos);</p>
					<p className="font-light">(c) transmitir materiales difamatorios, ofensivos u objetables en relación con su uso de la Aplicación; y</p>
					<p className="font-light">(d) utilizar la Aplicación de modo que pueda dañar, deshabilitar, sobrecargar, perjudicar o poner en 
					riesgo nuestros sistemas o nuestra seguridad, o interferir con otros usuarios.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>12. Disponibilidad</h3>

				<div className="flex gap-x-3">
					<p className="font-light">12.1</p>
					<p className="font-light">Abbott hará todos los esfuerzos razonables por lograr que la Aplicación esté disponible 24 horas 
					al día, los 7 días de la semana. Sin embargo, eso es algo que Abbott no puede garantizar y no se responsabiliza de pérdidas 
					o daños que se produzcan como consecuencia de la interrupción del acceso a la Aplicación. Abbott puede interrumpir la 
					Aplicación por razones de mantenimiento y procurará proporcionar un aviso con la antelación razonable de cualquier 
					evento planificado.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>13. Propiedad intelectual</h3>

				<div className="flex gap-x-3">
					<p className="font-light">13.1</p>
					<p className="font-light">La información, el contenido y los gráficos publicados en la Aplicación (la ‘Información’) son 
					propiedad o están otorgados bajo licencia a Abbott. Se concede permiso para utilizar la información, siempre que: (i) el 
					reconocimiento de los derechos de copyright anteriores aparezca en todas las copias; (ii) el uso de la información tenga 
					usos informativos, sanitarios no comerciales o personales exclusivamente; (iii) la información no sea modificada en modo 
					alguno; y (iv) ningún gráfico de la Información o de cualquier marca comercial, nombre comercial o imagen comercial de 
					Abbott, se requiere la autorización previa por escrito de Abbott. Usted reconoce que se le prohíbe absoluta y terminantemente 
					reproducir la Aplicación en cualesquiera formas. Excepto según lo autorizado más arriba, no se conceden licencias o derechos, 
					expresos o implícitos, a ninguna persona bajo ninguna patente, marca comercial u otro tipo de derecho de propiedad de Abbott.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>14. Privacidad y seguridad</h3>

				<div className="flex gap-x-3">
					<p className="font-light">14.1</p>
					<p className="font-light">Abbott ha asumido el compromiso de proteger su privacidad. Abbott no recopila información de 
					ninguna persona cuando se almacena la Aplicación. Abbott dispone de la información relativa al uso de la Aplicación de 
					forma anonimizada.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">14.2</p>
					<p className="font-light">Es su responsabilidad asegurarse de que el dispositivo utilizado para acceder a la Aplicación 
					cuenta con la protección adecuada frente a software malicioso o frente al acceso de personas no autorizadas. Hasta donde 
					lo permita la legislación aplicable, Abbott no será responsable de daños directos, indirectos, especiales, incidentales o 
					consecuentes (incluidos lucros cesantes, con independencia de que surjan de forma directa o indirecta) sufridos por 
					cualquier persona como resultado de la intercepción o el acceso no autorizado a sus datos personales, incluso si se 
					hubiera advertido previamente a Abbott de la posibilidad de tales daños.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>15. Limitación de la responsabilidad</h3>

				<div className="flex gap-x-3">
					<p className="font-light">15.1</p>
					<p className="font-light">Abbott no asume responsabilidad alguna por los materiales, información, y opiniones facilitados o 
					publicados en esta Aplicación o puestos a disposición de otro modo a través de la misma. El usuario deposita su confianza 
					en estos materiales, información y opiniones exclusivamente bajo su propio riesgo. Abbott renuncia a cualquier responsabilidad 
					por lesiones o daños resultantes del uso de la Aplicación o del contenido incluido en la misma, en la máxima medida permitida 
					por la legislación aplicable.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">15.2</p>
					<div>
						<p className="font-light">Esta Aplicación, el contenido del sitio web y los productos y servicios proporcionados en 
						la Aplicación o disponibles a través de ella se facilitan ‘tal cual’ y ‘según estén disponibles’, con todos los fallos 
						que puedan tener. En ningún caso Abbott, ni sus subsidiarias, filiales, proveedores o sus respectivos directivos, 
						licenciantes, empleados o agentes (‘<span className="font-medium">Partes de Abbott</span>’) serán responsables por 
						daños de tipo alguno en virtud de ningún fundamento jurídico que surja de, o esté relacionado con, su uso, o la 
						imposibilidad de uso, de la Aplicación, del contenido de la Aplicación, de cualquier servicio prestado en o a través 
						de esta Aplicación o cualquier otro sitio web vinculado, incluidos daños especiales, indirectos, punitivos, accesorios, 
						ejemplares o emergentes. Excepto en caso de fallecimiento o lesión personal que se deba a su negligencia, Abbott y las 
						Partes de Abbott se descargan por el presente, en la máxima medida permitida por la legislación aplicable, de toda 
						disponible en la Aplicación se utilice separado del texto que lo acompaña. Para todos los demás usos responsabilidad 
						por cualquier pérdida o daño que pudiere sufrir una persona, ya sea directa o indirectamente, o de forma inmediata o 
						emergente, y tanto si es de origen contractual, extracontractual (como la negligencia) o se desprende de otro modo de, 
						o guarda relación con: (i) el uso o imposibilidad de uso de la Aplicación, (ii) el uso de información o contenido de 
						la Aplicación; (iii) cualesquiera servicios proporcionados en o a través de la Aplicación; y (iv) la intercepción de, 
						o el acceso no autorizado a, información personal que se envíe a la Aplicación, incluidas, a modo de ejemplo, las 
						siguientes categorías de pérdidas o daños, con independencia de que Abbott haya sido o no advertida de la posibilidad 
						de dicha pérdida o daño:</p>
						<div className="space-y-1 mt-2">
							<p className="font-light">(a) pérdida o corrupción de datos;</p>
							<p className="font-light">(b) lucro cesante;</p>
							<p className="font-light">(c) pérdida de ahorros previstos;</p>
							<p className="font-light">(d) pérdida de oportunidades de negocio;</p>
							<p className="font-light">(e) pérdida de fondo de comercio;</p>
							<p className="font-light">(f) pérdida de reputación; y/o</p>
							<p className="font-light">(g) daños especiales.</p>
						</div>
					</div>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>16. Finalizaciónd el acceso a la Aplicación</h3>

				<div className="flex gap-x-3">
					<p className="font-light">16.1</p>
					<p className="font-light">Abbott puede cancelar sus derechos de uso de la Aplicaciónen cualquier momento poniéndose en contacto 
					con usted si usted ha vulnerado estos términos de una forma grave. Si lo que ha hecho puede corregirse, Abbott le concederá 
					una oportunidad razonable para ello.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">16.2</p>
					<div className="space-y-1">
						<p className="font-light">Si Abbott pone fin a sus derechos de uso de la Aplicación:</p>
						<p className="font-light">(a) Usted debe cesar todas las actividades autorizadas por estos términos, como el uso de la Aplicación.</p>
						<p className="font-light">(b) Debe eliminar o retirar la Aplicación de todos los dispositivos en su posesión y destruir 
						inmediatamente todas las copias de la Aplicación que tenga y confirmar a Abbott que ha procedido de tal manera.</p>
					</div>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>17. Legislación aplicable</h3>

				<div className="flex gap-x-3">
					<p className="font-light">17.1</p>
					<p className="font-light">Si se encuentra en el Reino Unido, estas Condiciones se regirán e interpretarán de conformidad con las 
					leyes de Inglaterra y las disputas derivadas de estas Condiciones se someterán a la jurisdicción exclusiva de los tribunales de Inglaterra.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">17.2</p>
					<p className="font-light">Si se encuentra en Italia, estos Términos y condiciones se regirán e interpretarán de 
					conformidad con las leyes de Italia y las disputas derivadas de estas Condiciones se someterán a la jurisdicción 
					exclusiva de los tribunales de Italia.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">17.3</p>
					<p className="font-medium">Si se encuentra en España, estas Condiciones se regirán e interpretarán de conformidad 
					con las leyes de España y cualquier disputa que surja respecto a estas Condiciones se someterá a la jurisdicción 
					exclusiva de los tribunales de Madrid, España.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">17.4</p>
					<p className="font-light">Si se encuentra en Turquía, estas Condiciones se regirán e interpretarán de conformidad 
					con las leyes de la República de Turquía y las disputas que surjan respecto a estas Condiciones se someterán a la 
					jurisdicción exclusiva de los tribunales de Estambul Anatolia.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">17.5</p>
					<p className="font-light">Si se encuentra en Croacia, estos Términos y condiciones se regirán e interpretarán de 
					conformidad con las leyes de Croacia y las disputas que surjan respecto a la presente Política de términos y 
					condiciones se someterán a la jurisdicción exclusiva de los tribunales de Croacia.</p>
				</div>
			</section>


			<section className="space-y-2">
				<h3 className={section_title}>18. General</h3>

				<div className="flex gap-x-3">
					<p className="font-light">18.1</p>
					<p className="font-light">Usted acepta que estas Condiciones plasman la integralidad del acuerdo entre usted 
					y Abbott con respecto a esta Aplicación.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">18.2</p>
					<p className="font-light">Abbott se reserva el derecho a actualizar, modificar o variar estas Términos y 
					condiciones ocasionalmente.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">18.3</p>
					<p className="font-light">Abbott podrá transferir sus derechos y obligaciones en virtud de estos Condiciones 
					a otra organización.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">18.4</p>
					<p className="font-light">Usted solo podrá transferir sus derechos o sus obligaciones en virtud de estas 
					Condiciones a otra persona si Abbott lo acepta por escrito.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">18.5</p>
					<p className="font-light">Este contrato se celebra entre usted y Abbott. Ninguna otra persona tendrá derecho 
					a hacer valer ninguno de sus términos.</p>
				</div>

				<div className="flex gap-x-3">
					<p className="font-light">18.6</p>
					<p className="font-light">Cada uno de los párrafos de estos términos opera por separado. Si algún tribunal o 
					autoridad competente decide que alguno de ellos es ilegal, los párrafos restantes permanecerán en pleno vigor 
					y efecto.</p>
				</div>
			</section>
		</div>


		<div id="mainFooter" className="text-xxs text-center pb-8 pt-10 select-none lg:text-sm">{ process.env.FOOTER_CODE }</div>


		<div className="h-10"></div>
		<div className="bg-brand-aqua inset-x-0 bottom-0 fixed p-4 flex justify-center z-30">
			<Link href="/" className="bg-brand-dark text-white text-lg font-bold text-center px-20 py-1.5 select-none tranisition-all hover:opacity-90">OK</Link>
		</div>
	</Layout>)
}