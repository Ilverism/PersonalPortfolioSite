var AM=Object.defineProperty,DM=Object.defineProperties;var IM=Object.getOwnPropertyDescriptors;var Da=Object.getOwnPropertySymbols;var vm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable;var gm=(n,e,t)=>e in n?AM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pe=(n,e)=>{for(var t in e||={})vm.call(e,t)&&gm(n,t,e[t]);if(Da)for(var t of Da(e))ym.call(e,t)&&gm(n,t,e[t]);return n},bt=(n,e)=>DM(n,IM(e));var _m=(n,e)=>{var t={};for(var i in n)vm.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Da)for(var i of Da(n))e.indexOf(i)<0&&ym.call(n,i)&&(t[i]=n[i]);return t};var Ia=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var xm=null;var Tu=1,Mm=Symbol("SIGNAL");function st(n){let e=xm;return xm=n,e}var bm={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function RM(n){if(!(Du(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Tu)){if(!n.producerMustRecompute(n)&&!Cu(n)){n.dirty=!1,n.lastCleanEpoch=Tu;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Tu}}function wm(n){return n&&(n.nextProducerIndex=0),st(n)}function Em(n,e){if(st(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Du(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Au(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Cu(n){Ra(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(RM(t),i!==t.version))return!0}return!1}function Sm(n){if(Ra(n),Du(n))for(let e=0;e<n.producerNode.length;e++)Au(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Au(n,e){if(PM(n),Ra(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Au(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Ra(r),r.producerIndexOfThis[i]=e}}function Du(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Ra(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function PM(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function NM(){throw new Error}var LM=NM;function Tm(n){LM=n}function De(n){return typeof n=="function"}function ts(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Pa=ts(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function vo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ct=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(De(i))try{i()}catch(s){e=s instanceof Pa?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Cm(s)}catch(o){e=e??[],o instanceof Pa?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Pa(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Cm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&vo(t,e)}remove(e){let{_finalizers:t}=this;t&&vo(t,e),e instanceof n&&e._removeParent(this)}};Ct.EMPTY=(()=>{let n=new Ct;return n.closed=!0,n})();var Iu=Ct.EMPTY;function Na(n){return n instanceof Ct||n&&"closed"in n&&De(n.remove)&&De(n.add)&&De(n.unsubscribe)}function Cm(n){De(n)?n():n.unsubscribe()}var Ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ns={setTimeout(n,e,...t){let{delegate:i}=ns;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ns;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function La(n){ns.setTimeout(()=>{let{onUnhandledError:e}=Ln;if(e)e(n);else throw n})}function yo(){}var Am=Ru("C",void 0,void 0);function Dm(n){return Ru("E",void 0,n)}function Im(n){return Ru("N",n,void 0)}function Ru(n,e,t){return{kind:n,value:e,error:t}}var hr=null;function is(n){if(Ln.useDeprecatedSynchronousErrorHandling){let e=!hr;if(e&&(hr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=hr;if(hr=null,t)throw i}}else n()}function Rm(n){Ln.useDeprecatedSynchronousErrorHandling&&hr&&(hr.errorThrown=!0,hr.error=n)}var fr=class extends Ct{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Na(e)&&e.add(this)):this.destination=UM}static create(e,t,i){return new rs(e,t,i)}next(e){this.isStopped?Nu(Im(e),this):this._next(e)}error(e){this.isStopped?Nu(Dm(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Nu(Am,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},OM=Function.prototype.bind;function Pu(n,e){return OM.call(n,e)}var Lu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Oa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Oa(i)}else Oa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Oa(t)}}},rs=class extends fr{constructor(e,t,i){super();let r;if(De(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Ln.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Pu(e.next,s),error:e.error&&Pu(e.error,s),complete:e.complete&&Pu(e.complete,s)}):r=e}this.destination=new Lu(r)}};function Oa(n){Ln.useDeprecatedSynchronousErrorHandling?Rm(n):La(n)}function FM(n){throw n}function Nu(n,e){let{onStoppedNotification:t}=Ln;t&&ns.setTimeout(()=>t(n,e))}var UM={closed:!0,next:yo,error:FM,complete:yo};var ss=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dn(n){return n}function Ou(...n){return Fu(n)}function Fu(n){return n.length===0?dn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ct=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=BM(t)?t:new rs(t,i,r);return is(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Pm(i),new i((r,s)=>{let o=new rs({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ss](){return this}pipe(...t){return Fu(t)(this)}toPromise(t){return t=Pm(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Pm(n){var e;return(e=n??Ln.Promise)!==null&&e!==void 0?e:Promise}function kM(n){return n&&De(n.next)&&De(n.error)&&De(n.complete)}function BM(n){return n&&n instanceof fr||kM(n)&&Na(n)}function Uu(n){return De(n?.lift)}function Qe(n){return e=>{if(Uu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function et(n,e,t,i,r){return new ku(n,e,t,i,r)}var ku=class extends fr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function os(){return Qe((n,e)=>{let t=null;n._refCount++;let i=et(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var as=class extends ct{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Uu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ct;let t=this.getSubject();e.add(this.source.subscribe(et(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ct.EMPTY)}return e}refCount(){return os()(this)}};var Nm=ts(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Xt=(()=>{class n extends ct{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Fa(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Nm}next(t){is(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){is(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){is(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Iu:(this.currentObservers=null,s.push(t),new Ct(()=>{this.currentObservers=null,vo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ct;return t.source=this,t}}return n.create=(e,t)=>new Fa(e,t),n})(),Fa=class extends Xt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Iu}};var Bt=class extends Xt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var hn=new ct(n=>n.complete());function Lm(n){return n&&De(n.schedule)}function Om(n){return n[n.length-1]}function Fm(n){return De(Om(n))?n.pop():void 0}function Ni(n){return Lm(Om(n))?n.pop():void 0}function km(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Um(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function pr(n){return this instanceof pr?(this.v=n,this):new pr(n)}function Bm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,y){s.push([h,m,g,y])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof pr?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Vm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Um=="function"?Um(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ua=n=>n&&typeof n.length=="number"&&typeof n!="function";function ka(n){return De(n?.then)}function Ba(n){return De(n[ss])}function Va(n){return Symbol.asyncIterator&&De(n?.[Symbol.asyncIterator])}function za(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function VM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ha=VM();function Ga(n){return De(n?.[Ha])}function Wa(n){return Bm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield pr(t.read());if(r)return yield pr(void 0);yield yield pr(i)}}finally{t.releaseLock()}})}function ja(n){return De(n?.getReader)}function Nt(n){if(n instanceof ct)return n;if(n!=null){if(Ba(n))return zM(n);if(Ua(n))return HM(n);if(ka(n))return GM(n);if(Va(n))return zm(n);if(Ga(n))return WM(n);if(ja(n))return jM(n)}throw za(n)}function zM(n){return new ct(e=>{let t=n[ss]();if(De(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function HM(n){return new ct(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function GM(n){return new ct(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,La)})}function WM(n){return new ct(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function zm(n){return new ct(e=>{$M(n,e).catch(t=>e.error(t))})}function jM(n){return zm(Wa(n))}function $M(n,e){var t,i,r,s;return km(this,void 0,void 0,function*(){try{for(t=Vm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function tn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function $a(n,e=0){return Qe((t,i)=>{t.subscribe(et(i,r=>tn(i,n,()=>i.next(r),e),()=>tn(i,n,()=>i.complete(),e),r=>tn(i,n,()=>i.error(r),e)))})}function qa(n,e=0){return Qe((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Hm(n,e){return Nt(n).pipe(qa(e),$a(e))}function Gm(n,e){return Nt(n).pipe(qa(e),$a(e))}function Wm(n,e){return new ct(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function jm(n,e){return new ct(t=>{let i;return tn(t,e,()=>{i=n[Ha](),tn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>De(i?.return)&&i.return()})}function Xa(n,e){if(!n)throw new Error("Iterable cannot be null");return new ct(t=>{tn(t,e,()=>{let i=n[Symbol.asyncIterator]();tn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function $m(n,e){return Xa(Wa(n),e)}function qm(n,e){if(n!=null){if(Ba(n))return Hm(n,e);if(Ua(n))return Wm(n,e);if(ka(n))return Gm(n,e);if(Va(n))return Xa(n,e);if(Ga(n))return jm(n,e);if(ja(n))return $m(n,e)}throw za(n)}function St(n,e){return e?qm(n,e):Nt(n)}function Te(...n){let e=Ni(n);return St(n,e)}function cs(n,e){let t=De(n)?n:()=>n,i=r=>r.error(t());return new ct(e?r=>e.schedule(i,0,r):i)}function Bu(n){return!!n&&(n instanceof ct||De(n.lift)&&De(n.subscribe))}var fi=ts(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Ze(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:qM}=Array;function XM(n,e){return qM(e)?n(...e):n(e)}function Xm(n){return Ze(e=>XM(n,e))}var{isArray:YM}=Array,{getPrototypeOf:ZM,prototype:JM,keys:KM}=Object;function Ym(n){if(n.length===1){let e=n[0];if(YM(e))return{args:e,keys:null};if(QM(e)){let t=KM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function QM(n){return n&&typeof n=="object"&&ZM(n)===JM}function Zm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Ya(...n){let e=Ni(n),t=Fm(n),{args:i,keys:r}=Ym(n);if(i.length===0)return St([],e);let s=new ct(eb(i,e,r?o=>Zm(r,o):dn));return t?s.pipe(Xm(t)):s}function eb(n,e,t=dn){return i=>{Jm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Jm(e,()=>{let l=St(n[c],e),u=!1;l.subscribe(et(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Jm(n,e,t){n?tn(t,n,e):e()}function Km(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let p=!1;Nt(t(y,u++)).subscribe(et(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?tn(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(et(e,m,()=>{d=!0,h()})),()=>{a?.()}}function At(n,e,t=1/0){return De(e)?At((i,r)=>Ze((s,o)=>e(i,s,r,o))(Nt(n(i,r))),t):(typeof e=="number"&&(t=e),Qe((i,r)=>Km(i,r,n,t)))}function Vu(n=1/0){return At(dn,n)}function Qm(){return Vu(1)}function ls(...n){return Qm()(St(n,Ni(n)))}function Za(n){return new ct(e=>{Nt(n()).subscribe(e)})}function Mn(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Li(n){return Qe((e,t)=>{let i=null,r=!1,s;i=e.subscribe(et(t,void 0,void 0,o=>{s=Nt(n(o,Li(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function eg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(et(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function mr(n,e){return De(e)?At(n,e,1):At(n,1)}function Oi(n){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function pi(n){return n<=0?()=>hn:Qe((e,t)=>{let i=0;e.subscribe(et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function zu(n){return Ze(()=>n)}function Ja(n=tb){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function tb(){return new fi}function us(n){return Qe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function On(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Mn((r,s)=>n(r,s,i)):dn,pi(1),t?Oi(e):Ja(()=>new fi))}function ds(n){return n<=0?()=>hn:Qe((e,t)=>{let i=[];e.subscribe(et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Hu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Mn((r,s)=>n(r,s,i)):dn,ds(1),t?Oi(e):Ja(()=>new fi))}function Gu(n,e){return Qe(eg(n,e,arguments.length>=2,!0))}function Wu(...n){let e=Ni(n);return Qe((t,i)=>{(e?ls(n,t,e):ls(n,t)).subscribe(i)})}function bn(n,e){return Qe((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(et(i,c=>{r?.unsubscribe();let l=0,u=s++;Nt(n(c,u)).subscribe(r=et(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function ju(n){return Qe((e,t)=>{Nt(n).subscribe(et(t,()=>t.complete(),yo)),!t.closed&&e.subscribe(t)})}function Dt(n,e,t){let i=De(n)||e||t?{next:n,error:e,complete:t}:n;return i?Qe((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(et(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):dn}var nb="https://g.co/ng/security#xss",Ee=class extends Error{constructor(e,t){super(Cc(e,t)),this.code=e}};function Cc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Ac(n){return{toString:n}.toString()}var gr=globalThis;function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("Could not find renamed property on target object.")}function Yt(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(Yt).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function ad(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var ib=ut({__forward_ref__:ut});function Og(n){return n.__forward_ref__=Og,n.toString=function(){return Yt(this())},n}function En(n){return Fg(n)?n():n}function Fg(n){return typeof n=="function"&&n.hasOwnProperty(ib)&&n.__forward_ref__===Og}function Re(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Dc(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ic(n){return tg(n,kg)||tg(n,Bg)}function Ug(n){return Ic(n)!==null}function tg(n,e){return n.hasOwnProperty(e)?n[e]:null}function rb(n){let e=n&&(n[kg]||n[Bg]);return e||null}function ng(n){return n&&(n.hasOwnProperty(ig)||n.hasOwnProperty(sb))?n[ig]:null}var kg=ut({\u0275prov:ut}),ig=ut({\u0275inj:ut}),Bg=ut({ngInjectableDef:ut}),sb=ut({ngInjectorDef:ut}),We=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Re({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Vg(n){return n&&!!n.\u0275providers}var ob=ut({\u0275cmp:ut}),ab=ut({\u0275dir:ut}),cb=ut({\u0275pipe:ut}),lb=ut({\u0275mod:ut}),lc=ut({\u0275fac:ut}),_o=ut({__NG_ELEMENT_ID__:ut}),rg=ut({__NG_ENV_ID__:ut});function zg(n){return typeof n=="string"?n:n==null?"":String(n)}function ub(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():zg(n)}function db(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ee(-200,n)}function Kd(n,e){throw new Ee(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),cd;function Hg(){return cd}function wn(n){let e=cd;return cd=n,e}function Gg(n,e,t){let i=Ic(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;Kd(n,"Injector")}var hb={},xo=hb,fb="__NG_DI_FLAG__",uc="ngTempTokenPath",pb="ngTokenPath",mb=/\n/gm,gb="\u0275",sg="__source",ms;function vb(){return ms}function Fi(n){let e=ms;return ms=n,e}function yb(n,e=$e.Default){if(ms===void 0)throw new Ee(-203,!1);return ms===null?Gg(n,void 0,e):ms.get(n,e&$e.Optional?null:void 0,e)}function tt(n,e=$e.Default){return(Hg()||yb)(En(n),e)}function se(n,e=$e.Default){return tt(n,Rc(e))}function Rc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function ld(n){let e=[];for(let t=0;t<n.length;t++){let i=En(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ee(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],c=_b(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(tt(r,s))}else e.push(tt(i))}return e}function _b(n){return n[fb]}function xb(n,e,t,i){let r=n[uc];throw e[sg]&&r.unshift(e[sg]),n.message=Mb(`
`+n.message,r,t,i),n[pb]=r,n[uc]=null,n}function Mb(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==gb?n.slice(2):n;let r=Yt(e);if(Array.isArray(e))r=e.map(Yt).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):Yt(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(mb,`
  `)}`}function vs(n,e){let t=n.hasOwnProperty(lc);return t?n[lc]:null}function bb(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function wb(n){return n.flat(Number.POSITIVE_INFINITY)}function Qd(n,e){n.forEach(t=>Array.isArray(t)?Qd(t,e):e(t))}function Wg(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function dc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Eb(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function eh(n,e,t){let i=No(n,e);return i>=0?n[i|1]=t:(i=~i,Eb(n,i,e,t)),i}function $u(n,e){let t=No(n,e);if(t>=0)return n[t|1]}function No(n,e){return Sb(n,e,1)}function Sb(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Mo={},nn=[],yr=new We(""),jg=new We("",-1),$g=new We(""),hc=class{get(e,t=xo){if(t===xo){let i=new Error(`NullInjectorError: No provider for ${Yt(e)}!`);throw i.name="NullInjectorError",i}return t}},qg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(qg||{}),ni=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ni||{}),Bi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Bi||{});function Tb(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function ud(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Ab(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Cb(n){return n===3||n===4||n===6}function Ab(n){return n.charCodeAt(0)===64}function th(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?og(n,t,r,null,e[++i]):og(n,t,r,null,null))}}return n}function og(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Xg="ng-template";function Db(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Tb(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(nh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function nh(n){return n.type===4&&n.value!==Xg}function Ib(n,e,t){let i=n.type===4&&!t?Xg:n.value;return e===i}function Rb(n,e,t){let i=4,r=n.attrs,s=r!==null?Lb(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Fn(i)&&!Fn(c))return!1;if(o&&Fn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Ib(n,c,t)||c===""&&e.length===1){if(Fn(i))return!1;o=!0}}else if(i&8){if(r===null||!Db(n,r,c,t)){if(Fn(i))return!1;o=!0}}else{let l=e[++a],u=Pb(c,r,nh(n),t);if(u===-1){if(Fn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Fn(i))return!1;o=!0}}}}return Fn(i)||o}function Fn(n){return(n&1)===0}function Pb(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Ob(e,n)}function Nb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Rb(n,e[i],t))return!0;return!1}function Lb(n){for(let e=0;e<n.length;e++){let t=n[e];if(Cb(t))return e}return n.length}function Ob(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function ag(n,e){return n?":not("+e.trim()+")":e}function Fb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Fn(o)&&(e+=ag(s,r),r=""),i=o,s=s||!Fn(i);t++}return r!==""&&(e+=ag(s,r)),e}function Ub(n){return n.map(Fb).join(",")}function kb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Fn(r))break;r=s}i++}return{attrs:e,classes:t}}function zi(n){return Ac(()=>{let e=Qg(n),t=bt(pe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===qg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ni.Emulated,styles:n.styles||nn,_:null,schemas:n.schemas||null,tView:null,id:""});ev(t);let i=n.dependencies;return t.directiveDefs=lg(i,!1),t.pipeDefs=lg(i,!0),t.id=zb(t),t})}function Bb(n){return _r(n)||Yg(n)}function Vb(n){return n!==null}function Pc(n){return Ac(()=>({type:n.type,bootstrap:n.bootstrap||nn,declarations:n.declarations||nn,imports:n.imports||nn,exports:n.exports||nn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function cg(n,e){if(n==null)return Mo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Bi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Bi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Nc(n){return Ac(()=>{let e=Qg(n);return ev(e),e})}function _r(n){return n[ob]||null}function Yg(n){return n[ab]||null}function Zg(n){return n[cb]||null}function Jg(n){let e=_r(n)||Yg(n)||Zg(n);return e!==null?e.standalone:!1}function Kg(n,e){let t=n[lb]||null;if(!t&&e===!0)throw new Error(`Type ${Yt(n)} does not have '\u0275mod' property.`);return t}function Qg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Mo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||nn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:cg(n.inputs,e),outputs:cg(n.outputs),debugInfo:null}}function ev(n){n.features?.forEach(e=>e(n))}function lg(n,e){if(!n)return null;let t=e?Zg:Bb;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Vb)}function zb(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Sr(n){return{\u0275providers:n}}function Hb(...n){return{\u0275providers:tv(!0,n),\u0275fromNgModule:!0}}function tv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Qd(e,o=>{let a=o;dd(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&nv(r,s),t}function nv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];ih(r,s=>{e(s,i)})}}function dd(n,e,t,i){if(n=En(n),!n)return!1;let r=null,s=ng(n),o=!s&&_r(n);if(!s&&!o){let c=n.ngModule;if(s=ng(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)dd(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Qd(s.imports,u=>{dd(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&nv(l,e)}if(!a){let l=vs(r)||(()=>new r);e({provide:r,useFactory:l,deps:nn},r),e({provide:$g,useValue:r,multi:!0},r),e({provide:yr,useValue:()=>tt(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;ih(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function ih(n,e){for(let t of n)Vg(t)&&(t=t.\u0275providers),Array.isArray(t)?ih(t,e):e(t)}var Gb=ut({provide:String,useValue:ut});function iv(n){return n!==null&&typeof n=="object"&&Gb in n}function Wb(n){return!!(n&&n.useExisting)}function jb(n){return!!(n&&n.useFactory)}function hd(n){return typeof n=="function"}var Lc=new We(""),ic={},$b={},qu;function rh(){return qu===void 0&&(qu=new hc),qu}var Sn=class{},bo=class extends Sn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,pd(e,o=>this.processProvider(o)),this.records.set(jg,hs(void 0,this)),r.has("environment")&&this.records.set(Sn,hs(void 0,this));let s=this.records.get(Lc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get($g,nn,$e.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=st(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),st(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Fi(this),i=wn(void 0),r;try{return e()}finally{Fi(t),wn(i)}}get(e,t=xo,i=$e.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(rg))return e[rg](this);i=Rc(i);let r,s=Fi(this),o=wn(void 0);try{if(!(i&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Kb(e)&&Ic(e);l&&this.injectableDefInScope(l)?c=hs(fd(e),ic):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&$e.Self?rh():this.parent;return t=i&$e.Optional&&t===xo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[uc]=a[uc]||[]).unshift(Yt(e)),s)throw a;return xb(a,e,"R3InjectorError",this.source)}else throw a}finally{wn(o),Fi(s)}}resolveInjectorInitializers(){let e=st(null),t=Fi(this),i=wn(void 0),r;try{let s=this.get(yr,nn,$e.Self);for(let o of s)o()}finally{Fi(t),wn(i),st(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Yt(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ee(205,!1)}processProvider(e){e=En(e);let t=hd(e)?e:En(e&&e.provide),i=Xb(e);if(!hd(e)&&e.multi===!0){let r=this.records.get(t);r||(r=hs(void 0,ic,!0),r.factory=()=>ld(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=st(null);try{return t.value===ic&&(t.value=$b,t.value=t.factory()),typeof t.value=="object"&&t.value&&Jb(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{st(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=En(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function fd(n){let e=Ic(n),t=e!==null?e.factory:vs(n);if(t!==null)return t;if(n instanceof We)throw new Ee(204,!1);if(n instanceof Function)return qb(n);throw new Ee(204,!1)}function qb(n){if(n.length>0)throw new Ee(204,!1);let t=rb(n);return t!==null?()=>t.factory(n):()=>new n}function Xb(n){if(iv(n))return hs(void 0,n.useValue);{let e=Yb(n);return hs(e,ic)}}function Yb(n,e,t){let i;if(hd(n)){let r=En(n);return vs(r)||fd(r)}else if(iv(n))i=()=>En(n.useValue);else if(jb(n))i=()=>n.useFactory(...ld(n.deps||[]));else if(Wb(n))i=()=>tt(En(n.useExisting));else{let r=En(n&&(n.useClass||n.provide));if(Zb(n))i=()=>new r(...ld(n.deps));else return vs(r)||fd(r)}return i}function hs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Zb(n){return!!n.deps}function Jb(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Kb(n){return typeof n=="function"||typeof n=="object"&&n instanceof We}function pd(n,e){for(let t of n)Array.isArray(t)?pd(t,e):t&&Vg(t)?pd(t.\u0275providers,e):e(t)}function Hi(n,e){n instanceof bo&&n.assertNotDestroyed();let t,i=Fi(n),r=wn(void 0);try{return e()}finally{Fi(i),wn(r)}}function Qb(){return Hg()!==void 0||vb()!=null}function ew(n){return typeof n=="function"}var fn=0,Be=1,be=2,Lt=3,kn=4,zn=5,Bn=6,wo=7,mi=8,ys=9,ii=10,yt=11,Eo=12,ug=13,Lo=14,Tn=15,Oo=16,fs=17,gi=18,Oc=19,rv=20,Ui=21,Xu=22,xr=23,pn=25,sv=1,So=6,vi=7,fc=8,_s=9,sn=10,sh=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(sh||{});function ki(n){return Array.isArray(n)&&typeof n[sv]=="object"}function ri(n){return Array.isArray(n)&&n[sv]===!0}function ov(n){return(n.flags&4)!==0}function Fo(n){return n.componentOffset>-1}function oh(n){return(n.flags&1)===1}function Uo(n){return!!n.template}function av(n){return(n[be]&512)!==0}var md=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function cv(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Fc(){return lv}function lv(n){return n.type.prototype.ngOnChanges&&(n.setInput=nw),tw}Fc.ngInherit=!0;function tw(){let n=dv(this),e=n?.current;if(e){let t=n.previous;if(t===Mo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function nw(n,e,t,i,r){let s=this.declaredInputs[i],o=dv(n)||iw(n,{previous:Mo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new md(l&&l.currentValue,t,c===Mo),cv(n,e,r,t)}var uv="__ngSimpleChanges__";function dv(n){return n[uv]||null}function iw(n,e){return n[uv]=e}var dg=null;var ei=function(n,e,t){dg?.(n,e,t)},rw="svg",sw="math",ow=!1;function aw(){return ow}function Vn(n){for(;Array.isArray(n);)n=n[fn];return n}function hv(n,e){return Vn(e[n])}function Cn(n,e){return Vn(e[n.index])}function fv(n,e){return n.data[e]}function Tr(n,e){let t=e[n];return ki(t)?t:t[fn]}function cw(n){return(n[be]&4)===4}function ah(n){return(n[be]&128)===128}function lw(n){return ri(n[Lt])}function pc(n,e){return e==null?null:n[e]}function pv(n){n[fs]=0}function uw(n){n[be]&1024||(n[be]|=1024,ah(n)&&To(n))}function ch(n){return!!(n[be]&9216||n[xr]?.dirty)}function gd(n){n[ii].changeDetectionScheduler?.notify(1),ch(n)?To(n):n[be]&64&&(aw()?(n[be]|=1024,To(n)):n[ii].changeDetectionScheduler?.notify())}function To(n){n[ii].changeDetectionScheduler?.notify();let e=Co(n);for(;e!==null&&!(e[be]&8192||(e[be]|=8192,!ah(e)));)e=Co(e)}function mv(n,e){if((n[be]&256)===256)throw new Ee(911,!1);n[Ui]===null&&(n[Ui]=[]),n[Ui].push(e)}function dw(n,e){if(n[Ui]===null)return;let t=n[Ui].indexOf(e);t!==-1&&n[Ui].splice(t,1)}function Co(n){let e=n[Lt];return ri(e)?e[Lt]:e}var nt={lFrame:Ev(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function hw(){return nt.lFrame.elementDepthCount}function fw(){nt.lFrame.elementDepthCount++}function pw(){nt.lFrame.elementDepthCount--}function gv(){return nt.bindingsEnabled}function ko(){return nt.skipHydrationRootTNode!==null}function mw(n){return nt.skipHydrationRootTNode===n}function gw(n){nt.skipHydrationRootTNode=n}function vw(){nt.skipHydrationRootTNode=null}function _t(){return nt.lFrame.lView}function Hn(){return nt.lFrame.tView}function si(){let n=vv();for(;n!==null&&n.type===64;)n=n.parent;return n}function vv(){return nt.lFrame.currentTNode}function yw(){let n=nt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Bo(n,e){let t=nt.lFrame;t.currentTNode=n,t.isParent=e}function yv(){return nt.lFrame.isParent}function _w(){nt.lFrame.isParent=!1}function xw(n){return nt.lFrame.bindingIndex=n}function _v(){return nt.lFrame.bindingIndex++}function xv(n){let e=nt.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Mw(){return nt.lFrame.inI18n}function bw(n,e){let t=nt.lFrame;t.bindingIndex=t.bindingRootIndex=n,vd(e)}function ww(){return nt.lFrame.currentDirectiveIndex}function vd(n){nt.lFrame.currentDirectiveIndex=n}function Ew(n){let e=nt.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Mv(){return nt.lFrame.currentQueryIndex}function lh(n){nt.lFrame.currentQueryIndex=n}function Sw(n){let e=n[Be];return e.type===2?e.declTNode:e.type===1?n[zn]:null}function bv(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=Sw(s),r===null||(s=s[Lo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=nt.lFrame=wv();return i.currentTNode=e,i.lView=n,!0}function uh(n){let e=wv(),t=n[Be];nt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function wv(){let n=nt.lFrame,e=n===null?null:n.child;return e===null?Ev(n):e}function Ev(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Sv(){let n=nt.lFrame;return nt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Tv=Sv;function dh(){let n=Sv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Cr(){return nt.lFrame.selectedIndex}function Mr(n){nt.lFrame.selectedIndex=n}function Tw(){let n=nt.lFrame;return fv(n.tView,n.selectedIndex)}function Cv(){return nt.lFrame.currentNamespace}var Av=!0;function hh(){return Av}function oi(n){Av=n}function Cw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=lv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function fh(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function rc(n,e,t){Dv(n,e,3,t)}function sc(n,e,t,i){(n[be]&3)===t&&Dv(n,e,t,i)}function Yu(n,e){let t=n[be];(t&3)===e&&(t&=16383,t+=1,n[be]=t)}function Dv(n,e,t,i){let r=i!==void 0?n[fs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[fs]+=65536),(a<s||s==-1)&&(Aw(n,t,e,c),n[fs]=(n[fs]&4294901760)+c+2),c++}function hg(n,e){ei(4,n,e);let t=st(null);try{e.call(n)}finally{st(t),ei(5,n,e)}}function Aw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[be]>>14<n[fs]>>16&&(n[be]&3)===e&&(n[be]+=16384,hg(a,s)):hg(a,s)}var gs=-1,Ao=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Dw(n){return n instanceof Ao}function Iw(n){return(n.flags&8)!==0}function Rw(n){return(n.flags&16)!==0}function Iv(n){return n!==gs}function mc(n){return n&32767}function Pw(n){return n>>16}function gc(n,e){let t=Pw(n),i=e;for(;t>0;)i=i[Lo],t--;return i}var yd=!0;function fg(n){let e=yd;return yd=n,e}var Nw=256,Rv=Nw-1,Pv=5,Lw=0,ti={};function Ow(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(_o)&&(i=t[_o]),i==null&&(i=t[_o]=Lw++);let r=i&Rv,s=1<<r;e.data[n+(r>>Pv)]|=s}function Nv(n,e){let t=Lv(n,e);if(t!==-1)return t;let i=e[Be];i.firstCreatePass&&(n.injectorIndex=e.length,Zu(i.data,n),Zu(e,null),Zu(i.blueprint,null));let r=ph(n,e),s=n.injectorIndex;if(Iv(r)){let o=mc(r),a=gc(r,e),c=a[Be].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Zu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Lv(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function ph(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Bv(r),i===null)return gs;if(t++,r=r[Lo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return gs}function Fw(n,e,t){Ow(n,e,t)}function Ov(n,e,t){if(t&$e.Optional||n!==void 0)return n;Kd(e,"NodeInjector")}function Fv(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),!(t&($e.Self|$e.Host))){let r=n[ys],s=wn(void 0);try{return r?r.get(e,i,t&$e.Optional):Gg(e,i,t&$e.Optional)}finally{wn(s)}}return Ov(i,e,t)}function Uv(n,e,t,i=$e.Default,r){if(n!==null){if(e[be]&2048&&!(i&$e.Self)){let o=Vw(n,e,t,i,ti);if(o!==ti)return o}let s=kv(n,e,t,i,ti);if(s!==ti)return s}return Fv(e,t,i,r)}function kv(n,e,t,i,r){let s=kw(t);if(typeof s=="function"){if(!bv(e,n,i))return i&$e.Host?Ov(r,t,i):Fv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))Kd(t);else return o}finally{Tv()}}else if(typeof s=="number"){let o=null,a=Lv(n,e),c=gs,l=i&$e.Host?e[Tn][zn]:null;for((a===-1||i&$e.SkipSelf)&&(c=a===-1?ph(n,e):e[a+8],c===gs||!mg(i,!1)?a=-1:(o=e[Be],a=mc(c),e=gc(c,e)));a!==-1;){let u=e[Be];if(pg(s,a,u.data)){let d=Uw(a,e,t,o,i,l);if(d!==ti)return d}c=e[a+8],c!==gs&&mg(i,e[Be].data[a+8]===l)&&pg(s,a,e)?(o=u,a=mc(c),e=gc(c,e)):a=-1}}return r}function Uw(n,e,t,i,r,s){let o=e[Be],a=o.data[n+8],c=i==null?Fo(a)&&yd:i!=o&&(a.type&3)!==0,l=r&$e.Host&&s===a,u=oc(a,o,t,c,l);return u!==null?xs(e,o,u,a):ti}function oc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&Uo(m)&&m.type===t)return c}return null}function xs(n,e,t,i){let r=n[t],s=e.data;if(Dw(r)){let o=r;o.resolving&&db(ub(s[t]));let a=fg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?wn(o.injectImpl):null,u=bv(n,i,$e.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Cw(t,s[t],e)}finally{l!==null&&wn(l),fg(a),o.resolving=!1,Tv()}}return r}function kw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(_o)?n[_o]:void 0;return typeof e=="number"?e>=0?e&Rv:Bw:e}function pg(n,e,t){let i=1<<n;return!!(t[e+(n>>Pv)]&i)}function mg(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var vr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Uv(this._tNode,this._lView,e,Rc(i),t)}};function Bw(){return new vr(si(),_t())}function mh(n){return Ac(()=>{let e=n.prototype.constructor,t=e[lc]||_d(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[lc]||_d(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function _d(n){return Fg(n)?()=>{let e=_d(En(n));return e&&e()}:vs(n)}function Vw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[be]&2048&&!(o[be]&512);){let a=kv(s,o,t,i|$e.Self,ti);if(a!==ti)return a;let c=s.parent;if(!c){let l=o[rv];if(l){let u=l.get(t,ti,i);if(u!==ti)return u}c=Bv(o),o=o[Lo]}s=c}return r}function Bv(n){let e=n[Be],t=e.type;return t===2?e.declTNode:t===1?n[zn]:null}function gg(n,e=null,t=null,i){let r=Vv(n,e,t,i);return r.resolveInjectorInitializers(),r}function Vv(n,e=null,t=null,i,r=new Set){let s=[t||nn,Hb(n)];return i=i||(typeof n=="object"?void 0:Yt(n)),new bo(s,e||rh(),i||null,r)}var Ar=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return gg({name:""},r,i,"");{let s=i.name??"";return gg({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=xo,e.NULL=new hc,e.\u0275prov=Re({token:e,providedIn:"any",factory:()=>tt(jg)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var zw="ngOriginalError";function Ju(n){return n[zw]}var yi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Ju(e);for(;t&&Ju(t);)t=Ju(t);return t||null}},zv=new We("",{providedIn:"root",factory:()=>se(yi).handleError.bind(void 0)}),Hv=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Hw,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),xd=class extends Hv{constructor(e){super(),this._lView=e}onDestroy(e){return mv(this._lView,e),()=>dw(this._lView,e)}};function Hw(){return new xd(_t())}function Gw(){return ws(si(),_t())}function ws(n,e){return new Dr(Cn(n,e))}var Dr=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Gw;let n=e;return n})();function Ww(n){return n instanceof Dr?n.nativeElement:n}var Md=class extends Xt{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,Qb()&&(this.destroyRef=se(Hv,{optional:!0})??void 0)}emit(e){let t=st(null);try{super.next(e)}finally{st(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Ku(s),r&&(r=Ku(r)),o&&(o=Ku(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ct&&e.add(a),a}};function Ku(n){return e=>{setTimeout(n,void 0,e)}}var rn=Md;function jw(){return this._results[Symbol.iterator]()}var bd=class n{get changes(){return this._changes??=new rn}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=jw)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=wb(e);(this._changesDetected=!bb(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}},$w="ngSkipHydration",qw="ngskiphydration";function Gv(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===qw)return!0}return!1}function Wv(n){return n.hasAttribute($w)}function vc(n){return(n.flags&128)===128}function Xw(n){if(vc(n))return!0;let e=n.parent;for(;e;){if(vc(n)||Gv(e))return!0;e=e.parent}return!1}var wd;function jv(n){wd=n}function Uc(){if(wd!==void 0)return wd;if(typeof document<"u")return document;throw new Ee(210,!1)}var kc=new We("",{providedIn:"root",factory:()=>Yw}),Yw="ng",gh=new We(""),Gn=new We("",{providedIn:"platform",factory:()=>"unknown"});var vh=new We("",{providedIn:"root",factory:()=>Uc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Zw(){let n=new Ir;return se(Gn)==="browser"&&(n.store=Jw(Uc(),se(kc))),n}var Ir=(()=>{let e=class e{constructor(){this.store={},this.onSerializeCallbacks={}}get(i,r){return this.store[i]!==void 0?this.store[i]:r}set(i,r){this.store[i]=r}remove(i){delete this.store[i]}hasKey(i){return this.store.hasOwnProperty(i)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(i,r){this.onSerializeCallbacks[i]=r}toJson(){for(let i in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(i))try{this.store[i]=this.onSerializeCallbacks[i]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}};e.\u0275prov=Re({token:e,providedIn:"root",factory:Zw});let n=e;return n})();function Jw(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var $v="h",qv="b",Ed=function(n){return n.FirstChild="f",n.NextSibling="n",n}(Ed||{}),Kw="e",Qw="t",yh="c",Xv="x",yc="r",eE="i",tE="n",nE="d",iE="__nghData__",Yv=iE,Qu="ngh",rE="nghm",Zv=()=>null;function sE(n,e,t=!1){let i=n.getAttribute(Qu);if(i==null)return null;let[r,s]=i.split("|");if(i=t?s:r,!i)return null;let o=s?`|${s}`:"",a=t?r:o,c={};if(i!==""){let u=e.get(Ir,null,{optional:!0});u!==null&&(c=u.get(Yv,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,Bc(l,0,n.nextSibling)),a?n.setAttribute(Qu,a):n.removeAttribute(Qu),l}function oE(){Zv=sE}function _h(n,e,t=!1){return Zv(n,e,t)}function aE(n){let e=n._lView;return e[Be].type===2?null:(av(e)&&(e=e[pn]),e)}function cE(n){return n.textContent?.replace(/\s/gm,"")}function lE(n){let e=Uc(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(s){let o=cE(s);return o==="ngetn"||o==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function Bc(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function Sd(n,e){return n.segmentHeads?.[e]??null}function uE(n,e){let t=n.data,i=t[Kw]?.[e]??null;return i===null&&t[yh]?.[e]&&(i=xh(n,e)),i}function Jv(n,e){return n.data[yh]?.[e]??null}function xh(n,e){let t=Jv(n,e)??[],i=0;for(let r of t)i+=r[yc]*(r[Xv]??1);return i}function Vc(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[nE];n.disconnectedNodes=t?new Set(t):null}return!!n.disconnectedNodes?.has(e)}var Ka=new We(""),Kv=!1,Qv=new We("",{providedIn:"root",factory:()=>Kv}),dE=new We(""),Qa;function hE(){if(Qa===void 0&&(Qa=null,gr.trustedTypes))try{Qa=gr.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Qa}function fE(n){return hE()?.createScriptURL(n)||n}var Td=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nb})`}};function zc(n){return n instanceof Td?n.changingThisBreaksApplicationSecurity:n}function ey(n){return fE(n[0])}var pE=/^>|^->|<!--|-->|--!>|<!-$/g,mE=/(<|>)/g,gE="\u200B$1\u200B";function vE(n){return n.replace(pE,e=>e.replace(mE,gE))}var ty=new Map,yE=0;function _E(){return yE++}function xE(n){ty.set(n[Oc],n)}function ME(n){ty.delete(n[Oc])}var vg="__ngContext__";function br(n,e){ki(e)?(n[vg]=e[Oc],xE(e)):n[vg]=e}function ny(n){return n.ownerDocument.defaultView}function bE(n){return n.ownerDocument.body}function iy(n){return n instanceof Function?n():n}function ec(n){return(n??se(Ar)).get(Gn)==="browser"}var _i=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(_i||{}),wE;function Mh(n,e){return wE(n,e)}function ps(n,e,t,i,r){if(i!=null){let s,o=!1;ri(i)?s=i:ki(i)&&(o=!0,i=i[fn]);let a=Vn(i);n===0&&t!==null?r==null?ay(e,t,a):_c(e,t,a,r||null,!0):n===1&&t!==null?_c(e,t,a,r||null,!0):n===2?Th(e,a,o):n===3&&e.destroyNode(a),s!=null&&VE(e,n,s,t,r)}}function bh(n,e){return n.createText(e)}function EE(n,e,t){n.setValue(e,t)}function wh(n,e){return n.createComment(vE(e))}function Hc(n,e,t){return n.createElement(e,t)}function SE(n,e){ry(n,e),e[fn]=null,e[zn]=null}function TE(n,e,t,i,r,s){i[fn]=r,i[zn]=e,Gc(n,i,t,1,r,s)}function ry(n,e){e[ii].changeDetectionScheduler?.notify(1),Gc(n,e,e[yt],2,null,null)}function CE(n){let e=n[Eo];if(!e)return ed(n[Be],n);for(;e;){let t=null;if(ki(e))t=e[Eo];else{let i=e[sn];i&&(t=i)}if(!t){for(;e&&!e[kn]&&e!==n;)ki(e)&&ed(e[Be],e),e=e[Lt];e===null&&(e=n),ki(e)&&ed(e[Be],e),t=e&&e[kn]}e=t}}function AE(n,e,t,i){let r=sn+i,s=t.length;i>0&&(t[r-1][kn]=e),i<s-sn?(e[kn]=t[r],Wg(t,sn+i,e)):(t.push(e),e[kn]=null),e[Lt]=t;let o=e[Oo];o!==null&&t!==o&&DE(o,e);let a=e[gi];a!==null&&a.insertView(n),gd(e),e[be]|=128}function DE(n,e){let t=n[_s],r=e[Lt][Lt][Tn];e[Tn]!==r&&(n[be]|=sh.HasTransplantedViews),t===null?n[_s]=[e]:t.push(e)}function sy(n,e){let t=n[_s],i=t.indexOf(e);t.splice(i,1)}function Cd(n,e){if(n.length<=sn)return;let t=sn+e,i=n[t];if(i){let r=i[Oo];r!==null&&r!==n&&sy(r,i),e>0&&(n[t-1][kn]=i[kn]);let s=dc(n,sn+e);SE(i[Be],i);let o=s[gi];o!==null&&o.detachView(s[Be]),i[Lt]=null,i[kn]=null,i[be]&=-129}return i}function oy(n,e){if(!(e[be]&256)){let t=e[yt];t.destroyNode&&Gc(n,e,t,3,null,null),CE(e)}}function ed(n,e){if(e[be]&256)return;let t=st(null);try{e[be]&=-129,e[be]|=256,e[xr]&&Sm(e[xr]),RE(n,e),IE(n,e),e[Be].type===1&&e[yt].destroy();let i=e[Oo];if(i!==null&&ri(e[Lt])){i!==e[Lt]&&sy(i,e);let r=e[gi];r!==null&&r.detachView(n)}ME(e)}finally{st(t)}}function IE(n,e){let t=n.cleanup,i=e[wo];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[wo]=null);let r=e[Ui];if(r!==null){e[Ui]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function RE(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Ao)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];ei(4,a,c);try{c.call(a)}finally{ei(5,a,c)}}else{ei(4,r,s);try{s.call(r)}finally{ei(5,r,s)}}}}}function PE(n,e,t){return NE(n,e.parent,t)}function NE(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[fn];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===ni.None||s===ni.Emulated)return null}return Cn(i,t)}}function _c(n,e,t,i,r){n.insertBefore(e,t,i,r)}function ay(n,e,t){n.appendChild(e,t)}function yg(n,e,t,i,r){i!==null?_c(n,e,t,i,r):ay(n,e,t)}function LE(n,e,t,i){n.removeChild(e,t,i)}function Eh(n,e){return n.parentNode(e)}function OE(n,e){return n.nextSibling(e)}function FE(n,e,t){return kE(n,e,t)}function UE(n,e,t){return n.type&40?Cn(n,t):null}var kE=UE,_g;function Sh(n,e,t,i){let r=PE(n,i,e),s=e[yt],o=i.parent||e[zn],a=FE(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)yg(s,r,t[c],a,!1);else yg(s,r,t,a,!1);_g!==void 0&&_g(s,i,e,t,r)}function ac(n,e){if(e!==null){let t=e.type;if(t&3)return Cn(e,n);if(t&4)return Ad(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ac(n,i);{let r=n[e.index];return ri(r)?Ad(-1,r):Vn(r)}}else{if(t&32)return Mh(e,n)()||Vn(n[e.index]);{let i=cy(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Co(n[Tn]);return ac(r,i)}else return ac(n,e.next)}}}return null}function cy(n,e){if(e!==null){let i=n[Tn][zn],r=e.projection;return i.projection[r]}return null}function Ad(n,e){let t=sn+n+1;if(t<e.length){let i=e[t],r=i[Be].firstChild;if(r!==null)return ac(i,r)}return e[vi]}function Th(n,e,t){let i=Eh(n,e);i&&LE(n,i,e,t)}function ly(n){n.textContent=""}function Ch(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&br(Vn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Ch(n,e,t.child,i,r,s,!1),ps(e,n,r,a,s);else if(c&32){let l=Mh(t,i),u;for(;u=l();)ps(e,n,r,u,s);ps(e,n,r,a,s)}else c&16?BE(n,e,i,t,r,s):ps(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Gc(n,e,t,i,r,s){Ch(t,i,n.firstChild,e,r,s,!1)}function BE(n,e,t,i,r,s){let o=t[Tn],c=o[zn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ps(e,n,r,u,s)}else{let l=c,u=o[Lt];vc(i)&&(l.flags|=128),Ch(n,e,l,u,r,s,!0)}}function VE(n,e,t,i,r){let s=t[vi],o=Vn(t);s!==o&&ps(e,n,i,s,r);for(let a=sn;a<t.length;a++){let c=t[a];Gc(c[Be],c,n,e,i,s)}}function zE(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:_i.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=_i.Important),n.setStyle(t,i,r,s))}}function HE(n,e,t){n.setAttribute(e,"style",t)}function uy(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function dy(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&ud(n,e,i),r!==null&&uy(n,e,r),s!==null&&HE(n,e,s)}var Gi={};function An(n=1){hy(Hn(),_t(),Cr()+n,!1)}function hy(n,e,t,i){if(!i)if((e[be]&3)===3){let s=n.preOrderCheckHooks;s!==null&&rc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&sc(e,s,0,t)}Mr(t)}function Rr(n,e=$e.Default){let t=_t();if(t===null)return tt(n,e);let i=si();return Uv(i,t,En(n),e)}function fy(n,e,t,i,r,s){let o=st(null);try{let a=null;r&Bi.SignalBased&&(a=e[i][Mm]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Bi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):cv(e,a,i,s)}finally{st(o)}}function GE(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Mr(~r);else{let s=r,o=t[++i],a=t[++i];bw(o,s);let c=e[s];a(2,c)}}}finally{Mr(-1)}}function Wc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[fn]=r,d[be]=i|4|128|8|64,(l!==null||n&&n[be]&2048)&&(d[be]|=2048),pv(d),d[Lt]=d[Lo]=n,d[mi]=t,d[ii]=o||n&&n[ii],d[yt]=a||n&&n[yt],d[ys]=c||n&&n[ys]||null,d[zn]=s,d[Oc]=_E(),d[Bn]=u,d[rv]=l,d[Tn]=e.type==2?n[Tn]:d,d}function jc(n,e,t,i,r){let s=n.data[e];if(s===null)s=WE(n,e,t,i,r),Mw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=yw();s.injectorIndex=o===null?-1:o.injectorIndex}return Bo(s,!0),s}function WE(n,e,t,i,r){let s=vv(),o=yv(),a=o?s:s&&s.parent,c=n.data[e]=JE(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function py(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function my(n,e,t,i,r){let s=Cr(),o=i&2;try{Mr(-1),o&&e.length>pn&&hy(n,e,pn,!1),ei(o?2:0,r),t(i,r)}finally{Mr(s),ei(o?3:1,r)}}function gy(n,e,t){if(ov(e)){let i=st(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{st(i)}}}function vy(n,e,t){gv()&&(rS(n,e,t,Cn(t,e)),(t.flags&64)===64&&wy(n,e,t))}function yy(n,e,t=Cn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function _y(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Ah(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Ah(n,e,t,i,r,s,o,a,c,l,u){let d=pn+i,h=d+r,m=jE(d,h),g=typeof l=="function"?l():l;return m[Be]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function jE(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Gi);return t}function $E(n,e,t,i){let s=i.get(Qv,Kv)||t===ni.ShadowDom,o=n.selectRootElement(e,s);return qE(o),o}function qE(n){xy(n)}var xy=()=>null;function XE(n){Wv(n)?ly(n):lE(n)}function YE(){xy=XE}function ZE(n,e,t,i){let r=Ty(e);r.push(t),n.firstCreatePass&&Cy(n).push(i,r.length-1)}function JE(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return ko()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function xg(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Bi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Mg(i,t,l,a,c):Mg(i,t,l,a)}return i}function Mg(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function KE(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=xg(0,d.inputs,u,c,m),l=xg(1,d.outputs,u,l,g);let y=c!==null&&o!==null&&!nh(e)?fS(c,u,o):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function QE(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function eS(n,e,t,i,r,s,o,a){let c=Cn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Dh(n,t,u,i,r),Fo(e)&&tS(t,e.index)):e.type&3?(i=QE(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function tS(n,e){let t=Tr(e,n);t[be]&16||(t[be]|=64)}function My(n,e,t,i){if(gv()){let r=i===null?null:{"":-1},s=oS(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&by(n,e,t,o,r,a),r&&aS(t,i,r)}t.mergedAttrs=th(t.mergedAttrs,t.attrs)}function by(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Fw(Nv(t,e),n,i[l].type);lS(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=py(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=th(t.mergedAttrs,u.hostAttrs),uS(n,t,e,c,u),cS(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}KE(n,t,s)}function nS(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;iS(o)!=a&&o.push(a),o.push(t,i,s)}}function iS(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function rS(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Fo(t)&&dS(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Nv(t,e),br(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=xs(e,n,a,t);if(br(l,e),o!==null&&hS(e,a-r,l,c,t,o),Uo(c)){let u=Tr(t.index,e);u[mi]=xs(e,n,a,t)}}}function wy(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=ww();try{Mr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];vd(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&sS(c,l)}}finally{Mr(-1),vd(o)}}function sS(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function oS(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Nb(e,o.selectors,!1))if(i||(i=[]),Uo(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Dd(n,e,c)}else i.unshift(o),Dd(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Dd(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function aS(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ee(-301,!1);i.push(e[r],s)}}}function cS(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Uo(e)&&(t[""]=n)}}function lS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function uS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=vs(r.type,!0)),o=new Ao(s,Uo(r),Rr);n.blueprint[i]=o,t[i]=o,nS(n,e,i,py(n,t,r.hostVars,Gi),r)}function dS(n,e,t){let i=Cn(e,n),r=_y(t),s=n[ii].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=$c(n,Wc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function hS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];fy(i,t,c,l,u,d)}}function fS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Ey(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Sy(n,e){let t=n.contentQueries;if(t!==null){let i=st(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];lh(s),a.contentQueries(2,e[o],o)}}}finally{st(i)}}}function $c(n,e){return n[Eo]?n[ug][kn]=e:n[Eo]=e,n[ug]=e,e}function Id(n,e,t){lh(0);let i=st(null);try{e(n,t)}finally{st(i)}}function Ty(n){return n[wo]||(n[wo]=[])}function Cy(n){return n.cleanup||(n.cleanup=[])}function Ay(n,e){let t=n[ys],i=t?t.get(yi,null):null;i&&i.handleError(e)}function Dh(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];fy(u,l,i,a,c,r)}}function pS(n,e,t){let i=hv(e,n);EE(n[yt],i,t)}function mS(n,e){let t=Tr(e,n),i=t[Be];gS(i,t);let r=t[fn];r!==null&&t[Bn]===null&&(t[Bn]=_h(r,t[ys])),Ih(i,t,t[mi])}function gS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Ih(n,e,t){uh(e);try{let i=n.viewQuery;i!==null&&Id(1,i,t);let r=n.template;r!==null&&my(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[gi]?.finishViewCreation(n),n.staticContentQueries&&Sy(n,e),n.staticViewQueries&&Id(2,n.viewQuery,t);let s=n.components;s!==null&&vS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[be]&=-5,dh()}}function vS(n,e){for(let t=0;t<e.length;t++)mS(n,e[t])}function yS(n,e,t,i){let r=st(null);try{let s=e.tView,a=n[be]&4096?4096:16,c=Wc(n,s,t,a,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),l=n[e.index];c[Oo]=l;let u=n[gi];return u!==null&&(c[gi]=u.createEmbeddedView(s)),Ih(s,c,t),c}finally{st(r)}}function bg(n,e){return!e||e.firstChild===null||vc(n)}function _S(n,e,t,i=!0){let r=e[Be];if(AE(r,e,n,t),i){let o=Ad(t,n),a=e[yt],c=Eh(a,n[vi]);c!==null&&TE(r,n[zn],a,e,c,o)}let s=e[Bn];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function xc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Vn(s)),ri(s)&&xS(s,i);let o=t.type;if(o&8)xc(n,e,t.child,i);else if(o&32){let a=Mh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=cy(e,t);if(Array.isArray(a))i.push(...a);else{let c=Co(e[Tn]);xc(c[Be],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function xS(n,e){for(let t=sn;t<n.length;t++){let i=n[t],r=i[Be].firstChild;r!==null&&xc(i[Be],i,r,e)}n[vi]!==n[fn]&&e.push(n[vi])}var Dy=[];function MS(n){return n[xr]??bS(n)}function bS(n){let e=Dy.pop()??Object.create(ES);return e.lView=n,e}function wS(n){n.lView[xr]!==n&&(n.lView=null,Dy.push(n))}var ES=bt(pe({},bm),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{To(n.lView)},consumerOnSignalRead(){this.lView[xr]=this}});function Iy(n){return Py(n[Eo])}function Ry(n){return Py(n[kn])}function Py(n){for(;n!==null&&!ri(n);)n=n[kn];return n}var Ny=100;function Ly(n,e=!0,t=0){let i=n[ii],r=i.rendererFactory,s=!1;s||r.begin?.();try{SS(n,t)}catch(o){throw e&&Ay(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function SS(n,e){Rd(n,e);let t=0;for(;ch(n);){if(t===Ny)throw new Ee(103,!1);t++,Rd(n,1)}}function TS(n,e,t,i){let r=e[be];if((r&256)===256)return;let s=!1;!s&&e[ii].inlineEffectRunner?.flush(),uh(e);let o=null,a=null;!s&&CS(n)&&(a=MS(e),o=wm(a));try{pv(e),xw(n.bindingStartIndex),t!==null&&my(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&rc(e,d,null)}else{let d=n.preOrderHooks;d!==null&&sc(e,d,0,null),Yu(e,0)}if(AS(e),Oy(e,0),n.contentQueries!==null&&Sy(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&rc(e,d)}else{let d=n.contentHooks;d!==null&&sc(e,d,1),Yu(e,1)}GE(n,e);let l=n.components;l!==null&&Uy(e,l,0);let u=n.viewQuery;if(u!==null&&Id(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&rc(e,d)}else{let d=n.viewHooks;d!==null&&sc(e,d,2),Yu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Xu]){for(let d of e[Xu])d();e[Xu]=null}s||(e[be]&=-73)}catch(c){throw To(e),c}finally{a!==null&&(Em(a,o),wS(a)),dh()}}function CS(n){return n.type!==2}function Oy(n,e){for(let t=Iy(n);t!==null;t=Ry(t))for(let i=sn;i<t.length;i++){let r=t[i];Fy(r,e)}}function AS(n){for(let e=Iy(n);e!==null;e=Ry(e)){if(!(e[be]&sh.HasTransplantedViews))continue;let t=e[_s];for(let i=0;i<t.length;i++){let r=t[i],s=r[Lt];uw(r)}}}function DS(n,e,t){let i=Tr(e,n);Fy(i,t)}function Fy(n,e){ah(n)&&Rd(n,e)}function Rd(n,e){let i=n[Be],r=n[be],s=n[xr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Cu(s)),s&&(s.dirty=!1),n[be]&=-9217,o)TS(i,n,i.template,n[mi]);else if(r&8192){Oy(n,1);let a=i.components;a!==null&&Uy(n,a,1)}}function Uy(n,e,t){for(let i=0;i<e.length;i++)DS(n,e[i],t)}function Rh(n){for(n[ii].changeDetectionScheduler?.notify();n;){n[be]|=64;let e=Co(n);if(av(n)&&!e)return n;n=e}return null}var wr=class{get rootNodes(){let e=this._lView,t=e[Be];return xc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[mi]}set context(e){this._lView[mi]=e}get destroyed(){return(this._lView[be]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Lt];if(ri(e)){let t=e[fc],i=t?t.indexOf(this):-1;i>-1&&(Cd(e,i),dc(t,i))}this._attachedToViewContainer=!1}oy(this._lView[Be],this._lView)}onDestroy(e){mv(this._lView,e)}markForCheck(){Rh(this._cdRefInjectingView||this._lView)}detach(){this._lView[be]&=-129}reattach(){gd(this._lView),this._lView[be]|=128}detectChanges(){this._lView[be]|=1024,Ly(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ee(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,ry(this._lView[Be],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ee(902,!1);this._appRef=e,gd(this._lView)}},Ms=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=PS;let n=e;return n})(),IS=Ms,RS=class extends IS{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=yS(this._declarationLView,this._declarationTContainer,e,{injector:t,dehydratedView:i});return new wr(r)}};function PS(){return Ph(si(),_t())}function Ph(n,e){return n.type&4?new RS(e,n,ws(n,e)):null}function ky(n){let e=n[So]??[],i=n[Lt][yt];for(let r of e)NS(r,i);n[So]=nn}function NS(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[yc];for(;t<r;){let s=i.nextSibling;Th(e,i,!1),i=s,t++}}}function By(n){ky(n);for(let e=sn;e<n.length;e++)Mc(n[e])}function LS(n){let e=n[Bn]?.i18nNodes;if(e){let t=n[yt];for(let i of e.values())Th(t,i,!1);n[Bn].i18nNodes=void 0}}function Mc(n){LS(n);let e=n[Be];for(let t=pn;t<e.bindingStartIndex;t++)if(ri(n[t])){let i=n[t];By(i)}else ki(n[t])&&Mc(n[t])}function OS(n){let e=n._views;for(let t of e){let i=aE(t);if(i!==null&&i[fn]!==null)if(ki(i))Mc(i);else{let r=i[fn];Mc(r),By(i)}}}var FS=new RegExp(`^(\\d+)*(${qv}|${$v})*(.*)`);function US(n){let e=n.match(FS),[t,i,r,s]=e,o=i?parseInt(i,10):r,a=[];for(let[c,l,u]of s.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[o,...a]}function kS(n){return!n.prev&&n.parent?.type===8}function td(n){return n.index-pn}function BS(n,e){let t=n.i18nNodes;if(t){let i=t.get(e);return i&&t.delete(e),i}return null}function qc(n,e,t,i){let r=td(i),s=BS(n,r);if(!s){let o=n.data[tE];if(o?.[r])s=zS(o[r],t);else if(e.firstChild===i)s=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(kS(i)){let l=td(i.parent);s=Sd(n,l)}else{let l=Cn(c,t);if(a)s=l.firstChild;else{let u=td(c),d=Sd(n,u);if(c.type===2&&d){let m=xh(n,u)+1;s=Xc(m,d)}else s=l.nextSibling}}}}return s}function Xc(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function VS(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let o=0;o<s;o++)switch(r){case Ed.FirstChild:t=t.firstChild;break;case Ed.NextSibling:t=t.nextSibling;break}}return t}function zS(n,e){let[t,...i]=US(n),r;if(t===$v)r=e[Tn][fn];else if(t===qv)r=bE(e[Tn][fn]);else{let s=Number(t);r=Vn(e[s+pn])}return VS(r,i)}function HS(n,e){let t=[];for(let i of e)for(let r=0;r<(i[Xv]??1);r++){let s={data:i,firstChild:null};i[yc]>0&&(s.firstChild=n,n=Xc(i[yc],n)),t.push(s)}return[n,t]}var Vy=()=>null;function GS(n,e){let t=n[So];return!e||t===null||t.length===0?null:t[0].data[eE]===e?t.shift():(ky(n),null)}function WS(){Vy=GS}function wg(n,e){return Vy(n,e)}var Pd=class{},Nd=class{},bc=class{};function jS(n){let e=Error(`No component factory found for ${Yt(n)}.`);return e[$S]=n,e}var $S="ngComponent";var Ld=class{resolveComponentFactory(e){throw jS(e)}},Yc=(()=>{let e=class e{};e.NULL=new Ld;let n=e;return n})(),Do=class{};var qS=(()=>{let e=class e{};e.\u0275prov=Re({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),nd={};var Eg=new Set;function Vo(n){Eg.has(n)||(Eg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function Sg(...n){}function XS(){let n=typeof gr.requestAnimationFrame=="function",e=gr[n?"requestAnimationFrame":"setTimeout"],t=gr[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var vt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new rn(!1),this.onMicrotaskEmpty=new rn(!1),this.onStable=new rn(!1),this.onError=new rn(!1),typeof Zone>"u")throw new Ee(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=XS().nativeRequestAnimationFrame,JS(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ee(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ee(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,YS,Sg,Sg);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},YS={};function Nh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function ZS(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(gr,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Od(n),n.isCheckStableRunning=!0,Nh(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Od(n))}function JS(n){let e=()=>{ZS(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(KS(a))return t.invokeTask(r,s,o,a);try{return Tg(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Cg(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Tg(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Cg(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Od(n),Nh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Od(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Tg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Cg(n){n._nesting--,Nh(n)}function KS(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var zy=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Re({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Fd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=ad(r,a);else if(s==2){let c=a,l=e[++o];i=ad(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var wc=class extends Yc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=_r(e);return new Io(t,this.ngModule)}};function Ag(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function QS(n){let e=n.toLowerCase();return e==="svg"?rw:e==="math"?sw:null}var Ud=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Rc(i);let r=this.injector.get(e,nd,i);return r!==nd||t===nd?r:this.parentInjector.get(e,t,i)}},Io=class extends bc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Ag(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Ag(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Ub(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=st(null);try{r=r||this.ngModule;let o=r instanceof Sn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Ud(e,o):e,c=a.get(Do,null);if(c===null)throw new Ee(407,!1);let l=a.get(qS,null),u=a.get(zy,null),d=a.get(Pd,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},m=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",y=i?$E(m,i,this.componentDef.encapsulation,a):Hc(m,g,QS(g)),p=512;this.componentDef.signals?p|=4096:this.componentDef.onPush||(p|=16);let f=null;y!==null&&(f=_h(y,a,!0));let S=Ah(0,null,null,1,0,null,null,null,null,null,null),M=Wc(null,S,null,p,null,null,h,m,a,null,f);uh(M);let w,I;try{let C=this.componentDef,T,B=null;C.findHostDirectiveDefs?(T=[],B=new Map,C.findHostDirectiveDefs(C,T,B),T.push(C)):T=[C];let K=eT(M,y),_=tT(K,y,C,T,M,h,m);I=fv(S,pn),y&&rT(m,C,y,i),t!==void 0&&sT(I,this.ngContentSelectors,t),w=iT(_,C,T,B,M,[oT]),Ih(S,M,null)}finally{dh()}return new kd(this.componentType,w,ws(I,M),M,I)}finally{st(s)}}},kd=class extends Nd{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new wr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Dh(s[Be],s,r,e,t),this.previousInputValues.set(e,t);let o=Tr(this._tNode.index,s);Rh(o)}}get injector(){return new vr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function eT(n,e){let t=n[Be],i=pn;return n[i]=e,jc(t,i,2,"#host",null)}function tT(n,e,t,i,r,s,o){let a=r[Be];nT(i,n,e,o);let c=null;e!==null&&(c=_h(e,r[ys]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Wc(r,_y(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Dd(a,n,i.length-1),$c(r,d),r[n.index]=d}function nT(n,e,t,i){for(let r of n)e.mergedAttrs=th(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Fd(e,e.mergedAttrs,!0),t!==null&&dy(i,t,e))}function iT(n,e,t,i,r,s){let o=si(),a=r[Be],c=Cn(o,r);by(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=xs(r,a,d,o);br(h,r)}wy(a,r,o),c&&br(c,r);let l=xs(r,a,o.directiveStart+o.componentOffset,o);if(n[mi]=r[mi]=l,s!==null)for(let u of s)u(l,e);return gy(a,o,r),l}function rT(n,e,t,i){if(i)ud(n,t,["ng-version","17.3.0"]);else{let{attrs:r,classes:s}=kb(e.selectors[0]);r&&ud(n,t,r),s&&s.length>0&&uy(n,t,s.join(" "))}}function sT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function oT(){let n=si();fh(_t()[Be],n)}var Pr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=aT;let n=e;return n})();function aT(){let n=si();return Gy(n,_t())}var cT=Pr,Hy=class extends cT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ws(this._hostTNode,this._hostLView)}get injector(){return new vr(this._hostTNode,this._hostLView)}get parentInjector(){let e=ph(this._hostTNode,this._hostLView);if(Iv(e)){let t=gc(e,this._hostLView),i=mc(e),r=t[Be].data[i+8];return new vr(r,t)}else return new vr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Dg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-sn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=wg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,bg(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!ew(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Io(_r(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Sn,null);y&&(s=y)}let u=_r(c.componentType??{}),d=wg(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,bg(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(lw(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Lt],l=new Hy(c,c[zn],c[Lt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return _S(o,r,s,i),e.attachToViewContainerRef(),Wg(id(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Dg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Cd(this._lContainer,t);i&&(dc(id(this._lContainer),t),oy(i[Be],i))}detach(e){let t=this._adjustIndex(e,-1),i=Cd(this._lContainer,t);return i&&dc(id(this._lContainer),t)!=null?new wr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Dg(n){return n[fc]}function id(n){return n[fc]||(n[fc]=[])}function Gy(n,e){let t,i=e[n.index];return ri(i)?t=i:(t=Ey(i,e,null,n),e[n.index]=t,$c(e,t)),Wy(t,e,n,i),new Hy(t,n,e)}function lT(n,e){let t=n[yt],i=t.createComment(""),r=Cn(e,n),s=Eh(t,r);return _c(t,s,i,OE(t,r),!1),i}var Wy=jy,Lh=()=>!1;function uT(n,e,t){return Lh(n,e,t)}function jy(n,e,t,i){if(n[vi])return;let r;t.type&8?r=Vn(i):r=lT(e,t),n[vi]=r}function dT(n,e,t){if(n[vi]&&n[So])return!0;let i=t[Bn],r=e.index-pn;if(!i||Xw(e)||Vc(i,r))return!1;let o=Sd(i,r),a=i.data[yh]?.[r],[c,l]=HS(o,a);return n[vi]=c,n[So]=l,!0}function hT(n,e,t,i){Lh(n,t,e)||jy(n,e,t,i)}function fT(){Wy=hT,Lh=dT}var Bd=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Vd=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Oh(e,t).matches!==null&&this.queries[t].setDirty()}},zd=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=MT(e):this.predicate=e}},Hd=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Gd=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,pT(t,s)),this.matchTNodeWithReadOption(e,t,oc(t,e,s,!1,!1))}else i===Ms?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,oc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Dr||r===Pr||r===Ms&&t.type&4)this.addMatch(t.index,-2);else{let s=oc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function pT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function mT(n,e){return n.type&11?ws(n,e):n.type&4?Ph(n,e):null}function gT(n,e,t,i){return t===-1?mT(e,n):t===-2?vT(n,e,i):xs(n,n[Be],t,e)}function vT(n,e,t){if(t===Dr)return ws(e,n);if(t===Ms)return Ph(e,n);if(t===Pr)return Gy(e,n)}function $y(n,e,t,i){let r=e[gi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(gT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Wd(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=$y(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=sn;d<u.length;d++){let h=u[d];h[Oo]===h[Lt]&&Wd(h[Be],h,l,i)}if(u[_s]!==null){let d=u[_s];for(let h=0;h<d.length;h++){let m=d[h];Wd(m[Be],m,l,i)}}}}}return i}function yT(n,e){return n[gi].queries[e].queryList}function _T(n,e,t){let i=new bd((t&4)===4);return ZE(n,e,i,i.destroy),(e[gi]??=new Vd).queries.push(new Bd(i))-1}function xT(n,e,t){let i=Hn();return i.firstCreatePass&&(bT(i,new zd(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),_T(i,_t(),e)}function MT(n){return n.split(",").map(e=>e.trim())}function bT(n,e,t){n.queries===null&&(n.queries=new Hd),n.queries.track(new Gd(e,t))}function Oh(n,e){return n.queries.getByIndex(e)}function wT(n,e){let t=n[Be],i=Oh(t,e);return i.crossesNgTemplate?Wd(t,n,e,[]):$y(t,n,i,e)}var Vi=class{},Ro=class{};var jd=class extends Vi{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new wc(this);let r=Kg(e);this._bootstrapComponents=iy(r.bootstrap),this._r3Injector=Vv(e,t,[{provide:Vi,useValue:this},{provide:Yc,useValue:this.componentFactoryResolver},...i],Yt(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},$d=class extends Ro{constructor(e){super(),this.moduleType=e}create(e){return new jd(this.moduleType,e,[])}};var Ec=class extends Vi{constructor(e){super(),this.componentFactoryResolver=new wc(this),this.instance=null;let t=new bo([...e.providers,{provide:Vi,useValue:this},{provide:Yc,useValue:this.componentFactoryResolver}],e.parent||rh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Fh(n,e,t=null){return new Ec({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var zo=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Bt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Zc(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Ho(n){return(n.flags&32)===32}function ET(n,e,t,i,r,s,o,a,c){let l=e.consts,u=jc(e,n,4,o||null,pc(l,a));My(e,t,u,pc(l,c)),fh(e,u);let d=u.tView=Ah(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Uh(n,e,t,i,r,s,o,a){let c=_t(),l=Hn(),u=n+pn,d=l.firstCreatePass?ET(u,l,c,e,t,i,r,s,o):l.data[u];Bo(d,!1);let h=qy(l,c,d,n);hh()&&Sh(l,c,h,d),br(h,c);let m=Ey(h,c,h,d);return c[u]=m,$c(c,m),uT(m,d,c),oh(d)&&vy(l,c,d),o!=null&&yy(c,d,a),Uh}var qy=Xy;function Xy(n,e,t,i){return oi(!0),e[yt].createComment("")}function ST(n,e,t,i){let r=e[Bn],s=!r||ko()||Ho(t)||Vc(r,i);if(oi(s),s)return Xy(n,e,t,i);let o=r.data[Qw]?.[i]??null;o!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=o);let a=qc(r,n,e,t);Bc(r,i,a);let c=xh(r,i);return Xc(c,a)}function TT(){qy=ST}function CT(n,e,t,i){return Zc(n,_v(),t)?e+zg(t)+i:Gi}function tc(n,e){return n<<17|e<<2}function Er(n){return n>>17&32767}function AT(n){return(n&2)==2}function DT(n,e){return n&131071|e<<17}function qd(n){return n|2}function bs(n){return(n&131068)>>2}function rd(n,e){return n&-131069|e<<2}function IT(n){return(n&1)===1}function Xd(n){return n|1}function RT(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Er(o),c=bs(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||No(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=Er(n[a+1]);n[i+1]=tc(h,a),h!==0&&(n[h+1]=rd(n[h+1],i)),n[a+1]=DT(n[a+1],i)}else n[i+1]=tc(a,0),a!==0&&(n[a+1]=rd(n[a+1],i)),a=i;else n[i+1]=tc(c,0),a===0?a=i:n[c+1]=rd(n[c+1],i),c=i;l&&(n[i+1]=qd(n[i+1])),Ig(n,u,i,!0),Ig(n,u,i,!1),PT(e,u,n,i,s),o=tc(a,c),s?e.classBindings=o:e.styleBindings=o}function PT(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&No(s,e)>=0&&(t[i+1]=Xd(t[i+1]))}function Ig(n,e,t,i){let r=n[t+1],s=e===null,o=i?Er(r):bs(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];NT(c,e)&&(a=!0,n[o+1]=i?Xd(l):qd(l)),o=i?Er(l):bs(l)}a&&(n[t+1]=i?qd(r):Xd(r))}function NT(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?No(n,e)>=0:!1}var Un={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function LT(n){return n.substring(Un.key,Un.keyEnd)}function OT(n){return FT(n),Yy(n,Zy(n,0,Un.textEnd))}function Yy(n,e){let t=Un.textEnd;return t===e?-1:(e=Un.keyEnd=UT(n,Un.key=e,t),Zy(n,e,t))}function FT(n){Un.key=0,Un.keyEnd=0,Un.value=0,Un.valueEnd=0,Un.textEnd=n.length}function Zy(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function UT(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function xi(n,e,t){let i=_t(),r=_v();if(Zc(i,r,e)){let s=Hn(),o=Tw();eS(s,o,i,n,e,i[yt],t,!1)}return xi}function Yd(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Dh(n,t,s[o],o,i)}function Jc(n,e,t){return BT(n,e,t,!1),Jc}function Jy(n){VT($T,kT,n,!0)}function kT(n,e){for(let t=OT(e);t>=0;t=Yy(e,t))eh(n,LT(e),!0)}function BT(n,e,t,i){let r=_t(),s=Hn(),o=xv(2);if(s.firstUpdatePass&&Qy(s,n,o,i),e!==Gi&&Zc(r,o,e)){let a=s.data[Cr()];e0(s,a,r,r[yt],n,r[o+1]=XT(e,t),i,o)}}function VT(n,e,t,i){let r=Hn(),s=xv(2);r.firstUpdatePass&&Qy(r,null,s,i);let o=_t();if(t!==Gi&&Zc(o,s,t)){let a=r.data[Cr()];if(t0(a,i)&&!Ky(r,s)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=ad(c,t||"")),Yd(r,a,o,t,i)}else qT(r,a,o,o[yt],o[s+1],o[s+1]=jT(n,e,t),i,s)}}function Ky(n,e){return e>=n.expandoStartIndex}function Qy(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Cr()],o=Ky(n,t);t0(s,i)&&e===null&&!o&&(e=!1),e=zT(r,s,e,i),RT(r,s,e,t,o,i)}}function zT(n,e,t,i){let r=Ew(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=sd(null,n,e,t,i),t=Po(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=sd(r,n,e,t,i),s===null){let c=HT(n,e,i);c!==void 0&&Array.isArray(c)&&(c=sd(null,n,e,c[1],i),c=Po(c,e.attrs,i),GT(n,e,i,c))}else s=WT(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function HT(n,e,t){let i=t?e.classBindings:e.styleBindings;if(bs(i)!==0)return n[Er(i)]}function GT(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Er(r)]=i}function WT(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Po(i,o,t)}return Po(i,e.attrs,t)}function sd(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Po(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Po(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),eh(n,o,t?!0:e[++s]))}return n===void 0?null:n}function jT(n,e,t){if(t==null||t==="")return nn;let i=[],r=zc(t);if(Array.isArray(r))for(let s=0;s<r.length;s++)n(i,r[s],!0);else if(typeof r=="object")for(let s in r)r.hasOwnProperty(s)&&n(i,s,r[s]);else typeof r=="string"&&e(i,r);return i}function $T(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&eh(n,i,t)}function qT(n,e,t,i,r,s,o,a){r===Gi&&(r=nn);let c=0,l=0,u=0<r.length?r[0]:null,d=0<s.length?s[0]:null;for(;u!==null||d!==null;){let h=c<r.length?r[c+1]:void 0,m=l<s.length?s[l+1]:void 0,g=null,y;u===d?(c+=2,l+=2,h!==m&&(g=d,y=m)):d===null||u!==null&&u<d?(c+=2,g=u):(l+=2,g=d,y=m),g!==null&&e0(n,e,t,i,g,y,o,a),u=c<r.length?r[c]:null,d=l<s.length?s[l]:null}}function e0(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=IT(l)?Rg(c,e,t,r,bs(l),o):void 0;if(!Sc(u)){Sc(s)||AT(l)&&(s=Rg(c,null,t,r,a,o));let d=hv(Cr(),t);zE(i,o,d,r,s)}}function Rg(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===Gi&&(h=d?nn:void 0);let m=d?$u(h,i):u===i?h:void 0;if(l&&!Sc(m)&&(m=$u(c,i)),Sc(m)&&(a=m,o))return a;let g=n[r+1];r=o?Er(g):bs(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=$u(c,i))}return a}function Sc(n){return n!==void 0}function XT(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Yt(zc(n)))),n}function t0(n,e){return(n.flags&(e?8:16))!==0}function YT(n,e,t,i,r,s){let o=e.consts,a=pc(o,r),c=jc(e,n,2,i,a);return My(e,t,c,pc(o,s)),c.attrs!==null&&Fd(c,c.attrs,!1),c.mergedAttrs!==null&&Fd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Vt(n,e,t,i){let r=_t(),s=Hn(),o=pn+n,a=r[yt],c=s.firstCreatePass?YT(o,s,r,e,t,i):s.data[o],l=n0(s,r,c,a,e,n);r[o]=l;let u=oh(c);return Bo(c,!0),dy(a,l,c),!Ho(c)&&hh()&&Sh(s,r,l,c),hw()===0&&br(l,r),fw(),u&&(vy(s,r,c),gy(s,c,r)),i!==null&&yy(r,c),Vt}function Wt(){let n=si();yv()?_w():(n=n.parent,Bo(n,!1));let e=n;mw(e)&&vw(),pw();let t=Hn();return t.firstCreatePass&&(fh(t,n),ov(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Iw(e)&&Yd(t,e,_t(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Rw(e)&&Yd(t,e,_t(),e.stylesWithoutHost,!1),Wt}function Wn(n,e,t,i){return Vt(n,e,t,i),Wt(),Wn}var n0=(n,e,t,i,r,s)=>(oi(!0),Hc(i,r,Cv()));function ZT(n,e,t,i,r,s){let o=e[Bn],a=!o||ko()||Ho(t)||Vc(o,s);if(oi(a),a)return Hc(i,r,Cv());let c=qc(o,n,e,t);return Jv(o,s)&&Bc(o,s,c.nextSibling),o&&(Gv(t)||Wv(c))&&Fo(t)&&(gw(t),ly(c)),c}function JT(){n0=ZT}var KT=(n,e,t,i)=>(oi(!0),wh(e[yt],""));function QT(n,e,t,i){let r,s=e[Bn],o=!s||ko()||Ho(t);if(oi(o),o)return wh(e[yt],"");let a=qc(s,n,e,t),c=uE(s,i);return Bc(s,i,a),r=Xc(c,a),r}function eC(){KT=QT}var Tc="en-US";var tC=Tc;function nC(n){typeof n=="string"&&(tC=n.toLowerCase().replace(/_/g,"-"))}function i0(n,e,t){let i=n[yt];switch(t){case Node.COMMENT_NODE:return wh(i,e);case Node.TEXT_NODE:return bh(i,e);case Node.ELEMENT_NODE:return Hc(i,e,null)}}var iC=(n,e,t,i)=>(oi(!0),i0(n,t,i));function rC(n,e,t,i){return oi(!0),i0(n,t,i)}function sC(){iC=rC}function jn(n,e,t,i){let r=_t(),s=Hn(),o=si();return aC(s,r,r[yt],o,n,e,i),jn}function oC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[wo],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function aC(n,e,t,i,r,s,o){let a=oh(i),l=n.firstCreatePass&&Cy(n),u=e[mi],d=Ty(e),h=!0;if(i.type&3||o){let y=Cn(i,e),p=o?o(y):y,f=d.length,S=o?w=>o(Vn(w[i.index])):i.index,M=null;if(!o&&a&&(M=oC(n,e,r,i.index)),M!==null){let w=M.__ngLastListenerFn__||M;w.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=Ng(i,e,u,s,!1);let w=t.listen(p,r,s);d.push(s,w),l&&l.push(r,S,f,f+1)}}else s=Ng(i,e,u,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let y=g.length;if(y)for(let p=0;p<y;p+=2){let f=g[p],S=g[p+1],I=e[f][S].subscribe(s),C=d.length;d.push(s,I),l&&l.push(r,i.index,C,-(C+1))}}}function Pg(n,e,t,i){let r=st(null);try{return ei(6,e,t),t(i)!==!1}catch(s){return Ay(n,s),!1}finally{ei(7,e,t),st(r)}}function Ng(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?Tr(n.index,e):e;Rh(a);let c=Pg(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=Pg(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function r0(n,e,t){xT(n,e,t)}function kh(n){let e=_t(),t=Hn(),i=Mv();lh(i+1);let r=Oh(t,i);if(n.dirty&&cw(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=wT(e,i);n.reset(s,Ww),n.notifyOnChanges()}return!0}return!1}function Bh(){return yT(_t(),Mv())}function Wi(n,e=""){let t=_t(),i=Hn(),r=n+pn,s=i.firstCreatePass?jc(i,r,1,e,null):i.data[r],o=s0(i,t,s,e,n);t[r]=o,hh()&&Sh(i,t,o,s),Bo(s,!1)}var s0=(n,e,t,i,r)=>(oi(!0),bh(e[yt],i));function cC(n,e,t,i,r){let s=e[Bn],o=!s||ko()||Ho(t)||Vc(s,r);return oi(o),o?bh(e[yt],i):qc(s,n,e,t)}function lC(){s0=cC}function Vh(n){return Kc("",n,""),Vh}function Kc(n,e,t){let i=_t(),r=CT(i,n,e,t);return r!==Gi&&pS(i,Cr(),r),Kc}var uC=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=tv(!1,i.type),s=r.length>0?Fh([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Re({token:e,providedIn:"environment",factory:()=>new e(tt(Sn))});let n=e;return n})();function ji(n){Vo("NgStandalone"),n.getStandaloneInjector=e=>e.get(uC).getOrCreateStandaloneInjector(n)}var Qc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var o0=new We("");function Go(n){return!!n&&typeof n.then=="function"}function a0(n){return!!n&&typeof n.subscribe=="function"}var c0=new We(""),l0=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=se(c0,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Go(o))i.push(o);else if(a0(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Es=new We("");function dC(){Tm(()=>{throw new Ee(600,!1)})}function hC(n){return n.isBoundToModule}function fC(n,e,t){try{let i=t();return Go(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var $i=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=se(zv),this.afterRenderEffectManager=se(zy),this.externalTestViews=new Set,this.beforeRender=new Xt,this.afterTick=new Xt,this.componentTypes=[],this.components=[],this.isStable=se(zo).hasPendingTasks.pipe(Ze(i=>!i)),this._injector=se(Sn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof bc;if(!this._injector.get(l0).done){let m=!s&&Jg(i),g=!1;throw new Ee(405,g)}let a;s?a=i:a=this._injector.get(Yc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=hC(a)?void 0:this._injector.get(Vi),l=r||a.selector,u=a.create(Ar.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(o0,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),od(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new Ee(101,!1);let r=st(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,st(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===Ny)throw new Ee(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)pC(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Zd(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Zd(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;od(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(Es,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>od(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Ee(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function od(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var nc;function zh(n){nc??=new WeakMap;let e=nc.get(n);if(e)return e;let t=n.isStable.pipe(On(i=>i)).toPromise().then(()=>{});return nc.set(n,t),n.onDestroy(()=>nc?.delete(n)),t}function pC(n,e,t){!e&&!Zd(n)||mC(n,t,e)}function Zd(n){return ch(n)}function mC(n,e,t){let i;t?(i=0,n[be]|=1024):n[be]&64?i=0:i=1,Ly(n,e,i)}var Jd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Hh=(()=>{let e=class e{compileModuleSync(i){return new $d(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=Kg(i),o=iy(s.declarations).reduce((a,c)=>{let l=_r(c);return l&&a.push(new Io(l)),a},[]);return new Jd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var gC=(()=>{let e=class e{constructor(){this.zone=se(vt),this.applicationRef=se($i)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function vC(n){return[{provide:vt,useFactory:n},{provide:yr,multi:!0,useFactory:()=>{let e=se(gC,{optional:!0});return()=>e.initialize()}},{provide:yr,multi:!0,useFactory:()=>{let e=se(MC);return()=>{e.initialize()}}},{provide:zv,useFactory:yC}]}function yC(){let n=se(vt),e=se(yi);return t=>n.runOutsideAngular(()=>e.handleError(t))}function _C(n){let e=vC(()=>new vt(xC(n)));return Sr([[],e])}function xC(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var MC=(()=>{let e=class e{constructor(){this.subscription=new Ct,this.initialized=!1,this.zone=se(vt),this.pendingTasks=se(zo)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{vt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{vt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function bC(){return typeof $localize<"u"&&$localize.locale||Tc}var Gh=new We("",{providedIn:"root",factory:()=>se(Gh,$e.Optional|$e.SkipSelf)||bC()});var u0=new We("");var cc=null;function wC(n=[],e){return Ar.create({name:e,providers:[{provide:Lc,useValue:"platform"},{provide:u0,useValue:new Set([()=>cc=null])},...n]})}function EC(n=[]){if(cc)return cc;let e=wC(n);return cc=e,dC(),SC(e),e}function SC(n){n.get(gh,null)?.forEach(t=>t())}var Wo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=TC;let n=e;return n})();function TC(n){return CC(si(),_t(),(n&16)===16)}function CC(n,e,t){if(Fo(n)&&!t){let i=Tr(n.index,e);return new wr(i,i)}else if(n.type&47){let i=e[Tn];return new wr(i,e)}return null}function d0(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=EC(i),s=[_C(),...t||[]],a=new Ec({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(vt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(yi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(u0);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),fC(l,c,()=>{let m=a.get(l0);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(Gh,Tc);nC(g||Tc);let y=a.get($i);return e!==void 0&&y.bootstrap(e),y})})})}catch(e){return Promise.reject(e)}}var Lg=!1,AC=!1;function DC(){Lg||(Lg=!0,oE(),JT(),lC(),eC(),TT(),fT(),WS(),YE(),sC())}function IC(n,e){return zh(n)}function h0(){return Sr([{provide:Ka,useFactory:()=>{let n=!0;return ec()&&(n=!!se(Ir,{optional:!0})?.get(Yv,null)),n&&Vo("NgHydration"),n}},{provide:yr,useValue:()=>{AC=!!se(dE,{optional:!0}),ec()&&se(Ka)&&(RC(),DC())},multi:!0},{provide:Qv,useFactory:()=>ec()&&se(Ka)},{provide:Es,useFactory:()=>{if(ec()&&se(Ka)){let n=se($i),e=se(Ar);return()=>{IC(n,e).then(()=>{vt.assertInAngularZone(),OS(n)})}}return()=>{}},multi:!0}])}function RC(){let n=Uc(),e;for(let t of n.body.childNodes)if(t.nodeType===Node.COMMENT_NODE&&t.textContent?.trim()===rE){e=t;break}if(!e)throw new Ee(-507,!1)}var y0=null;function Ts(){return y0}function _0(n){y0??=n}var el=class{};var Dn=new We(""),x0=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(OC),providedIn:"platform"});let n=e;return n})();var OC=(()=>{let e=class e extends x0{constructor(){super(),this._doc=se(Dn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ts().getBaseHref(this._doc)}onPopState(i){let r=Ts().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=Ts().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function M0(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function f0(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Nr(n){return n&&n[0]!=="?"?"?"+n:n}var nl=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(b0),providedIn:"root"});let n=e;return n})(),FC=new We(""),b0=(()=>{let e=class e extends nl{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??se(Dn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return M0(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Nr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Nr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Nr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(tt(x0),tt(FC,8))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var jo=(()=>{let e=class e{constructor(i){this._subject=new rn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=BC(f0(p0(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Nr(r))}normalize(i){return e.stripTrailingSlash(kC(this._basePath,p0(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Nr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Nr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Nr,e.joinWithSlash=M0,e.stripTrailingSlash=f0,e.\u0275fac=function(r){return new(r||e)(tt(nl))},e.\u0275prov=Re({token:e,factory:()=>UC(),providedIn:"root"});let n=e;return n})();function UC(){return new jo(tt(nl))}function kC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function p0(n){return n.replace(/\/index.html$/,"")}function BC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function w0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var E0=(()=>{let e=class e{constructor(i,r){this._viewContainer=i,this._context=new Wh,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(i){this._context.$implicit=this._context.ngIf=i,this._updateView()}set ngIfThen(i){m0("ngIfThen",i),this._thenTemplateRef=i,this._thenViewRef=null,this._updateView()}set ngIfElse(i){m0("ngIfElse",i),this._elseTemplateRef=i,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(Rr(Pr),Rr(Ms))},e.\u0275dir=Nc({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let n=e;return n})(),Wh=class{constructor(){this.$implicit=null,this.ngIf=null}};function m0(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${Yt(e)}'.`)}var $o=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Pc({type:e}),e.\u0275inj=Dc({});let n=e;return n})(),jh="browser",VC="server";function S0(n){return n===jh}function $h(n){return n===VC}var tl=class{};var rl=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var P0=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(P0||{}),qh=class{constructor(e,t=N0.Ok,i="OK"){this.headers=e.headers||new rl,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var sl=class n extends qh{constructor(e={}){super(e),this.type=P0.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var N0=function(n){return n[n.Continue=100]="Continue",n[n.SwitchingProtocols=101]="SwitchingProtocols",n[n.Processing=102]="Processing",n[n.EarlyHints=103]="EarlyHints",n[n.Ok=200]="Ok",n[n.Created=201]="Created",n[n.Accepted=202]="Accepted",n[n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",n[n.NoContent=204]="NoContent",n[n.ResetContent=205]="ResetContent",n[n.PartialContent=206]="PartialContent",n[n.MultiStatus=207]="MultiStatus",n[n.AlreadyReported=208]="AlreadyReported",n[n.ImUsed=226]="ImUsed",n[n.MultipleChoices=300]="MultipleChoices",n[n.MovedPermanently=301]="MovedPermanently",n[n.Found=302]="Found",n[n.SeeOther=303]="SeeOther",n[n.NotModified=304]="NotModified",n[n.UseProxy=305]="UseProxy",n[n.Unused=306]="Unused",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.PaymentRequired=402]="PaymentRequired",n[n.Forbidden=403]="Forbidden",n[n.NotFound=404]="NotFound",n[n.MethodNotAllowed=405]="MethodNotAllowed",n[n.NotAcceptable=406]="NotAcceptable",n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",n[n.RequestTimeout=408]="RequestTimeout",n[n.Conflict=409]="Conflict",n[n.Gone=410]="Gone",n[n.LengthRequired=411]="LengthRequired",n[n.PreconditionFailed=412]="PreconditionFailed",n[n.PayloadTooLarge=413]="PayloadTooLarge",n[n.UriTooLong=414]="UriTooLong",n[n.UnsupportedMediaType=415]="UnsupportedMediaType",n[n.RangeNotSatisfiable=416]="RangeNotSatisfiable",n[n.ExpectationFailed=417]="ExpectationFailed",n[n.ImATeapot=418]="ImATeapot",n[n.MisdirectedRequest=421]="MisdirectedRequest",n[n.UnprocessableEntity=422]="UnprocessableEntity",n[n.Locked=423]="Locked",n[n.FailedDependency=424]="FailedDependency",n[n.TooEarly=425]="TooEarly",n[n.UpgradeRequired=426]="UpgradeRequired",n[n.PreconditionRequired=428]="PreconditionRequired",n[n.TooManyRequests=429]="TooManyRequests",n[n.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",n[n.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",n[n.InternalServerError=500]="InternalServerError",n[n.NotImplemented=501]="NotImplemented",n[n.BadGateway=502]="BadGateway",n[n.ServiceUnavailable=503]="ServiceUnavailable",n[n.GatewayTimeout=504]="GatewayTimeout",n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported",n[n.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",n[n.InsufficientStorage=507]="InsufficientStorage",n[n.LoopDetected=508]="LoopDetected",n[n.NotExtended=510]="NotExtended",n[n.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",n}(N0||{});var GC=new We("");var T0="b",C0="h",A0="s",D0="st",I0="u",R0="rt",il=new We(""),WC=["GET","HEAD"];function jC(n,e){let u=se(il),{isCacheActive:t}=u,i=_m(u,["isCacheActive"]),{transferCache:r,method:s}=n;if(!t||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!WC.includes(s)||n.headers.has("authorization")||n.headers.has("proxy-authorization")||r===!1||i.filter?.(n)===!1)return e(n);let o=se(Ir),a=qC(n),c=o.get(a,null),l=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(l=r.includeHeaders),c){let{[T0]:d,[R0]:h,[C0]:m,[A0]:g,[D0]:y,[I0]:p}=c,f=d;switch(h){case"arraybuffer":f=new TextEncoder().encode(d).buffer;break;case"blob":f=new Blob([d]);break}let S=new rl(m);return Te(new sl({body:f,headers:S,status:g,statusText:y,url:p}))}return e(n).pipe(Dt(d=>{d instanceof sl&&o.set(a,{[T0]:d.body,[C0]:$C(d.headers,l),[A0]:d.status,[D0]:d.statusText,[I0]:d.url||"",[R0]:n.responseType})}))}function $C(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function qC(n){let{params:e,method:t,responseType:i,url:r,body:s}=n,o=e.keys().sort().map(u=>`${u}=${e.getAll(u)}`).join("&"),c=[t,i,r,typeof s=="string"?s:"",o].join("|"),l=XC(c);return l}function XC(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function L0(n){return[{provide:il,useFactory:()=>(Vo("NgHttpTransferCache"),pe({isCacheActive:!0},n))},{provide:GC,useValue:jC,multi:!0,deps:[Ir,il]},{provide:Es,multi:!0,useFactory:()=>{let e=se($i),t=se(il);return()=>{zh(e).then(()=>{t.isCacheActive=!1})}}}]}var Zh=class extends el{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Jh=class n extends Zh{static makeCurrent(){_0(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=ZC();return t==null?null:JC(t)}resetBaseElement(){qo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return w0(document.cookie,e)}},qo=null;function ZC(){return qo=qo||document.querySelector("base"),qo?qo.getAttribute("href"):null}function JC(n){return new URL(n,document.baseURI).pathname}var KC=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Kh=new We(""),k0=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Ee(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(tt(Kh),tt(vt))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),ol=class{constructor(e){this._doc=e}},Xh="ng-app-id",B0=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=$h(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Xh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Xh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Xh,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(tt(Dn),tt(kc),tt(vh,8),tt(Gn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Yh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},tf=/%COMP%/g,V0="%COMP%",QC=`_nghost-${V0}`,eA=`_ngcontent-${V0}`,tA=!0,nA=new We("",{providedIn:"root",factory:()=>tA});function iA(n){return eA.replace(tf,n)}function rA(n){return QC.replace(tf,n)}function z0(n,e){return e.map(t=>t.replace(tf,n))}var O0=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=$h(c),this.defaultRenderer=new Xo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===ni.ShadowDom&&(r=bt(pe({},r),{encapsulation:ni.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof al?s.applyToHost(i):s instanceof Yo&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case ni.Emulated:o=new al(l,u,r,this.appId,d,a,c,h);break;case ni.ShadowDom:return new Qh(l,u,i,r,a,c,this.nonce,h);default:o=new Yo(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(tt(k0),tt(B0),tt(kc),tt(nA),tt(Dn),tt(Gn),tt(vt),tt(vh))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Xo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Yh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(F0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(F0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ee(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Yh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Yh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(_i.DashCase|_i.Important)?e.style.setProperty(t,i,r&_i.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&_i.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Ts().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function F0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Qh=class extends Xo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=z0(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Yo=class extends Xo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?z0(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},al=class extends Yo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=iA(l),this.hostAttr=rA(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},sA=(()=>{let e=class e extends ol{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(tt(Dn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),U0=["alt","control","meta","shift"],oA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},aA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},cA=(()=>{let e=class e extends ol{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ts().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),U0.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=oA[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),U0.forEach(a=>{if(a!==s){let c=aA[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(tt(Dn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})();function H0(n,e){return d0(pe({rootComponent:n},lA(e)))}function lA(n){return{appProviders:[...pA,...n?.providers??[]],platformProviders:fA}}function uA(){Jh.makeCurrent()}function dA(){return new yi}function hA(){return jv(document),document}var fA=[{provide:Gn,useValue:jh},{provide:gh,useValue:uA,multi:!0},{provide:Dn,useFactory:hA,deps:[]}];var pA=[{provide:Lc,useValue:"root"},{provide:yi,useFactory:dA,deps:[]},{provide:Kh,useClass:sA,multi:!0,deps:[Dn,vt,Gn]},{provide:Kh,useClass:cA,multi:!0,deps:[Dn]},O0,B0,k0,{provide:Do,useExisting:O0},{provide:tl,useClass:KC,deps:[]},[]];var G0=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(tt(Dn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ef=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(ef||{});function W0(...n){let e=[],t=new Set,i=t.has(ef.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of n)t.add(s),r.length&&e.push(r);return Sr([[],h0(),t.has(ef.NoHttpTransferCache)||i?[]:L0({}),e])}var Le="primary",ua=Symbol("RouteTitle"),af=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Rs(n){return new af(n)}function gA(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function vA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ai(n[t],e[t]))return!1;return!0}function ai(n,e){let t=n?cf(n):void 0,i=e?cf(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Z0(n[r],e[r]))return!1;return!0}function cf(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Z0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function J0(n){return n.length>0?n[n.length-1]:null}function Yi(n){return Bu(n)?n:Go(n)?St(Promise.resolve(n)):Te(n)}var yA={exact:Q0,subset:e_},K0={exact:_A,subset:xA,ignored:()=>!0};function j0(n,e,t){return yA[t.paths](n.root,e.root,t.matrixParams)&&K0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function _A(n,e){return ai(n,e)}function Q0(n,e,t){if(!Or(n.segments,e.segments)||!ul(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Q0(n.children[i],e.children[i],t))return!1;return!0}function xA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Z0(n[t],e[t]))}function e_(n,e,t){return t_(n,e,e.segments,t)}function t_(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Or(r,t)||e.hasChildren()||!ul(r,t,i))}else if(n.segments.length===t.length){if(!Or(n.segments,t)||!ul(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!e_(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Or(n.segments,r)||!ul(n.segments,r,i)||!n.children[Le]?!1:t_(n.children[Le],e,s,i)}}function ul(n,e,t){return e.every((i,r)=>K0[t](n[r].parameters,i.parameters))}var qi=class{constructor(e=new ot([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Rs(this.queryParams),this._queryParamMap}toString(){return wA.serialize(this)}},ot=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return dl(this)}},Lr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Rs(this.parameters),this._parameterMap}toString(){return i_(this)}};function MA(n,e){return Or(n,e)&&n.every((t,i)=>ai(t.parameters,e[i].parameters))}function Or(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function bA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Le&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Le&&(t=t.concat(e(r,i)))}),t}var Lf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>new fl,providedIn:"root"});let n=e;return n})(),fl=class{parse(e){let t=new uf(e);return new qi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Zo(e.root,!0)}`,i=TA(e.queryParams),r=typeof e.fragment=="string"?`#${EA(e.fragment)}`:"";return`${t}${i}${r}`}},wA=new fl;function dl(n){return n.segments.map(e=>i_(e)).join("/")}function Zo(n,e){if(!n.hasChildren())return dl(n);if(e){let t=n.children[Le]?Zo(n.children[Le],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Le&&i.push(`${r}:${Zo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=bA(n,(i,r)=>r===Le?[Zo(n.children[Le],!1)]:[`${r}:${Zo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Le]!=null?`${dl(n)}/${t[0]}`:`${dl(n)}/(${t.join("//")})`}}function n_(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function cl(n){return n_(n).replace(/%3B/gi,";")}function EA(n){return encodeURI(n)}function lf(n){return n_(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function hl(n){return decodeURIComponent(n)}function $0(n){return hl(n.replace(/\+/g,"%20"))}function i_(n){return`${lf(n.path)}${SA(n.parameters)}`}function SA(n){return Object.entries(n).map(([e,t])=>`;${lf(e)}=${lf(t)}`).join("")}function TA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${cl(t)}=${cl(r)}`).join("&"):`${cl(t)}=${cl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var CA=/^[^\/()?;#]+/;function nf(n){let e=n.match(CA);return e?e[0]:""}var AA=/^[^\/()?;=#]+/;function DA(n){let e=n.match(AA);return e?e[0]:""}var IA=/^[^=?&#]+/;function RA(n){let e=n.match(IA);return e?e[0]:""}var PA=/^[^&#]+/;function NA(n){let e=n.match(PA);return e?e[0]:""}var uf=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ot([],{}):new ot([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Le]=new ot(e,t)),i}parseSegment(){let e=nf(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ee(4009,!1);return this.capture(e),new Lr(hl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=DA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=nf(this.remaining);r&&(i=r,this.capture(i))}e[hl(t)]=hl(i)}parseQueryParam(e){let t=RA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=NA(this.remaining);o&&(i=o,this.capture(i))}let r=$0(t),s=$0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=nf(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ee(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Le);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Le]:new ot([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ee(4011,!1)}};function r_(n){return n.segments.length>0?new ot([],{[Le]:n}):n}function s_(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=s_(r);if(i===Le&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ot(n.segments,e);return LA(t)}function LA(n){if(n.numberOfChildren===1&&n.children[Le]){let e=n.children[Le];return new ot(n.segments.concat(e.segments),e.children)}return n}function Ps(n){return n instanceof qi}function OA(n,e,t=null,i=null){let r=o_(n);return a_(r,e,t,i)}function o_(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ot(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=r_(i);return e??r}function a_(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return rf(r,r,r,t,i);let s=FA(e);if(s.toRoot())return rf(r,r,new ot([],{}),t,i);let o=UA(s,r,n),a=o.processChildren?Qo(o.segmentGroup,o.index,s.commands):l_(o.segmentGroup,o.index,s.commands);return rf(r,o.segmentGroup,a,t,i)}function pl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function na(n){return typeof n=="object"&&n!=null&&n.outlets}function rf(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=c_(n,e,t);let a=r_(s_(o));return new qi(a,s,r)}function c_(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=c_(s,e,t)}),new ot(n.segments,i)}var ml=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&pl(i[0]))throw new Ee(4003,!1);let r=i.find(na);if(r&&r!==J0(i))throw new Ee(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function FA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new ml(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ml(t,e,i)}var Ds=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function UA(n,e,t){if(n.isAbsolute)return new Ds(e,!0,0);if(!t)return new Ds(e,!1,NaN);if(t.parent===null)return new Ds(t,!0,0);let i=pl(n.commands[0])?0:1,r=t.segments.length-1+i;return kA(t,r,n.numberOfDoubleDots)}function kA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ee(4005,!1);r=i.segments.length}return new Ds(i,!1,r-s)}function BA(n){return na(n[0])?n[0].outlets:{[Le]:n}}function l_(n,e,t){if(n??=new ot([],{}),n.segments.length===0&&n.hasChildren())return Qo(n,e,t);let i=VA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ot(n.segments.slice(0,i.pathIndex),{});return s.children[Le]=new ot(n.segments.slice(i.pathIndex),n.children),Qo(s,0,r)}else return i.match&&r.length===0?new ot(n.segments,{}):i.match&&!n.hasChildren()?df(n,e,t):i.match?Qo(n,0,r):df(n,e,t)}function Qo(n,e,t){if(t.length===0)return new ot(n.segments,{});{let i=BA(t),r={};if(Object.keys(i).some(s=>s!==Le)&&n.children[Le]&&n.numberOfChildren===1&&n.children[Le].segments.length===0){let s=Qo(n.children[Le],e,t);return new ot(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=l_(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ot(n.segments,r)}}function VA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(na(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!X0(c,l,o))return s;i+=2}else{if(!X0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function df(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(na(s)){let c=zA(s.outlets);return new ot(i,c)}if(r===0&&pl(t[0])){let c=n.segments[e];i.push(new Lr(c.path,q0(t[0]))),r++;continue}let o=na(s)?s.outlets[Le]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&pl(a)?(i.push(new Lr(o,q0(a))),r+=2):(i.push(new Lr(o,{})),r++)}return new ot(i,{})}function zA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=df(new ot([],{}),0,i))}),e}function q0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function X0(n,e,t){return n==t.path&&ai(e,t.parameters)}var ea="imperative",zt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(zt||{}),In=class{constructor(e,t){this.id=e,this.url=t}},ia=class extends In{constructor(e,t,i="imperative",r=null){super(e,t),this.type=zt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Fr=class extends In{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=zt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},gn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(gn||{}),hf=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(hf||{}),Xi=class extends In{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=zt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ur=class extends In{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=zt.NavigationSkipped}},ra=class extends In{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=zt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},gl=class extends In{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=zt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ff=class extends In{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=zt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pf=class extends In{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=zt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},mf=class extends In{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=zt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gf=class extends In{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=zt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vf=class{constructor(e){this.route=e,this.type=zt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},yf=class{constructor(e){this.route=e,this.type=zt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},_f=class{constructor(e){this.snapshot=e,this.type=zt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xf=class{constructor(e){this.snapshot=e,this.type=zt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mf=class{constructor(e){this.snapshot=e,this.type=zt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bf=class{constructor(e){this.snapshot=e,this.type=zt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var sa=class{},oa=class{constructor(e){this.url=e}};var wf=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new bl,this.attachRef=null}},bl=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new wf,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),vl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Ef(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Ef(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Sf(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Sf(e,this._root).map(t=>t.value)}};function Ef(n,e){if(n===e.value)return e;for(let t of e.children){let i=Ef(n,t);if(i)return i}return null}function Sf(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Sf(n,t);if(i.length)return i.unshift(e),i}return[]}var mn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function As(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var yl=class extends vl{constructor(e,t){super(e),this.snapshot=t,Ff(this,e)}toString(){return this.snapshot.toString()}};function u_(n){let e=HA(n),t=new Bt([new Lr("",{})]),i=new Bt({}),r=new Bt({}),s=new Bt({}),o=new Bt(""),a=new Ns(t,i,s,o,r,Le,n,e.root);return a.snapshot=e.root,new yl(new mn(a,[]),e)}function HA(n){let e={},t={},i={},r="",s=new aa([],e,i,r,t,Le,n,null,{});return new _l("",new mn(s,[]))}var Ns=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ze(l=>l[ua]))??Te(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ze(e=>Rs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ze(e=>Rs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Of(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:pe(pe({},e.params),n.params),data:pe(pe({},e.data),n.data),resolve:pe(pe(pe(pe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:pe({},n.params),data:pe({},n.data),resolve:pe(pe({},n.data),n._resolvedData??{})},r&&h_(r)&&(i.resolve[ua]=r.title),i}var aa=class{get title(){return this.data?.[ua]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Rs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Rs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},_l=class extends vl{constructor(e,t){super(t),this.url=e,Ff(this,t)}toString(){return d_(this._root)}};function Ff(n,e){e.value._routerState=n,e.children.forEach(t=>Ff(n,t))}function d_(n){let e=n.children.length>0?` { ${n.children.map(d_).join(", ")} } `:"";return`${n.value}${e}`}function sf(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ai(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ai(e.params,t.params)||n.paramsSubject.next(t.params),vA(e.url,t.url)||n.urlSubject.next(t.url),ai(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Tf(n,e){let t=ai(n.params,e.params)&&MA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Tf(n.parent,e.parent))}function h_(n){return typeof n.title=="string"||n.title===null}var GA=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Le,this.activateEvents=new rn,this.deactivateEvents=new rn,this.attachEvents=new rn,this.detachEvents=new rn,this.parentContexts=se(bl),this.location=se(Pr),this.changeDetector=se(Wo),this.environmentInjector=se(Sn),this.inputBinder=se(Uf,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ee(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ee(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ee(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Ee(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Cf(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=Nc({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Fc]});let n=e;return n})(),Cf=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Ns?this.route:e===bl?this.childContexts:this.parent.get(e,t)}},Uf=new We("");function WA(n,e,t){let i=ca(n,e._root,t?t._root:void 0);return new yl(i,e)}function ca(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=jA(n,e,t);return new mn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ca(n,a)),o}}let i=$A(e.value),r=e.children.map(s=>ca(n,s));return new mn(i,r)}}function jA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ca(n,i,r);return ca(n,i)})}function $A(n){return new Ns(new Bt(n.url),new Bt(n.params),new Bt(n.queryParams),new Bt(n.fragment),new Bt(n.data),n.outlet,n.component,n)}var f_="ngNavigationCancelingError";function p_(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ps(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=m_(!1,gn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function m_(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[f_]=!0,t.cancellationCode=e,t}function qA(n){return g_(n)&&Ps(n.url)}function g_(n){return!!n&&n[f_]}var XA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=zi({type:e,selectors:[["ng-component"]],standalone:!0,features:[ji],decls:1,vars:0,template:function(r,s){r&1&&Wn(0,"router-outlet")},dependencies:[GA],encapsulation:2});let n=e;return n})();function YA(n,e){return n.providers&&!n._injector&&(n._injector=Fh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function kf(n){let e=n.children&&n.children.map(kf),t=e?bt(pe({},n),{children:e}):pe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Le&&(t.component=XA),t}function ci(n){return n.outlet||Le}function ZA(n,e){let t=n.filter(i=>ci(i)===e);return t.push(...n.filter(i=>ci(i)!==e)),t}function da(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var JA=(n,e,t,i)=>Ze(r=>(new Af(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Af=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),sf(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=As(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=As(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=As(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=As(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new bf(s.value.snapshot))}),e.children.length&&this.forwardEvent(new xf(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(sf(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),sf(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=da(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},xl=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Is=class{constructor(e,t){this.component=e,this.route=t}};function KA(n,e,t){let i=n._root,r=e?e._root:null;return Jo(i,r,t,[i.value])}function QA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Os(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Ug(n)?n:e.get(n):i}function Jo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=As(e);return n.children.forEach(o=>{eD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ta(a,t.getContext(o),r)),r}function eD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=tD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new xl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Jo(n,e,a?a.children:null,i,r):Jo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Is(a.outlet.component,o))}else o&&ta(e,a,r),r.canActivateChecks.push(new xl(i)),s.component?Jo(n,null,a?a.children:null,i,r):Jo(n,null,t,i,r);return r}function tD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Or(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Or(n.url,e.url)||!ai(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Tf(n,e)||!ai(n.queryParams,e.queryParams);case"paramsChange":default:return!Tf(n,e)}}function ta(n,e,t){let i=As(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?ta(o,e.children.getContext(s),t):ta(o,null,t):ta(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Is(e.outlet.component,r)):t.canDeactivateChecks.push(new Is(null,r)):t.canDeactivateChecks.push(new Is(null,r))}function ha(n){return typeof n=="function"}function nD(n){return typeof n=="boolean"}function iD(n){return n&&ha(n.canLoad)}function rD(n){return n&&ha(n.canActivate)}function sD(n){return n&&ha(n.canActivateChild)}function oD(n){return n&&ha(n.canDeactivate)}function aD(n){return n&&ha(n.canMatch)}function v_(n){return n instanceof fi||n?.name==="EmptyError"}var ll=Symbol("INITIAL_VALUE");function Ls(){return bn(n=>Ya(n.map(e=>e.pipe(pi(1),Wu(ll)))).pipe(Ze(e=>{for(let t of e)if(t!==!0){if(t===ll)return ll;if(t===!1||t instanceof qi)return t}return!0}),Mn(e=>e!==ll),pi(1)))}function cD(n,e){return At(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Te(bt(pe({},t),{guardsResult:!0})):lD(o,i,r,n).pipe(At(a=>a&&nD(a)?uD(i,s,n,e):Te(a)),Ze(a=>bt(pe({},t),{guardsResult:a})))})}function lD(n,e,t,i){return St(n).pipe(At(r=>mD(r.component,r.route,t,e,i)),On(r=>r!==!0,!0))}function uD(n,e,t,i){return St(e).pipe(mr(r=>ls(hD(r.route.parent,i),dD(r.route,i),pD(n,r.path,t),fD(n,r.route,t))),On(r=>r!==!0,!0))}function dD(n,e){return n!==null&&e&&e(new Mf(n)),Te(!0)}function hD(n,e){return n!==null&&e&&e(new _f(n)),Te(!0)}function fD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Te(!0);let r=i.map(s=>Za(()=>{let o=da(e)??t,a=Os(s,o),c=rD(a)?a.canActivate(e,n):Hi(o,()=>a(e,n));return Yi(c).pipe(On())}));return Te(r).pipe(Ls())}function pD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>QA(o)).filter(o=>o!==null).map(o=>Za(()=>{let a=o.guards.map(c=>{let l=da(o.node)??t,u=Os(c,l),d=sD(u)?u.canActivateChild(i,n):Hi(l,()=>u(i,n));return Yi(d).pipe(On())});return Te(a).pipe(Ls())}));return Te(s).pipe(Ls())}function mD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Te(!0);let o=s.map(a=>{let c=da(e)??r,l=Os(a,c),u=oD(l)?l.canDeactivate(n,e,t,i):Hi(c,()=>l(n,e,t,i));return Yi(u).pipe(On())});return Te(o).pipe(Ls())}function gD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Te(!0);let s=r.map(o=>{let a=Os(o,n),c=iD(a)?a.canLoad(e,t):Hi(n,()=>a(e,t));return Yi(c)});return Te(s).pipe(Ls(),y_(i))}function y_(n){return Ou(Dt(e=>{if(Ps(e))throw p_(n,e)}),Ze(e=>e===!0))}function vD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Te(!0);let s=r.map(o=>{let a=Os(o,n),c=aD(a)?a.canMatch(e,t):Hi(n,()=>a(e,t));return Yi(c)});return Te(s).pipe(Ls(),y_(i))}var la=class{constructor(e){this.segmentGroup=e||null}},Ml=class extends Error{constructor(e){super(),this.urlTree=e}};function Cs(n){return cs(new la(n))}function yD(n){return cs(new Ee(4e3,!1))}function _D(n){return cs(m_(!1,gn.GuardRejected))}var Df=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Te(i);if(r.numberOfChildren>1||!r.children[Le])return yD(e.redirectTo);r=r.children[Le]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new Ml(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new qi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ot(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ee(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},If={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function xD(n,e,t,i,r){let s=Bf(n,e,t);return s.matched?(i=YA(e,i),vD(i,e,t,r).pipe(Ze(o=>o===!0?s:pe({},If)))):Te(s)}function Bf(n,e,t){if(e.path==="**")return MD(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?pe({},If):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||gA)(t,n,e);if(!r)return pe({},If);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function MD(n){return{matched:!0,parameters:n.length>0?J0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Y0(n,e,t,i){return t.length>0&&ED(n,t,i)?{segmentGroup:new ot(e,wD(i,new ot(t,n.children))),slicedSegments:[]}:t.length===0&&SD(n,t,i)?{segmentGroup:new ot(n.segments,bD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ot(n.segments,n.children),slicedSegments:t}}function bD(n,e,t,i){let r={};for(let s of t)if(wl(n,e,s)&&!i[ci(s)]){let o=new ot([],{});r[ci(s)]=o}return pe(pe({},i),r)}function wD(n,e){let t={};t[Le]=e;for(let i of n)if(i.path===""&&ci(i)!==Le){let r=new ot([],{});t[ci(i)]=r}return t}function ED(n,e,t){return t.some(i=>wl(n,e,i)&&ci(i)!==Le)}function SD(n,e,t){return t.some(i=>wl(n,e,i))}function wl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function TD(n,e,t,i){return ci(n)!==i&&(i===Le||!wl(e,t,n))?!1:Bf(e,n,t).matched}function CD(n,e,t){return e.length===0&&!n.children[t]}var Rf=class{};function AD(n,e,t,i,r,s,o="emptyOnly"){return new Pf(n,e,t,i,r,o,s).recognize()}var DD=31,Pf=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Df(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Ee(4002,`'${e.segmentGroup}'`)}recognize(){let e=Y0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Ze(t=>{let i=new aa([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Le,this.rootComponentType,null,{}),r=new mn(i,t),s=new _l("",r),o=OA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Le).pipe(Li(i=>{if(i instanceof Ml)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof la?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Of(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(Ze(s=>s instanceof mn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return St(r).pipe(mr(s=>{let o=i.children[s],a=ZA(t,s);return this.processSegmentGroup(e,a,o,s)}),Gu((s,o)=>(s.push(...o),s)),Oi(null),Hu(),At(s=>{if(s===null)return Cs(i);let o=__(s);return ID(o),Te(o)}))}processSegment(e,t,i,r,s,o){return St(t).pipe(mr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Li(c=>{if(c instanceof la)return Te(null);throw c}))),On(a=>!!a),Li(a=>{if(v_(a))return CD(i,r,s)?Te(new Rf):Cs(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return TD(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Cs(r):Cs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Bf(t,r,s);if(!a)return Cs(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>DD&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(At(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=xD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(bn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(bn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new aa(u,h,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,PD(i),ci(i),i.component??i._loadedComponent??null,i,ND(i)),{segmentGroup:g,slicedSegments:y}=Y0(t,u,d,c);if(y.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(Ze(f=>f===null?null:new mn(m,f)));if(c.length===0&&y.length===0)return Te(new mn(m,[]));let p=ci(i)===s;return this.processSegment(l,c,g,y,p?Le:s,!0).pipe(Ze(f=>new mn(m,f instanceof mn?[f]:[])))}))):Cs(t)))}getChildConfig(e,t,i){return t.children?Te({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Te({routes:t._loadedRoutes,injector:t._loadedInjector}):gD(e,t,i,this.urlSerializer).pipe(At(r=>r?this.configLoader.loadChildren(e,t).pipe(Dt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):_D(t))):Te({routes:[],injector:e})}};function ID(n){n.sort((e,t)=>e.value.outlet===Le?-1:t.value.outlet===Le?1:e.value.outlet.localeCompare(t.value.outlet))}function RD(n){let e=n.value.routeConfig;return e&&e.path===""}function __(n){let e=[],t=new Set;for(let i of n){if(!RD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=__(i.children);e.push(new mn(i.value,r))}return e.filter(i=>!t.has(i))}function PD(n){return n.data||{}}function ND(n){return n.resolve||{}}function LD(n,e,t,i,r,s){return At(o=>AD(n,e,t,i,o.extractedUrl,r,s).pipe(Ze(({state:a,tree:c})=>bt(pe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function OD(n,e){return At(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Te(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of x_(c))o.add(l);let a=0;return St(o).pipe(mr(c=>s.has(c)?FD(c,i,n,e):(c.data=Of(c,c.parent,n).resolve,Te(void 0))),Dt(()=>a++),ds(1),At(c=>a===o.size?Te(t):hn))})}function x_(n){let e=n.children.map(t=>x_(t)).flat();return[n,...e]}function FD(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!h_(r)&&(s[ua]=r.title),UD(s,n,e,i).pipe(Ze(o=>(n._resolvedData=o,n.data=Of(n,n.parent,t).resolve,null)))}function UD(n,e,t,i){let r=cf(n);if(r.length===0)return Te({});let s={};return St(r).pipe(At(o=>kD(n[o],e,t,i).pipe(On(),Dt(a=>{s[o]=a}))),ds(1),zu(s),Li(o=>v_(o)?hn:cs(o)))}function kD(n,e,t,i){let r=da(e)??i,s=Os(n,r),o=s.resolve?s.resolve(e,t):Hi(r,()=>s(e,t));return Yi(o)}function of(n){return bn(e=>{let t=n(e);return t?St(t).pipe(Ze(()=>e)):Te(e)})}var M_=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Le);return r}getResolvedTitleForRoute(i){return i.data[ua]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(BD),providedIn:"root"});let n=e;return n})(),BD=(()=>{let e=class e extends M_{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(tt(G0))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Vf=new We("",{providedIn:"root",factory:()=>({})}),zf=new We(""),VD=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=se(Hh)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Te(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Yi(i.loadComponent()).pipe(Ze(b_),Dt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),us(()=>{this.componentLoaders.delete(i)})),s=new as(r,()=>new Xt).pipe(os());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Te({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=zD(r,this.compiler,i,this.onLoadEndListener).pipe(us(()=>{this.childrenLoaders.delete(r)})),a=new as(o,()=>new Xt).pipe(os());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function zD(n,e,t,i){return Yi(n.loadChildren()).pipe(Ze(b_),At(r=>r instanceof Ro||Array.isArray(r)?Te(r):St(e.compileModuleAsync(r))),Ze(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(zf,[],{optional:!0,self:!0}).flat()),{routes:o.map(kf),injector:s}}))}function HD(n){return n&&typeof n=="object"&&"default"in n}function b_(n){return HD(n)?n.default:n}var Hf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(GD),providedIn:"root"});let n=e;return n})(),GD=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),WD=new We("");var jD=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Xt,this.transitionAbortSubject=new Xt,this.configLoader=se(VD),this.environmentInjector=se(Sn),this.urlSerializer=se(Lf),this.rootContexts=se(bl),this.location=se(jo),this.inputBindingEnabled=se(Uf,{optional:!0})!==null,this.titleStrategy=se(M_),this.options=se(Vf,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=se(Hf),this.createViewTransition=se(WD,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Te(void 0),this.rootComponentType=null;let i=s=>this.events.next(new vf(s)),r=s=>this.events.next(new yf(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(bt(pe(pe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Bt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:ea,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Mn(o=>o.id!==0),Ze(o=>bt(pe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),bn(o=>{let a=!1,c=!1;return Te(o).pipe(bn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",gn.SupersededByNewNavigation),hn;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?bt(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Ur(l.id,this.urlSerializer.serialize(l.rawUrl),h,hf.IgnoredSameUrlNavigation)),l.resolve(null),hn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Te(l).pipe(bn(h=>{let m=this.transitions?.getValue();return this.events.next(new ia(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?hn:Promise.resolve(h)}),LD(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Dt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=bt(pe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new gl(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:y,extras:p}=l,f=new ia(h,this.urlSerializer.serialize(m),g,y);this.events.next(f);let S=u_(this.rootComponentType).snapshot;return this.currentTransition=o=bt(pe({},l),{targetSnapshot:S,urlAfterRedirects:m,extras:bt(pe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Te(o)}else{let h="";return this.events.next(new Ur(l.id,this.urlSerializer.serialize(l.extractedUrl),h,hf.IgnoredByUrlHandlingStrategy)),l.resolve(null),hn}}),Dt(l=>{let u=new ff(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Ze(l=>(this.currentTransition=o=bt(pe({},l),{guards:KA(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),cD(this.environmentInjector,l=>this.events.next(l)),Dt(l=>{if(o.guardsResult=l.guardsResult,Ps(l.guardsResult))throw p_(this.urlSerializer,l.guardsResult);let u=new pf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),Mn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",gn.GuardRejected),!1)),of(l=>{if(l.guards.canActivateChecks.length)return Te(l).pipe(Dt(u=>{let d=new mf(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),bn(u=>{let d=!1;return Te(u).pipe(OD(this.paramsInheritanceStrategy,this.environmentInjector),Dt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",gn.NoDataFromResolver)}}))}),Dt(u=>{let d=new gf(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),of(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Dt(m=>{d.component=m}),Ze(()=>{})));for(let m of d.children)h.push(...u(m));return h};return Ya(u(l.targetSnapshot.root)).pipe(Oi(null),pi(1))}),of(()=>this.afterPreactivation()),bn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?St(d).pipe(Ze(()=>o)):Te(o)}),Ze(l=>{let u=WA(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=bt(pe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Dt(()=>{this.events.next(new sa)}),JA(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),pi(1),Dt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Fr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),ju(this.transitionAbortSubject.pipe(Dt(l=>{throw l}))),us(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",gn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Li(l=>{if(c=!0,g_(l))this.events.next(new Xi(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),qA(l)?this.events.next(new oa(l.url)):o.resolve(!1);else{this.events.next(new ra(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return hn}))}))}cancelNavigationTransition(i,r,s){let o=new Xi(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function $D(n){return n!==ea}var qD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(XD),providedIn:"root"});let n=e;return n})(),Nf=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},XD=(()=>{let e=class e extends Nf{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=mh(e)))(s||e)}})(),e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),w_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(YD),providedIn:"root"});let n=e;return n})(),YD=(()=>{let e=class e extends w_{constructor(){super(...arguments),this.location=se(jo),this.urlSerializer=se(Lf),this.options=se(Vf,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=se(Hf),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new qi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=u_(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof ia)this.stateMemento=this.createStateMemento();else if(i instanceof Ur)this.rawUrlTree=r.initialUrl;else if(i instanceof gl){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof sa?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Xi&&(i.code===gn.GuardRejected||i.code===gn.NoDataFromResolver)?this.restoreHistory(r):i instanceof ra?this.restoreHistory(r,!0):i instanceof Fr&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=mh(e)))(s||e)}})(),e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ko=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Ko||{});function ZD(n,e){n.events.pipe(Mn(t=>t instanceof Fr||t instanceof Xi||t instanceof ra||t instanceof Ur),Ze(t=>t instanceof Fr||t instanceof Ur?Ko.COMPLETE:(t instanceof Xi?t.code===gn.Redirect||t.code===gn.SupersededByNewNavigation:!1)?Ko.REDIRECTING:Ko.FAILED),Mn(t=>t!==Ko.REDIRECTING),pi(1)).subscribe(()=>{e()})}function JD(n){throw n}var KD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},QD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},E_=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=se(Qc),this.stateManager=se(w_),this.options=se(Vf,{optional:!0})||{},this.pendingTasks=se(zo),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=se(jD),this.urlSerializer=se(Lf),this.location=se(jo),this.urlHandlingStrategy=se(Hf),this._events=new Xt,this.errorHandler=this.options.errorHandler||JD,this.navigated=!1,this.routeReuseStrategy=se(qD),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=se(zf,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!se(Uf,{optional:!0}),this.eventsSubscription=new Ct,this.isNgZoneEnabled=se(vt)instanceof vt&&vt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Xi&&r.code!==gn.Redirect&&r.code!==gn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Fr)this.navigated=!0;else if(r instanceof oa){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||$D(s.source)};this.scheduleNavigation(a,ea,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}tI(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ea,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=pe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(kf),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=pe(pe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=o_(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return a_(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Ps(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,ea,null,r)}navigate(i,r={skipLocationChange:!1}){return eI(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=pe({},KD):r===!1?s=pe({},QD):s=r,Ps(i))return j0(this.currentUrlTree,i,s);let o=this.parseUrl(i);return j0(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return ZD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function eI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ee(4008,!1)}function tI(n){return!(n instanceof sa)&&!(n instanceof oa)}var nI=new We("");function S_(n,...e){return Sr([{provide:zf,multi:!0,useValue:n},[],{provide:Ns,useFactory:iI,deps:[E_]},{provide:Es,multi:!0,useFactory:rI},e.map(t=>t.\u0275providers)])}function iI(n){return n.routerState.root}function rI(){let n=se(Ar);return e=>{let t=n.get($i);if(e!==t.components[0])return;let i=n.get(E_),r=n.get(sI);n.get(oI)===1&&i.initialNavigation(),n.get(aI,null,$e.Optional)?.setUpPreloading(),n.get(nI,null,$e.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var sI=new We("",{factory:()=>new Xt}),oI=new We("",{providedIn:"root",factory:()=>1});var aI=new We("");var T_=[];var C_={providers:[S_(T_),W0()]};var nm="162";var cI=0,A_=1,lI=2;var eM=1,uI=2,Ti=3,or=0,ln=1,Ai=2,di=0,no=1,D_=2,I_=3,R_=4,dI=5,jr=100,hI=101,fI=102,P_=103,N_=104,pI=200,mI=201,gI=202,vI=203,bp=204,wp=205,yI=206,_I=207,xI=208,MI=209,bI=210,wI=211,EI=212,SI=213,TI=214,CI=0,AI=1,DI=2,$l=3,II=4,RI=5,PI=6,NI=7,tM=0,LI=1,OI=2,rr=0,FI=1,UI=2,kI=3,BI=4,VI=5,zI=6,HI=7;var L_=300,so=301,oo=302,Ep=303,Sp=304,pu=306,Tp=1e3,Yn=1001,Cp=1002,Jt=1003,O_=1004;var fa=1005;var an=1006,Gf=1007;var qr=1008;var sr=1009,GI=1010,WI=1011,im=1012,nM=1013,ir=1014,Di=1015,Zr=1016,iM=1017,rM=1018,Xr=1020,jI=1021,Zn=1023,$I=1024,qI=1025,Yr=1026,ao=1027,XI=1028,sM=1029,YI=1030,oM=1031,aM=1033,Wf=33776,jf=33777,$f=33778,qf=33779,F_=35840,U_=35841,k_=35842,B_=35843,cM=36196,V_=37492,z_=37496,H_=37808,G_=37809,W_=37810,j_=37811,$_=37812,q_=37813,X_=37814,Y_=37815,Z_=37816,J_=37817,K_=37818,Q_=37819,ex=37820,tx=37821,Xf=36492,nx=36494,ix=36495,ZI=36283,rx=36284,sx=36285,ox=36286;var ql=2300,Xl=2301,Yf=2302,ax=2400,cx=2401,lx=2402;var JI=3200,KI=3201,QI=0,eR=1,nr="",li="srgb",lr="srgb-linear",rm="display-p3",mu="display-p3-linear",Yl="linear",ft="srgb",Zl="rec709",Jl="p3";var Fs=7680;var ux=519,tR=512,nR=513,iR=514,lM=515,rR=516,sR=517,oR=518,aR=519,dx=35044;var hx="300 es",Ap=1035,Ii=2e3,Kl=2001,ar=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zf=Math.PI/180,Dp=180/Math.PI;function Sa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function cR(n,e){return(n%e+e)%e}function Jf(n,e,t){return(1-t)*n+t*e}function fx(n){return(n&n-1)===0&&n!==0}function Ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var it=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],y=r[0],p=r[3],f=r[6],S=r[1],M=r[4],w=r[7],I=r[2],C=r[5],T=r[8];return s[0]=o*y+a*S+c*I,s[3]=o*p+a*M+c*C,s[6]=o*f+a*w+c*T,s[1]=l*y+u*S+d*I,s[4]=l*p+u*M+d*C,s[7]=l*f+u*w+d*T,s[2]=h*y+m*S+g*I,s[5]=h*p+m*M+g*C,s[8]=h*f+m*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kf.makeScale(e,t)),this}rotate(e){return this.premultiply(Kf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kf=new ze;function uM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ql(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lR(){let n=Ql("canvas");return n.style.display="block",n}var px={};function uR(n){n in px||(px[n]=!0,console.warn(n))}var mx=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gx=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),El={[lr]:{transfer:Yl,primaries:Zl,toReference:n=>n,fromReference:n=>n},[li]:{transfer:ft,primaries:Zl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[mu]:{transfer:Yl,primaries:Jl,toReference:n=>n.applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx)},[rm]:{transfer:ft,primaries:Jl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx).convertLinearToSRGB()}},dR=new Set([lr,mu]),lt={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=El[e].toReference,r=El[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return El[n].primaries},getTransfer:function(n){return n===nr?Yl:El[n].transfer}};function io(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Us,eu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Ql("canvas")),Us.width=e.width,Us.height=e.height;let i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ql("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=io(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(io(t[i]/255)*255):t[i]=io(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hR=0,tu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ep(r[o].image)):s.push(ep(r[o]))}else s=ep(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ep(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fR=0,es=(()=>{class n extends ar{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Yn,s=Yn,o=an,a=qr,c=Zn,l=sr,u=n.DEFAULT_ANISOTROPY,d=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=Sa(),this.name="",this.source=new tu(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tp:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Cp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tp:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Cp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=L_,n.DEFAULT_ANISOTROPY=1,n})(),Ht=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,w=(m+1)/2,I=(f+1)/2,C=(u+h)/4,T=(d+y)/4,B=(g+p)/4;return M>w&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=T/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=B/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=T/s,r=B/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rp=class extends ar{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let s=new es(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new tu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Rp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nu=class extends es{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pp=class extends es{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*y,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let I=Math.sqrt(M),C=Math.atan2(I,f*S);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}let w=a*S;if(c=c*p+h*w,l=l*p+m*w,u=u*p+g*w,d=d*p+y*w,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tp.copy(this).projectOnVector(e),this.sub(tp)}reflect(e){return this.sub(tp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tp=new F,vx=new cr,Jr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Tl.subVectors(this.max,ma),ks.subVectors(e.a,ma),Bs.subVectors(e.b,ma),Vs.subVectors(e.c,ma),Zi.subVectors(Bs,ks),Ji.subVectors(Vs,Bs),kr.subVectors(ks,Vs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-kr.z,kr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,kr.z,0,-kr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-kr.y,kr.x,0];return!np(t,ks,Bs,Vs,Tl)||(t=[1,0,0,0,1,0,0,0,1],!np(t,ks,Bs,Vs,Tl))?!1:(Cl.crossVectors(Zi,Ji),t=[Cl.x,Cl.y,Cl.z],np(t,ks,Bs,Vs,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new F,new F,new F,new F,new F,new F,new F,new F],$n=new F,Sl=new Jr,ks=new F,Bs=new F,Vs=new F,Zi=new F,Ji=new F,kr=new F,ma=new F,Tl=new F,Cl=new F,Br=new F;function np(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Br.fromArray(n,s);let a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),c=e.dot(Br),l=t.dot(Br),u=i.dot(Br);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var pR=new Jr,ga=new F,ip=new F,xa=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):pR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ip.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(ip)),this.expandByPoint(ga.copy(e.center).sub(ip))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new F,rp=new F,Al=new F,Ki=new F,sp=new F,Dl=new F,op=new F,Np=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rp.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(rp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Al),a=Ki.dot(this.direction),c=-Ki.dot(Al),l=Ki.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(rp).addScaledVector(Al,h),m}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){sp.subVectors(t,e),Dl.subVectors(i,e),op.crossVectors(sp,Dl);let o=this.direction.dot(op),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(Dl.crossVectors(Ki,Dl));if(c<0)return null;let l=a*this.direction.dot(sp.cross(Ki));if(l<0||c+l>o)return null;let u=-a*Ki.dot(op);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,y=l*d;t[0]=h+y*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mR,e,gR)}lookAt(e,t,i){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Qi.crossVectors(i,vn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Qi.crossVectors(i,vn)),Qi.normalize(),Il.crossVectors(vn,Qi),r[0]=Qi.x,r[4]=Il.x,r[8]=vn.x,r[1]=Qi.y,r[5]=Il.y,r[9]=vn.y,r[2]=Qi.z,r[6]=Il.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],y=i[6],p=i[10],f=i[14],S=i[3],M=i[7],w=i[11],I=i[15],C=r[0],T=r[4],B=r[8],K=r[12],_=r[1],E=r[5],ee=r[9],J=r[13],D=r[2],G=r[6],z=r[10],$=r[14],H=r[3],j=r[7],q=r[11],ie=r[15];return s[0]=o*C+a*_+c*D+l*H,s[4]=o*T+a*E+c*G+l*j,s[8]=o*B+a*ee+c*z+l*q,s[12]=o*K+a*J+c*$+l*ie,s[1]=u*C+d*_+h*D+m*H,s[5]=u*T+d*E+h*G+m*j,s[9]=u*B+d*ee+h*z+m*q,s[13]=u*K+d*J+h*$+m*ie,s[2]=g*C+y*_+p*D+f*H,s[6]=g*T+y*E+p*G+f*j,s[10]=g*B+y*ee+p*z+f*q,s[14]=g*K+y*J+p*$+f*ie,s[3]=S*C+M*_+w*D+I*H,s[7]=S*T+M*E+w*G+I*j,s[11]=S*B+M*ee+w*z+I*q,s[15]=S*K+M*J+w*$+I*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+y*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],S=d*p*l-y*h*l+y*c*m-a*p*m-d*c*f+a*h*f,M=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,w=u*y*l-g*d*l+g*a*m-o*y*m-u*a*f+o*d*f,I=g*d*c-u*y*c-g*a*h+o*y*h+u*a*p-o*d*p,C=t*S+i*M+r*w+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=S*T,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*s-y*c*s+y*r*l-i*p*l-a*r*f+i*c*f)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*T,e[4]=M*T,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*T,e[8]=w*T,e[9]=(g*d*s-u*y*s-g*i*m+t*y*m+u*i*f-t*d*f)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*f+t*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*T,e[12]=I*T,e[13]=(u*y*r-g*d*r+g*i*h-t*y*h-u*i*p+t*d*p)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,y=o*u,p=o*d,f=a*d,S=c*l,M=c*u,w=c*d,I=i.x,C=i.y,T=i.z;return r[0]=(1-(y+f))*I,r[1]=(m+w)*I,r[2]=(g-M)*I,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(h+f))*C,r[6]=(p+S)*C,r[7]=0,r[8]=(g+M)*T,r[9]=(p-S)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=zs.set(r[0],r[1],r[2]).length(),o=zs.set(r[4],r[5],r[6]).length(),a=zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);let l=1/s,u=1/o,d=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ii){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===Ii)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Kl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ii){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,y;if(a===Ii)g=(o+s)*d,y=-2*d;else if(a===Kl)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},zs=new F,qn=new Ft,mR=new F(0,0,0),gR=new F(1,1,1),Qi=new F,Il=new F,vn=new F,yx=new Ft,_x=new cr,co=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(cn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return yx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return _x.setFromEuler(this),this.setFromQuaternion(_x,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),iu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vR=0,xx=new F,Hs=new cr,wi=new Ft,Rl=new F,va=new F,yR=new F,_R=new cr,Mx=new F(1,0,0),bx=new F(0,1,0),wx=new F(0,0,1),xR={type:"added"},MR={type:"removed"},ap={type:"childadded",child:null},cp={type:"childremoved",child:null},po=(()=>{class n extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new co,r=new cr,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ze}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Mx,t)}rotateY(t){return this.rotateOnAxis(bx,t)}rotateZ(t){return this.rotateOnAxis(wx,t)}translateOnAxis(t,i){return xx.copy(t).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Mx,t)}translateY(t){return this.translateOnAxis(bx,t)}translateZ(t){return this.translateOnAxis(wx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Rl.copy(t):Rl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(va,Rl,this.up):wi.lookAt(Rl,va,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(wi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xR),ap.child=t,this.dispatchEvent(ap),ap.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(MR),cp.child=t,this.dispatchEvent(cp),cp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,yR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,_R,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Xn=new F,Ei=new F,lp=new F,Si=new F,Gs=new F,Ws=new F,Ex=new F,up=new F,dp=new F,hp=new F,Ks=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Ei.subVectors(i,t),lp.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(Ei),c=Xn.dot(lp),l=Ei.dot(Ei),u=Ei.dot(lp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Ei.subVectors(e,t),Xn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Xn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Gs.subVectors(r,i),Ws.subVectors(s,i),up.subVectors(e,i);let c=Gs.dot(up),l=Ws.dot(up);if(c<=0&&l<=0)return t.copy(i);dp.subVectors(e,r);let u=Gs.dot(dp),d=Ws.dot(dp);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Gs,o);hp.subVectors(e,s);let m=Gs.dot(hp),g=Ws.dot(hp);if(g>=0&&m<=g)return t.copy(s);let y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ws,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Ex.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Ex,a);let f=1/(p+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function fp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=cR(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fp(o,s,e+1/3),this.g=fp(o,s,e),this.b=fp(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=li){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){let i=dM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=Qf(e.r),this.g=Qf(e.g),this.b=Qf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return lt.fromWorkingColorSpace($t.copy(this),e),Math.round(cn($t.r*255,0,255))*65536+Math.round(cn($t.g*255,0,255))*256+Math.round(cn($t.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=li){lt.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,r=$t.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Pl);let i=Jf(er.h,Pl.h,t),r=Jf(er.s,Pl.s,t),s=Jf(er.l,Pl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new rt;rt.NAMES=dM;var bR=0,lo=class extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=no,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=wp,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bp&&(i.blendSrc=this.blendSrc),this.blendDst!==wp&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ux&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ru=class extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new co,this.combine=tM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new F,Nl=new it,Pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uR("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dx&&(e.usage=this.usage),e}};var su=class extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ou=class extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Nn=class extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},wR=0,Rn=new Ft,pp=new po,js=new F,yn=new Jr,ya=new Jr,Ot=new F,Ri=class n extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uM(e)?ou:su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return pp.lookAt(e),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(yn.min,ya.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,ya.max),yn.expandByPoint(Ot)):(yn.expandByPoint(ya.min),yn.expandByPoint(ya.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),Ot.add(js)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new F,c[B]=new F;let l=new F,u=new F,d=new F,h=new it,m=new it,g=new it,y=new F,p=new F;function f(B,K,_){l.fromBufferAttribute(i,B),u.fromBufferAttribute(i,K),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,B),m.fromBufferAttribute(s,K),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),m.sub(h),g.sub(h);let E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(E),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(E),a[B].add(y),a[K].add(y),a[_].add(y),c[B].add(p),c[K].add(p),c[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let B=0,K=S.length;B<K;++B){let _=S[B],E=_.start,ee=_.count;for(let J=E,D=E+ee;J<D;J+=3)f(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let M=new F,w=new F,I=new F,C=new F;function T(B){I.fromBufferAttribute(r,B),C.copy(I);let K=a[B];M.copy(K),M.sub(I.multiplyScalar(I.dot(K))).normalize(),w.crossVectors(C,K);let E=w.dot(c[B])<0?-1:1;o.setXYZW(B,M.x,M.y,M.z,E)}for(let B=0,K=S.length;B<K;++B){let _=S[B],E=_.start,ee=_.count;for(let J=E,D=E+ee;J<D;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Pn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sx=new Ft,Vr=new Np,Ll=new xa,Tx=new F,$s=new F,qs=new F,Xs=new F,mp=new F,Ol=new F,Fl=new it,Ul=new it,kl=new it,Cx=new F,Ax=new F,Dx=new F,Bl=new F,Vl=new F,Qt=class extends po{constructor(e=new Ri,t=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(mp.fromBufferAttribute(d,e),o?Ol.addScaledVector(mp,u):Ol.addScaledVector(mp.sub(t),u))}t.add(Ol)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Ll,Tx)===null||Vr.origin.distanceToSquared(Tx)>(e.far-e.near)**2))&&(Sx.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Sx),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,I=M;w<I;w+=3){let C=a.getX(w),T=a.getX(w+1),B=a.getX(w+2);r=zl(this,f,e,i,l,u,d,C,T,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=a.getX(p),M=a.getX(p+1),w=a.getX(p+2);r=zl(this,o,e,i,l,u,d,S,M,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,I=M;w<I;w+=3){let C=w,T=w+1,B=w+2;r=zl(this,f,e,i,l,u,d,C,T,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=p,M=p+1,w=p+2;r=zl(this,o,e,i,l,u,d,S,M,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function ER(n,e,t,i,r,s,o,a){let c;if(e.side===ln?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===or,a),c===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Vl);return l<t.near||l>t.far?null:{distance:l,point:Vl.clone(),object:n}}function zl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,$s),n.getVertexPosition(c,qs),n.getVertexPosition(l,Xs);let u=ER(n,e,t,i,$s,qs,Xs,Bl);if(u){r&&(Fl.fromBufferAttribute(r,a),Ul.fromBufferAttribute(r,c),kl.fromBufferAttribute(r,l),u.uv=Ks.getInterpolation(Bl,$s,qs,Xs,Fl,Ul,kl,new it)),s&&(Fl.fromBufferAttribute(s,a),Ul.fromBufferAttribute(s,c),kl.fromBufferAttribute(s,l),u.uv1=Ks.getInterpolation(Bl,$s,qs,Xs,Fl,Ul,kl,new it)),o&&(Cx.fromBufferAttribute(o,a),Ax.fromBufferAttribute(o,c),Dx.fromBufferAttribute(o,l),u.normal=Ks.getInterpolation(Bl,$s,qs,Xs,Cx,Ax,Dx,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};Ks.getNormal($s,qs,Xs,d.normal),u.face=d}return u}var Ma=class n extends Ri{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(d,2));function g(y,p,f,S,M,w,I,C,T,B,K){let _=w/T,E=I/B,ee=w/2,J=I/2,D=C/2,G=T+1,z=B+1,$=0,H=0,j=new F;for(let q=0;q<z;q++){let ie=q*E-J;for(let de=0;de<G;de++){let Oe=de*_-ee;j[y]=Oe*S,j[p]=ie*M,j[f]=D,l.push(j.x,j.y,j.z),j[y]=0,j[p]=0,j[f]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(de/T),d.push(1-q/B),$+=1}}for(let q=0;q<B;q++)for(let ie=0;ie<T;ie++){let de=h+ie+G*q,Oe=h+ie+G*(q+1),k=h+(ie+1)+G*(q+1),Y=h+(ie+1)+G*q;c.push(de,Oe,Y),c.push(Oe,k,Y),H+=6}a.addGroup(m,H,K),m+=H,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function uo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=uo(n[t]);for(let r in i)e[r]=i[r]}return e}function SR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hM(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}var sm={clone:uo,merge:Zt},TR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TR,this.fragmentShader=CR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=SR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},au=class extends po{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new F,Ix=new it,Rx=new it,Kt=class extends au{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dp*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Ix,Rx),t.subVectors(Rx,Ix)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,Zs=1,Lp=class extends po{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let s=new Kt(Ys,Zs,e,t);s.layers=this.layers,this.add(s);let o=new Kt(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let c=new Kt(Ys,Zs,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Ys,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},cu=class extends es{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Op=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ma(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:di});s.uniforms.tEquirect.value=t;let o=new Qt(r,s),a=t.minFilter;return t.minFilter===qr&&(t.minFilter=an),new Lp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},gp=new F,AR=new F,DR=new ze,Ci=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=gp.subVectors(i,t).cross(AR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||DR.getNormalMatrix(e),r=this.coplanarPoint(gp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zr=new xa,Hl=new F,lu=class{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],y=r[10],p=r[11],f=r[12],S=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-s,h-l,p-m,w-f).normalize(),i[1].setComponents(c+s,h+l,p+m,w+f).normalize(),i[2].setComponents(c+o,h+u,p+g,w+S).normalize(),i[3].setComponents(c-o,h-u,p-g,w-S).normalize(),i[4].setComponents(c-a,h-d,p-y,w-M).normalize(),t===Ii)i[5].setComponents(c+a,h+d,p+y,w+M).normalize();else if(t===Kl)i[5].setComponents(a,d,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function IR(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){let f=g[y];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var ho=class n extends Ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],y=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let M=0;M<l;M++){let w=M*d-s;g.push(w,-S,0),y.push(0,0,1),p.push(M/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let M=S+l*f,w=S+l*(f+1),I=S+1+l*(f+1),C=S+1+l*f;m.push(M,w,C),m.push(w,I,C)}this.setIndex(m),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},RR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,QR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_P=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,RP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:RR,alphahash_pars_fragment:PR,alphamap_fragment:NR,alphamap_pars_fragment:LR,alphatest_fragment:OR,alphatest_pars_fragment:FR,aomap_fragment:UR,aomap_pars_fragment:kR,batching_pars_vertex:BR,batching_vertex:VR,begin_vertex:zR,beginnormal_vertex:HR,bsdfs:GR,iridescence_fragment:WR,bumpmap_pars_fragment:jR,clipping_planes_fragment:$R,clipping_planes_pars_fragment:qR,clipping_planes_pars_vertex:XR,clipping_planes_vertex:YR,color_fragment:ZR,color_pars_fragment:JR,color_pars_vertex:KR,color_vertex:QR,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:o1,colorspace_fragment:a1,colorspace_pars_fragment:c1,envmap_fragment:l1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:E1,envmap_vertex:f1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:v1,gradientmap_pars_fragment:y1,lightmap_fragment:_1,lightmap_pars_fragment:x1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:b1,lights_pars_begin:w1,lights_toon_fragment:S1,lights_toon_pars_fragment:T1,lights_phong_fragment:C1,lights_phong_pars_fragment:A1,lights_physical_fragment:D1,lights_physical_pars_fragment:I1,lights_fragment_begin:R1,lights_fragment_maps:P1,lights_fragment_end:N1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:O1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:U1,map_fragment:k1,map_pars_fragment:B1,map_particle_fragment:V1,map_particle_pars_fragment:z1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphinstance_vertex:W1,morphcolor_vertex:j1,morphnormal_vertex:$1,morphtarget_pars_vertex:q1,morphtarget_vertex:X1,normal_fragment_begin:Y1,normal_fragment_maps:Z1,normal_pars_fragment:J1,normal_pars_vertex:K1,normal_vertex:Q1,normalmap_pars_fragment:eP,clearcoat_normal_fragment_begin:tP,clearcoat_normal_fragment_maps:nP,clearcoat_pars_fragment:iP,iridescence_pars_fragment:rP,opaque_fragment:sP,packing:oP,premultiplied_alpha_fragment:aP,project_vertex:cP,dithering_fragment:lP,dithering_pars_fragment:uP,roughnessmap_fragment:dP,roughnessmap_pars_fragment:hP,shadowmap_pars_fragment:fP,shadowmap_pars_vertex:pP,shadowmap_vertex:mP,shadowmask_pars_fragment:gP,skinbase_vertex:vP,skinning_pars_vertex:yP,skinning_vertex:_P,skinnormal_vertex:xP,specularmap_fragment:MP,specularmap_pars_fragment:bP,tonemapping_fragment:wP,tonemapping_pars_fragment:EP,transmission_fragment:SP,transmission_pars_fragment:TP,uv_pars_fragment:CP,uv_pars_vertex:AP,uv_vertex:DP,worldpos_vertex:IP,background_vert:RP,background_frag:PP,backgroundCube_vert:NP,backgroundCube_frag:LP,cube_vert:OP,cube_frag:FP,depth_vert:UP,depth_frag:kP,distanceRGBA_vert:BP,distanceRGBA_frag:VP,equirect_vert:zP,equirect_frag:HP,linedashed_vert:GP,linedashed_frag:WP,meshbasic_vert:jP,meshbasic_frag:$P,meshlambert_vert:qP,meshlambert_frag:XP,meshmatcap_vert:YP,meshmatcap_frag:ZP,meshnormal_vert:JP,meshnormal_frag:KP,meshphong_vert:QP,meshphong_frag:eN,meshphysical_vert:tN,meshphysical_frag:nN,meshtoon_vert:iN,meshtoon_frag:rN,points_vert:sN,points_frag:oN,shadow_vert:aN,shadow_frag:cN,sprite_vert:lN,sprite_frag:uN},ne={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ui={basic:{uniforms:Zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Zt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Zt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Zt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Zt([ne.points,ne.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Zt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Zt([ne.common,ne.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Zt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Zt([ne.sprite,ne.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Zt([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Zt([ne.lights,ne.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ui.physical={uniforms:Zt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Gl={r:0,b:0,g:0},Hr=new co,dN=new Ft;function hN(n,e,t,i,r,s,o){let a=new rt(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let S=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?y(a,c):M&&M.isColor&&(y(M,1),S=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===pu)?(u===void 0&&(u=new Qt(new Ma(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:uo(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hr.copy(f.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dN.makeRotationFromEuler(Hr)),u.material.toneMapped=lt.getTransfer(M.colorSpace)!==ft,(d!==M||h!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Qt(new ho(2,2),new en({name:"BackgroundMaterial",uniforms:uo(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,f){p.getRGB(Gl,hM(n)),i.buffers.color.setClear(Gl.r,Gl.g,Gl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:g}}function fN(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(D,G,z,$,H){let j=!1;if(o){let q=y($,z,G);l!==q&&(l=q,m(l.object)),j=f(D,$,z,H),j&&S(D,$,z,H)}else{let q=G.wireframe===!0;(l.geometry!==$.id||l.program!==z.id||l.wireframe!==q)&&(l.geometry=$.id,l.program=z.id,l.wireframe=q,j=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,B(D,G,z,$),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,G,z){let $=z.wireframe===!0,H=a[D.id];H===void 0&&(H={},a[D.id]=H);let j=H[G.id];j===void 0&&(j={},H[G.id]=j);let q=j[$];return q===void 0&&(q=p(h()),j[$]=q),q}function p(D){let G=[],z=[],$=[];for(let H=0;H<r;H++)G[H]=0,z[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,G,z,$){let H=l.attributes,j=G.attributes,q=0,ie=z.getAttributes();for(let de in ie)if(ie[de].location>=0){let k=H[de],Y=j[de];if(Y===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),k===void 0||k.attribute!==Y||Y&&k.data!==Y.data)return!0;q++}return l.attributesNum!==q||l.index!==$}function S(D,G,z,$){let H={},j=G.attributes,q=0,ie=z.getAttributes();for(let de in ie)if(ie[de].location>=0){let k=j[de];k===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));let Y={};Y.attribute=k,k&&k.data&&(Y.data=k.data),H[de]=Y,q++}l.attributes=H,l.attributesNum=q,l.index=$}function M(){let D=l.newAttributes;for(let G=0,z=D.length;G<z;G++)D[G]=0}function w(D){I(D,0)}function I(D,G){let z=l.newAttributes,$=l.enabledAttributes,H=l.attributeDivisors;z[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),H[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),H[D]=G)}function C(){let D=l.newAttributes,G=l.enabledAttributes;for(let z=0,$=G.length;z<$;z++)G[z]!==D[z]&&(n.disableVertexAttribArray(z),G[z]=0)}function T(D,G,z,$,H,j,q){q===!0?n.vertexAttribIPointer(D,G,z,H,j):n.vertexAttribPointer(D,G,z,$,H,j)}function B(D,G,z,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let H=$.attributes,j=z.getAttributes(),q=G.defaultAttributeValues;for(let ie in j){let de=j[ie];if(de.location>=0){let Oe=H[ie];if(Oe===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Oe=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Oe=D.instanceColor)),Oe!==void 0){let k=Oe.normalized,Y=Oe.itemSize,ue=t.get(Oe);if(ue===void 0)continue;let Ce=ue.buffer,ve=ue.type,he=ue.bytesPerElement,at=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||Oe.gpuType===nM);if(Oe.isInterleavedBufferAttribute){let Ae=Oe.data,P=Ae.stride,Ut=Oe.offset;if(Ae.isInstancedInterleavedBuffer){for(let _e=0;_e<de.locationSize;_e++)I(de.location+_e,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let _e=0;_e<de.locationSize;_e++)w(de.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let _e=0;_e<de.locationSize;_e++)T(de.location+_e,Y/de.locationSize,ve,k,P*he,(Ut+Y/de.locationSize*_e)*he,at)}else{if(Oe.isInstancedBufferAttribute){for(let Ae=0;Ae<de.locationSize;Ae++)I(de.location+Ae,Oe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ae=0;Ae<de.locationSize;Ae++)w(de.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<de.locationSize;Ae++)T(de.location+Ae,Y/de.locationSize,ve,k,Y*he,Y/de.locationSize*Ae*he,at)}}else if(q!==void 0){let k=q[ie];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(de.location,k);break;case 3:n.vertexAttrib3fv(de.location,k);break;case 4:n.vertexAttrib4fv(de.location,k);break;default:n.vertexAttrib1fv(de.location,k)}}}}C()}function K(){ee();for(let D in a){let G=a[D];for(let z in G){let $=G[z];for(let H in $)g($[H].object),delete $[H];delete G[z]}delete a[D]}}function _(D){if(a[D.id]===void 0)return;let G=a[D.id];for(let z in G){let $=G[z];for(let H in $)g($[H].object),delete $[H];delete G[z]}delete a[D.id]}function E(D){for(let G in a){let z=a[G];if(z[D.id]===void 0)continue;let $=z[D.id];for(let H in $)g($[H].object),delete $[H];delete z[D.id]}}function ee(){J(),u=!0,l!==c&&(l=c,m(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:J,dispose:K,releaseStatesOfGeometry:_,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:w,disableUnusedAttributes:C}}function pN(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function mN(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,w=o||e.has("OES_texture_float"),I=M&&w,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:C}}function gN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ci,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,M=S*4,w=f.clippingState||null;c.value=w,w=u(g,h,M,m);for(let I=0;I!==M;++I)w[I]=t[I];f.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let f=m+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,w=m;M!==y;++M,w+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function vN(n){let e=new WeakMap;function t(o,a){return a===Ep?o.mapping=so:a===Sp&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ep||a===Sp)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Op(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ba=class extends au{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qs=4,Px=[.125,.215,.35,.446,.526,.582],$r=20,vp=new ba,Nx=new rt,yp=null,_p=0,xp=0,Wr=(1+Math.sqrt(5))/2,Js=1/Wr,Lx=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Wr,Js),new F(0,Wr,-Js),new F(Js,0,Wr),new F(-Js,0,Wr),new F(Wr,Js,0),new F(-Wr,Js,0)],uu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ux(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yp,_p,xp),e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Zr,format:Zn,colorSpace:lr,depthBuffer:!1},r=Ox(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ox(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yN(s)),this._blurMaterial=_N(s,e,t)}return r}_compileMaterial(e){let t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,vp)}_sceneToCubeUV(e,t,i,r){let a=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Nx),u.toneMapping=rr,u.autoClear=!1;let m=new ru({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Qt(new Ma,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Nx),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let M=this._cubeSize;Wl(r,S*M,f>2?M:0,M,M),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ux()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Wl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,vp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lx[(r-1)%Lx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Qt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$r-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):$r;p>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$r}`);let f=[],S=0;for(let T=0;T<$r;++T){let B=T/y,K=Math.exp(-B*B/2);f.push(K),T===0?S+=K:T<p&&(S+=2*K)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let w=this._sizeLods[r],I=3*w*(r>M-Qs?r-M+Qs:0),C=4*(this._cubeSize-w);Wl(t,I,C,3*w,2*w),c.setRenderTarget(t),c.render(d,vp)}};function yN(n){let e=[],t=[],i=[],r=n,s=n-Qs+1+Px.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Qs?c=Px[o-n+Qs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,f=1,S=new Float32Array(y*g*m),M=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,B=C>2?0:-1,K=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];S.set(K,y*g*C),M.set(h,p*g*C);let _=[C,C,C,C,C,C];w.set(_,f*g*C)}let I=new Ri;I.setAttribute("position",new Pn(S,y)),I.setAttribute("uv",new Pn(M,p)),I.setAttribute("faceIndex",new Pn(w,f)),e.push(I),r>Qs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ox(n,e,t){let i=new Jn(n,e,t);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _N(n,e,t){let i=new Float32Array($r),r=new F(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Fx(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ux(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function om(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ep||c===Sp,u=c===so||c===oo;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new uu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new uu(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bN(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let S=m.array;y=m.version;for(let M=0,w=S.length;M<w;M+=3){let I=S[M+0],C=S[M+1],T=S[M+2];h.push(I,C,C,T,T,I)}}else if(g!==void 0){let S=g.array;y=g.version;for(let M=0,w=S.length/3-1;M<w;M+=3){let I=M+0,C=M+1,T=M+2;h.push(I,C,C,T,T,I)}}else return;let p=new(uM(h)?ou:su)(h,1);p.version=y;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function wN(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,y){if(y===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,y),t.update(g,s,y)}function h(m,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,y);let f=0;for(let S=0;S<y;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function EN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function SN(n,e){return n[0]-e[0]}function TN(n,e){return Math.abs(e[1])-Math.abs(n[1])}function CN(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==y){let J=function(){E.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();let f=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],T=0;f===!0&&(T=1),S===!0&&(T=2),M===!0&&(T=3);let B=u.attributes.position.count*T,K=1;B>e.maxTextureSize&&(K=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);let _=new Float32Array(B*K*4*y),E=new nu(_,B,K,y);E.type=Di,E.needsUpdate=!0;let ee=T*4;for(let D=0;D<y;D++){let G=w[D],z=I[D],$=C[D],H=B*K*4*D;for(let j=0;j<G.count;j++){let q=j*ee;f===!0&&(o.fromBufferAttribute(G,j),_[H+q+0]=o.x,_[H+q+1]=o.y,_[H+q+2]=o.z,_[H+q+3]=0),S===!0&&(o.fromBufferAttribute(z,j),_[H+q+4]=o.x,_[H+q+5]=o.y,_[H+q+6]=o.z,_[H+q+7]=0),M===!0&&(o.fromBufferAttribute($,j),_[H+q+8]=o.x,_[H+q+9]=o.y,_[H+q+10]=o.z,_[H+q+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:E,size:new it(B,K)},s.set(u,p),u.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let f=0;for(let M=0;M<h.length;M++)f+=h[M];let S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let w=0;w<g;w++)y[w]=[w,0];i[u.id]=y}for(let w=0;w<g;w++){let I=y[w];I[0]=w,I[1]=h[w]}y.sort(TN);for(let w=0;w<8;w++)w<g&&y[w][1]?(a[w][0]=y[w][0],a[w][1]=y[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(SN);let p=u.morphAttributes.position,f=u.morphAttributes.normal,S=0;for(let w=0;w<8;w++){let I=a[w],C=I[0],T=I[1];C!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+w)!==p[C]&&u.setAttribute("morphTarget"+w,p[C]),f&&u.getAttribute("morphNormal"+w)!==f[C]&&u.setAttribute("morphNormal"+w,f[C]),r[w]=T,S+=T):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}let M=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function AN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var du=class extends es{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Yr,u!==Yr&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yr&&(i=ir),i===void 0&&u===ao&&(i=Xr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pM=new es,mM=new du(1,1);mM.compareFunction=lM;var gM=new nu,vM=new Pp,yM=new cu,kx=[],Bx=[],Vx=new Float32Array(16),zx=new Float32Array(9),Hx=new Float32Array(4);function mo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=kx[r];if(s===void 0&&(s=new Float32Array(r),kx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gu(n,e){let t=Bx[e];t===void 0&&(t=new Int32Array(e),Bx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function RN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function PN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function NN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(It(t,i))return;Hx.set(i),n.uniformMatrix2fv(this.addr,!1,Hx),Rt(t,i)}}function LN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(It(t,i))return;zx.set(i),n.uniformMatrix3fv(this.addr,!1,zx),Rt(t,i)}}function ON(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(It(t,i))return;Vx.set(i),n.uniformMatrix4fv(this.addr,!1,Vx),Rt(t,i)}}function FN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function kN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function BN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function VN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function HN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function GN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function WN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?mM:pM;t.setTexture2D(e||s,r)}function jN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vM,r)}function $N(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yM,r)}function qN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gM,r)}function XN(n){switch(n){case 5126:return DN;case 35664:return IN;case 35665:return RN;case 35666:return PN;case 35674:return NN;case 35675:return LN;case 35676:return ON;case 5124:case 35670:return FN;case 35667:case 35671:return UN;case 35668:case 35672:return kN;case 35669:case 35673:return BN;case 5125:return VN;case 36294:return zN;case 36295:return HN;case 36296:return GN;case 35678:case 36198:case 36298:case 36306:case 35682:return WN;case 35679:case 36299:case 36307:return jN;case 35680:case 36300:case 36308:case 36293:return $N;case 36289:case 36303:case 36311:case 36292:return qN}}function YN(n,e){n.uniform1fv(this.addr,e)}function ZN(n,e){let t=mo(e,this.size,2);n.uniform2fv(this.addr,t)}function JN(n,e){let t=mo(e,this.size,3);n.uniform3fv(this.addr,t)}function KN(n,e){let t=mo(e,this.size,4);n.uniform4fv(this.addr,t)}function QN(n,e){let t=mo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eL(n,e){let t=mo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tL(n,e){let t=mo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nL(n,e){n.uniform1iv(this.addr,e)}function iL(n,e){n.uniform2iv(this.addr,e)}function rL(n,e){n.uniform3iv(this.addr,e)}function sL(n,e){n.uniform4iv(this.addr,e)}function oL(n,e){n.uniform1uiv(this.addr,e)}function aL(n,e){n.uniform2uiv(this.addr,e)}function cL(n,e){n.uniform3uiv(this.addr,e)}function lL(n,e){n.uniform4uiv(this.addr,e)}function uL(n,e,t){let i=this.cache,r=e.length,s=gu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pM,s[o])}function dL(n,e,t){let i=this.cache,r=e.length,s=gu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vM,s[o])}function hL(n,e,t){let i=this.cache,r=e.length,s=gu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yM,s[o])}function fL(n,e,t){let i=this.cache,r=e.length,s=gu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gM,s[o])}function pL(n){switch(n){case 5126:return YN;case 35664:return ZN;case 35665:return JN;case 35666:return KN;case 35674:return QN;case 35675:return eL;case 35676:return tL;case 5124:case 35670:return nL;case 35667:case 35671:return iL;case 35668:case 35672:return rL;case 35669:case 35673:return sL;case 5125:return oL;case 36294:return aL;case 36295:return cL;case 36296:return lL;case 35678:case 36198:case 36298:case 36306:case 35682:return uL;case 35679:case 36299:case 36307:return dL;case 35680:case 36300:case 36308:case 36293:return hL;case 36289:case 36303:case 36311:case 36292:return fL}}var Fp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XN(t.type)}},Up=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pL(t.type)}},kp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Mp=/(\w+)(\])?(\[|\.)?/g;function Gx(n,e){n.seq.push(e),n.map[e.id]=e}function mL(n,e,t){let i=n.name,r=i.length;for(Mp.lastIndex=0;;){let s=Mp.exec(i),o=Mp.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gx(t,l===void 0?new Fp(a,n,e):new Up(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new kp(a),Gx(t,d)),t=d}}}var ro=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mL(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Wx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gL=37297,vL=0;function yL(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function _L(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===Jl&&t===Zl?i="LinearDisplayP3ToLinearSRGB":e===Zl&&t===Jl&&(i="LinearSRGBToLinearDisplayP3"),n){case lr:case mu:return[i,"LinearTransferOETF"];case li:case rm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yL(n.getShaderSource(e),o)}else return r}function xL(n,e){let t=_L(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ML(n,e){let t;switch(e){case FI:t="Linear";break;case UI:t="Reinhard";break;case kI:t="OptimizedCineon";break;case BI:t="ACESFilmic";break;case zI:t="AgX";break;case HI:t="Neutral";break;case VI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eo).join(`
`)}function wL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function EL(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SL(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function eo(n){return n!==""}function $x(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var TL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(n){return n.replace(TL,AL)}var CL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AL(n,e){let t=Ve[e];if(t===void 0){let i=CL.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bp(t)}var DL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(n){return n.replace(DL,IL)}function IL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uI?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function PL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function LL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tM:e="ENVMAP_BLENDING_MULTIPLY";break;case LI:e="ENVMAP_BLENDING_MIX";break;case OI:e="ENVMAP_BLENDING_ADD";break}return e}function OL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=RL(t),l=PL(t),u=NL(t),d=LL(t),h=OL(t),m=t.isWebGL2?"":bL(t),g=wL(t),y=EL(s),p=r.createProgram(),f,S,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(eo).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(eo).join(`
`),S.length>0&&(S+=`
`)):(f=[Yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),S=[m,Yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?Ve.tonemapping_pars_fragment:"",t.toneMapping!==rr?ML("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,xL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),o=Bp(o),o=$x(o,t),o=qx(o,t),a=Bp(a),a=$x(a,t),a=qx(a,t),o=Xx(o),a=Xx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=M+f+o,I=M+S+a,C=Wx(r,r.VERTEX_SHADER,w),T=Wx(r,r.FRAGMENT_SHADER,I);r.attachShader(p,C),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B(ee){if(n.debug.checkShaderErrors){let J=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(T).trim(),z=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,T);else{let H=jx(r,C,"vertex"),j=jx(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+J+`
`+H+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||G==="")&&($=!1);$&&(ee.diagnostics={runnable:z,programLog:J,vertexShader:{log:D,prefix:f},fragmentShader:{log:G,prefix:S}})}r.deleteShader(C),r.deleteShader(T),K=new ro(r,p),_=SL(r,p)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let _;this.getAttributes=function(){return _===void 0&&B(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,gL)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vL++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=T,this}var UL=0,Vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zp(e),t.set(e,i)),i}},zp=class{constructor(e){this.id=UL++,this.code=e,this.usedTimes=0}};function kL(n,e,t,i,r,s,o){let a=new iu,c=new Vp,l=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,E,ee,J,D){let G=J.fog,z=D.geometry,$=_.isMeshStandardMaterial?J.environment:null,H=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),j=H&&H.mapping===pu?H.image.height:null,q=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=ie!==void 0?ie.length:0,Oe=0;z.morphAttributes.position!==void 0&&(Oe=1),z.morphAttributes.normal!==void 0&&(Oe=2),z.morphAttributes.color!==void 0&&(Oe=3);let k,Y,ue,Ce;if(q){let dt=ui[q];k=dt.vertexShader,Y=dt.fragmentShader}else k=_.vertexShader,Y=_.fragmentShader,c.update(_),ue=c.getVertexShaderID(_),Ce=c.getFragmentShaderID(_);let ve=n.getRenderTarget(),he=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,Ae=!!_.map,P=!!_.matcap,Ut=!!H,_e=!!_.aoMap,je=!!_.lightMap,Me=!!_.bumpMap,Je=!!_.normalMap,He=!!_.displacementMap,qe=!!_.emissiveMap,xt=!!_.metalnessMap,b=!!_.roughnessMap,v=_.anisotropy>0,V=_.clearcoat>0,W=_.iridescence>0,Z=_.sheen>0,X=_.transmission>0,Fe=v&&!!_.anisotropyMap,we=V&&!!_.clearcoatMap,re=V&&!!_.clearcoatNormalMap,ae=V&&!!_.clearcoatRoughnessMap,Ue=W&&!!_.iridescenceMap,Q=W&&!!_.iridescenceThicknessMap,Et=Z&&!!_.sheenColorMap,Xe=Z&&!!_.sheenRoughnessMap,ye=!!_.specularMap,fe=!!_.specularColorMap,me=!!_.specularIntensityMap,Ke=X&&!!_.transmissionMap,Pe=X&&!!_.thicknessMap,pt=!!_.gradientMap,A=!!_.alphaMap,oe=_.alphaTest>0,L=!!_.alphaHash,te=!!_.extensions,ce=rr;_.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Ye={isWebGL2:d,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:Y,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:at,instancing:he,instancingColor:he&&D.instanceColor!==null,instancingMorph:he&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:lr,alphaToCoverage:!!_.alphaToCoverage,map:Ae,matcap:P,envMap:Ut,envMapMode:Ut&&H.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:je,bumpMap:Me,normalMap:Je,displacementMap:m&&He,emissiveMap:qe,normalMapObjectSpace:Je&&_.normalMapType===eR,normalMapTangentSpace:Je&&_.normalMapType===QI,metalnessMap:xt,roughnessMap:b,anisotropy:v,anisotropyMap:Fe,clearcoat:V,clearcoatMap:we,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:W,iridescenceMap:Ue,iridescenceThicknessMap:Q,sheen:Z,sheenColorMap:Et,sheenRoughnessMap:Xe,specularMap:ye,specularColorMap:fe,specularIntensityMap:me,transmission:X,transmissionMap:Ke,thicknessMap:Pe,gradientMap:pt,opaque:_.transparent===!1&&_.blending===no&&_.alphaToCoverage===!1,alphaMap:A,alphaTest:oe,alphaHash:L,combine:_.combine,mapUv:Ae&&p(_.map.channel),aoMapUv:_e&&p(_.aoMap.channel),lightMapUv:je&&p(_.lightMap.channel),bumpMapUv:Me&&p(_.bumpMap.channel),normalMapUv:Je&&p(_.normalMap.channel),displacementMapUv:He&&p(_.displacementMap.channel),emissiveMapUv:qe&&p(_.emissiveMap.channel),metalnessMapUv:xt&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:Fe&&p(_.anisotropyMap.channel),clearcoatMapUv:we&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(_.sheenRoughnessMap.channel),specularMapUv:ye&&p(_.specularMap.channel),specularColorMapUv:fe&&p(_.specularColorMap.channel),specularIntensityMapUv:me&&p(_.specularIntensityMap.channel),transmissionMapUv:Ke&&p(_.transmissionMap.channel),thicknessMapUv:Pe&&p(_.thicknessMap.channel),alphaMapUv:A&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ae||A),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ai,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:te&&_.extensions.derivatives===!0,extensionFragDepth:te&&_.extensions.fragDepth===!0,extensionDrawBuffers:te&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&_.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function S(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let ee in _.defines)E.push(ee),E.push(_.defines[ee]);return _.isRawShaderMaterial===!1&&(M(E,_),w(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function M(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.instancingMorph&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.normalMapObjectSpace&&a.enable(7),E.normalMapTangentSpace&&a.enable(8),E.clearcoat&&a.enable(9),E.iridescence&&a.enable(10),E.alphaTest&&a.enable(11),E.vertexColors&&a.enable(12),E.vertexAlphas&&a.enable(13),E.vertexUv1s&&a.enable(14),E.vertexUv2s&&a.enable(15),E.vertexUv3s&&a.enable(16),E.vertexTangents&&a.enable(17),E.anisotropy&&a.enable(18),E.alphaHash&&a.enable(19),E.batching&&a.enable(20),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){let E=y[_.type],ee;if(E){let J=ui[E];ee=sm.clone(J.uniforms)}else ee=_.uniforms;return ee}function C(_,E){let ee;for(let J=0,D=u.length;J<D;J++){let G=u[J];if(G.cacheKey===E){ee=G,++ee.usedTimes;break}}return ee===void 0&&(ee=new FL(n,E,_,s),u.push(ee)),ee}function T(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function B(_){c.remove(_)}function K(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:I,acquireProgram:C,releaseProgram:T,releaseShaderCache:B,programs:u,dispose:K}}function BL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function VL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,y,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,h,m,g,y,p){let f=o(d,h,m,g,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,y,p){let f=o(d,h,m,g,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||VL),i.length>1&&i.sort(h||Zx),r.length>1&&r.sort(h||Zx)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function zL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Jx,n.set(i,[o])):r>=s.length?(o=new Jx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new rt};break;case"SpotLight":t={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function GL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var WL=0;function jL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $L(n,e){let t=new HL,i=GL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let s=new F,o=new Ft,a=new Ft;function c(u,d){let h=0,m=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,p=0,f=0,S=0,M=0,w=0,I=0,C=0,T=0,B=0,K=0;u.sort(jL);let _=d===!0?Math.PI:1;for(let ee=0,J=u.length;ee<J;ee++){let D=u[ee],G=D.color,z=D.intensity,$=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*z*_,m+=G.g*z*_,g+=G.b*z*_;else if(D.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],z);K++}else if(D.isDirectionalLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*_),D.castShadow){let q=D.shadow,ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=D.shadow.matrix,w++}r.directional[y]=j,y++}else if(D.isSpotLight){let j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(z*_),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[f]=j;let q=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,q.updateMatrices(D),D.castShadow&&B++),r.spotLightMatrix[f]=q.matrix,D.castShadow){let ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.spotShadow[f]=ie,r.spotShadowMap[f]=H,C++}f++}else if(D.isRectAreaLight){let j=t.get(D);j.color.copy(G).multiplyScalar(z),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=j,S++}else if(D.isPointLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*_),j.distance=D.distance,j.decay=D.decay,D.castShadow){let q=D.shadow,ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=D.shadow.matrix,I++}r.point[p]=j,p++}else if(D.isHemisphereLight){let j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(z*_),j.groundColor.copy(D.groundColor).multiplyScalar(z*_),r.hemi[M]=j,M++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let E=r.hash;(E.directionalLength!==y||E.pointLength!==p||E.spotLength!==f||E.rectAreaLength!==S||E.hemiLength!==M||E.numDirectionalShadows!==w||E.numPointShadows!==I||E.numSpotShadows!==C||E.numSpotMaps!==T||E.numLightProbes!==K)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+T-B,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=K,E.directionalLength=y,E.pointLength=p,E.spotLength=f,E.rectAreaLength=S,E.hemiLength=M,E.numDirectionalShadows=w,E.numPointShadows=I,E.numSpotShadows=C,E.numSpotMaps=T,E.numLightProbes=K,r.version=WL++)}function l(u,d){let h=0,m=0,g=0,y=0,p=0,f=d.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){let w=u[S];if(w.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(w.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function Kx(n,e){let t=new $L(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qL(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new Kx(n,e),t.set(s,[c])):o>=a.length?(c=new Kx(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Hp=class extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gp=class extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},XL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZL(n,e,t){let i=new lu,r=new it,s=new it,o=new Ht,a=new Hp({depthPacking:KI}),c=new Gp,l={},u=t.maxTextureSize,d={[or]:ln,[ln]:or,[Ai]:Ai},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:XL,fragmentShader:YL}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ri;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Qt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eM;let f=this.type;this.render=function(C,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let K=n.getRenderTarget(),_=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(di),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);let J=f!==Ti&&this.type===Ti,D=f===Ti&&this.type!==Ti;for(let G=0,z=C.length;G<z;G++){let $=C[G],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let j=H.getFrameExtents();if(r.multiply(j),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,H.mapSize.y=s.y)),H.map===null||J===!0||D===!0){let ie=this.type!==Ti?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new Jn(r.x,r.y,ie),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let q=H.getViewportCount();for(let ie=0;ie<q;ie++){let de=H.getViewport(ie);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),ee.viewport(o),H.updateMatrices($,ie),i=H.getFrustum(),w(T,B,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&S(H,B),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(K,_,E)};function S(C,T){let B=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jn(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,B,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,B,m,y,null)}function M(C,T,B,K){let _=null,E=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)_=E;else if(_=B.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let ee=_.uuid,J=T.uuid,D=l[ee];D===void 0&&(D={},l[ee]=D);let G=D[J];G===void 0&&(G=_.clone(),D[J]=G,T.addEventListener("dispose",I)),_=G}if(_.visible=T.visible,_.wireframe=T.wireframe,K===Ti?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let ee=n.properties.get(_);ee.light=B}return _}function w(C,T,B,K,_){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);let J=e.update(C),D=C.material;if(Array.isArray(D)){let G=J.groups;for(let z=0,$=G.length;z<$;z++){let H=G[z],j=D[H.materialIndex];if(j&&j.visible){let q=M(C,j,K,_);C.onBeforeShadow(n,C,T,B,J,q,H),n.renderBufferDirect(B,null,J,q,C,H),C.onAfterShadow(n,C,T,B,J,q,H)}}}else if(D.visible){let G=M(C,D,K,_);C.onBeforeShadow(n,C,T,B,J,G,null),n.renderBufferDirect(B,null,J,G,C,null),C.onAfterShadow(n,C,T,B,J,G,null)}}let ee=C.children;for(let J=0,D=ee.length;J<D;J++)w(ee[J],T,B,K,_)}function I(C){C.target.removeEventListener("dispose",I);for(let B in l){let K=l[B],_=C.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}function JL(n,e,t){let i=t.isWebGL2;function r(){let A=!1,oe=new Ht,L=null,te=new Ht(0,0,0,0);return{setMask:function(ce){L!==ce&&!A&&(n.colorMask(ce,ce,ce,ce),L=ce)},setLocked:function(ce){A=ce},setClear:function(ce,Ye,dt,kt,_n){_n===!0&&(ce*=kt,Ye*=kt,dt*=kt),oe.set(ce,Ye,dt,kt),te.equals(oe)===!1&&(n.clearColor(ce,Ye,dt,kt),te.copy(oe))},reset:function(){A=!1,L=null,te.set(-1,0,0,0)}}}function s(){let A=!1,oe=null,L=null,te=null;return{setTest:function(ce){ce?he(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!A&&(n.depthMask(ce),oe=ce)},setFunc:function(ce){if(L!==ce){switch(ce){case CI:n.depthFunc(n.NEVER);break;case AI:n.depthFunc(n.ALWAYS);break;case DI:n.depthFunc(n.LESS);break;case $l:n.depthFunc(n.LEQUAL);break;case II:n.depthFunc(n.EQUAL);break;case RI:n.depthFunc(n.GEQUAL);break;case PI:n.depthFunc(n.GREATER);break;case NI:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}L=ce}},setLocked:function(ce){A=ce},setClear:function(ce){te!==ce&&(n.clearDepth(ce),te=ce)},reset:function(){A=!1,oe=null,L=null,te=null}}}function o(){let A=!1,oe=null,L=null,te=null,ce=null,Ye=null,dt=null,kt=null,_n=null;return{setTest:function(ht){A||(ht?he(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!A&&(n.stencilMask(ht),oe=ht)},setFunc:function(ht,qt,Qn){(L!==ht||te!==qt||ce!==Qn)&&(n.stencilFunc(ht,qt,Qn),L=ht,te=qt,ce=Qn)},setOp:function(ht,qt,Qn){(Ye!==ht||dt!==qt||kt!==Qn)&&(n.stencilOp(ht,qt,Qn),Ye=ht,dt=qt,kt=Qn)},setLocked:function(ht){A=ht},setClear:function(ht){_n!==ht&&(n.clearStencil(ht),_n=ht)},reset:function(){A=!1,oe=null,L=null,te=null,ce=null,Ye=null,dt=null,kt=null,_n=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,M=null,w=null,I=null,C=null,T=null,B=null,K=new rt(0,0,0),_=0,E=!1,ee=null,J=null,D=null,G=null,z=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=j>=2);let ie=null,de={},Oe=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),Y=new Ht().fromArray(Oe),ue=new Ht().fromArray(k);function Ce(A,oe,L,te){let ce=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(A,Ye),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<L;dt++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(oe+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ye}let ve={};ve[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(n.DEPTH_TEST),c.setFunc($l),He(!1),qe(A_),he(n.CULL_FACE),Me(di);function he(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function at(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function Ae(A,oe){return m[A]!==oe?(n.bindFramebuffer(A,oe),m[A]=oe,i&&(A===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=oe),A===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function P(A,oe){let L=y,te=!1;if(A){L=g.get(oe),L===void 0&&(L=[],g.set(oe,L));let ce=A.textures;if(L.length!==ce.length||L[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,dt=ce.length;Ye<dt;Ye++)L[Ye]=n.COLOR_ATTACHMENT0+Ye;L.length=ce.length,te=!0}}else L[0]!==n.BACK&&(L[0]=n.BACK,te=!0);if(te)if(t.isWebGL2)n.drawBuffers(L);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(L);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ut(A){return p!==A?(n.useProgram(A),p=A,!0):!1}let _e={[jr]:n.FUNC_ADD,[hI]:n.FUNC_SUBTRACT,[fI]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[P_]=n.MIN,_e[N_]=n.MAX;else{let A=e.get("EXT_blend_minmax");A!==null&&(_e[P_]=A.MIN_EXT,_e[N_]=A.MAX_EXT)}let je={[pI]:n.ZERO,[mI]:n.ONE,[gI]:n.SRC_COLOR,[bp]:n.SRC_ALPHA,[bI]:n.SRC_ALPHA_SATURATE,[xI]:n.DST_COLOR,[yI]:n.DST_ALPHA,[vI]:n.ONE_MINUS_SRC_COLOR,[wp]:n.ONE_MINUS_SRC_ALPHA,[MI]:n.ONE_MINUS_DST_COLOR,[_I]:n.ONE_MINUS_DST_ALPHA,[wI]:n.CONSTANT_COLOR,[EI]:n.ONE_MINUS_CONSTANT_COLOR,[SI]:n.CONSTANT_ALPHA,[TI]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(A,oe,L,te,ce,Ye,dt,kt,_n,ht){if(A===di){f===!0&&(at(n.BLEND),f=!1);return}if(f===!1&&(he(n.BLEND),f=!0),A!==dI){if(A!==S||ht!==E){if((M!==jr||C!==jr)&&(n.blendEquation(n.FUNC_ADD),M=jr,C=jr),ht)switch(A){case no:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case D_:n.blendFunc(n.ONE,n.ONE);break;case I_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case no:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case D_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case I_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,I=null,T=null,B=null,K.set(0,0,0),_=0,S=A,E=ht}return}ce=ce||oe,Ye=Ye||L,dt=dt||te,(oe!==M||ce!==C)&&(n.blendEquationSeparate(_e[oe],_e[ce]),M=oe,C=ce),(L!==w||te!==I||Ye!==T||dt!==B)&&(n.blendFuncSeparate(je[L],je[te],je[Ye],je[dt]),w=L,I=te,T=Ye,B=dt),(kt.equals(K)===!1||_n!==_)&&(n.blendColor(kt.r,kt.g,kt.b,_n),K.copy(kt),_=_n),S=A,E=!1}function Je(A,oe){A.side===Ai?at(n.CULL_FACE):he(n.CULL_FACE);let L=A.side===ln;oe&&(L=!L),He(L),A.blending===no&&A.transparent===!1?Me(di):Me(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let te=A.stencilWrite;l.setTest(te),te&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),b(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(A){ee!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),ee=A)}function qe(A){A!==cI?(he(n.CULL_FACE),A!==J&&(A===A_?n.cullFace(n.BACK):A===lI?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),J=A}function xt(A){A!==D&&(H&&n.lineWidth(A),D=A)}function b(A,oe,L){A?(he(n.POLYGON_OFFSET_FILL),(G!==oe||z!==L)&&(n.polygonOffset(oe,L),G=oe,z=L)):at(n.POLYGON_OFFSET_FILL)}function v(A){A?he(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function V(A){A===void 0&&(A=n.TEXTURE0+$-1),ie!==A&&(n.activeTexture(A),ie=A)}function W(A,oe,L){L===void 0&&(ie===null?L=n.TEXTURE0+$-1:L=ie);let te=de[L];te===void 0&&(te={type:void 0,texture:void 0},de[L]=te),(te.type!==A||te.texture!==oe)&&(ie!==L&&(n.activeTexture(L),ie=L),n.bindTexture(A,oe||ve[A]),te.type=A,te.texture=oe)}function Z(){let A=de[ie];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Xe(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(A){Y.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Y.copy(A))}function me(A){ue.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ue.copy(A))}function Ke(A,oe){let L=d.get(oe);L===void 0&&(L=new WeakMap,d.set(oe,L));let te=L.get(A);te===void 0&&(te=n.getUniformBlockIndex(oe,A.name),L.set(A,te))}function Pe(A,oe){let te=d.get(oe).get(A);u.get(oe)!==te&&(n.uniformBlockBinding(oe,te,A.__bindingPointIndex),u.set(oe,te))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,de={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,M=null,w=null,I=null,C=null,T=null,B=null,K=new rt(0,0,0),_=0,E=!1,ee=null,J=null,D=null,G=null,z=null,Y.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:at,bindFramebuffer:Ae,drawBuffers:P,useProgram:Ut,setBlending:Me,setMaterial:Je,setFlipSided:He,setCullFace:qe,setLineWidth:xt,setPolygonOffset:b,setScissorTest:v,activeTexture:V,bindTexture:W,unbindTexture:Z,compressedTexImage2D:X,compressedTexImage3D:Fe,texImage2D:Xe,texImage3D:ye,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:Q,texStorage3D:Et,texSubImage2D:we,texSubImage3D:re,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ue,scissor:fe,viewport:me,reset:pt}}function KL(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,d=new WeakMap,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,v){return g?new OffscreenCanvas(b,v):Ql("canvas")}function p(b,v,V,W){let Z=1,X=xt(b);if((X.width>W||X.height>W)&&(Z=W/Math.max(X.width,X.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let Fe=v?Ip:Math.floor,we=Fe(Z*X.width),re=Fe(Z*X.height);h===void 0&&(h=y(we,re));let ae=V?y(we,re):h;return ae.width=we,ae.height=re,ae.getContext("2d").drawImage(b,0,0,we,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+we+"x"+re+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function f(b){let v=xt(b);return fx(v.width)&&fx(v.height)}function S(b){return a?!1:b.wrapS!==Yn||b.wrapT!==Yn||b.minFilter!==Jt&&b.minFilter!==an}function M(b,v){return b.generateMipmaps&&v&&b.minFilter!==Jt&&b.minFilter!==an}function w(b){n.generateMipmap(b)}function I(b,v,V,W,Z=!1){if(a===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===n.RED&&(V===n.FLOAT&&(X=n.R32F),V===n.HALF_FLOAT&&(X=n.R16F),V===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.R8UI),V===n.UNSIGNED_SHORT&&(X=n.R16UI),V===n.UNSIGNED_INT&&(X=n.R32UI),V===n.BYTE&&(X=n.R8I),V===n.SHORT&&(X=n.R16I),V===n.INT&&(X=n.R32I)),v===n.RG&&(V===n.FLOAT&&(X=n.RG32F),V===n.HALF_FLOAT&&(X=n.RG16F),V===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RG8UI),V===n.UNSIGNED_SHORT&&(X=n.RG16UI),V===n.UNSIGNED_INT&&(X=n.RG32UI),V===n.BYTE&&(X=n.RG8I),V===n.SHORT&&(X=n.RG16I),V===n.INT&&(X=n.RG32I)),v===n.RGBA){let Fe=Z?Yl:lt.getTransfer(W);V===n.FLOAT&&(X=n.RGBA32F),V===n.HALF_FLOAT&&(X=n.RGBA16F),V===n.UNSIGNED_BYTE&&(X=Fe===ft?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function C(b,v,V){return M(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==Jt&&b.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){return b===Jt||b===O_||b===fa?n.NEAREST:n.LINEAR}function B(b){let v=b.target;v.removeEventListener("dispose",B),_(v),v.isVideoTexture&&d.delete(v)}function K(b){let v=b.target;v.removeEventListener("dispose",K),ee(v)}function _(b){let v=i.get(b);if(v.__webglInit===void 0)return;let V=b.source,W=m.get(V);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(b),Object.keys(W).length===0&&m.delete(V)}i.remove(b)}function E(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let V=b.source,W=m.get(V);delete W[v.__cacheKey],o.memory.textures--}function ee(b){let v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=b.textures;for(let W=0,Z=V.length;W<Z;W++){let X=i.get(V[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(V[W])}i.remove(b)}let J=0;function D(){J=0}function G(){let b=J;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),J+=1,b}function z(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function $(b,v){let V=i.get(b);if(b.isVideoTexture&&He(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,b,v);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function H(b,v){let V=i.get(b);if(b.version>0&&V.__version!==b.version){ue(V,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function j(b,v){let V=i.get(b);if(b.version>0&&V.__version!==b.version){ue(V,b,v);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function q(b,v){let V=i.get(b);if(b.version>0&&V.__version!==b.version){Ce(V,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}let ie={[Tp]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[Cp]:n.MIRRORED_REPEAT},de={[Jt]:n.NEAREST,[O_]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Gf]:n.LINEAR_MIPMAP_NEAREST,[qr]:n.LINEAR_MIPMAP_LINEAR},Oe={[tR]:n.NEVER,[aR]:n.ALWAYS,[nR]:n.LESS,[lM]:n.LEQUAL,[iR]:n.EQUAL,[oR]:n.GEQUAL,[rR]:n.GREATER,[sR]:n.NOTEQUAL};function k(b,v,V){if(v.type===Di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Gf||v.magFilter===fa||v.magFilter===qr||v.minFilter===an||v.minFilter===Gf||v.minFilter===fa||v.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(n.texParameteri(b,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ie[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Yn||v.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Jt&&v.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==fa&&v.minFilter!==qr||v.type===Di&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Zr&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(b,v){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",B));let W=v.source,Z=m.get(W);Z===void 0&&(Z={},m.set(W,Z));let X=z(v);if(X!==b.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[X].usedTimes++;let Fe=Z[b.__cacheKey];Fe!==void 0&&(Z[b.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(v)),b.__cacheKey=X,b.__webglTexture=Z[X].texture}return V}function ue(b,v,V){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Z=Y(b,v),X=v.source;t.bindTexture(W,b.__webglTexture,n.TEXTURE0+V);let Fe=i.get(X);if(X.version!==Fe.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);let we=lt.getPrimaries(lt.workingColorSpace),re=v.colorSpace===nr?null:lt.getPrimaries(v.colorSpace),ae=v.colorSpace===nr||we===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Ue=S(v)&&f(v.image)===!1,Q=p(v.image,Ue,!1,r.maxTextureSize);Q=qe(v,Q);let Et=f(Q)||a,Xe=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),fe=I(v.internalFormat,Xe,ye,v.colorSpace,v.isVideoTexture);k(W,v,Et);let me,Ke=v.mipmaps,Pe=a&&v.isVideoTexture!==!0&&fe!==cM,pt=Fe.__version===void 0||Z===!0,A=X.dataReady,oe=C(v,Q,Et);if(v.isDepthTexture)fe=n.DEPTH_COMPONENT,a?v.type===Di?fe=n.DEPTH_COMPONENT32F:v.type===ir?fe=n.DEPTH_COMPONENT24:v.type===Xr?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:v.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Yr&&fe===n.DEPTH_COMPONENT&&v.type!==im&&v.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ir,ye=s.convert(v.type)),v.format===ao&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,v.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Xr,ye=s.convert(v.type))),pt&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,Xe,ye,null));else if(v.isDataTexture)if(Ke.length>0&&Et){Pe&&pt&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Ke[0].width,Ke[0].height);for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],Pe?A&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,me.width,me.height,Xe,ye,me.data):t.texImage2D(n.TEXTURE_2D,L,fe,me.width,me.height,0,Xe,ye,me.data);v.generateMipmaps=!1}else Pe?(pt&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Q.width,Q.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Xe,ye,Q.data)):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,Xe,ye,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,fe,Ke[0].width,Ke[0].height,Q.depth);for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],v.format!==Zn?Xe!==null?Pe?A&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,me.width,me.height,Q.depth,Xe,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,L,fe,me.width,me.height,Q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,me.width,me.height,Q.depth,Xe,ye,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,L,fe,me.width,me.height,Q.depth,0,Xe,ye,me.data)}else{Pe&&pt&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Ke[0].width,Ke[0].height);for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],v.format!==Zn?Xe!==null?Pe?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,L,0,0,me.width,me.height,Xe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,L,fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?A&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,me.width,me.height,Xe,ye,me.data):t.texImage2D(n.TEXTURE_2D,L,fe,me.width,me.height,0,Xe,ye,me.data)}else if(v.isDataArrayTexture)Pe?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,fe,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xe,ye,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,Xe,ye,Q.data);else if(v.isData3DTexture)Pe?(pt&&t.texStorage3D(n.TEXTURE_3D,oe,fe,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xe,ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,Xe,ye,Q.data);else if(v.isFramebufferTexture){if(pt)if(Pe)t.texStorage2D(n.TEXTURE_2D,oe,fe,Q.width,Q.height);else{let L=Q.width,te=Q.height;for(let ce=0;ce<oe;ce++)t.texImage2D(n.TEXTURE_2D,ce,fe,L,te,0,Xe,ye,null),L>>=1,te>>=1}}else if(Ke.length>0&&Et){if(Pe&&pt){let L=xt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,oe,fe,L.width,L.height)}for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],Pe?A&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,Xe,ye,me):t.texImage2D(n.TEXTURE_2D,L,fe,Xe,ye,me);v.generateMipmaps=!1}else if(Pe){if(pt){let L=xt(Q);t.texStorage2D(n.TEXTURE_2D,oe,fe,L.width,L.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,fe,Xe,ye,Q);M(v,Et)&&w(W),Fe.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ce(b,v,V){if(v.image.length!==6)return;let W=Y(b,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+V);let X=i.get(Z);if(Z.version!==X.__version||W===!0){t.activeTexture(n.TEXTURE0+V);let Fe=lt.getPrimaries(lt.workingColorSpace),we=v.colorSpace===nr?null:lt.getPrimaries(v.colorSpace),re=v.colorSpace===nr||Fe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let L=0;L<6;L++)!ae&&!Ue?Q[L]=p(v.image[L],!1,!0,r.maxCubemapSize):Q[L]=Ue?v.image[L].image:v.image[L],Q[L]=qe(v,Q[L]);let Et=Q[0],Xe=f(Et)||a,ye=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),me=I(v.internalFormat,ye,fe,v.colorSpace),Ke=a&&v.isVideoTexture!==!0,Pe=X.__version===void 0||W===!0,pt=Z.dataReady,A=C(v,Et,Xe);k(n.TEXTURE_CUBE_MAP,v,Xe);let oe;if(ae){Ke&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,A,me,Et.width,Et.height);for(let L=0;L<6;L++){oe=Q[L].mipmaps;for(let te=0;te<oe.length;te++){let ce=oe[te];v.format!==Zn?ye!==null?Ke?pt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,0,0,ce.width,ce.height,ye,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,0,0,ce.width,ce.height,ye,fe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,me,ce.width,ce.height,0,ye,fe,ce.data)}}}else{if(oe=v.mipmaps,Ke&&Pe){oe.length>0&&A++;let L=xt(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,A,me,L.width,L.height)}for(let L=0;L<6;L++)if(Ue){Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Q[L].width,Q[L].height,ye,fe,Q[L].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,me,Q[L].width,Q[L].height,0,ye,fe,Q[L].data);for(let te=0;te<oe.length;te++){let Ye=oe[te].image[L].image;Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,0,0,Ye.width,Ye.height,ye,fe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,me,Ye.width,Ye.height,0,ye,fe,Ye.data)}}else{Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ye,fe,Q[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,me,ye,fe,Q[L]);for(let te=0;te<oe.length;te++){let ce=oe[te];Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,0,0,ye,fe,ce.image[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,me,ye,fe,ce.image[L])}}}M(v,Xe)&&w(n.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,V,W,Z,X){let Fe=s.convert(V.format,V.colorSpace),we=s.convert(V.type),re=I(V.internalFormat,Fe,we,V.colorSpace);if(!i.get(v).__hasExternalTextures){let Ue=Math.max(1,v.width>>X),Q=Math.max(1,v.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,re,Ue,Q,v.depth,0,Fe,we,null):t.texImage2D(Z,X,re,Ue,Q,0,Fe,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,i.get(V).__webglTexture,0,Me(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,i.get(V).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(b,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let W=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||Je(v)){let Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Di?W=n.DEPTH_COMPONENT32F:Z.type===ir&&(W=n.DEPTH_COMPONENT24));let X=Me(v);Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,W,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,W,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let W=Me(v);V&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,v.width,v.height):Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let X=W[Z],Fe=s.convert(X.format,X.colorSpace),we=s.convert(X.type),re=I(X.internalFormat,Fe,we,X.colorSpace),ae=Me(v);V&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,re,v.width,v.height):Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);let W=i.get(v.depthTexture).__webglTexture,Z=Me(v);if(v.depthTexture.format===Yr)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===ao)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ae(b){let v=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");at(v.__webglFramebuffer,b)}else if(V){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]=n.createRenderbuffer(),he(v.__webglDepthbuffer[W],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(b,v,V){let W=i.get(b);v!==void 0&&ve(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ae(b)}function Ut(b){let v=b.texture,V=i.get(b),W=i.get(v);b.addEventListener("dispose",K);let Z=b.textures,X=b.isWebGLCubeRenderTarget===!0,Fe=Z.length>1,we=f(b)||a;if(Fe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),X){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let ae=0;ae<v.mipmaps.length;ae++)V.__webglFramebuffer[re][ae]=n.createFramebuffer()}else V.__webglFramebuffer[re]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)V.__webglFramebuffer[re]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Fe)if(r.drawBuffers)for(let re=0,ae=Z.length;re<ae;re++){let Ue=i.get(Z[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Je(b)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){let ae=Z[re];V.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[re]);let Ue=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),Et=I(ae.internalFormat,Ue,Q,ae.colorSpace,b.isXRRenderTarget===!0),Xe=Me(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Et,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,V.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),he(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),k(n.TEXTURE_CUBE_MAP,v,we);for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)ve(V.__webglFramebuffer[re][ae],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else ve(V.__webglFramebuffer[re],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);M(v,we)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let re=0,ae=Z.length;re<ae;re++){let Ue=Z[re],Q=i.get(Ue);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),k(n.TEXTURE_2D,Ue,we),ve(V.__webglFramebuffer,b,Ue,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),M(Ue,we)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,W.__webglTexture),k(re,v,we),a&&v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)ve(V.__webglFramebuffer[ae],b,v,n.COLOR_ATTACHMENT0,re,ae);else ve(V.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,re,0);M(v,we)&&w(re),t.unbindTexture()}b.depthBuffer&&Ae(b)}function _e(b){let v=f(b)||a,V=b.textures;for(let W=0,Z=V.length;W<Z;W++){let X=V[W];if(M(X,v)){let Fe=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(X).__webglTexture;t.bindTexture(Fe,we),w(Fe),t.unbindTexture()}}}function je(b){if(a&&b.samples>0&&Je(b)===!1){let v=b.textures,V=b.width,W=b.height,Z=n.COLOR_BUFFER_BIT,X=[],Fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(b),re=v.length>1;if(re)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){X.push(n.COLOR_ATTACHMENT0+ae),b.depthBuffer&&X.push(Fe);let Ue=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(Ue===!1&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ae]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),re){let Q=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,W,0,0,V,W,Z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,we.__webglColorRenderbuffer[ae]);let Ue=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Me(b){return Math.min(r.maxSamples,b.samples)}function Je(b){let v=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function He(b){let v=o.render.frame;d.get(b)!==v&&(d.set(b,v),b.update())}function qe(b,v){let V=b.colorSpace,W=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ap||V!==lr&&V!==nr&&(lt.getTransfer(V)===ft?a===!1?e.has("EXT_sRGB")===!0&&W===Zn?(b.format=Ap,b.minFilter=an,b.generateMipmaps=!1):v=eu.sRGBToLinear(v):(W!==Zn||Z!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function xt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=P,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Je}function QL(n,e,t){let i=t.isWebGL2;function r(s,o=nr){let a,c=lt.getTransfer(o);if(s===sr)return n.UNSIGNED_BYTE;if(s===iM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===rM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===GI)return n.BYTE;if(s===WI)return n.SHORT;if(s===im)return n.UNSIGNED_SHORT;if(s===nM)return n.INT;if(s===ir)return n.UNSIGNED_INT;if(s===Di)return n.FLOAT;if(s===Zr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jI)return n.ALPHA;if(s===Zn)return n.RGBA;if(s===$I)return n.LUMINANCE;if(s===qI)return n.LUMINANCE_ALPHA;if(s===Yr)return n.DEPTH_COMPONENT;if(s===ao)return n.DEPTH_STENCIL;if(s===Ap)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===XI)return n.RED;if(s===sM)return n.RED_INTEGER;if(s===YI)return n.RG;if(s===oM)return n.RG_INTEGER;if(s===aM)return n.RGBA_INTEGER;if(s===Wf||s===jf||s===$f||s===qf)if(c===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$f)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$f)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===F_||s===U_||s===k_||s===B_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===F_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===U_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===k_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===B_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===V_||s===z_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===V_)return c===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===z_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===H_||s===G_||s===W_||s===j_||s===$_||s===q_||s===X_||s===Y_||s===Z_||s===J_||s===K_||s===Q_||s===ex||s===tx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===H_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===G_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===W_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===j_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===q_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===X_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Y_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Z_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===J_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===K_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Q_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ex)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tx)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xf||s===nx||s===ix)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xf)return c===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nx)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ix)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ZI||s===rx||s===sx||s===ox)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===rx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ox)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Wp=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},to=class extends po{constructor(){super(),this.isGroup=!0,this.type="Group"}},eO={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eO)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new to;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},tO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new es,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new en({extensions:{fragDepth:!0},vertexShader:tO,fragmentShader:nO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qt(new ho(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},$p=class extends ar{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,y=new jp,p=t.getContextAttributes(),f=null,S=null,M=[],w=[],I=new it,C=null,T=new Kt;T.layers.enable(1),T.viewport=new Ht;let B=new Kt;B.layers.enable(2),B.viewport=new Ht;let K=[T,B],_=new Wp;_.layers.enable(1),_.layers.enable(2);let E=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=M[k];return Y===void 0&&(Y=new _a,M[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=M[k];return Y===void 0&&(Y=new _a,M[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=M[k];return Y===void 0&&(Y=new _a,M[k]=Y),Y.getHandSpace()};function J(k){let Y=w.indexOf(k.inputSource);if(Y===-1)return;let ue=M[Y];ue!==void 0&&(ue.update(k.inputSource,k.frame,l||o),ue.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",G);for(let k=0;k<M.length;k++){let Y=w[k];Y!==null&&(w[k]=null,M[k].disconnect(Y))}E=null,ee=null,y.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(k){return Ia(this,null,function*(){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",D),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Jn(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ue=null,Ce=null;p.depth&&(Ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?ao:Yr,ue=p.stencil?Xr:ir);let ve={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Jn(h.textureWidth,h.textureHeight,{format:Zn,type:sr,depthTexture:new du(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let he=e.properties.get(S);he.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(k){for(let Y=0;Y<k.removed.length;Y++){let ue=k.removed[Y],Ce=w.indexOf(ue);Ce>=0&&(w[Ce]=null,M[Ce].disconnect(ue))}for(let Y=0;Y<k.added.length;Y++){let ue=k.added[Y],Ce=w.indexOf(ue);if(Ce===-1){for(let he=0;he<M.length;he++)if(he>=w.length){w.push(ue),Ce=he;break}else if(w[he]===null){w[he]=ue,Ce=he;break}if(Ce===-1)break}let ve=M[Ce];ve&&ve.connect(ue)}}let z=new F,$=new F;function H(k,Y,ue){z.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);let Ce=z.distanceTo($),ve=Y.projectionMatrix.elements,he=ue.projectionMatrix.elements,at=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),P=(ve[9]+1)/ve[5],Ut=(ve[9]-1)/ve[5],_e=(ve[8]-1)/ve[0],je=(he[8]+1)/he[0],Me=at*_e,Je=at*je,He=Ce/(-_e+je),qe=He*-_e;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qe),k.translateZ(He),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let xt=at+He,b=Ae+He,v=Me-qe,V=Je+(Ce-qe),W=P*Ae/b*xt,Z=Ut*Ae/b*xt;k.projectionMatrix.makePerspective(v,V,W,Z,xt,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.texture!==null&&(k.near=y.depthNear,k.far=y.depthFar),_.near=B.near=T.near=k.near,_.far=B.far=T.far=k.far,(E!==_.near||ee!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,ee=_.far,T.near=E,T.far=ee,B.near=E,B.far=ee,T.updateProjectionMatrix(),B.updateProjectionMatrix(),k.updateProjectionMatrix());let Y=k.parent,ue=_.cameras;j(_,Y);for(let Ce=0;Ce<ue.length;Ce++)j(ue[Ce],Y);ue.length===2?H(_,T,B):_.projectionMatrix.copy(T.projectionMatrix),q(k,_,Y)};function q(k,Y,ue){ue===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(ue.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Dp*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(k){c=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function de(k,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,Ce=!0);for(let he=0;he<ue.length;he++){let at=ue[he],Ae=null;if(m!==null)Ae=m.getViewport(at);else{let Ut=d.getViewSubImage(h,at);Ae=Ut.viewport,he===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,h.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(S))}let P=K[he];P===void 0&&(P=new Kt,P.layers.enable(he),P.viewport=new Ht,K[he]=P),P.matrix.fromArray(at.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(at.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),he===0&&(_.matrix.copy(P.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ce===!0&&_.cameras.push(P)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let he=d.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&y.init(e,he,r.renderState)}}for(let ue=0;ue<M.length;ue++){let Ce=w[ue],ve=M[ue];Ce!==null&&ve!==void 0&&ve.update(Ce,Y,l||o)}y.render(e,_),ie&&ie(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let Oe=new fM;Oe.setAnimationLoop(de),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}},Gr=new co,iO=new Ft;function rO(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,hM(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ln&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ln&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f),M=S.envMap,w=S.envMapRotation;if(M&&(p.envMap.value=M,Gr.copy(w),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),p.envMapRotation.value.setFromMatrix4(iO.makeRotationFromEuler(Gr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let I=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*I,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sO(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,M){let w=M.program;i.uniformBlockBinding(S,w)}function l(S,M){let w=r[S.id];w===void 0&&(g(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",p));let I=M.program;i.updateUBOMapping(S,I);let C=e.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){let M=d();S.__bindingPointIndex=M;let w=n.createBuffer(),I=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],w=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,T=w.length;C<T;C++){let B=Array.isArray(w[C])?w[C]:[w[C]];for(let K=0,_=B.length;K<_;K++){let E=B[K];if(m(E,C,K,I)===!0){let ee=E.__offset,J=Array.isArray(E.value)?E.value:[E.value],D=0;for(let G=0;G<J.length;G++){let z=J[G],$=y(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,ee+D,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,w,I){let C=S.value,T=M+"_"+w;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{let B=I[T];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return I[T]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(S){let M=S.uniforms,w=0,I=16;for(let T=0,B=M.length;T<B;T++){let K=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,E=K.length;_<E;_++){let ee=K[_],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let D=0,G=J.length;D<G;D++){let z=J[D],$=y(z),H=w%I;H!==0&&I-H<$.boundary&&(w+=I-H),ee.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=$.storage}}}let C=w%I;return C>0&&(w+=I-C),S.__size=w,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){let M=S.target;M.removeEventListener("dispose",p);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var wa=class{constructor(e={}){let{canvas:t=lR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;let M=this,w=!1,I=0,C=0,T=null,B=-1,K=null,_=new Ht,E=new Ht,ee=null,J=new rt(0),D=0,G=t.width,z=t.height,$=1,H=null,j=null,q=new Ht(0,0,G,z),ie=new Ht(0,0,G,z),de=!1,Oe=new lu,k=!1,Y=!1,ue=null,Ce=new Ft,ve=new it,he=new F,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?$:1}let P=i;function Ut(x,R){for(let O=0;O<x.length;O++){let U=x[O],N=t.getContext(U,R);if(N!==null)return N}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nm}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){let R=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&R.shift(),P=Ut(R,x),P===null)throw Ut(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,je,Me,Je,He,qe,xt,b,v,V,W,Z,X,Fe,we,re,ae,Ue,Q,Et,Xe,ye,fe,me;function Ke(){_e=new MN(P),je=new mN(P,_e,e),_e.init(je),ye=new QL(P,_e,je),Me=new JL(P,_e,je),Je=new EN(P),He=new BL,qe=new KL(P,_e,Me,He,je,ye,Je),xt=new vN(M),b=new xN(M),v=new IR(P,je),fe=new fN(P,_e,v,je),V=new bN(P,v,Je,fe),W=new AN(P,V,v,Je),Q=new CN(P,je,qe),re=new gN(He),Z=new kL(M,xt,b,_e,je,fe,re),X=new rO(M,He),Fe=new zL,we=new qL(_e,je),Ue=new hN(M,xt,b,Me,W,h,c),ae=new ZL(M,W,je),me=new sO(P,Je,je,Me),Et=new pN(P,_e,Je,je),Xe=new wN(P,_e,Je,je),Je.programs=Z.programs,M.capabilities=je,M.extensions=_e,M.properties=He,M.renderLists=Fe,M.shadowMap=ae,M.state=Me,M.info=Je}Ke();let Pe=new $p(M,P);this.xr=Pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(G,z,!1))},this.getSize=function(x){return x.set(G,z)},this.setSize=function(x,R,O=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,z=R,t.width=Math.floor(x*$),t.height=Math.floor(R*$),O===!0&&(t.style.width=x+"px",t.style.height=R+"px"),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(G*$,z*$).floor()},this.setDrawingBufferSize=function(x,R,O){G=x,z=R,$=O,t.width=Math.floor(x*O),t.height=Math.floor(R*O),this.setViewport(0,0,x,R)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,R,O,U){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,R,O,U),Me.viewport(_.copy(q).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(ie)},this.setScissor=function(x,R,O,U){x.isVector4?ie.set(x.x,x.y,x.z,x.w):ie.set(x,R,O,U),Me.scissor(E.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(x){Me.setScissorTest(de=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){j=x},this.getClearColor=function(x){return x.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(x=!0,R=!0,O=!0){let U=0;if(x){let N=!1;if(T!==null){let le=T.texture.format;N=le===aM||le===oM||le===sM}if(N){let le=T.texture.type,ge=le===sr||le===ir||le===im||le===Xr||le===iM||le===rM,xe=Ue.getClearColor(),Se=Ue.getClearAlpha(),Ge=xe.r,Ie=xe.g,Ne=xe.b;ge?(m[0]=Ge,m[1]=Ie,m[2]=Ne,m[3]=Se,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ge,g[1]=Ie,g[2]=Ne,g[3]=Se,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}R&&(U|=P.DEPTH_BUFFER_BIT),O&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Fe.dispose(),we.dispose(),He.dispose(),xt.dispose(),b.dispose(),W.dispose(),fe.dispose(),me.dispose(),Z.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",_n),Pe.removeEventListener("sessionend",ht),ue&&(ue.dispose(),ue=null),qt.stop()};function pt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let x=Je.autoReset,R=ae.enabled,O=ae.autoUpdate,U=ae.needsUpdate,N=ae.type;Ke(),Je.autoReset=x,ae.enabled=R,ae.autoUpdate=O,ae.needsUpdate=U,ae.type=N}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function L(x){let R=x.target;R.removeEventListener("dispose",L),te(R)}function te(x){ce(x),He.remove(x)}function ce(x){let R=He.get(x).programs;R!==void 0&&(R.forEach(function(O){Z.releaseProgram(O)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,O,U,N,le){R===null&&(R=at);let ge=N.isMesh&&N.matrixWorld.determinant()<0,xe=EM(x,R,O,U,N);Me.setMaterial(U,ge);let Se=O.index,Ge=1;if(U.wireframe===!0){if(Se=V.getWireframeAttribute(O),Se===void 0)return;Ge=2}let Ie=O.drawRange,Ne=O.attributes.position,Mt=Ie.start*Ge,un=(Ie.start+Ie.count)*Ge;le!==null&&(Mt=Math.max(Mt,le.start*Ge),un=Math.min(un,(le.start+le.count)*Ge)),Se!==null?(Mt=Math.max(Mt,0),un=Math.min(un,Se.count)):Ne!=null&&(Mt=Math.max(Mt,0),un=Math.min(un,Ne.count));let Pt=un-Mt;if(Pt<0||Pt===1/0)return;fe.setup(N,U,xe,O,Se);let hi,gt=Et;if(Se!==null&&(hi=v.get(Se),gt=Xe,gt.setIndex(hi)),N.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*Ae()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(N.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),Me.setLineWidth(ke*Ae()),N.isLineSegments?gt.setMode(P.LINES):N.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else N.isPoints?gt.setMode(P.POINTS):N.isSprite&&gt.setMode(P.TRIANGLES);if(N.isBatchedMesh)gt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)gt.renderInstances(Mt,Pt,N.count);else if(O.isInstancedBufferGeometry){let ke=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,bu=Math.min(O.instanceCount,ke);gt.renderInstances(Mt,Pt,bu)}else gt.render(Mt,Pt)};function Ye(x,R,O){x.transparent===!0&&x.side===Ai&&x.forceSinglePass===!1?(x.side=ln,x.needsUpdate=!0,Aa(x,R,O),x.side=or,x.needsUpdate=!0,Aa(x,R,O),x.side=Ai):Aa(x,R,O)}this.compile=function(x,R,O=null){O===null&&(O=x),p=we.get(O),p.init(),S.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(M._useLegacyLights);let U=new Set;return x.traverse(function(N){let le=N.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){let xe=le[ge];Ye(xe,O,N),U.add(xe)}else Ye(le,O,N),U.add(le)}),S.pop(),p=null,U},this.compileAsync=function(x,R,O=null){let U=this.compile(x,R,O);return new Promise(N=>{function le(){if(U.forEach(function(ge){He.get(ge).currentProgram.isReady()&&U.delete(ge)}),U.size===0){N(x);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let dt=null;function kt(x){dt&&dt(x)}function _n(){qt.stop()}function ht(){qt.start()}let qt=new fM;qt.setAnimationLoop(kt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(x){dt=x,Pe.setAnimationLoop(x),x===null?qt.stop():qt.start()},Pe.addEventListener("sessionstart",_n),Pe.addEventListener("sessionend",ht),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(R),R=Pe.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,R,T),p=we.get(x,S.length),p.init(),S.push(p),Ce.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Oe.setFromProjectionMatrix(Ce),Y=this.localClippingEnabled,k=re.init(this.clippingPlanes,Y),y=Fe.get(x,f.length),y.init(),f.push(y),Qn(x,R,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(H,j),this.info.render.frame++,k===!0&&re.beginShadows();let O=p.state.shadowsArray;if(ae.render(O,x,R),k===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Ue.render(y,x),p.setupLights(M._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let N=0,le=U.length;N<le;N++){let ge=U[N];um(y,x,ge,ge.viewport)}}else um(y,x,R);T!==null&&(qe.updateMultisampleRenderTarget(T),qe.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(M,x,R),fe.resetDefaultState(),B=-1,K=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Qn(x,R,O,U){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Oe.intersectsSprite(x)){U&&he.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ce);let ge=W.update(x),xe=x.material;xe.visible&&y.push(x,ge,xe,O,he.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Oe.intersectsObject(x))){let ge=W.update(x),xe=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),he.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),he.copy(ge.boundingSphere.center)),he.applyMatrix4(x.matrixWorld).applyMatrix4(Ce)),Array.isArray(xe)){let Se=ge.groups;for(let Ge=0,Ie=Se.length;Ge<Ie;Ge++){let Ne=Se[Ge],Mt=xe[Ne.materialIndex];Mt&&Mt.visible&&y.push(x,ge,Mt,O,he.z,Ne)}}else xe.visible&&y.push(x,ge,xe,O,he.z,null)}}let le=x.children;for(let ge=0,xe=le.length;ge<xe;ge++)Qn(le[ge],R,O,U)}function um(x,R,O,U){let N=x.opaque,le=x.transmissive,ge=x.transparent;p.setupLightsView(O),k===!0&&re.setGlobalState(M.clippingPlanes,O),le.length>0&&wM(N,le,R,O),U&&Me.viewport(_.copy(U)),N.length>0&&Ca(N,R,O),le.length>0&&Ca(le,R,O),ge.length>0&&Ca(ge,R,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function wM(x,R,O,U){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let le=je.isWebGL2;ue===null&&(ue=new Jn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Zr:sr,minFilter:qr,samples:le?4:0})),M.getDrawingBufferSize(ve),le?ue.setSize(ve.x,ve.y):ue.setSize(Ip(ve.x),Ip(ve.y));let ge=M.getRenderTarget();M.setRenderTarget(ue),M.getClearColor(J),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();let xe=M.toneMapping;M.toneMapping=rr,Ca(x,O,U),qe.updateMultisampleRenderTarget(ue),qe.updateRenderTargetMipmap(ue);let Se=!1;for(let Ge=0,Ie=R.length;Ge<Ie;Ge++){let Ne=R[Ge],Mt=Ne.object,un=Ne.geometry,Pt=Ne.material,hi=Ne.group;if(Pt.side===Ai&&Mt.layers.test(U.layers)){let gt=Pt.side;Pt.side=ln,Pt.needsUpdate=!0,dm(Mt,O,U,un,Pt,hi),Pt.side=gt,Pt.needsUpdate=!0,Se=!0}}Se===!0&&(qe.updateMultisampleRenderTarget(ue),qe.updateRenderTargetMipmap(ue)),M.setRenderTarget(ge),M.setClearColor(J,D),M.toneMapping=xe}function Ca(x,R,O){let U=R.isScene===!0?R.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){let ge=x[N],xe=ge.object,Se=ge.geometry,Ge=U===null?ge.material:U,Ie=ge.group;xe.layers.test(O.layers)&&dm(xe,R,O,Se,Ge,Ie)}}function dm(x,R,O,U,N,le){x.onBeforeRender(M,R,O,U,N,le),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,R,O,U,x,le),N.transparent===!0&&N.side===Ai&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,M.renderBufferDirect(O,R,U,N,x,le),N.side=or,N.needsUpdate=!0,M.renderBufferDirect(O,R,U,N,x,le),N.side=Ai):M.renderBufferDirect(O,R,U,N,x,le),x.onAfterRender(M,R,O,U,N,le)}function Aa(x,R,O){R.isScene!==!0&&(R=at);let U=He.get(x),N=p.state.lights,le=p.state.shadowsArray,ge=N.state.version,xe=Z.getParameters(x,N.state,le,R,O),Se=Z.getProgramCacheKey(xe),Ge=U.programs;U.environment=x.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(x.isMeshStandardMaterial?b:xt).get(x.envMap||U.environment),U.envMapRotation=U.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,Ge===void 0&&(x.addEventListener("dispose",L),Ge=new Map,U.programs=Ge);let Ie=Ge.get(Se);if(Ie!==void 0){if(U.currentProgram===Ie&&U.lightsStateVersion===ge)return fm(x,xe),Ie}else xe.uniforms=Z.getUniforms(x),x.onBuild(O,xe,M),x.onBeforeCompile(xe,M),Ie=Z.acquireProgram(xe,Se),Ge.set(Se,Ie),U.uniforms=xe.uniforms;let Ne=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ne.clippingPlanes=re.uniform),fm(x,xe),U.needsLights=TM(x),U.lightsStateVersion=ge,U.needsLights&&(Ne.ambientLightColor.value=N.state.ambient,Ne.lightProbe.value=N.state.probe,Ne.directionalLights.value=N.state.directional,Ne.directionalLightShadows.value=N.state.directionalShadow,Ne.spotLights.value=N.state.spot,Ne.spotLightShadows.value=N.state.spotShadow,Ne.rectAreaLights.value=N.state.rectArea,Ne.ltc_1.value=N.state.rectAreaLTC1,Ne.ltc_2.value=N.state.rectAreaLTC2,Ne.pointLights.value=N.state.point,Ne.pointLightShadows.value=N.state.pointShadow,Ne.hemisphereLights.value=N.state.hemi,Ne.directionalShadowMap.value=N.state.directionalShadowMap,Ne.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ne.spotShadowMap.value=N.state.spotShadowMap,Ne.spotLightMatrix.value=N.state.spotLightMatrix,Ne.spotLightMap.value=N.state.spotLightMap,Ne.pointShadowMap.value=N.state.pointShadowMap,Ne.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Ie,U.uniformsList=null,Ie}function hm(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=ro.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function fm(x,R){let O=He.get(x);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.instancingMorph=R.instancingMorph,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function EM(x,R,O,U,N){R.isScene!==!0&&(R=at),qe.resetTextureUnits();let le=R.fog,ge=U.isMeshStandardMaterial?R.environment:null,xe=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,Se=(U.isMeshStandardMaterial?b:xt).get(U.envMap||ge),Ge=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ie=!!O.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ne=!!O.morphAttributes.position,Mt=!!O.morphAttributes.normal,un=!!O.morphAttributes.color,Pt=rr;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=M.toneMapping);let hi=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=hi!==void 0?hi.length:0,ke=He.get(U),bu=p.state.lights;if(k===!0&&(Y===!0||x!==K)){let xn=x===K&&U.id===B;re.setState(U,x,xn)}let mt=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==bu.state.version||ke.outputColorSpace!==xe||N.isBatchedMesh&&ke.batching===!1||!N.isBatchedMesh&&ke.batching===!0||N.isInstancedMesh&&ke.instancing===!1||!N.isInstancedMesh&&ke.instancing===!0||N.isSkinnedMesh&&ke.skinning===!1||!N.isSkinnedMesh&&ke.skinning===!0||N.isInstancedMesh&&ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ke.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ke.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ke.instancingMorph===!1&&N.morphTexture!==null||ke.envMap!==Se||U.fog===!0&&ke.fog!==le||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==re.numPlanes||ke.numIntersection!==re.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Ie||ke.morphTargets!==Ne||ke.morphNormals!==Mt||ke.morphColors!==un||ke.toneMapping!==Pt||je.isWebGL2===!0&&ke.morphTargetsCount!==gt)&&(mt=!0):(mt=!0,ke.__version=U.version);let ur=ke.currentProgram;mt===!0&&(ur=Aa(U,R,N));let pm=!1,go=!1,wu=!1,Gt=ur.getUniforms(),dr=ke.uniforms;if(Me.useProgram(ur.program)&&(pm=!0,go=!0,wu=!0),U.id!==B&&(B=U.id,go=!0),pm||K!==x){Gt.setValue(P,"projectionMatrix",x.projectionMatrix),Gt.setValue(P,"viewMatrix",x.matrixWorldInverse);let xn=Gt.map.cameraPosition;xn!==void 0&&xn.setValue(P,he.setFromMatrixPosition(x.matrixWorld)),je.logarithmicDepthBuffer&&Gt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Gt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),K!==x&&(K=x,go=!0,wu=!0)}if(N.isSkinnedMesh){Gt.setOptional(P,N,"bindMatrix"),Gt.setOptional(P,N,"bindMatrixInverse");let xn=N.skeleton;xn&&(je.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Gt.setValue(P,"boneTexture",xn.boneTexture,qe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Gt.setOptional(P,N,"batchingTexture"),Gt.setValue(P,"batchingTexture",N._matricesTexture,qe));let Eu=O.morphAttributes;if((Eu.position!==void 0||Eu.normal!==void 0||Eu.color!==void 0&&je.isWebGL2===!0)&&Q.update(N,O,ur),(go||ke.receiveShadow!==N.receiveShadow)&&(ke.receiveShadow=N.receiveShadow,Gt.setValue(P,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(dr.envMap.value=Se,dr.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),go&&(Gt.setValue(P,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&SM(dr,wu),le&&U.fog===!0&&X.refreshFogUniforms(dr,le),X.refreshMaterialUniforms(dr,U,$,z,ue),ro.upload(P,hm(ke),dr,qe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ro.upload(P,hm(ke),dr,qe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Gt.setValue(P,"center",N.center),Gt.setValue(P,"modelViewMatrix",N.modelViewMatrix),Gt.setValue(P,"normalMatrix",N.normalMatrix),Gt.setValue(P,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let xn=U.uniformsGroups;for(let Su=0,CM=xn.length;Su<CM;Su++)if(je.isWebGL2){let mm=xn[Su];me.update(mm,ur),me.bind(mm,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function SM(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function TM(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,R,O){He.get(x.texture).__webglTexture=R,He.get(x.depthTexture).__webglTexture=O;let U=He.get(x);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,R){let O=He.get(x);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,O=0){T=x,I=R,C=O;let U=!0,N=null,le=!1,ge=!1;if(x){let Se=He.get(x);Se.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):Se.__webglFramebuffer===void 0?qe.setupRenderTarget(x):Se.__hasExternalTextures&&qe.rebindTextures(x,He.get(x.texture).__webglTexture,He.get(x.depthTexture).__webglTexture);let Ge=x.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);let Ie=He.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[R])?N=Ie[R][O]:N=Ie[R],le=!0):je.isWebGL2&&x.samples>0&&qe.useMultisampledRTT(x)===!1?N=He.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[O]:N=Ie,_.copy(x.viewport),E.copy(x.scissor),ee=x.scissorTest}else _.copy(q).multiplyScalar($).floor(),E.copy(ie).multiplyScalar($).floor(),ee=de;if(Me.bindFramebuffer(P.FRAMEBUFFER,N)&&je.drawBuffers&&U&&Me.drawBuffers(x,N),Me.viewport(_),Me.scissor(E),Me.setScissorTest(ee),le){let Se=He.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,Se.__webglTexture,O)}else if(ge){let Se=He.get(x.texture),Ge=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,O||0,Ge)}B=-1},this.readRenderTargetPixels=function(x,R,O,U,N,le,ge){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=He.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Me.bindFramebuffer(P.FRAMEBUFFER,xe);try{let Se=x.texture,Ge=Se.format,Ie=Se.type;if(Ge!==Zn&&ye.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=Ie===Zr&&(_e.has("EXT_color_buffer_half_float")||je.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ie!==sr&&ye.convert(Ie)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Di&&(je.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-U&&O>=0&&O<=x.height-N&&P.readPixels(R,O,U,N,ye.convert(Ge),ye.convert(Ie),le)}finally{let Se=T!==null?He.get(T).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(x,R,O=0){let U=Math.pow(2,-O),N=Math.floor(R.image.width*U),le=Math.floor(R.image.height*U);qe.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,x.x,x.y,N,le),Me.unbindTexture()},this.copyTextureToTexture=function(x,R,O,U=0){let N=R.image.width,le=R.image.height,ge=ye.convert(O.format),xe=ye.convert(O.type);qe.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,N,le,ge,xe,R.image.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,x.x,x.y,R.mipmaps[0].width,R.mipmaps[0].height,ge,R.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,ge,xe,R.image),U===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(x,R,O,U,N=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=Math.round(x.max.x-x.min.x),ge=Math.round(x.max.y-x.min.y),xe=x.max.z-x.min.z+1,Se=ye.convert(U.format),Ge=ye.convert(U.type),Ie;if(U.isData3DTexture)qe.setTexture3D(U,0),Ie=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)qe.setTexture2DArray(U,0),Ie=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Ne=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),un=P.getParameter(P.UNPACK_SKIP_PIXELS),Pt=P.getParameter(P.UNPACK_SKIP_ROWS),hi=P.getParameter(P.UNPACK_SKIP_IMAGES),gt=O.isCompressedTexture?O.mipmaps[N]:O.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,x.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,x.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?P.texSubImage3D(Ie,N,R.x,R.y,R.z,le,ge,xe,Se,Ge,gt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,N,R.x,R.y,R.z,le,ge,xe,Se,gt.data):P.texSubImage3D(Ie,N,R.x,R.y,R.z,le,ge,xe,Se,Ge,gt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,un),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hi),N===0&&U.generateMipmaps&&P.generateMipmap(Ie),Me.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?qe.setTextureCube(x,0):x.isData3DTexture?qe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?qe.setTexture2DArray(x,0):qe.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===rm?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===mu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qp=class extends wa{};qp.prototype.isWebGL1Renderer=!0;var hu=class extends po{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new co,this.environmentRotation=new co,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};function jl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function oO(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var fo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xp=class extends fo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ax,endingEnd:ax}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case cx:s=e,a=2*t-i;break;case lx:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case cx:o=e,c=2*i-t;break;case lx:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),y=g*g,p=y*g,f=-h*p+2*h*y-h*g,S=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-m)*p+(1.5+m)*y+.5*g,w=m*p-m*y;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+S*o[l+I]+M*o[c+I]+w*o[d+I];return s}},Yp=class extends fo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Zp=class extends fo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jl(t,this.TimeBufferType),this.values=jl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jl(e.times,Array),values:jl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ql:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case Yf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ql;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Yf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&oO(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Yf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Xl;var Kr=class extends Kn{};Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=ql;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jp=class extends Kn{};Jp.prototype.ValueTypeName="color";var Kp=class extends Kn{};Kp.prototype.ValueTypeName="number";var Qp=class extends fo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)cr.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ea=class extends Kn{InterpolantFactoryMethodLinear(e){return new Qp(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.DefaultInterpolation=Xl;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Kn{};Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=ql;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var em=class extends Kn{};em.prototype.ValueTypeName="vector";var fu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Qx(){return(typeof performance>"u"?Date:performance).now()}var am="\\[\\]\\.:\\/",aO=new RegExp("["+am+"]","g"),cm="[^"+am+"]",cO="[^"+am.replace("\\.","")+"]",lO=/((?:WC+[\/:])*)/.source.replace("WC",cm),uO=/(WCOD+)?/.source.replace("WCOD",cO),dO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cm),hO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cm),fO=new RegExp("^"+lO+uO+dO+hO+"$"),pO=["material","materials","bones","map"],tm=class{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(aO,"")}static parseTrackName(t){let i=fO.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);pO.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=tm,n})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var XV=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nm);var _M={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gO=new ba(-1,1,1,-1,0,1),lm=class extends Ri{constructor(){super(),this.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nn([0,2,0,0,2,0],2))}},vO=new lm,vu=class{constructor(e){this._mesh=new Qt(vO,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gO)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yu=class extends Pi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sm.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ta=class extends Pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},_u=class extends Pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new it);this._width=i.width,this._height=i.height,t=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yu(_M),this.copyPass.material.blending=di,this.clock=new fu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ta!==void 0&&(o instanceof Ta?i=!0:o instanceof _u&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mu=class extends Pi{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var yO=["shaderContainer"],xM=(()=>{let e=class e{constructor(i){this.platformId=i,this.baseSize=2}ngOnInit(){if(S0(this.platformId)==!1)return;this.scene=new hu,this.camera=new Kt(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new wa({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.containerRef.nativeElement.appendChild(this.renderer.domElement);let i=new xu(this.renderer);i.addPass(new Mu(this.scene,this.camera));let r=new en({uniforms:{time:{value:0},ratio:{value:window.innerWidth/window.innerHeight},ratiofrag:{value:window.innerWidth/window.innerHeight}},vertexShader:`
        varying vec2 vUv;
        uniform float ratio;

        void main() {
          vUv = uv;
          if (ratio > 1.0) {
            // For wider screens, adjust uv.x
            vUv.x = uv.x * ratio;
          } else {
            // For taller screens, adjust uv.y
            vUv.y = uv.y / ratio;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision mediump float; // Specify the precision
        varying vec2 vUv; // Receive the UV coordinates
        uniform float time; // Receive the time
        uniform float ratiofrag; // Receive the time

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
        
        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                                -0.577350269189626,  // -1.0 + 2.0 * C.x
                                0.024390243902439); // 1.0 / 41.0
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
        
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m *= m *= m *= m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = ceil(x + 0.5);
            vec3 a0 = x - ox;
            m /= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  - x0.x  + h.x  * x0.y;
            g.yz = a0.yz - x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {

          float x = vUv.x;
          float y = vUv.y;

          //Position of current point
          vec2 pos = vec2(x, y);
          vec2 posIni = pos;
          pos.y -= (time * 8.00);
          pos *= 5.00;

          //Initialize Variables
          vec3 color = vec3(0.00);
          
          //Add a random position
          float DF = 0.50 + snoise(pos);

          //Add a random position (p2)

          float sinTime =1.0;// sin(time);
          //float cosTime = cos(time);
          //float a = snoise(pos * vec2(0.50, sinTime) * 0.20) * 3.1415;
          float a = snoise(posIni * sin(5.00*time) * sin(time) ) * 3.1415;
          
          //Get pixel value
          float d = smoothstep(0.00, 1.00, fract(DF - a));

          //Calculate color
          color = mix(
            vec3(0.30, 0.00, 0.950),
            vec3(0.10, 0.50, 0.625),
            clamp(d, 0.0, 1.0) 
            ) * d;
    
          gl_FragColor = vec4(color, 1.0);
          gl_FragColor.rgb *= clamp(
            (2.50 - 3.00 * y / length(color)),
            0.90 - y,
            y*30.00
            );
        }
      `});var s=window.innerWidth/window.innerHeight;let o=new ho(this.baseSize*s,this.baseSize,1,1),a=new Qt(o,r);this.scene.add(a),this.camera.position.set(0,0,1),this.camera.aspect=s,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio);let c=Date.now(),l=()=>{requestAnimationFrame(l);let u=(Date.now()-c)*1e-5;r.uniforms.time.value=u,i.render()};l()}onResize(){var i=window.innerWidth/window.innerHeight;this.camera.aspect=i,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}};e.\u0275fac=function(r){return new(r||e)(Rr(Gn))},e.\u0275cmp=zi({type:e,selectors:[["app-shader-background"]],viewQuery:function(r,s){if(r&1&&r0(yO,7),r&2){let o;kh(o=Bh())&&(s.containerRef=o.first)}},hostBindings:function(r,s){r&1&&jn("resize",function(){return s.onResize()},!1,ny)},standalone:!0,features:[ji],decls:2,vars:0,consts:[["shaderContainer",""]],template:function(r,s){r&1&&Wn(0,"div",null,0)},styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;height:100%}"]});let n=e;return n})();function _O(n,e){n&1&&(Vt(0,"div",5),Wi(1,"\u2B08"),Wt())}function xO(n,e){n&1&&(Vt(0,"div",5),Wi(1,"\u25BB"),Wt())}var MM=(()=>{let e=class e{constructor(){this.name="Tab",this.icon="fa fa-circle",this.buttonColor="blue",this.isExternalLink=!1,this.tabID=e.tabIDCounter++,this.outputTabID=new rn}emitTabID(){console.log("Emitting Tab ID: "+this.tabID),this.outputTabID.emit(String(this.tabID))}};e.tabIDCounter=0,e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=zi({type:e,selectors:[["app-tab"]],inputs:{name:"name",icon:"icon",buttonColor:"buttonColor",isExternalLink:"isExternalLink",tabID:"tabID"},outputs:{outputTabID:"outputTabID"},standalone:!0,features:[ji],decls:8,vars:7,consts:[["id","container",1,"app-tab",3,"click"],["id","block"],["id","icon"],["id","text"],[3,"ngIf"],["id","fold-arrow"]],template:function(r,s){r&1&&(Vt(0,"div",0),jn("click",function(){return s.emitTabID()}),Wn(1,"div",1),Vt(2,"div",2),Wn(3,"i"),Wt(),Vt(4,"div",3),Wi(5),Wt(),Uh(6,_O,2,0,"ng-template",4)(7,xO,2,0,"ng-template",4),Wt()),r&2&&(An(),Jc("background-color",s.buttonColor),An(2),Jy(s.icon),An(2),Kc(" ",s.name," "),An(),xi("ngIf",s.isExternalLink===!0),An(),xi("ngIf",s.isExternalLink===!1))},dependencies:[$o,E0],styles:["#container[_ngcontent-%COMP%]{--padding-horizontal: 1.5vw;--padding-vertical: 2vw;cursor:pointer;display:flex;align-items:center;padding:var(--padding-vertical) var(--padding-horizontal);border:none;position:relative;width:90%}#block[_ngcontent-%COMP%]{margin:auto;opacity:.6;border-radius:2vw;position:absolute;inset:0;transition:transform .2s,opacity .2s;z-index:0}#container[_ngcontent-%COMP%]:hover   #block[_ngcontent-%COMP%]{transform:scale(1.05);opacity:1}#container[_ngcontent-%COMP%]:not(:hover)   #block[_ngcontent-%COMP%]{transition:transform .5s,opacity .5s}#icon[_ngcontent-%COMP%], #text[_ngcontent-%COMP%], #fold-arrow[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;flex:1;display:flex;align-items:center;z-index:1}#icon[_ngcontent-%COMP%]{justify-content:flex-start}#text[_ngcontent-%COMP%]{justify-content:center}#fold-arrow[_ngcontent-%COMP%]{justify-content:flex-end;text-align:right}"]});let n=e;return n})();var bM=(()=>{let e=class e{constructor(){this.title="PersonalPortfolioSite",this.tabIDSelected=0}onClickLinkedIn(i){window.open("https://www.linkedin.com/in/aidan-cusack-74406728b/","_blank")}onClickGitHub(i){window.open("https://github.com/Ilverism/","_blank")}onClickYouTube(i){window.open("https://www.youtube.com/@IlverismOST/","_blank")}handleTabIDEvent(i){console.log("Received Tab ID: "+i),this.tabIDSelected=parseInt(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=zi({type:e,selectors:[["app-root"]],standalone:!0,features:[ji],decls:15,vars:16,consts:[["rel","stylesheet","href",ey`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`],[1,"fullscreen-container"],[1,"overlay-content"],[1,"grid-container"],[3,"click","outputTabID","name","icon","buttonColor","isExternalLink"],[3,"outputTabID","name","icon","buttonColor","isExternalLink"],[3,"outputTabID","name","buttonColor","isExternalLink"]],template:function(r,s){r&1&&(Wn(0,"link",0),Vt(1,"div",1),Wn(2,"app-shader-background"),Vt(3,"div",2)(4,"div",3)(5,"pre"),Wi(6,"            "),Wt(),Vt(7,"h4"),Wi(8,"Ilverism"),Wt(),Vt(9,"app-tab",4),jn("click",function(a){return s.onClickLinkedIn(a)})("outputTabID",function(a){return s.handleTabIDEvent(a)}),Wt(),Vt(10,"app-tab",5),jn("outputTabID",function(a){return s.handleTabIDEvent(a)}),Wt(),Vt(11,"app-tab",4),jn("click",function(a){return s.onClickYouTube(a)})("outputTabID",function(a){return s.handleTabIDEvent(a)}),Wt(),Vt(12,"app-tab",6),jn("outputTabID",function(a){return s.handleTabIDEvent(a)}),Wt(),Vt(13,"h5"),Wi(14),Wt()()()()),r&2&&(An(9),xi("name","LinkedIn")("icon","fab fa-linkedin")("buttonColor","rgba(0, 123, 181, 1.00)")("isExternalLink",!0),An(),xi("name","GitHub")("icon","fab fa-github")("buttonColor","#333")("isExternalLink",!0),An(),xi("name","YouTube")("icon","fab fa-youtube")("buttonColor","rgba(255, 0, 0, 1.00)")("isExternalLink",!0),An(),xi("name","Test")("buttonColor","lightgray")("isExternalLink",!1),An(2),Vh(s.tabIDSelected))},dependencies:[$o,xM,MM],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;height:10%}app-shader-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.overlay-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:1;color:#fff;font:3vw sans-serif}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1vw;align-content:left}"]});let n=e;return n})();H0(bM,C_).catch(n=>console.error(n));
