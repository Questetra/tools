!function(a){a.fn.q_guide_panale_maker=function(b){function c(a,b,c){for(var d,e,f;a<0;)a+=360;if(a%=360,0==b)return c=Math.round(c),{r:c,g:c,b:c};b/=255;var g=Math.floor(a/60)%6,h=a/60-g,i=c*(1-b),j=c*(1-h*b),k=c*(1-(1-h)*b);switch(g){case 0:d=c,e=k,f=i;break;case 1:d=j,e=c,f=i;break;case 2:d=i,e=c,f=k;break;case 3:d=i,e=j,f=c;break;case 4:d=k,e=i,f=c;break;case 5:d=c,e=i,f=j}return{r:Math.round(d),g:Math.round(e),b:Math.round(f)}}function d(a){var b,c={"&":"&amp;","'":"&#x27;","`":"&#x60;",'"':"&quot;","<":"&lt;",">":"&gt;"},d="[";for(var e in c)c.hasOwnProperty(e)&&(d+=e);return d+="]",b=new RegExp(d,"g"),a=null===a||void 0===a?"":""+a,a.replace(b,function(a){return c[a]})}function e(){for(var a=[],b=0,d=0;d<=255;d+=255/h.v){for(var e=[],f=360;f>=0;f-=360/h.h)for(var g=0;g<=255;g+=255/h.s){var j=c(f,g,d),k=("00"+j.r.toString(16)).slice(-2),l=("00"+j.g.toString(16)).slice(-2),m=("00"+j.b.toString(16)).slice(-2),n="#"+k+l+m;a.indexOf(n)==-1&&(a.push(n),e.push(n))}i.push(e),b<e.length&&(b=e.length),e=[]}}function f(b){for(var c=a('<div id="'+b+'"class="qgpm-color-picker"/>'),d=0;d<i.length;d++){for(var e=i[d],f=100/e.length,g=a('<div class="qgpm-color-picker-row"/>'),h=0;h<e.length;h++)g.append('<div class="qgpm-color-option" style="width:'+f+"%;background-color:"+e[h]+';float:left;" data-color="'+e[h]+'"></div>');c.append(g)}return c}var g=a(this),h=a.extend({h:10,s:3,v:4,section_setting:"設定",title_label:"タイトル",title:"神ってる",size_label:"タイトル文字サイズ",color_label:"タイトル文字色",bg_label:"タイトルの背景色",padding_label:"パディング",padding_help:"タイトルバーとタイトル文字の間のスペースです",margin_label:"マージン",margin_help:"タイトルバーの下に設ける余白です",disc_label:"注釈",disc:"「神懸かってる」と言うところを緒方孝市監督は、いまどきの言葉を使って「神ってる」と口にした。",title_help:"必要ない場合には空にしてください",disc_help:"必要ない場合には空にしてください。改行も使用できます。",section_preview:"プレビュー",section_code:"コード",code_help:"下記のコードをコピーしてご利用下さい"},b),i=[];e(),g.addClass("qgpm");var j=a('<div class="qgpm-input-group" />');j.append('<label class="qgpm-label" for="qgpm-input-title">'+h.title_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append('<input type="text" id="qgpm-input-title" class="qgpm-input" value="'+h.title+'"/>'),k.append('<div class="qgpm-input-help">'+h.title_help+"</div>"),j.append(k);var l=a('<div class="qgpm-input-group" />');l.append('<label class="qgpm-label" for="qgpm-input-size">'+h.size_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append('<input type="number" id="qgpm-input-size" class="qgpm-input" value="13"/>'),l.append(k);var m=a('<div class="qgpm-input-group" />');m.append('<label class="qgpm-label">'+h.color_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append(f("title-color-picker")),m.append(k);var n=a('<div class="qgpm-input-group" />');n.append('<label class="qgpm-label">'+h.bg_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append(f("title-bg-color-picker")),n.append(k);var o=a('<div class="qgpm-input-group" />');o.append('<label class="qgpm-label" for="qgpm-input-padding">'+h.padding_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append('<input type="number" id="qgpm-input-padding" class="qgpm-input" value="3"/>'),k.append('<div class="qgpm-input-help">'+h.padding_help+"</div>"),o.append(k);var p=a('<div class="qgpm-input-group" />');p.append('<label class="qgpm-label" for="qgpm-input-margin">'+h.margin_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append('<input type="number" id="qgpm-input-margin" class="qgpm-input" value="3"/>'),k.append('<div class="qgpm-input-help">'+h.margin_help+"</div>"),p.append(k);var q=a('<div class="qgpm-input-group" />');q.append('<label class="qgpm-label" for="qgpm-input-title">'+h.disc_label+"</label>");var k=a('<div class="qgpm-inputs"/>');k.append('<textarea id="qgpm-input-disc" class="qgpm-input">'+h.disc+"</textarea>"),k.append('<div class="qgpm-input-help">'+h.disc_help+"</div>"),q.append(k);var r=a('<div class="qgpm-section qgpm-setting-form"/>');r.append('<h3 class="qgpm-section-title">'+h.section_setting+"</h3>"),r.append(j),r.append(l),r.append(m),r.append(n),r.append(o),r.append(p);var s=a('<div class="qgpm-section qgpm-preview-wrapper"/>');s.append('<h3 class="qgpm-section-title">'+h.section_preview+"</h3>"),s.append('<div id="qgpm-prebiew" />');var t=a('<div class="qgpm-section qgpm-code-wrapper"/>');t.append('<h3 class="qgpm-section-title">'+h.section_code+"</h3>"),t.append('<div class="qgpm-input-help">'+h.code_help+"</div>"),t.append('<code id="qgpm-code" />'),g.append(r),g.append(q),g.append(s),g.append(t);var u="#198000";a("#title-bg-color-picker .qgpm-color-option[data-color='"+u+"']").addClass("selected"),a("#title-bg-color-picker .qgpm-color-option").click(function(b){var c=a(this).data("color");a("#title-bg-color-picker .qgpm-color-option").removeClass("selected"),a(this).addClass("selected"),console.log(c),u=c,w()});var v="#ffffff";a("#title-color-picker .qgpm-color-option[data-color='"+v+"']").addClass("selected"),a("#title-color-picker .qgpm-color-option").click(function(b){var c=a(this).data("color");a("#title-color-picker .qgpm-color-option").removeClass("selected"),a(this).addClass("selected"),console.log(c),v=c,w()}),a("#qgpm-input-title").keyup(function(){w()}),a("#qgpm-input-disc").keyup(function(){w()}),a("#qgpm-input-padding").change(function(){w()}),a("#qgpm-input-size").change(function(){w()}),a("#qgpm-input-margin").change(function(){w()});var w=function(){var b=a("#qgpm-input-title").val(),c=a("#qgpm-input-disc").val(),e=a("#qgpm-input-padding").val(),f=a("#qgpm-input-size").val(),g=a("#qgpm-input-margin").val(),h='<h4 style="font-size:'+f+"px;background-color:"+u+";color:"+v+";padding:"+e+"px;margin-bottom:"+g+'px;">'+b+"</h4>";if(a("#qgpm-prebiew").html(""),b.length>0&&a("#qgpm-prebiew").append(h),c.length>0){var i=c.replace(/[\n\r]/g,"<br />");a("#qgpm-prebiew").append(i)}var j=d(a("#qgpm-prebiew").html());a("#qgpm-code").html(j)};w()}}(jQuery);