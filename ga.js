var _gat = new Object({
    c: "length",
    lb: "4.3",
    m: "cookie",
    b: undefined,
    cb: function(d, a) {
        this.zb = d;
        this.Nb = a
    },
    r: "__utma=",
    W: "__utmb=",
    ma: "__utmc=",
    Ta: "__utmk=",
    na: "__utmv=",
    oa: "__utmx=",
    Sa: "GASO=",
    X: "__utmz=",
    lc: "http://www.google-analytics.com/__utm.gif",
    mc: "https://ssl.google-analytics.com/__utm.gif",
    Wa: "utmcid=",
    Ya: "utmcsr=",
    $a: "utmgclid=",
    Ua: "utmccn=",
    Xa: "utmcmd=",
    Za: "utmctr=",
    Va: "utmcct=",
    Hb: false,
    _gasoDomain: undefined,
    _gasoCPath: undefined,
    e: window,
    a: document,
    k: navigator,
    t: function(d) {
        var a = 1,
        c = 0,
        h, o;
        if (!_gat.q(d)) {
            a = 0;
            for (h = d[_gat.c] - 1; h >= 0; h--) {
                o = d.charCodeAt(h);
                a = (a << 6 & 268435455) + o + (o << 14);
                c = a & 266338304;
                a = c != 0 ? a ^ c >> 21 : a
            }
        }
        return a
    },
    C: function(d, a, c) {
        var h = _gat,
        o = "-",
        k, l, s = h.q;
        if (!s(d) && !s(a) && !s(c)) {
            k = h.w(d, a);
            if (k > -1) {
                l = d.indexOf(c, k);
                if (l < 0) l = d[h.c];
                o = h.F(d, k + h.w(a, "=") + 1, l)
            }
        }
        return o
    },
    Ea: function(d) {
        var a = false,
        c = 0,
        h, o;
        if (!_gat.q(d)) {
            a = true;
            for (h = 0; h < d[_gat.c]; h++) {
                o = d.charAt(h);
                c += "." == o ? 1 : 0;
                a = a && c <= 1 && (0 == h && "-" == o || _gat.P(".0123456789", o))
            }
        }
        return a
    },
    d: function(d, a) {
        var c = encodeURIComponent;
        return c instanceof Function ? (a ? encodeURI(d) : c(d)) : escape(d)
    },
    J: function(d, a) {
        var c = decodeURIComponent,
        h;
        d = d.split("+").join(" ");
        if (c instanceof Function) try {
            h = a ? decodeURI(d) : c(d)
        } catch(o) {
            h = unescape(d)
        } else h = unescape(d);
        return h
    },
    Db: function(d) {
        return d && d.hash ? _gat.F(d.href, _gat.w(d.href, "#")) : ""
    },
    q: function(d) {
        return _gat.b == d || "-" == d || "" == d
    },
    Lb: function(d) {
        return d[_gat.c] > 0 && _gat.P(" \n\r\t", d)
    },
    P: function(d, a) {
        return _gat.w(d, a) > -1
    },
    h: function(d, a) {
        d[d[_gat.c]] = a
    },
    T: function(d) {
        return d.toLowerCase()
    },
    z: function(d, a) {
        return d.split(a)
    },
    w: function(d, a) {
        return d.indexOf(a)
    },
    F: function(d, a, c) {
        c = _gat.b == c ? d[_gat.c] : c;
        return d.substring(a, c)
    },
    uc: function() {
        var d = _gat.b,
        a = window;
        if (a && a.gaGlobal && a.gaGlobal.hid) d = a.gaGlobal.hid;
        else {
            d = Math.round(Math.random() * 2147483647);
            a.gaGlobal = a.gaGlobal ? a.gaGlobal: {};
            a.gaGlobal.hid = d
        }
        return d
    },
    wa: function() {
        return Math.round(Math.random() * 2147483647)
    },
    Gc: function() {
        return (_gat.wa() ^ _gat.vc()) * 2147483647
    },
    vc: function() {
        var d = _gat.k,
        a = _gat.a,
        c = _gat.e,
        h = a[_gat.m] ? a[_gat.m] : "",
        o = c.history[_gat.c],
        k,
        l,
        s = [d.appName, d.version, d.language ? d.language: d.browserLanguage, d.platform, d.userAgent, d.javaEnabled() ? 1 : 0].join("");
        if (c.screen) s += c.screen.width + "x" + c.screen.height + c.screen.colorDepth;
        else if (c.java) {
            l = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
            s += l.screen.width + "x" + l.screen.height
        }
        s += h;
        s += a.referrer ? a.referrer: "";
        k = s[_gat.c];
        while (o > 0) s += o--^k++;
        return _gat.t(s)
    }
});
_gat.hc = function() {
    var d = this,
    a = _gat.cb;
    function c(h, o) {
        return new a(h, o)
    }
    d.db = "utm_campaign";
    d.eb = "utm_content";
    d.fb = "utm_id";
    d.gb = "utm_medium";
    d.hb = "utm_nooverride";
    d.ib = "utm_source";
    d.jb = "utm_term";
    d.kb = "gclid";
    d.pa = 0;
    d.I = 0;
    d.wb = "15768000";
    d.Tb = "1800";
    d.ea = [];
    d.ga = [];
    d.Ic = "cse";
    d.Gb = "q";
    d.ab = "google";
    d.fa = [c(d.ab, d.Gb), c("yahoo", "p"), c("msn", "q"), c("aol", "query"), c("aol", "encquery"), c("lycos", "query"), c("ask", "q"), c("altavista", "q"), c("netscape", "query"), c("cnn", "query"), c("looksmart", "qt"), c("about", "terms"), c("mamma", "query"), c("alltheweb", "q"), c("gigablast", "q"), c("voila", "rdata"), c("virgilio", "qs"), c("live", "q"), c("baidu", "wd"), c("alice", "qs"), c("yandex", "text"), c("najdi", "q"), c("aol", "q"), c("club-internet", "query"), c("mama", "query"), c("seznam", "q"), c("search", "q"), c("wp", "szukaj"), c("onet", "qt"), c("netsprint", "q"), c("google.interia", "q"), c("szukacz", "q"), c("yam", "k"), c("pchome", "q"), c("kvasir", "searchExpr"), c("sesam", "q"), c("ozu", "q"), c("terra", "query"), c("nostrum", "query"), c("mynet", "q"), c("ekolay", "q"), c("search.ilse", "search_for")];
    d.B = undefined;
    d.Kb = false;
    d.p = "/";
    d.ha = 100;
    d.Da = "/__utm.gif";
    d.ta = 1;
    d.ua = 1;
    d.G = "|";
    d.sa = 1;
    d.qa = 1;
    d.pb = 1;
    d.g = "auto";
    d.D = 1;
    d.Ga = 1000;
    d.Yc = 10;
    d.nc = 10;
    d.Zc = 0.2
};
_gat.Y = function(d, a) {
    var c, h, o, k, l, s, q, f = this,
    n = _gat,
    w = n.q,
    x = n.c,
    g, z = a;
    f.a = d;
    function B(i) {
        var b = i instanceof Array ? i.join(".") : "";
        return w(b) ? "-": b
    }
    function A(i, b) {
        var e = [],
        j;
        if (!w(i)) {
            e = n.z(i, ".");
            if (b) for (j = 0; j < e[x]; j++) if (!n.Ea(e[j])) e[j] = "-"
        }
        return e
    }
    function p() {
        return u(63072000000)
    }
    function u(i) {
        var b = new Date,
        e = new Date(b.getTime() + i);
        return "expires=" + e.toGMTString() + "; "
    }
    function m(i, b) {
        f.a[n.m] = i + "; path=" + z.p + "; " + b + f.Cc()
    }
    function r(i, b, e) {
        var j = f.V,
        t, v;
        for (t = 0; t < j[x]; t++) {
            v = j[t][0];
            v += w(b) ? b: b + j[t][4];
            j[t][2](n.C(i, v, e))
        }
    }
    f.Jb = function() {
        return n.b == g || g == f.t()
    };
    f.Ba = function() {
        return l ? l: "-"
    };
    f.Wb = function(i) {
        l = i
    };
    f.Ma = function(i) {
        g = n.Ea(i) ? i * 1 : "-"
    };
    f.Aa = function() {
        return B(s)
    };
    f.Na = function(i) {
        s = A(i)
    };
    f.Hc = function() {
        return g ? g: "-"
    };
    f.Cc = function() {
        return w(z.g) ? "": "domain=" + z.g + ";"
    };
    f.ya = function() {
        return B(c)
    };
    f.Ub = function(i) {
        c = A(i, 1)
    };
    f.K = function() {
        return B(h)
    };
    f.La = function(i) {
        h = A(i, 1)
    };
    f.za = function() {
        return B(o)
    };
    f.Vb = function(i) {
        o = A(i, 1)
    };
    f.Ca = function() {
        return B(k)
    };
    f.Xb = function(i) {
        k = A(i);
        for (var b = 0; b < k[x]; b++) if (b < 4 && !n.Ea(k[b])) k[b] = "-"
    };
    f.Dc = function() {
        return q
    };
    f.Uc = function(i) {
        q = i
    };
    f.pc = function() {
        c = [];
        h = [];
        o = [];
        k = [];
        l = n.b;
        s = [];
        g = n.b
    };
    f.t = function() {
        var i = "",
        b;
        for (b = 0; b < f.V[x]; b++) i += f.V[b][1]();
        return n.t(i)
    };
    f.Ha = function(i) {
        var b = f.a[n.m],
        e = false;
        if (b) {
            r(b, i, ";");
            f.Ma(f.t());
            e = true
        }
        return e
    };
    f.Rc = function(i) {
        r(i, "", "&");
        f.Ma(n.C(i, n.Ta, "&"))
    };
    f.Wc = function() {
        var i = f.V,
        b = [],
        e;
        for (e = 0; e < i[x]; e++) n.h(b, i[e][0] + i[e][1]());
        n.h(b, n.Ta + f.t());
        return b.join("&")
    };
    f.bd = function(i, b) {
        var e = f.V,
        j = z.p,
        t;
        f.Ha(i);
        z.p = b;
        for (t = 0; t < e[x]; t++) if (!w(e[t][1]())) e[t][3]();
        z.p = j
    };
    f.dc = function() {
        m(n.r + f.ya(), p())
    };
    f.Pa = function() {
        m(n.W + f.K(), u(z.Tb * 1000))
    };
    f.ec = function() {
        m(n.ma + f.za(), "")
    };
    f.Ra = function() {
        m(n.X + f.Ca(), u(z.wb * 1000))
    };
    f.fc = function() {
        m(n.oa + f.Ba(), p())
    };
    f.Qa = function() {
        m(n.na + f.Aa(), p())
    };
    f.cd = function() {
        m(n.Sa + f.Dc(), "")
    };
    f.V = [[n.r, f.ya, f.Ub, f.dc, "."], [n.W, f.K, f.La, f.Pa, ""], [n.ma, f.za, f.Vb, f.ec, ""], [n.oa, f.Ba, f.Wb, f.fc, ""], [n.X, f.Ca, f.Xb, f.Ra, "."], [n.na, f.Aa, f.Na, f.Qa, "."]]
};
_gat.jc = function(d) {
    var a = this,
    c = _gat,
    h = d,
    o, k = function(l) {
        var s = (new Date).getTime(),
        q;
        q = (s - l[3]) * (h.Zc / 1000);
        if (q >= 1) {
            l[2] = Math.min(Math.floor(l[2] * 1 + q), h.nc);
            l[3] = s
        }
        return l
    };
    a.O = function(l, s, q, f, n, w, x) {
        var g, z = h.D,
        B = q.location;
        if (!o) o = new c.Y(q, h);
        o.Ha(f);
        g = c.z(o.K(), ".");
        if (g[1] < 500 || n) {
            if (w) g = k(g);
            if (n || !w || g[2] >= 1) {
                if (!n && w) g[2] = g[2] * 1 - 1;
                g[1] = g[1] * 1 + 1;
                l = "?utmwv=" + _gat.lb + "&utmn=" + c.wa() + (c.q(B.hostname) ? "": "&utmhn=" + c.d(B.hostname)) + (h.ha == 100 ? "": "&utmsp=" + c.d(h.ha)) + l;
                if (0 == z || 2 == z) {
                    var A = new Image(1, 1);
                    A.src = h.Da + l;
                    var p = 2 == z ?
                    function() {}: x ||
                    function() {};
                    A.onload = p
                }
                if (1 == z || 2 == z) {
                    var u = new Image(1, 1);
                    u.src = ("https:" == B.protocol ? c.mc: c.lc) + l + "&utmac=" + s + "&utmcc=" + a.wc(q, f);
                    u.onload = x ||
                    function() {}
                }
            }
        }
        o.La(g.join("."));
        o.Pa()
    };
    a.wc = function(l, s) {
        var q = [],
        f = [c.r, c.X, c.na, c.oa],
        n,
        w = l[c.m],
        x;
        for (n = 0; n < f[c.c]; n++) {
            x = c.C(w, f[n] + s, ";");
            if (!c.q(x)) c.h(q, f[n] + x + ";")
        }
        return c.d(q.join("+"))
    }
};
_gat.i = function() {
    this.la = []
};
_gat.i.bb = function(d, a, c, h, o, k) {
    var l = this;
    l.cc = d;
    l.Oa = a;
    l.L = c;
    l.sb = h;
    l.Pb = o;
    l.Qb = k
};
_gat.i.bb.prototype.S = function() {
    var d = this,
    a = _gat.d;
    return "&" + ["utmt=item", "utmtid=" + a(d.cc), "utmipc=" + a(d.Oa), "utmipn=" + a(d.L), "utmiva=" + a(d.sb), "utmipr=" + a(d.Pb), "utmiqt=" + a(d.Qb)].join("&")
};
_gat.i.$ = function(d, a, c, h, o, k, l, s) {
    var q = this;
    q.v = d;
    q.ob = a;
    q.bc = c;
    q.ac = h;
    q.Yb = o;
    q.ub = k;
    q.$b = l;
    q.xb = s;
    q.ca = []
};
_gat.i.$.prototype.mb = function(d, a, c, h, o) {
    var k = this,
    l = k.Eb(d),
    s = k.v,
    q = _gat;
    if (q.b == l) q.h(k.ca, new q.i.bb(s, d, a, c, h, o));
    else {
        l.cc = s;
        l.Oa = d;
        l.L = a;
        l.sb = c;
        l.Pb = h;
        l.Qb = o
    }
};
_gat.i.$.prototype.Eb = function(d) {
    var a, c = this.ca,
    h;
    for (h = 0; h < c[_gat.c]; h++) a = d == c[h].Oa ? c[h] : a;
    return a
};
_gat.i.$.prototype.S = function() {
    var d = this,
    a = _gat.d;
    return "&" + ["utmt=tran", "utmtid=" + a(d.v), "utmtst=" + a(d.ob), "utmtto=" + a(d.bc), "utmttx=" + a(d.ac), "utmtsp=" + a(d.Yb), "utmtci=" + a(d.ub), "utmtrg=" + a(d.$b), "utmtco=" + a(d.xb)].join("&")
};
_gat.i.prototype.nb = function(d, a, c, h, o, k, l, s) {
    var q = this,
    f = _gat,
    n = q.xa(d);
    if (f.b == n) {
        n = new f.i.$(d, a, c, h, o, k, l, s);
        f.h(q.la, n)
    } else {
        n.ob = a;
        n.bc = c;
        n.ac = h;
        n.Yb = o;
        n.ub = k;
        n.$b = l;
        n.xb = s
    }
    return n
};
_gat.i.prototype.xa = function(d) {
    var a, c = this.la,
    h;
    for (h = 0; h < c[_gat.c]; h++) a = d == c[h].v ? c[h] : a;
    return a
};
_gat.gc = function(d) {
    var a = this,
    c = "-",
    h = _gat,
    o = d;
    a.Ja = screen;
    a.qb = !self.screen && self.java ? java.awt.Toolkit.getDefaultToolkit() : h.b;
    a.a = document;
    a.e = window;
    a.k = navigator;
    a.Ka = c;
    a.Sb = c;
    a.tb = c;
    a.Ob = c;
    a.Mb = 1;
    a.Bb = c;
    function k() {
        var l, s, q, f, n = "ShockwaveFlash",
        w = "$version",
        x = a.k ? a.k.plugins: h.b;
        if (x && x[h.c] > 0) for (l = 0; l < x[h.c] && !q; l++) {
            s = x[l];
            if (h.P(s.name, "Shockwave Flash")) q = h.z(s.description, "Shockwave Flash ")[1]
        } else {
            n = n + "." + n;
            try {
                f = new ActiveXObject(n + ".7");
                q = f.GetVariable(w)
            } catch(g) {}
            if (!q) try {
                f = new ActiveXObject(n + ".6");
                q = "WIN 6,0,21,0";
                f.AllowScriptAccess = "always";
                q = f.GetVariable(w)
            } catch(z) {}
            if (!q) try {
                f = new ActiveXObject(n);
                q = f.GetVariable(w)
            } catch(z) {}
            if (q) {
                q = h.z(h.z(q, " ")[1], ",");
                q = q[0] + "." + q[1] + " r" + q[2]
            }
        }
        return q ? q: c
    }
    a.xc = function() {
        var l;
        if (self.screen) {
            a.Ka = a.Ja.width + "x" + a.Ja.height;
            a.Sb = a.Ja.colorDepth + "-bit"
        } else if (a.qb) try {
            l = a.qb.getScreenSize();
            a.Ka = l.width + "x" + l.height
        } catch(s) {}
        a.Ob = h.T(a.k && a.k.language ? a.k.language: (a.k && a.k.browserLanguage ? a.k.browserLanguage: c));
        a.Mb = a.k && a.k.javaEnabled() ? 1 : 0;
        a.Bb = o ? k() : c;
        a.tb = h.d(a.a.characterSet ? a.a.characterSet: (a.a.charset ? a.a.charset: c))
    };
    a.Xc = function() {
        return "&" + ["utmcs=" + h.d(a.tb), "utmsr=" + a.Ka, "utmsc=" + a.Sb, "utmul=" + a.Ob, "utmje=" + a.Mb, "utmfl=" + h.d(a.Bb)].join("&")
    }
};
_gat.n = function(d, a, c, h, o) {
    var k = this,
    l = _gat,
    s = l.q,
    q = l.b,
    f = l.P,
    n = l.C,
    w = l.T,
    x = l.z,
    g = l.c;
    k.a = a;
    k.f = d;
    k.Rb = c;
    k.ja = h;
    k.o = o;
    function z(p) {
        return s(p) || "0" == p || !f(p, "://")
    }
    function B(p) {
        var u = "";
        p = w(x(p, "://")[1]);
        if (f(p, "/")) {
            p = x(p, "/")[1];
            if (f(p, "?")) u = x(p, "?")[0]
        }
        return u
    }
    function A(p) {
        var u = "";
        u = w(x(p, "://")[1]);
        if (f(u, "/")) u = x(u, "/")[0];
        return u
    }
    k.Fc = function(p) {
        var u = k.Fb(),
        m = k.o;
        return new l.n.s(n(p, m.fb + "=", "&"), n(p, m.ib + "=", "&"), n(p, m.kb + "=", "&"), k.ba(p, m.db, "(not set)"), k.ba(p, m.gb, "(not set)"), k.ba(p, m.jb, u && !s(u.R) ? l.J(u.R) : q), k.ba(p, m.eb, q))
    };
    k.Ib = function(p) {
        var u = A(p),
        m = B(p);
        if (f(u, k.o.ab)) {
            p = x(p, "?").join("&");
            if (f(p, "&" + k.o.Gb + "=")) if (m == k.o.Ic) return true
        }
        return false
    };
    k.Fb = function() {
        var p, u, m = k.Rb,
        r, i, b = k.o.fa;
        if (z(m) || k.Ib(m)) return;
        p = A(m);
        for (r = 0; r < b[g]; r++) {
            i = b[r];
            if (f(p, w(i.zb))) {
                m = x(m, "?").join("&");
                if (f(m, "&" + i.Nb + "=")) {
                    u = x(m, "&" + i.Nb + "=")[1];
                    if (f(u, "&")) u = x(u, "&")[0];
                    return new l.n.s(q, i.zb, q, "(organic)", "organic", u, q)
                }
            }
        }
    };
    k.ba = function(p, u, m) {
        var r = n(p, u + "=", "&"),
        i = !s(r) ? l.J(r) : (!s(m) ? m: "-");
        return i
    };
    k.Nc = function(p) {
        var u = k.o.ea,
        m = false,
        r, i;
        if (p && "organic" == p.da) {
            r = w(l.J(p.R));
            for (i = 0; i < u[g]; i++) m = m || w(u[i]) == r
        }
        return m
    };
    k.Ec = function() {
        var p = "",
        u = "",
        m = k.Rb;
        if (z(m) || k.Ib(m)) return;
        p = w(x(m, "://")[1]);
        if (f(p, "/")) {
            u = l.F(p, l.w(p, "/"));
            if (f(u, "?")) u = x(u, "?")[0];
            p = x(p, "/")[0]
        }
        if (0 == l.w(p, "www.")) p = l.F(p, 4);
        return new l.n.s(q, p, q, "(referral)", "referral", q, u)
    };
    k.sc = function(p) {
        var u = "";
        if (k.o.pa) {
            u = l.Db(p);
            u = "" != u ? u + "&": u
        }
        u += p.search;
        return u
    };
    k.zc = function() {
        return new l.n.s(q, "(direct)", q, "(direct)", "(none)", q, q)
    };
    k.Oc = function(p) {
        var u = false,
        m, r, i = k.o.ga;
        if (p && "referral" == p.da) {
            m = w(l.d(p.ia));
            for (r = 0; r < i[g]; r++) u = u || f(m, w(i[r]))
        }
        return u
    };
    k.U = function(p) {
        return q != p && p.Fa()
    };
    k.yc = function(p, u) {
        var m = "",
        r = "-",
        i, b, e = 0,
        j, t, v = k.f;
        if (!p) return "";
        t = k.a[l.m] ? k.a[l.m] : "";
        m = k.sc(k.a.location);
        if (k.o.I && p.Jb()) {
            r = p.Ca();
            if (!s(r) && !f(r, ";")) {
                p.Ra();
                return ""
            }
        }
        r = n(t, l.X + v + ".", ";");
        i = k.Fc(m);
        if (k.U(i)) {
            b = n(m, k.o.hb + "=", "&");
            if ("1" == b && !s(r)) return ""
        }
        if (!k.U(i)) {
            i = k.Fb();
            if (!s(r) && k.Nc(i)) return ""
        }
        if (!k.U(i) && u) {
            i = k.Ec();
            if (!s(r) && k.Oc(i)) return ""
        }
        if (!k.U(i)) if (s(r) && u) i = k.zc();
        if (!k.U(i)) return "";
        if (!s(r)) {
            var y = x(r, "."),
            E = new l.n.s;
            E.Cb(y.slice(4).join("."));
            j = w(E.ka()) == w(i.ka());
            e = y[3] * 1
        }
        if (!j || u) {
            var F = n(t, l.r + v + ".", ";"),
            I = F.lastIndexOf("."),
            G = I > 9 ? l.F(F, I + 1) * 1 : 0;
            e++;
            G = 0 == G ? 1 : G;
            p.Xb([v, k.ja, G, e, i.ka()].join("."));
            p.Ra();
            return "&utmcn=1"
        } else return "&utmcr=1"
    }
};
_gat.n.s = function(d, a, c, h, o, k, l) {
    var s = this;
    s.v = d;
    s.ia = a;
    s.ra = c;
    s.L = h;
    s.da = o;
    s.R = k;
    s.vb = l
};
_gat.n.s.prototype.ka = function() {
    var d = this,
    a = _gat,
    c = [],
    h = [[a.Wa, d.v], [a.Ya, d.ia], [a.$a, d.ra], [a.Ua, d.L], [a.Xa, d.da], [a.Za, d.R], [a.Va, d.vb]],
    o,
    k;
    if (d.Fa()) for (o = 0; o < h[a.c]; o++) if (!a.q(h[o][1])) {
        k = h[o][1].split("+").join("%20");
        k = k.split(" ").join("%20");
        a.h(c, h[o][0] + k)
    }
    return c.join("|")
};
_gat.n.s.prototype.Fa = function() {
    var d = this,
    a = _gat.q;
    return ! (a(d.v) && a(d.ia) && a(d.ra))
};
_gat.n.s.prototype.Cb = function(d) {
    var a = this,
    c = _gat,
    h = function(o) {
        return c.J(c.C(d, o, "|"))
    };
    a.v = h(c.Wa);
    a.ia = h(c.Ya);
    a.ra = h(c.$a);
    a.L = h(c.Ua);
    a.da = h(c.Xa);
    a.R = h(c.Za);
    a.vb = h(c.Va)
};
_gat.Z = function() {
    var d = this,
    a = _gat,
    c = {},
    h = "k",
    o = "v",
    k = [h, o],
    l = "(",
    s = ")",
    q = "*",
    f = "!",
    n = "'",
    w = {};
    w[n] = "'0";
    w[s] = "'1";
    w[q] = "'2";
    w[f] = "'3";
    var x = 1;
    function g(m, r, i, b) {
        if (a.b == c[m]) c[m] = {};
        if (a.b == c[m][r]) c[m][r] = [];
        c[m][r][i] = b
    }
    function z(m, r, i) {
        return a.b != c[m] && a.b != c[m][r] ? c[m][r][i] : a.b
    }
    function B(m, r) {
        if (a.b != c[m] && a.b != c[m][r]) {
            c[m][r] = a.b;
            var i = true,
            b;
            for (b = 0; b < k[a.c]; b++) if (a.b != c[m][k[b]]) {
                i = false;
                break
            }
            if (i) c[m] = a.b
        }
    }
    function A(m) {
        var r = "",
        i = false,
        b, e;
        for (b = 0; b < k[a.c]; b++) {
            e = m[k[b]];
            if (a.b != e) {
                if (i) r += k[b];
                r += p(e);
                i = false
            } else i = true
        }
        return r
    }
    function p(m) {
        var r = [],
        i,
        b;
        for (b = 0; b < m[a.c]; b++) if (a.b != m[b]) {
            i = "";
            if (b != x && a.b == m[b - 1]) {
                i += b.toString();
                i += f
            }
            i += u(m[b]);
            a.h(r, i)
        }
        return l + r.join(q) + s
    }
    function u(m) {
        var r = "",
        i, b, e;
        for (i = 0; i < m[a.c]; i++) {
            b = m.charAt(i);
            e = w[b];
            r += a.b != e ? e: b
        }
        return r
    }
    d.Kc = function(m) {
        return a.b != c[m]
    };
    d.N = function() {
        var m = [],
        r;
        for (r in c) if (a.b != c[r]) a.h(m, r.toString() + A(c[r]));
        return m.join("")
    };
    d.Sc = function(m) {
        if (m == a.b) return d.N();
        var r = [m.N()],
        i;
        for (i in c) if (a.b != c[i] && !m.Kc(i)) a.h(r, i.toString() + A(c[i]));
        return r.join("")
    };
    d._setKey = function(m, r, i) {
        if (typeof i != "string") return false;
        g(m, h, r, i);
        return true
    };
    d._setValue = function(m, r, i) {
        if (typeof i != "number" && (a.b == Number || !(i instanceof Number))) return false;
        if (Math.round(i) != i || i == NaN || i == Infinity) return false;
        g(m, o, r, i.toString());
        return true
    };
    d._getKey = function(m, r) {
        return z(m, h, r)
    };
    d._getValue = function(m, r) {
        return z(m, o, r)
    };
    d._clearKey = function(m) {
        B(m, h)
    };
    d._clearValue = function(m) {
        B(m, o)
    }
};
_gat.ic = function(d, a) {
    var c = this;
    c.jd = a;
    c.Pc = d;
    c._trackEvent = function(h, o, k) {
        return a._trackEvent(c.Pc, h, o, k)
    }
};
_gat.kc = function(d) {
    var a = this,
    c = _gat,
    h = c.b,
    o = c.q,
    k = c.w,
    l = c.F,
    s = c.C,
    q = c.P,
    f = c.z,
    n = "location",
    w = c.c,
    x = h,
    g = new c.hc,
    z = false;
    a.a = document;
    a.e = window;
    a.ja = Math.round((new Date).getTime() / 1000);
    a.H = d;
    a.yb = a.a.referrer;
    a.va = h;
    a.j = h;
    a.A = h;
    a.M = false;
    a.aa = h;
    a.rb = "";
    a.l = h;
    a.Ab = h;
    a.f = h;
    a.u = h;
    function B() {
        if ("auto" == g.g) {
            var b = a.a.domain;
            if ("www." == l(b, 0, 4)) b = l(b, 4);
            g.g = b
        }
        g.g = c.T(g.g)
    }
    function A() {
        var b = g.g,
        e = k(b, "www.google.") * k(b, ".google.") * k(b, "google.");
        return e || "/" != g.p || k(b, "google.org") > -1
    }
    function p(b, e, j) {
        if (o(b) || o(e) || o(j)) return "-";
        var t = s(b, c.r + a.f + ".", e),
        v;
        if (!o(t)) {
            v = f(t, ".");
            v[5] = v[5] ? v[5] * 1 + 1 : 1;
            v[3] = v[4];
            v[4] = j;
            t = v.join(".")
        }
        return t
    }
    function u() {
        return "file:" != a.a[n].protocol && A()
    }
    function m(b) {
        if (!b || "" == b) return "";
        while (c.Lb(b.charAt(0))) b = l(b, 1);
        while (c.Lb(b.charAt(b[w] - 1))) b = l(b, 0, b[w] - 1);
        return b
    }
    function r(b, e, j) {
        if (!o(b())) {
            e(c.J(b()));
            if (!q(b(), ";")) j()
        }
    }
    function i(b) {
        var e, j = "" != b && a.a[n].host != b;
        if (j) for (e = 0; e < g.B[w]; e++) j = j && k(c.T(b), c.T(g.B[e])) == -1;
        return j
    }
    a.Bc = function() {
        if (!g.g || "" == g.g || "none" == g.g) {
            g.g = "";
            return 1
        }
        B();
        return g.pb ? c.t(g.g) : 1
    };
    a.tc = function(b, e) {
        if (o(b)) b = "-";
        else {
            e += g.p && "/" != g.p ? g.p: "";
            var j = k(b, e);
            b = j >= 0 && j <= 8 ? "0": ("[" == b.charAt(0) && "]" == b.charAt(b[w] - 1) ? "-": b)
        }
        return b
    };
    a.Ia = function(b) {
        var e = "",
        j = a.a;
        e += a.aa ? a.aa.Xc() : "";
        e += g.qa ? a.rb: "";
        e += g.ta && !o(j.title) ? "&utmdt=" + c.d(j.title) : "";
        e += "&utmhid=" + c.uc() + "&utmr=" + a.va + "&utmp=" + a.Tc(b);
        return e
    };
    a.Tc = function(b) {
        var e = a.a[n];
        b = h != b && "" != b ? c.d(b, true) : c.d(e.pathname + unescape(e.search), true);
        return b
    };
    a.$c = function(b) {
        if (a.Q()) {
            var e = "";
            if (a.l != h && a.l.N().length > 0) e += "&utme=" + c.d(a.l.N());
            e += a.Ia(b);
            x.O(e, a.H, a.a, a.f)
        }
    };
    a.qc = function() {
        var b = new c.Y(a.a, g);
        return b.Ha(a.f) ? b.Wc() : h
    };
    a._getLinkerUrl = function(b, e) {
        var j = f(b, "#"),
        t = b,
        v = a.qc();
        if (v) if (e && 1 >= j[w]) t += "#" + v;
        else if (!e || 1 >= j[w]) if (1 >= j[w]) t += (q(b, "?") ? "&": "?") + v;
        else t = j[0] + (q(b, "?") ? "&": "?") + v + "#" + j[1];
        return t
    };
    a.Zb = function() {
        var b;
        if (a.A && a.A[w] >= 10 && !q(a.A, "=")) {
            a.u.Uc(a.A);
            a.u.cd();
            c._gasoDomain = g.g;
            c._gasoCPath = g.p;
            b = a.a.createElement("script");
            b.type = "text/javascript";
            b.id = "_gasojs";
            b.src = "https://www.google.com/analytics/reporting/overlay_js?gaso=" + a.A + "&" + c.wa();
            a.a.getElementsByTagName("head")[0].appendChild(b)
        }
    };
    a.Jc = function() {
        var b = a.a[c.m],
        e = a.ja,
        j = a.u,
        t = a.f + "",
        v = a.e,
        y = v ? v.gaGlobal: h,
        E,
        F = q(b, c.r + t + "."),
        I = q(b, c.W + t),
        G = q(b, c.ma + t),
        C,
        D = [],
        H = "",
        K = false,
        J;
        b = o(b) ? "": b;
        if (g.I) {
            E = c.Db(a.a[n]);
            if (g.pa && !o(E)) H = E + "&";
            H += a.a[n].search;
            if (!o(H) && q(H, c.r)) {
                j.Rc(H);
                if (!j.Jb()) j.pc();
                C = j.ya()
            }
            r(j.Ba, j.Wb, j.fc);
            r(j.Aa, j.Na, j.Qa)
        }
        if (!o(C)) if (o(j.K()) || o(j.za())) {
            C = p(H, "&", e);
            a.M = true
        } else {
            D = f(j.K(), ".");
            t = D[0]
        } else if (F) if (!I || !G) {
            C = p(b, ";", e);
            a.M = true
        } else {
            C = s(b, c.r + t + ".", ";");
            D = f(s(b, c.W + t, ";"), ".")
        } else {
            C = [t, c.Gc(), e, e, e, 1].join(".");
            a.M = true;
            K = true
        }
        C = f(C, ".");
        if (v && y && y.dh == t) {
            C[4] = y.sid ? y.sid: C[4];
            if (K) {
                C[3] = y.sid ? y.sid: C[4];
                if (y.vid) {
                    J = f(y.vid, ".");
                    C[1] = J[0];
                    C[2] = J[1]
                }
            }
        }
        j.Ub(C.join("."));
        D[0] = t;
        D[1] = D[1] ? D[1] : 0;
        D[2] = undefined != D[2] ? D[2] : g.Yc;
        D[3] = D[3] ? D[3] : C[4];
        j.La(D.join("."));
        j.Vb(t);
        if (!o(j.Hc())) j.Ma(j.t());
        j.dc();
        j.Pa();
        j.ec()
    };
    a.Lc = function() {
        x = new c.jc(g)
    };
    a._initData = function() {
        var b;
        if (!z) {
            a.Lc();
            a.f = a.Bc();
            a.u = new c.Y(a.a, g)
        }
        if (u()) a.Jc();
        if (!z) {
            if (u()) {
                a.va = a.tc(a.Ac(), a.a.domain);
                if (g.sa) {
                    a.aa = new c.gc(g.ua);
                    a.aa.xc()
                }
                if (g.qa) {
                    b = new c.n(a.f, a.a, a.va, a.ja, g);
                    a.rb = b.yc(a.u, a.M)
                }
            }
            a.l = new c.Z;
            a.Ab = new c.Z;
            z = true
        }
        if (!c.Hb) a.Mc()
    };
    a._visitCode = function() {
        a._initData();
        var b = s(a.a[c.m], c.r + a.f + ".", ";"),
        e = f(b, ".");
        return e[w] < 4 ? "": e[1]
    };
    a._cookiePathCopy = function(b) {
        a._initData();
        if (a.u) a.u.bd(a.f, b)
    };
    a.Mc = function() {
        var b = a.a[n].hash,
        e;
        e = b && "" != b && 0 == k(b, "#gaso=") ? s(b, "gaso=", "&") : s(a.a[c.m], c.Sa, ";");
        if (e[w] >= 10) {
            a.A = e;
            if (a.e.addEventListener) a.e.addEventListener("load", a.Zb, false);
            else a.e.attachEvent("onload", a.Zb)
        }
        c.Hb = true
    };
    a.Q = function() {
        return a._visitCode() % 10000 < g.ha * 100
    };
    a.Vc = function() {
        var b, e, j = a.a.links;
        if (!g.Kb) {
            var t = a.a.domain;
            if ("www." == l(t, 0, 4)) t = l(t, 4);
            g.B.push("." + t)
        }
        for (b = 0; b < j[w] && (g.Ga == -1 || b < g.Ga); b++) {
            e = j[b];
            if (i(e.host)) if (!e.gatcOnclick) {
                e.gatcOnclick = e.onclick ? e.onclick: a.Qc;
                e.onclick = function(v) {
                    var y = !this.target || this.target == "_self" || this.target == "_top" || this.target == "_parent";
                    y = y && !a.oc(v);
                    a.ad(v, this, y);
                    return y ? false: (this.gatcOnclick ? this.gatcOnclick(v) : true)
                }
            }
        }
    };
    a.Qc = function() {};
    a._trackPageview = function(b) {
        if (u()) {
            a._initData();
            if (g.B) a.Vc();
            a.$c(b);
            a.M = false
        }
    };
    a._trackTrans = function() {
        var b = a.f,
        e = [],
        j,
        t,
        v,
        y;
        a._initData();
        if (a.j && a.Q()) {
            for (j = 0; j < a.j.la[w]; j++) {
                t = a.j.la[j];
                c.h(e, t.S());
                for (v = 0; v < t.ca[w]; v++) c.h(e, t.ca[v].S())
            }
            for (y = 0; y < e[w]; y++) x.O(e[y], a.H, a.a, b, true)
        }
    };
    a._setTrans = function() {
        var b = a.a,
        e, j, t, v, y = b.getElementById ? b.getElementById("utmtrans") : (b.utmform && b.utmform.utmtrans ? b.utmform.utmtrans: h);
        a._initData();
        if (y && y.value) {
            a.j = new c.i;
            v = f(y.value, "UTM:");
            g.G = !g.G || "" == g.G ? "|": g.G;
            for (e = 0; e < v[w]; e++) {
                v[e] = m(v[e]);
                j = f(v[e], g.G);
                for (t = 0; t < j[w]; t++) j[t] = m(j[t]);
                if ("T" == j[0]) a._addTrans(j[1], j[2], j[3], j[4], j[5], j[6], j[7], j[8]);
                else if ("I" == j[0]) a._addItem(j[1], j[2], j[3], j[4], j[5], j[6])
            }
        }
    };
    a._addTrans = function(b, e, j, t, v, y, E, F) {
        a.j = a.j ? a.j: new c.i;
        return a.j.nb(b, e, j, t, v, y, E, F)
    };
    a._addItem = function(b, e, j, t, v, y) {
        var E;
        a.j = a.j ? a.j: new c.i;
        E = a.j.xa(b);
        if (!E) E = a._addTrans(b, "", "", "", "", "", "", "");
        E.mb(e, j, t, v, y)
    };
    a._setVar = function(b) {
        if (b && "" != b && A()) {
            a._initData();
            var e = new c.Y(a.a, g),
            j = a.f;
            e.Na(j + "." + c.d(b));
            e.Qa();
            if (a.Q()) x.O("&utmt=var", a.H, a.a, a.f)
        }
    };
    a._link = function(b, e) {
        if (g.I && b) {
            a._initData();
            a.a[n].href = a._getLinkerUrl(b, e)
        }
    };
    a._linkByPost = function(b, e) {
        if (g.I && b && b.action) {
            a._initData();
            b.action = a._getLinkerUrl(b.action, e)
        }
    };
    a._setXKey = function(b, e, j) {
        a.l._setKey(b, e, j)
    };
    a._setXValue = function(b, e, j) {
        a.l._setValue(b, e, j)
    };
    a._getXKey = function(b, e) {
        return a.l._getKey(b, e)
    };
    a._getXValue = function(b, e) {
        return a.l.getValue(b, e)
    };
    a._clearXKey = function(b) {
        a.l._clearKey(b)
    };
    a._clearXValue = function(b) {
        a.l._clearValue(b)
    };
    a._createXObj = function() {
        a._initData();
        return new c.Z
    };
    a._sendXEvent = function(b) {
        var e = "";
        a._initData();
        if (a.Q()) {
            e += "&utmt=event&utme=" + c.d(a.l.Sc(b)) + a.Ia();
            x.O(e, a.H, a.a, a.f, false, true)
        }
    };
    a._createEventTracker = function(b) {
        a._initData();
        return new c.ic(b, a)
    };
    a._trackEvent = function(b, e, j, t) {
        var v = true,
        y = a.Ab;
        if (h != b && h != e && "" != b && "" != e) {
            y._clearKey(5);
            y._clearValue(5);
            v = y._setKey(5, 1, b) ? v: false;
            v = y._setKey(5, 2, e) ? v: false;
            v = h == j || y._setKey(5, 3, j) ? v: false;
            v = h == t || y._setValue(5, 1, t) ? v: false;
            if (v) a._sendXEvent(y)
        } else v = false;
        return v
    };
    a.ad = function(b, e, j) {
        a._initData();
        if (a.Q()) {
            var t = new c.Z;
            t._setKey(6, 1, e.href);
            var v = j ?
            function() {
                a.rc(b, e)
            }: undefined;
            x.O("&utmt=event&utme=" + c.d(t.N()) + a.Ia(), a.H, a.a, a.f, false, true, v)
        }
    };
    a.rc = function(b, e) {
        if (!b) b = a.e.event;
        var j = true;
        if (e.gatcOnclick) j = e.gatcOnclick(b);
        if (j || typeof j == "undefined") if (!e.target || e.target == "_self") a.e.location = e.href;
        else if (e.target == "_top") a.e.top.document.location = e.href;
        else if (e.target == "_parent") a.e.parent.document.location = e.href
    };
    a.oc = function(b) {
        if (!b) b = a.e.event;
        var e = b.shiftKey || b.ctrlKey || b.altKey;
        if (!e) if (b.modifiers && a.e.Event) e = b.modifiers & a.e.Event.CONTROL_MASK || b.modifiers & a.e.Event.SHIFT_MASK || b.modifiers & a.e.Event.ALT_MASK;
        return e
    };
    a._setDomainName = function(b) {
        g.g = b
    };
    a.dd = function() {
        return g.g
    };
    a._addOrganic = function(b, e) {
        c.h(g.fa, new c.cb(b, e))
    };
    a._clearOrganic = function() {
        g.fa = []
    };
    a.hd = function() {
        return g.fa
    };
    a._addIgnoredOrganic = function(b) {
        c.h(g.ea, b)
    };
    a._clearIgnoredOrganic = function() {
        g.ea = []
    };
    a.ed = function() {
        return g.ea
    };
    a._addIgnoredRef = function(b) {
        c.h(g.ga, b)
    };
    a._clearIgnoredRef = function() {
        g.ga = []
    };
    a.fd = function() {
        return g.ga
    };
    a._setAllowHash = function(b) {
        g.pb = b ? 1 : 0
    };
    a._setCampaignTrack = function(b) {
        g.qa = b ? 1 : 0
    };
    a._setClientInfo = function(b) {
        g.sa = b ? 1 : 0
    };
    a._getClientInfo = function() {
        return g.sa
    };
    a._setCookiePath = function(b) {
        g.p = b
    };
    a._setTransactionDelim = function(b) {
        g.G = b
    };
    a._setCookieTimeout = function(b) {
        g.wb = b
    };
    a._setDetectFlash = function(b) {
        g.ua = b ? 1 : 0
    };
    a._getDetectFlash = function() {
        return g.ua
    };
    a._setDetectTitle = function(b) {
        g.ta = b ? 1 : 0
    };
    a._getDetectTitle = function() {
        return g.ta
    };
    a._setLocalGifPath = function(b) {
        g.Da = b
    };
    a._getLocalGifPath = function() {
        return g.Da
    };
    a._setLocalServerMode = function() {
        g.D = 0
    };
    a._setRemoteServerMode = function() {
        g.D = 1
    };
    a._setLocalRemoteServerMode = function() {
        g.D = 2
    };
    a.gd = function() {
        return g.D
    };
    a._getServiceMode = function() {
        return g.D
    };
    a._setSampleRate = function(b) {
        g.ha = b
    };
    a._setSessionTimeout = function(b) {
        g.Tb = b
    };
    a._setAllowLinker = function(b) {
        g.I = b ? 1 : 0
    };
    a._setAllowAnchor = function(b) {
        g.pa = b ? 1 : 0
    };
    a._setCampNameKey = function(b) {
        g.db = b
    };
    a._setCampContentKey = function(b) {
        g.eb = b
    };
    a._setCampIdKey = function(b) {
        g.fb = b
    };
    a._setCampMediumKey = function(b) {
        g.gb = b
    };
    a._setCampNOKey = function(b) {
        g.hb = b
    };
    a._setCampSourceKey = function(b) {
        g.ib = b
    };
    a._setCampTermKey = function(b) {
        g.jb = b
    };
    a._setCampCIdKey = function(b) {
        g.kb = b
    };
    a._getAccount = function() {
        return a.H
    };
    a._getVersion = function() {
        return _gat.lb
    };
    a.kd = function(b) {
        g.B = [];
        if (b) g.B = b
    };
    a.md = function(b) {
        g.Kb = b
    };
    a.ld = function(b) {
        g.Ga = b
    };
    a._setReferrerOverride = function(b) {
        a.yb = b
    };
    a.Ac = function() {
        return a.yb
    }
};
_gat._getTracker = function(d) {
    var a = new _gat.kc(d);
    return a
};
