/*pub-1|2012-10-31 09:56:38*/(function() {
	var A = "_tb_beacon_loaded", b = window, m = document;
	if (!m.getElementsByTagName("body").length) {
		setTimeout(arguments.callee, 50);
		return
	}
	if (b[A]) {
		return
	}
	b[A] = 1;
	var d = "https:" == m.location.protocol, i = parent !== self, Ae = (d ? "https://img"
			: "http://www")
			+ ".atpanel.com/", J = Ae + "1.gif", AI = Ae + "ued.1.1.1", AB = v(), AF = Math
			.random(), AP = location.href, M = location.pathname, AT = d
			&& AP.indexOf("login.taobao.com") >= 0, O, S, u = {}, Y, AN = {}, p, j, N, AM, AZ, I, AY, F = "u", U, y, k, q, x = "::-plain-::", AL = "data-spm", AU = "data-spm-protocol", n = [
			"/theme/info/info", "/promo/co_header.php", "fast_buy.htm",
			"/add_collection.htm", "/taobao_digital_iframe",
			"/promo/co_header_taoinfo.php" ], AX = (new Date()).getTime(), AW = AX, AE = 5000, z = 0, AD = !!m.attachEvent, AH = "attachEvent", Q = "addEventListener", AQ = AD ? AH
			: Q, K = false, Ah = true, P = AG(AP);
	function L() {
		var An = b.goldlog_queue, Ak, Am, Aj;
		if (!An || !B(An) || !An.length) {
			return
		}
		while (Ak = An.shift()) {
			if (!Ak || !Ak.action || !Ac(Ak.action) || !Ak.arguments
					|| !B(Ak.arguments)) {
				continue
			}
			Aj = Ak.action.split(".");
			Am = b;
			while (Aj.length) {
				Am = Am[Aj.shift()];
				if (!Am) {
					return
				}
			}
			if (typeof Am == "function") {
				try {
					Am.apply(Am, Ak.arguments)
				} catch (Al) {
				}
			}
		}
	}
	function AJ() {
		var Aj = function() {
			L();
			setTimeout(Aj, 200)
		};
		Aj();
		s(b, "beforeunload", L)
	}
	function s(Ak, Al, Aj) {
		Ak[AQ]((AD ? "on" : "") + Al, function(An) {
			An = An || b.event;
			var Am = An.target || An.srcElement;
			Aj(An, Am)
		}, K)
	}
	var X = {
		send : function(Al, An) {
			var Ak = new Image(), Ap = "_img_" + Math.random(), Am = Al
					.indexOf("?") == -1 ? "?" : "&", Ao, Aj = An ? Z(An) : "";
			b[Ap] = Ak;
			Ak.onload = Ak.onerror = function() {
				b[Ap] = null
			};
			Ak.src = Ao = Aj ? (Al + Am + Aj) : Al;
			Ak = null;
			return Ao
		},
		emit : function(Am, Al) {
			var Aj = AR(Al), Ak = "ued.1.1.2?type=9";
			Aj["_gm:id"] = Am;
			return X.record(Ak, {}, Aj, "%")
		},
		record : function(Am, An, Ap, Ak) {
			Ak = arguments[3] || null;
			if (Ak != "%" && AG(AP) != Ak) {
				return
			}
			if (f(An) > 1) {
				return
			}
			var Al = Ae + Am, Aj = AR(Ap), Ao = Al.indexOf("?") == -1 ? "?"
					: "&";
			if (f(An) == 1) {
				Al += Ao + Z(An)
			}
			Aj._r_ = Math.random();
			return X.send(Al, Aj)
		}
	};
	if (!b.goldlog) {
		b.goldlog = X
	}
	if (!b.goldminer) {
		b.goldminer = {
			record : X.emit
		}
	}
	if (!b.goldlog_queue) {
		b.goldlog_queue = []
	}
	function f(Ak) {
		var Al = 0, Aj;
		for (Aj in Ak) {
			if (Ak.hasOwnProperty(Aj)) {
				Al++
			}
		}
		return Al
	}
	function AG(Ak) {
		Ak = (Ak || "").split("#")[0].split("?")[0];
		var Aj = Ak.length, Al = function(Ap) {
			var Ao, Am = Ap.length, An = 0;
			for (Ao = 0; Ao < Am; Ao++) {
				An = An * 31 + Ap.charCodeAt(Ao)
			}
			return An
		};
		return Aj ? Al(Aj + "#" + Ak.charCodeAt(Aj - 1)) : -1
	}
	function Ab() {
		if (!e(I)) {
			return I
		}
		var Ap = m.getElementsByTagName("head")[0], As, An, Ak, Aj, Aq, Al, Ao = Ap ? Ap
				.getElementsByTagName("meta")
				: null;
		if (Ao) {
			for (Ak = 0, Aj = Ao.length; Ak < Aj; Ak++) {
				As = Ao[Ak];
				An = l(As, "name");
				if (An == AL || An == "spm-id") {
					AY = l(As, "content");
					if (AY.indexOf(":") >= 0) {
						Aq = AY.split(":");
						F = Aq[0] == "i" ? "i" : "u";
						AY = Aq[1]
					}
					Al = l(As, AU);
					if (Al) {
						F = (Al == "i" ? "i" : "u")
					}
					U = (AY.indexOf("110") == 0);
					I = (U ? null : AY);
					break
				}
			}
		}
		I = I || null;
		if (!I) {
			return I
		}
		var Am = m.getElementsByTagName("body");
		var Ar;
		Am = Am && Am.length ? Am[0] : null;
		if (Am) {
			Ar = l(Am, AL);
			if (Ar) {
				Aq = I.split(".");
				I = Aq[0] + "." + Ar
			}
		}
		return I
	}
	function AA(Ak) {
		var Aj;
		try {
			Aj = Aa(Ak.getAttribute("href", 2))
		} catch (Al) {
		}
		return Aj || ""
	}
	function l(Aj, Ak) {
		return Aj && Aj.getAttribute ? (Aj.getAttribute(Ak) || "") : ""
	}
	function g(Aj, Am, Ak) {
		if (Aj && Aj.setAttribute) {
			try {
				Aj.setAttribute(Am, Ak)
			} catch (Al) {
			}
		}
	}
	function w(Aj, Al) {
		if (Aj && Aj.removeAttribute) {
			try {
				Aj.removeAttribute(Al)
			} catch (Ak) {
				g(Aj, Al, "")
			}
		}
	}
	function H() {
		var Aj = "g_aplus_pv_id", Al = "", Ak = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (!b[Aj]) {
			while (Al.length < 6) {
				Al += Ak.substr(Math.floor(Math.random() * 62), 1)
			}
			b[Aj] = Al
		}
		q = b[Aj]
	}
	function G(Am) {
		var Ak = [], Al, An, Aj;
		while (Am) {
			An = Am.tagName;
			if (Am.id) {
				Ak.unshift(An + "#" + Am.id);
				break
			}
			if (An == "BODY" || An == "HTML") {
				break
			}
			Aj = 0;
			Al = Am;
			while (Al = Al.previousSibling) {
				if (Al.tagName == An) {
					Aj++
				}
			}
			Ak.unshift(An + (Aj ? "[" + Aj + "]" : ""));
			Am = Am.parentNode
		}
		return Ak.join(" ")
	}
	function Z(Am) {
		var Aj = [], Al, Ak;
		for (Al in Am) {
			if (Am.hasOwnProperty(Al)) {
				Ak = "" + Am[Al];
				Aj.push(Al == x ? Ak : (Al + "=" + encodeURIComponent(Ak)))
			}
		}
		return Aj.join("&")
	}
	function AO(Aj) {
		var Al = [], An, Am, Ao, Ak = Aj.length;
		for (Ao = 0; Ao < Ak; Ao++) {
			An = Aj[Ao][0];
			Am = "" + Aj[Ao][1];
			Al.push(An == x ? Am : (An + "=" + encodeURIComponent(Am)))
		}
		return Al.join("&")
	}
	function AR(Ak) {
		var Al = {}, Aj;
		for (Aj in Ak) {
			if (Ak.hasOwnProperty(Aj)) {
				Al[Aj] = Ak[Aj]
			}
		}
		return Al
	}
	function V(Al, Ak) {
		for ( var Aj in Ak) {
			if (Ak.hasOwnProperty(Aj)) {
				Al[Aj] = Ak[Aj]
			}
		}
		return Al
	}
	function o(Ao) {
		var Ak = Ao.split("&"), Al = 0, Aj = Ak.length, Am, An = {};
		for (; Al < Aj; Al++) {
			Am = Ak[Al].split("=");
			An[Am[0]] = D(Am[1])
		}
		return An
	}
	function r(Aj) {
		return typeof Aj == "number"
	}
	function e(Aj) {
		return typeof Aj == "undefined"
	}
	function Ac(Aj) {
		return typeof Aj == "string"
	}
	function B(Aj) {
		return Object.prototype.toString.call(Aj) === "[object Array]"
	}
	function Ad(Ak, Aj) {
		return Ak.indexOf(Aj) >= 0
	}
	function h(Ak) {
		var Am = [], Aj, Al;
		for (; Ak && Ak.nodeType == 1; Ak = Ak.parentNode) {
			Aj = a(Ak);
			Al = Ak.tagName;
			if (Aj > 1) {
				Al += "[" + Aj + "]"
			}
			Am.unshift(Al)
		}
		return "/" + Am.join("/")
	}
	function a(Ak) {
		var Al = 1, Aj, Am = Ak.tagName;
		for (Aj = Ak.previousSibling; Aj; Aj = Aj.previousSibling) {
			if (Aj.nodeType == 1 && Aj.tagName == Am) {
				Al++
			}
		}
		return Al
	}
	function Ai() {
		var Al = m.compatMode == "BackCompat" ? m.body : m.documentElement, Aj = Math
				.max(Al.scrollWidth, Al.clientWidth), Ak = Math.max(
				Al.scrollHeight, Al.clientHeight);
		return [ Aj, Ak, Al.scrollTop, Al.scrollLeft ]
	}
	function c(Ak, Ar) {
		var Am = Ai(), An = Am[0], Av = Am[1], At = Am[2], Ao = Am[3];
		var Aw = Ar.pageX, Au = Ar.pageY;
		if (!r(Aw)) {
			Aw = Ar.clientX + Ao;
			Au = Ar.clientY + At
		}
		var As = -1, Aq, Aj;
		if (Ak) {
			if (Ak.getBoundingClientRect) {
				Aj = Ak.getBoundingClientRect();
				As = Aj.left + Ao;
				Aq = Aj.top + At
			} else {
			}
		}
		var Al = An >> 1, Ap;
		Aw -= Al;
		As -= Al;
		Ap = r(Aq) ? {
			elx : As,
			ely : Aq,
			elw : Ak.offsetWidth,
			elh : Ak.offsetHeight
		} : {};
		Ap.docw = An;
		Ap.doch = Av;
		Ap.x = Aw;
		Ap.y = Au;
		return Ap
	}
	function AK(Al) {
		var Aj, Ak;
		while (Al && Al.tagName != "BODY") {
			Aj = l(Al, "data-spm");
			if (!Aj || Aj.indexOf("110") != 0
					|| (Ak = Aj.split(".")).length != 3) {
				Al = Al.parentNode
			} else {
				return Ak[2]
			}
		}
		return ""
	}
	function R(Am, As) {
		var Aj, An, Ak, Ao, Au, Al, Ar = 0, Ap, Av, At = AK(Am), Aq = {};
		Aq.tpath = G(Am);
		while (Am && Am != m) {
			Al = Am.tagName;
			if (Al && Al != "HTML") {
				Ar = 1
			}
			if (!Ao
					&& (Al == "A" || Al == "AREA" || Al == "IMG"
							|| Al == "BUTTON" || Al == "INPUT" || Al == "TEXTAREA")) {
				Ao = Am
			}
			if (Al == "A" || Al == "AREA") {
				Au = Am;
				Aj = Aa(Am.getAttribute("href", 2)) || ""
			}
			if (Av = l(Am, "data-widgetid")) {
				Aq.widgetid = Av
			}
			if (Av = l(Am, "data-componentid")) {
				Aq.componentid = Av
			}
			if (!(An = Am.parentNode)) {
				break
			}
			Am = An
		}
		if (!Ar) {
			return
		}
		if (Aj) {
			Aq.href = Aj
		}
		Ap = c(Ao, As);
		V(Aq, Ap);
		z++;
		Aq.cc = z;
		Ak = (new Date()).getTime();
		Aq.t = Ak - AX;
		Aq.t2 = Ak - AW;
		AW = Ak;
		Aq.type = 1;
		if (At) {
			Aq.moduleId = At
		}
		C.send(Aq)
	}
	function E() {
		O = O || m.getElementsByTagName("head")[0];
		return S || (O ? (S = O.getElementsByTagName("meta")) : [])
	}
	function W(Aj) {
		var Ak = m.cookie.match(new RegExp("\\b" + Aj + "=([^;]+)"));
		return Ak ? Ak[1] : ""
	}
	function AS(Ak) {
		var Aj, An;
		try {
			Aj = [].slice.call(Ak);
			return Aj
		} catch (Am) {
			Aj = [];
			An = Ak.length;
			for ( var Al = 0; Al < An; Al++) {
				Aj.push(Ak[Al])
			}
			return Aj
		}
	}
	function Aa(Aj) {
		return Ac(Aj) ? Aj.replace(/^\s+|\s+$/g, "") : ""
	}
	function D(Am, Ak) {
		var Aj = Ak || "";
		if (Am) {
			try {
				Aj = decodeURIComponent(Am)
			} catch (Al) {
			}
		}
		return Aj
	}
	y = (function() {
		var Ao, An = "wm_referrer", Am = "refer_pv_id", Al = b.name || "", Aj = o(Al), Ap = Aj[An], Ak = Aj.wm_old_value;
		Ao = m.referrer || D(Ap);
		k = Aj[Am];
		if (!AT) {
			if (!e(Ak)) {
				b.name = D(Ak)
			} else {
				if (!e(Ap)) {
					b.name = Al.replace(/&?\bwm_referrer=[^&]*/g, "")
				}
			}
		}
		return Ao
	})();
	function AV() {
		for ( var Ak = 0, Aj = n.length; Ak < Aj; Ak++) {
			if (M.indexOf(n[Ak]) != -1) {
				return Ah
			}
		}
		return false
	}
	function v() {
		var Aj = m.getElementById("tb-beacon");
		return l(Aj, "exparams")
	}
	function Af(Ao, Ap) {
		var Al = Ao.split(";"), Am, Ak = Al.length, Aj, An;
		for (Am = 0; Am < Ak; Am++) {
			Aj = Al[Am].split("=");
			An = Aa(Aj[0]);
			if (An) {
				Ap[An] = D(Aa(Aj[1]))
			}
		}
	}
	function t() {
		var Ak, An, Al = E(), Aj = Al.length, Am;
		for (Ak = 0; Ak < Aj; Ak++) {
			An = Al[Ak];
			if (l(An, "name") == "microscope-data") {
				Am = l(An, "content");
				Af(Am, u)
			}
		}
		Y = Z(u);
		N = u.shopId;
		AM = u.siteInstanceId;
		AZ = u.pageId;
		j = AM || N
	}
	function AC() {
		var Ak, An, Al = E(), Aj = Al.length, Am;
		for (Ak = 0; Ak < Aj; Ak++) {
			An = Al[Ak];
			if (l(An, "name") == "atp-beacon") {
				Am = l(An, "content");
				Af(Am, AN)
			}
		}
		p = Z(AN)
	}
	function T() {
		if (i) {
			return
		}
		var Ak = b.name || "", Al = AT ? (m.referrer || AP) : AP, Aj = {
			refer_pv_id : q
		};
		if (d) {
			Aj.wm_referrer = Al
		}
		if (Ak.indexOf("=") == -1) {
			Aj.wm_old_value = Ak;
			b.name = Z(Aj)
		} else {
			if (AT && Ak.match(/&?\bwm_referrer=[^&]+/)) {
				delete Aj.wm_referrer
			}
			Ak = o(Ak);
			V(Ak, Aj);
			b.name = Z(Ak)
		}
	}
	var Ag = {
		init : function() {
			if (!i || AV()) {
				Ag.send(J)
			}
			if (i) {
				AC();
				var Ak, Aj = AN.on, Al = (Aj == "1" ? "http://ac.atpanel.com/1.gif"
						: "http://www.atpanel.com/1.gif");
				if ((Aj == "1" || Aj == "2") && (Ak = AN.chksum)
						&& Ak === AG(AP).toString()) {
					Ag.send(Al)
				}
			}
			if (AT) {
				T()
			} else {
				C.on(b, "beforeunload", function() {
					T()
				})
			}
		},
		send : function(Ao) {
			var Aj = new Image(), Ap = "_ta_rndid_" + Math.random(), An, Am, Al = u.pageId, Ak = u.prototypeId;
			An = W("cna");
			Am = W("tracknick");
			b[Ap] = Aj;
			Aj.onload = Aj.onerror = function() {
				b[Ap] = null
			};
			b.g_atp_pv_req = Aj.src = Ao + "?cache="
					+ Math.floor(AF * 9999999 + 1) + "&pre=" + escape(y)
					+ "&scr=" + screen.width + "x" + screen.height + "&ul_chk="
					+ P
					+ (An ? ("&acookie_cna=" + encodeURIComponent(An)) : "")
					+ (Am ? ("&tracknick=" + encodeURIComponent(Am)) : "")
					+ "&isbetanew=1&" + AB + (k ? ("&rpi_bi=" + k) : "")
					+ (q ? ("&upi_bi=" + q) : "")
					+ (Al ? ("&wm_pageid=" + Al) : "")
					+ (Ak ? ("&wm_prototypeid=" + Ak) : "")
					+ (N ? ("&wm_sid=" + N) : "")
					+ (AM ? ("&wm_instanceid=" + AM) : "")
					+ (I ? ("&spm-cnt=" + I) : "");
			Aj = null
		}
	}, C = {
		cfg : {},
		init : function() {
			C.cid = W(C.cfg.cookie_id || "t");
			C.sw = b.screen.width;
			C.sh = b.screen.height;
			C.on(m, "mousedown", function(Ak, Aj) {
				if (Aj) {
					R(Aj, Ak)
				}
			});
			C.send({
				type : 0
			})
		},
		on : function(Ak, Al, Aj) {
			s(Ak, Al, Aj)
		},
		send : function(An, Am, Ak) {
			var Aq = Math.random(), Ap = "rnd_id_" + Aq, Aj, Al = function() {
				b[Ap] = null
			};
			An.pvid = q;
			An.r = Aq;
			An.referrer = encodeURIComponent(y);
			An.cid = C.cid || "";
			An.g_id = j || "";
			An.v_id = u.pageId || "";
			if (Am) {
				An.type = 4
			}
			An.exdata = encodeURIComponent(Y);
			Aj = new Image();
			b[Ap] = Aj;
			Aj.onload = function() {
				b[Ap] = null
			};
			Aj.onerror = Al;
			var Ao = (Ak || AI) + "?";
			if (An.hasOwnProperty("type")) {
				Ao += "type=" + An.type;
				delete An.type
			}
			Aj.src = Ao + "&" + Z(An);
			Aj = null;
			setTimeout(function() {
				b[Ap] && (b[Ap].src = "");
				Al()
			}, AE)
		}
	};
	if (AP.indexOf("atp-ignore=1") > -1) {
		return
	}
	AJ();
	t();
	Ab();
	H();
	Ag.init();
	b.webmicroscope = {
		send : function(Ak, Aj) {
			Aj = Aj || {};
			C.send(Ak, 1, Aj.url)
		}
	};
	(function() {
		if (b.g_tb_aplus_loaded) {
			return
		}
		var At;
		var A0;
		var Aj = "data-spm-wangpu-module-id";
		function Av(A5) {
			var BC, BA, A8, A4, BB, A9 = [], BD, A7, A6;
			BC = AS(A5.getElementsByTagName("a"));
			BA = AS(A5.getElementsByTagName("area"));
			A4 = BC.concat(BA);
			for (A7 = 0, A6 = A4.length; A7 < A6; A7++) {
				BD = false;
				BB = A8 = A4[A7];
				while (BB = BB.parentNode) {
					if (BB == A5) {
						break
					}
					if (l(BB, AL)) {
						BD = true;
						break
					}
				}
				if (!BD) {
					A9.push(A8)
				}
			}
			return A9
		}
		function A2(A8) {
			var BG, A5, BD, A4, A9, BA, A6, BJ, BI, A7, BC, BB, BH, BF, BE;
			if (l(A8, "data-spm-delay")) {
				A8.setAttribute("data-spm-delay", "");
				return
			}
			BG = A8.getAttribute(AL) || "";
			if (!BG) {
				return
			}
			A5 = Av(A8);
			BH = (A0 && BG.indexOf("110") == 0);
			if (BH) {
				A4 = BG.split(".");
				BF = A4[A4.length - 1]
			}
			if (Ac(BI = Ab()) && BI.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/)) {
				if (!Ad(BG, ".")) {
					if (!Ad(BI, ".")) {
						BI += ".0"
					}
					BG = BI + "." + BG
				} else {
					if (BG.indexOf(BI) != 0) {
						A9 = BI.split(".");
						A4 = BG.split(".");
						for (BC = 0, A7 = A9.length; BC < A7; BC++) {
							A4[BC] = A9[BC]
						}
						BG = A4.join(".")
					}
				}
			}
			if (!BG.match || !BG.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)) {
				return
			}
			BE = parseInt(l(A8, "data-spm-max-idx")) || 0;
			for (BB = 0, BA = BE, A7 = A5.length; BB < A7; BB++) {
				BD = A5[BB];
				A6 = AA(BD);
				if (!A6) {
					continue
				}
				if (BH) {
					BD.setAttribute(Aj, BF)
				}
				if (BJ = BD.getAttribute("data-spm-anchor-id")) {
					Al(BD, BJ, BH);
					continue
				}
				BA++;
				BJ = BG + (BH ? "" : ("." + (Ao(BD) || BA)));
				Al(BD, BJ, BH);
				BD.setAttribute("data-spm-anchor-id", BJ)
			}
			A8.setAttribute("data-spm-max-idx", BA)
		}
		function Aw() {
			A0 = (j && AZ);
			return A0
		}
		function As(A6) {
			var A5 = [ "mclick.simba.taobao.com", "click.simba.taobao.com",
					"click.tanx.com", "click.mz.simba.taobao.com",
					"click.tz.simba.taobao.com", "redirect.simba.taobao.com",
					"rdstat.tanx.com", "stat.simba.taobao.com",
					"s.click.taobao.com" ], A7, A4 = A5.length;
			for (A7 = 0; A7 < A4; A7++) {
				if (A6.indexOf(A5[A7]) != -1) {
					return true
				}
			}
			return false
		}
		function A3(A4) {
			return A4 ? (!!A4.match(/^[^\?]*\balipay\.(?:com|net)\b/i)) : K
		}
		function A1(A4) {
			return A4 ? (!!A4
					.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i))
					: K
		}
		function Az(A5) {
			var A4;
			while ((A5 = A5.parentNode) && A5.tagName != "BODY") {
				A4 = l(A5, AU);
				if (A4) {
					return A4
				}
			}
			return ""
		}
		function Ak(A6, A8) {
			if (A6 && /&?\bspm=[^&#]*/.test(A6)) {
				A6 = A6.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&")
						.replace(/\?&/, "?").replace(/\?$/, "")
			}
			if (!A8) {
				return A6
			}
			var A7, BA, A4, A5 = "&", A9, BB;
			if (A6.indexOf("#") != -1) {
				A4 = A6.split("#");
				A6 = A4.shift();
				BA = A4.join("#")
			}
			A9 = A6.split("?");
			BB = A9.length - 1;
			if (BB > 0) {
				A7 = A9.pop();
				A6 = A9.join("?")
			}
			if (A7 && BB > 1 && A7.indexOf("&") == -1 && A7.indexOf("%") != -1) {
				A5 = "%26"
			}
			A6 = A6 + "?spm=" + A8 + (A7 ? (A5 + A7) : "")
					+ (BA ? ("#" + BA) : "");
			return A6
		}
		function Al(A7, A8, A6) {
			if (A6) {
				return
			}
			var A5 = AA(A7);
			var A9 = (l(A7, AU) || Az(A7) || F) == "i";
			var A4 = Ae + "tbspm.1.1?spm=";
			if (!A5 || As(A5)) {
				return
			}
			if (!A9
					&& (A5.indexOf("#") == 0 || A5.toLowerCase().indexOf(
							"javascript:") == 0) || A3(A5) || A1(A5)) {
				return
			}
			if (A9) {
				A4 += A8 + "&url=" + encodeURIComponent(AP) + "&cache="
						+ Math.random();
				if (At == A7) {
					X.send(A4)
				}
			} else {
				if (!A6) {
					Ap(A7, Ak(A5, A8))
				}
			}
		}
		function Ap(A7, A6) {
			var A4, A5 = A7.innerHTML;
			if (A5 && A5.indexOf("<") == -1) {
				A4 = m.createElement("b");
				A4.style.display = "none";
				A7.appendChild(A4)
			}
			A7.href = A6;
			if (A4) {
				A7.removeChild(A4)
			}
		}
		function Ao(A5) {
			var A4 = l(A5, AL);
			if (!A4 || !A4.match(/^d\w+$/)) {
				return K
			}
			return A4
		}
		function Am(A7) {
			var A6, A5, A4 = A7;
			while (A7 && A7.tagName != "HTML" && A7.tagName != "BODY"
					&& A7.getAttribute) {
				A5 = A7.getAttribute(AL);
				if (A5) {
					A6 = A5;
					A4 = A7;
					break
				}
				if (!(A7 = A7.parentNode)) {
					break
				}
			}
			return {
				spm_id : A6,
				el : A4
			}
		}
		function Ay(A5) {
			var A4;
			return (A5 && (A4 = A5.match(/&?\bspm=([^&#]*)/))) ? A4[1] : ""
		}
		function Aq(A7) {
			var A6 = m.getElementsByTagName("a"), A4 = A6.length, A5;
			for (A5 = 0; A5 < A4; A5++) {
				if (A6[A5] == A7) {
					return A5 + 1
				}
			}
			return 0
		}
		function Ax(A7, A6, A4) {
			var A8 = (new Date()).getTime();
			var A5 = h(A7);
			var BA = c(A7, A4);
			var A9 = [ [ "url", A6 ], [ "x", BA.x ], [ "y", BA.y ],
					[ "time", (new Date()).getTime() - A8 ], [ "xpath", A5 ],
					[ "cache", Math.random() ] ];
			X.send(Ae + "tbtestspm.1.1?" + AO(A9))
		}
		function Ar(A9, A4) {
			var A5 = AA(A9), A8 = Ay(A5), A7 = A8 ? A8.split(".") : null, BB, BA, A6 = I
					&& (BB = I.split(".")).length == 2;
			if (!A6 && Math.random() < 0.0001) {
				Ax(A9, A5, A4)
			}
			if (A7 && A7.length >= 4) {
				if (A7[0] == "1003" || A7[0] == "2006") {
					return
				}
				if (A6) {
					A7[0] = BB[0];
					A7[1] = BB[1];
					BA = Ao(A9);
					if (BA) {
						A7[3] = BA
					}
					Al(A9, A7.slice(0, 4).join("."), K);
					return
				}
			} else {
				if (A6) {
					A7 = [ I, 0, Ao(A9) || Aq(A9) ];
					Al(A9, A7.join("."), K);
					return
				}
			}
			if (A5 && A8) {
				A9.href = " "
						+ A5.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g,
								"&").replace(/\?&/, "?").replace(/\?$/, "")
								.replace(/\?#/, "#")
			}
		}
		function An(A7, A4) {
			At = A7;
			var A6 = l(A7, "data-spm-anchor-id"), A8, A5 = l(A7, Aj), A9 = !!A5;
			if (!A6) {
				A8 = Am(A7.parentNode);
				if (!A8.spm_id) {
					Ar(A7, A4);
					return
				}
				A2(A8.el)
			} else {
				Al(A7, A6, A9)
			}
		}
		function Au(A8) {
			if (!A8 || A8.nodeType != 1) {
				return
			}
			w(A8, "data-spm-max-idx");
			var A5 = AS(A8.getElementsByTagName("a")), A7 = AS(A8
					.getElementsByTagName("area")), A9 = A5.concat(A7), A6, A4 = A9.length;
			for (A6 = 0; A6 < A4; A6++) {
				w(A9[A6], "data-spm-anchor-id")
			}
		}
		Aw();
		s(m, "mousedown", function(A6, A5) {
			if (b.g_tb_aplus_loaded) {
				return
			}
			var A4;
			while (A5 && (A4 = A5.tagName)) {
				if (A4 == "A" || A4 == "AREA") {
					An(A5, A6);
					break
				} else {
					if (A4 == "BODY" || A4 == "HTML") {
						break
					}
				}
				A5 = A5.parentNode
			}
		});
		b.g_SPM = {
			resetModule : Au
		}
	})()
})();