/**
 * Created by suzanne on 2/10/15.
 */
var requirejs, require, define;
(function(e) {
    function c(e, t) {
        return f.call(e, t)
    }
    function h(e, t) {
        var n, r, i, s, o, a, f, l, c, h, p = t && t.split("/"), d = u.map, v = d && d["*"] || {};
        if (e && e.charAt(0) === ".")
            if (t) {
                p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                for (l = 0; l < e.length; l += 1) {
                    h = e[l];
                    if (h === ".")
                        e.splice(l, 1), l -= 1;
                    else if (h === "..") {
                        if (l === 1 && (e[2] === ".." || e[0] === ".."))
                            break;
                        l > 0 && (e.splice(l - 1, 2), l -= 2)
                    }
                }
                e = e.join("/")
            } else
                e.indexOf("./") === 0 && (e = e.substring(2));
        if ((p || v) && d) {
            n = e.split("/");
            for (l = n.length; l > 0; l -= 1) {
                r = n.slice(0, l).join("/");
                if (p)
                    for (c = p.length; c > 0; c -= 1) {
                        i = d[p.slice(0, c).join("/")];
                        if (i) {
                            i = i[r];
                            if (i) {
                                s = i, o = l;
                                break
                            }
                        }
                    }
                if (s)
                    break;
                !a && v && v[r] && (a = v[r], f = l)
            }
            !s && a && (s = a, o = f), s && (n.splice(0, o, s), e = n.join("/"))
        }
        return e
    }
    function p(t, r) {
        return function() {
            return n.apply(e, l.call(arguments, 0).concat([t, r]))
        }
    }
    function d(e) {
        return function(t) {
            return h(t, e)
        }
    }
    function v(e) {
        return function(t) {
            s[e] = t
        }
    }
    function m(n) {
        if (c(o, n)) {
            var r = o[n];
            delete o[n], a[n] = !0, t.apply(e, r)
        }
        if (!c(s, n) && !c(a, n))
            throw new Error("No " + n);
        return s[n]
    }
    function g(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }
    function y(e) {
        return function() {
            return u && u.config && u.config[e] || {}
        }
    }
    var t, n, r, i, s = {}, o = {}, u = {}, a = {}, f = Object.prototype.hasOwnProperty, l = [].slice;
    r = function(e, t) {
        var n, r = g(e), i = r[0];
        return e = r[1], i && (i = h(i, t), n = m(i)), i ? n && n.normalize ? e = n.normalize(e, d(t)) : e = h(e, t) : (e = h(e, t), r = g(e), i = r[0], e = r[1], i && (n = m(i))), {f: i ? i + "!" + e : e,n: e,pr: i,p: n}
    }, i = {require: function(e) {
        return p(e)
    },exports: function(e) {
        var t = s[e];
        return typeof t != "undefined" ? t : s[e] = {}
    },module: function(e) {
        return {id: e,uri: "",exports: s[e],config: y(e)}
    }}, t = function(t, n, u, f) {
        var l, h, d, g, y, b = [], w;
        f = f || t;
        if (typeof u == "function") {
            n = !n.length && u.length ? ["require", "exports", "module"] : n;
            for (y = 0; y < n.length; y += 1) {
                g = r(n[y], f), h = g.f;
                if (h === "require")
                    b[y] = i.require(t);
                else if (h === "exports")
                    b[y] = i.exports(t), w = !0;
                else if (h === "module")
                    l = b[y] = i.module(t);
                else if (c(s, h) || c(o, h) || c(a, h))
                    b[y] = m(h);
                else {
                    if (!g.p)
                        throw new Error(t + " missing " + h);
                    g.p.load(g.n, p(f, !0), v(h), {}), b[y] = s[h]
                }
            }
            d = u.apply(s[t], b);
            if (t)
                if (l && l.exports !== e && l.exports !== s[t])
                    s[t] = l.exports;
                else if (d !== e || !w)
                    s[t] = d
        } else
            t && (s[t] = u)
    }, requirejs = require = n = function(s, o, a, f, l) {
        return typeof s == "string" ? i[s] ? i[s](o) : m(r(s, o).f) : (s.splice || (u = s, o.splice ? (s = o, o = a, a = null) : s = e), o = o || function() {
        }, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function() {
            t(e, s, o, a)
        }, 4), n)
    }, n.config = function(e) {
        return u = e, u.deps && n(u.deps, u.callback), n
    }, define = function(e, t, n) {
        t.splice || (n = t, t = []), !c(s, e) && !c(o, e) && (o[e] = [e, t, n])
    }, define.amd = {jQuery: !0}
})(), define("../libs/almond.0.2.5", function() {
}), define("common/constants", [], function() {
    var e = "/marketplace/b/", t = {APP_ROOT: e,AUTHENTICATED_APP_ROOT: e + "app/",RIDP_ROOT: e + "ridp/",STATIC_ROOT: e + "app2/",CONTENT_LOCATION: e + "common/locale/",LOGOUT_URL: e + "logout",DEFAULT_COVERAGE_YEAR: 2015};
    return t
}), define("underscore", [], function() {
    return _
}), define("jquery", [], function() {
    return $
}), function(e) {
    typeof define == "function" && define.amd ? define("jquery.idle", ["jquery"], e) : e(jQuery)
}(function(e) {
    e.fn.idle = function(t) {
        var n = {idle: 6e4,events: "mousemove keypress mousedown",onIdle: function() {
        },onActive: function() {
        },onHide: function() {
        },onShow: function() {
        },keepTracking: !1}, r = !1, i = !0, s = e.extend({}, n, t), o = function(e, t) {
            r && (t.onActive.call(), r = !1);
            var n = t.keepTracking ? clearInterval : clearTimeout;
            return n(e), u(t)
        }, u = function(e) {
            var t = e.keepTracking ? setInterval : setTimeout, n = t(function() {
                r = !0, e.onIdle.call()
            }, e.idle);
            return n
        };
        return this.each(function() {
            var n = u(s);
            e(this).on(s.events, function(e) {
                n = o(n, s)
            }), (t.onShow || t.onHide) && e(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange", function() {
                document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? i && (i = !1, s.onHide.call()) : i || (i = !0, s.onShow.call())
            })
        })
    }
}), define("backbone", [], function() {
    return Backbone
}), function(e) {
    function Y() {
        return {empty: !1,unusedTokens: [],unusedInput: [],overflow: -2,charsLeftOver: 0,nullInput: !1,invalidMonth: null,invalidFormat: !1,userInvalidated: !1,iso: !1}
    }
    function Z(e, n) {
        function i() {
            t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e)
        }
        var r = !0;
        return st(function() {
            return r && (i(), r = !1), n.apply(this, arguments)
        }, n)
    }
    function et(e, t) {
        return function(n) {
            return at(e.call(this, n), t)
        }
    }
    function tt(e, t) {
        return function(n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }
    function nt() {
    }
    function rt(e) {
        Et(e), st(this, e)
    }
    function it(e) {
        var t = dt(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, s = t.week || 0, o = t.day || 0, u = t.hour || 0, a = t.minute || 0, f = t.second || 0, l = t.millisecond || 0;
        this._milliseconds = +l + f * 1e3 + a * 6e4 + u * 36e5, this._days = +o + s * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._bubble()
    }
    function st(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }
    function ot(e) {
        var t = {}, n;
        for (n in e)
            e.hasOwnProperty(n) && v.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    function ut(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function at(e, t, n) {
        var r = "" + Math.abs(e), i = e >= 0;
        while (r.length < t)
            r = "0" + r;
        return (i ? n ? "+" : "" : "-") + r
    }
    function ft(e, n, r, i) {
        var s = n._milliseconds, o = n._days, u = n._months;
        i = i == null ? !0 : i, s && e._d.setTime(+e._d + s * r), o && en(e, "Date", Zt(e, "Date") + o * r), u && Yt(e, Zt(e, "Month") + u * r), i && t.updateOffset(e, o || u)
    }
    function lt(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function ct(e) {
        return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
    }
    function ht(e, t, n) {
        var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), s = 0, o;
        for (o = 0; o < r; o++)
            (n && e[o] !== t[o] || !n && mt(e[o]) !== mt(t[o])) && s++;
        return s + i
    }
    function pt(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = X[e] || V[t] || t
        }
        return e
    }
    function dt(e) {
        var t = {}, n, r;
        for (r in e)
            e.hasOwnProperty(r) && (n = pt(r), n && (t[n] = e[r]));
        return t
    }
    function vt(n) {
        var r, i;
        if (n.indexOf("week") === 0)
            r = 7, i = "day";
        else {
            if (n.indexOf("month") !== 0)
                return;
            r = 12, i = "month"
        }
        t[n] = function(s, o) {
            var u, a, f = t.fn._lang[n], l = [];
            typeof s == "number" && (o = s, s = e), a = function(e) {
                var n = t().utc().set(i, e);
                return f.call(t.fn._lang, n, s || "")
            };
            if (o != null)
                return a(o);
            for (u = 0; u < r; u++)
                l.push(a(u));
            return l
        }
    }
    function mt(e) {
        var t = +e, n = 0;
        return t !== 0 && isFinite(t) && (t >= 0 ? n = Math.floor(t) : n = Math.ceil(t)), n
    }
    function gt(e, t) {
        return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
    }
    function yt(e, n, r) {
        return Kt(t([e, 11, 31 + n - r]), n, r).week
    }
    function bt(e) {
        return wt(e) ? 366 : 365
    }
    function wt(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    function Et(e) {
        var t;
        e._a && e._pf.overflow === -2 && (t = e._a[a] < 0 || e._a[a] > 11 ? a : e._a[f] < 1 || e._a[f] > gt(e._a[u], e._a[a]) ? f : e._a[l] < 0 || e._a[l] > 23 ? l : e._a[c] < 0 || e._a[c] > 59 ? c : e._a[h] < 0 || e._a[h] > 59 ? h : e._a[p] < 0 || e._a[p] > 999 ? p : -1, e._pf._overflowDayOfYear && (t < u || t > f) && (t = f), e._pf.overflow = t)
    }
    function St(e) {
        return e._isValid == null && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && e._pf.charsLeftOver === 0 && e._pf.unusedTokens.length === 0)), e._isValid
    }
    function xt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function Tt(e, n) {
        return n._isUTC ? t(e).zone(n._offset || 0) : t(e).local()
    }
    function Nt(e, t) {
        return t.abbr = e, d[e] || (d[e] = new nt), d[e].set(t), d[e]
    }
    function Ct(e) {
        delete d[e]
    }
    function kt(e) {
        var n = 0, r, i, s, o, u = function(e) {
            if (!d[e] && m)
                try {
                    require("./lang/" + e)
                } catch (t) {
                }
            return d[e]
        };
        if (!e)
            return t.fn._lang;
        if (!lt(e)) {
            i = u(e);
            if (i)
                return i;
            e = [e]
        }
        while (n < e.length) {
            o = xt(e[n]).split("-"), r = o.length, s = xt(e[n + 1]), s = s ? s.split("-") : null;
            while (r > 0) {
                i = u(o.slice(0, r).join("-"));
                if (i)
                    return i;
                if (s && s.length >= r && ht(o, s, !0) >= r - 1)
                    break;
                r--
            }
            n++
        }
        return t.fn._lang
    }
    function Lt(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function At(e) {
        var t = e.match(w), n, r;
        for (n = 0, r = t.length; n < r; n++)
            Q[t[n]] ? t[n] = Q[t[n]] : t[n] = Lt(t[n]);
        return function(i) {
            var s = "";
            for (n = 0; n < r; n++)
                s += t[n] instanceof Function ? t[n].call(i, e) : t[n];
            return s
        }
    }
    function Ot(e, t) {
        return e.isValid() ? (t = Mt(t, e.lang()), $[t] || ($[t] = At(t)), $[t](e)) : e.lang().invalidDate()
    }
    function Mt(e, t) {
        function r(e) {
            return t.longDateFormat(e) || e
        }
        var n = 5;
        E.lastIndex = 0;
        while (n >= 0 && E.test(e))
            e = e.replace(E, r), E.lastIndex = 0, n -= 1;
        return e
    }
    function _t(e, t) {
        var n, r = t._strict;
        switch (e) {
            case "Q":
                return _;
            case "DDDD":
                return P;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return r ? H : T;
            case "Y":
            case "G":
            case "g":
                return j;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return r ? B : N;
            case "S":
                if (r)
                    return _;
            case "SS":
                if (r)
                    return D;
            case "SSS":
                if (r)
                    return P;
            case "DDD":
                return x;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return k;
            case "a":
            case "A":
                return kt(t._l)._meridiemParse;
            case "X":
                return O;
            case "Z":
            case "ZZ":
                return L;
            case "T":
                return A;
            case "SSSS":
                return C;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return r ? D : S;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return S;
            case "Do":
                return M;
            default:
                return n = new RegExp(qt(It(e.replace("\\", "")), "i")), n
        }
    }
    function Dt(e) {
        e = e || "";
        var t = e.match(L) || [], n = t[t.length - 1] || [], r = (n + "").match(U) || ["-", 0, 0], i = +(r[1] * 60) + mt(r[2]);
        return r[0] === "+" ? -i : i
    }
    function Pt(e, n, r) {
        var i, s = r._a;
        switch (e) {
            case "Q":
                n != null && (s[a] = (mt(n) - 1) * 3);
                break;
            case "M":
            case "MM":
                n != null && (s[a] = mt(n) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = kt(r._l).monthsParse(n), i != null ? s[a] = i : r._pf.invalidMonth = n;
                break;
            case "D":
            case "DD":
                n != null && (s[f] = mt(n));
                break;
            case "Do":
                n != null && (s[f] = mt(parseInt(n, 10)));
                break;
            case "DDD":
            case "DDDD":
                n != null && (r._dayOfYear = mt(n));
                break;
            case "YY":
                s[u] = t.parseTwoDigitYear(n);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                s[u] = mt(n);
                break;
            case "a":
            case "A":
                r._isPm = kt(r._l).isPM(n);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                s[l] = mt(n);
                break;
            case "m":
            case "mm":
                s[c] = mt(n);
                break;
            case "s":
            case "ss":
                s[h] = mt(n);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                s[p] = mt(("0." + n) * 1e3);
                break;
            case "X":
                r._d = new Date(parseFloat(n) * 1e3);
                break;
            case "Z":
            case "ZZ":
                r._useUTC = !0, r._tzm = Dt(n);
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), n && (r._w = r._w || {}, r._w[e] = n)
        }
    }
    function Ht(e) {
        var n, r, i = [], s, o, h, p, d, v, m, g;
        if (e._d)
            return;
        s = jt(e), e._w && e._a[f] == null && e._a[a] == null && (h = function(n) {
            var r = parseInt(n, 10);
            return n ? n.length < 3 ? r > 68 ? 1900 + r : 2e3 + r : r : e._a[u] == null ? t().weekYear() : e._a[u]
        }, p = e._w, p.GG != null || p.W != null || p.E != null ? d = Qt(h(p.GG), p.W || 1, p.E, 4, 1) : (v = kt(e._l), m = p.d != null ? Vt(p.d, v) : p.e != null ? parseInt(p.e, 10) + v._week.dow : 0, g = parseInt(p.w, 10) || 1, p.d != null && m < v._week.dow && g++, d = Qt(h(p.gg), g, m, v._week.doy, v._week.dow)), e._a[u] = d.year, e._dayOfYear = d.dayOfYear), e._dayOfYear && (o = e._a[u] == null ? s[u] : e._a[u], e._dayOfYear > bt(o) && (e._pf._overflowDayOfYear = !0), r = Xt(o, 0, e._dayOfYear), e._a[a] = r.getUTCMonth(), e._a[f] = r.getUTCDate());
        for (n = 0; n < 3 && e._a[n] == null; ++n)
            e._a[n] = i[n] = s[n];
        for (; n < 7; n++)
            e._a[n] = i[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
        i[l] += mt((e._tzm || 0) / 60), i[c] += mt((e._tzm || 0) % 60), e._d = (e._useUTC ? Xt : Wt).apply(null, i)
    }
    function Bt(e) {
        var t;
        if (e._d)
            return;
        t = dt(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], Ht(e)
    }
    function jt(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function Ft(e) {
        e._a = [], e._pf.empty = !0;
        var t = kt(e._l), n = "" + e._i, r, i, s, o, u, a = n.length, f = 0;
        s = Mt(e._f, t).match(w) || [];
        for (r = 0; r < s.length; r++)
            o = s[r], i = (n.match(_t(o, e)) || [])[0], i && (u = n.substr(0, n.indexOf(i)), u.length > 0 && e._pf.unusedInput.push(u), n = n.slice(n.indexOf(i) + i.length), f += i.length), Q[o] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), Pt(o, i, e)) : e._strict && !i && e._pf.unusedTokens.push(o);
        e._pf.charsLeftOver = a - f, n.length > 0 && e._pf.unusedInput.push(n), e._isPm && e._a[l] < 12 && (e._a[l] += 12), e._isPm === !1 && e._a[l] === 12 && (e._a[l] = 0), Ht(e), Et(e)
    }
    function It(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
            return t || n || r || i
        })
    }
    function qt(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Rt(e) {
        var t, n, r, i, s;
        if (e._f.length === 0) {
            e._pf.invalidFormat = !0, e._d = new Date(NaN);
            return
        }
        for (i = 0; i < e._f.length; i++) {
            s = 0, t = st({}, e), t._pf = Y(), t._f = e._f[i], Ft(t);
            if (!St(t))
                continue;
            s += t._pf.charsLeftOver, s += t._pf.unusedTokens.length * 10, t._pf.score = s;
            if (r == null || s < r)
                r = s, n = t
        }
        st(e, n || t)
    }
    function Ut(e) {
        var n, r, i = e._i, s = F.exec(i);
        if (s) {
            e._pf.iso = !0;
            for (n = 0, r = q.length; n < r; n++)
                if (q[n][1].exec(i)) {
                    e._f = q[n][0] + (s[6] || " ");
                    break
                }
            for (n = 0, r = R.length; n < r; n++)
                if (R[n][1].exec(i)) {
                    e._f += R[n][0];
                    break
                }
            i.match(L) && (e._f += "Z"), Ft(e)
        } else
            t.createFromInputFallback(e)
    }
    function zt(n) {
        var r = n._i, i = g.exec(r);
        r === e ? n._d = new Date : i ? n._d = new Date(+i[1]) : typeof r == "string" ? Ut(n) : lt(r) ? (n._a = r.slice(0), Ht(n)) : ct(r) ? n._d = new Date(+r) : typeof r == "object" ? Bt(n) : typeof r == "number" ? n._d = new Date(r) : t.createFromInputFallback(n)
    }
    function Wt(e, t, n, r, i, s, o) {
        var u = new Date(e, t, n, r, i, s, o);
        return e < 1970 && u.setFullYear(e), u
    }
    function Xt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 1970 && t.setUTCFullYear(e), t
    }
    function Vt(e, t) {
        if (typeof e == "string")
            if (!isNaN(e))
                e = parseInt(e, 10);
            else {
                e = t.weekdaysParse(e);
                if (typeof e != "number")
                    return null
            }
        return e
    }
    function $t(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
    }
    function Jt(e, t, n) {
        var r = s(Math.abs(e) / 1e3), i = s(r / 60), o = s(i / 60), u = s(o / 24), a = s(u / 365), f = r < 45 && ["s", r] || i === 1 && ["m"] || i < 45 && ["mm", i] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", s(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t, f[3] = e > 0, f[4] = n, $t.apply({}, f)
    }
    function Kt(e, n, r) {
        var i = r - n, s = r - e.day(), o;
        return s > i && (s -= 7), s < i - 7 && (s += 7), o = t(e).add("d", s), {week: Math.ceil(o.dayOfYear() / 7),year: o.year()}
    }
    function Qt(e, t, n, r, i) {
        var s = Xt(e, 0, 1).getUTCDay(), o, u;
        return n = n != null ? n : i, o = i - s + (s > r ? 7 : 0) - (s < i ? 7 : 0), u = 7 * (t - 1) + (n - i) + o + 1, {year: u > 0 ? e : e - 1,dayOfYear: u > 0 ? u : bt(e - 1) + u}
    }
    function Gt(n) {
        var r = n._i, i = n._f;
        return r === null || i === e && r === "" ? t.invalid({nullInput: !0}) : (typeof r == "string" && (n._i = r = kt().preparse(r)), t.isMoment(r) ? (n = ot(r), n._d = new Date(+r._d)) : i ? lt(i) ? Rt(n) : Ft(n) : zt(n), new rt(n))
    }
    function Yt(e, t) {
        var n;
        if (typeof t == "string") {
            t = e.lang().monthsParse(t);
            if (typeof t != "number")
                return e
        }
        return n = Math.min(e.date(), gt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
    }
    function Zt(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }
    function en(e, t, n) {
        return t === "Month" ? Yt(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }
    function tn(e, n) {
        return function(r) {
            return r != null ? (en(this, e, r), t.updateOffset(this, n), this) : Zt(this, e)
        }
    }
    function nn(e) {
        t.duration.fn[e] = function() {
            return this._data[e]
        }
    }
    function rn(e, n) {
        t.duration.fn["as" + e] = function() {
            return +this / n
        }
    }
    function sn(e) {
        if (typeof ender != "undefined")
            return;
        i = r.moment, e ? r.moment = Z("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : r.moment = t
    }
    var t, n = "2.6.0", r = typeof global != "undefined" ? global : this, i, s = Math.round, o, u = 0, a = 1, f = 2, l = 3, c = 4, h = 5, p = 6, d = {}, v = {_isAMomentObject: null,_i: null,_f: null,_l: null,_strict: null,_isUTC: null,_offset: null,_pf: null,_lang: null}, m = typeof module != "undefined" && module.exports, g = /^\/?Date\((\-?\d+)/i, y = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, b = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, w = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, E = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, S = /\d\d?/, x = /\d{1,3}/, T = /\d{1,4}/, N = /[+\-]?\d{1,6}/, C = /\d+/, k = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, L = /Z|[\+\-]\d\d:?\d\d/gi, A = /T/i, O = /[\+\-]?\d+(\.\d{1,3})?/, M = /\d{1,2}/, _ = /\d/, D = /\d\d/, P = /\d{3}/, H = /\d{4}/, B = /[+-]?\d{6}/, j = /[+-]?\d+/, F = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, I = "YYYY-MM-DDTHH:mm:ssZ", q = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], R = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], U = /([\+\-]|\d\d)/gi, z = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), W = {Milliseconds: 1,Seconds: 1e3,Minutes: 6e4,Hours: 36e5,Days: 864e5,Months: 2592e6,Years: 31536e6}, X = {ms: "millisecond",s: "second",m: "minute",h: "hour",d: "day",D: "date",w: "week",W: "isoWeek",M: "month",Q: "quarter",y: "year",DDD: "dayOfYear",e: "weekday",E: "isoWeekday",gg: "weekYear",GG: "isoWeekYear"}, V = {dayofyear: "dayOfYear",isoweekday: "isoWeekday",isoweek: "isoWeek",weekyear: "weekYear",isoweekyear: "isoWeekYear"}, $ = {}, J = "DDD w W M D d".split(" "), K = "M D H h m s w W".split(" "), Q = {M: function() {
        return this.month() + 1
    },MMM: function(e) {
        return this.lang().monthsShort(this, e)
    },MMMM: function(e) {
        return this.lang().months(this, e)
    },D: function() {
        return this.date()
    },DDD: function() {
        return this.dayOfYear()
    },d: function() {
        return this.day()
    },dd: function(e) {
        return this.lang().weekdaysMin(this, e)
    },ddd: function(e) {
        return this.lang().weekdaysShort(this, e)
    },dddd: function(e) {
        return this.lang().weekdays(this, e)
    },w: function() {
        return this.week()
    },W: function() {
        return this.isoWeek()
    },YY: function() {
        return at(this.year() % 100, 2)
    },YYYY: function() {
        return at(this.year(), 4)
    },YYYYY: function() {
        return at(this.year(), 5)
    },YYYYYY: function() {
        var e = this.year(), t = e >= 0 ? "+" : "-";
        return t + at(Math.abs(e), 6)
    },gg: function() {
        return at(this.weekYear() % 100, 2)
    },gggg: function() {
        return at(this.weekYear(), 4)
    },ggggg: function() {
        return at(this.weekYear(), 5)
    },GG: function() {
        return at(this.isoWeekYear() % 100, 2)
    },GGGG: function() {
        return at(this.isoWeekYear(), 4)
    },GGGGG: function() {
        return at(this.isoWeekYear(), 5)
    },e: function() {
        return this.weekday()
    },E: function() {
        return this.isoWeekday()
    },a: function() {
        return this.lang().meridiem(this.hours(), this.minutes(), !0)
    },A: function() {
        return this.lang().meridiem(this.hours(), this.minutes(), !1)
    },H: function() {
        return this.hours()
    },h: function() {
        return this.hours() % 12 || 12
    },m: function() {
        return this.minutes()
    },s: function() {
        return this.seconds()
    },S: function() {
        return mt(this.milliseconds() / 100)
    },SS: function() {
        return at(mt(this.milliseconds() / 10), 2)
    },SSS: function() {
        return at(this.milliseconds(), 3)
    },SSSS: function() {
        return at(this.milliseconds(), 3)
    },Z: function() {
        var e = -this.zone(), t = "+";
        return e < 0 && (e = -e, t = "-"), t + at(mt(e / 60), 2) + ":" + at(mt(e) % 60, 2)
    },ZZ: function() {
        var e = -this.zone(), t = "+";
        return e < 0 && (e = -e, t = "-"), t + at(mt(e / 60), 2) + at(mt(e) % 60, 2)
    },z: function() {
        return this.zoneAbbr()
    },zz: function() {
        return this.zoneName()
    },X: function() {
        return this.unix()
    },Q: function() {
        return this.quarter()
    }}, G = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
    while (J.length)
        o = J.pop(), Q[o + "o"] = tt(Q[o], o);
    while (K.length)
        o = K.pop(), Q[o + o] = et(Q[o], 2);
    Q.DDDD = et(Q.DDD, 3), st(nt.prototype, {set: function(e) {
        var t, n;
        for (n in e)
            t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t
    },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(e) {
        return this._months[e.month()]
    },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(e) {
        return this._monthsShort[e.month()]
    },monthsParse: function(e) {
        var n, r, i;
        this._monthsParse || (this._monthsParse = []);
        for (n = 0; n < 12; n++) {
            this._monthsParse[n] || (r = t.utc([2e3, n]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
            if (this._monthsParse[n].test(e))
                return n
        }
    },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(e) {
        return this._weekdays[e.day()]
    },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(e) {
        return this._weekdaysShort[e.day()]
    },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(e) {
        return this._weekdaysMin[e.day()]
    },weekdaysParse: function(e) {
        var n, r, i;
        this._weekdaysParse || (this._weekdaysParse = []);
        for (n = 0; n < 7; n++) {
            this._weekdaysParse[n] || (r = t([2e3, 1]).day(n), i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i"));
            if (this._weekdaysParse[n].test(e))
                return n
        }
    },_longDateFormat: {LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D YYYY",LLL: "MMMM D YYYY LT",LLLL: "dddd, MMMM D YYYY LT"},longDateFormat: function(e) {
        var t = this._longDateFormat[e];
        return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }), this._longDateFormat[e] = t), t
    },isPM: function(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    },_meridiemParse: /[ap]\.?m?\.?/i,meridiem: function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    },_calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},calendar: function(e, t) {
        var n = this._calendar[e];
        return typeof n == "function" ? n.apply(t) : n
    },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(e, t, n, r) {
        var i = this._relativeTime[n];
        return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
    },pastFuture: function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
    },ordinal: function(e) {
        return this._ordinal.replace("%d", e)
    },_ordinal: "%d",preparse: function(e) {
        return e
    },postformat: function(e) {
        return e
    },week: function(e) {
        return Kt(e, this._week.dow, this._week.doy).week
    },_week: {dow: 0,doy: 6},_invalidDate: "Invalid date",invalidDate: function() {
        return this._invalidDate
    }}), t = function(t, n, r, i) {
        var s;
        return typeof r == "boolean" && (i = r, r = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = r, s._strict = i, s._isUTC = !1, s._pf = Y(), Gt(s)
    }, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = Z("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i)
    }), t.utc = function(t, n, r, i) {
        var s;
        return typeof r == "boolean" && (i = r, r = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = r, s._i = t, s._f = n, s._strict = i, s._pf = Y(), Gt(s).utc()
    }, t.unix = function(e) {
        return t(e * 1e3)
    }, t.duration = function(e, n) {
        var r = e, i = null, s, o, u;
        return t.isDuration(e) ? r = {ms: e._milliseconds,d: e._days,M: e._months} : typeof e == "number" ? (r = {}, n ? r[n] = e : r.milliseconds = e) : (i = y.exec(e)) ? (s = i[1] === "-" ? -1 : 1, r = {y: 0,d: mt(i[f]) * s,h: mt(i[l]) * s,m: mt(i[c]) * s,s: mt(i[h]) * s,ms: mt(i[p]) * s}) : !(i = b.exec(e)) || (s = i[1] === "-" ? -1 : 1, u = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * s
        }, r = {y: u(i[2]),M: u(i[3]),d: u(i[4]),h: u(i[5]),m: u(i[6]),s: u(i[7]),w: u(i[8])}), o = new it(r), t.isDuration(e) && e.hasOwnProperty("_lang") && (o._lang = e._lang), o
    }, t.version = n, t.defaultFormat = I, t.momentProperties = v, t.updateOffset = function() {
    }, t.lang = function(e, n) {
        var r;
        return e ? (n ? Nt(xt(e), n) : n === null ? (Ct(e), e = "en") : d[e] || kt(e), r = t.duration.fn._lang = t.fn._lang = kt(e), r._abbr) : t.fn._lang._abbr
    }, t.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), kt(e)
    }, t.isMoment = function(e) {
        return e instanceof rt || e != null && e.hasOwnProperty("_isAMomentObject")
    }, t.isDuration = function(e) {
        return e instanceof it
    };
    for (o = G.length - 1; o >= 0; --o)
        vt(G[o]);
    t.normalizeUnits = function(e) {
        return pt(e)
    }, t.invalid = function(e) {
        var n = t.utc(NaN);
        return e != null ? st(n._pf, e) : n._pf.userInvalidated = !0, n
    }, t.parseZone = function() {
        return t.apply(null, arguments).parseZone()
    }, t.parseTwoDigitYear = function(e) {
        return mt(e) + (mt(e) > 68 ? 1900 : 2e3)
    }, st(t.fn = rt.prototype, {clone: function() {
        return t(this)
    },valueOf: function() {
        return +this._d + (this._offset || 0) * 6e4
    },unix: function() {
        return Math.floor(+this / 1e3)
    },toString: function() {
        return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    },toDate: function() {
        return this._offset ? new Date(+this) : this._d
    },toISOString: function() {
        var e = t(this).utc();
        return 0 < e.year() && e.year() <= 9999 ? Ot(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Ot(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    },toArray: function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
    },isValid: function() {
        return St(this)
    },isDSTShifted: function() {
        return this._a ? this.isValid() && ht(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
    },parsingFlags: function() {
        return st({}, this._pf)
    },invalidAt: function() {
        return this._pf.overflow
    },utc: function() {
        return this.zone(0)
    },local: function() {
        return this.zone(0), this._isUTC = !1, this
    },format: function(e) {
        var n = Ot(this, e || t.defaultFormat);
        return this.lang().postformat(n)
    },add: function(e, n) {
        var r;
        return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), ft(this, r, 1), this
    },subtract: function(e, n) {
        var r;
        return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), ft(this, r, -1), this
    },diff: function(e, n, r) {
        var i = Tt(e, this), s = (this.zone() - i.zone()) * 6e4, o, u;
        return n = pt(n), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, u -= (this.zone() - t(this).startOf("month").zone() - (i.zone() - t(i).startOf("month").zone())) * 6e4 / o, n === "year" && (u /= 12)) : (o = this - i, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? (o - s) / 864e5 : n === "week" ? (o - s) / 6048e5 : o), r ? u : ut(u)
    },from: function(e, n) {
        return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
    },fromNow: function(e) {
        return this.from(t(), e)
    },calendar: function() {
        var e = Tt(t(), this).startOf("day"), n = this.diff(e, "days", !0), r = n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(r, this))
    },isLeapYear: function() {
        return wt(this.year())
    },isDST: function() {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
    },day: function(e) {
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return e != null ? (e = Vt(e, this.lang()), this.add({d: e - t})) : t
    },month: tn("Month", !0),startOf: function(e) {
        e = pt(e);
        switch (e) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return e === "week" ? this.weekday(0) : e === "isoWeek" && this.isoWeekday(1), e === "quarter" && this.month(Math.floor(this.month() / 3) * 3), this
    },endOf: function(e) {
        return e = pt(e), this.startOf(e).add(e === "isoWeek" ? "week" : e, 1).subtract("ms", 1)
    },isAfter: function(e, n) {
        return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n)
    },isBefore: function(e, n) {
        return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n)
    },isSame: function(e, t) {
        return t = t || "ms", +this.clone().startOf(t) === +Tt(e, this).startOf(t)
    },min: function(e) {
        return e = t.apply(null, arguments), e < this ? this : e
    },max: function(e) {
        return e = t.apply(null, arguments), e > this ? this : e
    },zone: function(e, n) {
        var r = this._offset || 0;
        return e == null ? this._isUTC ? r : this._d.getTimezoneOffset() : (typeof e == "string" && (e = Dt(e)), Math.abs(e) < 16 && (e *= 60), this._offset = e, this._isUTC = !0, r !== e && (!n || this._changeInProgress ? ft(this, t.duration(r - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this)
    },zoneAbbr: function() {
        return this._isUTC ? "UTC" : ""
    },zoneName: function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    },parseZone: function() {
        return this._tzm ? this.zone(this._tzm) : typeof this._i == "string" && this.zone(this._i), this
    },hasAlignedHourOffset: function(e) {
        return e ? e = t(e).zone() : e = 0, (this.zone() - e) % 60 === 0
    },daysInMonth: function() {
        return gt(this.year(), this.month())
    },dayOfYear: function(e) {
        var n = s((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
        return e == null ? n : this.add("d", e - n)
    },quarter: function(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
    },weekYear: function(e) {
        var t = Kt(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return e == null ? t : this.add("y", e - t)
    },isoWeekYear: function(e) {
        var t = Kt(this, 1, 4).year;
        return e == null ? t : this.add("y", e - t)
    },week: function(e) {
        var t = this.lang().week(this);
        return e == null ? t : this.add("d", (e - t) * 7)
    },isoWeek: function(e) {
        var t = Kt(this, 1, 4).week;
        return e == null ? t : this.add("d", (e - t) * 7)
    },weekday: function(e) {
        var t = (this.day() + 7 - this.lang()._week.dow) % 7;
        return e == null ? t : this.add("d", e - t)
    },isoWeekday: function(e) {
        return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
    },isoWeeksInYear: function() {
        return yt(this.year(), 1, 4)
    },weeksInYear: function() {
        var e = this._lang._week;
        return yt(this.year(), e.dow, e.doy)
    },get: function(e) {
        return e = pt(e), this[e]()
    },set: function(e, t) {
        return e = pt(e), typeof this[e] == "function" && this[e](t), this
    },lang: function(t) {
        return t === e ? this._lang : (this._lang = kt(t), this)
    }}), t.fn.millisecond = t.fn.milliseconds = tn("Milliseconds", !1), t.fn.second = t.fn.seconds = tn("Seconds", !1), t.fn.minute = t.fn.minutes = tn("Minutes", !1), t.fn.hour = t.fn.hours = tn("Hours", !0), t.fn.date = tn("Date", !0), t.fn.dates = Z("dates accessor is deprecated. Use date instead.", tn("Date", !0)), t.fn.year = tn("FullYear", !0), t.fn.years = Z("years accessor is deprecated. Use year instead.", tn("FullYear", !0)), t.fn.days = t.fn.day, t.fn.months = t.fn.month, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.fn.quarters = t.fn.quarter, t.fn.toJSON = t.fn.toISOString, st(t.duration.fn = it.prototype, {_bubble: function() {
        var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, s, o, u;
        r.milliseconds = e % 1e3, i = ut(e / 1e3), r.seconds = i % 60, s = ut(i / 60), r.minutes = s % 60, o = ut(s / 60), r.hours = o % 24, t += ut(o / 24), r.days = t % 30, n += ut(t / 30), r.months = n % 12, u = ut(n / 12), r.years = u
    },weeks: function() {
        return ut(this.days() / 7)
    },valueOf: function() {
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + mt(this._months / 12) * 31536e6
    },humanize: function(e) {
        var t = +this, n = Jt(t, !e, this.lang());
        return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
    },add: function(e, n) {
        var r = t.duration(e, n);
        return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
    },subtract: function(e, n) {
        var r = t.duration(e, n);
        return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
    },get: function(e) {
        return e = pt(e), this[e.toLowerCase() + "s"]()
    },as: function(e) {
        return e = pt(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
    },lang: t.fn.lang,toIsoString: function() {
        var e = Math.abs(this.years()), t = Math.abs(this.months()), n = Math.abs(this.days()), r = Math.abs(this.hours()), i = Math.abs(this.minutes()), s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
    }});
    for (o in W)
        W.hasOwnProperty(o) && (rn(o, W[o]), nn(o.toLowerCase()));
    rn("Weeks", 6048e5), t.duration.fn.asMonths = function() {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12
    }, t.lang("en", {ordinal: function(e) {
        var t = e % 10, n = mt(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + n
    }}), m ? module.exports = t : typeof define == "function" && define.amd ? (define("moment", ["require", "exports", "module"], function(e, n, s) {
        return s.config && s.config() && s.config().noGlobal === !0 && (r.moment = i), t
    }), sn(!0)) : sn()
}.call(this), function(e) {
    typeof exports == "object" ? module.exports = e(require("backbone"), require("underscore"), require("moment")) : typeof define == "function" && define.amd && define("backbone-validation", ["backbone", "underscore", "moment"], e)
}(function(e, t, n) {
    e.Validation = function(t) {
        var n = {forceUpdate: !1,selector: "name",labelFormatter: "sentenceCase",valid: Function.prototype,invalid: Function.prototype}, r = {formatLabel: function(e, t) {
            var r;
            return typeof n.labelFormatter == "function" ? r = n.labelFormatter : r = f[n.labelFormatter], r(e, t)
        },format: function() {
            var e = Array.prototype.slice.call(arguments), t = e.shift();
            return t.replace(/\{(\d+)\}/g, function(t, n) {
                return typeof e[n] != "undefined" ? e[n] : t
            })
        }}, i = function(n, r, s) {
            return r = r || {}, s = s || "", t.each(n, function(t, o) {
                n.hasOwnProperty(o) && (!t || typeof t != "object" || t instanceof Array || t instanceof Date || t instanceof RegExp || t instanceof e.Model || t instanceof e.Collection ? r[s + o] = t : i(t, r, s + o + "."))
            }), r
        }, s = function() {
            var e = function(e) {
                return t.reduce(t.keys(t.result(e, "validation") || {}), function(e, t) {
                    return e[t] = void 0, e
                }, {})
            }, s = function(e, n) {
                var r = e.validation ? t.result(e, "validation")[n] || {} : {};
                if (t.isFunction(r) || t.isString(r))
                    r = {fn: r};
                return t.isArray(r) || (r = [r]), t.reduce(r, function(e, n) {
                    return t.each(t.without(t.keys(n), "msg"), function(t) {
                        e.push({fn: l[t],val: n[t],msg: n.msg})
                    }), e
                }, [])
            }, u = function(e, n, i, o) {
                return t.reduce(s(e, n), function(s, u) {
                    var a = t.extend({}, r, l), f = u.fn.call(a, i, n, u.val, e, o);
                    return f === !1 || s === !1 ? !1 : f && !s ? t.result(u, "msg") || f : s
                }, "")
            }, a = function(e, n) {
                var r, s = {}, o = !0, a = t.clone(n), f = i(n);
                return t.each(f, function(t, n) {
                    r = u(e, n, t, a), r && (s[n] = r, o = !1)
                }), {invalidAttrs: s,isValid: o}
            }, f = function(n, r) {
                return {preValidate: function(e, n) {
                    var r = this, i = {}, s;
                    return t.isObject(e) ? (t.each(e, function(e, t) {
                        s = r.preValidate(t, e), s && (i[t] = s)
                    }), t.isEmpty(i) ? undefined : i) : u(this, e, n, t.extend({}, this.attributes))
                },isValid: function(e) {
                    var n = i(this.attributes);
                    return t.isString(e) ? !u(this, e, n[e], t.extend({}, this.attributes)) : t.isArray(e) ? t.reduce(e, function(e, r) {
                        return e && !u(this, r, n[r], t.extend({}, this.attributes))
                    }, !0, this) : (e === !0 && this.validate(), this.validation ? this._isValid : !0)
                },validate: function(s, o) {
                    var u = this, f = !s, l = t.extend({}, r, o), c = e(u), h = t.extend({}, c, u.attributes, s), p = i(s || h), d = a(u, h);
                    u._isValid = d.isValid, t.each(c, function(e, t) {
                        var r = d.invalidAttrs.hasOwnProperty(t);
                        r || l.valid(n, t, l.selector)
                    }), t.each(c, function(e, t) {
                        var r = d.invalidAttrs.hasOwnProperty(t), i = p.hasOwnProperty(t);
                        r && (i || f) && l.invalid(n, t, d.invalidAttrs[t], l.selector)
                    }), t.defer(function() {
                        u.trigger("validated", u._isValid, u, d.invalidAttrs), u.trigger("validated:" + (u._isValid ? "valid" : "invalid"), u, d.invalidAttrs)
                    });
                    if (!l.forceUpdate && t.intersection(t.keys(d.invalidAttrs), t.keys(p)).length > 0)
                        return d.invalidAttrs
                }}
            }, c = function(e, n, r) {
                t.extend(n, f(e, r))
            }, h = function(e) {
                delete e.validate, delete e.preValidate, delete e.isValid
            }, p = function(e) {
                c(this.view, e, this.options)
            }, d = function(e) {
                h(e)
            };
            return {version: "0.9.0",configure: function(e) {
                t.extend(n, e)
            },bind: function(e, r) {
                r = t.extend({}, n, o, r);
                var i = r.model || e.model, s = r.collection || e.collection;
                if (typeof i == "undefined" && typeof s == "undefined")
                    throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                i ? c(e, i, r) : s && (s.each(function(t) {
                    c(e, t, r)
                }), s.bind("add", p, {view: e,options: r}), s.bind("remove", d))
            },unbind: function(e, n) {
                n = t.extend({}, n);
                var r = n.model || e.model, i = n.collection || e.collection;
                r && h(r), i && (i.each(function(e) {
                    h(e)
                }), i.unbind("add", p), i.unbind("remove", d))
            },validateModel: a,mixin: f(null, n)}
        }(), o = s.callbacks = {valid: function(e, t, n) {
            e.$("[" + n + '~="' + t + '"]').removeClass("invalid").removeAttr("data-error")
        },invalid: function(e, t, n, r) {
            e.$("[" + r + '~="' + t + '"]').addClass("invalid").attr("data-error", n)
        }}, u = s.patterns = {digits: /^\d+$/,number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i}, a = s.messages = {required: "{0} is required",acceptance: "{0} must be accepted",min: "{0} must be greater than or equal to {1}",max: "{0} must be less than or equal to {1}",range: "{0} must be between {1} and {2}",length: "{0} must be {1} characters",minLength: "{0} must be at least {1} characters",maxLength: "{0} must be at most {1} characters",rangeLength: "{0} must be between {1} and {2} characters",oneOf: "{0} must be one of: {1}",equalTo: "{0} must be the same as {1}",digits: "{0} must only contain digits",number: "{0} must be a number",email: "{0} must be a valid email",url: "{0} must be a valid url",inlinePattern: "{0} is invalid"}, f = s.labelFormatters = {none: function(e) {
            return e
        },sentenceCase: function(e) {
            return e.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e, t) {
                return t === 0 ? e.toUpperCase() : " " + e.toLowerCase()
            }).replace(/_/g, " ")
        },label: function(e, t) {
            return t.labels && t.labels[e] || f.sentenceCase(e, t)
        }}, l = s.validators = function() {
            var e = String.prototype.trim ? function(e) {
                return e === null ? "" : String.prototype.trim.call(e)
            } : function(e) {
                var t = /^\s+/, n = /\s+$/;
                return e === null ? "" : e.toString().replace(t, "").replace(n, "")
            }, n = function(e) {
                return t.isNumber(e) || t.isString(e) && e.match(u.number)
            }, r = function(n) {
                return !(t.isNull(n) || t.isUndefined(n) || t.isString(n) && e(n) === "" || t.isArray(n) && t.isEmpty(n))
            };
            return {fn: function(e, n, r, i, s) {
                return t.isString(r) && (r = i[r]), r.call(i, e, n, s)
            },required: function(e, n, i, s, o) {
                var u = t.isFunction(i) ? i.call(s, e, n, o) : i;
                if (!u && !r(e))
                    return !1;
                if (u && !r(e))
                    return this.format(a.required, this.formatLabel(n, s))
            },acceptance: function(e, n, r, i) {
                if (e !== "true" && (!t.isBoolean(e) || e === !1))
                    return this.format(a.acceptance, this.formatLabel(n, i))
            },min: function(e, t, r, i) {
                if (!n(e) || e < r)
                    return this.format(a.min, this.formatLabel(t, i), r)
            },max: function(e, t, r, i) {
                if (!n(e) || e > r)
                    return this.format(a.max, this.formatLabel(t, i), r)
            },range: function(e, t, r, i) {
                if (!n(e) || e < r[0] || e > r[1])
                    return this.format(a.range, this.formatLabel(t, i), r[0], r[1])
            },length: function(e, n, r, i) {
                if (!t.isString(e) || e.length !== r)
                    return this.format(a.length, this.formatLabel(n, i), r)
            },minLength: function(e, n, r, i) {
                if (!t.isString(e) || e.length < r)
                    return this.format(a.minLength, this.formatLabel(n, i), r)
            },maxLength: function(e, n, r, i) {
                if (!t.isString(e) || e.length > r)
                    return this.format(a.maxLength, this.formatLabel(n, i), r)
            },rangeLength: function(e, n, r, i) {
                if (!t.isString(e) || e.length < r[0] || e.length > r[1])
                    return this.format(a.rangeLength, this.formatLabel(n, i), r[0], r[1])
            },oneOf: function(e, n, r, i) {
                if (!t.include(r, e))
                    return this.format(a.oneOf, this.formatLabel(n, i), r.join(", "))
            },equalTo: function(e, t, n, r, i) {
                if (e !== i[n])
                    return this.format(a.equalTo, this.formatLabel(t, r), this.formatLabel(n, r))
            },pattern: function(e, t, n, i) {
                if (!r(e) || !e.toString().match(u[n] || n))
                    return this.format(a[n] || a.inlinePattern, this.formatLabel(t, i), n)
            }}
        }();
        return t.each(l, function(e, n) {
            l[n] = t.bind(l[n], t.extend({}, r, l))
        }), s
    }(t), t.extend(e.Validation.patterns, {phoneNumber: /^[2-9]\d{2}-\d{3}-\d{4}$/,allowedFirstMiddleName: /^[\A-Za-z]+$/,allowedSpecCharName: /^\s*[\A-Za-z\-\'\s]+\s*$/,allowedSpecCharAddress: /^\s*[0-9\A-Za-z\-.\s]+\s*$/,ssn: /^\d{3}-\d{2}-\d{4}$/,zipCode: /^\d{5}(-\d{4})?$/,countyFipsCode: /^\d{5}$/,ein: /^\d{2}-\d{7}$/});
    var r = function(e, n, r) {
        return t.isString(n) && (n = e[n]), t.isFunction(n) ? n.call(e, r) : !1
    };
    return t.extend(e.Validation.validators, {requireIf: function(t, n, i, s, o) {
        var u = r(s, i, o);
        return e.Validation.validators.required(t, n, !!u, s, o)
    },patternIf: function(t, n, i, s, o) {
        var u = r(s, i.predicate, o);
        if (u) {
            var a = i.pattern;
            return e.Validation.validators.pattern(t, n, a, s, o)
        }
    },requireBool: function(n, r, i, s, o) {
        if (!t.isBoolean(n))
            return n = undefined, e.Validation.validators.required(n, r, i, s, o)
    },optionalAnd: function(n, r, i, s, o) {
        if (!n)
            return;
        var u = t.keys(i)[0], a = i[u], f = e.Validation.validators[u];
        return f.call(this, n, r, a, s, o)
    },validSsn: function(t, n, i, s, o) {
        var u = i;
        u && u instanceof Function && (u = r(s, i, o));
        var a = t === "" || t === null;
        if (a && !u)
            return;
        var f = e.Validation.validators.pattern(t, n, "ssn", s, o);
        if (f)
            return f;
        if (u !== "strict")
            return;
        var l = t.split("-");
        if (t[0] === "9" || l[0] === "000" || l[0] === "666" || l[1] === "00" || l[2] === "0000")
            return "That's not a valid SSN"
    },requirePastDate: function(e, t, r, i, s) {
        var o = this.requireDate(e, t, r, i, s);
        if (o)
            return o;
        var u = n().startOf("day").diff(n(e, "MM/DD/YYYY", !0), "days");
        if (u < 0)
            return i.formatCustomError("requirePastDate")
    },requireDateInLast60Days: function(e, t, r, i, s) {
        var o = this.requireDate(e, t, r, i, s);
        if (o)
            return o;
        var u = n().startOf("day").diff(n(e, "MM/DD/YYYY", !0), "days");
        if (u < 0 || u > 60)
            return i.formatCustomError("requireDateInLast60Days")
    },requireDateInNext60Days: function(e, t, r, i, s) {
        var o = this.requireDate(e, t, r, i, s);
        if (o)
            return o;
        var u = n().startOf("day").diff(n(e, "MM/DD/YYYY", !0), "days");
        if (u > 0 || u < -60)
            return i.formatCustomError("requireDateInNext60Days")
    },requireDate: function(n, r, i, s, o) {
        var u = function() {
            var t = e.Validation.labelFormatters.sentenceCase(r);
            return s.formatCustomError("requireDate")
        }, a;
        if (!t.isString(n) || n.length !== 10 || (a = n.split("/")).length !== 3)
            return u();
        var f = parseInt(a[0], 10) - 1, l = parseInt(a[1], 10), c = parseInt(a[2], 10);
        if (isNaN(f + l + c))
            return u();
        var h = new Date(c, f, l);
        if (h.getFullYear() !== c || h.getMonth() !== f || h.getDate() !== l)
            return u()
    }}), e.Validation
}), define("models/base-model", ["backbone-validation"], function(e) {
    var t = Backbone.Model.extend({safeAttributes: [],loggableAttributes: [],toJSON: function() {
        var e = Backbone.Model.prototype.toJSON.call(this);
        return _.each(e, function(t, n) {
            t && _.isFunction(t.toJSON) && (e[n] = t.toJSON()), t && _.isArray(t) && !_.isEmpty(t) && (e[n] = _.map(t, function(e) {
                return e && _.isFunction(e.toJSON) ? e.toJSON() : e
            }))
        }), e
    },stripPiiFromValue: function(e) {
        return _.isString(e) ? e.replace(/[a-zA-Z]/g, "x").replace(/\d/g, "1") : _.isNumber(e) ? parseFloat(this.stripPiiFromValue(e.toString())) : e
    },toLoggable: function() {
        var e = Backbone.Model.prototype.toJSON.call(this);
        return _.each(e, function(t, n) {
            var r = this.loggableAttributes.indexOf(n) === -1;
            if (!t)
                return;
            _.isFunction(t.toLoggable) ? e[n] = t.toLoggable() : _.isArray(t) ? e[n] = _.map(t, function(e) {
                return e && _.isFunction(e.toLoggable) ? e.toLoggable() : r ? this.stripPiiFromValue(e) : e
            }, this) : e[n] = r ? this.stripPiiFromValue(t) : t
        }, this), e
    },set: function(e, t, n) {
        var r;
        _.isObject(e) ? r = _.keys(e) : r = [e];
        if (!_.isEmpty(this.defaults)) {
            var i = _.filter(r, function(e) {
                return !(e in this.defaults) && e !== "id"
            }, this);
            if (!_.isEmpty(i))
                throw console.log("Unrecognized properties: " + i.join(", ")), new Error("Unrecognized properties: " + i.join(", "))
        }
        return Backbone.Model.prototype.set.call(this, e, t, n)
    },safeSet: function(e, t, n) {
        this.set(_.pick(e, this.safeAttributes), n)
    },validate: function(t, n) {
        n = n || {};
        if (n.validate === !1)
            return;
        if (_.isArray(n.validate) || _.isString(n.validate))
            t = _.pick(t, n.validate);
        var r = e.validateModel(this, t), i = _.omit(t, _.keys(r.invalidAttrs));
        this.trigger("valid", this, i);
        if (_.isEmpty(r.invalidAttrs))
            return;
        return r.invalidAttrs
    },formatCustomError: function(e) {
        return t.customErrorFormatter ? t.customErrorFormatter.call(this, e) : e
    }});
    return t.customErrorFormatter = null, t.registerCustomErrorFormatter = function(e) {
        t.customErrorFormatter = e
    }, t
}), define("util/csrf-util", ["common/constants"], function(e) {
    function r() {
        var e = document.cookie.split(";"), t = _.find(e, function(e) {
            var t = $.trim(e).split("=");
            return t[0] === n
        });
        return t ? $.trim(t).split("=")[1] : null
    }
    function s() {
        var n = function(e, n) {
            var s = r();
            s ? e.setRequestHeader(t, s) : i && console.log("Outgoing request with missing CSRF token: " + n.url)
        };
        r() || $.get(e.APP_ROOT + "csrf", function(e) {
        }), $.ajaxSetup({beforeSend: n});
        var s = Backbone.ajax;
        Backbone.ajax = function(e) {
            var t = e.beforeSend;
            return e.beforeSend = function(e) {
                n(e);
                if (t)
                    return t.apply(this, arguments)
            }, s.call(this, e)
        }
    }
    var t = "X-CSRF-Token", n = "mplcsrf", i = !1;
    return {initCsrfHooks: s}
}), define("util/app-context", [], function() {
    var e = {}, t = !1, n = function(n) {
        if (t)
            throw new Error("Application already configured!");
        t = !0, e = _.defaults(n || {}, {faFlowEnabled: !1})
    }, r = _.memoize(function() {
        var e = window.location.hostname, t = e.length;
        if (e === "www.healthcare.gov" || e === "www.cuidadodesalud.gov")
            return "production"
    }), i = _.memoize(function() {
        var e = window.location.hostname, t = e.length;
        return t > 19 && e.indexOf(".cuidadodesalud.gov") === t - 19 ? "es" : "en"
    }), s = _.memoize(function() {
        return !!e.csr
    });
    return {configureApp: n,getEnvironment: r,getLocale: i,isCallCenter: s,faFlowEnabled: function() {
        return e.faFlowEnabled
    }}
}), define("util/strings", ["common/constants", "util/app-context"], function(e, t) {
    function s(e) {
        return n ? n[e] : i(e + ".js")
    }
    function o(e, t) {
        if (!e)
            return "";
        var n = Array.prototype.slice.call(arguments, 1);
        e = e.replace(/\{(\d+)\}/g, function(e, t) {
            return typeof n[t] != "undefined" && typeof n[t] != "object" ? n[t] : e
        });
        var r = n[n.length - 1];
        return _.isObject(r) && (e = e.replace(/\{(\w+)\}/g, function(e, t) {
            return r[t] || r[t] === "" ? r[t] : e
        })), e
    }
    var n = window._stringBundle || null, r = function(e) {
        var t = document.createElement("a");
        return t.href = e, t.host.indexOf("healthcare.gov") > -1 ? t.host = t.host.replace("healthcare.gov", "cuidadodesalud.gov") : (t.pathname.indexOf("/es") === 0 && (t.pathname = t.pathname.substring(3)), t.host = t.host.replace("cuidadodesalud.gov", "healthcare.gov")), t.href
    }, i = _.memoize(function(n) {
        var r = t.getLocale(), i = $.ajax({type: "GET",url: e.CONTENT_LOCATION + r + "/" + n,async: !1}).responseText;
        return window.eval("(" + i + ")")
    });
    return {format: o,getGroup: s,toggleUrlLanguage: r}
}), define("init/common-init", ["backbone", "models/base-model", "util/csrf-util", "util/strings", "backbone-validation"], function(e, t, n, r, i) {
    var s = function(e) {
        var t = r.getGroup("models");
        return t[e] || ""
    }, o = function() {
        var n = r.getGroup("models");
        _.extend(i.messages, n.defaultErrors);
        var o = n.fields || {};
        i.configure({labelFormatter: function(t, n) {
            return o[t] || e.Validation.labelFormatters.sentenceCase(t)
        }}), t.registerCustomErrorFormatter(s)
    };
    return function(t) {
        t = t || {}, window.console || (window.console = {}), window.console.log || (window.console.log = function() {
        }), window.console.info || (window.console.info = function() {
        }), window.console.warn || (window.console.warn = function() {
        }), window.console.error || (window.console.error = function() {
        }), (_.isUndefined(t.requireCsrf) || t.requireCsrf) && n.initCsrfHooks(), e.emulateHTTP = !0, o()
    }
}), define("common/util/ffm-util", ["underscore", "common/constants"], function(e, t) {
    var n = {INDIVIDUAL: "1",APP2: "5"}, r = {NOT_DONE: "001",SUBMITTED: "002"}, i = function(e, n, r) {
        return r = r || t.DEFAULT_COVERAGE_YEAR, "/marketplace/auth/" + n + "/" + f(e) + "/individualApplication?year=" + r
    }, s = function(e, t, n) {
        return "/marketplace/auth/" + t + "/" + f(e) + "/myAccount?appId=" + n
    }, o = function(e, t, n) {
        return s(e, t, n)
    }, u = function(e) {
        return "/marketplace/auth/global/" + f(e) + "/myProfile#landingPage"
    }, a = function(e) {
        return "/marketplace/global/" + f(e) + "/registration"
    }, f = function(e) {
        var t = e === "es" ? "es_MX" : "en_US";
        return t
    }, l = function(t) {
        if (!t)
            return null;
        if (!t.systemUser)
            return null;
        var n = t.systemUser.personIDProofingEvent;
        if (!e.isArray(n))
            return null;
        var r = e.any(n, function(t) {
            return e.isObject(t) && t.proofingEventSuccessIndicator
        });
        return r
    }, c = function(t) {
        if (!t)
            return null;
        if (!t.systemUser)
            return null;
        var n = t.systemUser.personIDProofingEvent;
        return e.isArray(n) ? n.length : null
    }, h = function(e) {
        return e ? e.systemUser ? e.systemUser.personIdentifier : e.personIdentifier || null : null
    }, p = function(e) {
        return e ? e.systemUser ? e.systemUser.systemUserIdentifier : e.systemUserIdentifier || null : null
    }, d = function(e) {
        return e ? e.systemUser ? e.systemUser.systemUserLoginName : e.systemUserLoginName || null : null
    }, v = function(e) {
        return e ? e.systemUser ? e.systemUser.userTrackingNumber : e.userTrackingNumber || null : null
    };
    return {INSURANCE_APPLICATION_TYPE_CODE: n,getApplicationUrl: i,getPersonIdentifier: h,getNumRidpAttempts: c,getResumeApplicationUrl: s,getSystemUserIdentifier: p,getSystemUserLoginName: d,getUserTrackingNumber: v,getApp2ResumeApplicationUrl: o,getLoginUrl: a,getManageApplicationsUrl: u,isRidpComplete: l}
}), define("util/input-util", [], function() {
    var e = {resetHtml5: function() {
        /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? $("input[type=number]").on("keydown", function(e) {
            var t = $(this).prop("maxlength");
            if (this.value.length >= t) {
                var n = e.charCode || e.keyCode;
                n <= 57 && n >= 48 && e.preventDefault()
            }
        }) : ($("input[type=email]").prop("type", "text"), $("input[type=number]").prop("type", "text"), $("input[type=tel]").prop("type", "text"), $("input[type=url]").prop("type", "text"))
    },readFormattedNumber: function(e) {
        var t = e.match(/\d*\.?\d+/g);
        return t ? Number(t.join("")) : ""
    }};
    return e
}), define("models/account", ["models/base-model", "common/constants"], function(e, t) {
    var n = e.extend({defaults: {applicationId: null,coverageState: null,firstName: "",middleName: "",lastName: "",suffix: "",email: "",password: "",dob: "",ssn: "",sex: "",streetName: "",apartment: "",city: "",state: "",zipCode: "",phoneNumber: null,phoneExtension: null,phoneType: null,status: "NEW",errorMessage: null,ridpComplete: !1,ridpAttempts: 0,privacyPolicy: !1,newsAndUpdates: !1,application: null,applications: [],specialCasesStatus: "INCOMPLETE",securityQuestions: null,securityAnswers: null},initialize: function(e) {
        this.securityQuestionsRequired = !1, (!e || !e.securityQuestions) && this.set({securityQuestions: []}, {silent: !0}), (!e || !e.securityAnswers) && this.set({securityAnswers: []}, {silent: !0}), !e || !e.assertivePasswordCheck ? this.assertivePasswordCheck = !0 : this.assertivePasswordCheck = !1
    },safeAttributes: [],loggableAttributes: ["applicationId", "status", "errorMessage", "ridpComplete", "ridpAttempts", "privacyPolicy", "newsAndUpdates", "specialCasesStatus"],validation: function() {
        return {firstName: {pattern: "allowedSpecCharName",maxLength: 20},lastName: {pattern: "allowedSpecCharName",maxLength: 25},email: [{maxLength: 75}, {fn: this._validateEmail}],privacyPolicy: {acceptance: !0},password: this._validatePassword,securityQuestions: this._validateSecurityQuestions,securityAnswers: this._validateSecurityAnswers}
    },_validateEmail: function(e) {
        if (!e)
            return this.formatCustomError("emailInvalid");
        parts = e.split("@");
        if (parts.length !== 2)
            return this.formatCustomError("emailInvalid");
        var t = parts[0], n = parts[1];
        if (!/^[a-zA-Z0-9][A-Za-z0-9._\-]+$/.test(t))
            return this.formatCustomError("emailCharset");
        if (/^IPv6/.test(n) || /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(n))
            return this.formatCustomError("emailNoIp");
        if (!/^[A-z0-9._\-]+$/.test(n))
            return this.formatCustomError("emailHostChars");
        var r = n.split(".");
        if (r.length < 2)
            return this.formatCustomError("emailHostParts");
        for (var i = 0; i < r.length; i++)
            if (!r[i])
                return this.formatCustomError("emailHostInvalid")
    },validatePasswordRules: function(e, t) {
        if (!this.isNew())
            return;
        return this.assertivePasswordCheck ? this.validatePasswordRulesBBB(e, t) : this.validatePasswordRulesAAA(e)
    },_validatePassword: function(e, t, n) {
        return this.assertivePasswordCheck ? this._validatePasswordBBB(e, t, n) : this._validatePasswordAAA(e, t, n)
    },validatePasswordRulesAAA: function(e) {
        return {length: e.length >= 8 && e.length <= 20,"case": e.toLowerCase() !== e && e.toUpperCase() !== e,number: /[0-9]/.test(e)}
    },_validatePasswordAAA: function(e, t, n) {
        var r = this.validatePasswordRules(e);
        if (!_.all(r))
            return this.formatCustomError("pwRequires");
        if (/[=?<>()'"\/\\&]/.test(e))
            return this.formatCustomError("pwCharset");
        var i = n && n.email || this.get("email");
        if (i && e.toLowerCase().indexOf(i.toLowerCase()) > -1)
            return this.formatCustomError("pwEmail")
    },validatePasswordRulesBBB: function(e, t) {
        e = e || "";
        var n = !0;
        if (t) {
            var r = t.email || this.get("email") || "";
            r.indexOf("@") > 0 && (n = e.toLowerCase().indexOf(r.toLowerCase()) === -1)
        }
        return {length: e.length >= 8 && e.length <= 20,"case": e.toLowerCase() !== e && e.toUpperCase() !== e,number: /[0-9]/.test(e),blacklist: !/[=?<>()'"\/\\&]/.test(e),noemail: n}
    },_validatePasswordBBB: function(e, t, n) {
        e = e || "";
        var r = this.validatePasswordRules(e, n);
        if (!_.all(r)) {
            var i = [], s = [];
            r.length || s.push(this.formatCustomError("pwSubLength")), r["case"] || s.push(this.formatCustomError("pwSubMix")), r.number || s.push(this.formatCustomError("pwSubNum")), r.blacklist || s.push(this.formatCustomError("pwSubBlacklist")), r.noemail || s.push(this.formatCustomError("pwSubEmail"));
            if (s.length === 1)
                i.push(s[0]);
            else if (s.length === 2)
                s.splice(-1, 0, this.formatCustomError("pwAnd")), i.push(s.join(" "));
            else {
                var o = s.pop();
                i.push(s.join(", ")), i.push(this.formatCustomError("pwOxfordComma")), i.push(o)
            }
            return i.unshift(this.formatCustomError("pwMust")), i.push("."), i.join("")
        }
    },_validateSecurityQuestions: function(e) {
        if (!this.securityQuestionsRequired)
            return;
        if (!e || e.length !== 3)
            return this.formatCustomError("secQuestionNum");
        if (_.any(e, function(e) {
                return !e
            }))
            return this.formatCustomError("secQuestionNum")
    },validateSecurityAnswer: function(e) {
        if (!e)
            return this.formatCustomError("secAnsEmpty");
        if (e.length > 30)
            return this.formatCustomError("secAnsLength");
        if (!/^[a-zA-Z0-9][a-zA-Z0-9' \.\-]*$/.test(e))
            return this.formatCustomError("secAnsCharset")
    },_validateSecurityAnswers: function(e) {
        if (!this.securityQuestionsRequired)
            return;
        if (!e || e.length !== 3)
            return this.formatCustomError("secAnsMissing");
        var t, n = _.each(e, function(e) {
            t || (t = this.validateSecurityAnswer(e))
        }, this);
        return e[0] === e[1] || e[0] === e[2] || e[1] === e[2] ? this.formatCustomError("secAnsClash") : t
    }});
    return n.STATUS = {NEW: "NEW",ERROR: "ERROR",QUEUED: "QUEUED",CREATED: "CREATED"}, n
}), define("common/data/data-2014/fpl", [], function() {
    return {DEFAULT: {base: 11490,increment: 4020},AK: {base: 14350,increment: 5030},HI: {base: 13230,increment: 4620}}
}), define("common/data/data-2015/fpl", [], function() {
    return {DEFAULT: {base: 11670,increment: 4060},AK: {base: 14580,increment: 5080},HI: {base: 13420,increment: 4670}}
}), define("common/data/fpl", ["common/data/data-2014/fpl", "common/data/data-2015/fpl"], function(e, t) {
    var n = function(n, r, i) {
        if (r.length !== 2)
            throw new Error("Must use a two digit state code (e.g. CA for california)");
        var s = {2014: e,2015: t}, o = s[n];
        if (!o)
            throw new Error("No FPL data for year " + n);
        var u = o[r.toUpperCase()] || o.DEFAULT;
        return u.base + (i - 1) * u.increment
    };
    return {compute: n}
}), define("common/data/state-consts", [], function() {
    var e = {alabama: "AL",alaska: "AK","american-samoa": "AS",arizona: "AZ",arkansas: "AR",california: "CA",colorado: "CO",connecticut: "CT",delaware: "DE","district-of-columbia": "DC",florida: "FL",georgia: "GA",guam: "GU",hawaii: "HI",idaho: "ID",illinois: "IL",indiana: "IN",iowa: "IA",kansas: "KS",kentucky: "KY",louisiana: "LA",maine: "ME",maryland: "MD",massachusetts: "MA",michigan: "MI",minnesota: "MN",mississippi: "MS",missouri: "MO",montana: "MT",nebraska: "NE",nevada: "NV","new-hampshire": "NH","new-jersey": "NJ","new-mexico": "NM","new-york": "NY","north-carolina": "NC","north-dakota": "ND","northern-mariana-islands": "MP",ohio: "OH",oklahoma: "OK",oregon: "OR",pennsylvania: "PA","puerto-rico": "PR","rhode-island": "RI","south-carolina": "SC","south-dakota": "SD",tennessee: "TN",texas: "TX",utah: "UT",vermont: "VT",virginia: "VA","virgin-islands": "VI",washington: "WA","west-virginia": "WV",wisconsin: "WI",wyoming: "WY"}, t = {AL: "Alabama",AK: "Alaska",AS: "American Samoa",AZ: "Arizona",AR: "Arkansas",CA: "California",CO: "Colorado",CT: "Connecticut",DE: "Delaware",DC: "District of Columbia",FL: "Florida",GA: "Georgia",GU: "Guam",HI: "Hawaii",ID: "Idaho",IL: "Illinois",IN: "Indiana",IA: "Iowa",KS: "Kansas",KY: "Kentucky",LA: "Louisiana",ME: "Maine",MD: "Maryland",MA: "Massachusetts",MI: "Michigan",MN: "Minnesota",MS: "Mississippi",MO: "Missouri",MT: "Montana",NE: "Nebraska",NV: "Nevada",NH: "New Hampshire",NJ: "New Jersey",NM: "New Mexico",NY: "New York",NC: "North Carolina",ND: "North Dakota",MP: "Northern Mariana Islands",OH: "Ohio",OK: "Oklahoma",OR: "Oregon",PA: "Pennsylvania",PR: "Puerto Rico",RI: "Rhode Island",SC: "South Carolina",SD: "South Dakota",TN: "Tennessee",TX: "Texas",UT: "Utah",VT: "Vermont",VA: "Virginia",VI: "Virgin Islands",WA: "Washington",WV: "West Virginia",WI: "Wisconsin",WY: "Wyoming"}, n = {AS: 1,GU: 1,MP: 1,PR: 1,UM: 1,VI: 1}, r = {Alabama: 0,Alaska: 0,Arizona: 3,Arkansas: 0,Delaware: 0,Florida: 2,Georgia: 2,Idaho: 0,Illinois: 3,Indiana: 3,Iowa: 1,Kansas: 3,Louisiana: 3,Maine: 3,Michigan: 3,Mississippi: 0,Missouri: 0,Montana: 3,Nebraska: 0,Nevada: 0,"New Hampshire": 0,"New Jersey": 3,"New Mexico": 0,"North Carolina": 0,"North Dakota": 3,Ohio: 0,Oklahoma: 0,Oregon: 0,Pennsylvania: 0,"South Carolina": 0,"South Dakota": 3,Tennessee: 0,Texas: 3,Utah: 3,Virginia: 0,"West Virginia": 0,Wisconsin: 3,Wyoming: 1};
    return {SLUG_TO_CODE: e,CODE_TO_NAME: t,TERRITORIES: n,CHIP_WAITING_PERIOD: r}
}), define("common/data/zip-consts", [], function() {
    return ZIPCODE_RANGES = {AK: [[99501, 99950]],AL: [[30165, 30165], [35004, 35447], [35448, 35958], [35959, 36855], [36856, 36925]],AR: [[65739, 65739], [65761, 65761], [71044, 71044], [71069, 71069], [71075, 71075], [71220, 71220], [71256, 71256], [71277, 71277], [71601, 71937], [71940, 71953], [71956, 72338], [72339, 72395], [72396, 72444], [72445, 72616], [72617, 72644], [72645, 72959], [74346, 74346], [74902, 74902]],AS: [[96799, 96799]],AZ: [[85001, 85534], [85535, 86556]],CA: [[89439, 89439], [90001, 96134], [96135, 96162], [97635, 97635]],CO: [[67756, 67756], [67762, 67762], [69128, 69128], [69145, 69145], [69168, 69168], [80001, 80737], [80740, 81658], [82063, 82063], [82070, 82070], [82082, 82082]],CT: [[6001, 6389], [6401, 6927], [10506, 10506], [10509, 10509], [10576, 10576], [10590, 10590], [12501, 12501], [12594, 12594]],DC: [[20001, 20041], [20042, 20098], [20201, 20586], [20590, 20597], [20599, 20599], [56901, 56999]],DE: [[19701, 19952], [19953, 19973], [19975, 19980]],FL: [[32003, 34997], [39819, 39819]],FM: [[96941, 96944]],GA: [[30002, 30164], [30165, 30555], [30557, 30559], [30560, 31999], [35958, 35958], [36855, 36855], [39813, 39818], [39819, 39901]],GU: [[96910, 96932]],HI: [[96701, 96797], [96801, 96898]],IA: [[50001, 50065], [50066, 50864], [50936, 51001], [51002, 51023], [51024, 51557], [51558, 51630], [51631, 51640], [51645, 52537], [52540, 52542], [52543, 52573], [52574, 52626], [52627, 52809], [57005, 57005], [57034, 57034]],ID: [[59847, 59847], [83114, 83114], [83120, 83120], [83201, 83342], [83343, 83406], [83415, 83856], [83857, 83877], [97910, 97910], [99012, 99012], [99025, 99025], [99030, 99030], [99128, 99128]],IL: [[60001, 62999]],IN: [[46001, 47997]],KS: [[66002, 66518], [66520, 66955], [66956, 67622], [67623, 67753], [67756, 67761], [67762, 67954], [68325, 68325], [68327, 68327], [68420, 68420], [68466, 68466], [68943, 68943], [68978, 68978], [69026, 69026], [69044, 69044]],KY: [[40003, 40965], [40972, 41553], [41554, 42223], [42232, 42602], [42603, 42788], [45275, 45275], [45999, 45999]],LA: [[70001, 70438], [70441, 70444], [70445, 70450], [70451, 71043], [71044, 71068], [71069, 71073], [71075, 71219], [71220, 71254], [71256, 71276], [71277, 71497]],MA: [[1001, 2791], [5501, 5544]],MD: [[19952, 19952], [19973, 19973], [20588, 20588], [20601, 21930]],ME: [[3579, 3579], [3813, 3813], [3901, 4992]],MH: [[96960, 96970]],MI: [[48001, 49971], [54540, 54540]],MN: [[55001, 56136], [56137, 56144], [56145, 56164], [56165, 56219], [56220, 56220], [56221, 56257], [56258, 56763], [57026, 57026], [57030, 57030], [57068, 57068], [58030, 58030], [58225, 58225]],MO: [[50065, 50065], [50864, 50864], [51630, 51630], [51640, 51640], [52537, 52537], [52542, 52542], [52573, 52573], [52626, 52626], [63005, 65738], [65739, 65760], [65761, 65899], [72444, 72444], [72616, 72616], [72644, 72644]],MP: [[96950, 96952]],MS: [[35447, 35447], [38601, 39776], [70438, 70438], [70444, 70444], [70450, 70450]],MT: [[57717, 57717], [57724, 57724], [58621, 58621], [58838, 58838], [58845, 58845], [59001, 59008], [59010, 59221], [59222, 59270], [59273, 59311], [59312, 59314], [59315, 59846], [59847, 59937], [82725, 82725]],NC: [[27006, 28112], [28114, 28909], [30559, 30559]],ND: [[57255, 57255], [57260, 57260], [57270, 57270], [57430, 57430], [57437, 57437], [57441, 57441], [57446, 57446], [57457, 57457], [57632, 57632], [57638, 57638], [57641, 57641], [57642, 57642], [57645, 57645], [57648, 57648], [57660, 57660], [58001, 58029], [58030, 58041], [58042, 58043], [58045, 58053], [58054, 58224], [58225, 58413], [58415, 58436], [58438, 58439], [58440, 58568], [58569, 58620], [58621, 58623], [58625, 58639], [58640, 58649], [58650, 58653], [58654, 58835], [58838, 58844], [58845, 58856], [59221, 59221], [59270, 59270]],NE: [[51557, 51557], [57078, 57078], [57523, 57523], [57533, 57533], [57580, 57580], [57735, 57735], [66518, 66518], [66955, 66955], [67622, 67622], [68001, 68324], [68325, 68326], [68327, 68419], [68420, 68465], [68466, 68719], [68720, 68777], [68778, 68942], [68943, 68977], [68978, 69025], [69026, 69043], [69044, 69127], [69128, 69144], [69145, 69167], [69168, 69201], [69210, 69212], [69214, 69216], [69217, 69343], [69345, 69367], [80737, 80737], [82082, 82082]],NH: [[3031, 3576], [3579, 3812], [3813, 3897]],NJ: [[7001, 8989], [10925, 10925], [10952, 10952], [10964, 10964], [10965, 10965], [10983, 10983]],NM: [[79835, 79835], [79922, 79922], [79932, 79932], [79934, 79934], [85534, 85534], [87001, 88240], [88241, 88439]],NV: [[88901, 89421], [89422, 89438], [89439, 89883]],NY: [[501, 544], [6390, 6390], [10001, 10505], [10506, 10507], [10509, 10573], [10576, 10589], [10590, 10924], [10925, 10950], [10952, 10963], [10964, 10964], [10965, 10982], [10983, 12498], [12501, 12592], [12594, 12719], [12720, 12780], [12781, 14724], [14726, 14871], [14872, 14905]],OH: [[43001, 45274], [45275, 45899], [45999, 45999]],OK: [[71937, 71937], [71953, 71953], [73001, 73196], [73401, 73951], [74001, 74345], [74346, 74901], [74902, 74966]],OR: [[89421, 89421], [96134, 96134], [97001, 97634], [97635, 97909], [97910, 97920], [99362, 99362]],PA: [[12719, 12719], [12780, 12780], [14724, 14724], [14871, 14871], [15001, 19612], [26034, 26034], [26541, 26541]],PR: [[601, 795], [901, 988]],PW: [[96939, 96940]],RI: [[2801, 2940]],SC: [[28112, 28112], [29001, 29945]],SD: [[51001, 51001], [51023, 51023], [56136, 56136], [56144, 56144], [56164, 56164], [56219, 56219], [56220, 56220], [56257, 56257], [57001, 57004], [57005, 57025], [57026, 57029], [57030, 57033], [57034, 57067], [57068, 57077], [57078, 57252], [57255, 57259], [57260, 57269], [57270, 57429], [57430, 57436], [57437, 57440], [57441, 57445], [57446, 57456], [57457, 57522], [57523, 57532], [57533, 57579], [57580, 57631], [57632, 57636], [57638, 57640], [57641, 57641], [57642, 57644], [57645, 57646], [57648, 57659], [57660, 57716], [57717, 57717], [57718, 57722], [57724, 57732], [57735, 57799], [58041, 58041], [58043, 58043], [58053, 58053], [58413, 58413], [58436, 58436], [58439, 58439], [58568, 58568], [58623, 58623], [58639, 58639], [58649, 58649], [58653, 58653], [68719, 68719], [68777, 68777], [69201, 69201], [69212, 69212], [69216, 69216], [69343, 69343], [82701, 82701]],TN: [[30555, 30555], [30559, 30559], [37010, 38589], [40965, 40965], [42223, 42223], [42602, 42602], [72338, 72338], [72395, 72395]],TX: [[73301, 73344], [73960, 73960], [75001, 79834], [79835, 79920], [79922, 79931], [79932, 79932], [79934, 79999], [88240, 88240], [88510, 88595]],UT: [[82930, 82930], [83342, 83342], [84001, 84791]],VA: [[20041, 20041], [20101, 20135], [20136, 20198], [20598, 20598], [22003, 24602], [24603, 24622], [24624, 24658], [41553, 41553]],VI: [[801, 851]],VT: [[5001, 5495], [5601, 5907]],WA: [[83856, 83856], [98001, 99011], [99012, 99023], [99025, 99029], [99030, 99126], [99128, 99361], [99362, 99403]],WI: [[53001, 54539], [54540, 54990]],WV: [[20135, 20135], [24602, 24602], [24622, 24622], [24701, 26033], [26034, 26537], [26541, 26886]],WY: [[57717, 57717], [59008, 59008], [59311, 59311], [59314, 59314], [82001, 82061], [82063, 82063], [82070, 82081], [82082, 82649], [82701, 82723], [82725, 82929], [82930, 83113], [83114, 83119], [83120, 83128], [83414, 83414]]}, {ZIPCODE_RANGES: ZIPCODE_RANGES}
}), define("common/data/data-2014/marketplace", [], function() {
    return {CA: {url: "http://www.coveredca.com",stateName: "California",siteName: "Covered California"},CO: {url: "http://www.connectforhealthco.com",stateName: "Colorado",siteName: "Connect for Health Colorado"},CT: {url: "http://www.accesshealthct.com",stateName: "Connecticut",siteName: "Access Health CT"},DC: {url: "http://dchealthlink.com/",stateName: "District Of Columbia",siteName: "DC Health Link"},HI: {url: "http://www.hawaiihealthconnector.com",stateName: "Hawaii",siteName: "Hawaii Health Connector"},ID: {url: "http://www.yourhealthidaho.org",stateName: "Idaho",siteName: "Your Health Idaho",infoOnly: !0},KY: {url: "http://kynect.ky.gov/",stateName: "Kentucky",siteName: "kynect: Kentucky's Healthcare Connection"},MD: {url: "http://www.marylandhealthconnection.gov/",stateName: "Maryland",siteName: "Maryland Health Connection"},MA: {url: "https://www.mahealthconnector.org",stateName: "Massachusetts",siteName: "Health Connector"},MN: {url: "http://mn.gov/hix/",stateName: "Minnesota",siteName: "MNsure website"},MS: {url: "http://onemississippi.com",stateName: "Mississippi",siteName: "One, Mississippi",shopOnly: !0},NV: {url: "http://www.nevadahealthlink.com/",stateName: "Nevada",siteName: "Nevada Health Link"},NM: {url: "http://www.bewellnm.com/",stateName: "New Mexico",siteName: "BeWellNM",infoOnly: !0},NY: {url: "http://nystateofhealth.ny.gov/",stateName: "New York",siteName: "New York State of Health"},OR: {url: "http://coveroregon.com",stateName: "Oregon",siteName: "Cover Oregon"},RI: {url: "http://www.healthsourceri.com/",stateName: "Rhode Island",siteName: "HealthSource RI"},UT: {url: "http://www.avenueh.com/",stateName: "Utah",siteName: "Avenue H - Utah",shopOnly: !0},VT: {url: "http://healthconnect.vermont.gov",stateName: "Vermont",siteName: "Vermont Health Connect"},WA: {url: "http://www.wahealthplanfinder.org/",stateName: "Washington",siteName: "Washington Healthplanfinder"}}
}), define("common/data/data-2015/marketplace", [], function() {
    return {CA: {url: "http://www.coveredca.com",stateName: "California",siteName: "Covered California"},CO: {url: "http://www.connectforhealthco.com",stateName: "Colorado",siteName: "Connect for Health Colorado"},CT: {url: "http://www.accesshealthct.com",stateName: "Connecticut",siteName: "Access Health CT"},DC: {url: "http://dchealthlink.com/",stateName: "District Of Columbia",siteName: "DC Health Link"},HI: {url: "http://www.hawaiihealthconnector.com",stateName: "Hawaii",siteName: "Hawaii Health Connector"},ID: {url: "http://www.yourhealthidaho.org",stateName: "Idaho",siteName: "Your Health Idaho"},KY: {url: "http://kynect.ky.gov/",stateName: "Kentucky",siteName: "kynect: Kentucky's Healthcare Connection"},MD: {url: "http://www.marylandhealthconnection.gov/",stateName: "Maryland",siteName: "Maryland Health Connection"},MA: {url: "https://www.mahealthconnector.org",stateName: "Massachusetts",siteName: "Health Connector"},MN: {url: "http://mn.gov/hix/",stateName: "Minnesota",siteName: "MNsure website"},MS: {url: "http://onemississippi.com",stateName: "Mississippi",siteName: "One, Mississippi",shopOnly: !0},NM: {url: "http://www.bewellnm.com/",stateName: "New Mexico",siteName: "BeWellNM",infoOnly: !0},NY: {url: "http://nystateofhealth.ny.gov/",stateName: "New York",siteName: "New York State of Health"},RI: {url: "http://www.healthsourceri.com/",stateName: "Rhode Island",siteName: "HealthSource RI"},UT: {url: "http://www.avenueh.com/",stateName: "Utah",siteName: "Avenue H - Utah",shopOnly: !0},VT: {url: "http://healthconnect.vermont.gov",stateName: "Vermont",siteName: "Vermont Health Connect"},WA: {url: "http://www.wahealthplanfinder.org/",stateName: "Washington",siteName: "Washington Healthplanfinder"}}
}), define("common/data/states", ["underscore", "common/data/state-consts", "common/data/zip-consts", "common/data/data-2014/marketplace", "common/data/data-2015/marketplace"], function(e, t, n, r, i) {
    var s = {2014: r,2015: i};
    return {isUncoveredTerritory: function(e) {
        return !!t.TERRITORIES[e]
    },getStateMarketplaceInfo: function(t, n) {
        if (!s[t])
            throw new Error("Invalid year " + t);
        return n ? s[t][n] ? e.clone(s[t][n]) : null : null
    },getCodeFromSlug: function(e) {
        return t.SLUG_TO_CODE[e]
    },getNameFromCode: function(e) {
        return t.CODE_TO_NAME[e]
    },getChipWaitingPeriod: function(e) {
        return t.CHIP_WAITING_PERIOD[t.CODE_TO_NAME[e]]
    },isZipCodeInState: function(t, r) {
        var i = n.ZIPCODE_RANGES[r];
        return e.any(e.map(i, function(e) {
            return t >= e[0] && t <= e[1]
        }))
    },_rawChipWaitingPeriods: t.CHIP_WAITING_PERIOD}
}), define("common/deprivation", ["underscore", "moment"], function(e, t) {
    var n = {doesRequireDeprivationFields: function(n) {
        if (!n.get("requireFinancialInfo"))
            return !1;
        var i = function(e) {
            return t().diff(t(e, "MM/DD/YYYY"), "years")
        }, s = function(e) {
            return e < 19
        }, o = n.getDependents(), u = e(o).invoke("get", "dob").map(i).value();
        return e.contains(r, n.get("coverageState")) && !e.isNull(n.getSelf()) && !e.isNull(n.getSpouse()) && o.length > 0 && (n.getSelf().get("applyingForInsurance") || n.getSpouse().get("applyingForInsurance")) && e.any(u, s)
    }}, r = ["GA", "MS", "NE", "NH", "ND", "PA", "TX", "UT", "WY"];
    return n
}), define("models/assister", ["underscore", "models/base-model"], function(e, t) {
    var n = {NAVIGATOR: "navigator",CERTIFIED_APPLICATION_COUNSELOR: "certified-application-counselor",IN_PERSON_ASSISTANT_PERSONNEL: "in-person-assistant-personnel",AGENT_OR_BROKER: "agent-or-broker"}, r = t.extend({defaults: {type: null,firstName: null,middleName: null,lastName: null,suffix: null,effectiveDate: null,organizationId: null,organizationName: null,nationalProducerNumber: null},safeAttributes: ["type", "firstName", "middleName", "lastName", "suffix", "organizationId", "organizationName", "nationalProducerNumber"],loggableAttributes: ["type", "effectiveDate", "organizationId", "organizationName", "nationalProducerNumber"],validation: {type: {required: !0,oneOf: e.values(n)},firstName: {required: !0,pattern: "allowedSpecCharName"},middleName: {required: !1,pattern: "allowedSpecCharName"},lastName: {required: !0,pattern: "allowedSpecCharName"},effectiveDate: {required: !1},organizationId: {required: !1},organizationName: {required: !1},nationalProducerNumber: {requireIf: "_requireNationalProducerNumber",pattern: "number"}},getFullName: function() {
        return e.filter([this.get("firstName"), this.get("middleName"), this.get("lastName"), this.get("suffix")], Boolean).join(" ")
    },_requireNationalProducerNumber: function(e) {
        var t = e.type || this.get("type");
        return t === r.TYPES.AGENT_OR_BROKER
    }});
    return r.TYPES = n, r
}), define("models/household-contact", ["models/base-model", "common/data/states", "underscore"], function(e, t, n) {
    var r = e.extend({defaults: {firstName: "",middleName: "",lastName: "",suffix: "",streetName: "",apartment: "",city: "",state: "",zipCode: "",county: "",countyFipsCode: "",isMailingAddress: null,streetNameMailing: "",apartmentMailing: "",cityMailing: "",stateMailing: "",zipCodeMailing: "",countyMailing: "",countyFipsCodeMailing: "",phoneNumber: null,phoneExtension: null,phoneType: null,needInfoByEmail: !1,emailAddress: "",preferredSpokenLanguage: null,preferredWrittenLanguage: null},safeAttributes: ["firstName", "middleName", "lastName", "suffix", "streetName", "apartment", "city", "state", "zipCode", "county", "countyFipsCode", "isMailingAddress", "streetNameMailing", "apartmentMailing", "cityMailing", "stateMailing", "zipCodeMailing", "countyMailing", "countyFipsCodeMailing", "phoneNumber", "phoneExtension", "phoneType", "needInfoByEmail", "emailAddress", "preferredSpokenLanguage", "preferredWrittenLanguage"],loggableAttributes: ["isMailingAddress", "needInfoByEmail", "preferredSpokenLanguage", "preferredWrittenLanguage"],validation: function() {
        var e = function(e) {
            return {required: function(e, t, n) {
                return this.get("isMailingAddress") === !1
            },patternIf: {predicate: "_hasSeparateMailingAddress",pattern: e}}
        };
        return {firstName: {required: !0,pattern: "allowedSpecCharName"},middleName: {optionalAnd: {pattern: "allowedSpecCharName"}},lastName: {required: !0,pattern: "allowedSpecCharName"},preferredSpokenLanguage: {oneOf: r.Language},preferredWrittenLanguage: {oneOf: r.Language},streetName: {required: !0,pattern: "allowedSpecCharAddress"},city: {required: !0,pattern: "allowedSpecCharAddress"},state: {required: !0,pattern: "allowedSpecCharAddress"},zipCode: {required: !0,pattern: "zipCode",fn: "_validateZipCodeInState"},county: {required: !0},countyFipsCode: {required: !0,pattern: "countyFipsCode"},isMailingAddress: {requireBool: !0,msg: n.bind(this.formatCustomError, this, "selectYesNo")},streetNameMailing: e("allowedSpecCharAddress"),cityMailing: e("allowedSpecCharAddress"),stateMailing: e("allowedSpecCharAddress"),zipCodeMailing: e("zipCode"),phoneNumber: {required: !0,pattern: "phoneNumber"},phoneType: {oneOf: ["home", "mobile", "work", null]},needInfoByEmail: {requireBool: !0},emailAddress: {patternIf: {predicate: function(e) {
            return e.needInfoByEmail
        },pattern: "email"}}}
    },_validateZipCodeInState: function(e, n, r) {
        var i = r.state || this.attributes.state;
        if (!i || !e)
            return;
        if (e.indexOf && e.indexOf("-") !== -1) {
            var s = e.split("-");
            e = s[0]
        }
        if (!t.isZipCodeInState(parseInt(e, 10), i))
            return this.formatCustomError("zipcodeStateInvalid") + t.getNameFromCode(i) + "."
    },_hasSeparateMailingAddress: function(e) {
        return "isMailingAddress" in e ? !e.isMailingAddress : !this.get("isMailingAddress")
    },clearHomeAddress: function() {
        var e = this;
        n.each(["streetName", "apartment", "city", "state", "zipCode", "county", "countyFipsCode"], function(t) {
            e.set(t, e.defaults[t])
        })
    },getFullName: function() {
        return n.filter([this.get("firstName"), this.get("middleName"), this.get("lastName"), this.get("suffix")], Boolean).join(" ")
    },getFormattedStreet: function() {
        return n.filter([this.get("streetName"), this.get("apartment")], Boolean).join(" ")
    },getFormattedCityState: function() {
        return this.get("city") + ", " + this.get("state") + " " + this.get("zipCode")
    },getFormattedPhone: function() {
        var e = this.get("phoneNumber");
        return this.get("phoneExtension") && (e += " ext." + this.get("phoneExtension")), e
    },getLocalizedPreferredWrittenLanguage: function(e) {
        return this.get("preferredWrittenLanguage") === "Spanish" ? e.spanish : e.languages[this.get("preferredWrittenLanguage")]
    },getLocalizedPreferredSpokenLanguage: function(e) {
        return this.get("preferredSpokenLanguage") === "Spanish" ? e.spanish : e.languages[this.get("preferredSpokenLanguage")]
    }});
    return r.Language = ["English", "Spanish", "Vietnamese", "Tagalog", "Russian", "Portuguese", "Arabic", "Chinese", "French", "French Creole", "German", "Gujarati", "Hindi", "Korean", "Polish", "Urdu", "Other"], r
}), define("models/base-collection", ["backbone"], function(e) {
    var t = e.Collection.extend({safeSet: function(e, t) {
        var n = _.compact(_.pluck(e, "id")), r = this.filter(function(e) {
            return !_.contains(n, e.get("id"))
        });
        this.remove(r), _.each(e, function(e) {
            if (!e)
                return;
            var n;
            if (!e.id)
                n = new this.model, this.push(n);
            else {
                n = this.get(e.id);
                if (!n) {
                    console.warn("No matching id for attributes. " + JSON.stringify({method: "BaseCollection.safeSet",modelId: e.id}));
                    return
                }
            }
            n.safeSet(e, t)
        }, this)
    }});
    return t.safeSetArray = function(e, t, n, r) {
        var i = _.compact(_.pluck(n, "id")), s = _.filter(t, function(e) {
            return !_.contains(i, e.get("id"))
        });
        return _.each(s, function(e) {
            t.splice(_.indexOf(t, e), 1)
        }), _.each(n, function(n) {
            if (!n)
                return;
            var i;
            if (!n.id)
                i = new e, t.push(i);
            else {
                i = _.find(t, {id: n.id});
                if (!i) {
                    console.warn("No matching id for attributes. " + JSON.stringify({method: "BaseCollection.safeSetArray",modelId: n.id}));
                    return
                }
            }
            i.safeSet(n, r), r && _.isFunction(r.afterSet) && r.afterSet(i, n, r)
        }), s.length > 0 && r && _.isFunction(r.onRemoveModels) && r.onRemoveModels(s), t
    }, t
}), define("models/income-source", ["models/base-model"], function(e) {
    var t = {JOB: {description: !0,employerPhoneNumber: !0,instructionsText: !0,helpText: !1,nonNegative: !0,frequencies: ["PER_HOUR", "PER_DAY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR", "ONE_TIME_ONLY"],employerStreetAddress: !0,employerSuiteNumber: !1,employerCity: !1,employerState: !1,employerZipCode: !1,employerEin: !0},SELF_EMPLOYED: {description: !0,instructionsText: !0,helpText: !0,nonNegative: !1,frequencies: ["PER_MONTH"]},UNEMPLOYMENT: {description: !0,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},PENSION: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},SOCIAL_SECURITY: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_MONTH", "PER_YEAR"]},CAPITAL_GAINS: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !1,frequencies: ["PER_YEAR"]},INVESTMENT: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_MONTH", "PER_QUARTER", "PER_YEAR"]},RETIREMENT_ACCOUNTS: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},ALIMONY: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},FARMING_OR_FISHING: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !1,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},RENTAL_OR_ROYALTY: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !1,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},CASH_SUPPORT: {description: !1,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},SCHOLARSHIP: {description: !1,instructionsText: !0,helpText: !1,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]},OTHER: {description: !1,instructionsText: !0,helpText: !0,nonNegative: !0,frequencies: ["ONE_TIME_ONLY", "PER_WEEK", "EVERY_TWO_WEEKS", "TWICE_A_MONTH", "PER_MONTH", "PER_YEAR"]}}, n = {ONE_TIME_ONLY: "ONE_TIME_ONLY",PER_HOUR: "PER_HOUR",PER_DAY: "PER_DAY",PER_WEEK: "PER_WEEK",EVERY_TWO_WEEKS: "EVERY_TWO_WEEKS",TWICE_A_MONTH: "TWICE_A_MONTH",PER_MONTH: "PER_MONTH",PER_QUARTER: "PER_QUARTER",PER_YEAR: "PER_YEAR"}, r = e.extend({defaults: {type: null,amount: null,frequency: null,frequencyMultiplier: null,description: null,employerPhoneNumber: null,employerStreetAddress: null,employerSuiteNumber: null,employerCity: null,employerState: null,employerZipCode: null,employerEin: null},safeAttributes: ["type", "amount", "frequency", "frequencyMultiplier", "description", "employerPhoneNumber", "employerStreetAddress", "employerSuiteNumber", "employerCity", "employerState", "employerZipCode", "employerEin"],loggableAttributes: ["type", "amount", "frequency", "frequencyMultiplier"],validation: {type: {required: !0,oneOf: _.keys(t)},amount: {required: !0,pattern: "number",fn: "_validateAmount"},frequency: {required: !0,oneOf: _.keys(n),fn: "_validateFrequency"},frequencyMultiplier: {fn: "_validateFrequencyMultiplier"},description: {fn: "_validateDescription"},employerPhoneNumber: {requireIf: "_isJobType",pattern: "phoneNumber"},employerStreetAddress: {required: !1,pattern: "allowedSpecCharAddress"},employerSuiteNumber: {required: !1,pattern: "allowedSpecCharAddress"},employerCity: {required: !1,pattern: "allowedSpecCharAddress"},employerState: {required: !1,pattern: "allowedSpecCharAddress"},employerZipCode: {required: !1,pattern: "zipCode"},employerEin: {required: !1,pattern: "ein"}},_isJobType: function(e) {
        var t = e.type || this.get("type");
        return t === "JOB"
    },_validateDescription: function(e, t, n) {
        var r = n.type || this.get("type");
        if (r === "JOB" && _.isEmpty(n.description))
            return this.formatCustomError("employerNameRequired");
        if (r === "SELF_EMPLOYED" && _.isEmpty(n.description))
            return this.formatCustomError("requiredField");
        return
    },_validateFrequencyMultiplier: function(e, t, n) {
        if ([r.FREQUENCY.PER_HOUR, r.FREQUENCY.PER_DAY].indexOf(n.frequency) < 0)
            return;
        if (!e)
            return this.formatCustomError("requiredField");
        if (!/\d/.test(e))
            return this.formatCustomError("numbersOnly");
        if (e < 0)
            return this.formatCustomError("positiveNumbersOnly");
        if (Number(e) !== parseInt(e, 10))
            return this.formatCustomError("integersOnly");
        if (n && n.frequency)
            if (n.frequency === r.FREQUENCY.PER_HOUR) {
                if (e > 168)
                    return this.formatCustomError("maxHoursPerWeek")
            } else if (n.frequency === r.FREQUENCY.PER_DAY && e > 7)
                return this.formatCustomError("maxHoursPerDay")
    },_validateAmount: function(e, t, n) {
        if (n && n.type) {
            var i = r.TYPE[n.type] || {};
            if (i.nonNegative === !0 && e < 0)
                return this.formatCustomError("positiveNumbersOnly")
        }
    },_validateFrequency: function(e, t, n) {
        if (n && n.type) {
            var i = r.TYPE[n.type];
            if (!i || i.frequencies.indexOf(e) < 0)
                return this.formatCustomError("frequencyNotAvailable")
        }
    },getMonthlyAmount: function() {
        switch (this.get("frequency")) {
            case r.FREQUENCY.ONE_TIME_ONLY:
                return 1 * this.get("amount");
            case r.FREQUENCY.PER_HOUR:
                return 4.33 * this.get("frequencyMultiplier") * this.get("amount");
            case r.FREQUENCY.PER_DAY:
                return 4.33 * this.get("frequencyMultiplier") * this.get("amount");
            case r.FREQUENCY.PER_WEEK:
                return 4.33 * this.get("amount");
            case r.FREQUENCY.EVERY_TWO_WEEKS:
                return 2.165 * this.get("amount");
            case r.FREQUENCY.TWICE_A_MONTH:
                return 2 * this.get("amount");
            case r.FREQUENCY.PER_MONTH:
                return this.get("amount");
            case r.FREQUENCY.PER_QUARTER:
                return this.get("amount") / 3;
            case r.FREQUENCY.PER_YEAR:
                return this.get("amount") / 12;
            case null:
                return 0;
            default:
                throw new Error("Unrecognized frequency: " + this.get("frequency"))
        }
    },getAnnualAmount: function() {
        switch (this.get("frequency")) {
            case r.FREQUENCY.ONE_TIME_ONLY:
                return 1 * this.get("amount");
            case r.FREQUENCY.PER_HOUR:
                return 51.96 * this.get("frequencyMultiplier") * this.get("amount");
            case r.FREQUENCY.PER_DAY:
                return 51.96 * this.get("frequencyMultiplier") * this.get("amount");
            case r.FREQUENCY.PER_WEEK:
                return 51.96 * this.get("amount");
            case r.FREQUENCY.EVERY_TWO_WEEKS:
                return 25.98 * this.get("amount");
            case r.FREQUENCY.TWICE_A_MONTH:
                return 24 * this.get("amount");
            case r.FREQUENCY.PER_MONTH:
                return 12 * this.get("amount");
            case r.FREQUENCY.PER_QUARTER:
                return 4 * this.get("amount");
            case r.FREQUENCY.PER_YEAR:
                return 1 * this.get("amount");
            case null:
                return 0;
            default:
                throw new Error("Unrecognized frequency: " + this.get("frequency"))
        }
    }});
    return r.TYPE = t, r.TYPES = _.keys(t), r.FREQUENCY = n, r.FREQUENCIES = _.keys(n), r.getContent = function() {
        return _.extend({}, Strings.getGroup("common"), Strings.getGroup("income-source-model"))
    }, r
}), define("models/income-sources", ["models/base-collection", "models/income-source"], function(e, t) {
    var n = e.extend({model: t,getMonthlyAmount: function() {
        return this.reduce(function(e, t) {
            return e + t.getMonthlyAmount()
        }, 0)
    },getTotalAmount: function() {
        return this.reduce(function(e, t) {
            return e + t.getAnnualAmount()
        }, 0)
    }});
    return n
}), define("models/deduction", ["models/base-model"], function(e) {
    var t = ["ALIMONY", "STUDENT_LOAN", "OTHER"], n = ["WEEKLY", "BIWEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], r = e.extend({defaults: {type: null,otherType: null,amount: null,frequency: null},safeAttributes: ["type", "otherType", "amount", "frequency"],loggableAttributes: ["type", "otherType", "amount", "frequency"],validation: {type: {required: !0,oneOf: t},otherType: {requireIf: "_requireOtherType"},amount: {required: !0,pattern: "number"},frequency: {required: !0,oneOf: n}},isOtherType: function() {
        return this.get("type") === r.TYPE.OTHER
    },_requireOtherType: function(e) {
        return e.type || this.get("type") === r.TYPE.OTHER
    },getMonthlyAmount: function() {
        switch (this.get("frequency")) {
            case r.FREQUENCY.WEEKLY:
                return 4.33 * this.get("amount");
            case r.FREQUENCY.BIWEEKLY:
                return 2.165 * this.get("amount");
            case r.FREQUENCY.MONTHLY:
                return this.get("amount");
            case r.FREQUENCY.QUARTERLY:
                return this.get("amount") / 3;
            case r.FREQUENCY.YEARLY:
                return this.get("amount") / 12;
            case null:
                return 0;
            default:
                throw new Error("Unrecognized frequency: " + this.get("frequency"))
        }
    },getAnnualAmount: function() {
        switch (this.get("frequency")) {
            case r.FREQUENCY.WEEKLY:
                return 51.96 * this.get("amount");
            case r.FREQUENCY.BIWEEKLY:
                return 25.98 * this.get("amount");
            case r.FREQUENCY.MONTHLY:
                return 12 * this.get("amount");
            case r.FREQUENCY.QUARTERLY:
                return 4 * this.get("amount");
            case r.FREQUENCY.YEARLY:
                return 1 * this.get("amount");
            case null:
                return 0;
            default:
                throw new Error("Unrecognized frequency: " + this.get("frequency"))
        }
    }});
    return r.TYPE = _.object(t, t), r.TYPES = t, r.FREQUENCY = _.object(n, n), r.FREQUENCIES = n, r
}), define("models/deductions", ["models/base-collection", "models/deduction"], function(e, t) {
    var n = e.extend({model: t,getMonthlyAmount: function() {
        return this.reduce(function(e, t) {
            return e + t.getMonthlyAmount()
        }, 0)
    },getTotalAmount: function() {
        return this.reduce(function(e, t) {
            return e + t.getAnnualAmount()
        }, 0)
    }});
    return n
}), define("models/person", ["models/base-model", "models/income-sources", "models/deductions", "moment"], function(e, t, n, r) {
    var i = e.extend({defaults: {firstName: "",middleName: "",lastName: "",suffix: "",dob: null,ssn: "",sex: "",relationship: "",hasAdditionalIncome: !1,incomeSources: null,numHoursWorkedPerWeek: null,deductions: null,expectedAnnualIncome: null,hispanic: null,races: null,otherRace: null,ethnicities: null,otherEthnicity: null,applyingForInsurance: null,hasDisability: null,needsPhysicalAssistance: null,wantRecentBillAssistance: null,currentCoverage: null,otherCoverageName: null,otherCoveragePolicyNumber: null,isOtherCoverageLimited: null,lostMedicaidCoverage: null,notMedicaidCHIPEligible: null,appliedAtStateDuringOEP: !1,lostCoverage: null,lostCoverageDate: null,gotMarried: null,gotMarriedDate: null,released: null,releasedDate: null,gainedImmigrationStatus: null,gainedImmigrationStatusDate: null,adopted: null,adoptedDate: null,willLoseCoverage: null,willLoseCoverageDate: null,moved: null,movedDate: null,previousZipCode: null,incomeUnknown: !1},safeAttributes: ["firstName", "middleName", "lastName", "suffix", "dob", "ssn", "sex", "relationship", "hasAdditionalIncome", "numHoursWorkedPerWeek", "expectedAnnualIncome", "taxFilingStatus", "hispanic", "races", "otherRace", "ethnicities", "otherEthnicity", "applyingForInsurance", "hasDisability", "needsPhysicalAssistance", "wantRecentBillAssistance", "currentCoverage", "otherCoverageName", "otherCoveragePolicyNumber", "isOtherCoverageLimited", "lostMedicaidCoverage", "notMedicaidCHIPEligible", "appliedAtStateDuringOEP", "lostCoverage", "lostCoverageDate", "gotMarried", "gotMarriedDate", "released", "releasedDate", "gainedImmigrationStatus", "gainedImmigrationStatusDate", "adopted", "adoptedDate", "willLoseCoverage", "willLoseCoverageDate", "moved", "movedDate", "previousZipCode", "incomeUnknown"],loggableAttributes: ["relationship", "hasAdditionalIncome", "incomeSources", "numHoursWorkedPerWeek", "deductions", "expectedAnnualIncome", "hispanic", "races", "otherRace", "ethnicities", "otherEthnicity", "applyingForInsurance", "hasDisability", "needsPhysicalAssistance", "wantRecentBillAssistance", "currentCoverage", "otherCoverageName", "isOtherCoverageLimited", "lostMedicaidCoverage", "notMedicaidCHIPEligible", "appliedAtStateDuringOEP", "lostCoverage", "lostCoverageDate", "gotMarried", "gotMarriedDate", "released", "releasedDate", "gainedImmigrationStatus", "gainedImmigrationStatusDate", "adopted", "adoptedDate", "willLoseCoverage", "willLoseCoverageDate", "moved", "movedDate", "incomeUnknown"],validation: function() {
        var e = function(e, t, n) {
            return _.has(t, e) ? t[e] : n.get(e)
        };
        return {applyingForInsurance: [{required: !0,msg: _.bind(this.formatCustomError, this, "selectYesNo")}, {requireBool: !0}],firstName: {required: !0,pattern: "allowedSpecCharName"},middleName: {required: !1,pattern: "allowedSpecCharName"},lastName: {required: !0,pattern: "allowedSpecCharName"},dob: [{required: !0,msg: _.bind(this.formatCustomError, this, "dobRequired")}, {requirePastDate: !0}, {fn: "_validateDob"}],ssn: {requireIf: "_requireSsn",validSsn: "strict"},sex: {required: !0,oneOf: ["Male", "Female"],msg: _.bind(this.formatCustomError, this, "selectMaleOrFemale")},relationship: {oneOf: ["self", "spouse", "child"]},incomeSources: {required: !0},numHoursWorkedPerWeek: {requireIf: "_requireNumHoursWorkedPerWeek",fn: "_validateNumHoursWorkedPerWeek"},races: {fn: "_validateRaces"},ethnicities: {fn: "_validateEthnicities"},expectedAnnualIncome: [{pattern: "number"}, {requireIf: "_requireFinancialInfo",range: [-999999999999.99, 999999999999.99],msg: _.bind(this.formatCustomError, this, "numberTooLarge")}],currentCoverage: {fn: "_validateCoverage"},otherCoveragePolicyNumber: [{required: !1}, {maxLength: 255,msg: _.bind(this.formatCustomError, this, "personOtherCoveragePolicyNumberTooLong")}],incomeUnknown: {requireBool: !0},lostCoverageDate: {requireIf: function(t) {
            return e("lostCoverage", t, this)
        },requireDateInLast60Days: !0},gotMarriedDate: {requireIf: function(t) {
            return e("gotMarried", t, this)
        },requireDateInLast60Days: !0},releasedDate: {requireIf: function(t) {
            return e("released", t, this)
        },requireDateInLast60Days: !0},gainedImmigrationStatusDate: {requireIf: function(t) {
            return e("gainedImmigrationStatus", t, this)
        },requireDateInLast60Days: !0},adoptedDate: {requireIf: function(t) {
            return e("adopted", t, this)
        },requireDateInLast60Days: !0},willLoseCoverageDate: {requireIf: function(t) {
            return e("willLoseCoverage", t, this)
        },requireDateInNext60Days: !0},movedDate: {requireIf: function(t) {
            return e("moved", t, this)
        },requireDateInLast60Days: !0},previousZipCode: {requireIf: function(t) {
            return e("moved", t, this)
        },pattern: "zipCode"}}
    },initialize: function(e, r) {
        this.get("incomeSources") || this.set("incomeSources", new t), this.get("races") || this.set("races", []), this.get("ethnicities") || this.set("ethnicities", []), this.get("deductions") || this.set("deductions", new n), this.options = _.defaults(r || {}, {requireFinancialInfo: null})
    },getFullName: function() {
        return _.filter([this.get("firstName"), this.get("middleName"), this.get("lastName"), this.get("suffix")], Boolean).join(" ")
    },isDependent: function() {
        return this.get("relationship") !== "self" && this.get("relationship") !== "spouse"
    },isParent: function() {
        return this.get("relationship") === "self" || this.get("relationship") === "spouse"
    },getDobAsDate: function() {
        if (!this.get("dob"))
            return null;
        var e = this.get("dob").split("/");
        return new Date(Number(e[2]), Number(e[0]) - 1, Number(e[1]))
    },getAge: function(e) {
        var t = this.getDobAsDate();
        if (!t)
            return null;
        var n = function(e) {
            var t = new Date(e.getFullYear(), 0, 1);
            return Math.floor((e - t) / 864e5)
        }, r = e || new Date, i = r.getFullYear() - t.getFullYear();
        return n(r) < n(t) && (i -= 1), i
    },getMonthlyIncome: function() {
        return this.get("incomeSources").getMonthlyAmount() - this.get("deductions").getMonthlyAmount()
    },getMAGI: function() {
        return this.get("incomeSources").getTotalAmount() - this.get("deductions").getTotalAmount()
    },expectedAnnualIncomeMinusDeductionsMatchesMAGI: function() {
        return Math.abs(this.get("expectedAnnualIncome") - this.getMAGI()) < .01
    },getMaskedSsn: function() {
        return "XXX-XX-" + this.get("ssn").substring(7)
    },getLocalizedRelationship: function(e) {
        switch (this.get("relationship")) {
            case "self":
                return e.selfString;
            case "spouse":
                return e.spouse;
            case "child":
                return e.child
        }
    },getLocalizedSex: function(e) {
        return this.get("sex") === "Female" ? e.female : e.male
    },hasCurrentCoverage: function() {
        return this.get("currentCoverage") && this.get("currentCoverage").length > 0
    },clearCurrentCoverage: function() {
        this.set({otherCoverageName: null,otherCoveragePolicyNumber: null,isOtherCoverageLimited: null,currentCoverage: []})
    },_requireSsn: function(e) {
        return _.isUndefined(e.applyingForInsurance) ? this.get("applyingForInsurance") : e.applyingForInsurance
    },_requireFinancialInfo: function() {
        return _.isFunction(this.options.requireFinancialInfo) ? this.options.requireFinancialInfo() : !1
    },_requireNumHoursWorkedPerWeek: function() {
        return _.isFunction(this.options.requireNumHoursWorkedPerWeek) ? this.options.requireNumHoursWorkedPerWeek() && (this.get("relationship") === "self" || this.get("relationship") === "spouse") : !1
    },_applyingForInsurance: function() {
        return this.get("applyingForInsurance")
    },_validateEthnicities: function(e) {
        if (!e)
            return;
        if (!_.isArray(e))
            return "Ethnicities must be an array.";
        var t = _.find(e, function(e) {
            if (!_.contains(i.ETHNICITIES, e))
                return "Invalid ethnicity " + e
        });
        if (t)
            return t
    },_validateRaces: function(e) {
        if (!e)
            return;
        if (!_.isArray(e))
            return "Races must be an array.";
        var t = _.find(e, function(e) {
            if (!_.contains(i.RACES, e))
                return "Invalid race " + e
        });
        if (t)
            return t
    },_validateNumHoursWorkedPerWeek: function(e) {
        e = parseInt(e, 10);
        if (_.isNaN(e))
            return this.formatCustomError("numbersOnly");
        if (e < 0)
            return this.formatCustomError("positiveNumbersOnly");
        if (e > 168)
            return this.formatCustomError("maxHoursPerWeek");
        return
    },_validateCoverage: function(e) {
        if (e) {
            if (!_.isArray(e))
                return "Coverage type must be an array.";
            var t = _.find(e, function(e) {
                if (!_.has(i.CoverageTypes, e))
                    return "Invalid coverage " + e
            });
            if (t)
                return t
        }
        return
    },_validateDob: function(e, t, n) {
        if (e) {
            var i = r().diff(r(e, "MM/DD/YYYY"), "years"), s = n.relationship || this.get("relationship"), o = 150;
            if (i > o)
                return this.formatCustomError("requireDate");
            if (s === "self" && i < 18)
                return this.formatCustomError("householdContactNotOldEnough")
        }
    },parse: function(e, r) {
        var i = _.clone(e);
        return i.incomeSources && (i.incomeSources = new t(i.incomeSources, {parse: !0})), i.deductions && (i.deductions = new n(i.deductions, {parse: !0})), i
    }});
    return i.RACE = {AMERICAN_INDIAN_OR_ALASKAN_NATIVE: "American Indian or Alaska Native",ASIAN_INDIAN: "Asian Indian",BLACK_OR_AFRICAN_AMERICAN: "Black or African American",CHINESE: "Chinese",FILIPINO: "Filipino",GUAMANIAN_OR_CHAMORRO: "Guamanian or Chamorro",JAPANESE: "Japanese",KOREAN: "Korean",NATIVE_HAWAIIAN: "Native Hawaiian",OTHER_ASIAN: "Other Asian",OTHER_PACIFIC_ISLANDER: "Other Pacific Islander",SAMOAN: "Samoan",VIETNAMESE: "Vietnamese",WHITE: "White",OTHER: "Other"}, i.RACES = _.values(i.RACE), i.SPECIFIC_RACE = _.omit(i.RACE, "OTHER"), i.SPECIFIC_RACES = _.values(i.SPECIFIC_RACE), i.ETHNICITY = {CUBAN: "Cuban",CHICANO: "Mexican, Mexican American, or Chicano/a",PUERTO_RICAN: "Puerto Rican",OTHER: "Other"}, i.ETHNICITIES = _.values(i.ETHNICITY), i.SPECIFIC_ETHNICITY = _.omit(i.ETHNICITY, "OTHER"), i.SPECIFIC_ETHNICITIES = _.values(i.SPECIFIC_ETHNICITY), i.CoverageTypes = {MEDICAID: "Medicaid",CHIP: "The Children's Health Insurance Program (CHIP)",MEDICARE: "Medicare",TRICARE: "TRICARE (Don't check if this person has Direct Care or Line of Duty)",VA: "VA health care program",PEACE: "Peace Corps",OTHER: "Other",NONE: "None"}, i
}), define("models/ridp-model", ["underscore", "common/constants", "common/data/states", "models/base-model", "moment"], function(e, t, n, r, i) {
    var s = r.extend({url: t.APP_ROOT + "data/ridp/",defaults: {systemUserLoginName: "",firstName: "",middleName: "",lastName: "",suffix: "",sex: "",streetName: "",apartment: "",city: "",state: "",zipCode: "",county: "",countyFipsCode: "",phoneNumber: null,phoneExtension: null,phoneType: null,dob: "",ssn: "",emailAddress: "",ridpQuestions: null,ridpAnswers: null,sessionInfo: null},loggableAttributes: ["sessionInfo"],validation: function() {
        return {systemUserLoginName: {required: !0},firstName: {pattern: "allowedFirstMiddleName",maxLength: 20},middleName: {required: !1,pattern: "allowedFirstMiddleName",maxLength: 20},lastName: {pattern: "allowedSpecCharName",minLength: 2,maxLength: 25},streetName: {pattern: "allowedSpecCharAddress",maxLength: 60},apartment: {required: !1,pattern: /^\s*[0-9\A-Za-z\-.\s]+\s*$/,msg: e.bind(this.formatCustomError, this, "apartmentInvalidChars"),maxLength: 60},city: {pattern: /^\s*[A-Za-z\-'\s]+\s*$/,msg: e.bind(this.formatCustomError, this, "cityInvalidChars"),maxLength: 20},state: {pattern: /^[A-Za-z]+$/,maxLength: 2},zipCode: {pattern: "zipCode",fn: "_validateZipCodeInState"},phoneNumber: {pattern: "phoneNumber"},dob: [{requirePastDate: !0}, {fn: "_validateDob"}],ssn: {validSsn: "strict",required: !1},sex: {required: !1},emailAddress: {pattern: "email"}}
    },_validateZipCodeInState: function(e, t, r) {
        var i = r.state || this.attributes.state;
        if (!i || !e)
            return;
        if (e.indexOf && e.indexOf("-") !== -1) {
            var s = e.split("-");
            e = s[0]
        }
        if (!n.isZipCodeInState(parseInt(e, 10), i))
            return this.formatCustomError("zipcodeStateInvalid") + n.getNameFromCode(i) + "."
    },_validateDob: function(e) {
        if (e) {
            var t = i(e, "MM/DD/YYYY");
            if (t.year() < 1900)
                return this.formatCustomError("requireDate");
            var n = i().diff(t, "years");
            if (n < 18)
                return this.formatCustomError("householdContactNotOldEnough")
        }
    },getYmdDob: function() {
        var e = this.get("dob").split("/");
        return [e[2], e[0], e[1]].join("-")
    },toEidmJSON: function(e) {
        var t = this.get("zipCode"), n = "";
        if (t.indexOf("-") !== -1) {
            var r = t.split("-");
            t = r[0], n = r[1]
        }
        return {firstName: this.get("firstName"),middleName: this.get("middleName"),lastName: this.get("lastName"),suffix: this.get("suffix"),email: this.get("emailAddress"),userName: this.get("systemUserLoginName"),dateOfBirth: this.getYmdDob(),addressLine1: this.get("streetName"),addressLine2: this.get("apartment"),city: this.get("city"),state: this.get("state"),zipCode: t,zipcodeExtension: n,phoneNumber: this.get("phoneNumber").replace(/-/g, ""),phoneNumberExt: this.get("phoneExtension"),ssn: this.get("ssn").replace(/-/g, ""),language: e || "en",userRole: "FFM_Consumer",applicationID: "FFM_Webservice"}
    },toFfmJSON: function(e) {
        e === undefined && (e = !0);
        var t = this.get("sessionInfo");
        return {applicantPersonInfo: {applFirstName: this.get("firstName"),applMiddleName: this.get("middleName"),applLastName: this.get("lastName"),applSuffix: this.get("suffix"),applBirthDate: this.getYmdDob(),applSsnNumber: this.get("ssn").replace(/-/g, ""),applStreetName1: this.get("streetName"),applStreetName2: this.get("apartment"),applCityName: this.get("city"),applStateCode: this.get("state"),applZipPlus4Code: this.get("zipCode"),applEmailAddress: this.get("emailAddress"),applFullNumberCode: this.get("phoneNumber").replace(/-/g, ""),applPersonIdentifier: t.personIdentifier},forwardingPhysicalDocument: [{physicalDocumentRepositoryURI: ""}],personIDProofingEventTask: [{taskId: "",verificationEventStatusReasonType: ""}],personIdentifier: t.personIdentifier,personIdentityProofingEventSourceTypeCode: "2",proofingEsdEngagedIndicator: "false",proofingEventBarcodeIdentifier: "",proofingEventDate: (new Date).toISOString(),proofingEventRidpSessionIdentifier: t.referenceID,proofingEventSuccessIndicator: e ? "true" : "false",systemUserIdentifier: t.systemUserIdentifier,systemUserLoginName: this.get("systemUserLoginName")}
    }});
    return s.fromAccount = function(e, t) {
        return new s({systemUserLoginName: e.get("email"),firstName: e.get("firstName"),lastName: e.get("lastName"),emailAddress: e.get("email"),state: t.state})
    }, s
}), define("models/app-model", ["common/constants", "common/data/fpl", "common/data/states", "common/deprivation", "models/assister", "models/base-model", "models/household-contact", "models/person", "models/ridp-model"], function(e, t, n, r, i, s, o, u, a) {
    var f = s.extend({defaults: {coverageState: null,coverageYear: null,specialCasesStatus: "INCOMPLETE",householdContact: null,isMarried: null,numDependents: null,isUnderFACutoff: null,people: null,assister: null,requireFinancialInfo: !1,parentOutsideHousehold: null,agreedToRenewEligibility: null,numYearsForEligibilityRenewal: null,medicaidRightsAttestation: null,absentParentAttestation: null,informMarketplaceAttestation: null,perjuryAttestation: null,submissionStatus: null,complete: !1,submittedAt: null,deletedAt: null,accountId: null,ffmId: null},safeAttributes: ["coverageState", "isMarried", "numDependents", "isUnderFACutoff", "requireFinancialInfo", "parentOutsideHousehold", "agreedToRenewEligibility", "numYearsForEligibilityRenewal", "specialCasesStatus", "complete", "medicaidRightsAttestation", "absentParentAttestation", "informMarketplaceAttestation", "perjuryAttestation"],loggableAttributes: ["coverageState", "coverageYear", "specialCasesStatus", "householdContact", "isMarried", "numDependents", "isUnderFACutoff", "people", "assister", "requireFinancialInfo", "parentOutsideHousehold", "agreedToRenewEligibility", "numYearsForEligibilityRenewal", "medicaidRightsAttestation", "absentParentAttestation", "informMarketplaceAttestation", "perjuryAttestation", "submissionStatus", "complete", "submittedAt", "deletedAt", "accountId", "ffmId"],validation: function() {
        return {coverageState: {required: !0},coverageYear: {oneOf: f.VALID_COVERAGE_YEARS},householdContact: {required: !0,fn: "_validateHouseholdContact"},numDependents: {required: !0},isMarried: {requireBool: !0},people: {required: !0,fn: "_validatePeople"},requireFinancialInfo: {requireBool: !0},parentOutsideHousehold: {requireIf: "_validateParentOutsideHousehold",requireBool: !0},agreedToRenewEligibility: {requireIf: function(e) {
            return !!this.get("requireFinancialInfo")
        },requireBool: !0,msg: _.bind(this.formatCustomError, this, "requiredQuestion")},numYearsForEligibilityRenewal: {requireIf: function(e) {
            return e.agreedToRenewEligibility === !1 || this.get("agreedToRenewEligibility") === !1
        },min: 0,max: 5}}
    },initialize: function(e) {
        this._initializePeople(), this.get("householdContact") || this.set("householdContact", new o({}))
    },hasDependents: function() {
        return this.getDependents().length > 0
    },requireNumHoursWorkedPerWeek: function() {
        return r.doesRequireDeprivationFields(this)
    },validate: function(e, t) {
        t = t || {};
        if (!this.get("complete") && !_.isArray(t.validate))
            return this._validatePeopleCollectionConstraints();
        var n = _.compact([s.prototype.validate.apply(this, arguments), this._validatePeopleCollectionConstraints()]);
        if (n.length > 0)
            return _.reduce(n, function(e, t) {
                return _.merge(e, t)
            })
    },_validatePeopleCollectionConstraints: function() {
        var e = _.merge(_.times(this.get("people").length, function() {
            return undefined
        }), this._validateUniqueSsns(), this._validateSomeoneApplyingForInsurance());
        _.each(this.get("people"), function(e) {
            var t = ["ssn", "applyingForInsurance"];
            _.isObject(e.validationError) && (t = _.difference(t, _.keys(e.validationError))), e.trigger("valid", e, t)
        });
        if (_.any(e))
            return _.each(this.get("people"), function(t, n) {
                var r = e[n];
                r && t.trigger("invalid", t, r)
            }), {people: e}
    },_initializePeople: function() {
        var e = this.get("people") || [];
        if (e.length < 1) {
            var t = this._newPerson({relationship: "self"});
            e.push(t)
        }
        if (this.get("isMarried")) {
            if (e.length < 2 || e[1].get("relationship") !== "spouse") {
                var n = this._newPerson({relationship: "spouse"});
                e.splice(1, 0, n)
            }
        } else
            e.length >= 2 && e[1].get("relationship") === "spouse" && e.splice(1, 1);
        this.get("numDependents") > this.getDependents().length ? _.each(_.range(this.get("numDependents") - this.getDependents().length), function() {
            e.push(this._newPerson({relationship: "child"}))
        }, this) : this.get("numDependents") < this.getDependents().length && _.each(_.range(this.getDependents().length - this.get("numDependents")), function() {
            e.pop()
        }, this), e.length === 1 && (e[0].set("applyingForInsurance", !0), this.get("isMarried") || this.get("numDependents") !== 0), this.set("people", e)
    },addDependent: function() {
        this.get("people").push(this._newPerson({relationship: "child"}))
    },removeDependent: function() {
        if (this.getDependents().length <= 0)
            return !1;
        for (var e = this.get("people").length - 1; e > 0; e--)
            if (this.get("people")[e].get("relationship") === "child")
                break;
        if (e !== -1) {
            var t = this.get("people").splice(e, 1);
            return t[0]
        }
        return !1
    },addSpouse: function() {
        var e = _.find(this.get("people"), function(e) {
            return e.get("relationship") === "spouse"
        });
        e || (e = this._newPerson({relationship: "spouse"}), this.get("people").splice(1, 0, e))
    },removeSpouse: function() {
        var e = _.findIndex(this.get("people"), function(e) {
            return e.get("relationship") === "spouse"
        });
        e !== -1 && this.get("people").splice(e, 1)
    },_newPerson: function(e, t) {
        var n = _.bind(this.get, this, "requireFinancialInfo"), r = _.bind(this.requireNumHoursWorkedPerWeek, this);
        return new u(e, _.extend({}, t, {requireFinancialInfo: n,requireNumHoursWorkedPerWeek: r}))
    },_validateHouseholdContact: function(e, t, n) {
        if (!e.isValid())
            return e.validationError
    },_validatePeople: function(e, t, n) {
        if (e.length === 0)
            return "Must have at least one person";
        if (e[0].get("relationship") !== "self")
            return "First person must be self";
        var r = e.slice(1);
        if (n.isMarried) {
            if (r.length < 1)
                return "If married must have at least two people";
            if (r[0].get("relationship") !== "spouse")
                return "Second person must be spouse";
            r = r.slice(1)
        }
        if (r.length !== n.numDependents)
            return "Number of people other than self and spouse must match number of dependents";
        _.each(r, function(e) {
            if (e.get("relationship") === "self" || e.get("relationship") === "spouse")
                return "Remaining people must not be self or spouse"
        });
        var i = _.map(this.getPeopleToValidate(), function(e) {
            if (!e.isValid())
                return e.validationError
        }), s = !!_.find(i, function(e) {
            return !!e
        });
        return s ? i : this._validateChipWaitingPeriod(e, t, n)
    },_validateChipWaitingPeriod: function(e, t, r) {
        _.map(e, function(e) {
            if (e.get("applyingForInsurance") && e.getAge() < 19 && n.getChipWaitingPeriod(r.coverageState) > 0)
                return "Applicants 18 or younger who live in " + r.coverageState + 'must answer the question "has this person lost Medicaid/CHIP ' + 'coverage since Oct 1"'
        })
    },_validateParentOutsideHousehold: function(e) {
        var t = e.requireFinancialInfo || this.get("requireFinancialInfo"), n = e.numDependents > 0 || this.hasDependents();
        return t && n
    },_validateUniqueSsns: function() {
        var e = _.filter(this.get("people"), function(e) {
            return !_.isEmpty(e.get("ssn"))
        }), t = this._nonUniqueSsns();
        if (e.length > 1 && t.length > 0) {
            var n = this;
            return _.map(this.get("people"), function(e) {
                if (_.contains(t, e.get("ssn")))
                    return {ssn: n.formatCustomError("ssnsMustBeUnique")}
            })
        }
    },_validateSomeoneApplyingForInsurance: function() {
        var e = !!_.find(this.get("people"), function(e) {
            return !_.isNull(e.get("applyingForInsurance"))
        });
        if (e && this.getPeopleApplyingForInsurance().length <= 0) {
            var t = this;
            return _.map(this.get("people"), function(e) {
                return {applyingForInsurance: t.formatCustomError("someoneMustBeApplyingForInsurance")}
            })
        }
    },_nonUniqueSsns: function() {
        var e = [], t = this.getPeopleToValidate(), n = _.groupBy(_.map(t, function(e) {
            return e.get("ssn")
        }));
        return _.keys(n).length !== t.length && _.each(n, function(t, n) {
            !!n && t.length > 1 && e.push(n)
        }), e
    },getPersonIndex: function(e) {
        return _.indexOf(this.get("people"), e)
    },getSelf: function() {
        return _.find(this.get("people"), function(e) {
            return e.get("relationship") === "self"
        })
    },getSpouse: function() {
        return this.get("people").length <= 1 ? null : this.get("isMarried") ? this.get("people")[1] : null
    },getParents: function() {
        return _.filter(this.get("people"), function(e) {
            return e.isParent()
        })
    },getDependents: function() {
        return _.filter(this.get("people"), function(e) {
            return e.isDependent()
        })
    },getNumDependentsApplying: function() {
        var e = this.getDependents().length > 0 && _.all(this.getDependents(), function(e) {
                return _.isNull(e.get("applyingForInsurance"))
            });
        return e ? null : _.filter(this.getDependents(), function(e) {
            return e.get("applyingForInsurance")
        }).length
    },getPeopleToValidate: function() {
        return this.get("requireFinancialInfo") ? this.get("people") : this.getPeopleApplyingForInsurance()
    },getPeopleApplyingForInsurance: function() {
        return _.filter(this.get("people"), function(e) {
            return e.get("applyingForInsurance")
        })
    },getIndexedPeopleApplyingForInsurance: function() {
        return _.filter(_.zip(this.get("people"), _.range(this.get("people").length)), function(e) {
            return e[0].get("applyingForInsurance")
        })
    },isBasicInfoValid: function() {
        return !_.any([this.get("coverageState"), this.get("requireFinancialInfo"), this.get("isMarried"), this.get("numDependents")], _.isNull)
    },getHouseholdSize: function() {
        var e = this.get("isMarried") ? 1 : 0;
        return this.get("numDependents") + 1 + e
    },getBufferedFPLCutoff: function() {
        if (!this.get("coverageState"))
            throw new Error("Coverage state required");
        return 4.2 * t.compute(this.get("coverageYear"), this.get("coverageState"), this.getHouseholdSize())
    },isMaybeEligibleForSubsidy: function() {
        return _(["coverageState", "isMarried", "numDependents", "isUnderFACutoff"]).map(_.bind(this.get, this)).map(_.isNull).any() ? !0 : this.get("isUnderFACutoff")
    },parse: function(e, t) {
        var n = _.clone(e);
        return n.householdContact && (n.householdContact = new o(n.householdContact, {parse: !0})), _.isEmpty(n.people) || (n.people = _.map(n.people, function(e) {
            return this._newPerson(e, {parse: !0})
        }, this)), n.assister && (n.assister = new i(n.assister, {parse: !0})), n
    },urlRoot: e.APP_ROOT + "data/application",isMultiplePersonHousehold: function() {
        return this.get("people").length > 1
    }});
    return f.VALID_COVERAGE_YEARS = [2014, 2015], f.SPECIAL_CASES_STATUS = {INCOMPLETE: "INCOMPLETE",PASSED: "PASSED",FAILED: "FAILED"}, f.REQUIRED_SPECIAL_CASES_ANSWERS = {homeAddress: !0,filingTax: !0,ssn: !0,ssnDifferentName: !1,nuclear: !0,stepchild: !1,citizen: !0,citizen2: !1,"native": !1,incarcerated: !1,eligibleViaEmployer: !1,pregnant: !1,hasStudent: !1,hasFosterChild: !1,nonDependentChild: !1,dependentOfUnmarried: !1}, f
}), define("backends/jsessionid-refresher", [], function() {
    function e(e) {
        e = _.defaults(e || {}, {url: "",timeoutMillis: 9e5,baseErrorTimeoutMillis: 6e4,maxErrorRetries: 3}), this.url = e.url, this.timeoutMillis = e.timeoutMillis, this.baseErrorTimeoutMillis = e.baseErrorTimeoutMillis, this.maxErrorRetries = e.maxErrorRetries, this.numRetries = 0, this.success = e.success, this.logoutDetected = e.logoutDetected, _.bindAll(this, "keepAlive", "onSuccess", "onError")
    }
    return e.prototype.keepAlive = function() {
        $.ajax({method: "POST",url: this.url,success: this.onSuccess,error: this.onError})
    }, e.prototype.onSuccess = function(e) {
        setTimeout(this.keepAlive, this.timeoutMillis), e !== "success: no" || !this.logoutDetected ? !this.success || this.success() : this.logoutDetected()
    }, e.prototype.onError = function() {
        if (this.numRetries < this.maxErrorRetries) {
            var e = this.baseErrorTimeoutMillis * Math.pow(2, this.numRetries);
            this.numRetries++, setTimeout(this.keepAlive, e)
        }
    }, e.createMarketplaceRefresher = function(t) {
        return t = t || {}, t.url = "/marketplace/CreateSaml2?actionId=extendSessionTimeout", new e(t)
    }, e.createEERestRefresher = function(t) {
        return t = t || {}, t.url = "/ee-rest/CreateSaml2?actionId=extendSessionTimeout", new e(t)
    }, e
}), function(e) {
    function t() {
        var e = document.createElement("input"), t = "onpaste";
        return e.setAttribute(t, ""), typeof e[t] == "function" ? "paste" : "input"
    }
    var n = t() + ".mask", r = navigator.userAgent, i = /iphone/i.test(r), s = /android/i.test(r), o;
    e.mask = {definitions: {9: "[0-9]",a: "[A-Za-z]","*": "[A-Za-z0-9]"},dataName: "rawMaskFn",placeholder: "_"}, e.fn.extend({caret: function(e, t) {
        var n;
        if (this.length === 0 || this.is(":hidden"))
            return;
        return typeof e == "number" ? (t = typeof t == "number" ? t : e, this.each(function() {
            this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
        })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {begin: e,end: t})
    },unmask: function() {
        return this.trigger("unmask")
    },mask: function(t, r) {
        var u, a, f, l, c, h;
        return !t && this.length > 0 ? (u = e(this[0]), u.data(e.mask.dataName)()) : (r = e.extend({placeholder: e.mask.placeholder,completed: null}, r), a = e.mask.definitions, f = [], l = h = t.length, c = null, e.each(t.split(""), function(e, t) {
            t == "?" ? (h--, l = e) : a[t] ? (f.push(new RegExp(a[t])), c === null && (c = f.length - 1)) : f.push(null)
        }), this.trigger("unmask").each(function() {
            function v(e) {
                while (++e < h && !f[e])
                    ;
                return e
            }
            function m(e) {
                while (--e >= 0 && !f[e])
                    ;
                return e
            }
            function g(e, t) {
                var n, i;
                if (e < 0)
                    return;
                for (n = e, i = v(t); n < h; n++)
                    if (f[n]) {
                        if (!(i < h && f[n].test(p[i])))
                            break;
                        p[n] = p[i], p[i] = r.placeholder, i = v(i)
                    }
                S(), u.caret(Math.max(c, e))
            }
            function y(e) {
                var t, n, i, s;
                for (t = e, n = r.placeholder; t < h; t++)
                    if (f[t]) {
                        i = v(t), s = p[t], p[t] = n;
                        if (!(i < h && f[i].test(s)))
                            break;
                        n = s
                    }
            }
            function b(e) {
                var t = e.which, n, r, s;
                t === 8 || t === 46 || i && t === 127 ? (n = u.caret(), r = n.begin, s = n.end, s - r === 0 && (r = t !== 46 ? m(r) : s = v(r - 1), s = t === 46 ? v(s) : s), E(r, s), g(r, s - 1), e.preventDefault()) : t == 27 && (u.val(d), u.caret(0, x()), e.preventDefault())
            }
            function w(t) {
                var n = t.which, i = u.caret(), o, a, l;
                if (t.ctrlKey || t.altKey || t.metaKey || n < 32)
                    return;
                n && (i.end - i.begin !== 0 && (E(i.begin, i.end), g(i.begin, i.end - 1)), o = v(i.begin - 1), o < h && (a = String.fromCharCode(n), f[o].test(a) && (y(o), p[o] = a, S(), l = v(o), s ? setTimeout(e.proxy(e.fn.caret, u, l), 0) : u.caret(l), r.completed && l >= h && r.completed.call(u))), t.preventDefault())
            }
            function E(e, t) {
                var n;
                for (n = e; n < t && n < h; n++)
                    f[n] && (p[n] = r.placeholder)
            }
            function S() {
                u.val(p.join(""))
            }
            function x(e) {
                var t = u.val(), n = -1, i, s;
                for (i = 0, pos = 0; i < h; i++)
                    if (f[i]) {
                        p[i] = r.placeholder;
                        while (pos++ < t.length) {
                            s = t.charAt(pos - 1);
                            if (f[i].test(s)) {
                                p[i] = s, n = i;
                                break
                            }
                        }
                        if (pos > t.length)
                            break
                    } else
                        p[i] === t.charAt(pos) && i !== l && (pos++, n = i);
                return e ? S() : (S(), u.val(u.val().substring(0, n + 1))), l ? i : c
            }
            var u = e(this), p = e.map(t.split(""), function(e, t) {
                if (e != "?")
                    return a[e] ? r.placeholder : e
            }), d = u.val();
            u.data(e.mask.dataName, function() {
                return e.map(p, function(e, t) {
                    return f[t] && e != r.placeholder ? e : null
                }).join("")
            }), u.attr("readonly") || u.one("unmask", function() {
                u.unbind(".mask").removeData(e.mask.dataName)
            }).bind("focus.mask", function() {
                clearTimeout(o);
                var e, n;
                d = u.val(), e = x(), o = setTimeout(function() {
                    S(), e == t.length ? u.caret(0, e) : u.caret(e)
                }, 10)
            }).bind("blur.mask", function() {
                x(), u.val() != d && u.change()
            }).bind("keydown.mask", b).bind("keypress.mask", w).bind(n, function() {
                setTimeout(function() {
                    var e = x(!0);
                    u.caret(e), r.completed && e == u.val().length && r.completed.call(u)
                }, 0)
            }), x()
        }))
    }})
}(jQuery), define("jquery-maskedinput", ["jquery"], function() {
}), function() {
    var e = 0, t = ["ms", "moz", "webkit", "o"];
    for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n)
        window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
        var r = (new Date).getTime(), i = Math.max(0, 16 - (r - e)), s = window.setTimeout(function() {
            t(r + i)
        }, i);
        return e = r + i, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(), define("request-animation-frame", function() {
}), function(e) {
    function r(e, t) {
        e.val() === "" ? e.data("placeholder").removeClass(t.hideClass) : e.data("placeholder").addClass(t.hideClass)
    }
    function i(e, t) {
        e.data("placeholder").addClass(t.hideClass)
    }
    function s(e, t) {
        var n = t.is("textarea"), r = t.position();
        e.css({top: r.top,left: r.left + parseInt(t.css("padding-left"), 10),width: t.innerWidth() - (n ? 20 : 4),height: t.innerHeight(),"font-size": t.css("font-size"),lineHeight: t.css("height"),whiteSpace: n ? "normal" : "nowrap",overflow: "hidden"})
    }
    function o(e, t) {
        var r = e.val();
        (function s() {
            n = requestAnimationFrame(s), e.val() !== r && (i(e, t), a(), u(e, t))
        })()
    }
    function u(e, t) {
        (function i() {
            n = requestAnimationFrame(i), r(e, t)
        })()
    }
    function a() {
        window.cancelAnimationFrame && cancelAnimationFrame(n)
    }
    function f(e) {
        t && window.console && window.console.log && window.console.log(e)
    }
    var t = !1, n;
    e.fn.placeHolder = function(t) {
        f("init placeHolder");
        var n = this, u = e(this).length;
        return this.options = e.extend({className: "placeholder",visibleToScreenreaders: !0,visibleToScreenreadersHideClass: "placeholder-hide-except-screenreader",visibleToNoneHideClass: "placeholder-hide",hideOnFocus: !1,removeLabelClass: "visuallyhidden",hiddenOverrideClass: "visuallyhidden-with-placeholder",forceHiddenOverride: !0,forceApply: !1,autoInit: !0}, t), this.options.hideClass = this.options.visibleToScreenreaders ? this.options.visibleToScreenreadersHideClass : this.options.visibleToNoneHideClass, e(this).each(function(t) {
            function y() {
                !n.options.hideOnFocus && window.requestAnimationFrame ? o(c, n.options) : i(c, n.options)
            }
            var c = e(this), h = c.attr("placeholder"), p = c.attr("id"), d, v, m, g;
            if (h === "" || h === undefined)
                h = c[0].attributes.placeholder.value;
            d = c.closest("label, .form-group");
            if (!d.length && !p) {
                f("the input element with the placeholder needs an id!");
                return
            }
            d = d.length ? d : e('label[for="' + p + '"]').first();
            if (!d.length) {
                f("the input element with the placeholder needs a label!");
                return
            }
            g = e(d).find(".placeholder");
            if (g.length)
                return s(g, c), g.text(h), c;
            d.hasClass(n.options.removeLabelClass) && d.removeClass(n.options.removeLabelClass).addClass(n.options.hiddenOverrideClass), v = e("<span>").addClass(n.options.className).text(h).insertAfter(c), m = v.width() > c.width(), m && v.attr("title", h), s(v, c), c.data("placeholder", v), v.data("input", c), v.click(function() {
                e(this).data("input").focus()
            }), c.focusin(y), c.focusout(function() {
                r(e(this), n.options), n.options.hideOnFocus || a()
            }), r(c, n.options), e(document).bind("fontresize resize", function() {
                s(v, c)
            }), e.event.special.resize ? e("textarea").bind("resize", function(t) {
                e(this).is(":visible") && s(v, c), t.stopPropagation(), t.preventDefault()
            }) : e("textarea").css("resize", "none"), t >= u - 1 && typeof e.attrHooks != "undefined" && (e.attrHooks.placeholder = {get: function(t) {
                return t.nodeName.toLowerCase() === "input" || t.nodeName.toLowerCase() === "textarea" ? e(t).data("placeholder") ? e(e(t).data("placeholder")).text() : e(t)[0].placeholder : undefined
            },set: function(t, n) {
                return e(e(t).data("placeholder")).text(n)
            }}), c.is(":focus") && y()
        })
    }, e(function() {
        var t = window.placeHolderConfig || {};
        if (t.autoInit === !1) {
            f("placeholder:abort because autoInit is off");
            return
        }
        if (("placeholder" in e("<input>")[0] || "placeHolder" in e("<input>")[0]) && !t.forceApply) {
            f("placeholder:abort because browser has native support");
            return
        }
        e("input[placeholder], textarea[placeholder]").placeHolder(t)
    })
}(jQuery), define("jquery-placeholder", ["jquery", "request-animation-frame"], function() {
}), +function(e) {
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1}, t.prototype.init = function(t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r);
        var i = this.options.trigger.split(" ");
        for (var s = i.length; s--; ) {
            var o = i[s];
            if (o == "click")
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if (o != "manual") {
                var u = o == "hover" ? "mouseenter" : "focus", a = o == "hover" ? "mouseleave" : "blur";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {show: t.delay,hide: t.delay}), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(n.timeout), n.hoverState = "in";
        if (!n.options.delay || !n.options.delay.show)
            return n.show();
        n.timeout = setTimeout(function() {
            n.hoverState == "in" && n.show()
        }, n.options.delay.show)
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(n.timeout), n.hoverState = "out";
        if (!n.options.delay || !n.options.delay.hide)
            return n.hide();
        n.timeout = setTimeout(function() {
            n.hoverState == "out" && n.hide()
        }, n.options.delay.hide)
    }, t.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            if (t.isDefaultPrevented())
                return;
            var n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var r = typeof this.options.placement == "function" ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, s = i.test(r);
            s && (r = r.replace(i, "") || "top"), n.detach().css({top: 0,left: 0,display: "block"}).addClass(r), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var o = this.getPosition(), u = n[0].offsetWidth, a = n[0].offsetHeight;
            if (s) {
                var f = this.$element.parent(), l = r, c = document.documentElement.scrollTop || document.body.scrollTop, h = this.options.container == "body" ? window.innerWidth : f.outerWidth(), p = this.options.container == "body" ? window.innerHeight : f.outerHeight(), d = this.options.container == "body" ? 0 : f.offset().left;
                r = r == "bottom" && o.top + o.height + a - c > p ? "top" : r == "top" && o.top - c - a < 0 ? "bottom" : r == "right" && o.right + u > h ? "left" : r == "left" && o.left - u < d ? "right" : r, n.removeClass(l).addClass(r)
            }
            var v = this.getCalculatedOffset(r, o, u, a);
            this.applyPlacement(v, r), this.$element.trigger("shown.bs." + this.type)
        }
    }, t.prototype.applyPlacement = function(e, t) {
        var n, r = this.tip(), i = r[0].offsetWidth, s = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(u) && (u = 0), e.top = e.top + o, e.left = e.left + u, r.offset(e).addClass("in");
        var a = r[0].offsetWidth, f = r[0].offsetHeight;
        t == "top" && f != s && (n = !0, e.top = e.top + s - f);
        if (/bottom|top/.test(t)) {
            var l = 0;
            e.left < 0 && (l = e.left * -2, e.left = 0, r.offset(e), a = r[0].offsetWidth, f = r[0].offsetHeight), this.replaceArrow(l - i + a, a, "left")
        } else
            this.replaceArrow(f - s, f, "top");
        n && r.offset(e)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function i() {
            t.hoverState != "in" && n.detach()
        }
        var t = this, n = this.tip(), r = e.Event("hide.bs." + this.type);
        this.$element.trigger(r);
        if (r.isDefaultPrevented())
            return;
        return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? n.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), this.$element.trigger("hidden.bs." + this.type), this
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function() {
        var t = this.$element[0];
        return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {width: t.offsetWidth,height: t.offsetHeight}, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
        return e == "bottom" ? {top: t.top + t.height,left: t.left + t.width / 2 - n / 2} : e == "top" ? {top: t.top - r,left: t.left + t.width / 2 - n / 2} : e == "left" ? {top: t.top + t.height / 2 - r / 2,left: t.left - n} : {top: t.top + t.height / 2 - r / 2,left: t.left + t.width}
    }, t.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.tooltip"), s = typeof n == "object" && n;
            i || r.data("bs.tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(jQuery), define("bootstrap-tooltip", ["jquery"], function() {
}), +function(e) {
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {placement: "right",trigger: "click",content: "",template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || (typeof t.content == "function" ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.popover"), s = typeof n == "object" && n;
            i || r.data("bs.popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(jQuery), define("bootstrap-popover", ["jquery", "bootstrap-tooltip"], function() {
}), $.fn.popover.originalLeave = $.fn.popover.Constructor.prototype.leave, $.fn.popover.Constructor.prototype.leave = function(e) {
    var t = e instanceof this.constructor ? e : $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    $.fn.popover.originalLeave.call(this, e);
    if (e.currentTarget) {
        var n = $(e.currentTarget).next(".popover");
        n.one("mouseenter.tooltip.extra", function() {
            t.hoverState = "in", clearTimeout(t.timeout), n.one("mouseleave.tooltip.extra", function() {
                $.fn.popover.Constructor.prototype.leave.call(t, t)
            })
        })
    }
}, $.fn.popover.originalShow = $.fn.popover.Constructor.prototype.show, $.fn.popover.Constructor.prototype.show = function() {
    var e = this.tip();
    $(".popover").not(e).popover("hide"), e.is(":visible") || $.fn.popover.originalShow.call(this)
}, define("bootstrap-popover-override", ["jquery", "bootstrap-popover"], function() {
}), define("util/ab-defaults", [], function() {
    return {showMap: !0,useNewAccountPage: !0,useFullPageNavigationForCreateAccount: !0,showRetypePassword: !0,showRevealPassword: !1,showPasswordCheckboxes: !0,suggestEmailDomain: !0,showPrivacyErrorIcon: !0,validationErrorSummary: !1,assertivePasswordCheck: !1,scrollToFirstValidationError: !0,createAccountHeading: null,createAccountSubHeading: null,manualExperimentIds: [597892766],ffmRestTimeoutMs: 3e4}
}), define("util/ab-util", ["util/ab-defaults", "util/app-context"], function(e, t) {
    function r(t) {
        if (!window.flags)
            n = !0;
        else if (window.flags.hasOwnProperty(t))
            return window.flags[t];
        if (!e.hasOwnProperty(t)) {
            console.log("Flag not found: " + t);
            return
        }
        return e[t]
    }
    function i() {
        if (!window.optimizely || !window.optimizely.activeExperiments)
            return [];
        active = [];
        var e = Math.min(window.optimizely.activeExperiments.length, 100);
        for (var t = 0; t < e; t++) {
            var n = window.optimizely.activeExperiments[t];
            active.push([n, window.optimizely.data.state.variationNamesMap[n]])
        }
        return active
    }
    function s() {
        var e = window.flags || {}, r = i(), s = _.map(r, function(e) {
            return e[1]
        }), o = {flagsMissing: n,variations: s,locale: t.getLocale(),ccr: t.isCallCenter() ? "yes" : "no"};
        for (var u = 0; u < r.length; u++)
            o["exp" + r[u][0]] = r[u][1];
        return _.merge(o, e)
    }
    var n = !1;
    return {flag: r,currentVariations: i,abProperties: s}
}), define("util/analytics", ["underscore", "util/ab-util"], function(e, t) {
    function n(n, r, i) {
        if (!window.mixpanel || !window.mixpanel.track) {
            i && e.defer(i);
            return
        }
        r = typeof r != "undefined" ? r : {};
        var s = e.merge({}, r, t.abProperties());
        window.mixpanel.track(n, s, i), window.mixpanel.secondary && window.mixpanel.secondary.track(n, s, i)
    }
    function r(e, t, n) {
        if (!window.mixpanel || !window.mixpanel.track_links)
            return;
        window.mixpanel.track_links(e, t, n), window.mixpanel.secondary && window.mixpanel.secondary.track_links(e, t, n)
    }
    return {track: n,trackLinks: r}
}), define("util/grammar", ["underscore"], function(e) {
    function t(t, n, r) {
        r = r || "nothing";
        if (t.length === 0)
            return r;
        if (t.length === 1)
            return t[0];
        if (t.length === 2)
            return t[0] + " " + n + " " + t[1];
        var i = ", ";
        return t.slice(0, -1).join(", ") + i + n + " " + e.last(t)
    }
    function n(e, t, n) {
        return n = n || e + "s", t === 1 ? e : n
    }
    function r(e) {
        return e = e == null ? "" : String(e), e.charAt(0).toUpperCase() + e.slice(1)
    }
    function i(e) {
        return e == null ? "" : (e = String(e).toLowerCase(), e.replace(/(?:^|\s|-)\S/g, function(e) {
            return e.toUpperCase()
        }))
    }
    function s(e, t, n, r) {
        e = Number(e);
        if (isNaN(e) || e === null)
            return "";
        e = e.toFixed(~~t), r = typeof r == "string" ? r : ",";
        var i = e.split("."), s = i[0], o = i[1] ? (n || ".") + i[1] : "";
        return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + o
    }
    function o(e, t) {
        return "$" + s(e, t ? 0 : 2)
    }
    function u(e) {
        return s(e, 2, ".", "")
    }
    return {buildConjunction: t,pluralize: n,titleize: i,capitalize: r,numberFormat: s,currencyFormat: o,currencyInputFormat: u}
}), define("text", ["module"], function(e) {
    var t, n, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], i = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, s = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, o = typeof location != "undefined" && location.href, u = o && location.protocol && location.protocol.replace(/\:/, ""), a = o && location.hostname, f = o && (location.port || undefined), l = [], c = e.config && e.config() || {};
    t = {version: "2.0.5",strip: function(e) {
        if (e) {
            e = e.replace(i, "");
            var t = e.match(s);
            t && (e = t[1])
        } else
            e = "";
        return e
    },jsEscape: function(e) {
        return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
    },createXhr: c.createXhr || function() {
        var e, t, n;
        if (typeof XMLHttpRequest != "undefined")
            return new XMLHttpRequest;
        if (typeof ActiveXObject != "undefined")
            for (t = 0; t < 3; t += 1) {
                n = r[t];
                try {
                    e = new ActiveXObject(n)
                } catch (i) {
                }
                if (e) {
                    r = [n];
                    break
                }
            }
        return e
    },parseName: function(e) {
        var t, n, r, i = !1, s = e.indexOf("."), o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
        return s !== -1 && (!o || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1, e.length)) : t = e, r = n || t, s = r.indexOf("!"), s !== -1 && (i = r.substring(s + 1) === "strip", r = r.substring(0, s), n ? n = r : t = r), {moduleName: t,ext: n,strip: i}
    },xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,useXhr: function(e, n, r, i) {
        var s, o, u, a = t.xdRegExp.exec(e);
        return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : !0
    },finishLoad: function(e, n, r, i) {
        r = n ? t.strip(r) : r, c.isBuild && (l[e] = r), i(r)
    },load: function(e, n, r, i) {
        if (i.isBuild && !i.inlineText) {
            r();
            return
        }
        c.isBuild = i.isBuild;
        var s = t.parseName(e), l = s.moduleName + (s.ext ? "." + s.ext : ""), h = n.toUrl(l), p = c.useXhr || t.useXhr;
        !o || p(h, u, a, f) ? t.get(h, function(n) {
            t.finishLoad(e, s.strip, n, r)
        }, function(e) {
            r.error && r.error(e)
        }) : n([l], function(e) {
            t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
        })
    },write: function(e, n, r, i) {
        if (l.hasOwnProperty(n)) {
            var s = t.jsEscape(l[n]);
            r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
        }
    },writeFile: function(e, n, r, i, s) {
        var o = t.parseName(n), u = o.ext ? "." + o.ext : "", a = o.moduleName + u, f = r.toUrl(o.moduleName + u) + ".js";
        t.load(a, r, function(n) {
            var r = function(e) {
                return i(f, e)
            };
            r.asModule = function(e, t) {
                return i.asModule(e, f, t)
            }, t.write(e, a, r, s)
        }, s)
    }};
    if (c.env === "node" || !c.env && typeof process != "undefined" && process.versions && !!process.versions.node)
        n = require.nodeRequire("fs"), t.get = function(e, t) {
            var r = n.readFileSync(e, "utf8");
            r.indexOf("﻿") === 0 && (r = r.substring(1)), t(r)
        };
    else if (c.env === "xhr" || !c.env && t.createXhr())
        t.get = function(e, n, r, i) {
            var s = t.createXhr(), o;
            s.open("GET", e, !0);
            if (i)
                for (o in i)
                    i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
            c.onXhr && c.onXhr(s, e), s.onreadystatechange = function(t) {
                var i, o;
                s.readyState === 4 && (i = s.status, i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i), o.xhr = s, r(o)) : n(s.responseText))
            }, s.send(null)
        };
    else if (c.env === "rhino" || !c.env && typeof Packages != "undefined" && typeof java != "undefined")
        t.get = function(e, t) {
            var n, r, i = "utf-8", s = new java.io.File(e), o = java.lang.System.getProperty("line.separator"), u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)), a = "";
            try {
                n = new java.lang.StringBuffer, r = u.readLine(), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), n.append(r);
                while ((r = u.readLine()) !== null)
                    n.append(o), n.append(r);
                a = String(n.toString())
            }finally {
                u.close()
            }
            t(a)
        };
    return t
}), define("text!templates/forms/_address.html", [], function() {
    return "<fieldset id=\"<%- id %>\" class=\"<%- defaultValue(options.className, '') %>\">\n  <legend class=\"has-subtitle\"><%- content.heading %></legend>\n  <p class=\"instructions\">\n    <% if (content.highlight) { %>\n      <%= partial('help/_popover-highlight', {\n        label: content.instructions,\n        highlights: [{\n          highlight: content.highlight,\n          content: content.helpContent,\n          externalText: content.externalText,\n          externalLink: content.externalLink,\n          escapePopover: false\n        }]\n      }) %>\n    <% } else { %>\n      <%= content.instructions %>\n    <% } %>\n  </p>\n  <div class=\"row\">\n    <div class=\"form-group col-sm-9\">\n      <input class=\"form-control\" name=\"<%- fieldNames.street %>\"\n            autocorrect=\"off\" autocapitalize=\"words\" autocomplete=\"off\" spellcheck=\"false\"\n          type=\"text\" maxlength=\"55\" placeholder=\"<%- content.address1 %>\" aria-label=\"<%- content.address1 %>\">\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <input class=\"form-control\" name=\"<%- fieldNames.apartment %>\"\n          type=\"text\" maxlength=\"55\" placeholder=\"<%- content.address2 %>\" aria-label=\"<%- content.address2 %>\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-sm-4\">\n      <input class=\"form-control\" name=\"<%- fieldNames.city %>\"\n            autocorrect=\"off\" autocapitalize=\"words\" autocomplete=\"on\" spellcheck=\"true\"\n          type=\"text\" maxlength=\"25\" placeholder=\"<%- content.city %>\" aria-label=\"<%- content.city %>\">\n    </div>\n    <div class=\"form-group col-sm-3\">\n      <% if (typeof options === 'undefined' || !options.coverageStateName) { %>\n        <%= partial('forms/_dropdown', {\n          id: id + '-state',\n          name: fieldNames.state,\n          label: 'State',\n          // TODO(james): Construct menuItems programmatically using States.\n          menuItems: [\n            { value: 'AL', text: 'Alabama' },\n            { value: 'AK', text: 'Alaska' },\n            { value: 'AZ', text: 'Arizona' },\n            { value: 'AR', text: 'Arkansas' },\n            { value: 'CA', text: 'California' },\n            { value: 'CO', text: 'Colorado' },\n            { value: 'CT', text: 'Connecticut' },\n            { value: 'DE', text: 'Delaware' },\n            { value: 'DC', text: 'District of Columbia' },\n            { value: 'FL', text: 'Florida' },\n            { value: 'GA', text: 'Georgia' },\n            { value: 'HI', text: 'Hawaii' },\n            { value: 'ID', text: 'Idaho' },\n            { value: 'IL', text: 'Illinois' },\n            { value: 'IN', text: 'Indiana' },\n            { value: 'IA', text: 'Iowa' },\n            { value: 'KS', text: 'Kansas' },\n            { value: 'KY', text: 'Kentucky' },\n            { value: 'LA', text: 'Louisiana' },\n            { value: 'ME', text: 'Maine' },\n            { value: 'MD', text: 'Maryland' },\n            { value: 'MA', text: 'Massachusetts' },\n            { value: 'MI', text: 'Michigan' },\n            { value: 'MN', text: 'Minnesota' },\n            { value: 'MS', text: 'Mississippi' },\n            { value: 'MO', text: 'Missouri' },\n            { value: 'MT', text: 'Montana' },\n            { value: 'NE', text: 'Nebraska' },\n            { value: 'NV', text: 'Nevada' },\n            { value: 'NH', text: 'New Hampshire' },\n            { value: 'NJ', text: 'New Jersey' },\n            { value: 'NM', text: 'New Mexico' },\n            { value: 'NY', text: 'New York' },\n            { value: 'NC', text: 'North Carolina' },\n            { value: 'ND', text: 'North Dakota' },\n            { value: 'OH', text: 'Ohio' },\n            { value: 'OK', text: 'Oklahoma' },\n            { value: 'OR', text: 'Oregon' },\n            { value: 'PA', text: 'Pennsylvania' },\n            { value: 'RI', text: 'Rhode Island' },\n            { value: 'SC', text: 'South Carolina' },\n            { value: 'SD', text: 'South Dakota' },\n            { value: 'TN', text: 'Tennessee' },\n            { value: 'TX', text: 'Texas' },\n            { value: 'UT', text: 'Utah' },\n            { value: 'VT', text: 'Vermont' },\n            { value: 'VA', text: 'Virginia' },\n            { value: 'WA', text: 'Washington' },\n            { value: 'WV', text: 'West Virginia' },\n            { value: 'WI', text: 'Wisconsin' },\n            { value: 'WY', text: 'Wyoming' }\n          ],\n          options: { defaultText: content.selectState }\n        }) %>\n      <% } else { %>\n        <a href=\"javascript:;\" class=\"coverage-state-toggle\"\n           data-target=\".coverage-state-dropdown\">\n          <%- options.coverageStateName %><span class=\"caret\"></span>\n        </a>\n      <% } %>\n    </div>\n    <div class=\"form-group col-sm-2 zip-field\">\n      <input class=\"form-control\" name=\"<%- fieldNames.zipCode %>\"\n        type=\"tel\" maxlength=\"5\" placeholder=\"<%- content.zipCode %>\" aria-label=\"<%- content.zipCode %>\">\n    </div>\n\n    <% if (fieldNames.county) { %>\n      <div class=\"form-group col-sm-3\">\n        <%= partial('forms/_dropdown', {\n          id: id + '-county-dropdown',\n          name: fieldNames.county,\n          label: content.county,\n          menuItems: [],\n          options: { dropdownToggleClassName: 'form-control form-county', defaultText: content.county }\n        }) %>\n      </div>\n    <% } %>\n\n    <% if (typeof options !== 'undefined' && options.coverageStateName) { %>\n      <div class=\"col-md-12 coverage-state-dropdown\">\n        <%= Strings.format(content.changeCoverageState, options.coverageStateName) %>\n      </div>\n    <% } %>\n  </div>\n\n  <div class=\"address-error row\">\n    <div class=\"invalid-zip-error col-sm-12 form-group has-error hidden\">\n      <p class=\"help-block error-message\" aria-live=\"polite\"><%- content.invalidZipCodeMessage %></p>\n    </div>\n    <div class=\"invalid-address-error col-sm-12 form-group has-error hidden\">\n      <p class=\"help-block error-message\" aria-live=\"polite\"><%- content.invalidAddressMessage %></p>\n    </div>\n    <div class=\"scrubbed-address-message col-sm-12 hidden\" aria-live=\"polite\">\n      <%= content.scrubbedAddressMessage %>\n      <a href=\"javascript:;\" class=\"update-address\"><%- content.updateYourAddress %></a>\n    </div>\n  </div>\n</fieldset>\n"
}), define("text!templates/forms/_applicant.html", [], function() {
    return '<fieldset class="applicant <%- defaultValue(options.className, \'\') %>" data-person-index="<%- i %>">\n  <legend class="has-subtitle">\n    <%- heading %>\n  </legend>\n   <p class="instructions">\n    <%- options.subHeading ? options.subHeading : content.householdInfoInstructions %>\n  </p>\n\n  <%= partial(\'forms/_full-name\', {\n    id: \'full-name-\' + i,\n    fieldNamePrefix: \'tendon:people[\' + i + \'].\',\n  }) %>\n\n  <div class="row">\n    <div class="form-group col-md-2 col-sm-6 col-xs-12">\n      <div class="header-label"><%- content.dob %></div>\n      <input class="form-control" name="tendon:people[<%= i %>].dob"\n          type="tel" maxlength="25" placeholder="MM/DD/YYYY" aria-label="MM/DD/YYYY"\n          data-mask="99/99/9999">\n    </div>\n\n    <div class="form-group col-md-3 col-sm-6 col-xs-12">\n      <div class="header-label">\n        <%= partial(\'help/_popover-label\', {\n          label: content.ssn,\n          content: content.ssnHelp,\n          options: {\n            escapePopover: false,\n            externalLink: content.ssnHelpExternalLink,\n            externalText: content.ssnHelpExternalText\n          }\n        }) %>\n      </div>\n      <input class="form-control" name="tendon:people[<%= i %>].ssn"\n          type="tel" maxlength="25" placeholder="XXX-XX-XXXX" aria-label="XXX-XX-XXXX"\n          data-mask="999-99-9999">\n    </div>\n\n    <%\n      // Use different fluid column widths if the relationship field is shown\n      // because it changes how much space we have to show the various fields.\n    %>\n    <div class="form-group <%- (shouldShowRelationshipField) ? \'col-md-2 col-sm-2\' : \'col-md-2\' %> col-xs-4">\n      <div class="header-label hidden-sm hidden-xs"><% /* spacer */ %>&nbsp;</div>\n      <%= partial(\'forms/_sex\', {\n        id: \'sex-dropdown-\' + i,\n        name: \'tendon:people[\' + i + \'].sex\'\n      }) %>\n    </div>\n\n    <% if (shouldShowRelationshipField) { %>\n      <div class="form-group col-md-2 col-sm-5 col-xs-8">\n        <div class="header-label hidden-sm hidden-xs"><% /* spacer */ %>&nbsp;</div>\n        <%= partial(\'forms/_dropdown\', {\n          id: \'relationship-dropdown-\' + i,\n          name: \'tendon:people[\' + i + \'].relationship\',\n          label: content.relationship,\n          menuItems: [\n            { value: \'child\', text: content.child }\n          ]\n        }) %>\n      </div>\n    <% } %>\n\n    <div class="form-group <%- (shouldShowRelationshipField) ? \'col-md-3 col-sm-5 col-xs-12\' : \'col-md-5 col-xs-8\' %>">\n      <div class="header-label hidden-sm hidden-xs"><% /* spacer */ %>&nbsp;</div>\n      <a href="#" class="ethnicity-race-toggle"\n         data-target=".ethnicity-<%- i %>">\n        <%- content.ethnicityAndRace %><span class="caret"></span>\n      </a>\n    </div>\n    <%= partial(\'forms/_ethnicity\', {\n      i: i,\n      content: content\n    }) %>\n  </div>\n\n  <% if (shouldAskIfApplying) { %>\n    <div class="row spacer-top20">\n      <div class="col-sm-12 col-xs-12">\n        <%= partial(\'forms/_filter-question\', {\n          label: defaultValue(options.isApplyingLabel,\n            content.coveragePerson),\n          name: \'tendon:people[\' + i + \'].applyingForInsurance\',\n          value: null\n        }) %>\n      </div>\n    </div>\n  <% } %>\n</fieldset>\n'
}), define("text!templates/forms/_dropdown.html", [], function() {
    return '<div class="form-select <%- defaultValue(options.className, \'\') %>">\n  <select class="<%- defaultValue(options.dropdownToggleClassName, \'form-control\') %>" name="<%- name %>" aria-label="<%- label %>" data-type="<%- options.type %>">\n    <% if (!_.isUndefined(options.defaultText)) { %>\n    <option value="" <% if (_.isUndefined(options.selectedOption)) { %> selected="selected"<% } %>><%- options.defaultText %></option>\n    <% } %>\n    <% _.each(menuItems, function(menuItem) { %>\n    <option value="<%- menuItem.value %>" <% if (options.selectedOption && menuItem.value === options.selectedOption) { %> selected="selected"<% } %>><%- menuItem.text %></option>\n    <% }) %>\n  </select>\n  <span class="caret"></span>\n</div>\n'
}), define("text!templates/forms/_dropdown-menuitem.html", [], function() {
    return '<li role="presentation">\n  <a role="menuitem" tabindex="-1" data-value="<%= value %>" href="javascript:;"><%- text %></a>\n</li>'
}), define("text!templates/forms/_ethnicity.html", [], function() {
    return '<div class="col-md-12 ethnicity-race-dropdown ethnicity-<%- i %>">\n\n  <div class="clearfix row">\n    <div class="subtitle ethnicity-race-description instructions col-md-12">\n      <%= partial(\'help/_popover-label\', {\n        label: content.ethnicityDescription,\n        content: content.ethnicityDescriptionHelp\n      }) %>\n    </div>\n    <div class="checkbox small col-md-12">\n      <label>\n        <input class="hispanic-origin-checkbox" type="checkbox" data-person-index="<%= i %>"\n               name="tendon:people[<%= i %>].hispanic">\n        <%- content.ethnicityHispanic %>\n\n      </label>\n\n      <div class="clearfix hispanic-ethnicity-specifiers hidden">\n        <% _.each(Person.SPECIFIC_ETHNICITY, function(ethnicityVal, ethnicityId, list) { %>\n        <div class="checkbox small col-lg-8 col-md-10 col-sm-14">\n          <label>\n            <input type="checkbox" name="tendon:people[<%= i %>].ethnicities" value="<%= ethnicityVal %>">\n              <%- content.ethnicityName[ethnicityId] %>\n          </label>\n        </div>\n        <% }); %>\n        <div class="checkbox small col-lg-8 col-md-10 col-sm-14">\n          <label>\n            <input class="other-checkbox" type="checkbox" name="tendon:people[<%= i %>].ethnicities" value="<%= Person.ETHNICITY.OTHER %>" >\n            <%- content.otherHispanicOrigin %>\n          </label>\n\n          <div class="other-race-text-container hidden">\n            <label>\n              <input class="form-control other-text"\n                     name="tendon:people[<%= i %>].otherEthnicity" type="text" maxlength="25">\n              <%- content.pleaseSpecify %>\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="clearfix row">\n    <% _.each(Person.SPECIFIC_RACE, function(raceVal, raceId, list) { %>\n    <div class="checkbox small col-lg-3 col-md-4 col-sm-6">\n      <label>\n        <input type="checkbox" name="tendon:people[<%= i %>].races" value="<%= raceVal %>">\n        <% /* Ensure that long races do not extend past column width */ %>\n        <% if (content.raceName[raceId] && content.raceName[raceId].length >= 28) { %>\n          <span class="long-ethnicity"><%- content.raceName[raceId] %></span>\n        <% } else { %>\n          <%- content.raceName[raceId] %>\n        <% } %>\n      </label>\n    </div>\n    <% }); %>\n\n    <div class="checkbox small col-lg-3 col-md-4 col-sm-6">\n      <label>\n        <input class="other-checkbox" type="checkbox" name="tendon:people[<%= i %>].races" value="<%= Person.RACE.OTHER %>" >\n        <%- content.other %>\n      </label>\n\n      <div class="other-race-text-container hidden">\n        <label>\n          <input class="form-control other-text"\n                 name="tendon:people[<%= i %>].otherRace" type="text" maxlength="25">\n          <%- content.pleaseSpecify %>\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n'
}), define("text!templates/forms/_existing-applications-check.html", [], function() {
    return '<div class="existing-application-check-container">\n\n  <div class="waiting-for-application-index-container hidden">\n    <img id="loading-check-existing" src="/marketplace/b/app2/img/loading.gif" alt="loading" />\n  </div>\n\n  <div class="submittable-application-container hidden" aria-atomic="true" aria-live="polite">\n    <div class="button-wrapper">\n      <div class="msg-success spacer-bottom10">\n        <%- content.submittableApplicationMessage %>\n      </div>\n\n      <a class="btn btn-lg btn-success btn-submit btn-continue-existing" href="">\n        <%- content.continueYourApplication %>\n      </a>\n    </div>\n  </div>\n\n  <div class="non-submittable-application-container hidden" aria-atomic="true" aria-live="polite">\n    <div class="button-wrapper">\n      <div class="msg-success spacer-bottom10">\n        <%- content.manageYourApplicationsMessage %>\n      </div>\n\n      <a class="btn btn-lg btn-success btn-submit btn-manage" href="" target="_blank">\n        <%- content.manageYourApplications %>\n      </a>\n    </div>\n  </div>\n\n\n  <div class="application-index-error-container hidden" aria-atomic="true" aria-live="polite">\n    <div class="button-wrapper">\n      <div class="msg-error spacer-bottom10">\n        <%- content.loadingError %>\n      </div>\n\n      <button class="btn btn-lg btn-success btn-submit btn-retry-check-existing">\n        <%- content.resubmit %>\n      </button>\n    </div>\n  </div>\n\n</div>\n'
}), define("text!templates/forms/_filter-question.html", [], function() {
    return '<%\n/**\n * Filter questions also can take a \'help\' object, which will append a help\n * popover onto the end of the label. Additional options are passed to\n * _popover-label via the help.options object, which can contain things like\n * links to external resources.\n */\n%>\n<div class="filter-question form-group">\n  <% if (_.isArray(options.help) && label) { %>\n    <div class="visible-radio-label sm hidden-md hidden-lg">\n      <%= partial(\'help/_popover-highlight\', {\n        label: label,\n        highlights: options.help\n      }) %>\n    </div>\n  <% } else if (options.help && label) { %>\n    <div class="visible-radio-label sm hidden-md hidden-lg">\n      <%= partial(\'help/_popover-label\', {\n        label: label,\n        content: options.help.content,\n        options: _.extend({\n          append: true,\n          escapeLabel: false,\n          escapePopover: false\n        }, options.help.options)\n      }) %>\n    </div>\n  <% } else if (label) { %>\n    <div class="visible-radio-label sm hidden-md hidden-lg"><%= label %></div>\n  <% } %>\n  <%= partial(\'forms/_toggle-buttons\', {\n    name: name,\n    items: [\n      {value: true, label: content.yes},\n      {value: false, label: content.no}\n    ],\n    options: {selectedValue: value, className: \'\'}\n  }) %>\n  <% if (_.isArray(options.help) && label) { %>\n    <span class="visible-radio-label col-md-10 hidden-sm hidden-xs">\n      <%= partial(\'help/_popover-highlight\', {\n        label: label,\n        highlights: options.help\n      }) %>\n    </span>\n  <% } else if (options.help && label) { %>\n    <span class="visible-radio-label col-md-10 hidden-sm hidden-xs">\n      <%= partial(\'help/_popover-label\', {\n        label: label,\n        content: options.help.content,\n        options: _.extend({\n          append: true,\n          escapeLabel: false,\n          escapePopover: false\n        }, options.help.options)\n      }) %>\n    </span>\n  <% } else if (label) { %>\n    <span class="visible-radio-label col-md-10 hidden-sm hidden-xs"><%= label %></span>\n  <% } %>\n  <div class="spacer spacer-bottom25 hidden-md hidden-lg"></div>\n</div>\n'
}), define("text!templates/forms/_full-name.html", [], function() {
    return '<div id="<%- id %>" class="row">\n  <div class="form-group col-sm-4">\n    <input class="form-control" name="<%- fieldNamePrefix %>firstName"\n        autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n        type="text" maxlength="25" placeholder="<%- content.firstName %>" aria-label="<%- content.firstName %>">\n  </div>\n  <div class="form-group col-sm-2">\n    <input class="form-control" name="<%- fieldNamePrefix %>middleName"\n        autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n        type="text" maxlength="25" placeholder="<%- content.middleName %>" aria-label="<%- content.middleName %>">\n  </div>\n  <div class="form-group col-sm-6">\n    <div class="input-group">\n      <input class="form-control" name="<%- fieldNamePrefix %>lastName"\n          autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n          type="text" maxlength="25" placeholder="<%- content.lastName %>" aria-label="<%- content.lastName %>">\n      <%= partial(\'forms/_name-suffix\', {\n        id: id + \'-suffix-dropdown\',\n        name: fieldNamePrefix + \'suffix\'\n      }) %>\n    </div>\n  </div>\n</div>\n'
}), define("text!templates/forms/_input-group-dropdown.html", [], function() {
    return "<%= partial('forms/_dropdown', {\n  id: id,\n  name: name,\n  label: label,\n  menuItems: menuItems,\n  options: {\n    className: 'input-group-btn',\n    menuClassName: 'pull-right',\n    dropdownToggleClassName: 'btn btn-default',\n    defaultText: options.defaultText\n  }\n}) %>"
}), define("text!templates/forms/_name-suffix.html", [], function() {
    return "<%= partial('forms/_input-group-dropdown', {\n  id: id,\n  name: name,\n  label: content.suffix,\n  menuItems: [\n    { value: 'Jr.', text: 'Jr.' },\n    { value: 'Sr.', text: 'Sr.' },\n    { value: 'III', text: 'III' },\n    { value: 'IV', text: 'IV' },\n    { value: 'V', text: 'V' }\n  ],\n  options: { defaultText: content.suffix }\n}) %>"
}), define("text!templates/forms/_sex.html", [], function() {
    return "<%= partial('forms/_dropdown', {\n  id: id,\n  name: name,\n  label: content.sex,\n  menuItems: [\n    { value: 'Male', text: content.male },\n    { value: 'Female', text: content.female }\n  ],\n  options: { defaultText: content.sex }\n}) %>"
}), define("text!templates/forms/_toggle-buttons.html", [], function() {
    return '<div class="toggle-buttons <%- defaultValue(options.className, \'form-group\') %>" data-toggle="buttons">\n  <% _.each(items, function(item, i) { %>\n    <%\n      var isActive = options.selectedValue === item.value ||\n        (options.type === \'checkbox\' && _.contains(options.selectedValue, item.value));\n    %>\n    <a href="javascript:;" class="btn btn-primary radio-label prefill-<%- item.value %> <%- (isActive) ? \'active\' : \'\' %>">\n      <input type="<%- defaultValue(options.type, \'radio\') %>"\n             name="<%- name %>"\n             value="<%- item.value %>"\n             <%= (isActive) ? \'checked="checked"\' : \'\' %>\n             aria-label="<%- item.label %>">\n      <%= item.label %>\n    </a>\n  <% }) %>\n</div>\n'
}), define("text!templates/help/_popover-highlight.html", [], function() {
    return '<%\n  /**\n   *\n   * Sometimes we want to just highlight parts of a sentence as the popover.\n   * Oftentimes this is because we want to have help content in multiple parts\n   * in a sentence, so we are expecting an array of highlights to be passed in,\n   * with similar options to _popover-label.\n   *\n   **/\n  var fullHTML = label,\n    highlightTemplate = "<a href=\\"javascript:;\\" class=\\"help-popover glossary-term\\" {0}>{1}</a>",\n    footerTemplate = "<div class=&quot;popover-footer&quot;><a href=&quot;{0}&quot; target=&quot;hcgov_help&quot;>{1}</a></div>";\n\n  for (var i = 0; i < highlights.length; i++) {\n    var highlight = highlights[i],\n      content = highlight.content;\n\n    if (highlight.externalLink && highlight.externalText) {\n      content += Strings.format(footerTemplate, highlight.externalLink, highlight.externalText);\n    }\n\n    if (highlight.escapePopover) {\n      var dataContent = \'data-content="\' + _.escape(content) + \'"\';\n    } else {\n      var dataContent = \'data-content="\' + content + \'" data-html="true"\';\n    }\n\n    /**\n     *\n     * If we don\'t have a defined highlight, just append the help content\n     * as a question mark glyph at the end of the sentence.\n     *\n     * We currently only have one instance of this intentionally being there.\n     * If we do eventually want more instances of this behavior we can add some\n     * logic here but for now it\'s just sort of handling it quietly.\n     *\n     **/\n    if (_.isUndefined(highlight.highlight)) {\n      var appendTemplate = " <a href=\\"javascript:;\\" class=\\"help-popover glyphicon glyphicon-question-sign\\" aria-hidden=\\"true\\" {0}></a>";\n      fullHTML = fullHTML + Strings.format(appendTemplate, dataContent);\n    } else {\n      var popoverHTML = Strings.format(highlightTemplate, dataContent, highlight.highlight);\n      fullHTML = fullHTML.replace(\'{\' + i + \'}\', popoverHTML);\n    }\n  }\n%>\n<%= fullHTML %>\n'
}), define("text!templates/help/_popover-label.html", [], function() {
    return '<%\n  /**\n   *\n   * We use this when we want to add help content as a popover to a form label,\n   * or when we want to append a simple question mark glyphicon.\n   *\n   **/\n  var escapeLabel = defaultValue(options.escapeLabel, true);\n  var escapePopover = defaultValue(options.escapePopover, true);\n\n  if (escapeLabel) {\n    var popoverAnchor = _.escape(label);\n  } else {\n    var popoverAnchor = label;\n  }\n\n  // add a link to the bottom of the content if we have it\n  if (options.externalLink && options.externalText) {\n    var footer = "<div class=&quot;popover-footer&quot;><a href=&quot;{0}&quot; target=&quot;hcgov_help&quot;>{1}</a></div>";\n\n    content += footer.replace(\'{0}\', options.externalLink).replace(\'{1}\', options.externalText);\n  }\n\n  if (escapePopover) {\n    var popoverHTML = \'data-content="\' + _.escape(content) + \'"\';\n  } else {\n    var popoverHTML = \'data-content="\' + content + \'" data-html="true"\';\n  }\n%>\n<% if (options.append) { %>\n  <%= popoverAnchor %> <a href="javascript:;" class="help-popover glyphicon glyphicon-question-sign" aria-hidden="true"\n    <%= popoverHTML %> data-title="<%- defaultValue(options.title, \'\') %>">\n  </a>\n<% } else { %>\n  <a href="javascript:;" class="help-popover help-popover-label"\n    <%= popoverHTML %> data-title="<%- defaultValue(options.title, \'\') %>">\n    <%= popoverAnchor %>\n    <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>\n  </a>\n<% } %>\n'
}), define("util/partials", ["text!templates/forms/_address.html", "text!templates/forms/_applicant.html", "text!templates/forms/_dropdown.html", "text!templates/forms/_dropdown-menuitem.html", "text!templates/forms/_ethnicity.html", "text!templates/forms/_existing-applications-check.html", "text!templates/forms/_filter-question.html", "text!templates/forms/_full-name.html", "text!templates/forms/_input-group-dropdown.html", "text!templates/forms/_name-suffix.html", "text!templates/forms/_sex.html", "text!templates/forms/_toggle-buttons.html", "text!templates/help/_popover-highlight.html", "text!templates/help/_popover-label.html"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p) {
    return {"forms/_address": e,"forms/_applicant": t,"forms/_dropdown": n,"forms/_dropdown-menuitem": r,"forms/_ethnicity": i,"forms/_existing-applications-check": s,"forms/_filter-question": o,"forms/_full-name": u,"forms/_input-group-dropdown": a,"forms/_name-suffix": f,"forms/_sex": l,"forms/_toggle-buttons": c,"help/_popover-highlight": h,"help/_popover-label": p}
}), define("text!templates/card-container.html", [], function() {
    return '<div class="ez-card" id="<%- cardId %>-container">\n  <% if (cardTitle) { %>\n    <h2 class="card-title"><%- cardTitle %></h2>\n  <% } %>\n  <div class="article article-inner card-body" id="<%- cardId %>">\n    <%= innerCardHtml %>\n  </div>\n\n  <div class="ez-button-container" data-card-id="<%- cardId %>">\n    <a title="<%- forwardText %>" alt="Save and Continue"\n        class="ez-save-button btn btn-lg btn-success">\n      <%- forwardText %>\n    </a>\n    <a title="Edit" alt="Edit" class="ez-edit-button btn btn-lg btn-inverse">\n      Edit\n    </a>\n  </div>\n</div>\n'
}), define("views/card-view", ["backbone-validation", "jquery-maskedinput", "jquery-placeholder", "bootstrap-tooltip", "bootstrap-popover", "bootstrap-popover-override", "common/constants", "util/analytics", "util/app-context", "util/grammar", "util/strings", "util/partials", "text!templates/card-container.html"], function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
    var p = _.memoize(function() {
        var e = $("<input>")[0];
        return e.placeholder !== undefined
    }), d = Backbone.View.extend({templateText: null,cardName: "",submissionProgressAmountDone: 0,className: "lite-card",events: {"click a": "onLinkClick","click .dropdown-menu a": "onDropdownMenuItemClick"},partials: c,initialize: function(e) {
        this.options = e || {}, this.cardName = this.options.cardName || this.cardName, this.router = this.options.router, this.model && this.bindValidationEvents(this.model), this.subViews = []
    },bindValidationEvents: function(e, t) {
        t || (t = "tendon:"), this.listenTo(e, "invalid", function(e, n) {
            this.renderInvalidMarkers(t, n)
        }, this), this.listenTo(e, "valid", function(e, n) {
            this.clearInvalidMarkers(t, n)
        }, this), _.each(e.attributes, function(e, n) {
            e && _.isFunction(e.initialize) && this.bindValidationEvents(e, t + n + "."), e && _.isArray(e) && _.each(e, function(e, r) {
                e && _.isFunction(e.initialize) && this.bindValidationEvents(e, t + n + "[" + r + "].")
            }, this)
        }, this)
    },_scrollTo: function(e) {
        e && e.length > 0 && $("html, body").animate({scrollTop: e.offset().top}, 400)
    },_normalizeCheckboxVal: function(e) {
        return e === "true" || e === "on" ? !0 : e === "false" ? !1 : e
    },_gatherFormInputs: function(e) {
        var t = {$regular: [],$radio: [],$checkbox: [],$bootstrapDropdown: []}, n;
        e ? n = this.$("input:visible,select:visible,select.lite-dropdown") : n = this.$("input,select,select.lite-dropdown");
        var r = _.each(n, function(e) {
            e.type === "checkbox" ? t.$checkbox.push(e) : e.type === "radio" ? t.$radio.push(e) : t.$regular.push(e)
        });
        _.each(t, function(e, n) {
            t[n] = $(e)
        });
        var i;
        e ? i = this.$(".btn:visible").children("input[type=checkbox]") : i = this.$(".btn").children("input[type=checkbox]"), t.$checkbox = t.$checkbox.add(i);
        var s;
        return e ? s = this.$(".btn:visible").children("input[type=radio]") : s = this.$(".btn").children("input[type=radio]"), t.$radio = t.$radio.add(s), e ? t.$bootstrapDropdown = t.$bootstrapDropdown.add(this.$('[data-toggle="dropdown"]:visible')) : t.$bootstrapDropdown = t.$bootstrapDropdown.add(this.$('[data-toggle="dropdown"]')), t
    },getFormData: function() {
        var e = this, t = this._gatherFormInputs(!0), n = {};
        t.$regular.each(function(e, t) {
            var r = $(this).attr("name"), i = _.isNull($(this).val()) ? null : $(this).val().trim(), s = $(this).data("type");
            i === "" ? i = null : s === "number" && (i = Number(i.replace(/,/g, ""))), r in n ? (_.isArray(n[r]) || (n[r] = [n[r]]), n[r].push(i)) : n[r] = i
        });
        var r = _.groupBy(t.$checkbox, "name");
        _.each(r, function(t, r) {
            var i = t.length === 1, s = _.filter(t, function(e) {
                return $(e).is(":checked")
            });
            i ? s.length === 1 ? n[r] = e._normalizeCheckboxVal($(s[0]).val()) : n[r] = !1 : (n[r] = [], _.each(s, function(t) {
                n[r].push(e._normalizeCheckboxVal($(t).val()))
            }))
        });
        var i = _.groupBy(t.$radio, "name");
        return _.each(i, function(e, t) {
            var r = _.find(e, function(e) {
                return $(e).is(":checked")
            }), i;
            r ? (i = $(r).val(), i === "true" ? i = !0 : i === "false" && (i = !1)) : i = undefined, n[t] = i
        }), _.each(t.$bootstrapDropdown, function(e) {
            var t = $(e), r = t.attr("name");
            if (!r)
                return;
            var i = t.siblings(".dropdown-menu").find("a").filter(function() {
                return $(this).text().trim() === t.text().trim()
            }).first().data("value");
            n[r] = i
        }), n
    },getContent: function(e) {
        return _.extend(l.getGroup("common"), l.getGroup(e || this.cardName))
    },renderTemplate: function(e, t) {
        var n = this.getContent();
        return t = _.extend({content: n,options: {},defaultValue: function(e, t) {
            return !_.isUndefined(e) && !_.isNull(e) ? e : t
        }}, t || {}), _.template(e, t)
    },getRenderData: function() {
        var e = this.partials || {}, t = this;
        return {AppContext: a,Grammar: f,Strings: l,model: this.model,partial: function(n, r) {
            return t.renderTemplate(e[n], _.extend(t.getRenderData(), r))
        }}
    },render: function() {
        return this.$el.html(this.renderTemplate(this.templateText, this.getRenderData())), this.postRenderHooks(), this
    },renderInvalidMarkers: function(e, t) {
        _.each(t, function(t, n) {
            this.renderInvalidMarker(e + n, t)
        }, this)
    },renderAnnotation: function(e, t, n) {
        var r = t || "";
        e.find(".help-block").length === 0 && (e.is(".filter-question") ? e.children(".toggle-buttons").after("<span class='help-block error-message'></span>") : e.append("<p class='help-block error-message'></p>"));
        var i = e.find(".help-block");
        return i.attr("aria-live", "polite"), n ? i.html(r) : i.text(r), i
    },_getControl: function(e) {
        return _.isString(e) ? (e = e.replace(/(:|\.|\[|\])/g, "\\$1"), this.$('[name="' + e + '"]')) : e
    },renderInvalidMarker: function(e, t, n) {
        var r = this._getControl(e), i = r.closest(".form-group");
        r.attr("aria-invalid", "true"), i.addClass("has-error");
        if (r.data("error-style") === "tooltip") {
            var s = r.data("tooltip-position") || "right";
            r.tooltip({placement: s,trigger: "manual",title: t}), r.tooltip("show")
        } else
            this.renderAnnotation(i, t, n);
        i.find(".icon-ok").addClass("hidden"), i.find(".icon-error").removeClass("hidden")
    },clearInvalidMarkers: function(e, t) {
        _.each(t, function(t, n) {
            this.clearInvalidMarker(e + n)
        }, this)
    },clearInvalidMarker: function(e, t) {
        var n = this._getControl(e), r = n.closest(".form-group");
        n.attr("aria-invalid", "false"), r.removeClass("has-error");
        if (n.data("error-style") === "tooltip")
            n.data("tooltip") && n.tooltip("hide");
        else if (n.data("error-style") === "inline")
            r.find(".help-inline.error-message").remove();
        else {
            var i = r.find(".help-block.error-message");
            i.closest(".form-group").hasClass("has-error") || i.text("")
        }
        (t === undefined || t) && r.find(".icon-ok").removeClass("hidden"), r.find(".icon-error").addClass("hidden")
    },getModelField: function(e) {
        return this._getOrSetModelField(this.model, e)
    },setModelFields: function(e, t) {
        return this._getOrSetModelField(this.model, e, t)
    },_getOrSetModelField: function(e, t, n) {
        var r = e, i = t === "" ? [] : t.split("."), s = null, o = arguments.length === 3;
        for (var u = 0; u < i.length; u++) {
            if (!r)
                return;
            var a = i[u].match(/([A-z]+)\[(\d+)\]/), f = a !== null;
            s = f ? a[1] : i[u];
            var l = r.get(s) && _.isFunction(r.get(s).at), c = _.isArray(r.get(s)), h = u === i.length - 1;
            if (!_.has(r.attributes, s))
                throw new Error("Tried to fetch path " + t + " of object " + JSON.stringify(e) + ', but "' + s + '" does not exist.');
            if (f && !c && !l)
                throw new Error("Tried to fetch path " + t + " of object " + JSON.stringify(e) + ', but "' + s + '" is not an array.');
            if (f && h && !o)
                throw new Error("Tried to fetch path " + t + " of object " + JSON.stringify(e) + ", but the last part of the path cannot be an array reference.");
            if (f) {
                var p = parseInt(a[2], 10);
                l ? r = r.get(s).at(p) : c && (r = r.get(s)[p])
            } else if (o || !h)
                r = r.get(i[u])
        }
        if (!r)
            throw new Error("Unable to find field " + t);
        return o ? (results = r.set(n, {validate: _.keys(n)}), results !== !1) : r.get(s)
    },renderSubView: function(e, t) {
        var n = new e(_.extend({model: this.model,onSuccess: this.options.onSuccess,superView: this}, t || {}));
        return n.render().$el.insertAfter(this.$el), $("html, body").animate({scrollTop: n.$el.offset().top}, 800), this.subViews.push(n), n
    },remove: function() {
        return _.each(this.subViews, function(e) {
            e.remove()
        }), Backbone.View.prototype.remove.call(this)
    },saveToModel: function(e) {
        var t = this, n = this.getFormData();
        e && (n = _.pick(n, "tendon:" + e));
        var r = {};
        _.each(n, function(e, t) {
            if (t.indexOf("tendon:") === 0) {
                t = t.substring("tendon:".length, t.length);
                var n = t.lastIndexOf(".") >= 0 ? t.substring(0, t.lastIndexOf(".")) : "", i = _.last(t.split("."));
                _.has(r, n) || (r[n] = {}), r[n][i] = e
            }
        });
        var i = !0;
        return _.each(r, function(e, n) {
            i &= t.setModelFields(n, e)
        }), i
    },preValidate: function(e) {
        var t = this.getFormData(), n = e.substring("tendon:".length, e.length), r = {};
        r[n] = t[e], n === "password" && (r.email = t["tendon:email"]);
        var i = this.model.validate(r, {validate: [n]});
        return i && i[n] ? (this.renderInvalidMarker(e, i[n]), !1) : (this.clearInvalidMarker(e), !0)
    },loadFromModel: function() {
        var e = this._gatherFormInputs(!1), t = [];
        _.each(e.$regular, function(e) {
            var n = e.name;
            if (n.indexOf("tendon:") !== 0)
                return;
            var r = this.getModelField(n.slice("tendon:".length));
            if (_.isNull(r))
                return;
            var i = $(e);
            !p() && i.data("placeholder") && t.push(e), i.val(r)
        }, this), $(t).trigger("focusout");
        var n = _(e.$checkbox).filter(function(e) {
            return e.name.indexOf("tendon:") === 0
        }).groupBy("name").value();
        _.each(n, function(e, t) {
            var n = e.length === 1, r = this.getModelField(t.slice("tendon:".length));
            if (n)
                $(e).prop("checked", !!r), $(e).closest(".btn").toggleClass("active", !!r);
            else {
                var i = {};
                _.each(r, function(e) {
                    i[e] = 1
                }), _.each(e, function(e) {
                    var t = $(e), n = !!i[t.val()];
                    t.prop("checked", n), t.closest(".btn").toggleClass("active", n)
                })
            }
        }, this);
        var r = _(e.$radio).filter(function(e) {
            return e.name.indexOf("tendon:") === 0
        }).groupBy("name").value();
        _.each(r, function(e, t) {
            var n = String(this.getModelField(t.slice("tendon:".length)));
            _.each(e, function(e) {
                var t = $(e), r = t.val() === n;
                t.prop("checked", r), t.closest(".btn").toggleClass("active", r)
            })
        }, this), _.each(e.$bootstrapDropdown, function(e) {
            var t = $(e), n = t.attr("name");
            if (!n || n.indexOf("tendon:") !== 0)
                return;
            var r = this.getModelField(n.slice("tendon:".length)), i = t.siblings(".dropdown-menu").find("a").filter(function() {
                return $(this).data("value") === r
            }).first();
            if (i.length <= 0)
                return;
            t.find(".dropdown-name").text(i.text())
        }, this)
    },postRenderHooks: function() {
        var e = this;
        if (!p()) {
            var t = {visibleToScreenreaders: !0,hideOnFocus: !1};
            _.defer(function() {
                e.$("input[placeholder],textarea[placeholder]").placeHolder(t)
            })
        }
        this.$("input[data-mask]").each(function(e, t) {
            var n = $(t);
            n.mask(n.data("mask"), {placeholder: " "})
        }), this.postPopoverRender()
    },postPopoverRender: function() {
        this.$(".help-popover").popover({trigger: "click hover manual",placement: "auto",delay: {show: 300,hide: 500}}).keydown(function(e) {
            if (e.which === 32 || e.which === 13)
                e.preventDefault(), $(this).popover("show")
        }), this.$("input, a, select").focus(function(e) {
            self.$(".help-popover").popover("hide")
        })
    },onLinkClick: function(e) {
        var t = $(e.target).data("route");
        if (!t || !this.router)
            return;
        e.preventDefault(), this.router.navigate(t, {trigger: !0})
    },onDropdownMenuItemClick: function(e) {
        var t = $(e.currentTarget), n = t.text(), r = t.data("value"), i = t.closest(".dropdown-menu").siblings('[data-toggle="dropdown"]');
        i.find(".dropdown-name").text(n), this.saveToModel(i.attr("name").slice("tendon:".length)), i.focus()
    },updateProgress: function(e, t) {
        var n = this.getContent("progress-bar").progressBarMessages, r = n[e];
        t > this.submissionProgressAmountDone && (this.submissionProgressAmountDone = t), this.$(".submit-progress-message").text(r);
        var i = 5 + this.submissionProgressAmountDone * 95;
        this.$(".progress-bar").width(i + "%").attr("aria-valuenow", i)
    },beginSubmitting: function() {
        this._disableForm(), this.$(".submit-button-container").addClass("hidden"), this.$(".submitting-button-container").removeClass("hidden"), this.$(".submit-error-message").addClass("hidden"), this.$(".submit-progress-message").removeClass("hidden"), this.updateProgress("", 0), this.$(".progress-bar").addClass("submitting")
    },finishSubmitting: function(e, t, n) {
        u.track(e + " Success"), this.updateProgress("", 1), this.$(".progress-bar").removeClass("submitting"), this.$(".progress-information").removeClass("visible"), this.$(".progress-success").addClass("visible"), this.$(".progress-text").text(this.getContent().submittedButton), _.delay(t, n)
    },errorSubmitting: function(e, t) {
        t = t || {};
        if (!e) {
            var n = this.getContent(), r = n.submissionError || {};
            e = r.defaultError || n.loadingError
        }
        t.preventResubmit ? this._preventResubmit() : this._enableForm(), this.$(".submitting-button-container").addClass("hidden"), this.$(".submit-progress-message").addClass("hidden"), this.$(".submit-button-container").removeClass("hidden"), this.$(".submit-error-message").removeClass("hidden").html(e), this.$(".progress-bar").removeClass("submitting")
    },_disableForm: function() {
        this.$(".click-cover").removeClass("hidden"), this.$(".btn-submit").prop("disabled", !0), this.$(".summary-information").css({opacity: .5})
    },_enableForm: function() {
        this.$(".click-cover").addClass("hidden"), this.$(".btn-submit").prop("disabled", !1), this.$(".summary-information").css({opacity: 1})
    },_preventResubmit: function() {
        this.$(".click-cover").addClass("hidden"), this.$(".btn-submit").prop("disabled", !0), this.$(".summary-information").css({opacity: 1}), this.$(".submit-button-container").css({opacity: .5})
    }});
    return d
}), define("text!templates/warn-session-timing-out.html", [], function() {
    return '<div class="warn-timeout modal fade" tabindex="-1" role="dialog" aria-hidden="false">\n  <div class="modal-dialog">\n    <form class="group">\n      <div class="modal-header row">\n        <div class="col-xs-12">\n          <h2 class="sub pull-left"><%- content.areYouStillThere %></h2>\n          <div class="glyphicon close" aria-hidden="true" data-dismiss="modal">\n            <span class="glyphicon-remove" aria-hidden="true"></span>\n          </div>\n        </div>\n        <div class="col-xs-12">\n          <p><%- content.clickContinueToContinueApplication %></p>\n          <p><%- content.weWillLogYouOutInAFewMinutes %></p>\n        </div>\n      </div>\n      <div class="modal-footer">\n        <input title="<%- content.logoutNowButton %>"\n               class="btn btn-md btn-yellow next pull-left btn-logout"\n               type="cancel"\n               value="<%- content.logoutNowButton %>"/>\n        <input title="<%- content.continueButton %>"\n               data-dismiss="modal"\n               class="btn btn-md btn-green next pull-right"\n               type="cancel"\n               value="<%- content.continueButton %>"/>\n      </div>\n    </form>\n  </div>\n</div>\n'
}), define("views/warn-session-timing-out-view", ["backbone", "views/card-view", "text!templates/warn-session-timing-out.html"], function(e, t, n) {
    var r = t.extend({templateText: n,className: t.prototype.className,cardName: "warn-session-timing-out",events: _.extend({}, t.prototype.events, {"click .btn-logout": "_onLogoutClick"}),_onLogoutClick: function() {
        this.router.logout()
    }});
    return r
}), define("session-timer", ["backends/jsessionid-refresher", "models/ridp-model", "underscore", "views/warn-session-timing-out-view"], function(e, t, n, r) {
    var i = function(e, t) {
        n.bindAll(this), this.options = t || {}, this.router = e, this.initSessionRefreshers(), this.initSessionIdleTimers(), this.initSessionWarningView()
    };
    return i.prototype.initSessionRefreshers = function() {
        var t = {logoutDetected: this.logoutDetected};
        this.marketplaceRefresher = e.createMarketplaceRefresher(t).keepAlive(), this.eeRestRefresher = e.createEERestRefresher(t).keepAlive()
    }, i.prototype.logoutDetected = function() {
        console.log("Detected that the user logged out or timed out of ffm - logging out"), this.router.logout()
    }, i.prototype.initSessionIdleTimers = function(e, t) {
        var n = $(this.options.elementToMonitorForIdle || document);
        e = e || this.options.warnIdleMs || 15e5, console.warn("Setting warnIdleMs=" + e);
        var r = {idle: e,onIdle: this.options.idleWarn || this.idleWarn,onShow: this.checkLoggedIn};
        t = t || this.options.timeoutIdleMs || 18e5, console.warn("Setting timeoutIdle=" + t);
        var i = {idle: t,onIdle: this.options.idleTimeout || this.idleTimeout};
        this.warnTimer = n.idle(r), this.logoutTimer = n.idle(i)
    }, i.prototype.idleWarn = function() {
        console.warn("Warning user that their session is about to time out." + new Date);
        var e = $(".warn-timeout");
        e && e.modal && e.modal("show")
    }, i.prototype.idleTimeout = function() {
        console.warn("Session timeout reached - logging out now." + new Date), this.router && this.router.logout()
    }, i.prototype.checkLoggedIn = function() {
        console.warn("Window just became visible - checking if we are logged in." + new Date), this.eeRestRefresher && this.eeRestRefresher.keepAlive()
    }, i.prototype.initSessionWarningView = function() {
        return this.warningView = new r({model: new t,router: this.router}), this.warningView
    }, i.prototype.appendSessionWarningView = function() {
        return $("#warn-session-timing-out-modal").html(this.warningView.render().el), this.warningView.delegateEvents(), this.warningView
    }, i
}), define("text!templates/forms/_applicant-checklist.html", [], function() {
    return '<div class="question form-group <% if (options.questionClass) { %><%- options.questionClass %><% } %>" data-question="<%- question %>">\n  <div class="question-label">\n    <% if (options.highlights) { %>\n      <%= partial(\'help/_popover-highlight\', {\n        label: label,\n        highlights: options.highlights\n      }) %>\n    <% } else if (options.help) { %>\n      <%= partial(\'help/_popover-label\', {\n        label: label,\n        content: options.help,\n        options: { append: true, escapePopover: false }\n      }) %>\n    <% } else { %>\n      <%- label %>\n    <% } %>\n  </div>\n  <div>\n    <% _.each(model.getIndexedPeopleApplyingForInsurance(), function(indexedPerson) { %>\n      <%\n        var i = indexedPerson[1];\n        var person = indexedPerson[0];\n      %>\n      <div class="checkbox">\n        <label>\n          <input type="checkbox"\n            name="tendon:people[<%- i %>].<%= question %>"\n            value="true"\n            <%= (i === 0 && options.autofocus) ? \'autofocus\' : \'\' %>\n            data-person-index="<%- i %>">\n          <%- person.getFullName() %>\n        </label>\n        <%\n        /* The "extra" input(s) below is only displayed when extra info is required\n            for every applicant.\n\n            This is currently only used for special enrollment period questions.\n            If you want to use this elsewhere, it should be extracted into its\n            own view since it has associated code (to make it appear and\n            disappear when its checkbox is checked). Look at TableFormView for\n            an example of a view that is applied to multiple partials.\n        */\n        if (options.askForDate) { %>\n          <div class="question form-group row hidden">\n            <div class="question-label col-sm-12">\n              <% if (options.askForDate.help) { %>\n                <%= partial(\'help/_popover-label\', {\n                  label: Strings.format(options.askForDate.label, person.get(\'firstName\')),\n                  content: Strings.format(options.askForDate.help, person.get(\'firstName\')),\n                  options: { append: true, escapePopover: false }\n                }) %>\n              <% } %>\n            </div>\n            <div class="form-group col-sm-3 col-xs-8">\n              <input class="form-control" name="tendon:people[<%- i %>].<%= options.askForDate.question %>" type="tel" maxlength="25" placeholder="MM/DD/YYYY" aria-label="MM/DD/YYYY" data-mask="99/99/9999">\n            </div>\n          </div>\n        <% }\n        if (options.askForZip) { %>\n          <div class="question form-group row hidden">\n            <div class="question-label col-sm-12"><%- Strings.format(options.askForZip.label, person.get(\'firstName\')) %></div>\n            <div class="form-group col-sm-3 col-xs-8">\n               <input class="form-control" name="tendon:people[<%- i %>].<%= options.askForZip.question %>" type="tel" maxlength="5" placeholder="<%- content.zipCode %>" aria-label="<%- content.zipCode %>">\n            </div>\n          </div>\n        <% } %>\n      </div>\n    <% }) %>\n  </div>\n</div>\n'
}), define("text!templates/additional-coverage-questions.html", [], function() {
    return '<%\n  // TODO(lorenyu): use moment.js library for all datetime stuff\n  var sixtyDaysAgo = new Date(new Date().getTime() - 1000*60*60*24*60);\n  var sixtyDaysAgoStr = (sixtyDaysAgo.getMonth()+1) + \'/\' + sixtyDaysAgo.getDate() + \'/\' + sixtyDaysAgo.getFullYear();\n  var sixtyDaysFromNow = new Date(new Date().getTime() + 1000*60*60*24*60);\n  var sixtyDaysFromNowStr = (sixtyDaysFromNow.getMonth()+1) + \'/\' + sixtyDaysFromNow.getDate() + \'/\' + sixtyDaysFromNow.getFullYear();\n%>\n<div class="lite-card-inner container" aria-live="polite" aria-atomic="false">\n\n  <% _.each(model.getIndexedPeopleApplyingForInsurance(), function(indexedPerson) { %>\n    <%\n      var i = indexedPerson[1];\n      var person = indexedPerson[0];\n    %>\n    <fieldset class="person-coverage-section" data-person-index="<%- i %>">\n      <legend><%- Strings.format(content.personCoverage, person.getFullName()) %></legend>\n\n      <div class="question clearfix currently-covered-question">\n        <div class="question-label">\n          <%= partial(\'help/_popover-label\', {\n              label: Strings.format(content.personEnrolled, person.getFullName()),\n              content: content.personEnrolledHelp,\n              options: { append: true }\n            }) %>\n        </div>\n        <%= partial(\'forms/_toggle-buttons\', {\n          name: \'\',\n          items: [\n            {value: true, label: content.yes},\n            {value: false, label: content.no}\n          ],\n          options: {selectedValue: _.isNull(person.get(\'currentCoverage\')) ? null : person.get(\'currentCoverage\').length > 0}\n        }) %>\n      </div>\n\n      <div class="form-group existing-coverage-types hidden spacer-top20">\n        <div class=""><%- Strings.format(content.whatType, person.getFullName()) %></div>\n\n        <% _.each(content.COVERAGE_TYPES, function(type, key) { %>\n          <div class="form-group checkbox">\n            <label>\n              <input type="checkbox" name="tendon:people[<%- i %>].currentCoverage" value="<%- key %>">\n              <% if (!_.isUndefined(content.COVERAGE_TYPES_HELP[key])) { %>\n                <%= partial(\'help/_popover-label\', {\n                  label: type,\n                  content: content.COVERAGE_TYPES_HELP[key],\n                  options: { append: true }\n                }) %>\n              <% } else { %>\n                <%= type %>\n              <% } %>\n            </label>\n          </div>\n        <% }) %>\n        <div class="other-coverage question checkbox hidden">\n          <div class="form-group row">\n            <div class="form-group col-sm-3 col-xs-3">\n              <input class="form-control" name="tendon:people[<%- i %>].otherCoverageName"\n                type="text" placeholder="<%- content.otherCoverageName %>" aria-label="<%- content.otherCoverageName %>">\n            </div>\n            <div class="form-group col-sm-3 col-xs-3">\n              <input class="form-control" name="tendon:people[<%- i %>].otherCoveragePolicyNumber"\n                type="text" maxlength="255" placeholder="<%- content.otherCoveragePolicy %>" aria-label="<%- content.otherCoveragePolicy %>">\n            </div>\n            <div class="checkbox">\n              <div class="form-group col-sm-12">\n                <label>\n                  <input type="checkbox" name="tendon:people[<%- i %>].isOtherCoverageLimited">\n                    <%- content.otherCoverageLimited %>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <% if (person.getAge() < 19 && chipWaitingPeriod > 0) { %>\n        <div class="question clearfix spacer-top20">\n          <div class="question-label">\n            <% if (chipWaitingPeriod > 1) { %>\n              <%- Strings.format(content.personLostMedicaidCoverage, person.getFullName(), chipWaitingPeriod) %>\n            <% } else { %>\n              <%- Strings.format(content.personLostMedicaidCoverageOneMonth, person.getFullName()) %>\n            <% } %>\n          </div>\n          <%= partial(\'forms/_toggle-buttons\', {\n            name: \'tendon:people[\' + i + \'].lostMedicaidCoverage\',\n            items: [\n              {value: true, label: content.yes},\n              {value: false, label: content.no}\n            ]\n          }) %>\n        </div>\n      <% } %>\n\n    </fieldset>\n  <% }) %>\n\n  <fieldset>\n    <legend><%- content.additionalCoverageQuestions %></legend>\n    <% if (model.hasDependents()) { %>\n      <div class="form-group filter-question">\n        <div class="visible-radio-label"><%- content.childOutsideHome %></div>\n        <div data-toggle="buttons" class="toggle-buttons">\n          <a href="javascript:;" class="btn radio-label">\n            <input type="radio" name="tendon:parentOutsideHousehold" value="true" aria-label="<%- content.yes %>"> <%- content.yes %>\n          </a>\n          <a href="javascript:;" class="btn radio-label">\n            <input type="radio" name="tendon:parentOutsideHousehold" value="false" aria-label="<%- content.no %>"> <%- content.no %>\n          </a>\n        </div>\n      </div>\n    <% } %>\n    <div id="not-medicaid-chip-eligible" class="spacer-top20">\n      <%= partial(\'forms/_applicant-checklist\', {\n        model: model,\n        label: content.notMedicaidCHIPEligible.replace(\'{date}\',\n          content[notMedicaidCHIPEligibleDateKey]),\n        question: \'notMedicaidCHIPEligible\',\n        options: {\n          highlights: content.notMedicaidCHIPEligibleHelpHighlights\n        }\n      }) %>\n    </div>\n    <div id="applied-at-state-during-open-enrollment-question" class="spacer-top20 hidden">\n      <%= partial(\'forms/_applicant-checklist\', {\n        model: model,\n        label: content.appliedAtStateDuringOEP.replace(\'{dateRange}\',\n          content[appliedAtStateDuringOEPDateKey]),\n        question: \'appliedAtStateDuringOEP\'\n      }) %>\n    </div>\n  </fieldset>\n\n  <fieldset class="special-enrollment-questions">\n    <legend class="has-subtitle"><%- content.specialEnrollmentHeader %></legend>\n    <p class="instructions">\n      <%= content.specialEnrollmentInstructions %>\n    </p>\n    <div class="form-group">\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.lostCoverage, sixtyDaysAgoStr),\n            question: \'lostCoverage\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenLostCoverage,\n                question: \'lostCoverageDate\'\n              },\n              help: content.specialEnrollmentQuestions.lostCoverageHelp\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.willLoseCoverage, sixtyDaysFromNowStr),\n            question: \'willLoseCoverage\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenWillLoseCoverage,\n                question: \'willLoseCoverageDate\',\n                help: content.specialEnrollmentQuestions.whenWillLoseCoverageHelp\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.gotMarried, sixtyDaysAgoStr),\n            question: \'gotMarried\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenGotMarried,\n                question: \'gotMarriedDate\'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.released, sixtyDaysAgoStr),\n            question: \'released\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenReleased,\n                question: \'releasedDate\'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.gainedImmigrationStatus, sixtyDaysAgoStr),\n            question: \'gainedImmigrationStatus\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenGainedImmigrationStatus,\n                question: \'gainedImmigrationStatusDate\'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.adopted, sixtyDaysAgoStr),\n            question: \'adopted\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenAdopted,\n                question: \'adoptedDate\'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial(\'forms/_applicant-checklist\', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.moved, sixtyDaysAgoStr),\n            question: \'moved\',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenMoved,\n                question: \'movedDate\'\n              },\n              askForZip: {\n                label: content.specialEnrollmentQuestions.whereMoved,\n                question: \'previousZipCode\'\n              }\n            }\n          }) %>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset class="eligibility-renewal-questions">\n    <legend class="has-subtitle"><%- content.eligibilityRenewal %></legend>\n    <p class="instructions">\n      <%= partial(\'help/_popover-label\', {\n        label: content.eligibilityRenewalMessage,\n        content: content.eligibilityRenewalMessageHelp.content,\n        options: {\n          append: true,\n          externalLink: content.eligibilityRenewalMessageHelp.externalLink,\n          externalText: content.eligibilityRenewalMessageHelp.externalText\n        }\n      }) %>\n    </p>\n    <div data-toggle="buttons" class="clearfix prefill-renew-eligibility">\n      <%= partial(\'forms/_toggle-buttons\', {\n        name: \'tendon:agreedToRenewEligibility\',\n        items: [\n          {value: \'true\', label: content.agree},\n          {value: \'false\', label: content.disagree}\n        ]\n      }) %>\n    </div>\n    <div class="hidden spacer-top20 eligibility-renewal-years">\n      <div class="question-label">\n        <%- content.eligibilityRenewalClarification %>\n      </div>\n      <p class="instructions">\n        <%- content.noRenewalWarning %>\n      </p>\n      <%= partial(\'forms/_toggle-buttons\', {\n        name: \'tendon:numYearsForEligibilityRenewal\',\n        items: [\n          { value: \'5\', label: \'5 \' + Grammar.pluralize(content.year, 5) },\n          { value: \'4\', label: \'4 \' + Grammar.pluralize(content.year, 4) },\n          { value: \'3\', label: \'3 \' + Grammar.pluralize(content.year, 3) },\n          { value: \'2\', label: \'2 \' + Grammar.pluralize(content.year, 2) },\n          { value: \'1\', label: \'1 \' + Grammar.pluralize(content.year, 1) },\n          { value: \'0\', label: content.dontRenew }\n        ],\n        options: {\n          className: \'btn-group-vertical form-group\'\n        }\n      }) %>\n    </div>\n  </fieldset>\n\n  <div class="row">\n    <div class="form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper">\n      <button class="btn btn-lg btn-success btn-submit"><%- content.reviewApplication %></button>\n    </div>\n  </div>\n\n</div>\n'
}), define("views/additional-coverage-questions-view", ["views/card-view", "common/data/states", "text!templates/forms/_applicant-checklist.html", "text!templates/additional-coverage-questions.html", "util/analytics"], function(e, t, n, r, i) {
    var s = e.extend({templateText: r,cardName: "additional-coverage-questions",className: e.prototype.className + " additional-coverage-questions",partials: _.extend({}, e.prototype.partials, {"forms/_applicant-checklist": n}),events: _.extend({}, e.prototype.events, {"click .btn-submit": "_onSubmitClicked",'change .currently-covered-question input[type="radio"]': "_onCurrentlyCoveredChanged",'change .existing-coverage-types input[type="checkbox"]': "_onExistingCoverageTypeChanged",'change .special-enrollment-questions input[type="checkbox"]': "_onSpecialEnrollmentQuestionCheckboxChanged","change .existing-coverage-types input": "_onCoverageSelection",'change [name="tendon:agreedToRenewEligibility"]': "_onEligibilityRenewalChanged","change #not-medicaid-chip-eligible input": "_onMedicaidCHIPIneligibleChanged"}),initialize: function(t) {
        e.prototype.initialize.call(this, t), i.track("MPL App Additional Qs 2 Load"), _.each(this.model.get("people"), function(e, t) {
            this.bindValidationEvents(e, "tendon:people[" + t + "].")
        }, this), this.onSuccess = t.onSuccess || function() {
        }
    },getRenderData: function() {
        var n = "notMedicaidCHIPEligibleDate" + this.model.get("coverageYear"), r = "appliedAtStateDuringOEPDate" + this.model.get("coverageYear");
        return _.extend(e.prototype.getRenderData.call(this), {chipWaitingPeriod: t.getChipWaitingPeriod(this.model.get("coverageState")),notMedicaidCHIPEligibleDateKey: n,appliedAtStateDuringOEPDateKey: r})
    },postRenderHooks: function() {
        e.prototype.postRenderHooks.apply(this, arguments), this.loadFromModel(), this.$(".question").filter(function() {
            return $(this).closest(".checkbox").find('input[type="checkbox"]').prop("checked")
        }).removeClass("hidden");
        var t = this.model.get("agreedToRenewEligibility"), n = t === null ? !0 : t;
        this.$(".eligibility-renewal-years").toggleClass("hidden", n), _.each(this.model.getIndexedPeopleApplyingForInsurance(), function(e) {
            var t = e[1], n = e[0], r = n.get("currentCoverage"), i = ".person-coverage-section[data-person-index=" + t + "]";
            r && r.length > 0 && this.$(i + " .existing-coverage-types").removeClass("hidden"), r && r.indexOf("OTHER") !== -1 && this.$(i + " .other-coverage").removeClass("hidden")
        }, this)
    },_onCoverageSelection: function(e) {
        var t = $(e.target).attr("value");
        if (t === "MEDICAID") {
            if ($(e.target).parentsUntil(".existing-coverage-types").find(".message").length === 0) {
                var n = $("<div>").addClass("message alert alert-info").html(this.getContent().medicaidMessage);
                $(e.target).parentsUntil(".form-group").after(n)
            }
        } else if (t === "CHIP" && $(e.target).parentsUntil(".existing-coverage-types").find(".message").length === 0) {
            var n = $("<div>").addClass("message alert alert-info").html(this.getContent().chipMessage);
            $(e.target).parentsUntil(".form-group").after(n)
        }
    },_onCurrentlyCoveredChanged: function(e) {
        var t = $(e.currentTarget), n = t.closest(".person-coverage-section"), r = parseInt(n.data("person-index"), 10);
        n.find(".existing-coverage-types").toggleClass("hidden", t.val() !== "true"), t.val() === "false" && this.model.get("people")[r].clearCurrentCoverage()
    },_onExistingCoverageTypeChanged: function(e) {
        var t = $(e.target).attr("value");
        if (t === "OTHER") {
            var n = $(e.target).prop("checked");
            $(".other-coverage").toggleClass("hidden", !n)
        }
    },_onSpecialEnrollmentQuestionCheckboxChanged: function(e) {
        var t = $(e.currentTarget), n = t.prop("checked");
        t.closest(".checkbox").find(".question").toggleClass("hidden", !n)
    },_onEligibilityRenewalChanged: function() {
        var e = this.$('[name="tendon:agreedToRenewEligibility"]:checked').val() === "true";
        this.model.set("agreedToRenewEligibility", e, {validate: "agreedToRenewEligibility"}), this.$(".eligibility-renewal-years").toggleClass("hidden", e), e ? this.model.set({numYearsForEligibilityRenewal: 5}) : (this.model.set({numYearsForEligibilityRenewal: null}), this.$('[name="tendon:numYearsForEligibilityRenewal"]').each(function(e, t) {
            $el = $(t), $el.prop("checked", !1), $el.closest(".btn").removeClass("active")
        }))
    },_clearDeniedDuringOpenEnrollmentCheckbox: function(e) {
        var t = $('[name="tendon:people[' + e + '].appliedAtStateDuringOEP"]');
        t.prop("checked", !1)
    },_clearOpenEnrollmentCheckboxIfNecessary: function(e) {
        var t = $(e.currentTarget), n = !t.is(":checked");
        if (n) {
            var r = t.attr("data-person-index");
            this._clearDeniedDuringOpenEnrollmentCheckbox(r)
        }
    },_shouldHideOpenEnrollmentQuestion: function() {
        var e = this.$('#not-medicaid-chip-eligible input[type="checkbox"]:checked');
        return e.length === 0
    },_clearAllOpenEnrollmentCheckboxes: function() {
        $("#applied-at-state-during-open-enrollment-question input:checkbox").each(function(e, t) {
            t.checked = !1
        })
    },_showOpenEnrollmentQuestionIfNecessary: function(e) {
        var t = this.$("#applied-at-state-during-open-enrollment-question"), n = this._shouldHideOpenEnrollmentQuestion();
        t.toggleClass("hidden", n), n && this._clearAllOpenEnrollmentCheckboxes()
    },_onMedicaidCHIPIneligibleChanged: function(e) {
        this._showOpenEnrollmentQuestionIfNecessary(e), this._clearOpenEnrollmentCheckboxIfNecessary(e)
    },_onSubmitClicked: function(e) {
        e.preventDefault(), this.model.set("complete", !0);
        if (!this.saveToModel()) {
            this._scrollTo(this.$(".has-error").first()), this.$(".has-error input").first().focus(), i.track("MPL App Additional Qs 2 Invalid", {message: this.$(".has-error :first .error-message").text(),invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            return
        }
        if (!this.model.isValid()) {
            console.log("Unexpected validation failure!"), console.log(JSON.stringify(this.model.validationError)), i.track("MPL App Additional Qs 2 Invalid", {message: JSON.stringify(this.model.validationError)});
            return
        }
        var t = this.onSuccess;
        i.track("MPL App Additional Qs 2 Submit");
        var n = this.$(".btn-submit");
        n.prop("disabled", !0), this.model.save(null, {success: function(e, n, r) {
            i.track("MPL App Additional Qs 2 Success"), t()
        },error: function(e, t, n) {
            i.track("MPL App Additional Qs 2 Error", {message: t.status || "error saving"})
        },complete: function() {
            n.prop("disabled", !1)
        }})
    }});
    return s
}), define("text!templates/additional-questions.html", [], function() {
    return "<div class=\"lite-card-inner container\" aria-live=\"polite\" aria-atomic=\"false\">\n  <% if (model.get('ffmId')) { %>\n    <div class=\"pull-right\"><%- content.applicationId + ': ' + model.get('ffmId') %></div>\n  <% } %>\n  <h1 class=\"sub\"><%- content.additionalQuestionsTitle %></h1>\n  <div class=\"subtitle\"><%- content.additionalQuestionsSubtitle %></div>\n\n  <%= partial('forms/_applicant-checklist', {\n    model: model,\n    label: content.disabilityQuestion,\n    question: 'hasDisability',\n    options: {\n      questionClass: 'optional',\n      autofocus: true,\n      help: content.disabilityQuestionHelp\n    }\n  }) %>\n\n  <%= partial('forms/_applicant-checklist', {\n    model: model,\n    label: content.dailyActivitiesQuestion,\n    question: 'needsPhysicalAssistance',\n    options: {\n      questionClass: 'optional',\n      highlights: content.dailyActivitiesQuestionHelpHighlights\n    }\n  }) %>\n\n  <%= partial('forms/_applicant-checklist', {\n    model: model,\n    label: content.helpPayingQuestion,\n    question: 'wantRecentBillAssistance',\n    options: {\n      questionClass: 'optional',\n      help: content.helpPayingQuestionHelp\n    }\n  }) %>\n  <div class=\"row\">\n    <div class=\"form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper\">\n      <button class=\"btn btn-lg btn-success btn-submit\"><%- content.continueApplication %></button>\n    </div>\n  </div>\n</div>\n"
}), define("views/additional-questions-view", ["views/card-view", "views/additional-coverage-questions-view", "util/analytics", "text!templates/forms/_applicant-checklist.html", "text!templates/additional-questions.html"], function(e, t, n, r, i) {
    var s = e.extend({templateText: i,cardName: "additional-questions",className: e.prototype.className + " additional-questions blue-bg",partials: _.extend({}, e.prototype.partials, {"forms/_applicant-checklist": r}),events: _.extend({}, e.prototype.events, {"click .btn-submit": "_onSubmitClicked"}),initialize: function(t) {
        e.prototype.initialize.call(this, t), n.track("MPL App Additional Qs 1 Load"), _.each(this.model.get("people"), function(e, t) {
            this.bindValidationEvents(e, "tendon:people[" + t + "].")
        }, this)
    },postRenderHooks: function() {
        e.prototype.postRenderHooks.apply(this, arguments), this.loadFromModel()
    },saveToModel: function() {
        var t = this, n = this.$('input[type="checkbox"]').filter(function() {
            return !$(this).prop("checked")
        }).each(function() {
            var e = $(this).closest(".question").data("question"), n = $(this).data("person-index");
            t.model.get("people")[n].set(e, !1)
        });
        return e.prototype.saveToModel.apply(this, arguments)
    },_onSubmitClicked: function(e) {
        this.model.set("complete", !1);
        if (!this.saveToModel())
            return;
        if (!this.model.isValid()) {
            console.log("Unexpected validation failure!"), console.log(JSON.stringify(this.model.validationError)), n.track("MPL App Additional Qs 1 Invalid", {message: JSON.stringify(this.model.validationError)});
            return
        }
        var r = this;
        n.track("MPL App Additional Qs 1 Submit");
        var i = this.$(".btn-submit");
        i.prop("disabled", !0), this.model.save(null, {success: function(e, i, s) {
            var o = r.renderSubView(t);
            $("html, body").animate({scrollTop: o.$el.offset().top}, 800), _.defer(function() {
                $(".additional-coverage-questions a:first").focus()
            }), n.track("MPL App Additional Qs 1 Success")
        },error: function(e, t, r) {
            n.track("MPL App Additional Qs 1 Error", {message: "error saving"})
        },complete: function() {
            i.prop("disabled", !1)
        }}), e.preventDefault()
    }});
    return s
}), define("util/async-submit", ["common/util/ffm-util", "util/analytics", "util/app-context", "util/strings"], function(e, t, n, r) {
    var i = {_POLL_DELAY: 1e3,_pollSubmitStatus: function(i, s, o, u) {
        var a = this, f = i.getContent().submissionError || {};
        if (s > 6e5) {
            i.errorSubmitting(f.TIMEOUT);
            return
        }
        $.ajax(i.model.url() + "/status", {success: function(l, c, h) {
            if (l.location) {
                i.finishSubmitting(o, function() {
                    window.location = l.location
                }, 500);
                return
            }
            if (l.status && l.status.submission === "success" && u && l.ffmId) {
                i.finishSubmitting(o, function() {
                    i.model.set("ffmId", l.ffmId), u()
                }, 500);
                return
            }
            var p = l.error;
            if (p) {
                t.track(o + " Error", {message: p.errorType || c}), contentKey = p.errorType || c;
                var d = f[contentKey] || f.defaultError, v = {};
                if (contentKey === "DELAYED_RESPONSE") {
                    v.preventResubmit = !0;
                    var m = n.getLocale();
                    d = r.format(d, e.getManageApplicationsUrl(m))
                } else
                    contentKey === "LOGGED_OUT" && (d = i.getContent().loggedOutInfoSavedError);
                p.errorData && (v.preventResubmit = p.errorData.preventResubmit, d = r.format(d, p.errorData.url)), i.errorSubmitting(d, v);
                return
            }
            l.progressDescription && _.isNumber(l.progressAmountDone) && i.updateProgress(l.progressDescription, l.progressAmountDone), _.delay(function() {
                a._pollSubmitStatus(i, s + a._POLL_DELAY, o, u)
            }, a._POLL_DELAY)
        },error: function(e, t, n) {
            var r;
            try {
                var s = JSON.parse(e.responseText);
                r = s.errorType
            } catch (o) {
            }
            r = r || e.status;
            var u = f[r] || f.defaultError;
            i.errorSubmitting(u)
        }})
    },startSubmitThenPoll: function(e, n, r, i) {
        var s = this, o = e.getContent().submissionError || {};
        t.track(n + " Submit"), e.beginSubmitting(), $.ajax(r, {type: "post",contentType: "application/json",processData: !1,success: function(r, o, u) {
            t.track(n + " Started"), s._pollSubmitStatus(e, 0, n, i)
        },error: function(r, i, s) {
            t.track(n + " Error", {message: i});
            var u = o[r.status] || o.defaultError;
            e.errorSubmitting(u)
        }})
    }};
    return i
}), define("util/income", ["util/strings", "util/grammar", "models/income-source"], function(e, t, n) {
    function r() {
        return _.extend({}, e.getGroup("common"), e.getGroup("income-source-model"))
    }
    function i(e) {
        var t = r(), i = t.incomeTypes[e.get("type")], s = n.TYPE[e.get("type")];
        return s && s.description && (i += " / " + e.get("description")), s && s.employerPhoneNumber && (i += " (" + e.get("employerPhoneNumber") + ")"), i
    }
    function s(n) {
        var i = r(), s = e.format("${0} {1}", t.numberFormat(n.get("amount"), 2), i.frequencyInlineText[n.get("frequency")]);
        return n.get("frequencyMultiplier") && i.frequencyMultiplier[n.get("frequency")] && (s += e.format(" {0} {1} {2}", i.and, n.get("frequencyMultiplier"), i.frequencyMultiplier[n.get("frequency")])), s
    }
    return {formatType: i,formatAmount: s}
}), define("util/screener", ["underscore", "util/strings", "common/data/states"], function(e, t, n) {
    function s(t, n) {
        return e.isArray(t) ? e.map(t, n) : n.call(null, t)
    }
    function o(e) {
        var r = {coverageYear: e.get("coverageYear"),coverageState: n.getNameFromCode(e.get("coverageState"))};
        return function(e) {
            return t.format(e, r)
        }
    }
    var r = function(t) {
        var n = [], r = t.get("requireFinancialInfo"), i = t.get("isMarried"), s = t.hasDependents(), o = t.get("people")[0], u = t.get("people").length === 1, a = o.getAge(), f = [], l = [], c = [], h = [];
        (r || !u) && f.push("homeAddress"), f.push("citizen"), f.push("ssn"), r && f.push("filingTax"), s && (f.push("nuclear"), l.push("stepchild")), l.push("incarcerated"), l.push("native"), l.push("citizen2"), l.push("ssnDifferentName"), l.push("pregnant"), r && (l.push("eligibleViaEmployer"), i && !s && a >= 26 && c.push("under26"), (!u || a >= 18 && a <= 22) && h.push("hasStudent"), (!u || a >= 18 && a <= 25) && h.push("hasFosterChild"), h.push("nonDependentChild"), s && h.push("dependentOfUnmarried"));
        var p = [{name: "main",questions: f}, {name: "specials",questions: l}];
        return e.isEmpty(c) || p.push({name: "is-everyone-26-or-older",questions: c}), p.push({name: "child",questions: h}), p
    }, i = function(e, t) {
        var n = e.isMultiplePersonHousehold(), r = e.get("isMarried"), i = e.get("requireFinancialInfo"), s = n ? "Multi" : "", o = t + "Question" + s, u = t + "QuestionMarried" + s, a = t + "QuestionFA" + s, f = [];
        return r && f.push(u), i && f.push(a), f.push(o), f
    }, u = function(t, n, r) {
        var u = o(t), a = i(t, r);
        for (var f = 0, l = a.length; f < l; f++)
            if (!e.isUndefined(n[a[f]]))
                return s(n[a[f]], u);
        return "ERROR: content not found."
    }, a = function(t, n, r) {
        var i = o(t), s = r + "QuestionHelp";
        return e.isUndefined(n[s]) ? null : (n[s].content = i(n[s].content), n[s])
    };
    return {getScreenerQuestionKeys: i,getSectionedScreenerQuestions: r,getScreenerQuestionText: u,getScreenerQuestionHelp: a}
}), define("text!templates/application-summary/_applicant-checklist-summary.html", [], function() {
    return '<%\n  // TODO(kalvin): display the exact user-entered date that a condition occurred, instead of the default "on or after" language\n  // TODO(kalvin): display the zip code that a user moved to, if the user selected the zip code SEP\n  var peopleWithX =\n    _.filter(model.get(\'people\'), function(person) { return person.get(condition); });\n\n if (_.isEmpty(peopleWithX)) { %>\n    <div class="row spacer-bottom10">\n      <div class="col-sm-12">\n        <%- Strings.format(\n          conditionContent,\n          content.noOne,\n          verb.singular,\n          cutoffDate\n        ) %>\n      </div>\n    </div>\n  <% } else { %>\n    <div class="row spacer-bottom10">\n      <div class="col-sm-12">\n        <%- Strings.format(\n          conditionContent,\n          Grammar.buildConjunction(\n            _.invoke(peopleWithX, \'getFullName\'),\n            content.and\n          ),\n          Grammar.pluralize(\n            verb.singular,\n            peopleWithX.length,\n            verb.plural\n          ),\n          cutoffDate\n        ) %>\n      </div>\n    </div>\n  <% }\n%>\n'
}), define("text!templates/application-summary.html", [], function() {
    return '<%\n  // TODO(lorenyu): use moment.js library for all datetime stuff\n  var sixtyDaysAgo = new Date(new Date().getTime() - 1000*60*60*24*60);\n  var sixtyDaysAgoStr = (sixtyDaysAgo.getMonth()+1) + \'/\' + sixtyDaysAgo.getDate() + \'/\' + sixtyDaysAgo.getFullYear();\n  var sixtyDaysFromNow = new Date(new Date().getTime() + 1000*60*60*24*60);\n  var sixtyDaysFromNowStr = (sixtyDaysFromNow.getMonth()+1) + \'/\' + sixtyDaysFromNow.getDate() + \'/\' + sixtyDaysFromNow.getFullYear();\n%>\n\n<div class="blue-bg">\n  <div class="lite-card-inner spacer-bottom20" aria-live="polite" aria-atomic="false">\n    <% if (model.get(\'ffmId\')) { %>\n      <div class="pull-right"><%- content.applicationId + \': \' + model.get(\'ffmId\') %></div>\n    <% } %>\n    <h1 class="sub"><%- content.applicationSummary %></h1>\n    <div class="subtitle"><%- content.applicationSummaryInstructions %></div>\n  </div>\n</div>\n<div class="section">\n  <div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n\n    <div class="section summary-information household-contact">\n      <div class="section-heading blue-bg clearfix">\n        <h3 class="pull-left"><%- content.householdContact %></h3>\n        <a href=".." data-route="/" class="btn btn-green pull-right hidden-print"><%- content.edit %></a>\n      </div>\n      <div class="section-body">\n\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.fullName %></div>\n          <div class="col-xs-7 col-sm-9"><%- model.get(\'householdContact\').getFullName() %></div>\n        </div>\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.address %></div>\n          <div class="col-xs-7 col-sm-9">\n            <%- model.get(\'householdContact\').getFormattedStreet() %>\n            <br />\n            <%- model.get(\'householdContact\').getFormattedCityState() %>\n          </div>\n        </div>\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.phoneNumber %></div>\n          <div class="col-xs-7 col-sm-9"><%- model.get(\'householdContact\').getFormattedPhone() %></div>\n        </div>\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.emailAddress %></div>\n          <div class="col-xs-7 col-sm-9">\n            <%- model.get(\'householdContact\').get(\'emailAddress\') %>\n          </div>\n        </div>\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.updatesByEmail %></div>\n          <div class="col-xs-7 col-sm-9"><%- model.get(\'householdContact\').get(\'needInfoByEmail\') ? Grammar.capitalize(content.yes) : Grammar.capitalize(content.no) %></div>\n        </div>\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.preferredWrittenLanguage %></div>\n          <div class="col-xs-7 col-sm-9"><%- model.get(\'householdContact\').getLocalizedPreferredWrittenLanguage(content) %></div>\n        </div>\n        <div class="row table-row">\n          <div class="col-xs-5 col-sm-3 header-field"><%- content.preferredSpokenLanguage %></div>\n          <div class="col-xs-7 col-sm-9"><%- model.get(\'householdContact\').getLocalizedPreferredSpokenLanguage(content) %></div>\n        </div>\n        <% if (model.get(\'assister\')) { %>\n          <div class="row table-row">\n            <div class="col-xs-5 col-sm-3 header-field"><%- content.assister %></div>\n            <div class="col-xs-7 col-sm-9">\n              <%- model.get(\'assister\').getFullName() %>\n              <br>\n              <%- model.get(\'assister\').get(\'organizationName\') %>\n            </div>\n          </div>\n          <div class="row table-row">\n            <div class="col-xs-5 col-sm-3 header-field"><%- content.assisterIdNumber %></div>\n            <div class="col-xs-7 col-sm-9"><%- model.get(\'assister\').get(\'organizationId\') %></div>\n          </div>\n          <% if (model.get(\'assister\').get(\'nationalProducerNumber\')) { %>\n            <div class="row table-row">\n              <div class="col-xs-5 col-sm-3 header-field"><%- content.nationalProducerNumber %></div>\n              <div class="col-xs-7 col-sm-9"><%- model.get(\'assister\').get(\'nationalProducerNumber\') %></div>\n            </div>\n          <% } %>\n        <% } %>\n\n\n      </div>\n    </div>\n\n    <div class="section summary-information">\n      <div class="section-heading blue-bg clearfix">\n        <h3 class="pull-left"><%- content.householdMembers %></h3>\n        <a href=".." data-route="/" class="btn btn-green pull-right hidden-print"><%- content.edit %></a>\n      </div>\n      <div class="section-body">\n\n        <div class="row header-fields hidden-xs">\n          <div class="col-sm-3"><%- content.fullName %></div>\n          <div class="col-sm-3"><%- content.dateOfBirth %></div>\n          <div class="col-sm-2"><%- content.ssn %></div>\n          <div class="col-sm-2"><%- content.relationship %></div>\n          <div class="col-sm-2"><%- content.sex %></div>\n        </div>\n\n        <% _.each(model.getPeopleApplyingForInsurance(), function(person, i) { %>\n          <div class="row table-row <%- (i === 0) ? \'first\' : \'\' %>">\n\n            <div class="col-xs-5 visible-xs header-field"><%- content.fullName %></div>\n            <div class="col-xs-7 col-sm-3 spacer-bottom10"><%- person.getFullName() %></div>\n\n            <div class="col-xs-5 visible-xs header-field"><%- content.dateOfBirth %></div>\n            <div class="col-xs-7 col-sm-3 spacer-bottom10"><%- person.get(\'dob\') %></div>\n\n            <div class="col-xs-5 visible-xs header-field"><%- content.ssn %></div>\n            <div class="col-xs-7 col-sm-2 spacer-bottom10"><%- person.getMaskedSsn() %></div>\n\n            <div class="col-xs-5 visible-xs header-field"><%- content.relationship %></div>\n            <div class="col-xs-7 col-sm-2 spacer-bottom10"><%- person.getLocalizedRelationship(content) %></div>\n\n            <div class="col-xs-5 visible-xs header-field"><%- content.sex %></div>\n            <div class="col-xs-7 col-sm-2 spacer-bottom10"><%- person.getLocalizedSex(content) %></div>\n\n          </div>\n        <% }); %>\n\n      </div>\n    </div>\n\n    <% if (model.get(\'requireFinancialInfo\')) { %>\n\n      <div class="section summary-information">\n        <div class="section-heading blue-bg clearfix">\n          <h3 class="pull-left"><%- content.householdIncome %></h3>\n          <a href="income" data-route="income" class="btn btn-green pull-right\n            hidden-print"><%- content.edit %></a>\n        </div>\n\n        <div class="section-body">\n\n          <div class="row header-fields hidden-xs">\n            <div class="col-sm-4"><%- content.name %></div>\n            <div class="col-sm-4"><%- content.type %></div>\n            <div class="col-sm-4"><%- content.amount %></div>\n          </div>\n\n          <% _.each(model.get(\'people\'), function(person, i) { %>\n\n            <div class="row table-row <%- (i === 0) ? \'first\' : \'\' %>">\n\n              <% if (person.get(\'incomeSources\').isEmpty()) { %>\n                  <div class="col-xs-5 visible-xs header-field"><%- content.name %></div>\n                  <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- person.getFullName() %></div>\n\n                  <div class="col-xs-5 visible-xs header-field"><%- content.type %></div>\n                  <div class="col-xs-7 col-sm-4 spacer-bottom10">-</div>\n\n                  <div class="col-xs-5 visible-xs header-field"><%- content.amount %></div>\n                  <div class="col-xs-7 col-sm-4 spacer-bottom10">-</div>\n              <% } %>\n              <% person.get(\'incomeSources\').each(function(income, j) { %>\n                  <div class="col-xs-5 visible-xs header-field"><%- content.name %></div>\n                  <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- (j === 0) ? person.getFullName() : \'\' %></div>\n\n                  <div class="col-xs-5 visible-xs header-field"><%- content.type %></div>\n                  <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- IncomeUtil.formatType(income) %></div>\n\n                  <div class="col-xs-5 visible-xs header-field"><%- content.amount %></div>\n                  <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- IncomeUtil.formatAmount(income) %></div>\n              <% }) %>\n\n            </div>\n          <% }) %>\n\n        </div>\n      </div>\n\n      <% if (!_(model.get(\'people\')).invoke(\'get\', \'deductions\').invoke(\'isEmpty\').all()) { %>\n        <div class="section summary-information">\n          <div class="section-heading blue-bg clearfix">\n            <h3 class="pull-left"><%- content.householdDeductions %></h3>\n            <a href="income" data-route="income" class="btn btn-green\n              pull-right hidden-print"><%- content.edit %></a>\n          </div>\n          <div class="section-body">\n\n            <div class="row header-fields hidden-xs">\n              <div class="col-sm-4"><%- content.name %></div>\n              <div class="col-sm-4"><%- content.type %></div>\n              <div class="col-sm-4"><%- content.amount %></div>\n            </div>\n\n            <% _.each(model.get(\'people\'), function(person, i) { %>\n              <div class="row table-row <%- (i === 0) ? \'first\' : \'\' %>">\n\n                <% if (person.get(\'deductions\').isEmpty()) { %>\n                    <div class="col-xs-5 visible-xs header-field"><%- content.name %></div> <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- person.getFullName() %></div>\n\n                    <div class="col-xs-5 visible-xs header-field"><%- content.type %></div>\n                    <div class="col-xs-7 col-sm-4 spacer-bottom10">-</div>\n\n                    <div class="col-xs-5 visible-xs header-field"><%- content.amount %></div>\n                    <div class="col-xs-7 col-sm-4 spacer-bottom10">-</div>\n                <% } %>\n                <% person.get(\'deductions\').each(function(deduction, j) { %>\n                    <div class="col-xs-5 visible-xs header-field"><%- content.name %></div>\n                    <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- (j === 0) ? person.getFullName() : \'\' %></div>\n\n                    <div class="col-xs-5 visible-xs header-field"><%- content.type %></div>\n                    <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- !deduction.isOtherType() ? content.deductionTypes[deduction.get(\'type\')] : deduction.get(\'otherType\') %></div>\n\n                    <div class="col-xs-5 visible-xs header-field"><%- content.amount %></div>\n                    <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- IncomeUtil.formatAmount(deduction) %></div>\n                <% }) %>\n\n              </div>\n            <% }) %>\n\n          </div>\n        </div>\n      <% } %>\n\n      <div class="section summary-information">\n        <div class="section-heading blue-bg clearfix">\n          <h3 class="pull-left"><%- content.incomeSummary %></h3>\n          <a href="income" data-route="income" class="btn btn-green pull-right\n            hidden-print"><%- content.edit %></a>\n        </div>\n        <div class="section-body">\n\n          <div class="row header-fields hidden-xs">\n            <div class="col-sm-4"><%- content.name %></div>\n            <div class="col-sm-4"><%- content.monthlyAmount %></div>\n            <div class="col-sm-4"><%- Strings.format(content.annualAmount, model.get(\'coverageYear\')) %></div>\n          </div>\n\n          <% _.each(model.get(\'people\'), function(person, i) { %>\n\n            <div class="row table-row <%- (i === 0) ? \'first\' : \'\' %>">\n\n              <div class="col-xs-5 visible-xs header-field"><%- content.name %></div>\n              <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- person.getFullName() %></div>\n\n              <div class="col-xs-5 visible-xs header-field"><%- content.monthlyAmount %></div>\n              <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- Grammar.currencyFormat(person.getMonthlyIncome()) %></div>\n\n              <div class="col-xs-5 visible-xs header-field"><%- Strings.format(content.annualAmount, model.get(\'coverageYear\')) %></div>\n              <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- Grammar.currencyFormat(person.get(\'expectedAnnualIncome\')) %></div>\n\n            </div>\n          <% }) %>\n\n          <% if (model.requireNumHoursWorkedPerWeek()) { %>\n            <div class="row header-fields hidden-xs spacer-top25">\n              <div class="col-sm-4"><%- content.name %></div>\n              <div class="col-sm-8"><%- content.numHoursWorkedPerWeek %></div>\n            </div>\n\n            <% _.each(model.getParents(), function(person, i) { %>\n              <div class="row table-row <%- (i === 0) ? \'first\' : \'\' %>">\n                <div class="col-xs-5 visible-xs header-field"><%- content.name %></div>\n                <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- person.getFullName() %></div>\n\n                <div class="col-xs-5 visible-xs header-field"><%- content.numHoursWorkedPerWeek %></div>\n                <div class="col-xs-7 col-sm-8 spacer-bottom10"><%- person.get(\'numHoursWorkedPerWeek\') %></div>\n              </div>\n            <% }) %>\n          <% } %>\n\n        </div>\n      </div>\n    <% } // end fin aid only section %>\n\n    <div class="section summary-information" class="screener-questions-summary">\n\n      <div class="section-heading blue-bg clearfix">\n        <h3 class="pull-left"><%- content.specialCasesScreener %></h3>\n        <a href=" " data-route=" " class="btn btn-green pull-right"><%- content.edit %></a>\n      </div>\n      <div class="section-body">\n        <div>\n          <% _.each(groupedAffirmations, function(affirmations, affirmationGroup, list) { %>\n            <div class="row spacer-bottom5 spacer-top5">\n              <% if (affirmations.length > 1) { %>\n                <div class="row spacer-bottom10 spacer-top5">\n                  <%- affirmationGroup.trim() %>:\n                </div>\n                <ul class="screener-questions-summary-spaced">\n                  <% _.each(affirmations, function(affirmation) { %>\n                    <li>\n                      <%- formatAffirmation(affirmationGroup, affirmation) %>\n                    </li>\n                  <% }) %>\n                </ul>\n              <% } else { %>\n                <div class="row spacer-bottom10 spacer-top5">\n                  <%- formatAffirmation(\'\', affirmations[0]) %>\n                </div>\n              <% } %>\n            </div>\n          <% }) %>\n        </div>\n      </div>\n    </div>\n\n    <div class="section summary-information">\n      <div class="section-heading blue-bg clearfix">\n        <h3 class="pull-left"><%- content.additionalQuestions %></h3>\n        <% if (model.get(\'requireFinancialInfo\')) { %>\n          <a href="additional-questions" data-route="additional-questions"\n            class="btn btn-green pull-right hidden-print"><%- content.edit %></a>\n        <% } else { %>\n          <a href="non-fa-sep" data-route="non-fa-sep" class="btn btn-green\n            pull-right hidden-print"><%- content.edit %></a>\n        <% } %>\n      </div>\n      <div class="section-body">\n\n        <%\n\n        print(\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'hasDisability\',\n            conditionContent: content.disability,\n            verb: content.has,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'needsPhysicalAssistance\',\n            conditionContent: content.physicalAssistance,\n            verb: content.needs,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'wantRecentBillAssistance\',\n            conditionContent: content.billAssistance,\n            verb: content.needs,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'lostCoverage\',\n            conditionContent: content.lostCoverage,\n            verb: content.lost,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'gotMarried\',\n            conditionContent: content.gotMarried,\n            verb: content.got,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'released\',\n            conditionContent: content.released,\n            verb: content.was,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'gainedImmigrationStatus\',\n            conditionContent: content.gainedImmigrationStatus,\n            verb: content.gained,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'adopted\',\n            conditionContent: content.adopted,\n            verb: content.was,\n            cutoffDate: sixtyDaysAgoStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'willLoseCoverage\',\n            conditionContent: content.willLoseCoverage,\n            verb: content.will,\n            cutoffDate: sixtyDaysFromNowStr\n          }),\n\n          partial(\'application-summary/_applicant-checklist-summary\', {\n            condition: \'moved\',\n            conditionContent: content.hasMoved,\n            verb: content.moved,\n            cutoffDate: sixtyDaysAgoStr\n          })\n\n        );\n        %>\n\n        <% if (model.get(\'requireFinancialInfo\')) { %>\n          <div class="row header-fields hidden-xs spacer-top10">\n            <div class="col-sm-4"><%- content.name %></div>\n            <div class="col-sm-4"><%- content.currentHealthCoverage %></div>\n            <div class="col-sm-4"><%- content.recentlyLostHealthCoverage %></div>\n          </div>\n\n          <% _.each(model.get(\'people\'), function(person, i) { %>\n\n            <div class="row table-row <%- (i === 0) ? \'first\' : \'\' %>">\n\n              <div class="col-xs-5 visible-xs header-field"><%- content.name %></div>\n              <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- person.getFullName() %></div>\n\n              <div class="col-xs-5 visible-xs header-field"><%- content.currentHealthCoverage %></div>\n              <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- _.isEmpty(person.get(\'currentCoverage\')) ? \'-\' : Grammar.buildConjunction(_.map(person.get(\'currentCoverage\'), Grammar.titleize), content.and) %></div>\n\n              <div class="col-xs-5 visible-xs header-field"><%- content.recentlyLostHealthCoverage %></div>\n              <div class="col-xs-7 col-sm-4 spacer-bottom10"><%- person.get(\'lostCoverage\') ? Grammar.capitalize(content.yes) : Grammar.capitalize(content.no) %></div>\n\n            </div>\n          <% }) %>\n        <% } // end fin aid only section %>\n\n      </div>\n    </div>\n\n    <fieldset class="attestations summary-information">\n      <legend class="has-subtitle">\n        <%- content.attestations.heading %>\n      </legend>\n      <p class="instructions">\n        <%- content.attestations.instructions %>\n      </p>\n\n        <% if (model.get(\'requireFinancialInfo\')) { %>\n          <%= partial(\'forms/_filter-question\', {\n            label: content.attestations.medicaidRights,\n            name: \'tendon:medicaidRightsAttestation\',\n            value: null,\n            content: content,\n            options: {\n              help: content.attestationsHelp.medicaidRights\n            }\n          }) %>\n          <% if (model.get(\'parentOutsideHousehold\')) { %>\n            <%= partial(\'forms/_filter-question\', {\n              label: content.attestations.absentParent,\n              name: \'tendon:absentParentAttestation\',\n              value: null,\n              content: content,\n              options: {\n                help: content.attestationsHelp.absentParent\n              }\n            }) %>\n          <% } %>\n        <% } %>\n        <%= partial(\'forms/_filter-question\', {\n          label: content.attestations.informMarketplace,\n          name: \'tendon:informMarketplaceAttestation\',\n          value: null,\n          content: content,\n          options: {\n            help: content.attestationsHelp.informMarketplace\n          }\n        }) %>\n    </fieldset>\n\n    <fieldset class="summary-information">\n      <legend class="has-subtitle">\n        <%- content.esign.heading %>\n      </legend>\n\n      <p>\n        <%= partial(\'forms/_filter-question\', {\n          label: content.attestations.perjury,\n          name: \'tendon:perjuryAttestation\',\n          value: null,\n          content: content\n        }) %>\n      </p>\n\n      <p class="instructions">\n        <%- Strings.format(content.esign.instructions, model.getSelf().getFullName()) %>\n      </p>\n      <div class="form-group">\n        <div class="row">\n          <div class="col-md-3 col-sm-6 col-xs-12">\n            <input class="form-control" type="text" name="esignature" placeholder="<%- content.fullName %>" aria-label="<%- content.fullName %>">\n          </div>\n        </div>\n      </div>\n    </fieldset>\n\n    <div class="row submit-button-container">\n      <div class="form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper">\n        <button class="btn btn-lg btn-success btn-submit prefill-btn-final"><%- content.submitButton %></button>\n      </div>\n    </div>\n\n    <div class="row submitting-button-container hidden">\n      <div class="col-sm-6 col-sm-offset-3 col-md-offset-3 progress-button">\n        <div class="progress">\n          <div class="progress-text-wrapper"><div class="progress-text"><%- content.submittingButton %>...</div></div>\n          <div class="progress-success fadeable glyphicon glyphicon-ok"></div>\n          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-sm-6 col-sm-offset-3 col-md-offset-3 progress-button">\n        <div class="submit-progress-message progress-information fadeable visible" aria-live="polite">&nbsp;</div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper has-error text-center hidden submit-error-message">\n        <p class="help-block error-message">\n        </p>\n      </div>\n    </div>\n\n    <div class="click-cover hidden"><% /* overlay to trap mouse clicks after submission */ %>\n    </div>\n  </div>\n</div>\n\n\n\n<div class="attestation-warning-modal modal fade out" tabindex="-1" role="dialog" aria-hidden="false">\n  <div class="modal-dialog">\n    <form class="group">\n      <div class="modal-header row">\n        <div class="col-xs-12">\n          <h2 class="sub pull-left"><%= content.attestations.warningHeader %></h2>\n          <div class="glyphicon attestation-warning-close close" aria-hidden="true">\n            <span class="glyphicon-remove" aria-hidden="true"></span>\n          </div>\n        </div>\n        <div class="col-xs-12">\n          <p><%= content.attestations.warning %></p>\n        </div>\n      </div>\n      <div class="modal-footer">\n        <div class="form-group row">\n          <button class="btn btn-md next pull-left attestation-warning-cancel">\n            <%- content.attestations.warningCancel %>\n          </button>\n          <button class="btn btn-md btn-green next pull-right attestation-warning-continue">\n            <%- content.attestations.warningContinue %>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n'
}), define("views/application-summary-view", ["underscore", "util/async-submit", "util/income", "util/screener", "views/card-view", "models/app-model", "text!templates/application-summary/_applicant-checklist-summary.html", "text!templates/application-summary.html", "util/analytics"], function(e, t, n, r, i, s, o, u, a) {
    var f = i.extend({templateText: u,className: i.prototype.className + " application-summary",cardName: "application-summary",partials: e.extend({}, i.prototype.partials, {"application-summary/_applicant-checklist-summary": o}),events: e.extend({}, i.prototype.events, {"click .btn-submit": "_onSubmitClick","change .radio-label": "_renderAndValidateAttestations","click .attestation-warning-close": "_closeModal","click .attestation-warning-continue": "_closeModal","click .attestation-warning-cancel": "_closeModalWithCancel"}),initialize: function(e) {
        i.prototype.initialize.call(this, e), a.track("MPL App Completion Load")
    },postRenderHooks: function() {
        i.prototype.postRenderHooks.apply(this, arguments), this.loadFromModel(), this._hasShownAttestationWarning = !0, this._renderAndValidateAttestations(null, !1);
        var t = this;
        e.defer(function() {
            t.$("a").first().focus()
        })
    },getRenderData: function() {
        return e.extend(i.prototype.getRenderData.call(this), {getScreenerQuestionText: this.getScreenerQuestionText,groupedAffirmations: this.getGroupedAffirmations(),formatAffirmation: this.formatAffirmation,IncomeUtil: n})
    },_renderAndValidateAttestations: function(t, n) {
        var r = ["medicaidRights", "absentParent", "informMarketplace", "perjury"], i = {};
        e.each(r, function(t) {
            var r = "tendon:" + t + "Attestation", s = this.$('[name="' + r + '"][value=true]'), o = this.$('[name="' + r + '"][value=false]');
            o.is(":checked") ? i[t] = !1 : s.is(":checked") ? i[t] = !0 : e.isEmpty(o) || (i[t] = null);
            var u = this.getContent(this.cardName);
            i[t] === null && n ? this.renderInvalidMarker(r, u.attestations.error) : i[t] === !1 ? this.renderInvalidMarker(r, u.attestations.warning, !0) : this.clearInvalidMarker(r)
        }, this);
        var s = e.contains(e.values(i), !1);
        if (s && !this._hasShownAttestationWarning) {
            this._hasShownAttestationWarning = !0;
            var o = this.$(".attestation-warning-modal").show();
            e.defer(function() {
                o.addClass("in")
            })
        }
        return s || (this._hasShownAttestationWarning = !1), i
    },_closeModal: function(t) {
        t.preventDefault();
        var n = this.$(".attestation-warning-modal").removeClass("in");
        e.defer(function() {
            n.hide()
        }, 150)
    },_closeModalWithCancel: function(e) {
        this._closeModal(e);
        var t = this.$("input[type=radio][value=false]:checked");
        t.each(function() {
            $(this).prop("checked", !1), $(this).parent().removeClass("active"), $(this).change()
        })
    },_onSubmitClick: function(n) {
        n.preventDefault();
        var r = !1;
        if (e.isEmpty(this.$("[name=esignature]").val())) {
            var i = this.getContent(this.cardName);
            this.renderInvalidMarker("esignature", i.esign.error), r = !1
        } else
            this.clearInvalidMarker("esignature"), r = !0;
        var s = this._renderAndValidateAttestations(n, !0), o = e.contains(e.values(s), null);
        if (o || !r) {
            this._scrollTo(this.$(".has-error").first()), a.track("MPL App Completion Invalid", {message: this.$(".has-error :first .error-message").text(),invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            return
        }
        this.saveToModel();
        var u = this;
        this._disableForm(), this.model.save(null, {success: function(e, n, r) {
            t.startSubmitThenPoll(u, "MPL App Completion", u.model.url() + "/submit/")
        },error: function(e, t) {
            u._enableForm(), a.track("MPL App Completion Error", {message: t.status || "error saving"})
        }})
    },getAffirmationGroup: function(t) {
        var n = this, r = n.getContent(), i = e.filter(r.affirmationGroups, function(e) {
            return e && e.length > 0 && t.indexOf(e) === 0
        });
        return i.length > 0 ? e.max(i, function(e) {
            return e.length
        }) : t
    },getGroupedAffirmations: function() {
        var t = this;
        return e.groupBy(this.getAffirmations(), function(e) {
            return t.getAffirmationGroup(e)
        })
    },getAffirmations: function() {
        var t = this, n = t.getContent(), i = r.getSectionedScreenerQuestions(this.model), s = ["ssn", "stepchild"], o = e.difference(e.flatten(e.pluck(i, "questions")), s), u = e.map(o, function(e) {
            return r.getScreenerQuestionText(t.model, n, e)
        });
        return e.flatten(u)
    },formatAffirmation: function(e, t) {
        return t = t || "", e = e || "", t.slice(e.length)
    }});
    return f
}), define("text!templates/table-form.html", [], function() {
    return '<div class="table-form <%- _.any(editable) ? \'editing\' : \'\' %>">\n  <% if (collection.length > 0 && !_.all(editable)) { %>\n    <div class="row table-form-header">\n      <%= renderHeaders() %>\n    </div>\n  <% } %>\n  <% collection.each(function(item, i) { %>\n    <% if (!editable[i]) { %>\n\n      <div class="row table-form-item <%- (i === 0) ? \'first\' : \'\' %>">\n        <%= renderItem(item, i) %>\n\n        <%/* edit and remove actions. can only edit one thing at a time */%>\n        <% if (!_.any(editable)) { %>\n          <div class="th visible-xs col-sm-12 col-xs-12">\n            <%- content.actions %>\n          </div>\n          <div class="col-sm-3 col-xs-12">\n            <a href="javascript:;" title="<%- content.edit %>" alt="<%- content.edit %>" class="edit action-link" data-index="<%-i%>"><%- content.edit %></a>\n            <a href="javascript:;" title="<%- content.remove %>" alt="<%- content.remove %>" class="remove action-link" data-index="<%-i%>"><%- content.remove %></a>\n          </div>\n        <% } %>\n      </div>\n\n    <% } else { %>\n\n      <div class="row table-form-item-fields">\n        <%= renderItemFields(item, i) %>\n      </div>\n\n      <%/* save and cancel actions */%>\n      <div class="row table-form-item-field-actions">\n        <div class="col-md-3 col-sm-4 col-xs-9">\n          <a href="javascript:;" title="<%- content.save %>" alt="<%- content.save %>" class="save btn btn-md btn-green col-xs-12" data-index="<%-i%>"><%- content.save %></a>\n        </div>\n        <div class="col-md-3 col-sm-3 col-xs-3">\n          <a href="javascript:;" title="<%- content.cancel %>" alt="<%- content.cancel %>" class="cancel action-link" data-index="<%-i%>"><%- content.cancel %></a>\n        </div>\n      </div>\n\n    <% } %>\n  <% }); %>\n\n  <%/* can only edit one thing at a time */%>\n  <% if (!_.any(editable)) { %>\n    <div class="row">\n      <div class="col-lg-3 col-md-4 col-sm-5 col-xs-12">\n        <a href="javascript:;" alt="<%- addItemText %>" class="add btn btn-md btn-green col-xs-12">\n          <%- addItemText %>\n        </a>\n      </div>\n    </div>\n  <% } %>\n</div>\n'
}), define("views/table-form-view", ["views/card-view", "text!templates/table-form.html"], function(e, t) {
    var n = e.extend({templateText: t,className: "table-form",cardName: "table-form",events: _.extend({}, e.prototype.events, {"click .edit": "editItem","click .save": "saveItem","click .cancel": "cancelEditingItem","click .remove": "removeItem","click .add": "addNewItem"}),initialize: function(t) {
        e.prototype.initialize.call(this, t), this.options = _.defaults(t, {collection: null,addItemText: "Add Item",tendonPrefix: "tendon:",onAddItem: null,onEditItem: null,onSaveItem: null,onRemoveItem: null,onCancelEditingItem: null}), this.collection = t.collection, this.itemModel = this.collection.model, this.collection.each(function(e, t) {
            this.bindValidationEvents(e, this.options.tendonPrefix + "[" + t + "].")
        }, this), this.editable = _.object(_.range(this.collection.length)), this.isNew = _.object(_.range(this.collection.length))
    },getRenderData: function() {
        return _.extend(e.prototype.getRenderData.call(this), {collection: this.options.collection,editable: this.editable,addItemText: this.options.addItemText,renderHeaders: this.options.renderHeaders,renderItem: this.options.renderItem,renderItemFields: this.options.renderItemFields})
    },postRenderHooks: function() {
        e.prototype.postRenderHooks.apply(this, arguments), this.loadFromModel()
    },editItem: function(e) {
        var t = parseInt($(e.currentTarget).data("index"), 10);
        this.editable[t] = !0, this.render(), this.options.onEditItem && this.options.onEditItem(this.collection.at(t), t)
    },saveItem: function(e) {
        if (!this.saveToModel()) {
            this._scrollTo($(".has-error").first()), $(".has-error input").first().focus();
            return
        }
        this.isNew = _.object(_.range(this.collection.length));
        var t = parseInt($(e.currentTarget).data("index"), 10);
        this.editable[t] = !1, this.render(), this.options.onSaveItem && this.options.onSaveItem(this.collection.at(t), t)
    },cancelEditingItem: function(e) {
        var t = parseInt($(e.currentTarget).data("index"), 10);
        this.editable[t] = !1, this.isNew[t] && this.collection.remove(this.collection.at(t)), this.render(), this.options.onCancelEditingItem && this.options.onCancelEditingItem(this.collection.at(t), t)
    },addNewItem: function() {
        var e = this.collection.length, t = new this.itemModel;
        this.collection.add(t), this.editable[e] = !0, this.isNew[e] = !0, this.bindValidationEvents(t, this.options.tendonPrefix + "[" + e + "]."), this.render();
        var n = this.$("input, select").first();
        _.defer(function() {
            n.focus()
        }), this.options.onAddItem && this.options.onAddItem(t, e)
    },removeItem: function(e) {
        var t = parseInt($(e.currentTarget).data("index"), 10), n = this.collection.at(t);
        delete this.editable[t], delete this.isNew[t], this.collection.remove(n), this.render(), this.options.onRemoveItem && this.options.onRemoveItem(n, t)
    },clearItems: function() {
        this.collection.reset(), this.render()
    }});
    return n
}), define("text!templates/income.html", [], function() {
    return '<fieldset id="current-income-<%- personIndex %>">\n  <legend class="has-subtitle"><%- Strings.format(content.personIncomeHeader, person.getFullName()) %></legend>\n  <p class="instructions">\n    <%= partial(\'help/_popover-label\', {\n      label: Strings.format(content.personIncomeInstructions, person.get(\'firstName\')),\n      content: content.personIncomeHelp.popoverContent,\n      options: {\n        append: true,\n        escapePopover: false,\n        externalLink: content.personIncomeHelp.externalLink,\n        externalText: content.personIncomeHelp.externalText\n      }\n    }) %>\n  </p>\n\n  <div class="income-table-form-container" data-error-style="inline">\n  </div>\n\n  <% if (appModel.requireNumHoursWorkedPerWeek() &&\n        (person.get(\'relationship\') === \'self\' || person.get(\'relationship\') === \'spouse\')) { %>\n    <div class="question clearfix income-attestation spacer-top40">\n      <div class="question-label">\n        <%= partial(\'help/_popover-label\', {\n          label: Strings.format(content.numHoursWorkedPerWeekQuestion, person.get(\'firstName\')),\n          content: content.numHoursWorkedPerWeekQuestionHelp,\n          options: {\n            append: true,\n            escapePopover: false\n          }\n        }) %>\n      </div>\n      <div class="form-group">\n        <div class="row">\n          <div class="col-xs-4 col-sm-2 col-md-1">\n            <input class="form-control" type="text" name="tendon:people[<%- personIndex %>].numHoursWorkedPerWeek" data-type="number" maxlength="3">\n          </div>\n        </div>\n      </div>\n    </div>\n  <% } %>\n</fieldset>\n\n<div class="question clearfix spacer-bottom20">\n  <div class="question-label">\n    <%= partial(\'help/_popover-highlight\', {\n      label: Strings.format(content.hasDeductionsQuestion, {\n        firstName: person.get(\'firstName\'),\n        coverageYear: appModel.get(\'coverageYear\')\n      }),\n      highlights: [{\n        escapePopover: false,\n        highlight: content.hasDeductionsHelp.highlight,\n        content: content.hasDeductionsHelp.popoverContent,\n        externalText: content.hasDeductionsHelp.externalText,\n        externalLink: content.hasDeductionsHelp.externalLink\n      }]\n    }) %>\n  </div>\n  <%= partial(\'forms/_filter-question\', {\n    label: \'\',\n    name: \'hasDeductions\',\n    value: hasDeductions\n  }) %>\n</div>\n\n<fieldset id="deductions-<%- personIndex %>" class="deductions-fieldset <%- hasDeductions ? \'\' : \'hidden\' %>">\n  <legend><%- Strings.format(content.deductionsForX, person.getFullName()) %></legend>\n\n  <div class="deductions-table-form-container" data-error-style="inline">\n  </div>\n</fieldset>\n\n<fieldset id="annual-income-<%- personIndex %>">\n  <legend><%- Strings.format(content.magiForX, person.getFullName()) %></legend>\n\n  <div class="question clearfix income-attestation">\n    <div class="question-label">\n    <!-- TODO(sha) add link to snack collection -->\n    <%= partial(\'help/_popover-label\', {\n      label: Strings.format(content.attestationToYearlyIncome, {\n        firstName: person.get(\'firstName\'),\n        coverageYear: appModel.get(\'coverageYear\')\n      }),\n      content: content.attestationToYearlyIncomeHelp.popoverContent,\n      options: {\n        escapeLabel: false,\n        escapePopover: false,\n        append: true\n      }\n    }) %>\n    </div>\n    <%= partial(\'forms/_filter-question\', {\n      label: \'\',\n      name: \'isYearlyIncomeAccurate\',\n      value: !_.isNull(person.get(\'expectedAnnualIncome\')) ? person.expectedAnnualIncomeMinusDeductionsMatchesMAGI() : null\n    }) %>\n  </div>\n\n  <div class="expected-annual-income-container <%- _.isNull(person.get(\'expectedAnnualIncome\')) || person.expectedAnnualIncomeMinusDeductionsMatchesMAGI() ? \'hidden\' : \'\' %>">\n    <div>\n      <%- Strings.format(content.expectedAnnualIncomeQuestion, {\n        firstName: person.get(\'firstName\'),\n        coverageYear: appModel.get(\'coverageYear\')\n      }) %>\n    </div>\n    <div class="spacer-bottom20 help-calculate-income">\n      <a href="javascript:;">\n        <%- content.helpWithIncomeCalculator %>\n      </a>\n    </div>\n    <div class="row income-estimate">\n      <div class="form-group col-lg-3 col-md-4 col-sm-5 col-xs-12">\n          <div class="header-label">\n            <%- Strings.format(content.annualEstimate, {\n              coverageYear: appModel.get(\'coverageYear\')\n            }) %></div>\n          <div class="input-group">\n            <span class="input-group-addon">$</span>\n            <input class="expected-annual-income form-control" name="tendon:people[<%- personIndex %>].expectedAnnualIncome"\n        type="tel" data-type="number" maxlength="10" placeholder="0" aria-label="0" value="<%- Grammar.currencyInputFormat(person.get(\'expectedAnnualIncome\')) %>">\n          </div>\n      </div>\n    </div>\n    <div class="income-calculator hidden">\n      <p class="instructions">\n        <%- content.estimateMonthlyIncome %>\n      </p>\n      <div class="row">\n        <% _.each([\'Jan\', \'Feb\', \'Mar\', \'Apr\', \'May\', \'Jun\', \'Jul\', \'Aug\', \'Sep\', \'Oct\', \'Nov\', \'Dec\' ], function(month) { %>\n          <div class="col-md-1 col-sm-2 col-xs-4">\n            <div class="header-label"><%- month %></div>\n            <input class="form-control income-month-estimate" type="tel" name="incomeCalculator" placeholder="0" aria-label="0" value="">\n          </div>\n        <% }); %>\n      </div>\n      <div class="row">\n        <div class="col-md-3 col-sm-4 col-xs-8 pull-right income-calculator-total">\n          <%- content.totalPre %> <span class="income-calculator-total-value dollar-value">0</span> <%- content.totalPost %>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-md-3 col-sm-4 col-xs-8 pull-right">\n          <a href="javascript:;" class="save btn btn-md btn-green col-xs-12">Save</a>\n        </div>\n        <div class="col-md-1 col-sm-1 col-xs-2 pull-right">\n          <a href="javascript:;" class="cancel action-link">Cancel</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</fieldset>\n'
}), define("text!templates/income/_headers.html", [], function() {
    return '<div class="th col-sm-3 hidden-xs">\n  <%- content.typeOfIncomeHeader %>\n</div>\n<div class="th col-sm-9 hidden-xs">\n  <%- content.howMuchHeader %>\n</div>'
}), define("text!templates/income/_item.html", [], function() {
    return '<div class="th visible-xs col-sm-12 col-xs-12">\n  <%- content.typeOfIncomeHeader %>\n</div>\n<div class="ellipsis col-sm-3 col-xs-12">\n  <%- IncomeUtil.formatType(incomeSource) %>\n</div>\n<div class="th visible-xs col-sm-12 col-xs-12">\n  <%- content.howMuchHeader %>\n</div>\n<div class="col-sm-6 col-xs-12">\n  <%- IncomeUtil.formatAmount(incomeSource) %>\n</div>\n'
}), define("text!templates/income/_item-fields.html", [], function() {
    return "<div id=\"row[<%-i%>]\" class=\"income-source-edit col-sm-12 col-xs-12\" data-i=\"<%- i%>\">\n  <%\n  var selectedType = defaultValue(options.selectedType, incomeSource.get('type'));\n  var selectedFrequency = defaultValue(options.selectedFrequency, incomeSource.get('frequency'));\n  var selectedFrequencyMultiplier = defaultValue(options.selectedFrequencyMultiplier, incomeSource.get('frequencyMultiplier'));\n  var selectedDescription = defaultValue(options.selectedDescription, incomeSource.get('description'));\n  var selectedAmount = defaultValue(options.selectedAmount, incomeSource.get('amount'));\n  var selectedEmployerPhoneNumber = defaultValue(options.selectedEmployerPhoneNumber, incomeSource.get('employerPhoneNumber'));\n  var selectedEmployerStreetAddress = defaultValue(options.selectedEmployerStreetAddress, incomeSource.get('employerStreetAddress'));\n  var selectedEmployerSuiteNumber = defaultValue(options.selectedEmployerSuiteNumber, incomeSource.get('employerSuiteNumber'));\n  var selectedEmployerCity = defaultValue(options.selectedEmployerCity, incomeSource.get('employerCity'));\n  var selectedEmployerState = defaultValue(options.selectedEmployerState, incomeSource.get('employerState'));\n  var selectedEmployerZipCode = defaultValue(options.selectedEmployerZipCode, incomeSource.get('employerZipCode'));\n  var selectedEmployerEin = defaultValue(options.selectedEin, incomeSource.get('employerEin'));\n\n  sourceOptions = IncomeSource.TYPE[selectedType] || {};\n\n  // We show the employer street address field by default and\n  // only show employer suite/city/state/zip when they enter something\n  // for the street address. However, if reloading the page from an\n  // existing app, we should show these extra fields if they already have\n  // something stored for them.\n  var showEmployerExtraFields = defaultValue(incomeSource.get('employerSuiteNumber'), sourceOptions['employerSuiteNumber']) ||\n                                defaultValue(incomeSource.get('employerCity'), sourceOptions['employerCity']) ||\n                                defaultValue(incomeSource.get('employerState'), sourceOptions['employerState']) ||\n                                defaultValue(incomeSource.get('employerZipCode'), sourceOptions['employerZipCode']);\n  %>\n\n  <div class=\"row\">\n    <div class=\"th col-md-2\">\n      <%- content.selectType %>\n    </div>\n    <div class=\"th col-md-10\">\n      <%\n        /**\n         * We show instructionsText above the form fields on income entry to\n         * describe various income types. In some cases we need additional help\n         * so we can also add a help popover using the _popover-label partial,\n         * but we should never have a popover without any instructionsText.\n         */\n      %>\n      <% if (sourceOptions['helpText'] && sourceOptions['instructionsText']) { %>\n        <%= partial('help/_popover-label', {\n          label: Strings.format(content.incomeTypeInstructions[selectedType], person.getFullName()),\n          content: content.incomeTypeHelp[selectedType].content,\n          options: _.extend({\n            append: true,\n            escapeLabel: false,\n            escapePopover: false\n          }, content.incomeTypeHelp[selectedType].options)\n        }) %>\n      <% } else if (sourceOptions['instructionsText']) { %>\n        <%- Strings.format(content.incomeTypeInstructions[selectedType], person.getFullName()) %>\n      <% } %>\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"form-group col-md-2 col-sm-6\">\n      <%= partial('forms/_dropdown', {\n        name: 'tendon:people[' + personIndex + '].incomeSources[' + i + '].type',\n        label: content.typeOfIncome,\n        menuItems: _.map(IncomeSource.TYPES, function(value) {\n          return { value: value, text: content.incomeTypes[value] };\n        }),\n        options: {\n          className: 'income-type-dropdown',\n          defaultText: content.typeOfIncome,\n          selectedOption: selectedType\n        }\n      }) %>\n    </div>\n\n    <% if (!_.isUndefined(selectedType)) { %>\n\n      <% if (sourceOptions['description']) { %>\n        <div class=\"form-group <%- (sourceOptions['employerPhoneNumber']) ? 'col-md-3' : 'col-md-6' %> col-sm-6\">\n          <div class=\"controls\">\n            <input name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].description\" class=\"form-control income-description\" type=\"text\" value=\"<%- selectedDescription %>\" placeholder=\"<%- content.jobDescriptions[selectedType] %>\" aria-label=\"<%- content.jobDescriptions[selectedType] %>\">\n          </div>\n        </div>\n        <% if (sourceOptions['employerPhoneNumber']) { %>\n          <div class=\"form-group col-md-3 col-sm-6\">\n            <div class=\"controls\">\n              <input name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].employerPhoneNumber\" class=\"form-control income-employer-phone-number\" type=\"tel\" data-mask=\"999-999-9999\" value=\"<%- selectedEmployerPhoneNumber %>\" placeholder=\"<%- content.employerPhoneNumber %>\" aria-label=\"<%- content.employerPhoneNumber %>\">\n            </div>\n          </div>\n        <% } %>\n      <% } %>\n\n      <div class=\"form-group <%- (sourceOptions['description']) ? 'col-md-2' : 'col-md-8' %> col-sm-6\">\n        <div class=\"controls input-group\">\n          <span class=\"input-group-addon\">$</span>\n          <input name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].amount\" data-type=\"number\" class=\"form-control income-how-much\" type=\"text\" value=\"<%- selectedAmount %>\" maxlength=\"10\" placeholder=\"<%- content.amount %>\" aria-label=\"<%- content.amount %>\">\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2 col-sm-6\">\n        <%= partial('forms/_dropdown', {\n          id: 'frequency-dropdown-' + i,\n          name: 'tendon:people[' + personIndex + '].incomeSources[' + i + '].frequency',\n          label: content.frequency,\n          menuItems: _.map(sourceOptions['frequencies'], function(value) {\n          return { value: value, text: content.frequencySelect[value] };\n          }),\n          options: {\n            defaultText: content.frequency,\n            className: 'income-frequency-dropdown',\n            selectedOption: selectedFrequency\n          }\n        }) %>\n      </div>\n\n    <% } %>\n\n  </div>\n\n  <% if (!_.isUndefined(selectedType) && (selectedFrequency === 'PER_HOUR' || selectedFrequency === 'PER_DAY')) { %>\n    <div class=\"row\">\n      <div class=\"form-group col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"controls col-sm-3 col-xs-3\">\n          <input name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].frequencyMultiplier\" class=\"form-control income-frequency-multiplier\" type=\"text\" value=\"<%- selectedFrequencyMultiplier %>\">\n        </div>\n        <div class=\"controls col-sm-8 col-xs-5\">\n          <%- content.frequencyMultiplier[selectedFrequency] %>\n        </div>\n      </div>\n    </div>\n  <% } %>\n\n  <% // Only show optional employer information fields for Job income %>\n  <% if (!_.isUndefined(selectedType) && selectedType == 'JOB') { %>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-2 header-label\">\n        <%- content.optionalFieldsHeader %>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-5 col-sm-6 col-md-offset-2\">\n        <div class=\"controls\">\n          <input name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].employerEin\" class=\"form-control income-employer-ein\" type=\"ein\" value=\"<%- selectedEmployerEin %>\" placeholder=\"<%- content.employerEin %>\" aria-label=\"<%- content.employerEin %>\" data-mask=\"99-9999999\">\n        </div>\n      </div>\n      <div class=\"form-group col-md-5 col-sm-6\">\n        <div class=\"controls\">\n          <input name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].employerStreetAddress\" class=\"form-control income-employer-street-address\" type=\"text\" value=\"<%- selectedEmployerStreetAddress %>\" placeholder=\"<%- content.employerStreetAddress %>\" aria-label=\"<%- content.employerStreetAddress %>\" autocorrect=\"off\" autocapitalize=\"words\" autocomplete=\"off\" spellcheck=\"false\" maxlength=\"55\">\n        </div>\n      </div>\n    </div>\n\n    <% // Show these extra employer address fields only when the user clicks the street address field, unless we have data to show %>\n    <div class=\"row income-employer-extra-address-info <%- (showEmployerExtraFields) ? '' : 'hidden' %>\">\n      <div class=\"form-group col-md-2 col-sm-6 col-md-offset-2\">\n        <input class=\"form-control income-employer-suite-number\" name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].employerSuiteNumber\" type=\"text\" maxlength=\"55\" placeholder=\"<%- content.employerSuiteNumber %>\" aria-label=\"<%- content.employerSuiteNumber %>\" value=\"<%- selectedEmployerSuiteNumber %>\">\n      </div>\n      <div class=\"form-group col-md-3 col-sm-6\">\n        <input class=\"form-control income-employer-city\" name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].employerCity\" autocorrect=\"off\" autocapitalize=\"words\" autocomplete=\"on\" spellcheck=\"true\" type=\"text\" maxlength=\"25\" placeholder=\"<%- content.employerCity %>\" aria-label=\"<%- content.employerCity %>\" value=\"<%- selectedEmployerCity %>\">\n      </div>\n      <% // TODO (rbhobe): refactor all state dropdowns. This is copy/pasted from the _address template. %>\n      <div class=\"form-group col-md-3 col-sm-6\">\n        <%= partial('forms/_dropdown', {\n          id: 'employer-state-dropdown-'+ personIndex +'-'+ i,\n          name: 'tendon:people['+ personIndex +'].incomeSources['+ i +'].employerState',\n          label: 'State',\n          menuItems: [\n            { value: 'AL', text: 'Alabama' },\n            { value: 'AK', text: 'Alaska' },\n            { value: 'AZ', text: 'Arizona' },\n            { value: 'AR', text: 'Arkansas' },\n            { value: 'CA', text: 'California' },\n            { value: 'CO', text: 'Colorado' },\n            { value: 'CT', text: 'Connecticut' },\n            { value: 'DE', text: 'Delaware' },\n            { value: 'DC', text: 'District of Columbia' },\n            { value: 'FL', text: 'Florida' },\n            { value: 'GA', text: 'Georgia' },\n            { value: 'HI', text: 'Hawaii' },\n            { value: 'ID', text: 'Idaho' },\n            { value: 'IL', text: 'Illinois' },\n            { value: 'IN', text: 'Indiana' },\n            { value: 'IA', text: 'Iowa' },\n            { value: 'KS', text: 'Kansas' },\n            { value: 'KY', text: 'Kentucky' },\n            { value: 'LA', text: 'Louisiana' },\n            { value: 'ME', text: 'Maine' },\n            { value: 'MD', text: 'Maryland' },\n            { value: 'MA', text: 'Massachusetts' },\n            { value: 'MI', text: 'Michigan' },\n            { value: 'MN', text: 'Minnesota' },\n            { value: 'MS', text: 'Mississippi' },\n            { value: 'MO', text: 'Missouri' },\n            { value: 'MT', text: 'Montana' },\n            { value: 'NE', text: 'Nebraska' },\n            { value: 'NV', text: 'Nevada' },\n            { value: 'NH', text: 'New Hampshire' },\n            { value: 'NJ', text: 'New Jersey' },\n            { value: 'NM', text: 'New Mexico' },\n            { value: 'NY', text: 'New York' },\n            { value: 'NC', text: 'North Carolina' },\n            { value: 'ND', text: 'North Dakota' },\n            { value: 'OH', text: 'Ohio' },\n            { value: 'OK', text: 'Oklahoma' },\n            { value: 'OR', text: 'Oregon' },\n            { value: 'PA', text: 'Pennsylvania' },\n            { value: 'PR', text: 'Puerto Rico' },\n            { value: 'RI', text: 'Rhode Island' },\n            { value: 'SC', text: 'South Carolina' },\n            { value: 'SD', text: 'South Dakota' },\n            { value: 'TN', text: 'Tennessee' },\n            { value: 'TX', text: 'Texas' },\n            { value: 'UT', text: 'Utah' },\n            { value: 'VT', text: 'Vermont' },\n            { value: 'VA', text: 'Virginia' },\n            { value: 'WA', text: 'Washington' },\n            { value: 'WV', text: 'West Virginia' },\n            { value: 'WI', text: 'Wisconsin' },\n            { value: 'WY', text: 'Wyoming' }\n          ],\n          options: {\n            defaultText: content.employerState,\n            className: 'income-employer-state-dropdown',\n            selectedOption: selectedEmployerState\n          }\n        }) %>\n      </div>\n      <div class=\"form-group col-md-2 col-sm-6\">\n        <input class=\"form-control income-employer-zipcode\" name=\"tendon:people[<%- personIndex %>].incomeSources[<%-i%>].employerZipCode\" type=\"tel\" maxlength=\"5\" placeholder=\"<%- content.employerZipCode %>\" aria-label=\"<%- content.employerZipCode %>\" value=\"<%- selectedEmployerZipCode %>\">\n      </div>\n    </div>\n\n  <% } %>\n\n</div>\n"
}), define("text!templates/deductions/_headers.html", [], function() {
    return '<div class="th col-sm-3 hidden-xs">\n  <%- content.type %>\n</div>\n<div class="th col-sm-6 hidden-xs">\n  <%- content.howMuch %>\n</div>'
}), define("text!templates/deductions/_item.html", [], function() {
    return "<div class=\"th visible-xs col-sm-12 col-xs-12\">\n  <%- content.type %>\n</div>\n<div class=\"ellipsis col-sm-3 col-xs-6\">\n  <% if (deduction.get('type') !== Deduction.TYPE.OTHER) { %>\n    <%-content.deductionTypes[deduction.get('type')] %>\n  <% } else { %>\n    <%- deduction.get('otherType') %>\n  <% } %>\n</div>\n<div class=\"th visible-xs col-sm-12 col-xs-12\">\n  <%- content.howMuch %>\n</div>\n<div class=\"col-sm-6 col-xs-6\">\n  $<%- Grammar.numberFormat(deduction.get('amount'), 2) %>\n  <%- content.frequencies[deductions.at(i).get('frequency')].toLowerCase() %>\n</div>\n"
}), define("text!templates/deductions/_item-fields.html", [], function() {
    return '<div class="col-sm-3 col-xs-12">\n  <div class="form-group">\n    <%= partial(\'forms/_dropdown\', {\n      id: \'deduction-type-dropdown-\' + i,\n      name: \'tendon:people[\' + personIndex + \'].deductions[\' + i + \'].type\',\n      label: content.type,\n      menuItems: _.map(Deduction.TYPES, function(value) {\n        return { value: value, text: content.deductionTypes[value] };\n      }),\n      options: { defaultText: content.type, dropdownToggleClassName: \'form-control deduction-type-dropdown\' }\n    }) %>\n  </div>\n</div>\n<div class="form-group col-sm-3 col-xs-12 hidden-other-type hidden">\n  <input name="tendon:people[<%- personIndex %>].deductions[<%-i%>].otherType" class="form-control" type="text" value="" maxlength="50" placeholder="<%- content.deductionType %>" aria-label="<%- content.deductionType %>">\n</div>\n<div class="col-sm-6 col-xs-12 amount-container">\n  <div class="form-group">\n    <div class="controls input-group">\n      <span class="input-group-addon">$</span>\n      <input name="tendon:people[<%- personIndex %>].deductions[<%-i%>].amount" data-type="number" class="form-control" type="text" value="" maxlength="10" placeholder="<%- content.amount %>" aria-label="<%- content.amount %>">\n    </div>\n  </div>\n</div>\n<div class="col-sm-3 col-xs-12">\n  <div class="form-group">\n    <%= partial(\'forms/_dropdown\', {\n      id: \'frequency-dropdown-\' + i,\n      name: \'tendon:people[\' + personIndex + \'].deductions[\' + i + \'].frequency\',\n      label: content.frequency,\n      menuItems: _.map(Deduction.FREQUENCIES, function(value) {\n        return { value: value, text: content.frequencies[value] };\n      }),\n      options: { defaultText: content.frequency }\n    }) %>\n  </div>\n</div>\n'
}), define("views/income-view", ["util/strings", "util/grammar", "util/input-util", "util/income", "models/income-source", "models/deduction", "views/card-view", "views/table-form-view", "text!templates/income.html", "text!templates/income/_headers.html", "text!templates/income/_item.html", "text!templates/income/_item-fields.html", "text!templates/deductions/_headers.html", "text!templates/deductions/_item.html", "text!templates/deductions/_item-fields.html"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
    var v = o.extend({templateText: a,className: o.prototype.className + " income",cardName: "income",events: function() {
        var e = _.extend({}, o.prototype.events, {"change .income-type-dropdown select": "changeIncomeType","change .income-frequency-dropdown select": "changeIncomeFreq",'change [name="hasDeductions"]': "showHideDeductions",'change [name="isYearlyIncomeAccurate"]': "updateExpectedAnnualIncome","focus .income-employer-street-address": "showIncomeEmployerExtraAddressFields","click .help-calculate-income": "showIncomeCalculator","click .income-calculator .cancel": "hideIncomeCalculator","click .income-calculator .save": "saveCalculatedIncome","change .deduction-type-dropdown": "showHideOtherType"}), t = $("<input />").attr("oninput", "return;")[0], n = typeof t.oninput == "function", r = n ? "input" : "keyup";
        return e[r + " [name=incomeCalculator]"] = "calculateIncome", e
    },initialize: function(t) {
        o.prototype.initialize.call(this, t), this.personIndex = t.personIndex, this.person = this.model.get("people")[this.personIndex], _.bindAll(this, "renderIncomeHeaders", "renderIncomeItem", "renderIncomeItemFields", "onEditIncomeItem", "onCompleteEditingIncomeItem", "renderDeductionHeaders", "renderDeduction", "renderDeductionFields", "onEditDeduction", "onCompleteEditingDeduction", "onMAGIChanged"), this.person.get("incomeSources").on("add change remove reset", this.onMAGIChanged), this.person.get("deductions").on("add change remove reset", this.onMAGIChanged), this.incomeTableFormView = new u({id: "income-source-" + this.personIndex,model: this.model,collection: this.person.get("incomeSources"),addItemText: e.getGroup("income").addIncomeSource,tendonPrefix: "tendon:people[" + this.personIndex + "].incomeSources",renderHeaders: this.renderIncomeHeaders,renderItem: this.renderIncomeItem,renderItemFields: this.renderIncomeItemFields,onEditItem: this.onEditIncomeItem,onSaveItem: this.onCompleteEditingIncomeItem,onCancelEditingItem: this.onCompleteEditingIncomeItem,onRemoveItem: this.onCompleteEditingIncomeItem}), this.deductionsTableFormView = new u({id: "deduction-" + this.personIndex,model: this.model,collection: this.person.get("deductions"),addItemText: e.getGroup("income").addDeduction,tendonPrefix: "tendon:people[" + this.personIndex + "].deductions",renderHeaders: this.renderDeductionHeaders,renderItem: this.renderDeduction,renderItemFields: this.renderDeductionFields,onEditItem: this.onEditDeduction,onSaveItem: this.onCompleteEditingDeduction,onCancelEditingItem: this.onCompleteEditingDeduction,onRemoveItem: this.onCompleteEditingDeduction})
    },render: function() {
        return o.prototype.render.apply(this, arguments), this.$(".income-table-form-container").empty().append(this.incomeTableFormView.render().el), this.$(".deductions-table-form-container").empty().append(this.deductionsTableFormView.render().el), this.onMAGIChanged(), this
    },renderIncomeHeaders: function() {
        return this.renderTemplate(f, this.getRenderData())
    },renderIncomeItem: function(e, t) {
        return this.renderTemplate(l, _.extend(this.getRenderData(), {incomeSources: this.person.get("incomeSources"),incomeSource: e,i: t,IncomeSource: i}))
    },renderIncomeItemFields: function(e, t) {
        return this.renderTemplate(c, _.extend(this.getRenderData(), {incomeSources: this.person.get("incomeSources"),incomeSource: e,i: t,IncomeSource: i}))
    },onEditIncomeItem: function() {
        this.$(".income-table-form-container .income-type-dropdown select").focus()
    },onCompleteEditingIncomeItem: function() {
        this.$(".income-table-form-container .add").first().focus()
    },renderDeductionHeaders: function() {
        return this.renderTemplate(h, this.getRenderData())
    },renderDeduction: function(e, t) {
        return this.renderTemplate(p, _.extend(this.getRenderData(), {deductions: this.person.get("deductions"),deduction: e,i: t,Deduction: s}))
    },renderDeductionFields: function(e, t) {
        return this.renderTemplate(d, _.extend(this.getRenderData(), {deductions: this.person.get("deductions"),deduction: e,i: t,Deduction: s}))
    },onMAGIChanged: function() {
        this.$(".magi").text(t.currencyFormat(this.person.getMAGI())), this.updateExpectedAnnualIncome()
    },getContent: function() {
        return _.extend({}, o.prototype.getContent.apply(this, arguments), e.getGroup("income-source-model"))
    },getRenderData: function() {
        return _.extend(o.prototype.getRenderData.call(this), {appModel: this.model,person: this.person,personIndex: this.personIndex,hasDeductions: this.person.get("deductions").length > 0,IncomeUtil: r})
    },showHideDeductions: function() {
        var e = this.$('[name="hasDeductions"]:checked');
        if (e.length === 0)
            return;
        this.clearInvalidMarker(e);
        var t = e.val() === "true";
        this.$(".deductions-fieldset").toggleClass("hidden", !t), t || this.deductionsTableFormView.clearItems()
    },updateExpectedAnnualIncome: function() {
        var e = this.$('[name="isYearlyIncomeAccurate"]:checked');
        if (e.length === 0) {
            this.person.set("expectedAnnualIncome", null), this.$el.find(".income-attestation .active").removeClass("active");
            return
        }
        this.clearInvalidMarker(e);
        var t = e.val() === "true";
        if (t)
            this.person.set("expectedAnnualIncome", this.person.getMAGI());
        else {
            var n = this.$(".expected-annual-income"), r = n.val();
            this.person.set("expectedAnnualIncome", r)
        }
        this.$(".expected-annual-income-container").toggleClass("hidden", t), this.person.set("incomeUnknown", !1)
    },onEditDeduction: function(e, t) {
        e.get("type") === s.TYPE.OTHER && (this.$(".hidden-other-type").removeClass("hidden"), this.$(".amount-container").removeClass("col-sm-6").addClass("col-sm-3")), this.$(".deduction-type-dropdown").focus()
    },onCompleteEditingDeduction: function() {
        this.$(".deductions-table-form-container .add").first().focus()
    },showHideOtherType: function(e) {
        var t = $(e.currentTarget);
        this.$(".hidden-other-type").toggleClass("hidden", t.val() !== s.TYPE.OTHER), this.$(".amount-container").toggleClass("col-sm-6", t.val() !== s.TYPE.OTHER).toggleClass("col-sm-3", t.val() === s.TYPE.OTHER)
    },changeIncomeType: function(e) {
        var t = this._rerenderIncomeRow(e);
        t.find("input").first().focus()
    },changeIncomeFreq: function(e) {
        var t = this._rerenderIncomeRow(e), n = t.find(".income-frequency-dropdown").closest(".row").nextAll(".row").find("input");
        n.length ? n.first().focus() : t.parents(".table-form").find(".save").focus()
    },_rerenderIncomeRow: function(e) {
        var t = $(e.target).closest(".income-source-edit"), n = t.find(".income-type-dropdown select").val(), r;
        $(e.target).attr("name").indexOf("frequency") !== -1 && (r = t.find(".income-frequency-dropdown select").val());
        var s = t.attr("data-i"), o = this.renderTemplate(c, _.extend(this.getRenderData(), {incomeSources: this.person.get("incomeSources"),personIndex: this.personIndex,incomeSource: this.person.get("incomeSources").at(s),i: s,IncomeSource: i,options: {selectedType: n,selectedFrequency: r,selectedDescription: t.find(".income-description").val(),selectedAmount: t.find(".income-how-much").val(),selectedFrequencyMultiplier: t.find(".income-frequency-multiplier").val(),selectedEmployerPhoneNumber: t.find(".income-employer-phone-number").val(),selectedEmployerStreetAddress: t.find(".income-employer-street-address").val(),selectedEmployerSuiteNumber: t.find(".income-employer-suite-number").val(),selectedEmployerCity: t.find(".income-employer-city").val(),selectedEmployerState: t.find(".income-employer-state-dropdown select").val(),selectedEmployerZipCode: t.find(".income-employer-zipcode").val(),selectedEin: t.find(".income-employer-ein").val()}}));
        $(e.target).closest(".income-source-edit").replaceWith(o);
        var u = this.$('.income-source-edit[data-i="' + s + '"]');
        return this.postRenderHooks(), u
    },showIncomeEmployerExtraAddressFields: function(e) {
        this.$(".income-employer-extra-address-info").removeClass("hidden"), this.postRenderHooks()
    },showIncomeCalculator: function(e) {
        this.$(".income-calculator").removeClass("hidden"), this.$(".income-estimate").addClass("hidden"), this.$(".help-calculate-income").addClass("hidden")
    },hideIncomeCalculator: function(e) {
        this.$(".income-calculator").addClass("hidden"), this.$(".income-estimate").removeClass("hidden"), this.$(".help-calculate-income").removeClass("hidden")
    },calculateIncome: function(e) {
        var n = this.$("[name=incomeCalculator]"), r = _.reduce(n, function(e, t) {
            var n = $(t);
            return n.val(n.val().match(/\d*\.?\d+/)), e += Number(n.val()), e
        }, 0);
        return this.$(".income-calculator-total-value").text(t.currencyFormat(r, !0)), r
    },saveCalculatedIncome: function(e) {
        this.hideIncomeCalculator();
        var t = this.calculateIncome();
        this.$(".expected-annual-income").val(t);
        var n = this.$('[name="isYearlyIncomeAccurate"]:checked');
        n.length > 0 && n.val() === "false" && (this.person.set("expectedAnnualIncome", t), this.person.set("incomeUnknown", !0))
    }});
    return v
}), define("text!templates/household-income.html", [], function() {
    return '<div class="blue-bg">\n  <div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n    <% if (model.get(\'ffmId\')) { %>\n      <div class="pull-right"><%- content.applicationId + \': \' + model.get(\'ffmId\') %></div>\n    <% } %>\n    <h1 class="sub"><%- content.incomeHeader %></h1>\n    <div class="subtitle">\n      <div class="spacer-bottom20">\n        <%= content.incomeDescription %>\n      </div>\n      <div class="information-box">\n        <div class="row income-types">\n          <% _.each(IncomeSource.TYPES, function(type) { %>\n            <div class="col-sm-3 col-xs-6"><%- content.incomeTypes[type] %></div>\n          <% }) %>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n  <div class="individual-content-section">\n  </div>\n\n  <div class="row">\n    <div class="form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper">\n      <button class="btn btn-lg btn-success btn-submit"><%- content.continueApplication %></button>\n    </div>\n  </div>\n</div>\n\n'
}), define("views/household-income-view", ["util/income", "models/income-source", "views/income-view", "views/card-view", "util/strings", "util/analytics", "text!templates/household-income.html"], function(e, t, n, r, i, s, o) {
    var u = r.extend({templateText: o,cardName: "household-income",className: r.prototype.className + " household-income",events: {"click .btn-submit": "_onSubmitClicked"},initialize: function(e) {
        r.prototype.initialize.call(this, e), s.track("MPL App Income Load"), this.subViews = _.map(this.model.get("people"), function(e, t) {
            return new n({model: this.model,personIndex: t})
        }, this), this.onSuccess = e.onSuccess || function() {
        }
    },getContent: function() {
        return _.extend({}, r.prototype.getContent.apply(this, arguments), i.getGroup("income-source-model"))
    },getRenderData: function() {
        return _.extend(r.prototype.getRenderData.call(this), {IncomeSource: t,people: this.model.get("people")})
    },render: function() {
        r.prototype.render.call(this);
        var e = this.$(".individual-content-section");
        _.each(this.subViews, function(t) {
            e.append(t.render().el)
        });
        var t = this;
        return _.defer(function() {
            t.$(".income-table-form-container .add").first().focus()
        }), this
    },_onSubmitClicked: function(e) {
        e.preventDefault(), this.model.set("complete", !1);
        if (!this.saveToModel()) {
            this._scrollTo(this.$(".error-message").first()), s.track("MPL App Income Invalid", {message: this.$(".error-message:first").text(),invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            return
        }
        var t = _.compact(_.map(this.model.get("people"), function(e, t) {
            var n = e.validate(e.attributes, {validate: ["expectedAnnualIncome", "numHoursWorkedPerWeek"]});
            if (!n)
                return null;
            if (n.expectedAnnualIncome && this.$("#annual-income-" + t).find('[name="isYearlyIncomeAccurate"]:checked').length === 0) {
                var r = this.$("#annual-income-" + t).find('[name="isYearlyIncomeAccurate"]');
                return this.renderInvalidMarker(r, this.getContent().incomeRequired), r
            }
            return null
        }, this));
        if (t.length > 0) {
            this._scrollTo(t[0].closest(".form-group")), s.track("MPL App Income Invalid", {message: this.$(".error-message:first").text(),invalidFields: t.map(function(e) {
                return $(e).closest("input").attr("name")
            })});
            return
        }
        if (!this.model.isValid()) {
            console.log("Unexpected validation failure!"), console.log(JSON.stringify(this.model.validationError)), s.track("MPL App Income Invalid", {message: JSON.stringify(this.model.validationError)});
            return
        }
        s.track("MPL App Income Submit");
        var n = this.onSuccess, r = this.$(".btn-submit");
        r.prop("disabled", !0), this.model.save(null, {success: function(e, t, r) {
            s.track("MPL App Income Success"), n()
        },error: function(e, t) {
            s.track("MPL App Income Error", {message: t.status || "error saving"})
        },complete: function() {
            r.prop("disabled", !1)
        }})
    }});
    return u
}), define("data/states", ["underscore", "common/data/state-consts", "common/data/zip-consts", "common/data/data-2014/marketplace", "common/data/data-2015/marketplace"], function(e, t, n, r, i) {
    var s = {2014: r,2015: i};
    return {isUncoveredTerritory: function(e) {
        return !!t.TERRITORIES[e]
    },getStateMarketplaceInfo: function(t, n) {
        if (!s[t])
            throw new Error("Invalid year " + t);
        return n ? s[t][n] ? e.clone(s[t][n]) : null : null
    },getCodeFromSlug: function(e) {
        return t.SLUG_TO_CODE[e]
    },getNameFromCode: function(e) {
        return t.CODE_TO_NAME[e]
    },getChipWaitingPeriod: function(e) {
        return t.CHIP_WAITING_PERIOD[t.CODE_TO_NAME[e]]
    },isZipCodeInState: function(t, r) {
        var i = n.ZIPCODE_RANGES[r];
        return e.any(e.map(i, function(e) {
            return t >= e[0] && t <= e[1]
        }))
    },_rawChipWaitingPeriods: t.CHIP_WAITING_PERIOD}
}), define("util/browser-utils", ["underscore"], function(e) {
    var t = e.memoize(function(e) {
        var t = e.indexOf("Windows") > -1;
        if (!t)
            return !1;
        var n = e.indexOf("Gecko") > -1 && e.indexOf("like Gecko") === -1;
        return !n
    }), n = e.memoize(function(e) {
        var t = /android|iphone|ipad|ipod|opera mini/i.test(e.toLowerCase());
        return t
    });
    return {needHackySelectStyling: t,needHackyOptgroupSelect: n}
}), define("text!templates/basic-info-screener.html", [], function() {
    return "<div class=\"lite-card-inner\" aria-live=\"polite\" aria-atomic=\"false\">\n  <% if (model.get('ffmId')) { %>\n    <div class=\"pull-right\"><%- content.applicationId + ': ' + model.get('ffmId') %></div>\n  <% } %>\n  <h1 class=\"sub\"><%- content.screenerHeading %></h1>\n  <div class=\"subtitle\">\n    <%- content.screenerInstructions %>\n    <span class=\"current-state\"><%= content.screenerCurrentState %></span>\n  </div>\n  <div>\n    <form class=\"form-inline\">\n      <div class=\"state-update hidden\">\n        <div class=\"question\">\n          <div class=\"question-label\"><%- content.askWhichState %></div>\n          <%= partial('forms/_dropdown', {\n            id: 'coverage-state',\n            name: 'tendon:coverageState',\n            label: 'State',\n            menuItems: [\n              { value: '', text: content.selectState },\n              { value: 'AL', text: 'Alabama' },\n              { value: 'AK', text: 'Alaska' },\n              { value: 'AS', text: 'American Samoa' },\n              { value: 'AZ', text: 'Arizona' },\n              { value: 'AR', text: 'Arkansas' },\n              { value: 'CA', text: 'California' },\n              { value: 'CO', text: 'Colorado' },\n              { value: 'CT', text: 'Connecticut' },\n              { value: 'DE', text: 'Delaware' },\n              { value: 'DC', text: 'District of Columbia' },\n              { value: 'FL', text: 'Florida' },\n              { value: 'GA', text: 'Georgia' },\n              { value: 'GU', text: 'Guam' },\n              { value: 'HI', text: 'Hawaii' },\n              { value: 'ID', text: 'Idaho' },\n              { value: 'IL', text: 'Illinois' },\n              { value: 'IN', text: 'Indiana' },\n              { value: 'IA', text: 'Iowa' },\n              { value: 'KS', text: 'Kansas' },\n              { value: 'KY', text: 'Kentucky' },\n              { value: 'LA', text: 'Louisiana' },\n              { value: 'ME', text: 'Maine' },\n              { value: 'MD', text: 'Maryland' },\n              { value: 'MA', text: 'Massachusetts' },\n              { value: 'MI', text: 'Michigan' },\n              { value: 'MN', text: 'Minnesota' },\n              { value: 'MS', text: 'Mississippi' },\n              { value: 'MO', text: 'Missouri' },\n              { value: 'MT', text: 'Montana' },\n              { value: 'NE', text: 'Nebraska' },\n              { value: 'NV', text: 'Nevada' },\n              { value: 'NH', text: 'New Hampshire' },\n              { value: 'NJ', text: 'New Jersey' },\n              { value: 'NM', text: 'New Mexico' },\n              { value: 'NY', text: 'New York' },\n              { value: 'NC', text: 'North Carolina' },\n              { value: 'ND', text: 'North Dakota' },\n              { value: 'MP', text: 'N. Mariana Islands' },\n              { value: 'OH', text: 'Ohio' },\n              { value: 'OK', text: 'Oklahoma' },\n              { value: 'OR', text: 'Oregon' },\n              { value: 'PA', text: 'Pennsylvania' },\n              { value: 'PR', text: 'Puerto Rico' },\n              { value: 'RI', text: 'Rhode Island' },\n              { value: 'SC', text: 'South Carolina' },\n              { value: 'SD', text: 'South Dakota' },\n              { value: 'TN', text: 'Tennessee' },\n              { value: 'TX', text: 'Texas' },\n              { value: 'UT', text: 'Utah' },\n              { value: 'VT', text: 'Vermont' },\n              { value: 'VI', text: 'Virgin Islands' },\n              { value: 'VA', text: 'Virginia' },\n              { value: 'WA', text: 'Washington' },\n              { value: 'WV', text: 'West Virginia' },\n              { value: 'WI', text: 'Wisconsin' },\n              { value: 'WY', text: 'Wyoming' }\n            ],\n            options: {\n              className: 'filter-question state-input',\n              selectedOption: content.selectState\n            }\n          }) %>\n        </div>\n      </div>\n      <%= partial('forms/_existing-applications-check', {}) %>\n      <div class=\"state-results-container\">\n        <div class=\"state-success-container\">\n          <div class=\"question\">\n            <div class=\"question-text\">\n              <%= partial('help/_popover-label', {\n                label: content.askIsMarried,\n                content: content.askIsMarriedHelp,\n                options: { append: true, escapePopover: false }\n              }) %>\n            </div>\n            <div class=\"btn-group filter-question clearfix\">\n              <%= partial('forms/_toggle-buttons', {\n                name: 'isMarried',\n                items: [\n                  {value: false, label: content.single},\n                  {value: true, label: content.married}\n                ],\n                options: {\n                  selectedValue: model.get('isMarried'),\n                }\n              }) %>\n            </div>\n          </div>\n          <div class=\"question\">\n            <div class=\"question-label\">\n              <% // TODO(kalvin): Make it cleaner to build questions that contain both inline and end-of-line glyphicon help hovers %>\n              <% content.numDependentsHelp.filingTaxReturns.content = content.numDependentsHelp.filingTaxReturns.content.replace('{ffmLink}', ffmLink); %>\n              <%- /* Build the highlights object to update {coverageYear} inline here */ %>\n              <%= partial('help/_popover-highlight', {\n                label: Strings.format(content.numDependentsQuestion, {\n                  coverageYear: coverageYear\n                }),\n                highlights: [\n                  content.numDependentsHelp.taxDependents, {\n                  highlight: Strings.format(content.numDependentsHelp.whichTaxReturn.highlight, {\n                    coverageYear: coverageYear\n                  }),\n                  content: Strings.format(content.numDependentsHelp.whichTaxReturn.content, {\n                    coverageYear: coverageYear,\n                    coverageYearPlusOne: coverageYear + 1\n                  })\n                },\n                content.numDependentsHelp.filingTaxReturns\n              ]}) %>\n\n            </div>\n            <div class=\"info-text\" id=\"dependent-info-help-text\">\n              <%= Strings.format(model.get('isMarried') ? content.numDependentsInfoMarried : content.numDependentsInfo, {coverageYear: model.get('coverageYear')}) %>\n            </div>\n            <%= partial('forms/_dropdown', {\n              id: 'num-dependents',\n              name: 'tendon:numDependents',\n              label: 'Number of Dependents',\n              menuItems: [\n                { value: '', text: content.select },\n                { value: '0', text: '0' },\n                { value: '1', text: '1' },\n                { value: '2', text: '2' },\n                { value: '3', text: '3' },\n                { value: '4', text: '4' },\n                { value: '5', text: '5' },\n                { value: '6', text: '6' },\n                { value: '7', text: '7' },\n                { value: '8', text: '8' },\n                { value: '9', text: '9' },\n                { value: '10', text: '10' },\n                { value: '11', text: '11' },\n                { value: '12', text: '12' },\n                { value: '13', text: '13' },\n                { value: '14', text: '14' },\n                { value: '15', text: '15' },\n                { value: '16', text: '16' },\n                { value: '17', text: '17' },\n                { value: '18', text: '18' },\n                { value: '19', text: '19' },\n                { value: '20', text: '20' }\n              ],\n              options: {\n                className: 'filter-question dependent-input',\n                type: 'number'\n              }\n            }) %>\n          </div>\n\n          <div class=\"household-size-success-container hidden\">\n            <div class=\"question\">\n              <div class=\"question-text ask-income\">\n                <% // this partial is also rerendered in basic-info-screener-view.js when the household size is updated, make sure to update it there %>\n                <%= partial('help/_popover-label', {\n                  label: model.getHouseholdSize() === 1 ? content.askIncomeSingle : content.askIncomeMultiple,\n                  content: Strings.format(content.askIncomeHelp, { coverageYear: model.get('coverageYear') }),\n                  options: { append: true, escapePopover: false }\n                }) %>\n              </div>\n              <div class=\"btn-group filter-question clearfix\">\n                <%= partial('forms/_toggle-buttons', {\n                  name: 'isIncomeBelowFACutoff',\n                  items: [\n                    {value: true, label: content.lessThanFPL},\n                    {value: false, label: content.moreThanFPL}\n                  ],\n                  options: {selectedValue: model.get('isUnderFACutoff')}\n                }) %>\n              </div>\n            </div>\n            <div class=\"question fa-choice\">\n              <div class=\"question-label\">\n                <!-- this partial is also rerendered in basic-info-screener-view.js when the question-label is regenerated based on different FA options -->\n                <%= partial('help/_popover-label', {\n                  label: content.faChoice,\n                  content: content.faChoiceHelp,\n                  options: { escapeLabel: false, escapePopover: false }\n                }) %>\n              </div>\n              <div class=\"btn-group filter-question clearfix\">\n                <%= partial('forms/_toggle-buttons', {\n                  name: 'tendon:requireFinancialInfo',\n                  items: [\n                    {value: true, label: content.yes},\n                    {value: false, label: content.no}\n                  ],\n                  options: {selectedValue: model.get('isUnderFACutoff') ? true : null}\n                }) %>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper\">\n              <button class=\"btn btn-lg btn-success btn-submit\" disabled=\"true\"><%- content.continueApplication %></button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"msg-success col-md-8\"></div>\n          </div>\n        </div>\n        <div class=\"fail-territory-container hidden spacer-top25\" aria-live=\"polite\">\n          <%- content.territoryMessage %>\n        </div>\n        <% // Omitting aria-atomic here results in JAWS 13-15 repeating itself... %>\n        <div class=\"fail-state-container hidden\" aria-atomic=\"true\" aria-live=\"polite\">\n          <div class=\"button-wrapper\">\n            <div class=\"msg-success spacer-bottom10\"></div>\n            <a class=\"btn btn-lg btn-success btn-submit\"></a>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"
}), define("views/basic-info-screener-view", ["data/states", "util/strings", "util/grammar", "util/analytics", "util/browser-utils", "models/app-model", "views/card-view", "util/app-context", "common/util/ffm-util", "text!templates/help/_popover-label.html", "text!templates/basic-info-screener.html"], function(e, t, n, r, i, s, o, u, a, f, l) {
    var c = o.extend({templateText: l,className: o.prototype.className + " basic-info-screener blue-bg",cardName: "basic-info-screener",events: function() {
        var e = {'change [name="isMarried"]': "onMaritalStatusChanged",'change [name="tendon:coverageState"]': "onStateSelectChanged",'change [name="tendon:numDependents"]': "onNumDependentsChanged",'change [name="isIncomeBelowFACutoff"]': "onIncomeChanged",'change [name="tendon:requireFinancialInfo"]': "onRequireFinancialInfoChanged","click .btn-retry-check-existing": "onShouldCheckExistingApplications","submit form": "_onFormSubmit","submit .btn-submit": "_onFormSubmit","click .show-state-input": "onShowStateInput"};
        return e
    },initialize: function(e) {
        o.prototype.initialize.call(this, _.defaults(e, {onSuccess: null})), r.track("MPL Screener Load"), _.bindAll(this, ["onShouldCheckExistingApplications", "onApplicationIndexRetrieved", "onApplicationIndexError", "onModelChanged", "postRenderHooks"]), this.listenTo(this.model, "change", this.onModelChanged), this.listenTo(this.model, "change:coverageState", this.onShouldCheckExistingApplications)
    },postRenderHooks: function() {
        o.prototype.postRenderHooks.call(this), this.$submit = this.$(".state-success-container .btn-submit"), this.loadFromModel(), this.onModelChanged(), this.onCoverageStateChanged(), this._updateHouseholdNoun(), this.$(".state-name").html(this.$('[name="tendon:coverageState"] option:selected').text()), this._updateFPLCutoff(), i.needHackySelectStyling(window.navigator.userAgent) && this.$("select").addClass("hacky-windows-select");
        var e = this;
        _.defer(function() {
            e.$(".radio-label").first().focus()
        })
    },renderInvalidMarkers: function(e, t) {
    },getRenderData: function() {
        return _.extend(o.prototype.getRenderData.call(this), {coverageYear: this.model.get("coverageYear"),ffmLink: this.getFFMlink()})
    },getFFMlink: function() {
        var e = this.model.get("coverageState"), t = this.model.get("coverageYear");
        return a.getApplicationUrl(u.getLocale(), e, t)
    },onMaritalStatusChanged: function(e) {
        var t = $('[name="isMarried"]:checked').val() === "true";
        this.model.set("isMarried", t, {validate: "isMarried"}), t ? this.model.addSpouse() : this.model.removeSpouse(), this._updateHouseholdNoun(), this._showFAQuestionsIfHouseholdSizeComplete(), this._updateDependentInfoHelpText(t), this._clearFASelections(), this._removeSubsequentSections()
    },onNumDependentsChanged: function(e) {
        var t = $(e.target);
        if (t.val() === "")
            t.removeClass("selected");
        else {
            var n = Number(t.val());
            this.model.set("numDependents", n, {validate: "numDependents"}), this._fullOpacity(t);
            if (n > this.model.getDependents().length)
                while (n > this.model.getDependents().length)
                    this.model.addDependent();
            else if (n < this.model.getDependents().length)
                while (n < this.model.getDependents().length)
                    if (!this.model.removeDependent())
                        break;
            this._updateHouseholdNoun(), this._showFAQuestionsIfHouseholdSizeComplete(), this._clearFASelections(), this._removeSubsequentSections()
        }
    },_removeSubsequentSections: function() {
        $(".special-cases-screener").remove(), $(".non-fa-last-step").remove()
    },onRequireFinancialInfoChanged: function(e) {
        var t = $('[name="tendon:requireFinancialInfo"]:checked').val() === "true";
        this.model.set("requireFinancialInfo", t, {validate: "requireFinancialInfo"}), this._removeSubsequentSections()
    },onShowStateInput: function(e) {
        this.$(".state-update").removeClass("hidden"), this.$(".current-state").addClass("hidden"), this._removeSubsequentSections(), this.$(".state-success-container").addClass("hidden")
    },onStateSelectChanged: function(e) {
        var t = $(e.target);
        this._fullOpacity(t), this.saveToModel("coverageState");
        var n = this.model.get("coverageState");
        this.model.get("householdContact").set("state", n)
    },onCoverageStateChanged: function() {
        var t = this.model.get("coverageState"), n = this.model.get("coverageYear");
        if (!t) {
            this.$('[name="tendon:coverageState"]').val(""), this.$(".fail-state-container").addClass("hidden"), this.$(".fail-territory-container").addClass("hidden"), this.$(".state-success-container").addClass("hidden"), this.$(".state-update").removeClass("hidden"), this._removeSubsequentSections();
            return
        }
        this.$('[name="tendon:coverageState"]').val(t);
        var i = e.getStateMarketplaceInfo(n, t), s = this.getContent(this.cardName);
        i && !i.shopOnly && !i.infoOnly ? (r.trackLinks(".fail-state-container .btn-submit", "MPL Screener Sent To SBM", function(e) {
            return {state: $(e).data("state")}
        }), this.$(".fail-territory-container").addClass("hidden"), this.$(".state-success-container").addClass("hidden"), this.$(".fail-state-container").find(".msg-success").text(s.stateBaseMarketMessageFormat.replace("{0}", i.siteName)).end().find(".btn-submit").text(s.stateBaseMarketLinkFormat.replace("{0}", i.stateName)).data("state", t).attr("href", i.url).end().removeClass("hidden")) : e.isUncoveredTerritory(t) ? (this.$(".fail-state-container").addClass("hidden"), this.$(".fail-territory-container").removeClass("hidden"), this.$(".state-success-container").addClass("hidden")) : (this.$(".fail-state-container").addClass("hidden"), this.$(".fail-territory-container").addClass("hidden"), this.$(".state-success-container").removeClass("hidden"))
    },_fullOpacity: function(e) {
        e.addClass("selected")
    },_updateHouseholdNoun: function() {
        var e = this.getContent(), n = this.model.getHouseholdSize() === 1, r = n ? e.askIncomeSingle : e.askIncomeMultiple, i = this.renderTemplate(f, {label: r,content: t.format(e.askIncomeHelp, {coverageYear: this.model.get("coverageYear")}),options: {append: !0,escapePopover: !1}});
        this.$(".ask-income .question-text").html(i), this.postPopoverRender()
    },_updateDependentInfoHelpText: function(e) {
        var n = this.getContent(), r = e ? n.numDependentsInfoMarried : n.numDependentsInfo, i = t.format(r, {coverageYear: this.model.get("coverageYear")});
        this.$("#dependent-info-help-text").html(i)
    },_clearFASelections: function() {
        var e = function(e, t) {
            var n = $(t);
            n.prop("checked", !1), n.closest(".btn").toggleClass("active", !1)
        };
        this.$('[name="tendon:requireFinancialInfo"]').each(e), this.$('[name="isIncomeBelowFACutoff"]').each(e), this.$(".fa-eligibility").addClass("hidden"), this.model.set("isUnderFACutoff", null), this.model.set("requireFinancialInfo", null)
    },_updateFADefaultChoice: function() {
        var e = this.model.isMaybeEligibleForSubsidy();
        this._setFAChoice(e), this._updateFPLCutoff()
    },_setFAChoice: function(e) {
        this.$('[name="tendon:requireFinancialInfo"]').each(function(t, n) {
            var r = $(n), i = e ? r.val() === "true" : r.val() === "false";
            r.prop("checked", i), r.closest(".btn").toggleClass("active", i)
        }), this.model.set("requireFinancialInfo", e, {validate: "requireFinancialInfo"}), this._removeSubsequentSections()
    },_updateFPLCutoff: function() {
        var e = Math.round(this.model.getBufferedFPLCutoff() / 1e3) * 1e3, r = n.currencyFormat(e, !0), i = this.getContent(), s = this.model.get("isUnderFACutoff"), o;
        _.isNull(s) ? o = i.faUserChoice.askIfIncomeUnknown : o = t.format(s ? i.faUserChoice.askIfLikelyEligible : i.faUserChoice.askIfNotLikelyEligible, {coverageYear: this.model.get("coverageYear")});
        var u = this.renderTemplate(f, {label: o,content: i.faUserChoiceHelp,options: {append: !0,escapeLabel: !1,escapePopover: !1}});
        this.$(".fa-choice .question-label").html(u), this.postPopoverRender(), this.$(".cutoff").each(function(e, t) {
            $(t).text(r)
        })
    },_showFAQuestionsIfHouseholdSizeComplete: function() {
        !_.isNull(this.model.get("isMarried")) && !_.isNull(this.model.get("numDependents")) && this.$(".household-size-success-container").removeClass("hidden")
    },onModelChanged: function(e) {
        this.$submit && (this.model.isBasicInfoValid() ? this.$submit.prop("disabled", !1) : this.$submit.prop("disabled", !0)), this._updateFPLCutoff()
    },onIncomeChanged: function(e) {
        var t = this.$('[name="isIncomeBelowFACutoff"]:checked').val() === "true";
        this.model.set("isUnderFACutoff", t, {validate: "isUnderFACutoff"}), this._updateFADefaultChoice()
    },_onFormSubmit: function(e) {
        e.preventDefault();
        if (this.$submit.prop("disabled"))
            return;
        this.model.set("complete", !1);
        if (!this.saveToModel())
            return;
        var t = this.model.get("coverageState");
        r.track("MPL Screener Submit");
        var n = this.options.onSuccess, i = this.$submit;
        i.prop("disabled", !0), this.model.set("specialCasesStatus", s.SPECIAL_CASES_STATUS.INCOMPLETE), this.model.save(null, {success: function(e, t, i) {
            r.track("MPL Screener Success"), n && n(), $(".state-success-container").find(".btn-submit").focus()
        },error: function(e, t) {
            r.track("MPL Screener Error", {message: t.status || "error saving"})
        },complete: function() {
            i.prop("disabled", !1)
        }})
    },onShouldCheckExistingApplications: function(e) {
        this._removeSubsequentSections(), $.ajax("/marketplace/b/data/application/index", {type: "get",data: {state: this.model.get("coverageState")},timeout: 2e4,contentType: "application/json",processData: !0,success: this.onApplicationIndexRetrieved,error: this.onApplicationIndexError}), this.onWaitingForApplicationIndex()
    },onWaitingForApplicationIndex: function(e) {
        this.$(".state-results-container").addClass("hidden"), this.hideCheckExistingApplications(), this.$(".waiting-for-application-index-container").removeClass("hidden")
    },onFinishedWaitingForApplicationIndex: function(e) {
        this.$(".waiting-for-application-index-container").addClass("hidden")
    },hideCheckExistingApplications: function() {
        this.$(".waiting-for-application-index-container").addClass("hidden"), this.$(".submittable-application-container").addClass("hidden"), this.$(".non-submittable-application-container").addClass("hidden"), this.$(".application-index-error-container").addClass("hidden")
    },onNoExistingApplication: function(e) {
        this.hideCheckExistingApplications(), this.$(".state-results-container").removeClass("hidden"), this.onCoverageStateChanged(), this.onMaritalStatusChanged()
    },onSubmittableClassicApplication: function(e) {
        var t = e.applications[0].insuranceAppId, n = this.model.get("coverageState"), r = u.getLocale();
        this.$(".submittable-application-container").find(".btn-continue-existing").attr("href", a.getResumeApplicationUrl(r, n, t)).end(), this.$(".submittable-application-container").removeClass("hidden")
    },onSubmittableApp2Application: function(e) {
        this.$(".submittable-application-container").removeClass("hidden");
        var t = e.applications[0].insuranceAppId, n = this.model.get("coverageState"), r = u.getLocale();
        this.$(".submittable-application-container").find(".btn-continue-existing").attr("href", a.getApp2ResumeApplicationUrl(r, n, t)).end()
    },onNonSubmittableApplication: function(e) {
        this.$(".non-submittable-application-container").find(".btn-manage").attr("href", a.getManageApplicationsUrl(u.getLocale())).end(), this.$(".non-submittable-application-container").removeClass("hidden")
    },onApplicationIndexError: function(e, t, n) {
        this.onFinishedWaitingForApplicationIndex(n), this.$(".application-index-error-container").removeClass("hidden")
    },onApplicationIndexRetrieved: function(e, t, n) {
        var r = this;
        this.onFinishedWaitingForApplicationIndex(e);
        switch (e.code) {
            case "NoExistingApplication":
                r.onNoExistingApplication(e);
                break;
            case "SubmittableClassicApplication":
                r.onSubmittableClassicApplication(e);
                break;
            case "SubmittableApp2Application":
                r.onSubmittableApp2Application(e);
                break;
            case "NonSubmittableApplication":
                r.onNonSubmittableApplication(e);
                break;
            default:
                r.onNonSubmittableApplication(e)
        }
    }});
    return c
}), +function(e) {
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r)
    };
    t.DEFAULTS = {loadingText: "loading..."}, t.prototype.setState = function(e) {
        var t = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", i = n.data();
        e += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[e] || this.options[e]), setTimeout(function() {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons"]'), t = !0;
        if (e.length) {
            var n = this.$element.find("input");
            n.prop("type") === "radio" && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.button"), s = typeof n == "object" && n;
            i || r.data("bs.button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), define("bootstrap-button", ["jquery"], function() {
}), +function(e) {
    function i() {
        e(t).remove(), e(n).each(function(t) {
            var n = s(e(this));
            if (!n.hasClass("open"))
                return;
            n.trigger(t = e.Event("hide.bs.dropdown"));
            if (t.isDefaultPrevented())
                return;
            n.removeClass("open").trigger("hidden.bs.dropdown")
        })
    }
    function s(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    var t = ".dropdown-backdrop", n = "[data-toggle=dropdown]", r = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    r.prototype.toggle = function(t) {
        var n = e(this);
        if (n.is(".disabled, :disabled"))
            return;
        var r = s(n), o = r.hasClass("open");
        i();
        if (!o) {
            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", i), r.trigger(t = e.Event("show.bs.dropdown"));
            if (t.isDefaultPrevented())
                return;
            r.toggleClass("open").trigger("shown.bs.dropdown"), n.focus()
        }
        return !1
    }, r.prototype.keydown = function(t) {
        if (!/(38|40|27)/.test(t.keyCode))
            return;
        var r = e(this);
        t.preventDefault(), t.stopPropagation();
        if (r.is(".disabled, :disabled"))
            return;
        var i = s(r), o = i.hasClass("open");
        if (!o || o && t.keyCode == 27)
            return t.which == 27 && i.find(n).focus(), r.click();
        var u = e("[role=menu] li:not(.divider):visible a", i);
        if (!u.length)
            return;
        var a = u.index(u.filter(":focus"));
        t.keyCode == 38 && a > 0 && a--, t.keyCode == 40 && a < u.length - 1 && a++, ~a || (a = 0), u.eq(a).focus()
    };
    var o = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), typeof t == "string" && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = o, this
    }, e(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n + ", [role=menu]", r.prototype.keydown)
}(jQuery), define("bootstrap-dropdown", ["jquery"], function() {
}), define("util/geo-util", ["common/constants"], function(e) {
    var t = {};
    return t.loadCountiesForZip = function(t) {
        var n = e.APP_ROOT + "data/zipinfo/" + t, r = new $.Deferred;
        return $.getJSON(n, function(e) {
            r.resolve(e.counties)
        }).fail(function() {
            r.reject()
        }), r.promise()
    }, t.scrubAddress = function(t) {
        var n = e.APP_ROOT + "data/scrubbed-address", r = new $.Deferred;
        return $.post(n, t, function(e) {
            r.resolve(e)
        }).fail(function() {
            r.reject()
        }), r.promise()
    }, t
}), define("text!templates/non-fa-last-step.html", [], function() {
    return '<div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n\n  <!-- TODO(brandon|ben): a11y -->\n\n  <h1 class="sub"><%- content.lastStepHeading %></h1>\n  <p><%- content.lastStepIntro %></p>\n\n  <!-- Contact Information -->\n  <fieldset>\n    <legend class="has-subtitle">\n      <%- content.contactInfoHeading %>\n    </legend>\n    <p class="instructions">\n      <%- content.contactInfoInstructions %>\n    </p>\n    <%= partial(\'forms/_full-name\', {\n      id: \'household-contact-name\',\n      fieldNamePrefix: \'tendon:householdContact.\',\n    }) %>\n\n    <div class="row">\n      <div class="form-group col-sm-6">\n        <div class="header-label hidden-xs"><%- content.emailAddress %></div>\n        <input class="form-control" name="tendon:householdContact.emailAddress" type="email" placeholder="<%- content.emailAddress %>" aria-label="<%- content.emailAddress %>">\n      </div>\n\n      <div class="form-group col-sm-6">\n        <div class="header-label"><%- content.phoneNumber %></div>\n        <div class="input-group">\n          <input class="form-control" name="tendon:householdContact.phoneNumber" type="tel"\n            placeholder="<%- content.phoneNumber %>" aria-label="<%- content.phoneNumber %>" data-mask="999-999-9999">\n          <%= partial(\'forms/_input-group-dropdown\', {\n            id: \'phone-type-dropdown\',\n            name: \'tendon:householdContact.phoneType\',\n            label: content.phoneType,\n            menuItems: [\n              { value: \'home\', text: content.home },\n              { value: \'mobile\', text: content.mobile },\n              { value: \'work\', text: content.work }\n            ]\n          }) %>\n        </div><!-- /input-group -->\n\n        <!-- TODO(kalvin): modify tendon and get rid of hidden checkbox -->\n        <!-- TODO(benkomalo): not saved on the model yet. The old\n              UI had "phoneType". Figure out what\'s actually needed in FFM. -->\n        <input type="checkbox" class="hidden" name="isPhoneNumberCellphone">\n      </div>\n\n    </div>\n\n    <div class="row">\n      <div class="form-group col-sm-4">\n        <div class="header-label">\n          <%= partial(\'help/_popover-label\', {\n            label: content.preferredWrittenLanguage,\n            content: content.preferredLanguageHelp\n          }) %>\n        </div>\n        <%= partial(\'forms/_dropdown\', {\n          id: \'preferred-written-language\',\n          name: \'tendon:householdContact.preferredWrittenLanguage\',\n          label: content.preferredWrittenLanguage,\n          menuItems: _.map(content.languages, function(text, value) {\n            return { value: value, text: text };\n          }),\n          options: {\n            selectedOption: AppContext.getLocale() === \'es\' ? \'Spanish\' : \'English\'\n          }\n        }) %>\n      </div>\n\n      <div class="form-group col-sm-4">\n        <div class="header-label">\n          <%= partial(\'help/_popover-label\', {\n            label: content.preferredSpokenLanguage,\n            content: content.preferredLanguageHelp\n          }) %>\n        </div>\n        <%= partial(\'forms/_dropdown\', {\n          id: \'preferred-spoken-language\',\n          name: \'tendon:householdContact.preferredSpokenLanguage\',\n          label: content.preferredSpokenLanguage,\n          menuItems: _.map(content.languages, function(text, value) {\n            return { value: value, text: text };\n          }),\n          options: {\n            selectedOption: AppContext.getLocale() === \'es\' ? \'Spanish\' : \'English\'\n          }\n        }) %>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-12">\n        <div class="form-group checkbox small">\n          <label>\n            <input type="checkbox" name="tendon:householdContact.needInfoByEmail">\n            <%- content.wantEmailUpdatesCheckbox %>\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-8 col-sm-8">\n        <div class="form-group checkbox small">\n          <label>\n            <input type="checkbox" name="hasAssister" <%- model.get(\'assister\') ? \'checked="checked"\' : \'\' %>>\n            <%= partial(\'help/_popover-label\', {\n              label: content.hasAssister,\n              content: content.hasAssisterHelp.content,\n              options: {\n                append: true,\n                escapePopover: false,\n                externalText: content.hasAssisterHelp.externalText,\n                externalLink: content.hasAssisterHelp.externalLink\n              }\n            }) %>\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div id="assister">\n      <%= partial(\'forms/_full-name\', {\n        id: \'assister-name\',\n        fieldNamePrefix: \'tendon:assister.\'\n      }) %>\n\n      <div class="row">\n        <div class="form-group col-md-3 col-sm-6">\n          <%= partial(\'forms/_dropdown\', {\n            name: \'tendon:assister.type\',\n            label: content.assisterType,\n            menuItems: _.map(Assister.TYPES, function(type) {\n              return { value: type, text: content.assisterTypes[type] };\n            }),\n            options: { defaultText: content.selectType }\n          }) %>\n        </div>\n        <div class="form-group col-md-3 col-sm-6">\n          <input class="form-control " name="tendon:assister.organizationName" type="text"\n              maxlength="50" placeholder="<%- content.organizationName %>" aria-label="<%- content.organizationName %>">\n        </div>\n        <div class="form-group col-md-3 col-sm-6">\n          <input class="form-control " name="tendon:assister.organizationId" type="text"\n              maxlength="50" placeholder="<%- content.idNumber %>" aria-label="<%- content.idNumber %>">\n        </div>\n        <%\n          var requireNPN = model.get(\'assister\') &&\n              model.get(\'assister\').get(\'type\') === Assister.TYPES.AGENT_OR_BROKER;\n        %>\n        <div class="national-producer-number form-group col-md-3 col-sm-6 <%- requireNPN ? \'\' : \'hidden\' %>">\n          <input class="form-control " name="tendon:assister.nationalProducerNumber" type="text"\n              maxlength="20" placeholder="<%- content.nationalProducerNumber %>" aria-label="<%- content.nationalProducerNumber %>">\n        </div>\n      </div>\n    </div>\n\n  </fieldset>\n\n  <% // Residential Address %>\n  <%= partial(\'forms/_address\', {\n    id: \'residential-address\',\n    content: _.extend({}, content, {\n      heading: content.residentialAddressHeading,\n      instructions: content.residentialAddressInstructions,\n      highlight: content.residentialAddressHighlight.highlight,\n      helpContent: content.residentialAddressHighlight.content,\n      externalLink: content.residentialAddressHighlight.externalLink,\n      externalText: content.residentialAddressHighlight.externalText\n    }),\n    options: {\n      className: \'residential-address-fields\',\n      coverageStateName: coverageStateName\n    },\n    fieldNames: {\n      street: \'tendon:householdContact.streetName\',\n      apartment: \'tendon:householdContact.apartment\',\n      city: \'tendon:householdContact.city\',\n      state: \'tendon:householdContact.state\',\n      zipCode: \'tendon:householdContact.zipCode\',\n      county: \'tendon:householdContact.county\'\n    }\n  }) %>\n\n  <fieldset>\n    <%= partial(\'forms/_filter-question\', {\n      label: content.mailingAddressToggleLabel,\n      name: \'tendon:householdContact.isMailingAddress\',\n      value: null\n    }) %>\n  </fieldset>\n\n  <% // Mailing Address %>\n  <%= partial(\'forms/_address\', {\n    id: \'mailing-address\',\n    content: _.extend({}, content, {\n      heading: content.mailingAddressHeading,\n      instructions: content.mailingAddressInstructions,\n      highlight: content.mailingAddressHighlight.highlight,\n      helpContent: content.mailingAddressHighlight.content,\n      externalLink: content.mailingAddressHighlight.externalLink,\n      externalText: content.mailingAddressHighlight.externalText\n    }),\n    fieldNames: {\n      street: \'tendon:householdContact.streetNameMailing\',\n      apartment: \'tendon:householdContact.apartmentMailing\',\n      city: \'tendon:householdContact.cityMailing\',\n      state: \'tendon:householdContact.stateMailing\',\n      zipCode: \'tendon:householdContact.zipCodeMailing\'\n    },\n    options: {className: \'mailing-address-fields hidden\'}\n  }) %>\n\n  <%= partial(\'forms/_applicant\', {\n    i: _.indexOf(model.get(\'people\'), model.getSelf()),\n    heading: content.selfHeading,\n    shouldAskIfApplying: model.get(\'people\').length > 1 ? true : false,\n    shouldShowRelationshipField: false,\n    relationshipOptions: [],\n    options: {isApplyingLabel: content.isSelfApplyingLabel, subHeading: content.selfHouseholdInfoInstructions}\n  }) %>\n\n  <% if (model.get(\'people\').length === 1) { %>\n    <input type=\'hidden\' name=\'tendon:people[0].applyingForInsurance\'\n      value=\'true\'/>\n  <% } %>\n\n  <% if (model.get(\'isMarried\')) { %>\n    <% if (!faFlow) { %>\n      <% /* In nonFA we ask upfront if spouse is applying, because if not then\n        we do not collect the spouse info. In FA we want info either way. */ %>\n      <fieldset>\n        <%= partial(\'forms/_filter-question\', {\n          label: content.isSpouseApplyingLabel,\n          name: \'tendon:people[1].applyingForInsurance\',\n          value: null\n        }) %>\n      </fieldset>\n    <% } %>\n\n    <% /* In FA, we do not ask if spouse is applying until after collecting\n      info from the spouse, so we enable that with shouldAskIfApplying */ %>\n    <%= partial(\'forms/_applicant\', {\n      i: _.indexOf(model.get(\'people\'), model.getSpouse()),\n      shouldAskIfApplying: faFlow,\n      heading: content.spouseHeading,\n      shouldShowRelationshipField: false,\n      relationshipOptions: [],\n      options: {className: faFlow ? \'spouse\' : \'spouse hidden\'}\n    }) %>\n  <% } %>\n\n  <% if (model.hasDependents()) { %>\n    <% /* In nonFA we ask upfront if dependents are applying, because if not then\n        we do not collect the dependent info. In FA we want info either way. */ %>\n    <% if (!faFlow) { %>\n    <fieldset>\n      <% if (model.getDependents().length <= 2) { %>\n        <div class="filter-question toggle-buttons form-group" data-toggle="buttons">\n          <% _.each(_.range(model.getDependents().length + 1), function(dependent, i) { %>\n            <label class="btn radio-label <%- (i == model.getDependents().length) ? \'last\' : \'\' %>">\n              <input type="radio" name="numDependentsApplying" value="<%- i %>"><%- i %>\n            </label>\n          <% }); %>\n          <span><%- content.numDependentsApplyingLabel %></span>\n        </div>\n      <% } else { %>\n        <div class="filter-question num-dependents-dropdown form-group">\n          <%= partial(\'forms/_dropdown\', {\n            id: \'num-dependents-dropdown\',\n            name: \'numDependentsApplying\',\n            label: \'Number of dependents\',\n            menuItems: _.map(_.range(model.getDependents().length + 1), function(dependent, i) {\n              return { value: i, text: i };\n            }),\n            options: {className: \'dropdown pull-left\', defaultText: \'\'}\n          }) %>\n          <span class="description"><%- content.numDependentsApplyingLabel %></span>\n        </div>\n      <% } %>\n    </fieldset>\n    <% } %>\n\n    <% _.each(model.getDependents(), function(person, i) { %>\n      <% /* In FA, we do not ask if dependent is applying until after collecting\n      info from the dependent, so we enable that with shouldAskIfApplying */ %>\n      <%= partial(\'forms/_applicant\', {\n        i: _.indexOf(model.get(\'people\'), person),\n        shouldAskIfApplying: faFlow,\n        person: person,\n        heading: content.dependentHeading,\n        shouldShowRelationshipField: false, // TODO(benkomalo): re-enable when we can support step-children.\n        relationshipOptions: [\'child\'],\n        options: {className: faFlow ? \'dependent\' : \'dependent hidden\',}\n      }) %>\n    <% }); %>\n  <% } %>\n\n  <% /* Slightly modified from application-summary.html.\n        TODO(samking): We should probably use a partial. */ %>\n  <div class="row submit-button-container">\n    <div class="form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper">\n      <button class="btn btn-lg btn-success btn-submit">\n        <%- content.continueApplication %>\n      </button>\n    </div>\n  </div>\n\n  <div class="row submitting-button-container hidden">\n    <div class="col-sm-6 col-sm-offset-3 col-md-offset-3 progress-button">\n      <div class="progress">\n        <div class="progress-text-wrapper"><div class="progress-text"><%- content.loading %>...</div></div>\n        <div class="progress-success fadeable glyphicon glyphicon-ok"></div>\n        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-6 col-sm-offset-3 col-md-offset-3 progress-button">\n      <div class="submit-progress-message progress-information fadeable visible" aria-live="polite">&nbsp;</div>\n    </div>\n  </div>\n\n  <div class="form-group has-error text-center hidden submit-error-message">\n    <p class="help-block error-message">\n      <%- content.loadingError %>\n    </p>\n  </div>\n\n  <div class="click-cover hidden"><% /* overlay to trap mouse clicks after submission */ %>\n  </div>\n\n</div>\n'
}), define("views/non-fa-last-step-view", ["bootstrap-button", "bootstrap-dropdown", "common/data/states", "models/assister", "models/person", "models/household-contact", "views/card-view", "util/async-submit", "util/strings", "util/analytics", "util/geo-util", "text!templates/non-fa-last-step.html"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
    var h = o.extend({templateText: c,className: o.prototype.className + " non-fa-last-step",cardName: "non-fa-last-step",events: _.extend({}, o.prototype.events, {"click .btn-submit": "_onSubmitClick","click #residential-address .update-address": "_onUpdateResidentialAddressClick","click #mailing-address .update-address": "_onUpdateMailingAddressClick","click .ethnicity-race-toggle": "_onEthnicityAndRaceToggleClick","click .coverage-state-toggle": "_onCoverageStateClick","click #change-coverage-state": "_onChangeCoverageStateClick",'keyup [name="tendon:householdContact.zipCode"]': "_onZipChanged",'change [name="tendon:householdContact.zipCode"]': function(e) {
        this._onZipChanged(e), this._onResidentialAddressChanged(e)
    },'change [name="tendon:householdContact.county"]': "_onCountyChanged",'change [name="tendon:householdContact.streetName"]': "_onResidentialAddressChanged",'change [name="tendon:householdContact.apartment"]': "_onResidentialAddressChanged",'change [name="tendon:householdContact.city"]': "_onResidentialAddressChanged",'change [name="tendon:householdContact.streetNameMailing"]': "_onMailingAddressChanged",'change [name="tendon:householdContact.apartmentMailing"]': "_onMailingAddressChanged",'change [name="tendon:householdContact.cityMailing"]': "_onMailingAddressChanged",'change [name="tendon:householdContact.stateMailing"]': "_onMailingAddressChanged",'change [name="tendon:householdContact.zipCodeMailing"]': "_onMailingAddressChanged",'change [name="tendon:householdContact.isMailingAddress"]': "_onInputChanged",'change [name="tendon:people[0].applyingForInsurance"]': "_onInputChanged",'change [name="tendon:people[1].applyingForInsurance"]': "_onInputChanged",'change [name="numDependentsApplying"]': "_onNumDependentsApplyingChanged",'click [name="hasAssister"]': "_onHasAssisterChanged",'change [name="tendon:assister.type"]': "_onAssisterTypeChanged","click a.phoneType": "_onPhoneTypeClick","click .suffixType a": "_onSuffixTypeClick","change .other-checkbox": "_onOtherCheckboxClick","change .hispanic-origin-checkbox": "_onHispanicOriginCheckboxClick","click .screener-confirmation .edit-btn": "_onScreenerConfirmationEditClick"}),initialize: function(e) {
        o.prototype.initialize.call(this, e);
        if (this.model.get("coverageState") !== this.model.get("householdContact").get("state")) {
            var t = this.model.get("householdContact");
            t.clearHomeAddress(), t.set("state", this.model.get("coverageState"))
        }
        this.csr = e.csr;
        if (typeof e.onSuccess != "function")
            throw new Error("onSuccess function required in options.");
        this.onSuccess = e.onSuccess;
        if (typeof e.onChangeCoverageState != "function")
            throw new Error("onChangeCoverageState function required in options.");
        this.onChangeCoverageState = e.onChangeCoverageState, this.isResidentialAddressValidated = !1, this.isMailingAddressValidated = !1, this.scrubbedResidentialAddress = null, this.scrubbedMailingAddress = null
    },delegateEvents: function() {
        o.prototype.delegateEvents.call(this), this.bindValidationEvents(this.model.get("householdContact"), "tendon:householdContact."), _.each(this.model.get("people"), function(e, t) {
            this.bindValidationEvents(e, "tendon:people[" + t + "].")
        }, this), this.listenTo(this.model.get("householdContact"), "change:isMailingAddress", this._onIsMailingAddressChanged, this), _.each(this.model.get("people").slice(1), function(e) {
            this.listenTo(e, "change:applyingForInsurance", this._onApplyingForInsuranceChanged, this)
        }, this)
    },getRenderData: function() {
        return _.extend(o.prototype.getRenderData.call(this), {faFlow: this.model.get("requireFinancialInfo"),csr: this.csr,Person: i,Assister: r,HouseholdContact: s,coverageStateName: n.getNameFromCode(this.model.get("coverageState"))})
    },postRenderHooks: function() {
        o.prototype.postRenderHooks.apply(this, arguments), f.track("MPL App People Load"), this.loadFromModel(), this._onIsMailingAddressChanged(), this._onHasAssisterChanged(), this._onAssisterTypeChanged(), _.each(this.model.get("people").slice(1), this._onApplyingForInsuranceChanged, this);
        var e = this.model.getNumDependentsApplying();
        this.$('[name="numDependentsApplying"][value="' + e + '"]').prop("checked", !0).closest(".btn").addClass("active"), this._populateCountyOptions(this.$('[name="tendon:householdContact.county"]'), this.$('[name="tendon:householdContact.zipCode"]').val()), this.$('[name="tendon:householdContact.state"]').trigger("change")
    },_onUpdateResidentialAddressClick: function(e) {
        this.$('[name="tendon:householdContact.streetName"]').val(this.scrubbedResidentialAddress.streetName), this.$('[name="tendon:householdContact.apartment"]').val(this.scrubbedResidentialAddress.apartment), this.$('[name="tendon:householdContact.city"]').val(this.scrubbedResidentialAddress.city), this.$('[name="tendon:householdContact.zipCode"]').val(this.scrubbedResidentialAddress.zipCode), $(e.target).closest(".scrubbed-address-message").addClass("hidden");
        var t = self.$("#residential-address").find(".zip-field");
        t.find(".error-message").text() === "" && t.removeClass("has-error")
    },_onUpdateMailingAddressClick: function(e) {
        this.$('[name="tendon:householdContact.streetNameMailing"]').val(this.scrubbedMailingAddress.streetName), this.$('[name="tendon:householdContact.apartmentMailing"]').val(this.scrubbedMailingAddress.apartment), this.$('[name="tendon:householdContact.cityMailing"]').val(this.scrubbedMailingAddress.city), this.$('[name="tendon:householdContact.stateMailing"]').val(this.scrubbedMailingAddress.state), this.$('[name="tendon:householdContact.zipCodeMailing"]').val(this.scrubbedMailingAddress.zipCode), $(e.target).closest(".scrubbed-address-message").addClass("hidden")
    },_onEthnicityAndRaceToggleClick: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget), n = t.data("target");
        $(".hispanic-origin-checkbox").trigger("change"), $(".other-checkbox").trigger("change"), this.$(n).toggleClass("active"), t.toggleClass("ethnicity-race-expanded")
    },_onCoverageStateClick: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget), n = t.data("target");
        this.$(n).toggleClass("active"), t.toggleClass("coverage-state-expanded")
    },_onChangeCoverageStateClick: function(e) {
        e.preventDefault(), this.model.set("coverageState", ""), this.onChangeCoverageState()
    },_onSubmitClick: function(e) {
        e.preventDefault();
        var t = this;
        this.model.set("complete", !1);
        if (!this.saveToModel() || !this.model.isValid()) {
            this._scrollTo(this.$(".has-error").first()), this.$(".has-error input").first().focus(), console.log(JSON.stringify(this.model.validationError)), f.track("MPL App People Invalid", {message: JSON.stringify(this.model.validationError),invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            return
        }
        this.beginSubmitting(), this.model.save(null, {success: function(e, n, r) {
            u.startSubmitThenPoll(t, "MPL App People", t.model.url() + "/ffm-contact-info", t.onSuccess)
        },error: function(e, n, r) {
            f.track("MPL App People Error", {message: n.status || "error saving"}), t.errorSubmitting()
        }})
    },_onZipChanged: function(e) {
        var t = $(e.target);
        this._populateCountyOptions(t.closest("fieldset").find(".form-county"), t.val())
    },_onResidentialAddressChanged: function(e) {
        this.isResidentialAddressValidated = !1;
        var t = {streetName: this.$('[name="tendon:householdContact.streetName"]').val().trim(),apartment: this.$('[name="tendon:householdContact.apartment"]').val().trim(),city: this.$('[name="tendon:householdContact.city"]').val().trim(),state: this.model.get("householdContact").get("state"),zipCode: this.$('[name="tendon:householdContact.zipCode"]').val().trim()};
        this._scrubAddress(t, "residential")
    },_onMailingAddressChanged: function(e) {
        this.isMailingAddressValidated = !1;
        var t = {streetName: this.$('[name="tendon:householdContact.streetNameMailing"]').val().trim(),apartment: this.$('[name="tendon:householdContact.apartmentMailing"]').val().trim(),city: this.$('[name="tendon:householdContact.cityMailing"]').val().trim(),state: this.$('[name="tendon:householdContact.stateMailing"]').val().trim(),zipCode: this.$('[name="tendon:householdContact.zipCodeMailing"]').val().trim()};
        this._scrubAddress(t, "mailing")
    },_scrubAddress: function(e, t) {
        var n = this;
        if (!e.streetName || !e.city || !e.state || !e.zipCode)
            return;
        l.scrubAddress(e).then(function(e) {
            var r;
            t === "residential" ? r = n.$("#residential-address") : r = n.$("#mailing-address");
            if (!e.success || !e.scrubbedAddress) {
                r.find(".invalid-address-error").siblings().addClass("hidden").end().removeClass("hidden");
                return
            }
            if (e.statusType === "VERIFIED" || e.statusType === "CORRECTED")
                t === "residential" ? n.isResidentialAddressValidated = !0 : n.isMailingAddressValidated = !0;
            if (e.statusType === "VERIFIED") {
                r.find(".scrubbed-address-message").addClass("hidden").siblings().addClass("hidden");
                return
            }
            t === "residential" ? n.scrubbedResidentialAddress = e.scrubbedAddress : n.scrubbedMailingAddress = e.scrubbedAddress, r.find(".scrubbed-address-message").siblings().addClass("hidden").end().removeClass("hidden").find(".scrubbed-address").text(n._formatAddress(e.scrubbedAddress))
        })
    },_formatAddress: function(e) {
        var t = e.streetName;
        return e.apartment && (t += ", " + e.apartment), t += ", " + e.city, t += ", " + e.state, t += " " + e.zipCode, t
    },_onHasAssisterChanged: function(e) {
        var t = this.$('[name="hasAssister"]').prop("checked");
        t && !this.model.get("assister") ? (this.model.set("assister", new r), this.bindValidationEvents(this.model.get("assister"), "tendon:assister.")) : !t && this.model.get("assister") && this.model.set("assister", null), this.$("#assister").toggleClass("hidden", !t), t && $("#assister input").trigger("resize")
    },_onAssisterTypeChanged: function(e) {
        var t = this.$('[name="tendon:assister.type"]').val(), n = t === r.TYPES.AGENT_OR_BROKER;
        this.$(".national-producer-number").toggleClass("hidden", !n), n && $(".national-producer-number input").trigger("resize")
    },_onCountyChanged: function(e) {
        var t = $(e.target), n = this.model.get("householdContact"), r = t.find(":selected").data("fipsCode");
        n.set("countyFipsCode", r)
    },_onInputChanged: function(e) {
        var t = $(e.currentTarget).attr("name").substr("tendon:".length);
        this.saveToModel(t)
    },_onNumDependentsApplyingChanged: function() {
        var e;
        this.$('select[name="numDependentsApplying"]').length > 0 ? e = parseInt(this.$('select[name="numDependentsApplying"]').val(), 10) : e = parseInt(this.$('[name="numDependentsApplying"]:checked').val(), 10), _.each(this.model.getDependents().slice(0, e), function(e) {
            e.set("applyingForInsurance", !0)
        }, this), _.each(this.model.getDependents().slice(e), function(e) {
            e.set("applyingForInsurance", !1)
        }, this)
    },_onIsMailingAddressChanged: function(e) {
        this.model.get("householdContact").get("isMailingAddress") !== !1 ? this.$(".mailing-address-fields").addClass("hidden") : this.$(".mailing-address-fields").removeClass("hidden")
    },_onApplyingForInsuranceChanged: function(e) {
        if (!this.model.get("requireFinancialInfo")) {
            var t = e.get("applyingForInsurance") === !0, n = _.indexOf(this.model.get("people"), e);
            this.$('.applicant[data-person-index="' + n + '"]').toggleClass("hidden", !t)
        }
    },_onPhoneTypeClick: function(e) {
        var t = $(e.currentTarget), n = t.is("#isCellPhone");
        this.$('[name="isPhoneNumberCellphone"]').prop("checked", n), $("button span.phoneType").text(t.text()), e.preventDefault()
    },_onSuffixTypeClick: function(e) {
        var t = $(e.currentTarget), n = t.closest(".suffixType"), r = n.find("a").first().text(), i = t.text() === r ? "" : t.text();
        n.find("select").val(i), n.find(".dropdown-name").text(t.text()), e.preventDefault()
    },_onOtherCheckboxClick: function(e) {
        var t = $(e.currentTarget), n = t.prop("checked");
        n || t.closest(".checkbox").find(".other-text").val(""), t.closest(".checkbox").find(".other-race-text-container").toggleClass("hidden", !n)
    },_clearAllEthnicitySpecifiers: function(e) {
        $('[name="tendon:people[' + e + '].ethnicities"]').each(function(e, t) {
            t.checked = !1
        }), $('[name="tendon:people[' + e + '].otherEthnicity"]').val("")
    },_onHispanicOriginCheckboxClick: function(e) {
        var t = $(e.currentTarget), n = t.prop("checked");
        n || this._clearAllEthnicitySpecifiers(t.attr("data-person-index")), t.closest(".checkbox").find(".hispanic-ethnicity-specifiers").toggleClass("hidden", !n)
    },_onScreenerConfirmationEditClick: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget);
        t.hide(), this.$(".create-new-account-msg").show()
    },_populateCountyOptions: function(e, t) {
        var n = this.getContent();
        e.empty();
        if (t.length !== 5 && t.length !== 10)
            return;
        var r = this;
        l.loadCountiesForZip(t).then(function(t) {
            var i = [];
            if (t.length <= 0) {
                r.$("#residential-address").find(".invalid-zip-error").siblings().addClass("hidden").end().removeClass("hidden").end().find(".zip-field").addClass("has-error").end();
                return
            }
            r.$("#residential-address").find(".invalid-zip-error").addClass("hidden");
            var s = r.$("#residential-address").find(".zip-field");
            s.find(".error-message").text() === "" && s.removeClass("has-error"), t.length > 1 && i.push($('<option value="" />').text(n.county)), i.push.apply(i, _.map(t, function(e) {
                return $("<option/>").data("fipsCode", e.fips).val(e.name).text(e.name)
            })), e.append(i), e.change()
        })
    }});
    return h
}), define("text!templates/non-fa-sep.html", [], function() {
    return "<%\n  // TODO(lorenyu): use moment.js library for all datetime stuff\n  var sixtyDaysAgo = new Date(new Date().getTime() - 1000*60*60*24*60);\n  var sixtyDaysAgoStr = (sixtyDaysAgo.getMonth()+1) + '/' + sixtyDaysAgo.getDate() + '/' + sixtyDaysAgo.getFullYear();\n  var sixtyDaysFromNow = new Date(new Date().getTime() + 1000*60*60*24*60);\n  var sixtyDaysFromNowStr = (sixtyDaysFromNow.getMonth()+1) + '/' + sixtyDaysFromNow.getDate() + '/' + sixtyDaysFromNow.getFullYear();\n%>\n<div class=\"blue-bg\">\n  <div class=\"lite-card-inner spacer-bottom20\" aria-live=\"polite\" aria-atomic=\"false\">\n    <% if (model.get('ffmId')) { %>\n      <div class=\"pull-right\"><%- content.applicationId + ': ' + model.get('ffmId') %></div>\n    <% } %>\n    <h1 class=\"sub\"><%- content.specialEnrollmentTitle %></h1>\n    <div class=\"subtitle\"><%- content.specialEnrollmentSubtitle %></div>\n  </div>\n</div>\n<div class=\"lite-card-inner container\" aria-live=\"polite\" aria-atomic=\"false\">\n  <fieldset class=\"special-enrollment-questions\">\n    <legend class=\"has-subtitle\"><%- content.specialEnrollmentHeader %></legend>\n    <p class=\"instructions\">\n      <%= content.specialEnrollmentInstructions %>\n    </p>\n    <div class=\"form-group\">\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.lostCoverage, sixtyDaysAgoStr),\n            question: 'lostCoverage',\n            options: {\n              autofocus: true,\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenLostCoverage,\n                question: 'lostCoverageDate'\n              },\n              help: content.specialEnrollmentQuestions.lostCoverageHelp\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.willLoseCoverage, sixtyDaysFromNowStr),\n            question: 'willLoseCoverage',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenWillLoseCoverage,\n                question: 'willLoseCoverageDate',\n                help: content.specialEnrollmentQuestions.whenWillLoseCoverageHelp\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.gotMarried, sixtyDaysAgoStr),\n            question: 'gotMarried',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenMarried,\n                question: 'gotMarriedDate'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.released, sixtyDaysAgoStr),\n            question: 'released',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenReleased,\n                question: 'releasedDate'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.gainedImmigrationStatus, sixtyDaysAgoStr),\n            question: 'gainedImmigrationStatus',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenGainedImmigrationStatus,\n                question: 'gainedImmigrationStatusDate'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.adopted, sixtyDaysAgoStr),\n            question: 'adopted',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenAdopted,\n                question: 'adoptedDate'\n              }\n            }\n          }) %>\n      </div>\n      <div>\n         <%= partial('forms/_applicant-checklist', {\n            model: model,\n            label: Strings.format(content.specialEnrollmentQuestions.moved, sixtyDaysAgoStr),\n            question: 'moved',\n            options: {\n              askForDate: {\n                label: content.specialEnrollmentQuestions.whenMoved,\n                question: 'movedDate'\n              },\n              askForZip: {\n                label: content.specialEnrollmentQuestions.whereMoved,\n                question: 'previousZipCode'\n              }\n            }\n          }) %>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"row\">\n    <div class=\"form-group col-sm-6 col-sm-offset-3 col-md-offset-3 sign-button-wrapper\">\n      <button class=\"btn btn-lg btn-success btn-submit\"><%- content.reviewApplication %></button>\n    </div>\n  </div>\n\n</div>\n"
}), define("views/non-fa-sep-view", ["views/card-view", "util/analytics", "text!templates/forms/_applicant-checklist.html", "text!templates/non-fa-sep.html"], function(e, t, n, r) {
    var i = e.extend({templateText: r,cardName: "non-fa-sep",className: e.prototype.className + " non-fa-sep",partials: _.extend({}, e.prototype.partials, {"forms/_applicant-checklist": n}),events: _.extend({}, e.prototype.events, {"click .btn-submit": "_onSubmitClicked",'change .special-enrollment-questions input[type="checkbox"]': "_onSpecialEnrollmentQuestionCheckboxChanged"}),initialize: function(n) {
        e.prototype.initialize.call(this, n), t.track("MPL App Non-FA SEP Load"), _.each(this.model.get("people"), function(e, t) {
            this.bindValidationEvents(e, "tendon:people[" + t + "].")
        }, this), this.onSuccess = n.onSuccess || function() {
        }
    },postRenderHooks: function() {
        e.prototype.postRenderHooks.apply(this, arguments), this.loadFromModel(), this.$(".question").filter(function() {
            return $(this).closest(".checkbox").find('input[type="checkbox"]').prop("checked")
        }).removeClass("hidden")
    },_onSpecialEnrollmentQuestionCheckboxChanged: function(e) {
        var t = $(e.currentTarget), n = t.prop("checked");
        t.closest(".checkbox").find(".question").toggleClass("hidden", !n)
    },_onSubmitClicked: function(e) {
        e.preventDefault();
        if (!this.saveToModel()) {
            this._scrollTo(this.$(".has-error").first()), this.$(".has-error input").first().focus(), t.track("MPL App Non-FA SEP Invalid", {message: JSON.stringify(this.model.validationError),invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            return
        }
        if (!this.model.isValid()) {
            console.log("Unexpected validation failure!"), console.log(JSON.stringify(this.model.validationError)), t.track("MPL App Non-FA SEP Invalid", {message: JSON.stringify(this.model.validationError)});
            return
        }
        this.model.set("complete", !0), t.track("MPL App Non-FA SEP Submit");
        var n = this.onSuccess, r = this.$(".btn-submit");
        r.prop("disabled", !0), this.model.save(null, {success: function(e, r, i) {
            t.track("MPL App Non-FA SEP Success"), n()
        },error: function(e, n, r) {
            t.track("MPL App Non-FA SEP Error", {message: n.status || "error saving"})
        },complete: function() {
            r.prop("disabled", !1)
        }})
    }});
    return i
}), define("text!templates/privacy-policy.html", [], function() {
    return '<div class="blue-bg">\n  <div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n    <% if (showVerifiedMsg) { %>\n      <h1 class="sub"><%- content.verifiedMessageTitle %></h1>\n      <div class="row">\n        <div class="col-md-12">\n          <p><%- content.verifiedMessageBody %></p>\n        </div>\n      </div>\n    <% } %>\n    <h1 class="sub"><%- content.privacyPolicyTitle %></h1>\n    <div class="row">\n      <div class="col-md-12">\n        <div class="information-box">\n        <small><%= content.privacyPolicyBody %></small>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n        <p><%= content.privacyPolicyLinks %></p>\n        <p>\n          <label class="control-label">\n            <input type="checkbox" name="privacy-policy-attestation" autofocus>\n            <%- content.privacyPolicyAttestation %>\n          </label>\n        </p>\n      </div>\n      <div class="button-wrapper col-md-8 col-md-offset-2">\n        <button class="btn btn-lg btn-success btn-submit disabled"><%- content.privacyPolicyContinue %></button>\n      </div>\n    </div>\n  </div>\n</div>\n'
}), define("views/privacy-policy-view", ["backbone", "views/card-view", "util/analytics", "text!templates/privacy-policy.html"], function(e, t, n, r) {
    var i = t.extend({className: t.prototype.className + " privacy-policy",cardName: "privacy-policy",templateText: r,events: _.extend({}, t.prototype.events, {'change [name="privacy-policy-attestation"]': "_onAttestationChanged","click .btn-submit": "_onSubmitClick"}),initialize: function(e) {
        t.prototype.initialize.call(this, e), n.track("MPL Privacy Policy Load"), this.csr = e.csr
    },getRenderData: function() {
        return _.extend(t.prototype.getRenderData.call(this), {showVerifiedMsg: !this.csr})
    },_onAttestationChanged: function(e) {
        var t = this.$('[name="privacy-policy-attestation"]').prop("checked");
        this.$(".btn-submit").toggleClass("disabled", !t)
    },_onSubmitClick: function(e) {
        e.preventDefault(), n.track("MPL Privacy Policy Submit"), this.model.save(null, {success: this.options.onSuccess,error: function() {
            n.track("MPL Privacy Policy Error")
        }})
    }});
    return i
}), define("text!templates/special-cases-screener.html", [], function() {
    return '<div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n  <h1 class="sub"><%- content.screenerHeading %></h1>\n  <div class="subtitle">\n    <%= partial(\'help/_popover-label\', {\n        label: content.screenerInstructions,\n        content: content.screenerInstructionsHelp,\n        options: {\n          append: true,\n          escapePopover: false\n        }\n      }) %>\n  </div>\n\n  <form class="form" role="form">\n    <div class="question-container">\n      <% _.each(sectionedQuestions, function(section, i) { %>\n        <div class="question-section <%- section.name %> <%- (i === 0) ? \'visible\' : \'fadeable hidden\' %>">\n          <% _.each(section.questions, function(question) { %>\n            <%= partial(\'forms/_filter-question\', {\n              label: getScreenerQuestionText(model, content, question),\n              name: question,\n              value: answers[question],\n              content: content,\n              options: {\n                help: getScreenerQuestionHelp(model, content, question)\n              }\n            }) %>\n          <% }) %>\n        </div>\n      <% }) %>\n    </div>\n\n    <div class="success-container col-sm-6 col-sm-offset-3 col-md-offset-3 hidden spacer-top25">\n      <button class="btn btn-lg btn-success btn-submit">\n        <%- content.continueApplication %>\n      </button>\n    </div>\n  </form>\n\n</div>\n'
}), define("text!templates/warn-delete-and-transfer.html", [], function() {
    return '<div class="warn-delete modal fade" tabindex="-1" role="dialog" aria-hidden="false">\n  <div class="modal-dialog">\n    <form class="group">\n      <div class="modal-header row">\n        <div class="col-xs-12">\n          <h2 class="sub pull-left"><%- content.areYouSure %></h2>\n          <div class="glyphicon close" aria-hidden="true" data-dismiss="modal">\n            <span class="glyphicon-remove" aria-hidden="true"></span>\n          </div>\n        </div>\n        <div class="col-xs-12">\n          <p><%- content.newAppRequired %></p>\n          <p><%- content.newAppRequiredExplanation %></p>\n          <p><%- content.clickContinueOrCancel %></p>\n        </div>\n      </div>\n      <div class="modal-footer">\n        <div class="form-group row">\n          <button class="btn btn-md btn-yellow next pull-left btn-transfer">\n            <%- content.continue %>\n            <img id="loading" class="hidden" src="/marketplace/b/app2/img/loading.gif" alt="loading" />\n          </button>\n          <button class="btn btn-md btn-green next pull-right" data-dismiss="modal">\n            <%- content.cancel %>\n          </button>\n        </div>\n        <div class="form-group row has-error text-center hidden transfer-error-message">\n          <p class="help-block error-message">\n            <%- content.continueError %>\n          </p>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n'
}), define("views/warn-delete-and-transfer-view", ["backbone", "common/constants", "common/util/ffm-util", "util/app-context", "views/card-view", "text!templates/warn-delete-and-transfer.html"], function(e, t, n, r, i, s) {
    var o = i.extend({templateText: s,cardName: "warn-delete-and-transfer",events: _.extend({}, i.prototype.events, {"click .btn-transfer": "_onTransferClick"}),initialize: function(e) {
        this.appModel = e.appModel
    },_onTransferClick: function(e) {
        e.preventDefault(), $("#loading").removeClass("hidden");
        var i = this, s = t.APP_ROOT + "data/application/" + i.appModel.get("id") + "/delete";
        $.ajax({type: "POST",url: s,data: i.appModel.toJSON(),success: function(e, t, s) {
            var o = r.getLocale(), u = i.appModel.get("coverageState"), a = i.appModel.get("coverageYear");
            window.location.href = n.getApplicationUrl(o, u, a)
        },error: function(e, t, n) {
            $("#loading").addClass("hidden"), $(".transfer-error-message").removeClass("hidden"), console.error(n)
        }})
    }});
    return o
}), define("views/special-cases-screener-view", ["views/card-view", "models/app-model", "text!templates/special-cases-screener.html", "util/app-context", "common/util/ffm-util", "common/data/states", "util/analytics", "util/strings", "util/screener", "views/warn-delete-and-transfer-view"], function(e, t, n, r, i, s, o, u, a, f) {
    var l = e.extend({templateText: n,className: e.prototype.className + " special-cases-screener blue-bg",cardName: "special-cases-screener",events: {"change input": "_onInputChanged","click .btn-submit": "_onSubmitClicked","submit .btn-submit": "_onSubmitClicked","submit form.form": "_onSubmitClicked"},requiredAnswers: t.REQUIRED_SPECIAL_CASES_ANSWERS,initialize: function(n) {
        e.prototype.initialize.call(this, n), this.answers = {};
        if (this.model.get("specialCasesStatus") === t.SPECIAL_CASES_STATUS.PASSED) {
            var r = a.getSectionedScreenerQuestions(this.model);
            _.each(r, function(e) {
                _.each(e.questions, function(e) {
                    this.answers[e] = this.requiredAnswers[e]
                }, this)
            }, this)
        }
        this.onSuccess = n.onSuccess
    },getRenderData: function() {
        var t = e.prototype.getRenderData.call(this);
        return _.extend(t, {getScreenerQuestionText: a.getScreenerQuestionText,getScreenerQuestionHelp: a.getScreenerQuestionHelp,sectionedQuestions: a.getSectionedScreenerQuestions(this.model),answers: this.answers})
    },postRenderHooks: function() {
        e.prototype.postRenderHooks.call(this), o.track("MPL Screener Qs Load"), _.defer(_.bind(this.updateVisibleSections, this))
    },_getCheckedInputs: function() {
        return this.$(".question-section").filter(":visible").find("input:checked")
    },_onInputChanged: function(e) {
        var t = this._getCheckedInputs();
        $(".non-fa-last-step").addClass("hidden"), _.each(t, function(e) {
            var t = $(e).prop("name"), n = $(e).val() === "true";
            this.answers[t] = n
        }, this), this.updateVisibleSections()
    },updateVisibleSections: function() {
        var e = this.$(".is-everyone-26-or-older input:checked");
        if (e.length) {
            if (e.val() !== "false") {
                this.$(".child").addClass("hidden").removeClass("visible"), this.$(".success-container").removeClass("hidden");
                return
            }
            this.$(".child").addClass("visible").removeClass("hidden")
        }
        var t = this.$("form .filter-question");
        if (t.find(":checked").length < t.filter(":visible").length) {
            this.$(".success-container").addClass("hidden");
            return
        }
        if (!this._doCurrentAnswersPass()) {
            this.$(".success-container").removeClass("hidden");
            return
        }
        var n = !0, r = this.$("form .question-section").filter(":hidden").first();
        if (!r.length) {
            this.$(".success-container").removeClass("hidden");
            return
        }
        r.removeClass("hidden"), _.defer(function() {
            r.addClass("visible")
        }), this.$(".success-container").addClass("hidden"), _.defer(_.bind(this.updateVisibleSections, this))
    },_onSubmitClicked: function(e) {
        e.preventDefault(), o.track("MPL Screener Qs Submit");
        if (this.$(".success-container").hasClass("hidden"))
            return;
        if (this._doCurrentAnswersPass())
            this.model.set("specialCasesStatus", t.SPECIAL_CASES_STATUS.PASSED), $(".non-fa-last-step").removeClass("hidden"), o.track("MPL Screener Qs Sent to App 2.0"), this.onSuccess();
        else if (this.model.get("ffmId")) {
            var n = new f({appModel: this.model});
            $("#warn-delete-and-transfer-modal").html(n.render().el), $(".warn-delete").modal("show")
        } else {
            o.track("MPL Screener Qs Sent to FFM");
            var s = r.getLocale(), u = this.model.get("coverageState"), a = this.model.get("coverageYear");
            _.delay(function() {
                window.location.href = i.getApplicationUrl(s, u, a)
            })
        }
    },_doCurrentAnswersPass: function() {
        var e = this._getCheckedInputs();
        return _.all(e, function(e) {
            var t = $(e).prop("name"), n = $(e).val() === "true";
            return t in this.requiredAnswers ? n === this.requiredAnswers[t] : !0
        }, this)
    }});
    return l
}), define("authenticated-app-router", ["common/constants", "common/util/ffm-util", "util/input-util", "util/app-context", "models/account", "models/app-model", "session-timer", "views/additional-questions-view", "views/application-summary-view", "views/household-income-view", "views/basic-info-screener-view", "views/non-fa-last-step-view", "views/non-fa-sep-view", "views/privacy-policy-view", "views/special-cases-screener-view"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
    var v = Backbone.Router.extend({initialize: function(e) {
        e = e || {}, this.lastStep = null, this.data = e.data, this.views = [], this.sessionTimer = new o(this), this.sessionTimer.appendSessionWarningView(), window.appModel = this.getAppModel(), window.sessionTimer = this.sessionTimer
    },routes: {"(/)": "liteApp","additional-questions(/)": "showAdditionalQuestions","non-fa-sep(/)": "showNonFaSep","income(/)": "showIncomePage","privacy-policy(/)": "showPrivacyPolicy","summary(/)": "showSummaryPage"},liteApp: function() {
        this.destroyViews();
        var e = this.getAppModel(), i = this;
        if (!e.get("id")) {
            this.navigate("privacy-policy", {trigger: !0});
            return
        }
        var o = new c({model: e,account: this.getUser(),csr: this.data.csr,onChangeCoverageState: function() {
            i.liteApp()
        },onSuccess: function() {
            e.get("requireFinancialInfo") ? i.navigate("income", {trigger: !0}) : i.navigate("non-fa-sep", {trigger: !0})
        }}), u = new l({model: e,onSuccess: function() {
            if (!r.faFlowEnabled() && e.isMaybeEligibleForSubsidy()) {
                var n = r.getLocale(), s = this.getAppModel().get("coverageState"), u = this.getAppModel().get("coverageYear");
                window.location.href = t.getApplicationUrl(n, s, u)
            } else
                a.remove(), o.remove(), i.views = _.without(i.views, a, o), i._renderAndAppend(a)
        }}), a = new d({model: e,onSuccess: _.bind(function() {
            e.save(null, {success: function() {
                o.remove(), i.views = _.without(i.views, o), i._renderAndAppend(o)
            }})
        }, this)});
        i._clearAndRender(u), e.isBasicInfoValid() && (!e.isMaybeEligibleForSubsidy() || r.faFlowEnabled()) && (i._renderAndAppend(a), e.get("specialCasesStatus") === s.SPECIAL_CASES_STATUS.PASSED && this._renderAndAppend(o)), n.resetHtml5()
    },_scrollTo: function(e) {
        $("html, body").animate({scrollTop: e.offset().top}, 400)
    },_clearAndRender: function(e) {
        this.destroyViews(), $("#main-body-content").html(e.render().el), this.views = [e], e.delegateEvents()
    },_renderAndAppend: function(e) {
        $("#main-body-content").append(e.render().el), this.views.push(e), this._scrollTo(e.$el), e.delegateEvents()
    },showIncomePage: function() {
        this.destroyViews();
        if (!this.getAppModel().get("id")) {
            this.navigate("privacy-policy", {trigger: !0});
            return
        }
        var e = this, t = new f({model: this.getAppModel(),onSuccess: function() {
            e.navigate("additional-questions", {trigger: !0})
        }});
        this.views.push(t), $("#main-body-content").append(t.render().el)
    },showNonFaSep: function() {
        this.destroyViews();
        if (!this.getAppModel().get("id")) {
            this.navigate("privacy-policy", {trigger: !0});
            return
        }
        var e = this, t = new h({model: this.getAppModel(),onSuccess: function() {
            e.navigate("summary", {trigger: !0})
        }});
        this._clearAndRender(t)
    },showAdditionalQuestions: function() {
        this.destroyViews();
        if (!this.getAppModel().get("id")) {
            this.navigate("privacy-policy", {trigger: !0});
            return
        }
        var e = this, t = new u({model: this.getAppModel(),onSuccess: function() {
            e.navigate("summary", {trigger: !0})
        }});
        this._clearAndRender(t)
    },showPrivacyPolicy: function() {
        this.destroyViews();
        var e = this, t = new p({model: this.getAppModel(),csr: this.data.csr,onSuccess: function() {
            e.navigate("", {trigger: !0})
        }});
        this._clearAndRender(t), n.resetHtml5()
    },showSummaryPage: function() {
        this.destroyViews();
        if (!this.getAppModel().get("id")) {
            this.navigate("privacy-policy", {trigger: !0});
            return
        }
        var e = new a({model: this.getAppModel(),router: this});
        $("#main-body-content").html(e.render().el), this.views.push(e)
    },getUser: function() {
        return this.user = this.user || new i(this.data.user, {parse: !0}), this.user
    },getAppModel: function() {
        return this.appModel = this.appModel || new s(this.data.appModelJson, {parse: !0}), this.appModel
    },destroyViews: function() {
        _.invoke(this.views, "remove"), this.views = [], window.scrollTo(0, 0)
    },logout: function() {
        window.location = e.LOGOUT_URL
    }});
    return v
}), define("text!templates/ridp-questions.html", [], function() {
    return '<div class="lite-card-inner container" aria-live="polite" aria-atomic="false">\n  <h2><%- content.verifyMyIdentity %></h2>\n  <div class="subtitle"><%= content.ridpDescription %></div>\n  <% _.each(model.get(\'ridpQuestions\'), function(questionInfo, qIndex) { %>\n    <div class="question">\n      <div class="question-label"><%- questionInfo.question %><span class="error-message glyphicon icon-error" aria-hidden="true"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></span></div>\n      <div class="btn-group btn-group-vertical filter-question" data-toggle="buttons">\n        <% _.each(questionInfo.answer, function(choice, i) { %>\n          <a href="javascript:;" class="btn radio-label">\n            <input type="radio" name="question-<%- qIndex %>" value="<%- i %>">\n            <%- choice %>\n          </a>\n        <% }) %>\n      </div>\n    </div>\n  <% }) %>\n\n  <div class="form-group col-md-6 col-md-offset-3 sign-button-wrapper">\n    <button class="btn btn-lg btn-success btn-submit"\n        data-action="submit"><%- content.submit %></button>\n  </div>\n</div>\n'
}), define("views/ridp-questions-view", ["common/constants", "views/card-view", "util/analytics", "util/strings", "text!templates/ridp-questions.html"], function(e, t, n, r, i) {
    var s = t.extend({templateText: i,className: t.prototype.className + " ridp-questions blue-bg",cardName: "ridp-questions",events: {"click .btn-submit": "_onSubmitClick"},initialize: function(e) {
        t.prototype.initialize.call(this, e), n.track("MPL RIDP Questions Load")
    },_onSubmitClick: function(t) {
        t.preventDefault();
        var i = _.map(this.$(".question"), function(e, t) {
            var n = $(e).find("input:checked").val();
            return n ? Number(n) + 1 : null
        });
        if (!_.all(i)) {
            var s = Number.MAX_VALUE;
            _.each(this.$(".question"), function(e, t) {
                var n = $(e).find("input:checked").val();
                $(e).toggleClass("has-error", !n), n || (s = Math.min(s, t))
            });
            var o = this.$(".question").get(s);
            o = s === 0 ? this.$el : $(o), $("html, body").animate({scrollTop: o.offset().top}, 400), n.track("MPL RIDP Questions Invalid", {message: "unanswered questions"});
            return
        }
        $(t.currentTarget).text(this.getContent().submitting).prop("disabled", !0), this.model.set({ridpAnswers: i}), n.track("MPL RIDP Questions Submit");
        var u = this, a = u.getContent().genericFfmRidpErrorMessage;
        $.ajax({url: e.APP_ROOT + "data/ridp/submit",type: "post",data: this.model.toJSON(),dataType: "json",success: function(e, t, r) {
            if (e.redirect) {
                u.options.onRedirect && u.options.onRedirect(e.redirect);
                return
            }
            e.success ? (n.track("MPL RIDP Questions Pass"), u.options.onSuccess && u.options.onSuccess()) : (n.track("MPL RIDP Questions Fail"), u.options.onError && (e.errorType && u.getContent().ridpErrorCodes && u.getContent().ridpErrorCodes[e.errorType] && (a = u.getContent().ridpErrorCodes[e.errorType]), u.options.onError(a), e.preventResubmit && $(".btn-submit").prop("disabled", !0)))
        },error: function(e, t) {
            var i = {};
            try {
                i = $.parseJSON(e.responseText)
            } catch (s) {
            }
            n.track("MPL RIDP Questions Error", {message: i.message || t}), i.errorType === "LOGGED_OUT" && i.errorData && (a = u.getContent().loggedOutError, a = r.format(a, i.errorData.url)), u.options.onError && u.options.onError(a)
        }})
    }});
    return s
}), define("text!templates/ridp-redirect.html", [], function() {
    return '<div class="lite-card-inner container" aria-live="polite" aria-atomic="false">\n  <h2><%- content.title %></h2>\n  <div class="subtitle"><%- content.message %></div>\n  <button class="btn btn-lg btn-success btn-submit"><%- content.continueButton%></button>\n</div>\n'
}), define("views/ridp-redirect-view", ["common/constants", "views/card-view", "util/app-context", "text!templates/ridp-redirect.html"], function(e, t, n, r) {
    var i = t.extend({templateText: r,className: t.prototype.className + " ridp-redirect blue-bg",cardName: "ridp-redirect",events: {"click .btn-submit": "_onSubmitClick"},initialize: function(e) {
        t.prototype.initialize.call(this, e)
    },_onSubmitClick: function(e) {
        var t = n.getLocale() === "es" ? "es_MX" : "en_US", r = "/marketplace/auth/VA/" + t + "/myAccount?from=myProfile#IDProofingResults:E100";
        window.location = r
    }});
    return i
}), define("text!templates/ridp.html", [], function() {
    return "<div class=\"lite-card-inner\" aria-live=\"polite\" aria-atomic=\"false\">\n\n<div id=\"error\" class=\"alert alert-danger hidden\">\n<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"error-message\"><%- content.error %></span>\n</div>\n\n  <fieldset>\n    <legend class=\"has-subtitle\"><%- content.ridpTitle %></legend>\n    <p><small>\n      <%= content.ridpDescription %>\n      <%= partial('help/_popover-label', {\n        label: content.ridpDescriptionHelp.label,\n        content: content.ridpDescriptionHelp.content,\n        options: {\n          escapePopover: false,\n          externalLink: content.ridpDescriptionHelp.externalLink,\n          externalText: content.ridpDescriptionHelp.externalText\n        }\n      }) %>\n    </small></p>\n\n    <% /* TODO(david): This part copy-pasted from non-fa-last-step.html.\n    Refactor into partial. */ %>\n    <div class=\"row\">\n      <div class=\"form-group col-sm-4\">\n        <input class=\"form-control\" name=\"tendon:firstName\"\n            autocorrect=\"off\" autocapitalize=\"on\" autocomplete=\"off\" spellcheck=\"false\" autofocus\n            type=\"text\" maxlength=\"20\" placeholder=\"<%- content.firstName %>\" aria-label=\"<%- content.firstName %>\">\n      </div>\n      <div class=\"form-group col-sm-2\">\n        <input class=\"form-control\" name=\"tendon:middleName\"\n            autocorrect=\"off\" autocapitalize=\"on\" autocomplete=\"off\" spellcheck=\"false\"\n            type=\"text\" maxlength=\"20\" placeholder=\"<%- content.middleName %>\" aria-label=\"<%- content.middleName %>\">\n      </div>\n      <div class=\"form-group col-sm-6\">\n\n        <div class=\"input-group\">\n          <input class=\"form-control\" name=\"tendon:lastName\"\n            autocorrect=\"off\" autocapitalize=\"on\" autocomplete=\"off\" spellcheck=\"false\"\n            type=\"text\" maxlength=\"25\" placeholder=\"<%- content.lastName %>\" aria-label=\"<%- content.lastName %>\">\n\n          <%= partial('forms/_name-suffix', { id: 'name-suffix-dropdown', name: 'tendon:suffix' }) %>\n        </div><!-- /input-group -->\n      </div>\n    </div>\n\n    <% /* TODO(david): This part also copy-pasted from non-fa-last-step.html.\n    Refactor into partial. */ %>\n    <div class=\"form-section row\">\n      <div class=\"form-group col-sm-4\">\n        <div class=\"header-label\"><%- content.phoneNumber %></div>\n        <div class=\"input-group\">\n          <input class=\"form-control\" name=\"tendon:phoneNumber\" type=\"tel\"\n            placeholder=\"XXX-XXX-XXXX\" aria-label=\"<%- content.phoneNumber %>\" data-mask=\"999-999-9999\">\n          <%= partial('forms/_input-group-dropdown', {\n            id: 'phone-type-dropdown',\n            name: 'tendon:phoneType',\n            label: content.phoneType,\n            menuItems: [\n              { value: 'home', text: content.home },\n              { value: 'mobile', text: content.mobile },\n              { value: 'work', text: content.work }\n            ]\n          }) %>\n        </div>\n\n        <!-- TODO(kalvin): modify tendon and get rid of hidden checkbox -->\n        <!-- TODO(benkomalo): not saved on the model yet. The old\n              UI had \"phoneType\". Figure out what's actually needed in FFM. -->\n        <input type=\"checkbox\" class=\"hidden\" name=\"isPhoneNumberCellphone\">\n      </div>\n      <div class=\"form-group col-sm-3 col-md-2\">\n        <div class=\"header-label\"><%- content.dob %></div>\n        <input class=\"form-control\" name=\"tendon:dob\"\n            type=\"tel\" maxlength=\"25\" placeholder=\"MM/DD/YYYY\" aria-label=\"<%- content.dob %>\"\n            data-mask=\"99/99/9999\">\n      </div>\n    </div>\n\n\n    <div class=\"form-section row\">\n      <div class=\"form-group col-sm-9\">\n        <input class=\"form-control\" name=\"tendon:streetName\"\n            type=\"text\" maxlength=\"60\" placeholder=\"<%- content.address1 %>\" aria-label=\"<%- content.address1 %>\">\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <input class=\"form-control\" name=\"tendon:apartment\"\n            type=\"text\" maxlength=\"60\" placeholder=\"<%- content.address2 %>\" aria-label=\"<%- content.address2 %>\">\n      </div>\n      <div class=\"form-group col-sm-4\">\n        <input class=\"form-control\" name=\"tendon:city\"\n            type=\"text\" maxlength=\"20\" placeholder=\"<%- content.city %>\" aria-label=\"<%- content.city %>\">\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <%= partial('forms/_dropdown', {\n          id: 'state-dropdown',\n          name: 'tendon:state',\n          label: 'State',\n          menuItems: [\n            { value: 'AL', text: 'Alabama' },\n            { value: 'AK', text: 'Alaska' },\n            { value: 'AZ', text: 'Arizona' },\n            { value: 'AR', text: 'Arkansas' },\n            { value: 'CA', text: 'California' },\n            { value: 'CO', text: 'Colorado' },\n            { value: 'CT', text: 'Connecticut' },\n            { value: 'DE', text: 'Delaware' },\n            { value: 'DC', text: 'District of Columbia' },\n            { value: 'FL', text: 'Florida' },\n            { value: 'GA', text: 'Georgia' },\n            { value: 'HI', text: 'Hawaii' },\n            { value: 'ID', text: 'Idaho' },\n            { value: 'IL', text: 'Illinois' },\n            { value: 'IN', text: 'Indiana' },\n            { value: 'IA', text: 'Iowa' },\n            { value: 'KS', text: 'Kansas' },\n            { value: 'KY', text: 'Kentucky' },\n            { value: 'LA', text: 'Louisiana' },\n            { value: 'ME', text: 'Maine' },\n            { value: 'MD', text: 'Maryland' },\n            { value: 'MA', text: 'Massachusetts' },\n            { value: 'MI', text: 'Michigan' },\n            { value: 'MN', text: 'Minnesota' },\n            { value: 'MS', text: 'Mississippi' },\n            { value: 'MO', text: 'Missouri' },\n            { value: 'MT', text: 'Montana' },\n            { value: 'NE', text: 'Nebraska' },\n            { value: 'NV', text: 'Nevada' },\n            { value: 'NH', text: 'New Hampshire' },\n            { value: 'NJ', text: 'New Jersey' },\n            { value: 'NM', text: 'New Mexico' },\n            { value: 'NY', text: 'New York' },\n            { value: 'NC', text: 'North Carolina' },\n            { value: 'ND', text: 'North Dakota' },\n            { value: 'OH', text: 'Ohio' },\n            { value: 'OK', text: 'Oklahoma' },\n            { value: 'OR', text: 'Oregon' },\n            { value: 'PA', text: 'Pennsylvania' },\n            { value: 'PR', text: 'Puerto Rico' },\n            { value: 'RI', text: 'Rhode Island' },\n            { value: 'SC', text: 'South Carolina' },\n            { value: 'SD', text: 'South Dakota' },\n            { value: 'TN', text: 'Tennessee' },\n            { value: 'TX', text: 'Texas' },\n            { value: 'UT', text: 'Utah' },\n            { value: 'VT', text: 'Vermont' },\n            { value: 'VA', text: 'Virginia' },\n            { value: 'WA', text: 'Washington' },\n            { value: 'WV', text: 'West Virginia' },\n            { value: 'WI', text: 'Wisconsin' },\n            { value: 'WY', text: 'Wyoming' }\n          ],\n          options: { defaultText: content.selectState }\n        }) %>\n      </div>\n      <div class=\"form-group col-sm-2\">\n        <input class=\"form-control\" name=\"tendon:zipCode\"\n            type=\"tel\" maxlength=\"5\" placeholder=\"<%- content.zipCode %>\" aria-label=\"<%- content.zipCode %>\">\n      </div>\n    </div>\n\n    <!-- TODO(ldchang): We use tel with DOB & SSN because type=number stops masked-input from working -->\n    <div class=\"form-section row\">\n      <div class=\"form-group col-sm-4 col-md-3\">\n        <div class=\"header-label\">\n          <%= partial('help/_popover-label', {\n            label: content.ssn,\n            content: content.ssnHelp\n          }) %>\n        </div>\n        <input class=\"form-control help-input\" name=\"tendon:ssn\"\n            type=\"tel\" maxlength=\"25\" placeholder=\"XXX-XX-XXXX\" aria-label=\"<%- content.ssn %>\"\n            data-mask=\"999-99-9999\">\n      </div>\n    </div>\n\n  </fieldset>\n\n  <div class=\"row\">\n    <div class=\"form-group col-sm-6 col-md-offset-3 sign-button-wrapper\">\n      <button class=\"btn btn-lg btn-success btn-submit get-questions\"\n          data-action=\"get-questions\"><%- content.continueApplication %></button>\n    </div>\n  </div>\n\n</div>\n"
}), define("views/ridp-view", ["bootstrap-button", "bootstrap-dropdown", "common/constants", "models/ridp-model", "views/card-view", "views/ridp-questions-view", "views/ridp-redirect-view", "util/analytics", "util/strings", "text!templates/ridp.html"], function(e, t, n, r, i, s, o, u, a, f) {
    var l = i.extend({templateText: f,className: i.prototype.className + " ridp",cardName: "ridp",events: _.extend({}, i.prototype.events, {"click .btn-submit": "_onSubmitClick"}),initialize: function(e) {
        i.prototype.initialize.call(this, e), u.track("MPL RIDP Identity Load"), this.listenTo(this.model, "change:ridpQuestions", this._questionsChanged), _.bindAll(this, "onError")
    },render: function() {
        return i.prototype.render.call(this), _.defer(_.bind(this.loadFromModel, this)), this
    },renderQuestions: function() {
        this.questionsView = this.renderSubView(s, {onError: this.onError,onRedirect: this.options.onRedirect});
        var e = this.questionsView.$el.find(".radio-label").first();
        _.defer(function() {
            e.focus()
        })
    },onError: function(e) {
        this.$(".btn.get-questions").text(this.getContent().resubmit).prop("disabled", !1), e = e || this.getContent().ridpError, this.$("#error").removeClass("hidden"), this.$("#error .error-message").html(e), $("html, body").animate({scrollTop: this.$("#error").offset().top}, 400), this.questionsView && (this.questionsView.remove(), this.questionsView = null, this.model.set({ridpQuestions: null,ridpAnswers: null}))
    },_onSubmitClick: function(e) {
        e.preventDefault();
        if (!this.saveToModel()) {
            this._scrollTo($(".has-error").first()), this.$(".has-error input").first().focus(), u.track("MPL RIDP Identity Invalid", {message: this.$(".has-error :first .error-message").text(),invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            return
        }
        this._fetchQuestions(e)
    },_fetchQuestions: function(e) {
        var t = this.$(".btn-submit"), r = this.getContent();
        this.$("#error").addClass("hidden"), t.text(r.fetchingQuestions).prop("disabled", !0), u.track("MPL RIDP Identity Submit");
        var i = this, s = i.getContent().genericFfmRidpErrorMessage;
        $.ajax({type: "post",url: n.APP_ROOT + "data/ridp/fetch-questions",data: this.model.toJSON(),dataType: "json",success: function(t) {
            if (t.redirect) {
                i.options.onRedirect && i.options.onRedirect(t.redirect);
                return
            }
            t.success ? (i.model.set(i.model.parse(t.ridpModel)), i.$(e.currentTarget).text(r.questionsFetched), u.track("MPL RIDP Identity Success")) : (u.track("MPL RIDP Identity Fail"), t.errorType && i.getContent().ridpErrorCodes && i.getContent().ridpErrorCodes[t.errorType] && (s = i.getContent().ridpErrorCodes[t.errorType]), i.onError(s), t.preventResubmit && i._preventResubmit())
        },error: function(e, t) {
            var n = {};
            try {
                n = $.parseJSON(e.responseText)
            } catch (r) {
            }
            u.track("MPL RIDP Identity Error", {message: n.message || t}), n.errorType === "LOGGED_OUT" && n.errorData && (s = i.getContent().loggedOutError, s = a.format(s, n.errorData.url)), i.onError(s)
        }})
    },_questionsChanged: function(e) {
        this.model.get("ridpQuestions") !== null ? (this.renderQuestions(), this.$(this.el).find(":input:not(:disabled)").prop("disabled", !0), this.$(".btn-submit").text("Done")) : this.$(this.el).find(":input:disabled").prop("disabled", !1)
    }});
    return l
}), define("ridp-router", ["common/constants", "util/input-util", "backends/jsessionid-refresher", "models/account", "models/ridp-model", "views/ridp-view", "views/ridp-redirect-view", "session-timer"], function(e, t, n, r, i, s, o, u) {
    var a = Backbone.Router.extend({initialize: function(e) {
        e = e || {}, this.lastStep = null, this.data = e.data, this.sessionTimer = new u(this), this.sessionTimer.appendSessionWarningView(), window.sessionTimer = this.sessionTimer, this.views = []
    },routes: {"(/)": "showRidpPage","assistance(/)": "showRidpAssitancePage"},_scrollTo: function(e) {
        $("html, body").animate({scrollTop: e.offset().top}, 400)
    },_clearAndRender: function(e) {
        this.destroyViews(), $("#main-body-content").html(e.render().el), this.views = [e], e.delegateEvents()
    },showRidpPage: function() {
        this.destroyViews();
        var n = this.getUser(), r = this.data.authInfo, o = i.fromAccount(n, r), u = this, a = new s({model: o,onSuccess: function() {
            window.location = e.APP_ROOT + "app/"
        },onRedirect: function(e) {
            e && u.navigate(e, {trigger: !0,replace: !0})
        }});
        this._clearAndRender(a), t.resetHtml5()
    },showRidpAssitancePage: function() {
        this.destroyViews();
        var e = new o;
        this._clearAndRender(e), t.resetHtml5()
    },getUser: function() {
        return this.user = this.user || new r(this.data.user, {parse: !0}), this.user
    },destroyViews: function() {
        _.invoke(this.views, "remove"), this.views = [], window.scrollTo(0, 0)
    },logout: function() {
        window.location = e.LOGOUT_URL
    }});
    return a
}), define("backends/eznode-backend", [], function() {
    function e(e) {
        this.url = e
    }
    return e.prototype.createAccount = function(e) {
        $.ajax({method: "POST",url: this.url,contentType: "application/json",data: JSON.stringify({account: e.account.toJSON(),screenerModel: e.screener.toJSON()}),success: function(t) {
            var n = e.account.parse(t);
            e.success(t)
        },error: function(t) {
            e.error(t)
        }})
    }, e.prototype.submitApplication = function(e) {
    }, e
}), define("config", function() {
}), define("common/backends/account-creation-backend", ["require", "exports", "underscore", "config"], function(e, t, n, r) {
    function i() {
    }
    return i.prototype.url = function(e) {
        var t = e || "en";
        return "/ee-rest/ffe/" + (t === "en" ? "en_US" : "es_MX") + "/MyAccountEIDMUnsecuredIntegration/createLiteEIDMAccount"
    }, i.prototype.createRequest = function(e, t) {
        var r = e[0], i = e[1], s = e[2] || "en", o = r.get("securityQuestions"), u = r.get("securityAnswers");
        questionsAndAnswers = n.map(o, function(e, t) {
            return {question: e,answer: u[t]}
        });
        var a = {firstName: r.get("firstName"),lastName: r.get("lastName"),userName: r.get("email"),email: r.get("email"),password: r.get("password"),subscriptionTrigger: r.get("newsAndUpdates"),stateLivedIn: i.get("coverageState"),language: s === "en" ? "en_US" : "es_MX",securityQuestions: questionsAndAnswers};
        return {url: this.url(s),headers: {"Content-Type": "application/json"},body: JSON.stringify(a)}
    }, i
}), define("common/models/account", ["models/base-model", "common/constants"], function(e, t) {
    var n = e.extend({defaults: {applicationId: null,coverageState: null,firstName: "",middleName: "",lastName: "",suffix: "",email: "",password: "",dob: "",ssn: "",sex: "",streetName: "",apartment: "",city: "",state: "",zipCode: "",phoneNumber: null,phoneExtension: null,phoneType: null,status: "NEW",errorMessage: null,ridpComplete: !1,ridpAttempts: 0,privacyPolicy: !1,newsAndUpdates: !1,application: null,applications: [],specialCasesStatus: "INCOMPLETE",securityQuestions: null,securityAnswers: null},initialize: function(e) {
        this.securityQuestionsRequired = !1, (!e || !e.securityQuestions) && this.set({securityQuestions: []}, {silent: !0}), (!e || !e.securityAnswers) && this.set({securityAnswers: []}, {silent: !0}), !e || !e.assertivePasswordCheck ? this.assertivePasswordCheck = !0 : this.assertivePasswordCheck = !1
    },safeAttributes: [],loggableAttributes: ["applicationId", "status", "errorMessage", "ridpComplete", "ridpAttempts", "privacyPolicy", "newsAndUpdates", "specialCasesStatus"],validation: function() {
        return {firstName: {pattern: "allowedSpecCharName",maxLength: 20},lastName: {pattern: "allowedSpecCharName",maxLength: 25},email: [{maxLength: 75}, {fn: this._validateEmail}],privacyPolicy: {acceptance: !0},password: this._validatePassword,securityQuestions: this._validateSecurityQuestions,securityAnswers: this._validateSecurityAnswers}
    },_validateEmail: function(e) {
        if (!e)
            return this.formatCustomError("emailInvalid");
        parts = e.split("@");
        if (parts.length !== 2)
            return this.formatCustomError("emailInvalid");
        var t = parts[0], n = parts[1];
        if (!/^[a-zA-Z0-9][A-Za-z0-9._\-]+$/.test(t))
            return this.formatCustomError("emailCharset");
        if (/^IPv6/.test(n) || /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(n))
            return this.formatCustomError("emailNoIp");
        if (!/^[A-z0-9._\-]+$/.test(n))
            return this.formatCustomError("emailHostChars");
        var r = n.split(".");
        if (r.length < 2)
            return this.formatCustomError("emailHostParts");
        for (var i = 0; i < r.length; i++)
            if (!r[i])
                return this.formatCustomError("emailHostInvalid")
    },validatePasswordRules: function(e, t) {
        if (!this.isNew())
            return;
        return this.assertivePasswordCheck ? this.validatePasswordRulesBBB(e, t) : this.validatePasswordRulesAAA(e)
    },_validatePassword: function(e, t, n) {
        return this.assertivePasswordCheck ? this._validatePasswordBBB(e, t, n) : this._validatePasswordAAA(e, t, n)
    },validatePasswordRulesAAA: function(e) {
        return {length: e.length >= 8 && e.length <= 20,"case": e.toLowerCase() !== e && e.toUpperCase() !== e,number: /[0-9]/.test(e)}
    },_validatePasswordAAA: function(e, t, n) {
        var r = this.validatePasswordRules(e);
        if (!_.all(r))
            return this.formatCustomError("pwRequires");
        if (/[=?<>()'"\/\\&]/.test(e))
            return this.formatCustomError("pwCharset");
        var i = n && n.email || this.get("email");
        if (i && e.toLowerCase().indexOf(i.toLowerCase()) > -1)
            return this.formatCustomError("pwEmail")
    },validatePasswordRulesBBB: function(e, t) {
        e = e || "";
        var n = !0;
        if (t) {
            var r = t.email || this.get("email") || "";
            r.indexOf("@") > 0 && (n = e.toLowerCase().indexOf(r.toLowerCase()) === -1)
        }
        return {length: e.length >= 8 && e.length <= 20,"case": e.toLowerCase() !== e && e.toUpperCase() !== e,number: /[0-9]/.test(e),blacklist: !/[=?<>()'"\/\\&]/.test(e),noemail: n}
    },_validatePasswordBBB: function(e, t, n) {
        e = e || "";
        var r = this.validatePasswordRules(e, n);
        if (!_.all(r)) {
            var i = [], s = [];
            r.length || s.push(this.formatCustomError("pwSubLength")), r["case"] || s.push(this.formatCustomError("pwSubMix")), r.number || s.push(this.formatCustomError("pwSubNum")), r.blacklist || s.push(this.formatCustomError("pwSubBlacklist")), r.noemail || s.push(this.formatCustomError("pwSubEmail"));
            if (s.length === 1)
                i.push(s[0]);
            else if (s.length === 2)
                s.splice(-1, 0, this.formatCustomError("pwAnd")), i.push(s.join(" "));
            else {
                var o = s.pop();
                i.push(s.join(", ")), i.push(this.formatCustomError("pwOxfordComma")), i.push(o)
            }
            return i.unshift(this.formatCustomError("pwMust")), i.push("."), i.join("")
        }
    },_validateSecurityQuestions: function(e) {
        if (!this.securityQuestionsRequired)
            return;
        if (!e || e.length !== 3)
            return this.formatCustomError("secQuestionNum");
        if (_.any(e, function(e) {
                return !e
            }))
            return this.formatCustomError("secQuestionNum")
    },validateSecurityAnswer: function(e) {
        if (!e)
            return this.formatCustomError("secAnsEmpty");
        if (e.length > 30)
            return this.formatCustomError("secAnsLength");
        if (!/^[a-zA-Z0-9][a-zA-Z0-9' \.\-]*$/.test(e))
            return this.formatCustomError("secAnsCharset")
    },_validateSecurityAnswers: function(e) {
        if (!this.securityQuestionsRequired)
            return;
        if (!e || e.length !== 3)
            return this.formatCustomError("secAnsMissing");
        var t, n = _.each(e, function(e) {
            t || (t = this.validateSecurityAnswer(e))
        }, this);
        return e[0] === e[1] || e[0] === e[2] || e[1] === e[2] ? this.formatCustomError("secAnsClash") : t
    }});
    return n.STATUS = {NEW: "NEW",ERROR: "ERROR",QUEUED: "QUEUED",CREATED: "CREATED"}, n
}), define("backends/ffm-backend", ["jquery", "underscore", "common/backends/account-creation-backend", "common/models/account"], function(e, t, n, r) {
    function i(e) {
        this.timeout = e.timeout || 3e4, this.account = new n
    }
    return i.prototype.createAccount = function(t) {
        var n = this.account.createRequest([t.account, t.screener, t.locale || "en"]);
        e.ajax({method: "POST",url: n.url,contentType: "application/json",timeout: this.timeout,data: n.body,success: function(e) {
            t.success({status: r.STATUS.CREATED,password: ""})
        },error: function(e) {
            t.error(e)
        }})
    }, i.prototype.submitApplication = function(e) {
    }, i
}), define("models/screener-model", ["models/base-model"], function(e) {
    var t = e.extend({defaults: {coverageState: ""},validation: {coverageState: {required: !0}}});
    return t.fromAppModel = function(e) {
        var n = _.keys(t.prototype.defaults);
        return new t(_.pick(e.attributes, n))
    }, t
}), topojson = function() {
    function e(e, t) {
        function n(t) {
            var n = e.arcs[t], r = n[0], i = [0, 0];
            return n.forEach(function(e) {
                i[0] += e[0], i[1] += e[1]
            }), [r, i]
        }
        var r = {}, i = {}, s = {};
        t.forEach(function(e) {
            var t = n(e);
            (r[t[0]] || (r[t[0]] = [])).push(e), (r[t[1]] || (r[t[1]] = [])).push(~e)
        }), t.forEach(function(e) {
            var t, r, o = n(e), u = o[0], f = o[1];
            if (t = s[u])
                if (delete s[t.end], t.push(e), t.end = f, r = i[f]) {
                    delete i[r.start];
                    var l = r === t ? t : t.concat(r);
                    i[l.start = t.start] = s[l.end = r.end] = l
                } else if (r = s[f]) {
                    delete i[r.start], delete s[r.end];
                    var l = t.concat(r.map(function(e) {
                        return ~e
                    }).reverse());
                    i[l.start = t.start] = s[l.end = r.start] = l
                } else
                    i[t.start] = s[t.end] = t;
            else if (t = i[f])
                if (delete i[t.start], t.unshift(e), t.start = u, r = s[u]) {
                    delete s[r.end];
                    var c = r === t ? t : r.concat(t);
                    i[c.start = r.start] = s[c.end = t.end] = c
                } else if (r = i[u]) {
                    delete i[r.start], delete s[r.end];
                    var c = r.map(function(e) {
                        return ~e
                    }).reverse().concat(t);
                    i[c.start = r.end] = s[c.end = t.end] = c
                } else
                    i[t.start] = s[t.end] = t;
            else if (t = i[u])
                if (delete i[t.start], t.unshift(~e), t.start = f, r = s[f]) {
                    delete s[r.end];
                    var c = r === t ? t : r.concat(t);
                    i[c.start = r.start] = s[c.end = t.end] = c
                } else if (r = i[f]) {
                    delete i[r.start], delete s[r.end];
                    var c = r.map(function(e) {
                        return ~e
                    }).reverse().concat(t);
                    i[c.start = r.end] = s[c.end = t.end] = c
                } else
                    i[t.start] = s[t.end] = t;
            else if (t = s[f])
                if (delete s[t.end], t.push(~e), t.end = u, r = s[u]) {
                    delete i[r.start];
                    var l = r === t ? t : t.concat(r);
                    i[l.start = t.start] = s[l.end = r.end] = l
                } else if (r = i[u]) {
                    delete i[r.start], delete s[r.end];
                    var l = t.concat(r.map(function(e) {
                        return ~e
                    }).reverse());
                    i[l.start = t.start] = s[l.end = r.start] = l
                } else
                    i[t.start] = s[t.end] = t;
            else
                t = [e], i[t.start = u] = s[t.end = f] = t
        });
        var o = [];
        for (var u in s)
            o.push(s[u]);
        return o
    }
    function t(t, r, i) {
        function s(e) {
            0 > e && (e = ~e), (c[e] || (c[e] = [])).push(l)
        }
        function o(e) {
            e.forEach(s)
        }
        function u(e) {
            e.forEach(o)
        }
        function a(e) {
            "GeometryCollection" === e.type ? e.geometries.forEach(a) : e.type in h && (l = e, h[e.type](e.arcs))
        }
        var f = [];
        if (arguments.length > 1) {
            var l, c = [], h = {LineString: o,MultiLineString: u,Polygon: u,MultiPolygon: function(e) {
                e.forEach(u)
            }};
            a(r), c.forEach(3 > arguments.length ? function(e, t) {
                f.push([t])
            } : function(e, t) {
                i(e[0], e[e.length - 1]) && f.push([t])
            })
        } else
            for (var p = 0, d = t.arcs.length; d > p; ++p)
                f.push([p]);
        return n(t, {type: "MultiLineString",arcs: e(t, f)})
    }
    function n(e, t) {
        function n(e, t) {
            t.length && t.pop();
            for (var n, i = d[0 > e ? ~e : e], s = 0, o = i.length, u = 0, a = 0; o > s; ++s)
                t.push([(u += (n = i[s])[0]) * l + h, (a += n[1]) * c + p]);
            0 > e && r(t, o)
        }
        function i(e) {
            return [e[0] * l + h, e[1] * c + p]
        }
        function s(e) {
            for (var t = [], r = 0, i = e.length; i > r; ++r)
                n(e[r], t);
            return 2 > t.length && t.push(t[0]), t
        }
        function o(e) {
            for (var t = s(e); 4 > t.length; )
                t.push(t[0]);
            return t
        }
        function u(e) {
            return e.map(o)
        }
        function a(e) {
            var t = e.type, n = "GeometryCollection" === t ? {type: t,geometries: e.geometries.map(a)} : t in v ? {type: t,coordinates: v[t](e)} : {type: null};
            return "id" in e && (n.id = e.id), "properties" in e && (n.properties = e.properties), n
        }
        var f = e.transform, l = f.scale[0], c = f.scale[1], h = f.translate[0], p = f.translate[1], d = e.arcs, v = {Point: function(e) {
            return i(e.coordinates)
        },MultiPoint: function(e) {
            return e.coordinates.map(i)
        },LineString: function(e) {
            return s(e.arcs)
        },MultiLineString: function(e) {
            return e.arcs.map(s)
        },Polygon: function(e) {
            return u(e.arcs)
        },MultiPolygon: function(e) {
            return e.arcs.map(u)
        }};
        return a(t)
    }
    function r(e, t) {
        for (var n, r = e.length, i = r - t; --r > i; )
            n = e[i], e[i++] = e[r], e[r] = n
    }
    function i(e, t) {
        for (var n = 0, r = e.length; r > n; ) {
            var i = n + r >>> 1;
            t > e[i] ? n = i + 1 : r = i
        }
        return n
    }
    function s(e) {
        function t(e, t) {
            e.forEach(function(e) {
                0 > e && (e = ~e);
                var n = s[e] || (s[e] = []);
                n[t] || (n.forEach(function(e) {
                    var n, r;
                    r = i(n = u[t], e), n[r] !== e && n.splice(r, 0, e), r = i(n = u[e], t), n[r] !== t && n.splice(r, 0, t)
                }), n[t] = t)
            })
        }
        function n(e, n) {
            e.forEach(function(e) {
                t(e, n)
            })
        }
        function r(e, t) {
            "GeometryCollection" === e.type ? e.geometries.forEach(function(e) {
                r(e, t)
            }) : e.type in a && a[e.type](e.arcs, t)
        }
        var s = [], u = e.map(function() {
            return []
        }), a = {LineString: t,MultiLineString: n,Polygon: n,MultiPolygon: function(e, t) {
            e.forEach(function(e) {
                n(e, t)
            })
        }};
        return e.forEach(r), u
    }
    return {version: "0.0.32",mesh: t,object: n,neighbors: s}
}(), define("topojson", function(e) {
    return function() {
        var t, n;
        return t || e.topojson
    }
}(this)), define("views/animated-map-view", ["topojson", "common/constants"], function(e, t) {
    var n = Backbone.View.extend({initialize: function(e) {
        this.stateDatumMap = {}, this.svg = null, this.svgGroup = null, this.centered = null, this.path = null, this.listenTo(this.model, "change:coverageState", this._onStateChange)
    },render: function() {
        var n = this, r = this.$el.width(), i = this.$el.height(), s = d3.geo.albersUsa().scale(1e3).translate([r / 2, i / 2]);
        this.path = d3.geo.path().projection(s), this.svg = d3.select(this.el).append("svg").attr("width", "100%").attr("height", "100%"), this.svgGroup = this.svg.append("g"), d3.json(t.STATIC_ROOT + "data/us-states-topo.json", function(t, r) {
            n.svgGroup.append("g").attr("class", "states").selectAll("path").data(e.object(r, r.objects["us-states"]).geometries).enter().append("path").attr("d", n.path).each(function(e) {
                n.stateDatumMap[e.properties.name] = e
            }), n.svgGroup.append("path").datum(e.mesh(r, r.objects["us-states"], function(e, t) {
                return e !== t
            })).attr("class", "state-borders").attr("d", n.path), n._onStateChange(n.model, n.model.get("coverageState"), {skipAnimation: !0}), n.$el.addClass("animated")
        })
    },_zoomToState: function(e, t) {
        this.centered = e;
        var n = this.path.centroid(e);
        this._zoomToPoint(n[0], n[1], 4, t)
    },_zoomOut: function() {
        this.centered = null;
        var e = this.$el.width(), t = this.$el.height();
        this._zoomToPoint(e / 2, t / 2, 1)
    },_zoomToPoint: function(e, t, n, r) {
        var i = this.$el.width(), s = this.$el.height(), o = this;
        this.svgGroup.selectAll("path").classed("active", function(e) {
            return e === o.centered
        });
        var u = "translate(" + i / 2 + "," + s / 2 + ")", a = "scale(" + n + ")", f = "translate(" + -e + "," + -t + ")", l = r ? 0 : 750;
        this.svgGroup.transition().duration(l).attr("transform", u + a + f).style("stroke-width", 1.5 / n + "px")
    },_onStateChange: function(e, t, n) {
        var r = this.stateDatumMap[t];
        _.delay(_.bind(function() {
            r ? this._zoomToState(r, !!n.skipAnimation) : this._zoomOut(), this.$el.toggleClass("zoomed", !!r)
        }, this))
    }});
    return n
}), function(e, t) {
    typeof define == "function" && define.amd ? define("jquery-showhide", ["jquery"], e) : e(t.jQuery || t.Zepto)
}(function(e, t) {
    function i(t, n) {
        this.element = e(t), this.init(n)
    }
    var n = "plugin_hideShowPassword", r = {show: "infer",innerToggle: !1,hideToggleUntil: !1,touchSupport: !1,toggleEvent: "click",toggleTouchEvent: "touchstart mousedown",wrapperClass: "hideShowPassword-wrapper",wrapperWidth: !0,toggleClass: "hideShowPassword-toggle",states: {shown: {inputClass: "hideShowPassword-shown",eventName: "passwordShown",toggleClass: "hideShowPassword-toggle-hide",toggleText: "Hide",attr: {type: "text",autocapitalize: "off",autocomplete: "off",autocorrect: "off",spellcheck: "false"}},hidden: {inputClass: "hideShowPassword-hidden",eventName: "passwordHidden",toggleClass: "hideShowPassword-toggle-show",toggleText: "Show",attr: {type: "password"}}},widthMethod: e.fn.outerWidth === t ? "width" : "outerWidth",heightMethod: e.fn.outerHeight === t ? "height" : "outerHeight"};
    i.prototype = {init: function(e) {
        this.update(e, r, this.element.prop("type") === "password"), this.options.innerToggle && this.initInnerToggle(this.element, this.options)
    },update: function(t, n, r) {
        n = n || this.options, r = r || !this.options.show, typeof t != "object" && (t = {show: t}), this.options = e.extend(!0, {}, n, t), this.options.show === "toggle" && (this.options.show = r), this.options.show === "infer" && (this.options.show = this.element.prop("type") !== "password"), this.ifCurrentOrNot(e.proxy(function(t) {
            e.each(t.attr, e.proxy(function(e, t) {
                this.element.prop(e, t)
            }, this)), this.element.addClass(t.inputClass).trigger(t.eventName)
        }, this), e.proxy(function(e) {
            this.element.removeClass(e.inputClass)
        }, this))
    },toggle: function() {
        this.update("toggle")
    },currentStateKey: function() {
        return this.options.show ? "shown" : "hidden"
    },ifCurrentOrNot: function(t, n) {
        var r = this.currentStateKey();
        e.each(this.options.states, function(e, i) {
            (r === e ? t : n)(i)
        })
    },initInnerToggle: function(t, n) {
        var r = t.css("direction") === "rtl" ? "left" : "right", i = t[n.widthMethod](), s = {position: "relative",display: t.css("display"),verticalAlign: t.css("verticalAlign"),marginTop: t.css("marginTop"),marginRight: t.css("marginRight"),marginBottom: t.css("marginBottom"),marginLeft: t.css("marginLeft")}, o = {position: "absolute",top: "50%",mozUserSelect: "none",webkitUserSelect: "none",msUserSelect: "none",userSelect: "none"}, u = {marginTop: 0,marginRight: 0,marginBottom: 0,marginLeft: 0}, a = "", f, l;
        t.wrap(e("<div />").addClass(n.wrapperClass).css(s)), f = t.parent(), n.wrapperWidth === !0 && f[n.widthMethod]() !== i ? f.css("width", i) : n.wrapperWidth !== !1 && n.wrapperWidth !== null && f.css("width", n.wrapperWidth), l = e("<div />").addClass(n.toggleClass), this.updateInnerToggle(l, this.currentStateKey(), n.states), o[r] = 0, l.css(o), l.appendTo(f), l.css("marginTop", l[n.heightMethod]() / -2), u["padding" + r.replace(/./, function(e) {
            return e[0].toUpperCase()
        })] = l[n.widthMethod](), t.css(u), n.touchSupport ? (l.css("pointerEvents", "none"), t.on(n.toggleTouchEvent, e.proxy(function(e) {
            var t = l.offset().left, i, s, o;
            t && (i = e.pageX || e.originalEvent.pageX, r === "left" ? (t += l[n.widthMethod](), s = i, o = t) : (s = t, o = i), o >= s && (e.preventDefault(), this.toggle()))
        }, this))) : l.on(n.toggleEvent, e.proxy(function() {
            this.toggle()
        }, this)), e.each(n.states, function(e, t) {
            a += t.eventName + " "
        }), t.on(a, e.proxy(function() {
            this.updateInnerToggle(l, this.currentStateKey(), n.states)
        }, this)), n.hideToggleUntil && (l.hide(), t.one(n.hideToggleUntil, function() {
            l.show()
        }))
    },updateInnerToggle: function(e, t, n) {
        this.ifCurrentOrNot(function(t) {
            e.addClass(t.toggleClass).text(t.toggleText)
        }, function(t) {
            e.removeClass(t.toggleClass)
        })
    }}, e.fn.hideShowPassword = function(t) {
        return this.each(function() {
            var r = e(this), s = r.data(n);
            s ? s.update(t) : r.data(n, new i(this, t))
        })
    }, e.each({show: !0,hide: !1,toggle: "toggle"}, function(t, n) {
        e.fn[t + "Password"] = function(t) {
            return this.hideShowPassword(e.extend({}, t, {show: n}))
        }
    })
}, this);
var Kicksend = {mailcheck: {threshold: 3,defaultDomains: ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.net", "googlemail.com", "msn.com", "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com", "outlook.com", "icloud.com"],defaultTopLevelDomains: ["com", "net", "org", "info", "edu", "gov", "mil", "us", "co.jp", "co.uk", "ca"],run: function(e) {
    e.domains = e.domains || Kicksend.mailcheck.defaultDomains, e.topLevelDomains = e.topLevelDomains || Kicksend.mailcheck.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || Kicksend.sift3Distance;
    var t = function(e) {
        return e
    }, n = e.suggested || t, r = e.empty || t, i = Kicksend.mailcheck.suggest(encodeURI(e.email), e.domains, e.topLevelDomains, e.distanceFunction);
    return i ? n(i) : r()
},suggest: function(e, t, n, r) {
    e = e.toLowerCase();
    var i = this.splitEmail(e), s = this.findClosestDomain(i.domain, t, r);
    if (s) {
        if (s != i.domain)
            return {address: i.address,domain: s,full: i.address + "@" + s}
    } else {
        var o = this.findClosestDomain(i.topLevelDomain, n);
        if (i.domain && o && o != i.topLevelDomain) {
            var u = i.domain;
            return s = u.substring(0, u.lastIndexOf(i.topLevelDomain)) + o, {address: i.address,domain: s,full: i.address + "@" + s}
        }
    }
    return !1
},findClosestDomain: function(e, t, n) {
    var r, i = 99, s = null;
    if (!e || !t)
        return !1;
    n || (n = this.sift3Distance);
    for (var o = 0; o < t.length; o++) {
        if (e === t[o])
            return e;
        r = n(e, t[o]), r < i && (i = r, s = t[o])
    }
    return i <= this.threshold && s !== null ? s : !1
},sift3Distance: function(e, t) {
    if (e == null || e.length === 0)
        return t == null || t.length === 0 ? 0 : t.length;
    if (t == null || t.length === 0)
        return e.length;
    var n = 0, r = 0, i = 0, s = 0, o = 5;
    while (n + r < e.length && n + i < t.length) {
        if (e.charAt(n + r) == t.charAt(n + i))
            s++;
        else {
            r = 0, i = 0;
            for (var u = 0; u < o; u++) {
                if (n + u < e.length && e.charAt(n + u) == t.charAt(n)) {
                    r = u;
                    break
                }
                if (n + u < t.length && e.charAt(n) == t.charAt(n + u)) {
                    i = u;
                    break
                }
            }
        }
        n++
    }
    return (e.length + t.length) / 2 - s
},splitEmail: function(e) {
    var t = e.split("@");
    if (t.length < 2)
        return !1;
    for (var n = 0; n < t.length; n++)
        if (t[n] === "")
            return !1;
    var r = t.pop(), i = r.split("."), s = "";
    if (i.length == 0)
        return !1;
    if (i.length == 1)
        s = i[0];
    else {
        for (var n = 1; n < i.length; n++)
            s += i[n] + ".";
        i.length >= 2 && (s = s.substring(0, s.length - 1))
    }
    return {topLevelDomain: s,domain: r,address: t.join("@")}
}}};
typeof module != "undefined" && module.exports && (module.exports = Kicksend.mailcheck), typeof window != "undefined" && window.jQuery && (function(e) {
    e.fn.mailcheck = function(e) {
        var t = this;
        if (e.suggested) {
            var n = e.suggested;
            e.suggested = function(e) {
                n(t, e)
            }
        }
        if (e.empty) {
            var r = e.empty;
            e.empty = function() {
                r.call(null, t)
            }
        }
        e.email = this.val(), Kicksend.mailcheck.run(e)
    }
}(jQuery), window.Kicksend = Kicksend), define("mailcheck", ["jquery"], function(e) {
    return function() {
        var t, n;
        return t || e.Kicksend
    }
}(this)), define("text!templates/lite-security-questions.html", [], function() {
    return '<div class="security-questions-section spacer-top25">\n  <div class="spacer-bottom10 input-label">\n    <%- content.securityQuestionsInstructions %>\n  </div>\n  <% _.times(3, function(i) { %>\n  <div class="question-container form-group">\n    <div class="form-select">\n      <select class="form-control security-question unselected"\n          name="securityQuestions[<%- i %>]" data-index="<%- i %>">\n        <option value="__unselected__"><%- content.pickAQuestion %></option>\n        <% _.each(questions, function(question, qi) { %>\n          <option value="<%- qi %>"><%- question %></option>\n        <% }) %>\n      </select>\n      <span class="caret"></span>\n    </div>\n    <div class="answer-container">\n      <input type="text" class="form-control answer-input"\n        name="securityAnswers[<%- i %>]"\n        data-index="<%- i %>"\n        aria-label="<%- content.answer %>"\n        placeholder="<%- content.answer %>"\n        >\n    </div>\n    <div class="glyphicon icon-ok hidden" aria-hidden="true">\n      <span class="glyphicon-ok" aria-hidden="true"></span>\n    </div>\n    <div class="glyphicon icon-error hidden" aria-hidden="true">\n      <span class="glyphicon-remove" aria-hidden="true"></span>\n    </div>\n  </div>\n  <% }) %>\n</div>\n\n'
}), define("views/security-questions-view", ["views/card-view", "util/browser-utils", "text!templates/lite-security-questions.html"], function(e, t, n) {
    var r = e.extend({templateText: n,cardName: "lite-security-questions",className: "",events: {"change .security-question": "_onQuestionChanged","change .answer-input": "_onAnswerChanged"},initialize: function(t) {
        e.prototype.initialize.call(this, t), this.selectedQuestions = {}, this.listenTo(this.model, "invalid", this._onModelFieldError), this.listenTo(this.model, "valid", this._onModelFieldValid), this.securityQuestions = this.getContent().eidmQuestions
    },getRenderData: function() {
        var t = e.prototype.getRenderData.call(this);
        return t.questions = this.securityQuestions, t
    },postRenderHooks: function() {
        e.prototype.postRenderHooks.call(this), t.needHackyOptgroupSelect(window.navigator.userAgent) && this.$(".security-question").append("<optgroup></optgroup>"), t.needHackySelectStyling(window.navigator.userAgent) && this.$("select").addClass("hacky-windows-select")
    },_onModelFieldError: function(e, t) {
        var n = t.securityAnswers;
        if (!n)
            return;
        var r = this.$(".answer-input"), i = _.map(r, function(e) {
            return $(e).val()
        }), s = null;
        i[2] === i[1] || i[2] === i[0] ? s = $(r[2]) : s = $(r[1]), this.renderInvalidMarker(s, n)
    },_onModelFieldValid: function(e, t) {
        if (_.contains(t, "securityAnswers"))
            return;
        this.clearInvalidMarker(".answer-input")
    },_updateOptions: function(e, t, n) {
        var r = e.data("index"), i = null;
        n !== undefined && (i = $("<option />").attr("value", n).text(this.securityQuestions[n])), _.each(_.rest(e.children("option")), function(e, r) {
            var s = $(e);
            s.val() === t ? s.remove() : i && s.val() > n && (i.insertBefore(s), i = null)
        })
    },_onQuestionChanged: function(e) {
        var t = $(e.currentTarget), n = t.val(), r = t.data("index"), i = this.selectedQuestions[r];
        this.selectedQuestions[r] = n, t.toggleClass("unselected", n === "__unselected__"), _.each(this.$(".security-question"), function(e) {
            var r = $(e);
            if (r.is(t))
                return;
            this._updateOptions(r, n, i)
        }, this);
        var s = this.$('[name="securityAnswers[' + r + ']"]'), o = !1;
        this._checkQuestionAnswerValid(t, s, o)
    },_onAnswerChanged: function(e) {
        var t = $(e.currentTarget), n = t.data("index"), r = this.$('[name="securityQuestions[' + n + ']"]'), i = !0;
        this._checkQuestionAnswerValid(r, t, i)
    },_checkQuestionAnswerValid: function(e, t, n) {
        if (!e.val() || e.val() === "__unselected__")
            return this.renderInvalidMarker(e, this.getContent().pickSecurityQuestion), !1;
        if (!t.val() && !n)
            return this.clearInvalidMarker(t, !1), !0;
        var r = this.model.validateSecurityAnswer(t.val());
        return r ? (this.renderInvalidMarker(t, r), !1) : (this.clearInvalidMarker(t), !0)
    },saveToModel: function() {
        var e = this, t = !1, n = [], r = [];
        return _.times(3, function(i) {
            var s = e.$('[name="securityQuestions[' + i + ']"]'), o = e.$('[name="securityAnswers[' + i + ']"]');
            t = !e._checkQuestionAnswerValid(s, o, !0) || t, n.push(e.securityQuestions[s.val()]), r.push($.trim(o.val()))
        }), t ? !1 : !!this.model.set({securityQuestions: n,securityAnswers: r}, {validate: ["securityQuestions", "securityAnswers"]})
    }});
    return r
}), define("text!templates/lite-account-creation.html", [], function() {
    return '<div>\n\n  <div class="clearfix spacer-bottom-25">\n    <div id="header-sr" class="col-sm-12">\n      <h1 class="sub"><%- content.createAccountHeading %></h1>\n      <%= content.createAccountSubHeading %>\n    </div>\n  </div>\n\n  <% /* Do NOT use the form tag AND do not use role="form" or JAWS 13-15 will\n        go crazy and re-read the entire form in every input. */ %>\n  <div class="account-form fadeable visible">\n  <!-- Contact Information -->\n    <div class="account-contact-fields">\n      <div class="clearfix row">\n        <div class="col-sm-6 clearfix">\n          <div class="form-group">\n            <input class="form-control" name="tendon:firstName" type="text"\n                maxlength="20"\n                autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n                aria-label="<%- content.firstName %>"\n                placeholder="<%- content.firstName %>"\n                aria-required="true"\n                aria-describedby="header-sr"\n                autofocus>\n            <p class="help-block error-message"></p>\n            <div class="visible-xs glyphicon icon-ok hidden" aria-hidden="true">\n              <span class="glyphicon-ok" aria-hidden="true"></span>\n            </div>\n            <div class="visible-xs glyphicon icon-error hidden" aria-hidden="true">\n              <span class="glyphicon-remove" aria-hidden="true"></span>\n            </div>\n          </div>\n        </div>\n        <div class="col-sm-6 clearfix">\n          <div class="form-group last-name">\n            <input class="form-control" name="tendon:lastName" type="text"\n                maxlength="25"\n                autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n                aria-label="<%- content.lastName %>"\n                placeholder="<%- content.lastName %>"\n                aria-required="true">\n            <p class="help-block error-message"></p>\n            <div class="glyphicon icon-ok hidden" aria-hidden="true">\n              <span class="glyphicon-ok" aria-hidden="true"></span>\n            </div>\n            <div class="glyphicon icon-error hidden" aria-hidden="true">\n              <span class="glyphicon-remove" aria-hidden="true"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div id="email-label-sr" class="input-label"><%- content.emailLabel %></div>\n      <div class="form-group">\n        <input class="form-control" name="tendon:email" type="email"\n            maxlength="74"\n            aria-label="<%- content.email %>"\n            placeholder="<%- content.email %>"\n            aria-required="true"\n            aria-describedby="email-label-sr">\n        <p class="help-block error-message"></p>\n        <div class="glyphicon icon-ok hidden" aria-hidden="true">\n          <span class="glyphicon-ok" aria-hidden="true"></span>\n        </div>\n        <div class="glyphicon icon-error hidden" aria-hidden="true">\n          <span class="glyphicon-remove" aria-hidden="true"></span>\n        </div>\n      </div>\n      <div class="form-group">\n        <label class="input-label checkbox-label">\n          <input type="checkbox" name="tendon:newsAndUpdates" value="true" checked>\n          <%- content.newsAndUpdatesLabel %>\n        </label>\n      </div>\n\n      <div id="password-label-sr" class="input-label row spacer-top25">\n        <% if (showPasswordCheckboxes) { %>\n          <div class="col-xs-1">\n            <%- content.passwordLabel %>\n          </div>\n          <div class="col-xs-11">\n            <span id="req_length" class="req"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span><%- content.passwordLabelLength %></span>\n            <span id="req_case" class="req"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span><%- content.passwordLabelCase %></span>\n            <span id="req_number" class="req"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span><%- content.passwordLabelNumber %></span>\n          </div>\n        <% } else { %>\n          <%- content.altPasswordLabel %>\n        <% } %>\n\n      </div>\n      <div class="form-group">\n        <input class="form-control" name="tendon:password" type="password"\n            maxlength="20"\n            autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n            aria-label="<%- content.password %>"\n            placeholder="<%- content.password %>"\n            aria-required="true"\n            aria-describedby="password-label-sr">\n        <p class="help-block error-message"></p>\n        <div class="glyphicon icon-ok hidden" aria-hidden="true">\n          <span class="glyphicon-ok" aria-hidden="true"></span>\n        </div>\n        <div class="glyphicon icon-error hidden" aria-hidden="true">\n          <span class="glyphicon-remove" aria-hidden="true"></span>\n        </div>\n      </div>\n\n      <% if (showRetypePassword) { %>\n      <div class="form-group">\n        <input class="form-control" name="confirmPassword" type="password"\n            maxlength="50"\n            autocorrect="off" autocapitalize="on" autocomplete="off" spellcheck="false"\n            aria-label="<%- content.repeatPassword %>"\n            placeholder="<%- content.repeatPassword %>"\n            aria-required="true">\n        <p class="help-block error-message"></p>\n        <div class="glyphicon icon-ok hidden" aria-hidden="true">\n          <span class="glyphicon-ok" aria-hidden="true"></span>\n        </div>\n        <div class="glyphicon icon-error hidden" aria-hidden="true">\n          <span class="glyphicon-remove" aria-hidden="true"></span>\n        </div>\n      </div>\n      <% } %>\n    </div>\n\n    <div class="create-account-final-controls">\n      <div class="spacer-bottom40 form-group privacy-policy">\n        <label class="input-label checkbox-label">\n          <input type="checkbox" name="tendon:privacyPolicy" value="true" aria-required="true">\n          <%- content.privacySentence %>\n          <a target="_blank" href="/privacy/"><%- content.privacyPolicy %></a>\n          <p class="help-block error-message"></p>\n          <% if (showPrivacyErrorIcon) { %>\n          <div class="glyphicon icon-ok hidden" aria-hidden="true">\n            <span class="glyphicon-ok" aria-hidden="true"></span>\n          </div>\n          <div class="glyphicon icon-error hidden" aria-hidden="true">\n            <span class="glyphicon-remove" aria-hidden="true"></span>\n          </div>\n          <% } %>\n        </label>\n      </div>\n      <div class="create-account spacer-bottom20 button-wrapper">\n        <button type="submit" aria-label="<%- content.createAccountButton %>"\n           class="btn btn-success btn-lg btn-create-account">\n          <%- content.createAccountButton %>\n        </button>\n        <div class="glyphicon account-creation-error-icon icon-error hidden" aria-hidden="true">\n          <span class="glyphicon-remove" aria-hidden="true"></span>\n        </div>\n      </div>\n      <div class="creating-account spacer-bottom20 hidden button-wrapper">\n        <a class="btn btn-success btn-lg btn-creating-account">\n          <%- content.creatingAccountButton %>\n          <img src="/marketplace/b/app2/img/loading.gif">\n        </a>\n      </div>\n      <div class="account-validation-error-message hidden spacer-bottom20 error-message">\n        <%- content.accountCreationValidationError %>\n        <ul class="invalid-fields">\n        </ul>\n        <%- content.accountCreationValidationErrorPleaseFix %>\n      </div>\n      <div class="account-exists-error-message hidden spacer-bottom20 error-message">\n          <%- content.accountCreationExistsError %>\n      </div>\n      <div class="account-generic-error-message hidden spacer-bottom20 error-message">\n        <%- content.accountCreationGenericError %> <%= content.contactSupport %>\n      </div>\n      <div class="account-server-error-message hidden spacer-bottom20">\n        <%- content.accountCreationServerError %> <%= content.contactSupport %>\n      </div>\n      <div class="button-wrapper">\n        <a href="<%- loginLink %>" class="btn-login btn btn-blue btn-lg btn-wrap">\n          <%- content.alreadyHaveAnAccountButton %>\n        </a>\n      </div>\n      <div id="account-error-message" class="hidden">\n        <%- content.accountCreationError %>\n      </div>\n    </div>\n\n    <div class="click-cover hidden"><% /* overlay to trap mouse clicks after submission */ %>\n    </div>\n  </div>\n\n  <div class="success-container fadeable col-sm-12">\n    <h1><%- content.successHeader %></h1>\n    <div class="instructions line1"></div>\n    <div class="instructions line2"></div>\n    <div class="button-wrapper">\n      <a class="btn btn-success btn-blue btn-lg email-link hidden" role="button">\n        <img class="email-icon hidden">\n      </a>\n    </div>\n  </div>\n</div>\n'
}), define("views/lite-account-view", ["jquery-showhide", "mailcheck", "common/constants", "models/account", "util/ab-util", "util/app-context", "views/card-view", "views/security-questions-view", "util/analytics", "text!templates/lite-account-creation.html"], function(e, t, n, r, i, s, o, u, a, f) {
    var l = {"aol.com": {url: "https://mail.aol.com/",icon: "img/mail-icons/aol-icon.png",name: "AOL Mail"},"gmail.com": {url: "https://mail.google.com/mail/",icon: "img/mail-icons/gmail-icon.ico",name: "Gmail"},"googlemail.com": {url: "https://mail.google.com/mail/",icon: "img/mail-icons/gmail-icon.ico",name: "Google Mail"},"hotmail.com": {url: "https://www.hotmail.com/",icon: "img/mail-icons/hotmail-icon.png",name: "Hotmail"},"live.com": {url: "https://mail.live.com/",icon: "img/mail-icons/hotmail-icon.png",name: "Live mail"},"yahoo.com": {url: "https://mail.yahoo.com/",icon: "img/mail-icons/yahoo-icon.png",name: "Yahoo Mail"},"ymail.com": {url: "https://ymail.com",icon: "img/mail-icons/yahoo-icon.png",name: "Yahoo Mail"}}, c = o.extend({templateText: f,className: "lite-account-creation",cardName: "lite-account-creation",events: {"click .btn-create-account": "_onSubmitClick",'keyup .account-contact-fields input[name="tendon:password"]': "_passwordKeyup","change .account-contact-fields .form-control": "_fieldChanged"},initialize: function(e) {
        o.prototype.initialize.call(this, _.extend({assertivePasswordCheck: i.flag("assertivePasswordCheck")}, e)), this.bindValidationEvents(this.model), a.track("MPL Registration Load"), this.model.on("change", this._onAccountChanged, this), this.screenerModel = e.screenerModel, this.standaloneMode = !!e.standaloneMode, this.backend = e.backend, this.showRetypePassword = i.flag("showRetypePassword"), this.showRevealPassword = i.flag("showRevealPassword"), this.model.securityQuestionsRequired = !0
    },getRenderData: function() {
        var e = o.prototype.getRenderData.call(this);
        return e.showRetypePassword = this.showRetypePassword, e.showPasswordCheckboxes = i.flag("showPasswordCheckboxes"), e.showPrivacyErrorIcon = i.flag("showPrivacyErrorIcon"), e.loginLink = s.getLocale() === "es" ? "/marketplace/global/es_MX/registration" : "/marketplace/global/en_US/registration", e.createAccountHeading = i.flag("createAccountHeading"), e.createAccountSubHeading = i.flag("createAccountSubHeading"), e
    },render: function() {
        return o.prototype.render.call(this), this.questionsView = new u({model: this.model}), this.questionsView.render().$el.insertAfter(this.$(".account-contact-fields")), this
    },postRenderHooks: function() {
        o.prototype.postRenderHooks.call(this);
        if (this.showRevealPassword) {
            var e = this;
            _.defer(function() {
                e.$("input[type=password]").hideShowPassword({show: !1,innerToggle: !0,wrapperWidth: !1,hideToggleUntil: "focus",states: {shown: {toggleText: e.getContent().hide},hidden: {toggleText: e.getContent().show}}})
            })
        }
        a.trackLinks(".btn-login", "MPL Registration Existing Account")
    },_validateMatchingPasswords: function() {
        var e = this.$('[name="tendon:password"]').val(), t = this.$('[name="confirmPassword"]').val();
        if (!t)
            return this.clearInvalidMarker("confirmPassword", !1), !1;
        if (e === t)
            return this.clearInvalidMarker("confirmPassword"), !0;
        var n = this.getContent(this.cardName);
        return this.renderInvalidMarker("confirmPassword", n.passwordsMismatch), !1
    },_passwordKeyup: function(e) {
        var t = e.target.value, n = this.model.validatePasswordRules(t);
        $("#req_length").toggleClass("ok", n.length), $("#req_case").toggleClass("ok", n["case"]), $("#req_number").toggleClass("ok", n.number);
        if (i.flag("assertivePasswordCheck")) {
            var r = $(e.target);
            r.data("assertive-validation") === "true" && this.preValidate("tendon:password")
        }
    },_fieldChanged: function(e) {
        var n = e.target.name;
        (n === "confirmPassword" || n === "tendon:password") && this._validateMatchingPasswords();
        if (n === "confirmPassword")
            return;
        if (this.preValidate(n)) {
            if (n === "tendon:email" && i.flag("suggestEmailDomain")) {
                var r = this, s = $(e.target);
                t.mailcheck.run({email: s.val(),suggested: function(e) {
                    r._suggestedEmailDomain = e.domain;
                    var t = r.getContent(this.cardName).suggestEmailCorrection, n = r.renderAnnotation(s.closest(".form-group"));
                    n.html(t).find(".email-id-suggestion").text(e.address).end().find(".email-domain-suggestion").text(e.domain).end()
                },empty: function(e) {
                    r.clearInvalidMarker("tendon:email")
                }})
            }
        } else if (n === "tendon:password" && i.flag("assertivePasswordCheck")) {
            var s = $(e.target);
            s.data("assertive-validation", "true")
        }
    },_onSubmitClick: function(e) {
        if (this.$(".btn-create-account").hasClass("disabled"))
            return;
        var t = this.saveToModel();
        this.questionsView && (t = this.questionsView.saveToModel() && t), this.showRetypePassword && !this._validateMatchingPasswords() && (t = !1);
        if (!t) {
            $(".icon-error").hide().fadeIn(400);
            if (i.flag("scrollToFirstValidationError")) {
                var n = this.$(".has-error");
                n.length && ($("html, body").animate({scrollTop: n.offset().top - 100}, 400), n.find("input").first().focus())
            }
            a.track("MPL Registration Invalid", {invalidFields: this.$(".has-error input").map(function() {
                return $(this).attr("name")
            })});
            if (i.flag("validationErrorSummary")) {
                this.$(".account-validation-error-message").removeClass("hidden");
                var r = $(".has-error .error-message").map(function(e, t) {
                    return $(t).text()
                });
                r = _.uniq(r), r = _.map(r, function(e) {
                    return $("<li />").text(e)
                }), $(".invalid-fields").html(""), $(".invalid-fields").append(r)
            }
            return
        }
        a.track("MPL Registration Submit", {}), this.disableForm(), this.$(".create-account").addClass("hidden"), this.$(".creating-account").removeClass("hidden"), this.$(".account-validation-error-message").addClass("hidden"), this.$(".account-generic-error-message").addClass("hidden"), this.$(".account-exists-error-message").addClass("hidden"), this.$(".account-server-error-message").addClass("hidden"), this.$(".account-creation-error-icon").addClass("hidden");
        var o = this, u = new Date;
        this.backend.createAccount({screener: this.screenerModel,account: this.model,locale: s.getLocale(),success: function(e) {
            o.model.set(e), o.$(".create-account").removeClass("hidden"), o.$(".creating-account").addClass("hidden"), o.onSuccess(), a.track("MPL Registration Success", {})
        },error: function(e) {
            o.enableForm(), o.$(".account-creation-error-icon").removeClass("hidden").fadeIn(400), o.$(".create-account").removeClass("hidden"), o.$(".creating-account").addClass("hidden"), a.track("MPL Registration Error", {state: o.screenerModel.get("coverageState"),emailDomain: (o.model.get("email") || "").split("@")[1] || "",reqLength: new Date - u}), o.standaloneMode ? o.$(".account-generic-error-message").removeClass("hidden") : e.status === 400 ? o.$(".account-exists-error-message").removeClass("hidden") : o.$(".account-server-error-message").removeClass("hidden")
        }})
    },_onAccountChanged: function() {
        var e = this.model.get("status");
        this.$("#creating-account-message").addClass("hidden");
        switch (e) {
            case r.STATUS.CREATED:
                this.$("#account-creation-message").removeClass("hidden");
                break;
            case r.STATUS.QUEUED:
                this.$("#account-queued-message").removeClass("hidden");
                break;
            case r.STATUS.ERROR:
                this.$("#account-error-message").removeClass("hidden"), this.$(".btn-create-account").prop("disabled", !1)
        }
    },disableForm: function() {
        this.$(".click-cover").removeClass("hidden"), this.$(".account-form").css({opacity: .5})
    },enableForm: function() {
        this.$(".click-cover").addClass("hidden"), this.$(".account-form").css({opacity: 1})
    },onSuccess: function() {
        var e = this.$(".success-container"), t = this.getContent(this.cardName), r = this.model.get("email"), s = t.successInstructions, o = t.successInstructions2;
        e.find(".instructions.line1").text(s).end().find(".instructions.line2").html(o).find(".email-text").text(r).end().end();
        if (r && r.split("@").length > 0) {
            var u = r.split("@")[1], a = l[u];
            if (a) {
                var f = t.checkEmailText.replace("{0}", a.name);
                e.find(".email-link").find(".email-icon").attr("src", n.STATIC_ROOT + a.icon).removeClass("hidden").end().append(f).attr("href", a.url).removeClass("hidden").end()
            }
        }
        e.addClass("visible");
        var c = $(window).scrollTop(), h = e.offset().top + e.height() + 50, p = h - $(window).height();
        p > c && $("html, body").animate({scrollTop: p}, 400);
        if (window.optimizely) {
            window.optimizely.push(["trackEvent", "mplAccountCreation"]);
            var d = i.flag("manualExperimentIds");
            for (var v = 0; v < d.length; v++)
                window.optimizely.push(["activate", d[v]])
        }
    }});
    return c
}), define("text!templates/lite-screener.html", [], function() {
    return '<div>\n\n<% if (isOpenEnrollmentPeriod) { %>\n\n  <h1 class="sub"><%- content.welcomeHeader %></h1>\n  <div class="subtitle welcome-desc">\n    <%- content.welcomeDescription %>\n  </div>\n\n<% } else { %>\n\n  <h1 class="sub"><%- content.closedHeader %></h1>\n  <div class="subtitle welcome-desc">\n    <%= content.explanation %>\n  </div>\n  <div class="welcome-sep-container row">\n    <ul>\n      <li class="col-sm-6"><%- content.marriedBornAdoptedReason %></li>\n      <li class="col-sm-6"><%- content.movedReason %></li>\n      <li class="col-sm-6"><%- content.lostCoverageReason %></li>\n      <li class="col-sm-6"><%= content.medicaidCHIPReason %></li>\n    </ul>\n  </div>\n  <div class="spacer-bottom10"><%= content.chooseYourState %></div>\n\n<% } %>\n\n  <form class="form-inline" role="form">\n    <div class="info-text-container">\n      <div class="screener-line">\n        <div class="state-container">\n        <span><%- content.iLiveIn %></span>\n          <div class="form-group form-select large">\n            <select class="form-control mad-lib state inline input-lg" name="tendon:coverageState" autofocus aria-label="State">\n              <option value="" selected="selected"><%- content.selectState %></option>\n              <option value="AL">Alabama</option>\n              <option value="AK">Alaska</option>\n              <option value="AS">American Samoa</option>\n              <option value="AZ">Arizona</option>\n              <option value="AR">Arkansas</option>\n              <option value="CA">California</option>\n              <option value="CO">Colorado</option>\n              <option value="CT">Connecticut</option>\n              <option value="DE">Delaware</option>\n              <option value="DC">District of Columbia</option>\n              <option value="FL">Florida</option>\n              <option value="GA">Georgia</option>\n              <option value="GU">Guam</option>\n              <option value="HI">Hawaii</option>\n              <option value="ID">Idaho</option>\n              <option value="IL">Illinois</option>\n              <option value="IN">Indiana</option>\n              <option value="IA">Iowa</option>\n              <option value="KS">Kansas</option>\n              <option value="KY">Kentucky</option>\n              <option value="LA">Louisiana</option>\n              <option value="ME">Maine</option>\n              <option value="MD">Maryland</option>\n              <option value="MA">Massachusetts</option>\n              <option value="MI">Michigan</option>\n              <option value="MN">Minnesota</option>\n              <option value="MS">Mississippi</option>\n              <option value="MO">Missouri</option>\n              <option value="MT">Montana</option>\n              <option value="NE">Nebraska</option>\n              <option value="NV">Nevada</option>\n              <option value="NH">New Hampshire</option>\n              <option value="NJ">New Jersey</option>\n              <option value="NM">New Mexico</option>\n              <option value="NY">New York</option>\n              <option value="NC">North Carolina</option>\n              <option value="ND">North Dakota</option>\n              <option value="MP">N. Mariana Islands</option>\n              <option value="OH">Ohio</option>\n              <option value="OK">Oklahoma</option>\n              <option value="OR">Oregon</option>\n              <option value="PA">Pennsylvania</option>\n              <option value="PR">Puerto Rico</option>\n              <option value="RI">Rhode Island</option>\n              <option value="SC">South Carolina</option>\n              <option value="SD">South Dakota</option>\n              <option value="TN">Tennessee</option>\n              <option value="TX">Texas</option>\n              <option value="UT">Utah</option>\n              <option value="VT">Vermont</option>\n              <option value="VI">Virgin Islands</option>\n              <option value="VA">Virginia</option>\n              <option value="WA">Washington</option>\n              <option value="WV">West Virginia</option>\n              <option value="WI">Wisconsin</option>\n              <option value="WY">Wyoming</option>\n            </select>\n            <span class="caret"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="success-container hidden" aria-live="polite">\n      <div class="state-info-site-container hidden">\n        <div class="msg-info-site spacer-bottom25"></div>\n      </div>\n\n      <button class="btn btn-lg btn-success btn-submit"><%- content.apply %></button>\n      <div class="msg-success"></div>\n\n      <div class="other-links">\n        <%= content.otherOptions %>\n      </div>\n    </div>\n\n    <div class="fail-territory-container hidden spacer-top25" aria-live="polite">\n      <%- content.territoryMessage %>\n    </div>\n\n    <% // Omitting aria-atomic here results in JAWS 13-15 repeating itself... %>\n    <div class="fail-state-container hidden" aria-atomic="true" aria-live="polite">\n      <div class="button-wrapper">\n        <div class="msg-success spacer-bottom10"></div>\n        <a class="btn btn-lg btn-success btn-submit"></a>\n      </div>\n    </div>\n  </form>\n</div>\n'
}), define("views/lite-screener-view", ["common/constants", "data/states", "views/card-view", "util/analytics", "util/browser-utils", "text!templates/lite-screener.html"], function(e, t, n, r, i, s) {
    var o = n.extend({templateText: s,className: function() {
        return this.options.isOpenEnrollmentPeriod ? "lite-screener" : "lite-screener post-enrollment"
    },cardName: "lite-screener",events: _.extend({}, n.prototype.events, {'change [name="tendon:coverageState"]': "onStateChanged","click .success-container .btn-submit": "_onSubmitClicked"}),initialize: function(e) {
        n.prototype.initialize.call(this, _.defaults(e, {onSuccess: null,isOpenEnrollmentPeriod: !1})), r.track("MPL Welcome Load"), this.options.isOpenEnrollmentPeriod || (this.cardName = "lite-screener-post-enrollment"), this.listenTo(this.model, "change:coverageState", this.updateFromStateSelect)
    },getRenderData: function() {
        return _.extend(n.prototype.getRenderData.apply(this, arguments), {isOpenEnrollmentPeriod: this.options.isOpenEnrollmentPeriod})
    },postRenderHooks: function() {
        n.prototype.postRenderHooks.call(this), this.loadFromModel(), this.updateFromStateSelect(), i.needHackySelectStyling(window.navigator.userAgent) && this.$("select").addClass("hacky-windows-select")
    },_onInputFocused: function(e) {
        $(e.target).closest(".form-group,.form-select").addClass("focus")
    },_onInputBlurred: function(e) {
        $(e.target).closest(".form-group,.form-select").removeClass("focus")
    },onStateChanged: function(e) {
        this.saveToModel("coverageState")
    },updateFromStateSelect: function() {
        var n = this.$('[name="tendon:coverageState"]'), i = n.val(), s = e.DEFAULT_COVERAGE_YEAR;
        if (!i)
            return;
        this._fullOpacity(n), r.track("MPL Welcome Select State", {state: i}), this.model.set("coverageState", i, {validate: "coverageState"});
        var o = t.getStateMarketplaceInfo(s, i), u = this.getContent(this.cardName);
        o && !o.shopOnly && !o.infoOnly ? (r.trackLinks(".fail-state-container .btn-submit", "MPL Welcome Sent to SBM", function(e) {
            return {state: $(e).data("state")}
        }), this.$(".fail-territory-container").addClass("hidden"), this.$(".success-container").addClass("hidden"), this.$(".fail-state-container").find(".msg-success").text(u.stateBaseMarketMessageFormat.replace("{0}", o.siteName)).end().find(".btn-submit").text(u.stateBaseMarketLinkFormat.replace("{0}", o.stateName)).data("state", i).attr("href", o.url).end().removeClass("hidden")) : t.isUncoveredTerritory(i) ? (this.$(".fail-state-container").addClass("hidden"), this.$(".fail-territory-container").removeClass("hidden"), this.$(".success-container").addClass("hidden")) : (this.$(".fail-state-container").addClass("hidden"), this.$(".fail-territory-container").addClass("hidden"), this.$(".success-container").removeClass("hidden"), o && o.infoOnly ? this.$(".state-info-site-container").find(".msg-info-site").html(u.stateInfoSiteMessageFormat.replace("{0}", o.stateName).replace("{1}", o.url).replace("{2}", o.siteName)).end().removeClass("hidden") : this.$(".state-info-site-container").addClass("hidden")), this.$('.state [value=""]').remove()
    },_fullOpacity: function(e) {
        e.addClass("selected")
    },_onSubmitClicked: function(e) {
        e.preventDefault();
        var t = this.model.get("coverageState");
        r.track("MPL Welcome Submit", {state: t}), this.options.onSuccess && this.options.onSuccess()
    }});
    return o
}), +function(e) {
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype.show = function() {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.data("target");
        r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        if (t.parent("li").hasClass("active"))
            return;
        var i = n.find(".active:last a")[0], s = e.Event("show.bs.tab", {relatedTarget: i});
        t.trigger(s);
        if (s.isDefaultPrevented())
            return;
        var o = e(r);
        this.activate(t.parent("li"), n), this.activate(o, o.parent(), function() {
            t.trigger({type: "shown.bs.tab",relatedTarget: i})
        })
    }, t.prototype.activate = function(t, n, r) {
        function o() {
            i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var i = n.find("> .active"), s = r && e.support.transition && i.hasClass("fade");
        s ? i.one(e.support.transition.end, o).emulateTransitionEnd(150) : o(), i.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery), define("bootstrap-tab", function() {
}), define("util/help-collection-nav", ["bootstrap-tab"], function(e) {
    var t = "tab-", n = function() {
        var e = document.location.hash;
        e ? $(".nav-tabs a[href=" + e.replace(t, "") + "]").tab("show") : $(".nav-tabs a").first().tab("show")
    }, r = function() {
        $(".tabbed-article-select").change(function(e) {
            var t = $(".tabbed-article-select").val();
            $('.nav-tabs a[href="#' + t + '"]').tab("show")
        }), $(".nav-tabs a").on("shown.bs.tab", function(e) {
            $(".help-heading").text($(".tab-pane.active .tab-title").html()), window.location.hash = e.target.hash.replace("#", "#" + t)
        }), n(), $(window).on("hashchange", n)
    };
    return {initialize: r}
}), define("text!templates/help-collection.html", [], function() {
    return '<div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n  <h1 class="help-heading"></h1>\n  <div class="row">\n    <div class="col-md-8 tab-content">\n      <% _.each(content.helpCollection, function(help, i) { %>\n        <div class="tab-pane" id="<%- help.id %>">\n          <h2 class="tab-title hidden">\n            <%= Strings.format(help.title, {\n              coverageYear: coverageYear\n            }) %>\n          </h2>\n          <%= Strings.format(help.content, {\n            coverageYear: coverageYear,\n            coverageYearPlusOne: coverageYear + 1\n          }) %>\n        </div>\n      <% }) %>\n    </div>\n    <%- /* Hidden tabs use Bootstraps switching logic */ %>\n    <div class="col-sm-3 hidden">\n      <nav>\n        <ul class="nav nav-tabs nav-stacked">\n          <% _.each(content.helpCollection, function(help, i) { %>\n            <li><a href="#<%- help.id %>" data-toggle="tab">\n              <%- Strings.format(help.title, {\n                coverageYear: coverageYear,\n                coverageYearPlusOne: coverageYear + 1\n              }) %>\n            </a></li>\n          <% }) %>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</div>\n'
}), define("views/help-collection-view", ["underscore", "util/strings", "common/constants", "views/card-view", "bootstrap-tab", "util/analytics", "util/help-collection-nav", "text!templates/help-collection.html"], function(e, t, n, r, i, s, o, u) {
    var a = r.extend({templateText: u,cardName: "help-collection",className: r.prototype.className + " help-collection",initialize: function(e) {
        r.prototype.initialize.call(this, e), s.track("MPL App Help Collection Load")
    },postRenderHooks: function() {
        r.prototype.postRenderHooks.apply(this, arguments), e.defer(function() {
            o.initialize()
        })
    },getRenderData: function() {
        return e.extend(r.prototype.getRenderData.call(this), {coverageYear: n.DEFAULT_COVERAGE_YEAR})
    }});
    return a
}), define("text!templates/help-collection-income.html", [], function() {
    return '<div class="lite-card-inner" aria-live="polite" aria-atomic="false">\n  <h1 class="help-heading"></h1>\n  <div class="row">\n    <%- /* Hidden tabs use Bootstraps switching logic */ %>\n    <div class="col-sm-3 hidden-xs">\n      <nav>\n        <ul class="nav nav-tabs nav-stacked">\n          <% _.each(content.helpCollection, function(help, i) { %>\n            <li><a href="#<%- help.id %>" data-toggle="tab">\n              <%- Strings.format(help.title, {\n                coverageYear: coverageYear,\n                coverageYearPlusOne: coverageYear + 1\n              }) %>\n            </a></li>\n          <% }) %>\n        </ul>\n      </nav>\n    </div>\n    <div class="col-md-8 col-sm-9 tab-content">\n      <% _.each(content.helpCollection, function(help, i) { %>\n        <div class="tab-pane" id="<%- help.id %>">\n          <h2 class="tab-title hidden">\n            <%= Strings.format(help.title, {\n              coverageYear: coverageYear\n            }) %>\n          </h2>\n          <%= Strings.format(help.content, {\n            coverageYear: coverageYear,\n            coverageYearPlusOne: coverageYear + 1\n          }) %>\n        </div>\n      <% }) %>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-sm-6 visible-xs">\n      <h2><%- content.dropdownTitle %></h2>\n      <div class="form-select">\n        <select title="Select article section" class="tabbed-article-select">\n          <option value=""><%- content.dropdownDefault %></option>\n          <% _.each(content.helpCollection, function(help, i) { %>\n            <option value="<%- help.id %>"><%- Strings.format(help.title, {\n              coverageYear: coverageYear\n            }) %></a></option>\n          <% }) %>\n        </select>\n        <span class="caret"></span>\n      </div>\n    </div>\n  </div>\n</div>\n'
}), define("views/help-collection-income-view", ["underscore", "util/strings", "common/constants", "views/card-view", "bootstrap-tab", "util/analytics", "util/help-collection-nav", "text!templates/help-collection-income.html"], function(e, t, n, r, i, s, o, u) {
    var a = r.extend({templateText: u,cardName: "help-collection-income",className: r.prototype.className + " help-collection-income",initialize: function(e) {
        r.prototype.initialize.call(this, e), s.track("MPL App Help Collection Income Load")
    },postRenderHooks: function() {
        r.prototype.postRenderHooks.apply(this, arguments), e.defer(function() {
            o.initialize()
        })
    },getRenderData: function() {
        return e.extend(r.prototype.getRenderData.call(this), {coverageYear: n.DEFAULT_COVERAGE_YEAR})
    }});
    return a
}), define("util/cache", ["common/constants"], function(e) {
    var t = {_key: function(e) {
        return "mpl-" + e
    },get: function(e) {
        var t = window.sessionStorage[this._key(e)];
        if (t)
            try {
                return JSON.parse(t)
            } catch (n) {
                return null
            }
        return null
    },set: function(e, t) {
        window.sessionStorage[this._key(e)] = JSON.stringify(t)
    },del: function(e) {
        var t = this._key(e);
        t in window.sessionStorage && delete window.sessionStorage[t]
    }}, n = {cookieName: "mpl-cookie-cache",store: null,_inflateCookie: function() {
        if (this.store)
            return this.store;
        var e = (document.cookie || "").split("; "), t = this.cookieName + "=", n = _.find(e, function(e) {
            return e.indexOf(t) === 0
        });
        if (!n)
            this.store = {};
        else
            try {
                var r = decodeURIComponent(n.split("=")[1]);
                this.store = JSON.parse(r)
            } catch (i) {
                this.store = {}
            }
        return this.store
    },_persistCookie: function() {
        if (!this.store || _.isEmpty(this.store))
            document.cookie = this.cookieName + "=; Max-Age=0; path=" + e.APP_ROOT + ";";
        else {
            var t = encodeURIComponent(JSON.stringify(this.store));
            document.cookie = this.cookieName + "=" + t + ";" + " path=" + e.APP_ROOT + ";"
        }
    },get: function(e) {
        return this._inflateCookie()[e] || null
    },set: function(e, t) {
        this._inflateCookie()[e] = t, this._persistCookie()
    },del: function(e) {
        delete this._inflateCookie()[e], this._persistCookie()
    }}, r = function() {
        try {
            window.sessionStorage.__mpltest__ = "42";
            var e = window.sessionStorage.__mpltest__ === "42";
            return delete window.sessionStorage.__mpltest__, e
        } catch (t) {
            return !1
        }
    };
    return {cache: r() ? t : n,_cookieCache: n,_sessionStorageCache: t,_supportsSessionStorage: r}
}), define("app-router", ["common/constants", "common/data/states", "backends/eznode-backend", "backends/ffm-backend", "models/account", "models/screener-model", "views/animated-map-view", "views/lite-account-view", "views/lite-screener-view", "views/help-collection-view", "views/help-collection-income-view", "util/ab-util", "util/analytics", "util/app-context", "util/cache", "util/input-util"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v) {
    var m = Backbone.Router.extend({initialize: function(t) {
        t = t || {}, window.ab = c, this.screenerModel = null, this.lastStep = null, this.data = t.data, this.standaloneMode = !0, this.useFullPageNavigation = c.flag("useFullPageNavigationForCreateAccount"), this.standaloneMode ? this.backend = new r({timeout: c.flag("ffmRestTimeoutMs")}) : this.backend = new n(e.APP_ROOT + "data/accounts/new")
    },routes: {"": "home","state=:state": "liteScreener","welcome(/)": "liteScreener","create-account(/)": "liteAccount","help/income(/)": "helpCollectionIncome","help(/)": "helpCollection"},home: function() {
        this.navigate("welcome/" + window.location.search, {trigger: !0,replace: !0})
    },maybeInitializeMap: function() {
        if (this.animatedMapView)
            return;
        if (_.isFunction(Array.prototype.map) && !$("body").hasClass("ie") && c.flag("showMap")) {
            var t = this, n = window.define;
            window.define = undefined, $.getScript(e.STATIC_ROOT + "js/libs/d3.v3.min.js", function() {
                window.define = n, t.animatedMapView = new o({model: t.screenerModel,el: ".animated-map"}), t.animatedMapView.render()
            })
        }
    },liteScreener: function(e) {
        window.location = "/get-coverage";
        return
    },navigateToAccountCreation: function() {
        this.useFullPageNavigation ? this.fullPageNavigateToAccountCreation() : (this.view.remove(), window.scrollTo(0, 0), this.navigate("create-account/", {trigger: !0}))
    },fullPageNavigateToAccountCreation: function() {
        d.cache.set("timestampedScreener", {screener: this.screenerModel.toJSON(),timestamp: Number(new Date)}), window.location = e.APP_ROOT + "create-account/"
    },navigateToClassicAccountCreation: function() {
        var e = p.getLocale() === "es" ? "es_MX" : "en_US";
        window.location = "/marketplace/global/" + e + "/registration#signUpStepOne"
    },clientSideNavigateToScreener: function() {
        this.navigate("welcome/", {trigger: !0,replace: !0})
    },liteAccount: function() {
        if (!this.screenerModel) {
            var t = d.cache.get("timestampedScreener");
            if (!t) {
                this.clientSideNavigateToScreener();
                return
            }
            var n = Number(new Date), r = Number(t.timestamp);
            if (isNaN(r) || n - r > 6e5) {
                d.cache.del("timestampedScreener"), this.clientSideNavigateToScreener();
                return
            }
            try {
                this.screenerModel = new s(_.pick(t.screener, _.keys(s.prototype.defaults)), {parse: !0})
            } catch (o) {
                this.clientSideNavigateToScreener()
            }
            this.maybeInitializeMap()
        }
        var a = this, f = new i;
        this.view = new u({model: f,screenerModel: this.screenerModel,onSuccess: function() {
            d.cache.del("timestampedScreener"), a.view.remove(), window.location = e.AUTHENTICATED_APP_ROOT, window.scrollTo(0, 0)
        },standaloneMode: a.standaloneMode,backend: a.backend}), $(".welcome-card-contents").html(a.view.render().el), v.resetHtml5()
    },helpCollectionIncome: function() {
        _.invoke(this.views, "remove");
        var e = new l;
        $("#main-body-content").html(e.render().el), this.views = [e]
    },helpCollection: function() {
        _.invoke(this.views, "remove");
        var e = new f;
        $("#main-body-content").html(e.render().el), this.views = [e]
    }});
    return m
}), require(["bootstrap-dropdown", "util/strings"], function(e, t) {
    var n = function(e) {
        e && e.preventDefault(), $(".mobile-menu-btn").off("click.show"), $("#wrapper").addClass("pushed");
        var t = $("#sidr");
        t.addClass("visible"), _.defer(function() {
            $(document.body).on("click.mobilenav", function(e) {
                !$.contains(t[0], e.target) && !t.is($(e.target)) && (r(), t = null)
            })
        })
    }, r = function() {
        $("#wrapper").removeClass("pushed"), $("#sidr").removeClass("visible"), $(document.body).off("click.mobilenav"), $(".mobile-menu-btn").on("click.show", n)
    };
    $(function() {
        $(".help-menu.dropdown .dropdown-toggle").dropdown(), $(".mobile-menu-btn").on("click.show", n), $(".toggle-language").on("click", function(e) {
            return window.location = t.toggleUrlLanguage(window.location.href), e.preventDefault(), !1
        })
    })
}), define("util/header-init", function() {
}), window.initAuthenticated = function(e) {
    require(["common/constants", "init/common-init", "util/app-context", "authenticated-app-router"], function(t, n, r, i) {
        r.configureApp(e), n(), new i({data: e}), Backbone.history.start({pushState: !0,root: t.AUTHENTICATED_APP_ROOT})
    })
}, window.initRidp = function(e) {
    require(["common/constants", "init/common-init", "util/app-context", "ridp-router"], function(t, n, r, i) {
        r.configureApp(e), n(), new i({data: e}), Backbone.history.start({pushState: !0,root: t.RIDP_ROOT})
    })
}, window.initWelcomePage = function(e) {
    require(["common/constants", "init/common-init", "util/app-context", "app-router"], function(t, n, r, i) {
        r.configureApp(e), n({requireCsrf: !1}), new i, Backbone.history.start({pushState: !0,root: t.APP_ROOT})
    })
}, require(["util/header-init"], function(e) {
}), define("main", function() {
});
