var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.art').first()

function mostrarFormulario(){
	$form.slideToggle()
	return false;
}
function agregarPost (){
	var url = $url.val,
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_art')
		.text(titulo)
		.attr('href', url)

	$clone.hide()

	$list.prepend($clone)

	$clone.fadeIn()
	return false;
	//body....
}
	// eventos

$button.click( mostrarFormulario );
$form.on('submit', agregarPost);