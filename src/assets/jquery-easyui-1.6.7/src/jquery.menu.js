/**
 * EasyUI for jQuery 1.6.7
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
/**
 * em_menu - EasyUI for jQuery
 * 
 */
(function($){
	$(function(){
		$(document).unbind('.menu').bind('mousedown.menu', function(e){
			var m = $(e.target).closest('div.em_menu,div.combo-p');
			if (m.length){return}
			$('body>div.em_menu-top:visible').not('.em_menu-inline').menu('hide');
			hideMenu($('body>div.em_menu:visible').not('.em_menu-inline'));
		});
	});
	
	/**
	 * initialize the target em_menu, the function can be invoked only once
	 */
	function init(target){
		var opts = $.data(target, 'menu').options;
		$(target).addClass('em_menu-top');	// the top em_menu
		opts.inline ? $(target).addClass('menu-inline') : $(target).appendTo('body');
		$(target).bind('_resize', function(e, force){
			if ($(this).hasClass('easyui-fluid') || force){
				$(target).menu('resize', target);
			}
			return false;
		});
		
		var menus = splitMenu($(target));
		for(var i=0; i<menus.length; i++){
			createMenu(target, menus[i]);
		}
		
		function splitMenu(menu){
			var menus = [];
			menu.addClass('menu');
			menus.push(menu);
			if (!menu.hasClass('em_menu-content')){
				menu.children('div').each(function(){
					var submenu = $(this).children('div');
					if (submenu.length){
						submenu.appendTo('body');
						this.submenu = submenu;		// point to the sub em_menu
						var mm = splitMenu(submenu);
						menus = menus.concat(mm);
					}
				});
			}
			return menus;
		}
	}

	function createMenu(target, div){
		var menu = $(div).addClass('menu');
		if (!menu.data('menu')){
			menu.data('menu', {
				options: $.parser.parseOptions(menu[0], ['width','height'])
			});
		}
		if (!menu.hasClass('em_menu-content')){
			menu.children('div').each(function(){
				createItem(target, this);
			});
			$('<div class="em_menu-line"></div>').prependTo(menu);
		}
		setMenuSize(target, menu);
		if (!menu.hasClass('em_menu-inline')){
			menu.hide();
		}
		bindMenuEvent(target, menu);
	}

	/**
	 * create the em_menu item
	 */
	function createItem(target, div, options){
		var item = $(div);
		var itemOpts = $.extend({}, $.parser.parseOptions(item[0], ['id','name','iconCls','href',{separator:'boolean'}]), {
			disabled: (item.attr('disabled') ? true : undefined),
			text: $.trim(item.html()),
			onclick: item[0].onclick
		}, options||{});
		itemOpts.onclick = itemOpts.onclick || itemOpts.handler || null;
		item.data('menuitem', {
			options: itemOpts
		});
		if (itemOpts.separator){
			item.addClass('em_menu-sep');
		}
		if (!item.hasClass('em_menu-sep')){
			item.addClass('em_menu-item');
			item.empty().append($('<div class="em_menu-text"></div>').html(itemOpts.text));
			if (itemOpts.iconCls){
				$('<div class="em_menu-icon"></div>').addClass(itemOpts.iconCls).appendTo(item);
			}
			if (itemOpts.id){
				item.attr('id', itemOpts.id);
			}
			if (itemOpts.onclick){
				if (typeof itemOpts.onclick == 'string'){
					item.attr('onclick', itemOpts.onclick);
				} else {
					item[0].onclick = eval(itemOpts.onclick);
				}
			}
			if (itemOpts.disabled){
				setDisabled(target, item[0], true);
			}
			if (item[0].submenu){
				$('<div class="em_menu-rightarrow"></div>').appendTo(item);	// has sub em_menu
			}
		}
	}
	
	function setMenuSize(target, menu){
		var opts = $.data(target, 'menu').options;
		var style = menu.attr('style') || '';
		var isVisible = menu.is(':visible');
		menu.css({
			display: 'block',
			left: -10000,
			height: 'auto',
			overflow: 'hidden'
		});
		menu.find('.em_menu-item').each(function(){
			$(this)._outerHeight(opts.itemHeight);
			$(this).find('.em_menu-text').css({
				height: (opts.itemHeight-2)+'px',
				lineHeight: (opts.itemHeight-2)+'px'
			});
		});
		menu.removeClass('em_menu-noline').addClass(opts.noline?'em_menu-noline':'');
		
		var mopts = menu.data('menu').options;
		var width = mopts.width;
		var height = mopts.height;
		if (isNaN(parseInt(width))){
			width = 0;
			menu.find('div.em_menu-text').each(function(){
				if (width < $(this).outerWidth()){
					width = $(this).outerWidth();
				}
			});
			// width += 40;
			width = width ? width+40 : '';
		}
		var autoHeight = menu.outerHeight();
		if (isNaN(parseInt(height))){
			height = autoHeight;
			if (menu.hasClass('em_menu-top') && opts.alignTo){
				var at = $(opts.alignTo);
				var h1 = at.offset().top - $(document).scrollTop();
				var h2 = $(window)._outerHeight() + $(document).scrollTop() - at.offset().top - at._outerHeight();
				height = Math.min(height, Math.max(h1, h2));
			} else if (height > $(window)._outerHeight()){
				height = $(window).height();
			}
		}

		menu.attr('style', style);	// restore the original style
		menu.show();
		menu._size($.extend({}, mopts, {
			width: width,
			height: height,
			minWidth: mopts.minWidth || opts.minWidth,
			maxWidth: mopts.maxWidth || opts.maxWidth
		}));
		menu.find('.easyui-fluid').triggerHandler('_resize', [true]);
		menu.css('overflow', menu.outerHeight() < autoHeight ? 'auto' : 'hidden');
		menu.children('div.em_menu-line')._outerHeight(autoHeight-2);
		if (!isVisible){
			menu.hide();
		}
	}
	
	/**
	 * bind em_menu event
	 */
	function bindMenuEvent(target, menu){
		var state = $.data(target, 'menu');
		var opts = state.options;
		menu.unbind('.menu');
		for(var event in opts.events){
			menu.bind(event+'.menu', {target:target}, opts.events[event]);
		}
	}
	function mouseenterHandler(e){
		var target = e.data.target;
		var state = $.data(target, 'menu');
		if (state.timer){
			clearTimeout(state.timer);
			state.timer = null;
		}
	}
	function mouseleaveHandler(e){
		var target = e.data.target;
		var state = $.data(target, 'menu');
		if (state.options.hideOnUnhover){
			state.timer = setTimeout(function(){
				hideAll(target, $(target).hasClass('menu-inline'));
			}, state.options.duration);
		}
	}
	function mouseoverHandler(e){
		var target = e.data.target;
		var item = $(e.target).closest('.em_menu-item');
		if (item.length){
			item.siblings().each(function(){
				if (this.submenu){
					hideMenu(this.submenu);
				}
				$(this).removeClass('menu-active');
			});
			// show this em_menu
			item.addClass('em_menu-active');
			
			if (item.hasClass('em_menu-item-disabled')){
				item.addClass('em_menu-active-disabled');
				return;
			}
			
			var submenu = item[0].submenu;
			if (submenu){
				$(target).menu('show', {
					menu: submenu,
					parent: item
				});
			}
		}
	}
	function mouseoutHandler(e){
		var item = $(e.target).closest('.em_menu-item');
		if (item.length){
			item.removeClass('em_menu-active em_menu-active-disabled');
			var submenu = item[0].submenu;
			if (submenu){
				if (e.pageX>=parseInt(submenu.css('left'))){
					item.addClass('em_menu-active');
				} else {
					hideMenu(submenu);
				}
			} else {
				item.removeClass('em_menu-active');
			}
		}
	}
	function clickHandler(e){
		var target = e.data.target;
		var item = $(e.target).closest('.em_menu-item');
		if (item.length){
			var opts = $(target).data('menu').options;
			var itemOpts = item.data('menuitem').options;
			if (itemOpts.disabled){return;}
			if (!item[0].submenu){
				hideAll(target, opts.inline);
				if (itemOpts.href){
					location.href = itemOpts.href;
				}
			}
			item.trigger('mouseenter');
			opts.onClick.call(target, $(target).menu('getItem', item[0]));
		}
	}
	
	/**
	 * hide top em_menu and it's all sub menus
	 */
	function hideAll(target, inline){
		var state = $.data(target, 'menu');
		if (state){
			if ($(target).is(':visible')){
				hideMenu($(target));
				if (inline){
					$(target).show();
				} else {
					state.options.onHide.call(target);
				}
			}
		}
		return false;
	}
	
	/**
	 * show the em_menu, the 'param' object has one or more properties:
	 * left: the left position to display
	 * top: the top position to display
	 * em_menu: the em_menu to display, if not defined, the 'target em_menu' is used
	 * parent: the parent em_menu item to align to
	 * alignTo: the element object to align to
	 */
	function showMenu(target, param){
		param = param || {};
		var left,top;
		var opts = $.data(target, 'menu').options;
		var menu = $(param.menu || target);
		$(target).menu('resize', menu[0]);
		if (menu.hasClass('em_menu-top')){
			$.extend(opts, param);
			left = opts.left;
			top = opts.top;
			if (opts.alignTo){
				var at = $(opts.alignTo);
				left = at.offset().left;
				top = at.offset().top + at._outerHeight();
				if (opts.align == 'right'){
					left += at.outerWidth() - menu.outerWidth();
				}
			}
			if (left + menu.outerWidth() > $(window)._outerWidth() + $(document)._scrollLeft()){
				left = $(window)._outerWidth() + $(document).scrollLeft() - menu.outerWidth() - 5;
			}
			if (left < 0){left = 0;}
			top = _fixTop(top, opts.alignTo);
		} else {
			var parent = param.parent;	// the parent em_menu item
			left = parent.offset().left + parent.outerWidth() - 2;
			if (left + menu.outerWidth() + 5 > $(window)._outerWidth() + $(document).scrollLeft()){
				left = parent.offset().left - menu.outerWidth() + 2;
			}
			top = _fixTop(parent.offset().top - 3);
		}
		
		function _fixTop(top, alignTo){
			if (top + menu.outerHeight() > $(window)._outerHeight() + $(document).scrollTop()){
				if (alignTo){
					top = $(alignTo).offset().top - menu._outerHeight();
				} else {
					top = $(window)._outerHeight() + $(document).scrollTop() - menu.outerHeight();
				}
			}
			if (top < 0){top = 0;}
			return top;
		}
		
		menu.css(opts.position.call(target, menu[0], left, top));
		menu.show(0, function(){
			if (!menu[0].shadow){
				menu[0].shadow = $('<div class="em_menu-shadow"></div>').insertAfter(menu);
			}
			menu[0].shadow.css({
				display:(menu.hasClass('em_menu-inline')?'none':'block'),
				zIndex:$.fn.menu.defaults.zIndex++,
				left:menu.css('left'),
				top:menu.css('top'),
				width:menu.outerWidth(),
				height:menu.outerHeight()
			});
			menu.css('z-index', $.fn.menu.defaults.zIndex++);
			if (menu.hasClass('em_menu-top')){
				opts.onShow.call(target);
			}
		});
	}
	
	function hideMenu(menu){
		if (menu && menu.length){
			hideit(menu);
			menu.find('div.em_menu-item').each(function(){
				if (this.submenu){
					hideMenu(this.submenu);
				}
				$(this).removeClass('menu-active');
			});
		}
		
		function hideit(m){
			m.stop(true,true);
			if (m[0].shadow){
				m[0].shadow.hide();
			}
			m.hide();
		}
	}
	
	function findItem(target, param){
		var result = null;
		var fn = $.isFunction(param) ? param : function(item){
			for(var p in param){
				if (item[p] != param[p]){
					return false;;
				}
			}
			return true;
		}
		function find(menu){
			menu.children('div.em_menu-item').each(function(){
				var opts = $(this).data('menuitem').options;
				if (fn.call(target, opts) == true){
					result = $(target).menu('getItem', this);
				} else if (this.submenu && !result){
					find(this.submenu);
				}
			});
		}
		find($(target));
		return result;
	}
	
	function setDisabled(target, itemEl, disabled){
		var t = $(itemEl);
		if (t.hasClass('em_menu-item')){
			var opts = t.data('menuitem').options;
			opts.disabled = disabled;
			if (disabled){
				t.addClass('em_menu-item-disabled');
				t[0].onclick = null;
			} else {
				t.removeClass('em_menu-item-disabled');
				t[0].onclick = opts.onclick;
			}
		}
	}
	
	function appendItem(target, param){
		var opts = $.data(target, 'menu').options;
		var menu = $(target);
		if (param.parent){
			if (!param.parent.submenu){
				var submenu = $('<div></div>').appendTo('body');
				param.parent.submenu = submenu;
				$('<div class="em_menu-rightarrow"></div>').appendTo(param.parent);
				createMenu(target, submenu);
			}
			menu = param.parent.submenu;
		}
		var div = $('<div></div>').appendTo(menu);
		createItem(target, div, param);
	}
	
	function removeItem(target, itemEl){
		function removeit(el){
			if (el.submenu){
				el.submenu.children('div.em_menu-item').each(function(){
					removeit(this);
				});
				var shadow = el.submenu[0].shadow;
				if (shadow) shadow.remove();
				el.submenu.remove();
			}
			$(el).remove();
		}
		removeit(itemEl);
	}
	
	function setVisible(target, itemEl, visible){
		var menu = $(itemEl).parent();
		if (visible){
			$(itemEl).show();
		} else {
			$(itemEl).hide();
		}
		setMenuSize(target, menu);
	}
	
	function destroyMenu(target){
		$(target).children('div.em_menu-item').each(function(){
			removeItem(target, this);
		});
		if (target.shadow) target.shadow.remove();
		$(target).remove();
	}
	
	$.fn.menu = function(options, param){
		if (typeof options == 'string'){
			return $.fn.menu.methods[options](this, param);
		}
		
		options = options || {};
		return this.each(function(){
			var state = $.data(this, 'menu');
			if (state){
				$.extend(state.options, options);
			} else {
				state = $.data(this, 'menu', {
					options: $.extend({}, $.fn.menu.defaults, $.fn.menu.parseOptions(this), options)
				});
				init(this);
			}
			$(this).css({
				left: state.options.left,
				top: state.options.top
			});
		});
	};
	
	$.fn.menu.methods = {
		options: function(jq){
			return $.data(jq[0], 'menu').options;
		},
		show: function(jq, pos){
			return jq.each(function(){
				showMenu(this, pos);
			});
		},
		hide: function(jq){
			return jq.each(function(){
				hideAll(this);
			});
		},
		destroy: function(jq){
			return jq.each(function(){
				destroyMenu(this);
			});
		},
		/**
		 * set the em_menu item text
		 * param: {
		 * 	target: DOM object, indicate the em_menu item
		 * 	text: string, the new text
		 * }
		 */
		setText: function(jq, param){
			return jq.each(function(){
				var item = $(param.target).data('menuitem').options;
				item.text = param.text;
				$(param.target).children('div.em_menu-text').html(param.text);
			});
		},
		/**
		 * set the em_menu icon class
		 * param: {
		 * 	target: DOM object, indicate the em_menu item
		 * 	iconCls: the em_menu item icon class
		 * }
		 */
		setIcon: function(jq, param){
			return jq.each(function(){
				var item = $(param.target).data('menuitem').options;
				item.iconCls = param.iconCls;
				$(param.target).children('div.em_menu-icon').remove();
				if (param.iconCls){
					$('<div class="em_menu-icon"></div>').addClass(param.iconCls).appendTo(param.target);
				}
			});
		},
		/**
		 * get the em_menu item data that contains the following property:
		 * {
		 * 	target: DOM object, the em_menu item
		 *  id: the em_menu id
		 * 	text: the em_menu item text
		 * 	iconCls: the icon class
		 *  href: a remote address to redirect to
		 *  onclick: a function to be called when the item is clicked
		 * }
		 */
		getItem: function(jq, itemEl){
			var item = $(itemEl).data('menuitem').options;
			return $.extend({}, item, {
				target: $(itemEl)[0]
			});
		},
		findItem: function(jq, text){
			if (typeof text == 'string'){
				return findItem(jq[0], function(item){
					return $('<div>'+item.text+'</div>').text() == text;
				});
			} else {
				return findItem(jq[0], text);
			}
		},
		/**
		 * append em_menu item, the param contains following properties:
		 * parent,id,text,iconCls,href,onclick
		 * when parent property is assigned, append em_menu item to it
		 */
		appendItem: function(jq, param){
			return jq.each(function(){
				appendItem(this, param);
			});
		},
		removeItem: function(jq, itemEl){
			return jq.each(function(){
				removeItem(this, itemEl);
			});
		},
		enableItem: function(jq, itemEl){
			return jq.each(function(){
				setDisabled(this, itemEl, false);
			});
		},
		disableItem: function(jq, itemEl){
			return jq.each(function(){
				setDisabled(this, itemEl, true);
			});
		},
		showItem: function(jq, itemEl){
			return jq.each(function(){
				setVisible(this, itemEl, true);
			});
		},
		hideItem: function(jq, itemEl){
			return jq.each(function(){
				setVisible(this, itemEl, false);
			});
		},
		resize: function(jq, menuEl){
			return jq.each(function(){
				setMenuSize(this, menuEl ? $(menuEl) : $(this));
			});
		}
	};
	
	$.fn.menu.parseOptions = function(target){
		return $.extend({}, $.parser.parseOptions(target, [
		     {minWidth:'number',itemHeight:'number',duration:'number',hideOnUnhover:'boolean'},
		     {fit:'boolean',inline:'boolean',noline:'boolean'}
		]));
	};
	
	$.fn.menu.defaults = {
		zIndex:110000,
		left: 0,
		top: 0,
		alignTo: null,
		align: 'left',
		minWidth: 150,
		// itemHeight: 22,
		itemHeight: 32,
		duration: 100,	// Defines duration time in milliseconds to hide when the mouse leaves the em_menu.
		hideOnUnhover: true,	// Automatically hides the em_menu when mouse exits it
		inline: false,	// true to stay inside its parent, false to go on top of all elements
		fit: false,
		noline: false,
		events: {
			mouseenter: mouseenterHandler,
			mouseleave: mouseleaveHandler,
			mouseover: mouseoverHandler,
			mouseout: mouseoutHandler,
			click: clickHandler
		},
		position: function(target, left, top){
			return {left:left,top:top}
		},
		onShow: function(){},
		onHide: function(){},
		onClick: function(item){}
	};
})(jQuery);
