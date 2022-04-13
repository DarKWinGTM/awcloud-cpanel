(function(t) {
    function e(e) {
        for (var r, s, o = e[0], c = e[1], l = e[2], p = 0, d = []; p < o.length; p++)
            s = o[p],
            Object.prototype.hasOwnProperty.call(n, s) && n[s] && d.push(n[s][0]),
            n[s] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        m && m(e);
        while (d.length)
            d.shift()();
        return i.push.apply(i, l || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], r = !0, s = 1; s < a.length; s++) {
                var c = a[s];
                0 !== n[c] && (r = !1)
            }
            r && (i.splice(e--, 1),
            t = o(o.s = a[0]))
        }
        return t
    }
    var r = {}
      , n = {
        app: 0
    }
      , i = [];
    function s(t) {
        return o.p + "js/" + ({
            about: "about"
        }[t] || t) + "." + {
            about: "fee83f47"
        }[t] + ".js"
    }
    function o(e) {
        if (r[e])
            return r[e].exports;
        var a = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o),
        a.l = !0,
        a.exports
    }
    o.e = function(t) {
        var e = []
          , a = n[t];
        if (0 !== a)
            if (a)
                e.push(a[2]);
            else {
                var r = new Promise((function(e, r) {
                    a = n[t] = [e, r]
                }
                ));
                e.push(a[2] = r);
                var i, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                o.nc && c.setAttribute("nonce", o.nc),
                c.src = s(t);
                var l = new Error;
                i = function(e) {
                    c.onerror = c.onload = null,
                    clearTimeout(p);
                    var a = n[t];
                    if (0 !== a) {
                        if (a) {
                            var r = e && ("load" === e.type ? "missing" : e.type)
                              , i = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")",
                            l.name = "ChunkLoadError",
                            l.type = r,
                            l.request = i,
                            a[1](l)
                        }
                        n[t] = void 0
                    }
                }
                ;
                var p = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = i,
                document.head.appendChild(c)
            }
        return Promise.all(e)
    }
    ,
    o.m = t,
    o.c = r,
    o.d = function(t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (o.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                o.d(a, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return a
    }
    ,
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o.p = "/",
    o.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var c = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var p = 0; p < c.length; p++)
        e(c[p]);
    var m = l;
    i.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    1: function(t, e) {},
    10: function(t, e) {},
    11: function(t, e) {},
    12: function(t, e) {},
    13: function(t, e) {},
    14: function(t, e) {},
    2: function(t, e) {},
    3: function(t, e) {},
    4: function(t, e) {},
    5: function(t, e) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e623"),
        a("e379"),
        a("5dc8"),
        a("37e1");
        var r = a("2b0e")
          , n = (a("d3b7"),
        a("bc3a"))
          , i = a.n(n)
          , s = {}
          , o = i.a.create(s);
        o.interceptors.request.use((function(t) {
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        o.interceptors.response.use((function(t) {
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        Plugin.install = function(t) {
            t.axios = o,
            window.axios = o,
            Object.defineProperties(t.prototype, {
                axios: {
                    get: function() {
                        return o
                    }
                },
                $axios: {
                    get: function() {
                        return o
                    }
                }
            })
        }
        ,
        r["a"].use(Plugin);
        Plugin;
        var c = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-app", [a("v-main", [a("router-view")], 1)], 1)
        }
          , l = []
          , p = a("2877")
          , m = a("6544")
          , d = a.n(m)
          , u = a("7496")
          , g = a("f6c4")
          , _ = {}
          , h = Object(p["a"])(_, c, l, !1, null, null, null)
          , v = h.exports;
        d()(h, {
            VApp: u["a"],
            VMain: g["a"]
        });
        a("3ca3"),
        a("ddb0");
        var w = a("8c4f")
          , f = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-container", {
                attrs: {
                    fluid: ""
                }
            }, [a("v-app-bar", {
                attrs: {
                    app: "",
                    color: "#212121",
                    dark: ""
                }
            }, [a("div", {
                staticClass: "d-flex align-center text-nowrap"
            }, [a("v-list-item", {
                attrs: {
                    "two-line": ""
                }
            }, [a("v-list-item-content", [a("v-list-item-title", [t._v("FWorld")]), a("v-list-item-subtitle", [t._v("V1.0014")])], 1)], 1)], 1), a("v-spacer"), a("div", {
                staticClass: "d-flex align-center text-nowrap"
            }, [a("v-list-item", {
                attrs: {
                    "two-line": ""
                }
            }, [a("v-list-item-content", {
                staticClass: "text-right align-self-start"
            }, [a("v-list-item-title", [a("span", {
                staticClass: "caption"
            }, [t._v("Fee : ")]), a("v-chip", {
                attrs: {
                    color: t.getColorPercent(t.fee),
                    label: "",
                    small: ""
                }
            }, [t._v(" " + t._s(t.fee) + "% ")])], 1), a("v-list-item-subtitle", [a("v-avatar", {
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "https://wax.alcor.exchange/_nuxt/img/wax_eosio.token.4f71330.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(t.WAXTHB.toFixed(3)) + " ฿")]), a("v-avatar", {
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "img/icon/FWW.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(t.tokenFWW.toFixed(3)))]), a("v-avatar", {
                staticClass: "mx-1 caption",
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "img/icon/FWG.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(t.tokenFWG.toFixed(3)))]), a("v-avatar", {
                staticClass: "mx-1 caption",
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "img/icon/FWF.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(t.tokenFWF.toFixed(3)))])], 1)], 1)], 1)], 1)], 1), a("v-row", {
                attrs: {
                    justify: "center"
                }
            }, [a("v-col", [a("v-card", {
                staticClass: "elevation-5"
            }, [a("v-card-text", {
                staticClass: "subtitle-1 text-center"
            }, [a("span", {
                staticClass: "subtitle-2"
            }, [t._v("Summary Balance : "), a("v-chip", {
                staticClass: "my-1 subtitle-2",
                staticStyle: {
                    background: "linear-gradient(90deg, rgba(26,93,81,1) 0%, rgba(31,138,119,1) 45%, rgba(77,204,181,1) 100%)"
                },
                attrs: {
                    label: ""
                }
            }, [t._v(" " + t._s(t.dataBalance) + " ￦ (" + t._s(t.currencyFormat(t.dataBalance * t.WAXTHB)) + " ฿) ")])], 1), a("br"), a("span", {
                staticClass: "subtitle-2"
            }, [t._v("Summary Daily Profit : "), a("v-chip", {
                staticClass: "my-1 subtitle-2",
                staticStyle: {
                    background: "linear-gradient(90deg, rgba(26,93,81,1) 0%, rgba(31,138,119,1) 45%, rgba(77,204,181,1) 100%)"
                },
                attrs: {
                    label: ""
                }
            }, [t._v(" " + t._s(t.dataProfit) + " ￦ (" + t._s(t.currencyFormat(t.dataProfit * t.WAXTHB)) + " ฿) ")])], 1), a("br")])], 1)], 1)], 1), a("v-row", {
                attrs: {
                    justify: "center"
                }
            }, [a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6",
                    sm: "12",
                    lg: "6"
                }
            }, [a("v-combobox", {
                attrs: {
                    filter: t.filter,
                    "hide-no-data": !t.search,
                    items: t.items,
                    "search-input": t.search,
                    "hide-selected": "",
                    label: "WAX ID",
                    multiple: "",
                    "small-chips": "",
                    solo: ""
                },
                on: {
                    "update:searchInput": function(e) {
                        t.search = e
                    },
                    "update:search-input": function(e) {
                        t.search = e
                    },
                    change: function(e) {
                        return t.syncAccounts(1)
                    }
                },
                scopedSlots: t._u([{
                    key: "no-data",
                    fn: function() {
                        return [a("v-list-item", [a("span", {
                            staticClass: "subheading"
                        }, [t._v("Create")]), a("v-chip", {
                            attrs: {
                                color: "teal",
                                label: "",
                                small: ""
                            }
                        }, [t._v(" " + t._s(t.search) + " ")])], 1)]
                    },
                    proxy: !0
                }, {
                    key: "selection",
                    fn: function(e) {
                        var r = e.attrs
                          , n = e.item
                          , i = e.parent
                          , s = e.selected;
                        return [n === Object(n) ? a("v-chip", t._b({
                            attrs: {
                                color: "teal",
                                "input-value": s,
                                label: "",
                                small: ""
                            }
                        }, "v-chip", r, !1), [a("span", {
                            staticClass: "pr-2"
                        }, [t._v(" " + t._s(n.text) + " ")]), a("v-icon", {
                            attrs: {
                                small: ""
                            },
                            on: {
                                click: function(t) {
                                    i.selectItem(n)
                                }
                            }
                        }, [t._v(" $delete ")])], 1) : t._e()]
                    }
                }]),
                model: {
                    value: t.model,
                    callback: function(e) {
                        t.model = e
                    },
                    expression: "model"
                }
            })], 1)], 1), a("v-row", {
                staticClass: "text-center"
            }, [a("v-col", {}, [a("span", {
                staticClass: "amber--text caption"
            }, [t._v(t._s(t.donate) + "/3000 ￦")]), a("br"), a("v-row", {
                staticClass: "mb-1",
                attrs: {
                    justify: "center",
                    "no-gutters": ""
                }
            }, [a("v-col", {
                attrs: {
                    col: "10",
                    md: "2",
                    lg: "2",
                    sm: "10"
                }
            }, [a("v-progress-linear", {
                attrs: {
                    height: "7",
                    color: "teal",
                    "buffer-value": "0",
                    stream: ""
                },
                model: {
                    value: t.donatePercent,
                    callback: function(e) {
                        t.donatePercent = e
                    },
                    expression: "donatePercent"
                }
            })], 1)], 1), a("span", {
                staticClass: "caption"
            }, [t._v(" You can donate us WAX to")]), a("span", {
                staticClass: "teal--text caption"
            }, [a("v-chip", {
                staticClass: "ma-2",
                attrs: {
                    label: "",
                    color: "teal",
                    small: ""
                }
            }, [t._v(" jakkapongfmw ")])], 1)], 1)], 1), a("v-data-iterator", {
                attrs: {
                    items: t.model,
                    "hide-default-footer": ""
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [a("v-row", {
                            attrs: {
                                justify: "center"
                            }
                        }, t._l(e.items, (function(e) {
                            return a("v-col", {
                                key: e.wallet,
                                attrs: {
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    lg: "3"
                                }
                            }, [a("v-card", {
                                staticClass: "elevation-5"
                            }, ["undefined" === typeof e.data_cpu ? a("v-progress-linear", {
                                attrs: {
                                    height: "25",
                                    color: t.getColorCPU(0),
                                    value: 0
                                }
                            }, [a("strong", [t._v("0 %")])]) : a("v-progress-linear", {
                                attrs: {
                                    height: "25",
                                    color: t.getColorCPU(e.data_cpu.cpu_percent),
                                    value: e.data_cpu.cpu_percent
                                }
                            }, [a("strong", [t._v(t._s(e.data_cpu.cpu_percent) + " %")])]), a("v-card-title", {
                                staticClass: "headline font-weight-bold"
                            }, [a("v-chip", {
                                staticClass: "title",
                                staticStyle: {
                                    background: "linear-gradient(90deg, rgba(108,12,12,1) 16%, rgba(184,68,68,1) 56%, rgba(255,153,153,1) 100%)"
                                },
                                attrs: {
                                    label: "",
                                    "text-color": "white"
                                }
                            }, [t._v(" " + t._s(e.wallet) + " ")]), a("v-btn", {
                                attrs: {
                                    icon: "",
                                    color: "teal"
                                },
                                on: {
                                    click: function(a) {
                                        return t.reloadWalet(e.wallet)
                                    }
                                }
                            }, [a("v-icon", [t._v("mdi-cached")])], 1)], 1), a("v-card-text", ["undefined" === typeof e.data_cpu ? a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Balance Wax: ? ￦")]) : a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Balance : " + t._s(e.data_cpu.balance) + " ￦ (" + t._s(t.currencyFormat(parseInt(parseFloat(e.data_cpu.balance) * t.WAXTHB))) + " ฿)")]), a("br"), "undefined" === typeof e.account ? a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Energy : "), a("v-chip", {
                                style: t.getColorEnergy(parseInt(0)),
                                attrs: {
                                    label: "",
                                    small: ""
                                }
                            }, [t._v("? / ?")])], 1) : a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Energy : "), a("v-chip", {
                                style: t.getColorEnergy(parseInt(e.account.energy / e.account.max_energy * 100)),
                                attrs: {
                                    label: "",
                                    small: ""
                                }
                            }, [t._v(t._s(e.account.energy) + "/" + t._s(e.account.max_energy))])], 1), a("br"), "undefined" === typeof e.data_cpu ? a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Staking : ? ￦")]) : a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Staking : " + t._s(parseInt(e.data_cpu.stake)) + " ￦")]), a("br"), a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Daily Profit : "), a("v-chip", {
                                style: t.getColorStyle(),
                                attrs: {
                                    label: "",
                                    color: ""
                                }
                            }, [t._v(t._s(parseFloat(e.profit).toFixed(2)) + " ￦ (" + t._s(t.currencyFormat(parseInt(e.profit * t.WAXTHB))) + " ฿)")])], 1), a("br")]), a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item", {
                                staticStyle: {
                                    "min-height": "15px",
                                    height: "28px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-no-wrap",
                                staticStyle: {
                                    "font-size": "10px"
                                }
                            }, [t._v("Tokens")]), a("v-list-item-content", {
                                staticClass: "align-end text-no-wrap",
                                staticStyle: {
                                    "font-size": "10px"
                                }
                            }, [t._v(" InGame ")]), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }), a("v-list-item-content", {
                                staticClass: "align-end text-no-wrap",
                                staticStyle: {
                                    "font-size": "10px"
                                }
                            }, [t._v(" Daily Cost/Mine ")])], 1), a("v-list-item", {
                                staticStyle: {
                                    "min-height": "30px",
                                    height: "38px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-caption text-no-wrap"
                            }, ["undefined" === typeof e.user_token ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.user_token, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FWF" === e.currency ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.amount).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.amount * t.tokenFWF * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, ["undefined" === typeof e.account ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.account.balances, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FOOD" === e.split(" ")[1] ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.split(" ")[0]).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.split(" ")[0] * t.tokenFWF * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, [a("v-avatar", {
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "25",
                                    src: "img/icon/FWF2.png",
                                    alt: ""
                                }
                            })])], 1), a("v-list-item-content", {
                                staticClass: "align-end font-weight-black text-no-wrap"
                            }, ["undefined" === typeof e.daily_cost_mine ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "13px"
                                },
                                style: t.getColorCost(0),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                style: t.getColorCost(e.daily_cost_mine.sumFoodProfit),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" " + t._s(parseInt(e.daily_cost_mine.sumFoodProfit))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.daily_cost_mine.sumFoodProfit * t.tokenFWF * t.WAXTHB))) + " ฿) ")])], 1)], 1), a("v-list-item", {
                                staticStyle: {
                                    "min-height": "30px",
                                    height: "38px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-caption text-no-wrap"
                            }, ["undefined" === typeof e.user_token ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.user_token, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FWW" === e.currency ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.amount).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.amount * t.tokenFWW * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, ["undefined" === typeof e.account ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.account.balances, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["WOOD" === e.split(" ")[1] ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.split(" ")[0]).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.split(" ")[0] * t.tokenFWW * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, [a("v-avatar", {
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "25",
                                    src: "img/icon/FWW2.png",
                                    alt: ""
                                }
                            })])], 1), a("v-list-item-content", {
                                staticClass: "align-end font-weight-black text-no-wrap"
                            }, ["undefined" === typeof e.daily_cost_mine ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "13px"
                                },
                                style: t.getColorCost(0),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                style: t.getColorCost(e.daily_cost_mine.sumWoodProfit),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" " + t._s(parseInt(e.daily_cost_mine.sumWoodProfit))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.daily_cost_mine.sumWoodProfit * t.tokenFWW * t.WAXTHB))) + " ฿) ")])], 1)], 1), a("v-list-item", {
                                staticStyle: {
                                    "min-height": "30px",
                                    height: "38px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-caption text-no-wrap"
                            }, ["undefined" === typeof e.user_token ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.user_token, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FWG" === e.currency ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.amount).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.amount * t.tokenFWG * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, ["undefined" === typeof e.account ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.account.balances, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["GOLD" === e.split(" ")[1] ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.split(" ")[0]).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.split(" ")[0] * t.tokenFWG * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, [a("v-avatar", {
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "25",
                                    src: "img/icon/FWG2.png",
                                    alt: ""
                                }
                            })])], 1), a("v-list-item-content", {
                                staticClass: "align-end font-weight-black text-no-wrap"
                            }, ["undefined" === typeof e.daily_cost_mine ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "13px"
                                },
                                style: t.getColorCost(0),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                style: t.getColorCost(e.daily_cost_mine.sumGoldProfit),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" " + t._s(parseInt(e.daily_cost_mine.sumGoldProfit))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.daily_cost_mine.sumGoldProfit * t.tokenFWG * t.WAXTHB))) + " ฿) ")])], 1)], 1)], 1), a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item", {
                                staticStyle: {
                                    "min-height": "20px",
                                    height: "28px"
                                }
                            }, t._l(e.itemInbug, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["260676" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/farmercoin.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298596" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/cornseed2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298595" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/barleyseed2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "318606" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/barley2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "318607" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/corn2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298593" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/milk.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298612" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/chickenegg2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298613" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/chick.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e()])
                            }
                            )), 0)], 1), a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" MINING ")])]), t._l(e.tools, (function(e) {
                                return a("v-list-item", {
                                    key: e.asset_id,
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [a("v-list-item-content", {
                                    staticClass: "text-caption text-no-wrap",
                                    staticStyle: {
                                        "min-width": "120px",
                                        "max-width": "120px",
                                        width: "500px"
                                    },
                                    attrs: {
                                        "two-line": ""
                                    }
                                }, [a("v-tooltip", {
                                    attrs: {
                                        top: ""
                                    },
                                    scopedSlots: t._u([{
                                        key: "activator",
                                        fn: function(r) {
                                            var n = r.on
                                              , i = r.attrs;
                                            return ["Wood" === e.type ? a("v-chip", t._g(t._b({
                                                staticClass: "caption elevation-5",
                                                attrs: {
                                                    label: "",
                                                    "x-small": "",
                                                    color: "#6D4C41"
                                                }
                                            }, "v-chip", i, !1), n), [t._v(" " + t._s(e.template_name) + " ")]) : "Food" === e.type ? a("v-chip", t._g(t._b({
                                                staticClass: "caption elevation-5",
                                                attrs: {
                                                    label: "",
                                                    "x-small": "",
                                                    color: "#0277BD"
                                                }
                                            }, "v-chip", i, !1), n), [t._v(" " + t._s(e.template_name) + " ")]) : t._e(), "Gold" === e.type ? a("v-chip", t._g(t._b({
                                                staticClass: "caption elevation-5",
                                                attrs: {
                                                    label: "",
                                                    "x-small": "",
                                                    color: "#FF8F00"
                                                }
                                            }, "v-chip", i, !1), n), [t._v(" " + t._s(e.template_name) + " ")]) : t._e()]
                                        }
                                    }], null, !0)
                                }, [a("span", [a("v-img", {
                                    attrs: {
                                        "max-width": "70",
                                        src: t.getPic(e.img)
                                    }
                                })], 1)])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability)),
                                        id: e.asset_id
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1), void 0 === e.current_durability ? a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "65px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(e.reward_rate) + "  "), a("v-img", {
                                    attrs: {
                                        src: "img/icon/farmercoin.png",
                                        "max-width": "14",
                                        "max-height": "14"
                                    }
                                })], 1)], 1) : a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "65px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(t._s(e.current_durability) + "/" + t._s(e.durability))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "60px",
                                        "max-width": "65px",
                                        width: "65px"
                                    }
                                }, ["tools" === e.type_mine ? a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, ["Food" === e.type ? a("span", {
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.tokenFWF - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")]) : t._e(), "Wood" === e.type ? a("span", {
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.tokenFWW - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")]) : t._e(), "Gold" === e.type ? a("span", {
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.tokenFWG - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")]) : t._e()]) : a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.fcoin - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")])], 1)], 1)
                            }
                            ))], 2), a("br"), null != e.cows ? a("div", [a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("v-row", [a("v-col", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" Raising COW ")])]), a("v-col", [a("span", {
                                staticClass: "mx-3 caption"
                            }, [t._v(" Daily Cost : "), a("v-avatar", {
                                staticClass: "mx-1 caption",
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "20",
                                    src: "img/icon/barley2.png",
                                    alt: ""
                                }
                            })]), a("span", {
                                staticClass: "mx-1 caption red--text font-weight-bold"
                            }, [t._v("-" + t._s(e.sumCostCows))])], 1)])], 1)], 1), a("v-row", t._l(e.cows, (function(e) {
                                return a("v-col", {
                                    key: e.asset_id,
                                    attrs: {
                                        cols: "6",
                                        lg: "6",
                                        md: "6",
                                        sm: "6"
                                    }
                                }, [a("v-list-item", {
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/dairycow2.png",
                                        alt: ""
                                    }
                                })]), a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "55px",
                                        "max-width": "55px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": ""
                                    }
                                }, [t._v(t._s(e.times_claimed) + "/" + t._s(6))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability))
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1)], 1)], 1)
                            }
                            )), 1)], 1), a("br")], 1) : t._e(), null != e.chickens ? a("div", [a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("v-row", [a("v-col", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" Raising CHICKEN ")])]), a("v-col", [a("span", {
                                staticClass: "mx-3 caption"
                            }, [t._v(" Daily Cost : "), a("v-avatar", {
                                staticClass: "mx-1 caption",
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "20",
                                    src: "img/icon/barley2.png",
                                    alt: ""
                                }
                            })]), a("span", {
                                staticClass: "mx-1 caption red--text font-weight-bold"
                            }, [t._v("-" + t._s(e.sumCostChickens))])], 1)])], 1)], 1), a("v-row", t._l(e.chickens, (function(e) {
                                return a("v-col", {
                                    key: e.asset_id,
                                    attrs: {
                                        cols: "6",
                                        lg: "6",
                                        md: "6",
                                        sm: "6"
                                    }
                                }, [a("v-list-item", {
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/chicken2.png",
                                        alt: ""
                                    }
                                })]), a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "55px",
                                        "max-width": "55px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": ""
                                    }
                                }, [t._v(t._s(e.times_claimed) + "/" + t._s(28))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability))
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1)], 1)], 1)
                            }
                            )), 1)], 1), a("br")], 1) : t._e(), null != e.crops ? a("div", [a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("v-row", [a("v-col", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" CROPS ")])]), a("v-col", [a("span", {
                                staticClass: "mx-3 caption"
                            }, [t._v(" Daily Cost : "), a("v-avatar", {
                                staticClass: "mx-1 caption",
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "20",
                                    src: "img/icon/FWF2.png",
                                    alt: ""
                                }
                            })]), a("span", {
                                staticClass: "mx-1 caption red--text font-weight-bold"
                            }, [t._v("-" + t._s(e.cost_crops))])], 1)])], 1)], 1), a("v-row", t._l(e.crops, (function(e) {
                                return a("v-col", {
                                    key: e.asset_id,
                                    attrs: {
                                        cols: "6",
                                        lg: "6",
                                        md: "6",
                                        sm: "6"
                                    }
                                }, [a("v-list-item", {
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [298596 === e.template_id ? a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/corn2.png",
                                        alt: ""
                                    }
                                })]) : a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/barley2.png",
                                        alt: ""
                                    }
                                })]), a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "55px",
                                        "max-width": "55px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": ""
                                    }
                                }, [t._v(t._s(e.times_claimed) + "/" + t._s(42))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability)),
                                        id: e.asset_id
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1)], 1)], 1)
                            }
                            )), 1)], 1), a("br")], 1) : t._e()], 1)], 1)
                        }
                        )), 1)]
                    }
                }])
            })], 1)
        }
          , b = []
          , x = a("5530")
          , y = a("b85c")
          , k = a("3835")
          , C = a("1da1")
          , W = (a("d81d"),
        a("159b"),
        a("a630"),
        a("ac1f"),
        a("5319"),
        a("a434"),
        a("4fad"),
        a("b680"),
        a("7db0"),
        a("1276"),
        a("99af"),
        a("25f0"),
        a("4d90"),
        a("96cf"),
        {
            name: "Home",
            data: function() {
                return {
                    counter: 0,
                    activator: null,
                    attach: null,
                    colors: ["green", "purple", "indigo", "cyan", "teal", "orange"],
                    editing: null,
                    editingIndex: -1,
                    items: [],
                    nonce: 1,
                    menu: !1,
                    model: [],
                    x: 0,
                    search: null,
                    y: 0,
                    waxiJson: [],
                    tokenFWF: 0,
                    tokenFWG: 0,
                    tokenFWW: 0,
                    fcoin: 0,
                    WAXTHB: 0,
                    fee: 0,
                    arrWork: [],
                    donatePercent: 0,
                    donate: 0,
                    dataBalance: 0,
                    dataProfit: 0,
                    waxRpcDomain: ["https://wax.eoseoul.io"]
                }
            },
            mounted: function() {
                var t = this;
                this.getWAXTHB(),
                this.getDonate(),
                this.getExchang(),
                this.getFcoin(),
                this.getTokenFWF(),
                this.getTokenFWG(),
                this.getTokenFWW(),
                this.syncAccounts(0),
                this.getRpcDomain(),
                setInterval(Object(C["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                t.getRpcDomain(),
                                t.getDonate(),
                                t.getWAXTHB(),
                                t.getExchang(),
                                t.getFcoin(),
                                t.getTokenFWF(),
                                t.getTokenFWG(),
                                t.getTokenFWW(),
                                t.syncAccounts(1);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), 2e4)
            },
            watch: {
                model: function(t, e) {
                    var a = this;
                    t.length !== e.length && (this.model = t.map((function(t) {
                        return "string" === typeof t && (t = {
                            text: t,
                            color: a.colors[a.nonce - 1]
                        },
                        a.nonce++),
                        t
                    }
                    )),
                    Array.from(this.model).forEach((function(t) {
                        var e = t.text.replace(/^\s+|\s+$/g, "");
                        a.waxiJson.push(e)
                    }
                    )),
                    this.$cookies.set("waxid", this.waxiJson, "Sat, 13 Mar 2050 12:25:57 GMT"),
                    this.syncAccounts(0),
                    this.waxiJson.splice(0))
                }
            },
            computed: {
                output: function() {
                    return this.model
                }
            },
            created: function() {},
            methods: {
                getRpcDomain: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.$axios.get("https://rpcdomain.jakkapongw.repl.co/get/rpcdomain").then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    ));
                                case 2:
                                    return a = e.sent,
                                    t.waxRpcDomain = a,
                                    e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                transformSlotProps: function(t) {
                    var e = {};
                    return Object.entries(t).forEach((function(t) {
                        var a = Object(k["a"])(t, 2)
                          , r = a[0]
                          , n = a[1];
                        e[r] = n < 10 ? "0".concat(n) : String(n)
                    }
                    )),
                    e
                },
                reloadWalet: function(t) {
                    this.loadData(t),
                    this.loadDataUserToken(t),
                    this.loadDataTools(t),
                    this.loadDataInBug(t)
                },
                loadData: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.getAccount(t);
                                case 2:
                                    return r = a.sent,
                                    a.next = 5,
                                    e.getAccountCPU(t);
                                case 5:
                                    n = a.sent,
                                    i = {
                                        cpu_percent: parseInt(n.cpu_limit.used / n.cpu_limit.max * 100),
                                        balance: parseFloat(n.core_liquid_balance).toFixed(2),
                                        stake: parseInt(n.cpu_weight) / 1e8
                                    },
                                    e.model.find((function(e) {
                                        return e.wallet === t && (e.account = r,
                                        !0) && (e.data_cpu = i,
                                        !0)
                                    }
                                    ));
                                case 8:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataUserToken: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.getTokenUser(t);
                                case 2:
                                    r = a.sent,
                                    e.model.find((function(e) {
                                        return e.wallet === t && (e.user_token = r.token_balances,
                                        !0)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataTools: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s, o, c, l, p, m, d, u, g, _, h, v, w, f, b, k, C, W, F, T, I, D, A, S, R, M, j, E, O, G, z, P;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.queryData(t, "tools");
                                case 2:
                                    r = a.sent,
                                    n = [],
                                    i = Object(y["a"])(r.rows);
                                    try {
                                        for (i.s(); !(s = i.n()).done; )
                                            o = s.value,
                                            c = e.getAtomic(o.template_id),
                                            n.push(Object(x["a"])(Object(x["a"])({}, o), c))
                                    } catch (B) {
                                        i.e(B)
                                    } finally {
                                        i.f()
                                    }
                                    return a.next = 8,
                                    e.queryData(t, "mbs");
                                case 8:
                                    l = a.sent,
                                    p = Object(y["a"])(l.rows);
                                    try {
                                        for (p.s(); !(m = p.n()).done; )
                                            d = m.value,
                                            u = e.getAtomic(d.template_id),
                                            n.push(Object(x["a"])(Object(x["a"])({}, d), u))
                                    } catch (B) {
                                        p.e(B)
                                    } finally {
                                        p.f()
                                    }
                                    return a.next = 13,
                                    e.getToolsCrop(t);
                                case 13:
                                    if (g = a.sent,
                                    _ = 0,
                                    null != g) {
                                        h = Object(y["a"])(g);
                                        try {
                                            for (h.s(); !(v = h.n()).done; )
                                                w = v.value,
                                                e.count(w.next_availability, w.asset_id),
                                                298596 === w.template_id ? _ += 54 : 298595 === w.template_id && (_ += 36)
                                        } catch (B) {
                                            h.e(B)
                                        } finally {
                                            h.f()
                                        }
                                    }
                                    for (f = 0,
                                    b = 0,
                                    k = 0,
                                    C = 0,
                                    W = 0,
                                    F = 0,
                                    T = n; F < T.length; F++)
                                        I = T[F],
                                        f += I.cost_durabiltity * I.charge_time / 5,
                                        b += I.cost_energy * I.charge_time / 5,
                                        "tools" === I.type_mine && ("Food" == I.type && (k += I.charge_time * I.reward_rate),
                                        "Wood" == I.type && (W += I.charge_time * I.reward_rate),
                                        "Gold" == I.type && (C += I.charge_time * I.reward_rate));
                                    for (D = C - f,
                                    A = k - (b + _),
                                    S = W,
                                    R = 0,
                                    M = 0,
                                    j = n; M < j.length; M++)
                                        E = j[M],
                                        e.count(E.next_availability, E.asset_id),
                                        "tools" === E.type_mine ? "Food" === E.type ? (O = parseInt(E.reward_rate * E.charge_time * e.tokenFWF - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += O) : "Wood" === E.type ? (G = parseInt(E.reward_rate * E.charge_time * e.tokenFWW - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += G) : "Gold" === E.type && (z = parseInt(E.reward_rate * E.charge_time * e.tokenFWG - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += z) : (P = parseInt(E.reward_rate * E.charge_time * e.fcoin - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += P);
                                    e.model.find((function(a) {
                                        return a.wallet === t && (a.tools = n,
                                        !0) && (a.daily_cost_mine = {
                                            sumGoldProfit: D,
                                            sumFoodProfit: A,
                                            sumWoodProfit: S
                                        },
                                        !0) && (a.profit = R - _ * e.tokenFWF,
                                        !0) && (a.crops = g,
                                        !0) && (a.cost_crops = _,
                                        !0)
                                    }
                                    ));
                                case 28:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                syncAccounts: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    r = [],
                                    r = 1 === t ? e.model : e.readAccounts(),
                                    n = Object(y["a"])(r);
                                    try {
                                        for (n.s(); !(i = n.n()).done; )
                                            s = i.value,
                                            e.loadData(s.wallet),
                                            e.loadDataUserToken(s.wallet),
                                            e.loadDataTools(s.wallet),
                                            e.loadDataInBug(s.wallet),
                                            e.loadDataAnimals(s.wallet),
                                            e.loadDataSum()
                                    } catch (o) {
                                        n.e(o)
                                    } finally {
                                        n.f()
                                    }
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataCrop: function(t) {
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    console.log(t);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                loadDataAnimals: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s, o, c, l, p;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.getAnimals(t);
                                case 2:
                                    if (r = a.sent,
                                    n = [],
                                    i = [],
                                    s = 0,
                                    o = 0,
                                    null === r)
                                        e.model.find((function(e) {
                                            return e.wallet === t && (e.cows = null,
                                            !0) && (e.sumCostCows = null,
                                            !0) && (e.sumCostChickens = null,
                                            !0) && (e.chickens = null,
                                            !0)
                                        }
                                        ));
                                    else {
                                        c = Object(y["a"])(r);
                                        try {
                                            for (c.s(); !(l = c.n()).done; )
                                                p = l.value,
                                                e.count(p.next_availability, p.asset_id),
                                                298607 === p.template_id && (n.push(p),
                                                o += 6),
                                                298614 === p.template_id && (i.push(p),
                                                s += 4)
                                        } catch (m) {
                                            c.e(m)
                                        } finally {
                                            c.f()
                                        }
                                        e.model.find((function(e) {
                                            return e.wallet === t && (e.cows = n,
                                            !0) && (e.sumCostCows = o,
                                            !0) && (e.sumCostChickens = s,
                                            !0) && (e.chickens = i,
                                            !0)
                                        }
                                        ))
                                    }
                                case 8:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataInBug: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.countItemInBug(t);
                                case 2:
                                    r = a.sent,
                                    e.model.find((function(e) {
                                        return e.wallet === t && (e.itemInbug = r.data.templates,
                                        !0)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataSum: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    a = 0,
                                    r = 0,
                                    t.model.forEach((function(t) {
                                        a += parseFloat(t.profit),
                                        r += parseFloat(t.data_cpu.balance)
                                    }
                                    )),
                                    t.dataProfit = a.toFixed(2),
                                    t.dataBalance = r.toFixed(2);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getColorStyle: function() {
                    return " background: rgb(20,14,138);\n                    background: linear-gradient(90deg, rgba(20,14,138,1) 0%, rgba(32,32,200,1) 45%, rgba(80,98,233,1) 100%); "
                },
                currencyFormat: function(t) {
                    return t.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                },
                getColorPercent: function(t) {
                    return t > 5 ? "red" : "green"
                },
                getUrlAtomic2: function() {
                    var t = ["https://wax-atomic-api.eosphere.io", "https://aa.wax.blacklusion.io"]
                      , e = t[Math.floor(Math.random() * t.length)];
                    return e
                },
                getFcoin: function() {
                    var t = this
                      , e = this.getUrlAtomic2();
                    this.$axios.get("".concat(e, "/atomicmarket/v1/sales?collection_name=farmersworld&template_id=260676&symbol=WAX&sort=price&order=asc&limit=1&state=1")).then((function(e) {
                        t.fcoin = e.data.data[0].price.amount / 1e8
                    }
                    ))
                },
                getTokenUser: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.queryTokenUser({
                                        code: "farmerstoken",
                                        account: t,
                                        symbol: null
                                    });
                                case 2:
                                    return r = a.sent,
                                    n = [],
                                    r.forEach((function(t) {
                                        n.push({
                                            amount: t.split(" ")[0],
                                            currency: t.split(" ")[1]
                                        })
                                    }
                                    )),
                                    a.abrupt("return", {
                                        token_balances: n
                                    });
                                case 6:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                queryTokenUser: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = ["https://wax.eoseoul.io", "https://wax.eosphere.io"],
                                    n = e.getRandomNumber(0, r.length),
                                    i = "".concat(r[n], "/v1/chain/get_currency_balance"),
                                    t.json = !0,
                                    a.abrupt("return", e.$axios.post(i, t).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                countFarmCoin: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = e.getUrlAtomic(),
                                    a.abrupt("return", e.$axios.post("".concat(r, "/atomicassets/v1/assets/_count?collection_name=farmersworld&owner=").concat(t, "&schema_name=farmercoins")).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                countItemInBug: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = e.getUrlAtomic(),
                                    a.abrupt("return", e.$axios.get("".concat(r, "/atomicassets/v1/accounts/").concat(t, "/farmersworld")).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getUrlAtomic: function() {
                    var t = ["https://wax-aa.eu.eosamsterdam.net", "https://wax-atomic-api.eosphere.io", "https://wax-aa.eosdublin.io"]
                      , e = t[Math.floor(Math.random() * t.length)];
                    return e
                },
                queryData: function(t, e) {
                    var a = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function r() {
                        return regeneratorRuntime.wrap((function(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", a.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: e,
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 2,
                                        key_type: "i64",
                                        limit: "100",
                                        reverse: !1,
                                        show_payer: !1
                                    }));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                },
                getExchang: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "config",
                                        table_key: "",
                                        lower_bound: "",
                                        upper_bound: "",
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    t.fee = a.rows[0].fee,
                                    e.abrupt("return", a && a.rows.length > 0 ? a.rows[0] : null);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getAnimals: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "animals",
                                        table_key: "",
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 2,
                                        key_type: "i64",
                                        limit: 100,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getPic: function(t) {
                    return "https://ipfs.io/ipfs/" + t
                },
                getColorTime: function(t) {
                    return "00:00:00" === t ? "red" : "#424242"
                },
                getColorCost: function(t) {
                    return t < 0 ? "background: rgb(153,15,15);\n                    background: linear-gradient(90deg, rgba(153,15,15,1) 0%, rgba(208,42,42,1) 33%, rgba(255,130,130,1) 100%);" : "background: rgb(1,77,6);\n                    background: linear-gradient(90deg, rgba(1,77,6,1) 0%, rgba(9,121,33,1) 33%, rgba(4,226,93,1) 100%);"
                },
                edit: function(t, e) {
                    this.editing ? (this.editing = null,
                    this.editingIndex = -1) : (this.editing = e,
                    this.editingIndex = t)
                },
                filter: function(t, e, a) {
                    if (t.header)
                        return !1;
                    var r = function(t) {
                        return null != t ? t : ""
                    }
                      , n = r(a)
                      , i = r(e);
                    return n.toString().toLowerCase().indexOf(i.toString().toLowerCase()) > -1
                },
                readAccounts: function() {
                    var t = ((new URL(window.location.href)).searchParams.get("waxid") || this.$cookies.get("waxid")), e = []; 
                    e = null != t ? t.split(",") : [];
                    for (var a = [], r = 0; r < e.length; r++)
                        a[r] = {
                            wallet: e[r],
                            text: e[r],
                            account: {
                                balances: ["0.0000 WOOD", "0.0000 GOLD", "0.0000 FOOD"]
                            },
                            data_cpu: {
                                cpu_percent: 0,
                                balance: 0,
                                stake: 0
                            },
                            user_token: "",
                            tools: "",
                            farmCoin: "",
                            crops: "",
                            cost_crops: ""
                        };
                    return this.model = a,
                    a
                },
                getToolsCrop: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "crops",
                                        table_key: "",
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 2,
                                        key_type: "i64",
                                        limit: 100,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                get_production_state: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "drhemsworlds",
                                        scope: "drhemsworlds",
                                        table: "players",
                                        lower_bound: t,
                                        upper_bound: "",
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows[0] : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getAccountCPU: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = e.getRandomNumber(0, e.waxRpcDomain.length),
                                    a.abrupt("return", e.$axios.post("".concat(e.waxRpcDomain[r], "/v1/chain/get_account"), {
                                        account_name: t
                                    }).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getAccount: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "accounts",
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 1,
                                        key_type: "",
                                        limit: "100",
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows[0] : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                query: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = e.getRandomNumber(0, e.waxRpcDomain.length),
                                    n = "".concat(e.waxRpcDomain[r], "/v1/chain/get_table_rows"),
                                    t.json = !0,
                                    a.abrupt("return", e.$axios.post(n, t).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getRandomNumber: function(t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                },
                getColorCPU: function(t) {
                    return t > 90 ? "red" : t > 70 ? "orange" : t > 30 ? "green" : t >= 0 ? "blue" : ""
                },
                count: function(t, e) {
                    var a = setInterval((function() {
                        var r = new Date(1e3 * t).getTime()
                          , n = (new Date).getTime();
                        if (r > n) {
                            var i = new Date(1e3 * t).getTime()
                              , s = (new Date).getTime()
                              , o = i - s
                              , c = Math.floor(o % 864e5 / 36e5)
                              , l = Math.floor(o % 36e5 / 6e4)
                              , p = Math.floor(o % 6e4 / 1e3);
                            document.getElementById(e).textContent = c.toString().padStart(2, "0") + ":" + l.toString().padStart(2, "0") + ":" + p.toString().padStart(2, "0")
                        } else
                            clearInterval(a),
                            document.getElementById(e).textContent = "00:00:00"
                    }
                    ), 1e3)
                },
                countDownTimer: function(t) {
                    var e = new Date(1e3 * t).getTime()
                      , a = (new Date).getTime();
                    if (e > a) {
                        var r = new Date(1e3 * t).getTime()
                          , n = (new Date).getTime()
                          , i = r - n
                          , s = Math.floor(i % 864e5 / 36e5)
                          , o = Math.floor(i % 36e5 / 6e4)
                          , c = Math.floor(i % 6e4 / 1e3);
                        return s.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0") + ":" + c.toString().padStart(2, "0")
                    }
                    return "00:00:00"
                },
                getColorEnergy: function(t) {
                    return t > 50 ? "background: rgb(1,77,6);\n                    background: linear-gradient(90deg, rgba(1,77,6,1) 0%, rgba(9,121,33,1) 33%, rgba(4,226,93,1) 100%);" : t > 20 ? "background: rgb(226,112,4);\n                    background: linear-gradient(90deg, rgba(226,112,4,1) 0%, rgba(226,118,16,1) 33%, rgba(255,175,100,1) 100%);" : t >= 0 ? "background: rgb(153,15,15);\n                    background: linear-gradient(90deg, rgba(153,15,15,1) 0%, rgba(208,42,42,1) 33%, rgba(255,130,130,1) 100%);" : ""
                },
                getTokenFWF: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "alcorammswap",
                                        scope: "alcorammswap",
                                        table: "pairs",
                                        table_key: "",
                                        lower_bound: 489,
                                        upper_bound: 489,
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    r = parseFloat(a.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(a.rows[0].pool2.quantity.split(" ")[0]),
                                    t.tokenFWF = r,
                                    e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getTokenFWW: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "alcorammswap",
                                        scope: "alcorammswap",
                                        table: "pairs",
                                        table_key: "",
                                        lower_bound: 501,
                                        upper_bound: 501,
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    r = parseFloat(a.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(a.rows[0].pool2.quantity.split(" ")[0]),
                                    t.tokenFWW = r,
                                    e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getTokenFWG: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "alcorammswap",
                                        scope: "alcorammswap",
                                        table: "pairs",
                                        table_key: "",
                                        lower_bound: 503,
                                        upper_bound: 503,
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    r = parseFloat(a.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(a.rows[0].pool2.quantity.split(" ")[0]),
                                    t.tokenFWG = r,
                                    e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getWAXTHB: function() {
                    var t = this;
                    this.$axios.get("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300,9119&convert_id=2809").then((function(e) {
                        t.WAXTHB = e.data.data[2300].quote[2809].price
                    }
                    ))
                },
                getWAXUSD: function() {
                    var t = this;
                    this.$axios.get("https://api.coingecko.com/api/v3/simple/price?ids=wax&vs_currencies=usd").then((function(e) {
                        t.WAXUSD = e.data.wax.usd
                    }
                    ))
                },
                getDonate: function() {
                    var t = this
                      , e = JSON.stringify({
                        json: !0,
                        limit: 100,
                        code: "eosio.token",
                        scope: "jakkapongfmw",
                        table: "accounts",
                        lower_bound: ""
                    });
                    this.$axios.post("https://api.wax.alohaeos.com/v1/chain/get_table_rows", e).then((function(e) {
                        t.donatePercent = 100 * parseInt(e.data.rows[0].balance.split(" ")[0]) / 1e3,
                        t.donate = parseInt(e.data.rows[0].balance.split(" ")[0])
                    }
                    ))
                },
                getAtomic: function(t) {
                    var e = {
                        203881: {
                            template_name: "Axe",
                            img: "QmUCg2d1Ww2734tiCwEPA5s3WL1Pr9jMTNsoPx3A9vKsJe",
                            cost_energy: 10,
                            cost_durabiltity: 5,
                            charge_time: 24,
                            reward_rate: 5,
                            type_mine: "tools"
                        },
                        203883: {
                            template_name: "Saw",
                            img: "QmPiXkBCNYgKw1J4Yxnj9Z6RUPfmxER5ePPc8YCkdykinN",
                            cost_energy: 30,
                            cost_durabiltity: 15,
                            charge_time: 24,
                            reward_rate: 17,
                            type_mine: "tools"
                        },
                        203886: {
                            template_name: "Chainsaw",
                            img: "QmZFGkTKNGb52N7B8JDKC8WpRmAXoGRodb3fuDn8rtM8Eh",
                            cost_energy: 60,
                            cost_durabiltity: 45,
                            charge_time: 24,
                            reward_rate: 54,
                            type_mine: "tools"
                        },
                        203887: {
                            template_name: "Fishing Rod",
                            img: "QmVy4xphMjDCYGmzQR6FhU8E6gHEaMpKbzf39wKFyqNBVV",
                            cost_energy: 0,
                            cost_durabiltity: 5,
                            charge_time: 24,
                            reward_rate: 5,
                            type_mine: "tools"
                        },
                        203888: {
                            template_name: "Fishing Net",
                            img: "QmPRWao5gLUmTktJZHdEg7A4dLYA9TzBjSGDvLNk3aCeh4",
                            cost_energy: 0,
                            cost_durabiltity: 20,
                            charge_time: 24,
                            reward_rate: 20,
                            type_mine: "tools"
                        },
                        203889: {
                            template_name: "Fishing Boat",
                            img: "QmSWBPJ5edSngtFAZMBw26EjexWMMYTHcHghWfSp9aWMdq",
                            cost_energy: 0,
                            cost_durabiltity: 32,
                            charge_time: 24,
                            reward_rate: 80,
                            type_mine: "tools"
                        },
                        203891: {
                            template_name: "Mining Excavator",
                            img: "QmfM1hip56o1sUKfQFEhVVMjMcwpnC61dNwEtPrV67tagy",
                            cost_energy: 133,
                            cost_durabiltity: 5,
                            charge_time: 12,
                            reward_rate: 100,
                            type_mine: "tools"
                        },
                        260763: {
                            template_name: "Stone Axe",
                            img: "QmPUoWpAkUVAhWo2EFwqaGxEczBptftCv5cdJXsFvfGr6T",
                            cost_energy: 5,
                            cost_durabiltity: 3,
                            charge_time: 24,
                            reward_rate: 1.7,
                            type_mine: "tools"
                        },
                        378691: {
                            template_name: "Ancient Stone Axe",
                            img: "QmPuu1uWsGPouvWTKdAgjViaLqBkW7BHHNPPUu6uma9Qo3",
                            cost_energy: 4,
                            cost_durabiltity: 1,
                            charge_time: 12,
                            reward_rate: .7,
                            type_mine: "tools"
                        },
                        260628: {
                            template_name: "Bronze Member",
                            img: "QmTdtuSs3WkL5XtWbqQizbRpXWptqL3QTK4J8p54tfqjoc",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 2,
                            type_mine: "mbs"
                        },
                        260629: {
                            template_name: "Silver Member",
                            img: "QmZWg1mP2UNcSwhrYNVqjk16BnhcWCz3oAva8BfiTNB3J4",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 4,
                            type_mine: "mbs"
                        },
                        260631: {
                            template_name: "Gold Member",
                            img: "QmTVuzynPNvydytDRYNj3XsjeeC6tYcLqxBGaksDuq6HmX",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 8,
                            type_mine: "mbs"
                        },
                        260635: {
                            template_name: "Diamond Member",
                            img: "QmTwKGD9gxhNzm19JkGBaDwWxczwGLmPoMVWFwdfPwE7bG",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 16,
                            type_mine: "mbs"
                        },
                        260636: {
                            template_name: "Bronze Member",
                            img: "Qmabn1uCmMiM7LeyLfXx8jQDjdBej5CE54FyHXWQnWSewd",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 2,
                            type_mine: "mbs"
                        },
                        260638: {
                            template_name: "Silver Member",
                            img: "QmXTsEBUb7XziEPWj9iR4ATjRJhWvTPbixKeih8na7uB9d",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 4,
                            type_mine: "mbs"
                        },
                        260639: {
                            template_name: "Gold Member",
                            img: "QmVZpBCu6wA8cCjHCXwTXdaFy8HAy2xeY6j6N5cHhAaLKB",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 8,
                            type_mine: "mbs"
                        },
                        260641: {
                            template_name: "Diamond Member",
                            img: "QmRsXyKt3vdSFti5gSbDh12MiBAh1pQxSyAWuLwyvUSk8E",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 16,
                            type_mine: "mbs"
                        },
                        260642: {
                            template_name: "Bronze Member",
                            img: "QmY6uZJiZxU4rZGw1sWdMpjzmDLYzzCaAXtQjXe13Psre2",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 2,
                            type_mine: "mbs"
                        },
                        260644: {
                            template_name: "Silver Member",
                            img: "Qmf9brZdRDffpayuVW7pfiSkFeD8vLzY7TmomEAAKxRW3e",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 4,
                            type_mine: "mbs"
                        },
                        260647: {
                            template_name: "Gold Member",
                            img: "Qmeh7xHbCfdJzj6NBPxR3dyN6FRPkze1Wrzd63DA4N1AN2",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 8,
                            type_mine: "mbs"
                        },
                        260648: {
                            template_name: "Diamond Member",
                            img: "QmUN1GRpZhM89WNV9vq2fN1mp1ARMGZMGoCmjtsgCZJU9C",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 16,
                            type_mine: "mbs"
                        }
                    };
                    return e[t]
                }
            }
        })
          , F = W
          , T = a("40dc")
          , I = a("8212")
          , D = a("8336")
          , A = a("b0af")
          , S = a("99d9")
          , R = a("cc20")
          , M = a("62ad")
          , j = a("2b5d")
          , E = a("a523")
          , O = a("c377")
          , G = a("ce7e")
          , z = a("132d")
          , P = a("adda")
          , B = a("8860")
          , X = a("da13")
          , U = a("5d23")
          , H = a("8e36")
          , V = a("0fd9b")
          , N = a("2fa4")
          , L = a("3a2f")
          , q = Object(p["a"])(F, f, b, !1, null, null, null)
          , Q = q.exports;
        d()(q, {
            VAppBar: T["a"],
            VAvatar: I["a"],
            VBtn: D["a"],
            VCard: A["a"],
            VCardText: S["b"],
            VCardTitle: S["c"],
            VChip: R["a"],
            VCol: M["a"],
            VCombobox: j["a"],
            VContainer: E["a"],
            VDataIterator: O["a"],
            VDivider: G["a"],
            VIcon: z["a"],
            VImg: P["a"],
            VList: B["a"],
            VListItem: X["a"],
            VListItemContent: U["a"],
            VListItemSubtitle: U["b"],
            VListItemTitle: U["c"],
            VProgressLinear: H["a"],
            VRow: V["a"],
            VSpacer: N["a"],
            VTooltip: L["a"]
        });
        var $ = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-container", {
                attrs: {
                    fluid: ""
                }
            }, [a("v-app-bar", {
                attrs: {
                    app: "",
                    color: "#212121",
                    dark: ""
                }
            }, [a("div", {
                staticClass: "d-flex align-center text-nowrap"
            }, [a("v-list-item", {
                attrs: {
                    "two-line": ""
                }
            }, [a("v-list-item-content", [a("v-list-item-title", [t._v("FWorld")]), a("v-list-item-subtitle", [t._v("V1.5.0")])], 1)], 1)], 1), a("v-spacer"), a("v-avatar", {
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "https://wax.alcor.exchange/_nuxt/img/wax_eosio.token.4f71330.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(t.WAXTHB.toFixed(2)))]), a("v-avatar", {
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "img/icon/FWW.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(parseFloat(t.fwwToken).toFixed(2)))]), a("v-avatar", {
                staticClass: "mx-1 caption",
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "img/icon/FWG.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(parseFloat(t.fwgToken).toFixed(2)))]), a("v-avatar", {
                staticClass: "mx-1 caption",
                attrs: {
                    size: "20"
                }
            }, [a("img", {
                attrs: {
                    width: "20",
                    src: "img/icon/FWF.png",
                    alt: ""
                }
            })]), a("span", {
                staticClass: "mx-1 caption"
            }, [t._v(t._s(parseFloat(t.fwfToken).toFixed(2)))]), a("v-btn", {
                staticClass: "mx-1 caption",
                attrs: {
                    fab: "",
                    dark: "",
                    "x-small": "",
                    color: t.getColorPercent(t.fee)
                }
            }, [t._v(" " + t._s(t.fee) + "% ")])], 1), a("v-row", {
                staticClass: "text-center"
            }, [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }), a("v-col", {
                staticClass: "mb-4"
            }, [a("h1", {
                staticClass: "display-1 font-weight-bold mb-3"
            }, [t._v(" i"), a("span", {
                staticClass: "teal--text font-weight-black"
            }, [t._v("Cost")])]), a("span", [t._v(" Go to => "), a("a", {
                staticClass: "teal--text",
                attrs: {
                    href: "/"
                }
            }, [a("span", {
                staticClass: "teal--text font-weight-black"
            }, [t._v("iCheck")])])]), a("br"), a("span", {
                staticClass: "caption"
            }, [t._v(" You can donate us WAX to")]), t._v(" "), a("span", {
                staticClass: "teal--text caption"
            }, [t._v("jakkapongfmw")]), a("br"), a("span", {
                staticClass: "caption"
            }, [t._v("All donations will use to maintain this website. ")]), a("br"), a("span", {
                staticClass: "amber--text caption"
            }, [t._v(t._s(t.donate) + "/3000 ￦")]), a("br"), a("v-row", {
                staticClass: "mb-2",
                attrs: {
                    justify: "center",
                    "no-gutters": ""
                }
            }, [a("v-col", {
                attrs: {
                    col: "10",
                    md: "2",
                    lg: "2",
                    sm: "10"
                }
            }, [a("v-progress-linear", {
                attrs: {
                    height: "7",
                    color: "teal",
                    "buffer-value": "0",
                    stream: ""
                },
                model: {
                    value: t.donatePercent,
                    callback: function(e) {
                        t.donatePercent = e
                    },
                    expression: "donatePercent"
                }
            })], 1)], 1), a("span", {
                staticClass: "caption"
            }, [t._v("powered by "), a("strong", [a("a", {
                staticClass: "teal--text",
                attrs: {
                    href: "https://www.facebook.com/ToToReplay"
                }
            }, [t._v("Nadef")])])])], 1)], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12",
                    md: "4",
                    lg: "4",
                    sm: "12"
                }
            }, [a("v-card", {
                staticClass: "elevation-5",
                attrs: {
                    cols: "12",
                    md: "2",
                    rounded: "xl"
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    dense: "",
                    flat: "",
                    height: "30"
                }
            }, [a("v-toolbar-title", {
                staticClass: "text-body-2 teal--text font-weight-black flex text-center"
            }, [t._v(" FWF Mining Tools ")])], 1), a("v-card-text", {
                staticClass: "subtitle-1"
            }, t._l(this.orderedUsers(t.arrToolsMineFWF), (function(e) {
                return a("v-row", {
                    key: e.id
                }, [a("v-col", {
                    attrs: {
                        cols: "2",
                        lg: "2",
                        md: "2"
                    }
                }, [a("v-img", {
                    attrs: {
                        width: "100",
                        src: e.img
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "5",
                        lg: "4",
                        md: "4"
                    }
                }, [a("span", {
                    staticClass: "caption"
                }, [t._v("Atomic : "), e.price < parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) ? a("v-chip", {
                    attrs: {
                        href: e.link,
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])]) : a("v-chip", {
                    attrs: {
                        href: e.link,
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Last Sold : " + t._s(e.last_sale) + " ￦")]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v(" ROI : "), e.price < parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) ? a("span", [parseInt(e.price / (24 * e.reward * t.fwfToken - (e.costDurability + e.costEnergy))) > 0 ? a("span", [t._v(" " + t._s(parseInt(e.price / (24 * e.reward * t.fwfToken - (e.costDurability + e.costEnergy)))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])]) : a("span", [t._v(t._s(parseInt((e.gold * t.fwgToken + e.wood * t.fwwToken) / (24 * e.reward * t.fwfToken - (e.costDurability + e.costEnergy)))) + " Day")])]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Daily : "), a("v-chip", {
                    attrs: {
                        color: "green darken-3",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(24 * e.reward * t.fwfToken - (e.costDurability + e.costEnergy))) + " ￦")])], 1), a("br")]), a("v-col", [a("span", {
                    staticClass: "caption"
                }, [t._v("Craft Cost : "), parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) < e.price || "?" === e.price ? a("v-chip", {
                    attrs: {
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken)) + " ￦")]) : a("v-chip", {
                    attrs: {
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken)) + " ￦")])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/gold_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.gold) + "(" + t._s(parseInt(e.gold * t.fwgToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/wood_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.wood) + "(" + t._s(parseInt(e.wood * t.fwwToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Minted : " + t._s(e.minted) + " ")])])], 1)
            }
            )), 1)], 1)], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "4",
                    lg: "4",
                    sm: "12"
                }
            }, [a("v-card", {
                staticClass: "elevation-5",
                attrs: {
                    cols: "12",
                    md: "2",
                    rounded: "xl"
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    dense: "",
                    flat: "",
                    height: "30"
                }
            }, [a("v-toolbar-title", {
                staticClass: "text-body-2 teal--text font-weight-black flex text-center"
            }, [t._v(" FWW Mining Tools ")])], 1), a("v-card-text", {
                staticClass: "subtitle-1"
            }, t._l(this.orderedUsers(t.arrToolsMineFWW), (function(e, r) {
                return a("v-row", {
                    key: r
                }, [a("v-col", {
                    attrs: {
                        cols: "2",
                        lg: "2",
                        md: "2"
                    }
                }, [a("v-img", {
                    attrs: {
                        width: "100",
                        src: e.img
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "5",
                        lg: "4",
                        md: "4"
                    }
                }, [a("span", {
                    staticClass: "caption"
                }, [t._v("Atomic : "), e.price < parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) ? a("v-chip", {
                    attrs: {
                        href: e.link,
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])]) : a("v-chip", {
                    attrs: {
                        href: e.link,
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Last Sold : " + t._s(e.last_sale) + " ￦")]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("ROI : "), e.price < parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) ? a("span", [parseInt(e.price / (e.reward * e.ChargeTime * t.fwwToken - (e.costDurability + e.costEnergy))) > 0 ? a("span", [t._v(" " + t._s(parseInt(e.price / (24 * e.reward * t.fwwToken - (e.costDurability + e.costEnergy)))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])]) : a("span", [t._v(" " + t._s(parseInt((e.gold * t.fwgToken + e.wood * t.fwwToken) / (e.reward * e.ChargeTime * t.fwwToken - (e.costDurability + e.costEnergy)))) + " Day ")])]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Daily : "), a("v-chip", {
                    attrs: {
                        color: "green darken-3",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.reward * e.ChargeTime * t.fwwToken - (e.costDurability + e.costEnergy))) + " ￦")])], 1), a("br")]), a("v-col", [a("span", {
                    staticClass: "caption"
                }, [t._v("Craft Cost : "), parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) < e.price || "?" === e.price ? a("v-chip", {
                    staticClass: "ma-1",
                    attrs: {
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken)) + " ￦")]) : a("v-chip", {
                    staticClass: "ma-1",
                    attrs: {
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken)) + " ￦")])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/gold_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.gold) + "(" + t._s(parseInt(e.gold * t.fwgToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/wood_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.wood) + "(" + t._s(parseInt(e.wood * t.fwwToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Minted : " + t._s(e.minted) + " ")])])], 1)
            }
            )), 1)], 1)], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "4",
                    lg: "4",
                    sm: "12"
                }
            }, [a("v-card", {
                staticClass: "elevation-5",
                attrs: {
                    cols: "12",
                    md: "2",
                    rounded: "xl"
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    dense: "",
                    flat: "",
                    height: "30"
                }
            }, [a("v-toolbar-title", {
                staticClass: "text-body-2 teal--text font-weight-black flex text-center"
            }, [t._v(" FWG Mining Tools ")])], 1), a("v-card-text", {
                staticClass: "subtitle-1"
            }, t._l(t.arrToolsMineFWG, (function(e, r) {
                return a("v-row", {
                    key: r
                }, [a("v-col", {
                    attrs: {
                        cols: "2",
                        lg: "2",
                        md: "2"
                    }
                }, [a("v-img", {
                    attrs: {
                        width: "100",
                        src: e.img
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "5",
                        lg: "4",
                        md: "4"
                    }
                }, [a("span", {
                    staticClass: "caption"
                }, [t._v("Atomic : "), e.price < parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) ? a("v-chip", {
                    attrs: {
                        href: e.link,
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])]) : a("v-chip", {
                    attrs: {
                        href: e.link,
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])])], 1), a("br"), a("span", {
                    staticClass: "caption text-no-wrap"
                }, [t._v("Last Sold : " + t._s(e.last_sale) + " ￦")]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("ROI : "), e.price < parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) ? a("span", [parseInt(e.price / (12 * e.reward * t.fwgToken - (e.costDurability + e.costEnergy))) > 0 ? a("span", [t._v(" " + t._s(parseInt(e.price / (12 * e.reward * t.fwgToken - (e.costDurability + e.costEnergy)))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])]) : a("span", [t._v(t._s(parseInt((e.gold * t.fwgToken + e.wood * t.fwwToken) / (12 * e.reward * t.fwgToken - (e.costDurability + e.costEnergy)))) + " Day")])]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Daily : "), a("v-chip", {
                    attrs: {
                        color: "green darken-3",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(12 * e.reward * t.fwgToken - (e.costDurability + e.costEnergy))) + " ￦")])], 1), a("br")]), a("v-col", [a("span", {
                    staticClass: "caption"
                }, [t._v("Craft Cost : "), parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken) < e.price || "?" === e.price ? a("v-chip", {
                    staticClass: "ma-1",
                    attrs: {
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken)) + " ￦")]) : a("v-chip", {
                    staticClass: "ma-1",
                    attrs: {
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.wood * t.fwwToken)) + " ￦")])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/gold_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.gold) + "(" + t._s(parseInt(e.gold * t.fwgToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/wood_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.wood) + "(" + t._s(parseInt(e.wood * t.fwwToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Minted : " + t._s(e.minted) + " ")])])], 1)
            }
            )), 1)], 1)], 1)], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12",
                    md: "4",
                    lg: "4",
                    sm: "12"
                }
            }, [a("v-card", {
                staticClass: "elevation-5",
                attrs: {
                    cols: "12",
                    md: "2",
                    rounded: "xl"
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    dense: "",
                    flat: "",
                    height: "30"
                }
            }, [a("v-toolbar-title", {
                staticClass: "text-body-2 teal--text font-weight-black flex text-center"
            }, [t._v(" FWF Membership ")])], 1), a("v-card-text", {
                staticClass: "subtitle-1"
            }, t._l(this.orderedUsers(t.dataMemFWF), (function(e) {
                return a("v-row", {
                    key: e.id
                }, [a("v-col", {
                    attrs: {
                        cols: "2",
                        lg: "2",
                        md: "2"
                    }
                }, [a("v-img", {
                    attrs: {
                        width: "100",
                        src: e.img
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "5",
                        lg: "4",
                        md: "4"
                    }
                }, [a("span", {
                    staticClass: "caption"
                }, [t._v("Atomic : "), e.price < parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) ? a("v-chip", {
                    attrs: {
                        href: e.link,
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])]) : a("v-chip", {
                    attrs: {
                        href: e.link,
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Last Sold : " + t._s(e.last_sale) + " ￦")]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("ROI : "), e.price < parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) ? a("span", [parseInt(e.price / (e.reward * t.fcoin - e.costEnergy)) > 0 ? a("span", [t._v(" " + t._s(parseInt(e.price / (e.reward * t.fcoin - e.costEnergy))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])]) : a("span", [parseInt((e.gold * t.fwgToken + e.fcoin * t.fcoin) / (e.reward * t.fcoin - e.costEnergy)) > 0 ? a("span", [t._v(" " + t._s(parseInt((e.gold * t.fwgToken + e.fcoin * t.fcoin) / (e.reward * t.fcoin - e.costEnergy))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])])]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Daily : "), a("v-chip", {
                    attrs: {
                        color: "green darken-3",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.reward * t.fcoin - e.costEnergy)) + " ")])], 1), a("br")]), a("v-col", [a("span", {
                    staticClass: "caption"
                }, [t._v("Craft Cost : "), parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) < e.price || "?" === e.price ? a("v-chip", {
                    attrs: {
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin)) + " ￦")]) : a("v-chip", {
                    attrs: {
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin)) + " ￦")])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/gold_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.gold) + "(" + t._s(parseInt(e.gold * t.fwgToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "18"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/farmercoin.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.fcoin) + "(" + t._s(parseInt(e.fcoin * t.fcoin)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Minted : " + t._s(e.minted) + " ")])])], 1)
            }
            )), 1)], 1)], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "4",
                    lg: "4",
                    sm: "12"
                }
            }, [a("v-card", {
                staticClass: "elevation-5",
                attrs: {
                    cols: "12",
                    md: "2",
                    rounded: "xl"
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    dense: "",
                    flat: "",
                    height: "30"
                }
            }, [a("v-toolbar-title", {
                staticClass: "text-body-2 teal--text font-weight-black flex text-center"
            }, [t._v(" FWW Membership ")])], 1), a("v-card-text", {
                staticClass: "subtitle-1"
            }, t._l(this.orderedUsers(t.dataMemFWW), (function(e) {
                return a("v-row", {
                    key: e.id
                }, [a("v-col", {
                    attrs: {
                        cols: "2",
                        lg: "2",
                        md: "2"
                    }
                }, [a("v-img", {
                    attrs: {
                        width: "100",
                        src: e.img
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "5",
                        lg: "4",
                        md: "4"
                    }
                }, [a("span", {
                    staticClass: "caption"
                }, [t._v("Atomic : "), e.price < parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) ? a("v-chip", {
                    attrs: {
                        href: e.link,
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])]) : a("v-chip", {
                    attrs: {
                        href: e.link,
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Last Sold : " + t._s(e.last_sale) + " ￦")]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("ROI : "), e.price < parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) ? a("span", [parseInt(e.price / (e.reward * t.fcoin - e.costEnergy)) > 0 ? a("span", [t._v(" " + t._s(parseInt(e.price / (e.reward * t.fcoin - e.costEnergy))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])]) : a("span", [parseInt((e.gold * t.fwgToken + e.fcoin * t.fcoin) / (e.reward * t.fcoin - e.costEnergy)) > 0 ? a("span", [t._v(" " + t._s(parseInt((e.gold * t.fwgToken + e.fcoin * t.fcoin) / (e.reward * t.fcoin - e.costEnergy))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])])]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Daily : "), a("v-chip", {
                    attrs: {
                        color: "green darken-3",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.reward * t.fcoin - e.costEnergy)) + " ")])], 1), a("br")]), a("v-col", [a("span", {
                    staticClass: "caption"
                }, [t._v("Craft Cost : "), parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) < e.price || "?" === e.price ? a("v-chip", {
                    attrs: {
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin)) + " ￦")]) : a("v-chip", {
                    attrs: {
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin)) + " ￦")])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/gold_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.gold) + "(" + t._s(parseInt(e.gold * t.fwgToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "18"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/farmercoin.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.fcoin) + "(" + t._s(parseInt(e.fcoin * t.fcoin)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Minted : " + t._s(e.minted) + " ")])])], 1)
            }
            )), 1)], 1)], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "4",
                    lg: "4",
                    sm: "12"
                }
            }, [a("v-card", {
                staticClass: "elevation-5",
                attrs: {
                    cols: "12",
                    md: "2",
                    rounded: "xl"
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    dense: "",
                    flat: "",
                    height: "30"
                }
            }, [a("v-toolbar-title", {
                staticClass: "text-body-2 teal--text font-weight-black flex text-center"
            }, [t._v(" FWG Membership ")])], 1), a("v-card-text", {
                staticClass: "subtitle-1"
            }, t._l(this.orderedUsers(t.dataMemFWG), (function(e) {
                return a("v-row", {
                    key: e.id
                }, [a("v-col", {
                    attrs: {
                        cols: "2",
                        lg: "2",
                        md: "2"
                    }
                }, [a("v-img", {
                    attrs: {
                        width: "100",
                        src: e.img
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "5",
                        lg: "4",
                        md: "4"
                    }
                }, [a("span", {
                    staticClass: "caption"
                }, [t._v("Atomic : "), e.price < parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) ? a("v-chip", {
                    attrs: {
                        href: e.link,
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])]) : a("v-chip", {
                    attrs: {
                        href: e.link,
                        small: "",
                        label: ""
                    }
                }, ["?" === e.price ? a("span", [t._v(t._s(e.price))]) : a("span", [t._v(t._s(parseInt(e.price)) + " ￦")])])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Last Sold : " + t._s(e.last_sale) + " ￦")]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("ROI : "), e.price < parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) ? a("span", [parseInt(e.price / (e.reward * t.fcoin - e.costEnergy)) > 0 ? a("span", [t._v(" " + t._s(parseInt(e.price / (e.reward * t.fcoin - e.costEnergy))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])]) : a("span", [parseInt((e.gold * t.fwgToken + e.fcoin * t.fcoin) / (e.reward * t.fcoin - e.costEnergy)) > 0 ? a("span", [t._v(" " + t._s(parseInt((e.gold * t.fwgToken + e.fcoin * t.fcoin) / (e.reward * t.fcoin - e.costEnergy))) + " Day ")]) : a("span", {
                    staticClass: "title"
                }, [t._v(" 😭 ")])])]), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Daily : "), a("v-chip", {
                    attrs: {
                        color: "green darken-3",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.reward * t.fcoin - e.costEnergy)) + " ")])], 1), a("br")]), a("v-col", [a("span", {
                    staticClass: "caption"
                }, [t._v("Craft Cost : "), parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin) < e.price || "?" === e.price ? a("v-chip", {
                    attrs: {
                        color: "primary",
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin)) + " ￦")]) : a("v-chip", {
                    attrs: {
                        small: "",
                        label: ""
                    }
                }, [t._v(t._s(parseInt(e.gold * t.fwgToken + e.fcoin * t.fcoin)) + " ￦")])], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "20"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/gold_new.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.gold) + "(" + t._s(parseInt(e.gold * t.fwgToken)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [a("v-avatar", {
                    attrs: {
                        size: "18"
                    }
                }, [a("img", {
                    attrs: {
                        width: "20",
                        src: "img/icon/farmercoin.png",
                        alt: ""
                    }
                })]), t._v(" " + t._s(e.fcoin) + "(" + t._s(parseInt(e.fcoin * t.fcoin)) + " ￦) ")], 1), a("br"), a("span", {
                    staticClass: "caption"
                }, [t._v("Minted : " + t._s(e.minted) + " ")])])], 1)
            }
            )), 1)], 1)], 1)], 1)], 1)
        }
          , J = []
          , Y = a("2ef0")
          , K = a.n(Y)
          , Z = {
            name: "Cost",
            mounted: function() {
                var t = this;
                this.mainApp(),
                this.getDonate(),
                this.getFcoin(),
                this.getWAXTHB(),
                this.getWAXUSD(),
                this.getFWF(),
                this.getFWG(),
                this.getFWW(),
                this.getExchang(),
                setInterval((function() {
                    t.getDonate(),
                    t.getFcoin(),
                    t.getWAXTHB(),
                    t.getWAXUSD(),
                    t.getFWF(),
                    t.getFWG(),
                    t.getFWW(),
                    t.getExchang()
                }
                ), 5e3),
                this.mainAppRealtime()
            },
            data: function() {
                return {
                    donatePercent: "",
                    donate: "",
                    fwwToken: "",
                    fwgToken: "",
                    fwfToken: "",
                    fee: 0,
                    fcoin: 0,
                    WAXTHB: 0,
                    WAXUSD: 0,
                    itemSelects: ["THB", "USD", "WAX"],
                    select: "USD",
                    arrToolsFWF: ["203889", "203888", "203887"],
                    arrToolsMineFWF: {
                        203889: {
                            id: 1,
                            template_id: "203889",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203889.png",
                            gold: 3200,
                            wood: 19200,
                            durability: 32,
                            energy: 0,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 80,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203889&order=asc&sort=price&symbol=WAX"
                        },
                        203888: {
                            id: 2,
                            template_id: "203888",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203888.png",
                            gold: 800,
                            wood: 4800,
                            durability: 20,
                            energy: 0,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 20,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203888&order=asc&sort=price&symbol=WAX"
                        },
                        203887: {
                            id: 3,
                            template_id: "203887",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203887.png",
                            gold: 200,
                            wood: 1200,
                            durability: 5,
                            energy: 0,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 5,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203887&order=asc&sort=price&symbol=WAX"
                        }
                    },
                    arrToolsFWG: ["203891"],
                    arrToolsMineFWG: {
                        203891: {
                            template_id: "203891",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203891.png",
                            gold: 4e3,
                            wood: 24e3,
                            durability: 5,
                            energy: 133,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 100,
                            ChargeTime: 12,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203891&order=asc&sort=price&symbol=WAX"
                        }
                    },
                    arrToolsFWW: ["203886", "203883", "203881", "260763", "378691"],
                    arrToolsMineFWW: {
                        203886: {
                            id: 1,
                            template_id: "203886",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203886.png",
                            gold: 3600,
                            wood: 21600,
                            durability: 45,
                            energy: 60,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 54,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203886&order=asc&sort=price&symbol=WAX"
                        },
                        203883: {
                            id: 2,
                            template_id: "203883",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203883.png",
                            gold: 1200,
                            wood: 7200,
                            durability: 15,
                            energy: 30,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 17,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203883&order=asc&sort=price&symbol=WAX"
                        },
                        203881: {
                            id: 3,
                            template_id: "203881",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/203881.png",
                            gold: 400,
                            wood: 2400,
                            durability: 5,
                            energy: 10,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 5,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=203881&order=asc&sort=price&symbol=WAX"
                        },
                        260763: {
                            id: 4,
                            template_id: "260763",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/260763.png",
                            gold: 135,
                            wood: 800,
                            durability: 3,
                            energy: 5,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 1.7,
                            ChargeTime: 24,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=260763&order=asc&sort=price&symbol=WAX"
                        },
                        378691: {
                            id: 4,
                            template_id: "378691",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/mine/378691.png",
                            gold: 20,
                            wood: 110,
                            durability: 1,
                            energy: 4,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: .7,
                            ChargeTime: 12,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=tools&template_id=378691&order=asc&sort=price&symbol=WAX"
                        }
                    },
                    arrMemFWF: ["260639", "260638", "260636"],
                    dataMemFWF: {
                        260639: {
                            id: 1,
                            template_id: "260639",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260639.png",
                            gold: 1600,
                            fcoin: 240,
                            durability: 45,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 8,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260639&order=asc&sort=price&symbol=WAX"
                        },
                        260638: {
                            id: 2,
                            template_id: "260638",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260638.png",
                            gold: 800,
                            fcoin: 120,
                            durability: 15,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 4,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260638&order=asc&sort=price&symbol=WAX"
                        },
                        260636: {
                            id: 3,
                            template_id: "260636",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260636.png",
                            gold: 400,
                            fcoin: 60,
                            durability: 5,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 2,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260636&order=asc&sort=price&symbol=WAX"
                        }
                    },
                    arrMemFWW: ["260631", "260629", "260628"],
                    dataMemFWW: {
                        260631: {
                            id: 1,
                            template_id: "260631",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260631.png",
                            gold: 1600,
                            fcoin: 240,
                            durability: 45,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 8,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260631&order=asc&sort=price&symbol=WAX"
                        },
                        260629: {
                            id: 2,
                            template_id: "260629",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260629.png",
                            gold: 800,
                            fcoin: 120,
                            durability: 15,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 4,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260629&order=asc&sort=price&symbol=WAX"
                        },
                        260628: {
                            id: 3,
                            template_id: "260628",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260628.png",
                            gold: 400,
                            fcoin: 60,
                            durability: 5,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 2,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260628&order=asc&sort=price&symbol=WAX"
                        }
                    },
                    arrMemFWG: ["260647", "260644", "260642"],
                    dataMemFWG: {
                        260647: {
                            id: 1,
                            template_id: "260647",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260647.png",
                            gold: 1600,
                            fcoin: 240,
                            durability: 45,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 8,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260647&order=asc&sort=price&symbol=WAX"
                        },
                        260644: {
                            id: 2,
                            template_id: "260644",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260644.png",
                            gold: 800,
                            fcoin: 120,
                            durability: 15,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 4,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260644&order=asc&sort=price&symbol=WAX"
                        },
                        260642: {
                            id: 3,
                            template_id: "260642",
                            price: "?",
                            last_sale: "?",
                            minted: "?",
                            img: "img/membership/260642.png",
                            gold: 400,
                            fcoin: 60,
                            durability: 5,
                            energy: 100,
                            costDurability: 0,
                            costEnergy: 0,
                            reward: 2,
                            link: "https://wax.atomichub.io/market?collection_name=farmersworld&schema_name=memberships&template_id=260642&order=asc&sort=price&symbol=WAX"
                        }
                    }
                }
            },
            computed: {},
            methods: {
                getColorPercent: function(t) {
                    return t > 5 ? "red" : "green"
                },
                orderedUsers: function(t) {
                    return K.a.orderBy(t, "id")
                },
                mainApp: function() {
                    var t = this
                      , e = this.$cookies.get("select");
                    null === e ? (this.select = "THB",
                    this.$cookies.set("select", this.select, "Sat, 13 Mar 2050 12:25:57 GMT")) : this.select = e,
                    this.arrToolsFWF.forEach((function(e) {
                        t.getMineTool(e, "FWF")
                    }
                    )),
                    this.arrToolsFWW.forEach((function(e) {
                        t.getMineTool(e, "FWW")
                    }
                    )),
                    this.arrToolsFWG.forEach((function(e) {
                        t.getMineTool(e, "FWG")
                    }
                    )),
                    this.arrMemFWF.forEach((function(e) {
                        t.getMembership(e, "FWF")
                    }
                    )),
                    this.arrMemFWW.forEach((function(e) {
                        t.getMembership(e, "FWW")
                    }
                    )),
                    this.arrMemFWG.forEach((function(e) {
                        t.getMembership(e, "FWG")
                    }
                    ))
                },
                mainAppRealtime: function() {
                    var t = this;
                    setInterval((function() {
                        t.arrToolsFWF.forEach((function(e) {
                            t.getMineTool(e, "FWF")
                        }
                        )),
                        t.arrToolsFWW.forEach((function(e) {
                            t.getMineTool(e, "FWW")
                        }
                        )),
                        t.arrToolsFWG.forEach((function(e) {
                            t.getMineTool(e, "FWG")
                        }
                        )),
                        t.arrMemFWF.forEach((function(e) {
                            t.getMembership(e, "FWF")
                        }
                        )),
                        t.arrMemFWW.forEach((function(e) {
                            t.getMembership(e, "FWW")
                        }
                        )),
                        t.arrMemFWG.forEach((function(e) {
                            t.getMembership(e, "FWG")
                        }
                        ))
                    }
                    ), 15e3)
                },
                getExchang: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "config",
                                        table_key: "",
                                        lower_bound: "",
                                        upper_bound: "",
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    t.fee = a.rows[0].fee,
                                    e.abrupt("return", a && a.rows.length > 0 ? a.rows[0] : null);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                query: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = ["https://wax.pink.gg", "https://wax.dapplica.io", "https://wax-bp.wizardsguild.one"],
                                    n = e.getRandomNumber(0, r.length),
                                    i = "".concat(r[n], "/v1/chain/get_table_rows"),
                                    t.json = !0,
                                    a.abrupt("return", e.$axios.post(i, t).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getRandomNumber: function(t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                },
                onChange: function() {
                    this.$cookies.set("select", this.select, "Sat, 13 Mar 2050 12:25:57 GMT"),
                    this.mainApp()
                },
                getUrl: function() {
                    var t = ["https://waxapi.ledgerwise.io", "https://wax.eu.eosamsterdam.net", "https://api.wax.alohaeos.com", "https://wax.dapplica.io", "https://api.wax.eosdetroit.io", "https://wax.blacklusion.io", "https://wax.cryptolions.io", "https://wax.eosphere.io", "https://api.wax.greeneosio.com", "https://wax.pink.gg"]
                      , e = t[Math.floor(Math.random() * t.length)];
                    return e
                },
                getUrlAtomic: function() {
                    var t = ["https://api.wax-aa.bountyblok.io", "https://wax.api.atomicassets.io"]
                      , e = t[Math.floor(Math.random() * t.length)];
                    return e
                },
                getDonate: function() {
                    var t = this
                      , e = JSON.stringify({
                        json: !0,
                        limit: 100,
                        code: "eosio.token",
                        scope: "jakkapongfmw",
                        table: "accounts",
                        lower_bound: ""
                    })
                      , a = this.getUrl();
                    this.$axios.post(a + "/v1/chain/get_table_rows", e).then((function(e) {
                        t.donatePercent = 100 * parseInt(e.data.rows[0].balance.split(" ")[0]) / 1e3,
                        t.donate = parseInt(e.data.rows[0].balance.split(" ")[0])
                    }
                    ))
                },
                getFWW: function() {
                    var t = this
                      , e = JSON.stringify({
                        json: !0,
                        code: "alcorammswap",
                        scope: "alcorammswap",
                        table: "pairs",
                        table_key: "",
                        lower_bound: 501,
                        upper_bound: 501,
                        index_position: 1,
                        key_type: "",
                        limit: 1,
                        reverse: !1,
                        show_payer: !1
                    })
                      , a = this.getUrl();
                    this.$axios.post(a + "/v1/chain/get_table_rows", e).then((function(e) {
                        var a = parseFloat(e.data.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(e.data.rows[0].pool2.quantity.split(" ")[0]);
                        t.fwwToken = a.toFixed(3)
                    }
                    ))
                },
                getFWG: function() {
                    var t = this
                      , e = JSON.stringify({
                        json: !0,
                        code: "alcorammswap",
                        scope: "alcorammswap",
                        table: "pairs",
                        table_key: "",
                        lower_bound: 503,
                        upper_bound: 503,
                        index_position: 1,
                        key_type: "",
                        limit: 1,
                        reverse: !1,
                        show_payer: !1
                    })
                      , a = this.getUrl();
                    this.$axios.post(a + "/v1/chain/get_table_rows", e).then((function(e) {
                        var a = parseFloat(e.data.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(e.data.rows[0].pool2.quantity.split(" ")[0]);
                        t.fwgToken = a.toFixed(3)
                    }
                    ))
                },
                getFWF: function() {
                    var t = this
                      , e = JSON.stringify({
                        json: !0,
                        code: "alcorammswap",
                        scope: "alcorammswap",
                        table: "pairs",
                        table_key: "",
                        lower_bound: 489,
                        upper_bound: 489,
                        index_position: 1,
                        key_type: "",
                        limit: 1,
                        reverse: !1,
                        show_payer: !1
                    })
                      , a = this.getUrl();
                    this.$axios.post(a + "/v1/chain/get_table_rows", e).then((function(e) {
                        var a = parseFloat(e.data.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(e.data.rows[0].pool2.quantity.split(" ")[0]);
                        t.fwfToken = a.toFixed(3)
                    }
                    ))
                },
                getWAXTHB: function() {
                    var t = this;
                    this.$axios.get("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300,9119&convert_id=2809").then((function(e) {
                        t.WAXTHB = e.data.data[2300].quote[2809].price
                    }
                    ))
                },
                getWAXUSD: function() {
                    var t = this;
                    this.$axios.get("https://api.coingecko.com/api/v3/simple/price?ids=wax&vs_currencies=usd").then((function(e) {
                        t.WAXUSD = e.data.wax.usd
                    }
                    ))
                },
                getMineTool: function(t, e) {
                    var a = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function r() {
                        var n;
                        return regeneratorRuntime.wrap((function(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    n = a.getUrlAtomic(),
                                    a.$axios.get(n + "/atomicmarket/v1/sales?collection_name=farmersworld&template_id=" + t + "&symbol=WAX&sort=price&order=asc&limit=1&state=1").then((function(r) {
                                        a.$axios.get(n + "/atomicmarket/v1/prices/sales?collection_name=farmersworld&schema_name=tools&symbol=WAX&template_id=" + t).then((function(i) {
                                            a.$axios.get(n + "/atomicassets/v1/templates/farmersworld/" + t + "/stats").then((function(n) {
                                                var s = i.data.data[i.data.data.length - 1];
                                                if ("FWF" === e) {
                                                    if (void 0 != r.data.data[0]) {
                                                        var o = 0;
                                                        "WAX" === r.data.data[0].listing_symbol ? o = r.data.data[0].listing_price / 1e8 : "USD" === r.data.data[0].listing_symbol && (o = r.data.data[0].price.amount / 1e8),
                                                        a.arrToolsMineFWF[t].price = o
                                                    }
                                                    a.arrToolsMineFWF[t].costDurability = 24 * a.arrToolsMineFWF[t].durability / 5 * a.fwgToken,
                                                    a.arrToolsMineFWF[t].costEnergy = 24 * a.arrToolsMineFWF[t].energy / 5 * a.fwfToken,
                                                    a.arrToolsMineFWF[t].last_sale = parseInt(s.price / 1e8),
                                                    a.arrToolsMineFWF[t].minted = parseInt(n.data.data.assets)
                                                } else if ("FWW" === e) {
                                                    if (void 0 != r.data.data[0]) {
                                                        var c = 0;
                                                        "WAX" === r.data.data[0].listing_symbol ? c = r.data.data[0].listing_price / 1e8 : "USD" === r.data.data[0].listing_symbol && (c = r.data.data[0].price.amount / 1e8),
                                                        a.arrToolsMineFWW[t].price = c
                                                    }
                                                    a.arrToolsMineFWW[t].costDurability = a.arrToolsMineFWW[t].durability * a.arrToolsMineFWW[t].ChargeTime / 5 * a.fwgToken,
                                                    a.arrToolsMineFWW[t].costEnergy = a.arrToolsMineFWW[t].energy * a.arrToolsMineFWW[t].ChargeTime / 5 * a.fwfToken,
                                                    a.arrToolsMineFWW[t].last_sale = parseInt(s.price / 1e8),
                                                    a.arrToolsMineFWW[t].minted = parseInt(n.data.data.assets)
                                                } else if ("FWG" === e) {
                                                    if (void 0 != r.data.data[0]) {
                                                        var l = 0;
                                                        "WAX" === r.data.data[0].listing_symbol ? l = r.data.data[0].listing_price / 1e8 : "USD" === r.data.data[0].listing_symbol && (l = r.data.data[0].price.amount / 1e8),
                                                        a.arrToolsMineFWG[t].price = l
                                                    }
                                                    a.arrToolsMineFWG[t].costDurability = 12 * a.arrToolsMineFWG[t].durability / 5 * a.fwgToken,
                                                    a.arrToolsMineFWG[t].costEnergy = 12 * a.arrToolsMineFWG[t].energy / 5 * a.fwfToken,
                                                    a.arrToolsMineFWG[t].last_sale = parseInt(s.price / 1e8),
                                                    a.arrToolsMineFWG[t].minted = parseInt(n.data.data.assets)
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                },
                getMembership: function(t, e) {
                    var a = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function r() {
                        var n;
                        return regeneratorRuntime.wrap((function(r) {
                            while (1)
                                switch (r.prev = r.next) {
                                case 0:
                                    n = a.getUrlAtomic(),
                                    a.$axios.get(n + "/atomicmarket/v1/sales?collection_name=farmersworld&template_id=" + t + "&symbol=WAX&sort=price&order=asc&limit=1&state=1").then((function(r) {
                                        a.$axios.get(n + "/atomicmarket/v1/prices/sales?collection_name=farmersworld&schema_name=memberships&symbol=WAX&template_id=" + t).then((function(i) {
                                            a.$axios.get(n + "/atomicassets/v1/templates/farmersworld/" + t + "/stats").then((function(n) {
                                                var s = i.data.data[i.data.data.length - 1];
                                                if ("FWF" === e) {
                                                    if (void 0 != r.data.data[0]) {
                                                        var o = 0;
                                                        "WAX" === r.data.data[0].listing_symbol ? o = parseInt(r.data.data[0].listing_price / 1e8) : "USD" === r.data.data[0].listing_symbol && (o = parseInt(r.data.data[0].price.amount / 1e8)),
                                                        a.dataMemFWF[t].price = o
                                                    }
                                                    a.dataMemFWF[t].costEnergy = a.dataMemFWF[t].energy / 5 * a.fwfToken,
                                                    a.dataMemFWF[t].last_sale = parseInt(s.price / 1e8),
                                                    a.dataMemFWF[t].minted = parseInt(n.data.data.assets)
                                                } else if ("FWW" === e) {
                                                    if (void 0 != r.data.data[0]) {
                                                        var c = 0;
                                                        "WAX" === r.data.data[0].listing_symbol ? c = parseInt(r.data.data[0].listing_price / 1e8) : "USD" === r.data.data[0].listing_symbol && (c = parseInt(r.data.data[0].price.amount / 1e8)),
                                                        a.dataMemFWW[t].price = c
                                                    }
                                                    a.dataMemFWW[t].costEnergy = a.dataMemFWW[t].energy / 5 * a.fwfToken,
                                                    a.dataMemFWW[t].last_sale = parseInt(s.price / 1e8),
                                                    a.dataMemFWW[t].minted = parseInt(n.data.data.assets)
                                                } else if ("FWG" === e) {
                                                    if (void 0 != r.data.data[0]) {
                                                        var l = 0;
                                                        "WAX" === r.data.data[0].listing_symbol ? l = parseInt(r.data.data[0].listing_price / 1e8) : "USD" === r.data.data[0].listing_symbol && (l = parseInt(r.data.data[0].price.amount / 1e8)),
                                                        a.dataMemFWG[t].price = l
                                                    }
                                                    a.dataMemFWG[t].costEnergy = a.dataMemFWG[t].energy / 5 * a.fwfToken,
                                                    a.dataMemFWG[t].last_sale = parseInt(s.price / 1e8),
                                                    a.dataMemFWG[t].minted = parseInt(n.data.data.assets)
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                },
                getFcoin: function() {
                    var t = this
                      , e = this.getUrlAtomic();
                    this.$axios.get(e + "/atomicmarket/v1/sales?collection_name=farmersworld&template_id=260676&symbol=WAX&sort=price&order=asc&limit=1&state=1").then((function(e) {
                        t.fcoin = e.data.data[0].price.amount / 1e8
                    }
                    ))
                }
            }
        }
          , tt = Z
          , et = a("71d9")
          , at = a("2a7f")
          , rt = Object(p["a"])(tt, $, J, !1, null, null, null)
          , nt = rt.exports;
        d()(rt, {
            VAppBar: T["a"],
            VAvatar: I["a"],
            VBtn: D["a"],
            VCard: A["a"],
            VCardText: S["b"],
            VChip: R["a"],
            VCol: M["a"],
            VContainer: E["a"],
            VImg: P["a"],
            VListItem: X["a"],
            VListItemContent: U["a"],
            VListItemSubtitle: U["b"],
            VListItemTitle: U["c"],
            VProgressLinear: H["a"],
            VRow: V["a"],
            VSpacer: N["a"],
            VToolbar: et["a"],
            VToolbarTitle: at["a"]
        });
        var it = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-container", {
                attrs: {
                    fluid: ""
                }
            }, [a("br"), a("v-data-iterator", {
                attrs: {
                    items: t.model,
                    "hide-default-footer": ""
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [a("v-row", {
                            attrs: {
                                justify: "center"
                            }
                        }, t._l(e.items, (function(e) {
                            return a("v-col", {
                                key: e.wallet,
                                attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "11",
                                    lg: "11"
                                }
                            }, [a("v-card", {
                                staticClass: "elevation-5"
                            }, ["undefined" === typeof e.data_cpu ? a("v-progress-linear", {
                                attrs: {
                                    height: "25",
                                    color: t.getColorCPU(0),
                                    value: 0
                                }
                            }, [a("strong", [t._v("0 %")])]) : a("v-progress-linear", {
                                attrs: {
                                    height: "25",
                                    color: t.getColorCPU(e.data_cpu.cpu_percent),
                                    value: e.data_cpu.cpu_percent
                                }
                            }, [a("strong", [t._v(t._s(e.data_cpu.cpu_percent) + " %")])]), a("v-card-title", {
                                staticClass: "headline font-weight-bold"
                            }, [a("v-chip", {
                                staticClass: "title",
                                staticStyle: {
                                    background: "linear-gradient(90deg, rgba(108,12,12,1) 16%, rgba(184,68,68,1) 56%, rgba(255,153,153,1) 100%)"
                                },
                                attrs: {
                                    label: "",
                                    "text-color": "white"
                                }
                            }, [t._v(" " + t._s(e.wallet) + " ")])], 1), a("v-card-text", [a("v-row", [a("v-col", {
                                attrs: {
                                    cols: "6",
                                    sm: "6",
                                    md: "6",
                                    lg: "5"
                                }
                            }, ["undefined" === typeof e.data_cpu ? a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Balance Wax: ? ￦")]) : a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Balance : " + t._s(e.data_cpu.balance) + " ￦ (" + t._s(t.currencyFormat(parseInt(parseFloat(e.data_cpu.balance) * t.WAXTHB))) + " ฿)")]), a("br"), "undefined" === typeof e.account ? a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Energy : "), a("v-chip", {
                                style: t.getColorEnergy(parseInt(0)),
                                attrs: {
                                    label: "",
                                    small: ""
                                }
                            }, [t._v("? / ?")])], 1) : a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Energy : "), a("v-chip", {
                                style: t.getColorEnergy(parseInt(e.account.energy / e.account.max_energy * 100)),
                                attrs: {
                                    label: "",
                                    small: ""
                                }
                            }, [t._v(t._s(e.account.energy) + "/" + t._s(e.account.max_energy))])], 1), a("br"), "undefined" === typeof e.data_cpu ? a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Staking : ? ￦")]) : a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Staking : " + t._s(parseInt(e.data_cpu.stake)) + " ￦")]), a("br"), a("span", {
                                staticClass: "subtitle-2"
                            }, [t._v("Daily Profit : "), a("v-chip", {
                                style: t.getColorStyle(),
                                attrs: {
                                    label: "",
                                    color: ""
                                }
                            }, [t._v(t._s(parseFloat(e.profit).toFixed(2)) + " ￦ (" + t._s(t.currencyFormat(parseInt(e.profit * t.WAXTHB))) + " ฿)")])], 1), a("br"), a("br"), a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item", {
                                staticStyle: {
                                    "min-height": "15px",
                                    height: "28px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-no-wrap",
                                staticStyle: {
                                    "font-size": "10px"
                                }
                            }, [t._v("Tokens")]), a("v-list-item-content", {
                                staticClass: "align-end text-no-wrap",
                                staticStyle: {
                                    "font-size": "10px"
                                }
                            }, [t._v(" InGame ")]), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }), a("v-list-item-content", {
                                staticClass: "align-end text-no-wrap",
                                staticStyle: {
                                    "font-size": "10px"
                                }
                            }, [t._v(" Daily Cost/Mine ")])], 1), a("v-list-item", {
                                staticStyle: {
                                    "min-height": "30px",
                                    height: "38px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-caption text-no-wrap"
                            }, ["undefined" === typeof e.user_token ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.user_token, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FWF" === e.currency ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.amount).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.amount * t.tokenFWF * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, ["undefined" === typeof e.account ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.account.balances, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FOOD" === e.split(" ")[1] ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.split(" ")[0]).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.split(" ")[0] * t.tokenFWF * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, [a("v-avatar", {
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "25",
                                    src: "img/icon/FWF2.png",
                                    alt: ""
                                }
                            })])], 1), a("v-list-item-content", {
                                staticClass: "align-end font-weight-black text-no-wrap"
                            }, ["undefined" === typeof e.daily_cost_mine ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "13px"
                                },
                                style: t.getColorCost(0),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                style: t.getColorCost(e.daily_cost_mine.sumFoodProfit),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" " + t._s(parseInt(e.daily_cost_mine.sumFoodProfit))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.daily_cost_mine.sumFoodProfit * t.tokenFWF * t.WAXTHB))) + " ฿) ")])], 1)], 1), a("v-list-item", {
                                staticStyle: {
                                    "min-height": "30px",
                                    height: "38px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-caption text-no-wrap"
                            }, ["undefined" === typeof e.user_token ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.user_token, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FWW" === e.currency ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.amount).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.amount * t.tokenFWW * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, ["undefined" === typeof e.account ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.account.balances, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["WOOD" === e.split(" ")[1] ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.split(" ")[0]).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.split(" ")[0] * t.tokenFWW * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, [a("v-avatar", {
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "25",
                                    src: "img/icon/FWW2.png",
                                    alt: ""
                                }
                            })])], 1), a("v-list-item-content", {
                                staticClass: "align-end font-weight-black text-no-wrap"
                            }, ["undefined" === typeof e.daily_cost_mine ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "13px"
                                },
                                style: t.getColorCost(0),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                style: t.getColorCost(e.daily_cost_mine.sumWoodProfit),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" " + t._s(parseInt(e.daily_cost_mine.sumWoodProfit))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.daily_cost_mine.sumWoodProfit * t.tokenFWW * t.WAXTHB))) + " ฿) ")])], 1)], 1), a("v-list-item", {
                                staticStyle: {
                                    "min-height": "30px",
                                    height: "38px"
                                }
                            }, [a("v-list-item-content", {
                                staticClass: "text-caption text-no-wrap"
                            }, ["undefined" === typeof e.user_token ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.user_token, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["FWG" === e.currency ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.amount).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.amount * t.tokenFWG * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, ["undefined" === typeof e.account ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                attrs: {
                                    label: "",
                                    color: "#424242"
                                }
                            }, t._l(e.account.balances, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["GOLD" === e.split(" ")[1] ? a("span", {
                                    staticStyle: {
                                        "font-size": "10px"
                                    }
                                }, [t._v(" " + t._s(parseFloat(e.split(" ")[0]).toFixed(1))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.split(" ")[0] * t.tokenFWG * t.WAXTHB))) + " ฿) ")]) : t._e()])
                            }
                            )), 0)], 1), a("v-list-item-content", {
                                staticClass: "align-end text-caption text-no-wrap"
                            }, [a("v-avatar", {
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "25",
                                    src: "img/icon/FWG2.png",
                                    alt: ""
                                }
                            })])], 1), a("v-list-item-content", {
                                staticClass: "align-end font-weight-black text-no-wrap"
                            }, ["undefined" === typeof e.daily_cost_mine ? a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "13px"
                                },
                                style: t.getColorCost(0),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" ? ")]) : a("v-chip", {
                                staticClass: "elevation-5",
                                staticStyle: {
                                    "min-width": "70px",
                                    "max-width": "70px",
                                    width: "50px",
                                    "font-size": "10px"
                                },
                                style: t.getColorCost(e.daily_cost_mine.sumGoldProfit),
                                attrs: {
                                    label: ""
                                }
                            }, [t._v(" " + t._s(parseInt(e.daily_cost_mine.sumGoldProfit))), a("br"), t._v(" (" + t._s(t.currencyFormat(parseInt(e.daily_cost_mine.sumGoldProfit * t.tokenFWG * t.WAXTHB))) + " ฿) ")])], 1)], 1)], 1), a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item", {
                                staticStyle: {
                                    "min-height": "20px",
                                    height: "28px"
                                }
                            }, t._l(e.itemInbug, (function(e) {
                                return a("span", {
                                    key: e.wallet
                                }, ["260676" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/farmercoin.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298596" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/cornseed2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298595" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/barleyseed2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "318606" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/barley2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "318607" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/corn2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298593" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/milk.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298612" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/chickenegg2.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e(), "298613" === e.template_id ? a("span", {
                                    staticClass: "mx-1 text-no-wrap text-caption"
                                }, [a("v-avatar", {
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "25",
                                        src: "img/icon/chick.png",
                                        alt: ""
                                    }
                                })]), t._v(" " + t._s(e.assets) + " ")], 1) : t._e()])
                            }
                            )), 0)], 1), a("v-divider")], 1), a("v-col", {
                                attrs: {
                                    cols: "6",
                                    sm: "6",
                                    md: "6",
                                    lg: "5"
                                }
                            }, [a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" MINING ")])]), t._l(e.tools, (function(e) {
                                return a("v-list-item", {
                                    key: e.asset_id,
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [a("v-list-item-content", {
                                    staticClass: "text-caption text-no-wrap",
                                    staticStyle: {
                                        "min-width": "120px",
                                        "max-width": "120px",
                                        width: "500px"
                                    },
                                    attrs: {
                                        "two-line": ""
                                    }
                                }, [a("v-tooltip", {
                                    attrs: {
                                        top: ""
                                    },
                                    scopedSlots: t._u([{
                                        key: "activator",
                                        fn: function(r) {
                                            var n = r.on
                                              , i = r.attrs;
                                            return ["Wood" === e.type ? a("v-chip", t._g(t._b({
                                                staticClass: "caption elevation-5",
                                                attrs: {
                                                    label: "",
                                                    "x-small": "",
                                                    color: "#6D4C41"
                                                }
                                            }, "v-chip", i, !1), n), [t._v(" " + t._s(e.template_name) + " ")]) : "Food" === e.type ? a("v-chip", t._g(t._b({
                                                staticClass: "caption elevation-5",
                                                attrs: {
                                                    label: "",
                                                    "x-small": "",
                                                    color: "#0277BD"
                                                }
                                            }, "v-chip", i, !1), n), [t._v(" " + t._s(e.template_name) + " ")]) : t._e(), "Gold" === e.type ? a("v-chip", t._g(t._b({
                                                staticClass: "caption elevation-5",
                                                attrs: {
                                                    label: "",
                                                    "x-small": "",
                                                    color: "#FF8F00"
                                                }
                                            }, "v-chip", i, !1), n), [t._v(" " + t._s(e.template_name) + " ")]) : t._e()]
                                        }
                                    }], null, !0)
                                }, [a("span", [a("v-img", {
                                    attrs: {
                                        "max-width": "70",
                                        src: t.getPic(e.img)
                                    }
                                })], 1)])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability))
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1), void 0 === e.current_durability ? a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "65px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(e.reward_rate) + "  "), a("v-img", {
                                    attrs: {
                                        src: "img/icon/farmercoin.png",
                                        "max-width": "14",
                                        "max-height": "14"
                                    }
                                })], 1)], 1) : a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "65px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(t._s(e.current_durability) + "/" + t._s(e.durability))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "60px",
                                        "max-width": "65px",
                                        width: "65px"
                                    }
                                }, ["tools" === e.type_mine ? a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, ["Food" === e.type ? a("span", {
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.tokenFWF - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")]) : t._e(), "Wood" === e.type ? a("span", {
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.tokenFWW - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")]) : t._e(), "Gold" === e.type ? a("span", {
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.tokenFWG - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")]) : t._e()]) : a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: "#424242"
                                    }
                                }, [t._v(" " + t._s(parseInt(e.reward_rate * e.charge_time * t.fcoin - (e.cost_durabiltity * e.charge_time / 5 * t.tokenFWG + e.cost_energy * e.charge_time / 5 * t.tokenFWF))) + " ￦ ")])], 1)], 1)
                            }
                            ))], 2), a("br"), null != e.cows ? a("div", [a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("v-row", [a("v-col", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" Raising COW ")])]), a("v-col", [a("span", {
                                staticClass: "mx-3 caption"
                            }, [t._v(" Daily Cost : "), a("v-avatar", {
                                staticClass: "mx-1 caption",
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "20",
                                    src: "img/icon/barley2.png",
                                    alt: ""
                                }
                            })]), a("span", {
                                staticClass: "mx-1 caption red--text font-weight-bold"
                            }, [t._v("-" + t._s(e.sumCostCows))])], 1)])], 1)], 1), a("v-row", t._l(e.cows, (function(e) {
                                return a("v-col", {
                                    key: e.asset_id,
                                    attrs: {
                                        cols: "6",
                                        lg: "6",
                                        md: "6",
                                        sm: "6"
                                    }
                                }, [a("v-list-item", {
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/dairycow2.png",
                                        alt: ""
                                    }
                                })]), a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "55px",
                                        "max-width": "55px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": ""
                                    }
                                }, [t._v(t._s(e.times_claimed) + "/" + t._s(6))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability))
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1)], 1)], 1)
                            }
                            )), 1)], 1), a("br")], 1) : t._e(), null != e.chickens ? a("div", [a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("v-row", [a("v-col", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" Raising CHICKEN ")])]), a("v-col", [a("span", {
                                staticClass: "mx-3 caption"
                            }, [t._v(" Daily Cost : "), a("v-avatar", {
                                staticClass: "mx-1 caption",
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "20",
                                    src: "img/icon/barley2.png",
                                    alt: ""
                                }
                            })]), a("span", {
                                staticClass: "mx-1 caption red--text font-weight-bold"
                            }, [t._v("-" + t._s(e.sumCostChickens))])], 1)])], 1)], 1), a("v-row", t._l(e.chickens, (function(e) {
                                return a("v-col", {
                                    key: e.asset_id,
                                    attrs: {
                                        cols: "6",
                                        lg: "6",
                                        md: "6",
                                        sm: "6"
                                    }
                                }, [a("v-list-item", {
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/chicken2.png",
                                        alt: ""
                                    }
                                })]), a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "55px",
                                        "max-width": "55px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": ""
                                    }
                                }, [t._v(t._s(e.times_claimed) + "/" + t._s(28))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability))
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1)], 1)], 1)
                            }
                            )), 1)], 1), a("br")], 1) : t._e(), null != e.crops ? a("div", [a("v-divider"), a("v-list", {
                                attrs: {
                                    dense: ""
                                }
                            }, [a("v-list-item-content", [a("v-row", [a("v-col", [a("span", {
                                staticClass: "mx-3 text-caption"
                            }, [t._v(" CROPS ")])]), a("v-col", [a("span", {
                                staticClass: "mx-3 caption"
                            }, [t._v(" Daily Cost : "), a("v-avatar", {
                                staticClass: "mx-1 caption",
                                attrs: {
                                    size: "25"
                                }
                            }, [a("img", {
                                attrs: {
                                    width: "20",
                                    src: "img/icon/FWF2.png",
                                    alt: ""
                                }
                            })]), a("span", {
                                staticClass: "mx-1 caption red--text font-weight-bold"
                            }, [t._v("-" + t._s(e.cost_crops))])], 1)])], 1)], 1), a("v-row", t._l(e.crops, (function(e) {
                                return a("v-col", {
                                    key: e.asset_id,
                                    attrs: {
                                        cols: "6",
                                        lg: "6",
                                        md: "6",
                                        sm: "6"
                                    }
                                }, [a("v-list-item", {
                                    staticStyle: {
                                        "min-height": "10px",
                                        height: "18px"
                                    }
                                }, [298596 === e.template_id ? a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/corn2.png",
                                        alt: ""
                                    }
                                })]) : a("v-avatar", {
                                    staticClass: "mx-1 caption",
                                    attrs: {
                                        size: "25"
                                    }
                                }, [a("img", {
                                    attrs: {
                                        width: "20",
                                        src: "img/icon/barley2.png",
                                        alt: ""
                                    }
                                })]), a("v-list-item-content", {
                                    staticClass: "text-caption align-end",
                                    staticStyle: {
                                        "min-width": "55px",
                                        "max-width": "55px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": ""
                                    }
                                }, [t._v(t._s(e.times_claimed) + "/" + t._s(42))])], 1), a("v-list-item-content", {
                                    staticClass: "text-caption align-end mx-2",
                                    staticStyle: {
                                        "min-width": "65px",
                                        "max-width": "65px",
                                        width: "50px"
                                    }
                                }, [a("v-chip", {
                                    staticClass: "elevation-5",
                                    attrs: {
                                        label: "",
                                        "x-small": "",
                                        color: t.getColorTime(t.countDownTimer(e.next_availability))
                                    }
                                }, [t._v(t._s(t.countDownTimer(e.next_availability)))])], 1)], 1)], 1)
                            }
                            )), 1)], 1), a("br")], 1) : t._e()], 1)], 1)], 1), a("br")], 1)], 1)
                        }
                        )), 1)]
                    }
                }])
            })], 1)
        }
          , st = []
          , ot = (a("b0c0"),
        a("b64b"),
        {
            name: "Tables",
            data: function() {
                return {
                    tokenFWF: 0,
                    tokenFWG: 0,
                    tokenFWW: 0,
                    fcoin: 0,
                    arrDatasets: [],
                    dailyProfit: 0,
                    logging: "",
                    config: "",
                    selectTokenWithdraw: [],
                    itemsTokenWithdraw: ["WOOD", "FOOD", "GOLD"],
                    model: [],
                    REPAIR_TOOLS_IF_LOWER: "",
                    RECOVER_ENERGY_STEP: "",
                    LOWEST_ENERGY: "",
                    EXCHANGE_FEE_WITHDRAW: "",
                    MIN_WITHDRAW: "",
                    LIMIT_WITHDRAW_FOOD: "",
                    LIMIT_WITHDRAW_GOLD: "",
                    LIMIT_WITHDRAW_WOOD: "",
                    WITHDRAW_INGAME_TO_TOKEN: [],
                    dataProfit: 0,
                    dataBalance: 0,
                    WAXTHB: 0
                }
            },
            mounted: function() {
                this.getTokenFWF(),
                this.getTokenFWG(),
                this.getTokenFWW(),
                this.getWAXTHB(),
                this.getWAXUSD(),
                this.getFcoin(),
                this.syncAccounts(0)
            },
            methods: {
                actionPostConfig: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = console,
                                    e.next = 3,
                                    t.postConfigBot();
                                case 3:
                                    e.t1 = e.sent,
                                    e.t0.log.call(e.t0, e.t1);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                reloadWalet: function(t) {
                    this.loadData(t),
                    this.loadDataUserToken(t),
                    this.loadDataTools(t),
                    this.loadDataInBug(t)
                },
                loadData: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.getAccount(t);
                                case 2:
                                    return r = a.sent,
                                    a.next = 5,
                                    e.getAccountCPU(t);
                                case 5:
                                    n = a.sent,
                                    i = {
                                        cpu_percent: parseInt(n.cpu_limit.used / n.cpu_limit.max * 100),
                                        balance: parseFloat(n.core_liquid_balance).toFixed(2),
                                        stake: parseInt(n.cpu_weight) / 1e8
                                    },
                                    e.model.find((function(e) {
                                        return e.wallet === t && (e.account = r,
                                        !0) && (e.data_cpu = i,
                                        !0)
                                    }
                                    ));
                                case 8:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataUserToken: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.getTokenUser(t);
                                case 2:
                                    r = a.sent,
                                    e.model.find((function(e) {
                                        return e.wallet === t && (e.user_token = r.token_balances,
                                        !0)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataTools: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s, o, c, l, p, m, d, u, g, _, h, v, w, f, b, k, C, W, F, T, I, D, A, S, R, M, j, E, O, G, z, P;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.queryData(t, "tools");
                                case 2:
                                    r = a.sent,
                                    n = [],
                                    i = Object(y["a"])(r.rows);
                                    try {
                                        for (i.s(); !(s = i.n()).done; )
                                            o = s.value,
                                            c = e.getAtomic(o.template_id),
                                            n.push(Object(x["a"])(Object(x["a"])({}, o), c))
                                    } catch (B) {
                                        i.e(B)
                                    } finally {
                                        i.f()
                                    }
                                    return a.next = 8,
                                    e.queryData(t, "mbs");
                                case 8:
                                    l = a.sent,
                                    p = Object(y["a"])(l.rows);
                                    try {
                                        for (p.s(); !(m = p.n()).done; )
                                            d = m.value,
                                            u = e.getAtomic(d.template_id),
                                            n.push(Object(x["a"])(Object(x["a"])({}, d), u))
                                    } catch (B) {
                                        p.e(B)
                                    } finally {
                                        p.f()
                                    }
                                    return a.next = 13,
                                    e.getToolsCrop(t);
                                case 13:
                                    if (g = a.sent,
                                    _ = 0,
                                    null != g) {
                                        h = Object(y["a"])(g);
                                        try {
                                            for (h.s(); !(v = h.n()).done; )
                                                w = v.value,
                                                298596 === w.template_id ? _ += 54 : 298595 === w.template_id && (_ += 36)
                                        } catch (B) {
                                            h.e(B)
                                        } finally {
                                            h.f()
                                        }
                                    }
                                    for (f = 0,
                                    b = 0,
                                    k = 0,
                                    C = 0,
                                    W = 0,
                                    F = 0,
                                    T = n; F < T.length; F++)
                                        I = T[F],
                                        f += I.cost_durabiltity * I.charge_time / 5,
                                        b += I.cost_energy * I.charge_time / 5,
                                        "tools" === I.type_mine && ("Food" == I.type && (k += I.charge_time * I.reward_rate),
                                        "Wood" == I.type && (W += I.charge_time * I.reward_rate),
                                        "Gold" == I.type && (C += I.charge_time * I.reward_rate));
                                    for (D = C - f,
                                    A = k - (b + _),
                                    S = W,
                                    R = 0,
                                    M = 0,
                                    j = n; M < j.length; M++)
                                        E = j[M],
                                        "tools" === E.type_mine ? "Food" === E.type ? (O = parseInt(E.reward_rate * E.charge_time * e.tokenFWF - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += O) : "Wood" === E.type ? (G = parseInt(E.reward_rate * E.charge_time * e.tokenFWW - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += G) : "Gold" === E.type && (z = parseInt(E.reward_rate * E.charge_time * e.tokenFWG - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += z) : (P = parseInt(E.reward_rate * E.charge_time * e.fcoin - (E.cost_durabiltity * E.charge_time / 5 * e.tokenFWG + E.cost_energy * E.charge_time / 5 * e.tokenFWF)),
                                        R += P);
                                    e.model.find((function(a) {
                                        return a.wallet === t && (a.tools = n,
                                        !0) && (a.daily_cost_mine = {
                                            sumGoldProfit: D,
                                            sumFoodProfit: A,
                                            sumWoodProfit: S
                                        },
                                        !0) && (a.profit = R - _ * e.tokenFWF,
                                        !0) && (a.crops = g,
                                        !0) && (a.cost_crops = _,
                                        !0)
                                    }
                                    ));
                                case 28:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                syncAccounts: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    r = [],
                                    r = 1 === t ? e.model : e.readAccounts(),
                                    n = Object(y["a"])(r);
                                    try {
                                        for (n.s(); !(i = n.n()).done; )
                                            s = i.value,
                                            e.loadData(s.wallet),
                                            e.loadDataUserToken(s.wallet),
                                            e.loadDataTools(s.wallet),
                                            e.loadDataInBug(s.wallet),
                                            e.loadDataAnimals(s.wallet),
                                            e.loadDataSum()
                                    } catch (o) {
                                        n.e(o)
                                    } finally {
                                        n.f()
                                    }
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataCrop: function(t) {
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    console.log(t);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                loadDataAnimals: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s, o, c, l, p;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.getAnimals(t);
                                case 2:
                                    if (r = a.sent,
                                    n = [],
                                    i = [],
                                    s = 0,
                                    o = 0,
                                    null === r)
                                        e.model.find((function(e) {
                                            return e.wallet === t && (e.cows = null,
                                            !0) && (e.sumCostCows = null,
                                            !0) && (e.sumCostChickens = null,
                                            !0) && (e.chickens = null,
                                            !0)
                                        }
                                        ));
                                    else {
                                        c = Object(y["a"])(r);
                                        try {
                                            for (c.s(); !(l = c.n()).done; )
                                                p = l.value,
                                                298607 === p.template_id && (n.push(p),
                                                o += 6),
                                                298614 === p.template_id && (i.push(p),
                                                s += 4)
                                        } catch (m) {
                                            c.e(m)
                                        } finally {
                                            c.f()
                                        }
                                        e.model.find((function(e) {
                                            return e.wallet === t && (e.cows = n,
                                            !0) && (e.sumCostCows = o,
                                            !0) && (e.sumCostChickens = s,
                                            !0) && (e.chickens = i,
                                            !0)
                                        }
                                        ))
                                    }
                                case 8:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataInBug: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.countItemInBug(t);
                                case 2:
                                    r = a.sent,
                                    e.model.find((function(e) {
                                        return e.wallet === t && (e.itemInbug = r.data.templates,
                                        !0)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                loadDataSum: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    a = 0,
                                    r = 0,
                                    t.model.forEach((function(t) {
                                        a += parseFloat(t.profit),
                                        r += parseFloat(t.data_cpu.balance)
                                    }
                                    )),
                                    t.dataProfit = a.toFixed(2),
                                    t.dataBalance = r.toFixed(2);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getColorStyle: function() {
                    return " background: rgb(20,14,138);\n                    background: linear-gradient(90deg, rgba(20,14,138,1) 0%, rgba(32,32,200,1) 45%, rgba(80,98,233,1) 100%); "
                },
                countFarmCoin: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = e.getUrlAtomic(),
                                    a.abrupt("return", e.$axios.post("".concat(r, "/atomicassets/v1/assets/_count?collection_name=farmersworld&owner=").concat(t, "&schema_name=farmercoins")).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                countItemInBug: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = e.getUrlAtomic(),
                                    a.abrupt("return", e.$axios.get("".concat(r, "/atomicassets/v1/accounts/").concat(t, "/farmersworld")).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getToolsCrop: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "crops",
                                        table_key: "",
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 2,
                                        key_type: "i64",
                                        limit: 100,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getAnimals: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "animals",
                                        table_key: "",
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 2,
                                        key_type: "i64",
                                        limit: 100,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getUrlAtomic: function() {
                    var t = ["https://wax-aa.eu.eosamsterdam.net", "https://aa-api-wax.eosauthority.com", "https://wax-aa.eosdublin.io"]
                      , e = t[Math.floor(Math.random() * t.length)];
                    return e
                },
                getColorCost: function(t) {
                    return t < 0 ? "background: rgb(153,15,15);\n                    background: linear-gradient(90deg, rgba(153,15,15,1) 0%, rgba(208,42,42,1) 33%, rgba(255,130,130,1) 100%);" : "background: rgb(1,77,6);\n                    background: linear-gradient(90deg, rgba(1,77,6,1) 0%, rgba(9,121,33,1) 33%, rgba(4,226,93,1) 100%);"
                },
                getColorCPU: function(t) {
                    return t > 90 ? "red" : t > 70 ? "orange" : t > 30 ? "green" : t >= 0 ? "blue" : ""
                },
                currencyFormat: function(t) {
                    return t.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                },
                delay: function(t) {
                    return new Promise((function(e) {
                        return setTimeout(e, t)
                    }
                    ))
                },
                sleep: function(t) {
                    return new Promise((function(e) {
                        setTimeout(e, t)
                    }
                    ))
                },
                randomNumber: function(t, e) {
                    return Math.random() * (e - t) + t
                },
                getPic: function(t) {
                    return "https://ipfs.io/ipfs/" + t
                },
                getColor: function(t) {
                    return t > 90 ? "red" : t > 70 ? "orange" : t > 30 ? "green" : t >= 0 ? "blue" : ""
                },
                getColorEnergy: function(t) {
                    return t > 50 ? "background: rgb(1,77,6);\n                  background: linear-gradient(90deg, rgba(1,77,6,1) 0%, rgba(9,121,33,1) 33%, rgba(4,226,93,1) 100%);" : t > 20 ? "background: rgb(226,112,4);\n                  background: linear-gradient(90deg, rgba(226,112,4,1) 0%, rgba(226,118,16,1) 33%, rgba(255,175,100,1) 100%);" : t >= 0 ? "background: rgb(153,15,15);\n                  background: linear-gradient(90deg, rgba(153,15,15,1) 0%, rgba(208,42,42,1) 33%, rgba(255,130,130,1) 100%);" : ""
                },
                getColorTime: function(t) {
                    return "00:00:00" === t ? "red" : "#424242"
                },
                getTokenFWF: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "alcorammswap",
                                        scope: "alcorammswap",
                                        table: "pairs",
                                        table_key: "",
                                        lower_bound: 489,
                                        upper_bound: 489,
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    r = parseFloat(a.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(a.rows[0].pool2.quantity.split(" ")[0]),
                                    t.tokenFWF = r,
                                    e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getTokenFWW: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "alcorammswap",
                                        scope: "alcorammswap",
                                        table: "pairs",
                                        table_key: "",
                                        lower_bound: 501,
                                        upper_bound: 501,
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    r = parseFloat(a.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(a.rows[0].pool2.quantity.split(" ")[0]),
                                    t.tokenFWW = r,
                                    e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getTokenFWG: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.query({
                                        json: !0,
                                        code: "alcorammswap",
                                        scope: "alcorammswap",
                                        table: "pairs",
                                        table_key: "",
                                        lower_bound: 503,
                                        upper_bound: 503,
                                        index_position: 1,
                                        key_type: "",
                                        limit: 1,
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return a = e.sent,
                                    r = parseFloat(a.rows[0].pool1.quantity.split(" ")[0]) / parseFloat(a.rows[0].pool2.quantity.split(" ")[0]),
                                    t.tokenFWG = r,
                                    e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getWAXTHB: function() {
                    var t = this;
                    this.$axios.get("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300,9119&convert_id=2809").then((function(e) {
                        t.WAXTHB = e.data.data[2300].quote[2809].price
                    }
                    ))
                },
                getWAXUSD: function() {
                    var t = this;
                    this.$axios.get("https://api.coingecko.com/api/v3/simple/price?ids=wax&vs_currencies=usd").then((function(e) {
                        t.WAXUSD = e.data.wax.usd
                    }
                    ))
                },
                query: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = ["https://wax.pink.gg", "https://wax.dapplica.io", "https://wax-bp.wizardsguild.one"],
                                    n = e.getRandomNumber(0, r.length),
                                    i = "".concat(r[n], "/v1/chain/get_table_rows"),
                                    t.json = !0,
                                    a.abrupt("return", e.$axios.post(i, t).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getRewardHistory: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = JSON.stringify({
                                        id: t,
                                        block_num_hint: 0
                                    }),
                                    a.next = 3,
                                    e.sleep(e.randomNumber(100, 2e3));
                                case 3:
                                    return a.abrupt("return", e.$axios.post("https://wax.greymass.com/v1/history/get_transaction", r).then((function(t) {
                                        if (t.data) {
                                            var e = t.data.traces.find((function(t) {
                                                return "logclaim" === t.act.name
                                            }
                                            ));
                                            return e
                                        }
                                        console.log("An error occus")
                                    }
                                    )));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getTransacID: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.abrupt("return", e.$axios.get("https://api.wax.greeneosio.com/v2/history/get_actions?account=".concat(t, "&skip=0&limit=1000&sort=asc&after=2021-11-21T17:00:00.000Z&before=2021-11-22T16:59:59.999Z")).then((function(t) {
                                        if (t.data)
                                            return {
                                                history_trx: t.data.actions
                                            };
                                        console.log("An error occus")
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getAccountCPU: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.abrupt("return", e.$axios.post("https://chain.wax.io/v1/chain/get_account", {
                                        account_name: t
                                    }).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getTokenUser: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.queryTokenUser({
                                        code: "farmerstoken",
                                        account: t,
                                        symbol: null
                                    });
                                case 2:
                                    return r = a.sent,
                                    n = [],
                                    r.forEach((function(t) {
                                        n.push({
                                            amount: t.split(" ")[0],
                                            currency: t.split(" ")[1]
                                        })
                                    }
                                    )),
                                    a.abrupt("return", {
                                        token_balances: n
                                    });
                                case 6:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                queryTokenUser: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = ["https://wax.pink.gg", "https://wax.dapplica.io", "https://wax-bp.wizardsguild.one"],
                                    n = e.getRandomNumber(0, r.length),
                                    i = "".concat(r[n], "/v1/chain/get_currency_balance"),
                                    t.json = !0,
                                    a.abrupt("return", e.$axios.post(i, t).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                getAccount: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    e.query({
                                        json: !0,
                                        code: "farmersworld",
                                        scope: "farmersworld",
                                        table: "accounts",
                                        lower_bound: t,
                                        upper_bound: t,
                                        index_position: 1,
                                        key_type: "",
                                        limit: "100",
                                        reverse: !1,
                                        show_payer: !1
                                    });
                                case 2:
                                    return r = a.sent,
                                    a.abrupt("return", r && r.rows.length > 0 ? r.rows[0] : null);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                readConfig: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.$axios.post("http://".concat(location.host.split(":")[0], ":5000/read/config")).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                readAccounts: function() {
                    var t = this.$route.query.waxid
                      , e = [];
                    e = null != t ? t.split(",") : [];
                    for (var a = [], r = 0; r < e.length; r++)
                        a[r] = {
                            wallet: e[r],
                            text: e[r],
                            account: {
                                balances: ["0.0000 WOOD", "0.0000 GOLD", "0.0000 FOOD"]
                            },
                            data_cpu: {
                                cpu_percent: 0,
                                balance: 0,
                                stake: 0
                            },
                            user_token: "",
                            tools: "",
                            farmCoin: "",
                            crops: "",
                            cost_crops: ""
                        };
                    return this.model = a,
                    a
                },
                readLogs: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.$axios.get("http://".concat(location.host.split(":")[0], ":5000/logs")).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                postConfigBot: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = {
                                        "Content-Type": "application/json"
                                    },
                                    r = JSON.stringify({
                                        REPAIR_TOOLS_IF_LOWER: parseInt(t.REPAIR_TOOLS_IF_LOWER),
                                        RECOVER_ENERGY_STEP: parseInt(t.RECOVER_ENERGY_STEP),
                                        LOWEST_ENERGY: parseInt(t.LOWEST_ENERGY),
                                        EXCHANGE_FEE_WITHDRAW: parseInt(t.EXCHANGE_FEE_WITHDRAW),
                                        MIN_WITHDRAW: parseInt(t.MIN_WITHDRAW),
                                        LIMIT_WITHDRAW_FOOD: parseInt(t.LIMIT_WITHDRAW_FOOD),
                                        LIMIT_WITHDRAW_WOOD: parseInt(t.LIMIT_WITHDRAW_WOOD),
                                        LIMIT_WITHDRAW_GOLD: parseInt(t.LIMIT_WITHDRAW_GOLD),
                                        WITHDRAW_INGAME_TO_TOKEN: t.WITHDRAW_INGAME_TO_TOKEN
                                    }),
                                    e.abrupt("return", t.$axios.post("http://".concat(location.host.split(":")[0], ":5000/update/config"), r, {
                                        headers: a
                                    }).then((function(t) {
                                        if (t.data)
                                            return t.data;
                                        console.log("An error occus")
                                    }
                                    )));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getRandomNumber: function(t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                },
                fetchTools: function(t) {
                    var e = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function a() {
                        var r, n, i, s;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    r = [],
                                    n = Object(y["a"])(t),
                                    a.prev = 2,
                                    s = regeneratorRuntime.mark((function t() {
                                        var a, n, s;
                                        return regeneratorRuntime.wrap((function(t) {
                                            while (1)
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return a = i.value,
                                                    console.log("Wallet runing : ", a.wallet),
                                                    t.next = 4,
                                                    e.queryData(a.wallet, "tools");
                                                case 4:
                                                    return n = t.sent,
                                                    t.next = 7,
                                                    e.queryData(a.wallet, "mbs");
                                                case 7:
                                                    s = t.sent,
                                                    r = r.concat(n ? n.rows.map((function(t) {
                                                        return Object(x["a"])(Object(x["a"])({}, e.toCamelCase(t)), a)
                                                    }
                                                    )) : []),
                                                    r = r.concat(s ? s.rows.map((function(t) {
                                                        return Object(x["a"])(Object(x["a"])({}, e.toCamelCase(t)), a)
                                                    }
                                                    )) : []);
                                                case 10:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )),
                                    n.s();
                                case 5:
                                    if ((i = n.n()).done) {
                                        a.next = 9;
                                        break
                                    }
                                    return a.delegateYield(s(), "t0", 7);
                                case 7:
                                    a.next = 5;
                                    break;
                                case 9:
                                    a.next = 14;
                                    break;
                                case 11:
                                    a.prev = 11,
                                    a.t1 = a["catch"](2),
                                    n.e(a.t1);
                                case 14:
                                    return a.prev = 14,
                                    n.f(),
                                    a.finish(14);
                                case 17:
                                    return a.abrupt("return", r);
                                case 18:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, null, [[2, 11, 14, 17]])
                    }
                    )))()
                },
                toCamelCase: function(t) {
                    return Object.keys(t).reduce((function(e, a) {
                        return e[a] = t[a],
                        e
                    }
                    ), {})
                },
                queryData: function(t, e) {
                    return this.query({
                        json: !0,
                        code: "farmersworld",
                        scope: "farmersworld",
                        table: e,
                        lower_bound: t,
                        upper_bound: t,
                        index_position: 2,
                        key_type: "i64",
                        limit: "100",
                        reverse: !1,
                        show_payer: !1
                    })
                },
                getAtomic: function(t) {
                    var e = {
                        203881: {
                            template_name: "Axe",
                            img: "QmUCg2d1Ww2734tiCwEPA5s3WL1Pr9jMTNsoPx3A9vKsJe",
                            cost_energy: 10,
                            cost_durabiltity: 5,
                            charge_time: 24,
                            reward_rate: 5,
                            type_mine: "tools"
                        },
                        203883: {
                            template_name: "Saw",
                            img: "QmPiXkBCNYgKw1J4Yxnj9Z6RUPfmxER5ePPc8YCkdykinN",
                            cost_energy: 30,
                            cost_durabiltity: 15,
                            charge_time: 24,
                            reward_rate: 17,
                            type_mine: "tools"
                        },
                        203886: {
                            template_name: "Chainsaw",
                            img: "QmZFGkTKNGb52N7B8JDKC8WpRmAXoGRodb3fuDn8rtM8Eh",
                            cost_energy: 60,
                            cost_durabiltity: 45,
                            charge_time: 24,
                            reward_rate: 54,
                            type_mine: "tools"
                        },
                        203887: {
                            template_name: "Fishing Rod",
                            img: "QmVy4xphMjDCYGmzQR6FhU8E6gHEaMpKbzf39wKFyqNBVV",
                            cost_energy: 0,
                            cost_durabiltity: 5,
                            charge_time: 24,
                            reward_rate: 5,
                            type_mine: "tools"
                        },
                        203888: {
                            template_name: "Fishing Net",
                            img: "QmPRWao5gLUmTktJZHdEg7A4dLYA9TzBjSGDvLNk3aCeh4",
                            cost_energy: 0,
                            cost_durabiltity: 20,
                            charge_time: 24,
                            reward_rate: 20,
                            type_mine: "tools"
                        },
                        203889: {
                            template_name: "Fishing Boat",
                            img: "QmSWBPJ5edSngtFAZMBw26EjexWMMYTHcHghWfSp9aWMdq",
                            cost_energy: 0,
                            cost_durabiltity: 32,
                            charge_time: 24,
                            reward_rate: 80,
                            type_mine: "tools"
                        },
                        203891: {
                            template_name: "Mining Excavator",
                            img: "QmfM1hip56o1sUKfQFEhVVMjMcwpnC61dNwEtPrV67tagy",
                            cost_energy: 133,
                            cost_durabiltity: 5,
                            charge_time: 12,
                            reward_rate: 100,
                            type_mine: "tools"
                        },
                        260763: {
                            template_name: "Stone Axe",
                            img: "QmPUoWpAkUVAhWo2EFwqaGxEczBptftCv5cdJXsFvfGr6T",
                            cost_energy: 5,
                            cost_durabiltity: 3,
                            charge_time: 24,
                            reward_rate: 1.7,
                            type_mine: "tools"
                        },
                        378691: {
                            template_name: "Ancient Stone Axe",
                            img: "QmPuu1uWsGPouvWTKdAgjViaLqBkW7BHHNPPUu6uma9Qo3",
                            cost_energy: 4,
                            cost_durabiltity: 1,
                            charge_time: 12,
                            reward_rate: .7,
                            type_mine: "tools"
                        },
                        260628: {
                            template_name: "Bronze Member",
                            img: "QmTdtuSs3WkL5XtWbqQizbRpXWptqL3QTK4J8p54tfqjoc",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 2,
                            type_mine: "mbs"
                        },
                        260629: {
                            template_name: "Silver Member",
                            img: "QmZWg1mP2UNcSwhrYNVqjk16BnhcWCz3oAva8BfiTNB3J4",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 4,
                            type_mine: "mbs"
                        },
                        260631: {
                            template_name: "Gold Member",
                            img: "QmTVuzynPNvydytDRYNj3XsjeeC6tYcLqxBGaksDuq6HmX",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 8,
                            type_mine: "mbs"
                        },
                        260635: {
                            template_name: "Diamond Member",
                            img: "QmTwKGD9gxhNzm19JkGBaDwWxczwGLmPoMVWFwdfPwE7bG",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 16,
                            type_mine: "mbs"
                        },
                        260636: {
                            template_name: "Bronze Member",
                            img: "Qmabn1uCmMiM7LeyLfXx8jQDjdBej5CE54FyHXWQnWSewd",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 2,
                            type_mine: "mbs"
                        },
                        260638: {
                            template_name: "Silver Member",
                            img: "QmXTsEBUb7XziEPWj9iR4ATjRJhWvTPbixKeih8na7uB9d",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 4,
                            type_mine: "mbs"
                        },
                        260639: {
                            template_name: "Gold Member",
                            img: "QmVZpBCu6wA8cCjHCXwTXdaFy8HAy2xeY6j6N5cHhAaLKB",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 8,
                            type_mine: "mbs"
                        },
                        260641: {
                            template_name: "Diamond Member",
                            img: "QmRsXyKt3vdSFti5gSbDh12MiBAh1pQxSyAWuLwyvUSk8E",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 16,
                            type_mine: "mbs"
                        },
                        260642: {
                            template_name: "Bronze Member",
                            img: "QmY6uZJiZxU4rZGw1sWdMpjzmDLYzzCaAXtQjXe13Psre2",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 2,
                            type_mine: "mbs"
                        },
                        260644: {
                            template_name: "Silver Member",
                            img: "Qmf9brZdRDffpayuVW7pfiSkFeD8vLzY7TmomEAAKxRW3e",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 4,
                            type_mine: "mbs"
                        },
                        260647: {
                            template_name: "Gold Member",
                            img: "Qmeh7xHbCfdJzj6NBPxR3dyN6FRPkze1Wrzd63DA4N1AN2",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 8,
                            type_mine: "mbs"
                        },
                        260648: {
                            template_name: "Diamond Member",
                            img: "QmUN1GRpZhM89WNV9vq2fN1mp1ARMGZMGoCmjtsgCZJU9C",
                            cost_energy: 100,
                            cost_durabiltity: 0,
                            charge_time: 1,
                            reward_rate: 16,
                            type_mine: "mbs"
                        }
                    };
                    return e[t]
                },
                countDownTimer: function(t) {
                    var e = new Date(1e3 * t).getTime()
                      , a = (new Date).getTime();
                    if (e > a) {
                        var r = new Date(1e3 * t).getTime()
                          , n = (new Date).getTime()
                          , i = r - n
                          , s = Math.floor(i % 864e5 / 36e5)
                          , o = Math.floor(i % 36e5 / 6e4)
                          , c = Math.floor(i % 6e4 / 1e3);
                        return s.toString().padStart(2, "0") + ":" + o.toString().padStart(2, "0") + ":" + c.toString().padStart(2, "0")
                    }
                    return "00:00:00"
                },
                getFcoin: function() {
                    var t = this;
                    this.$axios.get("https://wax.api.atomicassets.io/atomicmarket/v1/sales?collection_name=farmersworld&template_id=260676&symbol=WAX&sort=price&order=asc&limit=1&state=1").then((function(e) {
                        t.fcoin = e.data.data[0].price.amount / 1e8
                    }
                    ))
                }
            }
        })
          , ct = ot
          , lt = Object(p["a"])(ct, it, st, !1, null, null, null)
          , pt = lt.exports;
        d()(lt, {
            VAvatar: I["a"],
            VCard: A["a"],
            VCardText: S["b"],
            VCardTitle: S["c"],
            VChip: R["a"],
            VCol: M["a"],
            VContainer: E["a"],
            VDataIterator: O["a"],
            VDivider: G["a"],
            VImg: P["a"],
            VList: B["a"],
            VListItem: X["a"],
            VListItemContent: U["a"],
            VProgressLinear: H["a"],
            VRow: V["a"],
            VTooltip: L["a"]
        }),
        r["a"].use(w["a"]);
        var mt = [{
            path: "/",
            name: "Home",
            component: Q
        }, {
            path: "/cost",
            name: "cost",
            component: nt
        }, {
            path: "/affiliate",
            name: "affiliate",
            component: pt
        }, {
            path: "/login",
            name: "Login",
            component: function() {
                return a.e("about").then(a.bind(null, "dd7b"))
            }
        }, {
            path: "/register",
            name: "Register",
            component: function() {
                return a.e("about").then(a.bind(null, "7803"))
            }
        }, {
            path: "/about",
            name: "About",
            component: function() {
                return a.e("about").then(a.bind(null, "f820"))
            }
        }]
          , dt = new w["a"]({
            mode: "history",
            base: "/",
            routes: mt
        })
          , ut = dt
          , gt = a("2f62");
        r["a"].use(gt["a"]);
        var _t = new gt["a"].Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {}
        })
          , ht = a("f309");
        r["a"].use(ht["a"]);
        var vt = new ht["a"]({
            theme: {
                dark: !0
            }
        })
          , wt = a("2b27")
          , ft = a.n(wt)
          , bt = a("1526");
        r["a"].config.productionTip = !1,
        r["a"].use(ft.a),
        r["a"].use(bt["a"]),
        new r["a"]({
            router: ut,
            store: _t,
            vuetify: vt,
            render: function(t) {
                return t(v)
            }
        }).$mount("#app")
    },
    6: function(t, e) {},
    7: function(t, e) {},
    8: function(t, e) {},
    9: function(t, e) {}
});
