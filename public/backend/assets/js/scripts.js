$(function(){$(".mobile_menu").click(function(e){e.preventDefault(),$(".dash_sidebar").animate({left:"0"},200).addClass("mobile_menu_open"),$("body").addClass("mobile_body"),$("html").on("click touchstart",".mobile_body",function(e){var a=$(".dash_sidebar");a.hasClass("mobile_menu_open")&&!$(e.target).hasClass("mobile_menu")&&($(e.target).hasClass("dash_sidebar")||$(e.target).parents().hasClass("dash_sidebar")||a.animate({left:"-260"},200).removeClass("mobile_menu_open"))})}),$(".search_open").click(function(e){e.preventDefault(),$(".dash_content_search").animate({right:"0"},200).addClass("search_open"),$("body").addClass("search"),$("html").on("click touchstart",".search",function(e){var a=$(".dash_content_search");a.hasClass("search_open")&&!$(e.target).hasClass("search_open")&&($(e.target).hasClass("dash_content_search")||$(e.target).parents().hasClass("dash_content_search")||a.animate({right:"-320px"},200).removeClass("search_open"))}),$("html").on("click",".search_close",function(e){e.preventDefault(),$(".dash_content_search").animate({right:"-320px"},200).removeClass("search_open")})}),$(".collapse").click(function(e){e.preventDefault();var a=$(this).closest(".app_collapse");$(a).find(".app_collapse_header > span").toggleClass("icon-plus-circle").toggleClass("icon-minus-circle"),$(a).find(".app_collapse_content").slideToggle(200,function(){$(this).hasClass("d-none")&&$(this).removeClass("d-none")})}),$(".nav_tabs_item_link").click(function(e){e.preventDefault();var a=$(this).attr("href"),t=$(this).closest(".nav");$(t).find(".nav_tabs_item .active").removeClass("active"),$(this).addClass("active"),$(t).find(".nav_tabs_content").children().hide(),$(t).find(a).show()});var e=3;$(".ajax_response .message").each(function(a,t){!function(e,a){var t=$(e);t.append("<div class='message_time'></div>"),t.find(".message_time").animate({width:"100%"},1e3*a,function(){$(this).parents(".message").fadeOut(200)}),$(".ajax_response").append(t)}(t,e+=1)}),$(".ajax_response").on("click",".message",function(e){$(this).effect("bounce").fadeOut(1)}),$(".select2").select2({language:"pt-BR"}),$("#dataTable").DataTable({responsive:!0,pageLength:25,language:{sEmptyTable:"Nenhum registro encontrado",sInfo:"Mostrando de _START_ até _END_ de _TOTAL_ registros",sInfoEmpty:"Mostrando 0 até 0 de 0 registros",sInfoFiltered:"(Filtrados de _MAX_ registros)",sInfoPostFix:"",sInfoThousands:".",sLengthMenu:"_MENU_ resultados por página",sLoadingRecords:"Carregando...",sProcessing:"Processando...",sZeroRecords:"Nenhum registro encontrado",sSearch:"Pesquisar",oPaginate:{sNext:"Próximo",sPrevious:"Anterior",sFirst:"Primeiro",sLast:"Último"},oAria:{sSortAscending:": Ordenar colunas de forma ascendente",sSortDescending:": Ordenar colunas de forma descendente"}}});var a=function(e){return 11===e.replace(/\D/g,"").length?"(00) 00000-0000":"(00) 0000-00009"},t={onKeyPress:function(e,t,s,n){s.mask(a.apply({},arguments),n)}};$(".mask-cell").mask(a,t),$(".mask-phone").mask("(00) 0000-0000"),$(".mask-date").mask("00/00/0000"),$(".mask-datetime").mask("00/00/0000 00:00"),$(".mask-month").mask("00/0000",{reverse:!0}),$(".mask-doc").mask("000.000.000-00",{reverse:!0}),$(".mask-cnpj").mask("00.000.000/0000-00",{reverse:!0}),$(".mask-zipcode").mask("00000-000",{reverse:!0}),$(".mask-money").mask("000,000,000,000,000.00",{reverse:!0,placeholder:"USD 0.00"}),$(".zip_code_search").blur(function(){function e(){$(".street").val(""),$(".neighborhood").val(""),$(".city").val(""),$(".state").val("")}var a=$(this).val().replace(/\D/g,"");""!=a&&/^[0-9]{8}$/.test(a)?($(".street").val(""),$(".neighborhood").val(""),$(".city").val(""),$(".state").val(""),$.getJSON("https://viacep.com.br/ws/"+a+"/json/?callback=?",function(a){"erro"in a?(e(),alert("CEP não encontrado.")):($(".street").val(a.logradouro),$(".neighborhood").val(a.bairro),$(".city").val(a.localidade),$(".state").val(a.uf))})):(e(),alert("Formato de CEP inválido."))})}),tinyMCE.init({selector:"textarea.mce",language:"pt_BR",menubar:!1,theme:"modern",height:132,skin:"light",entity_encoding:"raw",theme_advanced_resizing:!0,plugins:["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker","searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking","save table contextmenu directionality emoticons template paste textcolor media"],toolbar:"styleselect | pastetext | removeformat |  bold | italic | underline | strikethrough | bullist | numlist | alignleft | aligncenter | alignright |  link | unlink | code | fullscreen",style_formats:[{title:"Normal",block:"p"},{title:"Titulo 3",block:"h3"},{title:"Titulo 4",block:"h4"},{title:"Titulo 5",block:"h5"},{title:"Código",block:"pre",classes:"brush: php;"}],link_class_list:[{title:"Nenhum",value:""},{title:"Botão Verde",value:"btn btn-green"},{title:"Botão Azul",value:"btn btn-blue"},{title:"Botão Amarelo",value:"btn btn-yellow"},{title:"Botão Vermelho",value:"btn btn-red"}],setup:function(e){e.addButton("laradevimage",{title:"Enviar Imagem",icon:"image",onclick:function(){$(".mce_upload").fadeIn(200,function(e){$("body").click(function(e){"mce_upload"===$(e.target).attr("class")&&$(".mce_upload").fadeOut(200)})}).css("display","flex")}})},link_title:!1,target_list:!1,theme_advanced_blockformats:"h1,h2,h3,h4,h5,p,pre",media_dimensions:!1,media_poster:!1,media_alt_source:!1,media_embed:!1,extended_valid_elements:"a[href|target=_blank|rel|class]",imagemanager_insert_template:'<img src="{$url}" title="{$title}" alt="{$title}" />',image_dimensions:!1,relative_urls:!1,remove_script_host:!1,paste_as_text:!0});
