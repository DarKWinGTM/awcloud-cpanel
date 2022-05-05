(self.webpackChunkmdb_angular_ui_kit_free = self.webpackChunkmdb_angular_ui_kit_free || []).push([[179], {
    255: t=>{
        function e(t) {
            return Promise.resolve().then(()=>{
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            )
        }
        e.keys = ()=>[],
        e.resolve = e,
        e.id = 255,
        t.exports = e
    }
    ,
    582: (t,e,n)=>{
        "use strict";
        function s(t) {
            return "function" == typeof t
        }
        let i = !1;
        const r = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
                if (t) {
                    const t = new Error;
                    console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                } else
                    i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                i = t
            },
            get useDeprecatedSynchronousErrorHandling() {
                return i
            }
        };
        function o(t) {
            setTimeout(()=>{
                throw t
            }
            , 0)
        }
        const a = {
            closed: !0,
            next(t) {},
            error(t) {
                if (r.useDeprecatedSynchronousErrorHandling)
                    throw t;
                o(t)
            },
            complete() {}
        }
          , l = (()=>Array.isArray || (t=>t && "number" == typeof t.length))();
        function c(t) {
            return null !== t && "object" == typeof t
        }
        const h = (()=>{
            function t(t) {
                return Error.call(this),
                this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e + 1}) ${t.toString()}`).join("\n  ")}` : "",
                this.name = "UnsubscriptionError",
                this.errors = t,
                this
            }
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )();
        let u = (()=>{
            class t {
                constructor(t) {
                    this.closed = !1,
                    this._parentOrParents = null,
                    this._subscriptions = null,
                    t && (this._ctorUnsubscribe = !0,
                    this._unsubscribe = t)
                }
                unsubscribe() {
                    let e;
                    if (this.closed)
                        return;
                    let {_parentOrParents: n, _ctorUnsubscribe: i, _unsubscribe: r, _subscriptions: o} = this;
                    if (this.closed = !0,
                    this._parentOrParents = null,
                    this._subscriptions = null,
                    n instanceof t)
                        n.remove(this);
                    else if (null !== n)
                        for (let t = 0; t < n.length; ++t)
                            n[t].remove(this);
                    if (s(r)) {
                        i && (this._unsubscribe = void 0);
                        try {
                            r.call(this)
                        } catch (a) {
                            e = a instanceof h ? d(a.errors) : [a]
                        }
                    }
                    if (l(o)) {
                        let t = -1
                          , n = o.length;
                        for (; ++t < n; ) {
                            const n = o[t];
                            if (c(n))
                                try {
                                    n.unsubscribe()
                                } catch (a) {
                                    e = e || [],
                                    a instanceof h ? e = e.concat(d(a.errors)) : e.push(a)
                                }
                        }
                    }
                    if (e)
                        throw new h(e)
                }
                add(e) {
                    let n = e;
                    if (!e)
                        return t.EMPTY;
                    switch (typeof e) {
                    case "function":
                        n = new t(e);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe)
                            return n;
                        if (this.closed)
                            return n.unsubscribe(),
                            n;
                        if (!(n instanceof t)) {
                            const e = n;
                            n = new t,
                            n._subscriptions = [e]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    let {_parentOrParents: s} = n;
                    if (null === s)
                        n._parentOrParents = this;
                    else if (s instanceof t) {
                        if (s === this)
                            return n;
                        n._parentOrParents = [s, this]
                    } else {
                        if (-1 !== s.indexOf(this))
                            return n;
                        s.push(this)
                    }
                    const i = this._subscriptions;
                    return null === i ? this._subscriptions = [n] : i.push(n),
                    n
                }
                remove(t) {
                    const e = this._subscriptions;
                    if (e) {
                        const n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }
                }
            }
            return t.EMPTY = function(t) {
                return t.closed = !0,
                t
            }(new t),
            t
        }
        )();
        function d(t) {
            return t.reduce((t,e)=>t.concat(e instanceof h ? e.errors : e), [])
        }
        const p = (()=>"function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
        class m extends u {
            constructor(t, e, n) {
                switch (super(),
                this.syncErrorValue = null,
                this.syncErrorThrown = !1,
                this.syncErrorThrowable = !1,
                this.isStopped = !1,
                arguments.length) {
                case 0:
                    this.destination = a;
                    break;
                case 1:
                    if (!t) {
                        this.destination = a;
                        break
                    }
                    if ("object" == typeof t) {
                        t instanceof m ? (this.syncErrorThrowable = t.syncErrorThrowable,
                        this.destination = t,
                        t.add(this)) : (this.syncErrorThrowable = !0,
                        this.destination = new f(this,t));
                        break
                    }
                default:
                    this.syncErrorThrowable = !0,
                    this.destination = new f(this,t,e,n)
                }
            }
            [p]() {
                return this
            }
            static create(t, e, n) {
                const s = new m(t,e,n);
                return s.syncErrorThrowable = !1,
                s
            }
            next(t) {
                this.isStopped || this._next(t)
            }
            error(t) {
                this.isStopped || (this.isStopped = !0,
                this._error(t))
            }
            complete() {
                this.isStopped || (this.isStopped = !0,
                this._complete())
            }
            unsubscribe() {
                this.closed || (this.isStopped = !0,
                super.unsubscribe())
            }
            _next(t) {
                this.destination.next(t)
            }
            _error(t) {
                this.destination.error(t),
                this.unsubscribe()
            }
            _complete() {
                this.destination.complete(),
                this.unsubscribe()
            }
            _unsubscribeAndRecycle() {
                const {_parentOrParents: t} = this;
                return this._parentOrParents = null,
                this.unsubscribe(),
                this.closed = !1,
                this.isStopped = !1,
                this._parentOrParents = t,
                this
            }
        }
        class f extends m {
            constructor(t, e, n, i) {
                let r;
                super(),
                this._parentSubscriber = t;
                let o = this;
                s(e) ? r = e : e && (r = e.next,
                n = e.error,
                i = e.complete,
                e !== a && (o = Object.create(e),
                s(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                o.unsubscribe = this.unsubscribe.bind(this))),
                this._context = o,
                this._next = r,
                this._error = n,
                this._complete = i
            }
            next(t) {
                if (!this.isStopped && this._next) {
                    const {_parentSubscriber: e} = this;
                    r.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }
            error(t) {
                if (!this.isStopped) {
                    const {_parentSubscriber: e} = this
                      , {useDeprecatedSynchronousErrorHandling: n} = r;
                    if (this._error)
                        n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t),
                        this.unsubscribe()) : (this.__tryOrUnsub(this._error, t),
                        this.unsubscribe());
                    else if (e.syncErrorThrowable)
                        n ? (e.syncErrorValue = t,
                        e.syncErrorThrown = !0) : o(t),
                        this.unsubscribe();
                    else {
                        if (this.unsubscribe(),
                        n)
                            throw t;
                        o(t)
                    }
                }
            }
            complete() {
                if (!this.isStopped) {
                    const {_parentSubscriber: t} = this;
                    if (this._complete) {
                        const e = ()=>this._complete.call(this._context);
                        r.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e),
                        this.unsubscribe()) : (this.__tryOrUnsub(e),
                        this.unsubscribe())
                    } else
                        this.unsubscribe()
                }
            }
            __tryOrUnsub(t, e) {
                try {
                    t.call(this._context, e)
                } catch (n) {
                    if (this.unsubscribe(),
                    r.useDeprecatedSynchronousErrorHandling)
                        throw n;
                    o(n)
                }
            }
            __tryOrSetError(t, e, n) {
                if (!r.useDeprecatedSynchronousErrorHandling)
                    throw new Error("bad call");
                try {
                    e.call(this._context, n)
                } catch (s) {
                    return r.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = s,
                    t.syncErrorThrown = !0,
                    !0) : (o(s),
                    !0)
                }
                return !1
            }
            _unsubscribe() {
                const {_parentSubscriber: t} = this;
                this._context = null,
                this._parentSubscriber = null,
                t.unsubscribe()
            }
        }
        const g = (()=>"function" == typeof Symbol && Symbol.observable || "@@observable")();
        function _(t) {
            return t
        }
        let y = (()=>{
            class t {
                constructor(t) {
                    this._isScalar = !1,
                    t && (this._subscribe = t)
                }
                lift(e) {
                    const n = new t;
                    return n.source = this,
                    n.operator = e,
                    n
                }
                subscribe(t, e, n) {
                    const {operator: s} = this
                      , i = function(t, e, n) {
                        if (t) {
                            if (t instanceof m)
                                return t;
                            if (t[p])
                                return t[p]()
                        }
                        return t || e || n ? new m(t,e,n) : new m(a)
                    }(t, e, n);
                    if (i.add(s ? s.call(i, this.source) : this.source || r.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)),
                    r.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1,
                    i.syncErrorThrown))
                        throw i.syncErrorValue;
                    return i
                }
                _trySubscribe(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        r.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0,
                        t.syncErrorValue = e),
                        function(t) {
                            for (; t; ) {
                                const {closed: e, destination: n, isStopped: s} = t;
                                if (e || s)
                                    return !1;
                                t = n && n instanceof m ? n : null
                            }
                            return !0
                        }(t) ? t.error(e) : console.warn(e)
                    }
                }
                forEach(t, e) {
                    return new (e = v(e))((e,n)=>{
                        let s;
                        s = this.subscribe(e=>{
                            try {
                                t(e)
                            } catch (i) {
                                n(i),
                                s && s.unsubscribe()
                            }
                        }
                        , n, e)
                    }
                    )
                }
                _subscribe(t) {
                    const {source: e} = this;
                    return e && e.subscribe(t)
                }
                [g]() {
                    return this
                }
                pipe(...t) {
                    return 0 === t.length ? this : (0 === (e = t).length ? _ : 1 === e.length ? e[0] : function(t) {
                        return e.reduce((t,e)=>e(t), t)
                    }
                    )(this);
                    var e
                }
                toPromise(t) {
                    return new (t = v(t))((t,e)=>{
                        let n;
                        this.subscribe(t=>n = t, t=>e(t), ()=>t(n))
                    }
                    )
                }
            }
            return t.create = e=>new t(e),
            t
        }
        )();
        function v(t) {
            if (t || (t = r.Promise || Promise),
            !t)
                throw new Error("no Promise impl found");
            return t
        }
        const b = (()=>{
            function t() {
                return Error.call(this),
                this.message = "object unsubscribed",
                this.name = "ObjectUnsubscribedError",
                this
            }
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )();
        class w extends u {
            constructor(t, e) {
                super(),
                this.subject = t,
                this.subscriber = e,
                this.closed = !1
            }
            unsubscribe() {
                if (this.closed)
                    return;
                this.closed = !0;
                const t = this.subject
                  , e = t.observers;
                if (this.subject = null,
                !e || 0 === e.length || t.isStopped || t.closed)
                    return;
                const n = e.indexOf(this.subscriber);
                -1 !== n && e.splice(n, 1)
            }
        }
        class A extends m {
            constructor(t) {
                super(t),
                this.destination = t
            }
        }
        let S = (()=>{
            class t extends y {
                constructor() {
                    super(),
                    this.observers = [],
                    this.closed = !1,
                    this.isStopped = !1,
                    this.hasError = !1,
                    this.thrownError = null
                }
                [p]() {
                    return new A(this)
                }
                lift(t) {
                    const e = new O(this,this);
                    return e.operator = t,
                    e
                }
                next(t) {
                    if (this.closed)
                        throw new b;
                    if (!this.isStopped) {
                        const {observers: e} = this
                          , n = e.length
                          , s = e.slice();
                        for (let i = 0; i < n; i++)
                            s[i].next(t)
                    }
                }
                error(t) {
                    if (this.closed)
                        throw new b;
                    this.hasError = !0,
                    this.thrownError = t,
                    this.isStopped = !0;
                    const {observers: e} = this
                      , n = e.length
                      , s = e.slice();
                    for (let i = 0; i < n; i++)
                        s[i].error(t);
                    this.observers.length = 0
                }
                complete() {
                    if (this.closed)
                        throw new b;
                    this.isStopped = !0;
                    const {observers: t} = this
                      , e = t.length
                      , n = t.slice();
                    for (let s = 0; s < e; s++)
                        n[s].complete();
                    this.observers.length = 0
                }
                unsubscribe() {
                    this.isStopped = !0,
                    this.closed = !0,
                    this.observers = null
                }
                _trySubscribe(t) {
                    if (this.closed)
                        throw new b;
                    return super._trySubscribe(t)
                }
                _subscribe(t) {
                    if (this.closed)
                        throw new b;
                    return this.hasError ? (t.error(this.thrownError),
                    u.EMPTY) : this.isStopped ? (t.complete(),
                    u.EMPTY) : (this.observers.push(t),
                    new w(this,t))
                }
                asObservable() {
                    const t = new y;
                    return t.source = this,
                    t
                }
            }
            return t.create = (t,e)=>new O(t,e),
            t
        }
        )();
        class O extends S {
            constructor(t, e) {
                super(),
                this.destination = t,
                this.source = e
            }
            next(t) {
                const {destination: e} = this;
                e && e.next && e.next(t)
            }
            error(t) {
                const {destination: e} = this;
                e && e.error && this.destination.error(t)
            }
            complete() {
                const {destination: t} = this;
                t && t.complete && this.destination.complete()
            }
            _subscribe(t) {
                const {source: e} = this;
                return e ? this.source.subscribe(t) : u.EMPTY
            }
        }
        function C(t) {
            return t && "function" == typeof t.schedule
        }
        function k(t, e) {
            return function(n) {
                if ("function" != typeof t)
                    throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new E(t,e))
            }
        }
        class E {
            constructor(t, e) {
                this.project = t,
                this.thisArg = e
            }
            call(t, e) {
                return e.subscribe(new x(t,this.project,this.thisArg))
            }
        }
        class x extends m {
            constructor(t, e, n) {
                super(t),
                this.project = e,
                this.count = 0,
                this.thisArg = n || this
            }
            _next(t) {
                let e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }
        }
        const D = t=>e=>{
            for (let n = 0, s = t.length; n < s && !e.closed; n++)
                e.next(t[n]);
            e.complete()
        }
        ;
        function V() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        const F = V()
          , T = t=>t && "number" == typeof t.length && "function" != typeof t;
        function P(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        const I = t=>{
            if (t && "function" == typeof t[g])
                return n = t,
                t=>{
                    const e = n[g]();
                    if ("function" != typeof e.subscribe)
                        throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return e.subscribe(t)
                }
                ;
            if (T(t))
                return D(t);
            if (P(t))
                return (t=>e=>(t.then(t=>{
                    e.closed || (e.next(t),
                    e.complete())
                }
                , t=>e.error(t)).then(null, o),
                e))(t);
            if (t && "function" == typeof t[F])
                return e = t,
                t=>{
                    const n = e[F]();
                    for (; ; ) {
                        let e;
                        try {
                            e = n.next()
                        } catch (s) {
                            return t.error(s),
                            t
                        }
                        if (e.done) {
                            t.complete();
                            break
                        }
                        if (t.next(e.value),
                        t.closed)
                            break
                    }
                    return "function" == typeof n.return && t.add(()=>{
                        n.return && n.return()
                    }
                    ),
                    t
                }
                ;
            {
                const e = c(t) ? "an invalid object" : `'${t}'`;
                throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
            }
            var e, n
        }
        ;
        function R(t, e) {
            return new y(n=>{
                const s = new u;
                let i = 0;
                return s.add(e.schedule(function() {
                    i !== t.length ? (n.next(t[i++]),
                    n.closed || s.add(this.schedule())) : n.complete()
                })),
                s
            }
            )
        }
        function N(t, e) {
            return e ? function(t, e) {
                if (null != t) {
                    if (function(t) {
                        return t && "function" == typeof t[g]
                    }(t))
                        return function(t, e) {
                            return new y(n=>{
                                const s = new u;
                                return s.add(e.schedule(()=>{
                                    const i = t[g]();
                                    s.add(i.subscribe({
                                        next(t) {
                                            s.add(e.schedule(()=>n.next(t)))
                                        },
                                        error(t) {
                                            s.add(e.schedule(()=>n.error(t)))
                                        },
                                        complete() {
                                            s.add(e.schedule(()=>n.complete()))
                                        }
                                    }))
                                }
                                )),
                                s
                            }
                            )
                        }(t, e);
                    if (P(t))
                        return function(t, e) {
                            return new y(n=>{
                                const s = new u;
                                return s.add(e.schedule(()=>t.then(t=>{
                                    s.add(e.schedule(()=>{
                                        n.next(t),
                                        s.add(e.schedule(()=>n.complete()))
                                    }
                                    ))
                                }
                                , t=>{
                                    s.add(e.schedule(()=>n.error(t)))
                                }
                                ))),
                                s
                            }
                            )
                        }(t, e);
                    if (T(t))
                        return R(t, e);
                    if (function(t) {
                        return t && "function" == typeof t[F]
                    }(t) || "string" == typeof t)
                        return function(t, e) {
                            if (!t)
                                throw new Error("Iterable cannot be null");
                            return new y(n=>{
                                const s = new u;
                                let i;
                                return s.add(()=>{
                                    i && "function" == typeof i.return && i.return()
                                }
                                ),
                                s.add(e.schedule(()=>{
                                    i = t[F](),
                                    s.add(e.schedule(function() {
                                        if (n.closed)
                                            return;
                                        let t, e;
                                        try {
                                            const n = i.next();
                                            t = n.value,
                                            e = n.done
                                        } catch (s) {
                                            return void n.error(s)
                                        }
                                        e ? n.complete() : (n.next(t),
                                        this.schedule())
                                    }))
                                }
                                )),
                                s
                            }
                            )
                        }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }(t, e) : t instanceof y ? t : new y(I(t))
        }
        class W extends m {
            constructor(t) {
                super(),
                this.parent = t
            }
            _next(t) {
                this.parent.notifyNext(t)
            }
            _error(t) {
                this.parent.notifyError(t),
                this.unsubscribe()
            }
            _complete() {
                this.parent.notifyComplete(),
                this.unsubscribe()
            }
        }
        class M extends m {
            notifyNext(t) {
                this.destination.next(t)
            }
            notifyError(t) {
                this.destination.error(t)
            }
            notifyComplete() {
                this.destination.complete()
            }
        }
        function L(t, e) {
            if (e.closed)
                return;
            if (t instanceof y)
                return t.subscribe(e);
            let n;
            try {
                n = I(t)(e)
            } catch (s) {
                e.error(s)
            }
            return n
        }
        function j(t, e, n=Number.POSITIVE_INFINITY) {
            return "function" == typeof e ? s=>s.pipe(j((n,s)=>N(t(n, s)).pipe(k((t,i)=>e(n, t, s, i))), n)) : ("number" == typeof e && (n = e),
            e=>e.lift(new B(t,n)))
        }
        class B {
            constructor(t, e=Number.POSITIVE_INFINITY) {
                this.project = t,
                this.concurrent = e
            }
            call(t, e) {
                return e.subscribe(new H(t,this.project,this.concurrent))
            }
        }
        class H extends M {
            constructor(t, e, n=Number.POSITIVE_INFINITY) {
                super(t),
                this.project = e,
                this.concurrent = n,
                this.hasCompleted = !1,
                this.buffer = [],
                this.active = 0,
                this.index = 0
            }
            _next(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }
            _tryNext(t) {
                let e;
                const n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (s) {
                    return void this.destination.error(s)
                }
                this.active++,
                this._innerSub(e)
            }
            _innerSub(t) {
                const e = new W(this)
                  , n = this.destination;
                n.add(e);
                const s = L(t, e);
                s !== e && n.add(s)
            }
            _complete() {
                this.hasCompleted = !0,
                0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                this.unsubscribe()
            }
            notifyNext(t) {
                this.destination.next(t)
            }
            notifyComplete() {
                const t = this.buffer;
                this.active--,
                t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }
        }
        function $(t, e) {
            return e ? R(t, e) : new y(D(t))
        }
        function U(...t) {
            let e = Number.POSITIVE_INFINITY
              , n = null
              , s = t[t.length - 1];
            return C(s) ? (n = t.pop(),
            t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof s && (e = t.pop()),
            null === n && 1 === t.length && t[0]instanceof y ? t[0] : function(t=Number.POSITIVE_INFINITY) {
                return j(_, t)
            }(e)($(t, n))
        }
        function z() {
            return function(t) {
                return t.lift(new q(t))
            }
        }
        class q {
            constructor(t) {
                this.connectable = t
            }
            call(t, e) {
                const {connectable: n} = this;
                n._refCount++;
                const s = new X(t,n)
                  , i = e.subscribe(s);
                return s.closed || (s.connection = n.connect()),
                i
            }
        }
        class X extends m {
            constructor(t, e) {
                super(t),
                this.connectable = e
            }
            _unsubscribe() {
                const {connectable: t} = this;
                if (!t)
                    return void (this.connection = null);
                this.connectable = null;
                const e = t._refCount;
                if (e <= 0)
                    return void (this.connection = null);
                if (t._refCount = e - 1,
                e > 1)
                    return void (this.connection = null);
                const {connection: n} = this
                  , s = t._connection;
                this.connection = null,
                !s || n && s !== n || s.unsubscribe()
            }
        }
        class Q extends y {
            constructor(t, e) {
                super(),
                this.source = t,
                this.subjectFactory = e,
                this._refCount = 0,
                this._isComplete = !1
            }
            _subscribe(t) {
                return this.getSubject().subscribe(t)
            }
            getSubject() {
                const t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()),
                this._subject
            }
            connect() {
                let t = this._connection;
                return t || (this._isComplete = !1,
                t = this._connection = new u,
                t.add(this.source.subscribe(new Z(this.getSubject(),this))),
                t.closed && (this._connection = null,
                t = u.EMPTY)),
                t
            }
            refCount() {
                return z()(this)
            }
        }
        const K = (()=>{
            const t = Q.prototype;
            return {
                operator: {
                    value: null
                },
                _refCount: {
                    value: 0,
                    writable: !0
                },
                _subject: {
                    value: null,
                    writable: !0
                },
                _connection: {
                    value: null,
                    writable: !0
                },
                _subscribe: {
                    value: t._subscribe
                },
                _isComplete: {
                    value: t._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: t.getSubject
                },
                connect: {
                    value: t.connect
                },
                refCount: {
                    value: t.refCount
                }
            }
        }
        )();
        class Z extends A {
            constructor(t, e) {
                super(t),
                this.connectable = e
            }
            _error(t) {
                this._unsubscribe(),
                super._error(t)
            }
            _complete() {
                this.connectable._isComplete = !0,
                this._unsubscribe(),
                super._complete()
            }
            _unsubscribe() {
                const t = this.connectable;
                if (t) {
                    this.connectable = null;
                    const e = t._connection;
                    t._refCount = 0,
                    t._subject = null,
                    t._connection = null,
                    e && e.unsubscribe()
                }
            }
        }
        function G() {
            return new S
        }
        function Y(t) {
            for (let e in t)
                if (t[e] === Y)
                    return e;
            throw Error("Could not find renamed property on target object.")
        }
        function J(t, e) {
            for (const n in e)
                e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }
        function tt(t) {
            if ("string" == typeof t)
                return t;
            if (Array.isArray(t))
                return "[" + t.map(tt).join(", ") + "]";
            if (null == t)
                return "" + t;
            if (t.overriddenName)
                return `${t.overriddenName}`;
            if (t.name)
                return `${t.name}`;
            const e = t.toString();
            if (null == e)
                return "" + e;
            const n = e.indexOf("\n");
            return -1 === n ? e : e.substring(0, n)
        }
        function et(t, e) {
            return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }
        const nt = Y({
            __forward_ref__: Y
        });
        function st(t) {
            return t.__forward_ref__ = st,
            t.toString = function() {
                return tt(this())
            }
            ,
            t
        }
        function it(t) {
            return rt(t) ? t() : t
        }
        function rt(t) {
            return "function" == typeof t && t.hasOwnProperty(nt) && t.__forward_ref__ === st
        }
        class ot extends Error {
            constructor(t, e) {
                super(function(t, e) {
                    return `${t ? `NG0${t}: ` : ""}${e}`
                }(t, e)),
                this.code = t
            }
        }
        function at(t) {
            return "string" == typeof t ? t : null == t ? "" : String(t)
        }
        function lt(t) {
            return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : at(t)
        }
        function ct(t, e) {
            const n = e ? ` in ${e}` : "";
            throw new ot("201",`No provider for ${lt(t)} found${n}`)
        }
        function ht(t) {
            return {
                token: t.token,
                providedIn: t.providedIn || null,
                factory: t.factory,
                value: void 0
            }
        }
        function ut(t) {
            return {
                providers: t.providers || [],
                imports: t.imports || []
            }
        }
        function dt(t) {
            return pt(t, ft) || pt(t, _t)
        }
        function pt(t, e) {
            return t.hasOwnProperty(e) ? t[e] : null
        }
        function mt(t) {
            return t && (t.hasOwnProperty(gt) || t.hasOwnProperty(yt)) ? t[gt] : null
        }
        const ft = Y({
            "\u0275prov": Y
        })
          , gt = Y({
            "\u0275inj": Y
        })
          , _t = Y({
            ngInjectableDef: Y
        })
          , yt = Y({
            ngInjectorDef: Y
        });
        var vt = function(t) {
            return t[t.Default = 0] = "Default",
            t[t.Host = 1] = "Host",
            t[t.Self = 2] = "Self",
            t[t.SkipSelf = 4] = "SkipSelf",
            t[t.Optional = 8] = "Optional",
            t
        }({});
        let bt;
        function wt(t) {
            const e = bt;
            return bt = t,
            e
        }
        function At(t, e, n) {
            const s = dt(t);
            return s && "root" == s.providedIn ? void 0 === s.value ? s.value = s.factory() : s.value : n & vt.Optional ? null : void 0 !== e ? e : void ct(tt(t), "Injector")
        }
        function St(t) {
            return {
                toString: t
            }.toString()
        }
        var Ot = function(t) {
            return t[t.OnPush = 0] = "OnPush",
            t[t.Default = 1] = "Default",
            t
        }({})
          , Ct = function(t) {
            return t[t.Emulated = 0] = "Emulated",
            t[t.None = 2] = "None",
            t[t.ShadowDom = 3] = "ShadowDom",
            t
        }({});
        const kt = "undefined" != typeof globalThis && globalThis
          , Et = "undefined" != typeof window && window
          , xt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self
          , Dt = "undefined" != typeof global && global
          , Vt = kt || Dt || Et || xt
          , Ft = {}
          , Tt = []
          , Pt = Y({
            "\u0275cmp": Y
        })
          , It = Y({
            "\u0275dir": Y
        })
          , Rt = Y({
            "\u0275pipe": Y
        })
          , Nt = Y({
            "\u0275mod": Y
        })
          , Wt = Y({
            "\u0275loc": Y
        })
          , Mt = Y({
            "\u0275fac": Y
        })
          , Lt = Y({
            __NG_ELEMENT_ID__: Y
        });
        let jt = 0;
        function Bt(t) {
            return St(()=>{
                const e = {}
                  , n = {
                    type: t.type,
                    providersResolver: null,
                    decls: t.decls,
                    vars: t.vars,
                    factory: null,
                    template: t.template || null,
                    consts: t.consts || null,
                    ngContentSelectors: t.ngContentSelectors,
                    hostBindings: t.hostBindings || null,
                    hostVars: t.hostVars || 0,
                    hostAttrs: t.hostAttrs || null,
                    contentQueries: t.contentQueries || null,
                    declaredInputs: e,
                    inputs: null,
                    outputs: null,
                    exportAs: t.exportAs || null,
                    onPush: t.changeDetection === Ot.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: t.selectors || Tt,
                    viewQuery: t.viewQuery || null,
                    features: t.features || null,
                    data: t.data || {},
                    encapsulation: t.encapsulation || Ct.Emulated,
                    id: "c",
                    styles: t.styles || Tt,
                    _: null,
                    setInput: null,
                    schemas: t.schemas || null,
                    tView: null
                }
                  , s = t.directives
                  , i = t.features
                  , r = t.pipes;
                return n.id += jt++,
                n.inputs = qt(t.inputs, e),
                n.outputs = qt(t.outputs),
                i && i.forEach(t=>t(n)),
                n.directiveDefs = s ? ()=>("function" == typeof s ? s() : s).map(Ht) : null,
                n.pipeDefs = r ? ()=>("function" == typeof r ? r() : r).map($t) : null,
                n
            }
            )
        }
        function Ht(t) {
            return Kt(t) || function(t) {
                return t[It] || null
            }(t)
        }
        function $t(t) {
            return function(t) {
                return t[Rt] || null
            }(t)
        }
        const Ut = {};
        function zt(t) {
            return St(()=>{
                const e = {
                    type: t.type,
                    bootstrap: t.bootstrap || Tt,
                    declarations: t.declarations || Tt,
                    imports: t.imports || Tt,
                    exports: t.exports || Tt,
                    transitiveCompileScopes: null,
                    schemas: t.schemas || null,
                    id: t.id || null
                };
                return null != t.id && (Ut[t.id] = t.type),
                e
            }
            )
        }
        function qt(t, e) {
            if (null == t)
                return Ft;
            const n = {};
            for (const s in t)
                if (t.hasOwnProperty(s)) {
                    let i = t[s]
                      , r = i;
                    Array.isArray(i) && (r = i[1],
                    i = i[0]),
                    n[i] = s,
                    e && (e[i] = r)
                }
            return n
        }
        const Xt = Bt;
        function Qt(t) {
            return {
                type: t.type,
                name: t.name,
                factory: null,
                pure: !1 !== t.pure,
                onDestroy: t.type.prototype.ngOnDestroy || null
            }
        }
        function Kt(t) {
            return t[Pt] || null
        }
        function Zt(t, e) {
            const n = t[Nt] || null;
            if (!n && !0 === e)
                throw new Error(`Type ${tt(t)} does not have '\u0275mod' property.`);
            return n
        }
        const Gt = 20
          , Yt = 10;
        function Jt(t) {
            return Array.isArray(t) && "object" == typeof t[1]
        }
        function te(t) {
            return Array.isArray(t) && !0 === t[1]
        }
        function ee(t) {
            return 0 != (8 & t.flags)
        }
        function ne(t) {
            return 2 == (2 & t.flags)
        }
        function se(t) {
            return 1 == (1 & t.flags)
        }
        function ie(t) {
            return null !== t.template
        }
        function re(t, e) {
            return t.hasOwnProperty(Mt) ? t[Mt] : null
        }
        class oe {
            constructor(t, e, n) {
                this.previousValue = t,
                this.currentValue = e,
                this.firstChange = n
            }
            isFirstChange() {
                return this.firstChange
            }
        }
        function ae() {
            return le
        }
        function le(t) {
            return t.type.prototype.ngOnChanges && (t.setInput = he),
            ce
        }
        function ce() {
            const t = ue(this)
              , e = null == t ? void 0 : t.current;
            if (e) {
                const n = t.previous;
                if (n === Ft)
                    t.previous = e;
                else
                    for (let t in e)
                        n[t] = e[t];
                t.current = null,
                this.ngOnChanges(e)
            }
        }
        function he(t, e, n, s) {
            const i = ue(t) || function(t, e) {
                return t.__ngSimpleChanges__ = e
            }(t, {
                previous: Ft,
                current: null
            })
              , r = i.current || (i.current = {})
              , o = i.previous
              , a = this.declaredInputs[n]
              , l = o[a];
            r[a] = new oe(l && l.currentValue,e,o === Ft),
            t[s] = e
        }
        function ue(t) {
            return t.__ngSimpleChanges__ || null
        }
        let de;
        function pe(t) {
            return !!t.listen
        }
        ae.ngInherit = !0;
        const me = {
            createRenderer: (t,e)=>void 0 !== de ? de : "undefined" != typeof document ? document : void 0
        };
        function fe(t) {
            for (; Array.isArray(t); )
                t = t[0];
            return t
        }
        function ge(t, e) {
            return fe(e[t])
        }
        function _e(t, e) {
            return fe(e[t.index])
        }
        function ye(t, e) {
            return t.data[e]
        }
        function ve(t, e) {
            const n = e[t];
            return Jt(n) ? n : n[0]
        }
        function be(t) {
            return 4 == (4 & t[2])
        }
        function we(t) {
            return 128 == (128 & t[2])
        }
        function Ae(t, e) {
            return null == e ? null : t[e]
        }
        function Se(t) {
            t[18] = 0
        }
        function Oe(t, e) {
            t[5] += e;
            let n = t
              , s = t[3];
            for (; null !== s && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]); )
                s[5] += e,
                n = s,
                s = s[3]
        }
        const Ce = {
            lFrame: qe(null),
            bindingsEnabled: !0,
            isInCheckNoChangesMode: !1
        };
        function ke() {
            return Ce.bindingsEnabled
        }
        function Ee() {
            return Ce.lFrame.lView
        }
        function xe() {
            return Ce.lFrame.tView
        }
        function De() {
            let t = Ve();
            for (; null !== t && 64 === t.type; )
                t = t.parent;
            return t
        }
        function Ve() {
            return Ce.lFrame.currentTNode
        }
        function Fe(t, e) {
            const n = Ce.lFrame;
            n.currentTNode = t,
            n.isParent = e
        }
        function Te() {
            return Ce.lFrame.isParent
        }
        function Pe() {
            return Ce.isInCheckNoChangesMode
        }
        function Ie(t) {
            Ce.isInCheckNoChangesMode = t
        }
        function Re() {
            return Ce.lFrame.bindingIndex
        }
        function Ne() {
            return Ce.lFrame.bindingIndex++
        }
        function We(t) {
            const e = Ce.lFrame
              , n = e.bindingIndex;
            return e.bindingIndex = e.bindingIndex + t,
            n
        }
        function Me(t, e) {
            const n = Ce.lFrame;
            n.bindingIndex = n.bindingRootIndex = t,
            Le(e)
        }
        function Le(t) {
            Ce.lFrame.currentDirectiveIndex = t
        }
        function je() {
            return Ce.lFrame.currentQueryIndex
        }
        function Be(t) {
            Ce.lFrame.currentQueryIndex = t
        }
        function He(t) {
            const e = t[1];
            return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null
        }
        function $e(t, e, n) {
            if (n & vt.SkipSelf) {
                let s = e
                  , i = t;
                for (; s = s.parent,
                !(null !== s || n & vt.Host || (s = He(i),
                null === s) || (i = i[15],
                10 & s.type)); )
                    ;
                if (null === s)
                    return !1;
                e = s,
                t = i
            }
            const s = Ce.lFrame = ze();
            return s.currentTNode = e,
            s.lView = t,
            !0
        }
        function Ue(t) {
            const e = ze()
              , n = t[1];
            Ce.lFrame = e,
            e.currentTNode = n.firstChild,
            e.lView = t,
            e.tView = n,
            e.contextLView = t,
            e.bindingIndex = n.bindingStartIndex,
            e.inI18n = !1
        }
        function ze() {
            const t = Ce.lFrame
              , e = null === t ? null : t.child;
            return null === e ? qe(t) : e
        }
        function qe(t) {
            const e = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: t,
                child: null,
                inI18n: !1
            };
            return null !== t && (t.child = e),
            e
        }
        function Xe() {
            const t = Ce.lFrame;
            return Ce.lFrame = t.parent,
            t.currentTNode = null,
            t.lView = null,
            t
        }
        const Qe = Xe;
        function Ke() {
            const t = Xe();
            t.isParent = !0,
            t.tView = null,
            t.selectedIndex = -1,
            t.contextLView = null,
            t.elementDepthCount = 0,
            t.currentDirectiveIndex = -1,
            t.currentNamespace = null,
            t.bindingRootIndex = -1,
            t.bindingIndex = -1,
            t.currentQueryIndex = 0
        }
        function Ze() {
            return Ce.lFrame.selectedIndex
        }
        function Ge(t) {
            Ce.lFrame.selectedIndex = t
        }
        function Ye() {
            const t = Ce.lFrame;
            return ye(t.tView, t.selectedIndex)
        }
        function Je(t, e) {
            for (let n = e.directiveStart, s = e.directiveEnd; n < s; n++) {
                const e = t.data[n].type.prototype
                  , {ngAfterContentInit: s, ngAfterContentChecked: i, ngAfterViewInit: r, ngAfterViewChecked: o, ngOnDestroy: a} = e;
                s && (t.contentHooks || (t.contentHooks = [])).push(-n, s),
                i && ((t.contentHooks || (t.contentHooks = [])).push(n, i),
                (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, i)),
                r && (t.viewHooks || (t.viewHooks = [])).push(-n, r),
                o && ((t.viewHooks || (t.viewHooks = [])).push(n, o),
                (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
                null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a)
            }
        }
        function tn(t, e, n) {
            sn(t, e, 3, n)
        }
        function en(t, e, n, s) {
            (3 & t[2]) === n && sn(t, e, n, s)
        }
        function nn(t, e) {
            let n = t[2];
            (3 & n) === e && (n &= 2047,
            n += 1,
            t[2] = n)
        }
        function sn(t, e, n, s) {
            const i = null != s ? s : -1
              , r = e.length - 1;
            let o = 0;
            for (let a = void 0 !== s ? 65535 & t[18] : 0; a < r; a++)
                if ("number" == typeof e[a + 1]) {
                    if (o = e[a],
                    null != s && o >= s)
                        break
                } else
                    e[a] < 0 && (t[18] += 65536),
                    (o < i || -1 == i) && (rn(t, n, e, a),
                    t[18] = (4294901760 & t[18]) + a + 2),
                    a++
        }
        function rn(t, e, n, s) {
            const i = n[s] < 0
              , r = n[s + 1]
              , o = t[i ? -n[s] : n[s]];
            if (i) {
                if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
                    t[2] += 2048;
                    try {
                        r.call(o)
                    } finally {}
                }
            } else
                try {
                    r.call(o)
                } finally {}
        }
        const on = -1;
        class an {
            constructor(t, e, n) {
                this.factory = t,
                this.resolving = !1,
                this.canSeeViewProviders = e,
                this.injectImpl = n
            }
        }
        function ln(t, e, n) {
            const s = pe(t);
            let i = 0;
            for (; i < n.length; ) {
                const r = n[i];
                if ("number" == typeof r) {
                    if (0 !== r)
                        break;
                    i++;
                    const o = n[i++]
                      , a = n[i++]
                      , l = n[i++];
                    s ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
                } else {
                    const o = r
                      , a = n[++i];
                    cn(o) ? s && t.setProperty(e, o, a) : s ? t.setAttribute(e, o, a) : e.setAttribute(o, a),
                    i++
                }
            }
            return i
        }
        function cn(t) {
            return 64 === t.charCodeAt(0)
        }
        function hn(t, e) {
            if (null === e || 0 === e.length)
                ;
            else if (null === t || 0 === t.length)
                t = e.slice();
            else {
                let n = -1;
                for (let s = 0; s < e.length; s++) {
                    const i = e[s];
                    "number" == typeof i ? n = i : 0 === n || un(t, n, i, null, -1 === n || 2 === n ? e[++s] : null)
                }
            }
            return t
        }
        function un(t, e, n, s, i) {
            let r = 0
              , o = t.length;
            if (-1 === e)
                o = -1;
            else
                for (; r < t.length; ) {
                    const n = t[r++];
                    if ("number" == typeof n) {
                        if (n === e) {
                            o = -1;
                            break
                        }
                        if (n > e) {
                            o = r - 1;
                            break
                        }
                    }
                }
            for (; r < t.length; ) {
                const e = t[r];
                if ("number" == typeof e)
                    break;
                if (e === n) {
                    if (null === s)
                        return void (null !== i && (t[r + 1] = i));
                    if (s === t[r + 1])
                        return void (t[r + 2] = i)
                }
                r++,
                null !== s && r++,
                null !== i && r++
            }
            -1 !== o && (t.splice(o, 0, e),
            r = o + 1),
            t.splice(r++, 0, n),
            null !== s && t.splice(r++, 0, s),
            null !== i && t.splice(r++, 0, i)
        }
        function dn(t) {
            return t !== on
        }
        function pn(t) {
            return 32767 & t
        }
        function mn(t, e) {
            let n = t >> 16
              , s = e;
            for (; n > 0; )
                s = s[15],
                n--;
            return s
        }
        let fn = !0;
        function gn(t) {
            const e = fn;
            return fn = t,
            e
        }
        let _n = 0;
        function yn(t, e) {
            const n = bn(t, e);
            if (-1 !== n)
                return n;
            const s = e[1];
            s.firstCreatePass && (t.injectorIndex = e.length,
            vn(s.data, t),
            vn(e, null),
            vn(s.blueprint, null));
            const i = wn(t, e)
              , r = t.injectorIndex;
            if (dn(i)) {
                const t = pn(i)
                  , n = mn(i, e)
                  , s = n[1].data;
                for (let i = 0; i < 8; i++)
                    e[r + i] = n[t + i] | s[t + i]
            }
            return e[r + 8] = i,
            r
        }
        function vn(t, e) {
            t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }
        function bn(t, e) {
            return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }
        function wn(t, e) {
            if (t.parent && -1 !== t.parent.injectorIndex)
                return t.parent.injectorIndex;
            let n = 0
              , s = null
              , i = e;
            for (; null !== i; ) {
                const t = i[1]
                  , e = t.type;
                if (s = 2 === e ? t.declTNode : 1 === e ? i[6] : null,
                null === s)
                    return on;
                if (n++,
                i = i[15],
                -1 !== s.injectorIndex)
                    return s.injectorIndex | n << 16
            }
            return on
        }
        function An(t, e, n) {
            !function(t, e, n) {
                let s;
                "string" == typeof n ? s = n.charCodeAt(0) || 0 : n.hasOwnProperty(Lt) && (s = n[Lt]),
                null == s && (s = n[Lt] = _n++);
                const i = 255 & s;
                e.data[t + (i >> 5)] |= 1 << i
            }(t, e, n)
        }
        function Sn(t, e, n) {
            if (n & vt.Optional)
                return t;
            ct(e, "NodeInjector")
        }
        function On(t, e, n, s) {
            if (n & vt.Optional && void 0 === s && (s = null),
            0 == (n & (vt.Self | vt.Host))) {
                const i = t[9]
                  , r = wt(void 0);
                try {
                    return i ? i.get(e, s, n & vt.Optional) : At(e, s, n & vt.Optional)
                } finally {
                    wt(r)
                }
            }
            return Sn(s, e, n)
        }
        function Cn(t, e, n, s=vt.Default, i) {
            if (null !== t) {
                const r = function(t) {
                    if ("string" == typeof t)
                        return t.charCodeAt(0) || 0;
                    const e = t.hasOwnProperty(Lt) ? t[Lt] : void 0;
                    return "number" == typeof e ? e >= 0 ? 255 & e : En : e
                }(n);
                if ("function" == typeof r) {
                    if (!$e(e, t, s))
                        return s & vt.Host ? Sn(i, n, s) : On(e, n, s, i);
                    try {
                        const t = r(s);
                        if (null != t || s & vt.Optional)
                            return t;
                        ct(n)
                    } finally {
                        Qe()
                    }
                } else if ("number" == typeof r) {
                    let i = null
                      , o = bn(t, e)
                      , a = on
                      , l = s & vt.Host ? e[16][6] : null;
                    for ((-1 === o || s & vt.SkipSelf) && (a = -1 === o ? wn(t, e) : e[o + 8],
                    a !== on && Tn(s, !1) ? (i = e[1],
                    o = pn(a),
                    e = mn(a, e)) : o = -1); -1 !== o; ) {
                        const t = e[1];
                        if (Fn(r, o, t.data)) {
                            const t = xn(o, e, n, i, s, l);
                            if (t !== kn)
                                return t
                        }
                        a = e[o + 8],
                        a !== on && Tn(s, e[1].data[o + 8] === l) && Fn(r, o, e) ? (i = t,
                        o = pn(a),
                        e = mn(a, e)) : o = -1
                    }
                }
            }
            return On(e, n, s, i)
        }
        const kn = {};
        function En() {
            return new Pn(De(),Ee())
        }
        function xn(t, e, n, s, i, r) {
            const o = e[1]
              , a = o.data[t + 8]
              , l = Dn(a, o, n, null == s ? ne(a) && fn : s != o && 0 != (3 & a.type), i & vt.Host && r === a);
            return null !== l ? Vn(e, o, l, a) : kn
        }
        function Dn(t, e, n, s, i) {
            const r = t.providerIndexes
              , o = e.data
              , a = 1048575 & r
              , l = t.directiveStart
              , c = r >> 20
              , h = i ? a + c : t.directiveEnd;
            for (let u = s ? a : a + c; u < h; u++) {
                const t = o[u];
                if (u < l && n === t || u >= l && t.type === n)
                    return u
            }
            if (i) {
                const t = o[l];
                if (t && ie(t) && t.type === n)
                    return l
            }
            return null
        }
        function Vn(t, e, n, s) {
            let i = t[n];
            const r = e.data;
            if (i instanceof an) {
                const o = i;
                o.resolving && function(t, e) {
                    throw new ot("200",`Circular dependency in DI detected for ${t}`)
                }(lt(r[n]));
                const a = gn(o.canSeeViewProviders);
                o.resolving = !0;
                const l = o.injectImpl ? wt(o.injectImpl) : null;
                $e(t, s, vt.Default);
                try {
                    i = t[n] = o.factory(void 0, r, t, s),
                    e.firstCreatePass && n >= s.directiveStart && function(t, e, n) {
                        const {ngOnChanges: s, ngOnInit: i, ngDoCheck: r} = e.type.prototype;
                        if (s) {
                            const s = le(e);
                            (n.preOrderHooks || (n.preOrderHooks = [])).push(t, s),
                            (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s)
                        }
                        i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, i),
                        r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                        (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r))
                    }(n, r[n], e)
                } finally {
                    null !== l && wt(l),
                    gn(a),
                    o.resolving = !1,
                    Qe()
                }
            }
            return i
        }
        function Fn(t, e, n) {
            return !!(n[e + (t >> 5)] & 1 << t)
        }
        function Tn(t, e) {
            return !(t & vt.Self || t & vt.Host && e)
        }
        class Pn {
            constructor(t, e) {
                this._tNode = t,
                this._lView = e
            }
            get(t, e) {
                return Cn(this._tNode, this._lView, t, void 0, e)
            }
        }
        function In(t) {
            return St(()=>{
                const e = t.prototype.constructor
                  , n = e[Mt] || Rn(e)
                  , s = Object.prototype;
                let i = Object.getPrototypeOf(t.prototype).constructor;
                for (; i && i !== s; ) {
                    const t = i[Mt] || Rn(i);
                    if (t && t !== n)
                        return t;
                    i = Object.getPrototypeOf(i)
                }
                return t=>new t
            }
            )
        }
        function Rn(t) {
            return rt(t) ? ()=>{
                const e = Rn(it(t));
                return e && e()
            }
            : re(t)
        }
        const Nn = "__parameters__";
        function Wn(t, e, n) {
            return St(()=>{
                const s = function(t) {
                    return function(...e) {
                        if (t) {
                            const n = t(...e);
                            for (const t in n)
                                this[t] = n[t]
                        }
                    }
                }(e);
                function i(...t) {
                    if (this instanceof i)
                        return s.apply(this, t),
                        this;
                    const e = new i(...t);
                    return n.annotation = e,
                    n;
                    function n(t, n, s) {
                        const i = t.hasOwnProperty(Nn) ? t[Nn] : Object.defineProperty(t, Nn, {
                            value: []
                        })[Nn];
                        for (; i.length <= s; )
                            i.push(null);
                        return (i[s] = i[s] || []).push(e),
                        t
                    }
                }
                return n && (i.prototype = Object.create(n.prototype)),
                i.prototype.ngMetadataName = t,
                i.annotationCls = i,
                i
            }
            )
        }
        class Mn {
            constructor(t, e) {
                this._desc = t,
                this.ngMetadataName = "InjectionToken",
                this.\u0275prov = void 0,
                "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = ht({
                    token: this,
                    providedIn: e.providedIn || "root",
                    factory: e.factory
                }))
            }
            toString() {
                return `InjectionToken ${this._desc}`
            }
        }
        function Ln(t, e) {
            void 0 === e && (e = t);
            for (let n = 0; n < t.length; n++) {
                let s = t[n];
                Array.isArray(s) ? (e === t && (e = t.slice(0, n)),
                Ln(s, e)) : e !== t && e.push(s)
            }
            return e
        }
        function jn(t, e) {
            t.forEach(t=>Array.isArray(t) ? jn(t, e) : e(t))
        }
        function Bn(t, e, n) {
            e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }
        function Hn(t, e) {
            return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }
        function $n(t, e, n) {
            let s = zn(t, e);
            return s >= 0 ? t[1 | s] = n : (s = ~s,
            function(t, e, n, s) {
                let i = t.length;
                if (i == e)
                    t.push(n, s);
                else if (1 === i)
                    t.push(s, t[0]),
                    t[0] = n;
                else {
                    for (i--,
                    t.push(t[i - 1], t[i]); i > e; )
                        t[i] = t[i - 2],
                        i--;
                    t[e] = n,
                    t[e + 1] = s
                }
            }(t, s, e, n)),
            s
        }
        function Un(t, e) {
            const n = zn(t, e);
            if (n >= 0)
                return t[1 | n]
        }
        function zn(t, e) {
            return function(t, e, n) {
                let s = 0
                  , i = t.length >> 1;
                for (; i !== s; ) {
                    const n = s + (i - s >> 1)
                      , r = t[n << 1];
                    if (e === r)
                        return n << 1;
                    r > e ? i = n : s = n + 1
                }
                return ~(i << 1)
            }(t, e)
        }
        const qn = {}
          , Xn = /\n/gm
          , Qn = "__source"
          , Kn = Y({
            provide: String,
            useValue: Y
        });
        let Zn;
        function Gn(t) {
            const e = Zn;
            return Zn = t,
            e
        }
        function Yn(t, e=vt.Default) {
            if (void 0 === Zn)
                throw new Error("inject() must be called from an injection context");
            return null === Zn ? At(t, void 0, e) : Zn.get(t, e & vt.Optional ? null : void 0, e)
        }
        function Jn(t, e=vt.Default) {
            return (bt || Yn)(it(t), e)
        }
        const ts = Jn;
        function es(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) {
                const s = it(t[n]);
                if (Array.isArray(s)) {
                    if (0 === s.length)
                        throw new Error("Arguments array must have arguments.");
                    let t, n = vt.Default;
                    for (let e = 0; e < s.length; e++) {
                        const i = s[e]
                          , r = i.__NG_DI_FLAG__;
                        "number" == typeof r ? -1 === r ? t = i.token : n |= r : t = i
                    }
                    e.push(Jn(t, n))
                } else
                    e.push(Jn(s))
            }
            return e
        }
        function ns(t, e) {
            return t.__NG_DI_FLAG__ = e,
            t.prototype.__NG_DI_FLAG__ = e,
            t
        }
        const ss = ns(Wn("Inject", t=>({
            token: t
        })), -1)
          , is = ns(Wn("Optional"), 8)
          , rs = ns(Wn("SkipSelf"), 4);
        function os(t) {
            return t instanceof class {
                constructor(t) {
                    this.changingThisBreaksApplicationSecurity = t
                }
                toString() {
                    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
                }
            }
            ? t.changingThisBreaksApplicationSecurity : t
        }
        function as(t, e) {
            t.__ngContext__ = e
        }
        function ls(t) {
            const e = function(t) {
                return t.__ngContext__ || null
            }(t);
            return e ? Array.isArray(e) ? e : e.lView : null
        }
        function cs(t) {
            return t.ngDebugContext
        }
        function hs(t) {
            return t.ngOriginalError
        }
        function us(t, ...e) {
            t.error(...e)
        }
        class ds {
            constructor() {
                this._console = console
            }
            handleError(t) {
                const e = this._findOriginalError(t)
                  , n = this._findContext(t)
                  , s = function(t) {
                    return t.ngErrorLogger || us
                }(t);
                s(this._console, "ERROR", t),
                e && s(this._console, "ORIGINAL ERROR", e),
                n && s(this._console, "ERROR CONTEXT", n)
            }
            _findContext(t) {
                return t ? cs(t) ? cs(t) : this._findContext(hs(t)) : null
            }
            _findOriginalError(t) {
                let e = hs(t);
                for (; e && hs(e); )
                    e = hs(e);
                return e
            }
        }
        const ps = (()=>("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Vt))();
        function ms(t) {
            return t instanceof Function ? t() : t
        }
        var fs = function(t) {
            return t[t.Important = 1] = "Important",
            t[t.DashCase = 2] = "DashCase",
            t
        }({});
        function gs(t, e) {
            return (void 0)(t, e)
        }
        function _s(t) {
            const e = t[3];
            return te(e) ? e[3] : e
        }
        function ys(t) {
            return bs(t[13])
        }
        function vs(t) {
            return bs(t[4])
        }
        function bs(t) {
            for (; null !== t && !te(t); )
                t = t[4];
            return t
        }
        function ws(t, e, n, s, i) {
            if (null != s) {
                let r, o = !1;
                te(s) ? r = s : Jt(s) && (o = !0,
                s = s[0]);
                const a = fe(s);
                0 === t && null !== n ? null == i ? xs(e, n, a) : Es(e, n, a, i || null, !0) : 1 === t && null !== n ? Es(e, n, a, i || null, !0) : 2 === t ? function(t, e, n) {
                    const s = Vs(t, e);
                    s && function(t, e, n, s) {
                        pe(t) ? t.removeChild(e, n, s) : e.removeChild(n)
                    }(t, s, e, n)
                }(e, a, o) : 3 === t && e.destroyNode(a),
                null != r && function(t, e, n, s, i) {
                    const r = n[7];
                    r !== fe(n) && ws(e, t, s, r, i);
                    for (let o = Yt; o < n.length; o++) {
                        const i = n[o];
                        Ns(i[1], i, t, e, s, r)
                    }
                }(e, t, r, n, i)
            }
        }
        function As(t, e, n) {
            return pe(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
        }
        function Ss(t, e) {
            const n = t[9]
              , s = n.indexOf(e)
              , i = e[3];
            1024 & e[2] && (e[2] &= -1025,
            Oe(i, -1)),
            n.splice(s, 1)
        }
        function Os(t, e) {
            if (t.length <= Yt)
                return;
            const n = Yt + e
              , s = t[n];
            if (s) {
                const r = s[17];
                null !== r && r !== t && Ss(r, s),
                e > 0 && (t[n - 1][4] = s[4]);
                const o = Hn(t, Yt + e);
                Ns(s[1], i = s, i[11], 2, null, null),
                i[0] = null,
                i[6] = null;
                const a = o[19];
                null !== a && a.detachView(o[1]),
                s[3] = null,
                s[4] = null,
                s[2] &= -129
            }
            var i;
            return s
        }
        function Cs(t, e) {
            if (!(256 & e[2])) {
                const n = e[11];
                pe(n) && n.destroyNode && Ns(t, e, n, 3, null, null),
                function(t) {
                    let e = t[13];
                    if (!e)
                        return ks(t[1], t);
                    for (; e; ) {
                        let n = null;
                        if (Jt(e))
                            n = e[13];
                        else {
                            const t = e[10];
                            t && (n = t)
                        }
                        if (!n) {
                            for (; e && !e[4] && e !== t; )
                                Jt(e) && ks(e[1], e),
                                e = e[3];
                            null === e && (e = t),
                            Jt(e) && ks(e[1], e),
                            n = e && e[4]
                        }
                        e = n
                    }
                }(e)
            }
        }
        function ks(t, e) {
            if (!(256 & e[2])) {
                e[2] &= -129,
                e[2] |= 256,
                function(t, e) {
                    let n;
                    if (null != t && null != (n = t.destroyHooks))
                        for (let s = 0; s < n.length; s += 2) {
                            const t = e[n[s]];
                            if (!(t instanceof an)) {
                                const e = n[s + 1];
                                if (Array.isArray(e))
                                    for (let n = 0; n < e.length; n += 2) {
                                        const s = t[e[n]]
                                          , i = e[n + 1];
                                        try {
                                            i.call(s)
                                        } finally {}
                                    }
                                else
                                    try {
                                        e.call(t)
                                    } finally {}
                            }
                        }
                }(t, e),
                function(t, e) {
                    const n = t.cleanup
                      , s = e[7];
                    let i = -1;
                    if (null !== n)
                        for (let r = 0; r < n.length - 1; r += 2)
                            if ("string" == typeof n[r]) {
                                const t = n[r + 1]
                                  , o = "function" == typeof t ? t(e) : fe(e[t])
                                  , a = s[i = n[r + 2]]
                                  , l = n[r + 3];
                                "boolean" == typeof l ? o.removeEventListener(n[r], a, l) : l >= 0 ? s[i = l]() : s[i = -l].unsubscribe(),
                                r += 2
                            } else {
                                const t = s[i = n[r + 1]];
                                n[r].call(t)
                            }
                    if (null !== s) {
                        for (let t = i + 1; t < s.length; t++)
                            (0,
                            s[t])();
                        e[7] = null
                    }
                }(t, e),
                1 === e[1].type && pe(e[11]) && e[11].destroy();
                const n = e[17];
                if (null !== n && te(e[3])) {
                    n !== e[3] && Ss(n, e);
                    const s = e[19];
                    null !== s && s.detachView(t)
                }
            }
        }
        function Es(t, e, n, s, i) {
            pe(t) ? t.insertBefore(e, n, s, i) : e.insertBefore(n, s, i)
        }
        function xs(t, e, n) {
            pe(t) ? t.appendChild(e, n) : e.appendChild(n)
        }
        function Ds(t, e, n, s, i) {
            null !== s ? Es(t, e, n, s, i) : xs(t, e, n)
        }
        function Vs(t, e) {
            return pe(t) ? t.parentNode(e) : e.parentNode
        }
        function Fs(t, e, n, s) {
            const i = function(t, e, n) {
                return function(t, e, n) {
                    let s = e;
                    for (; null !== s && 40 & s.type; )
                        s = (e = s).parent;
                    if (null === s)
                        return n[0];
                    if (2 & s.flags) {
                        const e = t.data[s.directiveStart].encapsulation;
                        if (e === Ct.None || e === Ct.Emulated)
                            return null
                    }
                    return _e(s, n)
                }(t, e.parent, n)
            }(t, s, e)
              , r = e[11]
              , o = function(t, e, n) {
                return function(t, e, n) {
                    return 40 & t.type ? _e(t, n) : null
                }(t, 0, n)
            }(s.parent || e[6], 0, e);
            if (null != i)
                if (Array.isArray(n))
                    for (let a = 0; a < n.length; a++)
                        Ds(r, i, n[a], o, !1);
                else
                    Ds(r, i, n, o, !1)
        }
        function Ts(t, e) {
            if (null !== e) {
                const n = e.type;
                if (3 & n)
                    return _e(e, t);
                if (4 & n)
                    return Is(-1, t[e.index]);
                if (8 & n) {
                    const n = e.child;
                    if (null !== n)
                        return Ts(t, n);
                    {
                        const n = t[e.index];
                        return te(n) ? Is(-1, n) : fe(n)
                    }
                }
                if (32 & n)
                    return gs(e, t)() || fe(t[e.index]);
                {
                    const n = Ps(t, e);
                    return null !== n ? Array.isArray(n) ? n[0] : Ts(_s(t[16]), n) : Ts(t, e.next)
                }
            }
            return null
        }
        function Ps(t, e) {
            return null !== e ? t[16][6].projection[e.projection] : null
        }
        function Is(t, e) {
            const n = Yt + t + 1;
            if (n < e.length) {
                const t = e[n]
                  , s = t[1].firstChild;
                if (null !== s)
                    return Ts(t, s)
            }
            return e[7]
        }
        function Rs(t, e, n, s, i, r, o) {
            for (; null != n; ) {
                const a = s[n.index]
                  , l = n.type;
                if (o && 0 === e && (a && as(fe(a), s),
                n.flags |= 4),
                64 != (64 & n.flags))
                    if (8 & l)
                        Rs(t, e, n.child, s, i, r, !1),
                        ws(e, t, i, a, r);
                    else if (32 & l) {
                        const o = gs(n, s);
                        let l;
                        for (; l = o(); )
                            ws(e, t, i, l, r);
                        ws(e, t, i, a, r)
                    } else
                        16 & l ? Ws(t, e, s, n, i, r) : ws(e, t, i, a, r);
                n = o ? n.projectionNext : n.next
            }
        }
        function Ns(t, e, n, s, i, r) {
            Rs(n, s, t.firstChild, e, i, r, !1)
        }
        function Ws(t, e, n, s, i, r) {
            const o = n[16]
              , a = o[6].projection[s.projection];
            if (Array.isArray(a))
                for (let l = 0; l < a.length; l++)
                    ws(e, t, i, a[l], r);
            else
                Rs(t, e, a, o[3], i, r, !0)
        }
        function Ms(t, e, n) {
            pe(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }
        function Ls(t, e, n) {
            pe(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }
        function js(t, e, n) {
            let s = t.length;
            for (; ; ) {
                const i = t.indexOf(e, n);
                if (-1 === i)
                    return i;
                if (0 === i || t.charCodeAt(i - 1) <= 32) {
                    const n = e.length;
                    if (i + n === s || t.charCodeAt(i + n) <= 32)
                        return i
                }
                n = i + 1
            }
        }
        const Bs = "ng-template";
        function Hs(t, e, n) {
            let s = 0;
            for (; s < t.length; ) {
                let i = t[s++];
                if (n && "class" === i) {
                    if (i = t[s],
                    -1 !== js(i.toLowerCase(), e, 0))
                        return !0
                } else if (1 === i) {
                    for (; s < t.length && "string" == typeof (i = t[s++]); )
                        if (i.toLowerCase() === e)
                            return !0;
                    return !1
                }
            }
            return !1
        }
        function $s(t) {
            return 4 === t.type && t.value !== Bs
        }
        function Us(t, e, n) {
            return e === (4 !== t.type || n ? t.value : Bs)
        }
        function zs(t, e, n) {
            let s = 4;
            const i = t.attrs || []
              , r = function(t) {
                for (let n = 0; n < t.length; n++)
                    if (3 === (e = t[n]) || 4 === e || 6 === e)
                        return n;
                var e;
                return t.length
            }(i);
            let o = !1;
            for (let a = 0; a < e.length; a++) {
                const l = e[a];
                if ("number" != typeof l) {
                    if (!o)
                        if (4 & s) {
                            if (s = 2 | 1 & s,
                            "" !== l && !Us(t, l, n) || "" === l && 1 === e.length) {
                                if (qs(s))
                                    return !1;
                                o = !0
                            }
                        } else {
                            const c = 8 & s ? l : e[++a];
                            if (8 & s && null !== t.attrs) {
                                if (!Hs(t.attrs, c, n)) {
                                    if (qs(s))
                                        return !1;
                                    o = !0
                                }
                                continue
                            }
                            const h = Xs(8 & s ? "class" : l, i, $s(t), n);
                            if (-1 === h) {
                                if (qs(s))
                                    return !1;
                                o = !0;
                                continue
                            }
                            if ("" !== c) {
                                let t;
                                t = h > r ? "" : i[h + 1].toLowerCase();
                                const e = 8 & s ? t : null;
                                if (e && -1 !== js(e, c, 0) || 2 & s && c !== t) {
                                    if (qs(s))
                                        return !1;
                                    o = !0
                                }
                            }
                        }
                } else {
                    if (!o && !qs(s) && !qs(l))
                        return !1;
                    if (o && qs(l))
                        continue;
                    o = !1,
                    s = l | 1 & s
                }
            }
            return qs(s) || o
        }
        function qs(t) {
            return 0 == (1 & t)
        }
        function Xs(t, e, n, s) {
            if (null === e)
                return -1;
            let i = 0;
            if (s || !n) {
                let n = !1;
                for (; i < e.length; ) {
                    const s = e[i];
                    if (s === t)
                        return i;
                    if (3 === s || 6 === s)
                        n = !0;
                    else {
                        if (1 === s || 2 === s) {
                            let t = e[++i];
                            for (; "string" == typeof t; )
                                t = e[++i];
                            continue
                        }
                        if (4 === s)
                            break;
                        if (0 === s) {
                            i += 4;
                            continue
                        }
                    }
                    i += n ? 1 : 2
                }
                return -1
            }
            return function(t, e) {
                let n = t.indexOf(4);
                if (n > -1)
                    for (n++; n < t.length; ) {
                        const s = t[n];
                        if ("number" == typeof s)
                            return -1;
                        if (s === e)
                            return n;
                        n++
                    }
                return -1
            }(e, t)
        }
        function Qs(t, e, n=!1) {
            for (let s = 0; s < e.length; s++)
                if (zs(t, e[s], n))
                    return !0;
            return !1
        }
        function Ks(t, e) {
            return t ? ":not(" + e.trim() + ")" : e
        }
        function Zs(t) {
            let e = t[0]
              , n = 1
              , s = 2
              , i = ""
              , r = !1;
            for (; n < t.length; ) {
                let o = t[n];
                if ("string" == typeof o)
                    if (2 & s) {
                        const e = t[++n];
                        i += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
                    } else
                        8 & s ? i += "." + o : 4 & s && (i += " " + o);
                else
                    "" === i || qs(o) || (e += Ks(r, i),
                    i = ""),
                    s = o,
                    r = r || !qs(s);
                n++
            }
            return "" !== i && (e += Ks(r, i)),
            e
        }
        const Gs = {};
        function Ys(t) {
            Js(xe(), Ee(), Ze() + t, Pe())
        }
        function Js(t, e, n, s) {
            if (!s)
                if (3 == (3 & e[2])) {
                    const s = t.preOrderCheckHooks;
                    null !== s && tn(e, s, n)
                } else {
                    const s = t.preOrderHooks;
                    null !== s && en(e, s, 0, n)
                }
            Ge(n)
        }
        function ti(t, e) {
            return t << 17 | e << 2
        }
        function ei(t) {
            return t >> 17 & 32767
        }
        function ni(t) {
            return 2 | t
        }
        function si(t) {
            return (131068 & t) >> 2
        }
        function ii(t, e) {
            return -131069 & t | e << 2
        }
        function ri(t) {
            return 1 | t
        }
        function oi(t, e) {
            const n = t.contentQueries;
            if (null !== n)
                for (let s = 0; s < n.length; s += 2) {
                    const i = n[s]
                      , r = n[s + 1];
                    if (-1 !== r) {
                        const n = t.data[r];
                        Be(i),
                        n.contentQueries(2, e[r], r)
                    }
                }
        }
        function ai(t, e, n, s, i, r, o, a, l, c) {
            const h = e.blueprint.slice();
            return h[0] = i,
            h[2] = 140 | s,
            Se(h),
            h[3] = h[15] = t,
            h[8] = n,
            h[10] = o || t && t[10],
            h[11] = a || t && t[11],
            h[12] = l || t && t[12] || null,
            h[9] = c || t && t[9] || null,
            h[6] = r,
            h[16] = 2 == e.type ? t[16] : h,
            h
        }
        function li(t, e, n, s, i) {
            let r = t.data[e];
            if (null === r)
                r = function(t, e, n, s, i) {
                    const r = Ve()
                      , o = Te()
                      , a = t.data[e] = function(t, e, n, s, i, r) {
                        return {
                            type: n,
                            index: s,
                            insertBeforeIndex: null,
                            injectorIndex: e ? e.injectorIndex : -1,
                            directiveStart: -1,
                            directiveEnd: -1,
                            directiveStylingLast: -1,
                            propertyBindings: null,
                            flags: 0,
                            providerIndexes: 0,
                            value: i,
                            attrs: r,
                            mergedAttrs: null,
                            localNames: null,
                            initialInputs: void 0,
                            inputs: null,
                            outputs: null,
                            tViews: null,
                            next: null,
                            projectionNext: null,
                            child: null,
                            parent: e,
                            projection: null,
                            styles: null,
                            stylesWithoutHost: null,
                            residualStyles: void 0,
                            classes: null,
                            classesWithoutHost: null,
                            residualClasses: void 0,
                            classBindings: 0,
                            styleBindings: 0
                        }
                    }(0, o ? r : r && r.parent, n, e, s, i);
                    return null === t.firstChild && (t.firstChild = a),
                    null !== r && (o ? null == r.child && null !== a.parent && (r.child = a) : null === r.next && (r.next = a)),
                    a
                }(t, e, n, s, i),
                Ce.lFrame.inI18n && (r.flags |= 64);
            else if (64 & r.type) {
                r.type = n,
                r.value = s,
                r.attrs = i;
                const t = function() {
                    const t = Ce.lFrame
                      , e = t.currentTNode;
                    return t.isParent ? e : e.parent
                }();
                r.injectorIndex = null === t ? -1 : t.injectorIndex
            }
            return Fe(r, !0),
            r
        }
        function ci(t, e, n, s) {
            if (0 === n)
                return -1;
            const i = e.length;
            for (let r = 0; r < n; r++)
                e.push(s),
                t.blueprint.push(s),
                t.data.push(null);
            return i
        }
        function hi(t, e, n) {
            Ue(e);
            try {
                const s = t.viewQuery;
                null !== s && Li(1, s, n);
                const i = t.template;
                null !== i && pi(t, e, i, 1, n),
                t.firstCreatePass && (t.firstCreatePass = !1),
                t.staticContentQueries && oi(t, e),
                t.staticViewQueries && Li(2, t.viewQuery, n);
                const r = t.components;
                null !== r && function(t, e) {
                    for (let n = 0; n < e.length; n++)
                        Ii(t, e[n])
                }(e, r)
            } catch (s) {
                throw t.firstCreatePass && (t.incompleteFirstPass = !0),
                s
            } finally {
                e[2] &= -5,
                Ke()
            }
        }
        function ui(t, e, n, s) {
            const i = e[2];
            if (256 == (256 & i))
                return;
            Ue(e);
            const r = Pe();
            try {
                Se(e),
                Ce.lFrame.bindingIndex = t.bindingStartIndex,
                null !== n && pi(t, e, n, 2, s);
                const o = 3 == (3 & i);
                if (!r)
                    if (o) {
                        const n = t.preOrderCheckHooks;
                        null !== n && tn(e, n, null)
                    } else {
                        const n = t.preOrderHooks;
                        null !== n && en(e, n, 0, null),
                        nn(e, 0)
                    }
                if (function(t) {
                    for (let e = ys(t); null !== e; e = vs(e)) {
                        if (!e[2])
                            continue;
                        const t = e[9];
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e]
                              , s = n[3];
                            0 == (1024 & n[2]) && Oe(s, 1),
                            n[2] |= 1024
                        }
                    }
                }(e),
                function(t) {
                    for (let e = ys(t); null !== e; e = vs(e))
                        for (let t = Yt; t < e.length; t++) {
                            const n = e[t]
                              , s = n[1];
                            we(n) && ui(s, n, s.template, n[8])
                        }
                }(e),
                null !== t.contentQueries && oi(t, e),
                !r)
                    if (o) {
                        const n = t.contentCheckHooks;
                        null !== n && tn(e, n)
                    } else {
                        const n = t.contentHooks;
                        null !== n && en(e, n, 1),
                        nn(e, 1)
                    }
                !function(t, e) {
                    const n = t.hostBindingOpCodes;
                    if (null !== n)
                        try {
                            for (let t = 0; t < n.length; t++) {
                                const s = n[t];
                                if (s < 0)
                                    Ge(~s);
                                else {
                                    const i = s
                                      , r = n[++t]
                                      , o = n[++t];
                                    Me(r, i),
                                    o(2, e[i])
                                }
                            }
                        } finally {
                            Ge(-1)
                        }
                }(t, e);
                const a = t.components;
                null !== a && function(t, e) {
                    for (let n = 0; n < e.length; n++)
                        Ti(t, e[n])
                }(e, a);
                const l = t.viewQuery;
                if (null !== l && Li(2, l, s),
                !r)
                    if (o) {
                        const n = t.viewCheckHooks;
                        null !== n && tn(e, n)
                    } else {
                        const n = t.viewHooks;
                        null !== n && en(e, n, 2),
                        nn(e, 2)
                    }
                !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
                r || (e[2] &= -73),
                1024 & e[2] && (e[2] &= -1025,
                Oe(e[3], -1))
            } finally {
                Ke()
            }
        }
        function di(t, e, n, s) {
            const i = e[10]
              , r = !Pe()
              , o = be(e);
            try {
                r && !o && i.begin && i.begin(),
                o && hi(t, e, s),
                ui(t, e, n, s)
            } finally {
                r && !o && i.end && i.end()
            }
        }
        function pi(t, e, n, s, i) {
            const r = Ze()
              , o = 2 & s;
            try {
                Ge(-1),
                o && e.length > Gt && Js(t, e, Gt, Pe()),
                n(s, i)
            } finally {
                Ge(r)
            }
        }
        function mi(t, e, n) {
            ke() && (function(t, e, n, s) {
                const i = n.directiveStart
                  , r = n.directiveEnd;
                t.firstCreatePass || yn(n, e),
                as(s, e);
                const o = n.initialInputs;
                for (let a = i; a < r; a++) {
                    const s = t.data[a]
                      , r = ie(s);
                    r && xi(e, n, s);
                    const l = Vn(e, t, a, n);
                    as(l, e),
                    null !== o && Di(0, a - i, l, s, 0, o),
                    r && (ve(n.index, e)[8] = l)
                }
            }(t, e, n, _e(n, e)),
            128 == (128 & n.flags) && function(t, e, n) {
                const s = n.directiveStart
                  , i = n.directiveEnd
                  , r = n.index
                  , o = Ce.lFrame.currentDirectiveIndex;
                try {
                    Ge(r);
                    for (let n = s; n < i; n++) {
                        const s = t.data[n]
                          , i = e[n];
                        Le(n),
                        null === s.hostBindings && 0 === s.hostVars && null === s.hostAttrs || Si(s, i)
                    }
                } finally {
                    Ge(-1),
                    Le(o)
                }
            }(t, e, n))
        }
        function fi(t, e, n=_e) {
            const s = e.localNames;
            if (null !== s) {
                let i = e.index + 1;
                for (let r = 0; r < s.length; r += 2) {
                    const o = s[r + 1]
                      , a = -1 === o ? n(e, t) : t[o];
                    t[i++] = a
                }
            }
        }
        function gi(t) {
            const e = t.tView;
            return null === e || e.incompleteFirstPass ? t.tView = _i(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e
        }
        function _i(t, e, n, s, i, r, o, a, l, c) {
            const h = Gt + s
              , u = h + i
              , d = function(t, e) {
                const n = [];
                for (let s = 0; s < e; s++)
                    n.push(s < t ? null : Gs);
                return n
            }(h, u)
              , p = "function" == typeof c ? c() : c;
            return d[1] = {
                type: t,
                blueprint: d,
                template: n,
                queries: null,
                viewQuery: a,
                declTNode: e,
                data: d.slice().fill(null, h),
                bindingStartIndex: h,
                expandoStartIndex: u,
                hostBindingOpCodes: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof r ? r() : r,
                pipeRegistry: "function" == typeof o ? o() : o,
                firstChild: null,
                schemas: l,
                consts: p,
                incompleteFirstPass: !1
            }
        }
        function yi(t, e, n, s) {
            const i = Bi(e);
            null === n ? i.push(s) : (i.push(n),
            t.firstCreatePass && Hi(t).push(s, i.length - 1))
        }
        function vi(t, e, n) {
            for (let s in t)
                if (t.hasOwnProperty(s)) {
                    const i = t[s];
                    (n = null === n ? {} : n).hasOwnProperty(s) ? n[s].push(e, i) : n[s] = [e, i]
                }
            return n
        }
        function bi(t, e, n, s, i, r, o, a) {
            const l = _e(e, n);
            let c, h = e.inputs;
            var u;
            !a && null != h && (c = h[s]) ? (Ui(t, n, c, s, i),
            ne(e) && function(t, e) {
                const n = ve(e, t);
                16 & n[2] || (n[2] |= 64)
            }(n, e.index)) : 3 & e.type && (s = "class" === (u = s) ? "className" : "for" === u ? "htmlFor" : "formaction" === u ? "formAction" : "innerHtml" === u ? "innerHTML" : "readonly" === u ? "readOnly" : "tabindex" === u ? "tabIndex" : u,
            i = null != o ? o(i, e.value || "", s) : i,
            pe(r) ? r.setProperty(l, s, i) : cn(s) || (l.setProperty ? l.setProperty(s, i) : l[s] = i))
        }
        function wi(t, e, n, s) {
            let i = !1;
            if (ke()) {
                const r = function(t, e, n) {
                    const s = t.directiveRegistry;
                    let i = null;
                    if (s)
                        for (let r = 0; r < s.length; r++) {
                            const o = s[r];
                            Qs(n, o.selectors, !1) && (i || (i = []),
                            An(yn(n, e), t, o.type),
                            ie(o) ? (Oi(t, n),
                            i.unshift(o)) : i.push(o))
                        }
                    return i
                }(t, e, n)
                  , o = null === s ? null : {
                    "": -1
                };
                if (null !== r) {
                    i = !0,
                    ki(n, t.data.length, r.length);
                    for (let t = 0; t < r.length; t++) {
                        const e = r[t];
                        e.providersResolver && e.providersResolver(e)
                    }
                    let s = !1
                      , a = !1
                      , l = ci(t, e, r.length, null);
                    for (let i = 0; i < r.length; i++) {
                        const c = r[i];
                        n.mergedAttrs = hn(n.mergedAttrs, c.hostAttrs),
                        Ei(t, n, e, l, c),
                        Ci(l, c, o),
                        null !== c.contentQueries && (n.flags |= 8),
                        null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128);
                        const h = c.type.prototype;
                        !s && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                        s = !0),
                        a || !h.ngOnChanges && !h.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index),
                        a = !0),
                        l++
                    }
                    !function(t, e) {
                        const n = e.directiveEnd
                          , s = t.data
                          , i = e.attrs
                          , r = [];
                        let o = null
                          , a = null;
                        for (let l = e.directiveStart; l < n; l++) {
                            const t = s[l]
                              , n = t.inputs
                              , c = null === i || $s(e) ? null : Vi(n, i);
                            r.push(c),
                            o = vi(n, l, o),
                            a = vi(t.outputs, l, a)
                        }
                        null !== o && (o.hasOwnProperty("class") && (e.flags |= 16),
                        o.hasOwnProperty("style") && (e.flags |= 32)),
                        e.initialInputs = r,
                        e.inputs = o,
                        e.outputs = a
                    }(t, n)
                }
                o && function(t, e, n) {
                    if (e) {
                        const s = t.localNames = [];
                        for (let t = 0; t < e.length; t += 2) {
                            const i = n[e[t + 1]];
                            if (null == i)
                                throw new ot("301",`Export of name '${e[t + 1]}' not found!`);
                            s.push(e[t], i)
                        }
                    }
                }(n, s, o)
            }
            return n.mergedAttrs = hn(n.mergedAttrs, n.attrs),
            i
        }
        function Ai(t, e, n, s, i, r) {
            const o = r.hostBindings;
            if (o) {
                let n = t.hostBindingOpCodes;
                null === n && (n = t.hostBindingOpCodes = []);
                const r = ~e.index;
                (function(t) {
                    let e = t.length;
                    for (; e > 0; ) {
                        const n = t[--e];
                        if ("number" == typeof n && n < 0)
                            return n
                    }
                    return 0
                }
                )(n) != r && n.push(r),
                n.push(s, i, o)
            }
        }
        function Si(t, e) {
            null !== t.hostBindings && t.hostBindings(1, e)
        }
        function Oi(t, e) {
            e.flags |= 2,
            (t.components || (t.components = [])).push(e.index)
        }
        function Ci(t, e, n) {
            if (n) {
                if (e.exportAs)
                    for (let s = 0; s < e.exportAs.length; s++)
                        n[e.exportAs[s]] = t;
                ie(e) && (n[""] = t)
            }
        }
        function ki(t, e, n) {
            t.flags |= 1,
            t.directiveStart = e,
            t.directiveEnd = e + n,
            t.providerIndexes = e
        }
        function Ei(t, e, n, s, i) {
            t.data[s] = i;
            const r = i.factory || (i.factory = re(i.type))
              , o = new an(r,ie(i),null);
            t.blueprint[s] = o,
            n[s] = o,
            Ai(t, e, 0, s, ci(t, n, i.hostVars, Gs), i)
        }
        function xi(t, e, n) {
            const s = _e(e, t)
              , i = gi(n)
              , r = t[10]
              , o = Ri(t, ai(t, i, null, n.onPush ? 64 : 16, s, e, r, r.createRenderer(s, n), null, null));
            t[e.index] = o
        }
        function Di(t, e, n, s, i, r) {
            const o = r[e];
            if (null !== o) {
                const t = s.setInput;
                for (let e = 0; e < o.length; ) {
                    const i = o[e++]
                      , r = o[e++]
                      , a = o[e++];
                    null !== t ? s.setInput(n, a, i, r) : n[r] = a
                }
            }
        }
        function Vi(t, e) {
            let n = null
              , s = 0;
            for (; s < e.length; ) {
                const i = e[s];
                if (0 !== i)
                    if (5 !== i) {
                        if ("number" == typeof i)
                            break;
                        t.hasOwnProperty(i) && (null === n && (n = []),
                        n.push(i, t[i], e[s + 1])),
                        s += 2
                    } else
                        s += 2;
                else
                    s += 4
            }
            return n
        }
        function Fi(t, e, n, s) {
            return new Array(t,!0,!1,e,null,0,s,n,null,null)
        }
        function Ti(t, e) {
            const n = ve(e, t);
            if (we(n)) {
                const t = n[1];
                80 & n[2] ? ui(t, n, t.template, n[8]) : n[5] > 0 && Pi(n)
            }
        }
        function Pi(t) {
            for (let n = ys(t); null !== n; n = vs(n))
                for (let t = Yt; t < n.length; t++) {
                    const e = n[t];
                    if (1024 & e[2]) {
                        const t = e[1];
                        ui(t, e, t.template, e[8])
                    } else
                        e[5] > 0 && Pi(e)
                }
            const e = t[1].components;
            if (null !== e)
                for (let n = 0; n < e.length; n++) {
                    const s = ve(e[n], t);
                    we(s) && s[5] > 0 && Pi(s)
                }
        }
        function Ii(t, e) {
            const n = ve(e, t)
              , s = n[1];
            !function(t, e) {
                for (let n = e.length; n < t.blueprint.length; n++)
                    e.push(t.blueprint[n])
            }(s, n),
            hi(s, n, n[8])
        }
        function Ri(t, e) {
            return t[13] ? t[14][4] = e : t[13] = e,
            t[14] = e,
            e
        }
        function Ni(t) {
            for (; t; ) {
                t[2] |= 64;
                const e = _s(t);
                if (0 != (512 & t[2]) && !e)
                    return t;
                t = e
            }
            return null
        }
        function Wi(t, e, n) {
            const s = e[10];
            s.begin && s.begin();
            try {
                ui(t, e, t.template, n)
            } catch (i) {
                throw $i(e, i),
                i
            } finally {
                s.end && s.end()
            }
        }
        function Mi(t) {
            !function(t) {
                for (let e = 0; e < t.components.length; e++) {
                    const n = t.components[e]
                      , s = ls(n)
                      , i = s[1];
                    di(i, s, i.template, n)
                }
            }(t[8])
        }
        function Li(t, e, n) {
            Be(0),
            e(t, n)
        }
        const ji = (()=>Promise.resolve(null))();
        function Bi(t) {
            return t[7] || (t[7] = [])
        }
        function Hi(t) {
            return t.cleanup || (t.cleanup = [])
        }
        function $i(t, e) {
            const n = t[9]
              , s = n ? n.get(ds, null) : null;
            s && s.handleError(e)
        }
        function Ui(t, e, n, s, i) {
            for (let r = 0; r < n.length; ) {
                const o = n[r++]
                  , a = n[r++]
                  , l = e[o]
                  , c = t.data[o];
                null !== c.setInput ? c.setInput(l, i, s, a) : l[a] = i
            }
        }
        function zi(t, e, n) {
            const s = ge(e, t);
            !function(t, e, n) {
                pe(t) ? t.setValue(e, n) : e.textContent = n
            }(t[11], s, n)
        }
        function qi(t, e, n) {
            let s = n ? t.styles : null
              , i = n ? t.classes : null
              , r = 0;
            if (null !== e)
                for (let o = 0; o < e.length; o++) {
                    const t = e[o];
                    "number" == typeof t ? r = t : 1 == r ? i = et(i, t) : 2 == r && (s = et(s, t + ": " + e[++o] + ";"))
                }
            n ? t.styles = s : t.stylesWithoutHost = s,
            n ? t.classes = i : t.classesWithoutHost = i
        }
        const Xi = new Mn("INJECTOR",-1);
        class Qi {
            get(t, e=qn) {
                if (e === qn) {
                    const e = new Error(`NullInjectorError: No provider for ${tt(t)}!`);
                    throw e.name = "NullInjectorError",
                    e
                }
                return e
            }
        }
        const Ki = new Mn("Set Injector scope.")
          , Zi = {}
          , Gi = {};
        let Yi;
        function Ji() {
            return void 0 === Yi && (Yi = new Qi),
            Yi
        }
        function tr(t, e=null, n=null, s) {
            return new er(t,n,e || Ji(),s)
        }
        class er {
            constructor(t, e, n, s=null) {
                this.parent = n,
                this.records = new Map,
                this.injectorDefTypes = new Set,
                this.onDestroy = new Set,
                this._destroyed = !1;
                const i = [];
                e && jn(e, n=>this.processProvider(n, t, e)),
                jn([t], t=>this.processInjectorType(t, [], i)),
                this.records.set(Xi, ir(void 0, this));
                const r = this.records.get(Ki);
                this.scope = null != r ? r.value : null,
                this.source = s || ("object" == typeof t ? null : tt(t))
            }
            get destroyed() {
                return this._destroyed
            }
            destroy() {
                this.assertNotDestroyed(),
                this._destroyed = !0;
                try {
                    this.onDestroy.forEach(t=>t.ngOnDestroy())
                } finally {
                    this.records.clear(),
                    this.onDestroy.clear(),
                    this.injectorDefTypes.clear()
                }
            }
            get(t, e=qn, n=vt.Default) {
                this.assertNotDestroyed();
                const s = Gn(this);
                try {
                    if (!(n & vt.SkipSelf)) {
                        let e = this.records.get(t);
                        if (void 0 === e) {
                            const n = ("function" == typeof (i = t) || "object" == typeof i && i instanceof Mn) && dt(t);
                            e = n && this.injectableDefInScope(n) ? ir(nr(t), Zi) : null,
                            this.records.set(t, e)
                        }
                        if (null != e)
                            return this.hydrate(t, e)
                    }
                    return (n & vt.Self ? Ji() : this.parent).get(t, e = n & vt.Optional && e === qn ? null : e)
                } catch (r) {
                    if ("NullInjectorError" === r.name) {
                        if ((r.ngTempTokenPath = r.ngTempTokenPath || []).unshift(tt(t)),
                        s)
                            throw r;
                        return function(t, e, n, s) {
                            const i = t.ngTempTokenPath;
                            throw e[Qn] && i.unshift(e[Qn]),
                            t.message = function(t, e, n, s=null) {
                                t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                                let i = tt(e);
                                if (Array.isArray(e))
                                    i = e.map(tt).join(" -> ");
                                else if ("object" == typeof e) {
                                    let t = [];
                                    for (let n in e)
                                        if (e.hasOwnProperty(n)) {
                                            let s = e[n];
                                            t.push(n + ":" + ("string" == typeof s ? JSON.stringify(s) : tt(s)))
                                        }
                                    i = `{${t.join(", ")}}`
                                }
                                return `${n}${s ? "(" + s + ")" : ""}[${i}]: ${t.replace(Xn, "\n  ")}`
                            }("\n" + t.message, i, n, s),
                            t.ngTokenPath = i,
                            t.ngTempTokenPath = null,
                            t
                        }(r, t, "R3InjectorError", this.source)
                    }
                    throw r
                } finally {
                    Gn(s)
                }
                var i
            }
            _resolveInjectorDefTypes() {
                this.injectorDefTypes.forEach(t=>this.get(t))
            }
            toString() {
                const t = [];
                return this.records.forEach((e,n)=>t.push(tt(n))),
                `R3Injector[${t.join(", ")}]`
            }
            assertNotDestroyed() {
                if (this._destroyed)
                    throw new Error("Injector has already been destroyed.")
            }
            processInjectorType(t, e, n) {
                if (!(t = it(t)))
                    return !1;
                let s = mt(t);
                const i = null == s && t.ngModule || void 0
                  , r = void 0 === i ? t : i
                  , o = -1 !== n.indexOf(r);
                if (void 0 !== i && (s = mt(i)),
                null == s)
                    return !1;
                if (null != s.imports && !o) {
                    let t;
                    n.push(r);
                    try {
                        jn(s.imports, s=>{
                            this.processInjectorType(s, e, n) && (void 0 === t && (t = []),
                            t.push(s))
                        }
                        )
                    } finally {}
                    if (void 0 !== t)
                        for (let e = 0; e < t.length; e++) {
                            const {ngModule: n, providers: s} = t[e];
                            jn(s, t=>this.processProvider(t, n, s || Tt))
                        }
                }
                this.injectorDefTypes.add(r);
                const a = re(r) || (()=>new r);
                this.records.set(r, ir(a, Zi));
                const l = s.providers;
                if (null != l && !o) {
                    const e = t;
                    jn(l, t=>this.processProvider(t, e, l))
                }
                return void 0 !== i && void 0 !== t.providers
            }
            processProvider(t, e, n) {
                let s = or(t = it(t)) ? t : it(t && t.provide);
                const i = function(t, e, n) {
                    return rr(t) ? ir(void 0, t.useValue) : ir(sr(t), Zi)
                }(t);
                if (or(t) || !0 !== t.multi)
                    this.records.get(s);
                else {
                    let e = this.records.get(s);
                    e || (e = ir(void 0, Zi, !0),
                    e.factory = ()=>es(e.multi),
                    this.records.set(s, e)),
                    s = t,
                    e.multi.push(t)
                }
                this.records.set(s, i)
            }
            hydrate(t, e) {
                var n;
                return e.value === Zi && (e.value = Gi,
                e.value = e.factory()),
                "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value),
                e.value
            }
            injectableDefInScope(t) {
                if (!t.providedIn)
                    return !1;
                const e = it(t.providedIn);
                return "string" == typeof e ? "any" === e || e === this.scope : this.injectorDefTypes.has(e)
            }
        }
        function nr(t) {
            const e = dt(t)
              , n = null !== e ? e.factory : re(t);
            if (null !== n)
                return n;
            if (t instanceof Mn)
                throw new Error(`Token ${tt(t)} is missing a \u0275prov definition.`);
            if (t instanceof Function)
                return function(t) {
                    const e = t.length;
                    if (e > 0) {
                        const n = function(t, e) {
                            const n = [];
                            for (let s = 0; s < t; s++)
                                n.push("?");
                            return n
                        }(e);
                        throw new Error(`Can't resolve all parameters for ${tt(t)}: (${n.join(", ")}).`)
                    }
                    const n = function(t) {
                        const e = t && (t[ft] || t[_t]);
                        if (e) {
                            const n = function(t) {
                                if (t.hasOwnProperty("name"))
                                    return t.name;
                                const e = ("" + t).match(/^function\s*([^\s(]+)/);
                                return null === e ? "" : e[1]
                            }(t);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),
                            e
                        }
                        return null
                    }(t);
                    return null !== n ? ()=>n.factory(t) : ()=>new t
                }(t);
            throw new Error("unreachable")
        }
        function sr(t, e, n) {
            let s;
            if (or(t)) {
                const e = it(t);
                return re(e) || nr(e)
            }
            if (rr(t))
                s = ()=>it(t.useValue);
            else if ((i = t) && i.useFactory)
                s = ()=>t.useFactory(...es(t.deps || []));
            else if (function(t) {
                return !(!t || !t.useExisting)
            }(t))
                s = ()=>Jn(it(t.useExisting));
            else {
                const e = it(t && (t.useClass || t.provide));
                if (!function(t) {
                    return !!t.deps
                }(t))
                    return re(e) || nr(e);
                s = ()=>new e(...es(t.deps))
            }
            var i;
            return s
        }
        function ir(t, e, n=!1) {
            return {
                factory: t,
                value: e,
                multi: n ? [] : void 0
            }
        }
        function rr(t) {
            return null !== t && "object" == typeof t && Kn in t
        }
        function or(t) {
            return "function" == typeof t
        }
        const ar = function(t, e, n) {
            return function(t, e=null, n=null, s) {
                const i = tr(t, e, n, s);
                return i._resolveInjectorDefTypes(),
                i
            }({
                name: n
            }, e, t, n)
        };
        let lr = (()=>{
            class t {
                static create(t, e) {
                    return Array.isArray(t) ? ar(t, e, "") : ar(t.providers, t.parent, t.name || "")
                }
            }
            return t.THROW_IF_NOT_FOUND = qn,
            t.NULL = new Qi,
            t.\u0275prov = ht({
                token: t,
                providedIn: "any",
                factory: ()=>Jn(Xi)
            }),
            t.__NG_ELEMENT_ID__ = -1,
            t
        }
        )();
        function cr(t, e) {
            Je(ls(t)[1], De())
        }
        function hr(t) {
            let e = Object.getPrototypeOf(t.type.prototype).constructor
              , n = !0;
            const s = [t];
            for (; e; ) {
                let i;
                if (ie(t))
                    i = e.\u0275cmp || e.\u0275dir;
                else {
                    if (e.\u0275cmp)
                        throw new Error("Directives cannot inherit Components");
                    i = e.\u0275dir
                }
                if (i) {
                    if (n) {
                        s.push(i);
                        const e = t;
                        e.inputs = ur(t.inputs),
                        e.declaredInputs = ur(t.declaredInputs),
                        e.outputs = ur(t.outputs);
                        const n = i.hostBindings;
                        n && mr(t, n);
                        const r = i.viewQuery
                          , o = i.contentQueries;
                        if (r && dr(t, r),
                        o && pr(t, o),
                        J(t.inputs, i.inputs),
                        J(t.declaredInputs, i.declaredInputs),
                        J(t.outputs, i.outputs),
                        ie(i) && i.data.animation) {
                            const e = t.data;
                            e.animation = (e.animation || []).concat(i.data.animation)
                        }
                    }
                    const e = i.features;
                    if (e)
                        for (let s = 0; s < e.length; s++) {
                            const i = e[s];
                            i && i.ngInherit && i(t),
                            i === hr && (n = !1)
                        }
                }
                e = Object.getPrototypeOf(e)
            }
            !function(t) {
                let e = 0
                  , n = null;
                for (let s = t.length - 1; s >= 0; s--) {
                    const i = t[s];
                    i.hostVars = e += i.hostVars,
                    i.hostAttrs = hn(i.hostAttrs, n = hn(n, i.hostAttrs))
                }
            }(s)
        }
        function ur(t) {
            return t === Ft ? {} : t === Tt ? [] : t
        }
        function dr(t, e) {
            const n = t.viewQuery;
            t.viewQuery = n ? (t,s)=>{
                e(t, s),
                n(t, s)
            }
            : e
        }
        function pr(t, e) {
            const n = t.contentQueries;
            t.contentQueries = n ? (t,s,i)=>{
                e(t, s, i),
                n(t, s, i)
            }
            : e
        }
        function mr(t, e) {
            const n = t.hostBindings;
            t.hostBindings = n ? (t,s)=>{
                e(t, s),
                n(t, s)
            }
            : e
        }
        let fr = null;
        function gr() {
            if (!fr) {
                const t = Vt.Symbol;
                if (t && t.iterator)
                    fr = t.iterator;
                else {
                    const t = Object.getOwnPropertyNames(Map.prototype);
                    for (let e = 0; e < t.length; ++e) {
                        const n = t[e];
                        "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (fr = n)
                    }
                }
            }
            return fr
        }
        class _r {
            constructor(t) {
                this.wrapped = t
            }
            static wrap(t) {
                return new _r(t)
            }
            static unwrap(t) {
                return _r.isWrapped(t) ? t.wrapped : t
            }
            static isWrapped(t) {
                return t instanceof _r
            }
        }
        function yr(t) {
            return !!vr(t) && (Array.isArray(t) || !(t instanceof Map) && gr()in t)
        }
        function vr(t) {
            return null !== t && ("function" == typeof t || "object" == typeof t)
        }
        function br(t, e, n) {
            return !Object.is(t[e], n) && (t[e] = n,
            !0)
        }
        function wr(t, e, n, s) {
            const i = br(t, e, n);
            return br(t, e + 1, s) || i
        }
        function Ar(t, e, n, s) {
            return br(t, Ne(), n) ? e + at(n) + s : Gs
        }
        function Sr(t, e, n, s, i, r, o, a) {
            const l = Ee()
              , c = xe()
              , h = t + Gt
              , u = c.firstCreatePass ? function(t, e, n, s, i, r, o, a, l) {
                const c = e.consts
                  , h = li(e, t, 4, o || null, Ae(c, a));
                wi(e, n, h, Ae(c, l)),
                Je(e, h);
                const u = h.tViews = _i(2, h, s, i, r, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c);
                return null !== e.queries && (e.queries.template(e, h),
                u.queries = e.queries.embeddedTView(h)),
                h
            }(h, c, l, e, n, s, i, r, o) : c.data[h];
            Fe(u, !1);
            const d = l[11].createComment("");
            Fs(c, l, d, u),
            as(d, l),
            Ri(l, l[h] = Fi(d, l, d, u)),
            se(u) && mi(c, l, u),
            null != o && fi(l, u, a)
        }
        function Or(t, e=vt.Default) {
            const n = Ee();
            return null === n ? Jn(t, e) : Cn(De(), n, it(t), e)
        }
        function Cr(t, e, n) {
            const s = Ee();
            return br(s, Ne(), e) && bi(xe(), Ye(), s, t, e, s[11], n, !1),
            Cr
        }
        function kr(t, e, n, s, i) {
            const r = i ? "class" : "style";
            Ui(t, n, e.inputs[r], r, s)
        }
        function Er(t, e, n, s) {
            const i = Ee()
              , r = xe()
              , o = Gt + t
              , a = i[11]
              , l = i[o] = As(a, e, Ce.lFrame.currentNamespace)
              , c = r.firstCreatePass ? function(t, e, n, s, i, r, o) {
                const a = e.consts
                  , l = li(e, t, 2, i, Ae(a, r));
                return wi(e, n, l, Ae(a, o)),
                null !== l.attrs && qi(l, l.attrs, !1),
                null !== l.mergedAttrs && qi(l, l.mergedAttrs, !0),
                null !== e.queries && e.queries.elementStart(e, l),
                l
            }(o, r, i, 0, e, n, s) : r.data[o];
            Fe(c, !0);
            const h = c.mergedAttrs;
            null !== h && ln(a, l, h);
            const u = c.classes;
            null !== u && Ls(a, l, u);
            const d = c.styles;
            null !== d && Ms(a, l, d),
            64 != (64 & c.flags) && Fs(r, i, l, c),
            0 === Ce.lFrame.elementDepthCount && as(l, i),
            Ce.lFrame.elementDepthCount++,
            se(c) && (mi(r, i, c),
            function(t, e, n) {
                if (ee(e)) {
                    const s = e.directiveEnd;
                    for (let i = e.directiveStart; i < s; i++) {
                        const e = t.data[i];
                        e.contentQueries && e.contentQueries(1, n[i], i)
                    }
                }
            }(r, c, i)),
            null !== s && fi(i, c)
        }
        function xr() {
            let t = De();
            Te() ? Ce.lFrame.isParent = !1 : (t = t.parent,
            Fe(t, !1));
            const e = t;
            Ce.lFrame.elementDepthCount--;
            const n = xe();
            n.firstCreatePass && (Je(n, t),
            ee(t) && n.queries.elementEnd(t)),
            null != e.classesWithoutHost && function(t) {
                return 0 != (16 & t.flags)
            }(e) && kr(n, e, Ee(), e.classesWithoutHost, !0),
            null != e.stylesWithoutHost && function(t) {
                return 0 != (32 & t.flags)
            }(e) && kr(n, e, Ee(), e.stylesWithoutHost, !1)
        }
        function Dr(t, e, n, s) {
            Er(t, e, n, s),
            xr()
        }
        function Vr(t) {
            return !!t && "function" == typeof t.then
        }
        const Fr = function(t) {
            return !!t && "function" == typeof t.subscribe
        };
        function Tr(t, e, n, s) {
            const i = Ee()
              , r = xe()
              , o = De();
            return function(t, e, n, s, i, r, o, a) {
                const l = se(s)
                  , c = t.firstCreatePass && Hi(t)
                  , h = Bi(e);
                let u = !0;
                if (3 & s.type || a) {
                    const d = _e(s, e)
                      , p = a ? a(d) : d
                      , m = h.length
                      , f = a ? t=>a(fe(t[s.index])) : s.index;
                    if (pe(n)) {
                        let o = null;
                        if (!a && l && (o = function(t, e, n, s) {
                            const i = t.cleanup;
                            if (null != i)
                                for (let r = 0; r < i.length - 1; r += 2) {
                                    const t = i[r];
                                    if (t === n && i[r + 1] === s) {
                                        const t = e[7]
                                          , n = i[r + 2];
                                        return t.length > n ? t[n] : null
                                    }
                                    "string" == typeof t && (r += 2)
                                }
                            return null
                        }(t, e, i, s.index)),
                        null !== o)
                            (o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = r,
                            o.__ngLastListenerFn__ = r,
                            u = !1;
                        else {
                            r = Ir(s, e, 0, r, !1);
                            const t = n.listen(p, i, r);
                            h.push(r, t),
                            c && c.push(i, f, m, m + 1)
                        }
                    } else
                        r = Ir(s, e, 0, r, !0),
                        p.addEventListener(i, r, o),
                        h.push(r),
                        c && c.push(i, f, m, o)
                } else
                    r = Ir(s, e, 0, r, !1);
                const d = s.outputs;
                let p;
                if (u && null !== d && (p = d[i])) {
                    const t = p.length;
                    if (t)
                        for (let n = 0; n < t; n += 2) {
                            const t = e[p[n]][p[n + 1]].subscribe(r)
                              , o = h.length;
                            h.push(r, t),
                            c && c.push(i, s.index, o, -(o + 1))
                        }
                }
            }(r, i, i[11], o, t, e, !!n, s),
            Tr
        }
        function Pr(t, e, n, s) {
            try {
                return !1 !== n(s)
            } catch (i) {
                return $i(t, i),
                !1
            }
        }
        function Ir(t, e, n, s, i) {
            return function n(r) {
                if (r === Function)
                    return s;
                const o = 2 & t.flags ? ve(t.index, e) : e;
                0 == (32 & e[2]) && Ni(o);
                let a = Pr(e, 0, s, r)
                  , l = n.__ngNextListenerFn__;
                for (; l; )
                    a = Pr(e, 0, l, r) && a,
                    l = l.__ngNextListenerFn__;
                return i && !1 === a && (r.preventDefault(),
                r.returnValue = !1),
                a
            }
        }
        function Rr(t=1) {
            return function(t) {
                return (Ce.lFrame.contextLView = function(t, e) {
                    for (; t > 0; )
                        e = e[15],
                        t--;
                    return e
                }(t, Ce.lFrame.contextLView))[8]
            }(t)
        }
        function Nr(t, e, n) {
            return Wr(t, "", e, "", n),
            Nr
        }
        function Wr(t, e, n, s, i) {
            const r = Ee()
              , o = Ar(r, e, n, s);
            return o !== Gs && bi(xe(), Ye(), r, t, o, r[11], i, !1),
            Wr
        }
        function Mr(t, e, n, s, i) {
            const r = t[n + 1]
              , o = null === e;
            let a = s ? ei(r) : si(r)
              , l = !1;
            for (; 0 !== a && (!1 === l || o); ) {
                const n = t[a + 1];
                Lr(t[a], e) && (l = !0,
                t[a + 1] = s ? ri(n) : ni(n)),
                a = s ? ei(n) : si(n)
            }
            l && (t[n + 1] = s ? ni(r) : ri(r))
        }
        function Lr(t, e) {
            return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && zn(t, e) >= 0
        }
        const jr = {
            textEnd: 0,
            key: 0,
            keyEnd: 0,
            value: 0,
            valueEnd: 0
        };
        function Br(t) {
            return t.substring(jr.key, jr.keyEnd)
        }
        function Hr(t) {
            return t.substring(jr.value, jr.valueEnd)
        }
        function $r(t, e) {
            const n = jr.textEnd;
            return n === e ? -1 : (e = jr.keyEnd = function(t, e, n) {
                for (; e < n && t.charCodeAt(e) > 32; )
                    e++;
                return e
            }(t, jr.key = e, n),
            qr(t, e, n))
        }
        function Ur(t, e) {
            const n = jr.textEnd;
            let s = jr.key = qr(t, e, n);
            return n === s ? -1 : (s = jr.keyEnd = function(t, e, n) {
                let s;
                for (; e < n && (45 === (s = t.charCodeAt(e)) || 95 === s || (-33 & s) >= 65 && (-33 & s) <= 90 || s >= 48 && s <= 57); )
                    e++;
                return e
            }(t, s, n),
            s = Xr(t, s, n),
            s = jr.value = qr(t, s, n),
            s = jr.valueEnd = function(t, e, n) {
                let s = -1
                  , i = -1
                  , r = -1
                  , o = e
                  , a = o;
                for (; o < n; ) {
                    const l = t.charCodeAt(o++);
                    if (59 === l)
                        return a;
                    34 === l || 39 === l ? a = o = Qr(t, l, o, n) : e === o - 4 && 85 === r && 82 === i && 76 === s && 40 === l ? a = o = Qr(t, 41, o, n) : l > 32 && (a = o),
                    r = i,
                    i = s,
                    s = -33 & l
                }
                return a
            }(t, s, n),
            Xr(t, s, n))
        }
        function zr(t) {
            jr.key = 0,
            jr.keyEnd = 0,
            jr.value = 0,
            jr.valueEnd = 0,
            jr.textEnd = t.length
        }
        function qr(t, e, n) {
            for (; e < n && t.charCodeAt(e) <= 32; )
                e++;
            return e
        }
        function Xr(t, e, n, s) {
            return (e = qr(t, e, n)) < n && e++,
            e
        }
        function Qr(t, e, n, s) {
            let i = -1
              , r = n;
            for (; r < s; ) {
                const n = t.charCodeAt(r++);
                if (n == e && 92 !== i)
                    return r;
                i = 92 == n && 92 === i ? 0 : n
            }
            throw new Error
        }
        function Kr(t, e) {
            return function(t, e, n, s) {
                const i = Ee()
                  , r = xe()
                  , o = We(2);
                r.firstUpdatePass && to(r, t, o, true),
                e !== Gs && br(i, o, e) && io(r, r.data[Ze()], i, i[11], t, i[o + 1] = function(t, e) {
                    return null == t || "object" == typeof t && (t = tt(os(t))),
                    t
                }(e), true, o)
            }(t, e),
            Kr
        }
        function Zr(t, e) {
            for (let n = function(t) {
                return zr(t),
                Ur(t, qr(t, 0, jr.textEnd))
            }(e); n >= 0; n = Ur(e, n))
                so(t, Br(e), Hr(e))
        }
        function Gr(t, e) {
            for (let n = function(t) {
                return zr(t),
                $r(t, qr(t, 0, jr.textEnd))
            }(e); n >= 0; n = $r(e, n))
                $n(t, Br(e), !0)
        }
        function Yr(t, e, n, s) {
            const i = xe()
              , r = We(2);
            i.firstUpdatePass && to(i, null, r, s);
            const o = Ee();
            if (n !== Gs && br(o, r, n)) {
                const a = i.data[Ze()];
                if (ao(a, s) && !Jr(i, r)) {
                    let t = s ? a.classesWithoutHost : a.stylesWithoutHost;
                    null !== t && (n = et(t, n || "")),
                    kr(i, a, o, n, s)
                } else
                    !function(t, e, n, s, i, r, o, a) {
                        i === Gs && (i = Tt);
                        let l = 0
                          , c = 0
                          , h = 0 < i.length ? i[0] : null
                          , u = 0 < r.length ? r[0] : null;
                        for (; null !== h || null !== u; ) {
                            const d = l < i.length ? i[l + 1] : void 0
                              , p = c < r.length ? r[c + 1] : void 0;
                            let m, f = null;
                            h === u ? (l += 2,
                            c += 2,
                            d !== p && (f = u,
                            m = p)) : null === u || null !== h && h < u ? (l += 2,
                            f = h) : (c += 2,
                            f = u,
                            m = p),
                            null !== f && io(t, e, n, s, f, m, o, a),
                            h = l < i.length ? i[l] : null,
                            u = c < r.length ? r[c] : null
                        }
                    }(i, a, o, o[11], o[r + 1], o[r + 1] = function(t, e, n) {
                        if (null == n || "" === n)
                            return Tt;
                        const s = []
                          , i = os(n);
                        if (Array.isArray(i))
                            for (let r = 0; r < i.length; r++)
                                t(s, i[r], !0);
                        else if ("object" == typeof i)
                            for (const r in i)
                                i.hasOwnProperty(r) && t(s, r, i[r]);
                        else
                            "string" == typeof i && e(s, i);
                        return s
                    }(t, e, n), s, r)
            }
        }
        function Jr(t, e) {
            return e >= t.expandoStartIndex
        }
        function to(t, e, n, s) {
            const i = t.data;
            if (null === i[n + 1]) {
                const r = i[Ze()]
                  , o = Jr(t, n);
                ao(r, s) && null === e && !o && (e = !1),
                e = function(t, e, n, s) {
                    const i = function(t) {
                        const e = Ce.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e]
                    }(t);
                    let r = s ? e.residualClasses : e.residualStyles;
                    if (null === i)
                        0 === (s ? e.classBindings : e.styleBindings) && (n = no(n = eo(null, t, e, n, s), e.attrs, s),
                        r = null);
                    else {
                        const o = e.directiveStylingLast;
                        if (-1 === o || t[o] !== i)
                            if (n = eo(i, t, e, n, s),
                            null === r) {
                                let n = function(t, e, n) {
                                    const s = n ? e.classBindings : e.styleBindings;
                                    if (0 !== si(s))
                                        return t[ei(s)]
                                }(t, e, s);
                                void 0 !== n && Array.isArray(n) && (n = eo(null, t, e, n[1], s),
                                n = no(n, e.attrs, s),
                                function(t, e, n, s) {
                                    t[ei(n ? e.classBindings : e.styleBindings)] = s
                                }(t, e, s, n))
                            } else
                                r = function(t, e, n) {
                                    let s;
                                    const i = e.directiveEnd;
                                    for (let r = 1 + e.directiveStylingLast; r < i; r++)
                                        s = no(s, t[r].hostAttrs, n);
                                    return no(s, e.attrs, n)
                                }(t, e, s)
                    }
                    return void 0 !== r && (s ? e.residualClasses = r : e.residualStyles = r),
                    n
                }(i, r, e, s),
                function(t, e, n, s, i, r) {
                    let o = r ? e.classBindings : e.styleBindings
                      , a = ei(o)
                      , l = si(o);
                    t[s] = n;
                    let c, h = !1;
                    if (Array.isArray(n)) {
                        const t = n;
                        c = t[1],
                        (null === c || zn(t, c) > 0) && (h = !0)
                    } else
                        c = n;
                    if (i)
                        if (0 !== l) {
                            const e = ei(t[a + 1]);
                            t[s + 1] = ti(e, a),
                            0 !== e && (t[e + 1] = ii(t[e + 1], s)),
                            t[a + 1] = 131071 & t[a + 1] | s << 17
                        } else
                            t[s + 1] = ti(a, 0),
                            0 !== a && (t[a + 1] = ii(t[a + 1], s)),
                            a = s;
                    else
                        t[s + 1] = ti(l, 0),
                        0 === a ? a = s : t[l + 1] = ii(t[l + 1], s),
                        l = s;
                    h && (t[s + 1] = ni(t[s + 1])),
                    Mr(t, c, s, !0),
                    Mr(t, c, s, !1),
                    function(t, e, n, s, i) {
                        const r = i ? t.residualClasses : t.residualStyles;
                        null != r && "string" == typeof e && zn(r, e) >= 0 && (n[s + 1] = ri(n[s + 1]))
                    }(e, c, t, s, r),
                    o = ti(a, l),
                    r ? e.classBindings = o : e.styleBindings = o
                }(i, r, e, n, o, s)
            }
        }
        function eo(t, e, n, s, i) {
            let r = null;
            const o = n.directiveEnd;
            let a = n.directiveStylingLast;
            for (-1 === a ? a = n.directiveStart : a++; a < o && (r = e[a],
            s = no(s, r.hostAttrs, i),
            r !== t); )
                a++;
            return null !== t && (n.directiveStylingLast = a),
            s
        }
        function no(t, e, n) {
            const s = n ? 1 : 2;
            let i = -1;
            if (null !== e)
                for (let r = 0; r < e.length; r++) {
                    const o = e[r];
                    "number" == typeof o ? i = o : i === s && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                    $n(t, o, !!n || e[++r]))
                }
            return void 0 === t ? null : t
        }
        function so(t, e, n) {
            $n(t, e, os(n))
        }
        function io(t, e, n, s, i, r, o, a) {
            if (!(3 & e.type))
                return;
            const l = t.data
              , c = l[a + 1];
            oo(1 == (1 & c) ? ro(l, e, n, i, si(c), o) : void 0) || (oo(r) || 2 == (2 & c) && (r = ro(l, null, n, i, a, o)),
            function(t, e, n, s, i) {
                const r = pe(t);
                if (e)
                    i ? r ? t.addClass(n, s) : n.classList.add(s) : r ? t.removeClass(n, s) : n.classList.remove(s);
                else {
                    let e = -1 === s.indexOf("-") ? void 0 : fs.DashCase;
                    if (null == i)
                        r ? t.removeStyle(n, s, e) : n.style.removeProperty(s);
                    else {
                        const o = "string" == typeof i && i.endsWith("!important");
                        o && (i = i.slice(0, -10),
                        e |= fs.Important),
                        r ? t.setStyle(n, s, i, e) : n.style.setProperty(s, i, o ? "important" : "")
                    }
                }
            }(s, o, ge(Ze(), n), i, r))
        }
        function ro(t, e, n, s, i, r) {
            const o = null === e;
            let a;
            for (; i > 0; ) {
                const e = t[i]
                  , r = Array.isArray(e)
                  , l = r ? e[1] : e
                  , c = null === l;
                let h = n[i + 1];
                h === Gs && (h = c ? Tt : void 0);
                let u = c ? Un(h, s) : l === s ? h : void 0;
                if (r && !oo(u) && (u = Un(e, s)),
                oo(u) && (a = u,
                o))
                    return a;
                const d = t[i + 1];
                i = o ? ei(d) : si(d)
            }
            if (null !== e) {
                let t = r ? e.residualClasses : e.residualStyles;
                null != t && (a = Un(t, s))
            }
            return a
        }
        function oo(t) {
            return void 0 !== t
        }
        function ao(t, e) {
            return 0 != (t.flags & (e ? 16 : 32))
        }
        function lo(t, e="") {
            const n = Ee()
              , s = xe()
              , i = t + Gt
              , r = s.firstCreatePass ? li(s, i, 1, e, null) : s.data[i]
              , o = n[i] = function(t, e) {
                return pe(t) ? t.createText(e) : t.createTextNode(e)
            }(n[11], e);
            Fs(s, n, o, r),
            Fe(r, !1)
        }
        function co(t) {
            return ho("", t, ""),
            co
        }
        function ho(t, e, n) {
            const s = Ee()
              , i = Ar(s, t, e, n);
            return i !== Gs && zi(s, Ze(), i),
            ho
        }
        function uo(t, e, n, s, i) {
            const r = Ee()
              , o = function(t, e, n, s, i, r) {
                const o = wr(t, Re(), n, i);
                return We(2),
                o ? e + at(n) + s + at(i) + r : Gs
            }(r, t, e, n, s, i);
            return o !== Gs && zi(r, Ze(), o),
            uo
        }
        const po = void 0;
        var mo = ["en", [["a", "p"], ["AM", "PM"], po], [["AM", "PM"], po, po], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], po, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], po, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", po, "{1} 'at' {0}", po], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function(t) {
            let e = Math.floor(Math.abs(t))
              , n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
        }
        ];
        let fo = {};
        function go(t) {
            const e = function(t) {
                return t.toLowerCase().replace(/_/g, "-")
            }(t);
            let n = _o(e);
            if (n)
                return n;
            const s = e.split("-")[0];
            if (n = _o(s),
            n)
                return n;
            if ("en" === s)
                return mo;
            throw new Error(`Missing locale data for the locale "${t}".`)
        }
        function _o(t) {
            return t in fo || (fo[t] = Vt.ng && Vt.ng.common && Vt.ng.common.locales && Vt.ng.common.locales[t]),
            fo[t]
        }
        var yo = function(t) {
            return t[t.LocaleId = 0] = "LocaleId",
            t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat",
            t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
            t[t.DaysFormat = 3] = "DaysFormat",
            t[t.DaysStandalone = 4] = "DaysStandalone",
            t[t.MonthsFormat = 5] = "MonthsFormat",
            t[t.MonthsStandalone = 6] = "MonthsStandalone",
            t[t.Eras = 7] = "Eras",
            t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek",
            t[t.WeekendRange = 9] = "WeekendRange",
            t[t.DateFormat = 10] = "DateFormat",
            t[t.TimeFormat = 11] = "TimeFormat",
            t[t.DateTimeFormat = 12] = "DateTimeFormat",
            t[t.NumberSymbols = 13] = "NumberSymbols",
            t[t.NumberFormats = 14] = "NumberFormats",
            t[t.CurrencyCode = 15] = "CurrencyCode",
            t[t.CurrencySymbol = 16] = "CurrencySymbol",
            t[t.CurrencyName = 17] = "CurrencyName",
            t[t.Currencies = 18] = "Currencies",
            t[t.Directionality = 19] = "Directionality",
            t[t.PluralCase = 20] = "PluralCase",
            t[t.ExtraData = 21] = "ExtraData",
            t
        }({});
        const vo = "en-US";
        let bo = vo;
        function wo(t) {
            var e, n;
            n = "Expected localeId to be defined",
            null == (e = t) && function(t, e, n, s) {
                throw new Error(`ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`)
            }(n, e),
            "string" == typeof t && (bo = t.toLowerCase().replace(/_/g, "-"))
        }
        function Ao(t, e, n, s, i) {
            if (t = it(t),
            Array.isArray(t))
                for (let r = 0; r < t.length; r++)
                    Ao(t[r], e, n, s, i);
            else {
                const r = xe()
                  , o = Ee();
                let a = or(t) ? t : it(t.provide)
                  , l = sr(t);
                const c = De()
                  , h = 1048575 & c.providerIndexes
                  , u = c.directiveStart
                  , d = c.providerIndexes >> 20;
                if (or(t) || !t.multi) {
                    const s = new an(l,i,Or)
                      , p = Co(a, e, i ? h : h + d, u);
                    -1 === p ? (An(yn(c, o), r, a),
                    So(r, t, e.length),
                    e.push(a),
                    c.directiveStart++,
                    c.directiveEnd++,
                    i && (c.providerIndexes += 1048576),
                    n.push(s),
                    o.push(s)) : (n[p] = s,
                    o[p] = s)
                } else {
                    const p = Co(a, e, h + d, u)
                      , m = Co(a, e, h, h + d)
                      , f = p >= 0 && n[p]
                      , g = m >= 0 && n[m];
                    if (i && !g || !i && !f) {
                        An(yn(c, o), r, a);
                        const h = function(t, e, n, s, i) {
                            const r = new an(t,n,Or);
                            return r.multi = [],
                            r.index = e,
                            r.componentProviders = 0,
                            Oo(r, i, s && !n),
                            r
                        }(i ? Eo : ko, n.length, i, s, l);
                        !i && g && (n[m].providerFactory = h),
                        So(r, t, e.length, 0),
                        e.push(a),
                        c.directiveStart++,
                        c.directiveEnd++,
                        i && (c.providerIndexes += 1048576),
                        n.push(h),
                        o.push(h)
                    } else
                        So(r, t, p > -1 ? p : m, Oo(n[i ? m : p], l, !i && s));
                    !i && s && g && n[m].componentProviders++
                }
            }
        }
        function So(t, e, n, s) {
            const i = or(e);
            if (i || e.useClass) {
                const r = (e.useClass || e).prototype.ngOnDestroy;
                if (r) {
                    const o = t.destroyHooks || (t.destroyHooks = []);
                    if (!i && e.multi) {
                        const t = o.indexOf(n);
                        -1 === t ? o.push(n, [s, r]) : o[t + 1].push(s, r)
                    } else
                        o.push(n, r)
                }
            }
        }
        function Oo(t, e, n) {
            return n && t.componentProviders++,
            t.multi.push(e) - 1
        }
        function Co(t, e, n, s) {
            for (let i = n; i < s; i++)
                if (e[i] === t)
                    return i;
            return -1
        }
        function ko(t, e, n, s) {
            return xo(this.multi, [])
        }
        function Eo(t, e, n, s) {
            const i = this.multi;
            let r;
            if (this.providerFactory) {
                const t = this.providerFactory.componentProviders
                  , e = Vn(n, n[1], this.providerFactory.index, s);
                r = e.slice(0, t),
                xo(i, r);
                for (let n = t; n < e.length; n++)
                    r.push(e[n])
            } else
                r = [],
                xo(i, r);
            return r
        }
        function xo(t, e) {
            for (let n = 0; n < t.length; n++)
                e.push((0,
                t[n])());
            return e
        }
        function Do(t, e=[]) {
            return n=>{
                n.providersResolver = (n,s)=>function(t, e, n) {
                    const s = xe();
                    if (s.firstCreatePass) {
                        const i = ie(t);
                        Ao(n, s.data, s.blueprint, i, !0),
                        Ao(e, s.data, s.blueprint, i, !1)
                    }
                }(n, s ? s(t) : t, e)
            }
        }
        class Vo {
        }
        class Fo {
            resolveComponentFactory(t) {
                throw function(t) {
                    const e = Error(`No component factory found for ${tt(t)}. Did you add it to @NgModule.entryComponents?`);
                    return e.ngComponent = t,
                    e
                }(t)
            }
        }
        let To = (()=>{
            class t {
            }
            return t.NULL = new Fo,
            t
        }
        )();
        function Po(...t) {}
        function Io(t, e) {
            return new No(_e(t, e))
        }
        const Ro = function() {
            return Io(De(), Ee())
        };
        let No = (()=>{
            class t {
                constructor(t) {
                    this.nativeElement = t
                }
            }
            return t.__NG_ELEMENT_ID__ = Ro,
            t
        }
        )();
        function Wo(t) {
            return t instanceof No ? t.nativeElement : t
        }
        class Mo {
        }
        let Lo = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = ()=>jo(),
            t
        }
        )();
        const jo = function() {
            const t = Ee()
              , e = ve(De().index, t);
            return function(t) {
                return t[11]
            }(Jt(e) ? e : t)
        };
        let Bo = (()=>{
            class t {
            }
            return t.\u0275prov = ht({
                token: t,
                providedIn: "root",
                factory: ()=>null
            }),
            t
        }
        )();
        class Ho {
            constructor(t) {
                this.full = t,
                this.major = t.split(".")[0],
                this.minor = t.split(".")[1],
                this.patch = t.split(".").slice(2).join(".")
            }
        }
        const $o = new Ho("12.0.5");
        class Uo {
            constructor() {}
            supports(t) {
                return yr(t)
            }
            create(t) {
                return new qo(t)
            }
        }
        const zo = (t,e)=>e;
        class qo {
            constructor(t) {
                this.length = 0,
                this._linkedRecords = null,
                this._unlinkedRecords = null,
                this._previousItHead = null,
                this._itHead = null,
                this._itTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._movesHead = null,
                this._movesTail = null,
                this._removalsHead = null,
                this._removalsTail = null,
                this._identityChangesHead = null,
                this._identityChangesTail = null,
                this._trackByFn = t || zo
            }
            forEachItem(t) {
                let e;
                for (e = this._itHead; null !== e; e = e._next)
                    t(e)
            }
            forEachOperation(t) {
                let e = this._itHead
                  , n = this._removalsHead
                  , s = 0
                  , i = null;
                for (; e || n; ) {
                    const r = !n || e && e.currentIndex < Zo(n, s, i) ? e : n
                      , o = Zo(r, s, i)
                      , a = r.currentIndex;
                    if (r === n)
                        s--,
                        n = n._nextRemoved;
                    else if (e = e._next,
                    null == r.previousIndex)
                        s++;
                    else {
                        i || (i = []);
                        const t = o - s
                          , e = a - s;
                        if (t != e) {
                            for (let n = 0; n < t; n++) {
                                const s = n < i.length ? i[n] : i[n] = 0
                                  , r = s + n;
                                e <= r && r < t && (i[n] = s + 1)
                            }
                            i[r.previousIndex] = e - t
                        }
                    }
                    o !== a && t(r, o, a)
                }
            }
            forEachPreviousItem(t) {
                let e;
                for (e = this._previousItHead; null !== e; e = e._nextPrevious)
                    t(e)
            }
            forEachAddedItem(t) {
                let e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                    t(e)
            }
            forEachMovedItem(t) {
                let e;
                for (e = this._movesHead; null !== e; e = e._nextMoved)
                    t(e)
            }
            forEachRemovedItem(t) {
                let e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                    t(e)
            }
            forEachIdentityChange(t) {
                let e;
                for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange)
                    t(e)
            }
            diff(t) {
                if (null == t && (t = []),
                !yr(t))
                    throw new Error(`Error trying to diff '${tt(t)}'. Only arrays and iterables are allowed`);
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let e, n, s, i = this._itHead, r = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (let e = 0; e < this.length; e++)
                        n = t[e],
                        s = this._trackByFn(e, n),
                        null !== i && Object.is(i.trackById, s) ? (r && (i = this._verifyReinsertion(i, n, s, e)),
                        Object.is(i.item, n) || this._addIdentityChange(i, n)) : (i = this._mismatch(i, n, s, e),
                        r = !0),
                        i = i._next
                } else
                    e = 0,
                    function(t, e) {
                        if (Array.isArray(t))
                            for (let n = 0; n < t.length; n++)
                                e(t[n]);
                        else {
                            const n = t[gr()]();
                            let s;
                            for (; !(s = n.next()).done; )
                                e(s.value)
                        }
                    }(t, t=>{
                        s = this._trackByFn(e, t),
                        null !== i && Object.is(i.trackById, s) ? (r && (i = this._verifyReinsertion(i, t, s, e)),
                        Object.is(i.item, t) || this._addIdentityChange(i, t)) : (i = this._mismatch(i, t, s, e),
                        r = !0),
                        i = i._next,
                        e++
                    }
                    ),
                    this.length = e;
                return this._truncate(i),
                this.collection = t,
                this.isDirty
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                        t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null,
                    t = this._movesHead; null !== t; t = t._nextMoved)
                        t.previousIndex = t.currentIndex;
                    this._movesHead = this._movesTail = null,
                    this._removalsHead = this._removalsTail = null,
                    this._identityChangesHead = this._identityChangesTail = null
                }
            }
            _mismatch(t, e, n, s) {
                let i;
                return null === t ? i = this._itTail : (i = t._prev,
                this._remove(t)),
                null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, i, s)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, s)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, i, s)) : t = this._addAfter(new Xo(e,n), i, s),
                t
            }
            _verifyReinsertion(t, e, n, s) {
                let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== i ? t = this._reinsertAfter(i, t._prev, s) : t.currentIndex != s && (t.currentIndex = s,
                this._addToMoves(t, s)),
                t
            }
            _truncate(t) {
                for (; null !== t; ) {
                    const e = t._next;
                    this._addToRemovals(this._unlink(t)),
                    t = e
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
            _reinsertAfter(t, e, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                const s = t._prevRemoved
                  , i = t._nextRemoved;
                return null === s ? this._removalsHead = i : s._nextRemoved = i,
                null === i ? this._removalsTail = s : i._prevRemoved = s,
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
            }
            _moveAfter(t, e, n) {
                return this._unlink(t),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
            }
            _addAfter(t, e, n) {
                return this._insertAfter(t, e, n),
                this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t,
                t
            }
            _insertAfter(t, e, n) {
                const s = null === e ? this._itHead : e._next;
                return t._next = s,
                t._prev = e,
                null === s ? this._itTail = t : s._prev = t,
                null === e ? this._itHead = t : e._next = t,
                null === this._linkedRecords && (this._linkedRecords = new Ko),
                this._linkedRecords.put(t),
                t.currentIndex = n,
                t
            }
            _remove(t) {
                return this._addToRemovals(this._unlink(t))
            }
            _unlink(t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                const e = t._prev
                  , n = t._next;
                return null === e ? this._itHead = n : e._next = n,
                null === n ? this._itTail = e : n._prev = e,
                t
            }
            _addToMoves(t, e) {
                return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t),
                t
            }
            _addToRemovals(t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new Ko),
                this._unlinkedRecords.put(t),
                t.currentIndex = null,
                t._nextRemoved = null,
                null === this._removalsTail ? (this._removalsTail = this._removalsHead = t,
                t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
                this._removalsTail = this._removalsTail._nextRemoved = t),
                t
            }
            _addIdentityChange(t, e) {
                return t.item = e,
                this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t,
                t
            }
        }
        class Xo {
            constructor(t, e) {
                this.item = t,
                this.trackById = e,
                this.currentIndex = null,
                this.previousIndex = null,
                this._nextPrevious = null,
                this._prev = null,
                this._next = null,
                this._prevDup = null,
                this._nextDup = null,
                this._prevRemoved = null,
                this._nextRemoved = null,
                this._nextAdded = null,
                this._nextMoved = null,
                this._nextIdentityChange = null
            }
        }
        class Qo {
            constructor() {
                this._head = null,
                this._tail = null
            }
            add(t) {
                null === this._head ? (this._head = this._tail = t,
                t._nextDup = null,
                t._prevDup = null) : (this._tail._nextDup = t,
                t._prevDup = this._tail,
                t._nextDup = null,
                this._tail = t)
            }
            get(t, e) {
                let n;
                for (n = this._head; null !== n; n = n._nextDup)
                    if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t))
                        return n;
                return null
            }
            remove(t) {
                const e = t._prevDup
                  , n = t._nextDup;
                return null === e ? this._head = n : e._nextDup = n,
                null === n ? this._tail = e : n._prevDup = e,
                null === this._head
            }
        }
        class Ko {
            constructor() {
                this.map = new Map
            }
            put(t) {
                const e = t.trackById;
                let n = this.map.get(e);
                n || (n = new Qo,
                this.map.set(e, n)),
                n.add(t)
            }
            get(t, e) {
                const n = this.map.get(t);
                return n ? n.get(t, e) : null
            }
            remove(t) {
                const e = t.trackById;
                return this.map.get(e).remove(t) && this.map.delete(e),
                t
            }
            get isEmpty() {
                return 0 === this.map.size
            }
            clear() {
                this.map.clear()
            }
        }
        function Zo(t, e, n) {
            const s = t.previousIndex;
            if (null === s)
                return s;
            let i = 0;
            return n && s < n.length && (i = n[s]),
            s + e + i
        }
        class Go {
            constructor() {}
            supports(t) {
                return t instanceof Map || vr(t)
            }
            create() {
                return new Yo
            }
        }
        class Yo {
            constructor() {
                this._records = new Map,
                this._mapHead = null,
                this._appendAfter = null,
                this._previousMapHead = null,
                this._changesHead = null,
                this._changesTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._removalsHead = null,
                this._removalsTail = null
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
            forEachItem(t) {
                let e;
                for (e = this._mapHead; null !== e; e = e._next)
                    t(e)
            }
            forEachPreviousItem(t) {
                let e;
                for (e = this._previousMapHead; null !== e; e = e._nextPrevious)
                    t(e)
            }
            forEachChangedItem(t) {
                let e;
                for (e = this._changesHead; null !== e; e = e._nextChanged)
                    t(e)
            }
            forEachAddedItem(t) {
                let e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                    t(e)
            }
            forEachRemovedItem(t) {
                let e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                    t(e)
            }
            diff(t) {
                if (t) {
                    if (!(t instanceof Map || vr(t)))
                        throw new Error(`Error trying to diff '${tt(t)}'. Only maps and objects are allowed`)
                } else
                    t = new Map;
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let e = this._mapHead;
                if (this._appendAfter = null,
                this._forEach(t, (t,n)=>{
                    if (e && e.key === n)
                        this._maybeAddToChanges(e, t),
                        this._appendAfter = e,
                        e = e._next;
                    else {
                        const s = this._getOrCreateRecordForKey(n, t);
                        e = this._insertBeforeOrAppend(e, s)
                    }
                }
                ),
                e) {
                    e._prev && (e._prev._next = null),
                    this._removalsHead = e;
                    for (let t = e; null !== t; t = t._nextRemoved)
                        t === this._mapHead && (this._mapHead = null),
                        this._records.delete(t.key),
                        t._nextRemoved = t._next,
                        t.previousValue = t.currentValue,
                        t.currentValue = null,
                        t._prev = null,
                        t._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
            }
            _insertBeforeOrAppend(t, e) {
                if (t) {
                    const n = t._prev;
                    return e._next = t,
                    e._prev = n,
                    t._prev = e,
                    n && (n._next = e),
                    t === this._mapHead && (this._mapHead = e),
                    this._appendAfter = t,
                    t
                }
                return this._appendAfter ? (this._appendAfter._next = e,
                e._prev = this._appendAfter) : this._mapHead = e,
                this._appendAfter = e,
                null
            }
            _getOrCreateRecordForKey(t, e) {
                if (this._records.has(t)) {
                    const n = this._records.get(t);
                    this._maybeAddToChanges(n, e);
                    const s = n._prev
                      , i = n._next;
                    return s && (s._next = i),
                    i && (i._prev = s),
                    n._next = null,
                    n._prev = null,
                    n
                }
                const n = new Jo(t);
                return this._records.set(t, n),
                n.currentValue = e,
                this._addToAdditions(n),
                n
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (this._previousMapHead = this._mapHead,
                    t = this._previousMapHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                        t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded)
                        t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null,
                    this._additionsHead = this._additionsTail = null,
                    this._removalsHead = null
                }
            }
            _maybeAddToChanges(t, e) {
                Object.is(e, t.currentValue) || (t.previousValue = t.currentValue,
                t.currentValue = e,
                this._addToChanges(t))
            }
            _addToAdditions(t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t,
                this._additionsTail = t)
            }
            _addToChanges(t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t,
                this._changesTail = t)
            }
            _forEach(t, e) {
                t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n=>e(t[n], n))
            }
        }
        class Jo {
            constructor(t) {
                this.key = t,
                this.previousValue = null,
                this.currentValue = null,
                this._nextPrevious = null,
                this._next = null,
                this._prev = null,
                this._nextAdded = null,
                this._nextRemoved = null,
                this._nextChanged = null
            }
        }
        function ta() {
            return new ea([new Uo])
        }
        let ea = (()=>{
            class t {
                constructor(t) {
                    this.factories = t
                }
                static create(e, n) {
                    if (null != n) {
                        const t = n.factories.slice();
                        e = e.concat(t)
                    }
                    return new t(e)
                }
                static extend(e) {
                    return {
                        provide: t,
                        useFactory: n=>t.create(e, n || ta()),
                        deps: [[t, new rs, new is]]
                    }
                }
                find(t) {
                    const e = this.factories.find(e=>e.supports(t));
                    if (null != e)
                        return e;
                    throw new Error(`Cannot find a differ supporting object '${t}' of type '${n = t,
                    n.name || typeof n}'`);
                    var n
                }
            }
            return t.\u0275prov = ht({
                token: t,
                providedIn: "root",
                factory: ta
            }),
            t
        }
        )();
        function na() {
            return new sa([new Go])
        }
        let sa = (()=>{
            class t {
                constructor(t) {
                    this.factories = t
                }
                static create(e, n) {
                    if (n) {
                        const t = n.factories.slice();
                        e = e.concat(t)
                    }
                    return new t(e)
                }
                static extend(e) {
                    return {
                        provide: t,
                        useFactory: n=>t.create(e, n || na()),
                        deps: [[t, new rs, new is]]
                    }
                }
                find(t) {
                    const e = this.factories.find(e=>e.supports(t));
                    if (e)
                        return e;
                    throw new Error(`Cannot find a differ supporting object '${t}'`)
                }
            }
            return t.\u0275prov = ht({
                token: t,
                providedIn: "root",
                factory: na
            }),
            t
        }
        )();
        function ia(t, e, n, s, i=!1) {
            for (; null !== n; ) {
                const r = e[n.index];
                if (null !== r && s.push(fe(r)),
                te(r))
                    for (let t = Yt; t < r.length; t++) {
                        const e = r[t]
                          , n = e[1].firstChild;
                        null !== n && ia(e[1], e, n, s)
                    }
                const o = n.type;
                if (8 & o)
                    ia(t, e, n.child, s);
                else if (32 & o) {
                    const t = gs(n, e);
                    let i;
                    for (; i = t(); )
                        s.push(i)
                } else if (16 & o) {
                    const t = Ps(e, n);
                    if (Array.isArray(t))
                        s.push(...t);
                    else {
                        const n = _s(e[16]);
                        ia(n[1], n, t, s, !0)
                    }
                }
                n = i ? n.projectionNext : n.next
            }
            return s
        }
        class ra {
            constructor(t, e) {
                this._lView = t,
                this._cdRefInjectingView = e,
                this._appRef = null,
                this._attachedToViewContainer = !1
            }
            get rootNodes() {
                const t = this._lView
                  , e = t[1];
                return ia(e, t, e.firstChild, [])
            }
            get context() {
                return this._lView[8]
            }
            set context(t) {
                this._lView[8] = t
            }
            get destroyed() {
                return 256 == (256 & this._lView[2])
            }
            destroy() {
                if (this._appRef)
                    this._appRef.detachView(this);
                else if (this._attachedToViewContainer) {
                    const t = this._lView[3];
                    if (te(t)) {
                        const e = t[8]
                          , n = e ? e.indexOf(this) : -1;
                        n > -1 && (Os(t, n),
                        Hn(e, n))
                    }
                    this._attachedToViewContainer = !1
                }
                Cs(this._lView[1], this._lView)
            }
            onDestroy(t) {
                yi(this._lView[1], this._lView, null, t)
            }
            markForCheck() {
                Ni(this._cdRefInjectingView || this._lView)
            }
            detach() {
                this._lView[2] &= -129
            }
            reattach() {
                this._lView[2] |= 128
            }
            detectChanges() {
                Wi(this._lView[1], this._lView, this.context)
            }
            checkNoChanges() {
                !function(t, e, n) {
                    Ie(!0);
                    try {
                        Wi(t, e, n)
                    } finally {
                        Ie(!1)
                    }
                }(this._lView[1], this._lView, this.context)
            }
            attachToViewContainerRef() {
                if (this._appRef)
                    throw new Error("This view is already attached directly to the ApplicationRef!");
                this._attachedToViewContainer = !0
            }
            detachFromAppRef() {
                var t;
                this._appRef = null,
                Ns(this._lView[1], t = this._lView, t[11], 2, null, null)
            }
            attachToAppRef(t) {
                if (this._attachedToViewContainer)
                    throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = t
            }
        }
        class oa extends ra {
            constructor(t) {
                super(t),
                this._view = t
            }
            detectChanges() {
                Mi(this._view)
            }
            checkNoChanges() {
                !function(t) {
                    Ie(!0);
                    try {
                        Mi(t)
                    } finally {
                        Ie(!1)
                    }
                }(this._view)
            }
            get context() {
                return null
            }
        }
        const aa = [new Go]
          , la = new ea([new Uo])
          , ca = new sa(aa)
          , ha = function() {
            return ma(De(), Ee())
        };
        let ua = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = ha,
            t
        }
        )();
        const da = ua
          , pa = class extends da {
            constructor(t, e, n) {
                super(),
                this._declarationLView = t,
                this._declarationTContainer = e,
                this.elementRef = n
            }
            createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews
                  , n = ai(this._declarationLView, e, t, 16, null, e.declTNode, null, null, null, null);
                n[17] = this._declarationLView[this._declarationTContainer.index];
                const s = this._declarationLView[19];
                return null !== s && (n[19] = s.createEmbeddedView(e)),
                hi(e, n, t),
                new ra(n)
            }
        }
        ;
        function ma(t, e) {
            return 4 & t.type ? new pa(e,t,Io(t, e)) : null
        }
        class fa {
        }
        const ga = function() {
            return Aa(De(), Ee())
        };
        let _a = (()=>{
            class t {
            }
            return t.__NG_ELEMENT_ID__ = ga,
            t
        }
        )();
        const ya = _a
          , va = class extends ya {
            constructor(t, e, n) {
                super(),
                this._lContainer = t,
                this._hostTNode = e,
                this._hostLView = n
            }
            get element() {
                return Io(this._hostTNode, this._hostLView)
            }
            get injector() {
                return new Pn(this._hostTNode,this._hostLView)
            }
            get parentInjector() {
                const t = wn(this._hostTNode, this._hostLView);
                if (dn(t)) {
                    const e = mn(t, this._hostLView)
                      , n = pn(t);
                    return new Pn(e[1].data[n + 8],e)
                }
                return new Pn(null,this._hostLView)
            }
            clear() {
                for (; this.length > 0; )
                    this.remove(this.length - 1)
            }
            get(t) {
                const e = ba(this._lContainer);
                return null !== e && e[t] || null
            }
            get length() {
                return this._lContainer.length - Yt
            }
            createEmbeddedView(t, e, n) {
                const s = t.createEmbeddedView(e || {});
                return this.insert(s, n),
                s
            }
            createComponent(t, e, n, s, i) {
                const r = n || this.parentInjector;
                if (!i && null == t.ngModule && r) {
                    const t = r.get(fa, null);
                    t && (i = t)
                }
                const o = t.create(r, s, void 0, i);
                return this.insert(o.hostView, e),
                o
            }
            insert(t, e) {
                const n = t._lView
                  , s = n[1];
                if (te(n[3])) {
                    const e = this.indexOf(t);
                    if (-1 !== e)
                        this.detach(e);
                    else {
                        const e = n[3]
                          , s = new va(e,e[6],e[3]);
                        s.detach(s.indexOf(t))
                    }
                }
                const i = this._adjustIndex(e)
                  , r = this._lContainer;
                !function(t, e, n, s) {
                    const i = Yt + s
                      , r = n.length;
                    s > 0 && (n[i - 1][4] = e),
                    s < r - Yt ? (e[4] = n[i],
                    Bn(n, Yt + s, e)) : (n.push(e),
                    e[4] = null),
                    e[3] = n;
                    const o = e[17];
                    null !== o && n !== o && function(t, e) {
                        const n = t[9];
                        e[16] !== e[3][3][16] && (t[2] = !0),
                        null === n ? t[9] = [e] : n.push(e)
                    }(o, e);
                    const a = e[19];
                    null !== a && a.insertView(t),
                    e[2] |= 128
                }(s, n, r, i);
                const o = Is(i, r)
                  , a = n[11]
                  , l = Vs(a, r[7]);
                return null !== l && function(t, e, n, s, i, r) {
                    s[0] = i,
                    s[6] = e,
                    Ns(t, s, n, 1, i, r)
                }(s, r[6], a, n, l, o),
                t.attachToViewContainerRef(),
                Bn(wa(r), i, t),
                t
            }
            move(t, e) {
                return this.insert(t, e)
            }
            indexOf(t) {
                const e = ba(this._lContainer);
                return null !== e ? e.indexOf(t) : -1
            }
            remove(t) {
                const e = this._adjustIndex(t, -1)
                  , n = Os(this._lContainer, e);
                n && (Hn(wa(this._lContainer), e),
                Cs(n[1], n))
            }
            detach(t) {
                const e = this._adjustIndex(t, -1)
                  , n = Os(this._lContainer, e);
                return n && null != Hn(wa(this._lContainer), e) ? new ra(n) : null
            }
            _adjustIndex(t, e=0) {
                return null == t ? this.length + e : t
            }
        }
        ;
        function ba(t) {
            return t[8]
        }
        function wa(t) {
            return t[8] || (t[8] = [])
        }
        function Aa(t, e) {
            let n;
            const s = e[t.index];
            if (te(s))
                n = s;
            else {
                let i;
                if (8 & t.type)
                    i = fe(s);
                else {
                    const n = e[11];
                    i = n.createComment("");
                    const s = _e(t, e);
                    Es(n, Vs(n, s), i, function(t, e) {
                        return pe(t) ? t.nextSibling(e) : e.nextSibling
                    }(n, s), !1)
                }
                e[t.index] = n = Fi(s, e, i, t),
                Ri(e, n)
            }
            return new va(n,t,e)
        }
        const Sa = {};
        class Oa extends To {
            constructor(t) {
                super(),
                this.ngModule = t
            }
            resolveComponentFactory(t) {
                const e = Kt(t);
                return new Ea(e,this.ngModule)
            }
        }
        function Ca(t) {
            const e = [];
            for (let n in t)
                t.hasOwnProperty(n) && e.push({
                    propName: t[n],
                    templateName: n
                });
            return e
        }
        const ka = new Mn("SCHEDULER_TOKEN",{
            providedIn: "root",
            factory: ()=>ps
        });
        class Ea extends Vo {
            constructor(t, e) {
                super(),
                this.componentDef = t,
                this.ngModule = e,
                this.componentType = t.type,
                this.selector = t.selectors.map(Zs).join(","),
                this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [],
                this.isBoundToModule = !!e
            }
            get inputs() {
                return Ca(this.componentDef.inputs)
            }
            get outputs() {
                return Ca(this.componentDef.outputs)
            }
            create(t, e, n, s) {
                const i = (s = s || this.ngModule) ? function(t, e) {
                    return {
                        get: (n,s,i)=>{
                            const r = t.get(n, Sa, i);
                            return r !== Sa || s === Sa ? r : e.get(n, s, i)
                        }
                    }
                }(t, s.injector) : t
                  , r = i.get(Mo, me)
                  , o = i.get(Bo, null)
                  , a = r.createRenderer(null, this.componentDef)
                  , l = this.componentDef.selectors[0][0] || "div"
                  , c = n ? function(t, e, n) {
                    if (pe(t))
                        return t.selectRootElement(e, n === Ct.ShadowDom);
                    let s = "string" == typeof e ? t.querySelector(e) : e;
                    return s.textContent = "",
                    s
                }(a, n, this.componentDef.encapsulation) : As(r.createRenderer(null, this.componentDef), l, function(t) {
                    const e = t.toLowerCase();
                    return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
                }(l))
                  , h = this.componentDef.onPush ? 576 : 528
                  , u = {
                    components: [],
                    scheduler: ps,
                    clean: ji,
                    playerHandler: null,
                    flags: 0
                }
                  , d = _i(0, null, null, 1, 0, null, null, null, null, null)
                  , p = ai(null, d, u, h, null, null, r, a, o, i);
                let m, f;
                Ue(p);
                try {
                    const t = function(t, e, n, s, i, r) {
                        const o = n[1];
                        n[20] = t;
                        const a = li(o, 20, 2, "#host", null)
                          , l = a.mergedAttrs = e.hostAttrs;
                        null !== l && (qi(a, l, !0),
                        null !== t && (ln(i, t, l),
                        null !== a.classes && Ls(i, t, a.classes),
                        null !== a.styles && Ms(i, t, a.styles)));
                        const c = s.createRenderer(t, e)
                          , h = ai(n, gi(e), null, e.onPush ? 64 : 16, n[20], a, s, c, null, null);
                        return o.firstCreatePass && (An(yn(a, n), o, e.type),
                        Oi(o, a),
                        ki(a, n.length, 1)),
                        Ri(n, h),
                        n[20] = h
                    }(c, this.componentDef, p, r, a);
                    if (c)
                        if (n)
                            ln(a, c, ["ng-version", $o.full]);
                        else {
                            const {attrs: t, classes: e} = function(t) {
                                const e = []
                                  , n = [];
                                let s = 1
                                  , i = 2;
                                for (; s < t.length; ) {
                                    let r = t[s];
                                    if ("string" == typeof r)
                                        2 === i ? "" !== r && e.push(r, t[++s]) : 8 === i && n.push(r);
                                    else {
                                        if (!qs(i))
                                            break;
                                        i = r
                                    }
                                    s++
                                }
                                return {
                                    attrs: e,
                                    classes: n
                                }
                            }(this.componentDef.selectors[0]);
                            t && ln(a, c, t),
                            e && e.length > 0 && Ls(a, c, e.join(" "))
                        }
                    if (f = ye(d, Gt),
                    void 0 !== e) {
                        const t = f.projection = [];
                        for (let n = 0; n < this.ngContentSelectors.length; n++) {
                            const s = e[n];
                            t.push(null != s ? Array.from(s) : null)
                        }
                    }
                    m = function(t, e, n, s, i) {
                        const r = n[1]
                          , o = function(t, e, n) {
                            const s = De();
                            t.firstCreatePass && (n.providersResolver && n.providersResolver(n),
                            Ei(t, s, e, ci(t, e, 1, null), n));
                            const i = Vn(e, t, s.directiveStart, s);
                            as(i, e);
                            const r = _e(s, e);
                            return r && as(r, e),
                            i
                        }(r, n, e);
                        if (s.components.push(o),
                        t[8] = o,
                        i && i.forEach(t=>t(o, e)),
                        e.contentQueries) {
                            const t = De();
                            e.contentQueries(1, o, t.directiveStart)
                        }
                        const a = De();
                        return !r.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (Ge(a.index),
                        Ai(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                        Si(e, o)),
                        o
                    }(t, this.componentDef, p, u, [cr]),
                    hi(d, p, null)
                } finally {
                    Ke()
                }
                return new xa(this.componentType,m,Io(f, p),p,f)
            }
        }
        class xa extends class {
        }
        {
            constructor(t, e, n, s, i) {
                super(),
                this.location = n,
                this._rootLView = s,
                this._tNode = i,
                this.instance = e,
                this.hostView = this.changeDetectorRef = new oa(s),
                this.componentType = t
            }
            get injector() {
                return new Pn(this._tNode,this._rootLView)
            }
            destroy() {
                this.hostView.destroy()
            }
            onDestroy(t) {
                this.hostView.onDestroy(t)
            }
        }
        const Da = new Map;
        class Va extends fa {
            constructor(t, e) {
                super(),
                this._parent = e,
                this._bootstrapComponents = [],
                this.injector = this,
                this.destroyCbs = [],
                this.componentFactoryResolver = new Oa(this);
                const n = Zt(t)
                  , s = t[Wt] || null;
                s && wo(s),
                this._bootstrapComponents = ms(n.bootstrap),
                this._r3Injector = tr(t, e, [{
                    provide: fa,
                    useValue: this
                }, {
                    provide: To,
                    useValue: this.componentFactoryResolver
                }], tt(t)),
                this._r3Injector._resolveInjectorDefTypes(),
                this.instance = this.get(t)
            }
            get(t, e=lr.THROW_IF_NOT_FOUND, n=vt.Default) {
                return t === lr || t === fa || t === Xi ? this : this._r3Injector.get(t, e, n)
            }
            destroy() {
                const t = this._r3Injector;
                !t.destroyed && t.destroy(),
                this.destroyCbs.forEach(t=>t()),
                this.destroyCbs = null
            }
            onDestroy(t) {
                this.destroyCbs.push(t)
            }
        }
        class Fa extends class {
        }
        {
            constructor(t) {
                super(),
                this.moduleType = t,
                null !== Zt(t) && function(t) {
                    const e = new Set;
                    !function t(n) {
                        const s = Zt(n, !0)
                          , i = s.id;
                        null !== i && (function(t, e, n) {
                            if (e && e !== n)
                                throw new Error(`Duplicate module registered for ${t} - ${tt(e)} vs ${tt(e.name)}`)
                        }(i, Da.get(i), n),
                        Da.set(i, n));
                        const r = ms(s.imports);
                        for (const o of r)
                            e.has(o) || (e.add(o),
                            t(o))
                    }(t)
                }(t)
            }
            create(t) {
                return new Va(this.moduleType,t)
            }
        }
        function Ta(t, e) {
            const n = xe();
            let s;
            const i = t + Gt;
            n.firstCreatePass ? (s = function(t, e) {
                if (e)
                    for (let n = e.length - 1; n >= 0; n--) {
                        const s = e[n];
                        if (t === s.name)
                            return s
                    }
                throw new ot("302",`The pipe '${t}' could not be found!`)
            }(e, n.pipeRegistry),
            n.data[i] = s,
            s.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(i, s.onDestroy)) : s = n.data[i];
            const r = s.factory || (s.factory = re(s.type))
              , o = wt(Or);
            try {
                const t = gn(!1)
                  , e = r();
                return gn(t),
                function(t, e, n, s) {
                    n >= t.data.length && (t.data[n] = null,
                    t.blueprint[n] = null),
                    e[n] = s
                }(n, Ee(), i, e),
                e
            } finally {
                wt(o)
            }
        }
        function Pa(t, e, n, s) {
            const i = t + Gt
              , r = Ee()
              , o = function(t, e) {
                return t[e]
            }(r, i);
            return function(t, e) {
                return _r.isWrapped(e) && (e = _r.unwrap(e),
                t[Re()] = Gs),
                e
            }(r, function(t, e) {
                return t[1].data[e].pure
            }(r, i) ? function(t, e, n, s, i, r, o) {
                const a = e + n;
                return wr(t, a, i, r) ? function(t, e, n) {
                    return t[e] = n
                }(t, a + 2, o ? s.call(o, i, r) : s(i, r)) : function(t, e) {
                    const n = t[e];
                    return n === Gs ? void 0 : n
                }(t, a + 2)
            }(r, function() {
                const t = Ce.lFrame;
                let e = t.bindingRootIndex;
                return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex),
                e
            }(), e, o.transform, n, s, o) : o.transform(n, s))
        }
        function Ia(t) {
            return e=>{
                setTimeout(t, void 0, e)
            }
        }
        const Ra = class extends S {
            constructor(t=!1) {
                super(),
                this.__isAsync = t
            }
            emit(t) {
                super.next(t)
            }
            subscribe(t, e, n) {
                var s, i, r;
                let o = t
                  , a = e || (()=>null)
                  , l = n;
                if (t && "object" == typeof t) {
                    const e = t;
                    o = null === (s = e.next) || void 0 === s ? void 0 : s.bind(e),
                    a = null === (i = e.error) || void 0 === i ? void 0 : i.bind(e),
                    l = null === (r = e.complete) || void 0 === r ? void 0 : r.bind(e)
                }
                this.__isAsync && (a = Ia(a),
                o && (o = Ia(o)),
                l && (l = Ia(l)));
                const c = super.subscribe({
                    next: o,
                    error: a,
                    complete: l
                });
                return t instanceof u && t.add(c),
                c
            }
        }
        ;
        function Na() {
            return this._results[gr()]()
        }
        class Wa {
            constructor(t=!1) {
                this._emitDistinctChangesOnly = t,
                this.dirty = !0,
                this._results = [],
                this._changesDetected = !1,
                this._changes = null,
                this.length = 0,
                this.first = void 0,
                this.last = void 0;
                const e = gr()
                  , n = Wa.prototype;
                n[e] || (n[e] = Na)
            }
            get changes() {
                return this._changes || (this._changes = new Ra)
            }
            get(t) {
                return this._results[t]
            }
            map(t) {
                return this._results.map(t)
            }
            filter(t) {
                return this._results.filter(t)
            }
            find(t) {
                return this._results.find(t)
            }
            reduce(t, e) {
                return this._results.reduce(t, e)
            }
            forEach(t) {
                this._results.forEach(t)
            }
            some(t) {
                return this._results.some(t)
            }
            toArray() {
                return this._results.slice()
            }
            toString() {
                return this._results.toString()
            }
            reset(t, e) {
                const n = this;
                n.dirty = !1;
                const s = Ln(t);
                (this._changesDetected = !function(t, e, n) {
                    if (t.length !== e.length)
                        return !1;
                    for (let s = 0; s < t.length; s++) {
                        let i = t[s]
                          , r = e[s];
                        if (n && (i = n(i),
                        r = n(r)),
                        r !== i)
                            return !1
                    }
                    return !0
                }(n._results, s, e)) && (n._results = s,
                n.length = s.length,
                n.last = s[this.length - 1],
                n.first = s[0])
            }
            notifyOnChanges() {
                !this._changes || !this._changesDetected && this._emitDistinctChangesOnly || this._changes.emit(this)
            }
            setDirty() {
                this.dirty = !0
            }
            destroy() {
                this.changes.complete(),
                this.changes.unsubscribe()
            }
        }
        class Ma {
            constructor(t) {
                this.queryList = t,
                this.matches = null
            }
            clone() {
                return new Ma(this.queryList)
            }
            setDirty() {
                this.queryList.setDirty()
            }
        }
        class La {
            constructor(t=[]) {
                this.queries = t
            }
            createEmbeddedView(t) {
                const e = t.queries;
                if (null !== e) {
                    const n = null !== t.contentQueries ? t.contentQueries[0] : e.length
                      , s = [];
                    for (let t = 0; t < n; t++) {
                        const n = e.getByIndex(t);
                        s.push(this.queries[n.indexInDeclarationView].clone())
                    }
                    return new La(s)
                }
                return null
            }
            insertView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            detachView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            dirtyQueriesWithMatches(t) {
                for (let e = 0; e < this.queries.length; e++)
                    null !== Za(t, e).matches && this.queries[e].setDirty()
            }
        }
        class ja {
            constructor(t, e, n=null) {
                this.predicate = t,
                this.flags = e,
                this.read = n
            }
        }
        class Ba {
            constructor(t=[]) {
                this.queries = t
            }
            elementStart(t, e) {
                for (let n = 0; n < this.queries.length; n++)
                    this.queries[n].elementStart(t, e)
            }
            elementEnd(t) {
                for (let e = 0; e < this.queries.length; e++)
                    this.queries[e].elementEnd(t)
            }
            embeddedTView(t) {
                let e = null;
                for (let n = 0; n < this.length; n++) {
                    const s = null !== e ? e.length : 0
                      , i = this.getByIndex(n).embeddedTView(t, s);
                    i && (i.indexInDeclarationView = n,
                    null !== e ? e.push(i) : e = [i])
                }
                return null !== e ? new Ba(e) : null
            }
            template(t, e) {
                for (let n = 0; n < this.queries.length; n++)
                    this.queries[n].template(t, e)
            }
            getByIndex(t) {
                return this.queries[t]
            }
            get length() {
                return this.queries.length
            }
            track(t) {
                this.queries.push(t)
            }
        }
        class Ha {
            constructor(t, e=-1) {
                this.metadata = t,
                this.matches = null,
                this.indexInDeclarationView = -1,
                this.crossesNgTemplate = !1,
                this._appliesToNextNode = !0,
                this._declarationNodeIndex = e
            }
            elementStart(t, e) {
                this.isApplyingToNode(e) && this.matchTNode(t, e)
            }
            elementEnd(t) {
                this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
            }
            template(t, e) {
                this.elementStart(t, e)
            }
            embeddedTView(t, e) {
                return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
                this.addMatch(-t.index, e),
                new Ha(this.metadata)) : null
            }
            isApplyingToNode(t) {
                if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                    const e = this._declarationNodeIndex;
                    let n = t.parent;
                    for (; null !== n && 8 & n.type && n.index !== e; )
                        n = n.parent;
                    return e === (null !== n ? n.index : -1)
                }
                return this._appliesToNextNode
            }
            matchTNode(t, e) {
                const n = this.metadata.predicate;
                if (Array.isArray(n))
                    for (let s = 0; s < n.length; s++) {
                        const i = n[s];
                        this.matchTNodeWithReadOption(t, e, $a(e, i)),
                        this.matchTNodeWithReadOption(t, e, Dn(e, t, i, !1, !1))
                    }
                else
                    n === ua ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Dn(e, t, n, !1, !1))
            }
            matchTNodeWithReadOption(t, e, n) {
                if (null !== n) {
                    const s = this.metadata.read;
                    if (null !== s)
                        if (s === No || s === _a || s === ua && 4 & e.type)
                            this.addMatch(e.index, -2);
                        else {
                            const n = Dn(e, t, s, !1, !1);
                            null !== n && this.addMatch(e.index, n)
                        }
                    else
                        this.addMatch(e.index, n)
                }
            }
            addMatch(t, e) {
                null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
            }
        }
        function $a(t, e) {
            const n = t.localNames;
            if (null !== n)
                for (let s = 0; s < n.length; s += 2)
                    if (n[s] === e)
                        return n[s + 1];
            return null
        }
        function Ua(t, e, n, s) {
            return -1 === n ? function(t, e) {
                return 11 & t.type ? Io(t, e) : 4 & t.type ? ma(t, e) : null
            }(e, t) : -2 === n ? function(t, e, n) {
                return n === No ? Io(e, t) : n === ua ? ma(e, t) : n === _a ? Aa(e, t) : void 0
            }(t, e, s) : Vn(t, t[1], n, e)
        }
        function za(t, e, n, s) {
            const i = e[19].queries[s];
            if (null === i.matches) {
                const s = t.data
                  , r = n.matches
                  , o = [];
                for (let t = 0; t < r.length; t += 2) {
                    const i = r[t];
                    o.push(i < 0 ? null : Ua(e, s[i], r[t + 1], n.metadata.read))
                }
                i.matches = o
            }
            return i.matches
        }
        function qa(t, e, n, s) {
            const i = t.queries.getByIndex(n)
              , r = i.matches;
            if (null !== r) {
                const o = za(t, e, i, n);
                for (let t = 0; t < r.length; t += 2) {
                    const n = r[t];
                    if (n > 0)
                        s.push(o[t / 2]);
                    else {
                        const i = r[t + 1]
                          , o = e[-n];
                        for (let t = Yt; t < o.length; t++) {
                            const e = o[t];
                            e[17] === e[3] && qa(e[1], e, i, s)
                        }
                        if (null !== o[9]) {
                            const t = o[9];
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                qa(n[1], n, i, s)
                            }
                        }
                    }
                }
            }
            return s
        }
        function Xa(t) {
            const e = Ee()
              , n = xe()
              , s = je();
            Be(s + 1);
            const i = Za(n, s);
            if (t.dirty && be(e) === (2 == (2 & i.metadata.flags))) {
                if (null === i.matches)
                    t.reset([]);
                else {
                    const r = i.crossesNgTemplate ? qa(n, e, s, []) : za(n, e, i, s);
                    t.reset(r, Wo),
                    t.notifyOnChanges()
                }
                return !0
            }
            return !1
        }
        function Qa(t, e, n) {
            const s = xe();
            s.firstCreatePass && (function(t, e, n) {
                null === t.queries && (t.queries = new Ba),
                t.queries.track(new Ha(e,-1))
            }(s, new ja(t,e,n)),
            2 == (2 & e) && (s.staticViewQueries = !0)),
            function(t, e, n) {
                const s = new Wa(4 == (4 & n));
                yi(t, e, s, s.destroy),
                null === e[19] && (e[19] = new La),
                e[19].queries.push(new Ma(s))
            }(s, Ee(), e)
        }
        function Ka() {
            return t = Ee(),
            e = je(),
            t[19].queries[e].queryList;
            var t, e
        }
        function Za(t, e) {
            return t.queries.getByIndex(e)
        }
        const Ga = new Mn("Application Initializer");
        let Ya = (()=>{
            class t {
                constructor(t) {
                    this.appInits = t,
                    this.resolve = Po,
                    this.reject = Po,
                    this.initialized = !1,
                    this.done = !1,
                    this.donePromise = new Promise((t,e)=>{
                        this.resolve = t,
                        this.reject = e
                    }
                    )
                }
                runInitializers() {
                    if (this.initialized)
                        return;
                    const t = []
                      , e = ()=>{
                        this.done = !0,
                        this.resolve()
                    }
                    ;
                    if (this.appInits)
                        for (let n = 0; n < this.appInits.length; n++) {
                            const e = this.appInits[n]();
                            if (Vr(e))
                                t.push(e);
                            else if (Fr(e)) {
                                const n = new Promise((t,n)=>{
                                    e.subscribe({
                                        complete: t,
                                        error: n
                                    })
                                }
                                );
                                t.push(n)
                            }
                        }
                    Promise.all(t).then(()=>{
                        e()
                    }
                    ).catch(t=>{
                        this.reject(t)
                    }
                    ),
                    0 === t.length && e(),
                    this.initialized = !0
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Ga, 8))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Ja = new Mn("AppId")
          , tl = {
            provide: Ja,
            useFactory: function() {
                return `${el()}${el()}${el()}`
            },
            deps: []
        };
        function el() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const nl = new Mn("Platform Initializer")
          , sl = new Mn("Platform ID")
          , il = new Mn("appBootstrapListener");
        let rl = (()=>{
            class t {
                log(t) {
                    console.log(t)
                }
                warn(t) {
                    console.warn(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const ol = new Mn("LocaleId")
          , al = new Mn("DefaultCurrencyCode");
        class ll {
            constructor(t, e) {
                this.ngModuleFactory = t,
                this.componentFactories = e
            }
        }
        const cl = function(t) {
            return new Fa(t)
        }
          , hl = cl
          , ul = function(t) {
            return Promise.resolve(cl(t))
        }
          , dl = function(t) {
            const e = cl(t)
              , n = ms(Zt(t).declarations).reduce((t,e)=>{
                const n = Kt(e);
                return n && t.push(new Ea(n)),
                t
            }
            , []);
            return new ll(e,n)
        }
          , pl = dl
          , ml = function(t) {
            return Promise.resolve(dl(t))
        };
        let fl = (()=>{
            class t {
                constructor() {
                    this.compileModuleSync = hl,
                    this.compileModuleAsync = ul,
                    this.compileModuleAndAllComponentsSync = pl,
                    this.compileModuleAndAllComponentsAsync = ml
                }
                clearCache() {}
                clearCacheFor(t) {}
                getModuleId(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const gl = (()=>Promise.resolve(0))();
        function _l(t) {
            "undefined" == typeof Zone ? gl.then(()=>{
                t && t.apply(null, null)
            }
            ) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }
        class yl {
            constructor({enableLongStackTrace: t=!1, shouldCoalesceEventChangeDetection: e=!1, shouldCoalesceRunChangeDetection: n=!1}) {
                if (this.hasPendingMacrotasks = !1,
                this.hasPendingMicrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new Ra(!1),
                this.onMicrotaskEmpty = new Ra(!1),
                this.onStable = new Ra(!1),
                this.onError = new Ra(!1),
                "undefined" == typeof Zone)
                    throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched();
                const s = this;
                s._nesting = 0,
                s._outer = s._inner = Zone.current,
                Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)),
                t && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
                s.shouldCoalesceEventChangeDetection = !n && e,
                s.shouldCoalesceRunChangeDetection = n,
                s.lastRequestAnimationFrameId = -1,
                s.nativeRequestAnimationFrame = function() {
                    let t = Vt.requestAnimationFrame
                      , e = Vt.cancelAnimationFrame;
                    if ("undefined" != typeof Zone && t && e) {
                        const n = t[Zone.__symbol__("OriginalDelegate")];
                        n && (t = n);
                        const s = e[Zone.__symbol__("OriginalDelegate")];
                        s && (e = s)
                    }
                    return {
                        nativeRequestAnimationFrame: t,
                        nativeCancelAnimationFrame: e
                    }
                }().nativeRequestAnimationFrame,
                function(t) {
                    const e = ()=>{
                        !function(t) {
                            t.isCheckStableRunning || -1 !== t.lastRequestAnimationFrameId || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Vt, ()=>{
                                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", ()=>{
                                    t.lastRequestAnimationFrameId = -1,
                                    wl(t),
                                    t.isCheckStableRunning = !0,
                                    bl(t),
                                    t.isCheckStableRunning = !1
                                }
                                , void 0, ()=>{}
                                , ()=>{}
                                )),
                                t.fakeTopEventTask.invoke()
                            }
                            ),
                            wl(t))
                        }(t)
                    }
                    ;
                    t._inner = t._inner.fork({
                        name: "angular",
                        properties: {
                            isAngularZone: !0
                        },
                        onInvokeTask: (n,s,i,r,o,a)=>{
                            try {
                                return Al(t),
                                n.invokeTask(i, r, o, a)
                            } finally {
                                (t.shouldCoalesceEventChangeDetection && "eventTask" === r.type || t.shouldCoalesceRunChangeDetection) && e(),
                                Sl(t)
                            }
                        }
                        ,
                        onInvoke: (n,s,i,r,o,a,l)=>{
                            try {
                                return Al(t),
                                n.invoke(i, r, o, a, l)
                            } finally {
                                t.shouldCoalesceRunChangeDetection && e(),
                                Sl(t)
                            }
                        }
                        ,
                        onHasTask: (e,n,s,i)=>{
                            e.hasTask(s, i),
                            n === s && ("microTask" == i.change ? (t._hasPendingMicrotasks = i.microTask,
                            wl(t),
                            bl(t)) : "macroTask" == i.change && (t.hasPendingMacrotasks = i.macroTask))
                        }
                        ,
                        onHandleError: (e,n,s,i)=>(e.handleError(s, i),
                        t.runOutsideAngular(()=>t.onError.emit(i)),
                        !1)
                    })
                }(s)
            }
            static isInAngularZone() {
                return !0 === Zone.current.get("isAngularZone")
            }
            static assertInAngularZone() {
                if (!yl.isInAngularZone())
                    throw new Error("Expected to be in Angular Zone, but it is not!")
            }
            static assertNotInAngularZone() {
                if (yl.isInAngularZone())
                    throw new Error("Expected to not be in Angular Zone, but it is!")
            }
            run(t, e, n) {
                return this._inner.run(t, e, n)
            }
            runTask(t, e, n, s) {
                const i = this._inner
                  , r = i.scheduleEventTask("NgZoneEvent: " + s, t, vl, Po, Po);
                try {
                    return i.runTask(r, e, n)
                } finally {
                    i.cancelTask(r)
                }
            }
            runGuarded(t, e, n) {
                return this._inner.runGuarded(t, e, n)
            }
            runOutsideAngular(t) {
                return this._outer.run(t)
            }
        }
        const vl = {};
        function bl(t) {
            if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
                try {
                    t._nesting++,
                    t.onMicrotaskEmpty.emit(null)
                } finally {
                    if (t._nesting--,
                    !t.hasPendingMicrotasks)
                        try {
                            t.runOutsideAngular(()=>t.onStable.emit(null))
                        } finally {
                            t.isStable = !0
                        }
                }
        }
        function wl(t) {
            t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId)
        }
        function Al(t) {
            t._nesting++,
            t.isStable && (t.isStable = !1,
            t.onUnstable.emit(null))
        }
        function Sl(t) {
            t._nesting--,
            bl(t)
        }
        class Ol {
            constructor() {
                this.hasPendingMicrotasks = !1,
                this.hasPendingMacrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new Ra,
                this.onMicrotaskEmpty = new Ra,
                this.onStable = new Ra,
                this.onError = new Ra
            }
            run(t, e, n) {
                return t.apply(e, n)
            }
            runGuarded(t, e, n) {
                return t.apply(e, n)
            }
            runOutsideAngular(t) {
                return t()
            }
            runTask(t, e, n, s) {
                return t.apply(e, n)
            }
        }
        let Cl = (()=>{
            class t {
                constructor(t) {
                    this._ngZone = t,
                    this._pendingCount = 0,
                    this._isZoneStable = !0,
                    this._didWork = !1,
                    this._callbacks = [],
                    this.taskTrackingZone = null,
                    this._watchAngularEvents(),
                    t.run(()=>{
                        this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                    }
                    )
                }
                _watchAngularEvents() {
                    this._ngZone.onUnstable.subscribe({
                        next: ()=>{
                            this._didWork = !0,
                            this._isZoneStable = !1
                        }
                    }),
                    this._ngZone.runOutsideAngular(()=>{
                        this._ngZone.onStable.subscribe({
                            next: ()=>{
                                yl.assertNotInAngularZone(),
                                _l(()=>{
                                    this._isZoneStable = !0,
                                    this._runCallbacksIfReady()
                                }
                                )
                            }
                        })
                    }
                    )
                }
                increasePendingRequestCount() {
                    return this._pendingCount += 1,
                    this._didWork = !0,
                    this._pendingCount
                }
                decreasePendingRequestCount() {
                    if (this._pendingCount -= 1,
                    this._pendingCount < 0)
                        throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(),
                    this._pendingCount
                }
                isStable() {
                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                }
                _runCallbacksIfReady() {
                    if (this.isStable())
                        _l(()=>{
                            for (; 0 !== this._callbacks.length; ) {
                                let t = this._callbacks.pop();
                                clearTimeout(t.timeoutId),
                                t.doneCb(this._didWork)
                            }
                            this._didWork = !1
                        }
                        );
                    else {
                        let t = this.getPendingTasks();
                        this._callbacks = this._callbacks.filter(e=>!e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId),
                        !1)),
                        this._didWork = !0
                    }
                }
                getPendingTasks() {
                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t=>({
                        source: t.source,
                        creationLocation: t.creationLocation,
                        data: t.data
                    })) : []
                }
                addCallback(t, e, n) {
                    let s = -1;
                    e && e > 0 && (s = setTimeout(()=>{
                        this._callbacks = this._callbacks.filter(t=>t.timeoutId !== s),
                        t(this._didWork, this.getPendingTasks())
                    }
                    , e)),
                    this._callbacks.push({
                        doneCb: t,
                        timeoutId: s,
                        updateCb: n
                    })
                }
                whenStable(t, e, n) {
                    if (n && !this.taskTrackingZone)
                        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                    this.addCallback(t, e, n),
                    this._runCallbacksIfReady()
                }
                getPendingRequestCount() {
                    return this._pendingCount
                }
                findProviders(t, e, n) {
                    return []
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(yl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , kl = (()=>{
            class t {
                constructor() {
                    this._applications = new Map,
                    Dl.addToWindow(this)
                }
                registerApplication(t, e) {
                    this._applications.set(t, e)
                }
                unregisterApplication(t) {
                    this._applications.delete(t)
                }
                unregisterAllApplications() {
                    this._applications.clear()
                }
                getTestability(t) {
                    return this._applications.get(t) || null
                }
                getAllTestabilities() {
                    return Array.from(this._applications.values())
                }
                getAllRootElements() {
                    return Array.from(this._applications.keys())
                }
                findTestabilityInTree(t, e=!0) {
                    return Dl.findTestabilityInTree(this, t, e)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class El {
            addToWindow(t) {}
            findTestabilityInTree(t, e, n) {
                return null
            }
        }
        let xl, Dl = new El, Vl = !0, Fl = !1;
        function Tl() {
            return Fl = !0,
            Vl
        }
        const Pl = new Mn("AllowMultipleToken");
        function Il(t, e, n=[]) {
            const s = `Platform: ${e}`
              , i = new Mn(s);
            return (e=[])=>{
                let r = Rl();
                if (!r || r.injector.get(Pl, !1))
                    if (t)
                        t(n.concat(e).concat({
                            provide: i,
                            useValue: !0
                        }));
                    else {
                        const t = n.concat(e).concat({
                            provide: i,
                            useValue: !0
                        }, {
                            provide: Ki,
                            useValue: "platform"
                        });
                        !function(t) {
                            if (xl && !xl.destroyed && !xl.injector.get(Pl, !1))
                                throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                            xl = t.get(Nl);
                            const e = t.get(nl, null);
                            e && e.forEach(t=>t())
                        }(lr.create({
                            providers: t,
                            name: s
                        }))
                    }
                return function(t) {
                    const e = Rl();
                    if (!e)
                        throw new Error("No platform exists!");
                    if (!e.injector.get(t, null))
                        throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return e
                }(i)
            }
        }
        function Rl() {
            return xl && !xl.destroyed ? xl : null
        }
        let Nl = (()=>{
            class t {
                constructor(t) {
                    this._injector = t,
                    this._modules = [],
                    this._destroyListeners = [],
                    this._destroyed = !1
                }
                bootstrapModuleFactory(t, e) {
                    const n = function(t, e) {
                        let n;
                        return n = "noop" === t ? new Ol : ("zone.js" === t ? void 0 : t) || new yl({
                            enableLongStackTrace: Tl(),
                            shouldCoalesceEventChangeDetection: !!(null == e ? void 0 : e.ngZoneEventCoalescing),
                            shouldCoalesceRunChangeDetection: !!(null == e ? void 0 : e.ngZoneRunCoalescing)
                        }),
                        n
                    }(e ? e.ngZone : void 0, {
                        ngZoneEventCoalescing: e && e.ngZoneEventCoalescing || !1,
                        ngZoneRunCoalescing: e && e.ngZoneRunCoalescing || !1
                    })
                      , s = [{
                        provide: yl,
                        useValue: n
                    }];
                    return n.run(()=>{
                        const e = lr.create({
                            providers: s,
                            parent: this.injector,
                            name: t.moduleType.name
                        })
                          , i = t.create(e)
                          , r = i.injector.get(ds, null);
                        if (!r)
                            throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.runOutsideAngular(()=>{
                            const t = n.onError.subscribe({
                                next: t=>{
                                    r.handleError(t)
                                }
                            });
                            i.onDestroy(()=>{
                                Ll(this._modules, i),
                                t.unsubscribe()
                            }
                            )
                        }
                        ),
                        function(t, e, n) {
                            try {
                                const s = n();
                                return Vr(s) ? s.catch(n=>{
                                    throw e.runOutsideAngular(()=>t.handleError(n)),
                                    n
                                }
                                ) : s
                            } catch (s) {
                                throw e.runOutsideAngular(()=>t.handleError(s)),
                                s
                            }
                        }(r, n, ()=>{
                            const t = i.injector.get(Ya);
                            return t.runInitializers(),
                            t.donePromise.then(()=>(wo(i.injector.get(ol, vo) || vo),
                            this._moduleDoBootstrap(i),
                            i))
                        }
                        )
                    }
                    )
                }
                bootstrapModule(t, e=[]) {
                    const n = Wl({}, e);
                    return function(t, e, n) {
                        const s = new Fa(n);
                        return Promise.resolve(s)
                    }(0, 0, t).then(t=>this.bootstrapModuleFactory(t, n))
                }
                _moduleDoBootstrap(t) {
                    const e = t.injector.get(Ml);
                    if (t._bootstrapComponents.length > 0)
                        t._bootstrapComponents.forEach(t=>e.bootstrap(t));
                    else {
                        if (!t.instance.ngDoBootstrap)
                            throw new Error(`The module ${tt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }
                onDestroy(t) {
                    this._destroyListeners.push(t)
                }
                get injector() {
                    return this._injector
                }
                destroy() {
                    if (this._destroyed)
                        throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(t=>t.destroy()),
                    this._destroyListeners.forEach(t=>t()),
                    this._destroyed = !0
                }
                get destroyed() {
                    return this._destroyed
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(lr))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        function Wl(t, e) {
            return Array.isArray(e) ? e.reduce(Wl, t) : Object.assign(Object.assign({}, t), e)
        }
        let Ml = (()=>{
            class t {
                constructor(t, e, n, s, i) {
                    this._zone = t,
                    this._injector = e,
                    this._exceptionHandler = n,
                    this._componentFactoryResolver = s,
                    this._initStatus = i,
                    this._bootstrapListeners = [],
                    this._views = [],
                    this._runningTick = !1,
                    this._stable = !0,
                    this.componentTypes = [],
                    this.components = [],
                    this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                        next: ()=>{
                            this._zone.run(()=>{
                                this.tick()
                            }
                            )
                        }
                    });
                    const r = new y(t=>{
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks,
                        this._zone.runOutsideAngular(()=>{
                            t.next(this._stable),
                            t.complete()
                        }
                        )
                    }
                    )
                      , o = new y(t=>{
                        let e;
                        this._zone.runOutsideAngular(()=>{
                            e = this._zone.onStable.subscribe(()=>{
                                yl.assertNotInAngularZone(),
                                _l(()=>{
                                    this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0,
                                    t.next(!0))
                                }
                                )
                            }
                            )
                        }
                        );
                        const n = this._zone.onUnstable.subscribe(()=>{
                            yl.assertInAngularZone(),
                            this._stable && (this._stable = !1,
                            this._zone.runOutsideAngular(()=>{
                                t.next(!1)
                            }
                            ))
                        }
                        );
                        return ()=>{
                            e.unsubscribe(),
                            n.unsubscribe()
                        }
                    }
                    );
                    this.isStable = U(r, o.pipe(t=>{
                        return z()((e = G,
                        function(t) {
                            let n;
                            n = "function" == typeof e ? e : function() {
                                return e
                            }
                            ;
                            const s = Object.create(t, K);
                            return s.source = t,
                            s.subjectFactory = n,
                            s
                        }
                        )(t));
                        var e
                    }
                    ))
                }
                bootstrap(t, e) {
                    if (!this._initStatus.done)
                        throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    let n;
                    n = t instanceof Vo ? t : this._componentFactoryResolver.resolveComponentFactory(t),
                    this.componentTypes.push(n.componentType);
                    const s = n.isBoundToModule ? void 0 : this._injector.get(fa)
                      , i = n.create(lr.NULL, [], e || n.selector, s)
                      , r = i.location.nativeElement
                      , o = i.injector.get(Cl, null)
                      , a = o && i.injector.get(kl);
                    return o && a && a.registerApplication(r, o),
                    i.onDestroy(()=>{
                        this.detachView(i.hostView),
                        Ll(this.components, i),
                        a && a.unregisterApplication(r)
                    }
                    ),
                    this._loadComponent(i),
                    i
                }
                tick() {
                    if (this._runningTick)
                        throw new Error("ApplicationRef.tick is called recursively");
                    try {
                        this._runningTick = !0;
                        for (let t of this._views)
                            t.detectChanges()
                    } catch (t) {
                        this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))
                    } finally {
                        this._runningTick = !1
                    }
                }
                attachView(t) {
                    const e = t;
                    this._views.push(e),
                    e.attachToAppRef(this)
                }
                detachView(t) {
                    const e = t;
                    Ll(this._views, e),
                    e.detachFromAppRef()
                }
                _loadComponent(t) {
                    this.attachView(t.hostView),
                    this.tick(),
                    this.components.push(t),
                    this._injector.get(il, []).concat(this._bootstrapListeners).forEach(e=>e(t))
                }
                ngOnDestroy() {
                    this._views.slice().forEach(t=>t.destroy()),
                    this._onMicrotaskEmptySubscription.unsubscribe()
                }
                get viewCount() {
                    return this._views.length
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(yl),Jn(lr),Jn(ds),Jn(To),Jn(Ya))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        function Ll(t, e) {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        const jl = Il(null, "core", [{
            provide: sl,
            useValue: "unknown"
        }, {
            provide: Nl,
            deps: [lr]
        }, {
            provide: kl,
            deps: []
        }, {
            provide: rl,
            deps: []
        }])
          , Bl = [{
            provide: Ml,
            useClass: Ml,
            deps: [yl, lr, ds, To, Ya]
        }, {
            provide: ka,
            deps: [yl],
            useFactory: function(t) {
                let e = [];
                return t.onStable.subscribe(()=>{
                    for (; e.length; )
                        e.pop()()
                }
                ),
                function(t) {
                    e.push(t)
                }
            }
        }, {
            provide: Ya,
            useClass: Ya,
            deps: [[new is, Ga]]
        }, {
            provide: fl,
            useClass: fl,
            deps: []
        }, tl, {
            provide: ea,
            useFactory: function() {
                return la
            },
            deps: []
        }, {
            provide: sa,
            useFactory: function() {
                return ca
            },
            deps: []
        }, {
            provide: ol,
            useFactory: function(t) {
                return wo(t = t || "undefined" != typeof $localize && $localize.locale || vo),
                t
            },
            deps: [[new ss(ol), new is, new rs]]
        }, {
            provide: al,
            useValue: "USD"
        }];
        let Hl = (()=>{
            class t {
                constructor(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Ml))
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: Bl
            }),
            t
        }
        )()
          , $l = null;
        function Ul() {
            return $l
        }
        const zl = new Mn("DocumentToken");
        let ql = (()=>{
            class t {
                historyGo(t) {
                    throw new Error("Not implemented")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                factory: Xl,
                token: t,
                providedIn: "platform"
            }),
            t
        }
        )();
        function Xl() {
            return Jn(Ql)
        }
        let Ql = (()=>{
            class t extends ql {
                constructor(t) {
                    super(),
                    this._doc = t,
                    this._init()
                }
                _init() {
                    this.location = window.location,
                    this._history = window.history
                }
                getBaseHrefFromDOM() {
                    return Ul().getBaseHref(this._doc)
                }
                onPopState(t) {
                    const e = Ul().getGlobalEventTarget(this._doc, "window");
                    return e.addEventListener("popstate", t, !1),
                    ()=>e.removeEventListener("popstate", t)
                }
                onHashChange(t) {
                    const e = Ul().getGlobalEventTarget(this._doc, "window");
                    return e.addEventListener("hashchange", t, !1),
                    ()=>e.removeEventListener("hashchange", t)
                }
                get href() {
                    return this.location.href
                }
                get protocol() {
                    return this.location.protocol
                }
                get hostname() {
                    return this.location.hostname
                }
                get port() {
                    return this.location.port
                }
                get pathname() {
                    return this.location.pathname
                }
                get search() {
                    return this.location.search
                }
                get hash() {
                    return this.location.hash
                }
                set pathname(t) {
                    this.location.pathname = t
                }
                pushState(t, e, n) {
                    Kl() ? this._history.pushState(t, e, n) : this.location.hash = n
                }
                replaceState(t, e, n) {
                    Kl() ? this._history.replaceState(t, e, n) : this.location.hash = n
                }
                forward() {
                    this._history.forward()
                }
                back() {
                    this._history.back()
                }
                historyGo(t=0) {
                    this._history.go(t)
                }
                getState() {
                    return this._history.state
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                factory: Zl,
                token: t,
                providedIn: "platform"
            }),
            t
        }
        )();
        function Kl() {
            return !!window.history.pushState
        }
        function Zl() {
            return new Ql(Jn(zl))
        }
        function Gl(t, e) {
            if (0 == t.length)
                return e;
            if (0 == e.length)
                return t;
            let n = 0;
            return t.endsWith("/") && n++,
            e.startsWith("/") && n++,
            2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }
        function Yl(t) {
            const e = t.match(/#|\?|$/)
              , n = e && e.index || t.length;
            return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }
        function Jl(t) {
            return t && "?" !== t[0] ? "?" + t : t
        }
        let tc = (()=>{
            class t {
                historyGo(t) {
                    throw new Error("Not implemented")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                factory: ec,
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        function ec(t) {
            const e = Jn(zl).location;
            return new sc(Jn(ql),e && e.origin || "")
        }
        const nc = new Mn("appBaseHref");
        let sc = (()=>{
            class t extends tc {
                constructor(t, e) {
                    if (super(),
                    this._platformLocation = t,
                    this._removeListenerFns = [],
                    null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                    null == e)
                        throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    this._baseHref = e
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(t) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t))
                }
                getBaseHref() {
                    return this._baseHref
                }
                prepareExternalUrl(t) {
                    return Gl(this._baseHref, t)
                }
                path(t=!1) {
                    const e = this._platformLocation.pathname + Jl(this._platformLocation.search)
                      , n = this._platformLocation.hash;
                    return n && t ? `${e}${n}` : e
                }
                pushState(t, e, n, s) {
                    const i = this.prepareExternalUrl(n + Jl(s));
                    this._platformLocation.pushState(t, e, i)
                }
                replaceState(t, e, n, s) {
                    const i = this.prepareExternalUrl(n + Jl(s));
                    this._platformLocation.replaceState(t, e, i)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                historyGo(t=0) {
                    var e, n;
                    null === (n = (e = this._platformLocation).historyGo) || void 0 === n || n.call(e, t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(ql),Jn(nc, 8))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , ic = (()=>{
            class t {
                constructor(t, e) {
                    this._subject = new Ra,
                    this._urlChangeListeners = [],
                    this._platformStrategy = t;
                    const n = this._platformStrategy.getBaseHref();
                    this._platformLocation = e,
                    this._baseHref = Yl(oc(n)),
                    this._platformStrategy.onPopState(t=>{
                        this._subject.emit({
                            url: this.path(!0),
                            pop: !0,
                            state: t.state,
                            type: t.type
                        })
                    }
                    )
                }
                path(t=!1) {
                    return this.normalize(this._platformStrategy.path(t))
                }
                getState() {
                    return this._platformLocation.getState()
                }
                isCurrentPathEqualTo(t, e="") {
                    return this.path() == this.normalize(t + Jl(e))
                }
                normalize(e) {
                    return t.stripTrailingSlash(function(t, e) {
                        return t && e.startsWith(t) ? e.substring(t.length) : e
                    }(this._baseHref, oc(e)))
                }
                prepareExternalUrl(t) {
                    return t && "/" !== t[0] && (t = "/" + t),
                    this._platformStrategy.prepareExternalUrl(t)
                }
                go(t, e="", n=null) {
                    this._platformStrategy.pushState(n, "", t, e),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Jl(e)), n)
                }
                replaceState(t, e="", n=null) {
                    this._platformStrategy.replaceState(n, "", t, e),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Jl(e)), n)
                }
                forward() {
                    this._platformStrategy.forward()
                }
                back() {
                    this._platformStrategy.back()
                }
                historyGo(t=0) {
                    var e, n;
                    null === (n = (e = this._platformStrategy).historyGo) || void 0 === n || n.call(e, t)
                }
                onUrlChange(t) {
                    this._urlChangeListeners.push(t),
                    this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(t=>{
                        this._notifyUrlChangeListeners(t.url, t.state)
                    }
                    ))
                }
                _notifyUrlChangeListeners(t="", e) {
                    this._urlChangeListeners.forEach(n=>n(t, e))
                }
                subscribe(t, e, n) {
                    return this._subject.subscribe({
                        next: t,
                        error: e,
                        complete: n
                    })
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(tc),Jn(ql))
            }
            ,
            t.normalizeQueryParams = Jl,
            t.joinWithSlash = Gl,
            t.stripTrailingSlash = Yl,
            t.\u0275prov = ht({
                factory: rc,
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        function rc() {
            return new ic(Jn(tc),Jn(ql))
        }
        function oc(t) {
            return t.replace(/\/index.html$/, "")
        }
        var ac = function(t) {
            return t[t.Decimal = 0] = "Decimal",
            t[t.Percent = 1] = "Percent",
            t[t.Currency = 2] = "Currency",
            t[t.Scientific = 3] = "Scientific",
            t
        }({})
          , lc = function(t) {
            return t[t.Zero = 0] = "Zero",
            t[t.One = 1] = "One",
            t[t.Two = 2] = "Two",
            t[t.Few = 3] = "Few",
            t[t.Many = 4] = "Many",
            t[t.Other = 5] = "Other",
            t
        }({})
          , cc = function(t) {
            return t[t.Decimal = 0] = "Decimal",
            t[t.Group = 1] = "Group",
            t[t.List = 2] = "List",
            t[t.PercentSign = 3] = "PercentSign",
            t[t.PlusSign = 4] = "PlusSign",
            t[t.MinusSign = 5] = "MinusSign",
            t[t.Exponential = 6] = "Exponential",
            t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent",
            t[t.PerMille = 8] = "PerMille",
            t[t[1 / 0] = 9] = "Infinity",
            t[t.NaN = 10] = "NaN",
            t[t.TimeSeparator = 11] = "TimeSeparator",
            t[t.CurrencyDecimal = 12] = "CurrencyDecimal",
            t[t.CurrencyGroup = 13] = "CurrencyGroup",
            t
        }({});
        function hc(t, e) {
            const n = go(t)
              , s = n[yo.NumberSymbols][e];
            if (void 0 === s) {
                if (e === cc.CurrencyDecimal)
                    return n[yo.NumberSymbols][cc.Decimal];
                if (e === cc.CurrencyGroup)
                    return n[yo.NumberSymbols][cc.Group]
            }
            return s
        }
        const uc = /^(\d+)?\.((\d+)(-(\d+))?)?$/
          , dc = "."
          , pc = "0";
        function mc(t) {
            const e = parseInt(t);
            if (isNaN(e))
                throw new Error("Invalid integer literal when parsing " + t);
            return e
        }
        class fc {
        }
        let gc = (()=>{
            class t extends fc {
                constructor(t) {
                    super(),
                    this.locale = t
                }
                getPluralCategory(t, e) {
                    switch (function(t) {
                        return go(t)[yo.PluralCase]
                    }(e || this.locale)(t)) {
                    case lc.Zero:
                        return "zero";
                    case lc.One:
                        return "one";
                    case lc.Two:
                        return "two";
                    case lc.Few:
                        return "few";
                    case lc.Many:
                        return "many";
                    default:
                        return "other"
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(ol))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        function _c(t, e) {
            e = encodeURIComponent(e);
            for (const n of t.split(";")) {
                const t = n.indexOf("=")
                  , [s,i] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
                if (s.trim() === e)
                    return decodeURIComponent(i)
            }
            return null
        }
        let yc = (()=>{
            class t {
                constructor(t, e, n, s) {
                    this._iterableDiffers = t,
                    this._keyValueDiffers = e,
                    this._ngEl = n,
                    this._renderer = s,
                    this._iterableDiffer = null,
                    this._keyValueDiffer = null,
                    this._initialClasses = [],
                    this._rawClass = null
                }
                set klass(t) {
                    this._removeClasses(this._initialClasses),
                    this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [],
                    this._applyClasses(this._initialClasses),
                    this._applyClasses(this._rawClass)
                }
                set ngClass(t) {
                    this._removeClasses(this._rawClass),
                    this._applyClasses(this._initialClasses),
                    this._iterableDiffer = null,
                    this._keyValueDiffer = null,
                    this._rawClass = "string" == typeof t ? t.split(/\s+/) : t,
                    this._rawClass && (yr(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                }
                ngDoCheck() {
                    if (this._iterableDiffer) {
                        const t = this._iterableDiffer.diff(this._rawClass);
                        t && this._applyIterableChanges(t)
                    } else if (this._keyValueDiffer) {
                        const t = this._keyValueDiffer.diff(this._rawClass);
                        t && this._applyKeyValueChanges(t)
                    }
                }
                _applyKeyValueChanges(t) {
                    t.forEachAddedItem(t=>this._toggleClass(t.key, t.currentValue)),
                    t.forEachChangedItem(t=>this._toggleClass(t.key, t.currentValue)),
                    t.forEachRemovedItem(t=>{
                        t.previousValue && this._toggleClass(t.key, !1)
                    }
                    )
                }
                _applyIterableChanges(t) {
                    t.forEachAddedItem(t=>{
                        if ("string" != typeof t.item)
                            throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${tt(t.item)}`);
                        this._toggleClass(t.item, !0)
                    }
                    ),
                    t.forEachRemovedItem(t=>this._toggleClass(t.item, !1))
                }
                _applyClasses(t) {
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(t=>this._toggleClass(t, !0)) : Object.keys(t).forEach(e=>this._toggleClass(e, !!t[e])))
                }
                _removeClasses(t) {
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(t=>this._toggleClass(t, !1)) : Object.keys(t).forEach(t=>this._toggleClass(t, !1)))
                }
                _toggleClass(t, e) {
                    (t = t.trim()) && t.split(/\s+/g).forEach(t=>{
                        e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(ea),Or(sa),Or(No),Or(Lo))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["", "ngClass", ""]],
                inputs: {
                    klass: ["class", "klass"],
                    ngClass: "ngClass"
                }
            }),
            t
        }
        )();
        class vc {
            constructor(t, e, n, s) {
                this.$implicit = t,
                this.ngForOf = e,
                this.index = n,
                this.count = s
            }
            get first() {
                return 0 === this.index
            }
            get last() {
                return this.index === this.count - 1
            }
            get even() {
                return this.index % 2 == 0
            }
            get odd() {
                return !this.even
            }
        }
        let bc = (()=>{
            class t {
                constructor(t, e, n) {
                    this._viewContainer = t,
                    this._template = e,
                    this._differs = n,
                    this._ngForOf = null,
                    this._ngForOfDirty = !0,
                    this._differ = null
                }
                set ngForOf(t) {
                    this._ngForOf = t,
                    this._ngForOfDirty = !0
                }
                set ngForTrackBy(t) {
                    this._trackByFn = t
                }
                get ngForTrackBy() {
                    return this._trackByFn
                }
                set ngForTemplate(t) {
                    t && (this._template = t)
                }
                ngDoCheck() {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        const n = this._ngForOf;
                        if (!this._differ && n)
                            try {
                                this._differ = this._differs.find(n).create(this.ngForTrackBy)
                            } catch (e) {
                                throw new Error(`Cannot find a differ supporting object '${n}' of type '${t = n,
                                t.name || typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                            }
                    }
                    var t;
                    if (this._differ) {
                        const t = this._differ.diff(this._ngForOf);
                        t && this._applyChanges(t)
                    }
                }
                _applyChanges(t) {
                    const e = [];
                    t.forEachOperation((t,n,s)=>{
                        if (null == t.previousIndex) {
                            const n = this._viewContainer.createEmbeddedView(this._template, new vc(null,this._ngForOf,-1,-1), null === s ? void 0 : s)
                              , i = new wc(t,n);
                            e.push(i)
                        } else if (null == s)
                            this._viewContainer.remove(null === n ? void 0 : n);
                        else if (null !== n) {
                            const i = this._viewContainer.get(n);
                            this._viewContainer.move(i, s);
                            const r = new wc(t,i);
                            e.push(r)
                        }
                    }
                    );
                    for (let n = 0; n < e.length; n++)
                        this._perViewChange(e[n].view, e[n].record);
                    for (let n = 0, s = this._viewContainer.length; n < s; n++) {
                        const t = this._viewContainer.get(n);
                        t.context.index = n,
                        t.context.count = s,
                        t.context.ngForOf = this._ngForOf
                    }
                    t.forEachIdentityChange(t=>{
                        this._viewContainer.get(t.currentIndex).context.$implicit = t.item
                    }
                    )
                }
                _perViewChange(t, e) {
                    t.context.$implicit = e.item
                }
                static ngTemplateContextGuard(t, e) {
                    return !0
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(_a),Or(ua),Or(ea))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["", "ngFor", "", "ngForOf", ""]],
                inputs: {
                    ngForOf: "ngForOf",
                    ngForTrackBy: "ngForTrackBy",
                    ngForTemplate: "ngForTemplate"
                }
            }),
            t
        }
        )();
        class wc {
            constructor(t, e) {
                this.record = t,
                this.view = e
            }
        }
        let Ac = (()=>{
            class t {
                constructor(t, e) {
                    this._viewContainer = t,
                    this._context = new Sc,
                    this._thenTemplateRef = null,
                    this._elseTemplateRef = null,
                    this._thenViewRef = null,
                    this._elseViewRef = null,
                    this._thenTemplateRef = e
                }
                set ngIf(t) {
                    this._context.$implicit = this._context.ngIf = t,
                    this._updateView()
                }
                set ngIfThen(t) {
                    Oc("ngIfThen", t),
                    this._thenTemplateRef = t,
                    this._thenViewRef = null,
                    this._updateView()
                }
                set ngIfElse(t) {
                    Oc("ngIfElse", t),
                    this._elseTemplateRef = t,
                    this._elseViewRef = null,
                    this._updateView()
                }
                _updateView() {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(),
                    this._elseViewRef = null,
                    this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(),
                    this._thenViewRef = null,
                    this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                }
                static ngTemplateContextGuard(t, e) {
                    return !0
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(_a),Or(ua))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["", "ngIf", ""]],
                inputs: {
                    ngIf: "ngIf",
                    ngIfThen: "ngIfThen",
                    ngIfElse: "ngIfElse"
                }
            }),
            t
        }
        )();
        class Sc {
            constructor() {
                this.$implicit = null,
                this.ngIf = null
            }
        }
        function Oc(t, e) {
            if (e && !e.createEmbeddedView)
                throw new Error(`${t} must be a TemplateRef, but received '${tt(e)}'.`)
        }
        let Cc = (()=>{
            class t {
                constructor(t) {
                    this._locale = t
                }
                transform(e, n, s) {
                    if (!function(t) {
                        return !(null == t || "" === t || t != t)
                    }(e))
                        return null;
                    s = s || this._locale;
                    try {
                        return function(t, e, n) {
                            return function(t, e, n, s, i, r, o=!1) {
                                let a = ""
                                  , l = !1;
                                if (isFinite(t)) {
                                    let c = function(t) {
                                        let e, n, s, i, r, o = Math.abs(t) + "", a = 0;
                                        for ((n = o.indexOf(dc)) > -1 && (o = o.replace(dc, "")),
                                        (s = o.search(/e/i)) > 0 ? (n < 0 && (n = s),
                                        n += +o.slice(s + 1),
                                        o = o.substring(0, s)) : n < 0 && (n = o.length),
                                        s = 0; o.charAt(s) === pc; s++)
                                            ;
                                        if (s === (r = o.length))
                                            e = [0],
                                            n = 1;
                                        else {
                                            for (r--; o.charAt(r) === pc; )
                                                r--;
                                            for (n -= s,
                                            e = [],
                                            i = 0; s <= r; s++,
                                            i++)
                                                e[i] = Number(o.charAt(s))
                                        }
                                        return n > 22 && (e = e.splice(0, 21),
                                        a = n - 1,
                                        n = 1),
                                        {
                                            digits: e,
                                            exponent: a,
                                            integerLen: n
                                        }
                                    }(t);
                                    o && (c = function(t) {
                                        if (0 === t.digits[0])
                                            return t;
                                        const e = t.digits.length - t.integerLen;
                                        return t.exponent ? t.exponent += 2 : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0),
                                        t.integerLen += 2),
                                        t
                                    }(c));
                                    let h = e.minInt
                                      , u = e.minFrac
                                      , d = e.maxFrac;
                                    if (r) {
                                        const t = r.match(uc);
                                        if (null === t)
                                            throw new Error(`${r} is not a valid digit info`);
                                        const e = t[1]
                                          , n = t[3]
                                          , s = t[5];
                                        null != e && (h = mc(e)),
                                        null != n && (u = mc(n)),
                                        null != s ? d = mc(s) : null != n && u > d && (d = u)
                                    }
                                    !function(t, e, n) {
                                        if (e > n)
                                            throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);
                                        let s = t.digits
                                          , i = s.length - t.integerLen;
                                        const r = Math.min(Math.max(e, i), n);
                                        let o = r + t.integerLen
                                          , a = s[o];
                                        if (o > 0) {
                                            s.splice(Math.max(t.integerLen, o));
                                            for (let t = o; t < s.length; t++)
                                                s[t] = 0
                                        } else {
                                            i = Math.max(0, i),
                                            t.integerLen = 1,
                                            s.length = Math.max(1, o = r + 1),
                                            s[0] = 0;
                                            for (let t = 1; t < o; t++)
                                                s[t] = 0
                                        }
                                        if (a >= 5)
                                            if (o - 1 < 0) {
                                                for (let e = 0; e > o; e--)
                                                    s.unshift(0),
                                                    t.integerLen++;
                                                s.unshift(1),
                                                t.integerLen++
                                            } else
                                                s[o - 1]++;
                                        for (; i < Math.max(0, r); i++)
                                            s.push(0);
                                        let l = 0 !== r;
                                        const c = e + t.integerLen
                                          , h = s.reduceRight(function(t, e, n, s) {
                                            return s[n] = (e += t) < 10 ? e : e - 10,
                                            l && (0 === s[n] && n >= c ? s.pop() : l = !1),
                                            e >= 10 ? 1 : 0
                                        }, 0);
                                        h && (s.unshift(h),
                                        t.integerLen++)
                                    }(c, u, d);
                                    let p = c.digits
                                      , m = c.integerLen;
                                    const f = c.exponent;
                                    let g = [];
                                    for (l = p.every(t=>!t); m < h; m++)
                                        p.unshift(0);
                                    for (; m < 0; m++)
                                        p.unshift(0);
                                    m > 0 ? g = p.splice(m, p.length) : (g = p,
                                    p = [0]);
                                    const _ = [];
                                    for (p.length >= e.lgSize && _.unshift(p.splice(-e.lgSize, p.length).join("")); p.length > e.gSize; )
                                        _.unshift(p.splice(-e.gSize, p.length).join(""));
                                    p.length && _.unshift(p.join("")),
                                    a = _.join(hc(n, s)),
                                    g.length && (a += hc(n, i) + g.join("")),
                                    f && (a += hc(n, cc.Exponential) + "+" + f)
                                } else
                                    a = hc(n, cc.Infinity);
                                return a = t < 0 && !l ? e.negPre + a + e.negSuf : e.posPre + a + e.posSuf,
                                a
                            }(t, function(t, e="-") {
                                const n = {
                                    minInt: 1,
                                    minFrac: 0,
                                    maxFrac: 0,
                                    posPre: "",
                                    posSuf: "",
                                    negPre: "",
                                    negSuf: "",
                                    gSize: 0,
                                    lgSize: 0
                                }
                                  , s = t.split(";")
                                  , i = s[0]
                                  , r = s[1]
                                  , o = -1 !== i.indexOf(dc) ? i.split(dc) : [i.substring(0, i.lastIndexOf(pc) + 1), i.substring(i.lastIndexOf(pc) + 1)]
                                  , a = o[0]
                                  , l = o[1] || "";
                                n.posPre = a.substr(0, a.indexOf("#"));
                                for (let h = 0; h < l.length; h++) {
                                    const t = l.charAt(h);
                                    t === pc ? n.minFrac = n.maxFrac = h + 1 : "#" === t ? n.maxFrac = h + 1 : n.posSuf += t
                                }
                                const c = a.split(",");
                                if (n.gSize = c[1] ? c[1].length : 0,
                                n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0,
                                r) {
                                    const t = i.length - n.posPre.length - n.posSuf.length
                                      , e = r.indexOf("#");
                                    n.negPre = r.substr(0, e).replace(/'/g, ""),
                                    n.negSuf = r.substr(e + t).replace(/'/g, "")
                                } else
                                    n.negPre = e + n.posPre,
                                    n.negSuf = n.posSuf;
                                return n
                            }(function(t, e) {
                                return go(t)[yo.NumberFormats][e]
                            }(e, ac.Decimal), hc(e, cc.MinusSign)), e, cc.Group, cc.Decimal, n)
                        }(function(t) {
                            if ("string" == typeof t && !isNaN(Number(t) - parseFloat(t)))
                                return Number(t);
                            if ("number" != typeof t)
                                throw new Error(`${t} is not a number`);
                            return t
                        }(e), s, n)
                    } catch (i) {
                        throw function(t, e) {
                            return Error(`InvalidPipeArgument: '${e}' for pipe '${tt(t)}'`)
                        }(t, i.message)
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(ol, 16))
            }
            ,
            t.\u0275pipe = Qt({
                name: "number",
                type: t,
                pure: !0
            }),
            t
        }
        )()
          , kc = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: [{
                    provide: fc,
                    useClass: gc
                }]
            }),
            t
        }
        )();
        class Ec {
        }
        class xc extends class extends class {
        }
        {
            constructor() {
                super(...arguments),
                this.supportsDOMEvents = !0
            }
        }
        {
            static makeCurrent() {
                var t;
                t = new xc,
                $l || ($l = t)
            }
            onAndCancel(t, e, n) {
                return t.addEventListener(e, n, !1),
                ()=>{
                    t.removeEventListener(e, n, !1)
                }
            }
            dispatchEvent(t, e) {
                t.dispatchEvent(e)
            }
            remove(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }
            createElement(t, e) {
                return (e = e || this.getDefaultDocument()).createElement(t)
            }
            createHtmlDocument() {
                return document.implementation.createHTMLDocument("fakeTitle")
            }
            getDefaultDocument() {
                return document
            }
            isElementNode(t) {
                return t.nodeType === Node.ELEMENT_NODE
            }
            isShadowRoot(t) {
                return t instanceof DocumentFragment
            }
            getGlobalEventTarget(t, e) {
                return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
            }
            getBaseHref(t) {
                const e = (Vc = Vc || document.querySelector("base"),
                Vc ? Vc.getAttribute("href") : null);
                return null == e ? null : function(t) {
                    Dc = Dc || document.createElement("a"),
                    Dc.setAttribute("href", t);
                    const e = Dc.pathname;
                    return "/" === e.charAt(0) ? e : `/${e}`
                }(e)
            }
            resetBaseElement() {
                Vc = null
            }
            getUserAgent() {
                return window.navigator.userAgent
            }
            getCookie(t) {
                return _c(document.cookie, t)
            }
        }
        let Dc, Vc = null;
        const Fc = new Mn("TRANSITION_ID")
          , Tc = [{
            provide: Ga,
            useFactory: function(t, e, n) {
                return ()=>{
                    n.get(Ya).donePromise.then(()=>{
                        const n = Ul();
                        Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition") === t).forEach(t=>n.remove(t))
                    }
                    )
                }
            },
            deps: [Fc, zl, lr],
            multi: !0
        }];
        class Pc {
            static init() {
                var t;
                t = new Pc,
                Dl = t
            }
            addToWindow(t) {
                Vt.getAngularTestability = (e,n=!0)=>{
                    const s = t.findTestabilityInTree(e, n);
                    if (null == s)
                        throw new Error("Could not find testability for element.");
                    return s
                }
                ,
                Vt.getAllAngularTestabilities = ()=>t.getAllTestabilities(),
                Vt.getAllAngularRootElements = ()=>t.getAllRootElements(),
                Vt.frameworkStabilizers || (Vt.frameworkStabilizers = []),
                Vt.frameworkStabilizers.push(t=>{
                    const e = Vt.getAllAngularTestabilities();
                    let n = e.length
                      , s = !1;
                    const i = function(e) {
                        s = s || e,
                        n--,
                        0 == n && t(s)
                    };
                    e.forEach(function(t) {
                        t.whenStable(i)
                    })
                }
                )
            }
            findTestabilityInTree(t, e, n) {
                if (null == e)
                    return null;
                const s = t.getTestability(e);
                return null != s ? s : n ? Ul().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
            }
        }
        let Ic = (()=>{
            class t {
                build() {
                    return new XMLHttpRequest
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Rc = new Mn("EventManagerPlugins");
        let Nc = (()=>{
            class t {
                constructor(t, e) {
                    this._zone = e,
                    this._eventNameToPlugin = new Map,
                    t.forEach(t=>t.manager = this),
                    this._plugins = t.slice().reverse()
                }
                addEventListener(t, e, n) {
                    return this._findPluginFor(e).addEventListener(t, e, n)
                }
                addGlobalEventListener(t, e, n) {
                    return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                }
                getZone() {
                    return this._zone
                }
                _findPluginFor(t) {
                    const e = this._eventNameToPlugin.get(t);
                    if (e)
                        return e;
                    const n = this._plugins;
                    for (let s = 0; s < n.length; s++) {
                        const e = n[s];
                        if (e.supports(t))
                            return this._eventNameToPlugin.set(t, e),
                            e
                    }
                    throw new Error(`No event manager plugin found for event ${t}`)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Rc),Jn(yl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class Wc {
            constructor(t) {
                this._doc = t
            }
            addGlobalEventListener(t, e, n) {
                const s = Ul().getGlobalEventTarget(this._doc, t);
                if (!s)
                    throw new Error(`Unsupported event target ${s} for event ${e}`);
                return this.addEventListener(s, e, n)
            }
        }
        let Mc = (()=>{
            class t {
                constructor() {
                    this._stylesSet = new Set
                }
                addStyles(t) {
                    const e = new Set;
                    t.forEach(t=>{
                        this._stylesSet.has(t) || (this._stylesSet.add(t),
                        e.add(t))
                    }
                    ),
                    this.onStylesAdded(e)
                }
                onStylesAdded(t) {}
                getAllStyles() {
                    return Array.from(this._stylesSet)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Lc = (()=>{
            class t extends Mc {
                constructor(t) {
                    super(),
                    this._doc = t,
                    this._hostNodes = new Map,
                    this._hostNodes.set(t.head, [])
                }
                _addStylesToHost(t, e, n) {
                    t.forEach(t=>{
                        const s = this._doc.createElement("style");
                        s.textContent = t,
                        n.push(e.appendChild(s))
                    }
                    )
                }
                addHost(t) {
                    const e = [];
                    this._addStylesToHost(this._stylesSet, t, e),
                    this._hostNodes.set(t, e)
                }
                removeHost(t) {
                    const e = this._hostNodes.get(t);
                    e && e.forEach(jc),
                    this._hostNodes.delete(t)
                }
                onStylesAdded(t) {
                    this._hostNodes.forEach((e,n)=>{
                        this._addStylesToHost(t, n, e)
                    }
                    )
                }
                ngOnDestroy() {
                    this._hostNodes.forEach(t=>t.forEach(jc))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        function jc(t) {
            Ul().remove(t)
        }
        const Bc = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
          , Hc = /%COMP%/g;
        function $c(t, e, n) {
            for (let s = 0; s < e.length; s++) {
                let i = e[s];
                Array.isArray(i) ? $c(t, i, n) : (i = i.replace(Hc, t),
                n.push(i))
            }
            return n
        }
        function Uc(t) {
            return e=>{
                if ("__ngUnwrap__" === e)
                    return t;
                !1 === t(e) && (e.preventDefault(),
                e.returnValue = !1)
            }
        }
        let zc = (()=>{
            class t {
                constructor(t, e, n) {
                    this.eventManager = t,
                    this.sharedStylesHost = e,
                    this.appId = n,
                    this.rendererByCompId = new Map,
                    this.defaultRenderer = new qc(t)
                }
                createRenderer(t, e) {
                    if (!t || !e)
                        return this.defaultRenderer;
                    switch (e.encapsulation) {
                    case Ct.Emulated:
                        {
                            let n = this.rendererByCompId.get(e.id);
                            return n || (n = new Xc(this.eventManager,this.sharedStylesHost,e,this.appId),
                            this.rendererByCompId.set(e.id, n)),
                            n.applyToHost(t),
                            n
                        }
                    case 1:
                    case Ct.ShadowDom:
                        return new Qc(this.eventManager,this.sharedStylesHost,t,e);
                    default:
                        if (!this.rendererByCompId.has(e.id)) {
                            const t = $c(e.id, e.styles, []);
                            this.sharedStylesHost.addStyles(t),
                            this.rendererByCompId.set(e.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                    }
                }
                begin() {}
                end() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Nc),Jn(Lc),Jn(Ja))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class qc {
            constructor(t) {
                this.eventManager = t,
                this.data = Object.create(null)
            }
            destroy() {}
            createElement(t, e) {
                return e ? document.createElementNS(Bc[e] || e, t) : document.createElement(t)
            }
            createComment(t) {
                return document.createComment(t)
            }
            createText(t) {
                return document.createTextNode(t)
            }
            appendChild(t, e) {
                t.appendChild(e)
            }
            insertBefore(t, e, n) {
                t && t.insertBefore(e, n)
            }
            removeChild(t, e) {
                t && t.removeChild(e)
            }
            selectRootElement(t, e) {
                let n = "string" == typeof t ? document.querySelector(t) : t;
                if (!n)
                    throw new Error(`The selector "${t}" did not match any elements`);
                return e || (n.textContent = ""),
                n
            }
            parentNode(t) {
                return t.parentNode
            }
            nextSibling(t) {
                return t.nextSibling
            }
            setAttribute(t, e, n, s) {
                if (s) {
                    e = s + ":" + e;
                    const i = Bc[s];
                    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)
                } else
                    t.setAttribute(e, n)
            }
            removeAttribute(t, e, n) {
                if (n) {
                    const s = Bc[n];
                    s ? t.removeAttributeNS(s, e) : t.removeAttribute(`${n}:${e}`)
                } else
                    t.removeAttribute(e)
            }
            addClass(t, e) {
                t.classList.add(e)
            }
            removeClass(t, e) {
                t.classList.remove(e)
            }
            setStyle(t, e, n, s) {
                s & (fs.DashCase | fs.Important) ? t.style.setProperty(e, n, s & fs.Important ? "important" : "") : t.style[e] = n
            }
            removeStyle(t, e, n) {
                n & fs.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
            }
            setProperty(t, e, n) {
                t[e] = n
            }
            setValue(t, e) {
                t.nodeValue = e
            }
            listen(t, e, n) {
                return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Uc(n)) : this.eventManager.addEventListener(t, e, Uc(n))
            }
        }
        class Xc extends qc {
            constructor(t, e, n, s) {
                super(t),
                this.component = n;
                const i = $c(s + "-" + n.id, n.styles, []);
                e.addStyles(i),
                this.contentAttr = "_ngcontent-%COMP%".replace(Hc, s + "-" + n.id),
                this.hostAttr = "_nghost-%COMP%".replace(Hc, s + "-" + n.id)
            }
            applyToHost(t) {
                super.setAttribute(t, this.hostAttr, "")
            }
            createElement(t, e) {
                const n = super.createElement(t, e);
                return super.setAttribute(n, this.contentAttr, ""),
                n
            }
        }
        class Qc extends qc {
            constructor(t, e, n, s) {
                super(t),
                this.sharedStylesHost = e,
                this.hostEl = n,
                this.shadowRoot = n.attachShadow({
                    mode: "open"
                }),
                this.sharedStylesHost.addHost(this.shadowRoot);
                const i = $c(s.id, s.styles, []);
                for (let r = 0; r < i.length; r++) {
                    const t = document.createElement("style");
                    t.textContent = i[r],
                    this.shadowRoot.appendChild(t)
                }
            }
            nodeOrShadowRoot(t) {
                return t === this.hostEl ? this.shadowRoot : t
            }
            destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot)
            }
            appendChild(t, e) {
                return super.appendChild(this.nodeOrShadowRoot(t), e)
            }
            insertBefore(t, e, n) {
                return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
            }
            removeChild(t, e) {
                return super.removeChild(this.nodeOrShadowRoot(t), e)
            }
            parentNode(t) {
                return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
            }
        }
        let Kc = (()=>{
            class t extends Wc {
                constructor(t) {
                    super(t)
                }
                supports(t) {
                    return !0
                }
                addEventListener(t, e, n) {
                    return t.addEventListener(e, n, !1),
                    ()=>this.removeEventListener(t, e, n)
                }
                removeEventListener(t, e, n) {
                    return t.removeEventListener(e, n)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Zc = ["alt", "control", "meta", "shift"]
          , Gc = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }
          , Yc = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        }
          , Jc = {
            alt: t=>t.altKey,
            control: t=>t.ctrlKey,
            meta: t=>t.metaKey,
            shift: t=>t.shiftKey
        };
        let th = (()=>{
            class t extends Wc {
                constructor(t) {
                    super(t)
                }
                supports(e) {
                    return null != t.parseEventName(e)
                }
                addEventListener(e, n, s) {
                    const i = t.parseEventName(n)
                      , r = t.eventCallback(i.fullKey, s, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(()=>Ul().onAndCancel(e, i.domEventName, r))
                }
                static parseEventName(e) {
                    const n = e.toLowerCase().split(".")
                      , s = n.shift();
                    if (0 === n.length || "keydown" !== s && "keyup" !== s)
                        return null;
                    const i = t._normalizeKey(n.pop());
                    let r = "";
                    if (Zc.forEach(t=>{
                        const e = n.indexOf(t);
                        e > -1 && (n.splice(e, 1),
                        r += t + ".")
                    }
                    ),
                    r += i,
                    0 != n.length || 0 === i.length)
                        return null;
                    const o = {};
                    return o.domEventName = s,
                    o.fullKey = r,
                    o
                }
                static getEventFullKey(t) {
                    let e = ""
                      , n = function(t) {
                        let e = t.key;
                        if (null == e) {
                            if (e = t.keyIdentifier,
                            null == e)
                                return "Unidentified";
                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)),
                            3 === t.location && Yc.hasOwnProperty(e) && (e = Yc[e]))
                        }
                        return Gc[e] || e
                    }(t);
                    return n = n.toLowerCase(),
                    " " === n ? n = "space" : "." === n && (n = "dot"),
                    Zc.forEach(s=>{
                        s != n && (0,
                        Jc[s])(t) && (e += s + ".")
                    }
                    ),
                    e += n,
                    e
                }
                static eventCallback(e, n, s) {
                    return i=>{
                        t.getEventFullKey(i) === e && s.runGuarded(()=>n(i))
                    }
                }
                static _normalizeKey(t) {
                    switch (t) {
                    case "esc":
                        return "escape";
                    default:
                        return t
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const eh = Il(jl, "browser", [{
            provide: sl,
            useValue: "browser"
        }, {
            provide: nl,
            useValue: function() {
                xc.makeCurrent(),
                Pc.init()
            },
            multi: !0
        }, {
            provide: zl,
            useFactory: function() {
                return function(t) {
                    de = t
                }(document),
                document
            },
            deps: []
        }])
          , nh = [[], {
            provide: Ki,
            useValue: "root"
        }, {
            provide: ds,
            useFactory: function() {
                return new ds
            },
            deps: []
        }, {
            provide: Rc,
            useClass: Kc,
            multi: !0,
            deps: [zl, yl, sl]
        }, {
            provide: Rc,
            useClass: th,
            multi: !0,
            deps: [zl]
        }, [], {
            provide: zc,
            useClass: zc,
            deps: [Nc, Lc, Ja]
        }, {
            provide: Mo,
            useExisting: zc
        }, {
            provide: Mc,
            useExisting: Lc
        }, {
            provide: Lc,
            useClass: Lc,
            deps: [zl]
        }, {
            provide: Cl,
            useClass: Cl,
            deps: [yl]
        }, {
            provide: Nc,
            useClass: Nc,
            deps: [Rc, yl]
        }, {
            provide: Ec,
            useClass: Ic,
            deps: []
        }, []];
        let sh = (()=>{
            class t {
                constructor(t) {
                    if (t)
                        throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                static withServerTransition(e) {
                    return {
                        ngModule: t,
                        providers: [{
                            provide: Ja,
                            useValue: e.appId
                        }, {
                            provide: Fc,
                            useExisting: Ja
                        }, Tc]
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(t, 12))
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: nh,
                imports: [kc, Hl]
            }),
            t
        }
        )();
        "undefined" != typeof window && window;
        class ih {
        }
        class rh {
        }
        class oh {
        }
        class ah extends u {
            constructor(t, e) {
                super()
            }
            schedule(t, e=0) {
                return this
            }
        }
        class lh extends ah {
            constructor(t, e) {
                super(t, e),
                this.scheduler = t,
                this.work = e,
                this.pending = !1
            }
            schedule(t, e=0) {
                if (this.closed)
                    return this;
                this.state = t;
                const n = this.id
                  , s = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(s, n, e)),
                this.pending = !0,
                this.delay = e,
                this.id = this.id || this.requestAsyncId(s, this.id, e),
                this
            }
            requestAsyncId(t, e, n=0) {
                return setInterval(t.flush.bind(t, this), n)
            }
            recycleAsyncId(t, e, n=0) {
                if (null !== n && this.delay === n && !1 === this.pending)
                    return e;
                clearInterval(e)
            }
            execute(t, e) {
                if (this.closed)
                    return new Error("executing a cancelled action");
                this.pending = !1;
                const n = this._execute(t, e);
                if (n)
                    return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }
            _execute(t, e) {
                let n, s = !1;
                try {
                    this.work(t)
                } catch (i) {
                    s = !0,
                    n = !!i && i || new Error(i)
                }
                if (s)
                    return this.unsubscribe(),
                    n
            }
            _unsubscribe() {
                const t = this.id
                  , e = this.scheduler
                  , n = e.actions
                  , s = n.indexOf(this);
                this.work = null,
                this.state = null,
                this.pending = !1,
                this.scheduler = null,
                -1 !== s && n.splice(s, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                this.delay = null
            }
        }
        let ch = (()=>{
            class t {
                constructor(e, n=t.now) {
                    this.SchedulerAction = e,
                    this.now = n
                }
                schedule(t, e=0, n) {
                    return new this.SchedulerAction(this,t).schedule(n, e)
                }
            }
            return t.now = ()=>Date.now(),
            t
        }
        )();
        class hh extends ch {
            constructor(t, e=ch.now) {
                super(t, ()=>hh.delegate && hh.delegate !== this ? hh.delegate.now() : e()),
                this.actions = [],
                this.active = !1,
                this.scheduled = void 0
            }
            schedule(t, e=0, n) {
                return hh.delegate && hh.delegate !== this ? hh.delegate.schedule(t, e, n) : super.schedule(t, e, n)
            }
            flush(t) {
                const {actions: e} = this;
                if (this.active)
                    return void e.push(t);
                let n;
                this.active = !0;
                do {
                    if (n = t.execute(t.state, t.delay))
                        break
                } while (t = e.shift());
                if (this.active = !1,
                n) {
                    for (; t = e.shift(); )
                        t.unsubscribe();
                    throw n
                }
            }
        }
        const uh = new hh(lh);
        function dh(t) {
            return !l(t) && t - parseFloat(t) + 1 >= 0
        }
        function ph(t=0, e=uh) {
            return (!dh(t) || t < 0) && (t = 0),
            e && "function" == typeof e.schedule || (e = uh),
            new y(n=>(n.add(e.schedule(mh, t, {
                subscriber: n,
                counter: 0,
                period: t
            })),
            n))
        }
        function mh(t) {
            const {subscriber: e, counter: n, period: s} = t;
            e.next(n),
            this.schedule({
                subscriber: e,
                counter: n + 1,
                period: s
            }, s)
        }
        function fh(...t) {
            let e = t[t.length - 1];
            return C(e) ? (t.pop(),
            R(t, e)) : $(t)
        }
        function gh(t, e) {
            return function(n) {
                return n.lift(new _h(t,e))
            }
        }
        class _h {
            constructor(t, e) {
                this.predicate = t,
                this.thisArg = e
            }
            call(t, e) {
                return e.subscribe(new yh(t,this.predicate,this.thisArg))
            }
        }
        class yh extends m {
            constructor(t, e, n) {
                super(t),
                this.predicate = e,
                this.thisArg = n,
                this.count = 0
            }
            _next(t) {
                let e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e && this.destination.next(t)
            }
        }
        class vh {
        }
        class bh {
        }
        class wh {
            constructor(t) {
                this.normalizedNames = new Map,
                this.lazyUpdate = null,
                t ? this.lazyInit = "string" == typeof t ? ()=>{
                    this.headers = new Map,
                    t.split("\n").forEach(t=>{
                        const e = t.indexOf(":");
                        if (e > 0) {
                            const n = t.slice(0, e)
                              , s = n.toLowerCase()
                              , i = t.slice(e + 1).trim();
                            this.maybeSetNormalizedName(n, s),
                            this.headers.has(s) ? this.headers.get(s).push(i) : this.headers.set(s, [i])
                        }
                    }
                    )
                }
                : ()=>{
                    this.headers = new Map,
                    Object.keys(t).forEach(e=>{
                        let n = t[e];
                        const s = e.toLowerCase();
                        "string" == typeof n && (n = [n]),
                        n.length > 0 && (this.headers.set(s, n),
                        this.maybeSetNormalizedName(e, s))
                    }
                    )
                }
                : this.headers = new Map
            }
            has(t) {
                return this.init(),
                this.headers.has(t.toLowerCase())
            }
            get(t) {
                this.init();
                const e = this.headers.get(t.toLowerCase());
                return e && e.length > 0 ? e[0] : null
            }
            keys() {
                return this.init(),
                Array.from(this.normalizedNames.values())
            }
            getAll(t) {
                return this.init(),
                this.headers.get(t.toLowerCase()) || null
            }
            append(t, e) {
                return this.clone({
                    name: t,
                    value: e,
                    op: "a"
                })
            }
            set(t, e) {
                return this.clone({
                    name: t,
                    value: e,
                    op: "s"
                })
            }
            delete(t, e) {
                return this.clone({
                    name: t,
                    value: e,
                    op: "d"
                })
            }
            maybeSetNormalizedName(t, e) {
                this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
            }
            init() {
                this.lazyInit && (this.lazyInit instanceof wh ? this.copyFrom(this.lazyInit) : this.lazyInit(),
                this.lazyInit = null,
                this.lazyUpdate && (this.lazyUpdate.forEach(t=>this.applyUpdate(t)),
                this.lazyUpdate = null))
            }
            copyFrom(t) {
                t.init(),
                Array.from(t.headers.keys()).forEach(e=>{
                    this.headers.set(e, t.headers.get(e)),
                    this.normalizedNames.set(e, t.normalizedNames.get(e))
                }
                )
            }
            clone(t) {
                const e = new wh;
                return e.lazyInit = this.lazyInit && this.lazyInit instanceof wh ? this.lazyInit : this,
                e.lazyUpdate = (this.lazyUpdate || []).concat([t]),
                e
            }
            applyUpdate(t) {
                const e = t.name.toLowerCase();
                switch (t.op) {
                case "a":
                case "s":
                    let n = t.value;
                    if ("string" == typeof n && (n = [n]),
                    0 === n.length)
                        return;
                    this.maybeSetNormalizedName(t.name, e);
                    const s = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                    s.push(...n),
                    this.headers.set(e, s);
                    break;
                case "d":
                    const i = t.value;
                    if (i) {
                        let t = this.headers.get(e);
                        if (!t)
                            return;
                        t = t.filter(t=>-1 === i.indexOf(t)),
                        0 === t.length ? (this.headers.delete(e),
                        this.normalizedNames.delete(e)) : this.headers.set(e, t)
                    } else
                        this.headers.delete(e),
                        this.normalizedNames.delete(e)
                }
            }
            forEach(t) {
                this.init(),
                Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e), this.headers.get(e)))
            }
        }
        class Ah {
            encodeKey(t) {
                return Sh(t)
            }
            encodeValue(t) {
                return Sh(t)
            }
            decodeKey(t) {
                return decodeURIComponent(t)
            }
            decodeValue(t) {
                return decodeURIComponent(t)
            }
        }
        function Sh(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }
        function Oh(t) {
            return `${t}`
        }
        class Ch {
            constructor(t={}) {
                if (this.updates = null,
                this.cloneFrom = null,
                this.encoder = t.encoder || new Ah,
                t.fromString) {
                    if (t.fromObject)
                        throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = function(t, e) {
                        const n = new Map;
                        return t.length > 0 && t.replace(/^\?/, "").split("&").forEach(t=>{
                            const s = t.indexOf("=")
                              , [i,r] = -1 == s ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, s)), e.decodeValue(t.slice(s + 1))]
                              , o = n.get(i) || [];
                            o.push(r),
                            n.set(i, o)
                        }
                        ),
                        n
                    }(t.fromString, this.encoder)
                } else
                    t.fromObject ? (this.map = new Map,
                    Object.keys(t.fromObject).forEach(e=>{
                        const n = t.fromObject[e];
                        this.map.set(e, Array.isArray(n) ? n : [n])
                    }
                    )) : this.map = null
            }
            has(t) {
                return this.init(),
                this.map.has(t)
            }
            get(t) {
                this.init();
                const e = this.map.get(t);
                return e ? e[0] : null
            }
            getAll(t) {
                return this.init(),
                this.map.get(t) || null
            }
            keys() {
                return this.init(),
                Array.from(this.map.keys())
            }
            append(t, e) {
                return this.clone({
                    param: t,
                    value: e,
                    op: "a"
                })
            }
            appendAll(t) {
                const e = [];
                return Object.keys(t).forEach(n=>{
                    const s = t[n];
                    Array.isArray(s) ? s.forEach(t=>{
                        e.push({
                            param: n,
                            value: t,
                            op: "a"
                        })
                    }
                    ) : e.push({
                        param: n,
                        value: s,
                        op: "a"
                    })
                }
                ),
                this.clone(e)
            }
            set(t, e) {
                return this.clone({
                    param: t,
                    value: e,
                    op: "s"
                })
            }
            delete(t, e) {
                return this.clone({
                    param: t,
                    value: e,
                    op: "d"
                })
            }
            toString() {
                return this.init(),
                this.keys().map(t=>{
                    const e = this.encoder.encodeKey(t);
                    return this.map.get(t).map(t=>e + "=" + this.encoder.encodeValue(t)).join("&")
                }
                ).filter(t=>"" !== t).join("&")
            }
            clone(t) {
                const e = new Ch({
                    encoder: this.encoder
                });
                return e.cloneFrom = this.cloneFrom || this,
                e.updates = (this.updates || []).concat(t),
                e
            }
            init() {
                null === this.map && (this.map = new Map),
                null !== this.cloneFrom && (this.cloneFrom.init(),
                this.cloneFrom.keys().forEach(t=>this.map.set(t, this.cloneFrom.map.get(t))),
                this.updates.forEach(t=>{
                    switch (t.op) {
                    case "a":
                    case "s":
                        const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                        e.push(Oh(t.value)),
                        this.map.set(t.param, e);
                        break;
                    case "d":
                        if (void 0 === t.value) {
                            this.map.delete(t.param);
                            break
                        }
                        {
                            let e = this.map.get(t.param) || [];
                            const n = e.indexOf(Oh(t.value));
                            -1 !== n && e.splice(n, 1),
                            e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                        }
                    }
                }
                ),
                this.cloneFrom = this.updates = null)
            }
        }
        class kh {
            constructor() {
                this.map = new Map
            }
            set(t, e) {
                return this.map.set(t, e),
                this
            }
            get(t) {
                return this.map.has(t) || this.map.set(t, t.defaultValue()),
                this.map.get(t)
            }
            delete(t) {
                return this.map.delete(t),
                this
            }
            keys() {
                return this.map.keys()
            }
        }
        function Eh(t) {
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }
        function xh(t) {
            return "undefined" != typeof Blob && t instanceof Blob
        }
        function Dh(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        }
        class Vh {
            constructor(t, e, n, s) {
                let i;
                if (this.url = e,
                this.body = null,
                this.reportProgress = !1,
                this.withCredentials = !1,
                this.responseType = "json",
                this.method = t.toUpperCase(),
                function(t) {
                    switch (t) {
                    case "DELETE":
                    case "GET":
                    case "HEAD":
                    case "OPTIONS":
                    case "JSONP":
                        return !1;
                    default:
                        return !0
                    }
                }(this.method) || s ? (this.body = void 0 !== n ? n : null,
                i = s) : i = n,
                i && (this.reportProgress = !!i.reportProgress,
                this.withCredentials = !!i.withCredentials,
                i.responseType && (this.responseType = i.responseType),
                i.headers && (this.headers = i.headers),
                i.context && (this.context = i.context),
                i.params && (this.params = i.params)),
                this.headers || (this.headers = new wh),
                this.context || (this.context = new kh),
                this.params) {
                    const t = this.params.toString();
                    if (0 === t.length)
                        this.urlWithParams = e;
                    else {
                        const n = e.indexOf("?");
                        this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
                    }
                } else
                    this.params = new Ch,
                    this.urlWithParams = e
            }
            serializeBody() {
                return null === this.body ? null : Eh(this.body) || xh(this.body) || Dh(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Ch ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
            }
            detectContentTypeHeader() {
                return null === this.body || Dh(this.body) ? null : xh(this.body) ? this.body.type || null : Eh(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Ch ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null
            }
            clone(t={}) {
                var e;
                const n = t.method || this.method
                  , s = t.url || this.url
                  , i = t.responseType || this.responseType
                  , r = void 0 !== t.body ? t.body : this.body
                  , o = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials
                  , a = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
                let l = t.headers || this.headers
                  , c = t.params || this.params;
                const h = null !== (e = t.context) && void 0 !== e ? e : this.context;
                return void 0 !== t.setHeaders && (l = Object.keys(t.setHeaders).reduce((e,n)=>e.set(n, t.setHeaders[n]), l)),
                t.setParams && (c = Object.keys(t.setParams).reduce((e,n)=>e.set(n, t.setParams[n]), c)),
                new Vh(n,s,r,{
                    params: c,
                    headers: l,
                    context: h,
                    reportProgress: a,
                    responseType: i,
                    withCredentials: o
                })
            }
        }
        var Fh = function(t) {
            return t[t.Sent = 0] = "Sent",
            t[t.UploadProgress = 1] = "UploadProgress",
            t[t.ResponseHeader = 2] = "ResponseHeader",
            t[t.DownloadProgress = 3] = "DownloadProgress",
            t[t.Response = 4] = "Response",
            t[t.User = 5] = "User",
            t
        }({});
        class Th {
            constructor(t, e=200, n="OK") {
                this.headers = t.headers || new wh,
                this.status = void 0 !== t.status ? t.status : e,
                this.statusText = t.statusText || n,
                this.url = t.url || null,
                this.ok = this.status >= 200 && this.status < 300
            }
        }
        class Ph extends Th {
            constructor(t={}) {
                super(t),
                this.type = Fh.ResponseHeader
            }
            clone(t={}) {
                return new Ph({
                    headers: t.headers || this.headers,
                    status: void 0 !== t.status ? t.status : this.status,
                    statusText: t.statusText || this.statusText,
                    url: t.url || this.url || void 0
                })
            }
        }
        class Ih extends Th {
            constructor(t={}) {
                super(t),
                this.type = Fh.Response,
                this.body = void 0 !== t.body ? t.body : null
            }
            clone(t={}) {
                return new Ih({
                    body: void 0 !== t.body ? t.body : this.body,
                    headers: t.headers || this.headers,
                    status: void 0 !== t.status ? t.status : this.status,
                    statusText: t.statusText || this.statusText,
                    url: t.url || this.url || void 0
                })
            }
        }
        class Rh extends Th {
            constructor(t) {
                super(t, 0, "Unknown Error"),
                this.name = "HttpErrorResponse",
                this.ok = !1,
                this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${t.url || "(unknown url)"}` : `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`,
                this.error = t.error || null
            }
        }
        function Nh(t, e) {
            return {
                body: e,
                headers: t.headers,
                context: t.context,
                observe: t.observe,
                params: t.params,
                reportProgress: t.reportProgress,
                responseType: t.responseType,
                withCredentials: t.withCredentials
            }
        }
        let Wh = (()=>{
            class t {
                constructor(t) {
                    this.handler = t
                }
                request(t, e, n={}) {
                    let s;
                    if (t instanceof Vh)
                        s = t;
                    else {
                        let i, r;
                        i = n.headers instanceof wh ? n.headers : new wh(n.headers),
                        n.params && (r = n.params instanceof Ch ? n.params : new Ch({
                            fromObject: n.params
                        })),
                        s = new Vh(t,e,void 0 !== n.body ? n.body : null,{
                            headers: i,
                            context: n.context,
                            params: r,
                            reportProgress: n.reportProgress,
                            responseType: n.responseType || "json",
                            withCredentials: n.withCredentials
                        })
                    }
                    const i = fh(s).pipe(j(t=>this.handler.handle(t), void 0, 1));
                    if (t instanceof Vh || "events" === n.observe)
                        return i;
                    const r = i.pipe(gh(t=>t instanceof Ih));
                    switch (n.observe || "body") {
                    case "body":
                        switch (s.responseType) {
                        case "arraybuffer":
                            return r.pipe(k(t=>{
                                if (null !== t.body && !(t.body instanceof ArrayBuffer))
                                    throw new Error("Response is not an ArrayBuffer.");
                                return t.body
                            }
                            ));
                        case "blob":
                            return r.pipe(k(t=>{
                                if (null !== t.body && !(t.body instanceof Blob))
                                    throw new Error("Response is not a Blob.");
                                return t.body
                            }
                            ));
                        case "text":
                            return r.pipe(k(t=>{
                                if (null !== t.body && "string" != typeof t.body)
                                    throw new Error("Response is not a string.");
                                return t.body
                            }
                            ));
                        case "json":
                        default:
                            return r.pipe(k(t=>t.body))
                        }
                    case "response":
                        return r;
                    default:
                        throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
                    }
                }
                delete(t, e={}) {
                    return this.request("DELETE", t, e)
                }
                get(t, e={}) {
                    return this.request("GET", t, e)
                }
                head(t, e={}) {
                    return this.request("HEAD", t, e)
                }
                jsonp(t, e) {
                    return this.request("JSONP", t, {
                        params: (new Ch).append(e, "JSONP_CALLBACK"),
                        observe: "body",
                        responseType: "json"
                    })
                }
                options(t, e={}) {
                    return this.request("OPTIONS", t, e)
                }
                patch(t, e, n={}) {
                    return this.request("PATCH", t, Nh(n, e))
                }
                post(t, e, n={}) {
                    return this.request("POST", t, Nh(n, e))
                }
                put(t, e, n={}) {
                    return this.request("PUT", t, Nh(n, e))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(vh))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class Mh {
            constructor(t, e) {
                this.next = t,
                this.interceptor = e
            }
            handle(t) {
                return this.interceptor.intercept(t, this.next)
            }
        }
        const Lh = new Mn("HTTP_INTERCEPTORS");
        let jh = (()=>{
            class t {
                intercept(t, e) {
                    return e.handle(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const Bh = /^\)\]\}',?\n/;
        let Hh = (()=>{
            class t {
                constructor(t) {
                    this.xhrFactory = t
                }
                handle(t) {
                    if ("JSONP" === t.method)
                        throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
                    return new y(e=>{
                        const n = this.xhrFactory.build();
                        if (n.open(t.method, t.urlWithParams),
                        t.withCredentials && (n.withCredentials = !0),
                        t.headers.forEach((t,e)=>n.setRequestHeader(t, e.join(","))),
                        t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"),
                        !t.headers.has("Content-Type")) {
                            const e = t.detectContentTypeHeader();
                            null !== e && n.setRequestHeader("Content-Type", e)
                        }
                        if (t.responseType) {
                            const e = t.responseType.toLowerCase();
                            n.responseType = "json" !== e ? e : "text"
                        }
                        const s = t.serializeBody();
                        let i = null;
                        const r = ()=>{
                            if (null !== i)
                                return i;
                            const e = 1223 === n.status ? 204 : n.status
                              , s = n.statusText || "OK"
                              , r = new wh(n.getAllResponseHeaders())
                              , o = function(t) {
                                return "responseURL"in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                            }(n) || t.url;
                            return i = new Ph({
                                headers: r,
                                status: e,
                                statusText: s,
                                url: o
                            }),
                            i
                        }
                          , o = ()=>{
                            let {headers: s, status: i, statusText: o, url: a} = r()
                              , l = null;
                            204 !== i && (l = void 0 === n.response ? n.responseText : n.response),
                            0 === i && (i = l ? 200 : 0);
                            let c = i >= 200 && i < 300;
                            if ("json" === t.responseType && "string" == typeof l) {
                                const t = l;
                                l = l.replace(Bh, "");
                                try {
                                    l = "" !== l ? JSON.parse(l) : null
                                } catch (h) {
                                    l = t,
                                    c && (c = !1,
                                    l = {
                                        error: h,
                                        text: l
                                    })
                                }
                            }
                            c ? (e.next(new Ih({
                                body: l,
                                headers: s,
                                status: i,
                                statusText: o,
                                url: a || void 0
                            })),
                            e.complete()) : e.error(new Rh({
                                error: l,
                                headers: s,
                                status: i,
                                statusText: o,
                                url: a || void 0
                            }))
                        }
                          , a = t=>{
                            const {url: s} = r()
                              , i = new Rh({
                                error: t,
                                status: n.status || 0,
                                statusText: n.statusText || "Unknown Error",
                                url: s || void 0
                            });
                            e.error(i)
                        }
                        ;
                        let l = !1;
                        const c = s=>{
                            l || (e.next(r()),
                            l = !0);
                            let i = {
                                type: Fh.DownloadProgress,
                                loaded: s.loaded
                            };
                            s.lengthComputable && (i.total = s.total),
                            "text" === t.responseType && n.responseText && (i.partialText = n.responseText),
                            e.next(i)
                        }
                          , h = t=>{
                            let n = {
                                type: Fh.UploadProgress,
                                loaded: t.loaded
                            };
                            t.lengthComputable && (n.total = t.total),
                            e.next(n)
                        }
                        ;
                        return n.addEventListener("load", o),
                        n.addEventListener("error", a),
                        n.addEventListener("timeout", a),
                        n.addEventListener("abort", a),
                        t.reportProgress && (n.addEventListener("progress", c),
                        null !== s && n.upload && n.upload.addEventListener("progress", h)),
                        n.send(s),
                        e.next({
                            type: Fh.Sent
                        }),
                        ()=>{
                            n.removeEventListener("error", a),
                            n.removeEventListener("abort", a),
                            n.removeEventListener("load", o),
                            n.removeEventListener("timeout", a),
                            t.reportProgress && (n.removeEventListener("progress", c),
                            null !== s && n.upload && n.upload.removeEventListener("progress", h)),
                            n.readyState !== n.DONE && n.abort()
                        }
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Ec))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const $h = new Mn("XSRF_COOKIE_NAME")
          , Uh = new Mn("XSRF_HEADER_NAME");
        class zh {
        }
        let qh = (()=>{
            class t {
                constructor(t, e, n) {
                    this.doc = t,
                    this.platform = e,
                    this.cookieName = n,
                    this.lastCookieString = "",
                    this.lastToken = null,
                    this.parseCount = 0
                }
                getToken() {
                    if ("server" === this.platform)
                        return null;
                    const t = this.doc.cookie || "";
                    return t !== this.lastCookieString && (this.parseCount++,
                    this.lastToken = _c(t, this.cookieName),
                    this.lastCookieString = t),
                    this.lastToken
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl),Jn(sl),Jn($h))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Xh = (()=>{
            class t {
                constructor(t, e) {
                    this.tokenService = t,
                    this.headerName = e
                }
                intercept(t, e) {
                    const n = t.url.toLowerCase();
                    if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://"))
                        return e.handle(t);
                    const s = this.tokenService.getToken();
                    return null === s || t.headers.has(this.headerName) || (t = t.clone({
                        headers: t.headers.set(this.headerName, s)
                    })),
                    e.handle(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zh),Jn(Uh))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Qh = (()=>{
            class t {
                constructor(t, e) {
                    this.backend = t,
                    this.injector = e,
                    this.chain = null
                }
                handle(t) {
                    if (null === this.chain) {
                        const t = this.injector.get(Lh, []);
                        this.chain = t.reduceRight((t,e)=>new Mh(t,e), this.backend)
                    }
                    return this.chain.handle(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(bh),Jn(lr))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Kh = (()=>{
            class t {
                static disable() {
                    return {
                        ngModule: t,
                        providers: [{
                            provide: Xh,
                            useClass: jh
                        }]
                    }
                }
                static withOptions(e={}) {
                    return {
                        ngModule: t,
                        providers: [e.cookieName ? {
                            provide: $h,
                            useValue: e.cookieName
                        } : [], e.headerName ? {
                            provide: Uh,
                            useValue: e.headerName
                        } : []]
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: [Xh, {
                    provide: Lh,
                    useExisting: Xh,
                    multi: !0
                }, {
                    provide: zh,
                    useClass: qh
                }, {
                    provide: $h,
                    useValue: "XSRF-TOKEN"
                }, {
                    provide: Uh,
                    useValue: "X-XSRF-TOKEN"
                }]
            }),
            t
        }
        )()
          , Zh = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: [Wh, {
                    provide: vh,
                    useClass: Qh
                }, Hh, {
                    provide: bh,
                    useExisting: Hh
                }],
                imports: [[Kh.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN"
                })]]
            }),
            t
        }
        )()
          , Gh = (()=>{
            class t {
                constructor(t) {
                    this.http = t,
                    this.urlApiAOFF = "https://wax.alcor.exchange/api/markets/456",
                    this.urlApiAOFS = "https://wax.alcor.exchange/api/markets/455",
                    this.urlApiAOFW = "https://wax.alcor.exchange/api/markets/454",
                    this.urlApiWAX = "https://api.binance.com/api/v3/ticker/price?symbol=WAXPUSDT",
                    this.urlApiAlcor = "https://wax.alcor.exchange/api/markets",
                    this.urlApiAccountGlobal = "https://lightapi.eosamsterdam.net/api/balances/wax/",
                    this.urlApiFW = "https://wax.pink.gg/v1/chain/get_table_rows"
                }
                getAOFFApi() {
                    return this.http.get(this.urlApiAOFF)
                }
                getAOFWApi() {
                    return this.http.get(this.urlApiAOFW)
                }
                getAOFSApi() {
                    return this.http.get(this.urlApiAOFS)
                }
                getAccountGlobalApi(t) {
                    return this.http.get(this.urlApiAccountGlobal + t)
                }
                getWaxApi() {
                    return this.http.get(this.urlApiWAX)
                }
                getalcorApi() {
                    return this.http.get(this.urlApiAlcor)
                }
                getCurrentPlayer(t) {
                    let e = {
                        code: "ageoffarming",
                        index_position: 1,
                        json: !0,
                        key_type: "name",
                        limit: 10,
                        lower_bound: t,
                        reverse: !1,
                        scope: "ageoffarming",
                        show_payer: !1,
                        table: "usrs",
                        upper_bound: t
                    };
                    const n = (new wh).set("Content-Type", "text/plain");
                    return this.http.post("https://api.wax.alohaeos.com/v1/chain/get_table_rows", e, {
                        headers: n
                    })
                }
                getItemsPlayer(t) {
                    let e = {
                        code: "ageoffarming",
                        index_position: 2,
                        json: !0,
                        key_type: "name",
                        limit: 10,
                        lower_bound: t,
                        reverse: !1,
                        scope: "ageoffarming",
                        show_payer: !1,
                        table: "nfts",
                        upper_bound: t
                    };
                    const n = (new wh).set("Content-Type", "text/plain");
                    return this.http.post("https://api.wax.alohaeos.com/v1/chain/get_table_rows", e, {
                        headers: n
                    })
                }
                getConfigsItem() {
                    const t = (new wh).set("Content-Type", "text/plain");
                    return this.http.post("https://api.wax.alohaeos.com/v1/chain/get_table_rows", {
                        code: "ageoffarming",
                        index_position: 1,
                        json: !0,
                        key_type: "",
                        limit: "100",
                        lower_bound: null,
                        reverse: !1,
                        scope: "ageoffarming",
                        show_payer: !1,
                        table: "toolsconfigs",
                        upper_bound: null
                    }, {
                        headers: t
                    }).toPromise()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Wh))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )()
          , Yh = (()=>{
            class t {
                constructor() {
                    this.accountWamID = void 0,
                    this.showAccount = !1,
                    this.ActionDay = 24,
                    this.change = new Ra,
                    this.changeMap = new Ra
                }
                setAccountWamID(t) {
                    this.accountWamID = t
                }
                setActionDay(t) {
                    this.ActionDay = t,
                    this.change.emit(this.ActionDay)
                }
                getActionDay() {
                    return this.ActionDay
                }
                getAccountWamID() {
                    return this.accountWamID
                }
                setShowAccount(t) {
                    this.showAccount = t
                }
                getShowAccount() {
                    return this.showAccount
                }
                getStoneAxeCommon() {
                    return this._stoneAxeCommon
                }
                setStoneAxeCommon(t) {
                    this._stoneAxeCommon = t
                }
                getStoneAxeUncommon() {
                    return this._stoneAxeUncommon
                }
                setStoneAxeUncommon(t) {
                    this._stoneAxeUncommon = t
                }
                getStoneAxeRare() {
                    return this._stoneAxeRare
                }
                setStoneAxeRare(t) {
                    this._stoneAxeRare = t
                }
                getStoneAxeEpic() {
                    return this._stoneAxeEpic
                }
                setStoneAxeEpic(t) {
                    this._stoneAxeEpic = t
                }
                getStoneAxeLegendary() {
                    return this._stoneAxeLegendary
                }
                setStoneAxeLegendary(t) {
                    this._stoneAxeLegendary = t
                }
                getStonePickCommon() {
                    return this._stonePickCommon
                }
                setStonePickCommon(t) {
                    this._stonePickCommon = t
                }
                getStonePickUncommon() {
                    return this._stonePickUncommon
                }
                setStonePickUncommon(t) {
                    this._stonePickUncommon = t
                }
                getStonePickRare() {
                    return this._stonePickRare
                }
                setStonePickRare(t) {
                    this._stonePickRare = t
                }
                getStonePickEpic() {
                    return this._stonePickEpic
                }
                setStonePickEpic(t) {
                    this._stonePickEpic = t
                }
                getStonePickLegendary() {
                    return this._stonePickLegendary
                }
                setStonePickLegendary(t) {
                    this._stonePickLegendary = t
                }
                getStoneSpearCommon() {
                    return this._stoneSpearCommon
                }
                setStoneSpearCommon(t) {
                    this._stoneSpearCommon = t
                }
                getStoneSpearUncommon() {
                    return this._stoneSpearUncommon
                }
                setStoneSpearUncommon(t) {
                    this._stoneSpearUncommon = t
                }
                getStoneSpearRare() {
                    return this._stoneSpearRare
                }
                setStoneSpearRare(t) {
                    this._stoneSpearRare = t
                }
                getStoneSpearEpic() {
                    return this._stoneSpearEpic
                }
                setStoneSpearEpic(t) {
                    this._stoneSpearEpic = t
                }
                getStoneSpearLegendary() {
                    return this._stoneSpearLegendary
                }
                setStoneSpearLegendary(t) {
                    this._stoneSpearLegendary = t
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Jh = (()=>{
            class t {
                constructor() {}
                ngOnInit() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-header"]],
                inputs: {
                    ValueAOFF: "ValueAOFF",
                    ValueAOFW: "ValueAOFW",
                    ValueAOFS: "ValueAOFS",
                    ValueWAX: "ValueWAX"
                },
                decls: 24,
                vars: 16,
                consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-black", "fixed-top"], [1, "container-fluid"], [2, "text-align", "center", "display", "inline", "flex", "inherit", "color", "white", "bold", "100"], [1, "list-inline"], [1, "alert", "alert-light", "p-1", "m-0", "fw_topBox", 2, "display", "inline"], ["id", "waxp_usdt"], [1, "alert", "alert-light", "p-1", "m-0", "fw_topBox", "token_FWW", 2, "display", "inline"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 1, "mr-1", 2, "height", "18px"], ["id", "FWW_waxp"], [1, "alert", "alert-light", "p-1", "m-0", "fw_topBox", "token_FWG", 2, "display", "inline"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 1, "mr-1", 2, "height", "18px"], ["id", "FWG_waxp"], [1, "alert", "alert-light", "p-1", "m-0", "fw_topBox", "token_FWF", 2, "display", "inline"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aoff.png", 1, "mr-1", 2, "height", "18px"], ["id", "FWF_waxp"]],
                template: function(t, e) {
                    1 & t && (Er(0, "header"),
                    Er(1, "nav", 0),
                    Er(2, "div", 1),
                    Er(3, "div", 2),
                    Er(4, "div", 3),
                    Er(5, "div", 4),
                    Er(6, "strong", 5),
                    lo(7),
                    Ta(8, "number"),
                    xr(),
                    xr(),
                    Er(9, "div", 6),
                    Dr(10, "img", 7),
                    Er(11, "strong", 8),
                    lo(12),
                    Ta(13, "number"),
                    xr(),
                    xr(),
                    Er(14, "div", 9),
                    Dr(15, "img", 10),
                    Er(16, "strong", 11),
                    lo(17),
                    Ta(18, "number"),
                    xr(),
                    xr(),
                    Er(19, "div", 12),
                    Dr(20, "img", 13),
                    Er(21, "strong", 14),
                    lo(22),
                    Ta(23, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr()),
                    2 & t && (Ys(7),
                    ho("1\uffe6 = ", Pa(8, 4, e.ValueWAX, "1.3-4"), "$"),
                    Ys(5),
                    ho(" ", Pa(13, 7, e.ValueAOFW, "1.3-4"), ""),
                    Ys(5),
                    ho(" ", Pa(18, 10, e.ValueAOFS, "1.3-4"), ""),
                    Ys(5),
                    ho(" ", Pa(23, 13, e.ValueAOFF, "1.3-4"), ""))
                },
                pipes: [Cc],
                styles: [".fw_topBox[_ngcontent-%COMP%]{border:1px solid #e94d40;min-width:65px;font-size:.75em}.p-1[_ngcontent-%COMP%]{padding:.25rem!important}.m-0[_ngcontent-%COMP%]{margin:0!important}.token_FWF[_ngcontent-%COMP%]{color:#d27f12!important;border:2px solid #c57b0a}.token_FWW[_ngcontent-%COMP%]{color:#653404!important;border:2px solid #5e3a03}.token_FWG[_ngcontent-%COMP%]{color:#868686!important;border:2px solid #868686}.fw_fee_unk[_ngcontent-%COMP%]{background-color:#414141!important}.fw_fee_5[_ngcontent-%COMP%], .fw_fee_unk[_ngcontent-%COMP%]{padding:5px;color:#fff}.fw_fee_5[_ngcontent-%COMP%]{background-color:#008c38!important}.fw_fee_6[_ngcontent-%COMP%]{background-color:#9aad00!important}.fw_fee_6[_ngcontent-%COMP%], .fw_fee_7[_ngcontent-%COMP%]{padding:5px;color:#fff}.fw_fee_7[_ngcontent-%COMP%]{background-color:#da4600!important}.fw_fee_8[_ngcontent-%COMP%]{padding:5px;background-color:red!important;color:#fff}"]
            }),
            t
        }
        )();
        function tu(t, e) {
            return new y(n=>{
                const s = t.length;
                if (0 === s)
                    return void n.complete();
                const i = new Array(s);
                let r = 0
                  , o = 0;
                for (let a = 0; a < s; a++) {
                    const l = N(t[a]);
                    let c = !1;
                    n.add(l.subscribe({
                        next: t=>{
                            c || (c = !0,
                            o++),
                            i[a] = t
                        }
                        ,
                        error: t=>n.error(t),
                        complete: ()=>{
                            r++,
                            r !== s && c || (o === s && n.next(e ? e.reduce((t,e,n)=>(t[e] = i[n],
                            t), {}) : i),
                            n.complete())
                        }
                    }))
                }
            }
            )
        }
        let eu = (()=>{
            class t {
                constructor(t, e) {
                    this._renderer = t,
                    this._elementRef = e,
                    this.onChange = t=>{}
                    ,
                    this.onTouched = ()=>{}
                }
                setProperty(t, e) {
                    this._renderer.setProperty(this._elementRef.nativeElement, t, e)
                }
                registerOnTouched(t) {
                    this.onTouched = t
                }
                registerOnChange(t) {
                    this.onChange = t
                }
                setDisabledState(t) {
                    this.setProperty("disabled", t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Lo),Or(No))
            }
            ,
            t.\u0275dir = Xt({
                type: t
            }),
            t
        }
        )()
          , nu = (()=>{
            class t extends eu {
            }
            return t.\u0275fac = function() {
                let e;
                return function(n) {
                    return (e || (e = In(t)))(n || t)
                }
            }(),
            t.\u0275dir = Xt({
                type: t,
                features: [hr]
            }),
            t
        }
        )();
        const su = new Mn("NgValueAccessor")
          , iu = {
            provide: su,
            useExisting: st(()=>ou),
            multi: !0
        }
          , ru = new Mn("CompositionEventMode");
        let ou = (()=>{
            class t extends eu {
                constructor(t, e, n) {
                    super(t, e),
                    this._compositionMode = n,
                    this._composing = !1,
                    null == this._compositionMode && (this._compositionMode = !function() {
                        const t = Ul() ? Ul().getUserAgent() : "";
                        return /android (\d+)/.test(t.toLowerCase())
                    }())
                }
                writeValue(t) {
                    this.setProperty("value", null == t ? "" : t)
                }
                _handleInput(t) {
                    (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
                }
                _compositionStart() {
                    this._composing = !0
                }
                _compositionEnd(t) {
                    this._composing = !1,
                    this._compositionMode && this.onChange(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Lo),Or(No),Or(ru, 8))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
                hostBindings: function(t, e) {
                    1 & t && Tr("input", function(t) {
                        return e._handleInput(t.target.value)
                    })("blur", function() {
                        return e.onTouched()
                    })("compositionstart", function() {
                        return e._compositionStart()
                    })("compositionend", function(t) {
                        return e._compositionEnd(t.target.value)
                    })
                },
                features: [Do([iu]), hr]
            }),
            t
        }
        )();
        const au = new Mn("NgValidators")
          , lu = new Mn("NgAsyncValidators");
        function cu(t) {
            return null != t
        }
        function hu(t) {
            const e = Vr(t) ? N(t) : t;
            return Fr(e),
            e
        }
        function uu(t) {
            let e = {};
            return t.forEach(t=>{
                e = null != t ? Object.assign(Object.assign({}, e), t) : e
            }
            ),
            0 === Object.keys(e).length ? null : e
        }
        function du(t, e) {
            return e.map(e=>e(t))
        }
        function pu(t) {
            return t.map(t=>function(t) {
                return !t.validate
            }(t) ? t : e=>t.validate(e))
        }
        function mu(t) {
            return null != t ? function(t) {
                if (!t)
                    return null;
                const e = t.filter(cu);
                return 0 == e.length ? null : function(t) {
                    return uu(du(t, e))
                }
            }(pu(t)) : null
        }
        function fu(t) {
            return null != t ? function(t) {
                if (!t)
                    return null;
                const e = t.filter(cu);
                return 0 == e.length ? null : function(t) {
                    return function(...t) {
                        if (1 === t.length) {
                            const e = t[0];
                            if (l(e))
                                return tu(e, null);
                            if (c(e) && Object.getPrototypeOf(e) === Object.prototype) {
                                const t = Object.keys(e);
                                return tu(t.map(t=>e[t]), t)
                            }
                        }
                        if ("function" == typeof t[t.length - 1]) {
                            const e = t.pop();
                            return tu(t = 1 === t.length && l(t[0]) ? t[0] : t, null).pipe(k(t=>e(...t)))
                        }
                        return tu(t, null)
                    }(du(t, e).map(hu)).pipe(k(uu))
                }
            }(pu(t)) : null
        }
        function gu(t, e) {
            return null === t ? [e] : Array.isArray(t) ? [...t, e] : [t, e]
        }
        let _u = (()=>{
            class t {
                constructor() {
                    this._rawValidators = [],
                    this._rawAsyncValidators = [],
                    this._onDestroyCallbacks = []
                }
                get value() {
                    return this.control ? this.control.value : null
                }
                get valid() {
                    return this.control ? this.control.valid : null
                }
                get invalid() {
                    return this.control ? this.control.invalid : null
                }
                get pending() {
                    return this.control ? this.control.pending : null
                }
                get disabled() {
                    return this.control ? this.control.disabled : null
                }
                get enabled() {
                    return this.control ? this.control.enabled : null
                }
                get errors() {
                    return this.control ? this.control.errors : null
                }
                get pristine() {
                    return this.control ? this.control.pristine : null
                }
                get dirty() {
                    return this.control ? this.control.dirty : null
                }
                get touched() {
                    return this.control ? this.control.touched : null
                }
                get status() {
                    return this.control ? this.control.status : null
                }
                get untouched() {
                    return this.control ? this.control.untouched : null
                }
                get statusChanges() {
                    return this.control ? this.control.statusChanges : null
                }
                get valueChanges() {
                    return this.control ? this.control.valueChanges : null
                }
                get path() {
                    return null
                }
                _setValidators(t) {
                    this._rawValidators = t || [],
                    this._composedValidatorFn = mu(this._rawValidators)
                }
                _setAsyncValidators(t) {
                    this._rawAsyncValidators = t || [],
                    this._composedAsyncValidatorFn = fu(this._rawAsyncValidators)
                }
                get validator() {
                    return this._composedValidatorFn || null
                }
                get asyncValidator() {
                    return this._composedAsyncValidatorFn || null
                }
                _registerOnDestroy(t) {
                    this._onDestroyCallbacks.push(t)
                }
                _invokeOnDestroyCallbacks() {
                    this._onDestroyCallbacks.forEach(t=>t()),
                    this._onDestroyCallbacks = []
                }
                reset(t) {
                    this.control && this.control.reset(t)
                }
                hasError(t, e) {
                    return !!this.control && this.control.hasError(t, e)
                }
                getError(t, e) {
                    return this.control ? this.control.getError(t, e) : null
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275dir = Xt({
                type: t
            }),
            t
        }
        )()
          , yu = (()=>{
            class t extends _u {
                get formDirective() {
                    return null
                }
                get path() {
                    return null
                }
            }
            return t.\u0275fac = function() {
                let e;
                return function(n) {
                    return (e || (e = In(t)))(n || t)
                }
            }(),
            t.\u0275dir = Xt({
                type: t,
                features: [hr]
            }),
            t
        }
        )();
        class vu extends _u {
            constructor() {
                super(...arguments),
                this._parent = null,
                this.name = null,
                this.valueAccessor = null
            }
        }
        let bu = (()=>{
            class t extends class {
                constructor(t) {
                    this._cd = t
                }
                is(t) {
                    var e, n;
                    return !!(null === (n = null === (e = this._cd) || void 0 === e ? void 0 : e.control) || void 0 === n ? void 0 : n[t])
                }
            }
            {
                constructor(t) {
                    super(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(vu, 2))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
                hostVars: 14,
                hostBindings: function(t, e) {
                    2 & t && Kr("ng-untouched", e.is("untouched"))("ng-touched", e.is("touched"))("ng-pristine", e.is("pristine"))("ng-dirty", e.is("dirty"))("ng-valid", e.is("valid"))("ng-invalid", e.is("invalid"))("ng-pending", e.is("pending"))
                },
                features: [hr]
            }),
            t
        }
        )();
        function wu(t, e) {
            t.forEach(t=>{
                t.registerOnValidatorChange && t.registerOnValidatorChange(e)
            }
            )
        }
        function Au(t, e) {
            t._pendingDirty && t.markAsDirty(),
            t.setValue(t._pendingValue, {
                emitModelToViewChange: !1
            }),
            e.viewToModelUpdate(t._pendingValue),
            t._pendingChange = !1
        }
        function Su(t, e) {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        const Ou = "VALID"
          , Cu = "INVALID"
          , ku = "PENDING"
          , Eu = "DISABLED";
        function xu(t) {
            return (Tu(t) ? t.validators : t) || null
        }
        function Du(t) {
            return Array.isArray(t) ? mu(t) : t || null
        }
        function Vu(t, e) {
            return (Tu(e) ? e.asyncValidators : t) || null
        }
        function Fu(t) {
            return Array.isArray(t) ? fu(t) : t || null
        }
        function Tu(t) {
            return null != t && !Array.isArray(t) && "object" == typeof t
        }
        class Pu {
            constructor(t, e) {
                this._hasOwnPendingAsyncValidator = !1,
                this._onCollectionChange = ()=>{}
                ,
                this._parent = null,
                this.pristine = !0,
                this.touched = !1,
                this._onDisabledChange = [],
                this._rawValidators = t,
                this._rawAsyncValidators = e,
                this._composedValidatorFn = Du(this._rawValidators),
                this._composedAsyncValidatorFn = Fu(this._rawAsyncValidators)
            }
            get validator() {
                return this._composedValidatorFn
            }
            set validator(t) {
                this._rawValidators = this._composedValidatorFn = t
            }
            get asyncValidator() {
                return this._composedAsyncValidatorFn
            }
            set asyncValidator(t) {
                this._rawAsyncValidators = this._composedAsyncValidatorFn = t
            }
            get parent() {
                return this._parent
            }
            get valid() {
                return this.status === Ou
            }
            get invalid() {
                return this.status === Cu
            }
            get pending() {
                return this.status == ku
            }
            get disabled() {
                return this.status === Eu
            }
            get enabled() {
                return this.status !== Eu
            }
            get dirty() {
                return !this.pristine
            }
            get untouched() {
                return !this.touched
            }
            get updateOn() {
                return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
            }
            setValidators(t) {
                this._rawValidators = t,
                this._composedValidatorFn = Du(t)
            }
            setAsyncValidators(t) {
                this._rawAsyncValidators = t,
                this._composedAsyncValidatorFn = Fu(t)
            }
            clearValidators() {
                this.validator = null
            }
            clearAsyncValidators() {
                this.asyncValidator = null
            }
            markAsTouched(t={}) {
                this.touched = !0,
                this._parent && !t.onlySelf && this._parent.markAsTouched(t)
            }
            markAllAsTouched() {
                this.markAsTouched({
                    onlySelf: !0
                }),
                this._forEachChild(t=>t.markAllAsTouched())
            }
            markAsUntouched(t={}) {
                this.touched = !1,
                this._pendingTouched = !1,
                this._forEachChild(t=>{
                    t.markAsUntouched({
                        onlySelf: !0
                    })
                }
                ),
                this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }
            markAsDirty(t={}) {
                this.pristine = !1,
                this._parent && !t.onlySelf && this._parent.markAsDirty(t)
            }
            markAsPristine(t={}) {
                this.pristine = !0,
                this._pendingDirty = !1,
                this._forEachChild(t=>{
                    t.markAsPristine({
                        onlySelf: !0
                    })
                }
                ),
                this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }
            markAsPending(t={}) {
                this.status = ku,
                !1 !== t.emitEvent && this.statusChanges.emit(this.status),
                this._parent && !t.onlySelf && this._parent.markAsPending(t)
            }
            disable(t={}) {
                const e = this._parentMarkedDirty(t.onlySelf);
                this.status = Eu,
                this.errors = null,
                this._forEachChild(e=>{
                    e.disable(Object.assign(Object.assign({}, t), {
                        onlySelf: !0
                    }))
                }
                ),
                this._updateValue(),
                !1 !== t.emitEvent && (this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._updateAncestors(Object.assign(Object.assign({}, t), {
                    skipPristineCheck: e
                })),
                this._onDisabledChange.forEach(t=>t(!0))
            }
            enable(t={}) {
                const e = this._parentMarkedDirty(t.onlySelf);
                this.status = Ou,
                this._forEachChild(e=>{
                    e.enable(Object.assign(Object.assign({}, t), {
                        onlySelf: !0
                    }))
                }
                ),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                }),
                this._updateAncestors(Object.assign(Object.assign({}, t), {
                    skipPristineCheck: e
                })),
                this._onDisabledChange.forEach(t=>t(!1))
            }
            _updateAncestors(t) {
                this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t),
                t.skipPristineCheck || this._parent._updatePristine(),
                this._parent._updateTouched())
            }
            setParent(t) {
                this._parent = t
            }
            updateValueAndValidity(t={}) {
                this._setInitialStatus(),
                this._updateValue(),
                this.enabled && (this._cancelExistingSubscription(),
                this.errors = this._runValidator(),
                this.status = this._calculateStatus(),
                this.status !== Ou && this.status !== ku || this._runAsyncValidator(t.emitEvent)),
                !1 !== t.emitEvent && (this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
            }
            _updateTreeValidity(t={
                emitEvent: !0
            }) {
                this._forEachChild(e=>e._updateTreeValidity(t)),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }
            _setInitialStatus() {
                this.status = this._allControlsDisabled() ? Eu : Ou
            }
            _runValidator() {
                return this.validator ? this.validator(this) : null
            }
            _runAsyncValidator(t) {
                if (this.asyncValidator) {
                    this.status = ku,
                    this._hasOwnPendingAsyncValidator = !0;
                    const e = hu(this.asyncValidator(this));
                    this._asyncValidationSubscription = e.subscribe(e=>{
                        this._hasOwnPendingAsyncValidator = !1,
                        this.setErrors(e, {
                            emitEvent: t
                        })
                    }
                    )
                }
            }
            _cancelExistingSubscription() {
                this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(),
                this._hasOwnPendingAsyncValidator = !1)
            }
            setErrors(t, e={}) {
                this.errors = t,
                this._updateControlsErrors(!1 !== e.emitEvent)
            }
            get(t) {
                return function(t, e, n) {
                    if (null == e)
                        return null;
                    if (Array.isArray(e) || (e = e.split(".")),
                    Array.isArray(e) && 0 === e.length)
                        return null;
                    let s = t;
                    return e.forEach(t=>{
                        s = s instanceof Ru ? s.controls.hasOwnProperty(t) ? s.controls[t] : null : s instanceof Nu && s.at(t) || null
                    }
                    ),
                    s
                }(this, t)
            }
            getError(t, e) {
                const n = e ? this.get(e) : this;
                return n && n.errors ? n.errors[t] : null
            }
            hasError(t, e) {
                return !!this.getError(t, e)
            }
            get root() {
                let t = this;
                for (; t._parent; )
                    t = t._parent;
                return t
            }
            _updateControlsErrors(t) {
                this.status = this._calculateStatus(),
                t && this.statusChanges.emit(this.status),
                this._parent && this._parent._updateControlsErrors(t)
            }
            _initObservables() {
                this.valueChanges = new Ra,
                this.statusChanges = new Ra
            }
            _calculateStatus() {
                return this._allControlsDisabled() ? Eu : this.errors ? Cu : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ku) ? ku : this._anyControlsHaveStatus(Cu) ? Cu : Ou
            }
            _anyControlsHaveStatus(t) {
                return this._anyControls(e=>e.status === t)
            }
            _anyControlsDirty() {
                return this._anyControls(t=>t.dirty)
            }
            _anyControlsTouched() {
                return this._anyControls(t=>t.touched)
            }
            _updatePristine(t={}) {
                this.pristine = !this._anyControlsDirty(),
                this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }
            _updateTouched(t={}) {
                this.touched = this._anyControlsTouched(),
                this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }
            _isBoxedValue(t) {
                return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value"in t && "disabled"in t
            }
            _registerOnCollectionChange(t) {
                this._onCollectionChange = t
            }
            _setUpdateStrategy(t) {
                Tu(t) && null != t.updateOn && (this._updateOn = t.updateOn)
            }
            _parentMarkedDirty(t) {
                return !t && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty()
            }
        }
        class Iu extends Pu {
            constructor(t=null, e, n) {
                super(xu(e), Vu(n, e)),
                this._onChange = [],
                this._applyFormState(t),
                this._setUpdateStrategy(e),
                this._initObservables(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            setValue(t, e={}) {
                this.value = this._pendingValue = t,
                this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(t=>t(this.value, !1 !== e.emitViewToModelChange)),
                this.updateValueAndValidity(e)
            }
            patchValue(t, e={}) {
                this.setValue(t, e)
            }
            reset(t=null, e={}) {
                this._applyFormState(t),
                this.markAsPristine(e),
                this.markAsUntouched(e),
                this.setValue(this.value, e),
                this._pendingChange = !1
            }
            _updateValue() {}
            _anyControls(t) {
                return !1
            }
            _allControlsDisabled() {
                return this.disabled
            }
            registerOnChange(t) {
                this._onChange.push(t)
            }
            _unregisterOnChange(t) {
                Su(this._onChange, t)
            }
            registerOnDisabledChange(t) {
                this._onDisabledChange.push(t)
            }
            _unregisterOnDisabledChange(t) {
                Su(this._onDisabledChange, t)
            }
            _forEachChild(t) {}
            _syncPendingControls() {
                return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(),
                this._pendingTouched && this.markAsTouched(),
                !this._pendingChange) || (this.setValue(this._pendingValue, {
                    onlySelf: !0,
                    emitModelToViewChange: !1
                }),
                0))
            }
            _applyFormState(t) {
                this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value,
                t.disabled ? this.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }) : this.enable({
                    onlySelf: !0,
                    emitEvent: !1
                })) : this.value = this._pendingValue = t
            }
        }
        class Ru extends Pu {
            constructor(t, e, n) {
                super(xu(e), Vu(n, e)),
                this.controls = t,
                this._initObservables(),
                this._setUpdateStrategy(e),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            registerControl(t, e) {
                return this.controls[t] ? this.controls[t] : (this.controls[t] = e,
                e.setParent(this),
                e._registerOnCollectionChange(this._onCollectionChange),
                e)
            }
            addControl(t, e, n={}) {
                this.registerControl(t, e),
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                }),
                this._onCollectionChange()
            }
            removeControl(t, e={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                delete this.controls[t],
                this.updateValueAndValidity({
                    emitEvent: e.emitEvent
                }),
                this._onCollectionChange()
            }
            setControl(t, e, n={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                delete this.controls[t],
                e && this.registerControl(t, e),
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                }),
                this._onCollectionChange()
            }
            contains(t) {
                return this.controls.hasOwnProperty(t) && this.controls[t].enabled
            }
            setValue(t, e={}) {
                this._checkAllValuesPresent(t),
                Object.keys(t).forEach(n=>{
                    this._throwIfControlMissing(n),
                    this.controls[n].setValue(t[n], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(e)
            }
            patchValue(t, e={}) {
                null != t && (Object.keys(t).forEach(n=>{
                    this.controls[n] && this.controls[n].patchValue(t[n], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(e))
            }
            reset(t={}, e={}) {
                this._forEachChild((n,s)=>{
                    n.reset(t[s], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }
                ),
                this._updatePristine(e),
                this._updateTouched(e),
                this.updateValueAndValidity(e)
            }
            getRawValue() {
                return this._reduceChildren({}, (t,e,n)=>(t[n] = e instanceof Iu ? e.value : e.getRawValue(),
                t))
            }
            _syncPendingControls() {
                let t = this._reduceChildren(!1, (t,e)=>!!e._syncPendingControls() || t);
                return t && this.updateValueAndValidity({
                    onlySelf: !0
                }),
                t
            }
            _throwIfControlMissing(t) {
                if (!Object.keys(this.controls).length)
                    throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.controls[t])
                    throw new Error(`Cannot find form control with name: ${t}.`)
            }
            _forEachChild(t) {
                Object.keys(this.controls).forEach(e=>{
                    const n = this.controls[e];
                    n && t(n, e)
                }
                )
            }
            _setUpControls() {
                this._forEachChild(t=>{
                    t.setParent(this),
                    t._registerOnCollectionChange(this._onCollectionChange)
                }
                )
            }
            _updateValue() {
                this.value = this._reduceValue()
            }
            _anyControls(t) {
                for (const e of Object.keys(this.controls)) {
                    const n = this.controls[e];
                    if (this.contains(e) && t(n))
                        return !0
                }
                return !1
            }
            _reduceValue() {
                return this._reduceChildren({}, (t,e,n)=>((e.enabled || this.disabled) && (t[n] = e.value),
                t))
            }
            _reduceChildren(t, e) {
                let n = t;
                return this._forEachChild((t,s)=>{
                    n = e(n, t, s)
                }
                ),
                n
            }
            _allControlsDisabled() {
                for (const t of Object.keys(this.controls))
                    if (this.controls[t].enabled)
                        return !1;
                return Object.keys(this.controls).length > 0 || this.disabled
            }
            _checkAllValuesPresent(t) {
                this._forEachChild((e,n)=>{
                    if (void 0 === t[n])
                        throw new Error(`Must supply a value for form control with name: '${n}'.`)
                }
                )
            }
        }
        class Nu extends Pu {
            constructor(t, e, n) {
                super(xu(e), Vu(n, e)),
                this.controls = t,
                this._initObservables(),
                this._setUpdateStrategy(e),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            at(t) {
                return this.controls[t]
            }
            push(t, e={}) {
                this.controls.push(t),
                this._registerControl(t),
                this.updateValueAndValidity({
                    emitEvent: e.emitEvent
                }),
                this._onCollectionChange()
            }
            insert(t, e, n={}) {
                this.controls.splice(t, 0, e),
                this._registerControl(e),
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                })
            }
            removeAt(t, e={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                this.controls.splice(t, 1),
                this.updateValueAndValidity({
                    emitEvent: e.emitEvent
                })
            }
            setControl(t, e, n={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                this.controls.splice(t, 1),
                e && (this.controls.splice(t, 0, e),
                this._registerControl(e)),
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                }),
                this._onCollectionChange()
            }
            get length() {
                return this.controls.length
            }
            setValue(t, e={}) {
                this._checkAllValuesPresent(t),
                t.forEach((t,n)=>{
                    this._throwIfControlMissing(n),
                    this.at(n).setValue(t, {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(e)
            }
            patchValue(t, e={}) {
                null != t && (t.forEach((t,n)=>{
                    this.at(n) && this.at(n).patchValue(t, {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(e))
            }
            reset(t=[], e={}) {
                this._forEachChild((n,s)=>{
                    n.reset(t[s], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }
                ),
                this._updatePristine(e),
                this._updateTouched(e),
                this.updateValueAndValidity(e)
            }
            getRawValue() {
                return this.controls.map(t=>t instanceof Iu ? t.value : t.getRawValue())
            }
            clear(t={}) {
                this.controls.length < 1 || (this._forEachChild(t=>t._registerOnCollectionChange(()=>{}
                )),
                this.controls.splice(0),
                this.updateValueAndValidity({
                    emitEvent: t.emitEvent
                }))
            }
            _syncPendingControls() {
                let t = this.controls.reduce((t,e)=>!!e._syncPendingControls() || t, !1);
                return t && this.updateValueAndValidity({
                    onlySelf: !0
                }),
                t
            }
            _throwIfControlMissing(t) {
                if (!this.controls.length)
                    throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.at(t))
                    throw new Error(`Cannot find form control at index ${t}`)
            }
            _forEachChild(t) {
                this.controls.forEach((e,n)=>{
                    t(e, n)
                }
                )
            }
            _updateValue() {
                this.value = this.controls.filter(t=>t.enabled || this.disabled).map(t=>t.value)
            }
            _anyControls(t) {
                return this.controls.some(e=>e.enabled && t(e))
            }
            _setUpControls() {
                this._forEachChild(t=>this._registerControl(t))
            }
            _checkAllValuesPresent(t) {
                this._forEachChild((e,n)=>{
                    if (void 0 === t[n])
                        throw new Error(`Must supply a value for form control at index: ${n}.`)
                }
                )
            }
            _allControlsDisabled() {
                for (const t of this.controls)
                    if (t.enabled)
                        return !1;
                return this.controls.length > 0 || this.disabled
            }
            _registerControl(t) {
                t.setParent(this),
                t._registerOnCollectionChange(this._onCollectionChange)
            }
        }
        const Wu = {
            provide: vu,
            useExisting: st(()=>Lu)
        }
          , Mu = (()=>Promise.resolve(null))();
        let Lu = (()=>{
            class t extends vu {
                constructor(t, e, n, s) {
                    super(),
                    this.control = new Iu,
                    this._registered = !1,
                    this.update = new Ra,
                    this._parent = t,
                    this._setValidators(e),
                    this._setAsyncValidators(n),
                    this.valueAccessor = function(t, e) {
                        if (!e)
                            return null;
                        let n, s, i;
                        return Array.isArray(e),
                        e.forEach(t=>{
                            t.constructor === ou ? n = t : Object.getPrototypeOf(t.constructor) === nu ? s = t : i = t
                        }
                        ),
                        i || s || n || null
                    }(0, s)
                }
                ngOnChanges(t) {
                    this._checkForErrors(),
                    this._registered || this._setUpControl(),
                    "isDisabled"in t && this._updateDisabled(t),
                    function(t, e) {
                        if (!t.hasOwnProperty("model"))
                            return !1;
                        const n = t.model;
                        return !!n.isFirstChange() || !Object.is(e, n.currentValue)
                    }(t, this.viewModel) && (this._updateValue(this.model),
                    this.viewModel = this.model)
                }
                ngOnDestroy() {
                    this.formDirective && this.formDirective.removeControl(this)
                }
                get path() {
                    return this._parent ? [...this._parent.path, this.name] : [this.name]
                }
                get formDirective() {
                    return this._parent ? this._parent.formDirective : null
                }
                viewToModelUpdate(t) {
                    this.viewModel = t,
                    this.update.emit(t)
                }
                _setUpControl() {
                    this._setUpdateStrategy(),
                    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                    this._registered = !0
                }
                _setUpdateStrategy() {
                    this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
                }
                _isStandalone() {
                    return !this._parent || !(!this.options || !this.options.standalone)
                }
                _setUpStandalone() {
                    var t, e;
                    (function(t, e) {
                        const n = function(t) {
                            return t._rawValidators
                        }(t);
                        null !== e.validator ? t.setValidators(gu(n, e.validator)) : "function" == typeof n && t.setValidators([n]);
                        const s = function(t) {
                            return t._rawAsyncValidators
                        }(t);
                        null !== e.asyncValidator ? t.setAsyncValidators(gu(s, e.asyncValidator)) : "function" == typeof s && t.setAsyncValidators([s]);
                        const i = ()=>t.updateValueAndValidity();
                        wu(e._rawValidators, i),
                        wu(e._rawAsyncValidators, i)
                    }
                    )(t = this.control, e = this),
                    e.valueAccessor.writeValue(t.value),
                    function(t, e) {
                        e.valueAccessor.registerOnChange(n=>{
                            t._pendingValue = n,
                            t._pendingChange = !0,
                            t._pendingDirty = !0,
                            "change" === t.updateOn && Au(t, e)
                        }
                        )
                    }(t, e),
                    function(t, e) {
                        const n = (t,n)=>{
                            e.valueAccessor.writeValue(t),
                            n && e.viewToModelUpdate(t)
                        }
                        ;
                        t.registerOnChange(n),
                        e._registerOnDestroy(()=>{
                            t._unregisterOnChange(n)
                        }
                        )
                    }(t, e),
                    function(t, e) {
                        e.valueAccessor.registerOnTouched(()=>{
                            t._pendingTouched = !0,
                            "blur" === t.updateOn && t._pendingChange && Au(t, e),
                            "submit" !== t.updateOn && t.markAsTouched()
                        }
                        )
                    }(t, e),
                    function(t, e) {
                        if (e.valueAccessor.setDisabledState) {
                            const n = t=>{
                                e.valueAccessor.setDisabledState(t)
                            }
                            ;
                            t.registerOnDisabledChange(n),
                            e._registerOnDestroy(()=>{
                                t._unregisterOnDisabledChange(n)
                            }
                            )
                        }
                    }(t, e),
                    this.control.updateValueAndValidity({
                        emitEvent: !1
                    })
                }
                _checkForErrors() {
                    this._isStandalone() || this._checkParentType(),
                    this._checkName()
                }
                _checkParentType() {}
                _checkName() {
                    this.options && this.options.name && (this.name = this.options.name),
                    this._isStandalone()
                }
                _updateValue(t) {
                    Mu.then(()=>{
                        this.control.setValue(t, {
                            emitViewToModelChange: !1
                        })
                    }
                    )
                }
                _updateDisabled(t) {
                    const e = t.isDisabled.currentValue
                      , n = "" === e || e && "false" !== e;
                    Mu.then(()=>{
                        n && !this.control.disabled ? this.control.disable() : !n && this.control.disabled && this.control.enable()
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(yu, 9),Or(au, 10),Or(lu, 10),Or(su, 10))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
                inputs: {
                    name: "name",
                    isDisabled: ["disabled", "isDisabled"],
                    model: ["ngModel", "model"],
                    options: ["ngModelOptions", "options"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                exportAs: ["ngModel"],
                features: [Do([Wu]), hr, ae]
            }),
            t
        }
        )()
          , ju = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({}),
            t
        }
        )();
        const Bu = {
            provide: su,
            useExisting: st(()=>$u),
            multi: !0
        };
        function Hu(t, e) {
            return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"),
            `${t}: ${e}`.slice(0, 50))
        }
        let $u = (()=>{
            class t extends nu {
                constructor() {
                    super(...arguments),
                    this._optionMap = new Map,
                    this._idCounter = 0,
                    this._compareWith = Object.is
                }
                set compareWith(t) {
                    this._compareWith = t
                }
                writeValue(t) {
                    this.value = t;
                    const e = this._getOptionId(t);
                    null == e && this.setProperty("selectedIndex", -1);
                    const n = Hu(e, t);
                    this.setProperty("value", n)
                }
                registerOnChange(t) {
                    this.onChange = e=>{
                        this.value = this._getOptionValue(e),
                        t(this.value)
                    }
                }
                _registerOption() {
                    return (this._idCounter++).toString()
                }
                _getOptionId(t) {
                    for (const e of Array.from(this._optionMap.keys()))
                        if (this._compareWith(this._optionMap.get(e), t))
                            return e;
                    return null
                }
                _getOptionValue(t) {
                    const e = function(t) {
                        return t.split(":")[0]
                    }(t);
                    return this._optionMap.has(e) ? this._optionMap.get(e) : t
                }
            }
            return t.\u0275fac = function() {
                let e;
                return function(n) {
                    return (e || (e = In(t)))(n || t)
                }
            }(),
            t.\u0275dir = Xt({
                type: t,
                selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
                hostBindings: function(t, e) {
                    1 & t && Tr("change", function(t) {
                        return e.onChange(t.target.value)
                    })("blur", function() {
                        return e.onTouched()
                    })
                },
                inputs: {
                    compareWith: "compareWith"
                },
                features: [Do([Bu]), hr]
            }),
            t
        }
        )()
          , Uu = (()=>{
            class t {
                constructor(t, e, n) {
                    this._element = t,
                    this._renderer = e,
                    this._select = n,
                    this._select && (this.id = this._select._registerOption())
                }
                set ngValue(t) {
                    null != this._select && (this._select._optionMap.set(this.id, t),
                    this._setElementValue(Hu(this.id, t)),
                    this._select.writeValue(this._select.value))
                }
                set value(t) {
                    this._setElementValue(t),
                    this._select && this._select.writeValue(this._select.value)
                }
                _setElementValue(t) {
                    this._renderer.setProperty(this._element.nativeElement, "value", t)
                }
                ngOnDestroy() {
                    this._select && (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(No),Or(Lo),Or($u, 9))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["option"]],
                inputs: {
                    ngValue: "ngValue",
                    value: "value"
                }
            }),
            t
        }
        )();
        const zu = {
            provide: su,
            useExisting: st(()=>Xu),
            multi: !0
        };
        function qu(t, e) {
            return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`),
            e && "object" == typeof e && (e = "Object"),
            `${t}: ${e}`.slice(0, 50))
        }
        let Xu = (()=>{
            class t extends nu {
                constructor() {
                    super(...arguments),
                    this._optionMap = new Map,
                    this._idCounter = 0,
                    this._compareWith = Object.is
                }
                set compareWith(t) {
                    this._compareWith = t
                }
                writeValue(t) {
                    let e;
                    if (this.value = t,
                    Array.isArray(t)) {
                        const n = t.map(t=>this._getOptionId(t));
                        e = (t,e)=>{
                            t._setSelected(n.indexOf(e.toString()) > -1)
                        }
                    } else
                        e = (t,e)=>{
                            t._setSelected(!1)
                        }
                        ;
                    this._optionMap.forEach(e)
                }
                registerOnChange(t) {
                    this.onChange = e=>{
                        const n = [];
                        if (void 0 !== e.selectedOptions) {
                            const t = e.selectedOptions;
                            for (let e = 0; e < t.length; e++) {
                                const s = t.item(e)
                                  , i = this._getOptionValue(s.value);
                                n.push(i)
                            }
                        } else {
                            const t = e.options;
                            for (let e = 0; e < t.length; e++) {
                                const s = t.item(e);
                                if (s.selected) {
                                    const t = this._getOptionValue(s.value);
                                    n.push(t)
                                }
                            }
                        }
                        this.value = n,
                        t(n)
                    }
                }
                _registerOption(t) {
                    const e = (this._idCounter++).toString();
                    return this._optionMap.set(e, t),
                    e
                }
                _getOptionId(t) {
                    for (const e of Array.from(this._optionMap.keys()))
                        if (this._compareWith(this._optionMap.get(e)._value, t))
                            return e;
                    return null
                }
                _getOptionValue(t) {
                    const e = function(t) {
                        return t.split(":")[0]
                    }(t);
                    return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
                }
            }
            return t.\u0275fac = function() {
                let e;
                return function(n) {
                    return (e || (e = In(t)))(n || t)
                }
            }(),
            t.\u0275dir = Xt({
                type: t,
                selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
                hostBindings: function(t, e) {
                    1 & t && Tr("change", function(t) {
                        return e.onChange(t.target)
                    })("blur", function() {
                        return e.onTouched()
                    })
                },
                inputs: {
                    compareWith: "compareWith"
                },
                features: [Do([zu]), hr]
            }),
            t
        }
        )()
          , Qu = (()=>{
            class t {
                constructor(t, e, n) {
                    this._element = t,
                    this._renderer = e,
                    this._select = n,
                    this._select && (this.id = this._select._registerOption(this))
                }
                set ngValue(t) {
                    null != this._select && (this._value = t,
                    this._setElementValue(qu(this.id, t)),
                    this._select.writeValue(this._select.value))
                }
                set value(t) {
                    this._select ? (this._value = t,
                    this._setElementValue(qu(this.id, t)),
                    this._select.writeValue(this._select.value)) : this._setElementValue(t)
                }
                _setElementValue(t) {
                    this._renderer.setProperty(this._element.nativeElement, "value", t)
                }
                _setSelected(t) {
                    this._renderer.setProperty(this._element.nativeElement, "selected", t)
                }
                ngOnDestroy() {
                    this._select && (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(No),Or(Lo),Or(Xu, 9))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["option"]],
                inputs: {
                    ngValue: "ngValue",
                    value: "value"
                }
            }),
            t
        }
        )()
          , Ku = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[ju]]
            }),
            t
        }
        )()
          , Zu = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [Ku]
            }),
            t
        }
        )();
        function Gu(t, e) {
            if (1 & t && (Er(0, "option", 13),
            lo(1),
            xr()),
            2 & t) {
                const t = e.$implicit;
                Cr("ngValue", t),
                Ys(1),
                co(t)
            }
        }
        let Yu = (()=>{
            class t {
                constructor(t) {
                    this.shareDataService = t,
                    this.levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    this.selectedLevel = 24,
                    this.actionDay = 24,
                    this.shareDataService.setActionDay(this.selectedLevel)
                }
                ngOnInit() {
                    localStorage.setItem("actionDay", String(this.selectedLevel))
                }
                change() {
                    console.log("push value " + this.selectedLevel),
                    this.shareDataService.setActionDay(this.selectedLevel),
                    localStorage.setItem("actionDay", String(this.selectedLevel))
                }
                sendAccount(t) {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Yh))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-menu"]],
                inputs: {
                    ValueAOFS: "ValueAOFS",
                    ValueAOFF: "ValueAOFF",
                    ValueAOFW: "ValueAOFW"
                },
                decls: 33,
                vars: 2,
                consts: [[1, "row", "alert", "alert-info", "m-0", "mwm-box", 2, "display", "none"], [1, "col-sm-12"], [2, "text-align", "center"], [1, "d-inline-block", "w-100"], [1, "d-inline-block", "w-50"], [1, ""], [1, "d-inline-block", "w-25"], [3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aoff.png", 2, "height", "16px"], [2, "text-align", "end", "font-size", "xx-small"], ["href", "https://www.ageoffarming.io/", "target", "_blank"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/bannerAoF.png", 2, "width", "320px"], [3, "ngValue"]],
                template: function(t, e) {
                    1 & t && (Er(0, "div", 0),
                    Er(1, "div", 1),
                    Er(2, "div", 2),
                    lo(3, "Game Info:"),
                    xr(),
                    Dr(4, "br"),
                    Er(5, "div", 3),
                    Er(6, "div", 4),
                    Er(7, "span", 5),
                    lo(8, "Mining 1 hours per day:"),
                    xr(),
                    xr(),
                    Er(9, "div", 6),
                    Er(10, "select", 7),
                    Tr("ngModelChange", function(t) {
                        return e.selectedLevel = t
                    })("ngModelChange", function() {
                        return e.change()
                    }),
                    Sr(11, Gu, 2, 2, "option", 8),
                    xr(),
                    xr(),
                    Er(12, "div", 6),
                    lo(13, "\xa0/ 24h"),
                    xr(),
                    xr(),
                    Dr(14, "br"),
                    Er(15, "div", 1),
                    lo(16, " 1 "),
                    Dr(17, "img", 9),
                    lo(18, " = 5 Energy "),
                    xr(),
                    Er(19, "div", 10),
                    lo(20, " release 19/04/2022 "),
                    xr(),
                    xr(),
                    xr(),
                    Dr(21, "br"),
                    Er(22, "div", 0),
                    Er(23, "small"),
                    Er(24, "p"),
                    lo(25, "PROMO : "),
                    Dr(26, "br"),
                    xr(),
                    Er(27, "a", 11),
                    Dr(28, "img", 12),
                    Dr(29, "br"),
                    lo(30, " More Info here"),
                    xr(),
                    Dr(31, "br"),
                    Dr(32, "br"),
                    xr(),
                    xr()),
                    2 & t && (Ys(10),
                    Cr("ngModel", e.selectedLevel),
                    Ys(1),
                    Cr("ngForOf", e.levels))
                },
                directives: [$u, bu, Lu, bc, Uu, Qu],
                styles: [".badge.md[_ngcontent-%COMP%]{color:#000;padding:3px;font-size:15px}.img-fluid[_ngcontent-%COMP%]{max-width:100%;height:160px}.badge.sm[_ngcontent-%COMP%]{padding:3px;font-size:12px}.grey.darken-2[_ngcontent-%COMP%]{background-color:#616161!important}.gradbg-cyan[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#5b81a5,#19e4ff)!important}.badge.ssm[_ngcontent-%COMP%]{padding:2px;font-size:10px}.gradbg-lime2[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#4e9f34,#c4de00)!important}.gradbg-red[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#6d091e,tomato)!important}.badge[_ngcontent-%COMP%]{color:#000!important;border-radius:.125rem;box-shadow:0 2px 5px 0 #00000029,0 2px 10px 0 #0000001f;display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:initial;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.w-50[_ngcontent-%COMP%]{width:50%!important}.w-10[_ngcontent-%COMP%]{width:10%!important}.w-20[_ngcontent-%COMP%]{width:20%!important}.w-40[_ngcontent-%COMP%]{width:40%!important}.w-45[_ngcontent-%COMP%]{width:45%!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]
            }),
            t
        }
        )()
          , Ju = (()=>{
            class t {
                constructor(t) {
                    this.http = t,
                    this.urlApiAtomicHub = "https://wax-atomic-api.eosphere.io/atomicmarket/v2/sales?collection_name=galaxyminerx&order=asc&schema_name=tools&sort=price&symbol=WAX&data:text.rarity=",
                    this.urlv2 = "https://wax-atomic-api.eosphere.io/atomicmarket/v2/sales?collection_name=ageoffarming&schema_name=tools&order=asc&sort=price&symbol=WAX&state=1",
                    this.url = "https://wax-atomic-api.eosphere.io/atomicmarket/v2/sales?collection_name=ageoffarming&schema_name=tools&order=asc&sort=price&symbol=WAX&state=1",
                    this.urlspace = "https://wax-atomic-api.eosphere.io/atomicmarket/v2/sales?collection_name=funnycatgame&order=asc&schema_name=space.cats&sort=price&symbol=WAX&state=1",
                    this.urldata = "https://atomic2.hivebp.io/atomicassets/v1/templates/spacecraftxc/",
                    this.urldataSales = "https://api.nfthive.io/api/search?order_by=offer&limit=1000&search_type=sales&exact_search=false&offer_type=sales&term=",
                    this.urldataCPU = "https://wax.greymass.com/v1/chain/get_account"
                }
                getItemsApi(t) {
                    return this.http.get(this.urlApiAtomicHub + t)
                }
                getItemsDataSalesApi(t) {
                    return this.http.get(this.urldataSales + t)
                }
                getItemsDataSalesApiV2(t) {
                    const e = (new wh).set("Content-Type", "text/plain");
                    return this.http.get(this.urlspace + "&match=" + t, {
                        headers: e
                    }).toPromise()
                }
                getItemsDataSalesApiV3(t) {
                    const e = (new wh).set("Content-Type", "text/plain");
                    return this.http.get(this.url + "&template_id=" + t, {
                        headers: e
                    }).toPromise()
                }
                getItemsDataSalesApiV3bis(t) {
                    const e = (new wh).set("Content-Type", "text/plain");
                    return this.http.get(this.urlv2 + "&template_id=" + t, {
                        headers: e
                    }).toPromise()
                }
                getItemsDataSalesApiV4(t) {
                    const e = (new wh).set("Content-Type", "text/plain");
                    return this.http.get(this.urldataSales + t, {
                        headers: e
                    }).toPromise()
                }
                getDataCPUApi(t) {
                    let e = {
                        account_name: t
                    };
                    const n = (new wh).set("Content-Type", "text/plain");
                    return this.http.post(this.urldataCPU, e, {
                        headers: n
                    }).toPromise()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Wh))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            }),
            t
        }
        )();
        function td(t, e) {
            if (1 & t) {
                const t = Ee();
                Er(0, "div", 8),
                Er(1, "button", 16),
                Tr("click", function() {
                    const e = (n = t,
                    Ce.lFrame.contextLView = n,
                    n[8]).$implicit;
                    var n;
                    return Rr(2).viewAccount(e)
                }),
                lo(2),
                xr(),
                xr()
            }
            if (2 & t) {
                const t = e.$implicit;
                Ys(2),
                ho("", t.toLowerCase(), " ")
            }
        }
        function ed(t, e) {
            if (1 & t && (Er(0, "div"),
            Sr(1, td, 3, 1, "div", 15),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                Cr("ngForOf", t.listAccountWamID)
            }
        }
        function nd(t, e) {
            if (1 & t && (Er(0, "div"),
            Er(1, "div"),
            Er(2, "div", 49),
            Er(3, "span"),
            lo(4),
            xr(),
            xr(),
            Er(5, "div", 50),
            Er(6, "span", 51),
            lo(7),
            xr(),
            xr(),
            Er(8, "div", 49),
            Er(9, "span", 31),
            lo(10),
            xr(),
            xr(),
            Er(11, "div", 49),
            Er(12, "span", 52),
            lo(13),
            Ta(14, "number"),
            xr(),
            xr(),
            xr(),
            xr()),
            2 & t) {
                const t = e.$implicit
                  , s = Rr(2);
                Ys(3),
                "badge ssm grey lighten-2 ",
                n = t.rarity,
                "",
                Yr($n, Gr, Ar(Ee(), "badge ssm grey lighten-2 ", n, ""), !0),
                Ys(1),
                co(t.name),
                Ys(2),
                Cr("ngClass", "00:00:00" === s.getTimer(t.timer) ? "gradbg-red" : ""),
                Ys(1),
                co(s.getTimer(t.timer)),
                Ys(3),
                uo("", t.durability_cost, " / ", t.durability_max, ""),
                Ys(2),
                Cr("ngClass", t.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                Ys(1),
                ho(" ", Pa(14, 10, t.daily, "1.0-2"), " \uffe6")
            }
            var n
        }
        function sd(t, e) {
            if (1 & t && (Er(0, "div", 17),
            Dr(1, "br"),
            Er(2, "div", 18),
            Er(3, "div", 19),
            Er(4, "div", 20),
            Er(5, "div", 21),
            Er(6, "span", 22),
            lo(7),
            xr(),
            xr(),
            Er(8, "div", 23),
            lo(9, "Balance: "),
            Er(10, "span", 24),
            lo(11),
            Ta(12, "number"),
            xr(),
            xr(),
            Er(13, "div", 23),
            lo(14, "Staking"),
            Dr(15, "br"),
            Er(16, "span", 25),
            lo(17),
            Ta(18, "number"),
            xr(),
            xr(),
            Dr(19, "br"),
            Er(20, "div", 23),
            Er(21, "span", 26),
            lo(22),
            Ta(23, "number"),
            xr(),
            xr(),
            xr(),
            Er(24, "div", 27),
            Dr(25, "div", 28),
            xr(),
            Dr(26, "hr"),
            Er(27, "div", 29),
            Er(28, "div", 30),
            Er(29, "span", 31),
            lo(30, "Tokens:"),
            xr(),
            xr(),
            Er(31, "div", 30),
            Er(32, "span", 32),
            lo(33, "InGame:"),
            xr(),
            xr(),
            Er(34, "div", 33),
            Er(35, "span", 32),
            lo(36, "Daily Cost/Mine:"),
            xr(),
            xr(),
            Dr(37, "br"),
            Er(38, "div", 34),
            Er(39, "div", 35),
            Er(40, "span", 31),
            lo(41),
            Ta(42, "number"),
            xr(),
            xr(),
            Er(43, "div", 35),
            Er(44, "span", 31),
            lo(45),
            Ta(46, "number"),
            xr(),
            xr(),
            Er(47, "div", 35),
            Er(48, "span", 31),
            lo(49),
            Ta(50, "number"),
            xr(),
            xr(),
            xr(),
            Er(51, "div", 34),
            Er(52, "div", 35),
            Er(53, "span", 32),
            lo(54),
            Ta(55, "number"),
            xr(),
            xr(),
            Er(56, "div", 35),
            Er(57, "span", 32),
            lo(58),
            Ta(59, "number"),
            xr(),
            xr(),
            Er(60, "div", 35),
            Er(61, "span", 32),
            lo(62),
            Ta(63, "number"),
            xr(),
            xr(),
            xr(),
            Er(64, "div", 34),
            Er(65, "div", 36),
            Dr(66, "img", 37),
            xr(),
            Er(67, "div", 36),
            Dr(68, "img", 38),
            xr(),
            Er(69, "div", 36),
            Dr(70, "img", 39),
            xr(),
            xr(),
            Er(71, "div", 34),
            Er(72, "div", 40),
            Er(73, "span", 41),
            lo(74),
            Ta(75, "number"),
            xr(),
            xr(),
            Er(76, "div", 40),
            Er(77, "span", 41),
            lo(78),
            Ta(79, "number"),
            xr(),
            xr(),
            Er(80, "div", 40),
            Er(81, "span", 41),
            lo(82),
            Ta(83, "number"),
            xr(),
            xr(),
            xr(),
            Er(84, "div"),
            Er(85, "div", 42),
            Er(86, "span", 43),
            lo(87, "Energy:"),
            xr(),
            Er(88, "span", 44),
            lo(89),
            xr(),
            xr(),
            Dr(90, "div", 45),
            xr(),
            Dr(91, "hr"),
            Er(92, "div", 46),
            Er(93, "div", 42),
            Er(94, "span", 43),
            lo(95, "MINING"),
            xr(),
            xr(),
            Er(96, "div", 45),
            Er(97, "span", 43),
            lo(98, "Daily Profit:"),
            xr(),
            Er(99, "span", 47),
            lo(100),
            Ta(101, "number"),
            xr(),
            xr(),
            xr(),
            Sr(102, nd, 15, 13, "div", 48),
            xr(),
            xr(),
            xr(),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(7),
                co(t.accountWamID),
                Ys(4),
                ho("", Pa(12, 25, t.accountWaxAlcor, "1.2-2"), " \uffe6"),
                Ys(6),
                ho("", Pa(18, 28, t.stakingCPU, "1.2-2"), " \uffe6"),
                Ys(5),
                ho("CPU: ", Pa(23, 31, t.CPU, "1.0-0"), " %"),
                Ys(3),
                n = "width:",
                s = t.CPU,
                i = "%; background-color: rgb(250, 0, 0);",
                Yr(so, Zr, Ar(Ee(), n, s, i), !1),
                Nr("aria-valuenow", t.CPU),
                Ys(16),
                co(Pa(42, 34, t.accountWOODAlcor, "1.4-4")),
                Ys(4),
                co(Pa(46, 37, t.accountSTONEAlcor, "1.4-4")),
                Ys(4),
                co(Pa(50, 40, t.accountFOODAlcor, "1.4-4")),
                Ys(5),
                co(Pa(55, 43, t.accountWOOD, "1.4-4")),
                Ys(4),
                co(Pa(59, 46, t.accountSTONE, "1.4-4")),
                Ys(4),
                co(Pa(63, 49, t.accountFOOD, "1.4-4")),
                Ys(11),
                Cr("ngClass", t.TotalValueWOOD >= 0 ? "gradbg-lime2" : "gradbg-red"),
                Ys(1),
                co(Pa(75, 52, t.TotalValueWOOD, "1.0-0")),
                Ys(3),
                Cr("ngClass", t.TotalValueSTONE >= 0 ? "gradbg-lime2" : "gradbg-red"),
                Ys(1),
                co(Pa(79, 55, t.TotalValueSTONE, "1.0-0")),
                Ys(3),
                Cr("ngClass", t.TotalValueFOOD >= 0 ? "gradbg-lime2" : "gradbg-red"),
                Ys(1),
                co(Pa(83, 58, t.TotalValueFOOD, "1.0-0")),
                Ys(7),
                uo("", t.accountNRJ, " / ", t.accountMaxNRJ, ""),
                Ys(10),
                Cr("ngClass", t.TotalValueWax >= 0 ? "gradbg-lime2" : "gradbg-red"),
                Ys(1),
                ho("", Pa(101, 61, t.TotalValueWax, "1.0-2"), " \uffe6"),
                Ys(2),
                Cr("ngForOf", t.MyInventory)
            }
            var n, s, i
        }
        let id = (()=>{
            class t {
                constructor(t, e, n) {
                    this.shareDataService = t,
                    this.atomicHubService = e,
                    this.ageoffarmingService = n,
                    this.listAccountWamID = [],
                    this.showAccount = !1,
                    this.accountSTONE = 0,
                    this.accountFOOD = 0,
                    this.accountWOOD = 0,
                    this.accountMaxNRJ = 5e3,
                    this.accountWaxAlcor = 0,
                    this.stakingCPU = 0,
                    this.accountSTONEAlcor = 0,
                    this.accountFOODAlcor = 0,
                    this.accountWOODAlcor = 0,
                    this.ActionDay = 24,
                    this.MyInventory = [],
                    this.TotalValueSTONE = 0,
                    this.TotalValueFOOD = 0,
                    this.TotalValueWOOD = 0,
                    this.TotalValueWax = 0,
                    this.CPU = 0,
                    this.TotalValueItem = 0,
                    this.accountWamID = ((new URL(window.location.href)).searchParams.get("waxid") || localStorage.getItem("listAccountWamID")),
                    this.accountWamID && this.viewAccount(this.accountWamID.split(",")[0]),
                    ((new URL(window.location.href)).searchParams.get("waxid") || localStorage.getItem("listAccountWamID")) && ((new URL(window.location.href)).searchParams.get("waxid") || localStorage.getItem("listAccountWamID")).split(",").forEach( t=>this.listAccountWamID.push(t) ),
                    this.SpearCommon = this.shareDataService.getStoneSpearCommon(),
                    this.SpearunCommon = this.shareDataService.getStoneSpearUncommon(),
                    this.Spearrare = this.shareDataService.getStoneSpearRare(),
                    this.Spearepic = this.shareDataService.getStoneSpearEpic(),
                    this.Spearlegendary = this.shareDataService.getStoneSpearLegendary(),
                    this.pickCommon = this.shareDataService.getStonePickCommon(),
                    this.pickUncommon = this.shareDataService.getStonePickUncommon(),
                    this.pickRare = this.shareDataService.getStonePickRare(),
                    this.pickEpic = this.shareDataService.getStonePickEpic(),
                    this.pickLegendary = this.shareDataService.getStonePickLegendary(),
                    this.AxeCommon = this.shareDataService.getStoneAxeCommon(),
                    this.AxeUncommon = this.shareDataService.getStoneAxeUncommon(),
                    this.AxeRare = this.shareDataService.getStoneAxeRare(),
                    this.AxeEpic = this.shareDataService.getStoneAxeEpic(),
                    this.AxeLegendary = this.shareDataService.getStoneAxeLegendary()
                }
                clear() {
                    localStorage.removeItem("accountWamID"),
                    localStorage.removeItem("listAccountWamID"),
                    this.listAccountWamID = []
                }
                sendAccount(t) {
                    t.split(",").forEach(t=>{
                        this.AddAccountWamID = t.toLowerCase().trim(),
                        this.listAccountWamID.push(this.AddAccountWamID),
                        localStorage.setItem("listAccountWamID", this.listAccountWamID.toString()),
                        this.AddAccountWamID = ""
                    }
                    )
                }
                viewAccount(t) {
                    this.showAccount = !0,
                    this.accountWamID = t,
                    localStorage.setItem("accountWamID", t.toLowerCase()),
                    this.chargeVueAccount(t.toLowerCase())
                }
                ngOnInit() {
                    this.now = this.getNow(),
                    this.updateSubscription = ph(6e4).subscribe(t=>{
                        this.now = this.getNow(),
                        this.viewAccount(this.accountWamID)
                    }
                    )
                }
                getNow() {
                    let t = (new Date).getFullYear()
                      , e = (new Date).getDate()
                      , n = (new Date).getMonth()
                      , s = (new Date).getHours()
                      , i = (new Date).getMinutes()
                      , r = (new Date).getSeconds();
                    return Math.round(new Date(t,n,e,s,i,r).getTime())
                }
                getTimer(t) {
                    if (t) {
                        let e = 1e3 * t;
                        return this.now - e > 0 ? "00:00:00" : this.secondsToHms(this.now - e)
                    }
                }
                chargeVueAccount(t) {
                    this.ageoffarmingService.getCurrentPlayer(t).subscribe(t=>{
                        var e, n, s;
                        this.accountStatus = "",
                        this.accountSTONE = 0,
                        this.accountFOOD = 0,
                        this.accountWOOD = 0,
                        this.accountNRJ = 0,
                        this.villageois = 0,
                        this.accountStatus = t.rows[0].usr,
                        this.accountNRJ = t.rows[0].energy,
                        this.accountMaxNRJ = t.rows[0].energy_max;
                        let i = null === (e = t.rows[0].balances[0]) || void 0 === e ? void 0 : e.split(" ")
                          , r = null === (n = t.rows[0].balances[1]) || void 0 === n ? void 0 : n.split(" ")
                          , o = null === (s = t.rows[0].balances[2]) || void 0 === s ? void 0 : s.split(" ");
                        this.accountSTONE = Number(r),
                        this.accountFOOD = Number(o),
                        this.accountWOOD = Number(i),
                        this.villageois = t.rows[0].villagers,
                        console.log(t.rows)
                    }
                    ),
                    this.atomicHubService.getDataCPUApi(t).then(t=>{
                        console.log(t.cpu_limit),
                        this.CPU = t.cpu_limit.used / t.cpu_limit.max * 100,
                        this.stakingCPU = t.total_resources.cpu_weight.split(" ")[0]
                    }
                    ),
                    this.ageoffarmingService.getAccountGlobalApi(t).subscribe(t=>{
                        let e = t.balances;
                        this.accountFOODAlcor = 0,
                        this.accountSTONEAlcor = 0,
                        this.accountWOODAlcor = 0,
                        this.accountWaxAlcor = 0,
                        e.forEach(t=>{
                            "AOFF" == t.currency && (this.accountFOODAlcor = t.amount),
                            "AOFS" == t.currency && (this.accountSTONEAlcor = t.amount),
                            "AOFW" == t.currency && (this.accountWOODAlcor = t.amount),
                            "WAX" == t.currency && (this.accountWaxAlcor = t.amount)
                        }
                        )
                    }
                    ),
                    this.ageoffarmingService.getItemsPlayer(t).subscribe(t=>{
                        this.listeItemAccount = t.rows,
                        this.MyInventory = [],
                        this.TotalValueSTONE = 0,
                        this.TotalValueWOOD = 0,
                        this.TotalValueFOOD = 0,
                        this.TotalValueWax = 0,
                        this.SpearCommon = this.shareDataService.getStoneSpearCommon(),
                        this.SpearunCommon = this.shareDataService.getStoneSpearUncommon(),
                        this.Spearrare = this.shareDataService.getStoneSpearRare(),
                        this.Spearepic = this.shareDataService.getStoneSpearEpic(),
                        this.Spearlegendary = this.shareDataService.getStoneSpearLegendary(),
                        this.pickCommon = this.shareDataService.getStonePickCommon(),
                        this.pickUncommon = this.shareDataService.getStonePickUncommon(),
                        this.pickRare = this.shareDataService.getStonePickRare(),
                        this.pickEpic = this.shareDataService.getStonePickEpic(),
                        this.pickLegendary = this.shareDataService.getStonePickLegendary(),
                        this.AxeCommon = this.shareDataService.getStoneAxeCommon(),
                        this.AxeUncommon = this.shareDataService.getStoneAxeUncommon(),
                        this.AxeRare = this.shareDataService.getStoneAxeRare(),
                        this.AxeEpic = this.shareDataService.getStoneAxeEpic(),
                        this.AxeLegendary = this.shareDataService.getStoneAxeLegendary(),
                        this.villageois.forEach(t=>{
                            let e = this.listeItemAccount.filter(e=>{
                                if (e.last_claimed == t)
                                    return e
                            }
                            )
                              , n = this.listeItemAccount.findIndex(e=>e.last_claimed == t);
                            if (1 == e.length) {
                                let t = new rh;
                                t.template_id = e[0].template_id,
                                t.timer = e[0].last_claimed,
                                t.durability_cost = e[0].durability,
                                t.durability_max = 20,
                                t.daily = this.getDaily(e[0].template_id),
                                t.name = this.getName(e[0].template_id),
                                t.rarity = this.getRarity(e[0].template_id),
                                this.MyInventory.push(t)
                            }
                            if (e.length > 1) {
                                let t = new rh;
                                t.template_id = e[0].template_id,
                                t.timer = e[0].last_claimed,
                                t.durability_cost = e[0].durability,
                                t.durability_max = 20,
                                t.daily = this.getDaily(e[0].template_id),
                                t.name = this.getName(e[0].template_id),
                                t.rarity = this.getRarity(e[0].template_id),
                                this.listeItemAccount.splice(n, 1),
                                this.MyInventory.push(t)
                            }
                        }
                        ),
                        console.log("this", this.MyInventory),
                        this.getValueTools(this.MyInventory)
                    }
                    ),
                    this.shareDataService.change.subscribe(t=>{
                        this.ActionDay = t,
                        this.TotalValueSTONE = 0,
                        this.TotalValueWOOD = 0,
                        this.TotalValueFOOD = 0,
                        this.TotalValueWax = 0,
                        this.getValueTools(this.MyInventory),
                        this.MyInventory.forEach(t=>{
                            t.daily = this.getDaily(t.template_id)
                        }
                        )
                    }
                    )
                }
                ngOnChanges(t) {
                    this.viewAccount(this.accountWamID)
                }
                getValueTools(t) {
                    t.forEach(t=>{
                        switch (t.template_id) {
                        case 486831:
                            this.SpearCommon && (this.TotalValueSTONE += -this.SpearCommon.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += -this.SpearCommon.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += (this.SpearCommon.rewards - this.SpearCommon.energy_cost / 5) * this.ActionDay,
                            this.TotalValueWax += (this.SpearCommon.rewards - this.SpearCommon.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.SpearCommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.SpearCommon.stone_repair_cost * this.ActionDay * this.ValueAOFS));
                            break;
                        case 486832:
                            this.SpearunCommon && (this.TotalValueSTONE += -this.SpearunCommon.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += -this.SpearunCommon.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += (this.SpearunCommon.rewards - this.SpearunCommon.energy_cost / 5) * this.ActionDay,
                            this.TotalValueWax += (this.SpearunCommon.rewards - this.SpearunCommon.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.SpearunCommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.SpearunCommon.stone_repair_cost * this.ActionDay * this.ValueAOFS));
                            break;
                        case 486833:
                            this.Spearrare && (this.TotalValueSTONE += -this.Spearrare.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += -this.Spearrare.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += (this.Spearrare.rewards - this.Spearrare.energy_cost / 5) * this.ActionDay,
                            this.TotalValueWax += (this.Spearrare.rewards - this.Spearrare.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.Spearrare.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.Spearrare.stone_repair_cost * this.ActionDay * this.ValueAOFS));
                            break;
                        case 486834:
                            this.Spearepic && (this.TotalValueSTONE += -this.Spearepic.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += -this.Spearepic.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += (this.Spearepic.rewards - this.Spearepic.energy_cost / 5) * this.ActionDay,
                            this.TotalValueWax += (this.Spearepic.rewards - this.Spearepic.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.Spearepic.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.Spearepic.stone_repair_cost * this.ActionDay * this.ValueAOFS));
                            break;
                        case 486835:
                            this.Spearlegendary && (this.TotalValueSTONE += -this.Spearlegendary.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += -this.Spearlegendary.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += (this.Spearlegendary.rewards - this.Spearlegendary.energy_cost / 5) * this.ActionDay,
                            this.TotalValueWax += (this.Spearlegendary.rewards - this.Spearlegendary.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.Spearlegendary.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.Spearlegendary.stone_repair_cost * this.ActionDay * this.ValueAOFS));
                            break;
                        case 486825:
                            this.pickCommon && (this.TotalValueSTONE += (this.pickCommon.rewards - this.pickCommon.stone_repair_cost) * this.ActionDay,
                            this.TotalValueWOOD += -this.pickCommon.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += -this.pickCommon.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.pickCommon.rewards - this.pickCommon.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickCommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickCommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF));
                            break;
                        case 486826:
                            this.pickUncommon && (this.TotalValueSTONE += (this.pickUncommon.rewards - this.pickUncommon.stone_repair_cost) * this.ActionDay,
                            this.TotalValueWOOD += -this.pickUncommon.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += -this.pickUncommon.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.pickUncommon.rewards - this.pickUncommon.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickUncommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickUncommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF));
                            break;
                        case 486827:
                            this.pickRare && (this.TotalValueSTONE += (this.pickRare.rewards - this.pickRare.stone_repair_cost) * this.ActionDay,
                            this.TotalValueWOOD += -this.pickRare.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += -this.pickRare.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.pickRare.rewards - this.pickRare.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickRare.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickRare.energy_cost / 5 * this.ActionDay * this.ValueAOFF));
                            break;
                        case 486830:
                            this.pickEpic && (this.TotalValueSTONE += (this.pickEpic.rewards - this.pickEpic.stone_repair_cost) * this.ActionDay,
                            this.TotalValueWOOD += -this.pickEpic.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += -this.pickEpic.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.pickEpic.rewards - this.pickEpic.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickEpic.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickEpic.energy_cost / 5 * this.ActionDay * this.ValueAOFF));
                            break;
                        case 486829:
                            this.pickLegendary && (this.TotalValueSTONE += (this.pickLegendary.rewards - this.pickLegendary.stone_repair_cost) * this.ActionDay,
                            this.TotalValueWOOD += -this.pickLegendary.wood_repair_cost * this.ActionDay,
                            this.TotalValueFOOD += -this.pickLegendary.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.pickLegendary.rewards - this.pickLegendary.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickLegendary.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickLegendary.energy_cost / 5 * this.ActionDay * this.ValueAOFF));
                            break;
                        case 486820:
                            this.AxeCommon && (this.TotalValueSTONE += -this.AxeCommon.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += (this.AxeCommon.rewards - this.AxeCommon.wood_repair_cost) * this.ActionDay,
                            this.TotalValueFOOD += -this.AxeCommon.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.AxeCommon.rewards - this.AxeCommon.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeCommon.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeCommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                            break;
                        case 486821:
                            this.AxeUncommon && (this.TotalValueSTONE += -this.AxeUncommon.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += (this.AxeUncommon.rewards - this.AxeUncommon.wood_repair_cost) * this.ActionDay,
                            this.TotalValueFOOD += -this.AxeUncommon.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.AxeUncommon.rewards - this.AxeUncommon.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeUncommon.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeUncommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                            break;
                        case 486822:
                            this.AxeRare && (this.TotalValueSTONE += -this.AxeRare.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += (this.AxeRare.rewards - this.AxeRare.wood_repair_cost) * this.ActionDay,
                            this.TotalValueFOOD += -this.AxeRare.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.AxeRare.rewards - this.AxeRare.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeRare.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeRare.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                            break;
                        case 486823:
                            this.AxeEpic && (this.TotalValueSTONE += -this.AxeEpic.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += (this.AxeEpic.rewards - this.AxeEpic.wood_repair_cost) * this.ActionDay,
                            this.TotalValueFOOD += -this.AxeEpic.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.AxeEpic.rewards - this.AxeEpic.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeEpic.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeEpic.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                            break;
                        case 486824:
                            this.AxeLegendary && (this.TotalValueSTONE += -this.AxeLegendary.stone_repair_cost * this.ActionDay,
                            this.TotalValueWOOD += (this.AxeLegendary.rewards - this.AxeLegendary.wood_repair_cost) * this.ActionDay,
                            this.TotalValueFOOD += -this.AxeLegendary.energy_cost / 5 * this.ActionDay,
                            this.TotalValueWax += (this.AxeLegendary.rewards - this.AxeLegendary.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeLegendary.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeLegendary.energy_cost / 5 * this.ActionDay * this.ValueAOFF)
                        }
                    }
                    )
                }
                getDaily(t) {
                    switch (t) {
                    case 486831:
                        if (this.SpearCommon)
                            return (this.SpearCommon.rewards - this.SpearCommon.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.SpearCommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.SpearCommon.stone_repair_cost * this.ActionDay * this.ValueAOFS);
                        break;
                    case 486832:
                        if (this.SpearunCommon)
                            return (this.SpearunCommon.rewards - this.SpearunCommon.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.SpearunCommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.SpearunCommon.stone_repair_cost * this.ActionDay * this.ValueAOFS);
                        break;
                    case 486833:
                        if (this.Spearrare)
                            return (this.Spearrare.rewards - this.Spearrare.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.Spearrare.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.Spearrare.stone_repair_cost * this.ActionDay * this.ValueAOFS);
                        break;
                    case 486834:
                        if (this.Spearepic)
                            return (this.Spearepic.rewards - this.Spearepic.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.Spearepic.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.Spearepic.stone_repair_cost * this.ActionDay * this.ValueAOFS);
                        break;
                    case 486835:
                        if (this.Spearlegendary)
                            return (this.Spearlegendary.rewards - this.Spearlegendary.energy_cost / 5) * this.ActionDay * this.ValueAOFF - (this.Spearlegendary.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.Spearlegendary.stone_repair_cost * this.ActionDay * this.ValueAOFS);
                        break;
                    case 486825:
                        if (this.pickCommon)
                            return (this.pickCommon.rewards - this.pickCommon.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickCommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickCommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                        break;
                    case 486826:
                        if (this.pickUncommon)
                            return (this.pickUncommon.rewards - this.pickUncommon.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickUncommon.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickUncommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                        break;
                    case 486827:
                        if (this.pickRare)
                            return (this.pickRare.rewards - this.pickRare.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickRare.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickRare.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                        break;
                    case 486830:
                        if (this.pickEpic)
                            return (this.pickEpic.rewards - this.pickEpic.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickEpic.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickEpic.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                        break;
                    case 486829:
                        if (this.pickLegendary)
                            return (this.pickLegendary.rewards - this.pickLegendary.stone_repair_cost) * this.ActionDay * this.ValueAOFS - (this.pickLegendary.wood_repair_cost * this.ActionDay * this.ValueAOFW + this.pickLegendary.energy_cost / 5 * this.ActionDay * this.ValueAOFF);
                        break;
                    case 486820:
                        if (this.AxeCommon)
                            return (this.AxeCommon.rewards - this.AxeCommon.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeCommon.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeCommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF;
                        break;
                    case 486821:
                        if (this.AxeUncommon)
                            return (this.AxeUncommon.rewards - this.AxeUncommon.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeUncommon.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeUncommon.energy_cost / 5 * this.ActionDay * this.ValueAOFF;
                        break;
                    case 486822:
                        if (this.AxeRare)
                            return (this.AxeRare.rewards - this.AxeRare.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeRare.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeRare.energy_cost / 5 * this.ActionDay * this.ValueAOFF;
                        break;
                    case 486823:
                        if (this.AxeEpic)
                            return (this.AxeEpic.rewards - this.AxeEpic.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeEpic.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeEpic.energy_cost / 5 * this.ActionDay * this.ValueAOFF;
                        break;
                    case 486824:
                        if (this.AxeLegendary)
                            return (this.AxeLegendary.rewards - this.AxeLegendary.wood_repair_cost) * this.ActionDay * this.ValueAOFW - this.AxeLegendary.stone_repair_cost * this.ActionDay * this.ValueAOFS + this.AxeLegendary.energy_cost / 5 * this.ActionDay * this.ValueAOFF
                    }
                }
                getName(t) {
                    switch (t) {
                    case 486831:
                        if (this.SpearCommon)
                            return this.SpearCommon.nft_name + " " + this.SpearCommon.rarity;
                    case 486832:
                        if (this.SpearunCommon)
                            return this.SpearunCommon.nft_name + " " + this.SpearunCommon.rarity;
                    case 486833:
                        if (this.Spearrare)
                            return this.Spearrare.nft_name + " " + this.Spearrare.rarity;
                    case 486834:
                        if (this.Spearepic)
                            return this.Spearepic.nft_name + " " + this.Spearepic.rarity;
                    case 486835:
                        if (this.Spearlegendary)
                            return this.Spearlegendary.nft_name + " " + this.Spearlegendary.rarity;
                    case 486825:
                        if (this.pickCommon)
                            return this.pickCommon.nft_name + " " + this.pickCommon.rarity;
                    case 486826:
                        if (this.pickUncommon)
                            return this.pickUncommon.nft_name + " " + this.pickUncommon.rarity;
                    case 486827:
                        if (this.pickRare)
                            return this.pickRare.nft_name + " " + this.pickRare.rarity;
                    case 486830:
                        if (this.pickEpic)
                            return this.pickEpic.nft_name + " " + this.pickEpic.rarity;
                    case 486829:
                        if (this.pickLegendary)
                            return this.pickLegendary.nft_name + " " + this.pickLegendary.rarity;
                    case 486820:
                        if (this.AxeCommon)
                            return this.AxeCommon.nft_name + " " + this.AxeCommon.rarity;
                    case 486821:
                        if (this.AxeUncommon)
                            return this.AxeUncommon.nft_name + " " + this.AxeUncommon.rarity;
                    case 486822:
                        if (this.AxeRare)
                            return this.AxeRare.nft_name + " " + this.AxeRare.rarity;
                    case 486823:
                        if (this.AxeEpic)
                            return this.AxeEpic.nft_name + " " + this.AxeEpic.rarity;
                    case 486824:
                        if (this.AxeLegendary)
                            return this.AxeLegendary.nft_name + " " + this.AxeLegendary.rarity
                    case 497922:
                        return 'Short Bow Common'
                    case 497923:
                        return 'Short Bow Uncommon'
                    }
                }
                getRarity(t) {
                    switch (t) {
                    case 486820:
                    case 486825:
                    case 486831:
                    case 497922:
                        return "common";
                    case 486821:
                    case 486826:
                    case 486832:
                    case 497923:
                        return "uncommon";
                    case 486822:
                    case 486827:
                    case 486833:
                        return "rare";
                    case 486823:
                    case 486830:
                    case 486834:
                        return "epic";
                    case 486824:
                    case 486829:
                    case 486835:
                        return "legendary"
                    }
                }
                secondsToHms(t) {
                    if (isNaN(t))
                        return "00:00:00";
                    t = Math.abs(Number(t));
                    let e = Math.floor(t / 36e5)
                      , n = Math.floor(t % 36e5 / 6e4)
                      , s = Math.floor(t % 36e5 % 6e4 / 1e3)
                      , i = e > 0 ? e : "00"
                      , r = n > 0 ? n : "00"
                      , o = s > 0 ? s : "00";
                    return i = e >= 10 ? e : "0" + e,
                    r = n >= 10 ? n : "0" + n,
                    o = s >= 10 ? s : "0" + s,
                    i + ":" + r + ":" + o
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Yh),Or(Ju),Or(Gh))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-account"]],
                inputs: {
                    ValueAOFF: "ValueAOFF",
                    ValueAOFW: "ValueAOFW",
                    ValueAOFS: "ValueAOFS",
                    ValueWAX: "ValueWAX"
                },
                features: [ae],
                decls: 26,
                vars: 3,
                consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "row", "alert", "alert-info", "m-0", "mwm-box"], [2, "text-align", "center"], [1, "card-header-title", "mb-0"], [1, "md-form", "mb-0", "mt-1"], [1, "small"], [1, "d-inline-block", "w-10", 2, "margin-top", "-42px"], ["type", "text", "id", "PandaWamID", 1, "form-control", "c-white", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "gradbg-lime2", "px-2", "waves-light", 3, "click"], [1, "btn", "btn-sm", "gradbg-red", "px-2", "waves-light", 3, "click"], [1, "m-1"], [4, "ngIf"], ["class", "col-sm-12 mb-4 px-2 text-center", "style", "margin: auto;", 4, "ngIf"], ["class", "d-inline-block w-10", 4, "ngFor", "ngForOf"], [1, "badge", "sm", "mr-2", "my-1", 3, "click"], [1, "col-sm-12", "mb-4", "px-2", "text-center", 2, "margin", "auto"], [1, "card", "card-cascade", "wider"], [1, "view", "view-cascade", "gradient-card-header", "gradbg-grey"], [1, "mb-0"], [1, "d-inline-block", "w-50"], [1, "badge", "gradbg-cyan", "l-font"], [1, "d-inline-block", "w-25", "sss-font"], [1, "badge", "orange", "darken-2", "ss-font"], [1, "badge", "orange", "darken-2"], [1, "badge", "cpu_25"], [1, "progress", 2, "height", "5px", "border", "black 1px solid"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "aria-valuenow"], [1, "sss-font", "mt-2"], [1, "d-inline-block", "w-25", "vtop", "text-right"], [1, "badge", "ssm", "mr-2"], [1, "badge", "sm", "mr-2"], [1, "d-inline-block", "w-50", "vtop", "text-right"], [1, "d-inline-block", "w-25", "vtop"], [1, "d-inline-block", "w-100", "text-right", "vtop"], [1, "d-inline-block", "w-100", "text-center", "vtop"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 1, "d-inline-block", 2, "height", "20px"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 1, "d-inline-block", 2, "height", "20px"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aoff.png", 1, "d-inline-block", 2, "height", "20px"], [1, "d-inline-block", "w-100", "text-left", "vtop"], [1, "ml-2", "badge", "sm", 3, "ngClass"], [1, "d-inline-block", "w-50", "text-left"], [1, "badge", "sm", "grey", "darken-1"], [1, "badge", "sm", "ml-2", 2, "background-color", "rgb(118, 160, 21)"], [1, "d-inline-block", "w-50", "text-right"], [1, "d-inline-block", "w-100", "vtop"], [1, "badge", "md", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "d-inline-block", "w-25", "text-right"], [1, "d-inline-block", "w-25", "text-center"], [1, "badge", "ssm", "mr-2", 3, "ngClass"], [1, "badge", "sm", 3, "ngClass"]],
                template: function(t, e) {
                    1 & t && (Er(0, "div", 0),
                    Er(1, "div", 1),
                    Er(2, "div", 2),
                    Dr(3, "br"),
                    Er(4, "div", 3),
                    Er(5, "div", 4),
                    Er(6, "h4", 5),
                    lo(7, "Checking Accounts"),
                    xr(),
                    Er(8, "div", 6),
                    Er(9, "label"),
                    // lo(10, "Enter your wax ids "),
                    Dr(11, "br"),
                    Er(12, "span", 7),
                    // lo(13, "(Ex: xxxx1.wam)"),
                    xr(),
                    xr(),
                    Er(14, "div", 8),
                    Dr(15, "br"),
                    Er(16, "input", 9),
                    Tr("ngModelChange", function(t) {
                        return e.AddAccountWamID = t
                    }),
                    xr(),
                    xr(),
                    Er(17, "div", 8),
                    Er(18, "button", 10),
                    Tr("click", function() {
                        return e.sendAccount(e.AddAccountWamID)
                    }),
                    lo(19, "Add "),
                    xr(),
                    Er(20, "button", 11),
                    Tr("click", function() {
                        return e.clear()
                    }),
                    lo(21, "Clear All "),
                    xr(),
                    xr(),
                    Dr(22, "hr", 12),
                    Sr(23, ed, 2, 1, "div", 13),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(24, "div", 2),
                    Sr(25, sd, 103, 64, "div", 14),
                    xr(),
                    xr(),
                    xr()),
                    2 & t && (Ys(16),
                    Cr("ngModel", e.AddAccountWamID),
                    Ys(7),
                    Cr("ngIf", e.listAccountWamID),
                    Ys(2),
                    Cr("ngIf", e.showAccount && e.accountWamID))
                },
                directives: [ou, bu, Lu, Ac, bc, yc],
                pipes: [Cc],
                styles: [".gradbg-cyan[_ngcontent-%COMP%]{color:#000;background:linear-gradient(40deg,#5b81a5,#19e4ff)!important}.gradbg-lime2[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#4e9f34,#c4de00)!important}.gradbg-red[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#b60e2c,#e00919)!important}.grey.darken-1[_ngcontent-%COMP%]{background-color:#757575!important}.grey.lighten-2[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.common[_ngcontent-%COMP%]{color:#868686!important;border:3px solid #868686}.uncommon[_ngcontent-%COMP%]{color:#4e9f34!important;border:3px solid #4e9f34}.rare[_ngcontent-%COMP%]{color:#0d1d54!important;border:3px solid #0d1d54}.epic[_ngcontent-%COMP%]{color:#731173!important;border:3px solid #731173}.legendary[_ngcontent-%COMP%]{color:#f3d339!important;border:3px solid #f3d339}.orange[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#d27f12,#c57b0a)!important}.gradbg-dark-green[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#163805,#76a015)!important}.l-font[_ngcontent-%COMP%]{font-size:large}.badge.md[_ngcontent-%COMP%]{padding:4px;font-size:16px}.badge[_ngcontent-%COMP%]{color:#000;border-radius:.125rem;box-shadow:0 2px 5px 0 #00000029,0 2px 10px 0 #0000001f;display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:initial;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.sss-font[_ngcontent-%COMP%]{color:#000;font-size:.75em}.badge.sm[_ngcontent-%COMP%]{padding:3px;font-size:12px}.card.card-cascade.wider[_ngcontent-%COMP%]   .view.view-cascade[_ngcontent-%COMP%]{z-index:2}.card.card-cascade[_ngcontent-%COMP%]   .view.view-cascade.gradient-card-header[_ngcontent-%COMP%]{padding:1.6rem 1rem 1rem;color:#fff;text-align:center}.card.card-cascade[_ngcontent-%COMP%]   .view.view-cascade[_ngcontent-%COMP%]{border-radius:.25rem;box-shadow:0 5px 11px 0 #0000002e,0 4px 15px 0 #00000026}.gradbg-grey[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#d7f2fb,#d7f2fb)!important}"]
            }),
            t
        }
        )();
        function rd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.legendary.craftCost < t.legendary.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.legendary.atomic, "1.0-2"), " \uffe6")
            }
        }
        function od(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.legendary.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function ad(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.epic.craftCost < t.epic.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.epic.atomic, "1.0-2"), " \uffe6")
            }
        }
        function ld(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.epic.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function cd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.rare.craftCost < t.rare.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.rare.atomic, "1.0-2"), " \uffe6")
            }
        }
        function hd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.rare.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function ud(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.uncommon.craftCost < t.uncommon.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.uncommon.atomic, "1.0-2"), " \uffe6")
            }
        }
        function dd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.uncommon.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function pd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.common.craftCost < t.common.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.common.atomic, "1.0-2"), " \uffe6")
            }
        }
        function md(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.common.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        let fd = (()=>{
            class t {
                constructor(t, e, n) {
                    this.ageoffarmingService = t,
                    this.atomicHubService = e,
                    this.shareDataService = n,
                    this.legendary = new ih,
                    this.epic = new ih,
                    this.rare = new ih,
                    this.uncommon = new ih,
                    this.common = new ih,
                    this.ActionDay = 24
                }
                ngOnInit() {
                    this.shareDataService.change.subscribe(t=>{
                        this.ActionDay = t;
                        let e = this.shareDataService.getStoneAxeCommon();
                        this.common.daily = this.ActionDay * e.rewards * this.ValueAOFW.Value - (this.ActionDay * e.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * e.stone_repair_cost * this.ValueAOFS + this.ActionDay * e.energy_cost / 5 * this.ValueAOFF),
                        this.common.production = e.rewards * this.ActionDay,
                        this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily);
                        let n = this.shareDataService.getStoneAxeUncommon();
                        this.uncommon.daily = this.ActionDay * n.rewards * this.ValueAOFW.Value - (this.ActionDay * n.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * n.stone_repair_cost * this.ValueAOFS + this.ActionDay * n.energy_cost / 5 * this.ValueAOFF),
                        this.uncommon.production = n.rewards * this.ActionDay,
                        this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily);
                        let s = this.shareDataService.getStoneAxeRare();
                        this.rare.daily = this.ActionDay * s.rewards * this.ValueAOFW.Value - (this.ActionDay * s.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * s.stone_repair_cost * this.ValueAOFS + this.ActionDay * s.energy_cost / 5 * this.ValueAOFF),
                        this.rare.production = s.rewards * this.ActionDay,
                        this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily);
                        let i = this.shareDataService.getStoneAxeEpic();
                        this.epic.daily = this.ActionDay * i.rewards * this.ValueAOFW.Value - (this.ActionDay * i.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * i.stone_repair_cost * this.ValueAOFS + this.ActionDay * i.energy_cost / 5 * this.ValueAOFF),
                        this.epic.production = i.rewards * this.ActionDay,
                        this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily);
                        let r = this.shareDataService.getStoneAxeLegendary();
                        this.legendary.daily = this.ActionDay * r.rewards * this.ValueAOFW.Value - (this.ActionDay * r.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * r.stone_repair_cost * this.ValueAOFS + this.ActionDay * r.energy_cost / 5 * this.ValueAOFF),
                        this.legendary.production = r.rewards * this.ActionDay,
                        this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486820").then(t=>{
                        t.data[0] && (this.common.atomic = this.getPrice(t),
                        this.common.minted = t.data[0].assets[0].template.issued_supply,
                        this.common.lastSold = t.data[0].last_sold,
                        this.common.totalSold = t.data.length),
                        this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486821").then(t=>{
                        t.data[0] && (this.uncommon.atomic = this.getPrice(t),
                        this.uncommon.minted = t.data[0].assets[0].template.issued_supply,
                        this.uncommon.lastSold = t.data[0].last_sold,
                        this.uncommon.totalSold = t.data.length),
                        this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486822").then(t=>{
                        t.data[0] && (this.rare.atomic = this.getPrice(t),
                        this.rare.minted = t.data[0].assets[0].template.issued_supply,
                        this.rare.lastSold = t.data[0].last_sold,
                        this.rare.totalSold = t.data.length),
                        this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486823").then(t=>{
                        t.data[0] && (this.epic.atomic = this.getPrice(t),
                        this.epic.minted = t.data[0].assets[0].template.issued_supply,
                        this.epic.lastSold = t.data[0].last_sold,
                        this.epic.totalSold = t.data.length),
                        this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486824").then(t=>{
                        t.data[0] && (this.legendary.atomic = this.getPrice(t),
                        this.legendary.minted = t.data[0].assets[0].template.issued_supply,
                        this.legendary.lastSold = t.data[0].last_sold,
                        this.legendary.totalSold = t.data.length),
                        this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily)
                    }
                    )
                }
                wait(t) {
                    for (var e = (new Date).getTime(), n = e; n < e + t; )
                        n = (new Date).getTime()
                }
                ngOnChanges() {
                    let t = this.shareDataService.getStoneAxeCommon();
                    t && (this.common.resourceWOOD = t.wood_craft_cost,
                    this.common.resourceSTONE = t.stone_craft_cost,
                    this.common.production = t.rewards * this.ActionDay,
                    this.common.craftCost = t.wood_craft_cost * this.ValueAOFW.Value + t.stone_craft_cost * this.ValueAOFS,
                    this.common.priceResourceWOOD = t.wood_craft_cost * this.ValueAOFW.Value,
                    this.common.priceResourceSTONE = t.stone_craft_cost * this.ValueAOFS,
                    this.common.daily = this.ActionDay * t.rewards * this.ValueAOFW.Value - (this.ActionDay * t.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * t.stone_repair_cost * this.ValueAOFS + this.ActionDay * t.energy_cost / 5 * this.ValueAOFF),
                    this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily));
                    let e = this.shareDataService.getStoneAxeUncommon();
                    e && (this.uncommon.resourceWOOD = e.wood_craft_cost + this.common.resourceWOOD,
                    this.uncommon.resourceSTONE = e.stone_craft_cost + this.common.resourceSTONE,
                    this.uncommon.production = e.rewards * this.ActionDay,
                    this.uncommon.craftCost = this.uncommon.resourceWOOD * this.ValueAOFW.Value + this.uncommon.resourceSTONE * this.ValueAOFS,
                    this.uncommon.priceResourceWOOD = this.uncommon.resourceWOOD * this.ValueAOFW.Value,
                    this.uncommon.priceResourceSTONE = this.uncommon.resourceSTONE * this.ValueAOFS,
                    this.uncommon.daily = this.ActionDay * e.rewards * this.ValueAOFW.Value - (this.ActionDay * e.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * e.stone_repair_cost * this.ValueAOFS + this.ActionDay * e.energy_cost / 5 * this.ValueAOFF),
                    this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily));
                    let n = this.shareDataService.getStoneAxeRare();
                    n && (this.rare.resourceWOOD = n.wood_craft_cost + this.uncommon.resourceWOOD,
                    this.rare.resourceSTONE = n.stone_craft_cost + this.uncommon.resourceSTONE,
                    this.rare.production = n.rewards * this.ActionDay,
                    this.rare.craftCost = this.rare.resourceWOOD * this.ValueAOFW.Value + this.rare.resourceSTONE * this.ValueAOFS,
                    this.rare.priceResourceWOOD = this.rare.resourceWOOD * this.ValueAOFW.Value,
                    this.rare.priceResourceSTONE = this.rare.resourceSTONE * this.ValueAOFS,
                    this.rare.daily = this.ActionDay * n.rewards * this.ValueAOFW.Value - (this.ActionDay * n.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * n.stone_repair_cost * this.ValueAOFS + this.ActionDay * n.energy_cost / 5 * this.ValueAOFF),
                    this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily));
                    let s = this.shareDataService.getStoneAxeEpic();
                    s && (this.epic.resourceWOOD = s.wood_craft_cost + this.rare.resourceWOOD,
                    this.epic.resourceSTONE = s.stone_craft_cost + this.rare.resourceSTONE,
                    this.epic.production = s.rewards * this.ActionDay,
                    this.epic.craftCost = this.epic.resourceWOOD * this.ValueAOFW.Value + this.epic.resourceSTONE * this.ValueAOFS,
                    this.epic.priceResourceWOOD = this.epic.resourceWOOD * this.ValueAOFW.Value,
                    this.epic.priceResourceSTONE = this.epic.resourceSTONE * this.ValueAOFS,
                    this.epic.daily = this.ActionDay * s.rewards * this.ValueAOFW.Value - (this.ActionDay * s.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * s.stone_repair_cost * this.ValueAOFS + this.ActionDay * s.energy_cost / 5 * this.ValueAOFF),
                    this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily));
                    let i = this.shareDataService.getStoneAxeLegendary();
                    i && (this.legendary.resourceWOOD = i.wood_craft_cost + this.epic.resourceWOOD,
                    this.legendary.resourceSTONE = i.stone_craft_cost + this.epic.resourceSTONE,
                    this.legendary.production = i.rewards * this.ActionDay,
                    this.legendary.craftCost = this.legendary.resourceWOOD * this.ValueAOFW.Value + this.legendary.resourceSTONE * this.ValueAOFS,
                    this.legendary.priceResourceWOOD = this.legendary.resourceWOOD * this.ValueAOFW.Value,
                    this.legendary.priceResourceSTONE = this.legendary.resourceSTONE * this.ValueAOFS,
                    this.legendary.daily = this.ActionDay * i.rewards * this.ValueAOFW.Value - (this.ActionDay * i.wood_repair_cost * this.ValueAOFW.Value + this.ActionDay * i.stone_repair_cost * this.ValueAOFS + this.ActionDay * i.energy_cost / 5 * this.ValueAOFF),
                    this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily))
                }
                getroi(t, e, n) {
                    return t && t < e ? t / n : e / n
                }
                getPrice(t) {
                    return "USD" === t.data[0].listing_symbol ? t.data[0].listing_price / 100 / this.ValueWAX : t.data[0].listing_price / 1e8
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Gh),Or(Ju),Or(Yh))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-wood"]],
                inputs: {
                    ValueAOFF: "ValueAOFF",
                    ValueAOFS: "ValueAOFS",
                    ValueAOFW: "ValueAOFW",
                    ValueWAX: "ValueWAX"
                },
                features: [ae],
                decls: 490,
                vars: 247,
                consts: [[1, "card", "card-cascade", "narrower", 2, "background-color", "wheat"], [1, "view", "view-cascade", "gradient-card-header", "blue-gradient", "narrower", "py-2", "mx-4", "mb-3", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "sm", "grey", "darken-2"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 1, "mr-1", 2, "height", "18px"], [1, "badge", "sm"], [1, "badge", "ssm", 3, "ngClass"], ["href", "https://wax.alcor.exchange/trade/aofw-ageoftokenss_wax-eosio.token", "target", "_blank", 2, "color", "#fff", "font-size", "xx-small"], [1, ""], [1, "d-block", 2, "margin-left", "20px", "margin-right", "20px"], [1, "d-block", "mt-3"], [1, "d-inline-block", "w-45"], [1, "d-block", "fw_craft"], [1, "d-inline-block", "w-50", "text-left"], [1, "badge", "ssm"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 2, "height", "16px"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 2, "height", "16px"], [1, "badge", "md", 3, "ngClass"], [1, "badge", "md"], [1, "d-inline-block", "w-10", 2, "line-height", "10px", "text-align", "center"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Legendary&match=axe&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["autoplay", "true", "muted", "true", "src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_axe_Legendary.mp4", 1, "video-fluid"], [1, "d-block", "mt-1"], [1, "badge", "grey", "darken-3", "ssm", 2, "min-width", "15px"], [1, "d-inline-block", "w-50", "text-right"], [1, "badge", "sm", 3, "ngClass"], ["class", "badge md", 3, "ngClass", 4, "ngIf"], ["class", "badge md", 4, "ngIf"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 1, "d-inline-block", 2, "height", "20px"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Epic&match=axe&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["autoplay", "true", "muted", "true", "src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_axe_Epic.mp4", 1, "video-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Rare&match=axe&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_Axe_rare.png", 1, "img-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Uncommon&match=axe&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_Axe_uncommun.png", 1, "img-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Common&match=axe&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_Axe_common.png", 1, "img-fluid"]],
                template: function(t, e) {
                    1 & t && (Er(0, "div", 0),
                    Er(1, "div", 1),
                    Dr(2, "div"),
                    Er(3, "div", 2),
                    Dr(4, "img", 3),
                    lo(5, " WOOD "),
                    Dr(6, "img", 3),
                    Dr(7, "br"),
                    Er(8, "span", 4),
                    lo(9),
                    Ta(10, "number"),
                    xr(),
                    Dr(11, "br"),
                    lo(12),
                    Ta(13, "number"),
                    Er(14, "span", 5),
                    lo(15),
                    Ta(16, "number"),
                    xr(),
                    Dr(17, "br"),
                    lo(18),
                    Ta(19, "number"),
                    Er(20, "span", 5),
                    lo(21),
                    Ta(22, "number"),
                    xr(),
                    Dr(23, "br"),
                    Er(24, "a", 6),
                    lo(25, " Click to open Alcor Exchange "),
                    xr(),
                    xr(),
                    Dr(26, "div"),
                    xr(),
                    Er(27, "div", 7),
                    Er(28, "div", 8),
                    Er(29, "div", 9),
                    Er(30, "div", 10),
                    Er(31, "div", 11),
                    Er(32, "div", 12),
                    Er(33, "span", 13),
                    lo(34),
                    Ta(35, "number"),
                    xr(),
                    Dr(36, "img", 14),
                    xr(),
                    Er(37, "div", 12),
                    Er(38, "span", 13),
                    lo(39),
                    Ta(40, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(41, "div", 11),
                    Er(42, "div", 12),
                    Er(43, "span", 13),
                    lo(44),
                    Ta(45, "number"),
                    xr(),
                    Dr(46, "img", 15),
                    xr(),
                    Er(47, "div", 12),
                    Er(48, "span", 13),
                    lo(49),
                    Ta(50, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(51, "div", 11),
                    Er(52, "div", 12),
                    Er(53, "span", 4),
                    lo(54, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(55, "div", 12),
                    Er(56, "span", 16),
                    lo(57),
                    Ta(58, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(59, "div", 11),
                    Er(60, "div", 12),
                    Er(61, "span", 4),
                    lo(62, "Craft $"),
                    xr(),
                    xr(),
                    Er(63, "div", 12),
                    Er(64, "span", 17),
                    lo(65),
                    Ta(66, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(67, "div", 11),
                    Er(68, "div", 12),
                    Er(69, "span", 13),
                    lo(70, "Minted :"),
                    xr(),
                    xr(),
                    Er(71, "div", 12),
                    Er(72, "span", 13),
                    lo(73),
                    Ta(74, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(75, "div", 18),
                    Er(76, "a", 19),
                    Dr(77, "video", 20),
                    Er(78, "div", 21),
                    Er(79, "span", 22),
                    lo(80, "Buy "),
                    Dr(81, "BR"),
                    lo(82),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(83, "div", 10),
                    Er(84, "div", 11),
                    Er(85, "div", 23),
                    Er(86, "span", 4),
                    lo(87, "Daily :"),
                    xr(),
                    xr(),
                    Er(88, "div", 23),
                    Er(89, "span", 24),
                    lo(90),
                    Ta(91, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(92, "div", 11),
                    Er(93, "div", 23),
                    Er(94, "span", 13),
                    lo(95, "ROI :"),
                    xr(),
                    xr(),
                    Er(96, "div", 23),
                    Er(97, "span", 13),
                    lo(98),
                    Ta(99, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(100, "div", 11),
                    Er(101, "div", 23),
                    Er(102, "span", 4),
                    lo(103, "Atomic :"),
                    xr(),
                    xr(),
                    Er(104, "div", 23),
                    Sr(105, rd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(106, "div", 11),
                    Er(107, "div", 23),
                    Er(108, "span", 4),
                    lo(109, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(110, "div", 23),
                    Sr(111, od, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(112, "div", 11),
                    Er(113, "div", 23),
                    Er(114, "span", 13),
                    lo(115, "Wood Daily *:"),
                    xr(),
                    xr(),
                    Er(116, "div", 23),
                    Er(117, "span", 13),
                    lo(118),
                    Ta(119, "number"),
                    Dr(120, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(121, "hr"),
                    Er(122, "div", 10),
                    Er(123, "div", 11),
                    Er(124, "div", 12),
                    Er(125, "span", 13),
                    lo(126),
                    Ta(127, "number"),
                    xr(),
                    Dr(128, "img", 14),
                    xr(),
                    Er(129, "div", 12),
                    Er(130, "span", 13),
                    lo(131),
                    Ta(132, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(133, "div", 11),
                    Er(134, "div", 12),
                    Er(135, "span", 13),
                    lo(136),
                    Ta(137, "number"),
                    xr(),
                    Dr(138, "img", 15),
                    xr(),
                    Er(139, "div", 12),
                    Er(140, "span", 13),
                    lo(141),
                    Ta(142, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(143, "div", 11),
                    Er(144, "div", 12),
                    Er(145, "span", 4),
                    lo(146, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(147, "div", 12),
                    Er(148, "span", 16),
                    lo(149),
                    Ta(150, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(151, "div", 11),
                    Er(152, "div", 12),
                    Er(153, "span", 4),
                    lo(154, "Craft $"),
                    xr(),
                    xr(),
                    Er(155, "div", 12),
                    Er(156, "span", 17),
                    lo(157),
                    Ta(158, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(159, "div", 11),
                    Er(160, "div", 12),
                    Er(161, "span", 13),
                    lo(162, "Minted :"),
                    xr(),
                    xr(),
                    Er(163, "div", 12),
                    Er(164, "span", 13),
                    lo(165),
                    Ta(166, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(167, "div", 18),
                    Er(168, "a", 28),
                    Dr(169, "video", 29),
                    Er(170, "div", 21),
                    Er(171, "span", 22),
                    lo(172, "Buy "),
                    Dr(173, "BR"),
                    lo(174),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(175, "div", 10),
                    Er(176, "div", 11),
                    Er(177, "div", 23),
                    Er(178, "span", 4),
                    lo(179, "Daily :"),
                    xr(),
                    xr(),
                    Er(180, "div", 23),
                    Er(181, "span", 24),
                    lo(182),
                    Ta(183, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(184, "div", 11),
                    Er(185, "div", 23),
                    Er(186, "span", 13),
                    lo(187, "ROI :"),
                    xr(),
                    xr(),
                    Er(188, "div", 23),
                    Er(189, "span", 13),
                    lo(190),
                    Ta(191, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(192, "div", 11),
                    Er(193, "div", 23),
                    Er(194, "span", 4),
                    lo(195, "Atomic :"),
                    xr(),
                    xr(),
                    Er(196, "div", 23),
                    Sr(197, ad, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(198, "div", 11),
                    Er(199, "div", 23),
                    Er(200, "span", 4),
                    lo(201, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(202, "div", 23),
                    Sr(203, ld, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(204, "div", 11),
                    Er(205, "div", 23),
                    Er(206, "span", 13),
                    lo(207, "Wood Daily *:"),
                    xr(),
                    xr(),
                    Er(208, "div", 23),
                    Er(209, "span", 13),
                    lo(210),
                    Ta(211, "number"),
                    Dr(212, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(213, "hr"),
                    Er(214, "div", 10),
                    Er(215, "div", 11),
                    Er(216, "div", 12),
                    Er(217, "span", 13),
                    lo(218),
                    Ta(219, "number"),
                    xr(),
                    Dr(220, "img", 14),
                    xr(),
                    Er(221, "div", 12),
                    Er(222, "span", 13),
                    lo(223),
                    Ta(224, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(225, "div", 11),
                    Er(226, "div", 12),
                    Er(227, "span", 13),
                    lo(228),
                    Ta(229, "number"),
                    xr(),
                    Dr(230, "img", 15),
                    xr(),
                    Er(231, "div", 12),
                    Er(232, "span", 13),
                    lo(233),
                    Ta(234, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(235, "div", 11),
                    Er(236, "div", 12),
                    Er(237, "span", 4),
                    lo(238, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(239, "div", 12),
                    Er(240, "span", 16),
                    lo(241),
                    Ta(242, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(243, "div", 11),
                    Er(244, "div", 12),
                    Er(245, "span", 4),
                    lo(246, "Craft $"),
                    xr(),
                    xr(),
                    Er(247, "div", 12),
                    Er(248, "span", 17),
                    lo(249),
                    Ta(250, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(251, "div", 11),
                    Er(252, "div", 12),
                    Er(253, "span", 13),
                    lo(254, "Minted :"),
                    xr(),
                    xr(),
                    Er(255, "div", 12),
                    Er(256, "span", 13),
                    lo(257),
                    Ta(258, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(259, "div", 18),
                    Er(260, "a", 30),
                    Dr(261, "img", 31),
                    Er(262, "div", 21),
                    Er(263, "span", 22),
                    lo(264, "Buy "),
                    Dr(265, "BR"),
                    lo(266),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(267, "div", 10),
                    Er(268, "div", 11),
                    Er(269, "div", 23),
                    Er(270, "span", 4),
                    lo(271, "Daily :"),
                    xr(),
                    xr(),
                    Er(272, "div", 23),
                    Er(273, "span", 24),
                    lo(274),
                    Ta(275, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(276, "div", 11),
                    Er(277, "div", 23),
                    Er(278, "span", 13),
                    lo(279, "ROI :"),
                    xr(),
                    xr(),
                    Er(280, "div", 23),
                    Er(281, "span", 13),
                    lo(282),
                    Ta(283, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(284, "div", 11),
                    Er(285, "div", 23),
                    Er(286, "span", 4),
                    lo(287, "Atomic :"),
                    xr(),
                    xr(),
                    Er(288, "div", 23),
                    Sr(289, cd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(290, "div", 11),
                    Er(291, "div", 23),
                    Er(292, "span", 4),
                    lo(293, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(294, "div", 23),
                    Sr(295, hd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(296, "div", 11),
                    Er(297, "div", 23),
                    Er(298, "span", 13),
                    lo(299, "Wood Daily *:"),
                    xr(),
                    xr(),
                    Er(300, "div", 23),
                    Er(301, "span", 13),
                    lo(302),
                    Ta(303, "number"),
                    Dr(304, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(305, "hr"),
                    Er(306, "div", 10),
                    Er(307, "div", 11),
                    Er(308, "div", 12),
                    Er(309, "span", 13),
                    lo(310),
                    Ta(311, "number"),
                    xr(),
                    Dr(312, "img", 14),
                    xr(),
                    Er(313, "div", 12),
                    Er(314, "span", 13),
                    lo(315),
                    Ta(316, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(317, "div", 11),
                    Er(318, "div", 12),
                    Er(319, "span", 13),
                    lo(320),
                    Ta(321, "number"),
                    xr(),
                    Dr(322, "img", 15),
                    xr(),
                    Er(323, "div", 12),
                    Er(324, "span", 13),
                    lo(325),
                    Ta(326, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(327, "div", 11),
                    Er(328, "div", 12),
                    Er(329, "span", 4),
                    lo(330, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(331, "div", 12),
                    Er(332, "span", 16),
                    lo(333),
                    Ta(334, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(335, "div", 11),
                    Er(336, "div", 12),
                    Er(337, "span", 4),
                    lo(338, "Craft $"),
                    xr(),
                    xr(),
                    Er(339, "div", 12),
                    Er(340, "span", 17),
                    lo(341),
                    Ta(342, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(343, "div", 11),
                    Er(344, "div", 12),
                    Er(345, "span", 13),
                    lo(346, "Minted :"),
                    xr(),
                    xr(),
                    Er(347, "div", 12),
                    Er(348, "span", 13),
                    lo(349),
                    Ta(350, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(351, "div", 18),
                    Er(352, "a", 32),
                    Dr(353, "img", 33),
                    Er(354, "div", 21),
                    Er(355, "span", 22),
                    lo(356, "Buy "),
                    Dr(357, "BR"),
                    lo(358),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(359, "div", 10),
                    Er(360, "div", 11),
                    Er(361, "div", 23),
                    Er(362, "span", 4),
                    lo(363, "Daily :"),
                    xr(),
                    xr(),
                    Er(364, "div", 23),
                    Er(365, "span", 24),
                    lo(366),
                    Ta(367, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(368, "div", 11),
                    Er(369, "div", 23),
                    Er(370, "span", 13),
                    lo(371, "ROI :"),
                    xr(),
                    xr(),
                    Er(372, "div", 23),
                    Er(373, "span", 13),
                    lo(374),
                    Ta(375, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(376, "div", 11),
                    Er(377, "div", 23),
                    Er(378, "span", 4),
                    lo(379, "Atomic :"),
                    xr(),
                    xr(),
                    Er(380, "div", 23),
                    Sr(381, ud, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(382, "div", 11),
                    Er(383, "div", 23),
                    Er(384, "span", 4),
                    lo(385, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(386, "div", 23),
                    Sr(387, dd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(388, "div", 11),
                    Er(389, "div", 23),
                    Er(390, "span", 13),
                    lo(391, "Wood Daily *:"),
                    xr(),
                    xr(),
                    Er(392, "div", 23),
                    Er(393, "span", 13),
                    lo(394),
                    Ta(395, "number"),
                    Dr(396, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(397, "hr"),
                    Er(398, "div", 10),
                    Er(399, "div", 11),
                    Er(400, "div", 12),
                    Er(401, "span", 13),
                    lo(402),
                    Ta(403, "number"),
                    xr(),
                    Dr(404, "img", 14),
                    xr(),
                    Er(405, "div", 12),
                    Er(406, "span", 13),
                    lo(407),
                    Ta(408, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(409, "div", 11),
                    Er(410, "div", 12),
                    Er(411, "span", 13),
                    lo(412),
                    Ta(413, "number"),
                    xr(),
                    Dr(414, "img", 15),
                    xr(),
                    Er(415, "div", 12),
                    Er(416, "span", 13),
                    lo(417),
                    Ta(418, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(419, "div", 11),
                    Er(420, "div", 12),
                    Er(421, "span", 4),
                    lo(422, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(423, "div", 12),
                    Er(424, "span", 16),
                    lo(425),
                    Ta(426, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(427, "div", 11),
                    Er(428, "div", 12),
                    Er(429, "span", 4),
                    lo(430, "Craft $"),
                    xr(),
                    xr(),
                    Er(431, "div", 12),
                    Er(432, "span", 17),
                    lo(433),
                    Ta(434, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(435, "div", 11),
                    Er(436, "div", 12),
                    Er(437, "span", 13),
                    lo(438, "Minted :"),
                    xr(),
                    xr(),
                    Er(439, "div", 12),
                    Er(440, "span", 13),
                    lo(441),
                    Ta(442, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(443, "div", 18),
                    Er(444, "a", 34),
                    Dr(445, "img", 35),
                    Er(446, "div", 21),
                    Er(447, "span", 22),
                    lo(448, "Buy "),
                    Dr(449, "BR"),
                    lo(450),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(451, "div", 10),
                    Er(452, "div", 11),
                    Er(453, "div", 23),
                    Er(454, "span", 4),
                    lo(455, "Daily :"),
                    xr(),
                    xr(),
                    Er(456, "div", 23),
                    Er(457, "span", 24),
                    lo(458),
                    Ta(459, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(460, "div", 11),
                    Er(461, "div", 23),
                    Er(462, "span", 13),
                    lo(463, "ROI :"),
                    xr(),
                    xr(),
                    Er(464, "div", 23),
                    Er(465, "span", 13),
                    lo(466),
                    Ta(467, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(468, "div", 11),
                    Er(469, "div", 23),
                    Er(470, "span", 4),
                    lo(471, "Atomic :"),
                    xr(),
                    xr(),
                    Er(472, "div", 23),
                    Sr(473, pd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(474, "div", 11),
                    Er(475, "div", 23),
                    Er(476, "span", 4),
                    lo(477, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(478, "div", 23),
                    Sr(479, md, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(480, "div", 11),
                    Er(481, "div", 23),
                    Er(482, "span", 13),
                    lo(483, "Wood Daily *:"),
                    xr(),
                    xr(),
                    Er(484, "div", 23),
                    Er(485, "span", 13),
                    lo(486),
                    Ta(487, "number"),
                    Dr(488, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(489, "br"),
                    xr(),
                    xr(),
                    xr()),
                    2 & t && (Ys(9),
                    ho("", Pa(10, 82, e.ValueAOFW.Value, "1.2-6"), " \uffe6 "),
                    Ys(3),
                    ho(" Vol. 24h : ", Pa(13, 85, e.ValueAOFW.Volume_D, "1.2-2"), " \uffe6 "),
                    Ys(2),
                    Cr("ngClass", e.ValueAOFW.Value_D >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho(" ", Pa(16, 88, e.ValueAOFW.Value_D, "1.2-2"), " %"),
                    Ys(3),
                    ho(" Vol. 7D : ", Pa(19, 91, e.ValueAOFW.Volume_W, "1.2-2"), " \uffe6 "),
                    Ys(2),
                    Cr("ngClass", e.ValueAOFW.Value_W >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho(" ", Pa(22, 94, e.ValueAOFW.Value_W, "1.2-2"), " %"),
                    Ys(13),
                    co(Pa(35, 97, e.legendary.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(40, 100, e.legendary.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(45, 103, e.legendary.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(50, 106, e.legendary.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.legendary.craftCost > e.legendary.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(58, 109, e.legendary.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(66, 112, e.legendary.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(74, 115, e.legendary.minted, "1.0-0")),
                    Ys(9),
                    co(e.legendary.totalSold),
                    Ys(7),
                    Cr("ngClass", e.legendary.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(91, 118, e.legendary.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(99, 121, e.legendary.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.legendary.atomic),
                    Ys(6),
                    Cr("ngIf", e.legendary.atomic),
                    Ys(7),
                    ho("", Pa(119, 124, e.legendary.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(127, 127, e.epic.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(132, 130, e.epic.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(137, 133, e.epic.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(142, 136, e.epic.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.epic.craftCost > e.epic.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(150, 139, e.epic.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(158, 142, e.epic.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(166, 145, e.epic.minted, "1.0-0")),
                    Ys(9),
                    co(e.epic.totalSold),
                    Ys(7),
                    Cr("ngClass", e.epic.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(183, 148, e.epic.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(191, 151, e.epic.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.epic.atomic),
                    Ys(6),
                    Cr("ngIf", e.epic.atomic),
                    Ys(7),
                    ho("", Pa(211, 154, e.epic.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(219, 157, e.rare.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(224, 160, e.rare.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(229, 163, e.rare.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(234, 166, e.rare.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.rare.craftCost > e.rare.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(242, 169, e.rare.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(250, 172, e.rare.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(258, 175, e.rare.minted, "1.0-0")),
                    Ys(9),
                    co(e.rare.totalSold),
                    Ys(7),
                    Cr("ngClass", e.rare.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(275, 178, e.rare.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(283, 181, e.rare.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.rare.atomic),
                    Ys(6),
                    Cr("ngIf", e.rare.atomic),
                    Ys(7),
                    ho("", Pa(303, 184, e.rare.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(311, 187, e.uncommon.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(316, 190, e.uncommon.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(321, 193, e.uncommon.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(326, 196, e.uncommon.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.uncommon.craftCost > e.uncommon.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(334, 199, e.uncommon.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(342, 202, e.uncommon.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(350, 205, e.uncommon.minted, "1.0-0")),
                    Ys(9),
                    co(e.uncommon.totalSold),
                    Ys(7),
                    Cr("ngClass", e.uncommon.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(367, 208, e.uncommon.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(375, 211, e.uncommon.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.uncommon.atomic),
                    Ys(6),
                    Cr("ngIf", e.uncommon.atomic),
                    Ys(7),
                    ho("", Pa(395, 214, e.uncommon.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(403, 217, e.common.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(408, 220, e.common.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(413, 223, e.common.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(418, 226, e.common.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.common.craftCost > e.common.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(426, 229, e.common.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(434, 232, e.common.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(442, 235, e.common.minted, "1.0-0")),
                    Ys(9),
                    co(e.common.totalSold),
                    Ys(7),
                    Cr("ngClass", e.common.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(459, 238, e.common.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(467, 241, e.common.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.common.atomic),
                    Ys(6),
                    Cr("ngIf", e.common.atomic),
                    Ys(7),
                    ho("", Pa(487, 244, e.common.production, "1.0-0"), " "))
                },
                directives: [yc, Ac],
                pipes: [Cc],
                styles: [".img-fluid[_ngcontent-%COMP%], .video-fluid[_ngcontent-%COMP%]{max-width:100%}.badge.sm[_ngcontent-%COMP%]{padding:3px;font-size:12px}.grey.darken-2[_ngcontent-%COMP%]{background-color:#616161!important}.gradbg-cyan[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#5b81a5,#19e4ff)!important}.badge.ssm[_ngcontent-%COMP%]{padding:2px;font-size:10px}.gradbg-lime2[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#4e9f34,#c4de00)!important}.gradbg-red[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#6d091e,tomato)!important}.badge[_ngcontent-%COMP%]{color:#000!important;border-radius:.125rem;box-shadow:0 2px 5px 0 #00000029,0 2px 10px 0 #0000001f;display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:initial;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.w-50[_ngcontent-%COMP%]{width:50%!important}.w-10[_ngcontent-%COMP%]{width:10%!important}.w-20[_ngcontent-%COMP%]{width:20%!important}.w-40[_ngcontent-%COMP%]{width:40%!important}.w-45[_ngcontent-%COMP%]{width:45%!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]
            }),
            t
        }
        )();
        function gd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.legendary.craftCost < t.legendary.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.legendary.atomic, "1.0-2"), " \uffe6")
            }
        }
        function _d(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.legendary.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function yd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.epic.craftCost < t.epic.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.epic.atomic, "1.0-2"), " \uffe6")
            }
        }
        function vd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.epic.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function bd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.rare.craftCost < t.rare.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.rare.atomic, "1.0-2"), " \uffe6")
            }
        }
        function wd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.rare.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function Ad(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.uncommon.craftCost < t.uncommon.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.uncommon.atomic, "1.0-2"), " \uffe6")
            }
        }
        function Sd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.uncommon.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function Od(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.common.craftCost < t.common.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.common.atomic, "1.0-2"), " \uffe6")
            }
        }
        function Cd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.common.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        let kd = (()=>{
            class t {
                constructor(t, e, n) {
                    this.ageoffarmingService = t,
                    this.atomicHubService = e,
                    this.shareDataService = n,
                    this.legendary = new ih,
                    this.epic = new ih,
                    this.rare = new ih,
                    this.uncommon = new ih,
                    this.common = new ih,
                    this.ActionDay = 24
                }
                ngOnInit() {
                    this.shareDataService.change.subscribe(t=>{
                        this.ActionDay = t;
                        let e = this.shareDataService.getStonePickCommon();
                        this.common.daily = this.ActionDay * e.rewards * this.ValueAOFS.Value - (this.ActionDay * e.wood_repair_cost * this.ValueAOFW + this.ActionDay * e.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * e.energy_cost / 5 * this.ValueAOFF),
                        this.common.production = e.rewards * this.ActionDay,
                        this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily);
                        let n = this.shareDataService.getStonePickUncommon();
                        this.uncommon.daily = this.ActionDay * n.rewards * this.ValueAOFS.Value - (this.ActionDay * n.wood_repair_cost * this.ValueAOFW + this.ActionDay * n.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * n.energy_cost / 5 * this.ValueAOFF),
                        this.uncommon.production = n.rewards * this.ActionDay,
                        this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily);
                        let s = this.shareDataService.getStonePickRare();
                        this.rare.daily = this.ActionDay * s.rewards * this.ValueAOFS.Value - (this.ActionDay * s.wood_repair_cost * this.ValueAOFW + this.ActionDay * s.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * s.energy_cost / 5 * this.ValueAOFF),
                        this.rare.production = s.rewards * this.ActionDay,
                        this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily);
                        let i = this.shareDataService.getStonePickEpic();
                        this.epic.daily = this.ActionDay * i.rewards * this.ValueAOFS.Value - (this.ActionDay * i.wood_repair_cost * this.ValueAOFW + this.ActionDay * i.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * i.energy_cost / 5 * this.ValueAOFF),
                        this.epic.production = i.rewards * this.ActionDay,
                        this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily);
                        let r = this.shareDataService.getStonePickLegendary();
                        this.legendary.daily = this.ActionDay * r.rewards * this.ValueAOFS.Value - (this.ActionDay * r.wood_repair_cost * this.ValueAOFW + this.ActionDay * r.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * r.energy_cost / 5 * this.ValueAOFF),
                        this.legendary.production = r.rewards * this.ActionDay,
                        this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486825").then(t=>{
                        t.data[0] && (this.common.atomic = this.getPrice(t),
                        this.common.minted = t.data[0].assets[0].template.issued_supply,
                        this.common.lastSold = t.data[0].last_sold,
                        this.common.totalSold = t.data.length),
                        this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486826").then(t=>{
                        t.data[0] && (this.uncommon.atomic = this.getPrice(t),
                        this.uncommon.minted = t.data[0].assets[0].template.issued_supply,
                        this.uncommon.lastSold = t.data[0].last_sold,
                        this.uncommon.totalSold = t.data.length),
                        this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486827").then(t=>{
                        t.data[0] && (this.rare.atomic = this.getPrice(t),
                        this.rare.minted = t.data[0].assets[0].template.issued_supply,
                        this.rare.lastSold = t.data[0].last_sold,
                        this.rare.totalSold = t.data.length),
                        this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486830").then(t=>{
                        t.data[0] && (this.epic.atomic = this.getPrice(t),
                        this.epic.minted = t.data[0].assets[0].template.issued_supply,
                        this.epic.lastSold = t.data[0].last_sold,
                        this.epic.totalSold = t.data.length),
                        this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486829").then(t=>{
                        t.data[0] && (this.legendary.atomic = this.getPrice(t),
                        this.legendary.minted = t.data[0].assets[0].template.issued_supply,
                        this.legendary.lastSold = t.data[0].last_sold,
                        this.legendary.totalSold = t.data.length),
                        this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily)
                    }
                    )
                }
                wait(t) {
                    for (var e = (new Date).getTime(), n = e; n < e + t; )
                        n = (new Date).getTime()
                }
                ngOnChanges() {
                    let t = this.shareDataService.getStonePickCommon();
                    t && (this.common.resourceWOOD = t.wood_craft_cost,
                    this.common.resourceSTONE = t.stone_craft_cost,
                    this.common.production = t.rewards * this.ActionDay,
                    this.common.craftCost = t.wood_craft_cost * this.ValueAOFW + t.stone_craft_cost * this.ValueAOFS.Value,
                    this.common.priceResourceWOOD = t.wood_craft_cost * this.ValueAOFW,
                    this.common.priceResourceSTONE = t.stone_craft_cost * this.ValueAOFS.Value,
                    this.common.daily = this.ActionDay * t.rewards * this.ValueAOFS.Value - (this.ActionDay * t.wood_repair_cost * this.ValueAOFW + this.ActionDay * t.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * t.energy_cost / 5 * this.ValueAOFF),
                    this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily));
                    let e = this.shareDataService.getStonePickUncommon();
                    e && (this.uncommon.resourceWOOD = e.wood_craft_cost + this.common.resourceWOOD,
                    this.uncommon.resourceSTONE = e.stone_craft_cost + this.common.resourceSTONE,
                    this.uncommon.production = e.rewards * this.ActionDay,
                    this.uncommon.craftCost = this.uncommon.resourceWOOD * this.ValueAOFW + this.uncommon.resourceSTONE * this.ValueAOFS.Value,
                    this.uncommon.priceResourceWOOD = this.uncommon.resourceWOOD * this.ValueAOFW,
                    this.uncommon.priceResourceSTONE = this.uncommon.resourceSTONE * this.ValueAOFS.Value,
                    this.uncommon.daily = this.ActionDay * e.rewards * this.ValueAOFS.Value - (this.ActionDay * e.wood_repair_cost * this.ValueAOFW + this.ActionDay * e.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * e.energy_cost / 5 * this.ValueAOFF),
                    this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily));
                    let n = this.shareDataService.getStonePickRare();
                    n && (this.rare.resourceWOOD = n.wood_craft_cost + this.uncommon.resourceWOOD,
                    this.rare.resourceSTONE = n.stone_craft_cost + this.uncommon.resourceSTONE,
                    this.rare.production = n.rewards * this.ActionDay,
                    this.rare.craftCost = this.rare.resourceWOOD * this.ValueAOFW + this.rare.resourceSTONE * this.ValueAOFS.Value,
                    this.rare.priceResourceWOOD = this.rare.resourceWOOD * this.ValueAOFW,
                    this.rare.priceResourceSTONE = this.rare.resourceSTONE * this.ValueAOFS.Value,
                    this.rare.daily = this.ActionDay * n.rewards * this.ValueAOFS.Value - (this.ActionDay * n.wood_repair_cost * this.ValueAOFW + this.ActionDay * n.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * n.energy_cost / 5 * this.ValueAOFF),
                    this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily));
                    let s = this.shareDataService.getStonePickEpic();
                    s && (this.epic.resourceWOOD = s.wood_craft_cost + this.rare.resourceWOOD,
                    this.epic.resourceSTONE = s.stone_craft_cost + this.rare.resourceSTONE,
                    this.epic.production = s.rewards * this.ActionDay,
                    this.epic.craftCost = this.epic.resourceWOOD * this.ValueAOFW + this.epic.resourceSTONE * this.ValueAOFS.Value,
                    this.epic.priceResourceWOOD = this.epic.resourceWOOD * this.ValueAOFW,
                    this.epic.priceResourceSTONE = this.epic.resourceSTONE * this.ValueAOFS.Value,
                    this.epic.daily = this.ActionDay * s.rewards * this.ValueAOFS.Value - (this.ActionDay * s.wood_repair_cost * this.ValueAOFW + this.ActionDay * s.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * s.energy_cost / 5 * this.ValueAOFF),
                    this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily));
                    let i = this.shareDataService.getStonePickLegendary();
                    i && (this.legendary.resourceWOOD = i.wood_craft_cost + this.epic.resourceWOOD,
                    this.legendary.resourceSTONE = i.stone_craft_cost + this.epic.resourceSTONE,
                    this.legendary.production = i.rewards * this.ActionDay,
                    this.legendary.craftCost = this.legendary.resourceWOOD * this.ValueAOFW + this.legendary.resourceSTONE * this.ValueAOFS.Value,
                    this.legendary.priceResourceWOOD = this.legendary.resourceWOOD * this.ValueAOFW,
                    this.legendary.priceResourceSTONE = this.legendary.resourceSTONE * this.ValueAOFS.Value,
                    this.legendary.daily = this.ActionDay * i.rewards * this.ValueAOFS.Value - (this.ActionDay * i.wood_repair_cost * this.ValueAOFW + this.ActionDay * i.stone_repair_cost * this.ValueAOFS.Value + this.ActionDay * i.energy_cost / 5 * this.ValueAOFF),
                    this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily))
                }
                getroi(t, e, n) {
                    return t && t < e ? t / n : e / n
                }
                getPrice(t) {
                    return "USD" === t.data[0].listing_symbol ? t.data[0].listing_price / 100 / this.ValueWAX : t.data[0].listing_price / 1e8
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Gh),Or(Ju),Or(Yh))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-stone"]],
                inputs: {
                    ValueAOFF: "ValueAOFF",
                    ValueAOFS: "ValueAOFS",
                    ValueAOFW: "ValueAOFW",
                    ValueWAX: "ValueWAX"
                },
                features: [ae],
                decls: 490,
                vars: 247,
                consts: [[1, "card", "card-cascade", "narrower", 2, "background-color", "wheat"], [1, "view", "view-cascade", "gradient-card-header", "blue-gradient", "narrower", "py-2", "mx-4", "mb-3", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "sm", "grey", "darken-2"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 1, "mr-1", 2, "height", "18px"], [1, "badge", "sm"], [1, "badge", "ssm", 3, "ngClass"], ["href", "https://wax.alcor.exchange/trade/aofs-ageoftokenss_wax-eosio.token", "target", "_blank", 2, "color", "#fff", "font-size", "xx-small"], [1, ""], [1, "d-block", 2, "margin-left", "20px", "margin-right", "20px"], [1, "d-block", "mt-3"], [1, "d-inline-block", "w-45"], [1, "d-block", "fw_craft"], [1, "d-inline-block", "w-50", "text-left"], [1, "badge", "ssm"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 2, "height", "16px"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 2, "height", "16px"], [1, "badge", "md", 3, "ngClass"], [1, "badge", "md"], [1, "d-inline-block", "w-10", 2, "line-height", "10px", "text-align", "center"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Legendary&match=pick&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["autoplay", "true", "muted", "true", "src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_pick_Legendary.mp4", 1, "video-fluid"], [1, "d-block", "mt-1"], [1, "badge", "grey", "darken-3", "ssm", 2, "min-width", "15px"], [1, "d-inline-block", "w-50", "text-right"], [1, "badge", "sm", 3, "ngClass"], ["class", "badge md", 3, "ngClass", 4, "ngIf"], ["class", "badge md", 4, "ngIf"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 1, "d-inline-block", 2, "height", "20px"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Epic&match=pick&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["autoplay", "true", "muted", "true", "src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_pick_Epic.mp4", 1, "video-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Rare&match=pick&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_pick_rare.png", 1, "img-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Uncommon&match=pick&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_pick_uncommon.png", 1, "img-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Common&match=pick&order=asc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_pick.png", 1, "img-fluid"]],
                template: function(t, e) {
                    1 & t && (Er(0, "div", 0),
                    Er(1, "div", 1),
                    Dr(2, "div"),
                    Er(3, "div", 2),
                    Dr(4, "img", 3),
                    lo(5, " STONE "),
                    Dr(6, "img", 3),
                    Dr(7, "br"),
                    Er(8, "span", 4),
                    lo(9),
                    Ta(10, "number"),
                    xr(),
                    Dr(11, "br"),
                    lo(12),
                    Ta(13, "number"),
                    Er(14, "span", 5),
                    lo(15),
                    Ta(16, "number"),
                    xr(),
                    Dr(17, "br"),
                    lo(18),
                    Ta(19, "number"),
                    Er(20, "span", 5),
                    lo(21),
                    Ta(22, "number"),
                    xr(),
                    Dr(23, "br"),
                    Er(24, "a", 6),
                    lo(25, " Click to open Alcor Exchange "),
                    xr(),
                    xr(),
                    Dr(26, "div"),
                    xr(),
                    Er(27, "div", 7),
                    Er(28, "div", 8),
                    Er(29, "div", 9),
                    Er(30, "div", 10),
                    Er(31, "div", 11),
                    Er(32, "div", 12),
                    Er(33, "span", 13),
                    lo(34),
                    Ta(35, "number"),
                    xr(),
                    Dr(36, "img", 14),
                    xr(),
                    Er(37, "div", 12),
                    Er(38, "span", 13),
                    lo(39),
                    Ta(40, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(41, "div", 11),
                    Er(42, "div", 12),
                    Er(43, "span", 13),
                    lo(44),
                    Ta(45, "number"),
                    xr(),
                    Dr(46, "img", 15),
                    xr(),
                    Er(47, "div", 12),
                    Er(48, "span", 13),
                    lo(49),
                    Ta(50, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(51, "div", 11),
                    Er(52, "div", 12),
                    Er(53, "span", 4),
                    lo(54, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(55, "div", 12),
                    Er(56, "span", 16),
                    lo(57),
                    Ta(58, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(59, "div", 11),
                    Er(60, "div", 12),
                    Er(61, "span", 4),
                    lo(62, "Craft $"),
                    xr(),
                    xr(),
                    Er(63, "div", 12),
                    Er(64, "span", 17),
                    lo(65),
                    Ta(66, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(67, "div", 11),
                    Er(68, "div", 12),
                    Er(69, "span", 13),
                    lo(70, "Minted :"),
                    xr(),
                    xr(),
                    Er(71, "div", 12),
                    Er(72, "span", 13),
                    lo(73),
                    Ta(74, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(75, "div", 18),
                    Er(76, "a", 19),
                    Dr(77, "video", 20),
                    Er(78, "div", 21),
                    Er(79, "span", 22),
                    lo(80, "Buy "),
                    Dr(81, "BR"),
                    lo(82),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(83, "div", 10),
                    Er(84, "div", 11),
                    Er(85, "div", 23),
                    Er(86, "span", 4),
                    lo(87, "Daily :"),
                    xr(),
                    xr(),
                    Er(88, "div", 23),
                    Er(89, "span", 24),
                    lo(90),
                    Ta(91, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(92, "div", 11),
                    Er(93, "div", 23),
                    Er(94, "span", 13),
                    lo(95, "ROI :"),
                    xr(),
                    xr(),
                    Er(96, "div", 23),
                    Er(97, "span", 13),
                    lo(98),
                    Ta(99, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(100, "div", 11),
                    Er(101, "div", 23),
                    Er(102, "span", 4),
                    lo(103, "Atomic :"),
                    xr(),
                    xr(),
                    Er(104, "div", 23),
                    Sr(105, gd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(106, "div", 11),
                    Er(107, "div", 23),
                    Er(108, "span", 4),
                    lo(109, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(110, "div", 23),
                    Sr(111, _d, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(112, "div", 11),
                    Er(113, "div", 23),
                    Er(114, "span", 13),
                    lo(115, "Stone Daily *:"),
                    xr(),
                    xr(),
                    Er(116, "div", 23),
                    Er(117, "span", 13),
                    lo(118),
                    Ta(119, "number"),
                    Dr(120, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(121, "hr"),
                    Er(122, "div", 10),
                    Er(123, "div", 11),
                    Er(124, "div", 12),
                    Er(125, "span", 13),
                    lo(126),
                    Ta(127, "number"),
                    xr(),
                    Dr(128, "img", 14),
                    xr(),
                    Er(129, "div", 12),
                    Er(130, "span", 13),
                    lo(131),
                    Ta(132, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(133, "div", 11),
                    Er(134, "div", 12),
                    Er(135, "span", 13),
                    lo(136),
                    Ta(137, "number"),
                    xr(),
                    Dr(138, "img", 15),
                    xr(),
                    Er(139, "div", 12),
                    Er(140, "span", 13),
                    lo(141),
                    Ta(142, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(143, "div", 11),
                    Er(144, "div", 12),
                    Er(145, "span", 4),
                    lo(146, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(147, "div", 12),
                    Er(148, "span", 16),
                    lo(149),
                    Ta(150, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(151, "div", 11),
                    Er(152, "div", 12),
                    Er(153, "span", 4),
                    lo(154, "Craft $"),
                    xr(),
                    xr(),
                    Er(155, "div", 12),
                    Er(156, "span", 17),
                    lo(157),
                    Ta(158, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(159, "div", 11),
                    Er(160, "div", 12),
                    Er(161, "span", 13),
                    lo(162, "Minted :"),
                    xr(),
                    xr(),
                    Er(163, "div", 12),
                    Er(164, "span", 13),
                    lo(165),
                    Ta(166, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(167, "div", 18),
                    Er(168, "a", 28),
                    Dr(169, "video", 29),
                    Er(170, "div", 21),
                    Er(171, "span", 22),
                    lo(172, "Buy "),
                    Dr(173, "BR"),
                    lo(174),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(175, "div", 10),
                    Er(176, "div", 11),
                    Er(177, "div", 23),
                    Er(178, "span", 4),
                    lo(179, "Daily :"),
                    xr(),
                    xr(),
                    Er(180, "div", 23),
                    Er(181, "span", 24),
                    lo(182),
                    Ta(183, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(184, "div", 11),
                    Er(185, "div", 23),
                    Er(186, "span", 13),
                    lo(187, "ROI :"),
                    xr(),
                    xr(),
                    Er(188, "div", 23),
                    Er(189, "span", 13),
                    lo(190),
                    Ta(191, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(192, "div", 11),
                    Er(193, "div", 23),
                    Er(194, "span", 4),
                    lo(195, "Atomic :"),
                    xr(),
                    xr(),
                    Er(196, "div", 23),
                    Sr(197, yd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(198, "div", 11),
                    Er(199, "div", 23),
                    Er(200, "span", 4),
                    lo(201, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(202, "div", 23),
                    Sr(203, vd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(204, "div", 11),
                    Er(205, "div", 23),
                    Er(206, "span", 13),
                    lo(207, "Stone Daily *:"),
                    xr(),
                    xr(),
                    Er(208, "div", 23),
                    Er(209, "span", 13),
                    lo(210),
                    Ta(211, "number"),
                    Dr(212, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(213, "hr"),
                    Er(214, "div", 10),
                    Er(215, "div", 11),
                    Er(216, "div", 12),
                    Er(217, "span", 13),
                    lo(218),
                    Ta(219, "number"),
                    xr(),
                    Dr(220, "img", 14),
                    xr(),
                    Er(221, "div", 12),
                    Er(222, "span", 13),
                    lo(223),
                    Ta(224, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(225, "div", 11),
                    Er(226, "div", 12),
                    Er(227, "span", 13),
                    lo(228),
                    Ta(229, "number"),
                    xr(),
                    Dr(230, "img", 15),
                    xr(),
                    Er(231, "div", 12),
                    Er(232, "span", 13),
                    lo(233),
                    Ta(234, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(235, "div", 11),
                    Er(236, "div", 12),
                    Er(237, "span", 4),
                    lo(238, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(239, "div", 12),
                    Er(240, "span", 16),
                    lo(241),
                    Ta(242, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(243, "div", 11),
                    Er(244, "div", 12),
                    Er(245, "span", 4),
                    lo(246, "Craft $"),
                    xr(),
                    xr(),
                    Er(247, "div", 12),
                    Er(248, "span", 17),
                    lo(249),
                    Ta(250, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(251, "div", 11),
                    Er(252, "div", 12),
                    Er(253, "span", 13),
                    lo(254, "Minted :"),
                    xr(),
                    xr(),
                    Er(255, "div", 12),
                    Er(256, "span", 13),
                    lo(257),
                    Ta(258, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(259, "div", 18),
                    Er(260, "a", 30),
                    Dr(261, "img", 31),
                    Er(262, "div", 21),
                    Er(263, "span", 22),
                    lo(264, "Buy "),
                    Dr(265, "BR"),
                    lo(266),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(267, "div", 10),
                    Er(268, "div", 11),
                    Er(269, "div", 23),
                    Er(270, "span", 4),
                    lo(271, "Daily :"),
                    xr(),
                    xr(),
                    Er(272, "div", 23),
                    Er(273, "span", 24),
                    lo(274),
                    Ta(275, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(276, "div", 11),
                    Er(277, "div", 23),
                    Er(278, "span", 13),
                    lo(279, "ROI :"),
                    xr(),
                    xr(),
                    Er(280, "div", 23),
                    Er(281, "span", 13),
                    lo(282),
                    Ta(283, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(284, "div", 11),
                    Er(285, "div", 23),
                    Er(286, "span", 4),
                    lo(287, "Atomic :"),
                    xr(),
                    xr(),
                    Er(288, "div", 23),
                    Sr(289, bd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(290, "div", 11),
                    Er(291, "div", 23),
                    Er(292, "span", 4),
                    lo(293, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(294, "div", 23),
                    Sr(295, wd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(296, "div", 11),
                    Er(297, "div", 23),
                    Er(298, "span", 13),
                    lo(299, "Stone Daily *:"),
                    xr(),
                    xr(),
                    Er(300, "div", 23),
                    Er(301, "span", 13),
                    lo(302),
                    Ta(303, "number"),
                    Dr(304, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(305, "hr"),
                    Er(306, "div", 10),
                    Er(307, "div", 11),
                    Er(308, "div", 12),
                    Er(309, "span", 13),
                    lo(310),
                    Ta(311, "number"),
                    xr(),
                    Dr(312, "img", 14),
                    xr(),
                    Er(313, "div", 12),
                    Er(314, "span", 13),
                    lo(315),
                    Ta(316, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(317, "div", 11),
                    Er(318, "div", 12),
                    Er(319, "span", 13),
                    lo(320),
                    Ta(321, "number"),
                    xr(),
                    Dr(322, "img", 15),
                    xr(),
                    Er(323, "div", 12),
                    Er(324, "span", 13),
                    lo(325),
                    Ta(326, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(327, "div", 11),
                    Er(328, "div", 12),
                    Er(329, "span", 4),
                    lo(330, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(331, "div", 12),
                    Er(332, "span", 16),
                    lo(333),
                    Ta(334, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(335, "div", 11),
                    Er(336, "div", 12),
                    Er(337, "span", 4),
                    lo(338, "Craft $"),
                    xr(),
                    xr(),
                    Er(339, "div", 12),
                    Er(340, "span", 17),
                    lo(341),
                    Ta(342, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(343, "div", 11),
                    Er(344, "div", 12),
                    Er(345, "span", 13),
                    lo(346, "Minted :"),
                    xr(),
                    xr(),
                    Er(347, "div", 12),
                    Er(348, "span", 13),
                    lo(349),
                    Ta(350, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(351, "div", 18),
                    Er(352, "a", 32),
                    Dr(353, "img", 33),
                    Er(354, "div", 21),
                    Er(355, "span", 22),
                    lo(356, "Buy "),
                    Dr(357, "BR"),
                    lo(358),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(359, "div", 10),
                    Er(360, "div", 11),
                    Er(361, "div", 23),
                    Er(362, "span", 4),
                    lo(363, "Daily :"),
                    xr(),
                    xr(),
                    Er(364, "div", 23),
                    Er(365, "span", 24),
                    lo(366),
                    Ta(367, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(368, "div", 11),
                    Er(369, "div", 23),
                    Er(370, "span", 13),
                    lo(371, "ROI :"),
                    xr(),
                    xr(),
                    Er(372, "div", 23),
                    Er(373, "span", 13),
                    lo(374),
                    Ta(375, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(376, "div", 11),
                    Er(377, "div", 23),
                    Er(378, "span", 4),
                    lo(379, "Atomic :"),
                    xr(),
                    xr(),
                    Er(380, "div", 23),
                    Sr(381, Ad, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(382, "div", 11),
                    Er(383, "div", 23),
                    Er(384, "span", 4),
                    lo(385, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(386, "div", 23),
                    Sr(387, Sd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(388, "div", 11),
                    Er(389, "div", 23),
                    Er(390, "span", 13),
                    lo(391, "Stone Daily *:"),
                    xr(),
                    xr(),
                    Er(392, "div", 23),
                    Er(393, "span", 13),
                    lo(394),
                    Ta(395, "number"),
                    Dr(396, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(397, "hr"),
                    Er(398, "div", 10),
                    Er(399, "div", 11),
                    Er(400, "div", 12),
                    Er(401, "span", 13),
                    lo(402),
                    Ta(403, "number"),
                    xr(),
                    Dr(404, "img", 14),
                    xr(),
                    Er(405, "div", 12),
                    Er(406, "span", 13),
                    lo(407),
                    Ta(408, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(409, "div", 11),
                    Er(410, "div", 12),
                    Er(411, "span", 13),
                    lo(412),
                    Ta(413, "number"),
                    xr(),
                    Dr(414, "img", 15),
                    xr(),
                    Er(415, "div", 12),
                    Er(416, "span", 13),
                    lo(417),
                    Ta(418, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(419, "div", 11),
                    Er(420, "div", 12),
                    Er(421, "span", 4),
                    lo(422, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(423, "div", 12),
                    Er(424, "span", 16),
                    lo(425),
                    Ta(426, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(427, "div", 11),
                    Er(428, "div", 12),
                    Er(429, "span", 4),
                    lo(430, "Craft $"),
                    xr(),
                    xr(),
                    Er(431, "div", 12),
                    Er(432, "span", 17),
                    lo(433),
                    Ta(434, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(435, "div", 11),
                    Er(436, "div", 12),
                    Er(437, "span", 13),
                    lo(438, "Minted :"),
                    xr(),
                    xr(),
                    Er(439, "div", 12),
                    Er(440, "span", 13),
                    lo(441),
                    Ta(442, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(443, "div", 18),
                    Er(444, "a", 34),
                    Dr(445, "img", 35),
                    Er(446, "div", 21),
                    Er(447, "span", 22),
                    lo(448, "Buy "),
                    Dr(449, "BR"),
                    lo(450),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(451, "div", 10),
                    Er(452, "div", 11),
                    Er(453, "div", 23),
                    Er(454, "span", 4),
                    lo(455, "Daily :"),
                    xr(),
                    xr(),
                    Er(456, "div", 23),
                    Er(457, "span", 24),
                    lo(458),
                    Ta(459, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(460, "div", 11),
                    Er(461, "div", 23),
                    Er(462, "span", 13),
                    lo(463, "ROI :"),
                    xr(),
                    xr(),
                    Er(464, "div", 23),
                    Er(465, "span", 13),
                    lo(466),
                    Ta(467, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(468, "div", 11),
                    Er(469, "div", 23),
                    Er(470, "span", 4),
                    lo(471, "Atomic :"),
                    xr(),
                    xr(),
                    Er(472, "div", 23),
                    Sr(473, Od, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(474, "div", 11),
                    Er(475, "div", 23),
                    Er(476, "span", 4),
                    lo(477, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(478, "div", 23),
                    Sr(479, Cd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(480, "div", 11),
                    Er(481, "div", 23),
                    Er(482, "span", 13),
                    lo(483, "Stone Daily *:"),
                    xr(),
                    xr(),
                    Er(484, "div", 23),
                    Er(485, "span", 13),
                    lo(486),
                    Ta(487, "number"),
                    Dr(488, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(489, "br"),
                    xr(),
                    xr(),
                    xr()),
                    2 & t && (Ys(9),
                    ho("", Pa(10, 82, e.ValueAOFS.Value, "1.2-6"), " \uffe6 "),
                    Ys(3),
                    ho(" Vol. 24h : ", Pa(13, 85, e.ValueAOFS.Volume_D, "1.2-2"), " \uffe6 "),
                    Ys(2),
                    Cr("ngClass", e.ValueAOFS.Value_D >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho(" ", Pa(16, 88, e.ValueAOFS.Value_D, "1.2-2"), " %"),
                    Ys(3),
                    ho(" Vol. 7D : ", Pa(19, 91, e.ValueAOFS.Volume_W, "1.2-2"), " \uffe6 "),
                    Ys(2),
                    Cr("ngClass", e.ValueAOFS.Value_W >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho(" ", Pa(22, 94, e.ValueAOFS.Value_W, "1.2-2"), " %"),
                    Ys(13),
                    co(Pa(35, 97, e.legendary.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(40, 100, e.legendary.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(45, 103, e.legendary.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(50, 106, e.legendary.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.legendary.craftCost > e.legendary.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(58, 109, e.legendary.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(66, 112, e.legendary.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(74, 115, e.legendary.minted, "1.0-0")),
                    Ys(9),
                    co(e.legendary.totalSold),
                    Ys(7),
                    Cr("ngClass", e.legendary.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(91, 118, e.legendary.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(99, 121, e.legendary.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.legendary.atomic),
                    Ys(6),
                    Cr("ngIf", e.legendary.atomic),
                    Ys(7),
                    ho("", Pa(119, 124, e.legendary.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(127, 127, e.epic.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(132, 130, e.epic.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(137, 133, e.epic.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(142, 136, e.epic.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.epic.craftCost > e.epic.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(150, 139, e.epic.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(158, 142, e.epic.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(166, 145, e.epic.minted, "1.0-0")),
                    Ys(9),
                    co(e.epic.totalSold),
                    Ys(7),
                    Cr("ngClass", e.epic.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(183, 148, e.epic.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(191, 151, e.epic.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.epic.atomic),
                    Ys(6),
                    Cr("ngIf", e.epic.atomic),
                    Ys(7),
                    ho("", Pa(211, 154, e.epic.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(219, 157, e.rare.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(224, 160, e.rare.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(229, 163, e.rare.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(234, 166, e.rare.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.rare.craftCost > e.rare.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(242, 169, e.rare.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(250, 172, e.rare.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(258, 175, e.rare.minted, "1.0-0")),
                    Ys(9),
                    co(e.rare.totalSold),
                    Ys(7),
                    Cr("ngClass", e.rare.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(275, 178, e.rare.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(283, 181, e.rare.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.rare.atomic),
                    Ys(6),
                    Cr("ngIf", e.rare.atomic),
                    Ys(7),
                    ho("", Pa(303, 184, e.rare.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(311, 187, e.uncommon.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(316, 190, e.uncommon.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(321, 193, e.uncommon.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(326, 196, e.uncommon.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.uncommon.craftCost > e.uncommon.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(334, 199, e.uncommon.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(342, 202, e.uncommon.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(350, 205, e.uncommon.minted, "1.0-0")),
                    Ys(9),
                    co(e.uncommon.totalSold),
                    Ys(7),
                    Cr("ngClass", e.uncommon.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(367, 208, e.uncommon.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(375, 211, e.uncommon.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.uncommon.atomic),
                    Ys(6),
                    Cr("ngIf", e.uncommon.atomic),
                    Ys(7),
                    ho("", Pa(395, 214, e.uncommon.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(403, 217, e.common.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(408, 220, e.common.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(413, 223, e.common.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(418, 226, e.common.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.common.craftCost > e.common.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(426, 229, e.common.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(434, 232, e.common.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(442, 235, e.common.minted, "1.0-0")),
                    Ys(9),
                    co(e.common.totalSold),
                    Ys(7),
                    Cr("ngClass", e.common.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(459, 238, e.common.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(467, 241, e.common.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.common.atomic),
                    Ys(6),
                    Cr("ngIf", e.common.atomic),
                    Ys(7),
                    ho("", Pa(487, 244, e.common.production, "1.0-0"), " "))
                },
                directives: [yc, Ac],
                pipes: [Cc],
                styles: [".img-fluid[_ngcontent-%COMP%], .video-fluid[_ngcontent-%COMP%]{max-width:100%}.badge.sm[_ngcontent-%COMP%]{padding:3px;font-size:12px}.grey.darken-2[_ngcontent-%COMP%]{background-color:#616161!important}.gradbg-cyan[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#5b81a5,#19e4ff)!important}.badge.ssm[_ngcontent-%COMP%]{padding:2px;font-size:10px}.gradbg-lime2[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#4e9f34,#c4de00)!important}.gradbg-red[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#6d091e,tomato)!important}.badge[_ngcontent-%COMP%]{color:#000!important;border-radius:.125rem;box-shadow:0 2px 5px 0 #00000029,0 2px 10px 0 #0000001f;display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:initial;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.w-50[_ngcontent-%COMP%]{width:50%!important}.w-10[_ngcontent-%COMP%]{width:10%!important}.w-20[_ngcontent-%COMP%]{width:20%!important}.w-40[_ngcontent-%COMP%]{width:40%!important}.w-45[_ngcontent-%COMP%]{width:45%!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]
            }),
            t
        }
        )();
        function Ed(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.legendary.craftCost < t.legendary.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.legendary.atomic, "1.0-2"), " \uffe6")
            }
        }
        function xd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.legendary.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function Dd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.epic.craftCost < t.epic.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.epic.atomic, "1.0-2"), " \uffe6")
            }
        }
        function Vd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.epic.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function Fd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.rare.craftCost < t.rare.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.rare.atomic, "1.0-2"), " \uffe6")
            }
        }
        function Td(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.rare.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function Pd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.uncommon.craftCost < t.uncommon.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.uncommon.atomic, "1.0-2"), " \uffe6")
            }
        }
        function Id(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.uncommon.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        function Rd(t, e) {
            if (1 & t && (Er(0, "span", 16),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Cr("ngClass", t.common.craftCost < t.common.atomic ? "grey darken-2" : "gradbg-cyan"),
                Ys(1),
                ho("", Pa(2, 2, t.common.atomic, "1.0-2"), " \uffe6")
            }
        }
        function Nd(t, e) {
            if (1 & t && (Er(0, "span", 17),
            lo(1),
            Ta(2, "number"),
            xr()),
            2 & t) {
                const t = Rr();
                Ys(1),
                ho("", Pa(2, 1, t.common.atomic * t.ValueWAX, "1.0-2"), " $")
            }
        }
        let Wd = (()=>{
            class t {
                constructor(t, e, n) {
                    this.ageoffarmingService = t,
                    this.atomicHubService = e,
                    this.shareDataService = n,
                    this.legendary = new ih,
                    this.epic = new ih,
                    this.rare = new ih,
                    this.uncommon = new ih,
                    this.common = new ih,
                    this.ActionDay = 24
                }
                ngOnInit() {
                    this.shareDataService.change.subscribe(t=>{
                        this.ActionDay = t;
                        let e = this.shareDataService.getStoneSpearCommon();
                        this.common.daily = this.ActionDay * e.rewards * this.ValueAOFS - (this.ActionDay * e.wood_repair_cost * this.ValueAOFW + this.ActionDay * e.stone_repair_cost * this.ValueAOFS + this.ActionDay * e.energy_cost / 5 * this.ValueAOFF.Value),
                        this.common.production = e.rewards * this.ActionDay,
                        this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily);
                        let n = this.shareDataService.getStoneSpearUncommon();
                        this.uncommon.daily = this.ActionDay * n.rewards * this.ValueAOFS - (this.ActionDay * n.wood_repair_cost * this.ValueAOFW + this.ActionDay * n.stone_repair_cost * this.ValueAOFS + this.ActionDay * n.energy_cost / 5 * this.ValueAOFF.Value),
                        this.uncommon.production = n.rewards * this.ActionDay,
                        this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily);
                        let s = this.shareDataService.getStoneSpearRare();
                        this.rare.daily = this.ActionDay * s.rewards * this.ValueAOFS - (this.ActionDay * s.wood_repair_cost * this.ValueAOFW + this.ActionDay * s.stone_repair_cost * this.ValueAOFS + this.ActionDay * s.energy_cost / 5 * this.ValueAOFF.Value),
                        this.rare.production = s.rewards * this.ActionDay,
                        this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily);
                        let i = this.shareDataService.getStoneSpearEpic();
                        this.epic.daily = this.ActionDay * i.rewards * this.ValueAOFS - (this.ActionDay * i.wood_repair_cost * this.ValueAOFW + this.ActionDay * i.stone_repair_cost * this.ValueAOFS + this.ActionDay * i.energy_cost / 5 * this.ValueAOFF.Value),
                        this.epic.production = i.rewards * this.ActionDay,
                        this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily);
                        let r = this.shareDataService.getStoneSpearLegendary();
                        this.legendary.daily = this.ActionDay * r.rewards * this.ValueAOFS - (this.ActionDay * r.wood_repair_cost * this.ValueAOFW + this.ActionDay * r.stone_repair_cost * this.ValueAOFS + this.ActionDay * r.energy_cost / 5 * this.ValueAOFF.Value),
                        this.legendary.production = r.rewards * this.ActionDay,
                        this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486831").then(t=>{
                        t.data[0] && (this.common.atomic = this.getPrice(t),
                        this.common.minted = t.data[0].assets[0].template.issued_supply,
                        this.common.lastSold = t.data[0].last_sold,
                        this.common.totalSold = t.data.length),
                        this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486832").then(t=>{
                        t.data[0] && (this.uncommon.atomic = this.getPrice(t),
                        this.uncommon.minted = t.data[0].assets[0].template.issued_supply,
                        this.uncommon.lastSold = t.data[0].last_sold,
                        this.uncommon.totalSold = t.data.length),
                        this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486833").then(t=>{
                        t.data[0] && (this.rare.atomic = this.getPrice(t),
                        this.rare.minted = t.data[0].assets[0].template.issued_supply,
                        this.rare.lastSold = t.data[0].last_sold,
                        this.rare.totalSold = t.data.length),
                        this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486834").then(t=>{
                        t.data[0] && (this.epic.atomic = this.getPrice(t),
                        this.epic.minted = t.data[0].assets[0].template.issued_supply,
                        this.epic.lastSold = t.data[0].last_sold,
                        this.epic.totalSold = t.data.length),
                        this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily)
                    }
                    ),
                    this.wait(200),
                    this.atomicHubService.getItemsDataSalesApiV3("486835").then(t=>{
                        t.data[0] && (this.legendary.atomic = this.getPrice(t),
                        this.legendary.minted = t.data[0].assets[0].template.issued_supply,
                        this.legendary.lastSold = t.data[0].last_sold,
                        this.legendary.totalSold = t.data.length),
                        this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily)
                    }
                    )
                }
                wait(t) {
                    for (var e = (new Date).getTime(), n = e; n < e + t; )
                        n = (new Date).getTime()
                }
                ngOnChanges() {
                    let t = this.shareDataService.getStoneSpearCommon();
                    t && (this.common.resourceWOOD = t.wood_craft_cost,
                    this.common.resourceSTONE = t.stone_craft_cost,
                    this.common.production = t.rewards * this.ActionDay,
                    this.common.craftCost = t.wood_craft_cost * this.ValueAOFW + t.stone_craft_cost * this.ValueAOFS,
                    this.common.priceResourceWOOD = t.wood_craft_cost * this.ValueAOFW,
                    this.common.priceResourceSTONE = t.stone_craft_cost * this.ValueAOFS,
                    this.common.daily = this.ActionDay * t.rewards * this.ValueAOFF.Value - (this.ActionDay * t.wood_repair_cost * this.ValueAOFW + this.ActionDay * t.stone_repair_cost * this.ValueAOFS + this.ActionDay * t.energy_cost / 5 * this.ValueAOFF.Value),
                    this.common.roi = this.getroi(this.common.atomic, this.common.craftCost, this.common.daily));
                    let e = this.shareDataService.getStoneSpearUncommon();
                    e && (this.uncommon.resourceWOOD = e.wood_craft_cost + this.common.resourceWOOD,
                    this.uncommon.resourceSTONE = e.stone_craft_cost + this.common.resourceSTONE,
                    this.uncommon.production = e.rewards * this.ActionDay,
                    this.uncommon.craftCost = this.uncommon.resourceWOOD * this.ValueAOFW + this.uncommon.resourceSTONE * this.ValueAOFS,
                    this.uncommon.priceResourceWOOD = this.uncommon.resourceWOOD * this.ValueAOFW,
                    this.uncommon.priceResourceSTONE = this.uncommon.resourceSTONE * this.ValueAOFS,
                    this.uncommon.daily = this.ActionDay * e.rewards * this.ValueAOFF.Value - (this.ActionDay * e.wood_repair_cost * this.ValueAOFW + this.ActionDay * e.stone_repair_cost * this.ValueAOFS + this.ActionDay * e.energy_cost / 5 * this.ValueAOFF.Value),
                    this.uncommon.roi = this.getroi(this.uncommon.atomic, this.uncommon.craftCost, this.uncommon.daily));
                    let n = this.shareDataService.getStoneSpearRare();
                    n && (this.rare.resourceWOOD = n.wood_craft_cost + this.uncommon.resourceWOOD,
                    this.rare.resourceSTONE = n.stone_craft_cost + this.uncommon.resourceSTONE,
                    this.rare.production = n.rewards * this.ActionDay,
                    this.rare.craftCost = this.rare.resourceWOOD * this.ValueAOFW + this.rare.resourceSTONE * this.ValueAOFS,
                    this.rare.priceResourceWOOD = this.rare.resourceWOOD * this.ValueAOFW,
                    this.rare.priceResourceSTONE = this.rare.resourceSTONE * this.ValueAOFS,
                    this.rare.daily = this.ActionDay * n.rewards * this.ValueAOFF.Value - (this.ActionDay * n.wood_repair_cost * this.ValueAOFW + this.ActionDay * n.stone_repair_cost * this.ValueAOFS + this.ActionDay * n.energy_cost / 5 * this.ValueAOFF.Value),
                    this.rare.roi = this.getroi(this.rare.atomic, this.rare.craftCost, this.rare.daily));
                    let s = this.shareDataService.getStoneSpearEpic();
                    s && (this.epic.resourceWOOD = s.wood_craft_cost + this.rare.resourceWOOD,
                    this.epic.resourceSTONE = s.stone_craft_cost + this.rare.resourceSTONE,
                    this.epic.production = s.rewards * this.ActionDay,
                    this.epic.craftCost = this.epic.resourceWOOD * this.ValueAOFW + this.epic.resourceSTONE * this.ValueAOFS,
                    this.epic.priceResourceWOOD = this.epic.resourceWOOD * this.ValueAOFW,
                    this.epic.priceResourceSTONE = this.epic.resourceSTONE * this.ValueAOFS,
                    this.epic.daily = this.ActionDay * s.rewards * this.ValueAOFF.Value - (this.ActionDay * s.wood_repair_cost * this.ValueAOFW + this.ActionDay * s.stone_repair_cost * this.ValueAOFS + this.ActionDay * s.energy_cost / 5 * this.ValueAOFF.Value),
                    this.epic.roi = this.getroi(this.epic.atomic, this.epic.craftCost, this.epic.daily));
                    let i = this.shareDataService.getStoneSpearLegendary();
                    i && (this.legendary.resourceWOOD = i.wood_craft_cost + this.epic.resourceWOOD,
                    this.legendary.resourceSTONE = i.stone_craft_cost + this.epic.resourceSTONE,
                    this.legendary.production = i.rewards * this.ActionDay,
                    this.legendary.craftCost = this.legendary.resourceWOOD * this.ValueAOFW + this.legendary.resourceSTONE * this.ValueAOFS,
                    this.legendary.priceResourceWOOD = this.legendary.resourceWOOD * this.ValueAOFW,
                    this.legendary.priceResourceSTONE = this.legendary.resourceSTONE * this.ValueAOFS,
                    this.legendary.daily = this.ActionDay * i.rewards * this.ValueAOFF.Value - (this.ActionDay * i.wood_repair_cost * this.ValueAOFW + this.ActionDay * i.stone_repair_cost * this.ValueAOFS + this.ActionDay * i.energy_cost / 5 * this.ValueAOFF.Value),
                    this.legendary.roi = this.getroi(this.legendary.atomic, this.legendary.craftCost, this.legendary.daily))
                }
                getroi(t, e, n) {
                    return t && t < e ? t / n : e / n
                }
                getPrice(t) {
                    return "USD" === t.data[0].listing_symbol ? t.data[0].listing_price / 100 / this.ValueWAX : t.data[0].listing_price / 1e8
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Gh),Or(Ju),Or(Yh))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-food"]],
                inputs: {
                    ValueAOFF: "ValueAOFF",
                    ValueAOFS: "ValueAOFS",
                    ValueAOFW: "ValueAOFW",
                    ValueWAX: "ValueWAX"
                },
                features: [ae],
                decls: 490,
                vars: 247,
                consts: [[1, "card", "card-cascade", "narrower", 2, "background-color", "wheat"], [1, "view", "view-cascade", "gradient-card-header", "blue-gradient", "narrower", "py-2", "mx-4", "mb-3", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "sm", "grey", "darken-2"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aoff.png", 1, "mr-1", 2, "height", "18px"], [1, "badge", "sm"], [1, "badge", "ssm", 3, "ngClass"], ["href", "https://wax.alcor.exchange/trade/aoff-ageoftokenss_wax-eosio.token", "target", "_blank", 2, "color", "#fff", "font-size", "xx-small"], [1, ""], [1, "d-block", 2, "margin-left", "20px", "margin-right", "20px"], [1, "d-block", "mt-3"], [1, "d-inline-block", "w-45"], [1, "d-block", "fw_craft"], [1, "d-inline-block", "w-50", "text-left"], [1, "badge", "ssm"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofw.png", 2, "height", "16px"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aofs.png", 2, "height", "16px"], [1, "badge", "md", 3, "ngClass"], [1, "badge", "md"], [1, "d-inline-block", "w-10", 2, "line-height", "10px", "text-align", "center"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Legendary&match=spear&order=desc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["autoplay", "true", "muted", "true", "src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_spear_Legendary.mp4", 1, "video-fluid"], [1, "d-block", "mt-1"], [1, "badge", "grey", "darken-3", "ssm", 2, "min-width", "15px"], [1, "d-inline-block", "w-50", "text-right"], [1, "badge", "sm", 3, "ngClass"], ["class", "badge md", 3, "ngClass", 4, "ngIf"], ["class", "badge md", 4, "ngIf"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/coins/aoff.png", 1, "d-inline-block", 2, "height", "20px"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Epic&match=spear&order=desc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["autoplay", "true", "muted", "true", "src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_spear_Epic.mp4", 1, "video-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Rare&match=spear&order=desc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_spear_rare.png", 1, "img-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Uncommon&match=spear&order=desc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_spear_uncommon.png", 1, "img-fluid"], ["target", "_blank", "href", "https://wax.atomichub.io/market?collection_name=ageoffarming&data:text.rarity=Common&match=spear&order=desc&sort=price&symbol=WAX", 1, "keychainify-checked"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/game/stone_spear_common.png", 1, "img-fluid"]],
                template: function(t, e) {
                    1 & t && (Er(0, "div", 0),
                    Er(1, "div", 1),
                    Dr(2, "div"),
                    Er(3, "div", 2),
                    Dr(4, "img", 3),
                    lo(5, " FOOD "),
                    Dr(6, "img", 3),
                    Dr(7, "br"),
                    Er(8, "span", 4),
                    lo(9),
                    Ta(10, "number"),
                    xr(),
                    Dr(11, "br"),
                    lo(12),
                    Ta(13, "number"),
                    Er(14, "span", 5),
                    lo(15),
                    Ta(16, "number"),
                    xr(),
                    Dr(17, "br"),
                    lo(18),
                    Ta(19, "number"),
                    Er(20, "span", 5),
                    lo(21),
                    Ta(22, "number"),
                    xr(),
                    Dr(23, "br"),
                    Er(24, "a", 6),
                    lo(25, " Click to open Alcor Exchange "),
                    xr(),
                    xr(),
                    Dr(26, "div"),
                    xr(),
                    Er(27, "div", 7),
                    Er(28, "div", 8),
                    Er(29, "div", 9),
                    Er(30, "div", 10),
                    Er(31, "div", 11),
                    Er(32, "div", 12),
                    Er(33, "span", 13),
                    lo(34),
                    Ta(35, "number"),
                    xr(),
                    Dr(36, "img", 14),
                    xr(),
                    Er(37, "div", 12),
                    Er(38, "span", 13),
                    lo(39),
                    Ta(40, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(41, "div", 11),
                    Er(42, "div", 12),
                    Er(43, "span", 13),
                    lo(44),
                    Ta(45, "number"),
                    xr(),
                    Dr(46, "img", 15),
                    xr(),
                    Er(47, "div", 12),
                    Er(48, "span", 13),
                    lo(49),
                    Ta(50, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(51, "div", 11),
                    Er(52, "div", 12),
                    Er(53, "span", 4),
                    lo(54, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(55, "div", 12),
                    Er(56, "span", 16),
                    lo(57),
                    Ta(58, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(59, "div", 11),
                    Er(60, "div", 12),
                    Er(61, "span", 4),
                    lo(62, "Craft $"),
                    xr(),
                    xr(),
                    Er(63, "div", 12),
                    Er(64, "span", 17),
                    lo(65),
                    Ta(66, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(67, "div", 11),
                    Er(68, "div", 12),
                    Er(69, "span", 13),
                    lo(70, "Minted :"),
                    xr(),
                    xr(),
                    Er(71, "div", 12),
                    Er(72, "span", 13),
                    lo(73),
                    Ta(74, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(75, "div", 18),
                    Er(76, "a", 19),
                    Dr(77, "video", 20),
                    Er(78, "div", 21),
                    Er(79, "span", 22),
                    lo(80, "Buy "),
                    Dr(81, "BR"),
                    lo(82),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(83, "div", 10),
                    Er(84, "div", 11),
                    Er(85, "div", 23),
                    Er(86, "span", 4),
                    lo(87, "Daily :"),
                    xr(),
                    xr(),
                    Er(88, "div", 23),
                    Er(89, "span", 24),
                    lo(90),
                    Ta(91, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(92, "div", 11),
                    Er(93, "div", 23),
                    Er(94, "span", 13),
                    lo(95, "ROI :"),
                    xr(),
                    xr(),
                    Er(96, "div", 23),
                    Er(97, "span", 13),
                    lo(98),
                    Ta(99, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(100, "div", 11),
                    Er(101, "div", 23),
                    Er(102, "span", 4),
                    lo(103, "Atomic :"),
                    xr(),
                    xr(),
                    Er(104, "div", 23),
                    Sr(105, Ed, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(106, "div", 11),
                    Er(107, "div", 23),
                    Er(108, "span", 4),
                    lo(109, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(110, "div", 23),
                    Sr(111, xd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(112, "div", 11),
                    Er(113, "div", 23),
                    Er(114, "span", 13),
                    lo(115, "Food Daily *:"),
                    xr(),
                    xr(),
                    Er(116, "div", 23),
                    Er(117, "span", 13),
                    lo(118),
                    Ta(119, "number"),
                    Dr(120, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(121, "hr"),
                    Er(122, "div", 10),
                    Er(123, "div", 11),
                    Er(124, "div", 12),
                    Er(125, "span", 13),
                    lo(126),
                    Ta(127, "number"),
                    xr(),
                    Dr(128, "img", 14),
                    xr(),
                    Er(129, "div", 12),
                    Er(130, "span", 13),
                    lo(131),
                    Ta(132, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(133, "div", 11),
                    Er(134, "div", 12),
                    Er(135, "span", 13),
                    lo(136),
                    Ta(137, "number"),
                    xr(),
                    Dr(138, "img", 15),
                    xr(),
                    Er(139, "div", 12),
                    Er(140, "span", 13),
                    lo(141),
                    Ta(142, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(143, "div", 11),
                    Er(144, "div", 12),
                    Er(145, "span", 4),
                    lo(146, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(147, "div", 12),
                    Er(148, "span", 16),
                    lo(149),
                    Ta(150, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(151, "div", 11),
                    Er(152, "div", 12),
                    Er(153, "span", 4),
                    lo(154, "Craft $"),
                    xr(),
                    xr(),
                    Er(155, "div", 12),
                    Er(156, "span", 17),
                    lo(157),
                    Ta(158, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(159, "div", 11),
                    Er(160, "div", 12),
                    Er(161, "span", 13),
                    lo(162, "Minted :"),
                    xr(),
                    xr(),
                    Er(163, "div", 12),
                    Er(164, "span", 13),
                    lo(165),
                    Ta(166, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(167, "div", 18),
                    Er(168, "a", 28),
                    Dr(169, "video", 29),
                    Er(170, "div", 21),
                    Er(171, "span", 22),
                    lo(172, "Buy "),
                    Dr(173, "BR"),
                    lo(174),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(175, "div", 10),
                    Er(176, "div", 11),
                    Er(177, "div", 23),
                    Er(178, "span", 4),
                    lo(179, "Daily :"),
                    xr(),
                    xr(),
                    Er(180, "div", 23),
                    Er(181, "span", 24),
                    lo(182),
                    Ta(183, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(184, "div", 11),
                    Er(185, "div", 23),
                    Er(186, "span", 13),
                    lo(187, "ROI :"),
                    xr(),
                    xr(),
                    Er(188, "div", 23),
                    Er(189, "span", 13),
                    lo(190),
                    Ta(191, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(192, "div", 11),
                    Er(193, "div", 23),
                    Er(194, "span", 4),
                    lo(195, "Atomic :"),
                    xr(),
                    xr(),
                    Er(196, "div", 23),
                    Sr(197, Dd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(198, "div", 11),
                    Er(199, "div", 23),
                    Er(200, "span", 4),
                    lo(201, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(202, "div", 23),
                    Sr(203, Vd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(204, "div", 11),
                    Er(205, "div", 23),
                    Er(206, "span", 13),
                    lo(207, "Food Daily *:"),
                    xr(),
                    xr(),
                    Er(208, "div", 23),
                    Er(209, "span", 13),
                    lo(210),
                    Ta(211, "number"),
                    Dr(212, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(213, "hr"),
                    Er(214, "div", 10),
                    Er(215, "div", 11),
                    Er(216, "div", 12),
                    Er(217, "span", 13),
                    lo(218),
                    Ta(219, "number"),
                    xr(),
                    Dr(220, "img", 14),
                    xr(),
                    Er(221, "div", 12),
                    Er(222, "span", 13),
                    lo(223),
                    Ta(224, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(225, "div", 11),
                    Er(226, "div", 12),
                    Er(227, "span", 13),
                    lo(228),
                    Ta(229, "number"),
                    xr(),
                    Dr(230, "img", 15),
                    xr(),
                    Er(231, "div", 12),
                    Er(232, "span", 13),
                    lo(233),
                    Ta(234, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(235, "div", 11),
                    Er(236, "div", 12),
                    Er(237, "span", 4),
                    lo(238, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(239, "div", 12),
                    Er(240, "span", 16),
                    lo(241),
                    Ta(242, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(243, "div", 11),
                    Er(244, "div", 12),
                    Er(245, "span", 4),
                    lo(246, "Craft $"),
                    xr(),
                    xr(),
                    Er(247, "div", 12),
                    Er(248, "span", 17),
                    lo(249),
                    Ta(250, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(251, "div", 11),
                    Er(252, "div", 12),
                    Er(253, "span", 13),
                    lo(254, "Minted :"),
                    xr(),
                    xr(),
                    Er(255, "div", 12),
                    Er(256, "span", 13),
                    lo(257),
                    Ta(258, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(259, "div", 18),
                    Er(260, "a", 30),
                    Dr(261, "img", 31),
                    Er(262, "div", 21),
                    Er(263, "span", 22),
                    lo(264, "Buy "),
                    Dr(265, "BR"),
                    lo(266),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(267, "div", 10),
                    Er(268, "div", 11),
                    Er(269, "div", 23),
                    Er(270, "span", 4),
                    lo(271, "Daily :"),
                    xr(),
                    xr(),
                    Er(272, "div", 23),
                    Er(273, "span", 24),
                    lo(274),
                    Ta(275, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(276, "div", 11),
                    Er(277, "div", 23),
                    Er(278, "span", 13),
                    lo(279, "ROI :"),
                    xr(),
                    xr(),
                    Er(280, "div", 23),
                    Er(281, "span", 13),
                    lo(282),
                    Ta(283, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(284, "div", 11),
                    Er(285, "div", 23),
                    Er(286, "span", 4),
                    lo(287, "Atomic :"),
                    xr(),
                    xr(),
                    Er(288, "div", 23),
                    Sr(289, Fd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(290, "div", 11),
                    Er(291, "div", 23),
                    Er(292, "span", 4),
                    lo(293, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(294, "div", 23),
                    Sr(295, Td, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(296, "div", 11),
                    Er(297, "div", 23),
                    Er(298, "span", 13),
                    lo(299, "Food Daily *:"),
                    xr(),
                    xr(),
                    Er(300, "div", 23),
                    Er(301, "span", 13),
                    lo(302),
                    Ta(303, "number"),
                    Dr(304, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(305, "hr"),
                    Er(306, "div", 10),
                    Er(307, "div", 11),
                    Er(308, "div", 12),
                    Er(309, "span", 13),
                    lo(310),
                    Ta(311, "number"),
                    xr(),
                    Dr(312, "img", 14),
                    xr(),
                    Er(313, "div", 12),
                    Er(314, "span", 13),
                    lo(315),
                    Ta(316, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(317, "div", 11),
                    Er(318, "div", 12),
                    Er(319, "span", 13),
                    lo(320),
                    Ta(321, "number"),
                    xr(),
                    Dr(322, "img", 15),
                    xr(),
                    Er(323, "div", 12),
                    Er(324, "span", 13),
                    lo(325),
                    Ta(326, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(327, "div", 11),
                    Er(328, "div", 12),
                    Er(329, "span", 4),
                    lo(330, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(331, "div", 12),
                    Er(332, "span", 16),
                    lo(333),
                    Ta(334, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(335, "div", 11),
                    Er(336, "div", 12),
                    Er(337, "span", 4),
                    lo(338, "Craft $"),
                    xr(),
                    xr(),
                    Er(339, "div", 12),
                    Er(340, "span", 17),
                    lo(341),
                    Ta(342, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(343, "div", 11),
                    Er(344, "div", 12),
                    Er(345, "span", 13),
                    lo(346, "Minted :"),
                    xr(),
                    xr(),
                    Er(347, "div", 12),
                    Er(348, "span", 13),
                    lo(349),
                    Ta(350, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(351, "div", 18),
                    Er(352, "a", 32),
                    Dr(353, "img", 33),
                    Er(354, "div", 21),
                    Er(355, "span", 22),
                    lo(356, "Buy "),
                    Dr(357, "BR"),
                    lo(358),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(359, "div", 10),
                    Er(360, "div", 11),
                    Er(361, "div", 23),
                    Er(362, "span", 4),
                    lo(363, "Daily :"),
                    xr(),
                    xr(),
                    Er(364, "div", 23),
                    Er(365, "span", 24),
                    lo(366),
                    Ta(367, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(368, "div", 11),
                    Er(369, "div", 23),
                    Er(370, "span", 13),
                    lo(371, "ROI :"),
                    xr(),
                    xr(),
                    Er(372, "div", 23),
                    Er(373, "span", 13),
                    lo(374),
                    Ta(375, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(376, "div", 11),
                    Er(377, "div", 23),
                    Er(378, "span", 4),
                    lo(379, "Atomic :"),
                    xr(),
                    xr(),
                    Er(380, "div", 23),
                    Sr(381, Pd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(382, "div", 11),
                    Er(383, "div", 23),
                    Er(384, "span", 4),
                    lo(385, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(386, "div", 23),
                    Sr(387, Id, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(388, "div", 11),
                    Er(389, "div", 23),
                    Er(390, "span", 13),
                    lo(391, "Food Daily *:"),
                    xr(),
                    xr(),
                    Er(392, "div", 23),
                    Er(393, "span", 13),
                    lo(394),
                    Ta(395, "number"),
                    Dr(396, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(397, "hr"),
                    Er(398, "div", 10),
                    Er(399, "div", 11),
                    Er(400, "div", 12),
                    Er(401, "span", 13),
                    lo(402),
                    Ta(403, "number"),
                    xr(),
                    Dr(404, "img", 14),
                    xr(),
                    Er(405, "div", 12),
                    Er(406, "span", 13),
                    lo(407),
                    Ta(408, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(409, "div", 11),
                    Er(410, "div", 12),
                    Er(411, "span", 13),
                    lo(412),
                    Ta(413, "number"),
                    xr(),
                    Dr(414, "img", 15),
                    xr(),
                    Er(415, "div", 12),
                    Er(416, "span", 13),
                    lo(417),
                    Ta(418, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(419, "div", 11),
                    Er(420, "div", 12),
                    Er(421, "span", 4),
                    lo(422, "Craft ￦"),
                    xr(),
                    xr(),
                    Er(423, "div", 12),
                    Er(424, "span", 16),
                    lo(425),
                    Ta(426, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(427, "div", 11),
                    Er(428, "div", 12),
                    Er(429, "span", 4),
                    lo(430, "Craft $"),
                    xr(),
                    xr(),
                    Er(431, "div", 12),
                    Er(432, "span", 17),
                    lo(433),
                    Ta(434, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(435, "div", 11),
                    Er(436, "div", 12),
                    Er(437, "span", 13),
                    lo(438, "Minted :"),
                    xr(),
                    xr(),
                    Er(439, "div", 12),
                    Er(440, "span", 13),
                    lo(441),
                    Ta(442, "number"),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(443, "div", 18),
                    Er(444, "a", 34),
                    Dr(445, "img", 35),
                    Er(446, "div", 21),
                    Er(447, "span", 22),
                    lo(448, "Buy "),
                    Dr(449, "BR"),
                    lo(450),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(451, "div", 10),
                    Er(452, "div", 11),
                    Er(453, "div", 23),
                    Er(454, "span", 4),
                    lo(455, "Daily :"),
                    xr(),
                    xr(),
                    Er(456, "div", 23),
                    Er(457, "span", 24),
                    lo(458),
                    Ta(459, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(460, "div", 11),
                    Er(461, "div", 23),
                    Er(462, "span", 13),
                    lo(463, "ROI :"),
                    xr(),
                    xr(),
                    Er(464, "div", 23),
                    Er(465, "span", 13),
                    lo(466),
                    Ta(467, "number"),
                    xr(),
                    xr(),
                    xr(),
                    Er(468, "div", 11),
                    Er(469, "div", 23),
                    Er(470, "span", 4),
                    lo(471, "Atomic :"),
                    xr(),
                    xr(),
                    Er(472, "div", 23),
                    Sr(473, Rd, 3, 5, "span", 25),
                    xr(),
                    xr(),
                    Er(474, "div", 11),
                    Er(475, "div", 23),
                    Er(476, "span", 4),
                    lo(477, "Atomic $:"),
                    xr(),
                    xr(),
                    Er(478, "div", 23),
                    Sr(479, Nd, 3, 4, "span", 26),
                    xr(),
                    xr(),
                    Er(480, "div", 11),
                    Er(481, "div", 23),
                    Er(482, "span", 13),
                    lo(483, "Food Daily *:"),
                    xr(),
                    xr(),
                    Er(484, "div", 23),
                    Er(485, "span", 13),
                    lo(486),
                    Ta(487, "number"),
                    Dr(488, "img", 27),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Dr(489, "br"),
                    xr(),
                    xr(),
                    xr()),
                    2 & t && (Ys(9),
                    ho("", Pa(10, 82, e.ValueAOFF.Value, "1.2-6"), " \uffe6 "),
                    Ys(3),
                    ho(" Vol. 24h : ", Pa(13, 85, e.ValueAOFF.Volume_D, "1.2-2"), " \uffe6 "),
                    Ys(2),
                    Cr("ngClass", e.ValueAOFF.Value_D >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho(" ", Pa(16, 88, e.ValueAOFF.Value_D, "1.2-2"), " %"),
                    Ys(3),
                    ho(" Vol. 7D : ", Pa(19, 91, e.ValueAOFF.Volume_W, "1.2-2"), " \uffe6 "),
                    Ys(2),
                    Cr("ngClass", e.ValueAOFF.Value_W >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho(" ", Pa(22, 94, e.ValueAOFF.Value_W, "1.2-2"), " %"),
                    Ys(13),
                    co(Pa(35, 97, e.legendary.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(40, 100, e.legendary.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(45, 103, e.legendary.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(50, 106, e.legendary.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.legendary.craftCost > e.legendary.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(58, 109, e.legendary.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(66, 112, e.legendary.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(74, 115, e.legendary.minted, "1.0-0")),
                    Ys(9),
                    co(e.legendary.totalSold),
                    Ys(7),
                    Cr("ngClass", e.legendary.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(91, 118, e.legendary.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(99, 121, e.legendary.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.legendary.atomic),
                    Ys(6),
                    Cr("ngIf", e.legendary.atomic),
                    Ys(7),
                    ho("", Pa(119, 124, e.legendary.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(127, 127, e.epic.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(132, 130, e.epic.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(137, 133, e.epic.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(142, 136, e.epic.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.epic.craftCost > e.epic.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(150, 139, e.epic.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(158, 142, e.epic.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(166, 145, e.epic.minted, "1.0-0")),
                    Ys(9),
                    co(e.epic.totalSold),
                    Ys(7),
                    Cr("ngClass", e.epic.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(183, 148, e.epic.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(191, 151, e.epic.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.epic.atomic),
                    Ys(6),
                    Cr("ngIf", e.epic.atomic),
                    Ys(7),
                    ho("", Pa(211, 154, e.epic.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(219, 157, e.rare.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(224, 160, e.rare.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(229, 163, e.rare.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(234, 166, e.rare.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.rare.craftCost > e.rare.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(242, 169, e.rare.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(250, 172, e.rare.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(258, 175, e.rare.minted, "1.0-0")),
                    Ys(9),
                    co(e.rare.totalSold),
                    Ys(7),
                    Cr("ngClass", e.rare.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(275, 178, e.rare.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(283, 181, e.rare.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.rare.atomic),
                    Ys(6),
                    Cr("ngIf", e.rare.atomic),
                    Ys(7),
                    ho("", Pa(303, 184, e.rare.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(311, 187, e.uncommon.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(316, 190, e.uncommon.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(321, 193, e.uncommon.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(326, 196, e.uncommon.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.uncommon.craftCost > e.uncommon.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(334, 199, e.uncommon.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(342, 202, e.uncommon.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(350, 205, e.uncommon.minted, "1.0-0")),
                    Ys(9),
                    co(e.uncommon.totalSold),
                    Ys(7),
                    Cr("ngClass", e.uncommon.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(367, 208, e.uncommon.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(375, 211, e.uncommon.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.uncommon.atomic),
                    Ys(6),
                    Cr("ngIf", e.uncommon.atomic),
                    Ys(7),
                    ho("", Pa(395, 214, e.uncommon.production, "1.0-0"), " "),
                    Ys(8),
                    co(Pa(403, 217, e.common.resourceWOOD, "1.0-0")),
                    Ys(5),
                    ho("", Pa(408, 220, e.common.priceResourceWOOD, "1.0-4"), " \uffe6"),
                    Ys(5),
                    co(Pa(413, 223, e.common.resourceSTONE, "1.0-0")),
                    Ys(5),
                    ho("", Pa(418, 226, e.common.priceResourceSTONE, "1.0-4"), " \uffe6"),
                    Ys(7),
                    Cr("ngClass", e.common.craftCost > e.common.atomic ? "grey darken-2" : "gradbg-cyan"),
                    Ys(1),
                    ho("", Pa(426, 229, e.common.craftCost, "1.0-2"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(434, 232, e.common.craftCost * e.ValueWAX, "1.0-2"), " $"),
                    Ys(8),
                    co(Pa(442, 235, e.common.minted, "1.0-0")),
                    Ys(9),
                    co(e.common.totalSold),
                    Ys(7),
                    Cr("ngClass", e.common.daily >= 0 ? "gradbg-lime2" : "gradbg-red"),
                    Ys(1),
                    ho("", Pa(459, 238, e.common.daily, "1.0-6"), " \uffe6"),
                    Ys(8),
                    ho("", Pa(467, 241, e.common.roi, "1.0-0"), " day"),
                    Ys(7),
                    Cr("ngIf", e.common.atomic),
                    Ys(6),
                    Cr("ngIf", e.common.atomic),
                    Ys(7),
                    ho("", Pa(487, 244, e.common.production, "1.0-0"), " "))
                },
                directives: [yc, Ac],
                pipes: [Cc],
                styles: [".img-fluid[_ngcontent-%COMP%], .video-fluid[_ngcontent-%COMP%]{max-width:100%}.badge.sm[_ngcontent-%COMP%]{padding:3px;font-size:12px}.grey.darken-2[_ngcontent-%COMP%]{background-color:#616161!important}.gradbg-cyan[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#5b81a5,#19e4ff)!important}.badge.ssm[_ngcontent-%COMP%]{padding:2px;font-size:10px}.gradbg-lime2[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#4e9f34,#c4de00)!important}.gradbg-red[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(40deg,#6d091e,tomato)!important}.badge[_ngcontent-%COMP%]{color:#000!important;border-radius:.125rem;box-shadow:0 2px 5px 0 #00000029,0 2px 10px 0 #0000001f;display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:initial;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.w-50[_ngcontent-%COMP%]{width:50%!important}.w-10[_ngcontent-%COMP%]{width:10%!important}.w-20[_ngcontent-%COMP%]{width:20%!important}.w-40[_ngcontent-%COMP%]{width:40%!important}.w-45[_ngcontent-%COMP%]{width:45%!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]
            }),
            t
        }
        )()
          , Md = (()=>{
            class t {
                constructor() {}
                ngOnInit() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-home"]],
                inputs: {
                    ValueAOFF: "ValueAOFF",
                    ValueAOFW: "ValueAOFW",
                    ValueAOFS: "ValueAOFS",
                    ValueWAX: "ValueWAX"
                },
                decls: 40,
                vars: 16,
                consts: [[1, "gradiant"], [1, "p-5", "text-center", "bg-image", "ads", 2, "min-height", "150px", "margin-top", "48px"], [1, "mask", 2, "background-color", "rgba(0, 0, 0, 0.6)"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-md-4", "col-12"], ["href", "https://metasourcecards.com/castles/craft", "target", "_blank"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/bannerCastle.png", 2, "width", "320px"], [1, "col-12", "col-md-2", "text-white"], ["href", "https://play.ageoffarming.io/"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_AOF.webp", "width", "150"], ["href", "https://discord.com/invite/SxCFBgkerC", "target", "_blank"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/bannerGM2.png", 2, "width", "320px"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "col-md-8"], [3, "ValueWAX", "ValueAOFF", "ValueAOFS", "ValueAOFW"]],
                template: function(t, e) {
                    1 & t && (Er(0, "main", 0),
                    Er(1, "div", 1),
                    Er(2, "div", 2),
                    Er(3, "div", 3),
                    Er(4, "div", 4),
                    Er(5, "a", 5),
                    Dr(6, "img", 6),
                    Dr(7, "br"),
                    lo(8, " More Info here "),
                    xr(),
                    xr(),
                    Er(9, "div", 7),
                    Er(10, "a", 8),
                    Dr(11, "img", 9),
                    xr(),
                    xr(),
                    Er(12, "div", 4),
                    Er(13, "a", 10),
                    Dr(14, "img", 11),
                    Dr(15, "br"),
                    lo(16, " More Info here "),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    xr(),
                    Er(17, "div", 12),
                    Er(18, "div", 13),
                    Er(19, "div", 14),
                    Dr(20, "br"),
                    Dr(21, "app-menu"),
                    Dr(22, "br"),
                    xr(),
                    Er(23, "div", 15),
                    Dr(24, "app-account", 16),
                    Dr(25, "br"),
                    xr(),
                    xr(),
                    xr(),
                    Dr(26, "br"),
                    Er(27, "div", 12),
                    Er(28, "div", 13),
                    Er(29, "div", 14),
                    Dr(30, "br"),
                    Dr(31, "app-wood", 16),
                    xr(),
                    Er(32, "div", 14),
                    Dr(33, "br"),
                    Dr(34, "app-stone", 16),
                    xr(),
                    Er(35, "div", 14),
                    Dr(36, "br"),
                    Dr(37, "app-food", 16),
                    xr(),
                    xr(),
                    xr(),
                    Dr(38, "br"),
                    Dr(39, "br"),
                    xr()),
                    2 & t && (Ys(24),
                    Cr("ValueWAX", e.ValueWAX)("ValueAOFF", e.ValueAOFF.Value)("ValueAOFS", e.ValueAOFS.Value)("ValueAOFW", e.ValueAOFW.Value),
                    Ys(7),
                    Cr("ValueWAX", e.ValueWAX)("ValueAOFF", e.ValueAOFF.Value)("ValueAOFS", e.ValueAOFS.Value)("ValueAOFW", e.ValueAOFW),
                    Ys(3),
                    Cr("ValueWAX", e.ValueWAX)("ValueAOFF", e.ValueAOFF.Value)("ValueAOFS", e.ValueAOFS)("ValueAOFW", e.ValueAOFW.Value),
                    Ys(3),
                    Cr("ValueWAX", e.ValueWAX)("ValueAOFF", e.ValueAOFF)("ValueAOFS", e.ValueAOFS.Value)("ValueAOFW", e.ValueAOFW.Value))
                },
                directives: [Yu, id, fd, kd, Wd],
                styles: [".gradiant[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover}@media screen and (max-width:1023px){.ads[_ngcontent-%COMP%]{height:430px}}"]
            }),
            t
        }
        )()
          , Ld = (()=>{
            class t {
                constructor() {}
                ngOnInit() {}
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-footer"]],
                decls: 159,
                vars: 0,
                consts: [[1, "bg-black", "text-center", "text-lg-start"], [1, "container", "p-4", "pb-0"], [1, "row"], [1, "col-md-12", "col-12", "mb-4", "mb-md-0"], [1, "form-outline", "mb-2", "text-center"], [1, "badge", "md"], [1, "col-md-2", "col-12", "text-center"], ["href", "https://play.farmersworld.io/?ref=2vzh4.wam", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_farmersworld.png", "width", "100"], ["href", "https://farmersworld.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://game.nftpanda.space?2vzh4.wam", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_panda.png", "width", "75"], ["href", "https://panda.f12key.shadysapy.fr/", 1, "text-dark"], ["href", "https://warspace.io/", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/Logo.webp", "width", "75"], ["href", "https://warspace.f12key.shadysapy.fr/", 1, "text-dark"], ["href", "https://thedefimining.io/", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo-defimining.png", "width", "100"], ["href", "https://defimining.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://play.goldmand.io/?ref=h1ubc.wam", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_goldmand.png", "width", "150"], ["href", "https://goldmand.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://spacecraftx.io/home?ref=2vzh4.wam", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo.png", "width", "100"], ["href", "https://spacescraftx.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://spacecraftx.io/home?ref=2vzh4.wam", 1, "text-dark"], ["href", "https://galaxyminers.io/", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_galaxyminers.png", "width", "100"], ["href", "https://galaxyminer.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://play.cryptofarms.me/", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_cryptoFarm.png", "width", "75"], ["href", "https://cryptofarms.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://playseafarmers.com/", "target", "_blank", 1, "text-dark"], ["src", "assets/img/logo_seafarmers.jpeg", "width", "75"], ["href", "https://seafarmers.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://metasourcecards.com/castles", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/castles-logo.png", "width", "65"], ["href", "https://castles.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://sailorsworld.io/play", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_sailorsworld.png", "width", "100"], ["href", "https://sailorsworld.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://dawnofvictory.io/staking/", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_DOV.png", "width", "100"], ["href", "https://dovx.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://funnycat.io/", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_funnycat.png", "width", "100"], ["href", "https://funnycat.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], ["href", "https://www.ageoffarming.io/", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo_AOF.webp", "width", "80"], ["href", "https://ageoffarming.f12key.shadysapy.fr/", "target", "_blank", 1, "text-dark"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "https://twitter.com/F12keyAdvisor", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/logo-twitter.png", "width", "40"], ["href", "https://discord.gg/VmQkKtrdED", "target", "_blank", 1, "text-dark"], ["src", "https://ageoffarming.f12key.shadysapy.fr/assets/img/QTTlogo.png", "width", "150"]],
                template: function(t, e) {
                    1 & t && (Er(0, "footer", 0),
                    Er(1, "div", 1),
                    Er(2, "div", 2),
                    Er(3, "div", 3),
                    Er(4, "div", 4),
                    Er(5, "span"),
                    lo(6, " For Donations it is at this Address: "),
                    Er(7, "span", 5),
                    Er(8, "b"),
                    lo(9, "2vzh4.wam"),
                    xr(),
                    xr(),
                    Dr(10, "br"),
                    lo(11, " Thank you very much for the donations,"),
                    Dr(12, "br"),
                    lo(13, " it supports the dev and the future development "),
                    xr(),
                    Dr(14, "br"),
                    Dr(15, "br"),
                    lo(16, " All Games with F12key: "),
                    xr(),
                    xr(),
                    xr(),
                    Er(17, "div", 2),
                    Er(18, "div", 6),
                    Er(19, "a", 7),
                    Dr(20, "img", 8),
                    xr(),
                    Dr(21, "br"),
                    lo(22, " Tools : "),
                    Er(23, "a", 9),
                    lo(24, " Links tools "),
                    xr(),
                    Dr(25, "br"),
                    xr(),
                    Er(26, "div", 6),
                    Er(27, "a", 10),
                    Dr(28, "img", 11),
                    xr(),
                    Dr(29, "br"),
                    lo(30, " Tools : "),
                    Er(31, "a", 12),
                    lo(32, " Links tools "),
                    xr(),
                    Dr(33, "br"),
                    lo(34, " Referral : "),
                    Er(35, "a", 10),
                    lo(36, " Links "),
                    xr(),
                    xr(),
                    Er(37, "div", 6),
                    Er(38, "a", 13),
                    Dr(39, "img", 14),
                    xr(),
                    Dr(40, "br"),
                    lo(41, " Tools : "),
                    Er(42, "a", 15),
                    lo(43, " Links tools "),
                    xr(),
                    Dr(44, "br"),
                    xr(),
                    Er(45, "div", 6),
                    Er(46, "a", 16),
                    Dr(47, "img", 17),
                    xr(),
                    Dr(48, "br"),
                    lo(49, " Tools : "),
                    Er(50, "a", 18),
                    lo(51, " Links tools "),
                    xr(),
                    Dr(52, "br"),
                    xr(),
                    Er(53, "div", 6),
                    Er(54, "a", 19),
                    Dr(55, "img", 20),
                    xr(),
                    Dr(56, "br"),
                    Dr(57, "br"),
                    lo(58, " Tools : "),
                    Er(59, "a", 21),
                    lo(60, " Links tools "),
                    xr(),
                    Dr(61, "br"),
                    lo(62, " Referral : "),
                    Er(63, "a", 19),
                    lo(64, " Links "),
                    xr(),
                    xr(),
                    Er(65, "div", 6),
                    Er(66, "a", 22),
                    Dr(67, "img", 23),
                    xr(),
                    Dr(68, "br"),
                    lo(69, " Tools : "),
                    Er(70, "a", 24),
                    lo(71, " Links tools "),
                    xr(),
                    Dr(72, "br"),
                    lo(73, " Referral : "),
                    Er(74, "a", 25),
                    lo(75, " Links "),
                    xr(),
                    xr(),
                    xr(),
                    Er(76, "div", 2),
                    Er(77, "div", 6),
                    Er(78, "a", 26),
                    Dr(79, "img", 27),
                    xr(),
                    Dr(80, "br"),
                    lo(81, " Tools : "),
                    Er(82, "a", 28),
                    lo(83, " Links tools "),
                    xr(),
                    Dr(84, "br"),
                    xr(),
                    Er(85, "div", 6),
                    Er(86, "a", 29),
                    Dr(87, "img", 30),
                    xr(),
                    Dr(88, "br"),
                    lo(89, " Tools : "),
                    Er(90, "a", 31),
                    lo(91, " Links tools "),
                    xr(),
                    Dr(92, "br"),
                    xr(),
                    Er(93, "div", 6),
                    Er(94, "a", 32),
                    Dr(95, "img", 33),
                    xr(),
                    Dr(96, "br"),
                    lo(97, " Tools : "),
                    Er(98, "a", 34),
                    lo(99, " Links tools "),
                    xr(),
                    Dr(100, "br"),
                    xr(),
                    Er(101, "div", 6),
                    Er(102, "a", 35),
                    Dr(103, "img", 36),
                    xr(),
                    Dr(104, "br"),
                    lo(105, " Tools : "),
                    Er(106, "a", 37),
                    lo(107, " Links tools "),
                    xr(),
                    Dr(108, "br"),
                    xr(),
                    Er(109, "div", 6),
                    Dr(110, "br"),
                    Er(111, "a", 38),
                    Dr(112, "img", 39),
                    xr(),
                    Dr(113, "br"),
                    lo(114, " Tools : "),
                    Er(115, "a", 40),
                    lo(116, " Links tools "),
                    xr(),
                    Dr(117, "br"),
                    xr(),
                    Er(118, "div", 6),
                    Dr(119, "br"),
                    Er(120, "a", 41),
                    Dr(121, "img", 42),
                    xr(),
                    Dr(122, "br"),
                    lo(123, " Tools : "),
                    Er(124, "a", 43),
                    lo(125, " Links tools "),
                    xr(),
                    Dr(126, "br"),
                    xr(),
                    xr(),
                    Er(127, "div", 2),
                    Dr(128, "div", 6),
                    Dr(129, "div", 6),
                    Er(130, "div", 6),
                    Er(131, "a", 44),
                    Dr(132, "img", 45),
                    xr(),
                    Dr(133, "br"),
                    lo(134, " Tools : "),
                    Er(135, "a", 46),
                    lo(136, " Links tools "),
                    xr(),
                    Dr(137, "br"),
                    xr(),
                    Er(138, "div", 6),
                    Er(139, "a", 47),
                    Dr(140, "img", 48),
                    xr(),
                    Dr(141, "br"),
                    lo(142, " Tools : "),
                    Er(143, "a", 49),
                    lo(144, " Links tools "),
                    xr(),
                    Dr(145, "br"),
                    xr(),
                    Dr(146, "div", 6),
                    Dr(147, "div", 6),
                    xr(),
                    xr(),
                    Er(148, "div", 50),
                    lo(149, " \xa9 2021 2022 Copyright By "),
                    Er(150, "span", 5),
                    lo(151, "Shadysapy"),
                    xr(),
                    Dr(152, "br"),
                    Er(153, "a", 51),
                    Dr(154, "img", 52),
                    xr(),
                    Dr(155, "br"),
                    lo(156, " Partnership : "),
                    Er(157, "a", 53),
                    Dr(158, "img", 54),
                    xr(),
                    xr(),
                    xr())
                },
                styles: [".badge.md[_ngcontent-%COMP%]{color:#fff;padding:3px;font-size:15px}"]
            }),
            t
        }
        )()
          , jd = (()=>{
            class t {
                constructor(t, e) {
                    this.ageoffarmingService = t,
                    this.shareDataService = e,
                    this.title = "A-O-F Toolkits",
                    this.ValueAOFS = new oh,
                    this.ValueAOFW = new oh,
                    this.ValueAOFF = new oh
                }
                ngOnInit() {
                    this.ageoffarmingService.getConfigsItem().then(t=>{
                        t.rows.forEach(t=>{
                            "Stone Axe" == t.nft_name && "common" == t.rarity && this.shareDataService.setStoneAxeCommon(t),
                            "Stone Axe" == t.nft_name && "uncommon" == t.rarity && this.shareDataService.setStoneAxeUncommon(t),
                            "Stone Axe" == t.nft_name && "rare" == t.rarity && this.shareDataService.setStoneAxeRare(t),
                            "Stone Axe" == t.nft_name && "epic" == t.rarity && this.shareDataService.setStoneAxeEpic(t),
                            "Stone Axe" == t.nft_name && "legendary" == t.rarity && this.shareDataService.setStoneAxeLegendary(t),
                            "Stone Pick" == t.nft_name && "common" == t.rarity && this.shareDataService.setStonePickCommon(t),
                            "Stone Pick" == t.nft_name && "uncommon" == t.rarity && this.shareDataService.setStonePickUncommon(t),
                            "Stone Pick" == t.nft_name && "rare" == t.rarity && this.shareDataService.setStonePickRare(t),
                            "Stone Pick" == t.nft_name && "epic" == t.rarity && this.shareDataService.setStonePickEpic(t),
                            "Stone Pick" == t.nft_name && "legendary" == t.rarity && this.shareDataService.setStonePickLegendary(t),
                            "Stone Spear" == t.nft_name && "common" == t.rarity && this.shareDataService.setStoneSpearCommon(t),
                            "Stone Spear" == t.nft_name && "uncommon" == t.rarity && this.shareDataService.setStoneSpearUncommon(t),
                            "Stone Spear" == t.nft_name && "rare" == t.rarity && this.shareDataService.setStoneSpearRare(t),
                            "Stone Spear" == t.nft_name && "epic" == t.rarity && this.shareDataService.setStoneSpearEpic(t),
                            "Stone Spear" == t.nft_name && "legendary" == t.rarity && this.shareDataService.setStoneSpearLegendary(t)
                        }
                        )
                    }
                    ),
                    this.ageoffarmingService.getWaxApi().subscribe(t=>this.ValueWAX = t.price),
                    this.ageoffarmingService.getalcorApi().subscribe(t=>{
                        const e = t.filter(t=>454 == t.id)[0]
                          , n = t.filter(t=>455 == t.id)[0]
                          , s = t.filter(t=>456 == t.id)[0];
                        this.ValueAOFS.Value = n.last_price,
                        this.ValueAOFS.Value_D = n.change24,
                        this.ValueAOFS.Value_W = n.changeWeek,
                        this.ValueAOFS.Volume_D = n.volume24,
                        this.ValueAOFS.Volume_W = n.volumeWeek,
                        this.ValueAOFW.Value = e.last_price,
                        this.ValueAOFW.Value_D = e.change24,
                        this.ValueAOFW.Value_W = e.changeWeek,
                        this.ValueAOFW.Volume_D = e.volume24,
                        this.ValueAOFW.Volume_W = e.volumeWeek,
                        this.ValueAOFF.Value = s.last_price,
                        this.ValueAOFF.Value_D = s.change24,
                        this.ValueAOFF.Value_W = s.changeWeek,
                        this.ValueAOFF.Volume_D = s.volume24,
                        this.ValueAOFF.Volume_W = s.volumeWeek
                    }
                    ),
                    this.ageoffarmingService.getAOFFApi().subscribe(t=>(this.ValueAOFF.Value = t.last_price,
                    this.ValueAOFF.Value_D = t.change24,
                    this.ValueAOFF.Value_W = t.changeWeek,
                    this.ValueAOFF.Volume_D = t.volume24,
                    this.ValueAOFF.Volume_W = t.volumeWeek,
                    t.last_price)),
                    this.ageoffarmingService.getAOFWApi().subscribe(t=>(this.ValueAOFW.Value = t.last_price,
                    this.ValueAOFW.Value_D = t.change24,
                    this.ValueAOFW.Value_W = t.changeWeek,
                    this.ValueAOFW.Volume_D = t.volume24,
                    this.ValueAOFW.Volume_W = t.volumeWeek,
                    t.last_price)),
                    this.ageoffarmingService.getAOFSApi().subscribe(t=>(this.ValueAOFS.Value = t.last_price,
                    this.ValueAOFS.Value_D = t.change24,
                    this.ValueAOFS.Value_W = t.changeWeek,
                    this.ValueAOFS.Volume_D = t.volume24,
                    this.ValueAOFS.Volume_W = t.volumeWeek,
                    t.last_price)),
                    this.updateSubscription = ph(6e4).subscribe(t=>{
                        this.ageoffarmingService.getAOFFApi().subscribe(t=>(this.ValueAOFF.Value = t.last_price,
                        this.ValueAOFF.Value_D = t.change24,
                        this.ValueAOFF.Value_W = t.changeWeek,
                        this.ValueAOFF.Volume_D = t.volume24,
                        this.ValueAOFF.Volume_W = t.volumeWeek,
                        t.last_price)),
                        this.ageoffarmingService.getAOFWApi().subscribe(t=>(this.ValueAOFW.Value = t.last_price,
                        this.ValueAOFW.Value_D = t.change24,
                        this.ValueAOFW.Value_W = t.changeWeek,
                        this.ValueAOFW.Volume_D = t.volume24,
                        this.ValueAOFW.Volume_W = t.volumeWeek,
                        t.last_price)),
                        this.ageoffarmingService.getAOFSApi().subscribe(t=>(this.ValueAOFS.Value = t.last_price,
                        this.ValueAOFS.Value_D = t.change24,
                        this.ValueAOFS.Value_W = t.changeWeek,
                        this.ValueAOFS.Volume_D = t.volume24,
                        this.ValueAOFS.Volume_W = t.volumeWeek,
                        t.last_price))
                    }
                    ),
                    this.wait(300)
                }
                wait(t) {
                    for (var e = (new Date).getTime(), n = e; n < e + t; )
                        n = (new Date).getTime()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(Gh),Or(Yh))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["app-root"]],
                decls: 3,
                vars: 8,
                consts: [[3, "ValueAOFF", "ValueAOFS", "ValueAOFW", "ValueWAX"], [3, "ValueAOFW", "ValueAOFF", "ValueAOFS", "ValueWAX"]],
                template: function(t, e) {
                    1 & t && (Dr(0, "app-header", 0),
                    Dr(1, "app-home", 1),
                    Dr(2, "app-footer")),
                    2 & t && (Cr("ValueAOFF", e.ValueAOFF.Value)("ValueAOFS", e.ValueAOFS.Value)("ValueAOFW", e.ValueAOFW.Value)("ValueWAX", e.ValueWAX),
                    Ys(1),
                    Cr("ValueAOFW", e.ValueAOFW)("ValueAOFF", e.ValueAOFF)("ValueAOFS", e.ValueAOFS)("ValueWAX", e.ValueWAX))
                },
                directives: [Jh, Md, Ld],
                styles: [""]
            }),
            t
        }
        )();
        function Bd(t, e, n, i) {
            return s(n) && (i = n,
            n = void 0),
            i ? Bd(t, e, n).pipe(k(t=>l(t) ? i(...t) : i(t))) : new y(s=>{
                Hd(t, e, function(t) {
                    s.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t)
                }, s, n)
            }
            )
        }
        function Hd(t, e, n, s, i) {
            let r;
            if (function(t) {
                return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
            }(t)) {
                const s = t;
                t.addEventListener(e, n, i),
                r = ()=>s.removeEventListener(e, n, i)
            } else if (function(t) {
                return t && "function" == typeof t.on && "function" == typeof t.off
            }(t)) {
                const s = t;
                t.on(e, n),
                r = ()=>s.off(e, n)
            } else if (function(t) {
                return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
            }(t)) {
                const s = t;
                t.addListener(e, n),
                r = ()=>s.removeListener(e, n)
            } else {
                if (!t || !t.length)
                    throw new TypeError("Invalid event target");
                for (let r = 0, o = t.length; r < o; r++)
                    Hd(t[r], e, n, s, i)
            }
            s.add(r)
        }
        const $d = (()=>{
            function t() {
                return Error.call(this),
                this.message = "argument out of range",
                this.name = "ArgumentOutOfRangeError",
                this
            }
            return t.prototype = Object.create(Error.prototype),
            t
        }
        )()
          , Ud = new y(t=>t.complete());
        function zd(t) {
            return e=>0 === t ? Ud : e.lift(new qd(t))
        }
        class qd {
            constructor(t) {
                if (this.total = t,
                this.total < 0)
                    throw new $d
            }
            call(t, e) {
                return e.subscribe(new Xd(t,this.total))
            }
        }
        class Xd extends m {
            constructor(t, e) {
                super(t),
                this.total = e,
                this.count = 0
            }
            _next(t) {
                const e = this.total
                  , n = ++this.count;
                n <= e && (this.destination.next(t),
                n === e && (this.destination.complete(),
                this.unsubscribe()))
            }
        }
        let Qd = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({}),
            t
        }
        )();
        function Kd(t) {
            return Array.isArray(t) ? t : [t]
        }
        function Zd(t) {
            return null == t ? "" : "string" == typeof t ? t : `${t}px`
        }
        new Mn("MdbAccordionItemBodyDirective"),
        new Mn("MdbAccordionItemHeaderDirective");
        let Gd = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, Qd]]
            }),
            t
        }
        )();
        function Yd(t) {
            return e=>e.lift(new Jd(t))
        }
        class Jd {
            constructor(t) {
                this.notifier = t
            }
            call(t, e) {
                const n = new tp(t)
                  , s = L(this.notifier, new W(n));
                return s && !n.seenValue ? (n.add(s),
                e.subscribe(n)) : n
            }
        }
        class tp extends M {
            constructor(t) {
                super(t),
                this.seenValue = !1
            }
            notifyNext() {
                this.seenValue = !0,
                this.complete()
            }
            notifyComplete() {}
        }
        let ep, np = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc]]
            }),
            t
        }
        )(), sp = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, Zu]]
            }),
            t
        }
        )();
        class ip {
            constructor(t) {
                this.durationSelector = t
            }
            call(t, e) {
                return e.subscribe(new rp(t,this.durationSelector))
            }
        }
        class rp extends M {
            constructor(t, e) {
                super(t),
                this.durationSelector = e,
                this.hasValue = !1
            }
            _next(t) {
                if (this.value = t,
                this.hasValue = !0,
                !this.throttled) {
                    let n;
                    try {
                        const {durationSelector: e} = this;
                        n = e(t)
                    } catch (e) {
                        return this.destination.error(e)
                    }
                    const s = L(n, new W(this));
                    !s || s.closed ? this.clearThrottle() : this.add(this.throttled = s)
                }
            }
            clearThrottle() {
                const {value: t, hasValue: e, throttled: n} = this;
                n && (this.remove(n),
                this.throttled = void 0,
                n.unsubscribe()),
                e && (this.value = void 0,
                this.hasValue = !1,
                this.destination.next(t))
            }
            notifyNext() {
                this.clearThrottle()
            }
            notifyComplete() {
                this.clearThrottle()
            }
        }
        function op(t) {
            const {index: e, period: n, subscriber: s} = t;
            if (s.next(e),
            !s.closed) {
                if (-1 === n)
                    return s.complete();
                t.index = e + 1,
                this.schedule(t, n)
            }
        }
        function ap(t, e=uh) {
            return n = ()=>function(t=0, e, n) {
                let s = -1;
                return dh(e) ? s = Number(e) < 1 ? 1 : Number(e) : C(e) && (n = e),
                C(n) || (n = uh),
                new y(e=>{
                    const i = dh(t) ? t : +t - n.now();
                    return n.schedule(op, i, {
                        index: 0,
                        period: s,
                        subscriber: e
                    })
                }
                )
            }(t, e),
            function(t) {
                return t.lift(new ip(n))
            }
            ;
            var n
        }
        try {
            ep = "undefined" != typeof Intl && Intl.v8BreakIterator
        } catch (D_) {
            ep = !1
        }
        let lp, cp = (()=>{
            class t {
                constructor(t) {
                    this._platformId = t,
                    this.isBrowser = this._platformId ? "browser" === this._platformId : "object" == typeof document && !!document,
                    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent),
                    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent),
                    this.BLINK = this.isBrowser && !(!window.chrome && !ep) && "undefined" != typeof CSS && !this.EDGE && !this.TRIDENT,
                    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT,
                    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream"in window),
                    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent),
                    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT,
                    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(sl))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(sl))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )(), hp = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({}),
            t
        }
        )();
        function up() {
            if (null == lp) {
                if ("object" != typeof document || !document || "function" != typeof Element || !Element)
                    return lp = !1,
                    lp;
                if ("scrollBehavior"in document.documentElement.style)
                    lp = !0;
                else {
                    const t = Element.prototype.scrollTo;
                    lp = !!t && !/\{\s*\[native code\]\s*\}/.test(t.toString())
                }
            }
            return lp
        }
        const dp = new Mn("cdk-dir-doc",{
            providedIn: "root",
            factory: function() {
                return ts(zl)
            }
        });
        let pp = (()=>{
            class t {
                constructor(t) {
                    if (this.value = "ltr",
                    this.change = new Ra,
                    t) {
                        const e = t.documentElement ? t.documentElement.dir : null
                          , n = (t.body ? t.body.dir : null) || e;
                        this.value = "ltr" === n || "rtl" === n ? n : "ltr"
                    }
                }
                ngOnDestroy() {
                    this.change.complete()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(dp, 8))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(dp, 8))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , mp = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({}),
            t
        }
        )()
          , fp = (()=>{
            class t {
                constructor(t, e, n) {
                    this._ngZone = t,
                    this._platform = e,
                    this._scrolled = new S,
                    this._globalSubscription = null,
                    this._scrolledCount = 0,
                    this.scrollContainers = new Map,
                    this._document = n
                }
                register(t) {
                    this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(()=>this._scrolled.next(t)))
                }
                deregister(t) {
                    const e = this.scrollContainers.get(t);
                    e && (e.unsubscribe(),
                    this.scrollContainers.delete(t))
                }
                scrolled(t=20) {
                    return this._platform.isBrowser ? new y(e=>{
                        this._globalSubscription || this._addGlobalListener();
                        const n = t > 0 ? this._scrolled.pipe(ap(t)).subscribe(e) : this._scrolled.subscribe(e);
                        return this._scrolledCount++,
                        ()=>{
                            n.unsubscribe(),
                            this._scrolledCount--,
                            this._scrolledCount || this._removeGlobalListener()
                        }
                    }
                    ) : fh()
                }
                ngOnDestroy() {
                    this._removeGlobalListener(),
                    this.scrollContainers.forEach((t,e)=>this.deregister(e)),
                    this._scrolled.complete()
                }
                ancestorScrolled(t, e) {
                    const n = this.getAncestorScrollContainers(t);
                    return this.scrolled(e).pipe(gh(t=>!t || n.indexOf(t) > -1))
                }
                getAncestorScrollContainers(t) {
                    const e = [];
                    return this.scrollContainers.forEach((n,s)=>{
                        this._scrollableContainsElement(s, t) && e.push(s)
                    }
                    ),
                    e
                }
                _getWindow() {
                    return this._document.defaultView || window
                }
                _scrollableContainsElement(t, e) {
                    let n = (i = e)instanceof No ? i.nativeElement : i
                      , s = t.getElementRef().nativeElement;
                    var i;
                    do {
                        if (n == s)
                            return !0
                    } while (n = n.parentElement);
                    return !1
                }
                _addGlobalListener() {
                    this._globalSubscription = this._ngZone.runOutsideAngular(()=>Bd(this._getWindow().document, "scroll").subscribe(()=>this._scrolled.next()))
                }
                _removeGlobalListener() {
                    this._globalSubscription && (this._globalSubscription.unsubscribe(),
                    this._globalSubscription = null)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(yl),Jn(cp),Jn(zl, 8))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(yl),Jn(cp),Jn(zl, 8))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , gp = (()=>{
            class t {
                constructor(t, e, n) {
                    this._platform = t,
                    this._change = new S,
                    this._changeListener = t=>{
                        this._change.next(t)
                    }
                    ,
                    this._document = n,
                    e.runOutsideAngular(()=>{
                        if (t.isBrowser) {
                            const t = this._getWindow();
                            t.addEventListener("resize", this._changeListener),
                            t.addEventListener("orientationchange", this._changeListener)
                        }
                        this.change().subscribe(()=>this._updateViewportSize())
                    }
                    )
                }
                ngOnDestroy() {
                    if (this._platform.isBrowser) {
                        const t = this._getWindow();
                        t.removeEventListener("resize", this._changeListener),
                        t.removeEventListener("orientationchange", this._changeListener)
                    }
                    this._change.complete()
                }
                getViewportSize() {
                    this._viewportSize || this._updateViewportSize();
                    const t = {
                        width: this._viewportSize.width,
                        height: this._viewportSize.height
                    };
                    return this._platform.isBrowser || (this._viewportSize = null),
                    t
                }
                getViewportRect() {
                    const t = this.getViewportScrollPosition()
                      , {width: e, height: n} = this.getViewportSize();
                    return {
                        top: t.top,
                        left: t.left,
                        bottom: t.top + n,
                        right: t.left + e,
                        height: n,
                        width: e
                    }
                }
                getViewportScrollPosition() {
                    if (!this._platform.isBrowser)
                        return {
                            top: 0,
                            left: 0
                        };
                    const t = this._document
                      , e = this._getWindow()
                      , n = t.documentElement
                      , s = n.getBoundingClientRect();
                    return {
                        top: -s.top || t.body.scrollTop || e.scrollY || n.scrollTop || 0,
                        left: -s.left || t.body.scrollLeft || e.scrollX || n.scrollLeft || 0
                    }
                }
                change(t=20) {
                    return t > 0 ? this._change.pipe(ap(t)) : this._change
                }
                _getWindow() {
                    return this._document.defaultView || window
                }
                _updateViewportSize() {
                    const t = this._getWindow();
                    this._viewportSize = this._platform.isBrowser ? {
                        width: t.innerWidth,
                        height: t.innerHeight
                    } : {
                        width: 0,
                        height: 0
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(cp),Jn(yl),Jn(zl, 8))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(cp),Jn(yl),Jn(zl, 8))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , _p = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({}),
            t
        }
        )()
          , yp = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[mp, hp, _p], mp, _p]
            }),
            t
        }
        )();
        class vp {
            attach(t) {
                return this._attachedHost = t,
                t.attach(this)
            }
            detach() {
                let t = this._attachedHost;
                null != t && (this._attachedHost = null,
                t.detach())
            }
            get isAttached() {
                return null != this._attachedHost
            }
            setAttachedHost(t) {
                this._attachedHost = t
            }
        }
        class bp extends vp {
            constructor(t, e, n, s) {
                super(),
                this.component = t,
                this.viewContainerRef = e,
                this.injector = n,
                this.componentFactoryResolver = s
            }
        }
        class wp extends vp {
            constructor(t, e, n) {
                super(),
                this.templateRef = t,
                this.viewContainerRef = e,
                this.context = n
            }
            get origin() {
                return this.templateRef.elementRef
            }
            attach(t, e=this.context) {
                return this.context = e,
                super.attach(t)
            }
            detach() {
                return this.context = void 0,
                super.detach()
            }
        }
        class Ap extends vp {
            constructor(t) {
                super(),
                this.element = t instanceof No ? t.nativeElement : t
            }
        }
        class Sp {
            constructor() {
                this._isDisposed = !1,
                this.attachDomPortal = null
            }
            hasAttached() {
                return !!this._attachedPortal
            }
            attach(t) {
                return t instanceof bp ? (this._attachedPortal = t,
                this.attachComponentPortal(t)) : t instanceof wp ? (this._attachedPortal = t,
                this.attachTemplatePortal(t)) : this.attachDomPortal && t instanceof Ap ? (this._attachedPortal = t,
                this.attachDomPortal(t)) : void 0
            }
            detach() {
                this._attachedPortal && (this._attachedPortal.setAttachedHost(null),
                this._attachedPortal = null),
                this._invokeDisposeFn()
            }
            dispose() {
                this.hasAttached() && this.detach(),
                this._invokeDisposeFn(),
                this._isDisposed = !0
            }
            setDisposeFn(t) {
                this._disposeFn = t
            }
            _invokeDisposeFn() {
                this._disposeFn && (this._disposeFn(),
                this._disposeFn = null)
            }
        }
        class Op extends Sp {
            constructor(t, e, n, s, i) {
                super(),
                this.outletElement = t,
                this._componentFactoryResolver = e,
                this._appRef = n,
                this._defaultInjector = s,
                this.attachDomPortal = t=>{
                    const e = t.element
                      , n = this._document.createComment("dom-portal");
                    e.parentNode.insertBefore(n, e),
                    this.outletElement.appendChild(e),
                    this._attachedPortal = t,
                    super.setDisposeFn(()=>{
                        n.parentNode && n.parentNode.replaceChild(e, n)
                    }
                    )
                }
                ,
                this._document = i
            }
            attachComponentPortal(t) {
                const e = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component);
                let n;
                return t.viewContainerRef ? (n = t.viewContainerRef.createComponent(e, t.viewContainerRef.length, t.injector || t.viewContainerRef.injector),
                this.setDisposeFn(()=>n.destroy())) : (n = e.create(t.injector || this._defaultInjector),
                this._appRef.attachView(n.hostView),
                this.setDisposeFn(()=>{
                    this._appRef.detachView(n.hostView),
                    n.destroy()
                }
                )),
                this.outletElement.appendChild(this._getComponentRootNode(n)),
                this._attachedPortal = t,
                n
            }
            attachTemplatePortal(t) {
                let e = t.viewContainerRef
                  , n = e.createEmbeddedView(t.templateRef, t.context);
                return n.rootNodes.forEach(t=>this.outletElement.appendChild(t)),
                n.detectChanges(),
                this.setDisposeFn(()=>{
                    let t = e.indexOf(n);
                    -1 !== t && e.remove(t)
                }
                ),
                this._attachedPortal = t,
                n
            }
            dispose() {
                super.dispose(),
                null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement)
            }
            _getComponentRootNode(t) {
                return t.hostView.rootNodes[0]
            }
        }
        let Cp = (()=>{
            class t extends Sp {
                constructor(t, e, n) {
                    super(),
                    this._componentFactoryResolver = t,
                    this._viewContainerRef = e,
                    this._isInitialized = !1,
                    this.attached = new Ra,
                    this.attachDomPortal = t=>{
                        const e = t.element
                          , n = this._document.createComment("dom-portal");
                        t.setAttachedHost(this),
                        e.parentNode.insertBefore(n, e),
                        this._getRootNode().appendChild(e),
                        this._attachedPortal = t,
                        super.setDisposeFn(()=>{
                            n.parentNode && n.parentNode.replaceChild(e, n)
                        }
                        )
                    }
                    ,
                    this._document = n
                }
                get portal() {
                    return this._attachedPortal
                }
                set portal(t) {
                    (!this.hasAttached() || t || this._isInitialized) && (this.hasAttached() && super.detach(),
                    t && super.attach(t),
                    this._attachedPortal = t)
                }
                get attachedRef() {
                    return this._attachedRef
                }
                ngOnInit() {
                    this._isInitialized = !0
                }
                ngOnDestroy() {
                    super.dispose(),
                    this._attachedPortal = null,
                    this._attachedRef = null
                }
                attachComponentPortal(t) {
                    t.setAttachedHost(this);
                    const e = null != t.viewContainerRef ? t.viewContainerRef : this._viewContainerRef
                      , n = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component)
                      , s = e.createComponent(n, e.length, t.injector || e.injector);
                    return e !== this._viewContainerRef && this._getRootNode().appendChild(s.hostView.rootNodes[0]),
                    super.setDisposeFn(()=>s.destroy()),
                    this._attachedPortal = t,
                    this._attachedRef = s,
                    this.attached.emit(s),
                    s
                }
                attachTemplatePortal(t) {
                    t.setAttachedHost(this);
                    const e = this._viewContainerRef.createEmbeddedView(t.templateRef, t.context);
                    return super.setDisposeFn(()=>this._viewContainerRef.clear()),
                    this._attachedPortal = t,
                    this._attachedRef = e,
                    this.attached.emit(e),
                    e
                }
                _getRootNode() {
                    const t = this._viewContainerRef.element.nativeElement;
                    return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(To),Or(_a),Or(zl))
            }
            ,
            t.\u0275dir = Xt({
                type: t,
                selectors: [["", "cdkPortalOutlet", ""]],
                inputs: {
                    portal: ["cdkPortalOutlet", "portal"]
                },
                outputs: {
                    attached: "attached"
                },
                exportAs: ["cdkPortalOutlet"],
                features: [hr]
            }),
            t
        }
        )()
          , kp = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({}),
            t
        }
        )();
        const Ep = up();
        class xp {
            constructor(t, e) {
                this._viewportRuler = t,
                this._previousHTMLStyles = {
                    top: "",
                    left: ""
                },
                this._isEnabled = !1,
                this._document = e
            }
            attach() {}
            enable() {
                if (this._canBeEnabled()) {
                    const t = this._document.documentElement;
                    this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(),
                    this._previousHTMLStyles.left = t.style.left || "",
                    this._previousHTMLStyles.top = t.style.top || "",
                    t.style.left = Zd(-this._previousScrollPosition.left),
                    t.style.top = Zd(-this._previousScrollPosition.top),
                    t.classList.add("cdk-global-scrollblock"),
                    this._isEnabled = !0
                }
            }
            disable() {
                if (this._isEnabled) {
                    const t = this._document.documentElement
                      , e = t.style
                      , n = this._document.body.style
                      , s = e.scrollBehavior || ""
                      , i = n.scrollBehavior || "";
                    this._isEnabled = !1,
                    e.left = this._previousHTMLStyles.left,
                    e.top = this._previousHTMLStyles.top,
                    t.classList.remove("cdk-global-scrollblock"),
                    Ep && (e.scrollBehavior = n.scrollBehavior = "auto"),
                    window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top),
                    Ep && (e.scrollBehavior = s,
                    n.scrollBehavior = i)
                }
            }
            _canBeEnabled() {
                if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled)
                    return !1;
                const t = this._document.body
                  , e = this._viewportRuler.getViewportSize();
                return t.scrollHeight > e.height || t.scrollWidth > e.width
            }
        }
        class Dp {
            constructor(t, e, n, s) {
                this._scrollDispatcher = t,
                this._ngZone = e,
                this._viewportRuler = n,
                this._config = s,
                this._scrollSubscription = null,
                this._detach = ()=>{
                    this.disable(),
                    this._overlayRef.hasAttached() && this._ngZone.run(()=>this._overlayRef.detach())
                }
            }
            attach(t) {
                this._overlayRef = t
            }
            enable() {
                if (this._scrollSubscription)
                    return;
                const t = this._scrollDispatcher.scrolled(0);
                this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top,
                this._scrollSubscription = t.subscribe(()=>{
                    const t = this._viewportRuler.getViewportScrollPosition().top;
                    Math.abs(t - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition()
                }
                )) : this._scrollSubscription = t.subscribe(this._detach)
            }
            disable() {
                this._scrollSubscription && (this._scrollSubscription.unsubscribe(),
                this._scrollSubscription = null)
            }
            detach() {
                this.disable(),
                this._overlayRef = null
            }
        }
        class Vp {
            enable() {}
            disable() {}
            attach() {}
        }
        function Fp(t, e) {
            return e.some(e=>t.bottom < e.top || t.top > e.bottom || t.right < e.left || t.left > e.right)
        }
        function Tp(t, e) {
            return e.some(e=>t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right)
        }
        class Pp {
            constructor(t, e, n, s) {
                this._scrollDispatcher = t,
                this._viewportRuler = e,
                this._ngZone = n,
                this._config = s,
                this._scrollSubscription = null
            }
            attach(t) {
                this._overlayRef = t
            }
            enable() {
                this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(()=>{
                    if (this._overlayRef.updatePosition(),
                    this._config && this._config.autoClose) {
                        const t = this._overlayRef.overlayElement.getBoundingClientRect()
                          , {width: e, height: n} = this._viewportRuler.getViewportSize();
                        Fp(t, [{
                            width: e,
                            height: n,
                            bottom: n,
                            right: e,
                            top: 0,
                            left: 0
                        }]) && (this.disable(),
                        this._ngZone.run(()=>this._overlayRef.detach()))
                    }
                }
                ))
            }
            disable() {
                this._scrollSubscription && (this._scrollSubscription.unsubscribe(),
                this._scrollSubscription = null)
            }
            detach() {
                this.disable(),
                this._overlayRef = null
            }
        }
        let Ip = (()=>{
            class t {
                constructor(t, e, n, s) {
                    this._scrollDispatcher = t,
                    this._viewportRuler = e,
                    this._ngZone = n,
                    this.noop = ()=>new Vp,
                    this.close = t=>new Dp(this._scrollDispatcher,this._ngZone,this._viewportRuler,t),
                    this.block = ()=>new xp(this._viewportRuler,this._document),
                    this.reposition = t=>new Pp(this._scrollDispatcher,this._viewportRuler,this._ngZone,t),
                    this._document = s
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(fp),Jn(gp),Jn(yl),Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(fp),Jn(gp),Jn(yl),Jn(zl))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        class Rp {
            constructor(t) {
                if (this.scrollStrategy = new Vp,
                this.panelClass = "",
                this.hasBackdrop = !1,
                this.backdropClass = "cdk-overlay-dark-backdrop",
                this.disposeOnNavigation = !1,
                t) {
                    const e = Object.keys(t);
                    for (const n of e)
                        void 0 !== t[n] && (this[n] = t[n])
                }
            }
        }
        class Np {
            constructor(t, e, n, s, i) {
                this.offsetX = n,
                this.offsetY = s,
                this.panelClass = i,
                this.originX = t.originX,
                this.originY = t.originY,
                this.overlayX = e.overlayX,
                this.overlayY = e.overlayY
            }
        }
        class Wp {
            constructor(t, e) {
                this.connectionPair = t,
                this.scrollableViewProperties = e
            }
        }
        let Mp = (()=>{
            class t {
                constructor(t) {
                    this._attachedOverlays = [],
                    this._document = t
                }
                ngOnDestroy() {
                    this.detach()
                }
                add(t) {
                    this.remove(t),
                    this._attachedOverlays.push(t)
                }
                remove(t) {
                    const e = this._attachedOverlays.indexOf(t);
                    e > -1 && this._attachedOverlays.splice(e, 1),
                    0 === this._attachedOverlays.length && this.detach()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(zl))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , Lp = (()=>{
            class t extends Mp {
                constructor(t) {
                    super(t),
                    this._keydownListener = t=>{
                        const e = this._attachedOverlays;
                        for (let n = e.length - 1; n > -1; n--)
                            if (e[n]._keydownEvents.observers.length > 0) {
                                e[n]._keydownEvents.next(t);
                                break
                            }
                    }
                }
                add(t) {
                    super.add(t),
                    this._isAttached || (this._document.body.addEventListener("keydown", this._keydownListener),
                    this._isAttached = !0)
                }
                detach() {
                    this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener),
                    this._isAttached = !1)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(zl))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , jp = (()=>{
            class t extends Mp {
                constructor(t, e) {
                    super(t),
                    this._platform = e,
                    this._cursorStyleIsSet = !1,
                    this._clickListener = t=>{
                        const e = t.composedPath ? t.composedPath()[0] : t.target
                          , n = this._attachedOverlays.slice();
                        for (let s = n.length - 1; s > -1; s--) {
                            const i = n[s];
                            if (!(i._outsidePointerEvents.observers.length < 1) && i.hasAttached()) {
                                if (i.overlayElement.contains(e))
                                    break;
                                i._outsidePointerEvents.next(t)
                            }
                        }
                    }
                }
                add(t) {
                    if (super.add(t),
                    !this._isAttached) {
                        const t = this._document.body;
                        t.addEventListener("click", this._clickListener, !0),
                        t.addEventListener("auxclick", this._clickListener, !0),
                        t.addEventListener("contextmenu", this._clickListener, !0),
                        this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = t.style.cursor,
                        t.style.cursor = "pointer",
                        this._cursorStyleIsSet = !0),
                        this._isAttached = !0
                    }
                }
                detach() {
                    if (this._isAttached) {
                        const t = this._document.body;
                        t.removeEventListener("click", this._clickListener, !0),
                        t.removeEventListener("auxclick", this._clickListener, !0),
                        t.removeEventListener("contextmenu", this._clickListener, !0),
                        this._platform.IOS && this._cursorStyleIsSet && (t.style.cursor = this._cursorOriginalValue,
                        this._cursorStyleIsSet = !1),
                        this._isAttached = !1
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl),Jn(cp))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(zl),Jn(cp))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        const Bp = "undefined" != typeof __karma__ && !!__karma__ || "undefined" != typeof jasmine && !!jasmine || "undefined" != typeof jest && !!jest || "undefined" != typeof Mocha && !!Mocha;
        let Hp = (()=>{
            class t {
                constructor(t, e) {
                    this._platform = e,
                    this._document = t
                }
                ngOnDestroy() {
                    const t = this._containerElement;
                    t && t.parentNode && t.parentNode.removeChild(t)
                }
                getContainerElement() {
                    return this._containerElement || this._createContainer(),
                    this._containerElement
                }
                _createContainer() {
                    const t = "cdk-overlay-container";
                    if (this._platform.isBrowser || Bp) {
                        const e = this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);
                        for (let t = 0; t < e.length; t++)
                            e[t].parentNode.removeChild(e[t])
                    }
                    const e = this._document.createElement("div");
                    e.classList.add(t),
                    Bp ? e.setAttribute("platform", "test") : this._platform.isBrowser || e.setAttribute("platform", "server"),
                    this._document.body.appendChild(e),
                    this._containerElement = e
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl),Jn(cp))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(zl),Jn(cp))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        class $p {
            constructor(t, e, n, s, i, r, o, a, l) {
                this._portalOutlet = t,
                this._host = e,
                this._pane = n,
                this._config = s,
                this._ngZone = i,
                this._keyboardDispatcher = r,
                this._document = o,
                this._location = a,
                this._outsideClickDispatcher = l,
                this._backdropElement = null,
                this._backdropClick = new S,
                this._attachments = new S,
                this._detachments = new S,
                this._locationChanges = u.EMPTY,
                this._backdropClickHandler = t=>this._backdropClick.next(t),
                this._keydownEvents = new S,
                this._outsidePointerEvents = new S,
                s.scrollStrategy && (this._scrollStrategy = s.scrollStrategy,
                this._scrollStrategy.attach(this)),
                this._positionStrategy = s.positionStrategy
            }
            get overlayElement() {
                return this._pane
            }
            get backdropElement() {
                return this._backdropElement
            }
            get hostElement() {
                return this._host
            }
            attach(t) {
                let e = this._portalOutlet.attach(t);
                return !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host),
                this._positionStrategy && this._positionStrategy.attach(this),
                this._updateStackingOrder(),
                this._updateElementSize(),
                this._updateElementDirection(),
                this._scrollStrategy && this._scrollStrategy.enable(),
                this._ngZone.onStable.pipe(zd(1)).subscribe(()=>{
                    this.hasAttached() && this.updatePosition()
                }
                ),
                this._togglePointerEvents(!0),
                this._config.hasBackdrop && this._attachBackdrop(),
                this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0),
                this._attachments.next(),
                this._keyboardDispatcher.add(this),
                this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(()=>this.dispose())),
                this._outsideClickDispatcher.add(this),
                e
            }
            detach() {
                if (!this.hasAttached())
                    return;
                this.detachBackdrop(),
                this._togglePointerEvents(!1),
                this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(),
                this._scrollStrategy && this._scrollStrategy.disable();
                const t = this._portalOutlet.detach();
                return this._detachments.next(),
                this._keyboardDispatcher.remove(this),
                this._detachContentWhenStable(),
                this._locationChanges.unsubscribe(),
                this._outsideClickDispatcher.remove(this),
                t
            }
            dispose() {
                const t = this.hasAttached();
                this._positionStrategy && this._positionStrategy.dispose(),
                this._disposeScrollStrategy(),
                this.detachBackdrop(),
                this._locationChanges.unsubscribe(),
                this._keyboardDispatcher.remove(this),
                this._portalOutlet.dispose(),
                this._attachments.complete(),
                this._backdropClick.complete(),
                this._keydownEvents.complete(),
                this._outsidePointerEvents.complete(),
                this._outsideClickDispatcher.remove(this),
                this._host && this._host.parentNode && (this._host.parentNode.removeChild(this._host),
                this._host = null),
                this._previousHostParent = this._pane = null,
                t && this._detachments.next(),
                this._detachments.complete()
            }
            hasAttached() {
                return this._portalOutlet.hasAttached()
            }
            backdropClick() {
                return this._backdropClick
            }
            attachments() {
                return this._attachments
            }
            detachments() {
                return this._detachments
            }
            keydownEvents() {
                return this._keydownEvents
            }
            outsidePointerEvents() {
                return this._outsidePointerEvents
            }
            getConfig() {
                return this._config
            }
            updatePosition() {
                this._positionStrategy && this._positionStrategy.apply()
            }
            updatePositionStrategy(t) {
                t !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(),
                this._positionStrategy = t,
                this.hasAttached() && (t.attach(this),
                this.updatePosition()))
            }
            updateSize(t) {
                this._config = Object.assign(Object.assign({}, this._config), t),
                this._updateElementSize()
            }
            setDirection(t) {
                this._config = Object.assign(Object.assign({}, this._config), {
                    direction: t
                }),
                this._updateElementDirection()
            }
            addPanelClass(t) {
                this._pane && this._toggleClasses(this._pane, t, !0)
            }
            removePanelClass(t) {
                this._pane && this._toggleClasses(this._pane, t, !1)
            }
            getDirection() {
                const t = this._config.direction;
                return t ? "string" == typeof t ? t : t.value : "ltr"
            }
            updateScrollStrategy(t) {
                t !== this._scrollStrategy && (this._disposeScrollStrategy(),
                this._scrollStrategy = t,
                this.hasAttached() && (t.attach(this),
                t.enable()))
            }
            _updateElementDirection() {
                this._host.setAttribute("dir", this.getDirection())
            }
            _updateElementSize() {
                if (!this._pane)
                    return;
                const t = this._pane.style;
                t.width = Zd(this._config.width),
                t.height = Zd(this._config.height),
                t.minWidth = Zd(this._config.minWidth),
                t.minHeight = Zd(this._config.minHeight),
                t.maxWidth = Zd(this._config.maxWidth),
                t.maxHeight = Zd(this._config.maxHeight)
            }
            _togglePointerEvents(t) {
                this._pane.style.pointerEvents = t ? "" : "none"
            }
            _attachBackdrop() {
                const t = "cdk-overlay-backdrop-showing";
                this._backdropElement = this._document.createElement("div"),
                this._backdropElement.classList.add("cdk-overlay-backdrop"),
                this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0),
                this._host.parentElement.insertBefore(this._backdropElement, this._host),
                this._backdropElement.addEventListener("click", this._backdropClickHandler),
                "undefined" != typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(()=>{
                    requestAnimationFrame(()=>{
                        this._backdropElement && this._backdropElement.classList.add(t)
                    }
                    )
                }
                ) : this._backdropElement.classList.add(t)
            }
            _updateStackingOrder() {
                this._host.nextSibling && this._host.parentNode.appendChild(this._host)
            }
            detachBackdrop() {
                let t, e = this._backdropElement;
                if (!e)
                    return;
                let n = ()=>{
                    e && (e.removeEventListener("click", this._backdropClickHandler),
                    e.removeEventListener("transitionend", n),
                    e.parentNode && e.parentNode.removeChild(e)),
                    this._backdropElement == e && (this._backdropElement = null),
                    this._config.backdropClass && this._toggleClasses(e, this._config.backdropClass, !1),
                    clearTimeout(t)
                }
                ;
                e.classList.remove("cdk-overlay-backdrop-showing"),
                this._ngZone.runOutsideAngular(()=>{
                    e.addEventListener("transitionend", n)
                }
                ),
                e.style.pointerEvents = "none",
                t = this._ngZone.runOutsideAngular(()=>setTimeout(n, 500))
            }
            _toggleClasses(t, e, n) {
                const s = t.classList;
                Kd(e).forEach(t=>{
                    t && (n ? s.add(t) : s.remove(t))
                }
                )
            }
            _detachContentWhenStable() {
                this._ngZone.runOutsideAngular(()=>{
                    const t = this._ngZone.onStable.pipe(Yd(U(this._attachments, this._detachments))).subscribe(()=>{
                        this._pane && this._host && 0 !== this._pane.children.length || (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1),
                        this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement,
                        this._previousHostParent.removeChild(this._host)),
                        t.unsubscribe())
                    }
                    )
                }
                )
            }
            _disposeScrollStrategy() {
                const t = this._scrollStrategy;
                t && (t.disable(),
                t.detach && t.detach())
            }
        }
        const Up = "cdk-overlay-connected-position-bounding-box"
          , zp = /([A-Za-z%]+)$/;
        class qp {
            constructor(t, e, n, s, i) {
                this._viewportRuler = e,
                this._document = n,
                this._platform = s,
                this._overlayContainer = i,
                this._lastBoundingBoxSize = {
                    width: 0,
                    height: 0
                },
                this._isPushed = !1,
                this._canPush = !0,
                this._growAfterOpen = !1,
                this._hasFlexibleDimensions = !0,
                this._positionLocked = !1,
                this._viewportMargin = 0,
                this._scrollables = [],
                this._preferredPositions = [],
                this._positionChanges = new S,
                this._resizeSubscription = u.EMPTY,
                this._offsetX = 0,
                this._offsetY = 0,
                this._appliedPanelClasses = [],
                this.positionChanges = this._positionChanges,
                this.setOrigin(t)
            }
            get positions() {
                return this._preferredPositions
            }
            attach(t) {
                this._validatePositions(),
                t.hostElement.classList.add(Up),
                this._overlayRef = t,
                this._boundingBox = t.hostElement,
                this._pane = t.overlayElement,
                this._isDisposed = !1,
                this._isInitialRender = !0,
                this._lastPosition = null,
                this._resizeSubscription.unsubscribe(),
                this._resizeSubscription = this._viewportRuler.change().subscribe(()=>{
                    this._isInitialRender = !0,
                    this.apply()
                }
                )
            }
            apply() {
                if (this._isDisposed || !this._platform.isBrowser)
                    return;
                if (!this._isInitialRender && this._positionLocked && this._lastPosition)
                    return void this.reapplyLastPosition();
                this._clearPanelClasses(),
                this._resetOverlayElementStyles(),
                this._resetBoundingBoxStyles(),
                this._viewportRect = this._getNarrowedViewportRect(),
                this._originRect = this._getOriginRect(),
                this._overlayRect = this._pane.getBoundingClientRect();
                const t = this._originRect
                  , e = this._overlayRect
                  , n = this._viewportRect
                  , s = [];
                let i;
                for (let r of this._preferredPositions) {
                    let o = this._getOriginPoint(t, r)
                      , a = this._getOverlayPoint(o, e, r)
                      , l = this._getOverlayFit(a, e, n, r);
                    if (l.isCompletelyWithinViewport)
                        return this._isPushed = !1,
                        void this._applyPosition(r, o);
                    this._canFitWithFlexibleDimensions(l, a, n) ? s.push({
                        position: r,
                        origin: o,
                        overlayRect: e,
                        boundingBoxRect: this._calculateBoundingBoxRect(o, r)
                    }) : (!i || i.overlayFit.visibleArea < l.visibleArea) && (i = {
                        overlayFit: l,
                        overlayPoint: a,
                        originPoint: o,
                        position: r,
                        overlayRect: e
                    })
                }
                if (s.length) {
                    let t = null
                      , e = -1;
                    for (const n of s) {
                        const s = n.boundingBoxRect.width * n.boundingBoxRect.height * (n.position.weight || 1);
                        s > e && (e = s,
                        t = n)
                    }
                    return this._isPushed = !1,
                    void this._applyPosition(t.position, t.origin)
                }
                if (this._canPush)
                    return this._isPushed = !0,
                    void this._applyPosition(i.position, i.originPoint);
                this._applyPosition(i.position, i.originPoint)
            }
            detach() {
                this._clearPanelClasses(),
                this._lastPosition = null,
                this._previousPushAmount = null,
                this._resizeSubscription.unsubscribe()
            }
            dispose() {
                this._isDisposed || (this._boundingBox && Xp(this._boundingBox.style, {
                    top: "",
                    left: "",
                    right: "",
                    bottom: "",
                    height: "",
                    width: "",
                    alignItems: "",
                    justifyContent: ""
                }),
                this._pane && this._resetOverlayElementStyles(),
                this._overlayRef && this._overlayRef.hostElement.classList.remove(Up),
                this.detach(),
                this._positionChanges.complete(),
                this._overlayRef = this._boundingBox = null,
                this._isDisposed = !0)
            }
            reapplyLastPosition() {
                if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
                    this._originRect = this._getOriginRect(),
                    this._overlayRect = this._pane.getBoundingClientRect(),
                    this._viewportRect = this._getNarrowedViewportRect();
                    const t = this._lastPosition || this._preferredPositions[0]
                      , e = this._getOriginPoint(this._originRect, t);
                    this._applyPosition(t, e)
                }
            }
            withScrollableContainers(t) {
                return this._scrollables = t,
                this
            }
            withPositions(t) {
                return this._preferredPositions = t,
                -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null),
                this._validatePositions(),
                this
            }
            withViewportMargin(t) {
                return this._viewportMargin = t,
                this
            }
            withFlexibleDimensions(t=!0) {
                return this._hasFlexibleDimensions = t,
                this
            }
            withGrowAfterOpen(t=!0) {
                return this._growAfterOpen = t,
                this
            }
            withPush(t=!0) {
                return this._canPush = t,
                this
            }
            withLockedPosition(t=!0) {
                return this._positionLocked = t,
                this
            }
            setOrigin(t) {
                return this._origin = t,
                this
            }
            withDefaultOffsetX(t) {
                return this._offsetX = t,
                this
            }
            withDefaultOffsetY(t) {
                return this._offsetY = t,
                this
            }
            withTransformOriginOn(t) {
                return this._transformOriginSelector = t,
                this
            }
            _getOriginPoint(t, e) {
                let n, s;
                if ("center" == e.originX)
                    n = t.left + t.width / 2;
                else {
                    const s = this._isRtl() ? t.right : t.left
                      , i = this._isRtl() ? t.left : t.right;
                    n = "start" == e.originX ? s : i
                }
                return s = "center" == e.originY ? t.top + t.height / 2 : "top" == e.originY ? t.top : t.bottom,
                {
                    x: n,
                    y: s
                }
            }
            _getOverlayPoint(t, e, n) {
                let s, i;
                return s = "center" == n.overlayX ? -e.width / 2 : "start" === n.overlayX ? this._isRtl() ? -e.width : 0 : this._isRtl() ? 0 : -e.width,
                i = "center" == n.overlayY ? -e.height / 2 : "top" == n.overlayY ? 0 : -e.height,
                {
                    x: t.x + s,
                    y: t.y + i
                }
            }
            _getOverlayFit(t, e, n, s) {
                const i = Kp(e);
                let {x: r, y: o} = t
                  , a = this._getOffset(s, "x")
                  , l = this._getOffset(s, "y");
                a && (r += a),
                l && (o += l);
                let c = 0 - o
                  , h = o + i.height - n.height
                  , u = this._subtractOverflows(i.width, 0 - r, r + i.width - n.width)
                  , d = this._subtractOverflows(i.height, c, h)
                  , p = u * d;
                return {
                    visibleArea: p,
                    isCompletelyWithinViewport: i.width * i.height === p,
                    fitsInViewportVertically: d === i.height,
                    fitsInViewportHorizontally: u == i.width
                }
            }
            _canFitWithFlexibleDimensions(t, e, n) {
                if (this._hasFlexibleDimensions) {
                    const s = n.bottom - e.y
                      , i = n.right - e.x
                      , r = Qp(this._overlayRef.getConfig().minHeight)
                      , o = Qp(this._overlayRef.getConfig().minWidth)
                      , a = t.fitsInViewportHorizontally || null != o && o <= i;
                    return (t.fitsInViewportVertically || null != r && r <= s) && a
                }
                return !1
            }
            _pushOverlayOnScreen(t, e, n) {
                if (this._previousPushAmount && this._positionLocked)
                    return {
                        x: t.x + this._previousPushAmount.x,
                        y: t.y + this._previousPushAmount.y
                    };
                const s = Kp(e)
                  , i = this._viewportRect
                  , r = Math.max(t.x + s.width - i.width, 0)
                  , o = Math.max(t.y + s.height - i.height, 0)
                  , a = Math.max(i.top - n.top - t.y, 0)
                  , l = Math.max(i.left - n.left - t.x, 0);
                let c = 0
                  , h = 0;
                return c = s.width <= i.width ? l || -r : t.x < this._viewportMargin ? i.left - n.left - t.x : 0,
                h = s.height <= i.height ? a || -o : t.y < this._viewportMargin ? i.top - n.top - t.y : 0,
                this._previousPushAmount = {
                    x: c,
                    y: h
                },
                {
                    x: t.x + c,
                    y: t.y + h
                }
            }
            _applyPosition(t, e) {
                if (this._setTransformOrigin(t),
                this._setOverlayElementStyles(e, t),
                this._setBoundingBoxStyles(e, t),
                t.panelClass && this._addPanelClasses(t.panelClass),
                this._lastPosition = t,
                this._positionChanges.observers.length) {
                    const e = this._getScrollVisibility()
                      , n = new Wp(t,e);
                    this._positionChanges.next(n)
                }
                this._isInitialRender = !1
            }
            _setTransformOrigin(t) {
                if (!this._transformOriginSelector)
                    return;
                const e = this._boundingBox.querySelectorAll(this._transformOriginSelector);
                let n, s = t.overlayY;
                n = "center" === t.overlayX ? "center" : this._isRtl() ? "start" === t.overlayX ? "right" : "left" : "start" === t.overlayX ? "left" : "right";
                for (let i = 0; i < e.length; i++)
                    e[i].style.transformOrigin = `${n} ${s}`
            }
            _calculateBoundingBoxRect(t, e) {
                const n = this._viewportRect
                  , s = this._isRtl();
                let i, r, o, a, l, c;
                if ("top" === e.overlayY)
                    r = t.y,
                    i = n.height - r + this._viewportMargin;
                else if ("bottom" === e.overlayY)
                    o = n.height - t.y + 2 * this._viewportMargin,
                    i = n.height - o + this._viewportMargin;
                else {
                    const e = Math.min(n.bottom - t.y + n.top, t.y)
                      , s = this._lastBoundingBoxSize.height;
                    i = 2 * e,
                    r = t.y - e,
                    i > s && !this._isInitialRender && !this._growAfterOpen && (r = t.y - s / 2)
                }
                if ("end" === e.overlayX && !s || "start" === e.overlayX && s)
                    c = n.width - t.x + this._viewportMargin,
                    a = t.x - this._viewportMargin;
                else if ("start" === e.overlayX && !s || "end" === e.overlayX && s)
                    l = t.x,
                    a = n.right - t.x;
                else {
                    const e = Math.min(n.right - t.x + n.left, t.x)
                      , s = this._lastBoundingBoxSize.width;
                    a = 2 * e,
                    l = t.x - e,
                    a > s && !this._isInitialRender && !this._growAfterOpen && (l = t.x - s / 2)
                }
                return {
                    top: r,
                    left: l,
                    bottom: o,
                    right: c,
                    width: a,
                    height: i
                }
            }
            _setBoundingBoxStyles(t, e) {
                const n = this._calculateBoundingBoxRect(t, e);
                this._isInitialRender || this._growAfterOpen || (n.height = Math.min(n.height, this._lastBoundingBoxSize.height),
                n.width = Math.min(n.width, this._lastBoundingBoxSize.width));
                const s = {};
                if (this._hasExactPosition())
                    s.top = s.left = "0",
                    s.bottom = s.right = s.maxHeight = s.maxWidth = "",
                    s.width = s.height = "100%";
                else {
                    const t = this._overlayRef.getConfig().maxHeight
                      , i = this._overlayRef.getConfig().maxWidth;
                    s.height = Zd(n.height),
                    s.top = Zd(n.top),
                    s.bottom = Zd(n.bottom),
                    s.width = Zd(n.width),
                    s.left = Zd(n.left),
                    s.right = Zd(n.right),
                    s.alignItems = "center" === e.overlayX ? "center" : "end" === e.overlayX ? "flex-end" : "flex-start",
                    s.justifyContent = "center" === e.overlayY ? "center" : "bottom" === e.overlayY ? "flex-end" : "flex-start",
                    t && (s.maxHeight = Zd(t)),
                    i && (s.maxWidth = Zd(i))
                }
                this._lastBoundingBoxSize = n,
                Xp(this._boundingBox.style, s)
            }
            _resetBoundingBoxStyles() {
                Xp(this._boundingBox.style, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "",
                    width: "",
                    alignItems: "",
                    justifyContent: ""
                })
            }
            _resetOverlayElementStyles() {
                Xp(this._pane.style, {
                    top: "",
                    left: "",
                    bottom: "",
                    right: "",
                    position: "",
                    transform: ""
                })
            }
            _setOverlayElementStyles(t, e) {
                const n = {}
                  , s = this._hasExactPosition()
                  , i = this._hasFlexibleDimensions
                  , r = this._overlayRef.getConfig();
                if (s) {
                    const s = this._viewportRuler.getViewportScrollPosition();
                    Xp(n, this._getExactOverlayY(e, t, s)),
                    Xp(n, this._getExactOverlayX(e, t, s))
                } else
                    n.position = "static";
                let o = ""
                  , a = this._getOffset(e, "x")
                  , l = this._getOffset(e, "y");
                a && (o += `translateX(${a}px) `),
                l && (o += `translateY(${l}px)`),
                n.transform = o.trim(),
                r.maxHeight && (s ? n.maxHeight = Zd(r.maxHeight) : i && (n.maxHeight = "")),
                r.maxWidth && (s ? n.maxWidth = Zd(r.maxWidth) : i && (n.maxWidth = "")),
                Xp(this._pane.style, n)
            }
            _getExactOverlayY(t, e, n) {
                let s = {
                    top: "",
                    bottom: ""
                }
                  , i = this._getOverlayPoint(e, this._overlayRect, t);
                this._isPushed && (i = this._pushOverlayOnScreen(i, this._overlayRect, n));
                let r = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
                return i.y -= r,
                "bottom" === t.overlayY ? s.bottom = this._document.documentElement.clientHeight - (i.y + this._overlayRect.height) + "px" : s.top = Zd(i.y),
                s
            }
            _getExactOverlayX(t, e, n) {
                let s, i = {
                    left: "",
                    right: ""
                }, r = this._getOverlayPoint(e, this._overlayRect, t);
                return this._isPushed && (r = this._pushOverlayOnScreen(r, this._overlayRect, n)),
                s = this._isRtl() ? "end" === t.overlayX ? "left" : "right" : "end" === t.overlayX ? "right" : "left",
                "right" === s ? i.right = this._document.documentElement.clientWidth - (r.x + this._overlayRect.width) + "px" : i.left = Zd(r.x),
                i
            }
            _getScrollVisibility() {
                const t = this._getOriginRect()
                  , e = this._pane.getBoundingClientRect()
                  , n = this._scrollables.map(t=>t.getElementRef().nativeElement.getBoundingClientRect());
                return {
                    isOriginClipped: Tp(t, n),
                    isOriginOutsideView: Fp(t, n),
                    isOverlayClipped: Tp(e, n),
                    isOverlayOutsideView: Fp(e, n)
                }
            }
            _subtractOverflows(t, ...e) {
                return e.reduce((t,e)=>t - Math.max(e, 0), t)
            }
            _getNarrowedViewportRect() {
                const t = this._document.documentElement.clientWidth
                  , e = this._document.documentElement.clientHeight
                  , n = this._viewportRuler.getViewportScrollPosition();
                return {
                    top: n.top + this._viewportMargin,
                    left: n.left + this._viewportMargin,
                    right: n.left + t - this._viewportMargin,
                    bottom: n.top + e - this._viewportMargin,
                    width: t - 2 * this._viewportMargin,
                    height: e - 2 * this._viewportMargin
                }
            }
            _isRtl() {
                return "rtl" === this._overlayRef.getDirection()
            }
            _hasExactPosition() {
                return !this._hasFlexibleDimensions || this._isPushed
            }
            _getOffset(t, e) {
                return "x" === e ? null == t.offsetX ? this._offsetX : t.offsetX : null == t.offsetY ? this._offsetY : t.offsetY
            }
            _validatePositions() {}
            _addPanelClasses(t) {
                this._pane && Kd(t).forEach(t=>{
                    "" !== t && -1 === this._appliedPanelClasses.indexOf(t) && (this._appliedPanelClasses.push(t),
                    this._pane.classList.add(t))
                }
                )
            }
            _clearPanelClasses() {
                this._pane && (this._appliedPanelClasses.forEach(t=>{
                    this._pane.classList.remove(t)
                }
                ),
                this._appliedPanelClasses = [])
            }
            _getOriginRect() {
                const t = this._origin;
                if (t instanceof No)
                    return t.nativeElement.getBoundingClientRect();
                if (t instanceof Element)
                    return t.getBoundingClientRect();
                const e = t.width || 0
                  , n = t.height || 0;
                return {
                    top: t.y,
                    bottom: t.y + n,
                    left: t.x,
                    right: t.x + e,
                    height: n,
                    width: e
                }
            }
        }
        function Xp(t, e) {
            for (let n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }
        function Qp(t) {
            if ("number" != typeof t && null != t) {
                const [e,n] = t.split(zp);
                return n && "px" !== n ? null : parseFloat(e)
            }
            return t || null
        }
        function Kp(t) {
            return {
                top: Math.floor(t.top),
                right: Math.floor(t.right),
                bottom: Math.floor(t.bottom),
                left: Math.floor(t.left),
                width: Math.floor(t.width),
                height: Math.floor(t.height)
            }
        }
        class Zp {
            constructor(t, e, n, s, i, r, o) {
                this._preferredPositions = [],
                this._positionStrategy = new qp(n,s,i,r,o).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0),
                this.withFallbackPosition(t, e),
                this.onPositionChange = this._positionStrategy.positionChanges
            }
            get positions() {
                return this._preferredPositions
            }
            attach(t) {
                this._overlayRef = t,
                this._positionStrategy.attach(t),
                this._direction && (t.setDirection(this._direction),
                this._direction = null)
            }
            dispose() {
                this._positionStrategy.dispose()
            }
            detach() {
                this._positionStrategy.detach()
            }
            apply() {
                this._positionStrategy.apply()
            }
            recalculateLastPosition() {
                this._positionStrategy.reapplyLastPosition()
            }
            withScrollableContainers(t) {
                this._positionStrategy.withScrollableContainers(t)
            }
            withFallbackPosition(t, e, n, s) {
                const i = new Np(t,e,n,s);
                return this._preferredPositions.push(i),
                this._positionStrategy.withPositions(this._preferredPositions),
                this
            }
            withDirection(t) {
                return this._overlayRef ? this._overlayRef.setDirection(t) : this._direction = t,
                this
            }
            withOffsetX(t) {
                return this._positionStrategy.withDefaultOffsetX(t),
                this
            }
            withOffsetY(t) {
                return this._positionStrategy.withDefaultOffsetY(t),
                this
            }
            withLockedPosition(t) {
                return this._positionStrategy.withLockedPosition(t),
                this
            }
            withPositions(t) {
                return this._preferredPositions = t.slice(),
                this._positionStrategy.withPositions(this._preferredPositions),
                this
            }
            setOrigin(t) {
                return this._positionStrategy.setOrigin(t),
                this
            }
        }
        const Gp = "cdk-global-overlay-wrapper";
        class Yp {
            constructor() {
                this._cssPosition = "static",
                this._topOffset = "",
                this._bottomOffset = "",
                this._leftOffset = "",
                this._rightOffset = "",
                this._alignItems = "",
                this._justifyContent = "",
                this._width = "",
                this._height = ""
            }
            attach(t) {
                const e = t.getConfig();
                this._overlayRef = t,
                this._width && !e.width && t.updateSize({
                    width: this._width
                }),
                this._height && !e.height && t.updateSize({
                    height: this._height
                }),
                t.hostElement.classList.add(Gp),
                this._isDisposed = !1
            }
            top(t="") {
                return this._bottomOffset = "",
                this._topOffset = t,
                this._alignItems = "flex-start",
                this
            }
            left(t="") {
                return this._rightOffset = "",
                this._leftOffset = t,
                this._justifyContent = "flex-start",
                this
            }
            bottom(t="") {
                return this._topOffset = "",
                this._bottomOffset = t,
                this._alignItems = "flex-end",
                this
            }
            right(t="") {
                return this._leftOffset = "",
                this._rightOffset = t,
                this._justifyContent = "flex-end",
                this
            }
            width(t="") {
                return this._overlayRef ? this._overlayRef.updateSize({
                    width: t
                }) : this._width = t,
                this
            }
            height(t="") {
                return this._overlayRef ? this._overlayRef.updateSize({
                    height: t
                }) : this._height = t,
                this
            }
            centerHorizontally(t="") {
                return this.left(t),
                this._justifyContent = "center",
                this
            }
            centerVertically(t="") {
                return this.top(t),
                this._alignItems = "center",
                this
            }
            apply() {
                if (!this._overlayRef || !this._overlayRef.hasAttached())
                    return;
                const t = this._overlayRef.overlayElement.style
                  , e = this._overlayRef.hostElement.style
                  , n = this._overlayRef.getConfig()
                  , {width: s, height: i, maxWidth: r, maxHeight: o} = n
                  , a = !("100%" !== s && "100vw" !== s || r && "100%" !== r && "100vw" !== r)
                  , l = !("100%" !== i && "100vh" !== i || o && "100%" !== o && "100vh" !== o);
                t.position = this._cssPosition,
                t.marginLeft = a ? "0" : this._leftOffset,
                t.marginTop = l ? "0" : this._topOffset,
                t.marginBottom = this._bottomOffset,
                t.marginRight = this._rightOffset,
                a ? e.justifyContent = "flex-start" : "center" === this._justifyContent ? e.justifyContent = "center" : "rtl" === this._overlayRef.getConfig().direction ? "flex-start" === this._justifyContent ? e.justifyContent = "flex-end" : "flex-end" === this._justifyContent && (e.justifyContent = "flex-start") : e.justifyContent = this._justifyContent,
                e.alignItems = l ? "flex-start" : this._alignItems
            }
            dispose() {
                if (this._isDisposed || !this._overlayRef)
                    return;
                const t = this._overlayRef.overlayElement.style
                  , e = this._overlayRef.hostElement
                  , n = e.style;
                e.classList.remove(Gp),
                n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position = "",
                this._overlayRef = null,
                this._isDisposed = !0
            }
        }
        let Jp = (()=>{
            class t {
                constructor(t, e, n, s) {
                    this._viewportRuler = t,
                    this._document = e,
                    this._platform = n,
                    this._overlayContainer = s
                }
                global() {
                    return new Yp
                }
                connectedTo(t, e, n) {
                    return new Zp(e,n,t,this._viewportRuler,this._document,this._platform,this._overlayContainer)
                }
                flexibleConnectedTo(t) {
                    return new qp(t,this._viewportRuler,this._document,this._platform,this._overlayContainer)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(gp),Jn(zl),Jn(cp),Jn(Hp))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(gp),Jn(zl),Jn(cp),Jn(Hp))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , tm = 0
          , em = (()=>{
            class t {
                constructor(t, e, n, s, i, r, o, a, l, c, h) {
                    this.scrollStrategies = t,
                    this._overlayContainer = e,
                    this._componentFactoryResolver = n,
                    this._positionBuilder = s,
                    this._keyboardDispatcher = i,
                    this._injector = r,
                    this._ngZone = o,
                    this._document = a,
                    this._directionality = l,
                    this._location = c,
                    this._outsideClickDispatcher = h
                }
                create(t) {
                    const e = this._createHostElement()
                      , n = this._createPaneElement(e)
                      , s = this._createPortalOutlet(n)
                      , i = new Rp(t);
                    return i.direction = i.direction || this._directionality.value,
                    new $p(s,e,n,i,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher)
                }
                position() {
                    return this._positionBuilder
                }
                _createPaneElement(t) {
                    const e = this._document.createElement("div");
                    return e.id = "cdk-overlay-" + tm++,
                    e.classList.add("cdk-overlay-pane"),
                    t.appendChild(e),
                    e
                }
                _createHostElement() {
                    const t = this._document.createElement("div");
                    return this._overlayContainer.getContainerElement().appendChild(t),
                    t
                }
                _createPortalOutlet(t) {
                    return this._appRef || (this._appRef = this._injector.get(Ml)),
                    new Op(t,this._componentFactoryResolver,this._appRef,this._injector,this._document)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Ip),Jn(Hp),Jn(To),Jn(Jp),Jn(Lp),Jn(lr),Jn(yl),Jn(zl),Jn(pp),Jn(ic),Jn(jp))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const nm = {
            provide: new Mn("cdk-connected-overlay-scroll-strategy"),
            deps: [em],
            useFactory: function(t) {
                return ()=>t.scrollStrategies.reposition()
            }
        };
        let sm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: [em, nm],
                imports: [[mp, kp, yp], yp]
            }),
            t
        }
        )();
        class im {
        }
        const rm = "*";
        function om(t, e=null) {
            return {
                type: 2,
                steps: t,
                options: e
            }
        }
        function am(t) {
            return {
                type: 6,
                styles: t,
                offset: null
            }
        }
        function lm(t) {
            Promise.resolve(null).then(t)
        }
        class cm {
            constructor(t=0, e=0) {
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this._started = !1,
                this._destroyed = !1,
                this._finished = !1,
                this._position = 0,
                this.parentPlayer = null,
                this.totalTime = t + e
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(t=>t()),
                this._onDoneFns = [])
            }
            onStart(t) {
                this._onStartFns.push(t)
            }
            onDone(t) {
                this._onDoneFns.push(t)
            }
            onDestroy(t) {
                this._onDestroyFns.push(t)
            }
            hasStarted() {
                return this._started
            }
            init() {}
            play() {
                this.hasStarted() || (this._onStart(),
                this.triggerMicrotask()),
                this._started = !0
            }
            triggerMicrotask() {
                lm(()=>this._onFinish())
            }
            _onStart() {
                this._onStartFns.forEach(t=>t()),
                this._onStartFns = []
            }
            pause() {}
            restart() {}
            finish() {
                this._onFinish()
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this.hasStarted() || this._onStart(),
                this.finish(),
                this._onDestroyFns.forEach(t=>t()),
                this._onDestroyFns = [])
            }
            reset() {
                this._started = !1
            }
            setPosition(t) {
                this._position = this.totalTime ? t * this.totalTime : 1
            }
            getPosition() {
                return this.totalTime ? this._position / this.totalTime : 1
            }
            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t=>t()),
                e.length = 0
            }
        }
        class hm {
            constructor(t) {
                this._onDoneFns = [],
                this._onStartFns = [],
                this._finished = !1,
                this._started = !1,
                this._destroyed = !1,
                this._onDestroyFns = [],
                this.parentPlayer = null,
                this.totalTime = 0,
                this.players = t;
                let e = 0
                  , n = 0
                  , s = 0;
                const i = this.players.length;
                0 == i ? lm(()=>this._onFinish()) : this.players.forEach(t=>{
                    t.onDone(()=>{
                        ++e == i && this._onFinish()
                    }
                    ),
                    t.onDestroy(()=>{
                        ++n == i && this._onDestroy()
                    }
                    ),
                    t.onStart(()=>{
                        ++s == i && this._onStart()
                    }
                    )
                }
                ),
                this.totalTime = this.players.reduce((t,e)=>Math.max(t, e.totalTime), 0)
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(t=>t()),
                this._onDoneFns = [])
            }
            init() {
                this.players.forEach(t=>t.init())
            }
            onStart(t) {
                this._onStartFns.push(t)
            }
            _onStart() {
                this.hasStarted() || (this._started = !0,
                this._onStartFns.forEach(t=>t()),
                this._onStartFns = [])
            }
            onDone(t) {
                this._onDoneFns.push(t)
            }
            onDestroy(t) {
                this._onDestroyFns.push(t)
            }
            hasStarted() {
                return this._started
            }
            play() {
                this.parentPlayer || this.init(),
                this._onStart(),
                this.players.forEach(t=>t.play())
            }
            pause() {
                this.players.forEach(t=>t.pause())
            }
            restart() {
                this.players.forEach(t=>t.restart())
            }
            finish() {
                this._onFinish(),
                this.players.forEach(t=>t.finish())
            }
            destroy() {
                this._onDestroy()
            }
            _onDestroy() {
                this._destroyed || (this._destroyed = !0,
                this._onFinish(),
                this.players.forEach(t=>t.destroy()),
                this._onDestroyFns.forEach(t=>t()),
                this._onDestroyFns = [])
            }
            reset() {
                this.players.forEach(t=>t.reset()),
                this._destroyed = !1,
                this._finished = !1,
                this._started = !1
            }
            setPosition(t) {
                const e = t * this.totalTime;
                this.players.forEach(t=>{
                    const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                    t.setPosition(n)
                }
                )
            }
            getPosition() {
                const t = this.players.reduce((t,e)=>null === t || e.totalTime > t.totalTime ? e : t, null);
                return null != t ? t.getPosition() : 0
            }
            beforeDestroy() {
                this.players.forEach(t=>{
                    t.beforeDestroy && t.beforeDestroy()
                }
                )
            }
            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t=>t()),
                e.length = 0
            }
        }
        let um = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, sm]]
            }),
            t
        }
        )()
          , dm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, Zu]]
            }),
            t
        }
        )()
          , pm = (()=>{
            class t {
                constructor(t) {
                    this._platform = t
                }
                isDisabled(t) {
                    return t.hasAttribute("disabled")
                }
                isVisible(t) {
                    return function(t) {
                        return !!(t.offsetWidth || t.offsetHeight || "function" == typeof t.getClientRects && t.getClientRects().length)
                    }(t) && "visible" === getComputedStyle(t).visibility
                }
                isTabbable(t) {
                    if (!this._platform.isBrowser)
                        return !1;
                    const e = function(t) {
                        try {
                            return t.frameElement
                        } catch (D_) {
                            return null
                        }
                    }((n = t).ownerDocument && n.ownerDocument.defaultView || window);
                    var n;
                    if (e) {
                        if (-1 === fm(e))
                            return !1;
                        if (!this.isVisible(e))
                            return !1
                    }
                    let s = t.nodeName.toLowerCase()
                      , i = fm(t);
                    return t.hasAttribute("contenteditable") ? -1 !== i : "iframe" !== s && "object" !== s && !(this._platform.WEBKIT && this._platform.IOS && !function(t) {
                        let e = t.nodeName.toLowerCase()
                          , n = "input" === e && t.type;
                        return "text" === n || "password" === n || "select" === e || "textarea" === e
                    }(t)) && ("audio" === s ? !!t.hasAttribute("controls") && -1 !== i : "video" === s ? -1 !== i && (null !== i || this._platform.FIREFOX || t.hasAttribute("controls")) : t.tabIndex >= 0)
                }
                isFocusable(t, e) {
                    return function(t) {
                        return !function(t) {
                            return function(t) {
                                return "input" == t.nodeName.toLowerCase()
                            }(t) && "hidden" == t.type
                        }(t) && (function(t) {
                            let e = t.nodeName.toLowerCase();
                            return "input" === e || "select" === e || "button" === e || "textarea" === e
                        }(t) || function(t) {
                            return function(t) {
                                return "a" == t.nodeName.toLowerCase()
                            }(t) && t.hasAttribute("href")
                        }(t) || t.hasAttribute("contenteditable") || mm(t))
                    }(t) && !this.isDisabled(t) && ((null == e ? void 0 : e.ignoreVisibility) || this.isVisible(t))
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(cp))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(cp))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        function mm(t) {
            if (!t.hasAttribute("tabindex") || void 0 === t.tabIndex)
                return !1;
            let e = t.getAttribute("tabindex");
            return "-32768" != e && !(!e || isNaN(parseInt(e, 10)))
        }
        function fm(t) {
            if (!mm(t))
                return null;
            const e = parseInt(t.getAttribute("tabindex") || "", 10);
            return isNaN(e) ? -1 : e
        }
        class gm extends class {
            constructor(t, e, n, s, i=!1) {
                this._element = t,
                this._checker = e,
                this._ngZone = n,
                this._document = s,
                this._hasAttached = !1,
                this.startAnchorListener = ()=>this.focusLastTabbableElement(),
                this.endAnchorListener = ()=>this.focusFirstTabbableElement(),
                this._enabled = !0,
                i || this.attachAnchors()
            }
            get enabled() {
                return this._enabled
            }
            set enabled(t) {
                this._enabled = t,
                this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(t, this._startAnchor),
                this._toggleAnchorTabIndex(t, this._endAnchor))
            }
            destroy() {
                const t = this._startAnchor
                  , e = this._endAnchor;
                t && (t.removeEventListener("focus", this.startAnchorListener),
                t.parentNode && t.parentNode.removeChild(t)),
                e && (e.removeEventListener("focus", this.endAnchorListener),
                e.parentNode && e.parentNode.removeChild(e)),
                this._startAnchor = this._endAnchor = null,
                this._hasAttached = !1
            }
            attachAnchors() {
                return !!this._hasAttached || (this._ngZone.runOutsideAngular(()=>{
                    this._startAnchor || (this._startAnchor = this._createAnchor(),
                    this._startAnchor.addEventListener("focus", this.startAnchorListener)),
                    this._endAnchor || (this._endAnchor = this._createAnchor(),
                    this._endAnchor.addEventListener("focus", this.endAnchorListener))
                }
                ),
                this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element),
                this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling),
                this._hasAttached = !0),
                this._hasAttached)
            }
            focusInitialElementWhenReady(t) {
                return new Promise(e=>{
                    this._executeOnStable(()=>e(this.focusInitialElement(t)))
                }
                )
            }
            focusFirstTabbableElementWhenReady(t) {
                return new Promise(e=>{
                    this._executeOnStable(()=>e(this.focusFirstTabbableElement(t)))
                }
                )
            }
            focusLastTabbableElementWhenReady(t) {
                return new Promise(e=>{
                    this._executeOnStable(()=>e(this.focusLastTabbableElement(t)))
                }
                )
            }
            _getRegionBoundary(t) {
                let e = this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);
                for (let n = 0; n < e.length; n++)
                    e[n].hasAttribute(`cdk-focus-${t}`) ? console.warn(`Found use of deprecated attribute 'cdk-focus-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`, e[n]) : e[n].hasAttribute(`cdk-focus-region-${t}`) && console.warn(`Found use of deprecated attribute 'cdk-focus-region-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`, e[n]);
                return "start" == t ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element)
            }
            focusInitialElement(t) {
                const e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");
                if (e) {
                    if (e.hasAttribute("cdk-focus-initial") && console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0", e),
                    !this._checker.isFocusable(e)) {
                        const n = this._getFirstTabbableElement(e);
                        return null == n || n.focus(t),
                        !!n
                    }
                    return e.focus(t),
                    !0
                }
                return this.focusFirstTabbableElement(t)
            }
            focusFirstTabbableElement(t) {
                const e = this._getRegionBoundary("start");
                return e && e.focus(t),
                !!e
            }
            focusLastTabbableElement(t) {
                const e = this._getRegionBoundary("end");
                return e && e.focus(t),
                !!e
            }
            hasAttached() {
                return this._hasAttached
            }
            _getFirstTabbableElement(t) {
                if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
                    return t;
                let e = t.children || t.childNodes;
                for (let n = 0; n < e.length; n++) {
                    let t = e[n].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[n]) : null;
                    if (t)
                        return t
                }
                return null
            }
            _getLastTabbableElement(t) {
                if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
                    return t;
                let e = t.children || t.childNodes;
                for (let n = e.length - 1; n >= 0; n--) {
                    let t = e[n].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[n]) : null;
                    if (t)
                        return t
                }
                return null
            }
            _createAnchor() {
                const t = this._document.createElement("div");
                return this._toggleAnchorTabIndex(this._enabled, t),
                t.classList.add("cdk-visually-hidden"),
                t.classList.add("cdk-focus-trap-anchor"),
                t.setAttribute("aria-hidden", "true"),
                t
            }
            _toggleAnchorTabIndex(t, e) {
                t ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex")
            }
            toggleAnchors(t) {
                this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(t, this._startAnchor),
                this._toggleAnchorTabIndex(t, this._endAnchor))
            }
            _executeOnStable(t) {
                this._ngZone.isStable ? t() : this._ngZone.onStable.pipe(zd(1)).subscribe(t)
            }
        }
        {
            constructor(t, e, n, s, i, r, o) {
                super(t, e, n, s, o.defer),
                this._focusTrapManager = i,
                this._inertStrategy = r,
                this._focusTrapManager.register(this)
            }
            get enabled() {
                return this._enabled
            }
            set enabled(t) {
                this._enabled = t,
                this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this)
            }
            destroy() {
                this._focusTrapManager.deregister(this),
                super.destroy()
            }
            _enable() {
                this._inertStrategy.preventFocus(this),
                this.toggleAnchors(!0)
            }
            _disable() {
                this._inertStrategy.allowFocus(this),
                this.toggleAnchors(!1)
            }
        }
        const _m = new Mn("FOCUS_TRAP_INERT_STRATEGY")
          , ym = "undefined" != typeof Element && !!Element.prototype.closest;
        function vm(t, e) {
            return t.matches ? t.matches(e) : t.msMatchesSelector(e)
        }
        class bm {
            constructor() {
                this._listener = null
            }
            preventFocus(t) {
                this._listener && t._document.removeEventListener("focus", this._listener, !0),
                this._listener = e=>this._trapFocus(t, e),
                t._ngZone.runOutsideAngular(()=>{
                    t._document.addEventListener("focus", this._listener, !0)
                }
                )
            }
            allowFocus(t) {
                this._listener && (t._document.removeEventListener("focus", this._listener, !0),
                this._listener = null)
            }
            _trapFocus(t, e) {
                const n = e.target
                  , s = t._element;
                s.contains(n) || null !== function(t, e) {
                    if (!(t instanceof Node))
                        return null;
                    let n = t;
                    for (; null != n && !(n instanceof Element); )
                        n = n.parentNode;
                    return n && (ym ? n.closest(e) : function(t, e) {
                        let n = t;
                        for (; null != n && !(n instanceof Element && vm(n, "div.cdk-overlay-pane")); )
                            n = n.parentNode;
                        return n || null
                    }(n))
                }(n, "div.cdk-overlay-pane") || setTimeout(()=>{
                    t.enabled && !s.contains(t._document.activeElement) && t.focusFirstTabbableElement()
                }
                )
            }
        }
        let wm = (()=>{
            class t {
                constructor() {
                    this._focusTrapStack = []
                }
                register(t) {
                    this._focusTrapStack = this._focusTrapStack.filter(e=>e !== t);
                    let e = this._focusTrapStack;
                    e.length && e[e.length - 1]._disable(),
                    e.push(t),
                    t._enable()
                }
                deregister(t) {
                    t._disable();
                    const e = this._focusTrapStack
                      , n = e.indexOf(t);
                    -1 !== n && (e.splice(n, 1),
                    e.length && e[e.length - 1]._enable())
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )()
          , Am = (()=>{
            class t {
                constructor(t, e, n, s, i) {
                    this._checker = t,
                    this._ngZone = e,
                    this._focusTrapManager = n,
                    this._document = s,
                    this._inertStrategy = i || new bm
                }
                create(t, e={
                    defer: !1
                }) {
                    let n;
                    return n = "boolean" == typeof e ? {
                        defer: e
                    } : e,
                    new gm(t,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(pm),Jn(yl),Jn(wm),Jn(zl),Jn(_m, 8))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(pm),Jn(yl),Jn(wm),Jn(zl),Jn(_m, 8))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        const Sm = "cdk-high-contrast-black-on-white"
          , Om = "cdk-high-contrast-white-on-black"
          , Cm = "cdk-high-contrast-active";
        let km = (()=>{
            class t {
                constructor(t, e) {
                    this._platform = t,
                    this._document = e
                }
                getHighContrastMode() {
                    if (!this._platform.isBrowser)
                        return 0;
                    const t = this._document.createElement("div");
                    t.style.backgroundColor = "rgb(1,2,3)",
                    t.style.position = "absolute",
                    this._document.body.appendChild(t);
                    const e = this._document.defaultView || window
                      , n = e && e.getComputedStyle ? e.getComputedStyle(t) : null
                      , s = (n && n.backgroundColor || "").replace(/ /g, "");
                    switch (this._document.body.removeChild(t),
                    s) {
                    case "rgb(0,0,0)":
                        return 2;
                    case "rgb(255,255,255)":
                        return 1
                    }
                    return 0
                }
                _applyBodyHighContrastModeCssClasses() {
                    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
                        const t = this._document.body.classList;
                        t.remove(Cm),
                        t.remove(Sm),
                        t.remove(Om),
                        this._hasCheckedHighContrastMode = !0;
                        const e = this.getHighContrastMode();
                        1 === e ? (t.add(Cm),
                        t.add(Sm)) : 2 === e && (t.add(Cm),
                        t.add(Om))
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(cp),Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                factory: function() {
                    return new t(Jn(cp),Jn(zl))
                },
                token: t,
                providedIn: "root"
            }),
            t
        }
        )();
        const Em = ["dialog"];
        function xm(t, e) {}
        class Dm {
            constructor() {
                this.animation = !0,
                this.backdrop = !0,
                this.ignoreBackdropClick = !1,
                this.keyboard = !0,
                this.modalClass = "",
                this.containerClass = "",
                this.data = null
            }
        }
        class Vm {
            constructor(t, e) {
                this._overlayRef = t,
                this._container = e,
                this.onClose$ = new S,
                this.onClose = this.onClose$.asObservable()
            }
            close(t) {
                this._container._close(),
                setTimeout(()=>{
                    this._container._restoreScrollbar(),
                    this.onClose$.next(t),
                    this.onClose$.complete(),
                    this._overlayRef.detach(),
                    this._overlayRef.dispose()
                }
                , this._container.MODAL_TRANSITION)
            }
        }
        let Fm = (()=>{
            class t {
                constructor(t, e, n, s) {
                    this._document = t,
                    this._elementRef = e,
                    this._renderer = n,
                    this._focusTrapFactory = s,
                    this._destroy$ = new S,
                    this.backdropClick$ = new S,
                    this.BACKDROP_TRANSITION = 150,
                    this.MODAL_TRANSITION = 200,
                    this.modal = !0
                }
                get hasAnimation() {
                    return this._config.animation
                }
                ngOnInit() {
                    this._updateContainerClass(),
                    this._renderer.addClass(this._document.body, "modal-open"),
                    this._renderer.setStyle(this._document.body, "padding-right", "15px"),
                    this._renderer.setStyle(this._elementRef.nativeElement, "display", "block"),
                    this._previouslyFocusedElement = this._document.activeElement,
                    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement),
                    this._config.animation ? setTimeout(()=>{
                        this._renderer.addClass(this._elementRef.nativeElement, "show"),
                        setTimeout(()=>{
                            this._focusTrap.focusInitialElementWhenReady()
                        }
                        , this.MODAL_TRANSITION)
                    }
                    , this.BACKDROP_TRANSITION) : this._focusTrap.focusInitialElementWhenReady()
                }
                ngAfterViewInit() {
                    this._config.ignoreBackdropClick || Bd(this._elementRef.nativeElement, "click").pipe(gh(t=>{
                        const e = t.target
                          , n = this.modalDialog.nativeElement
                          , s = e !== n
                          , i = !n.contains(e);
                        return s && i
                    }
                    ), Yd(this._destroy$)).subscribe(t=>{
                        this.backdropClick$.next(t)
                    }
                    )
                }
                ngOnDestroy() {
                    this._previouslyFocusedElement.focus(),
                    this._focusTrap.destroy(),
                    this._destroy$.next(),
                    this._destroy$.complete()
                }
                _updateContainerClass() {
                    "" === this._config.containerClass || this._config.containerClass.length && 0 === this._config.containerClass.length || this._config.containerClass.split(" ").forEach(t=>{
                        this._renderer.addClass(this._elementRef.nativeElement, t)
                    }
                    )
                }
                _close() {
                    this._config.animation && this._renderer.removeClass(this._elementRef.nativeElement, "show");
                    const t = Array.from(this._elementRef.nativeElement.querySelectorAll("iframe"))
                      , e = Array.from(this._elementRef.nativeElement.querySelectorAll("video"));
                    t.forEach(t=>{
                        const e = t.getAttribute("src");
                        this._renderer.setAttribute(t, "src", e)
                    }
                    ),
                    e.forEach(t=>{
                        t.pause()
                    }
                    )
                }
                _restoreScrollbar() {
                    this._renderer.removeClass(this._document.body, "modal-open"),
                    this._renderer.removeStyle(this._document.body, "padding-right")
                }
                attachComponentPortal(t) {
                    return this._portalOutlet.attachComponentPortal(t)
                }
                attachTemplatePortal(t) {
                    return this._portalOutlet.attachTemplatePortal(t)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Or(zl),Or(No),Or(Lo),Or(Am))
            }
            ,
            t.\u0275cmp = Bt({
                type: t,
                selectors: [["mdb-modal-container"]],
                viewQuery: function(t, e) {
                    if (1 & t && (Qa(Cp, 7),
                    Qa(Em, 7)),
                    2 & t) {
                        let t;
                        Xa(t = Ka()) && (e._portalOutlet = t.first),
                        Xa(t = Ka()) && (e.modalDialog = t.first)
                    }
                },
                hostVars: 4,
                hostBindings: function(t, e) {
                    2 & t && Kr("modal", e.modal)("fade", e.hasAnimation)
                },
                decls: 4,
                vars: 2,
                consts: [["dialog", ""], [1, "modal-content"], ["cdkPortalOutlet", ""]],
                template: function(t, e) {
                    1 & t && (Er(0, "div", null, 0),
                    Er(2, "div", 1),
                    Sr(3, xm, 0, 0, "ng-template", 2),
                    xr(),
                    xr()),
                    2 & t && Yr($n, Gr, "modal-dialog" + (e._config.modalClass ? " " + e._config.modalClass : ""), !0)
                },
                directives: [Cp],
                encapsulation: 2
            }),
            t
        }
        )()
          , Tm = (()=>{
            class t {
                constructor(t, e, n, s) {
                    this._document = t,
                    this._overlay = e,
                    this._injector = n,
                    this._cfr = s
                }
                open(t, e) {
                    const n = new Dm;
                    e = e ? Object.assign(n, e) : n;
                    const s = this._createOverlay(e)
                      , i = this._createContainer(s, e)
                      , r = this._createContent(t, i, s, e);
                    return this._registerListeners(r, e, i),
                    r
                }
                _createOverlay(t) {
                    const e = this._getOverlayConfig(t);
                    return this._overlay.create(e)
                }
                _getOverlayConfig(t) {
                    return new Rp({
                        positionStrategy: this._overlay.position().global(),
                        scrollStrategy: this._overlay.scrollStrategies.noop(),
                        hasBackdrop: t.backdrop,
                        backdropClass: "mdb-backdrop"
                    })
                }
                _createContainer(t, e) {
                    const n = new bp(Fm,null,this._injector,this._cfr)
                      , s = t.attach(n);
                    return s.instance._config = e,
                    s.instance
                }
                _createContent(t, e, n, s) {
                    const i = new Vm(n,e);
                    if (t instanceof ua)
                        e.attachTemplatePortal(new wp(t,null,{
                            $implicit: s.data,
                            modalRef: i
                        }));
                    else {
                        const n = this._createInjector(s, i, e)
                          , r = e.attachComponentPortal(new bp(t,s.viewContainerRef,n));
                        s.data && Object.assign(r.instance, Object.assign({}, s.data))
                    }
                    return i
                }
                _createInjector(t, e, n) {
                    return lr.create({
                        parent: t && t.viewContainerRef && t.viewContainerRef.injector || this._injector,
                        providers: [{
                            provide: Fm,
                            useValue: n
                        }, {
                            provide: Vm,
                            useValue: e
                        }]
                    })
                }
                _registerListeners(t, e, n) {
                    n.backdropClick$.pipe(zd(1)).subscribe(()=>{
                        t.close()
                    }
                    ),
                    e.keyboard && Bd(n._elementRef.nativeElement, "keydown").pipe(gh(t=>"Escape" === t.key), zd(1)).subscribe(()=>{
                        t.close()
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl),Jn(em),Jn(lr),Jn(To))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Pm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: [Tm],
                imports: [[sm, kp]]
            }),
            t
        }
        )()
          , Im = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, sm]]
            }),
            t
        }
        )()
          , Rm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, Zu]]
            }),
            t
        }
        )()
          , Nm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, Zu]]
            }),
            t
        }
        )()
          , Wm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[]]
            }),
            t
        }
        )()
          , Mm = (()=>{
            class t {
                constructor() {
                    this.scrollSpys = [],
                    this.activeSubject = new S,
                    this.active$ = this.activeSubject
                }
                addScrollspy(t) {
                    this.scrollSpys.push(t)
                }
                removeScrollspy(t) {
                    const e = this.scrollSpys.findIndex(e=>e.id === t);
                    this.scrollSpys.splice(e, 1)
                }
                updateActiveState(t, e) {
                    const n = this.scrollSpys.find(e=>e.id === t);
                    if (!n)
                        return;
                    const s = n.links.find(t=>t.id === e);
                    this.setActiveLink(s)
                }
                removeActiveState(t, e) {
                    const n = this.scrollSpys.find(e=>e.id === t);
                    if (!n)
                        return;
                    const s = n.links.find(t=>t.id === e);
                    s && (s.active = !1,
                    s.detectChanges())
                }
                setActiveLink(t) {
                    t && (t.active = !0,
                    t.detectChanges(),
                    this.activeSubject.next(t))
                }
                removeActiveLinks(t) {
                    const e = this.scrollSpys.find(e=>e.id === t);
                    e && e.links.forEach(t=>{
                        t.active = !1,
                        t.detectChanges()
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , Lm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: [Mm]
            }),
            t
        }
        )();
        new Mn("MdbTabContentDirective"),
        new Mn("MdbTabTitleDirective");
        let jm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, kp]]
            }),
            t
        }
        )()
          , Bm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc, sm]]
            }),
            t
        }
        )()
          , Hm = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[kc]]
            }),
            t
        }
        )();
        function $m() {
            return "undefined" != typeof window && void 0 !== window.document
        }
        function Um() {
            return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
        }
        function zm(t) {
            switch (t.length) {
            case 0:
                return new cm;
            case 1:
                return t[0];
            default:
                return new hm(t)
            }
        }
        function qm(t, e, n, s, i={}, r={}) {
            const o = []
              , a = [];
            let l = -1
              , c = null;
            if (s.forEach(t=>{
                const n = t.offset
                  , s = n == l
                  , h = s && c || {};
                Object.keys(t).forEach(n=>{
                    let s = n
                      , a = t[n];
                    if ("offset" !== n)
                        switch (s = e.normalizePropertyName(s, o),
                        a) {
                        case "!":
                            a = i[n];
                            break;
                        case rm:
                            a = r[n];
                            break;
                        default:
                            a = e.normalizeStyleValue(n, s, a, o)
                        }
                    h[s] = a
                }
                ),
                s || a.push(h),
                c = h,
                l = n
            }
            ),
            o.length) {
                const t = "\n - ";
                throw new Error(`Unable to animate due to the following errors:${t}${o.join(t)}`)
            }
            return a
        }
        function Xm(t, e, n, s) {
            switch (e) {
            case "start":
                t.onStart(()=>s(n && Qm(n, "start", t)));
                break;
            case "done":
                t.onDone(()=>s(n && Qm(n, "done", t)));
                break;
            case "destroy":
                t.onDestroy(()=>s(n && Qm(n, "destroy", t)))
            }
        }
        function Qm(t, e, n) {
            const s = n.totalTime
              , i = Km(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == s ? t.totalTime : s, !!n.disabled)
              , r = t._data;
            return null != r && (i._data = r),
            i
        }
        function Km(t, e, n, s, i="", r=0, o) {
            return {
                element: t,
                triggerName: e,
                fromState: n,
                toState: s,
                phaseName: i,
                totalTime: r,
                disabled: !!o
            }
        }
        function Zm(t, e, n) {
            let s;
            return t instanceof Map ? (s = t.get(e),
            s || t.set(e, s = n)) : (s = t[e],
            s || (s = t[e] = n)),
            s
        }
        function Gm(t) {
            const e = t.indexOf(":");
            return [t.substring(1, e), t.substr(e + 1)]
        }
        let Ym = (t,e)=>!1
          , Jm = (t,e)=>!1
          , tf = (t,e,n)=>[];
        const ef = Um();
        (ef || "undefined" != typeof Element) && (Ym = $m() ? (t,e)=>{
            for (; e && e !== document.documentElement; ) {
                if (e === t)
                    return !0;
                e = e.parentNode || e.host
            }
            return !1
        }
        : (t,e)=>t.contains(e),
        Jm = (()=>{
            if (ef || Element.prototype.matches)
                return (t,e)=>t.matches(e);
            {
                const t = Element.prototype
                  , e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
                return e ? (t,n)=>e.apply(t, [n]) : Jm
            }
        }
        )(),
        tf = (t,e,n)=>{
            let s = [];
            if (n) {
                const n = t.querySelectorAll(e);
                for (let t = 0; t < n.length; t++)
                    s.push(n[t])
            } else {
                const n = t.querySelector(e);
                n && s.push(n)
            }
            return s
        }
        );
        let nf = null
          , sf = !1;
        function rf(t) {
            nf || (nf = ("undefined" != typeof document ? document.body : null) || {},
            sf = !!nf.style && "WebkitAppearance"in nf.style);
            let e = !0;
            return nf.style && !function(t) {
                return "ebkit" == t.substring(1, 6)
            }(t) && (e = t in nf.style,
            !e && sf) && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1)in nf.style),
            e
        }
        const of = Jm
          , af = Ym
          , lf = tf;
        function cf(t) {
            const e = {};
            return Object.keys(t).forEach(n=>{
                const s = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                e[s] = t[n]
            }
            ),
            e
        }
        let hf = (()=>{
            class t {
                validateStyleProperty(t) {
                    return rf(t)
                }
                matchesElement(t, e) {
                    return of(t, e)
                }
                containsElement(t, e) {
                    return af(t, e)
                }
                query(t, e, n) {
                    return lf(t, e, n)
                }
                computeStyle(t, e, n) {
                    return n || ""
                }
                animate(t, e, n, s, i, r=[], o) {
                    return new cm(n,s)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )()
          , uf = (()=>{
            class t {
            }
            return t.NOOP = new hf,
            t
        }
        )();
        const df = "ng-enter"
          , pf = "ng-leave"
          , mf = "ng-trigger"
          , ff = ".ng-trigger"
          , gf = "ng-animating"
          , _f = ".ng-animating";
        function yf(t) {
            if ("number" == typeof t)
                return t;
            const e = t.match(/^(-?[\.\d]+)(m?s)/);
            return !e || e.length < 2 ? 0 : vf(parseFloat(e[1]), e[2])
        }
        function vf(t, e) {
            switch (e) {
            case "s":
                return 1e3 * t;
            default:
                return t
            }
        }
        function bf(t, e, n) {
            return t.hasOwnProperty("duration") ? t : function(t, e, n) {
                let s, i = 0, r = "";
                if ("string" == typeof t) {
                    const n = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === n)
                        return e.push(`The provided timing value "${t}" is invalid.`),
                        {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                    s = vf(parseFloat(n[1]), n[2]);
                    const o = n[3];
                    null != o && (i = vf(parseFloat(o), n[4]));
                    const a = n[5];
                    a && (r = a)
                } else
                    s = t;
                if (!n) {
                    let n = !1
                      , r = e.length;
                    s < 0 && (e.push("Duration values below 0 are not allowed for this animation step."),
                    n = !0),
                    i < 0 && (e.push("Delay values below 0 are not allowed for this animation step."),
                    n = !0),
                    n && e.splice(r, 0, `The provided timing value "${t}" is invalid.`)
                }
                return {
                    duration: s,
                    delay: i,
                    easing: r
                }
            }(t, e, n)
        }
        function wf(t, e={}) {
            return Object.keys(t).forEach(n=>{
                e[n] = t[n]
            }
            ),
            e
        }
        function Af(t, e, n={}) {
            if (e)
                for (let s in t)
                    n[s] = t[s];
            else
                wf(t, n);
            return n
        }
        function Sf(t, e, n) {
            return n ? e + ":" + n + ";" : ""
        }
        function Of(t) {
            let e = "";
            for (let n = 0; n < t.style.length; n++) {
                const s = t.style.item(n);
                e += Sf(0, s, t.style.getPropertyValue(s))
            }
            for (const n in t.style)
                t.style.hasOwnProperty(n) && !n.startsWith("_") && (e += Sf(0, n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[n]));
            t.setAttribute("style", e)
        }
        function Cf(t, e, n) {
            t.style && (Object.keys(e).forEach(s=>{
                const i = Pf(s);
                n && !n.hasOwnProperty(s) && (n[s] = t.style[i]),
                t.style[i] = e[s]
            }
            ),
            Um() && Of(t))
        }
        function kf(t, e) {
            t.style && (Object.keys(e).forEach(e=>{
                const n = Pf(e);
                t.style[n] = ""
            }
            ),
            Um() && Of(t))
        }
        function Ef(t) {
            return Array.isArray(t) ? 1 == t.length ? t[0] : om(t) : t
        }
        const xf = new RegExp("{{\\s*(.+?)\\s*}}","g");
        function Df(t) {
            let e = [];
            if ("string" == typeof t) {
                let n;
                for (; n = xf.exec(t); )
                    e.push(n[1]);
                xf.lastIndex = 0
            }
            return e
        }
        function Vf(t, e, n) {
            const s = t.toString()
              , i = s.replace(xf, (t,s)=>{
                let i = e[s];
                return e.hasOwnProperty(s) || (n.push(`Please provide a value for the animation param ${s}`),
                i = ""),
                i.toString()
            }
            );
            return i == s ? t : i
        }
        function Ff(t) {
            const e = [];
            let n = t.next();
            for (; !n.done; )
                e.push(n.value),
                n = t.next();
            return e
        }
        const Tf = /-+([a-z0-9])/g;
        function Pf(t) {
            return t.replace(Tf, (...t)=>t[1].toUpperCase())
        }
        function If(t, e) {
            return 0 === t || 0 === e
        }
        function Rf(t, e, n) {
            const s = Object.keys(n);
            if (s.length && e.length) {
                let r = e[0]
                  , o = [];
                if (s.forEach(t=>{
                    r.hasOwnProperty(t) || o.push(t),
                    r[t] = n[t]
                }
                ),
                o.length)
                    for (var i = 1; i < e.length; i++) {
                        let n = e[i];
                        o.forEach(function(e) {
                            n[e] = Wf(t, e)
                        })
                    }
            }
            return e
        }
        function Nf(t, e, n) {
            switch (e.type) {
            case 7:
                return t.visitTrigger(e, n);
            case 0:
                return t.visitState(e, n);
            case 1:
                return t.visitTransition(e, n);
            case 2:
                return t.visitSequence(e, n);
            case 3:
                return t.visitGroup(e, n);
            case 4:
                return t.visitAnimate(e, n);
            case 5:
                return t.visitKeyframes(e, n);
            case 6:
                return t.visitStyle(e, n);
            case 8:
                return t.visitReference(e, n);
            case 9:
                return t.visitAnimateChild(e, n);
            case 10:
                return t.visitAnimateRef(e, n);
            case 11:
                return t.visitQuery(e, n);
            case 12:
                return t.visitStagger(e, n);
            default:
                throw new Error(`Unable to resolve animation metadata node #${e.type}`)
            }
        }
        function Wf(t, e) {
            return window.getComputedStyle(t)[e]
        }
        const Mf = "*";
        function Lf(t, e) {
            const n = [];
            return "string" == typeof t ? t.split(/\s*,\s*/).forEach(t=>function(t, e, n) {
                if (":" == t[0]) {
                    const s = function(t, e) {
                        switch (t) {
                        case ":enter":
                            return "void => *";
                        case ":leave":
                            return "* => void";
                        case ":increment":
                            return (t,e)=>parseFloat(e) > parseFloat(t);
                        case ":decrement":
                            return (t,e)=>parseFloat(e) < parseFloat(t);
                        default:
                            return e.push(`The transition alias value "${t}" is not supported`),
                            "* => *"
                        }
                    }(t, n);
                    if ("function" == typeof s)
                        return void e.push(s);
                    t = s
                }
                const s = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                if (null == s || s.length < 4)
                    return n.push(`The provided transition expression "${t}" is not supported`),
                    e;
                const i = s[1]
                  , r = s[2]
                  , o = s[3];
                e.push(Hf(i, o)),
                "<" != r[0] || i == Mf && o == Mf || e.push(Hf(o, i))
            }(t, n, e)) : n.push(t),
            n
        }
        const jf = new Set(["true", "1"])
          , Bf = new Set(["false", "0"]);
        function Hf(t, e) {
            const n = jf.has(t) || Bf.has(t)
              , s = jf.has(e) || Bf.has(e);
            return (i,r)=>{
                let o = t == Mf || t == i
                  , a = e == Mf || e == r;
                return !o && n && "boolean" == typeof i && (o = i ? jf.has(t) : Bf.has(t)),
                !a && s && "boolean" == typeof r && (a = r ? jf.has(e) : Bf.has(e)),
                o && a
            }
        }
        const $f = new RegExp("s*:selfs*,?","g");
        function Uf(t, e, n) {
            return new zf(t).build(e, n)
        }
        class zf {
            constructor(t) {
                this._driver = t
            }
            build(t, e) {
                const n = new qf(e);
                return this._resetContextStyleTimingState(n),
                Nf(this, Ef(t), n)
            }
            _resetContextStyleTimingState(t) {
                t.currentQuerySelector = "",
                t.collectedStyles = {},
                t.collectedStyles[""] = {},
                t.currentTime = 0
            }
            visitTrigger(t, e) {
                let n = e.queryCount = 0
                  , s = e.depCount = 0;
                const i = []
                  , r = [];
                return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),
                t.definitions.forEach(t=>{
                    if (this._resetContextStyleTimingState(e),
                    0 == t.type) {
                        const n = t
                          , s = n.name;
                        s.toString().split(/\s*,\s*/).forEach(t=>{
                            n.name = t,
                            i.push(this.visitState(n, e))
                        }
                        ),
                        n.name = s
                    } else if (1 == t.type) {
                        const i = this.visitTransition(t, e);
                        n += i.queryCount,
                        s += i.depCount,
                        r.push(i)
                    } else
                        e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                }
                ),
                {
                    type: 7,
                    name: t.name,
                    states: i,
                    transitions: r,
                    queryCount: n,
                    depCount: s,
                    options: null
                }
            }
            visitState(t, e) {
                const n = this.visitStyle(t.styles, e)
                  , s = t.options && t.options.params || null;
                if (n.containsDynamicStyles) {
                    const i = new Set
                      , r = s || {};
                    if (n.styles.forEach(t=>{
                        if (Xf(t)) {
                            const e = t;
                            Object.keys(e).forEach(t=>{
                                Df(e[t]).forEach(t=>{
                                    r.hasOwnProperty(t) || i.add(t)
                                }
                                )
                            }
                            )
                        }
                    }
                    ),
                    i.size) {
                        const n = Ff(i.values());
                        e.errors.push(`state("${t.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)
                    }
                }
                return {
                    type: 0,
                    name: t.name,
                    style: n,
                    options: s ? {
                        params: s
                    } : null
                }
            }
            visitTransition(t, e) {
                e.queryCount = 0,
                e.depCount = 0;
                const n = Nf(this, Ef(t.animation), e);
                return {
                    type: 1,
                    matchers: Lf(t.expr, e.errors),
                    animation: n,
                    queryCount: e.queryCount,
                    depCount: e.depCount,
                    options: Qf(t.options)
                }
            }
            visitSequence(t, e) {
                return {
                    type: 2,
                    steps: t.steps.map(t=>Nf(this, t, e)),
                    options: Qf(t.options)
                }
            }
            visitGroup(t, e) {
                const n = e.currentTime;
                let s = 0;
                const i = t.steps.map(t=>{
                    e.currentTime = n;
                    const i = Nf(this, t, e);
                    return s = Math.max(s, e.currentTime),
                    i
                }
                );
                return e.currentTime = s,
                {
                    type: 3,
                    steps: i,
                    options: Qf(t.options)
                }
            }
            visitAnimate(t, e) {
                const n = function(t, e) {
                    let n = null;
                    if (t.hasOwnProperty("duration"))
                        n = t;
                    else if ("number" == typeof t)
                        return Kf(bf(t, e).duration, 0, "");
                    const s = t;
                    if (s.split(/\s+/).some(t=>"{" == t.charAt(0) && "{" == t.charAt(1))) {
                        const t = Kf(0, 0, "");
                        return t.dynamic = !0,
                        t.strValue = s,
                        t
                    }
                    return n = n || bf(s, e),
                    Kf(n.duration, n.delay, n.easing)
                }(t.timings, e.errors);
                let s;
                e.currentAnimateTimings = n;
                let i = t.styles ? t.styles : am({});
                if (5 == i.type)
                    s = this.visitKeyframes(i, e);
                else {
                    let i = t.styles
                      , r = !1;
                    if (!i) {
                        r = !0;
                        const t = {};
                        n.easing && (t.easing = n.easing),
                        i = am(t)
                    }
                    e.currentTime += n.duration + n.delay;
                    const o = this.visitStyle(i, e);
                    o.isEmptyStep = r,
                    s = o
                }
                return e.currentAnimateTimings = null,
                {
                    type: 4,
                    timings: n,
                    style: s,
                    options: null
                }
            }
            visitStyle(t, e) {
                const n = this._makeStyleAst(t, e);
                return this._validateStyleAst(n, e),
                n
            }
            _makeStyleAst(t, e) {
                const n = [];
                Array.isArray(t.styles) ? t.styles.forEach(t=>{
                    "string" == typeof t ? t == rm ? n.push(t) : e.errors.push(`The provided style string value ${t} is not allowed.`) : n.push(t)
                }
                ) : n.push(t.styles);
                let s = !1
                  , i = null;
                return n.forEach(t=>{
                    if (Xf(t)) {
                        const e = t
                          , n = e.easing;
                        if (n && (i = n,
                        delete e.easing),
                        !s)
                            for (let t in e)
                                if (e[t].toString().indexOf("{{") >= 0) {
                                    s = !0;
                                    break
                                }
                    }
                }
                ),
                {
                    type: 6,
                    styles: n,
                    easing: i,
                    offset: t.offset,
                    containsDynamicStyles: s,
                    options: null
                }
            }
            _validateStyleAst(t, e) {
                const n = e.currentAnimateTimings;
                let s = e.currentTime
                  , i = e.currentTime;
                n && i > 0 && (i -= n.duration + n.delay),
                t.styles.forEach(t=>{
                    "string" != typeof t && Object.keys(t).forEach(n=>{
                        if (!this._driver.validateStyleProperty(n))
                            return void e.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);
                        const r = e.collectedStyles[e.currentQuerySelector]
                          , o = r[n];
                        let a = !0;
                        o && (i != s && i >= o.startTime && s <= o.endTime && (e.errors.push(`The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${i}ms" and "${s}ms"`),
                        a = !1),
                        i = o.startTime),
                        a && (r[n] = {
                            startTime: i,
                            endTime: s
                        }),
                        e.options && function(t, e, n) {
                            const s = e.params || {}
                              , i = Df(t);
                            i.length && i.forEach(t=>{
                                s.hasOwnProperty(t) || n.push(`Unable to resolve the local animation param ${t} in the given list of values`)
                            }
                            )
                        }(t[n], e.options, e.errors)
                    }
                    )
                }
                )
            }
            visitKeyframes(t, e) {
                const n = {
                    type: 5,
                    styles: [],
                    options: null
                };
                if (!e.currentAnimateTimings)
                    return e.errors.push("keyframes() must be placed inside of a call to animate()"),
                    n;
                let s = 0;
                const i = [];
                let r = !1
                  , o = !1
                  , a = 0;
                const l = t.steps.map(t=>{
                    const n = this._makeStyleAst(t, e);
                    let l = null != n.offset ? n.offset : function(t) {
                        if ("string" == typeof t)
                            return null;
                        let e = null;
                        if (Array.isArray(t))
                            t.forEach(t=>{
                                if (Xf(t) && t.hasOwnProperty("offset")) {
                                    const n = t;
                                    e = parseFloat(n.offset),
                                    delete n.offset
                                }
                            }
                            );
                        else if (Xf(t) && t.hasOwnProperty("offset")) {
                            const n = t;
                            e = parseFloat(n.offset),
                            delete n.offset
                        }
                        return e
                    }(n.styles)
                      , c = 0;
                    return null != l && (s++,
                    c = n.offset = l),
                    o = o || c < 0 || c > 1,
                    r = r || c < a,
                    a = c,
                    i.push(c),
                    n
                }
                );
                o && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),
                r && e.errors.push("Please ensure that all keyframe offsets are in order");
                const c = t.steps.length;
                let h = 0;
                s > 0 && s < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == s && (h = 1 / (c - 1));
                const u = c - 1
                  , d = e.currentTime
                  , p = e.currentAnimateTimings
                  , m = p.duration;
                return l.forEach((t,s)=>{
                    const r = h > 0 ? s == u ? 1 : h * s : i[s]
                      , o = r * m;
                    e.currentTime = d + p.delay + o,
                    p.duration = o,
                    this._validateStyleAst(t, e),
                    t.offset = r,
                    n.styles.push(t)
                }
                ),
                n
            }
            visitReference(t, e) {
                return {
                    type: 8,
                    animation: Nf(this, Ef(t.animation), e),
                    options: Qf(t.options)
                }
            }
            visitAnimateChild(t, e) {
                return e.depCount++,
                {
                    type: 9,
                    options: Qf(t.options)
                }
            }
            visitAnimateRef(t, e) {
                return {
                    type: 10,
                    animation: this.visitReference(t.animation, e),
                    options: Qf(t.options)
                }
            }
            visitQuery(t, e) {
                const n = e.currentQuerySelector
                  , s = t.options || {};
                e.queryCount++,
                e.currentQuery = t;
                const [i,r] = function(t) {
                    const e = !!t.split(/\s*,\s*/).find(t=>":self" == t);
                    return e && (t = t.replace($f, "")),
                    [t = t.replace(/@\*/g, ff).replace(/@\w+/g, t=>".ng-trigger-" + t.substr(1)).replace(/:animating/g, _f), e]
                }(t.selector);
                e.currentQuerySelector = n.length ? n + " " + i : i,
                Zm(e.collectedStyles, e.currentQuerySelector, {});
                const o = Nf(this, Ef(t.animation), e);
                return e.currentQuery = null,
                e.currentQuerySelector = n,
                {
                    type: 11,
                    selector: i,
                    limit: s.limit || 0,
                    optional: !!s.optional,
                    includeSelf: r,
                    animation: o,
                    originalSelector: t.selector,
                    options: Qf(t.options)
                }
            }
            visitStagger(t, e) {
                e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
                const n = "full" === t.timings ? {
                    duration: 0,
                    delay: 0,
                    easing: "full"
                } : bf(t.timings, e.errors, !0);
                return {
                    type: 12,
                    animation: Nf(this, Ef(t.animation), e),
                    timings: n,
                    options: null
                }
            }
        }
        class qf {
            constructor(t) {
                this.errors = t,
                this.queryCount = 0,
                this.depCount = 0,
                this.currentTransition = null,
                this.currentQuery = null,
                this.currentQuerySelector = null,
                this.currentAnimateTimings = null,
                this.currentTime = 0,
                this.collectedStyles = {},
                this.options = null
            }
        }
        function Xf(t) {
            return !Array.isArray(t) && "object" == typeof t
        }
        function Qf(t) {
            var e;
            return t ? (t = wf(t)).params && (t.params = (e = t.params) ? wf(e) : null) : t = {},
            t
        }
        function Kf(t, e, n) {
            return {
                duration: t,
                delay: e,
                easing: n
            }
        }
        function Zf(t, e, n, s, i, r, o=null, a=!1) {
            return {
                type: 1,
                element: t,
                keyframes: e,
                preStyleProps: n,
                postStyleProps: s,
                duration: i,
                delay: r,
                totalTime: i + r,
                easing: o,
                subTimeline: a
            }
        }
        class Gf {
            constructor() {
                this._map = new Map
            }
            consume(t) {
                let e = this._map.get(t);
                return e ? this._map.delete(t) : e = [],
                e
            }
            append(t, e) {
                let n = this._map.get(t);
                n || this._map.set(t, n = []),
                n.push(...e)
            }
            has(t) {
                return this._map.has(t)
            }
            clear() {
                this._map.clear()
            }
        }
        const Yf = new RegExp(":enter","g")
          , Jf = new RegExp(":leave","g");
        function tg(t, e, n, s, i, r={}, o={}, a, l, c=[]) {
            return (new eg).buildKeyframes(t, e, n, s, i, r, o, a, l, c)
        }
        class eg {
            buildKeyframes(t, e, n, s, i, r, o, a, l, c=[]) {
                l = l || new Gf;
                const h = new sg(t,e,l,s,i,c,[]);
                h.options = a,
                h.currentTimeline.setStyles([r], null, h.errors, a),
                Nf(this, n, h);
                const u = h.timelines.filter(t=>t.containsAnimation());
                if (u.length && Object.keys(o).length) {
                    const t = u[u.length - 1];
                    t.allowOnlyTimelineStyles() || t.setStyles([o], null, h.errors, a)
                }
                return u.length ? u.map(t=>t.buildKeyframes()) : [Zf(e, [], [], [], 0, 0, "", !1)]
            }
            visitTrigger(t, e) {}
            visitState(t, e) {}
            visitTransition(t, e) {}
            visitAnimateChild(t, e) {
                const n = e.subInstructions.consume(e.element);
                if (n) {
                    const s = e.createSubContext(t.options)
                      , i = e.currentTimeline.currentTime
                      , r = this._visitSubInstructions(n, s, s.options);
                    i != r && e.transformIntoNewTimeline(r)
                }
                e.previousNode = t
            }
            visitAnimateRef(t, e) {
                const n = e.createSubContext(t.options);
                n.transformIntoNewTimeline(),
                this.visitReference(t.animation, n),
                e.transformIntoNewTimeline(n.currentTimeline.currentTime),
                e.previousNode = t
            }
            _visitSubInstructions(t, e, n) {
                let s = e.currentTimeline.currentTime;
                const i = null != n.duration ? yf(n.duration) : null
                  , r = null != n.delay ? yf(n.delay) : null;
                return 0 !== i && t.forEach(t=>{
                    const n = e.appendInstructionToTimeline(t, i, r);
                    s = Math.max(s, n.duration + n.delay)
                }
                ),
                s
            }
            visitReference(t, e) {
                e.updateOptions(t.options, !0),
                Nf(this, t.animation, e),
                e.previousNode = t
            }
            visitSequence(t, e) {
                const n = e.subContextCount;
                let s = e;
                const i = t.options;
                if (i && (i.params || i.delay) && (s = e.createSubContext(i),
                s.transformIntoNewTimeline(),
                null != i.delay)) {
                    6 == s.previousNode.type && (s.currentTimeline.snapshotCurrentStyles(),
                    s.previousNode = ng);
                    const t = yf(i.delay);
                    s.delayNextStep(t)
                }
                t.steps.length && (t.steps.forEach(t=>Nf(this, t, s)),
                s.currentTimeline.applyStylesToKeyframe(),
                s.subContextCount > n && s.transformIntoNewTimeline()),
                e.previousNode = t
            }
            visitGroup(t, e) {
                const n = [];
                let s = e.currentTimeline.currentTime;
                const i = t.options && t.options.delay ? yf(t.options.delay) : 0;
                t.steps.forEach(r=>{
                    const o = e.createSubContext(t.options);
                    i && o.delayNextStep(i),
                    Nf(this, r, o),
                    s = Math.max(s, o.currentTimeline.currentTime),
                    n.push(o.currentTimeline)
                }
                ),
                n.forEach(t=>e.currentTimeline.mergeTimelineCollectedStyles(t)),
                e.transformIntoNewTimeline(s),
                e.previousNode = t
            }
            _visitTiming(t, e) {
                if (t.dynamic) {
                    const n = t.strValue;
                    return bf(e.params ? Vf(n, e.params, e.errors) : n, e.errors)
                }
                return {
                    duration: t.duration,
                    delay: t.delay,
                    easing: t.easing
                }
            }
            visitAnimate(t, e) {
                const n = e.currentAnimateTimings = this._visitTiming(t.timings, e)
                  , s = e.currentTimeline;
                n.delay && (e.incrementTime(n.delay),
                s.snapshotCurrentStyles());
                const i = t.style;
                5 == i.type ? this.visitKeyframes(i, e) : (e.incrementTime(n.duration),
                this.visitStyle(i, e),
                s.applyStylesToKeyframe()),
                e.currentAnimateTimings = null,
                e.previousNode = t
            }
            visitStyle(t, e) {
                const n = e.currentTimeline
                  , s = e.currentAnimateTimings;
                !s && n.getCurrentStyleProperties().length && n.forwardFrame();
                const i = s && s.easing || t.easing;
                t.isEmptyStep ? n.applyEmptyStep(i) : n.setStyles(t.styles, i, e.errors, e.options),
                e.previousNode = t
            }
            visitKeyframes(t, e) {
                const n = e.currentAnimateTimings
                  , s = e.currentTimeline.duration
                  , i = n.duration
                  , r = e.createSubContext().currentTimeline;
                r.easing = n.easing,
                t.styles.forEach(t=>{
                    r.forwardTime((t.offset || 0) * i),
                    r.setStyles(t.styles, t.easing, e.errors, e.options),
                    r.applyStylesToKeyframe()
                }
                ),
                e.currentTimeline.mergeTimelineCollectedStyles(r),
                e.transformIntoNewTimeline(s + i),
                e.previousNode = t
            }
            visitQuery(t, e) {
                const n = e.currentTimeline.currentTime
                  , s = t.options || {}
                  , i = s.delay ? yf(s.delay) : 0;
                i && (6 === e.previousNode.type || 0 == n && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(),
                e.previousNode = ng);
                let r = n;
                const o = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!s.optional, e.errors);
                e.currentQueryTotal = o.length;
                let a = null;
                o.forEach((n,s)=>{
                    e.currentQueryIndex = s;
                    const o = e.createSubContext(t.options, n);
                    i && o.delayNextStep(i),
                    n === e.element && (a = o.currentTimeline),
                    Nf(this, t.animation, o),
                    o.currentTimeline.applyStylesToKeyframe(),
                    r = Math.max(r, o.currentTimeline.currentTime)
                }
                ),
                e.currentQueryIndex = 0,
                e.currentQueryTotal = 0,
                e.transformIntoNewTimeline(r),
                a && (e.currentTimeline.mergeTimelineCollectedStyles(a),
                e.currentTimeline.snapshotCurrentStyles()),
                e.previousNode = t
            }
            visitStagger(t, e) {
                const n = e.parentContext
                  , s = e.currentTimeline
                  , i = t.timings
                  , r = Math.abs(i.duration)
                  , o = r * (e.currentQueryTotal - 1);
                let a = r * e.currentQueryIndex;
                switch (i.duration < 0 ? "reverse" : i.easing) {
                case "reverse":
                    a = o - a;
                    break;
                case "full":
                    a = n.currentStaggerTime
                }
                const l = e.currentTimeline;
                a && l.delayNextStep(a);
                const c = l.currentTime;
                Nf(this, t.animation, e),
                e.previousNode = t,
                n.currentStaggerTime = s.currentTime - c + (s.startTime - n.currentTimeline.startTime)
            }
        }
        const ng = {};
        class sg {
            constructor(t, e, n, s, i, r, o, a) {
                this._driver = t,
                this.element = e,
                this.subInstructions = n,
                this._enterClassName = s,
                this._leaveClassName = i,
                this.errors = r,
                this.timelines = o,
                this.parentContext = null,
                this.currentAnimateTimings = null,
                this.previousNode = ng,
                this.subContextCount = 0,
                this.options = {},
                this.currentQueryIndex = 0,
                this.currentQueryTotal = 0,
                this.currentStaggerTime = 0,
                this.currentTimeline = a || new ig(this._driver,e,0),
                o.push(this.currentTimeline)
            }
            get params() {
                return this.options.params
            }
            updateOptions(t, e) {
                if (!t)
                    return;
                const n = t;
                let s = this.options;
                null != n.duration && (s.duration = yf(n.duration)),
                null != n.delay && (s.delay = yf(n.delay));
                const i = n.params;
                if (i) {
                    let t = s.params;
                    t || (t = this.options.params = {}),
                    Object.keys(i).forEach(n=>{
                        e && t.hasOwnProperty(n) || (t[n] = Vf(i[n], t, this.errors))
                    }
                    )
                }
            }
            _copyOptions() {
                const t = {};
                if (this.options) {
                    const e = this.options.params;
                    if (e) {
                        const n = t.params = {};
                        Object.keys(e).forEach(t=>{
                            n[t] = e[t]
                        }
                        )
                    }
                }
                return t
            }
            createSubContext(t=null, e, n) {
                const s = e || this.element
                  , i = new sg(this._driver,s,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(s, n || 0));
                return i.previousNode = this.previousNode,
                i.currentAnimateTimings = this.currentAnimateTimings,
                i.options = this._copyOptions(),
                i.updateOptions(t),
                i.currentQueryIndex = this.currentQueryIndex,
                i.currentQueryTotal = this.currentQueryTotal,
                i.parentContext = this,
                this.subContextCount++,
                i
            }
            transformIntoNewTimeline(t) {
                return this.previousNode = ng,
                this.currentTimeline = this.currentTimeline.fork(this.element, t),
                this.timelines.push(this.currentTimeline),
                this.currentTimeline
            }
            appendInstructionToTimeline(t, e, n) {
                const s = {
                    duration: null != e ? e : t.duration,
                    delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                    easing: ""
                }
                  , i = new rg(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,s,t.stretchStartingKeyframe);
                return this.timelines.push(i),
                s
            }
            incrementTime(t) {
                this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
            }
            delayNextStep(t) {
                t > 0 && this.currentTimeline.delayNextStep(t)
            }
            invokeQuery(t, e, n, s, i, r) {
                let o = [];
                if (s && o.push(this.element),
                t.length > 0) {
                    t = (t = t.replace(Yf, "." + this._enterClassName)).replace(Jf, "." + this._leaveClassName);
                    let e = this._driver.query(this.element, t, 1 != n);
                    0 !== n && (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
                    o.push(...e)
                }
                return i || 0 != o.length || r.push(`\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`),
                o
            }
        }
        class ig {
            constructor(t, e, n, s) {
                this._driver = t,
                this.element = e,
                this.startTime = n,
                this._elementTimelineStylesLookup = s,
                this.duration = 0,
                this._previousKeyframe = {},
                this._currentKeyframe = {},
                this._keyframes = new Map,
                this._styleSummary = {},
                this._pendingStyles = {},
                this._backFill = {},
                this._currentEmptyStepKeyframe = null,
                this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map),
                this._localTimelineStyles = Object.create(this._backFill, {}),
                this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e),
                this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles,
                this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)),
                this._loadKeyframe()
            }
            containsAnimation() {
                switch (this._keyframes.size) {
                case 0:
                    return !1;
                case 1:
                    return this.getCurrentStyleProperties().length > 0;
                default:
                    return !0
                }
            }
            getCurrentStyleProperties() {
                return Object.keys(this._currentKeyframe)
            }
            get currentTime() {
                return this.startTime + this.duration
            }
            delayNextStep(t) {
                const e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                this.duration || e ? (this.forwardTime(this.currentTime + t),
                e && this.snapshotCurrentStyles()) : this.startTime += t
            }
            fork(t, e) {
                return this.applyStylesToKeyframe(),
                new ig(this._driver,t,e || this.currentTime,this._elementTimelineStylesLookup)
            }
            _loadKeyframe() {
                this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
                this._currentKeyframe = this._keyframes.get(this.duration),
                this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}),
                this._keyframes.set(this.duration, this._currentKeyframe))
            }
            forwardFrame() {
                this.duration += 1,
                this._loadKeyframe()
            }
            forwardTime(t) {
                this.applyStylesToKeyframe(),
                this.duration = t,
                this._loadKeyframe()
            }
            _updateStyle(t, e) {
                this._localTimelineStyles[t] = e,
                this._globalTimelineStyles[t] = e,
                this._styleSummary[t] = {
                    time: this.currentTime,
                    value: e
                }
            }
            allowOnlyTimelineStyles() {
                return this._currentEmptyStepKeyframe !== this._currentKeyframe
            }
            applyEmptyStep(t) {
                t && (this._previousKeyframe.easing = t),
                Object.keys(this._globalTimelineStyles).forEach(t=>{
                    this._backFill[t] = this._globalTimelineStyles[t] || rm,
                    this._currentKeyframe[t] = rm
                }
                ),
                this._currentEmptyStepKeyframe = this._currentKeyframe
            }
            setStyles(t, e, n, s) {
                e && (this._previousKeyframe.easing = e);
                const i = s && s.params || {}
                  , r = function(t, e) {
                    const n = {};
                    let s;
                    return t.forEach(t=>{
                        "*" === t ? (s = s || Object.keys(e),
                        s.forEach(t=>{
                            n[t] = rm
                        }
                        )) : Af(t, !1, n)
                    }
                    ),
                    n
                }(t, this._globalTimelineStyles);
                Object.keys(r).forEach(t=>{
                    const e = Vf(r[t], i, n);
                    this._pendingStyles[t] = e,
                    this._localTimelineStyles.hasOwnProperty(t) || (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(t) ? this._globalTimelineStyles[t] : rm),
                    this._updateStyle(t, e)
                }
                )
            }
            applyStylesToKeyframe() {
                const t = this._pendingStyles
                  , e = Object.keys(t);
                0 != e.length && (this._pendingStyles = {},
                e.forEach(e=>{
                    this._currentKeyframe[e] = t[e]
                }
                ),
                Object.keys(this._localTimelineStyles).forEach(t=>{
                    this._currentKeyframe.hasOwnProperty(t) || (this._currentKeyframe[t] = this._localTimelineStyles[t])
                }
                ))
            }
            snapshotCurrentStyles() {
                Object.keys(this._localTimelineStyles).forEach(t=>{
                    const e = this._localTimelineStyles[t];
                    this._pendingStyles[t] = e,
                    this._updateStyle(t, e)
                }
                )
            }
            getFinalKeyframe() {
                return this._keyframes.get(this.duration)
            }
            get properties() {
                const t = [];
                for (let e in this._currentKeyframe)
                    t.push(e);
                return t
            }
            mergeTimelineCollectedStyles(t) {
                Object.keys(t._styleSummary).forEach(e=>{
                    const n = this._styleSummary[e]
                      , s = t._styleSummary[e];
                    (!n || s.time > n.time) && this._updateStyle(e, s.value)
                }
                )
            }
            buildKeyframes() {
                this.applyStylesToKeyframe();
                const t = new Set
                  , e = new Set
                  , n = 1 === this._keyframes.size && 0 === this.duration;
                let s = [];
                this._keyframes.forEach((i,r)=>{
                    const o = Af(i, !0);
                    Object.keys(o).forEach(n=>{
                        const s = o[n];
                        "!" == s ? t.add(n) : s == rm && e.add(n)
                    }
                    ),
                    n || (o.offset = r / this.duration),
                    s.push(o)
                }
                );
                const i = t.size ? Ff(t.values()) : []
                  , r = e.size ? Ff(e.values()) : [];
                if (n) {
                    const t = s[0]
                      , e = wf(t);
                    t.offset = 0,
                    e.offset = 1,
                    s = [t, e]
                }
                return Zf(this.element, s, i, r, this.duration, this.startTime, this.easing, !1)
            }
        }
        class rg extends ig {
            constructor(t, e, n, s, i, r, o=!1) {
                super(t, e, r.delay),
                this.element = e,
                this.keyframes = n,
                this.preStyleProps = s,
                this.postStyleProps = i,
                this._stretchStartingKeyframe = o,
                this.timings = {
                    duration: r.duration,
                    delay: r.delay,
                    easing: r.easing
                }
            }
            containsAnimation() {
                return this.keyframes.length > 1
            }
            buildKeyframes() {
                let t = this.keyframes
                  , {delay: e, duration: n, easing: s} = this.timings;
                if (this._stretchStartingKeyframe && e) {
                    const i = []
                      , r = n + e
                      , o = e / r
                      , a = Af(t[0], !1);
                    a.offset = 0,
                    i.push(a);
                    const l = Af(t[0], !1);
                    l.offset = og(o),
                    i.push(l);
                    const c = t.length - 1;
                    for (let s = 1; s <= c; s++) {
                        let o = Af(t[s], !1);
                        o.offset = og((e + o.offset * n) / r),
                        i.push(o)
                    }
                    n = r,
                    e = 0,
                    s = "",
                    t = i
                }
                return Zf(this.element, t, this.preStyleProps, this.postStyleProps, n, e, s, !0)
            }
        }
        function og(t, e=3) {
            const n = Math.pow(10, e - 1);
            return Math.round(t * n) / n
        }
        class ag {
        }
        class lg extends ag {
            normalizePropertyName(t, e) {
                return Pf(t)
            }
            normalizeStyleValue(t, e, n, s) {
                let i = "";
                const r = n.toString().trim();
                if (cg[e] && 0 !== n && "0" !== n)
                    if ("number" == typeof n)
                        i = "px";
                    else {
                        const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                        e && 0 == e[1].length && s.push(`Please provide a CSS unit value for ${t}:${n}`)
                    }
                return r + i
            }
        }
        const cg = (()=>function(t) {
            const e = {};
            return t.forEach(t=>e[t] = !0),
            e
        }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();
        function hg(t, e, n, s, i, r, o, a, l, c, h, u, d) {
            return {
                type: 0,
                element: t,
                triggerName: e,
                isRemovalTransition: i,
                fromState: n,
                fromStyles: r,
                toState: s,
                toStyles: o,
                timelines: a,
                queriedElements: l,
                preStyleProps: c,
                postStyleProps: h,
                totalTime: u,
                errors: d
            }
        }
        const ug = {};
        class dg {
            constructor(t, e, n) {
                this._triggerName = t,
                this.ast = e,
                this._stateStyles = n
            }
            match(t, e, n, s) {
                return function(t, e, n, s, i) {
                    return t.some(t=>t(e, n, s, i))
                }(this.ast.matchers, t, e, n, s)
            }
            buildStyles(t, e, n) {
                const s = this._stateStyles["*"]
                  , i = this._stateStyles[t]
                  , r = s ? s.buildStyles(e, n) : {};
                return i ? i.buildStyles(e, n) : r
            }
            build(t, e, n, s, i, r, o, a, l, c) {
                const h = []
                  , u = this.ast.options && this.ast.options.params || ug
                  , d = this.buildStyles(n, o && o.params || ug, h)
                  , p = a && a.params || ug
                  , m = this.buildStyles(s, p, h)
                  , f = new Set
                  , g = new Map
                  , _ = new Map
                  , y = "void" === s
                  , v = {
                    params: Object.assign(Object.assign({}, u), p)
                }
                  , b = c ? [] : tg(t, e, this.ast.animation, i, r, d, m, v, l, h);
                let w = 0;
                if (b.forEach(t=>{
                    w = Math.max(t.duration + t.delay, w)
                }
                ),
                h.length)
                    return hg(e, this._triggerName, n, s, y, d, m, [], [], g, _, w, h);
                b.forEach(t=>{
                    const n = t.element
                      , s = Zm(g, n, {});
                    t.preStyleProps.forEach(t=>s[t] = !0);
                    const i = Zm(_, n, {});
                    t.postStyleProps.forEach(t=>i[t] = !0),
                    n !== e && f.add(n)
                }
                );
                const A = Ff(f.values());
                return hg(e, this._triggerName, n, s, y, d, m, b, A, g, _, w)
            }
        }
        class pg {
            constructor(t, e) {
                this.styles = t,
                this.defaultParams = e
            }
            buildStyles(t, e) {
                const n = {}
                  , s = wf(this.defaultParams);
                return Object.keys(t).forEach(e=>{
                    const n = t[e];
                    null != n && (s[e] = n)
                }
                ),
                this.styles.styles.forEach(t=>{
                    if ("string" != typeof t) {
                        const i = t;
                        Object.keys(i).forEach(t=>{
                            let r = i[t];
                            r.length > 1 && (r = Vf(r, s, e)),
                            n[t] = r
                        }
                        )
                    }
                }
                ),
                n
            }
        }
        class mg {
            constructor(t, e) {
                this.name = t,
                this.ast = e,
                this.transitionFactories = [],
                this.states = {},
                e.states.forEach(t=>{
                    this.states[t.name] = new pg(t.style,t.options && t.options.params || {})
                }
                ),
                fg(this.states, "true", "1"),
                fg(this.states, "false", "0"),
                e.transitions.forEach(e=>{
                    this.transitionFactories.push(new dg(t,e,this.states))
                }
                ),
                this.fallbackTransition = new dg(t,{
                    type: 1,
                    animation: {
                        type: 2,
                        steps: [],
                        options: null
                    },
                    matchers: [(t,e)=>!0],
                    options: null,
                    queryCount: 0,
                    depCount: 0
                },this.states)
            }
            get containsQueries() {
                return this.ast.queryCount > 0
            }
            matchTransition(t, e, n, s) {
                return this.transitionFactories.find(i=>i.match(t, e, n, s)) || null
            }
            matchStyles(t, e, n) {
                return this.fallbackTransition.buildStyles(t, e, n)
            }
        }
        function fg(t, e, n) {
            t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
        }
        const gg = new Gf;
        class _g {
            constructor(t, e, n) {
                this.bodyNode = t,
                this._driver = e,
                this._normalizer = n,
                this._animations = {},
                this._playersById = {},
                this.players = []
            }
            register(t, e) {
                const n = []
                  , s = Uf(this._driver, e, n);
                if (n.length)
                    throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);
                this._animations[t] = s
            }
            _buildPlayer(t, e, n) {
                const s = t.element
                  , i = qm(0, this._normalizer, 0, t.keyframes, e, n);
                return this._driver.animate(s, i, t.duration, t.delay, t.easing, [], !0)
            }
            create(t, e, n={}) {
                const s = []
                  , i = this._animations[t];
                let r;
                const o = new Map;
                if (i ? (r = tg(this._driver, e, i, df, pf, {}, {}, n, gg, s),
                r.forEach(t=>{
                    const e = Zm(o, t.element, {});
                    t.postStyleProps.forEach(t=>e[t] = null)
                }
                )) : (s.push("The requested animation doesn't exist or has already been destroyed"),
                r = []),
                s.length)
                    throw new Error(`Unable to create the animation due to the following errors: ${s.join("\n")}`);
                o.forEach((t,e)=>{
                    Object.keys(t).forEach(n=>{
                        t[n] = this._driver.computeStyle(e, n, rm)
                    }
                    )
                }
                );
                const a = zm(r.map(t=>{
                    const e = o.get(t.element);
                    return this._buildPlayer(t, {}, e)
                }
                ));
                return this._playersById[t] = a,
                a.onDestroy(()=>this.destroy(t)),
                this.players.push(a),
                a
            }
            destroy(t) {
                const e = this._getPlayer(t);
                e.destroy(),
                delete this._playersById[t];
                const n = this.players.indexOf(e);
                n >= 0 && this.players.splice(n, 1)
            }
            _getPlayer(t) {
                const e = this._playersById[t];
                if (!e)
                    throw new Error(`Unable to find the timeline player referenced by ${t}`);
                return e
            }
            listen(t, e, n, s) {
                const i = Km(e, "", "", "");
                return Xm(this._getPlayer(t), n, i, s),
                ()=>{}
            }
            command(t, e, n, s) {
                if ("register" == n)
                    return void this.register(t, s[0]);
                if ("create" == n)
                    return void this.create(t, e, s[0] || {});
                const i = this._getPlayer(t);
                switch (n) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "reset":
                    i.reset();
                    break;
                case "restart":
                    i.restart();
                    break;
                case "finish":
                    i.finish();
                    break;
                case "init":
                    i.init();
                    break;
                case "setPosition":
                    i.setPosition(parseFloat(s[0]));
                    break;
                case "destroy":
                    this.destroy(t)
                }
            }
        }
        const yg = "ng-animate-queued"
          , vg = "ng-animate-disabled"
          , bg = ".ng-animate-disabled"
          , wg = []
          , Ag = {
            namespaceId: "",
            setForRemoval: !1,
            setForMove: !1,
            hasAnimation: !1,
            removedBeforeQueried: !1
        }
          , Sg = {
            namespaceId: "",
            setForMove: !1,
            setForRemoval: !1,
            hasAnimation: !1,
            removedBeforeQueried: !0
        };
        class Og {
            constructor(t, e="") {
                this.namespaceId = e;
                const n = t && t.hasOwnProperty("value");
                if (this.value = null != (s = n ? t.value : t) ? s : null,
                n) {
                    const e = wf(t);
                    delete e.value,
                    this.options = e
                } else
                    this.options = {};
                var s;
                this.options.params || (this.options.params = {})
            }
            get params() {
                return this.options.params
            }
            absorbOptions(t) {
                const e = t.params;
                if (e) {
                    const t = this.options.params;
                    Object.keys(e).forEach(n=>{
                        null == t[n] && (t[n] = e[n])
                    }
                    )
                }
            }
        }
        const Cg = "void"
          , kg = new Og(Cg);
        class Eg {
            constructor(t, e, n) {
                this.id = t,
                this.hostElement = e,
                this._engine = n,
                this.players = [],
                this._triggers = {},
                this._queue = [],
                this._elementListeners = new Map,
                this._hostClassName = "ng-tns-" + t,
                Ig(e, this._hostClassName)
            }
            listen(t, e, n, s) {
                if (!this._triggers.hasOwnProperty(e))
                    throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`);
                if (null == n || 0 == n.length)
                    throw new Error(`Unable to listen on the animation trigger "${e}" because the provided event is undefined!`);
                if ("start" != (i = n) && "done" != i)
                    throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`);
                var i;
                const r = Zm(this._elementListeners, t, [])
                  , o = {
                    name: e,
                    phase: n,
                    callback: s
                };
                r.push(o);
                const a = Zm(this._engine.statesByElement, t, {});
                return a.hasOwnProperty(e) || (Ig(t, mf),
                Ig(t, "ng-trigger-" + e),
                a[e] = kg),
                ()=>{
                    this._engine.afterFlush(()=>{
                        const t = r.indexOf(o);
                        t >= 0 && r.splice(t, 1),
                        this._triggers[e] || delete a[e]
                    }
                    )
                }
            }
            register(t, e) {
                return !this._triggers[t] && (this._triggers[t] = e,
                !0)
            }
            _getTrigger(t) {
                const e = this._triggers[t];
                if (!e)
                    throw new Error(`The provided animation trigger "${t}" has not been registered!`);
                return e
            }
            trigger(t, e, n, s=!0) {
                const i = this._getTrigger(e)
                  , r = new Dg(this.id,e,t);
                let o = this._engine.statesByElement.get(t);
                o || (Ig(t, mf),
                Ig(t, "ng-trigger-" + e),
                this._engine.statesByElement.set(t, o = {}));
                let a = o[e];
                const l = new Og(n,this.id);
                if (!(n && n.hasOwnProperty("value")) && a && l.absorbOptions(a.options),
                o[e] = l,
                a || (a = kg),
                l.value !== Cg && a.value === l.value) {
                    if (!function(t, e) {
                        const n = Object.keys(t)
                          , s = Object.keys(e);
                        if (n.length != s.length)
                            return !1;
                        for (let i = 0; i < n.length; i++) {
                            const s = n[i];
                            if (!e.hasOwnProperty(s) || t[s] !== e[s])
                                return !1
                        }
                        return !0
                    }(a.params, l.params)) {
                        const e = []
                          , n = i.matchStyles(a.value, a.params, e)
                          , s = i.matchStyles(l.value, l.params, e);
                        e.length ? this._engine.reportError(e) : this._engine.afterFlush(()=>{
                            kf(t, n),
                            Cf(t, s)
                        }
                        )
                    }
                    return
                }
                const c = Zm(this._engine.playersByElement, t, []);
                c.forEach(t=>{
                    t.namespaceId == this.id && t.triggerName == e && t.queued && t.destroy()
                }
                );
                let h = i.matchTransition(a.value, l.value, t, l.params)
                  , u = !1;
                if (!h) {
                    if (!s)
                        return;
                    h = i.fallbackTransition,
                    u = !0
                }
                return this._engine.totalQueuedPlayers++,
                this._queue.push({
                    element: t,
                    triggerName: e,
                    transition: h,
                    fromState: a,
                    toState: l,
                    player: r,
                    isFallbackTransition: u
                }),
                u || (Ig(t, yg),
                r.onStart(()=>{
                    Rg(t, yg)
                }
                )),
                r.onDone(()=>{
                    let e = this.players.indexOf(r);
                    e >= 0 && this.players.splice(e, 1);
                    const n = this._engine.playersByElement.get(t);
                    if (n) {
                        let t = n.indexOf(r);
                        t >= 0 && n.splice(t, 1)
                    }
                }
                ),
                this.players.push(r),
                c.push(r),
                r
            }
            deregister(t) {
                delete this._triggers[t],
                this._engine.statesByElement.forEach((e,n)=>{
                    delete e[t]
                }
                ),
                this._elementListeners.forEach((e,n)=>{
                    this._elementListeners.set(n, e.filter(e=>e.name != t))
                }
                )
            }
            clearElementCache(t) {
                this._engine.statesByElement.delete(t),
                this._elementListeners.delete(t);
                const e = this._engine.playersByElement.get(t);
                e && (e.forEach(t=>t.destroy()),
                this._engine.playersByElement.delete(t))
            }
            _signalRemovalForInnerTriggers(t, e) {
                const n = this._engine.driver.query(t, ff, !0);
                n.forEach(t=>{
                    if (t.__ng_removed)
                        return;
                    const n = this._engine.fetchNamespacesByElement(t);
                    n.size ? n.forEach(n=>n.triggerLeaveAnimation(t, e, !1, !0)) : this.clearElementCache(t)
                }
                ),
                this._engine.afterFlushAnimationsDone(()=>n.forEach(t=>this.clearElementCache(t)))
            }
            triggerLeaveAnimation(t, e, n, s) {
                const i = this._engine.statesByElement.get(t);
                if (i) {
                    const r = [];
                    if (Object.keys(i).forEach(e=>{
                        if (this._triggers[e]) {
                            const n = this.trigger(t, e, Cg, s);
                            n && r.push(n)
                        }
                    }
                    ),
                    r.length)
                        return this._engine.markElementAsRemoved(this.id, t, !0, e),
                        n && zm(r).onDone(()=>this._engine.processLeaveNode(t)),
                        !0
                }
                return !1
            }
            prepareLeaveAnimationListeners(t) {
                const e = this._elementListeners.get(t)
                  , n = this._engine.statesByElement.get(t);
                if (e && n) {
                    const s = new Set;
                    e.forEach(e=>{
                        const i = e.name;
                        if (s.has(i))
                            return;
                        s.add(i);
                        const r = this._triggers[i].fallbackTransition
                          , o = n[i] || kg
                          , a = new Og(Cg)
                          , l = new Dg(this.id,i,t);
                        this._engine.totalQueuedPlayers++,
                        this._queue.push({
                            element: t,
                            triggerName: i,
                            transition: r,
                            fromState: o,
                            toState: a,
                            player: l,
                            isFallbackTransition: !0
                        })
                    }
                    )
                }
            }
            removeNode(t, e) {
                const n = this._engine;
                if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
                this.triggerLeaveAnimation(t, e, !0))
                    return;
                let s = !1;
                if (n.totalAnimations) {
                    const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
                    if (e && e.length)
                        s = !0;
                    else {
                        let e = t;
                        for (; e = e.parentNode; )
                            if (n.statesByElement.get(e)) {
                                s = !0;
                                break
                            }
                    }
                }
                if (this.prepareLeaveAnimationListeners(t),
                s)
                    n.markElementAsRemoved(this.id, t, !1, e);
                else {
                    const s = t.__ng_removed;
                    s && s !== Ag || (n.afterFlush(()=>this.clearElementCache(t)),
                    n.destroyInnerAnimations(t),
                    n._onRemovalComplete(t, e))
                }
            }
            insertNode(t, e) {
                Ig(t, this._hostClassName)
            }
            drainQueuedTransitions(t) {
                const e = [];
                return this._queue.forEach(n=>{
                    const s = n.player;
                    if (s.destroyed)
                        return;
                    const i = n.element
                      , r = this._elementListeners.get(i);
                    r && r.forEach(e=>{
                        if (e.name == n.triggerName) {
                            const s = Km(i, n.triggerName, n.fromState.value, n.toState.value);
                            s._data = t,
                            Xm(n.player, e.phase, s, e.callback)
                        }
                    }
                    ),
                    s.markedForDestroy ? this._engine.afterFlush(()=>{
                        s.destroy()
                    }
                    ) : e.push(n)
                }
                ),
                this._queue = [],
                e.sort((t,e)=>{
                    const n = t.transition.ast.depCount
                      , s = e.transition.ast.depCount;
                    return 0 == n || 0 == s ? n - s : this._engine.driver.containsElement(t.element, e.element) ? 1 : -1
                }
                )
            }
            destroy(t) {
                this.players.forEach(t=>t.destroy()),
                this._signalRemovalForInnerTriggers(this.hostElement, t)
            }
            elementContainsData(t) {
                let e = !1;
                return this._elementListeners.has(t) && (e = !0),
                e = !!this._queue.find(e=>e.element === t) || e,
                e
            }
        }
        class xg {
            constructor(t, e, n) {
                this.bodyNode = t,
                this.driver = e,
                this._normalizer = n,
                this.players = [],
                this.newHostElements = new Map,
                this.playersByElement = new Map,
                this.playersByQueriedElement = new Map,
                this.statesByElement = new Map,
                this.disabledNodes = new Set,
                this.totalAnimations = 0,
                this.totalQueuedPlayers = 0,
                this._namespaceLookup = {},
                this._namespaceList = [],
                this._flushFns = [],
                this._whenQuietFns = [],
                this.namespacesByHostElement = new Map,
                this.collectedEnterElements = [],
                this.collectedLeaveElements = [],
                this.onRemovalComplete = (t,e)=>{}
            }
            _onRemovalComplete(t, e) {
                this.onRemovalComplete(t, e)
            }
            get queuedPlayers() {
                const t = [];
                return this._namespaceList.forEach(e=>{
                    e.players.forEach(e=>{
                        e.queued && t.push(e)
                    }
                    )
                }
                ),
                t
            }
            createNamespace(t, e) {
                const n = new Eg(t,e,this);
                return this.bodyNode && this.driver.containsElement(this.bodyNode, e) ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n),
                this.collectEnterElement(e)),
                this._namespaceLookup[t] = n
            }
            _balanceNamespaceList(t, e) {
                const n = this._namespaceList.length - 1;
                if (n >= 0) {
                    let s = !1;
                    for (let i = n; i >= 0; i--)
                        if (this.driver.containsElement(this._namespaceList[i].hostElement, e)) {
                            this._namespaceList.splice(i + 1, 0, t),
                            s = !0;
                            break
                        }
                    s || this._namespaceList.splice(0, 0, t)
                } else
                    this._namespaceList.push(t);
                return this.namespacesByHostElement.set(e, t),
                t
            }
            register(t, e) {
                let n = this._namespaceLookup[t];
                return n || (n = this.createNamespace(t, e)),
                n
            }
            registerTrigger(t, e, n) {
                let s = this._namespaceLookup[t];
                s && s.register(e, n) && this.totalAnimations++
            }
            destroy(t, e) {
                if (!t)
                    return;
                const n = this._fetchNamespace(t);
                this.afterFlush(()=>{
                    this.namespacesByHostElement.delete(n.hostElement),
                    delete this._namespaceLookup[t];
                    const e = this._namespaceList.indexOf(n);
                    e >= 0 && this._namespaceList.splice(e, 1)
                }
                ),
                this.afterFlushAnimationsDone(()=>n.destroy(e))
            }
            _fetchNamespace(t) {
                return this._namespaceLookup[t]
            }
            fetchNamespacesByElement(t) {
                const e = new Set
                  , n = this.statesByElement.get(t);
                if (n) {
                    const t = Object.keys(n);
                    for (let s = 0; s < t.length; s++) {
                        const i = n[t[s]].namespaceId;
                        if (i) {
                            const t = this._fetchNamespace(i);
                            t && e.add(t)
                        }
                    }
                }
                return e
            }
            trigger(t, e, n, s) {
                if (Vg(e)) {
                    const i = this._fetchNamespace(t);
                    if (i)
                        return i.trigger(e, n, s),
                        !0
                }
                return !1
            }
            insertNode(t, e, n, s) {
                if (!Vg(e))
                    return;
                const i = e.__ng_removed;
                if (i && i.setForRemoval) {
                    i.setForRemoval = !1,
                    i.setForMove = !0;
                    const t = this.collectedLeaveElements.indexOf(e);
                    t >= 0 && this.collectedLeaveElements.splice(t, 1)
                }
                if (t) {
                    const s = this._fetchNamespace(t);
                    s && s.insertNode(e, n)
                }
                s && this.collectEnterElement(e)
            }
            collectEnterElement(t) {
                this.collectedEnterElements.push(t)
            }
            markElementAsDisabled(t, e) {
                e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t),
                Ig(t, vg)) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t),
                Rg(t, vg))
            }
            removeNode(t, e, n, s) {
                if (Vg(e)) {
                    const i = t ? this._fetchNamespace(t) : null;
                    if (i ? i.removeNode(e, s) : this.markElementAsRemoved(t, e, !1, s),
                    n) {
                        const n = this.namespacesByHostElement.get(e);
                        n && n.id !== t && n.removeNode(e, s)
                    }
                } else
                    this._onRemovalComplete(e, s)
            }
            markElementAsRemoved(t, e, n, s) {
                this.collectedLeaveElements.push(e),
                e.__ng_removed = {
                    namespaceId: t,
                    setForRemoval: s,
                    hasAnimation: n,
                    removedBeforeQueried: !1
                }
            }
            listen(t, e, n, s, i) {
                return Vg(e) ? this._fetchNamespace(t).listen(e, n, s, i) : ()=>{}
            }
            _buildInstruction(t, e, n, s, i) {
                return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, s, t.fromState.options, t.toState.options, e, i)
            }
            destroyInnerAnimations(t) {
                let e = this.driver.query(t, ff, !0);
                e.forEach(t=>this.destroyActiveAnimationsForElement(t)),
                0 != this.playersByQueriedElement.size && (e = this.driver.query(t, _f, !0),
                e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))
            }
            destroyActiveAnimationsForElement(t) {
                const e = this.playersByElement.get(t);
                e && e.forEach(t=>{
                    t.queued ? t.markedForDestroy = !0 : t.destroy()
                }
                )
            }
            finishActiveQueriedAnimationOnElement(t) {
                const e = this.playersByQueriedElement.get(t);
                e && e.forEach(t=>t.finish())
            }
            whenRenderingDone() {
                return new Promise(t=>{
                    if (this.players.length)
                        return zm(this.players).onDone(()=>t());
                    t()
                }
                )
            }
            processLeaveNode(t) {
                const e = t.__ng_removed;
                if (e && e.setForRemoval) {
                    if (t.__ng_removed = Ag,
                    e.namespaceId) {
                        this.destroyInnerAnimations(t);
                        const n = this._fetchNamespace(e.namespaceId);
                        n && n.clearElementCache(t)
                    }
                    this._onRemovalComplete(t, e.setForRemoval)
                }
                this.driver.matchesElement(t, bg) && this.markElementAsDisabled(t, !1),
                this.driver.query(t, bg, !0).forEach(t=>{
                    this.markElementAsDisabled(t, !1)
                }
                )
            }
            flush(t=-1) {
                let e = [];
                if (this.newHostElements.size && (this.newHostElements.forEach((t,e)=>this._balanceNamespaceList(t, e)),
                this.newHostElements.clear()),
                this.totalAnimations && this.collectedEnterElements.length)
                    for (let n = 0; n < this.collectedEnterElements.length; n++)
                        Ig(this.collectedEnterElements[n], "ng-star-inserted");
                if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                    const n = [];
                    try {
                        e = this._flushAnimations(n, t)
                    } finally {
                        for (let t = 0; t < n.length; t++)
                            n[t]()
                    }
                } else
                    for (let n = 0; n < this.collectedLeaveElements.length; n++)
                        this.processLeaveNode(this.collectedLeaveElements[n]);
                if (this.totalQueuedPlayers = 0,
                this.collectedEnterElements.length = 0,
                this.collectedLeaveElements.length = 0,
                this._flushFns.forEach(t=>t()),
                this._flushFns = [],
                this._whenQuietFns.length) {
                    const t = this._whenQuietFns;
                    this._whenQuietFns = [],
                    e.length ? zm(e).onDone(()=>{
                        t.forEach(t=>t())
                    }
                    ) : t.forEach(t=>t())
                }
            }
            reportError(t) {
                throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${t.join("\n")}`)
            }
            _flushAnimations(t, e) {
                const n = new Gf
                  , s = []
                  , i = new Map
                  , r = []
                  , o = new Map
                  , a = new Map
                  , l = new Map
                  , c = new Set;
                this.disabledNodes.forEach(t=>{
                    c.add(t);
                    const e = this.driver.query(t, ".ng-animate-queued", !0);
                    for (let n = 0; n < e.length; n++)
                        c.add(e[n])
                }
                );
                const h = this.bodyNode
                  , u = Array.from(this.statesByElement.keys())
                  , d = Pg(u, this.collectedEnterElements)
                  , p = new Map;
                let m = 0;
                d.forEach((t,e)=>{
                    const n = df + m++;
                    p.set(e, n),
                    t.forEach(t=>Ig(t, n))
                }
                );
                const f = []
                  , g = new Set
                  , _ = new Set;
                for (let V = 0; V < this.collectedLeaveElements.length; V++) {
                    const t = this.collectedLeaveElements[V]
                      , e = t.__ng_removed;
                    e && e.setForRemoval && (f.push(t),
                    g.add(t),
                    e.hasAnimation ? this.driver.query(t, ".ng-star-inserted", !0).forEach(t=>g.add(t)) : _.add(t))
                }
                const y = new Map
                  , v = Pg(u, Array.from(g));
                v.forEach((t,e)=>{
                    const n = pf + m++;
                    y.set(e, n),
                    t.forEach(t=>Ig(t, n))
                }
                ),
                t.push(()=>{
                    d.forEach((t,e)=>{
                        const n = p.get(e);
                        t.forEach(t=>Rg(t, n))
                    }
                    ),
                    v.forEach((t,e)=>{
                        const n = y.get(e);
                        t.forEach(t=>Rg(t, n))
                    }
                    ),
                    f.forEach(t=>{
                        this.processLeaveNode(t)
                    }
                    )
                }
                );
                const b = []
                  , w = [];
                for (let V = this._namespaceList.length - 1; V >= 0; V--)
                    this._namespaceList[V].drainQueuedTransitions(e).forEach(t=>{
                        const e = t.player
                          , i = t.element;
                        if (b.push(e),
                        this.collectedEnterElements.length) {
                            const t = i.__ng_removed;
                            if (t && t.setForMove)
                                return void e.destroy()
                        }
                        const c = !h || !this.driver.containsElement(h, i)
                          , u = y.get(i)
                          , d = p.get(i)
                          , m = this._buildInstruction(t, n, d, u, c);
                        if (m.errors && m.errors.length)
                            w.push(m);
                        else {
                            if (c)
                                return e.onStart(()=>kf(i, m.fromStyles)),
                                e.onDestroy(()=>Cf(i, m.toStyles)),
                                void s.push(e);
                            if (t.isFallbackTransition)
                                return e.onStart(()=>kf(i, m.fromStyles)),
                                e.onDestroy(()=>Cf(i, m.toStyles)),
                                void s.push(e);
                            m.timelines.forEach(t=>t.stretchStartingKeyframe = !0),
                            n.append(i, m.timelines),
                            r.push({
                                instruction: m,
                                player: e,
                                element: i
                            }),
                            m.queriedElements.forEach(t=>Zm(o, t, []).push(e)),
                            m.preStyleProps.forEach((t,e)=>{
                                const n = Object.keys(t);
                                if (n.length) {
                                    let t = a.get(e);
                                    t || a.set(e, t = new Set),
                                    n.forEach(e=>t.add(e))
                                }
                            }
                            ),
                            m.postStyleProps.forEach((t,e)=>{
                                const n = Object.keys(t);
                                let s = l.get(e);
                                s || l.set(e, s = new Set),
                                n.forEach(t=>s.add(t))
                            }
                            )
                        }
                    }
                    );
                if (w.length) {
                    const t = [];
                    w.forEach(e=>{
                        t.push(`@${e.triggerName} has failed due to:\n`),
                        e.errors.forEach(e=>t.push(`- ${e}\n`))
                    }
                    ),
                    b.forEach(t=>t.destroy()),
                    this.reportError(t)
                }
                const A = new Map
                  , S = new Map;
                r.forEach(t=>{
                    const e = t.element;
                    n.has(e) && (S.set(e, e),
                    this._beforeAnimationBuild(t.player.namespaceId, t.instruction, A))
                }
                ),
                s.forEach(t=>{
                    const e = t.element;
                    this._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(t=>{
                        Zm(A, e, []).push(t),
                        t.destroy()
                    }
                    )
                }
                );
                const O = f.filter(t=>Mg(t, a, l))
                  , C = new Map;
                Tg(C, this.driver, _, l, rm).forEach(t=>{
                    Mg(t, a, l) && O.push(t)
                }
                );
                const k = new Map;
                d.forEach((t,e)=>{
                    Tg(k, this.driver, new Set(t), a, "!")
                }
                ),
                O.forEach(t=>{
                    const e = C.get(t)
                      , n = k.get(t);
                    C.set(t, Object.assign(Object.assign({}, e), n))
                }
                );
                const E = []
                  , x = []
                  , D = {};
                r.forEach(t=>{
                    const {element: e, player: r, instruction: o} = t;
                    if (n.has(e)) {
                        if (c.has(e))
                            return r.onDestroy(()=>Cf(e, o.toStyles)),
                            r.disabled = !0,
                            r.overrideTotalTime(o.totalTime),
                            void s.push(r);
                        let t = D;
                        if (S.size > 1) {
                            let n = e;
                            const s = [];
                            for (; n = n.parentNode; ) {
                                const e = S.get(n);
                                if (e) {
                                    t = e;
                                    break
                                }
                                s.push(n)
                            }
                            s.forEach(e=>S.set(e, t))
                        }
                        const n = this._buildAnimation(r.namespaceId, o, A, i, k, C);
                        if (r.setRealPlayer(n),
                        t === D)
                            E.push(r);
                        else {
                            const e = this.playersByElement.get(t);
                            e && e.length && (r.parentPlayer = zm(e)),
                            s.push(r)
                        }
                    } else
                        kf(e, o.fromStyles),
                        r.onDestroy(()=>Cf(e, o.toStyles)),
                        x.push(r),
                        c.has(e) && s.push(r)
                }
                ),
                x.forEach(t=>{
                    const e = i.get(t.element);
                    if (e && e.length) {
                        const n = zm(e);
                        t.setRealPlayer(n)
                    }
                }
                ),
                s.forEach(t=>{
                    t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
                }
                );
                for (let V = 0; V < f.length; V++) {
                    const t = f[V]
                      , e = t.__ng_removed;
                    if (Rg(t, pf),
                    e && e.hasAnimation)
                        continue;
                    let n = [];
                    if (o.size) {
                        let e = o.get(t);
                        e && e.length && n.push(...e);
                        let s = this.driver.query(t, _f, !0);
                        for (let t = 0; t < s.length; t++) {
                            let e = o.get(s[t]);
                            e && e.length && n.push(...e)
                        }
                    }
                    const s = n.filter(t=>!t.destroyed);
                    s.length ? Ng(this, t, s) : this.processLeaveNode(t)
                }
                return f.length = 0,
                E.forEach(t=>{
                    this.players.push(t),
                    t.onDone(()=>{
                        t.destroy();
                        const e = this.players.indexOf(t);
                        this.players.splice(e, 1)
                    }
                    ),
                    t.play()
                }
                ),
                E
            }
            elementContainsData(t, e) {
                let n = !1;
                const s = e.__ng_removed;
                return s && s.setForRemoval && (n = !0),
                this.playersByElement.has(e) && (n = !0),
                this.playersByQueriedElement.has(e) && (n = !0),
                this.statesByElement.has(e) && (n = !0),
                this._fetchNamespace(t).elementContainsData(e) || n
            }
            afterFlush(t) {
                this._flushFns.push(t)
            }
            afterFlushAnimationsDone(t) {
                this._whenQuietFns.push(t)
            }
            _getPreviousPlayers(t, e, n, s, i) {
                let r = [];
                if (e) {
                    const e = this.playersByQueriedElement.get(t);
                    e && (r = e)
                } else {
                    const e = this.playersByElement.get(t);
                    if (e) {
                        const t = !i || i == Cg;
                        e.forEach(e=>{
                            e.queued || (t || e.triggerName == s) && r.push(e)
                        }
                        )
                    }
                }
                return (n || s) && (r = r.filter(t=>!(n && n != t.namespaceId || s && s != t.triggerName))),
                r
            }
            _beforeAnimationBuild(t, e, n) {
                const s = e.element
                  , i = e.isRemovalTransition ? void 0 : t
                  , r = e.isRemovalTransition ? void 0 : e.triggerName;
                for (const o of e.timelines) {
                    const t = o.element
                      , a = t !== s
                      , l = Zm(n, t, []);
                    this._getPreviousPlayers(t, a, i, r, e.toState).forEach(t=>{
                        const e = t.getRealPlayer();
                        e.beforeDestroy && e.beforeDestroy(),
                        t.destroy(),
                        l.push(t)
                    }
                    )
                }
                kf(s, e.fromStyles)
            }
            _buildAnimation(t, e, n, s, i, r) {
                const o = e.triggerName
                  , a = e.element
                  , l = []
                  , c = new Set
                  , h = new Set
                  , u = e.timelines.map(e=>{
                    const u = e.element;
                    c.add(u);
                    const d = u.__ng_removed;
                    if (d && d.removedBeforeQueried)
                        return new cm(e.duration,e.delay);
                    const p = u !== a
                      , m = function(t) {
                        const e = [];
                        return Wg(t, e),
                        e
                    }((n.get(u) || wg).map(t=>t.getRealPlayer())).filter(t=>!!t.element && t.element === u)
                      , f = i.get(u)
                      , g = r.get(u)
                      , _ = qm(0, this._normalizer, 0, e.keyframes, f, g)
                      , y = this._buildPlayer(e, _, m);
                    if (e.subTimeline && s && h.add(u),
                    p) {
                        const e = new Dg(t,o,u);
                        e.setRealPlayer(y),
                        l.push(e)
                    }
                    return y
                }
                );
                l.forEach(t=>{
                    Zm(this.playersByQueriedElement, t.element, []).push(t),
                    t.onDone(()=>function(t, e, n) {
                        let s;
                        if (t instanceof Map) {
                            if (s = t.get(e),
                            s) {
                                if (s.length) {
                                    const t = s.indexOf(n);
                                    s.splice(t, 1)
                                }
                                0 == s.length && t.delete(e)
                            }
                        } else if (s = t[e],
                        s) {
                            if (s.length) {
                                const t = s.indexOf(n);
                                s.splice(t, 1)
                            }
                            0 == s.length && delete t[e]
                        }
                        return s
                    }(this.playersByQueriedElement, t.element, t))
                }
                ),
                c.forEach(t=>Ig(t, gf));
                const d = zm(u);
                return d.onDestroy(()=>{
                    c.forEach(t=>Rg(t, gf)),
                    Cf(a, e.toStyles)
                }
                ),
                h.forEach(t=>{
                    Zm(s, t, []).push(d)
                }
                ),
                d
            }
            _buildPlayer(t, e, n) {
                return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new cm(t.duration,t.delay)
            }
        }
        class Dg {
            constructor(t, e, n) {
                this.namespaceId = t,
                this.triggerName = e,
                this.element = n,
                this._player = new cm,
                this._containsRealPlayer = !1,
                this._queuedCallbacks = {},
                this.destroyed = !1,
                this.markedForDestroy = !1,
                this.disabled = !1,
                this.queued = !0,
                this.totalTime = 0
            }
            setRealPlayer(t) {
                this._containsRealPlayer || (this._player = t,
                Object.keys(this._queuedCallbacks).forEach(e=>{
                    this._queuedCallbacks[e].forEach(n=>Xm(t, e, void 0, n))
                }
                ),
                this._queuedCallbacks = {},
                this._containsRealPlayer = !0,
                this.overrideTotalTime(t.totalTime),
                this.queued = !1)
            }
            getRealPlayer() {
                return this._player
            }
            overrideTotalTime(t) {
                this.totalTime = t
            }
            syncPlayerEvents(t) {
                const e = this._player;
                e.triggerCallback && t.onStart(()=>e.triggerCallback("start")),
                t.onDone(()=>this.finish()),
                t.onDestroy(()=>this.destroy())
            }
            _queueEvent(t, e) {
                Zm(this._queuedCallbacks, t, []).push(e)
            }
            onDone(t) {
                this.queued && this._queueEvent("done", t),
                this._player.onDone(t)
            }
            onStart(t) {
                this.queued && this._queueEvent("start", t),
                this._player.onStart(t)
            }
            onDestroy(t) {
                this.queued && this._queueEvent("destroy", t),
                this._player.onDestroy(t)
            }
            init() {
                this._player.init()
            }
            hasStarted() {
                return !this.queued && this._player.hasStarted()
            }
            play() {
                !this.queued && this._player.play()
            }
            pause() {
                !this.queued && this._player.pause()
            }
            restart() {
                !this.queued && this._player.restart()
            }
            finish() {
                this._player.finish()
            }
            destroy() {
                this.destroyed = !0,
                this._player.destroy()
            }
            reset() {
                !this.queued && this._player.reset()
            }
            setPosition(t) {
                this.queued || this._player.setPosition(t)
            }
            getPosition() {
                return this.queued ? 0 : this._player.getPosition()
            }
            triggerCallback(t) {
                const e = this._player;
                e.triggerCallback && e.triggerCallback(t)
            }
        }
        function Vg(t) {
            return t && 1 === t.nodeType
        }
        function Fg(t, e) {
            const n = t.style.display;
            return t.style.display = null != e ? e : "none",
            n
        }
        function Tg(t, e, n, s, i) {
            const r = [];
            n.forEach(t=>r.push(Fg(t)));
            const o = [];
            s.forEach((n,s)=>{
                const r = {};
                n.forEach(t=>{
                    const n = r[t] = e.computeStyle(s, t, i);
                    n && 0 != n.length || (s.__ng_removed = Sg,
                    o.push(s))
                }
                ),
                t.set(s, r)
            }
            );
            let a = 0;
            return n.forEach(t=>Fg(t, r[a++])),
            o
        }
        function Pg(t, e) {
            const n = new Map;
            if (t.forEach(t=>n.set(t, [])),
            0 == e.length)
                return n;
            const s = new Set(e)
              , i = new Map;
            function r(t) {
                if (!t)
                    return 1;
                let e = i.get(t);
                if (e)
                    return e;
                const o = t.parentNode;
                return e = n.has(o) ? o : s.has(o) ? 1 : r(o),
                i.set(t, e),
                e
            }
            return e.forEach(t=>{
                const e = r(t);
                1 !== e && n.get(e).push(t)
            }
            ),
            n
        }
        function Ig(t, e) {
            if (t.classList)
                t.classList.add(e);
            else {
                let n = t.$$classes;
                n || (n = t.$$classes = {}),
                n[e] = !0
            }
        }
        function Rg(t, e) {
            if (t.classList)
                t.classList.remove(e);
            else {
                let n = t.$$classes;
                n && delete n[e]
            }
        }
        function Ng(t, e, n) {
            zm(n).onDone(()=>t.processLeaveNode(e))
        }
        function Wg(t, e) {
            for (let n = 0; n < t.length; n++) {
                const s = t[n];
                s instanceof hm ? Wg(s.players, e) : e.push(s)
            }
        }
        function Mg(t, e, n) {
            const s = n.get(t);
            if (!s)
                return !1;
            let i = e.get(t);
            return i ? s.forEach(t=>i.add(t)) : e.set(t, s),
            n.delete(t),
            !0
        }
        class Lg {
            constructor(t, e, n) {
                this.bodyNode = t,
                this._driver = e,
                this._triggerCache = {},
                this.onRemovalComplete = (t,e)=>{}
                ,
                this._transitionEngine = new xg(t,e,n),
                this._timelineEngine = new _g(t,e,n),
                this._transitionEngine.onRemovalComplete = (t,e)=>this.onRemovalComplete(t, e)
            }
            registerTrigger(t, e, n, s, i) {
                const r = t + "-" + s;
                let o = this._triggerCache[r];
                if (!o) {
                    const t = []
                      , e = Uf(this._driver, i, t);
                    if (t.length)
                        throw new Error(`The animation trigger "${s}" has failed to build due to the following errors:\n - ${t.join("\n - ")}`);
                    o = function(t, e) {
                        return new mg(t,e)
                    }(s, e),
                    this._triggerCache[r] = o
                }
                this._transitionEngine.registerTrigger(e, s, o)
            }
            register(t, e) {
                this._transitionEngine.register(t, e)
            }
            destroy(t, e) {
                this._transitionEngine.destroy(t, e)
            }
            onInsert(t, e, n, s) {
                this._transitionEngine.insertNode(t, e, n, s)
            }
            onRemove(t, e, n, s) {
                this._transitionEngine.removeNode(t, e, s || !1, n)
            }
            disableAnimations(t, e) {
                this._transitionEngine.markElementAsDisabled(t, e)
            }
            process(t, e, n, s) {
                if ("@" == n.charAt(0)) {
                    const [t,i] = Gm(n);
                    this._timelineEngine.command(t, e, i, s)
                } else
                    this._transitionEngine.trigger(t, e, n, s)
            }
            listen(t, e, n, s, i) {
                if ("@" == n.charAt(0)) {
                    const [t,s] = Gm(n);
                    return this._timelineEngine.listen(t, e, s, i)
                }
                return this._transitionEngine.listen(t, e, n, s, i)
            }
            flush(t=-1) {
                this._transitionEngine.flush(t)
            }
            get players() {
                return this._transitionEngine.players.concat(this._timelineEngine.players)
            }
            whenRenderingDone() {
                return this._transitionEngine.whenRenderingDone()
            }
        }
        function jg(t, e) {
            let n = null
              , s = null;
            return Array.isArray(e) && e.length ? (n = Hg(e[0]),
            e.length > 1 && (s = Hg(e[e.length - 1]))) : e && (n = Hg(e)),
            n || s ? new Bg(t,n,s) : null
        }
        let Bg = (()=>{
            class t {
                constructor(e, n, s) {
                    this._element = e,
                    this._startStyles = n,
                    this._endStyles = s,
                    this._state = 0;
                    let i = t.initialStylesByElement.get(e);
                    i || t.initialStylesByElement.set(e, i = {}),
                    this._initialStyles = i
                }
                start() {
                    this._state < 1 && (this._startStyles && Cf(this._element, this._startStyles, this._initialStyles),
                    this._state = 1)
                }
                finish() {
                    this.start(),
                    this._state < 2 && (Cf(this._element, this._initialStyles),
                    this._endStyles && (Cf(this._element, this._endStyles),
                    this._endStyles = null),
                    this._state = 1)
                }
                destroy() {
                    this.finish(),
                    this._state < 3 && (t.initialStylesByElement.delete(this._element),
                    this._startStyles && (kf(this._element, this._startStyles),
                    this._endStyles = null),
                    this._endStyles && (kf(this._element, this._endStyles),
                    this._endStyles = null),
                    Cf(this._element, this._initialStyles),
                    this._state = 3)
                }
            }
            return t.initialStylesByElement = new WeakMap,
            t
        }
        )();
        function Hg(t) {
            let e = null;
            const n = Object.keys(t);
            for (let s = 0; s < n.length; s++) {
                const i = n[s];
                $g(i) && (e = e || {},
                e[i] = t[i])
            }
            return e
        }
        function $g(t) {
            return "display" === t || "position" === t
        }
        const Ug = "animation"
          , zg = "animationend";
        class qg {
            constructor(t, e, n, s, i, r, o) {
                this._element = t,
                this._name = e,
                this._duration = n,
                this._delay = s,
                this._easing = i,
                this._fillMode = r,
                this._onDoneFn = o,
                this._finished = !1,
                this._destroyed = !1,
                this._startTime = 0,
                this._position = 0,
                this._eventFn = t=>this._handleCallback(t)
            }
            apply() {
                !function(t, e) {
                    const n = Yg(t, "").trim();
                    n.length && (function(t, e) {
                        let n = 0;
                        for (let s = 0; s < t.length; s++)
                            "," === t.charAt(s) && n++
                    }(n),
                    e = `${n}, ${e}`),
                    Gg(t, "", e)
                }(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),
                Zg(this._element, this._eventFn, !1),
                this._startTime = Date.now()
            }
            pause() {
                Xg(this._element, this._name, "paused")
            }
            resume() {
                Xg(this._element, this._name, "running")
            }
            setPosition(t) {
                const e = Qg(this._element, this._name);
                this._position = t * this._duration,
                Gg(this._element, "Delay", `-${this._position}ms`, e)
            }
            getPosition() {
                return this._position
            }
            _handleCallback(t) {
                const e = t._ngTestManualTimestamp || Date.now()
                  , n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
            }
            finish() {
                this._finished || (this._finished = !0,
                this._onDoneFn(),
                Zg(this._element, this._eventFn, !0))
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this.finish(),
                function(t, e) {
                    const n = Yg(t, "").split(",")
                      , s = Kg(n, e);
                    s >= 0 && (n.splice(s, 1),
                    Gg(t, "", n.join(",")))
                }(this._element, this._name))
            }
        }
        function Xg(t, e, n) {
            Gg(t, "PlayState", n, Qg(t, e))
        }
        function Qg(t, e) {
            const n = Yg(t, "");
            return n.indexOf(",") > 0 ? Kg(n.split(","), e) : Kg([n], e)
        }
        function Kg(t, e) {
            for (let n = 0; n < t.length; n++)
                if (t[n].indexOf(e) >= 0)
                    return n;
            return -1
        }
        function Zg(t, e, n) {
            n ? t.removeEventListener(zg, e) : t.addEventListener(zg, e)
        }
        function Gg(t, e, n, s) {
            const i = Ug + e;
            if (null != s) {
                const e = t.style[i];
                if (e.length) {
                    const t = e.split(",");
                    t[s] = n,
                    n = t.join(",")
                }
            }
            t.style[i] = n
        }
        function Yg(t, e) {
            return t.style[Ug + e] || ""
        }
        class Jg {
            constructor(t, e, n, s, i, r, o, a) {
                this.element = t,
                this.keyframes = e,
                this.animationName = n,
                this._duration = s,
                this._delay = i,
                this._finalStyles = o,
                this._specialStyles = a,
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this.currentSnapshot = {},
                this._state = 0,
                this.easing = r || "linear",
                this.totalTime = s + i,
                this._buildStyler()
            }
            onStart(t) {
                this._onStartFns.push(t)
            }
            onDone(t) {
                this._onDoneFns.push(t)
            }
            onDestroy(t) {
                this._onDestroyFns.push(t)
            }
            destroy() {
                this.init(),
                this._state >= 4 || (this._state = 4,
                this._styler.destroy(),
                this._flushStartFns(),
                this._flushDoneFns(),
                this._specialStyles && this._specialStyles.destroy(),
                this._onDestroyFns.forEach(t=>t()),
                this._onDestroyFns = [])
            }
            _flushDoneFns() {
                this._onDoneFns.forEach(t=>t()),
                this._onDoneFns = []
            }
            _flushStartFns() {
                this._onStartFns.forEach(t=>t()),
                this._onStartFns = []
            }
            finish() {
                this.init(),
                this._state >= 3 || (this._state = 3,
                this._styler.finish(),
                this._flushStartFns(),
                this._specialStyles && this._specialStyles.finish(),
                this._flushDoneFns())
            }
            setPosition(t) {
                this._styler.setPosition(t)
            }
            getPosition() {
                return this._styler.getPosition()
            }
            hasStarted() {
                return this._state >= 2
            }
            init() {
                this._state >= 1 || (this._state = 1,
                this._styler.apply(),
                this._delay && this._styler.pause())
            }
            play() {
                this.init(),
                this.hasStarted() || (this._flushStartFns(),
                this._state = 2,
                this._specialStyles && this._specialStyles.start()),
                this._styler.resume()
            }
            pause() {
                this.init(),
                this._styler.pause()
            }
            restart() {
                this.reset(),
                this.play()
            }
            reset() {
                this._state = 0,
                this._styler.destroy(),
                this._buildStyler(),
                this._styler.apply()
            }
            _buildStyler() {
                this._styler = new qg(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())
            }
            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t=>t()),
                e.length = 0
            }
            beforeDestroy() {
                this.init();
                const t = {};
                if (this.hasStarted()) {
                    const e = this._state >= 3;
                    Object.keys(this._finalStyles).forEach(n=>{
                        "offset" != n && (t[n] = e ? this._finalStyles[n] : Wf(this.element, n))
                    }
                    )
                }
                this.currentSnapshot = t
            }
        }
        class t_ extends cm {
            constructor(t, e) {
                super(),
                this.element = t,
                this._startingStyles = {},
                this.__initialized = !1,
                this._styles = cf(e)
            }
            init() {
                !this.__initialized && this._startingStyles && (this.__initialized = !0,
                Object.keys(this._styles).forEach(t=>{
                    this._startingStyles[t] = this.element.style[t]
                }
                ),
                super.init())
            }
            play() {
                this._startingStyles && (this.init(),
                Object.keys(this._styles).forEach(t=>this.element.style.setProperty(t, this._styles[t])),
                super.play())
            }
            destroy() {
                this._startingStyles && (Object.keys(this._startingStyles).forEach(t=>{
                    const e = this._startingStyles[t];
                    e ? this.element.style.setProperty(t, e) : this.element.style.removeProperty(t)
                }
                ),
                this._startingStyles = null,
                super.destroy())
            }
        }
        class e_ {
            constructor() {
                this._count = 0
            }
            validateStyleProperty(t) {
                return rf(t)
            }
            matchesElement(t, e) {
                return of(t, e)
            }
            containsElement(t, e) {
                return af(t, e)
            }
            query(t, e, n) {
                return lf(t, e, n)
            }
            computeStyle(t, e, n) {
                return window.getComputedStyle(t)[e]
            }
            buildKeyframeElement(t, e, n) {
                n = n.map(t=>cf(t));
                let s = `@keyframes ${e} {\n`
                  , i = "";
                n.forEach(t=>{
                    i = " ";
                    const e = parseFloat(t.offset);
                    s += `${i}${100 * e}% {\n`,
                    i += " ",
                    Object.keys(t).forEach(e=>{
                        const n = t[e];
                        switch (e) {
                        case "offset":
                            return;
                        case "easing":
                            return void (n && (s += `${i}animation-timing-function: ${n};\n`));
                        default:
                            return void (s += `${i}${e}: ${n};\n`)
                        }
                    }
                    ),
                    s += `${i}}\n`
                }
                ),
                s += "}\n";
                const r = document.createElement("style");
                return r.textContent = s,
                r
            }
            animate(t, e, n, s, i, r=[], o) {
                const a = r.filter(t=>t instanceof Jg)
                  , l = {};
                If(n, s) && a.forEach(t=>{
                    let e = t.currentSnapshot;
                    Object.keys(e).forEach(t=>l[t] = e[t])
                }
                );
                const c = function(t) {
                    let e = {};
                    return t && (Array.isArray(t) ? t : [t]).forEach(t=>{
                        Object.keys(t).forEach(n=>{
                            "offset" != n && "easing" != n && (e[n] = t[n])
                        }
                        )
                    }
                    ),
                    e
                }(e = Rf(t, e, l));
                if (0 == n)
                    return new t_(t,c);
                const h = "gen_css_kf_" + this._count++
                  , u = this.buildKeyframeElement(t, h, e);
                (function(t) {
                    var e;
                    const n = null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t);
                    return "undefined" != typeof ShadowRoot && n instanceof ShadowRoot ? n : document.head
                }
                )(t).appendChild(u);
                const d = jg(t, e)
                  , p = new Jg(t,e,h,n,s,i,c,d);
                return p.onDestroy(()=>{
                    var t;
                    (t = u).parentNode.removeChild(t)
                }
                ),
                p
            }
        }
        class n_ {
            constructor(t, e, n, s) {
                this.element = t,
                this.keyframes = e,
                this.options = n,
                this._specialStyles = s,
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this._initialized = !1,
                this._finished = !1,
                this._started = !1,
                this._destroyed = !1,
                this.time = 0,
                this.parentPlayer = null,
                this.currentSnapshot = {},
                this._duration = n.duration,
                this._delay = n.delay || 0,
                this.time = this._duration + this._delay
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(t=>t()),
                this._onDoneFns = [])
            }
            init() {
                this._buildPlayer(),
                this._preparePlayerBeforeStart()
            }
            _buildPlayer() {
                if (this._initialized)
                    return;
                this._initialized = !0;
                const t = this.keyframes;
                this.domPlayer = this._triggerWebAnimation(this.element, t, this.options),
                this._finalKeyframe = t.length ? t[t.length - 1] : {},
                this.domPlayer.addEventListener("finish", ()=>this._onFinish())
            }
            _preparePlayerBeforeStart() {
                this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
            }
            _triggerWebAnimation(t, e, n) {
                return t.animate(e, n)
            }
            onStart(t) {
                this._onStartFns.push(t)
            }
            onDone(t) {
                this._onDoneFns.push(t)
            }
            onDestroy(t) {
                this._onDestroyFns.push(t)
            }
            play() {
                this._buildPlayer(),
                this.hasStarted() || (this._onStartFns.forEach(t=>t()),
                this._onStartFns = [],
                this._started = !0,
                this._specialStyles && this._specialStyles.start()),
                this.domPlayer.play()
            }
            pause() {
                this.init(),
                this.domPlayer.pause()
            }
            finish() {
                this.init(),
                this._specialStyles && this._specialStyles.finish(),
                this._onFinish(),
                this.domPlayer.finish()
            }
            reset() {
                this._resetDomPlayerState(),
                this._destroyed = !1,
                this._finished = !1,
                this._started = !1
            }
            _resetDomPlayerState() {
                this.domPlayer && this.domPlayer.cancel()
            }
            restart() {
                this.reset(),
                this.play()
            }
            hasStarted() {
                return this._started
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this._resetDomPlayerState(),
                this._onFinish(),
                this._specialStyles && this._specialStyles.destroy(),
                this._onDestroyFns.forEach(t=>t()),
                this._onDestroyFns = [])
            }
            setPosition(t) {
                void 0 === this.domPlayer && this.init(),
                this.domPlayer.currentTime = t * this.time
            }
            getPosition() {
                return this.domPlayer.currentTime / this.time
            }
            get totalTime() {
                return this._delay + this._duration
            }
            beforeDestroy() {
                const t = {};
                this.hasStarted() && Object.keys(this._finalKeyframe).forEach(e=>{
                    "offset" != e && (t[e] = this._finished ? this._finalKeyframe[e] : Wf(this.element, e))
                }
                ),
                this.currentSnapshot = t
            }
            triggerCallback(t) {
                const e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(t=>t()),
                e.length = 0
            }
        }
        class s_ {
            constructor() {
                this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(i_().toString()),
                this._cssKeyframesDriver = new e_
            }
            validateStyleProperty(t) {
                return rf(t)
            }
            matchesElement(t, e) {
                return of(t, e)
            }
            containsElement(t, e) {
                return af(t, e)
            }
            query(t, e, n) {
                return lf(t, e, n)
            }
            computeStyle(t, e, n) {
                return window.getComputedStyle(t)[e]
            }
            overrideWebAnimationsSupport(t) {
                this._isNativeImpl = t
            }
            animate(t, e, n, s, i, r=[], o) {
                if (!o && !this._isNativeImpl)
                    return this._cssKeyframesDriver.animate(t, e, n, s, i, r);
                const a = {
                    duration: n,
                    delay: s,
                    fill: 0 == s ? "both" : "forwards"
                };
                i && (a.easing = i);
                const l = {}
                  , c = r.filter(t=>t instanceof n_);
                If(n, s) && c.forEach(t=>{
                    let e = t.currentSnapshot;
                    Object.keys(e).forEach(t=>l[t] = e[t])
                }
                );
                const h = jg(t, e = Rf(t, e = e.map(t=>Af(t, !1)), l));
                return new n_(t,e,a,h)
            }
        }
        function i_() {
            return $m() && Element.prototype.animate || {}
        }
        let r_ = (()=>{
            class t extends im {
                constructor(t, e) {
                    super(),
                    this._nextAnimationId = 0,
                    this._renderer = t.createRenderer(e.body, {
                        id: "0",
                        encapsulation: Ct.None,
                        styles: [],
                        data: {
                            animation: []
                        }
                    })
                }
                build(t) {
                    const e = this._nextAnimationId.toString();
                    this._nextAnimationId++;
                    const n = Array.isArray(t) ? om(t) : t;
                    return l_(this._renderer, null, e, "register", [n]),
                    new o_(e,this._renderer)
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Mo),Jn(zl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class o_ extends class {
        }
        {
            constructor(t, e) {
                super(),
                this._id = t,
                this._renderer = e
            }
            create(t, e) {
                return new a_(this._id,t,e || {},this._renderer)
            }
        }
        class a_ {
            constructor(t, e, n, s) {
                this.id = t,
                this.element = e,
                this._renderer = s,
                this.parentPlayer = null,
                this._started = !1,
                this.totalTime = 0,
                this._command("create", n)
            }
            _listen(t, e) {
                return this._renderer.listen(this.element, `@@${this.id}:${t}`, e)
            }
            _command(t, ...e) {
                return l_(this._renderer, this.element, this.id, t, e)
            }
            onDone(t) {
                this._listen("done", t)
            }
            onStart(t) {
                this._listen("start", t)
            }
            onDestroy(t) {
                this._listen("destroy", t)
            }
            init() {
                this._command("init")
            }
            hasStarted() {
                return this._started
            }
            play() {
                this._command("play"),
                this._started = !0
            }
            pause() {
                this._command("pause")
            }
            restart() {
                this._command("restart")
            }
            finish() {
                this._command("finish")
            }
            destroy() {
                this._command("destroy")
            }
            reset() {
                this._command("reset"),
                this._started = !1
            }
            setPosition(t) {
                this._command("setPosition", t)
            }
            getPosition() {
                var t, e;
                return null !== (e = null === (t = this._renderer.engine.players[+this.id]) || void 0 === t ? void 0 : t.getPosition()) && void 0 !== e ? e : 0
            }
        }
        function l_(t, e, n, s, i) {
            return t.setProperty(e, `@@${n}:${s}`, i)
        }
        const c_ = "@"
          , h_ = "@.disabled";
        let u_ = (()=>{
            class t {
                constructor(t, e, n) {
                    this.delegate = t,
                    this.engine = e,
                    this._zone = n,
                    this._currentId = 0,
                    this._microtaskId = 1,
                    this._animationCallbacksBuffer = [],
                    this._rendererCache = new Map,
                    this._cdRecurDepth = 0,
                    this.promise = Promise.resolve(0),
                    e.onRemovalComplete = (t,e)=>{
                        e && e.parentNode(t) && e.removeChild(t.parentNode, t)
                    }
                }
                createRenderer(t, e) {
                    const n = this.delegate.createRenderer(t, e);
                    if (!(t && e && e.data && e.data.animation)) {
                        let t = this._rendererCache.get(n);
                        return t || (t = new d_("",n,this.engine),
                        this._rendererCache.set(n, t)),
                        t
                    }
                    const s = e.id
                      , i = e.id + "-" + this._currentId;
                    this._currentId++,
                    this.engine.register(i, t);
                    const r = e=>{
                        Array.isArray(e) ? e.forEach(r) : this.engine.registerTrigger(s, i, t, e.name, e)
                    }
                    ;
                    return e.data.animation.forEach(r),
                    new p_(this,i,n,this.engine)
                }
                begin() {
                    this._cdRecurDepth++,
                    this.delegate.begin && this.delegate.begin()
                }
                _scheduleCountTask() {
                    this.promise.then(()=>{
                        this._microtaskId++
                    }
                    )
                }
                scheduleListenerCallback(t, e, n) {
                    t >= 0 && t < this._microtaskId ? this._zone.run(()=>e(n)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(()=>{
                        this._zone.run(()=>{
                            this._animationCallbacksBuffer.forEach(t=>{
                                const [e,n] = t;
                                e(n)
                            }
                            ),
                            this._animationCallbacksBuffer = []
                        }
                        )
                    }
                    ),
                    this._animationCallbacksBuffer.push([e, n]))
                }
                end() {
                    this._cdRecurDepth--,
                    0 == this._cdRecurDepth && this._zone.runOutsideAngular(()=>{
                        this._scheduleCountTask(),
                        this.engine.flush(this._microtaskId)
                    }
                    ),
                    this.delegate.end && this.delegate.end()
                }
                whenRenderingDone() {
                    return this.engine.whenRenderingDone()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(Mo),Jn(Lg),Jn(yl))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        class d_ {
            constructor(t, e, n) {
                this.namespaceId = t,
                this.delegate = e,
                this.engine = n,
                this.destroyNode = this.delegate.destroyNode ? t=>e.destroyNode(t) : null
            }
            get data() {
                return this.delegate.data
            }
            destroy() {
                this.engine.destroy(this.namespaceId, this.delegate),
                this.delegate.destroy()
            }
            createElement(t, e) {
                return this.delegate.createElement(t, e)
            }
            createComment(t) {
                return this.delegate.createComment(t)
            }
            createText(t) {
                return this.delegate.createText(t)
            }
            appendChild(t, e) {
                this.delegate.appendChild(t, e),
                this.engine.onInsert(this.namespaceId, e, t, !1)
            }
            insertBefore(t, e, n, s=!0) {
                this.delegate.insertBefore(t, e, n),
                this.engine.onInsert(this.namespaceId, e, t, s)
            }
            removeChild(t, e, n) {
                this.engine.onRemove(this.namespaceId, e, this.delegate, n)
            }
            selectRootElement(t, e) {
                return this.delegate.selectRootElement(t, e)
            }
            parentNode(t) {
                return this.delegate.parentNode(t)
            }
            nextSibling(t) {
                return this.delegate.nextSibling(t)
            }
            setAttribute(t, e, n, s) {
                this.delegate.setAttribute(t, e, n, s)
            }
            removeAttribute(t, e, n) {
                this.delegate.removeAttribute(t, e, n)
            }
            addClass(t, e) {
                this.delegate.addClass(t, e)
            }
            removeClass(t, e) {
                this.delegate.removeClass(t, e)
            }
            setStyle(t, e, n, s) {
                this.delegate.setStyle(t, e, n, s)
            }
            removeStyle(t, e, n) {
                this.delegate.removeStyle(t, e, n)
            }
            setProperty(t, e, n) {
                e.charAt(0) == c_ && e == h_ ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
            }
            setValue(t, e) {
                this.delegate.setValue(t, e)
            }
            listen(t, e, n) {
                return this.delegate.listen(t, e, n)
            }
            disableAnimations(t, e) {
                this.engine.disableAnimations(t, e)
            }
        }
        class p_ extends d_ {
            constructor(t, e, n, s) {
                super(e, n, s),
                this.factory = t,
                this.namespaceId = e
            }
            setProperty(t, e, n) {
                e.charAt(0) == c_ ? "." == e.charAt(1) && e == h_ ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
            }
            listen(t, e, n) {
                if (e.charAt(0) == c_) {
                    const s = function(t) {
                        switch (t) {
                        case "body":
                            return document.body;
                        case "document":
                            return document;
                        case "window":
                            return window;
                        default:
                            return t
                        }
                    }(t);
                    let i = e.substr(1)
                      , r = "";
                    return i.charAt(0) != c_ && ([i,r] = function(t) {
                        const e = t.indexOf(".");
                        return [t.substring(0, e), t.substr(e + 1)]
                    }(i)),
                    this.engine.listen(this.namespaceId, s, i, r, t=>{
                        this.factory.scheduleListenerCallback(t._data || -1, n, t)
                    }
                    )
                }
                return this.delegate.listen(t, e, n)
            }
        }
        let m_ = (()=>{
            class t extends Lg {
                constructor(t, e, n) {
                    super(t.body, e, n)
                }
                ngOnDestroy() {
                    this.flush()
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(zl),Jn(uf),Jn(ag))
            }
            ,
            t.\u0275prov = ht({
                token: t,
                factory: t.\u0275fac
            }),
            t
        }
        )();
        const f_ = new Mn("AnimationModuleType")
          , g_ = [{
            provide: im,
            useClass: r_
        }, {
            provide: ag,
            useFactory: function() {
                return new lg
            }
        }, {
            provide: Lg,
            useClass: m_
        }, {
            provide: Mo,
            useFactory: function(t, e, n) {
                return new u_(t,e,n)
            },
            deps: [zc, Lg, yl]
        }]
          , __ = [{
            provide: uf,
            useFactory: function() {
                return "function" == typeof i_() ? new s_ : new e_
            }
        }, {
            provide: f_,
            useValue: "BrowserAnimations"
        }, ...g_]
          , y_ = [{
            provide: uf,
            useClass: hf
        }, {
            provide: f_,
            useValue: "NoopAnimations"
        }, ...g_];
        let v_ = (()=>{
            class t {
                static withConfig(e) {
                    return {
                        ngModule: t,
                        providers: e.disableAnimations ? y_ : __
                    }
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                providers: __,
                imports: [sh]
            }),
            t
        }
        )()
          , b_ = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[yp]]
            }),
            t
        }
        )();
        const w_ = new Ho("12.0.6")
          , A_ = new Ho("12.0.6")
          , S_ = new Mn("mat-sanity-checks",{
            providedIn: "root",
            factory: function() {
                return !0
            }
        });
        let O_, C_ = (()=>{
            class t {
                constructor(t, e, n) {
                    this._hasDoneGlobalChecks = !1,
                    this._document = n,
                    t._applyBodyHighContrastModeCssClasses(),
                    this._sanityChecks = e,
                    this._hasDoneGlobalChecks || (this._checkDoctypeIsDefined(),
                    this._checkThemeIsPresent(),
                    this._checkCdkVersionMatch(),
                    this._hasDoneGlobalChecks = !0)
                }
                _getWindow() {
                    const t = this._document.defaultView || window;
                    return "object" == typeof t && t ? t : null
                }
                _checksAreEnabled() {
                    return Tl() && !this._isTestEnv()
                }
                _isTestEnv() {
                    const t = this._getWindow();
                    return t && (t.__karma__ || t.jasmine)
                }
                _checkDoctypeIsDefined() {
                    this._checksAreEnabled() && (!0 === this._sanityChecks || this._sanityChecks.doctype) && !this._document.doctype && console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")
                }
                _checkThemeIsPresent() {
                    if (!this._checksAreEnabled() || !1 === this._sanityChecks || !this._sanityChecks.theme || !this._document.body || "function" != typeof getComputedStyle)
                        return;
                    const t = this._document.createElement("div");
                    t.classList.add("mat-theme-loaded-marker"),
                    this._document.body.appendChild(t);
                    const e = getComputedStyle(t);
                    e && "none" !== e.display && console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),
                    this._document.body.removeChild(t)
                }
                _checkCdkVersionMatch() {
                    this._checksAreEnabled() && (!0 === this._sanityChecks || this._sanityChecks.version) && A_.full !== w_.full && console.warn("The Angular Material version (" + A_.full + ") does not match the Angular CDK version (" + w_.full + ").\nPlease ensure the versions of these two packages exactly match.")
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(Jn(km),Jn(S_, 8),Jn(zl))
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[mp], mp]
            }),
            t
        }
        )();
        try {
            O_ = "undefined" != typeof Intl
        } catch (D_) {
            O_ = !1
        }
        let k_ = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[b_, C_], C_]
            }),
            t
        }
        )()
          , E_ = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t
            }),
            t.\u0275inj = ut({
                imports: [[C_], C_]
            }),
            t
        }
        )()
          , x_ = (()=>{
            class t {
            }
            return t.\u0275fac = function(e) {
                return new (e || t)
            }
            ,
            t.\u0275mod = zt({
                type: t,
                bootstrap: [jd]
            }),
            t.\u0275inj = ut({
                providers: [Yh],
                imports: [[Zh, sh, E_, k_, v_, Gd, np, sp, Qd, um, dm, Pm, Im, Rm, Nm, Wm, Lm, jm, Bm, Hm, Zu]]
            }),
            t
        }
        )();
        (function() {
            if (Fl)
                throw new Error("Cannot enable prod mode after platform setup.");
            Vl = !1
        }
        )(),
        eh().bootstrapModule(x_).catch(t=>console.error(t))
    }
}, t=>{
    "use strict";
    t(t.s = 582)
}
]);
