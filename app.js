! function(e) {
    var t = {};

    function i(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, o) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 5)
}([function(e, t) {
    e.exports = jQuery
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.transitionend = t.GetYoDigits = t.rtl = void 0;
    var o, n = i(0),
        s = (o = n) && o.__esModule ? o : {
            default: o
        };
    t.rtl = function() {
        return "rtl" === (0, s.default)("html").attr("dir")
    }, t.GetYoDigits = function(e, t) {
        return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
    }, t.transitionend = function(e) {
        var t, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            },
            o = document.createElement("div");
        for (var n in i) void 0 !== o.style[n] && (t = i[n]);
        return t || (t = setTimeout((function() {
            e.triggerHandler("transitionend", [e])
        }), 1), "transitionend")
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MediaQuery = void 0;
    var o, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = i(0),
        r = (o = s) && o.__esModule ? o : {
            default: o
        };
    var a = window.matchMedia || function() {
            var e = window.styleMedia || window.media;
            if (!e) {
                var t, i = document.createElement("style"),
                    o = document.getElementsByTagName("script")[0];
                i.type = "text/css", i.id = "matchmediajs-test", o && o.parentNode && o.parentNode.insertBefore(i, o), t = "getComputedStyle" in window && window.getComputedStyle(i, null) || i.currentStyle, e = {
                    matchMedium: function(e) {
                        var o = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return i.styleSheet ? i.styleSheet.cssText = o : i.textContent = o, "1px" === t.width
                    }
                }
            }
            return function(t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        }(),
        l = {
            queries: [],
            current: "",
            _init: function() {
                (0, r.default)("meta.foundation-mq").length || (0, r.default)('<meta class="foundation-mq">').appendTo(document.head);
                var e, t = (0, r.default)(".foundation-mq").css("font-family");
                for (var i in e = function(e) {
                        var t = {};
                        if ("string" != typeof e) return t;
                        if (!(e = e.trim().slice(1, -1))) return t;
                        return t = e.split("&").reduce((function(e, t) {
                            var i = t.replace(/\+/g, " ").split("="),
                                o = i[0],
                                n = i[1];
                            return o = decodeURIComponent(o), n = void 0 === n ? null : decodeURIComponent(n), e.hasOwnProperty(o) ? Array.isArray(e[o]) ? e[o].push(n) : e[o] = [e[o], n] : e[o] = n, e
                        }), {})
                    }(t)) e.hasOwnProperty(i) && this.queries.push({
                    name: i,
                    value: "only screen and (min-width: " + e[i] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function(e) {
                var t = this.get(e);
                return !!t && a(t).matches
            },
            is: function(e) {
                return (e = e.trim().split(" ")).length > 1 && "only" === e[1] ? e[0] === this._getCurrentSize() : this.atLeast(e[0])
            },
            get: function(e) {
                for (var t in this.queries)
                    if (this.queries.hasOwnProperty(t)) {
                        var i = this.queries[t];
                        if (e === i.name) return i.value
                    }
                return null
            },
            _getCurrentSize: function() {
                for (var e, t = 0; t < this.queries.length; t++) {
                    var i = this.queries[t];
                    a(i.value).matches && (e = i)
                }
                return "object" === (void 0 === e ? "undefined" : n(e)) ? e.name : e
            },
            _watcher: function() {
                var e = this;
                (0, r.default)(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", (function() {
                    var t = e._getCurrentSize(),
                        i = e.current;
                    t !== i && (e.current = t, (0, r.default)(window).trigger("changed.zf.mediaquery", [t, i]))
                }))
            }
        };
    t.MediaQuery = l
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Keyboard = void 0;
    var o, n = i(0),
        s = (o = n) && o.__esModule ? o : {
            default: o
        },
        r = i(1);
    var a = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        l = {};

    function c(e) {
        return !!e && e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter((function() {
            return !(!(0, s.default)(this).is(":visible") || (0, s.default)(this).attr("tabindex") < 0)
        }))
    }

    function d(e) {
        var t = a[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
        return t = t.replace(/\W+/, ""), e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), e.altKey && (t = "ALT_" + t), t = t.replace(/_$/, "")
    }
    var u = {
        keys: function(e) {
            var t = {};
            for (var i in e) t[e[i]] = e[i];
            return t
        }(a),
        parseKey: d,
        handleKey: function(e, t, i) {
            var o, n = l[t],
                a = this.parseKey(e);
            if (!n) return console.warn("Component not defined!");
            if ((o = i[(void 0 === n.ltr ? n : (0, r.rtl)() ? s.default.extend({}, n.ltr, n.rtl) : s.default.extend({}, n.rtl, n.ltr))[a]]) && "function" == typeof o) {
                var c = o.apply();
                (i.handled || "function" == typeof i.handled) && i.handled(c)
            } else(i.unhandled || "function" == typeof i.unhandled) && i.unhandled()
        },
        findFocusable: c,
        register: function(e, t) {
            l[e] = t
        },
        trapFocus: function(e) {
            var t = c(e),
                i = t.eq(0),
                o = t.eq(-1);
            e.on("keydown.zf.trapfocus", (function(e) {
                e.target === o[0] && "TAB" === d(e) ? (e.preventDefault(), i.focus()) : e.target === i[0] && "SHIFT_TAB" === d(e) && (e.preventDefault(), o.focus())
            }))
        },
        releaseFocus: function(e) {
            e.off("keydown.zf.trapfocus")
        }
    };
    t.Keyboard = u
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Triggers = void 0;
    var o, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = i(0),
        r = (o = s) && o.__esModule ? o : {
            default: o
        },
        a = i(10);
    var l = function() {
            for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
            return !1
        }(),
        c = function(e, t) {
            e.data(t).split(" ").forEach((function(i) {
                (0, r.default)("#" + i)["close" === t ? "trigger" : "triggerHandler"](t + ".zf.trigger", [e])
            }))
        },
        d = {
            Listeners: {
                Basic: {},
                Global: {}
            },
            Initializers: {}
        };

    function u(e, t, i) {
        var o = void 0,
            n = Array.prototype.slice.call(arguments, 3);
        (0, r.default)(window).off(t).on(t, (function(t) {
            o && clearTimeout(o), o = setTimeout((function() {
                i.apply(null, n)
            }), e || 10)
        }))
    }



    d.Initializers.addSimpleListeners = function() {
        var e = (0, r.default)(document);
        d.Initializers.addOpenListener(e), d.Initializers.addCloseListener(e), d.Initializers.addToggleListener(e), d.Initializers.addCloseableListener(e), d.Initializers.addToggleFocusListener(e)
    }, d.Initializers.addGlobalListeners = function() {
        var e = (0, r.default)(document);
        d.Initializers.addMutationEventsListener(e), d.Initializers.addResizeListener(), d.Initializers.addScrollListener(), d.Initializers.addClosemeListener()
    }, d.init = function(e, t) {
        if (void 0 === e.triggersInitialized) {
            e(document);
            "complete" === document.readyState ? (d.Initializers.addSimpleListeners(), d.Initializers.addGlobalListeners()) : e(window).on("load", (function() {
                d.Initializers.addSimpleListeners(), d.Initializers.addGlobalListeners()
            })), e.triggersInitialized = !0
        }
        t && (t.Triggers = d, t.IHearYou = d.Initializers.addGlobalListeners)
    }, t.Triggers = d
}, function(e, t, i) {
    e.exports = i(6)
}, function(e, t, i) {
    "use strict";
    s(i(7));
    i(8);
    var o = i(13),
        n = s(i(23));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    window.$ = $, $(document).foundation(), o.front.init(), o.about.init(), n.default.init(), n.default.play(), $("[data-main-menu] a, .off-canvas .ba-logo").on("click", (function() {
        $(".off-canvas").foundation("close")
    }))
}, function(e, t, i) {
    /**
     * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
     * @version v4.3.1
     * @link https://github.com/ten1seven/what-input
     * @license MIT
     */
    var o;
    o = function() {
        return function(e) {
            var t = {};

            function i(o) {
                if (t[o]) return t[o].exports;
                var n = t[o] = {
                    exports: {},
                    id: o,
                    loaded: !1
                };
                return e[o].call(n.exports, n, n.exports, i), n.loaded = !0, n.exports
            }
            return i.m = e, i.c = t, i.p = "", i(0)
        }([function(e, t) {
            "use strict";
            e.exports = function() {
                var e = "initial",
                    t = null,
                    i = document.documentElement,
                    o = ["input", "select", "textarea"],
                    n = [],
                    s = [16, 17, 18, 91, 93],
                    r = [9],
                    a = {
                        keydown: "keyboard",
                        keyup: "keyboard",
                        mousedown: "mouse",
                        mousemove: "mouse",
                        MSPointerDown: "pointer",
                        MSPointerMove: "pointer",
                        pointerdown: "pointer",
                        pointermove: "pointer",
                        touchstart: "touch"
                    },
                    l = [],
                    c = !1,
                    d = !1,
                    u = {
                        x: null,
                        y: null
                    },
                    h = {
                        2: "touch",
                        3: "touch",
                        4: "mouse"
                    },
                    p = !1;
                try {
                    var f = Object.defineProperty({}, "passive", {
                        get: function() {
                            p = !0
                        }
                    });
                    window.addEventListener("test", null, f)
                } catch (e) {}
                var v = function() {
                        var e = !!p && {
                            passive: !0
                        };
                        window.PointerEvent ? (i.addEventListener("pointerdown", m), i.addEventListener("pointermove", w)) : window.MSPointerEvent ? (i.addEventListener("MSPointerDown", m), i.addEventListener("MSPointerMove", w)) : (i.addEventListener("mousedown", m), i.addEventListener("mousemove", w), "ontouchstart" in window && (i.addEventListener("touchstart", y, e), i.addEventListener("touchend", y))), i.addEventListener(b(), w, e), i.addEventListener("keydown", m), i.addEventListener("keyup", m)
                    },
                    m = function(i) {
                        if (!c) {
                            var n = i.which,
                                l = a[i.type];
                            if ("pointer" === l && (l = S(i)), e !== l || t !== l) {
                                var d = document.activeElement,
                                    u = !1;
                                (d && d.nodeName && -1 === o.indexOf(d.nodeName.toLowerCase()) || -1 !== r.indexOf(n)) && (u = !0), ("touch" === l || "mouse" === l || "keyboard" === l && n && u && -1 === s.indexOf(n)) && (e = t = l, g())
                            }
                        }
                    },
                    g = function() {
                        i.setAttribute("data-whatinput", e), i.setAttribute("data-whatintent", e), -1 === l.indexOf(e) && (l.push(e), i.className += " whatinput-types-" + e), T("input")
                    },
                    w = function(e) {
                        if (u.x !== e.screenX || u.y !== e.screenY ? (d = !1, u.x = e.screenX, u.y = e.screenY) : d = !0, !c && !d) {
                            var o = a[e.type];
                            "pointer" === o && (o = S(e)), t !== o && (t = o, i.setAttribute("data-whatintent", t), T("intent"))
                        }
                    },
                    y = function(e) {
                        "touchstart" === e.type ? (c = !1, m(e)) : c = !0
                    },
                    T = function(e) {
                        for (var i = 0, o = n.length; i < o; i++) n[i].type === e && n[i].fn.call(void 0, t)
                    },
                    S = function(e) {
                        return "number" == typeof e.pointerType ? h[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType
                    },
                    b = function() {
                        return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                    };
                return "addEventListener" in window && Array.prototype.indexOf && (a[b()] = "mouse", v(), g()), {
                    ask: function(i) {
                        return "loose" === i ? t : e
                    },
                    types: function() {
                        return l
                    },
                    ignoreKeys: function(e) {
                        s = e
                    },
                    registerOnChange: function(e, t) {
                        n.push({
                            fn: e,
                            type: t || "input"
                        })
                    },
                    unRegisterOnChange: function(e) {
                        var t = function(e) {
                            for (var t = 0, i = n.length; t < i; t++)
                                if (n[t].fn === e) return t
                        }(e);
                        t && n.splice(t, 1)
                    }
                }
            }()
        }])
    }, e.exports = o()
}, function(e, t, i) {
    "use strict";
    var o, n = i(0),
        s = (o = n) && o.__esModule ? o : {
            default: o
        },
        r = i(9),
        a = i(3),
        l = i(2),
        c = i(4),
        d = i(11);
    r.Foundation.addToJquery(s.default), r.Foundation.Keyboard = a.Keyboard, r.Foundation.MediaQuery = l.MediaQuery, c.Triggers.init(s.default, r.Foundation), r.Foundation.plugin(d.OffCanvas, "OffCanvas"), e.exports = r.Foundation
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Foundation = void 0;
    var o, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = i(0),
        r = (o = s) && o.__esModule ? o : {
            default: o
        },
        a = i(1),
        l = i(2);
    var c = {
        version: "6.4.3",
        _plugins: {},
        _uuids: [],
        plugin: function(e, t) {
            var i = t || d(e),
                o = u(i);
            this._plugins[o] = this[i] = e
        },
        registerPlugin: function(e, t) {
            var i = t ? u(t) : d(e.constructor).toLowerCase();
            e.uuid = (0, a.GetYoDigits)(6, i), e.$element.attr("data-" + i) || e.$element.attr("data-" + i, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + i), this._uuids.push(e.uuid)
        },
        unregisterPlugin: function(e) {
            var t = u(d(e.$element.data("zfPlugin").constructor));
            for (var i in this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + t).removeData("zfPlugin").trigger("destroyed.zf." + t), e) e[i] = null
        },
        reInit: function(e) {
            var t = e instanceof r.default;
            try {
                if (t) e.each((function() {
                    (0, r.default)(this).data("zfPlugin")._init()
                }));
                else {
                    var i = void 0 === e ? "undefined" : n(e),
                        o = this;
                    ({
                        object: function(e) {
                            e.forEach((function(e) {
                                e = u(e), (0, r.default)("[data-" + e + "]").foundation("_init")
                            }))
                        },
                        string: function() {
                            e = u(e), (0, r.default)("[data-" + e + "]").foundation("_init")
                        },
                        undefined: function() {
                            this.object(Object.keys(o._plugins))
                        }
                    })[i](e)
                }
            } catch (e) {
                console.error(e)
            } finally {
                return e
            }
        },
        reflow: function(e, t) {
            void 0 === t ? t = Object.keys(this._plugins) : "string" == typeof t && (t = [t]);
            var i = this;
            r.default.each(t, (function(t, o) {
                var n = i._plugins[o];
                (0, r.default)(e).find("[data-" + o + "]").addBack("[data-" + o + "]").each((function() {
                    var e = (0, r.default)(this),
                        t = {};
                    if (e.data("zfPlugin")) console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
                    else {
                        if (e.attr("data-options")) e.attr("data-options").split(";").forEach((function(e, i) {
                            var o = e.split(":").map((function(e) {
                                return e.trim()
                            }));
                            o[0] && (t[o[0]] = function(e) {
                                if ("true" === e) return !0;
                                if ("false" === e) return !1;
                                if (!isNaN(1 * e)) return parseFloat(e);
                                return e
                            }(o[1]))
                        }));
                        try {
                            e.data("zfPlugin", new n((0, r.default)(this), t))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            return
                        }
                    }
                }))
            }))
        },
        getFnName: d,
        addToJquery: function(e) {
            return e.fn.foundation = function(t) {
                var i = void 0 === t ? "undefined" : n(t),
                    o = e(".no-js");
                if (o.length && o.removeClass("no-js"), "undefined" === i) l.MediaQuery._init(), c.reflow(this);
                else {
                    if ("string" !== i) throw new TypeError("We're sorry, " + i + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                    var s = Array.prototype.slice.call(arguments, 1),
                        r = this.data("zfPlugin");
                    if (void 0 === r || void 0 === r[t]) throw new ReferenceError("We're sorry, '" + t + "' is not an available method for " + (r ? d(r) : "this element") + ".");
                    1 === this.length ? r[t].apply(r, s) : this.each((function(i, o) {
                        r[t].apply(e(o).data("zfPlugin"), s)
                    }))
                }
                return this
            }, e
        }
    };

    function d(e) {
        if (void 0 === Function.prototype.name) {
            var t = /function\s([^(]{1,})\(/.exec(e.toString());
            return t && t.length > 1 ? t[1].trim() : ""
        }
        return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
    }

    function u(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    c.util = {
            throttle: function(e, t) {
                var i = null;
                return function() {
                    var o = this,
                        n = arguments;
                    null === i && (i = setTimeout((function() {
                        e.apply(o, n), i = null
                    }), t))
                }
            }
        }, window.Foundation = c,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                var i = e[t];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var o = 0;
                window.requestAnimationFrame = function(e) {
                    var t = Date.now(),
                        i = Math.max(o + 16, t);
                    return setTimeout((function() {
                        e(o = i)
                    }), i - t)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var t = Array.prototype.slice.call(arguments, 1),
                i = this,
                o = function() {},
                n = function() {
                    return i.apply(this instanceof o ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (o.prototype = this.prototype), n.prototype = new o, n
        }), t.Foundation = c
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Motion = t.Move = void 0;
    var o, n = i(0),
        s = (o = n) && o.__esModule ? o : {
            default: o
        },
        r = i(1);
    var a = ["mui-enter", "mui-leave"],
        l = ["mui-enter-active", "mui-leave-active"],
        c = {
            animateIn: function(e, t, i) {
                d(!0, e, t, i)
            },
            animateOut: function(e, t, i) {
                d(!1, e, t, i)
            }
        };

    function d(e, t, i, o) {
        if ((t = (0, s.default)(t).eq(0)).length) {
            var n = e ? a[0] : a[1],
                c = e ? l[0] : l[1];
            d(), t.addClass(i).css("transition", "none"), requestAnimationFrame((function() {
                t.addClass(n), e && t.show()
            })), requestAnimationFrame((function() {
                t[0].offsetWidth, t.css("transition", "").addClass(c)
            })), t.one((0, r.transitionend)(t), (function() {
                e || t.hide();
                d(), o && o.apply(t)
            }))
        }

        function d() {
            t[0].style.transitionDuration = 0, t.removeClass(n + " " + c + " " + i)
        }
    }
    t.Move = function(e, t, i) {
        var o, n, s = null;
        if (0 === e) return i.apply(t), void t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]);
        o = window.requestAnimationFrame((function r(a) {
            s || (s = a), n = a - s, i.apply(t), n < e ? o = window.requestAnimationFrame(r, t) : (window.cancelAnimationFrame(o), t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]))
        }))
    }, t.Motion = c
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OffCanvas = void 0;
    var o, n = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, i, o) {
                return i && e(t.prototype, i), o && e(t, o), t
            }
        }(),
        s = i(0),
        r = (o = s) && o.__esModule ? o : {
            default: o
        },
        a = i(3),
        l = i(2),
        c = i(1),
        d = i(12),
        u = i(4);

    function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var f = function(e) {
        function t() {
            return h(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
            key: "_setup",
            value: function(e, i) {
                var o = this;
                this.className = "OffCanvas", this.$element = e, this.options = r.default.extend({}, t.defaults, this.$element.data(), i), this.contentClasses = {
                    base: [],
                    reveal: []
                }, this.$lastTrigger = (0, r.default)(), this.$triggers = (0, r.default)(), this.position = "left", this.$content = (0, r.default)(), this.nested = !!this.options.nested, (0, r.default)(["push", "overlap"]).each((function(e, t) {
                    o.contentClasses.base.push("has-transition-" + t)
                })), (0, r.default)(["left", "right", "top", "bottom"]).each((function(e, t) {
                    o.contentClasses.base.push("has-position-" + t), o.contentClasses.reveal.push("has-reveal-" + t)
                })), u.Triggers.init(r.default), l.MediaQuery._init(), this._init(), this._events(), a.Keyboard.register("OffCanvas", {
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = (0, r.default)("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-" + this.options.transition + " is-closed"), this.$triggers = (0, r.default)(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay) {
                    var t = document.createElement("div"),
                        i = "fixed" === (0, r.default)(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                    t.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = (0, r.default)(t), "is-overlay-fixed" === i ? (0, r.default)(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay)
                }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), !0 === this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this._removeContentClasses()
            }
        }, {
            key: "_events",
            value: function() {
                (this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), !0 === this.options.closeOnClick) && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                    "click.zf.offcanvas": this.close.bind(this)
                })
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var e = this;
                (0, r.default)(window).on("changed.zf.mediaquery", (function() {
                    l.MediaQuery.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1)
                })).one("load.zf.offcanvas", (function() {
                    l.MediaQuery.atLeast(e.options.revealOn) && e.reveal(!0)
                }))
            }
        }, {
            key: "_removeContentClasses",
            value: function(e) {
                "boolean" != typeof e ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === e && this.$content.removeClass("has-reveal-" + this.position)
            }
        }, {
            key: "_addContentClasses",
            value: function(e) {
                this._removeContentClasses(e), "boolean" != typeof e ? this.$content.addClass("has-transition-" + this.options.transition + " has-position-" + this.position) : !0 === e && this.$content.addClass("has-reveal-" + this.position)
            }
        }, {
            key: "reveal",
            value: function(e) {
                e ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), this.$element.addClass("is-closed")), this._addContentClasses(e)
            }
        }, {
            key: "_stopScrolling",
            value: function(e) {
                return !1
            }
        }, {
            key: "_recordScrollable",
            value: function(e) {
                this.scrollHeight !== this.clientHeight && (0 === this.scrollTop && (this.scrollTop = 1), this.scrollTop === this.scrollHeight - this.clientHeight && (this.scrollTop = this.scrollHeight - this.clientHeight - 1)), this.allowUp = this.scrollTop > 0, this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight, this.lastY = e.originalEvent.pageY
            }
        }, {
            key: "_stopScrollPropagation",
            value: function(e) {
                var t = e.pageY < this.lastY,
                    i = !t;
                this.lastY = e.pageY, t && this.allowUp || i && this.allowDown ? e.stopPropagation() : e.preventDefault()
            }
        }, {
            key: "open",
            value: function(e, t) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    t && (this.$lastTrigger = t), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && ((0, r.default)("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one((0, c.transitionend)(this.$element), (function() {
                        if (i.$element.hasClass("is-open")) {
                            var e = i.$element.find("[data-autofocus]");
                            e.length ? e.eq(0).focus() : i.$element.find("a, button").eq(0).focus()
                        }
                    })), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), a.Keyboard.trapFocus(this.$element)), this._addContentClasses()
                }
            }
        }, {
            key: "close",
            value: function(e) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var t = this;
                    this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !1 === this.options.contentScroll && ((0, r.default)("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), !0 === this.options.trapFocus && (this.$content.removeAttr("tabindex"), a.Keyboard.releaseFocus(this.$element)), this.$element.one((0, c.transitionend)(this.$element), (function(e) {
                        t.$element.addClass("is-closed"), t._removeContentClasses()
                    }))
                }
            }
        }, {
            key: "toggle",
            value: function(e, t) {
                this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t)
            }
        }, {
            key: "_handleKeyboard",
            value: function(e) {
                var t = this;
                a.Keyboard.handleKey(e, "OffCanvas", {
                    close: function() {
                        return t.close(), t.$lastTrigger.focus(), !0
                    },
                    handled: function() {
                        e.stopPropagation(), e.preventDefault()
                    }
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas")
            }
        }]), t
    }(d.Plugin);
    f.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    }, t.OffCanvas = f
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Plugin = void 0;
    var o, n = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, i, o) {
                return i && e(t.prototype, i), o && e(t, o), t
            }
        }(),
        s = i(0),
        r = ((o = s) && o.__esModule, i(1));
    var a = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._setup(t, i);
            var o = c(this);
            this.uuid = (0, r.GetYoDigits)(6, o), this.$element.attr("data-" + o) || this.$element.attr("data-" + o, this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf." + o)
        }
        return n(e, [{
            key: "destroy",
            value: function() {
                this._destroy();
                var e = c(this);
                for (var t in this.$element.removeAttr("data-" + e).removeData("zfPlugin").trigger("destroyed.zf." + e), this) this[t] = null
            }
        }]), e
    }();

    function l(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function c(e) {
        return void 0 !== e.constructor.name ? l(e.constructor.name) : l(e.className)
    }
    t.Plugin = a
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.about = t.front = void 0, i(14);
    var o = s(i(15));
    s(i(16));
    i(17), i(18), i(20);
    s(i(21));
    var n = s(i(22));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    window.tocca({
        swipeThreshold: 40,
        justTouchEvents: !0
    });


    ///////////////////APARECE CONTEIDO


    var r, a, l, c, d, u, h, p, f, v, m, g, w, y, T, S, b, x = (r = animation_tl("1"), a = $("[data-for-people]"), l = $("[data-projects-slider]"), $("[data-founders-slider]"), c = $("[data-contact-slider]"), d = $("[data-projects-close]"), u = $("[data-projects-wrap]"), h = $("[data-projects-list]"), p = $("[data-projects-list-mob]"), f = h.find("[data-projects-list-item]"), v = p.find("[data-projects-list-item]"), m = $("[data-project-slide]"), g = $("[data-projects-scroll-list]"), w = $("[data-projects-scroll-wrap]"), y = $("[data-news-slider]"), $("#contact-inner"), T = function() {
            return $(document).width() < 640
        }, S = function() {
            return $(document).width() < 900 && $(document).width() >= 640
        }, b = {
            moveProjects: function(e) {
                var t = g.outerHeight() - (w.outerHeight() - 96),
                    i = t * o - 60,
                    o = (i = e.pageY - w[0].offsetTop) / w.outerHeight();
                i = o * t, TweenMax.to(g, 1, {
                    y: -i,
                    ease: Power2.easeOut
                })
            },
            off: function() {
                TweenMax.to(g, .6, {
                    y: 0,
                    ease: Power2.easeOut
                }), w.off("mousemove.projectsSroll", this.moveProjects)
            },
            on: function() {
                w.on("mousemove.projectsSroll", this.moveProjects)
            }
        }, {
            init: function() {
                $("[data-section]").each((function() {
                    var e = $(this),
                        t = {
                            show: new TimelineMax({
                                paused: !0,
                                yoyo: !0
                            }),
                            hide: new TimelineMax({
                                paused: !0,
                                yoyo: !0
                            })
                        };
                    if ("contact2" == e.data("section")) return e.data("show", t.show), void e.data("hide", t.hide);
                    e.aText = e.find("[data-text]"), e.aTitle = e.find("[data-title]:visible"), e.aScroll = e.find("[data-scroll]"), e.aLine = e.find("[data-sline]"), e.aBox = e.find("[data-box]"), e.aBoxContent = e.find("[data-box-content]"), e.aTitle = new SplitText(e.aTitle, {
                        type: "lines"
                    }), $(e.aTitle.lines).each((function() {
                        $(this).wrap("<div class='ba-section-title-line-wrap'></div>")
                    }));
                    var i = $(e.aTitle.lines).height();
                    if (t.show.staggerFrom(e.aTitle.lines, .7, {
                            yPercent: 100,
                            opacity: 0,
                            ease: Power2.easeOut
                        }, 0).from(e.aText, .7, {
                            y: i,
                            opacity: 0,
                            ease: Power2.easeOut
                        }, 0), 0 != e.aScroll.length && t.show.from(e.aScroll, .7, {
                            y: i,
                            ease: Power2.easeOut
                        }, 0).set(e.aScroll.parent(), {
                            overflow: "visible"
                        }), T() || S() || "home" != e.data("section") && "projects" != e.data("section") ? (t.hide.staggerTo(e.aTitle.lines, .7, {
                            yPercent: -100,
                            opacity: 0,
                            ease: Power2.easeIn
                        }, 0).to(e.aText, .7, {
                            y: -i,
                            opacity: 0,
                            ease: Power2.easeIn
                        }, 0), 0 != e.aScroll.length && t.hide.set(e.aScroll.parent(), {
                            overflow: "hidden"
                        }).to(e.aScroll, .7, {
                            y: -i,
                            ease: Power2.easeIn
                        }, 0)) : t.hide.fromTo(e.aLine, .8, {
                            scaleY: 0
                        }, {
                            scaleY: 1
                        }).add("moveBox", "+=0.1").to(e.aBoxContent, .7, {
                            y: "-55vh",
                            opacity: 0,
                            ease: Power3.easeInOut
                        }, "moveBox-=0.5").to(e.aLine, .6, {
                            y: "-55vh",
                            transformOrigin: "50% 0%",
                            ease: Power3.easeInOut
                        }, "moveBox-=0.45").to(e.aLine, .4, {
                            scaleY: 0,
                            transformOrigin: "50% 0%"
                        }, "-=0.05"), "projects" == e.data("section")) {
                        m.each((function() {
                            var e = $(this),
                                t = {
                                    show: new TimelineMax({
                                        paused: !0
                                    }),
                                    hide: new TimelineMax({
                                        paused: !0
                                    })
                                };
                            e.aTitle = e.find("[data-project-title]"), e.aText = e.find("[data-project-text]"), e.aTitle = new SplitText(e.aTitle, {
                                type: "lines"
                            }), $(e.aTitle.lines).each((function() {
                                $(this).wrap("<div class='ba-section-title-line-wrap'></div>")
                            })), t.show.staggerFrom(e.aTitle.lines, .9, {
                                yPercent: 120,
                                opacity: 0,
                                ease: Power4.easeOut
                            }, .03).from(e.aText, 1, {
                                y: 20,
                                opacity: 0,
                                ease: Power4.easeOut
                            }, "-=0.7"), e.data("show", t.show), e.data("hide", t.hide)
                        }));
                        var o = {
                            show: new TimelineMax({
                                paused: !0
                            }),
                            hide: new TimelineMax({
                                paused: !0
                            })
                        };
                        o.show.add("projects", 0).staggerTo(p.find("[data-projects-list-item]"), .8, {
                            xPercent: -100,
                            ease: Power3.easeInOut,
                            force3D: !0
                        }, .1, "projects").staggerTo(p.find("[data-line-h]"), .4, {
                            scaleX: 1,
                            ease: Power3.easeOut
                        }, .1, "projects").staggerTo(p.find("[data-line]"), .5, {
                            scale: 1,
                            ease: Power3.easeOut
                        }, .1, "projects+=0.55").staggerFrom(p.find("[data-project-list-title]"), .3, {
                            y: -5,
                            opacity: 0,
                            ease: Power3.easeOut
                        }, .1, "projects+=0.8"), o.hide.staggerTo(p.find("[data-line]"), .6, {
                            scale: 0,
                            ease: Power3.easeIn
                        }, 0).to(p.find("[data-project-list-title]"), .6, {
                            opacity: 0,
                            ease: Power3.easeIn
                        }, 0).to(p.find("[data-projects-list-item]"), .8, {
                            transform: "translateX(0)",
                            ease: Power3.easeInOut,
                            clearProps: "all"
                        }, "-=0.3").to(p.find("[data-line-h]"), 1, {
                            scaleX: .7,
                            ease: Power0.easeNone
                        }, "-=0.3");
                        var n = {
                            show: new TimelineMax({
                                paused: !0
                            }),
                            hide: new TimelineMax({
                                paused: !0
                            })
                        };
                        n.show.add("projects", 0).staggerTo(f, .8, {
                            xPercent: -35,
                            ease: Power3.easeInOut
                        }, .1, "projects").staggerTo(h.find("[data-line-h]"), .4, {
                            scaleX: 1,
                            ease: Power3.easeOut
                        }, .1, "projects").staggerTo(h.find("[data-line]"), .5, {
                            scale: 1,
                            ease: Power3.easeOut
                        }, .1, "projects+=0.55").staggerFrom(h.find("[data-project-list-title]"), .3, {
                            y: -5,
                            opacity: 0,
                            ease: Power3.easeOut
                        }, .1, "projects+=0.8"), n.hide.staggerTo(h.find("[data-line]"), .6, {
                            scale: 0,
                            ease: Power3.easeIn
                        }, 0).to(h.find("[data-project-list-title]"), .6, {
                            opacity: 0,
                            ease: Power3.easeIn
                        }, 0).to(f, .8, {
                            transform: "translateX(0)",
                            ease: Power3.easeInOut,
                            clearProps: "all"
                        }, "-=0.3").to(h.find("[data-line-h]"), 1, {
                            scaleX: .7,
                            ease: Power0.easeNone
                        }, "-=0.3"), n.show.eventCallback("onStart", (function() {
                            fullpage_api.setAllowScrolling(!1), o.show.progress(0, !0), o.show.play(), b.off()
                        })), n.hide.eventCallback("onStart", (function() {
                            fullpage_api.setAllowScrolling(!1), o.hide.progress(0, !0), o.hide.play(), b.off()
                        })), n.show.eventCallback("onComplete", (function() {
                            fullpage_api.setAllowScrolling(!0), b.on()
                        })), n.hide.eventCallback("onComplete", (function() {
                            fullpage_api.setAllowScrolling(!0)
                        })), e.data("projectsTl", n)
                    }
                    e.data("show", t.show), e.data("hide", t.hide)
                })), new o.default("#fullpage", {
                    licenseKey: "D97F6FE8-A11E49A0-B4B61AB1-F92FAE4A",
                    autoScrolling: !0,
                    menu: "#menu-main-menu",
                    navigation: !1,
                    anchors: ["home", "projects", "contact"],
                    scrollingSpeed: 1500,
                    scrollOverflow: !0,
                    scrollOverflowReset: !1,
                    normalScrollElements: "",
                    touchSensitivity: 15,
                    animateAnchor: !0,
                    scrollOverflowOptions: {},
                    css3: !0,


                    //////XXXXXXXXXXXXXXXXXXXXXX

                    onLeave: function(e, t, i) {
                        var o = {
                                hide: $(e.item).data("hide"),
                                show: $(e.item).data("show")
                            },
                            n = {
                                hide: $(t.item).data("hide"),
                                show: $(t.item).data("show")
                            }


                        switch ("contact2" != t.anchor && (a[0].href = "#" + t.anchor, a.data("anchor", t.anchor)), n.hide.eventCallback("onComplete", null), n.hide.eventCallback("onReverseComplete", null), n.show.eventCallback("onComplete", null), n.show.eventCallback("onReverseComplete", null), o.hide.eventCallback("onComplete", null), o.hide.eventCallback("onReverseComplete", null), o.show.eventCallback("onComplete", null), o.show.eventCallback("onReverseComplete", null), i) {
                            case "down":
                                n.show && o.hide.eventCallback("onComplete", (function() {
                                    n.hide && (n.hide.progress(0, !0), n.hide.pause()), n.show.progress(0, !0), n.show.play(), l.slick("slickGoTo", 0, !0)
                                })), o.hide && (o.hide.progress(0, !0), o.hide.play());
                                break;
                            case "up":
                                n.hide && o.show.eventCallback("onReverseComplete", (function() {

                                    n.show && (n.show.progress(1, !0), n.show.pause()), n.hide.progress(1, !0), n.hide.reverse(), l.slick("slickGoTo", 0, !0)
                                })), o.show && (o.show.progress(1, !0), o.show.reverse())
                        }

                        if ("projects" == t.anchor && !window.isLoading) {
                            var s = $(t.item).data("projectsTl");
                            s.show.progress(0), s.show.play(), TweenMax.to(".fp-scroller", .2, {
                                y: 0
                            })
                        }
                        if ("projects" == e.anchor && !window.isLoading) {
                            var c = $(e.item).data("projectsTl");
                            c.hide.progress(0), c.hide.play()
                        }
                        var d = "contact" != t.anchor;
                        switch (fullpage_api.setAllowScrolling(d), "contact" == e.anchor && E.introTl.reverse(), t.anchor) {
                            case "home":
                                //alert(1);
                                exciterEnable(), r.tweenFromTo("1", "1");
                                break;
                            case "visions":
                                exciterDisable();
                                var u = T() || S() ? 200 : 750;
                                "down" == i ? setTimeout((function() {
                                    return r.tweenFromTo("0", "1")
                                }), u) : r.tweenFromTo("2", "1");
                                break;
                            case "contact":



                                exciterEnable(), r.tweenFromTo("1", "1");



                                //$("#contact-inner")[0].scrollTop = 0, E.introTl.play(), 0 != E.tlFoundersReveal.progress() && (E.tlFoundersReveal.timeScale(20), E.tlFoundersReveal.reverse());
                                break;
                            default:
                                exciterDisable()
                        }

                    }



                    //////XXXXXXXXXXXXXXXXXXXXXX



                }), c.slick({
                    arrows: !0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !1,
                    fade: !1,
                    swipe: !0,
                    speed: 800,
                    prevArrow: "[data-contact-prev]",
                    nextArrow: "[data-contact-next]",
                    swipeToSlide: !1,
                    responsive: [{
                        breakpoint: 900,
                        swipeToSlide: !0,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                }), l.slick({
                    arrows: !1,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !0,
                    fade: !0,
                    adaptiveHeight: !1,
                    swipe: !1,
                    swipeToSlide: !1,
                    pauseOnHover: !1,
                    pauseOnFocus: !1,
                    responsive: [{
                        breakpoint: 900,
                        settings: {
                            speed: 200,
                            adaptiveHeight: !1
                        }
                    }]
                }), l.on("beforeChange", (function(e, t, i, o) {
                    var n = m.eq(o - 1).data("show");
                    n && (n.progress(0), n.pause())
                })), l.on("afterChange", (function(e, t, i) {
                    var o = m.eq(i - 1).data("show");
                    o && o.play()
                })), f.on("click", (function() {
                    var e = $(this),
                        t = f.index(e);
                    "projects" == fullpage_api.getActiveSection().anchor ? (f.removeClass("active"), e.addClass("active"), l.slick("slickGoTo", t + 1)) : l.slick("slickGoTo", 0)
                })), v.on("click", (function() {
                    var e = $(this),
                        t = v.index(e);
                    u.addClass("open"), l.slick("slickGoTo", t + 1)
                })), y.slick({
                    arrows: !0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !1,
                    prevArrow: "[data-news-prev]",
                    nextArrow: "[data-news-next]",
                    responsive: [{
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: !0
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: !0
                        }
                    }]
                }), d.on("click", (function() {
                    u.removeClass("open"), fullpage_api.setAllowScrolling(!0)
                })), h.on("click", (function() {
                    fullpage_api.moveTo("projects")
                }))
            },
            play: function() {}
        }),
        E = function() {
            var e = $("[data-for-people]"),
                t = new TimelineMax({
                    delay: 0,
                    yoyo: !0,
                    paused: !0
                }),
                i = new TimelineMax({
                    paused: !0,
                    yoyo: !0
                }),
                o = ($("[data-founders-slider]"), $("[data-contact-slider]")),
                s = !1,
                r = new ScrollMagic.Controller({
                    container: "#contact-inner"
                }),
                a = ($("[data-founder-slide]"), $("#contact-inner")),
                l = navigator.userAgent.indexOf("Chrome") > -1,
                c = (navigator.userAgent.indexOf("MSIE"), navigator.userAgent.indexOf("Firefox"), navigator.userAgent.indexOf("Edge") > -1),
                d = navigator.userAgent.indexOf("Safari") > -1,
                u = navigator.userAgent.toLowerCase().indexOf("op") > -1;
            l && d && (d = !1), l && u && (l = !1);
            var h = function() {
                return $(document).width() < 640
            };
            return {
                introTl: t,
                tlFoundersReveal: i,
                init: function() {
                    s || (s = !0, function() {
                        var t = !1,
                            i = !1;
                        o.on("beforeChange", (function(e, t, o) {
                            i = !0
                        })), o.on("afterChange", (function(e, o, n) {
                            i = !1, t = 0 != n
                        }));
                        var s = document.querySelector("#contact-inner");
                        $(s).on("swipedown", (function(t, i) {
                            if (0 == a.scrollTop()) {
                                var o = e.data("anchor");
                                fullpage_api.moveTo(o)
                            }
                        }));
                        new n.default({
                            elem: s,
                            preventMouse: !1,
                            callback: function(t) {
                                if ("up" == t.direction && 0 == a.scrollTop()) {
                                    var i = e.data("anchor");
                                    fullpage_api.moveTo(i)
                                }
                            }
                        }), new n.default({
                            elem: o[0],
                            preventMouse: !1,
                            callback: function(e) {
                                i || e.deltaX <= -2 || e.deltaX >= 2 || ("up" == e.direction ? o.slick("slickPrev") : "down" == e.direction && o.slick("slickNext"))
                            }
                        });
                        o.on("mousewheel", (function(e) {
                            t && e.preventDefault()
                        }))
                    }(), function() {
                        var e = $("[data-about-intro-title]");
                        $("[data-about-intro-text]");
                        e.each((function(e) {
                            var i = new TimelineMax,
                                o = $(this),
                                n = $("[data-about-intro-text]").eq(e);
                            o.split = new SplitText(o, {
                                type: "lines"
                            }), o.lines = o.split.lines, $(o.split.lines).each((function() {
                                $(this).wrap("<div class='ba-section-title-line-wrap ba-section-title-line-wrap--pad'></div>")
                            })), i.fromTo(o, .6, {
                                opacity: 0
                            }, {
                                opacity: 1
                            }).from(o.lines, .7, {
                                yPercent: 100,
                                ease: Power2.easeOut
                            }, "-=0.1").staggerFrom(n.children(), .8, {
                                y: 20,
                                opacity: 0,
                                ease: Power2.easeOut
                            }, .06, "-=0.5"), t.add(i, 0)
                        })), t.eventCallback("onStart", (function() {})), t.eventCallback("onComplete", (function() {
                            stopShape()
                        }))
                    }(), setTimeout((function() {
                        return function() {
                            if (!h()) {
                                var e = $("[data-founder-title]"),
                                    t = {
                                        photo: $("[data-photo-mask]"),
                                        lines: $("[data-line-masks]"),
                                        shades: $("[data-photo-shade]")
                                    };
                                if (i.add("man0").staggerFromTo(t.lines.eq(0).find("[data-line-mask]"), 1, {
                                        xPercent: 100
                                    }, {
                                        xPercent: 0,
                                        ease: Power4.easeInOut
                                    }, .1).add("mask0").fromTo(t.photo.eq(0), 1.2, {
                                        xPercent: 100
                                    }, {
                                        xPercent: 0,
                                        ease: Power4.easeOut
                                    }, "mask0-=0.5"), d || c || i.fromTo(t.shades.eq(0).children(), 1, {
                                        scaleY: 0
                                    }, {
                                        scaleY: 1,
                                        ease: Power4.easeOut,
                                        transformOrigin: "50% 0%"
                                    }, "mask0-=0.5"), i.add("man1"), i.staggerTo(t.lines.eq(0).find("[data-line-mask]"), 1, {
                                        xPercent: -100,
                                        ease: Power4.easeInOut
                                    }, .1).staggerFrom(t.lines.eq(1).find("[data-line-mask]"), 1, {
                                        xPercent: 100,
                                        ease: Power4.easeInOut
                                    }, .1, "-=0.8").add("photo", "-=0.6").to(t.photo.eq(0), 1.2, {
                                        xPercent: -100,
                                        ease: Power4.easeOut
                                    }, "photo").from(t.photo.eq(1), 1.2, {
                                        xPercent: 100,
                                        ease: Power4.easeOut
                                    }, "photo"), d || c || i.from(t.shades.eq(1).children(), 1.2, {
                                        scaleY: 0,
                                        ease: Power4.easeOut,
                                        transformOrigin: "50% 0%"
                                    }, "photo+=0.05"), i.add("man2"), i.staggerTo(t.lines.eq(1).find("[data-line-mask]"), 1, {
                                        xPercent: -100,
                                        ease: Power4.easeInOut
                                    }, .1).staggerFrom(t.lines.eq(2).find("[data-line-mask]"), 1, {
                                        xPercent: 100,
                                        ease: Power4.easeInOut
                                    }, .1, "-=0.8").add("photo1", "-=0.6").to(t.photo.eq(1), 1.2, {
                                        xPercent: -100,
                                        ease: Power4.easeOut
                                    }, "photo1").from(t.photo.eq(2), 1.2, {
                                        xPercent: 100,
                                        ease: Power4.easeOut
                                    }, "photo1"), d || c || i.from(t.shades.eq(2).children(), 1.2, {
                                        scaleY: 0,
                                        ease: Power4.easeOut,
                                        transformOrigin: "50% 0%"
                                    }, "photo1+=0.05"), i.add("man3"), e.each((function(e) {
                                        var t = 0 != e ? .4 : .6;
                                        new ScrollMagic.Scene({
                                            triggerElement: this,
                                            triggerHook: t,
                                            reverse: !0
                                        }).setTween(i.tweenFromTo("man" + e, "man" + (e + 1))).addTo(r)
                                    })), !h()) {
                                    var o = $("[data-reveal-founder]");
                                    new IntersectionObserver((function(e) {
                                        if (!0 === e[0].isIntersecting && e[0].intersectionRatio > .07)
                                            if (o.offset().top > 0) TweenMax.to(a, 1, {
                                                scrollTo: {
                                                    y: "#founders-section",
                                                    autoKill: !1,
                                                    offsetY: -10
                                                },
                                                ease: Power3.easeOut
                                            });
                                            else {
                                                var t = o[0].offsetTop + o.outerHeight() - $(".ba-founders-wrap").outerHeight() - 10;
                                                TweenMax.to(a, 1, {
                                                    scrollTo: {
                                                        y: t,
                                                        autoKill: !1
                                                    },
                                                    ease: Power3.easeOut
                                                })
                                            }
                                    }), {
                                        threshold: [.07]
                                    }).observe(o[0])
                                }
                                $("[data-founders-wrap]")[0];
                                var n = {
                                        wrap: $("[data-founders-wrap]"),
                                        text: $("[data-founders-text]"),
                                        img: $("[data-founders-img]")
                                    },
                                    s = new TimelineMax,
                                    l = n.text.outerHeight() - n.wrap.outerHeight() + (n.wrap.outerHeight() - n.img.outerHeight()) / 2 + 60;
                                s.to(n.text, 1, {
                                    y: -l,
                                    ease: Power0.easeNone
                                }), new ScrollMagic.Scene({
                                    triggerHook: "onLeave",
                                    triggerElement: n.wrap[0],
                                    duration: "400%"
                                }).setTween(s).setPin(n.wrap[0]).addTo(r)
                            }
                        }()
                    }), 0))
                },
                play: function() {}
            }
        }();
    t.front = x, t.about = E
}, function(e, t, i) {
    var o;
    /*!
     * Scrolloverflow 2.0.5 module for fullPage.js >= 3
     * https://github.com/alvarotrigo/fullPage.js
     */
    /**
     * Customized version of iScroll.js 0.1.3
     * It fixes bugs affecting its integration with fullpage.js
     * @license
     */
    /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
    ! function(n, s, r) {
        var a = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function(e) {
                n.setTimeout(e, 1e3 / 60)
            },
            l = function() {
                var e = {},
                    t = s.createElement("div").style,
                    i = function() {
                        for (var e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, o = e.length; i < o; i++)
                            if (e[i] + "ransform" in t) return e[i].substr(0, e[i].length - 1);
                        return !1
                    }();

                function o(e) {
                    return !1 !== i && ("" === i ? e : i + e.charAt(0).toUpperCase() + e.substr(1))
                }
                e.getTime = Date.now || function() {
                    return (new Date).getTime()
                }, e.extend = function(e, t) {
                    for (var i in t) e[i] = t[i]
                }, e.addEvent = function(e, t, i, o) {
                    e.addEventListener(t, i, !!o)
                }, e.removeEvent = function(e, t, i, o) {
                    e.removeEventListener(t, i, !!o)
                }, e.prefixPointerEvent = function(e) {
                    return n.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
                }, e.momentum = function(e, t, i, o, n, s) {
                    var a, l, c = e - t,
                        d = r.abs(c) / i;
                    return l = d / (s = void 0 === s ? 6e-4 : s), (a = e + d * d / (2 * s) * (c < 0 ? -1 : 1)) < o ? (a = n ? o - n / 2.5 * (d / 8) : o, l = (c = r.abs(a - e)) / d) : a > 0 && (a = n ? n / 2.5 * (d / 8) : 0, l = (c = r.abs(e) + a) / d), {
                        destination: r.round(a),
                        duration: l
                    }
                };
                var a = o("transform");
                return e.extend(e, {
                    hasTransform: !1 !== a,
                    hasPerspective: o("perspective") in t,
                    hasTouch: "ontouchstart" in n,
                    hasPointer: !(!n.PointerEvent && !n.MSPointerEvent),
                    hasTransition: o("transition") in t
                }), e.isBadAndroid = function() {
                    var e = n.navigator.appVersion;
                    if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                        var t = e.match(/Safari\/(\d+.\d)/);
                        return !(t && "object" == typeof t && t.length >= 2) || parseFloat(t[1]) < 535.19
                    }
                    return !1
                }(), e.extend(e.style = {}, {
                    transform: a,
                    transitionTimingFunction: o("transitionTimingFunction"),
                    transitionDuration: o("transitionDuration"),
                    transitionDelay: o("transitionDelay"),
                    transformOrigin: o("transformOrigin")
                }), e.hasClass = function(e, t) {
                    return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                }, e.addClass = function(t, i) {
                    if (!e.hasClass(t, i)) {
                        var o = t.className.split(" ");
                        o.push(i), t.className = o.join(" ")
                    }
                }, e.removeClass = function(t, i) {
                    if (e.hasClass(t, i)) {
                        var o = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                        t.className = t.className.replace(o, " ")
                    }
                }, e.offset = function(e) {
                    for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
                    return {
                        left: t,
                        top: i
                    }
                }, e.preventDefaultException = function(e, t) {
                    for (var i in t)
                        if (t[i].test(e[i])) return !0;
                    return !1
                }, e.extend(e.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), e.extend(e.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(e) {
                            return e * (2 - e)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(e) {
                            return r.sqrt(1 - --e * e)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(e) {
                            return (e -= 1) * e * (5 * e + 4) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(e) {
                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(e) {
                            return 0 === e ? 0 : 1 == e ? 1 : .4 * r.pow(2, -10 * e) * r.sin((e - .055) * (2 * r.PI) / .22) + 1
                        }
                    }
                }), e.tap = function(e, t) {
                    var i = s.createEvent("Event");
                    i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i)
                }, e.click = function(e) {
                    var t, i = e.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || ((t = s.createEvent(n.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), t.view = e.view || n, t.detail = 1, t.screenX = i.screenX || 0, t.screenY = i.screenY || 0, t.clientX = i.clientX || 0, t.clientY = i.clientY || 0, t.ctrlKey = !!e.ctrlKey, t.altKey = !!e.altKey, t.shiftKey = !!e.shiftKey, t.metaKey = !!e.metaKey, t.button = 0, t.relatedTarget = null, t._constructed = !0, i.dispatchEvent(t))
                }, e
            }();

        function c(e, t) {
            for (var i in this.wrapper = "string" == typeof e ? s.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                    resizeScrollbars: !0,
                    mouseWheelSpeed: 20,
                    snapThreshold: .334,
                    disablePointer: !l.hasPointer,
                    disableTouch: l.hasPointer || !l.hasTouch,
                    disableMouse: l.hasPointer || l.hasTouch,
                    startX: 0,
                    startY: 0,
                    scrollY: !0,
                    directionLockThreshold: 5,
                    momentum: !0,
                    bounce: !0,
                    bounceTime: 600,
                    bounceEasing: "",
                    preventDefault: !0,
                    preventDefaultException: {
                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
                    },
                    HWCompositing: !0,
                    useTransition: !0,
                    useTransform: !0,
                    bindToWrapper: void 0 === n.onmousedown
                }, t) this.options[i] = t[i];
            this.translateZ = this.options.HWCompositing && l.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = l.hasTransition && this.options.useTransition, this.options.useTransform = l.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? l.ease[this.options.bounceEasing] || l.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function d(e, t, i) {
            var o = s.createElement("div"),
                n = s.createElement("div");
            return !0 === i && (o.style.cssText = "position:absolute;z-index:9999", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), n.className = "iScrollIndicator", "h" == e ? (!0 === i && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", n.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (!0 === i && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", n.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", t || (o.style.pointerEvents = "none"), o.appendChild(n), o
        }

        function u(e, t) {
            for (var i in this.wrapper = "string" == typeof t.el ? s.querySelector(t.el) : t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = {
                    listenX: !0,
                    listenY: !0,
                    interactive: !1,
                    resize: !0,
                    defaultScrollbars: !1,
                    shrink: !1,
                    fade: !1,
                    speedRatioX: 0,
                    speedRatioY: 0
                }, t) this.options[i] = t[i];
            if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (l.addEvent(this.indicator, "touchstart", this), l.addEvent(n, "touchend", this)), this.options.disablePointer || (l.addEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.addEvent(n, l.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (l.addEvent(this.indicator, "mousedown", this), l.addEvent(n, "mouseup", this))), this.options.fade) {
                this.wrapperStyle[l.style.transform] = this.scroller.translateZ;
                var o = l.style.transitionDuration;
                if (!o) return;
                this.wrapperStyle[o] = l.isBadAndroid ? "0.0001ms" : "0ms";
                var r = this;
                l.isBadAndroid && a((function() {
                    "0.0001ms" === r.wrapperStyle[o] && (r.wrapperStyle[o] = "0s")
                })), this.wrapperStyle.opacity = "0"
            }
        }
        c.prototype = {
            version: "5.2.0",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
            },
            _transitionEnd: function(e) {
                e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function(e) {
                if (1 != l.eventType[e.type] && 0 !== (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2)) return;
                if (this.enabled && (!this.initiated || l.eventType[e.type] === this.initiated)) {
                    !this.options.preventDefault || l.isBadAndroid || l.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                    var t, i = e.touches ? e.touches[0] : e;
                    this.initiated = l.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = l.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, t = this.getComputedPosition(), this._translate(r.round(t.x), r.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(e) {
                if (this.enabled && l.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && e.preventDefault();
                    var t, i, o, n, s = e.touches ? e.touches[0] : e,
                        a = s.pageX - this.pointX,
                        c = s.pageY - this.pointY,
                        d = l.getTime();
                    if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += a, this.distY += c, o = r.abs(this.distX), n = r.abs(this.distY), !(d - this.endTime > 300 && o < 10 && n < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            c = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            a = 0
                        }
                        a = this.hasHorizontalScroll ? a : 0, c = this.hasVerticalScroll ? c : 0, t = this.x + a, i = this.y + c, (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + a / 3 : t > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + c / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, i), d - this.startTime > 300 && (this.startTime = d, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function(e) {
                if (this.enabled && l.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && !l.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                    e.changedTouches && e.changedTouches[0];
                    var t, i, o = l.getTime() - this.startTime,
                        n = r.round(this.x),
                        s = r.round(this.y),
                        a = r.abs(n - this.startX),
                        c = r.abs(s - this.startY),
                        d = 0,
                        u = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = l.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(n, s), !this.moved) return this.options.tap && l.tap(e, this.options.tap), this.options.click && l.click(e), void this._execEvent("scrollCancel");
                        if (this._events.flick && o < 200 && a < 100 && c < 100) this._execEvent("flick");
                        else {
                            if (this.options.momentum && o < 300 && (t = this.hasHorizontalScroll ? l.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                    destination: n,
                                    duration: 0
                                }, i = this.hasVerticalScroll ? l.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                    destination: s,
                                    duration: 0
                                }, n = t.destination, s = i.destination, d = r.max(t.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                                var h = this._nearestSnap(n, s);
                                this.currentPage = h, d = this.options.snapSpeed || r.max(r.max(r.min(r.abs(n - h.x), 1e3), r.min(r.abs(s - h.y), 1e3)), 300), n = h.x, s = h.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                            }
                            if (n != this.x || s != this.y) return (n > 0 || n < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = l.ease.quadratic), void this.scrollTo(n, s, d, u);
                            this._execEvent("scrollEnd")
                        }
                    }
                }
            },
            _resize: function() {
                var e = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout((function() {
                    e.refresh()
                }), this.options.resizePolling)
            },
            resetPosition: function(e) {
                var t = this.x,
                    i = this.y;
                return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (t != this.x || i != this.y) && (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = l.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(e, t) {
                this._events[e] || (this._events[e] = []), this._events[e].push(t)
            },
            off: function(e, t) {
                if (this._events[e]) {
                    var i = this._events[e].indexOf(t);
                    i > -1 && this._events[e].splice(i, 1)
                }
            },
            _execEvent: function(e) {
                if (this._events[e]) {
                    var t = 0,
                        i = this._events[e].length;
                    if (i)
                        for (; t < i; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(e, t, i, o) {
                e = this.x + e, t = this.y + t, i = i || 0, this.scrollTo(e, t, i, o)
            },
            scrollTo: function(e, t, i, o) {
                o = o || l.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
                var n = this.options.useTransition && o.style;
                !i || n ? (n && (this._transitionTimingFunction(o.style), this._transitionTime(i)), this._translate(e, t)) : this._animate(e, t, i, o.fn)
            },
            scrollToElement: function(e, t, i, o, n) {
                if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                    var s = l.offset(e);
                    s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top, !0 === i && (i = r.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === o && (o = r.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), s.left -= i || 0, s.top -= o || 0, s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, t = null == t || "auto" === t ? r.max(r.abs(this.x - s.left), r.abs(this.y - s.top)) : t, this.scrollTo(s.left, s.top, t, n)
                }
            },
            _transitionTime: function(e) {
                if (this.options.useTransition) {
                    e = e || 0;
                    var t = l.style.transitionDuration;
                    if (t) {
                        if (this.scrollerStyle[t] = e + "ms", !e && l.isBadAndroid) {
                            this.scrollerStyle[t] = "0.0001ms";
                            var i = this;
                            a((function() {
                                "0.0001ms" === i.scrollerStyle[t] && (i.scrollerStyle[t] = "0s")
                            }))
                        }
                        if (this.indicators)
                            for (var o = this.indicators.length; o--;) this.indicators[o].transitionTime(e)
                    }
                }
            },
            _transitionTimingFunction: function(e) {
                if (this.scrollerStyle[l.style.transitionTimingFunction] = e, this.indicators)
                    for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
            },
            _translate: function(e, t) {
                if (this.options.useTransform ? this.scrollerStyle[l.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = r.round(e), t = r.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
            },
            _initEvents: function(e) {
                var t = e ? l.removeEvent : l.addEvent,
                    i = this.options.bindToWrapper ? this.wrapper : n;
                t(n, "orientationchange", this), t(n, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), l.hasPointer && !this.options.disablePointer && (t(this.wrapper, l.prefixPointerEvent("pointerdown"), this), t(i, l.prefixPointerEvent("pointermove"), this), t(i, l.prefixPointerEvent("pointercancel"), this), t(i, l.prefixPointerEvent("pointerup"), this)), l.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, "transitionend", this), t(this.scroller, "webkitTransitionEnd", this), t(this.scroller, "oTransitionEnd", this), t(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var e, t, i = n.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (e = +((i = i[l.style.transform].split(")")[0].split(", "))[12] || i[4]), t = +(i[13] || i[5])) : (e = +i.left.replace(/[^-\d.]/g, ""), t = +i.top.replace(/[^-\d.]/g, "")), {
                    x: e,
                    y: t
                }
            },
            _initIndicators: function() {
                var e, t = this.options.interactiveScrollbars,
                    i = "string" != typeof this.options.scrollbars,
                    o = [],
                    n = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: d("v", t, this.options.scrollbars),
                    interactive: t,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                    el: d("h", t, this.options.scrollbars),
                    interactive: t,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), o.push(e))), this.options.indicators && (o = o.concat(this.options.indicators));
                for (var s = o.length; s--;) this.indicators.push(new u(this, o[s]));

                function r(e) {
                    if (n.indicators)
                        for (var t = n.indicators.length; t--;) e.call(n.indicators[t])
                }
                this.options.fadeScrollbars && (this.on("scrollEnd", (function() {
                    r((function() {
                        this.fade()
                    }))
                })), this.on("scrollCancel", (function() {
                    r((function() {
                        this.fade()
                    }))
                })), this.on("scrollStart", (function() {
                    r((function() {
                        this.fade(1)
                    }))
                })), this.on("beforeScrollStart", (function() {
                    r((function() {
                        this.fade(1, !0)
                    }))
                }))), this.on("refresh", (function() {
                    r((function() {
                        this.refresh()
                    }))
                })), this.on("destroy", (function() {
                    r((function() {
                        this.destroy()
                    })), delete this.indicators
                }))
            },
            _initWheel: function() {
                l.addEvent(this.wrapper, "wheel", this), l.addEvent(this.wrapper, "mousewheel", this), l.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", (function() {
                    clearTimeout(this.wheelTimeout), this.wheelTimeout = null, l.removeEvent(this.wrapper, "wheel", this), l.removeEvent(this.wrapper, "mousewheel", this), l.removeEvent(this.wrapper, "DOMMouseScroll", this)
                }))
            },
            _wheel: function(e) {
                if (this.enabled) {
                    n.navigator.userAgent.match(/(MSIE|Trident)/) || e.preventDefault();
                    var t, i, o, s, a = this;
                    if (void 0 === this.wheelTimeout && a._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout((function() {
                            a.options.snap || a._execEvent("scrollEnd"), a.wheelTimeout = void 0
                        }), 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, i = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, i = -e.deltaY);
                    else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in e) t = i = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in e)) return;
                        t = i = -e.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (t *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = i, i = 0), this.options.snap) return o = this.currentPage.pageX, s = this.currentPage.pageY, t > 0 ? o-- : t < 0 && o++, i > 0 ? s-- : i < 0 && s++, void this.goToPage(o, s);
                    o = this.x + r.round(this.hasHorizontalScroll ? t : 0), s = this.y + r.round(this.hasVerticalScroll ? i : 0), this.directionX = t > 0 ? -1 : t < 0 ? 1 : 0, this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0, o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(o, s, 0)
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", (function() {
                    var e, t, i, o, n, s, a = 0,
                        l = 0,
                        c = 0,
                        d = this.options.snapStepX || this.wrapperWidth,
                        u = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (!0 === this.options.snap)
                            for (i = r.round(d / 2), o = r.round(u / 2); c > -this.scrollerWidth;) {
                                for (this.pages[a] = [], e = 0, n = 0; n > -this.scrollerHeight;) this.pages[a][e] = {
                                    x: r.max(c, this.maxScrollX),
                                    y: r.max(n, this.maxScrollY),
                                    width: d,
                                    height: u,
                                    cx: c - i,
                                    cy: n - o
                                }, n -= u, e++;
                                c -= d, a++
                            } else
                                for (e = (s = this.options.snap).length, t = -1; a < e; a++)(0 === a || s[a].offsetLeft <= s[a - 1].offsetLeft) && (l = 0, t++), this.pages[l] || (this.pages[l] = []), c = r.max(-s[a].offsetLeft, this.maxScrollX), n = r.max(-s[a].offsetTop, this.maxScrollY), i = c - r.round(s[a].offsetWidth / 2), o = n - r.round(s[a].offsetHeight / 2), this.pages[l][t] = {
                                    x: c,
                                    y: n,
                                    width: s[a].offsetWidth,
                                    height: s[a].offsetHeight,
                                    cx: i,
                                    cy: o
                                }, c > this.maxScrollX && l++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                })), this.on("flick", (function() {
                    var e = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.x - this.startX), 1e3), r.min(r.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
                }))
            },
            _nearestSnap: function(e, t) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var i = 0,
                    o = this.pages.length,
                    n = 0;
                if (r.abs(e - this.absStartX) < this.snapThresholdX && r.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); i < o; i++)
                    if (e >= this.pages[i][0].cx) {
                        e = this.pages[i][0].x;
                        break
                    }
                for (o = this.pages[i].length; n < o; n++)
                    if (t >= this.pages[0][n].cy) {
                        t = this.pages[0][n].y;
                        break
                    }
                return i == this.currentPage.pageX && ((i += this.directionX) < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), e = this.pages[i][0].x), n == this.currentPage.pageY && ((n += this.directionY) < 0 ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), t = this.pages[0][n].y), {
                    x: e,
                    y: t,
                    pageX: i,
                    pageY: n
                }
            },
            goToPage: function(e, t, i, o) {
                o = o || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
                var n = this.pages[e][t].x,
                    s = this.pages[e][t].y;
                i = void 0 === i ? this.options.snapSpeed || r.max(r.max(r.min(r.abs(n - this.x), 1e3), r.min(r.abs(s - this.y), 1e3)), 300) : i, this.currentPage = {
                    x: n,
                    y: s,
                    pageX: e,
                    pageY: t
                }, this.scrollTo(n, s, i, o)
            },
            next: function(e, t) {
                var i = this.currentPage.pageX,
                    o = this.currentPage.pageY;
                ++i >= this.pages.length && this.hasVerticalScroll && (i = 0, o++), this.goToPage(i, o, e, t)
            },
            prev: function(e, t) {
                var i = this.currentPage.pageX,
                    o = this.currentPage.pageY;
                --i < 0 && this.hasVerticalScroll && (i = 0, o--), this.goToPage(i, o, e, t)
            },
            _initKeys: function(e) {
                var t, i = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ("object" == typeof this.options.keyBindings)
                    for (t in this.options.keyBindings) "string" == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (t in i) this.options.keyBindings[t] = this.options.keyBindings[t] || i[t];
                l.addEvent(n, "keydown", this), this.on("destroy", (function() {
                    l.removeEvent(n, "keydown", this)
                }))
            },
            _key: function(e) {
                if (this.enabled) {
                    var t, i = this.options.snap,
                        o = i ? this.currentPage.pageX : this.x,
                        n = i ? this.currentPage.pageY : this.y,
                        s = l.getTime(),
                        a = this.keyTime || 0;
                    switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(r.round(t.x), r.round(t.y)), this.isInTransition = !1), this.keyAcceleration = s - a < 200 ? r.min(this.keyAcceleration + .25, 50) : 0, e.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? o += i ? 1 : this.wrapperWidth : n += i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= i ? 1 : this.wrapperWidth : n -= i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            o = i ? this.pages.length - 1 : this.maxScrollX, n = i ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            o = 0, n = 0;
                            break;
                        case this.options.keyBindings.left:
                            o += i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            n += i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            o -= i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            n -= i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    i ? this.goToPage(o, n) : (o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollY && (n = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, n, 0), this.keyTime = s)
                }
            },
            _animate: function(e, t, i, o) {
                var n = this,
                    s = this.x,
                    r = this.y,
                    c = l.getTime(),
                    d = c + i;
                this.isAnimating = !0,
                    function u() {
                        var h, p, f, v = l.getTime();
                        if (v >= d) return n.isAnimating = !1, n._translate(e, t), void(n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd"));
                        f = o(v = (v - c) / i), h = (e - s) * f + s, p = (t - r) * f + r, n._translate(h, p), n.isAnimating && a(u)
                    }()
            },
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e);
                        break;
                    case "keydown":
                        this._key(e);
                        break;
                    case "click":
                        this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
                }
            }
        }, u.prototype = {
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e)
                }
            },
            destroy: function() {
                this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (l.removeEvent(this.indicator, "touchstart", this), l.removeEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.removeEvent(this.indicator, "mousedown", this), l.removeEvent(n, "touchmove", this), l.removeEvent(n, l.prefixPointerEvent("pointermove"), this), l.removeEvent(n, "mousemove", this), l.removeEvent(n, "touchend", this), l.removeEvent(n, l.prefixPointerEvent("pointerup"), this), l.removeEvent(n, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(e) {
                var t = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = l.getTime(), this.options.disableTouch || l.addEvent(n, "touchmove", this), this.options.disablePointer || l.addEvent(n, l.prefixPointerEvent("pointermove"), this), this.options.disableMouse || l.addEvent(n, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(e) {
                var t, i, o, n, s = e.touches ? e.touches[0] : e;
                l.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = s.pageX - this.lastPointX, this.lastPointX = s.pageX, i = s.pageY - this.lastPointY, this.lastPointY = s.pageY, o = this.x + t, n = this.y + i, this._pos(o, n), e.preventDefault(), e.stopPropagation()
            },
            _end: function(e) {
                if (this.initiated) {
                    if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), l.removeEvent(n, "touchmove", this), l.removeEvent(n, l.prefixPointerEvent("pointermove"), this), l.removeEvent(n, "mousemove", this), this.scroller.options.snap) {
                        var t = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            i = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.scroller.x - t.x), 1e3), r.min(r.abs(this.scroller.y - t.y), 1e3)), 300);
                        this.scroller.x == t.x && this.scroller.y == t.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = t, this.scroller.scrollTo(t.x, t.y, i, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(e) {
                e = e || 0;
                var t = l.style.transitionDuration;
                if (t && (this.indicatorStyle[t] = e + "ms", !e && l.isBadAndroid)) {
                    this.indicatorStyle[t] = "0.0001ms";
                    var i = this;
                    a((function() {
                        "0.0001ms" === i.indicatorStyle[t] && (i.indicatorStyle[t] = "0s")
                    }))
                }
            },
            transitionTimingFunction: function(e) {
                this.indicatorStyle[l.style.transitionTimingFunction] = e
            },
            refresh: function() {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (l.addClass(this.wrapper, "iScrollBothScrollbars"), l.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (l.removeClass(this.wrapper, "iScrollBothScrollbars"), l.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = r.max(r.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = r.max(r.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var e = this.options.listenX && r.round(this.sizeRatioX * this.scroller.x) || 0,
                    t = this.options.listenY && r.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = r.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = r.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = r.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = r.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[l.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
            },
            _pos: function(e, t) {
                e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? r.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? r.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
            },
            fade: function(e, t) {
                if (!t || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var i = e ? 250 : 500,
                        o = e ? 0 : 300;
                    e = e ? "1" : "0", this.wrapperStyle[l.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(e) {
                        this.wrapperStyle.opacity = e, this.visible = +e
                    }.bind(this, e), o)
                }
            }
        }, c.utils = l, e.exports ? e.exports = c : (void 0 === (o = function() {
            return c
        }.call(t, i, t, e)) || (e.exports = o), void 0 !== n && (n.IScroll = c))
    }(window, document, Math),
    /*!
     * Scrolloverflow 2.0.5 module for fullPage.js >= 3
     * https://github.com/alvarotrigo/fullPage.js
     * @license MIT licensed
     *
     * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
     */
    function(t, i) {
        t.fp_scrolloverflow = function() {
            t.IScroll || (t.IScroll = e.exports);

            function o() {
                var e = this;

                function o() {
                    var t;
                    fp_utils.hasClass(i.body, "fp-responsive") ? (t = e.options.scrollOverflowHandler, r((function(e) {
                        fp_utils.hasClass(fp_utils.closest(e, ".fp-section"), "fp-auto-height-responsive") && t.remove(e)
                    }))) : r(s)
                }

                function s(t) {
                    if (!fp_utils.hasClass(t, "fp-noscroll")) {
                        fp_utils.css(t, {
                            overflow: "hidden"
                        });
                        var i, o = e.options.scrollOverflowHandler,
                            s = o.wrapContent(),
                            r = fp_utils.closest(t, ".fp-section"),
                            a = o.scrollable(t),
                            l = function(e) {
                                var t = fp_utils.closest(e, ".fp-section");
                                return null != t ? parseInt(getComputedStyle(t)["padding-bottom"]) + parseInt(getComputedStyle(t)["padding-top"]) : 0
                            }(r);
                        null != a ? i = o.scrollHeight(t) : (i = t.scrollHeight, e.options.verticalCentered && (i = n(".fp-tableCell", t)[0].scrollHeight));
                        var c = fp_utils.getWindowHeight(),
                            d = c - l;
                        i + l > c ? null != a ? o.update(t, d) : (e.options.verticalCentered ? (fp_utils.wrapInner(n(".fp-tableCell", t)[0], s.scroller), fp_utils.wrapInner(n(".fp-tableCell", t)[0], s.scrollable)) : (fp_utils.wrapInner(t, s.scroller), fp_utils.wrapInner(t, s.scrollable)), o.create(t, d, e.iscrollOptions)) : o.remove(t), fp_utils.css(t, {
                            overflow: ""
                        })
                    }
                }

                function r(e) {
                    n(".fp-section").forEach((function(t) {
                        var i = n(".fp-slide", t);
                        i.length ? i.forEach((function(t) {
                            e(t)
                        })) : e(t)
                    }))
                }
                e.options = null, e.init = function(n, s) {
                    return e.options = n, e.iscrollOptions = s, "complete" === i.readyState && (o(), fullpage_api.shared.afterRenderActions()), t.addEventListener("load", (function() {
                        o(), fullpage_api.shared.afterRenderActions()
                    })), e
                }, e.createScrollBarForAll = o, e.createScrollBar = s
            }
            IScroll.prototype.wheelOn = function() {
                this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
            }, IScroll.prototype.wheelOff = function() {
                this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
            };
            var n = null,
                s = null,
                r = {
                    refreshId: null,
                    iScrollInstances: [],
                    lastScrollY: null,
                    hasBeenInit: !1,
                    iscrollOptions: {
                        scrollbars: !0,
                        mouseWheel: !0,
                        hideScrollbars: !1,
                        fadeScrollbars: !1,
                        disableMouse: !0,
                        interactiveScrollbars: !0
                    },
                    init: function(e) {
                        n = fp_utils.$, s = e;
                        var i = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                        return r.iscrollOptions.click = i, r.hasBeenInit = !0, r.iscrollOptions = fp_utils.deepExtend(r.iscrollOptions, e.scrollOverflowOptions), (new o).init(e, r.iscrollOptions)
                    },
                    toggleWheel: function(e) {
                        n(".fp-scrollable", n(".fp-section.active")[0]).forEach((function(t) {
                            var i = t.fp_iscrollInstance;
                            null != i && (e ? i.wheelOn() : i.wheelOff())
                        }))
                    },
                    setIscroll: function(e, t) {
                        if (r.hasBeenInit) {
                            var i = fp_utils.closest(e, ".fp-scrollable") || n(".fp-scrollable", e)[0],
                                o = t ? "enable" : "disable";
                            i && i.fp_iscrollInstance[o]()
                        }
                    },
                    onLeave: function() {
                        r.toggleWheel(!1)
                    },
                    beforeLeave: function() {
                        r.onLeave()
                    },
                    afterLoad: function() {
                        r.toggleWheel(!0)
                    },
                    create: function(e, t, i) {
                        n(".fp-scrollable", e).forEach((function(o) {
                            fp_utils.css(o, {
                                height: t + "px"
                            });
                            var n = o.fp_iscrollInstance;
                            null != n && r.iScrollInstances.forEach((function(e) {
                                e.destroy()
                            })), n = new IScroll(o, i), r.iScrollInstances.push(n), fp_utils.hasClass(fp_utils.closest(e, ".fp-section"), "active") || n.wheelOff(), o.fp_iscrollInstance = n
                        }))
                    },
                    isScrolled: function(e, t) {
                        var i = t.fp_iscrollInstance;
                        return !i || ("top" === e ? i.y >= 0 && !fp_utils.getScrollTop(t) : "bottom" === e ? 0 - i.y + fp_utils.getScrollTop(t) + t.offsetHeight >= t.scrollHeight : void 0)
                    },
                    scrollable: function(e) {
                        return n(".fp-slides", e).length ? n(".fp-scrollable", n(".fp-slide.active", e)[0])[0] : n(".fp-scrollable", e)[0]
                    },
                    scrollHeight: function(e) {
                        return n(".fp-scroller", n(".fp-scrollable", e)[0])[0].scrollHeight
                    },
                    remove: function(e) {
                        if (null != e) {
                            var t = n(".fp-scrollable", e)[0];
                            if (null != t) {
                                var i = t.fp_iscrollInstance;
                                null != i && i.destroy(), t.fp_iscrollInstance = null, fp_utils.unwrap(n(".fp-scroller", e)[0]), fp_utils.unwrap(n(".fp-scrollable", e)[0])
                            }
                        }
                    },
                    update: function(e, t) {
                        clearTimeout(r.refreshId), r.refreshId = setTimeout((function() {
                            r.iScrollInstances.forEach((function(e) {
                                e.refresh(), fullpage_api.silentMoveTo(fp_utils.index(n(".fp-section.active")[0]) + 1)
                            }))
                        }), 150), fp_utils.css(n(".fp-scrollable", e)[0], {
                            height: t + "px"
                        }), s.verticalCentered && fp_utils.css(n(".fp-scrollable", e)[0].parentNode, {
                            height: t + "px"
                        })
                    },
                    wrapContent: function() {
                        var e = i.createElement("div");
                        e.className = "fp-scrollable";
                        var t = i.createElement("div");
                        return t.className = "fp-scroller", {
                            scrollable: e,
                            scroller: t
                        }
                    }
                };
            return {
                iscrollHandler: r
            }
        }()
    }(window, document)
}, function(e, t, i) {
    var o;

















    /////FRAMEWORKS

    /*!
     * fullPage 3.0.8
     * https://github.com/alvarotrigo/fullPage.js
     *
     * @license GPLv3 for open source use only
     * or Fullpage Commercial License for commercial use
     * http://alvarotrigo.com/fullPage/pricing/
     *
     * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
     */
    ! function(n, s, r, a, l) {
        void 0 === (o = function() {
            return n.fullpage = a(s, r), n.fullpage
        }.call(t, i, t, e)) || (e.exports = o)
    }(this, window, document, (function(e, t) {
        "use strict";
        var i = "active",
            o = "fp-completely",
            n = "fp-section",
            s = "." + n,
            r = ".fp-section.active",
            a = ".fp-tableCell",
            l = ".fp-slide",
            c = ".fp-slides",
            d = ".fp-slidesContainer";

        function u(t, i) {
            e.console && e.console[t] && e.console[t]("fullPage: " + i)
        }

        function h(e, i) {
            return (i = arguments.length > 1 ? i : t) ? i.querySelectorAll(e) : null
        }

        function p(e) {
            e = e || {};
            for (var t = 1, i = arguments.length; t < i; ++t) {
                var o = arguments[t];
                if (o)
                    for (var n in o) o.hasOwnProperty(n) && ("[object Object]" !== Object.prototype.toString.call(o[n]) ? e[n] = o[n] : e[n] = p(e[n], o[n]))
            }
            return e
        }

        function f(e, t) {
            return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
        }

        function v() {
            return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight
        }

        function m() {
            return e.innerWidth
        }

        function g(e, t) {
            var i;
            for (i in e = k(e), t)
                if (t.hasOwnProperty(i) && null !== i)
                    for (var o = 0; o < e.length; o++) {
                        e[o].style[i] = t[i]
                    }
            return e
        }

        function w(e, t, i) {
            for (var o = e[i]; o && !W(o, t);) o = o[i];
            return o
        }

        function y(e, t) {
            return w(e, t, "previousElementSibling")
        }

        function T(e, t) {
            return w(e, t, "nextElementSibling")
        }

        function S(e) {
            return e.previousElementSibling
        }

        function b(e) {
            return e.nextElementSibling
        }

        function x(e) {
            return e[e.length - 1]
        }

        function E(e, t) {
            e = M(e) ? e[0] : e;
            for (var i = null != t ? h(t, e.parentNode) : e.parentNode.childNodes, o = 0, n = 0; n < i.length; n++) {
                if (i[n] == e) return o;
                1 == i[n].nodeType && o++
            }
            return -1
        }

        function k(e) {
            return M(e) ? e : [e]
        }

        function C(e) {
            e = k(e);
            for (var t = 0; t < e.length; t++) e[t].style.display = "none";
            return e
        }

        function P(e) {
            e = k(e);
            for (var t = 0; t < e.length; t++) e[t].style.display = "block";
            return e
        }

        function M(e) {
            return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
        }

        function _(e, t) {
            e = k(e);
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.classList ? o.classList.add(t) : o.className += " " + t
            }
            return e
        }

        function $(e, t) {
            e = k(e);
            for (var i = t.split(" "), o = 0; o < i.length; o++) {
                t = i[o];
                for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    s.classList ? s.classList.remove(t) : s.className = s.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                }
            }
            return e
        }

        function H(e, t) {
            t.appendChild(e)
        }

        function O(e, i, o) {
            var n;
            i = i || t.createElement("div");
            for (var s = 0; s < e.length; s++) {
                var r = e[s];
                (o && !s || !o) && (n = i.cloneNode(!0), r.parentNode.insertBefore(n, r)), n.appendChild(r)
            }
            return e
        }

        function L(e, t) {
            O(e, t, !0)
        }

        function R(e, t) {
            for ("string" == typeof t && (t = q(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
        }

        function A(e) {
            for (var i = t.createDocumentFragment(); e.firstChild;) i.appendChild(e.firstChild);
            e.parentNode.replaceChild(i, e)
        }

        function z(e, t) {
            return e && 1 === e.nodeType ? W(e, t) ? e : z(e.parentNode, t) : null
        }

        function D(e, t) {
            I(e, e.nextSibling, t)
        }

        function j(e, t) {
            I(e, e, t)
        }

        function I(e, t, i) {
            M(i) || ("string" == typeof i && (i = q(i)), i = [i]);
            for (var o = 0; o < i.length; o++) e.parentNode.insertBefore(i[o], t)
        }

        function B() {
            var i = t.documentElement;
            return (e.pageYOffset || i.scrollTop) - (i.clientTop || 0)
        }

        function F(e) {
            return Array.prototype.filter.call(e.parentNode.children, (function(t) {
                return t !== e
            }))
        }

        function U(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }

        function Y(e) {
            if ("function" == typeof e) return !0;
            var t = Object.prototype.toString(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t
        }

        function X(i, o, n) {
            var s;
            n = void 0 === n ? {} : n, "function" == typeof e.CustomEvent ? s = new CustomEvent(o, {
                detail: n
            }) : (s = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, n), i.dispatchEvent(s)
        }

        function W(e, t) {
            return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
        }

        function N(e, t) {
            if ("boolean" == typeof t)
                for (var i = 0; i < e.length; i++) e[i].style.display = t ? "block" : "none";
            return e
        }

        function q(e) {
            var i = t.createElement("div");
            return i.innerHTML = e.trim(), i.firstChild
        }

        function V(e) {
            e = k(e);
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                i && i.parentElement && i.parentNode.removeChild(i)
            }
        }

        function Q(e, t, i) {
            for (var o = e[i], n = []; o;)(W(o, t) || null == t) && n.push(o), o = o[i];
            return n
        }

        function G(e, t) {
            return Q(e, t, "nextElementSibling")
        }

        function K(e, t) {
            return Q(e, t, "previousElementSibling")
        }
        return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, i) {
                i = i || e;
                for (var o = 0; o < this.length; o++) t.call(i, this[o], o, this)
            }), e.fp_utils = {
                $: h,
                deepExtend: p,
                hasClass: f,
                getWindowHeight: v,
                css: g,
                until: w,
                prevUntil: y,
                nextUntil: T,
                prev: S,
                next: b,
                last: x,
                index: E,
                getList: k,
                hide: C,
                show: P,
                isArrayOrList: M,
                addClass: _,
                removeClass: $,
                appendTo: H,
                wrap: O,
                wrapAll: L,
                wrapInner: R,
                unwrap: A,
                closest: z,
                after: D,
                before: j,
                insertBefore: I,
                getScrollTop: B,
                siblings: F,
                preventDefault: U,
                isFunction: Y,
                trigger: X,
                matches: W,
                toggle: N,
                createElementFromHTML: q,
                remove: V,
                filter: function(e, t) {
                    Array.prototype.filter.call(e, t)
                },
                untilAll: Q,
                nextAll: G,
                prevAll: K,
                showError: u
            },
            function(w, k) {
                var M = k && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(k.licenseKey) || t.domain.indexOf("alvarotrigo.com") > -1,
                    O = h("html, body"),
                    I = h("html")[0],
                    Q = h("body")[0];
                if (!f(I, "fp-enabled")) {
                    var Z = {};
                    k = p({
                        menu: !1,
                        anchors: [],
                        lockAnchors: !1,
                        navigation: !1,
                        navigationPosition: "right",
                        navigationTooltips: [],
                        showActiveTooltip: !1,
                        slidesNavigation: !1,
                        slidesNavPosition: "bottom",
                        scrollBar: !1,
                        hybrid: !1,
                        css3: !0,
                        scrollingSpeed: 700,
                        autoScrolling: !0,
                        fitToSection: !0,
                        fitToSectionDelay: 1e3,
                        easing: "easeInOutCubic",
                        easingcss3: "ease",
                        loopBottom: false,
                        loopTop: false,
                        loopHorizontal: false,
                        continuousVertical: !1,
                        continuousHorizontal: !1,
                        scrollHorizontally: !1,
                        interlockedSlides: !1,
                        dragAndMove: !1,
                        offsetSections: !1,
                        resetSliders: !1,
                        fadingEffect: !1,
                        normalScrollElements: null,
                        scrollOverflow: !1,
                        scrollOverflowReset: !1,
                        scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        touchWrapper: "string" == typeof w ? h(w)[0] : w,
                        bigSectionsDestination: null,
                        keyboardScrolling: !0,
                        animateAnchor: !0,
                        recordHistory: !0,
                        controlArrows: !0,
                        controlArrowColor: "#fff",
                        verticalCentered: !0,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: !1,
                        parallax: !1,
                        parallaxOptions: {
                            type: "reveal",
                            percentage: 62,
                            property: "translate"
                        },
                        cards: !1,
                        cardsOptions: {
                            perspective: 100,
                            fadeContent: !0,
                            fadeBackground: !0
                        },
                        sectionSelector: ".section",
                        slideSelector: ".slide",
                        v2compatible: !1,
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: !0
                    }, k);
                    var J, ee, te, ie, oe = !1,
                        ne = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                        se = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                        re = "string" == typeof w ? h(w)[0] : w,
                        ae = v(),
                        le = m(),
                        ce = !1,
                        de = !0,
                        ue = !0,
                        he = [],
                        pe = {
                            m: {
                                up: !0,
                                down: !0,
                                left: !0,
                                right: !0
                            }
                        };
                    pe.k = p({}, pe.m);
                    var fe, ve, me, ge, we, ye, Te, Se, be, xe = function() {
                            var t;
                            t = e.PointerEvent ? {
                                down: "pointerdown",
                                move: "pointermove"
                            } : {
                                down: "MSPointerDown",
                                move: "MSPointerMove"
                            };
                            return t
                        }(),
                        Ee = {
                            touchmove: "ontouchmove" in e ? "touchmove" : xe.move,
                            touchstart: "ontouchstart" in e ? "touchstart" : xe.down
                        },
                        ke = !1;
                    try {
                        var Ce = Object.defineProperty({}, "passive", {
                            get: function() {
                                ke = !0
                            }
                        });
                        e.addEventListener("testPassive", null, Ce), e.removeEventListener("testPassive", null, Ce)
                    } catch (e) {}
                    var Pe, Me, _e = p({}, k),
                        $e = !1,
                        He = !0,
                        Oe = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
                    Ci(), e.fp_easings = p(e.fp_easings, {
                        easeInOutCubic: function(e, t, i, o) {
                            return (e /= o / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
                        }
                    }), re && (Z.version = "3.0.8", Z.setAutoScrolling = Ye, Z.setRecordHistory = Xe, Z.setScrollingSpeed = We, Z.setFitToSection = Ne, Z.setLockAnchors = function(e) {
                        k.lockAnchors = e
                    }, Z.setMouseWheelScrolling = qe, Z.setAllowScrolling = Ve, Z.setKeyboardScrolling = Ge, Z.moveSectionUp = Ke, Z.moveSectionDown = Ze, Z.silentMoveTo = Je, Z.moveTo = et, Z.moveSlideRight = tt, Z.moveSlideLeft = it, Z.fitToSection = mt, Z.reBuild = ot, Z.setResponsive = st, Z.getFullpageData = function() {
                        return k
                    }, Z.destroy = function(i) {
                        Ye(!1, "internal"), Ve(!0), Qe(!1), Ge(!1), _(re, "fp-destroyed"), [we, ge, ve, ye, Te, be, me].forEach((function(e) {
                            clearTimeout(e)
                        })), e.removeEventListener("scroll", vt), e.removeEventListener("hashchange", Ft), e.removeEventListener("resize", oi), t.removeEventListener("keydown", Yt), t.removeEventListener("keyup", Wt), ["click", "touchstart"].forEach((function(e) {
                            t.removeEventListener(e, rt)
                        })), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach((function(e) {
                            t.removeEventListener(e, lt, !0)
                        })), i && (bi(0), h("img[data-src], source[data-src], audio[data-src], iframe[data-src]", re).forEach((function(e) {
                            Ot(e, "src")
                        })), h("img[data-srcset]").forEach((function(e) {
                            Ot(e, "srcset")
                        })), V(h("#fp-nav, .fp-slidesNav, .fp-controlArrow")), g(h(s), {
                            height: "",
                            "background-color": "",
                            padding: ""
                        }), g(h(l), {
                            width: ""
                        }), g(re, {
                            height: "",
                            position: "",
                            "-ms-touch-action": "",
                            "touch-action": ""
                        }), g(O, {
                            overflow: "",
                            height: ""
                        }), $(I, "fp-enabled"), $(Q, "fp-responsive"), Q.className.split(/\s+/).forEach((function(e) {
                            0 === e.indexOf("fp-viewing") && $(Q, e)
                        })), h(".fp-section, .fp-slide").forEach((function(e) {
                            k.scrollOverflowHandler && k.scrollOverflow && k.scrollOverflowHandler.remove(e), $(e, "fp-table active " + o), e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")), f(e, n) && !$e && e.removeAttribute("data-anchor")
                        })), ai(re), [a, d, c].forEach((function(e) {
                            h(e, re).forEach((function(e) {
                                A(e)
                            }))
                        })), g(re, {
                            "-webkit-transition": "none",
                            transition: "none"
                        }), e.scrollTo(0, 0), [n, "fp-slide", "fp-slidesContainer"].forEach((function(e) {
                            $(h("." + e), e)
                        })))
                    }, Z.getActiveSection = function() {
                        return new $i(h(r)[0])
                    }, Z.getActiveSlide = function() {
                        return _t(h(".fp-slide.active", h(r)[0])[0])
                    }, Z.test = {
                        top: "0px",
                        translate3d: "translate3d(0px, 0px, 0px)",
                        translate3dH: function() {
                            for (var e = [], t = 0; t < h(k.sectionSelector, re).length; t++) e.push("translate3d(0px, 0px, 0px)");
                            return e
                        }(),
                        left: function() {
                            for (var e = [], t = 0; t < h(k.sectionSelector, re).length; t++) e.push(0);
                            return e
                        }(),
                        options: k,
                        setAutoScrolling: Ye
                    }, Z.shared = {
                        afterRenderActions: ft,
                        isNormalScrollElement: !1
                    }, e.fullpage_api = Z, k.$ && Object.keys(Z).forEach((function(e) {
                        k.$.fn.fullpage[e] = Z[e]
                    })), function() {
                        k.css3 && (k.css3 = function() {
                            var i, o = t.createElement("p"),
                                n = {
                                    webkitTransform: "-webkit-transform",
                                    OTransform: "-o-transform",
                                    msTransform: "-ms-transform",
                                    MozTransform: "-moz-transform",
                                    transform: "transform"
                                };
                            for (var s in o.style.display = "block", t.body.insertBefore(o, null), n) void 0 !== o.style[s] && (o.style[s] = "translate3d(1px,1px,1px)", i = e.getComputedStyle(o).getPropertyValue(n[s]));
                            return t.body.removeChild(o), void 0 !== i && i.length > 0 && "none" !== i
                        }());
                        k.scrollBar = k.scrollBar || k.hybrid,
                            function() {
                                if (!k.anchors.length) {
                                    var e = h(k.sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", re);
                                    e.length && ($e = !0, e.forEach((function(e) {
                                        k.anchors.push(e.getAttribute("data-anchor").toString())
                                    })))
                                }
                                if (!k.navigationTooltips.length) {
                                    var t = h(k.sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", re);
                                    t.length && t.forEach((function(e) {
                                        k.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                                    }))
                                }
                            }(),
                            function() {
                                g(re, {
                                    height: "100%",
                                    position: "relative"
                                }), _(re, "fullpage-wrapper"), _(I, "fp-enabled"), ae = v(), $(re, "fp-destroyed"), _(h(k.sectionSelector, re), n), _(h(k.slideSelector, re), "fp-slide");
                                for (var e = h(s), o = 0; o < e.length; o++) {
                                    var a = o,
                                        c = e[o],
                                        d = h(l, c),
                                        u = d.length;
                                    c.setAttribute("data-fp-styles", c.getAttribute("style")), ut(c, a), ht(c, a), u > 0 ? dt(c, d, u) : k.verticalCentered && di(c)
                                }
                                k.fixedElements && k.css3 && h(k.fixedElements).forEach((function(e) {
                                    Q.appendChild(e)
                                }));
                                k.navigation && function() {
                                    var e = t.createElement("div");
                                    e.setAttribute("id", "fp-nav");
                                    var o = t.createElement("ul");
                                    e.appendChild(o), H(e, Q);
                                    var n = h("#fp-nav")[0];
                                    _(n, "fp-" + k.navigationPosition), k.showActiveTooltip && _(n, "fp-show-active");
                                    for (var a = "", l = 0; l < h(s).length; l++) {
                                        var c = "";
                                        k.anchors.length && (c = k.anchors[l]), a += '<li><a href="#' + c + '"><span class="fp-sr-only">' + pt(l, "Section") + "</span><span></span></a>";
                                        var d = k.navigationTooltips[l];
                                        void 0 !== d && "" !== d && (a += '<div class="fp-tooltip fp-' + k.navigationPosition + '">' + d + "</div>"), a += "</li>"
                                    }
                                    h("ul", n)[0].innerHTML = a, g(h("#fp-nav"), {
                                        "margin-top": "-" + h("#fp-nav")[0].offsetHeight / 2 + "px"
                                    });
                                    var u = h("li", h("#fp-nav")[0])[E(h(r)[0], s)];
                                    _(h("a", u), i)
                                }();
                                void h('iframe[src*="youtube.com/embed/"]', re).forEach((function(e) {
                                    var t, i, o;
                                    i = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + i)
                                })), k.scrollOverflow && (fe = k.scrollOverflowHandler.init(k))
                            }(), Ve(!0), Qe(!0), Ye(k.autoScrolling, "internal"), si(), yi(), "complete" === t.readyState && Bt();
                        e.addEventListener("load", Bt), k.scrollOverflow || ft();
                        ! function() {
                            for (var e = 1; e < 4; e++) be = setTimeout(ct, 350 * e)
                        }()
                    }(), e.addEventListener("scroll", vt), e.addEventListener("hashchange", Ft), e.addEventListener("blur", Gt), e.addEventListener("resize", oi), t.addEventListener("keydown", Yt), t.addEventListener("keyup", Wt), ["click", "touchstart"].forEach((function(e) {
                        t.addEventListener(e, rt)
                    })), k.normalScrollElements && (["mouseenter", "touchstart"].forEach((function(e) {
                        at(e, !1)
                    })), ["mouseleave", "touchend"].forEach((function(e) {
                        at(e, !0)
                    }))));
                    var Le = !1,
                        Re = 0,
                        Ae = 0,
                        ze = 0,
                        De = 0,
                        je = 0,
                        Ie = (new Date).getTime(),
                        Be = 0,
                        Fe = 0,
                        Ue = ae;
                    return Z
                }

                function Ye(e, t) {
                    e || bi(0), ki("autoScrolling", e, t);
                    var i = h(r)[0];
                    if (k.autoScrolling && !k.scrollBar) g(O, {
                        overflow: "hidden",
                        height: "100%"
                    }), Xe(_e.recordHistory, "internal"), g(re, {
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                    }), null != i && bi(i.offsetTop);
                    else if (g(O, {
                            overflow: "visible",
                            height: "initial"
                        }), Xe(!!k.autoScrolling && _e.recordHistory, "internal"), g(re, {
                            "-ms-touch-action": "",
                            "touch-action": ""
                        }), null != i) {
                        var o = $t(i.offsetTop);
                        o.element.scrollTo(0, o.options)
                    }
                }

                function Xe(e, t) {
                    ki("recordHistory", e, t)
                }

                function We(e, t) {
                    ki("scrollingSpeed", e, t)
                }

                function Ne(e, t) {
                    ki("fitToSection", e, t)
                }

                function qe(i) {
                    i ? (! function() {
                        var i, o = "";
                        e.addEventListener ? i = "addEventListener" : (i = "attachEvent", o = "on");
                        var n = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                            s = !!ke && {
                                passive: !1
                            };
                        "DOMMouseScroll" == n ? t[i](o + "MozMousePixelScroll", xt, s) : t[i](o + n, xt, s)
                    }(), re.addEventListener("mousedown", Nt), re.addEventListener("mouseup", qt)) : (t.addEventListener ? (t.removeEventListener("mousewheel", xt, !1), t.removeEventListener("wheel", xt, !1), t.removeEventListener("MozMousePixelScroll", xt, !1)) : t.detachEvent("onmousewheel", xt), re.removeEventListener("mousedown", Nt), re.removeEventListener("mouseup", qt))
                }

                function Ve(e, t) {
                    void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                        Ei(e, t, "m")
                    })) : Ei(e, "all", "m")
                }

                function Qe(e) {
                    e ? (qe(!0), function() {
                        if (ne || se) {
                            k.autoScrolling && (Q.removeEventListener(Ee.touchmove, wt, {
                                passive: !1
                            }), Q.addEventListener(Ee.touchmove, wt, {
                                passive: !1
                            }));
                            var e = k.touchWrapper;
                            e.removeEventListener(Ee.touchstart, St), e.removeEventListener(Ee.touchmove, yt, {
                                passive: !1
                            }), e.addEventListener(Ee.touchstart, St), e.addEventListener(Ee.touchmove, yt, {
                                passive: !1
                            })
                        }
                    }()) : (qe(!1), function() {
                        if (ne || se) {
                            k.autoScrolling && (Q.removeEventListener(Ee.touchmove, yt, {
                                passive: !1
                            }), Q.removeEventListener(Ee.touchmove, wt, {
                                passive: !1
                            }));
                            var e = k.touchWrapper;
                            e.removeEventListener(Ee.touchstart, St), e.removeEventListener(Ee.touchmove, yt, {
                                passive: !1
                            })
                        }
                    }())
                }

                function Ge(e, t) {
                    void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                        Ei(e, t, "k")
                    })) : (Ei(e, "all", "k"), k.keyboardScrolling = e)
                }

                function Ke() {
                    var e = y(h(r)[0], s);
                    e || !k.loopTop && !k.continuousVertical || (e = x(h(s))), null != e && Ct(e, null, !0)
                }

                function Ze() {
                    var e = T(h(r)[0], s);
                    e || !k.loopBottom && !k.continuousVertical || (e = h(s)[0]), null != e && Ct(e, null, !1)
                }

                function Je(e, t) {
                    We(0, "internal"), et(e, t), We(_e.scrollingSpeed, "internal")
                }

                function et(e, t) {
                    var i = pi(e);
                    void 0 !== t ? fi(e, t) : null != i && Ct(i)
                }

                function tt(e) {
                    Et("right", e)
                }

                function it(e) {
                    Et("left", e)
                }

                function ot(t) {
                    if (!f(re, "fp-destroyed")) {
                        ce = !0, ae = v(), le = m();
                        for (var i = h(s), o = 0; o < i.length; ++o) {
                            var n = i[o],
                                d = h(c, n)[0],
                                u = h(l, n);
                            k.verticalCentered && g(h(a, n), {
                                height: ui(n) + "px"
                            }), g(n, {
                                height: ae + "px"
                            }), u.length > 1 && ti(d, h(".fp-slide.active", d)[0])
                        }
                        k.scrollOverflow && fe.createScrollBarForAll();
                        var p = E(h(r)[0], s);
                        p && Je(p + 1), ce = !1, Y(k.afterResize) && t && k.afterResize.call(re, e.innerWidth, e.innerHeight), Y(k.afterReBuild) && !t && k.afterReBuild.call(re)
                    }
                }

                function nt() {
                    return f(Q, "fp-responsive")
                }

                function st(e) {
                    var t = nt();
                    e ? t || (Ye(!1, "internal"), Ne(!1, "internal"), C(h("#fp-nav")), _(Q, "fp-responsive"), Y(k.afterResponsive) && k.afterResponsive.call(re, e), k.scrollOverflow && fe.createScrollBarForAll()) : t && (Ye(_e.autoScrolling, "internal"), Ne(_e.autoScrolling, "internal"), P(h("#fp-nav")), $(Q, "fp-responsive"), Y(k.afterResponsive) && k.afterResponsive.call(re, e))
                }

                function rt(e) {
                    var t = e.target;
                    t && z(t, "#fp-nav a") ? Kt.call(t, e) : W(t, ".fp-tooltip") ? Xt.call(t) : W(t, ".fp-controlArrow") ? Qt.call(t, e) : W(t, ".fp-slidesNav a") || null != z(t, ".fp-slidesNav a") ? Zt.call(t, e) : z(t, k.menu + " [data-menuanchor]") && Jt.call(t, e)
                }

                function at(e, i) {
                    t["fp_" + e] = i, t.addEventListener(e, lt, !0)
                }

                function lt(e) {
                    var i = e.type,
                        o = !1,
                        n = k.scrollOverflow,
                        s = "mouseleave" === i ? e.toElement || e.relatedTarget : e.target;
                    if (s == t || !s) return Qe(!0), void(n && k.scrollOverflowHandler.setIscroll(s, !0));
                    ("touchend" === i && (He = !1, setTimeout((function() {
                        He = !0
                    }), 800)), "mouseenter" !== i || He) && (k.normalScrollElements.split(",").forEach((function(e) {
                        if (!o) {
                            var t = W(s, e),
                                i = z(s, e);
                            (t || i) && (Z.shared.isNormalScrollElement || (Qe(!1), n && k.scrollOverflowHandler.setIscroll(s, !1)), Z.shared.isNormalScrollElement = !0, o = !0)
                        }
                    })), !o && Z.shared.isNormalScrollElement && (Qe(!0), n && k.scrollOverflowHandler.setIscroll(s, !0), Z.shared.isNormalScrollElement = !1))
                }

                function ct() {
                    var e = v(),
                        t = m();
                    ae === e && le === t || (ae = e, le = t, ot(!0))
                }

                function dt(e, o, n) {
                    var a = 100 * n,
                        l = 100 / n,
                        u = t.createElement("div");
                    u.className = "fp-slides", L(o, u);
                    var p = t.createElement("div");
                    p.className = "fp-slidesContainer", L(o, p), g(h(d, e), {
                        width: a + "%"
                    }), n > 1 && (k.controlArrows && function(e) {
                        var t = [q('<div class="fp-controlArrow fp-prev"></div>'), q('<div class="fp-controlArrow fp-next"></div>')];
                        D(h(c, e)[0], t), "#fff" !== k.controlArrowColor && (g(h(".fp-controlArrow.fp-next", e), {
                            "border-color": "transparent transparent transparent " + k.controlArrowColor
                        }), g(h(".fp-controlArrow.fp-prev", e), {
                            "border-color": "transparent " + k.controlArrowColor + " transparent transparent"
                        }));
                        k.loopHorizontal || C(h(".fp-controlArrow.fp-prev", e))
                    }(e), k.slidesNavigation && function(e, t) {
                        H(q('<div class="fp-slidesNav"><ul></ul></div>'), e);
                        var o = h(".fp-slidesNav", e)[0];
                        _(o, "fp-" + k.slidesNavPosition);
                        for (var n = 0; n < t; n++) H(q('<li><a href="#"><span class="fp-sr-only">' + pt(n, "Slide") + "</span><span></span></a></li>"), h("ul", o)[0]);
                        g(o, {
                            "margin-left": "-" + o.innerWidth / 2 + "px"
                        }), _(h("a", h("li", o)[0]), i)
                    }(e, n)), o.forEach((function(e) {
                        g(e, {
                            width: l + "%"
                        }), k.verticalCentered && di(e)
                    }));
                    var f = h(".fp-slide.active", e)[0];
                    null != f && (0 !== E(h(r), s) || 0 === E(h(r), s) && 0 !== E(f)) ? Si(f, "internal") : _(o[0], i)
                }

                function ut(e, t) {
                    t || null != h(r)[0] || _(e, i), ie = h(r)[0], g(e, {
                        height: ae + "px"
                    }), k.paddingTop && g(e, {
                        "padding-top": k.paddingTop
                    }), k.paddingBottom && g(e, {
                        "padding-bottom": k.paddingBottom
                    }), void 0 !== k.sectionsColor[t] && g(e, {
                        "background-color": k.sectionsColor[t]
                    }), void 0 !== k.anchors[t] && e.setAttribute("data-anchor", k.anchors[t])
                }

                function ht(e, t) {
                    void 0 !== k.anchors[t] && f(e, i) && li(k.anchors[t], t), k.menu && k.css3 && null != z(h(k.menu)[0], ".fullpage-wrapper") && h(k.menu).forEach((function(e) {
                        Q.appendChild(e)
                    }))
                }

                function pt(e, t) {
                    return k.navigationTooltips[e] || k.anchors[e] || t + " " + (e + 1)
                }

                function ft() {
                    var e, t, i = h(r)[0];
                    _(i, o), Rt(i), Lt(), zt(i), k.scrollOverflow && k.scrollOverflowHandler.afterLoad(), e = Ut(), t = pi(e.section), e.section && t && (void 0 === t || E(t) !== E(ie)) || !Y(k.afterLoad) || Pt("afterLoad", {
                        activeSection: i,
                        element: i,
                        direction: null,
                        anchorLink: i.getAttribute("data-anchor"),
                        sectionIndex: E(i, s)
                    }), Y(k.afterRender) && Pt("afterRender")
                }

                function vt() {
                    var e;
                    if (!k.autoScrolling || k.scrollBar) {
                        var t = B(),
                            n = function(e) {
                                var t = e > Re ? "down" : "up";
                                return Re = e, Be = e, t
                            }(t),
                            a = 0,
                            l = t + v() / 2,
                            c = Q.offsetHeight - v() === t,
                            d = h(s);
                        if (c) a = d.length - 1;
                        else if (t)
                            for (var u = 0; u < d.length; ++u) {
                                d[u].offsetTop <= l && (a = u)
                            } else a = 0;
                        if (function(e) {
                                var t = h(r)[0].offsetTop,
                                    i = t + v();
                                if ("up" == e) return i >= B() + v();
                                return t <= B()
                            }(n) && (f(h(r)[0], o) || (_(h(r)[0], o), $(F(h(r)[0]), o))), !f(e = d[a], i)) {
                            Le = !0;
                            var p, m, g = h(r)[0],
                                w = E(g, s) + 1,
                                y = ci(e),
                                T = e.getAttribute("data-anchor"),
                                S = E(e, s) + 1,
                                b = h(".fp-slide.active", e)[0],
                                x = {
                                    activeSection: g,
                                    sectionIndex: S - 1,
                                    anchorLink: T,
                                    element: e,
                                    leavingSection: w,
                                    direction: y
                                };
                            b && (m = b.getAttribute("data-anchor"), p = E(b)), ue && (_(e, i), $(F(e), i), Y(k.onLeave) && Pt("onLeave", x), Y(k.afterLoad) && Pt("afterLoad", x), jt(g), Rt(e), zt(e), li(T, S - 1), k.anchors.length && (J = T), mi(p, m, T, S)), clearTimeout(ye), ye = setTimeout((function() {
                                Le = !1
                            }), 100)
                        }
                        k.fitToSection && (clearTimeout(Te), Te = setTimeout((function() {
                            k.fitToSection && h(r)[0].offsetHeight <= ae && mt()
                        }), k.fitToSectionDelay))
                    }
                }

                function mt() {
                    ue && (ce = !0, Ct(h(r)[0]), ce = !1)
                }

                function gt(e) {
                    if (pe.m[e]) {
                        var t = "down" === e ? Ze : Ke;
                        if (k.scrollOverflow) {
                            var i = k.scrollOverflowHandler.scrollable(h(r)[0]),
                                o = "down" === e ? "bottom" : "top";
                            if (null != i) {
                                if (!k.scrollOverflowHandler.isScrolled(o, i)) return !0;
                                t()
                            } else t()
                        } else t()
                    }
                }

                function wt(e) {
                    k.autoScrolling && Tt(e) && pe.m.up && U(e)
                }

                function yt(t) {
                    var i = z(t.target, s) || h(r)[0];
                    if (Tt(t)) {
                        k.autoScrolling && U(t);
                        var o = Ti(t);
                        De = o.y, je = o.x, h(c, i).length && Math.abs(ze - je) > Math.abs(Ae - De) ? !oe && Math.abs(ze - je) > m() / 100 * k.touchSensitivity && (ze > je ? pe.m.right && tt(i) : pe.m.left && it(i)) : k.autoScrolling && ue && Math.abs(Ae - De) > e.innerHeight / 100 * k.touchSensitivity && (Ae > De ? gt("down") : De > Ae && gt("up"))
                    }
                }

                function Tt(e) {
                    return void 0 === e.pointerType || "mouse" != e.pointerType
                }

                function St(e) {
                    if (k.fitToSection && (Pe = !1), Tt(e)) {
                        var t = Ti(e);
                        Ae = t.y, ze = t.x
                    }
                }

                function bt(e, t) {
                    for (var i = 0, o = e.slice(Math.max(e.length - t, 1)), n = 0; n < o.length; n++) i += o[n];
                    return Math.ceil(i / t)
                }

                function xt(t) {
                    var i = (new Date).getTime(),
                        o = f(h(".fp-completely")[0], "fp-normal-scroll");
                    if (!pe.m.down && !pe.m.up) return U(t), !1;
                    if (k.autoScrolling && !te && !o) {
                        var n = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                            s = Math.max(-1, Math.min(1, n)),
                            r = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                            a = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !r;
                        he.length > 149 && he.shift(), he.push(Math.abs(n)), k.scrollBar && U(t);
                        var l = i - Ie;
                        if (Ie = i, l > 200 && (he = []), ue) bt(he, 10) >= bt(he, 70) && a && gt(s < 0 ? "down" : "up");
                        return !1
                    }
                    k.fitToSection && (Pe = !1)
                }

                function Et(e, t) {
                    var i = null == t ? h(r)[0] : t,
                        o = h(c, i)[0];
                    if (!(null == o || oe || h(l, o).length < 2)) {
                        var n = h(".fp-slide.active", o)[0],
                            s = null;
                        if (null == (s = "left" === e ? y(n, l) : T(n, l))) {
                            if (!k.loopHorizontal) return;
                            var a = F(n);
                            s = "left" === e ? a[a.length - 1] : a[0]
                        }
                        oe = !Z.test.isTesting, ti(o, s, e)
                    }
                }

                function kt() {
                    for (var e = h(".fp-slide.active"), t = 0; t < e.length; t++) Si(e[t], "internal")
                }

                function Ct(e, t, o) {
                    if (null != e) {
                        var n, a, l = {
                            element: e,
                            callback: t,
                            isMovementUp: o,
                            dtop: function(e) {
                                var t = e.offsetHeight,
                                    i = e.offsetTop,
                                    o = i,
                                    n = i > Be,
                                    s = o - ae + t,
                                    r = k.bigSectionsDestination;
                                return t > ae ? (n || r) && "bottom" !== r || (o = s) : (n || ce && null == b(e)) && (o = s), Be = o, o
                            }(e),
                            yMovement: ci(e),
                            anchorLink: e.getAttribute("data-anchor"),
                            sectionIndex: E(e, s),
                            activeSlide: h(".fp-slide.active", e)[0],
                            activeSection: h(r)[0],
                            leavingSection: E(h(r), s) + 1,
                            localIsResizing: ce
                        };
                        if (!(l.activeSection == e && !ce || k.scrollBar && B() === l.dtop && !f(e, "fp-auto-height"))) {
                            if (null != l.activeSlide && (n = l.activeSlide.getAttribute("data-anchor"), a = E(l.activeSlide)), !l.localIsResizing) {
                                var c = l.yMovement;
                                if (void 0 !== o && (c = o ? "up" : "down"), l.direction = c, Y(k.onLeave) && !1 === Pt("onLeave", l)) return
                            }
                            k.autoScrolling && k.continuousVertical && void 0 !== l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = function(e) {
                                    e.isMovementUp ? j(h(r)[0], G(e.activeSection, s)) : D(h(r)[0], K(e.activeSection, s).reverse());
                                    return bi(h(r)[0].offsetTop), kt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.offsetTop, e.yMovement = ci(e.element), e
                                }(l)), l.localIsResizing || jt(l.activeSection), k.scrollOverflow && k.scrollOverflowHandler.beforeLeave(), _(e, i), $(F(e), i), Rt(e), k.scrollOverflow && k.scrollOverflowHandler.onLeave(), ue = Z.test.isTesting, mi(a, n, l.anchorLink, l.sectionIndex),
                                function(e) {
                                    if (k.css3 && k.autoScrolling && !k.scrollBar) {
                                        hi("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0), k.scrollingSpeed ? (clearTimeout(ge), ge = setTimeout((function() {
                                            Ht(e)
                                        }), k.scrollingSpeed)) : Ht(e)
                                    } else {
                                        var t = $t(e.dtop);
                                        Z.test.top = -e.dtop + "px", Pi(t.element, t.options, k.scrollingSpeed, (function() {
                                            k.scrollBar ? setTimeout((function() {
                                                Ht(e)
                                            }), 30) : Ht(e)
                                        }))
                                    }
                                }(l), J = l.anchorLink, li(l.anchorLink, l.sectionIndex)
                        }
                    }
                }

                function Pt(e, t) {
                    var i, o = function(e, t) {
                        var i;
                        i = k.v2compatible ? {
                            afterRender: function() {
                                return [re]
                            },
                            onLeave: function() {
                                return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction]
                            },
                            afterLoad: function() {
                                return [t.element, t.anchorLink, t.sectionIndex + 1]
                            },
                            afterSlideLoad: function() {
                                return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex]
                            },
                            onSlideLeave: function() {
                                return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex]
                            }
                        } : {
                            afterRender: function() {
                                return {
                                    section: Mt(h(r)[0]),
                                    slide: _t(h(".fp-slide.active", h(r)[0])[0])
                                }
                            },
                            onLeave: function() {
                                return {
                                    origin: Mt(t.activeSection),
                                    destination: Mt(t.element),
                                    direction: t.direction
                                }
                            },
                            afterLoad: function() {
                                return i.onLeave()
                            },
                            afterSlideLoad: function() {
                                return {
                                    section: Mt(t.section),
                                    origin: _t(t.prevSlide),
                                    destination: _t(t.destiny),
                                    direction: t.direction
                                }
                            },
                            onSlideLeave: function() {
                                return i.afterSlideLoad()
                            }
                        };
                        return i[e]()
                    }(e, t);
                    if (k.v2compatible) {
                        if (!1 === k[e].apply(o[0], o.slice(1))) return !1
                    } else if (X(re, e, o), !1 === k[e].apply(o[Object.keys(o)[0]], (i = o, Object.keys(i).map((function(e) {
                            return i[e]
                        }))))) return !1;
                    return !0
                }

                function Mt(e) {
                    return e ? new $i(e) : null
                }

                function _t(e) {
                    return e ? new Hi(e) : null
                }

                function $t(t) {
                    var i = {};
                    return k.autoScrolling && !k.scrollBar ? (i.options = -t, i.element = h(".fullpage-wrapper")[0]) : (i.options = t, i.element = e), i
                }

                function Ht(e) {
                    ! function(e) {
                        null != e.wrapAroundElements && (e.isMovementUp ? j(h(s)[0], e.wrapAroundElements) : D(h(s)[h(s).length - 1], e.wrapAroundElements), bi(h(r)[0].offsetTop), kt())
                    }(e), Y(k.afterLoad) && !e.localIsResizing && Pt("afterLoad", e), k.scrollOverflow && k.scrollOverflowHandler.afterLoad(), e.localIsResizing || zt(e.element), _(e.element, o), $(F(e.element), o), Lt(), ue = !0, Y(e.callback) && e.callback()
                }

                function Ot(e, t) {
                    e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
                }

                function Lt() {
                    var e = h(".fp-auto-height")[0] || nt() && h(".fp-auto-height-responsive")[0];
                    k.lazyLoading && e && h(".fp-section:not(.active)").forEach((function(e) {
                        var t, i, o;
                        t = e.getBoundingClientRect(), i = t.top, o = t.bottom, (i + 2 < ae && i > 0 || o > 2 && o < ae) && Rt(e)
                    }))
                }





                function Rt(e) {
                    k.lazyLoading && h("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", It(e)).forEach((function(t) {
                        if (["src", "srcset"].forEach((function(i) {
                                var o = t.getAttribute("data-" + i);
                                null != o && o && (Ot(t, i), t.addEventListener("load", (function() {
                                    At(e)
                                })))
                            })), W(t, "source")) {
                            var i = z(t, "video, audio");
                            i && (i.load(), i.onloadeddata = function() {
                                At(e)
                            })
                        }
                    }))
                }

                function At(e) {
                    k.scrollOverflow && (clearTimeout(Me), Me = setTimeout((function() {
                        fe.createScrollBar(e)
                    }), 200))
                }

                function zt(e) {
                    var t = It(e);
                    h("video, audio", t).forEach((function(e) {
                        e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                    })), h('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) {
                        e.hasAttribute("data-autoplay") && Dt(e), e.onload = function() {
                            e.hasAttribute("data-autoplay") && Dt(e)
                        }
                    }))
                }

                function Dt(e) {
                    e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                }

                function jt(e) {
                    var t = It(e);
                    h("video, audio", t).forEach((function(e) {
                        e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                    })), h('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) {
                        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    }))
                }

                function It(e) {
                    var t = h(".fp-slide.active", e);
                    return t.length && (e = t[0]), e
                }

                function Bt() {
                    var e = Ut(),
                        t = e.section,
                        i = e.slide;
                    t && (k.animateAnchor ? fi(t, i) : Je(t, i))
                }

                function Ft() {
                    if (!Le && !k.lockAnchors) {
                        var e = Ut(),
                            t = e.section,
                            i = e.slide,
                            o = void 0 === J,
                            n = void 0 === J && void 0 === i && !oe;
                        t && t.length && (t && t !== J && !o || n || !oe && ee != i) && fi(t, i)
                    }
                }

                function Ut() {
                    var t, i, o = e.location.hash;
                    if (o.length) {
                        var n = o.replace("#", "").split("/"),
                            s = o.indexOf("#/") > -1;
                        t = s ? "/" + n[1] : decodeURIComponent(n[0]);
                        var r = s ? n[2] : n[1];
                        r && r.length && (i = decodeURIComponent(r))
                    }
                    return {
                        section: t,
                        slide: i
                    }
                }

                function Yt(e) {
                    clearTimeout(Se);
                    var i = t.activeElement,
                        o = e.keyCode;
                    if (9 === o) ! function(e) {
                        var i = e.shiftKey,
                            o = t.activeElement,
                            n = Vt(It(h(r)[0]));

                        function a(e) {
                            return U(e), n[0] ? n[0].focus() : null
                        }
                        if (function(e) {
                                var i = Vt(t),
                                    o = i.indexOf(t.activeElement),
                                    n = e.shiftKey ? o - 1 : o + 1,
                                    r = i[n],
                                    a = _t(z(r, l)),
                                    c = Mt(z(r, s));
                                return !a && !c
                            }(e)) return;
                        o ? null == z(o, ".fp-section.active,.fp-section.active .fp-slide.active") && (o = a(e)) : a(e);
                        (!i && o == n[n.length - 1] || i && o == n[0]) && U(e)
                    }(e);
                    else if (!W(i, "textarea") && !W(i, "input") && !W(i, "select") && "true" !== i.getAttribute("contentEditable") && "" !== i.getAttribute("contentEditable") && k.keyboardScrolling && k.autoScrolling) {
                        [40, 38, 32, 33, 34].indexOf(o) > -1 && U(e), te = e.ctrlKey, Se = setTimeout((function() {
                            ! function(e) {
                                var i = e.shiftKey,
                                    o = t.activeElement,
                                    n = W(o, "video") || W(o, "audio");
                                if (!ue && [37, 39].indexOf(e.keyCode) < 0) return;
                                switch (e.keyCode) {
                                    case 38:
                                    case 33:
                                        pe.k.up && Ke();
                                        break;
                                    case 32:
                                        if (i && pe.k.up && !n) {
                                            Ke();
                                            break
                                        }
                                    case 40:
                                    case 34:
                                        pe.k.down && (32 === e.keyCode && n || Ze());
                                        break;
                                    case 36:
                                        pe.k.up && et(1);
                                        break;
                                    case 35:
                                        pe.k.down && et(h(s).length);
                                        break;
                                    case 37:
                                        pe.k.left && it();
                                        break;
                                    case 39:
                                        pe.k.right && tt();
                                        break;
                                    default:
                                        ;
                                }
                            }(e)
                        }), 150)
                    }
                }

                function Xt() {
                    X(S(this), "click")
                }

                function Wt(e) {
                    de && (te = e.ctrlKey)
                }

                function Nt(e) {
                    2 == e.which && (Fe = e.pageY, re.addEventListener("mousemove", ei))
                }

                function qt(e) {
                    2 == e.which && re.removeEventListener("mousemove", ei)
                }

                function Vt(e) {
                    return [].slice.call(h('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', e)).filter((function(e) {
                        return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                    }))
                }

                function Qt() {
                    var e = z(this, s);
                    f(this, "fp-prev") ? pe.m.left && it(e) : pe.m.right && tt(e)
                }

                function Gt() {
                    de = !1, te = !1
                }

                function Kt(e) {
                    U(e);
                    var t = E(z(this, "#fp-nav li"));
                    Ct(h(s)[t])
                }

                function Zt(e) {
                    U(e);
                    var t = h(c, z(this, s))[0];
                    ti(t, h(l, t)[E(z(this, "li"))])
                }

                function Jt(e) {
                    !h(k.menu)[0] || !k.lockAnchors && k.anchors.length || (U(e), et(this.getAttribute("data-menuanchor")))
                }

                function ei(e) {
                    k.autoScrolling && (ue && (e.pageY < Fe && pe.m.up ? Ke() : e.pageY > Fe && pe.m.down && Ze()), Fe = e.pageY)
                }

                function ti(e, t, o) {
                    var n = z(e, s),
                        r = {
                            slides: e,
                            destiny: t,
                            direction: o,
                            destinyPos: {
                                left: t.offsetLeft
                            },
                            slideIndex: E(t),
                            section: n,
                            sectionIndex: E(n, s),
                            anchorLink: n.getAttribute("data-anchor"),
                            slidesNav: h(".fp-slidesNav", n)[0],
                            slideAnchor: wi(t),
                            prevSlide: h(".fp-slide.active", n)[0],
                            prevSlideIndex: E(h(".fp-slide.active", n)[0]),
                            localIsResizing: ce
                        };
                    r.xMovement = function(e, t) {
                        if (e == t) return "none";
                        if (e > t) return "left";
                        return "right"
                    }(r.prevSlideIndex, r.slideIndex), r.direction = r.direction ? r.direction : r.xMovement, r.localIsResizing || (ue = !1), k.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && Y(k.onSlideLeave) && !1 === Pt("onSlideLeave", r) ? oe = !1 : (_(t, i), $(F(t), i), r.localIsResizing || (jt(r.prevSlide), Rt(t)), !k.loopHorizontal && k.controlArrows && (N(h(".fp-controlArrow.fp-prev", n), 0 !== r.slideIndex), N(h(".fp-controlArrow.fp-next", n), null != b(t))), f(n, i) && !r.localIsResizing && mi(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), function(e, t, i) {
                        var o = t.destinyPos;
                        if (k.css3) {
                            var n = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                            Z.test.translate3dH[t.sectionIndex] = n, g(ri(h(d, e)), xi(n)), we = setTimeout((function() {
                                i && ii(t)
                            }), k.scrollingSpeed)
                        } else Z.test.left[t.sectionIndex] = Math.round(o.left), Pi(e, Math.round(o.left), k.scrollingSpeed, (function() {
                            i && ii(t)
                        }))
                    }(e, r, !0))
                }

                function ii(e) {
                    var t, o;
                    t = e.slidesNav, o = e.slideIndex, k.slidesNavigation && null != t && ($(h(".active", t), i), _(h("a", h("li", t)[o]), i)), e.localIsResizing || (Y(k.afterSlideLoad) && Pt("afterSlideLoad", e), ue = !0, zt(e.destiny)), oe = !1
                }

                function oi() {
                    clearTimeout(ve), ve = setTimeout((function() {
                        for (var e = 0; e < 4; e++) me = setTimeout(ni, 200 * e)
                    }), 200)
                }

                function ni() {
                    if (si(), ne) {
                        var e = t.activeElement;
                        if (!W(e, "textarea") && !W(e, "input") && !W(e, "select")) {
                            var i = v();
                            Math.abs(i - Ue) > 20 * Math.max(Ue, i) / 100 && (ot(!0), Ue = i)
                        }
                    } else ct()
                }

                function si() {
                    var t = k.responsive || k.responsiveWidth,
                        i = k.responsiveHeight,
                        o = t && e.innerWidth < t,
                        n = i && e.innerHeight < i;
                    t && i ? st(o || n) : t ? st(o) : i && st(n)
                }

                function ri(e) {
                    var t = "all " + k.scrollingSpeed + "ms " + k.easingcss3;
                    return $(e, "fp-notransition"), g(e, {
                        "-webkit-transition": t,
                        transition: t
                    })
                }

                function ai(e) {
                    return _(e, "fp-notransition")
                }

                function li(e, t) {
                    var o;
                    o = e, h(k.menu).forEach((function(e) {
                            k.menu && null != e && ($(h(".active", e), i), _(h('[data-menuanchor="' + o + '"]', e), i))
                        })),
                        function(e, t) {
                            k.navigation && null != h("#fp-nav")[0] && ($(h(".active", h("#fp-nav")[0]), i), _(e ? h('a[href="#' + e + '"]', h("#fp-nav")[0]) : h("a", h("li", h("#fp-nav")[0])[t]), i))
                        }(e, t)
                }

                function ci(e) {
                    var t = E(h(r)[0], s),
                        i = E(e, s);
                    return t == i ? "none" : t > i ? "up" : "down"
                }

                function di(e) {
                    if (!f(e, "fp-table")) {
                        var i = t.createElement("div");
                        i.className = "fp-tableCell", i.style.height = ui(e) + "px", _(e, "fp-table"), R(e, i)
                    }
                }

                function ui(e) {
                    var t = ae;
                    if (k.paddingTop || k.paddingBottom) {
                        var i = e;
                        f(i, n) || (i = z(e, s));
                        var o = parseInt(getComputedStyle(i)["padding-top"]) + parseInt(getComputedStyle(i)["padding-bottom"]);
                        t = ae - o
                    }
                    return t
                }

                function hi(e, t) {
                    t ? ri(re) : ai(re), g(re, xi(e)), Z.test.translate3d = e, setTimeout((function() {
                        $(re, "fp-notransition")
                    }), 10)
                }

                function pi(e) {
                    var t = h('.fp-section[data-anchor="' + e + '"]', re)[0];
                    if (!t) {
                        var i = void 0 !== e ? e - 1 : 0;
                        t = h(s)[i]
                    }
                    return t
                }

                function fi(e, t) {
                    var o = pi(e);
                    if (null != o) {
                        var n = function(e, t) {
                            var i = h('.fp-slide[data-anchor="' + e + '"]', t)[0];
                            return null == i && (e = void 0 !== e ? e : 0, i = h(l, t)[e]), i
                        }(t, o);
                        wi(o) === J || f(o, i) ? vi(n) : Ct(o, (function() {
                            vi(n)
                        }))
                    }
                }

                function vi(e) {
                    null != e && ti(z(e, c), e)
                }

                function mi(e, t, i, o) {
                    var n = "";
                    k.anchors.length && !k.lockAnchors && (e ? (null != i && (n = i), null == t && (t = e), ee = t, gi(n + "/" + t)) : null != e ? (ee = t, gi(i)) : gi(i)), yi()
                }

                function gi(t) {
                    if (k.recordHistory) location.hash = t;
                    else if (ne || se) e.history.replaceState(void 0, void 0, "#" + t);
                    else {
                        var i = e.location.href.split("#")[0];
                        e.location.replace(i + "#" + t)
                    }
                }

                function wi(e) {
                    if (!e) return null;
                    var t = e.getAttribute("data-anchor"),
                        i = E(e);
                    return null == t && (t = i), t
                }

                function yi() {
                    var e = h(r)[0],
                        t = h(".fp-slide.active", e)[0],
                        i = wi(e),
                        o = wi(t),
                        n = String(i);
                    t && (n = n + "-" + o), n = n.replace("/", "-").replace("#", "");
                    var s = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
                    Q.className = Q.className.replace(s, ""), _(Q, "fp-viewing-" + n)
                }

                function Ti(e) {
                    var t = [];
                    return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, se && Tt(e) && k.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
                }

                function Si(e, t) {
                    We(0, "internal"), void 0 !== t && (ce = !0), ti(z(e, c), e), void 0 !== t && (ce = !1), We(_e.scrollingSpeed, "internal")
                }

                function bi(e) {
                    var t = Math.round(e);
                    if (k.css3 && k.autoScrolling && !k.scrollBar) hi("translate3d(0px, -" + t + "px, 0px)", !1);
                    else if (k.autoScrolling && !k.scrollBar) g(re, {
                        top: -t + "px"
                    }), Z.test.top = -t + "px";
                    else {
                        var i = $t(t);
                        Mi(i.element, i.options)
                    }
                }

                function xi(e) {
                    return {
                        "-webkit-transform": e,
                        "-moz-transform": e,
                        "-ms-transform": e,
                        transform: e
                    }
                }

                function Ei(e, t, i) {
                    "all" !== t ? pe[i][t] = e : Object.keys(pe[i]).forEach((function(t) {
                        pe[i][t] = e
                    }))
                }

                function ki(e, t, i) {
                    k[e] = t, "internal" !== i && (_e[e] = t)
                }

                function Ci() {
                    var e = k.licenseKey,
                        t = "font-size: 15px;background:yellow;";
                    M ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (u("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), u("error", "https://github.com/alvarotrigo/fullPage.js#options.")), f(I, "fp-enabled") ? u("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (k.continuousVertical && (k.loopTop || k.loopBottom) && (k.continuousVertical = !1, u("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !k.scrollOverflow || !k.scrollBar && k.autoScrolling || u("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !k.continuousVertical || !k.scrollBar && k.autoScrolling || (k.continuousVertical = !1, u("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), k.scrollOverflow && null == k.scrollOverflowHandler && (k.scrollOverflow = !1, u("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), Oe.forEach((function(e) {
                        k[e] && u("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e)
                    })), k.anchors.forEach((function(e) {
                        var t = [].slice.call(h("[name]")).filter((function(t) {
                                return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                            })),
                            i = [].slice.call(h("[id]")).filter((function(t) {
                                return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                            }));
                        if (i.length || t.length) {
                            u("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                            var o = i.length ? "id" : "name";
                            (i.length || t.length) && u("error", '"' + e + '" is is being used by another element `' + o + "` property")
                        }
                    })))
                }

                function Pi(t, i, o, n) {
                    var s = function(t) {
                            return t.self != e && f(t, "fp-slides") ? t.scrollLeft : !k.autoScrolling || k.scrollBar ? B() : t.offsetTop
                        }(t),
                        r = i - s,
                        a = 0;
                    Pe = !0;
                    var l = function() {
                        if (Pe) {
                            var c = i;
                            a += 20, o && (c = e.fp_easings[k.easing](a, s, r, o)), Mi(t, c), a < o ? setTimeout(l, 20) : void 0 !== n && n()
                        } else a < o && n()
                    };
                    l()
                }

                function Mi(t, i) {
                    !k.autoScrolling || k.scrollBar || t.self != e && f(t, "fp-slides") ? t.self != e && f(t, "fp-slides") ? t.scrollLeft = i : t.scrollTo(0, i) : t.style.top = i + "px"
                }

                function _i(e, t) {
                    this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = E(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index
                }

                function $i(e) {
                    _i.call(this, e, s)
                }

                function Hi(e) {
                    _i.call(this, e, l)
                }
                Ci()
            }
    })), window.jQuery && window.fullpage && function(e, t) {
        "use strict";
        e && t ? e.fn.fullpage = function(i) {
            i = e.extend({}, i, {
                $: e
            });
            new t(this[0], i)
        } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
    }(window.jQuery, window.fullpage)
}, function(e, t, i) {
    var o, n, s;
    ! function(r) {




        "use strict";
        n = [i(0)], void 0 === (s = "function" == typeof(o = function(e) {
            var t = window.Slick || {};
            (i = 0, t = function(t, o) {
                var n, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }).prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, o) {
                var n = this;
                if ("boolean" == typeof i) o = i, i = null;
                else if (i < 0 || i >= n.slideCount) return !1;
                n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : o ? e(t).insertBefore(n.$slides.eq(i)) : e(t).insertAfter(n.$slides.eq(i)) : !0 === o ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each((function(t, i) {
                    e(i).attr("data-slick-index", t)
                })), n.$slidesCache = n.$slides, n.reinit()
            }, t.prototype.animateHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }, t.prototype.animateSlide = function(t, i) {
                var o = {},
                    n = this;
                n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                    left: t
                }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
                    top: t
                }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), e({
                    animStart: n.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: n.options.speed,
                    easing: n.options.easing,
                    step: function(e) {
                        e = Math.ceil(e), !1 === n.options.vertical ? (o[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(o))
                    },
                    complete: function() {
                        i && i.call()
                    }
                })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? o[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(o), i && setTimeout((function() {
                    n.disableTransition(), i.call()
                }), n.options.speed))
            }, t.prototype.getNavTarget = function() {
                var t = this.options.asNavFor;
                return t && null !== t && (t = e(t).not(this.$slider)), t
            }, t.prototype.asNavFor = function(t) {
                var i = this.getNavTarget();
                null !== i && "object" == typeof i && i.each((function() {
                    var i = e(this).slick("getSlick");
                    i.unslicked || i.slideHandler(t, !0)
                }))
            }, t.prototype.applyTransition = function(e) {
                var t = this,
                    i = {};
                !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
            }, t.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }, t.prototype.autoPlayClear = function() {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer)
            }, t.prototype.autoPlayIterator = function() {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
            }, t.prototype.buildArrows = function() {
                var t = this;
                !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, t.prototype.buildDots = function() {
                var t, i, o = this;
                if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
                    for (o.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1) i.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
                    o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
                }
            }, t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, i) {
                    e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
                })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
            }, t.prototype.buildRows = function() {
                var e, t, i, o, n, s, r, a = this;
                if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 0) {
                    for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), e = 0; e < n; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var d = e * r + (t * a.options.slidesPerRow + i);
                                s.get(d) && c.appendChild(s.get(d))
                            }
                            l.appendChild(c)
                        }
                        o.appendChild(l)
                    }
                    a.$slider.empty().append(o), a.$slider.children().children().children().css({
                        width: 100 / a.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, t.prototype.checkResponsive = function(t, i) {
                var o, n, s, r = this,
                    a = !1,
                    l = r.$slider.width(),
                    c = window.innerWidth || e(window).width();
                if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                    for (o in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
                    null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = n), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
                }
            }, t.prototype.changeSlide = function(t, i) {
                var o, n, s = this,
                    r = e(t.currentTarget);
                switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                    case "previous":
                        n = 0 === o ? s.options.slidesToScroll : s.options.slidesToShow - o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, i);
                        break;
                    case "next":
                        n = 0 === o ? s.options.slidesToScroll : o, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, i);
                        break;
                    case "index":
                        var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                        s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, t.prototype.checkNavigable = function(e) {
                var t, i;
                if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
                else
                    for (var o in t) {
                        if (e < t[o]) {
                            e = i;
                            break
                        }
                        i = t[o]
                    }
                return e
            }, t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.cleanUpSlideEvents = function() {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.cleanUpRows = function() {
                var e, t = this;
                t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
            }, t.prototype.clickHandler = function(e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
            }, t.prototype.destroy = function(t) {
                var i = this;
                i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                    e(this).attr("style", e(this).data("originalStyling"))
                })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
            }, t.prototype.disableTransition = function(e) {
                var t = this,
                    i = {};
                i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
            }, t.prototype.fadeSlide = function(e, t) {
                var i = this;
                !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                    zIndex: i.options.zIndex
                }), i.$slides.eq(e).animate({
                    opacity: 1
                }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: i.options.zIndex
                }), t && setTimeout((function() {
                    i.disableTransition(e), t.call()
                }), i.options.speed))
            }, t.prototype.fadeSlideOut = function(e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }))
            }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                var t = this;
                null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
            }, t.prototype.focusHandler = function() {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
                    i.stopImmediatePropagation();
                    var o = e(this);
                    setTimeout((function() {
                        t.options.pauseOnFocus && (t.focussed = o.is(":focus"), t.autoPlay())
                    }), 0)
                }))
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                return this.currentSlide
            }, t.prototype.getDotCount = function() {
                var e = this,
                    t = 0,
                    i = 0,
                    o = 0;
                if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++o;
                    else
                        for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else if (!0 === e.options.centerMode) o = e.slideCount;
                else if (e.options.asNavFor)
                    for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return o - 1
            }, t.prototype.getLeft = function(e) {
                var t, i, o, n, s = this,
                    r = 0;
                return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? n = -1.5 : 1 === s.options.slidesToShow && (n = -2)), r = i * s.options.slidesToShow * n), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (s.$list.width() - o.outerWidth()) / 2)), t
            }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                return this.options[e]
            }, t.prototype.getNavigableIndexes = function() {
                var e, t = this,
                    i = 0,
                    o = 0,
                    n = [];
                for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) n.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return n
            }, t.prototype.getSlick = function() {
                return this
            }, t.prototype.getSlideCount = function() {
                var t, i, o = this;
                return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(n, s) {
                    if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * o.swipeLeft) return t = s, !1
                })), Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }, t.prototype.init = function(t) {
                var i = this;
                e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
            }, t.prototype.initADA = function() {
                var t = this,
                    i = Math.ceil(t.slideCount / t.options.slidesToShow),
                    o = t.getNavigableIndexes().filter((function(e) {
                        return e >= 0 && e < t.slideCount
                    }));
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i) {
                    var n = o.indexOf(i);
                    if (e(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + t.instanceUid + i,
                            tabindex: -1
                        }), -1 !== n) {
                        var s = "slick-slide-control" + t.instanceUid + n;
                        e("#" + s).length && e(this).attr({
                            "aria-describedby": s
                        })
                    }
                })), t.$dots.attr("role", "tablist").find("li").each((function(n) {
                    var s = o[n];
                    e(this).attr({
                        role: "presentation"
                    }), e(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + n,
                        "aria-controls": "slick-slide" + t.instanceUid + s,
                        "aria-label": n + 1 + " of " + i,
                        "aria-selected": null,
                        tabindex: "-1"
                    })
                })).eq(t.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end());
                for (var n = t.currentSlide, s = n + t.options.slidesToShow; n < s; n++) t.options.focusOnChange ? t.$slides.eq(n).attr({
                    tabindex: "0"
                }) : t.$slides.eq(n).removeAttr("tabindex");
                t.activateADA()
            }, t.prototype.initArrowEvents = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
            }, t.prototype.initDotEvents = function() {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.initSlideEvents = function() {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
            }, t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
            }, t.prototype.initUI = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
            }, t.prototype.keyHandler = function(e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                    data: {
                        message: !0 === t.options.rtl ? "next" : "previous"
                    }
                }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                    data: {
                        message: !0 === t.options.rtl ? "previous" : "next"
                    }
                }))
            }, t.prototype.lazyLoad = function() {
                var t, i, o, n = this;

                function s(t) {
                    e("img[data-lazy]", t).each((function() {
                        var t = e(this),
                            i = e(this).attr("data-lazy"),
                            o = e(this).attr("data-srcset"),
                            s = e(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                            r = document.createElement("img");
                        r.onload = function() {
                            t.animate({
                                opacity: 0
                            }, 100, (function() {
                                o && (t.attr("srcset", o), s && t.attr("sizes", s)), t.attr("src", i).animate({
                                    opacity: 1
                                }, 200, (function() {
                                    t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                })), n.$slider.trigger("lazyLoaded", [n, t, i])
                            }))
                        }, r.onerror = function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, i])
                        }, r.src = i
                    }))
                }
                if (!0 === n.options.centerMode ? !0 === n.options.infinite ? o = (i = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (i = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), o = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, o = Math.ceil(i + n.options.slidesToShow), !0 === n.options.fade && (i > 0 && i--, o <= n.slideCount && o++)), t = n.$slider.find(".slick-slide").slice(i, o), "anticipated" === n.options.lazyLoad)
                    for (var r = i - 1, a = o, l = n.$slider.find(".slick-slide"), c = 0; c < n.options.slidesToScroll; c++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(l.eq(r))).add(l.eq(a)), r--, a++;
                s(t), n.slideCount <= n.options.slidesToShow ? s(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? s(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && s(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
            }, t.prototype.loadSlider = function() {
                var e = this;
                e.setPosition(), e.$slideTrack.css({
                    opacity: 1
                }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
            }, t.prototype.next = t.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, t.prototype.orientationChange = function() {
                this.checkResponsive(), this.setPosition()
            }, t.prototype.pause = t.prototype.slickPause = function() {
                this.autoPlayClear(), this.paused = !0
            }, t.prototype.play = t.prototype.slickPlay = function() {
                var e = this;
                e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
            }, t.prototype.postSlide = function(t) {
                var i = this;
                i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
            }, t.prototype.prev = t.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, t.prototype.preventDefault = function(e) {
                e.preventDefault()
            }, t.prototype.progressiveLazyLoad = function(t) {
                t = t || 1;
                var i, o, n, s, r, a = this,
                    l = e("img[data-lazy]", a.$slider);
                l.length ? (i = l.first(), o = i.attr("data-lazy"), n = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                    n && (i.attr("srcset", n), s && i.attr("sizes", s)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, o]), a.progressiveLazyLoad()
                }, r.onerror = function() {
                    t < 3 ? setTimeout((function() {
                        a.progressiveLazyLoad(t + 1)
                    }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad())
                }, r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
            }, t.prototype.refresh = function(t) {
                var i, o, n = this;
                o = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > o && (n.currentSlide = o), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
                    currentSlide: i
                }), n.init(), t || n.changeSlide({
                    data: {
                        message: "index",
                        index: i
                    }
                }, !1)
            }, t.prototype.registerBreakpoints = function() {
                var t, i, o, n = this,
                    s = n.options.responsive || null;
                if ("array" === e.type(s) && s.length) {
                    for (t in n.respondTo = n.options.respondTo || "window", s)
                        if (o = n.breakpoints.length - 1, s.hasOwnProperty(t)) {
                            for (i = s[t].breakpoint; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                            n.breakpoints.push(i), n.breakpointSettings[i] = s[t].settings
                        }
                    n.breakpoints.sort((function(e, t) {
                        return n.options.mobileFirst ? e - t : t - e
                    }))
                }
            }, t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
            }, t.prototype.resize = function() {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                }), 50))
            }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
                var o = this;
                if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
                o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
            }, t.prototype.setCSS = function(e) {
                var t, i, o = this,
                    n = {};
                !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", n[o.positionProp] = e, !1 === o.transformsEnabled ? o.$slideTrack.css(n) : (n = {}, !1 === o.cssTransitions ? (n[o.animType] = "translate(" + t + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack.css(n)))
            }, t.prototype.setDimensions = function() {
                var e = this;
                !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, t.prototype.setFade = function() {
                var t, i = this;
                i.$slides.each((function(o, n) {
                    t = i.slideWidth * o * -1, !0 === i.options.rtl ? e(n).css({
                        position: "relative",
                        right: t,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0
                    }) : e(n).css({
                        position: "relative",
                        left: t,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0
                    })
                })), i.$slides.eq(i.currentSlide).css({
                    zIndex: i.options.zIndex - 1,
                    opacity: 1
                })
            }, t.prototype.setHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function() {
                var t, i, o, n, s, r = this,
                    a = !1;
                if ("object" === e.type(arguments[0]) ? (o = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[o] = n;
                else if ("multiple" === s) e.each(o, (function(e, t) {
                    r.options[e] = t
                }));
                else if ("responsive" === s)
                    for (i in n)
                        if ("array" !== e.type(r.options.responsive)) r.options.responsive = [n[i]];
                        else {
                            for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === n[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                            r.options.responsive.push(n[i])
                        }
                a && (r.unload(), r.reinit())
            }, t.prototype.setPosition = function() {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
            }, t.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
            }, t.prototype.setSlideClasses = function(e) {
                var t, i, o, n, s = this;
                if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
                    var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                    t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e, i.slice(o - t + 1 + r, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
                } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
            }, t.prototype.setupInfinite = function() {
                var t, i, o, n = this;
                if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
                    for (o = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - o; t -= 1) i = t - 1, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < o + n.slideCount; t += 1) i = t, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                    n.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                        e(this).attr("id", "")
                    }))
                }
            }, t.prototype.interrupt = function(e) {
                e || this.autoPlay(), this.interrupted = e
            }, t.prototype.selectHandler = function(t) {
                var i = this,
                    o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    n = parseInt(o.attr("data-slick-index"));
                n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
            }, t.prototype.slideHandler = function(e, t, i) {
                var o, n, s, r, a, l, c = this;
                if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                    if (!1 === t && c.asNavFor(e), o = e, a = c.getLeft(o), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, (function() {
                        c.postSlide(o)
                    })) : c.postSlide(o));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, (function() {
                    c.postSlide(o)
                })) : c.postSlide(o));
                else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = o < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), s = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(n, (function() {
                        c.postSlide(n)
                    }))) : c.postSlide(n), void c.animateHeight();
                    !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
                        c.postSlide(n)
                    })) : c.postSlide(n)
                }
            }, t.prototype.startLoad = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
            }, t.prototype.swipeDirection = function() {
                var e, t, i, o, n = this;
                return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === n.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
            }, t.prototype.swipeEnd = function(e) {
                var t, i, o = this;
                if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
                if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
                if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                    switch (i = o.swipeDirection()) {
                        case "left":
                        case "down":
                            t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                    }
                    "vertical" != i && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
                } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
            }, t.prototype.swipeHandler = function(e) {
                var t = this;
                if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e)
                }
            }, t.prototype.swipeMove = function(e) {
                var t, i, o, n, s, r, a = this;
                return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + o * n : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
            }, t.prototype.swipeStart = function(e) {
                var t, i = this;
                if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
            }, t.prototype.unload = function() {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, t.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy()
            }, t.prototype.updateArrows = function() {
                var e = this;
                Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, t.prototype.updateDots = function() {
                var e = this;
                null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
            }, t.prototype.visibility = function() {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
            }, e.fn.slick = function() {
                var e, i, o = this,
                    n = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1),
                    r = o.length;
                for (e = 0; e < r; e++)
                    if ("object" == typeof n || void 0 === n ? o[e].slick = new t(o[e], n) : i = o[e].slick[n].apply(o[e].slick, s), void 0 !== i) return i;
                return o
            };
            var i
        }) ? o.apply(t, n) : o) || (e.exports = s)
    }()
}, function(e, t, i) {
    "use strict";
    var o, n, s;
    "function" == typeof Symbol && Symbol.iterator;
    n = [i(0)], void 0 === (s = "function" == typeof(o = function(e) {
        var t, i, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            n = "onwheel" in window.document || 9 <= window.document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            s = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var r = o.length; r;) e.event.fixHooks[o[--r]] = e.event.mouseHooks;
        var a = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var t = n.length; t;) this.addEventListener(n[--t], l, !1);
                else this.onmousewheel = l;
                e.data(this, "mousewheel-line-height", a.getLineHeight(this)), e.data(this, "mousewheel-page-height", a.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = n.length; t;) this.removeEventListener(n[--t], l, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var i = e(t),
                    o = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return o.length || (o = e("body")), parseInt(o.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };

        function l(o) {
            var n, r = o || window.event,
                l = s.call(arguments, 1),
                u = 0,
                h = 0,
                p = 0;
            if ((o = e.event.fix(r)).type = "mousewheel", "detail" in r && (p = -1 * r.detail), "wheelDelta" in r && (p = r.wheelDelta), "wheelDeltaY" in r && (p = r.wheelDeltaY), "wheelDeltaX" in r && (h = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (h = -1 * p, p = 0), u = 0 === p ? h : p, "deltaY" in r && (u = p = -1 * r.deltaY), "deltaX" in r && (h = r.deltaX, 0 === p && (u = -1 * h)), 0 !== p || 0 !== h) {
                if (1 === r.deltaMode) {
                    var f = e.data(this, "mousewheel-line-height");
                    u *= f, p *= f, h *= f
                } else if (2 === r.deltaMode) {
                    var v = e.data(this, "mousewheel-page-height");
                    u *= v, p *= v, h *= v
                }
                if (n = Math.max(Math.abs(p), Math.abs(h)), (!i || n < i) && d(r, i = n) && (i /= 40), d(r, n) && (u /= 40, h /= 40, p /= 40), u = Math[1 <= u ? "floor" : "ceil"](u / i), h = Math[1 <= h ? "floor" : "ceil"](h / i), p = Math[1 <= p ? "floor" : "ceil"](p / i), a.settings.normalizeOffset && this.getBoundingClientRect) {
                    var m = this.getBoundingClientRect();
                    o.offsetX = o.clientX - m.left, o.offsetY = o.clientY - m.top
                }
                return o.deltaX = h, o.deltaY = p, o.deltaFactor = i, o.deltaMode = 0, l.unshift(o, u, h, p), t && window.clearTimeout(t), t = window.setTimeout(c, 200), (e.event.dispatch || e.event.handle).apply(this, l)
            }
        }

        function c() {
            i = null
        }

        function d(e, t) {
            return a.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
        }
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.on("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.off("mousewheel", e)
            }
        })
    }) ? o.apply(t, n) : o) || (e.exports = s)
}, function(e, t, i) {































    "use strict";
    (function(i) {
        var o, n, s, r, a, l, c, d, u, h, p, f, v, m, g, w, y, T, S, b, x, E, k, C, P, M, _, $, H, O, L = e.exports && void 0 !== i ? i : window;
        /*!
         * VERSION: 0.7.0
         * DATE: 2019-02-07
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
         * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
         * This work is subject to the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        a = (r = L).GreenSockGlobals || r, l = function(e) {
                var t, i = e.split("."),
                    o = a;
                for (t = 0; t < i.length; t++) o[i[t]] = o = o[i[t]] || {};
                return o
            }("com.greensock.utils"), c = L.document || {}, d = void 0 !== r ? r : c.defaultView || {
                getComputedStyle: function() {}
            }, u = function(e) {
                return d.getComputedStyle(e)
            }, h = /([A-Z])/g, p = function(e, t, i, o) {
                var n;
                return (i = i || u(e)) ? n = (e = i.getPropertyValue(t.replace(h, "-$1").toLowerCase())) || i.length ? e : i[t] : e.currentStyle && (n = (i = e.currentStyle)[t]), o ? n : parseInt(n, 10) || 0
            }, f = function(e) {
                return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
            }, v = function(e, t) {
                for (var i, o = t.length; --o > -1;)
                    if (i = t[o], e.substr(0, i.length) === i) return i.length
            }, m = /(?:\r|\n|\t\t)/g, g = /(?:\s\s+)/g, w = 127462, y = 127487, T = function(e) {
                return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 65536
            }, S = " style='position:relative;display:inline-block;" + (c.all && !c.addEventListener ? "*display:inline;*zoom:1;'" : "'"), b = function(e, t) {
                var i = -1 !== (e = e || "").indexOf("++"),
                    o = 1;
                return i && (e = e.split("++").join("")),
                    function() {
                        return "<" + t + S + (e ? " class='" + e + (i ? o++ : "") + "'>" : ">")
                    }
            }, x = l.SplitText = a.SplitText = function(e, t) {
                if ("string" == typeof e && (e = x.selector(e)), !e) throw "cannot split a null element.";
                this.elements = f(e) ? function(e) {
                    var t, i, o, n = [],
                        s = e.length;
                    for (t = 0; s > t; t++)
                        if (i = e[t], f(i))
                            for (o = i.length, o = 0; o < i.length; o++) n.push(i[o]);
                        else n.push(i);
                    return n
                }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
            }, E = function e(t, i, o) {
                var n = t.nodeType;
                if (1 === n || 9 === n || 11 === n)
                    for (t = t.firstChild; t; t = t.nextSibling) e(t, i, o);
                else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(i).join(o))
            }, k = function(e, t) {
                for (var i = t.length; --i > -1;) e.push(t[i])
            }, C = function(e) {
                var t, i = [],
                    o = e.length;
                for (t = 0; t !== o; i.push(e[t++]));
                return i
            }, P = function(e, t, i) {
                for (var o; e && e !== t;) {
                    if (o = e._next || e.nextSibling) return o.textContent.charAt(0) === i;
                    e = e.parentNode || e._parent
                }
                return !1
            }, M = function e(t) {
                var i, o, n = C(t.childNodes),
                    s = n.length;
                for (i = 0; s > i; i++)(o = n[i])._isSplit ? e(o) : (i && 3 === o.previousSibling.nodeType ? o.previousSibling.nodeValue += 3 === o.nodeType ? o.nodeValue : o.firstChild.nodeValue : 3 !== o.nodeType && t.insertBefore(o.firstChild, o), t.removeChild(o))
            }, _ = function(e, t, i, o, n, s, r) {
                var a, l, d, h, f, v, m, g, w, y, T, S, b = u(e),
                    x = p(e, "paddingLeft", b),
                    C = -999,
                    _ = p(e, "borderBottomWidth", b) + p(e, "borderTopWidth", b),
                    $ = p(e, "borderLeftWidth", b) + p(e, "borderRightWidth", b),
                    H = p(e, "paddingTop", b) + p(e, "paddingBottom", b),
                    O = p(e, "paddingLeft", b) + p(e, "paddingRight", b),
                    L = .2 * p(e, "fontSize"),
                    R = p(e, "textAlign", b, !0),
                    A = [],
                    z = [],
                    D = [],
                    j = t.wordDelimiter || " ",
                    I = t.tag ? t.tag : t.span ? "span" : "div",
                    B = t.type || t.split || "chars,words,lines",
                    F = n && -1 !== B.indexOf("lines") ? [] : null,
                    U = -1 !== B.indexOf("words"),
                    Y = -1 !== B.indexOf("chars"),
                    X = "absolute" === t.position || !0 === t.absolute,
                    W = t.linesClass,
                    N = -1 !== (W || "").indexOf("++"),
                    q = [];
                for (N && (W = W.split("++").join("")), d = (l = e.getElementsByTagName("*")).length, f = [], a = 0; d > a; a++) f[a] = l[a];
                if (F || X)
                    for (a = 0; d > a; a++)((v = (h = f[a]).parentNode === e) || X || Y && !U) && (S = h.offsetTop, F && v && Math.abs(S - C) > L && ("BR" !== h.nodeName || 0 === a) && (m = [], F.push(m), C = S), X && (h._x = h.offsetLeft, h._y = S, h._w = h.offsetWidth, h._h = h.offsetHeight), F && ((h._isSplit && v || !Y && v || U && v || !U && h.parentNode.parentNode === e && !h.parentNode._isSplit) && (m.push(h), h._x -= x, P(h, e, j) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === a) && F.push([])));
                for (a = 0; d > a; a++) v = (h = f[a]).parentNode === e, "BR" !== h.nodeName ? (X && (w = h.style, U || v || (h._x += h.parentNode._x, h._y += h.parentNode._y), w.left = h._x + "px", w.top = h._y + "px", w.position = "absolute", w.display = "block", w.width = h._w + 1 + "px", w.height = h._h + "px"), !U && Y ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && q.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), f.splice(a--, 1), d--) : v || (S = !h.nextSibling && P(h.parentNode, e, j), h.parentNode._parent && h.parentNode._parent.appendChild(h), S && h.parentNode.appendChild(c.createTextNode(" ")), "span" === I && (h.style.display = "inline"), A.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? z.push(h) : Y && !h._isSplit && ("span" === I && (h.style.display = "inline"), A.push(h))) : F || X ? (h.parentNode && h.parentNode.removeChild(h), f.splice(a--, 1), d--) : U || e.appendChild(h);
                for (a = q.length; --a > -1;) q[a].parentNode.removeChild(q[a]);
                if (F) {
                    for (X && (y = c.createElement(I), e.appendChild(y), T = y.offsetWidth + "px", S = y.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(y)), w = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                    for (g = " " === j && (!X || !U && !Y), a = 0; a < F.length; a++) {
                        for (m = F[a], (y = c.createElement(I)).style.cssText = "display:block;text-align:" + R + ";position:" + (X ? "absolute;" : "relative;"), W && (y.className = W + (N ? a + 1 : "")), D.push(y), d = m.length, l = 0; d > l; l++) "BR" !== m[l].nodeName && (h = m[l], y.appendChild(h), g && h._wordEnd && y.appendChild(c.createTextNode(" ")), X && (0 === l && (y.style.top = h._y + "px", y.style.left = x + S + "px"), h.style.top = "0px", S && (h.style.left = h._x - S + "px")));
                        0 === d ? y.innerHTML = "&nbsp;" : U || Y || (M(y), E(y, String.fromCharCode(160), " ")), X && (y.style.width = T, y.style.height = h._h + "px"), e.appendChild(y)
                    }
                    e.style.cssText = w
                }
                X && (r > e.clientHeight && (e.style.height = r - H + "px", e.clientHeight < r && (e.style.height = r + _ + "px")), s > e.clientWidth && (e.style.width = s - O + "px", e.clientWidth < s && (e.style.width = s + $ + "px"))), k(i, A), U && k(o, z), k(n, D)
            }, $ = function(e, t, i, o) {
                var n, s, r, a, l, d, u, h, p, f, S = t.tag ? t.tag : t.span ? "span" : "div",
                    b = -1 !== (t.type || t.split || "chars,words,lines").indexOf("chars"),
                    x = "absolute" === t.position || !0 === t.absolute,
                    k = t.wordDelimiter || " ",
                    C = " " !== k ? "" : x ? "&#173; " : " ",
                    P = "</" + S + ">",
                    M = !0,
                    _ = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : v : null,
                    $ = c.createElement("div"),
                    H = e.parentNode;
                for (H.insertBefore($, e), $.textContent = e.nodeValue, H.removeChild(e), u = -1 !== (n = function e(t) {
                        var i = t.nodeType,
                            o = "";
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) o += e(t)
                        } else if (3 === i || 4 === i) return t.nodeValue;
                        return o
                    }(e = $)).indexOf("<"), !1 !== t.reduceWhiteSpace && (n = n.replace(g, " ").replace(m, "")), u && (n = n.split("<").join("{{LT}}")), l = n.length, s = (" " === n.charAt(0) ? C : "") + i(), r = 0; l > r; r++)
                    if (d = n.charAt(r), _ && (f = _(n.substr(r), t.specialChars))) d = n.substr(r, f || 1), s += b && " " !== d ? o() + d + "</" + S + ">" : d, r += f - 1;
                    else if (d === k && n.charAt(r - 1) !== k && r) {
                    for (s += M ? P : "", M = !1; n.charAt(r + 1) === k;) s += C, r++;
                    r === l - 1 ? s += C : ")" !== n.charAt(r + 1) && (s += C + i(), M = !0)
                } else "{" === d && "{{LT}}" === n.substr(r, 6) ? (s += b ? o() + "{{LT}}</" + S + ">" : "{{LT}}", r += 5) : d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || n.charCodeAt(r + 1) >= 65024 && n.charCodeAt(r + 1) <= 65039 ? (h = T(n.substr(r, 2)), p = T(n.substr(r + 2, 2)), a = h >= w && y >= h && p >= w && y >= p || p >= 127995 && 127999 >= p ? 4 : 2, s += b && " " !== d ? o() + n.substr(r, a) + "</" + S + ">" : n.substr(r, a), r += a - 1) : s += b && " " !== d ? o() + d + "</" + S + ">" : d;
                e.outerHTML = s + (M ? P : ""), u && E(H, "{{LT}}", "<")
            }, H = function e(t, i, o, n) {
                var s, r, a = C(t.childNodes),
                    l = a.length,
                    c = "absolute" === i.position || !0 === i.absolute;
                if (3 !== t.nodeType || l > 1) {
                    for (i.absolute = !1, s = 0; l > s; s++)(3 !== (r = a[s]).nodeType || /\S+/.test(r.nodeValue)) && (c && 3 !== r.nodeType && "inline" === p(r, "display", null, !0) && (r.style.display = "inline-block", r.style.position = "relative"), r._isSplit = !0, e(r, i, o, n));
                    return i.absolute = c, void(t._isSplit = !0)
                }
                $(t, i, o, n)
            }, (O = x.prototype).split = function(e) {
                this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var t, i, o, n = this.elements.length, s = e.tag ? e.tag : e.span ? "span" : "div", r = b(e.wordsClass, s), a = b(e.charsClass, s); --n > -1;) o = this.elements[n], this._originals[n] = o.innerHTML, t = o.clientHeight, i = o.clientWidth, H(o, e, r, a), _(o, e, this.chars, this.words, this.lines, i, t);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, O.revert = function() {
                if (!this._originals) throw "revert() call wasn't scoped properly.";
                for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
                return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, x.selector = r.$ || r.jQuery || function(e) {
                var t = r.$ || r.jQuery;
                return t ? (x.selector = t, t(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            }, x.version = "0.7.0",
            function(i) {
                var r = function() {
                    return (L.GreenSockGlobals || L).SplitText
                };
                e.exports ? e.exports = r() : (n = [], void 0 === (s = "function" == typeof(o = r) ? o.apply(t, n) : o) || (e.exports = s))
            }()
    }).call(this, i(19))
}, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function(e, t, i) {
    "use strict";
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(e) {
        var t = {};

        function i(o) {
            if (t[o]) return t[o].exports;
            var n = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        i.m = e, i.c = t, i.d = function(e, t, o) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == (void 0 === e ? "undefined" : o(e)) && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var s in e) i.d(n, s, function(t) {
                    return e[t]
                }.bind(null, s));
            return n
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 17)
    }([function(e, t, i) {
        var o = {
            "./BlendShader.js": 1,
            "./BurfaMaskShader.js": 2,
            "./ColorShader.js": 3,
            "./CopyShader.js": 4,
            "./FilmShader.js": 5,
            "./HorizontalBlurShader.js": 6,
            "./LuminosityHighPassShader.js": 7,
            "./RGBShiftShader.js": 8,
            "./VerticalBlurShader.js": 9
        };

        function n(e) {
            var t = s(e);
            return i(t)
        }

        function s(e) {
            if (!i.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }, n.resolve = s, e.exports = n, n.id = 0
    }, function(e, t) {
        THREE.BlendShader = {
            uniforms: {
                tDiffuse1: {
                    value: null
                },
                tDiffuse2: {
                    value: null
                },
                mixRatio: {
                    value: .5
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform float opacity;", "uniform float mixRatio;", "uniform sampler2D tDiffuse1;", "uniform sampler2D tDiffuse2;", "varying vec2 vUv;", "void main() {", "vec4 texel1 = texture2D( tDiffuse1, vUv );", "vec4 texel2 = texture2D( tDiffuse2, vUv );", "gl_FragColor = opacity * mix( texel1, texel2, mixRatio );", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.BurfaMaskShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                color: {
                    value: new THREE.Color(855309)
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform vec3 color;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "float maskFactor = smoothstep(1.0, 0.88, vUv.y) * smoothstep(0.0, 0.12, vUv.y)  * smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);", "gl_FragColor = vec4( mix(color.rgb, texel.rgb, maskFactor), 1.0 );", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.ColorShader = {
            uniforms: {
                color: {
                    value: new THREE.Color(16777215)
                }
            },
            vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform vec3 color;", "void main() {", "gl_FragColor = vec4( color, 1.0 );", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.CopyShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.FilmShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                time: {
                    value: 0
                },
                nIntensity: {
                    value: .5
                },
                sIntensity: {
                    value: .05
                },
                sCount: {
                    value: 4096
                },
                grayscale: {
                    value: 1
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["#include <common>", "uniform float time;", "uniform float nIntensity;", "uniform float sIntensity;", "uniform float sCount;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 cTextureScreen = texture2D( tDiffuse, vUv );", "float dx = rand( vUv + time );", "vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );", "vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );", "cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;", "cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );", "if ( (cTextureScreen.r + cTextureScreen.g + cTextureScreen.b) > 0.15 ) {", "gl_FragColor =  vec4( cResult, cTextureScreen.a );", "}", "else {", "gl_FragColor =  cTextureScreen;", "}", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.HorizontalBlurShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                h: {
                    value: 1 / 512
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float h;", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "float xy = h * 1.2;", "float mix = (vUv.x) * 15.0;", "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h * mix, vUv.y - 4.0 * xy ) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h * mix, vUv.y - 3.0 * xy ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h * mix, vUv.y - 2.0 * xy ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h * mix, vUv.y - 1.0 * xy) ) * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;", "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h * mix, vUv.y + 1.0 * xy ) ) * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h * mix, vUv.y + 2.0 * xy ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h * mix, vUv.y + 3.0 * xy ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h * mix, vUv.y + 4.0 * xy ) ) * 0.051;", "gl_FragColor = sum;", "gl_FragColor.rgb *= 1.1;", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.LuminosityHighPassShader = {
            shaderID: "luminosityHighPass",
            uniforms: {
                tDiffuse: {
                    value: null
                },
                luminosityThreshold: {
                    value: 1
                },
                smoothWidth: {
                    value: 1
                },
                defaultColor: {
                    value: new THREE.Color(0)
                },
                defaultOpacity: {
                    value: 0
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;", "uniform float defaultOpacity;", "uniform float luminosityThreshold;", "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );", "float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );", "gl_FragColor = mix( outputColor, texel, alpha );", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.RGBShiftShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                amount: {
                    value: .005
                },
                angle: {
                    value: 0
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float amount;", "uniform float angle;", "varying vec2 vUv;", "void main() {", "vec2 offset = amount * vec2( cos(angle), sin(angle));", "vec4 cr = texture2D(tDiffuse, vUv + offset);", "vec4 cga = texture2D(tDiffuse, vUv);", "vec4 cb = texture2D(tDiffuse, vUv - offset);", "gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);", "}"].join("\n")
        }
    }, function(e, t) {
        THREE.VerticalBlurShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                v: {
                    value: 1 / 512
                },
                x: {
                    value: 15
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float v;", "uniform float x;", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "float mix = (1.0 - vUv.x) * x * v;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 5.0 * mix) ) * 0.021;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * mix) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * mix ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * mix ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * mix ) ) * 0.1531 * 0.9;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * mix ) ) * 0.1531 * 0.9;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * mix ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * mix ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * mix ) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 5.0 * mix ) ) * 0.021;", "gl_FragColor = sum;", "}"].join("\n")
        }
    }, function(e, t, i) {
        var o = {
            "./EffectComposer.js": 11,
            "./FilmPass.js": 12,
            "./RenderPass.js": 13,
            "./SavePass.js": 14,
            "./ShaderPass.js": 15,
            "./UnrealBloomPass.js": 16
        };

        function n(e) {
            var t = s(e);
            return i(t)
        }

        function s(e) {
            if (!i.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }
        n.keys = function() {
            return Object.keys(o)
        }, n.resolve = s, e.exports = n, n.id = 10
    }, function(e, t) {
        var i, o, n;
        THREE.EffectComposer = function(e, t) {
            if (this.renderer = e, void 0 === t) {
                var i = {
                        minFilter: THREE.LinearFilter,
                        magFilter: THREE.LinearFilter,
                        format: THREE.RGBAFormat,
                        stencilBuffer: !1
                    },
                    o = e.getSize(new THREE.Vector2);
                this._pixelRatio = e.getPixelRatio(), this._width = o.width, this._height = o.height, (t = new THREE.WebGLRenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, i)).texture.name = "EffectComposer.rt1"
            } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
            this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"), void 0 === THREE.ShaderPass && console.error("THREE.EffectComposer relies on THREE.ShaderPass"), this.copyPass = new THREE.ShaderPass(THREE.CopyShader), this.clock = new THREE.Clock
        }, Object.assign(THREE.EffectComposer.prototype, {
            swapBuffers: function() {
                var e = this.readBuffer;
                this.readBuffer = this.writeBuffer, this.writeBuffer = e
            },
            addPass: function(e) {
                this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            },
            insertPass: function(e, t) {
                this.passes.splice(t, 0, e)
            },
            isLastEnabledPass: function(e) {
                for (var t = e + 1; t < this.passes.length; t++)
                    if (this.passes[t].enabled) return !1;
                return !0
            },
            render: function(e) {
                void 0 === e && (e = this.clock.getDelta());
                var t, i, o = this.renderer.getRenderTarget(),
                    n = !1,
                    s = this.passes.length;
                for (i = 0; i < s; i++)
                    if (!1 !== (t = this.passes[i]).enabled) {
                        if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), t.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), t.needsSwap) {
                            if (n) {
                                var r = this.renderer.getContext(),
                                    a = this.renderer.state.buffers.stencil;
                                a.setFunc(r.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), a.setFunc(r.EQUAL, 1, 4294967295)
                            }
                            this.swapBuffers()
                        }
                        void 0 !== THREE.MaskPass && (t instanceof THREE.MaskPass ? n = !0 : t instanceof THREE.ClearMaskPass && (n = !1))
                    }
                this.renderer.setRenderTarget(o)
            },
            reset: function(e) {
                if (void 0 === e) {
                    var t = this.renderer.getSize(new THREE.Vector2);
                    this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                }
                this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
            },
            setSize: function(e, t) {
                this._width = e, this._height = t;
                var i = this._width * this._pixelRatio,
                    o = this._height * this._pixelRatio;
                this.renderTarget1.setSize(i, o), this.renderTarget2.setSize(i, o);
                for (var n = 0; n < this.passes.length; n++) this.passes[n].setSize(i, o)
            },
            setPixelRatio: function(e) {
                this._pixelRatio = e, this.setSize(this._width, this._height)
            }
        }), THREE.Pass = function() {
            this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
        }, Object.assign(THREE.Pass.prototype, {
            setSize: function() {},
            render: function() {
                console.error("THREE.Pass: .render() must be implemented in derived pass.")
            }
        }), THREE.Pass.FullScreenQuad = (i = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), o = new THREE.PlaneBufferGeometry(2, 2), n = function(e) {
            this._mesh = new THREE.Mesh(o, e)
        }, Object.defineProperty(n.prototype, "material", {
            get: function() {
                return this._mesh.material
            },
            set: function(e) {
                this._mesh.material = e
            }
        }), Object.assign(n.prototype, {
            render: function(e) {
                e.render(this._mesh, i)
            }
        }), n)
    }, function(e, t) {
        THREE.FilmPass = function(e, t, i, o) {
            THREE.Pass.call(this), void 0 === THREE.FilmShader && console.error("THREE.FilmPass relies on THREE.FilmShader");
            var n = THREE.FilmShader;
            this.uniforms = THREE.UniformsUtils.clone(n.uniforms), this.material = new THREE.ShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader
            }), void 0 !== o && (this.uniforms.grayscale.value = o), void 0 !== e && (this.uniforms.nIntensity.value = e), void 0 !== t && (this.uniforms.sIntensity.value = t), void 0 !== i && (this.uniforms.sCount.value = i), this.fsQuad = new THREE.Pass.FullScreenQuad(this.material)
        }, THREE.FilmPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
            constructor: THREE.FilmPass,
            render: function(e, t, i, o) {
                this.uniforms.tDiffuse.value = i.texture, this.uniforms.time.value += o, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(), this.fsQuad.render(e))
            }
        })
    }, function(e, t) {
        THREE.RenderPass = function(e, t, i, o, n) {
            THREE.Pass.call(this), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = o, this.clearAlpha = void 0 !== n ? n : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1
        }, THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
            constructor: THREE.RenderPass,
            render: function(e, t, i) {
                var o, n, s = e.autoClear;
                e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial, this.clearColor && (o = e.getClearColor().getHex(), n = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : i), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(o, n), this.scene.overrideMaterial = null, e.autoClear = s
            }
        })
    }, function(e, t) {
        THREE.SavePass = function(e) {
            THREE.Pass.call(this), void 0 === THREE.CopyShader && console.error("THREE.SavePass relies on THREE.CopyShader");
            var t = THREE.CopyShader;
            this.textureID = "tDiffuse", this.uniforms = THREE.UniformsUtils.clone(t.uniforms), this.material = new THREE.ShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: t.vertexShader,
                fragmentShader: t.fragmentShader
            }), this.renderTarget = e, void 0 === this.renderTarget && (this.renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBFormat,
                stencilBuffer: !1
            }), this.renderTarget.texture.name = "SavePass.rt"), this.needsSwap = !1, this.fsQuad = new THREE.Pass.FullScreenQuad(this.material)
        }, THREE.SavePass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
            constructor: THREE.SavePass,
            render: function(e, t, i) {
                this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), e.setRenderTarget(this.renderTarget), this.clear && e.clear(), this.fsQuad.render(e)
            }
        })
    }, function(e, t) {
        THREE.ShaderPass = function(e, t) {
            THREE.Pass.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof THREE.ShaderMaterial ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.material = new THREE.ShaderMaterial({
                defines: Object.assign({}, e.defines),
                uniforms: this.uniforms,
                vertexShader: e.vertexShader,
                fragmentShader: e.fragmentShader
            })), this.fsQuad = new THREE.Pass.FullScreenQuad(this.material)
        }, THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
            constructor: THREE.ShaderPass,
            render: function(e, t, i) {
                this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e))
            }
        })
    }, function(e, t) {
        THREE.UnrealBloomPass = function(e, t, i, o) {
            THREE.Pass.call(this), this.strength = void 0 !== t ? t : 1, this.radius = i, this.threshold = o, this.resolution = void 0 !== e ? new THREE.Vector2(e.x, e.y) : new THREE.Vector2(256, 256), this.clearColor = new THREE.Color(0, 0, 0);
            var n = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            };
            this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
            var s = Math.round(this.resolution.x / 2),
                r = Math.round(this.resolution.y / 2);
            this.renderTargetBright = new THREE.WebGLRenderTarget(s, r, n), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
            for (var a = 0; a < this.nMips; a++) {
                var l = new THREE.WebGLRenderTarget(s, r, n);
                l.texture.name = "UnrealBloomPass.h" + a, l.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(l);
                var c = new THREE.WebGLRenderTarget(s, r, n);
                c.texture.name = "UnrealBloomPass.v" + a, c.texture.generateMipmaps = !1, this.renderTargetsVertical.push(c), s = Math.round(s / 2), r = Math.round(r / 2)
            }
            void 0 === THREE.LuminosityHighPassShader && console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");
            var d = THREE.LuminosityHighPassShader;
            this.highPassUniforms = THREE.UniformsUtils.clone(d.uniforms), this.highPassUniforms.luminosityThreshold.value = o, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new THREE.ShaderMaterial({
                uniforms: this.highPassUniforms,
                vertexShader: d.vertexShader,
                fragmentShader: d.fragmentShader,
                defines: {}
            }), this.separableBlurMaterials = [];
            var u = [3, 5, 7, 9, 11];
            for (s = Math.round(this.resolution.x / 2), r = Math.round(this.resolution.y / 2), a = 0; a < this.nMips; a++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[a])), this.separableBlurMaterials[a].uniforms.texSize.value = new THREE.Vector2(s, r), s = Math.round(s / 2), r = Math.round(r / 2);
            this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = .1, this.compositeMaterial.needsUpdate = !0, this.compositeMaterial.uniforms.bloomFactors.value = [1, .8, .6, .4, .2], this.bloomTintColors = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, void 0 === THREE.CopyShader && console.error("THREE.UnrealBloomPass relies on THREE.CopyShader");
            var h = THREE.CopyShader;
            this.copyUniforms = THREE.UniformsUtils.clone(h.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new THREE.ShaderMaterial({
                uniforms: this.copyUniforms,
                vertexShader: h.vertexShader,
                fragmentShader: h.fragmentShader,
                blending: THREE.AdditiveBlending,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            }), this.enabled = !0, this.needsSwap = !1, this.oldClearColor = new THREE.Color, this.oldClearAlpha = 1, this.basic = new THREE.MeshBasicMaterial, this.fsQuad = new THREE.Pass.FullScreenQuad(null)
        }, THREE.UnrealBloomPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
            constructor: THREE.UnrealBloomPass,
            dispose: function() {
                for (var e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
                for (e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
                this.renderTargetBright.dispose()
            },
            setSize: function(e, t) {
                var i = Math.round(e / 2),
                    o = Math.round(t / 2);
                this.renderTargetBright.setSize(i, o);
                for (var n = 0; n < this.nMips; n++) this.renderTargetsHorizontal[n].setSize(i, o), this.renderTargetsVertical[n].setSize(i, o), this.separableBlurMaterials[n].uniforms.texSize.value = new THREE.Vector2(i, o), i = Math.round(i / 2), o = Math.round(o / 2)
            },
            render: function(e, t, i, o, n) {
                this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha();
                var s = e.autoClear;
                e.autoClear = !1, e.setClearColor(this.clearColor, 0), n && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = i.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = i.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
                for (var r = this.renderTargetBright, a = 0; a < this.nMips; a++) this.fsQuad.material = this.separableBlurMaterials[a], this.separableBlurMaterials[a].uniforms.colorTexture.value = r.texture, this.separableBlurMaterials[a].uniforms.direction.value = THREE.UnrealBloomPass.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[a]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[a].uniforms.colorTexture.value = this.renderTargetsHorizontal[a].texture, this.separableBlurMaterials[a].uniforms.direction.value = THREE.UnrealBloomPass.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[a]), e.clear(), this.fsQuad.render(e), r = this.renderTargetsVertical[a];
                this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, n && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(i), this.fsQuad.render(e)), e.setClearColor(this.oldClearColor, this.oldClearAlpha), e.autoClear = s
            },
            getSeperableBlurMaterial: function(e) {
                return new THREE.ShaderMaterial({
                    defines: {
                        KERNEL_RADIUS: e,
                        SIGMA: e
                    },
                    uniforms: {
                        colorTexture: {
                            value: null
                        },
                        texSize: {
                            value: new THREE.Vector2(.5, .5)
                        },
                        direction: {
                            value: new THREE.Vector2(.5, .5)
                        }
                    },
                    vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                    fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"
                })
            },
            getCompositeMaterial: function(e) {
                return new THREE.ShaderMaterial({
                    defines: {
                        NUM_MIPS: e
                    },
                    uniforms: {
                        blurTexture1: {
                            value: null
                        },
                        blurTexture2: {
                            value: null
                        },
                        blurTexture3: {
                            value: null
                        },
                        blurTexture4: {
                            value: null
                        },
                        blurTexture5: {
                            value: null
                        },
                        dirtTexture: {
                            value: null
                        },
                        bloomStrength: {
                            value: 1
                        },
                        bloomFactors: {
                            value: null
                        },
                        bloomTintColors: {
                            value: null
                        },
                        bloomRadius: {
                            value: 0
                        }
                    },
                    vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                    fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"
                })
            }
        }), THREE.UnrealBloomPass.BlurDirectionX = new THREE.Vector2(1, 0), THREE.UnrealBloomPass.BlurDirectionY = new THREE.Vector2(0, 1)
    }, function(e, t, i) {
        function o() {
            window.initialOrientation = "undefined"
        }

        function n() {
            window.addEventListener("deviceorientation", s, !1), window.addEventListener("orientationchange", o, !1)
        }

        function s(e) {
            var t = e.alpha,
                i = e.beta,
                o = e.gamma;
            "undefined" == initialOrientation && (window.initialOrientation = {
                alpha: t,
                beta: i,
                gamma: o
            }), t -= initialOrientation.alpha, i -= initialOrientation.beta, o -= initialOrientation.gamma, t = THREE.Math.degToRad(t), i = THREE.Math.degToRad(i), o = THREE.Math.degToRad(o), group_lines.rotation.reorder("YXZ"), 0 == u() ? d(group_lines.quaternion, i + Math.PI / 2, -t, -o, 0) : 90 == u() ? d(group_lines.quaternion, o + Math.PI / 2, -i, t, 0) : -90 == u() ? d(group_lines.quaternion, o + Math.PI / 2, -i, -t, 0) : 180 == u() && d(group_lines.quaternion, i + Math.PI / 2, -t, o, 0)
        }
        i.r(t), window.initialOrientation = "undefined";
        var r, a, l, c, d = (r = new THREE.Vector3(0, 0, 1), a = new THREE.Euler, l = new THREE.Quaternion, c = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)), function(e, t, i, o, n) {
            a.set(t, i, o, "YXZ"), e.setFromEuler(a), e.multiply(c), e.multiply(l.setFromAxisAngle(r, -n))
        });

        function u() {
            return window.orientation || (window.innerWidth > window.innerHeight ? 90 : 0)
        }
        var h = [
                [],
                [],
                [-.5773502691896257, .5773502691896257],
                [0, -.7745966692414834, .7745966692414834],
                [-.33998104358485626, .33998104358485626, -.8611363115940526, .8611363115940526],
                [0, -.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664],
                [.6612093864662645, -.6612093864662645, -.2386191860831969, .2386191860831969, -.932469514203152, .932469514203152],
                [0, .4058451513773972, -.4058451513773972, -.7415311855993945, .7415311855993945, -.9491079123427585, .9491079123427585],
                [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363],
                [0, -.8360311073266358, .8360311073266358, -.9681602395076261, .9681602395076261, -.3242534234038089, .3242534234038089, -.6133714327005904, .6133714327005904],
                [-.14887433898163122, .14887433898163122, -.4333953941292472, .4333953941292472, -.6794095682990244, .6794095682990244, -.8650633666889845, .8650633666889845, -.9739065285171717, .9739065285171717],
                [0, -.26954315595234496, .26954315595234496, -.5190961292068118, .5190961292068118, -.7301520055740494, .7301520055740494, -.8870625997680953, .8870625997680953, -.978228658146057, .978228658146057],
                [-.1252334085114689, .1252334085114689, -.3678314989981802, .3678314989981802, -.5873179542866175, .5873179542866175, -.7699026741943047, .7699026741943047, -.9041172563704749, .9041172563704749, -.9815606342467192, .9815606342467192],
                [0, -.2304583159551348, .2304583159551348, -.44849275103644687, .44849275103644687, -.6423493394403402, .6423493394403402, -.8015780907333099, .8015780907333099, -.9175983992229779, .9175983992229779, -.9841830547185881, .9841830547185881],
                [-.10805494870734367, .10805494870734367, -.31911236892788974, .31911236892788974, -.5152486363581541, .5152486363581541, -.6872929048116855, .6872929048116855, -.827201315069765, .827201315069765, -.9284348836635735, .9284348836635735, -.9862838086968123, .9862838086968123],
                [0, -.20119409399743451, .20119409399743451, -.3941513470775634, .3941513470775634, -.5709721726085388, .5709721726085388, -.7244177313601701, .7244177313601701, -.8482065834104272, .8482065834104272, -.937273392400706, .937273392400706, -.9879925180204854, .9879925180204854],
                [-.09501250983763744, .09501250983763744, -.2816035507792589, .2816035507792589, -.45801677765722737, .45801677765722737, -.6178762444026438, .6178762444026438, -.755404408355003, .755404408355003, -.8656312023878318, .8656312023878318, -.9445750230732326, .9445750230732326, -.9894009349916499, .9894009349916499],
                [0, -.17848418149584785, .17848418149584785, -.3512317634538763, .3512317634538763, -.5126905370864769, .5126905370864769, -.6576711592166907, .6576711592166907, -.7815140038968014, .7815140038968014, -.8802391537269859, .8802391537269859, -.9506755217687678, .9506755217687678, -.9905754753144174, .9905754753144174],
                [-.0847750130417353, .0847750130417353, -.2518862256915055, .2518862256915055, -.41175116146284263, .41175116146284263, -.5597708310739475, .5597708310739475, -.6916870430603532, .6916870430603532, -.8037049589725231, .8037049589725231, -.8926024664975557, .8926024664975557, -.9558239495713977, .9558239495713977, -.9915651684209309, .9915651684209309],
                [0, -.16035864564022537, .16035864564022537, -.31656409996362983, .31656409996362983, -.46457074137596094, .46457074137596094, -.600545304661681, .600545304661681, -.7209661773352294, .7209661773352294, -.8227146565371428, .8227146565371428, -.9031559036148179, .9031559036148179, -.96020815213483, .96020815213483, -.9924068438435844, .9924068438435844],
                [-.07652652113349734, .07652652113349734, -.22778585114164507, .22778585114164507, -.37370608871541955, .37370608871541955, -.5108670019508271, .5108670019508271, -.636053680726515, .636053680726515, -.7463319064601508, .7463319064601508, -.8391169718222188, .8391169718222188, -.912234428251326, .912234428251326, -.9639719272779138, .9639719272779138, -.9931285991850949, .9931285991850949],
                [0, -.1455618541608951, .1455618541608951, -.2880213168024011, .2880213168024011, -.4243421202074388, .4243421202074388, -.5516188358872198, .5516188358872198, -.6671388041974123, .6671388041974123, -.7684399634756779, .7684399634756779, -.8533633645833173, .8533633645833173, -.9200993341504008, .9200993341504008, -.9672268385663063, .9672268385663063, -.9937521706203895, .9937521706203895],
                [-.06973927331972223, .06973927331972223, -.20786042668822127, .20786042668822127, -.34193582089208424, .34193582089208424, -.469355837986757, .469355837986757, -.5876404035069116, .5876404035069116, -.6944872631866827, .6944872631866827, -.7878168059792081, .7878168059792081, -.8658125777203002, .8658125777203002, -.926956772187174, .926956772187174, -.9700604978354287, .9700604978354287, -.9942945854823992, .9942945854823992],
                [0, -.1332568242984661, .1332568242984661, -.26413568097034495, .26413568097034495, -.3903010380302908, .3903010380302908, -.5095014778460075, .5095014778460075, -.6196098757636461, .6196098757636461, -.7186613631319502, .7186613631319502, -.8048884016188399, .8048884016188399, -.8767523582704416, .8767523582704416, -.9329710868260161, .9329710868260161, -.9725424712181152, .9725424712181152, -.9947693349975522, .9947693349975522],
                [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213]
            ],
            p = [
                [],
                [],
                [1, 1],
                [.8888888888888888, .5555555555555556, .5555555555555556],
                [.6521451548625461, .6521451548625461, .34785484513745385, .34785484513745385],
                [.5688888888888889, .47862867049936647, .47862867049936647, .23692688505618908, .23692688505618908],
                [.3607615730481386, .3607615730481386, .46791393457269104, .46791393457269104, .17132449237917036, .17132449237917036],
                [.4179591836734694, .3818300505051189, .3818300505051189, .27970539148927664, .27970539148927664, .1294849661688697, .1294849661688697],
                [.362683783378362, .362683783378362, .31370664587788727, .31370664587788727, .22238103445337448, .22238103445337448, .10122853629037626, .10122853629037626],
                [.3302393550012598, .1806481606948574, .1806481606948574, .08127438836157441, .08127438836157441, .31234707704000286, .31234707704000286, .26061069640293544, .26061069640293544],
                [.29552422471475287, .29552422471475287, .26926671930999635, .26926671930999635, .21908636251598204, .21908636251598204, .1494513491505806, .1494513491505806, .06667134430868814, .06667134430868814],
                [.2729250867779006, .26280454451024665, .26280454451024665, .23319376459199048, .23319376459199048, .18629021092773426, .18629021092773426, .1255803694649046, .1255803694649046, .05566856711617366, .05566856711617366],
                [.24914704581340277, .24914704581340277, .2334925365383548, .2334925365383548, .20316742672306592, .20316742672306592, .16007832854334622, .16007832854334622, .10693932599531843, .10693932599531843, .04717533638651183, .04717533638651183],
                [.2325515532308739, .22628318026289723, .22628318026289723, .2078160475368885, .2078160475368885, .17814598076194574, .17814598076194574, .13887351021978725, .13887351021978725, .09212149983772845, .09212149983772845, .04048400476531588, .04048400476531588],
                [.2152638534631578, .2152638534631578, .2051984637212956, .2051984637212956, .18553839747793782, .18553839747793782, .15720316715819355, .15720316715819355, .12151857068790319, .12151857068790319, .08015808715976021, .08015808715976021, .03511946033175186, .03511946033175186],
                [.2025782419255613, .19843148532711158, .19843148532711158, .1861610000155622, .1861610000155622, .16626920581699392, .16626920581699392, .13957067792615432, .13957067792615432, .10715922046717194, .10715922046717194, .07036604748810812, .07036604748810812, .03075324199611727, .03075324199611727],
                [.1894506104550685, .1894506104550685, .18260341504492358, .18260341504492358, .16915651939500254, .16915651939500254, .14959598881657674, .14959598881657674, .12462897125553388, .12462897125553388, .09515851168249279, .09515851168249279, .062253523938647894, .062253523938647894, .027152459411754096, .027152459411754096],
                [.17944647035620653, .17656270536699264, .17656270536699264, .16800410215645004, .16800410215645004, .15404576107681028, .15404576107681028, .13513636846852548, .13513636846852548, .11188384719340397, .11188384719340397, .08503614831717918, .08503614831717918, .0554595293739872, .0554595293739872, .02414830286854793, .02414830286854793],
                [.1691423829631436, .1691423829631436, .16427648374583273, .16427648374583273, .15468467512626524, .15468467512626524, .14064291467065065, .14064291467065065, .12255520671147846, .12255520671147846, .10094204410628717, .10094204410628717, .07642573025488905, .07642573025488905, .0497145488949698, .0497145488949698, .02161601352648331, .02161601352648331],
                [.1610544498487837, .15896884339395434, .15896884339395434, .15276604206585967, .15276604206585967, .1426067021736066, .1426067021736066, .12875396253933621, .12875396253933621, .11156664554733399, .11156664554733399, .09149002162245, .09149002162245, .06904454273764123, .06904454273764123, .0448142267656996, .0448142267656996, .019461788229726478, .019461788229726478],
                [.15275338713072584, .15275338713072584, .14917298647260374, .14917298647260374, .14209610931838204, .14209610931838204, .13168863844917664, .13168863844917664, .11819453196151841, .11819453196151841, .10193011981724044, .10193011981724044, .08327674157670475, .08327674157670475, .06267204833410907, .06267204833410907, .04060142980038694, .04060142980038694, .017614007139152118, .017614007139152118],
                [.14608113364969041, .14452440398997005, .14452440398997005, .13988739479107315, .13988739479107315, .13226893863333747, .13226893863333747, .12183141605372853, .12183141605372853, .10879729916714838, .10879729916714838, .09344442345603386, .09344442345603386, .0761001136283793, .0761001136283793, .057134425426857205, .057134425426857205, .036953789770852494, .036953789770852494, .016017228257774335, .016017228257774335],
                [.13925187285563198, .13925187285563198, .13654149834601517, .13654149834601517, .13117350478706238, .13117350478706238, .12325237681051242, .12325237681051242, .11293229608053922, .11293229608053922, .10041414444288096, .10041414444288096, .08594160621706773, .08594160621706773, .06979646842452049, .06979646842452049, .052293335152683286, .052293335152683286, .03377490158481415, .03377490158481415, .0146279952982722, .0146279952982722],
                [.13365457218610619, .1324620394046966, .1324620394046966, .12890572218808216, .12890572218808216, .12304908430672953, .12304908430672953, .11499664022241136, .11499664022241136, .10489209146454141, .10489209146454141, .09291576606003515, .09291576606003515, .07928141177671895, .07928141177671895, .06423242140852585, .06423242140852585, .04803767173108467, .04803767173108467, .030988005856979445, .030988005856979445, .013411859487141771, .013411859487141771],
                [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872]
            ],
            f = [
                [1],
                [1, 1],
                [1, 2, 1],
                [1, 3, 3, 1]
            ];

        function v(e, t) {
            return f[e][t]
        }

        function m(e, t, i) {
            var o, n, s, r = i.length - 1;
            if (0 === r) return 0;
            if (0 === e) {
                for (n = 0, s = 0; s <= r; s++) n += v(r, s) * Math.pow(1 - t, r - s) * Math.pow(t, s) * i[s];
                return n
            }
            for (o = new Array(r), s = 0; s < r; s++) o[s] = r * (i[s + 1] - i[s]);
            return m(e - 1, t, o)
        }

        function g(e, t, i) {
            var o = m(1, i, e),
                n = m(1, i, t),
                s = o * o + n * n;
            return Math.sqrt(s)
        }
        var w, y, T, S = 500,
            b = new THREE.Vector2,
            x = {
                enable: !0,
                colors: !1
            },
            E = 140,
            k = 30,
            C = .008,
            P = 70,
            M = 100,
            _ = 2,
            $ = 5,
            H = 1,
            O = function(e) {
                return 1 - --e * e * e * e
            },
            L = function(e) {
                return e * e
            },
            R = function(e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            },
            A = 25,
            z = 1.2,
            D = .3,
            j = .5,
            I = 5e-4,
            B = -550;
        var F = 0;

        function U(e) {
            if (requestAnimationFrame(U), !T) {
                var t = (e *= .001) - F;
                F = e, TweenMax.ticker.tick(!0),
                    function() {
                        for (var e = window.inertiaX.update(b.x), t = window.inertiaY.update(b.y), i = B / 700, o = 0; o < no_of_lines; o++) {
                            var n, s, r = Y(lines[o].position.x, lines[o].position.y, e, t),
                                a = 0;
                            if (x.enable && r < E) a = R((1 * E - r) / E);
                            var l = Math.round(100 * planeMatrix[o]) / 100;
                            if (a > l) n = L(planeMatrix[o]) + .01, s = 1;
                            else {
                                if (!(a < l)) continue;
                                n = R(1 - planeMatrix[o]) / 5 + 5e-6, s = O(1 - planeMatrix[o])
                            }
                            planeMatrix[o] = (a * n + planeMatrix[o] * s) / (n + s);
                            var c = rotation.start + rotation.end * planeMatrix[o],
                                d = Math.sin(c) * Math.abs(i),
                                u = Math.cos(c) * Math.abs(i);
                            i >= 0 ? lines[o].rotation.set(u * planeMatrix[o], d * planeMatrix[o], c) : lines[o].rotation.set(u * (1 - planeMatrix[o]), d * (1 - planeMatrix[o]), c), lines[o].position.z = planeMatrix[o] * k
                        }
                    }(), composer.render(t)
            }
        }

        function Y(e, t, i, o) {
            var n = e - i,
                s = t - o;
            return Math.sqrt(n * n + s * s)
        }
        var X, W = 1,
            N = .2,
            q = 1;

        function V(e, t, i, o, n) {
            var s = i,
                r = o,
                a = e,
                l = t,
                c = -Math.abs(n);
            this.value = e, this.quiet = !0;
            var d = 0;
            this.update = function(e) {
                return d += (e - this.value) * s, d *= r, this.value += d, this.value < a ? (this.value = a, d < 0 && (d *= c)) : this.value > l && (this.value = l, d > 0 && (d *= c)), Math.abs(d) < .001 * (l - a) && Math.abs(this.value - e) < .1 ? this.quiet = !0 : this.quiet = !1, this.value
            }, this.setValue = function(e) {
                return d = 0, this.quiet = !0, this.value = Math.min(l, Math.max(a, e)), this.value
            }
        }

        function Q() {
            x.enable = !0, window.inertiaX.value = 0, window.inertiaY.value = 0, window.prev_coords = {
                x: 0,
                y: 0
            }, window.idleTimer = setTimeout(K, 250), document.addEventListener("mousemove", G, !1)
        }

        function G(e) {
            e.preventDefault();
            var t = renderer.domElement.getBoundingClientRect(),
                i = .85 * ((e.clientX - t.left) / t.width * 2 - 1) * (t.width / 4),
                o = .85 * (-(e.clientY - t.top) / t.height * 2 + 1) * (t.height / 4);
            Y(i, o, 0, 0) < 175 ? (clearTimeout(window.idleTimer), window.exciterAuto || transition_start ? (0 == window.bloomed && i > -100 && i < 100 && o > -100 && o < 100 && (window.bloomed = !0, TweenMax.to(bloomPassUnreal, .25, {
                strength: 1.7,
                ease: Linear.easeNone,
                onComplete: function() {
                    TweenMax.to(bloomPassUnreal, .5, {
                        strength: 1.2,
                        ease: Linear.easeNone
                    })
                }
            })), window.transition_start = !0, window.exciterAuto = !1, TweenMax.to(b, transition_start ? .1 : .4, {
                x: i,
                y: o,
                ease: Power1.easeInOut,
                onComplete: function() {
                    window.transition_start = !1, window.bloomed = !1, clearTimeout(window.idleTimer), window.idleTimer = setTimeout(K, 1e3)
                }
            }), clearTimeout(window.exciterTimeout)) : b = {
                x: i,
                y: o
            }, exciterAuto || transition_start || (clearTimeout(window.idleTimer), window.idleTimer = setTimeout(K, 1e3))) : exciterAuto || transition_start || K()
        }

        function K() {
            clearTimeout(window.idleTimer), window.exciterAuto = !0,
                function e() {
                    var t = Math.round(160 * Math.random()) - 80,
                        i = Math.round(170 * Math.random()) - 85;
                    if (Y(b.x, b.y, t, i) < P) return e();
                    if (Y(prevBez.x, prevBez.y, t, i) < M) return e();
                    window.prev_coords = {
                        x: b.x,
                        y: b.y
                    };
                    var o = {
                            x: b.x - prevBez.x + b.x,
                            y: b.y - prevBez.y + b.y
                        },
                        n = Math.random() * $ + _,
                        s = Math.random() * $ + _,
                        r = {
                            x: (t - o.x) / n + t + (b.x - prevBez.x) * H,
                            y: (i - o.y) / s + i + (b.y - prevBez.y) * H
                        };
                    r.x = Math.round(r.x), r.y = Math.round(r.y), r.x = Math.max(-100, r.x), r.y = Math.max(-100, r.y), r.x = Math.min(100, r.x), r.y = Math.min(100, r.y), Y(0, 0, b.x, b.y) > 155 && (o = b, r = {
                        x: t,
                        y: i
                    });
                    var a = [{
                        x: b.x,
                        y: b.y
                    }, o, r, {
                        x: t,
                        y: i
                    }];
                    prevBez = r;
                    var l = function(e, t, i, o) {
                        var n, s, r, a;
                        if (e.length >= h.length) throw new Error("too high n bezier");
                        for (void 0 === i && (i = 1), void 0 === o && (o = 20), n = i / 2, s = 0, r = 0; r < o; r++) a = n * h[o][r] + n, s += p[o][r] * g(e, t, a);
                        return n * s
                    }([b.x, o.x, r.x, t], [b.y, o.y, r.y, i]);
                    TweenMax.set(b, {
                        clearProps: "all"
                    }), TweenMax.to(b, Math.round(l) * C, {
                        bezier: {
                            type: "cubic",
                            values: a
                        },
                        ease: Linear.easeNone,
                        onComplete: function() {
                            exciterAuto && e()
                        }
                    })
                }()
        }(X = i(0)).keys().forEach(X), (X = i(10)).keys().forEach(X), window.addEventListener("resize", (function() {
                window.initialOrientation = "undefined";
                var e = Math.min(window.innerWidth, window.innerHeight);
                renderer.setSize(e, e), composer.setSize(e, e), filmPass.uniforms.sCount.value = 3 * e
            }), !1), TweenMax.ticker.setManualRequestAnimation = !0, TweenMax.ticker.fps(60), "undefined" != typeof DeviceOrientationEvent && "function" == typeof DeviceOrientationEvent.requestPermission ? DeviceOrientationEvent.requestPermission().then((function(e) {
                "granted" === e && (o(), n())
            })).catch(console.error) : (o(), n()),
            function() {
                (w = new THREE.PerspectiveCamera(45, 1, 1, -1e3)).position.set(0, 0, 250), y = new THREE.Scene, window.renderer = new THREE.WebGLRenderer({
                    antialias: !1,
                    depth: !1
                }), renderer.setSize(S, 500), renderer.autoClear = !1, renderer.setPixelRatio(2), renderer.gammaFactor = 2.2, document.getElementById("container").appendChild(renderer.domElement), window.composer = new THREE.EffectComposer(renderer), window.colorify = new THREE.ShaderPass(THREE.ColorShader), colorify.uniforms.color.value = new THREE.Color(1250067);
                var e = new THREE.RenderPass(y, w);
                e.clearDepth = !0, e.clear = !1;
                var t = new THREE.ShaderPass(THREE.VerticalBlurShader);
                t.uniforms.v.value = I, window.filmPass = new THREE.FilmPass(1, 1, 3 * S), window.bloomPassUnreal = new THREE.UnrealBloomPass(new THREE.Vector2(1e3, 1e3), 0, 0, 0), bloomPassUnreal.threshold = D, bloomPassUnreal.strength = z, bloomPassUnreal.radius = j;
                var i = new THREE.ShaderPass(THREE.RGBShiftShader);
                i.uniforms.amount.value = .001;
                var o = {
                        minFilter: THREE.LinearFilter,
                        magFilter: THREE.LinearFilter,
                        stencilBuffer: !1
                    },
                    n = new THREE.SavePass(new THREE.WebGLRenderTarget(1e3, 1e3, o)),
                    s = new THREE.ShaderPass(THREE.BlendShader, "tDiffuse1");
                s.uniforms.tDiffuse2.value = n.renderTarget.texture, s.uniforms.mixRatio.value = .65;
                var r = new THREE.ShaderPass(THREE.CopyShader),
                    a = new THREE.ShaderPass(THREE.BurfaMaskShader);
                composer.addPass(colorify), composer.addPass(e), composer.addPass(t), composer.addPass(t), composer.addPass(t), composer.addPass(e), composer.addPass(filmPass), composer.addPass(bloomPassUnreal), composer.addPass(i), composer.addPass(s), composer.addPass(n), composer.addPass(r), composer.addPass(a)
            }(), window.prevBez = {
                x: 0,
                y: 0
            }, window.exciterAuto = !1, window.transition_start = !1, window.inertiaX = new V(-200, 200, W, N, q), window.inertiaY = new V(-200, 200, W, N, q),
            function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                window.group_lines = new THREE.Group, y.add(group_lines), window.lines = [], (t = new THREE.PlaneGeometry(10.4, 1.85)).vertices[0].x *= .89, t.vertices[3].x *= .89;
                var t = (new THREE.BufferGeometry).fromGeometry(t),
                    i = Math.PI / 360 * A;
                window.rotation = {
                    start: Math.PI / 6 - i,
                    end: Math.PI / 3.8 + i
                }, rotation.start = Math.round(1e3 * rotation.start) / 1e3, rotation.end = Math.round(1e3 * rotation.end) / 1e3, window.planeMatrix = [];
                for (var o = 12 * e, n = 16 * e, s = 0; s < n; s++)
                    for (var r = 0; r < o; r++) {
                        var a = new THREE.MeshBasicMaterial({
                                color: 16777215,
                                transparent: !0,
                                side: THREE.DoubleSide
                            }),
                            l = new THREE.Mesh(t, a);
                        l.position.x = 12.35 * (r + .5 - o / 2), l.position.y = 9.75 * (s + .5 - n / 2), l.rotation.z = rotation.start, planeMatrix.push(0), lines.push(l), group_lines.add(l)
                    }
                window.no_of_lines = lines.length
            }(), U(), Q(), window.animation_tl = function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0", t = lines.length, i = new TimelineMax({
                        paused: !0
                    }), o = 0; o < t; o++) i.to(lines[o].rotation, 0, {
                    z: .3104,
                    x: 0,
                    y: 0
                }, -.01), i.to(lines[o].material, 0, {
                    opacity: 0
                }, -.01);
                i.addLabel("0"), i.fromTo(group_lines.position, .3, {
                    y: -20
                }, {
                    y: 0
                }, 0);
                var n = 0;
                for (o = 0; o < t; o++) o % 12 == 0 && (n += 1), i.fromTo(lines[o].rotation, .4, {
                    z: .3104
                }, {
                    z: 1.3968,
                    x: 0,
                    y: 0,
                    ease: Power1.easyOut
                }, .04 * n), i.fromTo(lines[o].material, .7, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power2.easyOut
                }, .03 * n + .1);
                i.addLabel("1");
                var s = i.duration();
                for (n = 0, o = 0; o < t; o++) {
                    o % 12 == 0 && (n += 1), i.fromTo(lines[o].rotation, .4, {
                        z: 1.3968,
                        x: 0,
                        y: 0
                    }, {
                        z: .3104,
                        x: 0,
                        y: 0,
                        ease: Power2.easyOut
                    }, .03 * n + .1 + s);
                    var r = 0;
                    1 == n || 16 == n ? r = 100 : o % 12 == 0 || o % 12 == 11 ? r = 100 : 2 == n || 15 == n ? r = 35 : o % 12 == 1 || o % 12 == 10 ? r = 35 : 3 == n || 14 == n ? r = 10 : o % 12 != 2 && o % 12 != 9 || (r = 10);
                    var a = r / 100;
                    i.fromTo(lines[o].material, .7, {
                        opacity: 1
                    }, {
                        opacity: a,
                        ease: Power4.easyOut
                    }, .4 + s)
                }
                for (s = i.duration(), i.addLabel("2"), n = 0, o = 0; o < t; o++) o % 12 == 0 && (n += 1), r = 0, 1 == n || 16 == n ? r = 100 : o % 12 == 0 || o % 12 == 11 ? r = 100 : 2 == n || 15 == n ? r = 35 : o % 12 == 1 || o % 12 == 10 ? r = 35 : 3 == n || 14 == n ? r = 10 : o % 12 != 2 && o % 12 != 9 || (r = 10), a = r / 100, i.fromTo(lines[o].rotation, .4, {
                    z: .3104
                }, {
                    z: 1.3968,
                    ease: Power1.easyOut
                }, .03 * n + .1 + s), o % 12 == n - 1 || o % 12 == n - 2 || o % 12 == n - 3 || o % 12 == n - 4 || o % 12 == n - 5 ? i.fromTo(lines[o].material, .5, {
                    opacity: a
                }, {
                    opacity: 1,
                    ease: Power3.easyInOut
                }, .1 + s) : i.fromTo(lines[o].material, .5, {
                    opacity: a
                }, {
                    opacity: 0,
                    ease: Power2.easyOut
                }, .1 + s);
                for (s = i.duration(), i.addLabel("3"), n = 0, o = 0; o < t; o++) o % 12 == 0 && (n += 1), a = o % 12 == n - 1 || o % 12 == n - 2 || o % 12 == n - 3 || o % 12 == n - 4 || o % 12 == n - 5 ? 1 : 0, i.fromTo(lines[o].material, .5, {
                    opacity: a
                }, {
                    opacity: 1,
                    ease: Power2.easyInOut
                }, 0 + s), i.fromTo(lines[o].rotation, .4, {
                    z: 1.3968
                }, {
                    z: .3104,
                    ease: Power1.easyOut
                }, .03 * n + .1 + s), (n >= 14 && n % 2 == 0 && o % 2 == 1 || 15 == n && o % 2 == 0) && i.fromTo(lines[o].material, .51, {
                    opacity: 1
                }, {
                    opacity: 0,
                    ease: Power3.easyIn
                }, .5 + s);
                return i.addLabel("4"), i.progress(0), i.currentLabel(e), i
            }, window.exciterEnable = Q, window.exciterDisable = function() {
                x.enable = !1, document.removeEventListener("mousemove", G), window.inertiaX.setValue = -150, window.inertiaY.setValue = -150
            }, window.animate = U, window.stopShape = function() {
                T = !0
            }, window.startShape = function() {
                T = !1
            }
    }])
}, function(e, t) {
    ! function(e, t) {
        if ("function" != typeof e.createEvent) return !1;
        var i, o, n, s, r, a, l, c, d, u = function(e) {
                var t = e.toLowerCase(),
                    i = "MS" + e;
                return navigator.msPointerEnabled ? i : !!window.PointerEvent && t
            },
            h = function(e) {
                return "on" + e in window && e
            },
            p = {
                useJquery: !t.IGNORE_JQUERY && "undefined" != typeof jQuery,
                swipeThreshold: t.SWIPE_THRESHOLD || 0,
                tapThreshold: t.TAP_THRESHOLD || 0,
                dbltapThreshold: t.DBL_TAP_THRESHOLD || 0,
                longtapThreshold: t.LONG_TAP_THRESHOLD || 0,
                tapPrecision: t.TAP_PRECISION || 0,
                justTouchEvents: t.JUST_ON_TOUCH_DEVICES
            },
            f = !1,
            v = h("touchstart") || u("PointerDown"),
            m = h("touchend") || u("PointerUp"),
            g = h("touchmove") || u("PointerMove"),
            w = function(e) {
                return !e.pointerId || void 0 === i || e.pointerId === i
            },
            y = function(e, t, i) {
                for (var o = t.split(" "), n = o.length; n--;) e.addEventListener(o[n], i, !1)
            },
            T = function(e) {
                switch (!0) {
                    case e.target.touches:
                        return e.target.touches[0];
                    case e.targetTouches:
                        return e.targetTouches[0];
                    default:
                        return e
                }
            },
            S = function(e) {
                return (e.targetTouches || e.target.touches || []).length > 1
            },
            b = function() {
                return (new Date).getTime()
            },
            x = function(t, i, s, r) {
                var a = e.createEvent("Event");
                if (a.originalEvent = s, (r = r || {}).x = o, r.y = n, p.useJquery && (a = jQuery.Event(i, {
                        originalEvent: s
                    }), jQuery(t).trigger(a, r)), a.initEvent) {
                    for (var l in r) a[l] = r[l];
                    a.initEvent(i, !0, !0), t.dispatchEvent(a)
                }
                for (; t;) t["on" + i] && t["on" + i](a), t = t.parentNode
            },
            E = 0;
        y(e, v + (p.justTouchEvents ? "" : " mousedown"), (function(e) {
            if (w(e) && !S(e) && (i = e.pointerId, "mousedown" !== e.type && (f = !0), "mousedown" !== e.type || !f)) {
                var t = T(e);
                s = o = t.pageX, r = n = t.pageY, d = setTimeout((function() {
                    x(e.target, "longtap", e), l = e.target
                }), p.longtapThreshold), a = b(), E++
            }
        })), y(e, m + (p.justTouchEvents ? "" : " mouseup"), (function(e) {
            if (w(e) && !S(e))
                if (i = void 0, "mouseup" === e.type && f) f = !1;
                else {
                    var t = [],
                        u = b(),
                        h = r - n,
                        v = s - o;
                    if (clearTimeout(c), clearTimeout(d), v <= -p.swipeThreshold && t.push("swiperight"), v >= p.swipeThreshold && t.push("swipeleft"), h <= -p.swipeThreshold && t.push("swipedown"), h >= p.swipeThreshold && t.push("swipeup"), t.length) {
                        for (var m = 0; m < t.length; m++) {
                            var g = t[m];
                            x(e.target, g, e, {
                                distance: {
                                    x: Math.abs(v),
                                    y: Math.abs(h)
                                }
                            })
                        }
                        E = 0
                    } else s >= o - p.tapPrecision && s <= o + p.tapPrecision && r >= n - p.tapPrecision && r <= n + p.tapPrecision && a + p.tapThreshold - u >= 0 && (x(e.target, E >= 2 && l === e.target ? "dbltap" : "tap", e), l = e.target), c = setTimeout((function() {
                        E = 0
                    }), p.dbltapThreshold)
                }
        })), y(e, g + (p.justTouchEvents ? "" : " mousemove"), (function(e) {
            if (w(e) && ("mousemove" !== e.type || !f)) {
                var t = T(e);
                o = t.pageX, n = t.pageY
            }
        })), t.tocca = function(e) {
            for (var t in e) p[t] = e[t];
            return p
        }
    }(document, window)
}, function(e, t, i) {
    "use strict";
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        n = function() {
            function e(e) {
                var t = {
                    callback: function() {},
                    elem: document,
                    preventMouse: !0
                };
                this.eventWheel = "onwheel" in document ? "wheel" : "mousewheel", this._options = r(t, e), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0;
                var i, n, a, l = this;
                this._wheelHandler = function(e) {
                    l._isWorking && (o.call(l, e), l._options.preventMouse && function(e) {
                        (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1
                    }(e))
                }, i = this._options.elem, n = this.eventWheel, a = this._wheelHandler, i.addEventListener ? i.addEventListener(n, a, !!s() && {
                    passive: !1
                }) : i.attachEvent && i.attachEvent("on" + n, a)
            }

            function t(e) {
                e.direction = this._direction, this._options.callback(e)
            }
            e.prototype = {
                constructor: e,
                turnOn: function() {
                    return this._isWorking = !0, this
                },
                turnOff: function() {
                    return this._isWorking = !1, this
                },
                setOptions: function(e) {
                    return this._options = r(this._options, e), this
                },
                getOption: function(e) {
                    var t = this._options[e];
                    if (void 0 !== t) return t;
                    throw new Error("Unknown option")
                },
                destroy: function() {
                    var e, t, i;
                    return e = this._options.elem, t = this.eventWheel, i = this._wheelHandler, e.removeEventListener ? e.removeEventListener(t, i, !!s() && {
                        passive: !1
                    }) : e.detachEvent && e.detachEvent("on" + t, i), this
                }
            };
            var i = function(e) {
                return (i = e.wheelDelta && !e.deltaY ? function(e) {
                    return -1 * e.wheelDelta
                } : function(e) {
                    return e.deltaY
                })(e)
            };

            function o(e) {
                var o = this,
                    s = i(e);
                if (0 !== s) {
                    var r, a = s > 0 ? "down" : "up",
                        l = o._deltaArray.length,
                        c = !1,
                        d = 0;
                    for (clearTimeout(o._timer), o._timer = setTimeout((function() {
                            o._deltaArray = [0, 0, 0], o._isStopped = !0, o._direction = a
                        }), 150), r = 0; r < l; r++) 0 !== o._deltaArray[r] && (o._deltaArray[r] > 0 ? ++d : --d);
                    Math.abs(d) === l && (d > 0 ? "down" : "up") !== o._direction && (c = !0, o._direction = a), o._isStopped || (c ? (o._isAcceleration = !0, t.call(this, e)) : Math.abs(d) === l && n.call(this, e)), o._isStopped && (o._isStopped = !1, o._isAcceleration = !0, o._direction = a, t.call(this, e)), o._deltaArray.shift(), o._deltaArray.push(s)
                }
            }

            function n(e) {
                var o = Math.abs(this._deltaArray[0]),
                    n = Math.abs(this._deltaArray[1]),
                    s = Math.abs(this._deltaArray[2]),
                    r = Math.abs(i(e));
                r > s && s > n && n > o && (this._isAcceleration || (t.call(this, e), this._isAcceleration = !0)), r < s && s <= n && (this._isAcceleration = !1)
            }

            function r(e, t) {
                var i, o = {};
                for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
                for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
                return o
            }
            return e
        }();





    function s() {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
    }

    "object" === o(t) && (e.exports = n)

}, function(e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
        value: !0
    });








    var o = function() {
        $("[data-projects-list]"), $("[data-projects-list-item]");
        var e = {
                logo: $("[data-loader-logo]"),
                wrap: $("[data-loader]"),
                bg: $("[data-loader-bg]"),
                part: {
                    top: $("[data-loader-top]"),
                    bottom: $("[data-loader-bottom]")
                },
                shades: {
                    wrap: $("[data-loader-shades]"),
                    part: {
                        top: $("[data-loader-shades-top]"),
                        bottom: $("[data-loader-shades-bottom]")
                    },
                    topText: $("[data-text-wrap-top] span"),
                    bottomText: $("[data-text-wrap-bottom] span")
                }
            },
            t = new TimelineMax({
                paused: !0,
                repeat: 0,
                delay: 0
            });
        return {
            init: function() {
                window.isLoading = !0, fullpage_api.setAllowScrolling(!1), t.eventCallback("onComplete", (function() {
                    "projects" != fullpage_api.getActiveSection().anchor && fullpage_api.setAllowScrolling(!0), window.isLoading = !1
                })), t.to(e.logo, 0, {
                    scaleY: 0
                }).add("loaderParts").to(e.part.top, .6, {
                    scaleY: 0,
                    transformOrigin: "50% 0%",
                    ease: Power4.easeOut
                }, "loaderParts").to(e.part.bottom, .6, {
                    scaleY: 0,
                    transformOrigin: "50% 100%",
                    ease: Power4.easeOut
                }, "loaderParts").add("text", "-=0.3").from(e.shades.topText, .6, {
                    yPercent: 102,
                    ease: Power4.easeOut
                }, "text").from(e.shades.bottomText, .6, {
                    yPercent: -102,
                    ease: Power4.easeOut
                }, "text").add("shades", "+=1.5").staggerTo([e.shades.topText, e.shades.bottomText], .6, {
                    yPercent: 102,
                    ease: Power4.easeIn
                }, .1, "shades").staggerTo([e.shades.part.top, e.shades.part.bottom], .8, {
                    scaleY: 0,
                    ease: Power4.easeIn,
                    transformOrigin: "50% 100%"
                }, .1, "-=0.4").to(e.bg, .5, {
                    autoAlpha: 0
                }).add("projects", "-=0.5").add((function() {


                    var e = $("[data-offcanvas-menu]");
                    $.get(e.data("map"), (function(t) {
                        var i = $.parseHTML(t);
                        e.append(i)
                    }), "text"), $(".section.active").data("show").play();
                    var t = fullpage_api.getActiveSection();
                    if ("projects" == t.anchor) {
                        var i = $(t.item).data("projectsTl");
                        i.show.progress(0), i.show.play()
                    }

                }), "projects").set([e.wrap, e.shades.wrap], {
                    autoAlpha: 0
                })
            },
            play: function() {
                t.play()
            }
        }
    }();


    t.default = o

}]);