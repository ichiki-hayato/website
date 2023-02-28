import globalSet from '~/assets/javascript/_j_globalSet/_j_globalSet.js';


function init(op) {
	globalSet();
	let _g;
	_g = window.GLOBAL;

	let C_INVIEW = {
		TARGET: null,
		DEFAULT: {
			className: '.js-inview',
			addClassName: 'is-inview',
			reverse: false, // 繰り返し
			range: 'block',
			ajust: 1.0,
			stop: false,
			afterChange: function(el){}
		},
		OPTION: null,
		ARRAY: {},
		init: function(op){
			let _c = this;
				_c.OPTION = Object.assign(_c.DEFAULT, op);
				_c.TARGET = document.querySelectorAll(_c.OPTION.className);
				

				if(_c.TARGET != null) {
					_c.inviewSetFunc(true);
					_g.resize(function(){
						_c.inviewSetFunc();
					});
					_g.scroll(function(){
						_c.inviewSetFunc();
					});
				}
		},
		inviewSetFunc: function(flag){
			//inviewSetを設定 宣言のみtrueで走る
			let _c = this;
				[].slice.call(_c.TARGET).forEach(function(event, index) {
					if(flag == true) {
						_c.ARRAY[index] = new inviewSet(event);
					}
					_c.ARRAY[index].set(_c.OPTION);
				});
		}
	}

	//inview
	class inviewSet {
		constructor(tg) {
			let _t = this;
				_t.tg = tg;
		}
		set(op) {
			
			let _t = this;
				_t.tgRect = _t.tg.getBoundingClientRect();
				_t.scrollTopPos = _g.WINDOW_TOP;
				_t.scrollBottomPos = _g.WINDOW_BOTTOM;
				_t.tgTop = _t.tgRect.top + _t.scrollTopPos;
				_t.tgBottom = _t.tgTop + _t.tg.clientHeight;
			
				if(op.reverse == true) {

					if(op.range == 'block') {
						if ( _t.tgTop < _t.scrollTopPos + (_g.GLOBAL_HEIGHT / 2) * op.ajust &&  _t.scrollTopPos <= _t.tgBottom ) {
							_t.tg.classList.add(op.addClassName);
						} else {
							_t.tg.classList.remove(op.addClassName);
						}
					}
					if(op.range == 'window') {
						if ( _t.scrollTopPos <= _t.tgTop && _t.tgBottom <= _t.scrollBottomPos) {
							_t.tg.classList.add(op.addClassName);
						} else {
							_t.tg.classList.remove(op.addClassName);
						}
					}
					
				} else {
					if(op.range == 'block') {
						if(_t.tgTop < _t.scrollTopPos +(_g.GLOBAL_HEIGHT / 2) * op.ajust ) {
							if(op.stop == false) {
								_t.tg.classList.add(op.addClassName);
								op.stop = false;
							}
						}
					}
					if(op.range == 'window') {
						if ( _t.tgTop >= _t.scrollTopPos && _t.tgBottom <= _t.scrollBottomPos) {
							if(op.stop == false) {
								_t.tg.classList.add(op.addClassName);
								op.stop = false;
							}
						}
					}
				}
				op.afterChange(_t)
		}
	}
	C_INVIEW.init(op);
}

export default function(op) {
	init(op);
}