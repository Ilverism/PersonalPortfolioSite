var yM=Object.defineProperty,_M=Object.defineProperties;var xM=Object.getOwnPropertyDescriptors;var Ta=Object.getOwnPropertySymbols;var am=Object.prototype.hasOwnProperty,cm=Object.prototype.propertyIsEnumerable;var om=(n,e,t)=>e in n?yM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pe=(n,e)=>{for(var t in e||={})am.call(e,t)&&om(n,t,e[t]);if(Ta)for(var t of Ta(e))cm.call(e,t)&&om(n,t,e[t]);return n},Mt=(n,e)=>_M(n,xM(e));var lm=(n,e)=>{var t={};for(var i in n)am.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Ta)for(var i of Ta(n))e.indexOf(i)<0&&cm.call(n,i)&&(t[i]=n[i]);return t};var Ca=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var um=null;var xu=1,dm=Symbol("SIGNAL");function st(n){let e=um;return um=n,e}var hm={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function MM(n){if(!(bu(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===xu)){if(!n.producerMustRecompute(n)&&!Mu(n)){n.dirty=!1,n.lastCleanEpoch=xu;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=xu}}function fm(n){return n&&(n.nextProducerIndex=0),st(n)}function pm(n,e){if(st(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(bu(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)wu(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Mu(n){Aa(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(MM(t),i!==t.version))return!0}return!1}function mm(n){if(Aa(n),bu(n))for(let e=0;e<n.producerNode.length;e++)wu(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function wu(n,e){if(wM(n),Aa(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)wu(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Aa(r),r.producerIndexOfThis[i]=e}}function bu(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Aa(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function wM(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function bM(){throw new Error}var EM=bM;function gm(n){EM=n}function De(n){return typeof n=="function"}function Zr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Da=Zr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function fo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ct=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(De(i))try{i()}catch(s){e=s instanceof Da?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{vm(s)}catch(o){e=e??[],o instanceof Da?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Da(e)}}add(e){var t;if(e&&e!==this)if(this.closed)vm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&fo(t,e)}remove(e){let{_finalizers:t}=this;t&&fo(t,e),e instanceof n&&e._removeParent(this)}};Ct.EMPTY=(()=>{let n=new Ct;return n.closed=!0,n})();var Eu=Ct.EMPTY;function Ia(n){return n instanceof Ct||n&&"closed"in n&&De(n.remove)&&De(n.add)&&De(n.unsubscribe)}function vm(n){De(n)?n():n.unsubscribe()}var Nn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Jr={setTimeout(n,e,...t){let{delegate:i}=Jr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Jr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ra(n){Jr.setTimeout(()=>{let{onUnhandledError:e}=Nn;if(e)e(n);else throw n})}function po(){}var ym=Su("C",void 0,void 0);function _m(n){return Su("E",void 0,n)}function xm(n){return Su("N",n,void 0)}function Su(n,e,t){return{kind:n,value:e,error:t}}var ur=null;function Kr(n){if(Nn.useDeprecatedSynchronousErrorHandling){let e=!ur;if(e&&(ur={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ur;if(ur=null,t)throw i}}else n()}function Mm(n){Nn.useDeprecatedSynchronousErrorHandling&&ur&&(ur.errorThrown=!0,ur.error=n)}var dr=class extends Ct{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ia(e)&&e.add(this)):this.destination=CM}static create(e,t,i){return new Qr(e,t,i)}next(e){this.isStopped?Cu(xm(e),this):this._next(e)}error(e){this.isStopped?Cu(_m(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Cu(ym,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},SM=Function.prototype.bind;function Tu(n,e){return SM.call(n,e)}var Au=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Pa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Pa(i)}else Pa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Pa(t)}}},Qr=class extends dr{constructor(e,t,i){super();let r;if(De(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Nn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Tu(e.next,s),error:e.error&&Tu(e.error,s),complete:e.complete&&Tu(e.complete,s)}):r=e}this.destination=new Au(r)}};function Pa(n){Nn.useDeprecatedSynchronousErrorHandling?Mm(n):Ra(n)}function TM(n){throw n}function Cu(n,e){let{onStoppedNotification:t}=Nn;t&&Jr.setTimeout(()=>t(n,e))}var CM={closed:!0,next:po,error:TM,complete:po};var es=typeof Symbol=="function"&&Symbol.observable||"@@observable";function cn(n){return n}function Du(...n){return Iu(n)}function Iu(n){return n.length===0?cn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ct=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=DM(t)?t:new Qr(t,i,r);return Kr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=wm(i),new i((r,s)=>{let o=new Qr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[es](){return this}pipe(...t){return Iu(t)(this)}toPromise(t){return t=wm(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function wm(n){var e;return(e=n??Nn.Promise)!==null&&e!==void 0?e:Promise}function AM(n){return n&&De(n.next)&&De(n.error)&&De(n.complete)}function DM(n){return n&&n instanceof dr||AM(n)&&Ia(n)}function Ru(n){return De(n?.lift)}function Qe(n){return e=>{if(Ru(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function et(n,e,t,i,r){return new Pu(n,e,t,i,r)}var Pu=class extends dr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ts(){return Qe((n,e)=>{let t=null;n._refCount++;let i=et(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var ns=class extends ct{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Ru(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ct;let t=this.getSubject();e.add(this.source.subscribe(et(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ct.EMPTY)}return e}refCount(){return ts()(this)}};var bm=Zr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var $t=(()=>{class n extends ct{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Na(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new bm}next(t){Kr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Kr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Kr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Eu:(this.currentObservers=null,s.push(t),new Ct(()=>{this.currentObservers=null,fo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ct;return t.source=this,t}}return n.create=(e,t)=>new Na(e,t),n})(),Na=class extends $t{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Eu}};var Bt=class extends $t{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var ln=new ct(n=>n.complete());function Em(n){return n&&De(n.schedule)}function Sm(n){return n[n.length-1]}function Tm(n){return De(Sm(n))?n.pop():void 0}function Ii(n){return Em(Sm(n))?n.pop():void 0}function Am(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Cm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function hr(n){return this instanceof hr?(this.v=n,this):new hr(n)}function Dm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,y){s.push([h,m,g,y])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof hr?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Im(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Cm=="function"?Cm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var La=n=>n&&typeof n.length=="number"&&typeof n!="function";function Oa(n){return De(n?.then)}function Fa(n){return De(n[es])}function Ua(n){return Symbol.asyncIterator&&De(n?.[Symbol.asyncIterator])}function ka(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function IM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ba=IM();function Va(n){return De(n?.[Ba])}function za(n){return Dm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield hr(t.read());if(r)return yield hr(void 0);yield yield hr(i)}}finally{t.releaseLock()}})}function Ha(n){return De(n?.getReader)}function Nt(n){if(n instanceof ct)return n;if(n!=null){if(Fa(n))return RM(n);if(La(n))return PM(n);if(Oa(n))return NM(n);if(Ua(n))return Rm(n);if(Va(n))return LM(n);if(Ha(n))return OM(n)}throw ka(n)}function RM(n){return new ct(e=>{let t=n[es]();if(De(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function PM(n){return new ct(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function NM(n){return new ct(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ra)})}function LM(n){return new ct(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Rm(n){return new ct(e=>{FM(n,e).catch(t=>e.error(t))})}function OM(n){return Rm(za(n))}function FM(n,e){var t,i,r,s;return Am(this,void 0,void 0,function*(){try{for(t=Im(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Kt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Ga(n,e=0){return Qe((t,i)=>{t.subscribe(et(i,r=>Kt(i,n,()=>i.next(r),e),()=>Kt(i,n,()=>i.complete(),e),r=>Kt(i,n,()=>i.error(r),e)))})}function Wa(n,e=0){return Qe((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Pm(n,e){return Nt(n).pipe(Wa(e),Ga(e))}function Nm(n,e){return Nt(n).pipe(Wa(e),Ga(e))}function Lm(n,e){return new ct(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Om(n,e){return new ct(t=>{let i;return Kt(t,e,()=>{i=n[Ba](),Kt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>De(i?.return)&&i.return()})}function ja(n,e){if(!n)throw new Error("Iterable cannot be null");return new ct(t=>{Kt(t,e,()=>{let i=n[Symbol.asyncIterator]();Kt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Fm(n,e){return ja(za(n),e)}function Um(n,e){if(n!=null){if(Fa(n))return Pm(n,e);if(La(n))return Lm(n,e);if(Oa(n))return Nm(n,e);if(Ua(n))return ja(n,e);if(Va(n))return Om(n,e);if(Ha(n))return Fm(n,e)}throw ka(n)}function St(n,e){return e?Um(n,e):Nt(n)}function Te(...n){let e=Ii(n);return St(n,e)}function is(n,e){let t=De(n)?n:()=>n,i=r=>r.error(t());return new ct(e?r=>e.schedule(i,0,r):i)}function Nu(n){return!!n&&(n instanceof ct||De(n.lift)&&De(n.subscribe))}var ui=Zr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Ze(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:UM}=Array;function kM(n,e){return UM(e)?n(...e):n(e)}function km(n){return Ze(e=>kM(n,e))}var{isArray:BM}=Array,{getPrototypeOf:VM,prototype:zM,keys:HM}=Object;function Bm(n){if(n.length===1){let e=n[0];if(BM(e))return{args:e,keys:null};if(GM(e)){let t=HM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function GM(n){return n&&typeof n=="object"&&VM(n)===zM}function Vm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function $a(...n){let e=Ii(n),t=Tm(n),{args:i,keys:r}=Bm(n);if(i.length===0)return St([],e);let s=new ct(WM(i,e,r?o=>Vm(r,o):cn));return t?s.pipe(km(t)):s}function WM(n,e,t=cn){return i=>{zm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)zm(e,()=>{let l=St(n[c],e),u=!1;l.subscribe(et(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function zm(n,e,t){n?Kt(t,n,e):e()}function Hm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let p=!1;Nt(t(y,u++)).subscribe(et(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?Kt(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(et(e,m,()=>{d=!0,h()})),()=>{a?.()}}function At(n,e,t=1/0){return De(e)?At((i,r)=>Ze((s,o)=>e(i,s,r,o))(Nt(n(i,r))),t):(typeof e=="number"&&(t=e),Qe((i,r)=>Hm(i,r,n,t)))}function Lu(n=1/0){return At(cn,n)}function Gm(){return Lu(1)}function rs(...n){return Gm()(St(n,Ii(n)))}function qa(n){return new ct(e=>{Nt(n()).subscribe(e)})}function vn(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ri(n){return Qe((e,t)=>{let i=null,r=!1,s;i=e.subscribe(et(t,void 0,void 0,o=>{s=Nt(n(o,Ri(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Wm(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(et(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function fr(n,e){return De(e)?At(n,e,1):At(n,1)}function Pi(n){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function di(n){return n<=0?()=>ln:Qe((e,t)=>{let i=0;e.subscribe(et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Ou(n){return Ze(()=>n)}function Xa(n=jM){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function jM(){return new ui}function ss(n){return Qe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Ln(n,e){let t=arguments.length>=2;return i=>i.pipe(n?vn((r,s)=>n(r,s,i)):cn,di(1),t?Pi(e):Xa(()=>new ui))}function os(n){return n<=0?()=>ln:Qe((e,t)=>{let i=[];e.subscribe(et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Fu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?vn((r,s)=>n(r,s,i)):cn,os(1),t?Pi(e):Xa(()=>new ui))}function Uu(n,e){return Qe(Wm(n,e,arguments.length>=2,!0))}function ku(...n){let e=Ii(n);return Qe((t,i)=>{(e?rs(n,t,e):rs(n,t)).subscribe(i)})}function yn(n,e){return Qe((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(et(i,c=>{r?.unsubscribe();let l=0,u=s++;Nt(n(c,u)).subscribe(r=et(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Bu(n){return Qe((e,t)=>{Nt(n).subscribe(et(t,()=>t.complete(),po)),!t.closed&&e.subscribe(t)})}function Dt(n,e,t){let i=De(n)||e||t?{next:n,error:e,complete:t}:n;return i?Qe((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(et(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):cn}var $M="https://g.co/ng/security#xss",Ee=class extends Error{constructor(e,t){super(bc(e,t)),this.code=e}};function bc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Ec(n){return{toString:n}.toString()}var pr=globalThis;function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("Could not find renamed property on target object.")}function en(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(en).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function td(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var qM=ut({__forward_ref__:ut});function Tg(n){return n.__forward_ref__=Tg,n.toString=function(){return en(this())},n}function xn(n){return Cg(n)?n():n}function Cg(n){return typeof n=="function"&&n.hasOwnProperty(qM)&&n.__forward_ref__===Tg}function Re(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Sc(n){return{providers:n.providers||[],imports:n.imports||[]}}function Tc(n){return jm(n,Dg)||jm(n,Ig)}function Ag(n){return Tc(n)!==null}function jm(n,e){return n.hasOwnProperty(e)?n[e]:null}function XM(n){let e=n&&(n[Dg]||n[Ig]);return e||null}function $m(n){return n&&(n.hasOwnProperty(qm)||n.hasOwnProperty(YM))?n[qm]:null}var Dg=ut({\u0275prov:ut}),qm=ut({\u0275inj:ut}),Ig=ut({ngInjectableDef:ut}),YM=ut({ngInjectorDef:ut}),We=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Re({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Rg(n){return n&&!!n.\u0275providers}var ZM=ut({\u0275cmp:ut}),JM=ut({\u0275dir:ut}),KM=ut({\u0275pipe:ut}),QM=ut({\u0275mod:ut}),oc=ut({\u0275fac:ut}),mo=ut({__NG_ELEMENT_ID__:ut}),Xm=ut({__NG_ENV_ID__:ut});function Pg(n){return typeof n=="string"?n:n==null?"":String(n)}function ew(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Pg(n)}function tw(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ee(-200,n)}function $d(n,e){throw new Ee(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),nd;function Ng(){return nd}function _n(n){let e=nd;return nd=n,e}function Lg(n,e,t){let i=Tc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;$d(n,"Injector")}var nw={},go=nw,iw="__NG_DI_FLAG__",ac="ngTempTokenPath",rw="ngTokenPath",sw=/\n/gm,ow="\u0275",Ym="__source",us;function aw(){return us}function Ni(n){let e=us;return us=n,e}function cw(n,e=$e.Default){if(us===void 0)throw new Ee(-203,!1);return us===null?Lg(n,void 0,e):us.get(n,e&$e.Optional?null:void 0,e)}function tt(n,e=$e.Default){return(Ng()||cw)(xn(n),e)}function se(n,e=$e.Default){return tt(n,Cc(e))}function Cc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function id(n){let e=[];for(let t=0;t<n.length;t++){let i=xn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ee(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],c=lw(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(tt(r,s))}else e.push(tt(i))}return e}function lw(n){return n[iw]}function uw(n,e,t,i){let r=n[ac];throw e[Ym]&&r.unshift(e[Ym]),n.message=dw(`
`+n.message,r,t,i),n[rw]=r,n[ac]=null,n}function dw(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==ow?n.slice(2):n;let r=en(e);if(Array.isArray(e))r=e.map(en).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):en(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(sw,`
  `)}`}function hs(n,e){let t=n.hasOwnProperty(oc);return t?n[oc]:null}function hw(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function fw(n){return n.flat(Number.POSITIVE_INFINITY)}function qd(n,e){n.forEach(t=>Array.isArray(t)?qd(t,e):e(t))}function Og(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function cc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function pw(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function Xd(n,e,t){let i=Io(n,e);return i>=0?n[i|1]=t:(i=~i,pw(n,i,e,t)),i}function Vu(n,e){let t=Io(n,e);if(t>=0)return n[t|1]}function Io(n,e){return mw(n,e,1)}function mw(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var vo={},Qt=[],gr=new We(""),Fg=new We("",-1),Ug=new We(""),lc=class{get(e,t=go){if(t===go){let i=new Error(`NullInjectorError: No provider for ${en(e)}!`);throw i.name="NullInjectorError",i}return t}},kg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(kg||{}),Kn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Kn||{}),Fi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Fi||{});function gw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function rd(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];yw(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function vw(n){return n===3||n===4||n===6}function yw(n){return n.charCodeAt(0)===64}function Yd(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Zm(n,t,r,null,e[++i]):Zm(n,t,r,null,null))}}return n}function Zm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Bg="ng-template";function _w(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&gw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Zd(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Zd(n){return n.type===4&&n.value!==Bg}function xw(n,e,t){let i=n.type===4&&!t?Bg:n.value;return e===i}function Mw(n,e,t){let i=4,r=n.attrs,s=r!==null?Ew(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!On(i)&&!On(c))return!1;if(o&&On(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!xw(n,c,t)||c===""&&e.length===1){if(On(i))return!1;o=!0}}else if(i&8){if(r===null||!_w(n,r,c,t)){if(On(i))return!1;o=!0}}else{let l=e[++a],u=ww(c,r,Zd(n),t);if(u===-1){if(On(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(On(i))return!1;o=!0}}}}return On(i)||o}function On(n){return(n&1)===0}function ww(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Sw(e,n)}function bw(n,e,t=!1){for(let i=0;i<e.length;i++)if(Mw(n,e[i],t))return!0;return!1}function Ew(n){for(let e=0;e<n.length;e++){let t=n[e];if(vw(t))return e}return n.length}function Sw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Jm(n,e){return n?":not("+e.trim()+")":e}function Tw(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!On(o)&&(e+=Jm(s,r),r=""),i=o,s=s||!On(i);t++}return r!==""&&(e+=Jm(s,r)),e}function Cw(n){return n.map(Tw).join(",")}function Aw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!On(r))break;r=s}i++}return{attrs:e,classes:t}}function ki(n){return Ec(()=>{let e=Wg(n),t=Mt(pe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===kg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Kn.Emulated,styles:n.styles||Qt,_:null,schemas:n.schemas||null,tView:null,id:""});jg(t);let i=n.dependencies;return t.directiveDefs=Qm(i,!1),t.pipeDefs=Qm(i,!0),t.id=Rw(t),t})}function Dw(n){return vr(n)||Vg(n)}function Iw(n){return n!==null}function Ac(n){return Ec(()=>({type:n.type,bootstrap:n.bootstrap||Qt,declarations:n.declarations||Qt,imports:n.imports||Qt,exports:n.exports||Qt,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Km(n,e){if(n==null)return vo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Fi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Fi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Jd(n){return Ec(()=>{let e=Wg(n);return jg(e),e})}function vr(n){return n[ZM]||null}function Vg(n){return n[JM]||null}function zg(n){return n[KM]||null}function Hg(n){let e=vr(n)||Vg(n)||zg(n);return e!==null?e.standalone:!1}function Gg(n,e){let t=n[QM]||null;if(!t&&e===!0)throw new Error(`Type ${en(n)} does not have '\u0275mod' property.`);return t}function Wg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||vo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Qt,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Km(n.inputs,e),outputs:Km(n.outputs),debugInfo:null}}function jg(n){n.features?.forEach(e=>e(n))}function Qm(n,e){if(!n)return null;let t=e?zg:Dw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Iw)}function Rw(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function wr(n){return{\u0275providers:n}}function Pw(...n){return{\u0275providers:$g(!0,n),\u0275fromNgModule:!0}}function $g(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return qd(e,o=>{let a=o;sd(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&qg(r,s),t}function qg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Kd(r,s=>{e(s,i)})}}function sd(n,e,t,i){if(n=xn(n),!n)return!1;let r=null,s=$m(n),o=!s&&vr(n);if(!s&&!o){let c=n.ngModule;if(s=$m(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)sd(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{qd(s.imports,u=>{sd(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&qg(l,e)}if(!a){let l=hs(r)||(()=>new r);e({provide:r,useFactory:l,deps:Qt},r),e({provide:Ug,useValue:r,multi:!0},r),e({provide:gr,useValue:()=>tt(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Kd(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Kd(n,e){for(let t of n)Rg(t)&&(t=t.\u0275providers),Array.isArray(t)?Kd(t,e):e(t)}var Nw=ut({provide:String,useValue:ut});function Xg(n){return n!==null&&typeof n=="object"&&Nw in n}function Lw(n){return!!(n&&n.useExisting)}function Ow(n){return!!(n&&n.useFactory)}function od(n){return typeof n=="function"}var Dc=new We(""),ec={},Fw={},zu;function Qd(){return zu===void 0&&(zu=new lc),zu}var wn=class{},yo=class extends wn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,cd(e,o=>this.processProvider(o)),this.records.set(Fg,as(void 0,this)),r.has("environment")&&this.records.set(wn,as(void 0,this));let s=this.records.get(Dc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Ug,Qt,$e.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=st(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),st(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ni(this),i=_n(void 0),r;try{return e()}finally{Ni(t),_n(i)}}get(e,t=go,i=$e.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Xm))return e[Xm](this);i=Cc(i);let r,s=Ni(this),o=_n(void 0);try{if(!(i&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Hw(e)&&Tc(e);l&&this.injectableDefInScope(l)?c=as(ad(e),ec):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&$e.Self?Qd():this.parent;return t=i&$e.Optional&&t===go?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[ac]=a[ac]||[]).unshift(en(e)),s)throw a;return uw(a,e,"R3InjectorError",this.source)}else throw a}finally{_n(o),Ni(s)}}resolveInjectorInitializers(){let e=st(null),t=Ni(this),i=_n(void 0),r;try{let s=this.get(gr,Qt,$e.Self);for(let o of s)o()}finally{Ni(t),_n(i),st(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(en(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ee(205,!1)}processProvider(e){e=xn(e);let t=od(e)?e:xn(e&&e.provide),i=kw(e);if(!od(e)&&e.multi===!0){let r=this.records.get(t);r||(r=as(void 0,ec,!0),r.factory=()=>id(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=st(null);try{return t.value===ec&&(t.value=Fw,t.value=t.factory()),typeof t.value=="object"&&t.value&&zw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{st(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=xn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ad(n){let e=Tc(n),t=e!==null?e.factory:hs(n);if(t!==null)return t;if(n instanceof We)throw new Ee(204,!1);if(n instanceof Function)return Uw(n);throw new Ee(204,!1)}function Uw(n){if(n.length>0)throw new Ee(204,!1);let t=XM(n);return t!==null?()=>t.factory(n):()=>new n}function kw(n){if(Xg(n))return as(void 0,n.useValue);{let e=Bw(n);return as(e,ec)}}function Bw(n,e,t){let i;if(od(n)){let r=xn(n);return hs(r)||ad(r)}else if(Xg(n))i=()=>xn(n.useValue);else if(Ow(n))i=()=>n.useFactory(...id(n.deps||[]));else if(Lw(n))i=()=>tt(xn(n.useExisting));else{let r=xn(n&&(n.useClass||n.provide));if(Vw(n))i=()=>new r(...id(n.deps));else return hs(r)||ad(r)}return i}function as(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Vw(n){return!!n.deps}function zw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Hw(n){return typeof n=="function"||typeof n=="object"&&n instanceof We}function cd(n,e){for(let t of n)Array.isArray(t)?cd(t,e):t&&Rg(t)?cd(t.\u0275providers,e):e(t)}function Bi(n,e){n instanceof yo&&n.assertNotDestroyed();let t,i=Ni(n),r=_n(void 0);try{return e()}finally{Ni(i),_n(r)}}function Gw(){return Ng()!==void 0||aw()!=null}function Ww(n){return typeof n=="function"}var un=0,Be=1,we=2,Lt=3,Un=4,Vn=5,kn=6,_o=7,hi=8,fs=9,Qn=10,yt=11,xo=12,eg=13,Ro=14,bn=15,Po=16,cs=17,fi=18,Ic=19,Yg=20,Li=21,Hu=22,yr=23,En=25,Zg=1,Mo=6,pi=7,uc=8,ps=9,tn=10,eh=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(eh||{});function Oi(n){return Array.isArray(n)&&typeof n[Zg]=="object"}function ei(n){return Array.isArray(n)&&n[Zg]===!0}function Jg(n){return(n.flags&4)!==0}function No(n){return n.componentOffset>-1}function Kg(n){return(n.flags&1)===1}function Lo(n){return!!n.template}function Qg(n){return(n[we]&512)!==0}var ld=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function ev(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Rc(){return tv}function tv(n){return n.type.prototype.ngOnChanges&&(n.setInput=$w),jw}Rc.ngInherit=!0;function jw(){let n=iv(this),e=n?.current;if(e){let t=n.previous;if(t===vo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function $w(n,e,t,i,r){let s=this.declaredInputs[i],o=iv(n)||qw(n,{previous:vo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new ld(l&&l.currentValue,t,c===vo),ev(n,e,r,t)}var nv="__ngSimpleChanges__";function iv(n){return n[nv]||null}function qw(n,e){return n[nv]=e}var tg=null;var Zn=function(n,e,t){tg?.(n,e,t)},Xw="svg",Yw="math",Zw=!1;function Jw(){return Zw}function Bn(n){for(;Array.isArray(n);)n=n[un];return n}function rv(n,e){return Bn(e[n])}function Sn(n,e){return Bn(e[n.index])}function sv(n,e){return n.data[e]}function br(n,e){let t=e[n];return Oi(t)?t:t[un]}function Kw(n){return(n[we]&4)===4}function th(n){return(n[we]&128)===128}function Qw(n){return ei(n[Lt])}function ng(n,e){return e==null?null:n[e]}function ov(n){n[cs]=0}function eb(n){n[we]&1024||(n[we]|=1024,th(n)&&wo(n))}function nh(n){return!!(n[we]&9216||n[yr]?.dirty)}function ud(n){n[Qn].changeDetectionScheduler?.notify(1),nh(n)?wo(n):n[we]&64&&(Jw()?(n[we]|=1024,wo(n)):n[Qn].changeDetectionScheduler?.notify())}function wo(n){n[Qn].changeDetectionScheduler?.notify();let e=bo(n);for(;e!==null&&!(e[we]&8192||(e[we]|=8192,!th(e)));)e=bo(e)}function av(n,e){if((n[we]&256)===256)throw new Ee(911,!1);n[Li]===null&&(n[Li]=[]),n[Li].push(e)}function tb(n,e){if(n[Li]===null)return;let t=n[Li].indexOf(e);t!==-1&&n[Li].splice(t,1)}function bo(n){let e=n[Lt];return ei(e)?e[Lt]:e}var nt={lFrame:gv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function nb(){return nt.lFrame.elementDepthCount}function ib(){nt.lFrame.elementDepthCount++}function rb(){nt.lFrame.elementDepthCount--}function cv(){return nt.bindingsEnabled}function Oo(){return nt.skipHydrationRootTNode!==null}function sb(n){return nt.skipHydrationRootTNode===n}function ob(n){nt.skipHydrationRootTNode=n}function ab(){nt.skipHydrationRootTNode=null}function wt(){return nt.lFrame.lView}function ti(){return nt.lFrame.tView}function ni(){let n=lv();for(;n!==null&&n.type===64;)n=n.parent;return n}function lv(){return nt.lFrame.currentTNode}function cb(){let n=nt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Pc(n,e){let t=nt.lFrame;t.currentTNode=n,t.isParent=e}function uv(){return nt.lFrame.isParent}function lb(){nt.lFrame.isParent=!1}function ub(n){return nt.lFrame.bindingIndex=n}function dv(){return nt.lFrame.bindingIndex++}function hv(n){let e=nt.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function db(){return nt.lFrame.inI18n}function hb(n,e){let t=nt.lFrame;t.bindingIndex=t.bindingRootIndex=n,dd(e)}function fb(){return nt.lFrame.currentDirectiveIndex}function dd(n){nt.lFrame.currentDirectiveIndex=n}function pb(n){let e=nt.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function fv(){return nt.lFrame.currentQueryIndex}function ih(n){nt.lFrame.currentQueryIndex=n}function mb(n){let e=n[Be];return e.type===2?e.declTNode:e.type===1?n[Vn]:null}function pv(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=mb(s),r===null||(s=s[Ro],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=nt.lFrame=mv();return i.currentTNode=e,i.lView=n,!0}function rh(n){let e=mv(),t=n[Be];nt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function mv(){let n=nt.lFrame,e=n===null?null:n.child;return e===null?gv(n):e}function gv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function vv(){let n=nt.lFrame;return nt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var yv=vv;function sh(){let n=vv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Er(){return nt.lFrame.selectedIndex}function _r(n){nt.lFrame.selectedIndex=n}function gb(){let n=nt.lFrame;return sv(n.tView,n.selectedIndex)}function _v(){return nt.lFrame.currentNamespace}var xv=!0;function Mv(){return xv}function ii(n){xv=n}function vb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=tv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function wv(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function tc(n,e,t){bv(n,e,3,t)}function nc(n,e,t,i){(n[we]&3)===t&&bv(n,e,t,i)}function Gu(n,e){let t=n[we];(t&3)===e&&(t&=16383,t+=1,n[we]=t)}function bv(n,e,t,i){let r=i!==void 0?n[cs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[cs]+=65536),(a<s||s==-1)&&(yb(n,t,e,c),n[cs]=(n[cs]&4294901760)+c+2),c++}function ig(n,e){Zn(4,n,e);let t=st(null);try{e.call(n)}finally{st(t),Zn(5,n,e)}}function yb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[we]>>14<n[cs]>>16&&(n[we]&3)===e&&(n[we]+=16384,ig(a,s)):ig(a,s)}var ds=-1,Eo=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function _b(n){return n instanceof Eo}function xb(n){return(n.flags&8)!==0}function Mb(n){return(n.flags&16)!==0}function Ev(n){return n!==ds}function dc(n){return n&32767}function wb(n){return n>>16}function hc(n,e){let t=wb(n),i=e;for(;t>0;)i=i[Ro],t--;return i}var hd=!0;function rg(n){let e=hd;return hd=n,e}var bb=256,Sv=bb-1,Tv=5,Eb=0,Jn={};function Sb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(mo)&&(i=t[mo]),i==null&&(i=t[mo]=Eb++);let r=i&Sv,s=1<<r;e.data[n+(r>>Tv)]|=s}function Cv(n,e){let t=Av(n,e);if(t!==-1)return t;let i=e[Be];i.firstCreatePass&&(n.injectorIndex=e.length,Wu(i.data,n),Wu(e,null),Wu(i.blueprint,null));let r=oh(n,e),s=n.injectorIndex;if(Ev(r)){let o=dc(r),a=hc(r,e),c=a[Be].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Wu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Av(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function oh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Nv(r),i===null)return ds;if(t++,r=r[Ro],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ds}function Tb(n,e,t){Sb(n,e,t)}function Dv(n,e,t){if(t&$e.Optional||n!==void 0)return n;$d(e,"NodeInjector")}function Iv(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),!(t&($e.Self|$e.Host))){let r=n[fs],s=_n(void 0);try{return r?r.get(e,i,t&$e.Optional):Lg(e,i,t&$e.Optional)}finally{_n(s)}}return Dv(i,e,t)}function Rv(n,e,t,i=$e.Default,r){if(n!==null){if(e[we]&2048&&!(i&$e.Self)){let o=Ib(n,e,t,i,Jn);if(o!==Jn)return o}let s=Pv(n,e,t,i,Jn);if(s!==Jn)return s}return Iv(e,t,i,r)}function Pv(n,e,t,i,r){let s=Ab(t);if(typeof s=="function"){if(!pv(e,n,i))return i&$e.Host?Dv(r,t,i):Iv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))$d(t);else return o}finally{yv()}}else if(typeof s=="number"){let o=null,a=Av(n,e),c=ds,l=i&$e.Host?e[bn][Vn]:null;for((a===-1||i&$e.SkipSelf)&&(c=a===-1?oh(n,e):e[a+8],c===ds||!og(i,!1)?a=-1:(o=e[Be],a=dc(c),e=hc(c,e)));a!==-1;){let u=e[Be];if(sg(s,a,u.data)){let d=Cb(a,e,t,o,i,l);if(d!==Jn)return d}c=e[a+8],c!==ds&&og(i,e[Be].data[a+8]===l)&&sg(s,a,e)?(o=u,a=dc(c),e=hc(c,e)):a=-1}}return r}function Cb(n,e,t,i,r,s){let o=e[Be],a=o.data[n+8],c=i==null?No(a)&&hd:i!=o&&(a.type&3)!==0,l=r&$e.Host&&s===a,u=ic(a,o,t,c,l);return u!==null?ms(e,o,u,a):Jn}function ic(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&Lo(m)&&m.type===t)return c}return null}function ms(n,e,t,i){let r=n[t],s=e.data;if(_b(r)){let o=r;o.resolving&&tw(ew(s[t]));let a=rg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?_n(o.injectImpl):null,u=pv(n,i,$e.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&vb(t,s[t],e)}finally{l!==null&&_n(l),rg(a),o.resolving=!1,yv()}}return r}function Ab(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(mo)?n[mo]:void 0;return typeof e=="number"?e>=0?e&Sv:Db:e}function sg(n,e,t){let i=1<<n;return!!(t[e+(n>>Tv)]&i)}function og(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var mr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Rv(this._tNode,this._lView,e,Cc(i),t)}};function Db(){return new mr(ni(),wt())}function ah(n){return Ec(()=>{let e=n.prototype.constructor,t=e[oc]||fd(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[oc]||fd(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function fd(n){return Cg(n)?()=>{let e=fd(xn(n));return e&&e()}:hs(n)}function Ib(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[we]&2048&&!(o[we]&512);){let a=Pv(s,o,t,i|$e.Self,Jn);if(a!==Jn)return a;let c=s.parent;if(!c){let l=o[Yg];if(l){let u=l.get(t,Jn,i);if(u!==Jn)return u}c=Nv(o),o=o[Ro]}s=c}return r}function Nv(n){let e=n[Be],t=e.type;return t===2?e.declTNode:t===1?n[Vn]:null}function ag(n,e=null,t=null,i){let r=Lv(n,e,t,i);return r.resolveInjectorInitializers(),r}function Lv(n,e=null,t=null,i,r=new Set){let s=[t||Qt,Pw(n)];return i=i||(typeof n=="object"?void 0:en(n)),new yo(s,e||Qd(),i||null,r)}var Sr=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return ag({name:""},r,i,"");{let s=i.name??"";return ag({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=go,e.NULL=new lc,e.\u0275prov=Re({token:e,providedIn:"any",factory:()=>tt(Fg)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var Rb="ngOriginalError";function ju(n){return n[Rb]}var mi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&ju(e);for(;t&&ju(t);)t=ju(t);return t||null}},Ov=new We("",{providedIn:"root",factory:()=>se(mi).handleError.bind(void 0)}),Fv=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Pb,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),pd=class extends Fv{constructor(e){super(),this._lView=e}onDestroy(e){return av(this._lView,e),()=>tb(this._lView,e)}};function Pb(){return new pd(wt())}function Nb(){return ys(ni(),wt())}function ys(n,e){return new Tr(Sn(n,e))}var Tr=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Nb;let n=e;return n})();function Lb(n){return n instanceof Tr?n.nativeElement:n}var md=class extends $t{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,Gw()&&(this.destroyRef=se(Fv,{optional:!0})??void 0)}emit(e){let t=st(null);try{super.next(e)}finally{st(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=$u(s),r&&(r=$u(r)),o&&(o=$u(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ct&&e.add(a),a}};function $u(n){return e=>{setTimeout(n,void 0,e)}}var Mn=md;function Ob(){return this._results[Symbol.iterator]()}var gd=class n{get changes(){return this._changes??=new Mn}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=Ob)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=fw(e);(this._changesDetected=!hw(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}},Fb="ngSkipHydration",Ub="ngskiphydration";function Uv(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===Ub)return!0}return!1}function kv(n){return n.hasAttribute(Fb)}function fc(n){return(n.flags&128)===128}function kb(n){if(fc(n))return!0;let e=n.parent;for(;e;){if(fc(n)||Uv(e))return!0;e=e.parent}return!1}var vd;function Bv(n){vd=n}function Nc(){if(vd!==void 0)return vd;if(typeof document<"u")return document;throw new Ee(210,!1)}var Lc=new We("",{providedIn:"root",factory:()=>Bb}),Bb="ng",ch=new We(""),zn=new We("",{providedIn:"platform",factory:()=>"unknown"});var lh=new We("",{providedIn:"root",factory:()=>Nc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Vb(){let n=new Cr;return se(zn)==="browser"&&(n.store=zb(Nc(),se(Lc))),n}var Cr=(()=>{let e=class e{constructor(){this.store={},this.onSerializeCallbacks={}}get(i,r){return this.store[i]!==void 0?this.store[i]:r}set(i,r){this.store[i]=r}remove(i){delete this.store[i]}hasKey(i){return this.store.hasOwnProperty(i)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(i,r){this.onSerializeCallbacks[i]=r}toJson(){for(let i in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(i))try{this.store[i]=this.onSerializeCallbacks[i]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}};e.\u0275prov=Re({token:e,providedIn:"root",factory:Vb});let n=e;return n})();function zb(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var Vv="h",zv="b",yd=function(n){return n.FirstChild="f",n.NextSibling="n",n}(yd||{}),Hb="e",Gb="t",uh="c",Hv="x",pc="r",Wb="i",jb="n",$b="d",qb="__nghData__",Gv=qb,qu="ngh",Xb="nghm",Wv=()=>null;function Yb(n,e,t=!1){let i=n.getAttribute(qu);if(i==null)return null;let[r,s]=i.split("|");if(i=t?s:r,!i)return null;let o=s?`|${s}`:"",a=t?r:o,c={};if(i!==""){let u=e.get(Cr,null,{optional:!0});u!==null&&(c=u.get(Gv,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,Oc(l,0,n.nextSibling)),a?n.setAttribute(qu,a):n.removeAttribute(qu),l}function Zb(){Wv=Yb}function dh(n,e,t=!1){return Wv(n,e,t)}function Jb(n){let e=n._lView;return e[Be].type===2?null:(Qg(e)&&(e=e[En]),e)}function Kb(n){return n.textContent?.replace(/\s/gm,"")}function Qb(n){let e=Nc(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(s){let o=Kb(s);return o==="ngetn"||o==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function Oc(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function _d(n,e){return n.segmentHeads?.[e]??null}function eE(n,e){let t=n.data,i=t[Hb]?.[e]??null;return i===null&&t[uh]?.[e]&&(i=hh(n,e)),i}function jv(n,e){return n.data[uh]?.[e]??null}function hh(n,e){let t=jv(n,e)??[],i=0;for(let r of t)i+=r[pc]*(r[Hv]??1);return i}function Fc(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[$b];n.disconnectedNodes=t?new Set(t):null}return!!n.disconnectedNodes?.has(e)}var Ya=new We(""),$v=!1,qv=new We("",{providedIn:"root",factory:()=>$v}),tE=new We(""),Za;function nE(){if(Za===void 0&&(Za=null,pr.trustedTypes))try{Za=pr.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Za}function iE(n){return nE()?.createScriptURL(n)||n}var xd=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${$M})`}};function Uc(n){return n instanceof xd?n.changingThisBreaksApplicationSecurity:n}function Xv(n){return iE(n[0])}var rE=/^>|^->|<!--|-->|--!>|<!-$/g,sE=/(<|>)/g,oE="\u200B$1\u200B";function aE(n){return n.replace(rE,e=>e.replace(sE,oE))}var Yv=new Map,cE=0;function lE(){return cE++}function uE(n){Yv.set(n[Ic],n)}function dE(n){Yv.delete(n[Ic])}var cg="__ngContext__";function gs(n,e){Oi(e)?(n[cg]=e[Ic],uE(e)):n[cg]=e}function Zv(n){return n.ownerDocument.defaultView}function hE(n){return n.ownerDocument.body}function Jv(n){return n instanceof Function?n():n}function Ja(n){return(n??se(Sr)).get(zn)==="browser"}var gi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(gi||{}),fE;function fh(n,e){return fE(n,e)}function ls(n,e,t,i,r){if(i!=null){let s,o=!1;ei(i)?s=i:Oi(i)&&(o=!0,i=i[un]);let a=Bn(i);n===0&&t!==null?r==null?ty(e,t,a):mc(e,t,a,r||null,!0):n===1&&t!==null?mc(e,t,a,r||null,!0):n===2?vh(e,a,o):n===3&&e.destroyNode(a),s!=null&&IE(e,n,s,t,r)}}function ph(n,e){return n.createText(e)}function pE(n,e,t){n.setValue(e,t)}function mh(n,e){return n.createComment(aE(e))}function kc(n,e,t){return n.createElement(e,t)}function mE(n,e){Kv(n,e),e[un]=null,e[Vn]=null}function gE(n,e,t,i,r,s){i[un]=r,i[Vn]=e,Bc(n,i,t,1,r,s)}function Kv(n,e){e[Qn].changeDetectionScheduler?.notify(1),Bc(n,e,e[yt],2,null,null)}function vE(n){let e=n[xo];if(!e)return Xu(n[Be],n);for(;e;){let t=null;if(Oi(e))t=e[xo];else{let i=e[tn];i&&(t=i)}if(!t){for(;e&&!e[Un]&&e!==n;)Oi(e)&&Xu(e[Be],e),e=e[Lt];e===null&&(e=n),Oi(e)&&Xu(e[Be],e),t=e&&e[Un]}e=t}}function yE(n,e,t,i){let r=tn+i,s=t.length;i>0&&(t[r-1][Un]=e),i<s-tn?(e[Un]=t[r],Og(t,tn+i,e)):(t.push(e),e[Un]=null),e[Lt]=t;let o=e[Po];o!==null&&t!==o&&_E(o,e);let a=e[fi];a!==null&&a.insertView(n),ud(e),e[we]|=128}function _E(n,e){let t=n[ps],r=e[Lt][Lt][bn];e[bn]!==r&&(n[we]|=eh.HasTransplantedViews),t===null?n[ps]=[e]:t.push(e)}function Qv(n,e){let t=n[ps],i=t.indexOf(e);t.splice(i,1)}function Md(n,e){if(n.length<=tn)return;let t=tn+e,i=n[t];if(i){let r=i[Po];r!==null&&r!==n&&Qv(r,i),e>0&&(n[t-1][Un]=i[Un]);let s=cc(n,tn+e);mE(i[Be],i);let o=s[fi];o!==null&&o.detachView(s[Be]),i[Lt]=null,i[Un]=null,i[we]&=-129}return i}function ey(n,e){if(!(e[we]&256)){let t=e[yt];t.destroyNode&&Bc(n,e,t,3,null,null),vE(e)}}function Xu(n,e){if(e[we]&256)return;let t=st(null);try{e[we]&=-129,e[we]|=256,e[yr]&&mm(e[yr]),ME(n,e),xE(n,e),e[Be].type===1&&e[yt].destroy();let i=e[Po];if(i!==null&&ei(e[Lt])){i!==e[Lt]&&Qv(i,e);let r=e[fi];r!==null&&r.detachView(n)}dE(e)}finally{st(t)}}function xE(n,e){let t=n.cleanup,i=e[_o];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[_o]=null);let r=e[Li];if(r!==null){e[Li]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function ME(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Eo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Zn(4,a,c);try{c.call(a)}finally{Zn(5,a,c)}}else{Zn(4,r,s);try{s.call(r)}finally{Zn(5,r,s)}}}}}function wE(n,e,t){return bE(n,e.parent,t)}function bE(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[un];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Kn.None||s===Kn.Emulated)return null}return Sn(i,t)}}function mc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function ty(n,e,t){n.appendChild(e,t)}function lg(n,e,t,i,r){i!==null?mc(n,e,t,i,r):ty(n,e,t)}function EE(n,e,t,i){n.removeChild(e,t,i)}function gh(n,e){return n.parentNode(e)}function SE(n,e){return n.nextSibling(e)}function TE(n,e,t){return AE(n,e,t)}function CE(n,e,t){return n.type&40?Sn(n,t):null}var AE=CE,ug;function ny(n,e,t,i){let r=wE(n,i,e),s=e[yt],o=i.parent||e[Vn],a=TE(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)lg(s,r,t[c],a,!1);else lg(s,r,t,a,!1);ug!==void 0&&ug(s,i,e,t,r)}function rc(n,e){if(e!==null){let t=e.type;if(t&3)return Sn(e,n);if(t&4)return wd(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return rc(n,i);{let r=n[e.index];return ei(r)?wd(-1,r):Bn(r)}}else{if(t&32)return fh(e,n)()||Bn(n[e.index]);{let i=iy(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=bo(n[bn]);return rc(r,i)}else return rc(n,e.next)}}}return null}function iy(n,e){if(e!==null){let i=n[bn][Vn],r=e.projection;return i.projection[r]}return null}function wd(n,e){let t=tn+n+1;if(t<e.length){let i=e[t],r=i[Be].firstChild;if(r!==null)return rc(i,r)}return e[pi]}function vh(n,e,t){let i=gh(n,e);i&&EE(n,i,e,t)}function ry(n){n.textContent=""}function yh(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&gs(Bn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)yh(n,e,t.child,i,r,s,!1),ls(e,n,r,a,s);else if(c&32){let l=fh(t,i),u;for(;u=l();)ls(e,n,r,u,s);ls(e,n,r,a,s)}else c&16?DE(n,e,i,t,r,s):ls(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Bc(n,e,t,i,r,s){yh(t,i,n.firstChild,e,r,s,!1)}function DE(n,e,t,i,r,s){let o=t[bn],c=o[Vn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ls(e,n,r,u,s)}else{let l=c,u=o[Lt];fc(i)&&(l.flags|=128),yh(n,e,l,u,r,s,!0)}}function IE(n,e,t,i,r){let s=t[pi],o=Bn(t);s!==o&&ls(e,n,i,s,r);for(let a=tn;a<t.length;a++){let c=t[a];Bc(c[Be],c,n,e,i,s)}}function RE(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:gi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=gi.Important),n.setStyle(t,i,r,s))}}function PE(n,e,t){n.setAttribute(e,"style",t)}function sy(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function oy(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&rd(n,e,i),r!==null&&sy(n,e,r),s!==null&&PE(n,e,s)}var Vi={};function zi(n=1){ay(ti(),wt(),Er()+n,!1)}function ay(n,e,t,i){if(!i)if((e[we]&3)===3){let s=n.preOrderCheckHooks;s!==null&&tc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&nc(e,s,0,t)}_r(t)}function Fo(n,e=$e.Default){let t=wt();if(t===null)return tt(n,e);let i=ni();return Rv(i,t,xn(n),e)}function cy(n,e,t,i,r,s){let o=st(null);try{let a=null;r&Fi.SignalBased&&(a=e[i][dm]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Fi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):ev(e,a,i,s)}finally{st(o)}}function NE(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)_r(~r);else{let s=r,o=t[++i],a=t[++i];hb(o,s);let c=e[s];a(2,c)}}}finally{_r(-1)}}function Vc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[un]=r,d[we]=i|4|128|8|64,(l!==null||n&&n[we]&2048)&&(d[we]|=2048),ov(d),d[Lt]=d[Ro]=n,d[hi]=t,d[Qn]=o||n&&n[Qn],d[yt]=a||n&&n[yt],d[fs]=c||n&&n[fs]||null,d[Vn]=s,d[Ic]=lE(),d[kn]=u,d[Yg]=l,d[bn]=e.type==2?n[bn]:d,d}function _h(n,e,t,i,r){let s=n.data[e];if(s===null)s=LE(n,e,t,i,r),db()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=cb();s.injectorIndex=o===null?-1:o.injectorIndex}return Pc(s,!0),s}function LE(n,e,t,i,r){let s=lv(),o=uv(),a=o?s:s&&s.parent,c=n.data[e]=GE(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function ly(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function uy(n,e,t,i,r){let s=Er(),o=i&2;try{_r(-1),o&&e.length>En&&ay(n,e,En,!1),Zn(o?2:0,r),t(i,r)}finally{_r(s),Zn(o?3:1,r)}}function dy(n,e,t){if(Jg(e)){let i=st(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{st(i)}}}function OE(n,e,t){cv()&&(JE(n,e,t,Sn(t,e)),(t.flags&64)===64&&gy(n,e,t))}function FE(n,e,t=Sn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function hy(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=fy(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function fy(n,e,t,i,r,s,o,a,c,l,u){let d=En+i,h=d+r,m=UE(d,h),g=typeof l=="function"?l():l;return m[Be]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function UE(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Vi);return t}function kE(n,e,t,i){let s=i.get(qv,$v)||t===Kn.ShadowDom,o=n.selectRootElement(e,s);return BE(o),o}function BE(n){py(n)}var py=()=>null;function VE(n){kv(n)?ry(n):Qb(n)}function zE(){py=VE}function HE(n,e,t,i){let r=yy(e);r.push(t),n.firstCreatePass&&_y(n).push(i,r.length-1)}function GE(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Oo()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function dg(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Fi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?hg(i,t,l,a,c):hg(i,t,l,a)}return i}function hg(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function WE(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=dg(0,d.inputs,u,c,m),l=dg(1,d.outputs,u,l,g);let y=c!==null&&o!==null&&!Zd(e)?oS(c,u,o):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function jE(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function $E(n,e,t,i,r,s,o,a){let c=Sn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Mh(n,t,u,i,r),No(e)&&qE(t,e.index)):e.type&3?(i=jE(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function qE(n,e){let t=br(e,n);t[we]&16||(t[we]|=64)}function XE(n,e,t,i){if(cv()){let r=i===null?null:{"":-1},s=QE(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&my(n,e,t,o,r,a),r&&eS(t,i,r)}t.mergedAttrs=Yd(t.mergedAttrs,t.attrs)}function my(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Tb(Cv(t,e),n,i[l].type);nS(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=ly(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Yd(t.mergedAttrs,u.hostAttrs),iS(n,t,e,c,u),tS(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}WE(n,t,s)}function YE(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;ZE(o)!=a&&o.push(a),o.push(t,i,s)}}function ZE(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function JE(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;No(t)&&rS(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Cv(t,e),gs(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=ms(e,n,a,t);if(gs(l,e),o!==null&&sS(e,a-r,l,c,t,o),Lo(c)){let u=br(t.index,e);u[hi]=ms(e,n,a,t)}}}function gy(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=fb();try{_r(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];dd(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&KE(c,l)}}finally{_r(-1),dd(o)}}function KE(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function QE(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(bw(e,o.selectors,!1))if(i||(i=[]),Lo(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;bd(n,e,c)}else i.unshift(o),bd(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function bd(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function eS(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ee(-301,!1);i.push(e[r],s)}}}function tS(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Lo(e)&&(t[""]=n)}}function nS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function iS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=hs(r.type,!0)),o=new Eo(s,Lo(r),Fo);n.blueprint[i]=o,t[i]=o,YE(n,e,i,ly(n,t,r.hostVars,Vi),r)}function rS(n,e,t){let i=Sn(e,n),r=hy(t),s=n[Qn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=xh(n,Vc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function sS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];cy(i,t,c,l,u,d)}}function oS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function aS(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function vy(n,e){let t=n.contentQueries;if(t!==null){let i=st(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];ih(s),a.contentQueries(2,e[o],o)}}}finally{st(i)}}}function xh(n,e){return n[xo]?n[eg][Un]=e:n[xo]=e,n[eg]=e,e}function Ed(n,e,t){ih(0);let i=st(null);try{e(n,t)}finally{st(i)}}function yy(n){return n[_o]||(n[_o]=[])}function _y(n){return n.cleanup||(n.cleanup=[])}function xy(n,e){let t=n[fs],i=t?t.get(mi,null):null;i&&i.handleError(e)}function Mh(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];cy(u,l,i,a,c,r)}}function cS(n,e,t){let i=rv(e,n);pE(n[yt],i,t)}function lS(n,e){let t=br(e,n),i=t[Be];uS(i,t);let r=t[un];r!==null&&t[kn]===null&&(t[kn]=dh(r,t[fs])),wh(i,t,t[hi])}function uS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function wh(n,e,t){rh(e);try{let i=n.viewQuery;i!==null&&Ed(1,i,t);let r=n.template;r!==null&&uy(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[fi]?.finishViewCreation(n),n.staticContentQueries&&vy(n,e),n.staticViewQueries&&Ed(2,n.viewQuery,t);let s=n.components;s!==null&&dS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[we]&=-5,sh()}}function dS(n,e){for(let t=0;t<e.length;t++)lS(n,e[t])}function hS(n,e,t,i){let r=st(null);try{let s=e.tView,a=n[we]&4096?4096:16,c=Vc(n,s,t,a,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),l=n[e.index];c[Po]=l;let u=n[fi];return u!==null&&(c[fi]=u.createEmbeddedView(s)),wh(s,c,t),c}finally{st(r)}}function fg(n,e){return!e||e.firstChild===null||fc(n)}function fS(n,e,t,i=!0){let r=e[Be];if(yE(r,e,n,t),i){let o=wd(t,n),a=e[yt],c=gh(a,n[pi]);c!==null&&gE(r,n[Vn],a,e,c,o)}let s=e[kn];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function gc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Bn(s)),ei(s)&&pS(s,i);let o=t.type;if(o&8)gc(n,e,t.child,i);else if(o&32){let a=fh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=iy(e,t);if(Array.isArray(a))i.push(...a);else{let c=bo(e[bn]);gc(c[Be],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function pS(n,e){for(let t=tn;t<n.length;t++){let i=n[t],r=i[Be].firstChild;r!==null&&gc(i[Be],i,r,e)}n[pi]!==n[un]&&e.push(n[pi])}var My=[];function mS(n){return n[yr]??gS(n)}function gS(n){let e=My.pop()??Object.create(yS);return e.lView=n,e}function vS(n){n.lView[yr]!==n&&(n.lView=null,My.push(n))}var yS=Mt(pe({},hm),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{wo(n.lView)},consumerOnSignalRead(){this.lView[yr]=this}});function wy(n){return Ey(n[xo])}function by(n){return Ey(n[Un])}function Ey(n){for(;n!==null&&!ei(n);)n=n[Un];return n}var Sy=100;function Ty(n,e=!0,t=0){let i=n[Qn],r=i.rendererFactory,s=!1;s||r.begin?.();try{_S(n,t)}catch(o){throw e&&xy(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function _S(n,e){Sd(n,e);let t=0;for(;nh(n);){if(t===Sy)throw new Ee(103,!1);t++,Sd(n,1)}}function xS(n,e,t,i){let r=e[we];if((r&256)===256)return;let s=!1;!s&&e[Qn].inlineEffectRunner?.flush(),rh(e);let o=null,a=null;!s&&MS(n)&&(a=mS(e),o=fm(a));try{ov(e),ub(n.bindingStartIndex),t!==null&&uy(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&tc(e,d,null)}else{let d=n.preOrderHooks;d!==null&&nc(e,d,0,null),Gu(e,0)}if(wS(e),Cy(e,0),n.contentQueries!==null&&vy(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&tc(e,d)}else{let d=n.contentHooks;d!==null&&nc(e,d,1),Gu(e,1)}NE(n,e);let l=n.components;l!==null&&Dy(e,l,0);let u=n.viewQuery;if(u!==null&&Ed(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&tc(e,d)}else{let d=n.viewHooks;d!==null&&nc(e,d,2),Gu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Hu]){for(let d of e[Hu])d();e[Hu]=null}s||(e[we]&=-73)}catch(c){throw wo(e),c}finally{a!==null&&(pm(a,o),vS(a)),sh()}}function MS(n){return n.type!==2}function Cy(n,e){for(let t=wy(n);t!==null;t=by(t))for(let i=tn;i<t.length;i++){let r=t[i];Ay(r,e)}}function wS(n){for(let e=wy(n);e!==null;e=by(e)){if(!(e[we]&eh.HasTransplantedViews))continue;let t=e[ps];for(let i=0;i<t.length;i++){let r=t[i],s=r[Lt];eb(r)}}}function bS(n,e,t){let i=br(e,n);Ay(i,t)}function Ay(n,e){th(n)&&Sd(n,e)}function Sd(n,e){let i=n[Be],r=n[we],s=n[yr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Mu(s)),s&&(s.dirty=!1),n[we]&=-9217,o)xS(i,n,i.template,n[hi]);else if(r&8192){Cy(n,1);let a=i.components;a!==null&&Dy(n,a,1)}}function Dy(n,e,t){for(let i=0;i<e.length;i++)bS(n,e[i],t)}function bh(n){for(n[Qn].changeDetectionScheduler?.notify();n;){n[we]|=64;let e=bo(n);if(Qg(n)&&!e)return n;n=e}return null}var xr=class{get rootNodes(){let e=this._lView,t=e[Be];return gc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[hi]}set context(e){this._lView[hi]=e}get destroyed(){return(this._lView[we]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Lt];if(ei(e)){let t=e[uc],i=t?t.indexOf(this):-1;i>-1&&(Md(e,i),cc(t,i))}this._attachedToViewContainer=!1}ey(this._lView[Be],this._lView)}onDestroy(e){av(this._lView,e)}markForCheck(){bh(this._cdRefInjectingView||this._lView)}detach(){this._lView[we]&=-129}reattach(){ud(this._lView),this._lView[we]|=128}detectChanges(){this._lView[we]|=1024,Ty(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ee(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,Kv(this._lView[Be],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ee(902,!1);this._appRef=e,ud(this._lView)}},So=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=TS;let n=e;return n})(),ES=So,SS=class extends ES{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=hS(this._declarationLView,this._declarationTContainer,e,{injector:t,dehydratedView:i});return new xr(r)}};function TS(){return Eh(ni(),wt())}function Eh(n,e){return n.type&4?new SS(e,n,ys(n,e)):null}function Iy(n){let e=n[Mo]??[],i=n[Lt][yt];for(let r of e)CS(r,i);n[Mo]=Qt}function CS(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[pc];for(;t<r;){let s=i.nextSibling;vh(e,i,!1),i=s,t++}}}function Ry(n){Iy(n);for(let e=tn;e<n.length;e++)vc(n[e])}function AS(n){let e=n[kn]?.i18nNodes;if(e){let t=n[yt];for(let i of e.values())vh(t,i,!1);n[kn].i18nNodes=void 0}}function vc(n){AS(n);let e=n[Be];for(let t=En;t<e.bindingStartIndex;t++)if(ei(n[t])){let i=n[t];Ry(i)}else Oi(n[t])&&vc(n[t])}function DS(n){let e=n._views;for(let t of e){let i=Jb(t);if(i!==null&&i[un]!==null)if(Oi(i))vc(i);else{let r=i[un];vc(r),Ry(i)}}}var IS=new RegExp(`^(\\d+)*(${zv}|${Vv})*(.*)`);function RS(n){let e=n.match(IS),[t,i,r,s]=e,o=i?parseInt(i,10):r,a=[];for(let[c,l,u]of s.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[o,...a]}function PS(n){return!n.prev&&n.parent?.type===8}function Yu(n){return n.index-En}function NS(n,e){let t=n.i18nNodes;if(t){let i=t.get(e);return i&&t.delete(e),i}return null}function zc(n,e,t,i){let r=Yu(i),s=NS(n,r);if(!s){let o=n.data[jb];if(o?.[r])s=OS(o[r],t);else if(e.firstChild===i)s=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(PS(i)){let l=Yu(i.parent);s=_d(n,l)}else{let l=Sn(c,t);if(a)s=l.firstChild;else{let u=Yu(c),d=_d(n,u);if(c.type===2&&d){let m=hh(n,u)+1;s=Hc(m,d)}else s=l.nextSibling}}}}return s}function Hc(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function LS(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let o=0;o<s;o++)switch(r){case yd.FirstChild:t=t.firstChild;break;case yd.NextSibling:t=t.nextSibling;break}}return t}function OS(n,e){let[t,...i]=RS(n),r;if(t===Vv)r=e[bn][un];else if(t===zv)r=hE(e[bn][un]);else{let s=Number(t);r=Bn(e[s+En])}return LS(r,i)}function FS(n,e){let t=[];for(let i of e)for(let r=0;r<(i[Hv]??1);r++){let s={data:i,firstChild:null};i[pc]>0&&(s.firstChild=n,n=Hc(i[pc],n)),t.push(s)}return[n,t]}var Py=()=>null;function US(n,e){let t=n[Mo];return!e||t===null||t.length===0?null:t[0].data[Wb]===e?t.shift():(Iy(n),null)}function kS(){Py=US}function pg(n,e){return Py(n,e)}var Td=class{},Cd=class{},yc=class{};function BS(n){let e=Error(`No component factory found for ${en(n)}.`);return e[VS]=n,e}var VS="ngComponent";var Ad=class{resolveComponentFactory(e){throw BS(e)}},Gc=(()=>{let e=class e{};e.NULL=new Ad;let n=e;return n})(),To=class{};var zS=(()=>{let e=class e{};e.\u0275prov=Re({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),Zu={};var mg=new Set;function Uo(n){mg.has(n)||(mg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function gg(...n){}function HS(){let n=typeof pr.requestAnimationFrame=="function",e=pr[n?"requestAnimationFrame":"setTimeout"],t=pr[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var vt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Mn(!1),this.onMicrotaskEmpty=new Mn(!1),this.onStable=new Mn(!1),this.onError=new Mn(!1),typeof Zone>"u")throw new Ee(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=HS().nativeRequestAnimationFrame,jS(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ee(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ee(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,GS,gg,gg);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},GS={};function Sh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function WS(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(pr,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Dd(n),n.isCheckStableRunning=!0,Sh(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Dd(n))}function jS(n){let e=()=>{WS(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if($S(a))return t.invokeTask(r,s,o,a);try{return vg(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),yg(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return vg(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),yg(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Dd(n),Sh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Dd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function vg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function yg(n){n._nesting--,Sh(n)}function $S(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var Ny=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Re({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Id(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=td(r,a);else if(s==2){let c=a,l=e[++o];i=td(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var _c=class extends Gc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=vr(e);return new Co(t,this.ngModule)}};function _g(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function qS(n){let e=n.toLowerCase();return e==="svg"?Xw:e==="math"?Yw:null}var Rd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Cc(i);let r=this.injector.get(e,Zu,i);return r!==Zu||t===Zu?r:this.parentInjector.get(e,t,i)}},Co=class extends yc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=_g(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return _g(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Cw(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=st(null);try{r=r||this.ngModule;let o=r instanceof wn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Rd(e,o):e,c=a.get(To,null);if(c===null)throw new Ee(407,!1);let l=a.get(zS,null),u=a.get(Ny,null),d=a.get(Td,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},m=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",y=i?kE(m,i,this.componentDef.encapsulation,a):kc(m,g,qS(g)),p=512;this.componentDef.signals?p|=4096:this.componentDef.onPush||(p|=16);let f=null;y!==null&&(f=dh(y,a,!0));let S=fy(0,null,null,1,0,null,null,null,null,null,null),M=Vc(null,S,null,p,null,null,h,m,a,null,f);rh(M);let b,I;try{let C=this.componentDef,T,B=null;C.findHostDirectiveDefs?(T=[],B=new Map,C.findHostDirectiveDefs(C,T,B),T.push(C)):T=[C];let K=XS(M,y),_=YS(K,y,C,T,M,h,m);I=sv(S,En),y&&KS(m,C,y,i),t!==void 0&&QS(I,this.ngContentSelectors,t),b=JS(_,C,T,B,M,[eT]),wh(S,M,null)}finally{sh()}return new Pd(this.componentType,b,ys(I,M),M,I)}finally{st(s)}}},Pd=class extends Cd{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new xr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Mh(s[Be],s,r,e,t),this.previousInputValues.set(e,t);let o=br(this._tNode.index,s);bh(o)}}get injector(){return new mr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function XS(n,e){let t=n[Be],i=En;return n[i]=e,_h(t,i,2,"#host",null)}function YS(n,e,t,i,r,s,o){let a=r[Be];ZS(i,n,e,o);let c=null;e!==null&&(c=dh(e,r[fs]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Vc(r,hy(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&bd(a,n,i.length-1),xh(r,d),r[n.index]=d}function ZS(n,e,t,i){for(let r of n)e.mergedAttrs=Yd(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Id(e,e.mergedAttrs,!0),t!==null&&oy(i,t,e))}function JS(n,e,t,i,r,s){let o=ni(),a=r[Be],c=Sn(o,r);my(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=ms(r,a,d,o);gs(h,r)}gy(a,r,o),c&&gs(c,r);let l=ms(r,a,o.directiveStart+o.componentOffset,o);if(n[hi]=r[hi]=l,s!==null)for(let u of s)u(l,e);return dy(a,o,r),l}function KS(n,e,t,i){if(i)rd(n,t,["ng-version","17.3.0"]);else{let{attrs:r,classes:s}=Aw(e.selectors[0]);r&&rd(n,t,r),s&&s.length>0&&sy(n,t,s.join(" "))}}function QS(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function eT(){let n=ni();wv(wt()[Be],n)}var _s=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=tT;let n=e;return n})();function tT(){let n=ni();return Oy(n,wt())}var nT=_s,Ly=class extends nT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ys(this._hostTNode,this._hostLView)}get injector(){return new mr(this._hostTNode,this._hostLView)}get parentInjector(){let e=oh(this._hostTNode,this._hostLView);if(Ev(e)){let t=hc(e,this._hostLView),i=dc(e),r=t[Be].data[i+8];return new mr(r,t)}else return new mr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=xg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-tn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=pg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,fg(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Ww(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Co(vr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(wn,null);y&&(s=y)}let u=vr(c.componentType??{}),d=pg(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,fg(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Qw(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Lt],l=new Ly(c,c[Vn],c[Lt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return fS(o,r,s,i),e.attachToViewContainerRef(),Og(Ju(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=xg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Md(this._lContainer,t);i&&(cc(Ju(this._lContainer),t),ey(i[Be],i))}detach(e){let t=this._adjustIndex(e,-1),i=Md(this._lContainer,t);return i&&cc(Ju(this._lContainer),t)!=null?new xr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function xg(n){return n[uc]}function Ju(n){return n[uc]||(n[uc]=[])}function Oy(n,e){let t,i=e[n.index];return ei(i)?t=i:(t=aS(i,e,null,n),e[n.index]=t,xh(e,t)),Fy(t,e,n,i),new Ly(t,n,e)}function iT(n,e){let t=n[yt],i=t.createComment(""),r=Sn(e,n),s=gh(t,r);return mc(t,s,i,SE(t,r),!1),i}var Fy=ky,Uy=()=>!1;function ky(n,e,t,i){if(n[pi])return;let r;t.type&8?r=Bn(i):r=iT(e,t),n[pi]=r}function rT(n,e,t){if(n[pi]&&n[Mo])return!0;let i=t[kn],r=e.index-En;if(!i||kb(e)||Fc(i,r))return!1;let o=_d(i,r),a=i.data[uh]?.[r],[c,l]=FS(o,a);return n[pi]=c,n[Mo]=l,!0}function sT(n,e,t,i){Uy(n,t,e)||ky(n,e,t,i)}function oT(){Fy=sT,Uy=rT}var Nd=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Ld=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Th(e,t).matches!==null&&this.queries[t].setDirty()}},Od=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=pT(e):this.predicate=e}},Fd=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Ud=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,aT(t,s)),this.matchTNodeWithReadOption(e,t,ic(t,e,s,!1,!1))}else i===So?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ic(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Tr||r===_s||r===So&&t.type&4)this.addMatch(t.index,-2);else{let s=ic(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function aT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function cT(n,e){return n.type&11?ys(n,e):n.type&4?Eh(n,e):null}function lT(n,e,t,i){return t===-1?cT(e,n):t===-2?uT(n,e,i):ms(n,n[Be],t,e)}function uT(n,e,t){if(t===Tr)return ys(e,n);if(t===So)return Eh(e,n);if(t===_s)return Oy(e,n)}function By(n,e,t,i){let r=e[fi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(lT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function kd(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=By(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=tn;d<u.length;d++){let h=u[d];h[Po]===h[Lt]&&kd(h[Be],h,l,i)}if(u[ps]!==null){let d=u[ps];for(let h=0;h<d.length;h++){let m=d[h];kd(m[Be],m,l,i)}}}}}return i}function dT(n,e){return n[fi].queries[e].queryList}function hT(n,e,t){let i=new gd((t&4)===4);return HE(n,e,i,i.destroy),(e[fi]??=new Ld).queries.push(new Nd(i))-1}function fT(n,e,t){let i=ti();return i.firstCreatePass&&(mT(i,new Od(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),hT(i,wt(),e)}function pT(n){return n.split(",").map(e=>e.trim())}function mT(n,e,t){n.queries===null&&(n.queries=new Fd),n.queries.track(new Ud(e,t))}function Th(n,e){return n.queries.getByIndex(e)}function gT(n,e){let t=n[Be],i=Th(t,e);return i.crossesNgTemplate?kd(t,n,e,[]):By(t,n,i,e)}var Ui=class{},Ao=class{};var Bd=class extends Ui{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new _c(this);let r=Gg(e);this._bootstrapComponents=Jv(r.bootstrap),this._r3Injector=Lv(e,t,[{provide:Ui,useValue:this},{provide:Gc,useValue:this.componentFactoryResolver},...i],en(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Vd=class extends Ao{constructor(e){super(),this.moduleType=e}create(e){return new Bd(this.moduleType,e,[])}};var xc=class extends Ui{constructor(e){super(),this.componentFactoryResolver=new _c(this),this.instance=null;let t=new yo([...e.providers,{provide:Ui,useValue:this},{provide:Gc,useValue:this.componentFactoryResolver}],e.parent||Qd(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Ch(n,e,t=null){return new xc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var ko=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Bt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Wc(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Bo(n){return(n.flags&32)===32}var vT=Vy;function Vy(n,e,t,i){return ii(!0),e[yt].createComment("")}function yT(n,e,t,i){let r=e[kn],s=!r||Oo()||Bo(t)||Fc(r,i);if(ii(s),s)return Vy(n,e,t,i);let o=r.data[Gb]?.[i]??null;o!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=o);let a=zc(r,n,e,t);Oc(r,i,a);let c=hh(r,i);return Hc(c,a)}function _T(){vT=yT}function xT(n,e,t,i){return Wc(n,dv(),t)?e+Pg(t)+i:Vi}function Ka(n,e){return n<<17|e<<2}function Mr(n){return n>>17&32767}function MT(n){return(n&2)==2}function wT(n,e){return n&131071|e<<17}function zd(n){return n|2}function vs(n){return(n&131068)>>2}function Ku(n,e){return n&-131069|e<<2}function bT(n){return(n&1)===1}function Hd(n){return n|1}function ET(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Mr(o),c=vs(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Io(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=Mr(n[a+1]);n[i+1]=Ka(h,a),h!==0&&(n[h+1]=Ku(n[h+1],i)),n[a+1]=wT(n[a+1],i)}else n[i+1]=Ka(a,0),a!==0&&(n[a+1]=Ku(n[a+1],i)),a=i;else n[i+1]=Ka(c,0),a===0?a=i:n[c+1]=Ku(n[c+1],i),c=i;l&&(n[i+1]=zd(n[i+1])),Mg(n,u,i,!0),Mg(n,u,i,!1),ST(e,u,n,i,s),o=Ka(a,c),s?e.classBindings=o:e.styleBindings=o}function ST(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Io(s,e)>=0&&(t[i+1]=Hd(t[i+1]))}function Mg(n,e,t,i){let r=n[t+1],s=e===null,o=i?Mr(r):vs(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];TT(c,e)&&(a=!0,n[o+1]=i?Hd(l):zd(l)),o=i?Mr(l):vs(l)}a&&(n[t+1]=i?zd(r):Hd(r))}function TT(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Io(n,e)>=0:!1}var Fn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function CT(n){return n.substring(Fn.key,Fn.keyEnd)}function AT(n){return DT(n),zy(n,Hy(n,0,Fn.textEnd))}function zy(n,e){let t=Fn.textEnd;return t===e?-1:(e=Fn.keyEnd=IT(n,Fn.key=e,t),Hy(n,e,t))}function DT(n){Fn.key=0,Fn.keyEnd=0,Fn.value=0,Fn.valueEnd=0,Fn.textEnd=n.length}function Hy(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function IT(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function Vo(n,e,t){let i=wt(),r=dv();if(Wc(i,r,e)){let s=ti(),o=gb();$E(s,o,i,n,e,i[yt],t,!1)}return Vo}function Gd(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Mh(n,t,s[o],o,i)}function jc(n,e,t){return PT(n,e,t,!1),jc}function Gy(n){NT(BT,RT,n,!0)}function RT(n,e){for(let t=AT(e);t>=0;t=zy(e,t))Xd(n,CT(e),!0)}function PT(n,e,t,i){let r=wt(),s=ti(),o=hv(2);if(s.firstUpdatePass&&jy(s,n,o,i),e!==Vi&&Wc(r,o,e)){let a=s.data[Er()];$y(s,a,r,r[yt],n,r[o+1]=zT(e,t),i,o)}}function NT(n,e,t,i){let r=ti(),s=hv(2);r.firstUpdatePass&&jy(r,null,s,i);let o=wt();if(t!==Vi&&Wc(o,s,t)){let a=r.data[Er()];if(qy(a,i)&&!Wy(r,s)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=td(c,t||"")),Gd(r,a,o,t,i)}else VT(r,a,o,o[yt],o[s+1],o[s+1]=kT(n,e,t),i,s)}}function Wy(n,e){return e>=n.expandoStartIndex}function jy(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Er()],o=Wy(n,t);qy(s,i)&&e===null&&!o&&(e=!1),e=LT(r,s,e,i),ET(r,s,e,t,o,i)}}function LT(n,e,t,i){let r=pb(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Qu(null,n,e,t,i),t=Do(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Qu(r,n,e,t,i),s===null){let c=OT(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Qu(null,n,e,c[1],i),c=Do(c,e.attrs,i),FT(n,e,i,c))}else s=UT(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function OT(n,e,t){let i=t?e.classBindings:e.styleBindings;if(vs(i)!==0)return n[Mr(i)]}function FT(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Mr(r)]=i}function UT(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Do(i,o,t)}return Do(i,e.attrs,t)}function Qu(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Do(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Do(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),Xd(n,o,t?!0:e[++s]))}return n===void 0?null:n}function kT(n,e,t){if(t==null||t==="")return Qt;let i=[],r=Uc(t);if(Array.isArray(r))for(let s=0;s<r.length;s++)n(i,r[s],!0);else if(typeof r=="object")for(let s in r)r.hasOwnProperty(s)&&n(i,s,r[s]);else typeof r=="string"&&e(i,r);return i}function BT(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&Xd(n,i,t)}function VT(n,e,t,i,r,s,o,a){r===Vi&&(r=Qt);let c=0,l=0,u=0<r.length?r[0]:null,d=0<s.length?s[0]:null;for(;u!==null||d!==null;){let h=c<r.length?r[c+1]:void 0,m=l<s.length?s[l+1]:void 0,g=null,y;u===d?(c+=2,l+=2,h!==m&&(g=d,y=m)):d===null||u!==null&&u<d?(c+=2,g=u):(l+=2,g=d,y=m),g!==null&&$y(n,e,t,i,g,y,o,a),u=c<r.length?r[c]:null,d=l<s.length?s[l]:null}}function $y(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=bT(l)?wg(c,e,t,r,vs(l),o):void 0;if(!Mc(u)){Mc(s)||MT(l)&&(s=wg(c,null,t,r,a,o));let d=rv(Er(),t);RE(i,o,d,r,s)}}function wg(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===Vi&&(h=d?Qt:void 0);let m=d?Vu(h,i):u===i?h:void 0;if(l&&!Mc(m)&&(m=Vu(c,i)),Mc(m)&&(a=m,o))return a;let g=n[r+1];r=o?Mr(g):vs(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Vu(c,i))}return a}function Mc(n){return n!==void 0}function zT(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=en(Uc(n)))),n}function qy(n,e){return(n.flags&(e?8:16))!==0}function HT(n,e,t,i,r,s){let o=e.consts,a=ng(o,r),c=_h(e,n,2,i,a);return XE(e,t,c,ng(o,s)),c.attrs!==null&&Id(c,c.attrs,!1),c.mergedAttrs!==null&&Id(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Tn(n,e,t,i){let r=wt(),s=ti(),o=En+n,a=r[yt],c=s.firstCreatePass?HT(o,s,r,e,t,i):s.data[o],l=Xy(s,r,c,a,e,n);r[o]=l;let u=Kg(c);return Pc(c,!0),oy(a,l,c),!Bo(c)&&Mv()&&ny(s,r,l,c),nb()===0&&gs(l,r),ib(),u&&(OE(s,r,c),dy(s,c,r)),i!==null&&FE(r,c),Tn}function vi(){let n=ni();uv()?lb():(n=n.parent,Pc(n,!1));let e=n;sb(e)&&ab(),rb();let t=ti();return t.firstCreatePass&&(wv(t,n),Jg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&xb(e)&&Gd(t,e,wt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Mb(e)&&Gd(t,e,wt(),e.stylesWithoutHost,!1),vi}function Cn(n,e,t,i){return Tn(n,e,t,i),vi(),Cn}var Xy=(n,e,t,i,r,s)=>(ii(!0),kc(i,r,_v()));function GT(n,e,t,i,r,s){let o=e[kn],a=!o||Oo()||Bo(t)||Fc(o,s);if(ii(a),a)return kc(i,r,_v());let c=zc(o,n,e,t);return jv(o,s)&&Oc(o,s,c.nextSibling),o&&(Uv(t)||kv(c))&&No(t)&&(ob(t),ry(c)),c}function WT(){Xy=GT}var jT=(n,e,t,i)=>(ii(!0),mh(e[yt],""));function $T(n,e,t,i){let r,s=e[kn],o=!s||Oo()||Bo(t);if(ii(o),o)return mh(e[yt],"");let a=zc(s,n,e,t),c=eE(s,i);return Oc(s,i,a),r=Hc(c,a),r}function qT(){jT=$T}var wc="en-US";var XT=wc;function YT(n){typeof n=="string"&&(XT=n.toLowerCase().replace(/_/g,"-"))}function Yy(n,e,t){let i=n[yt];switch(t){case Node.COMMENT_NODE:return mh(i,e);case Node.TEXT_NODE:return ph(i,e);case Node.ELEMENT_NODE:return kc(i,e,null)}}var ZT=(n,e,t,i)=>(ii(!0),Yy(n,t,i));function JT(n,e,t,i){return ii(!0),Yy(n,t,i)}function KT(){ZT=JT}function Hi(n,e,t,i){let r=wt(),s=ti(),o=ni();return eC(s,r,r[yt],o,n,e,i),Hi}function QT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[_o],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function eC(n,e,t,i,r,s,o){let a=Kg(i),l=n.firstCreatePass&&_y(n),u=e[hi],d=yy(e),h=!0;if(i.type&3||o){let y=Sn(i,e),p=o?o(y):y,f=d.length,S=o?b=>o(Bn(b[i.index])):i.index,M=null;if(!o&&a&&(M=QT(n,e,r,i.index)),M!==null){let b=M.__ngLastListenerFn__||M;b.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=Eg(i,e,u,s,!1);let b=t.listen(p,r,s);d.push(s,b),l&&l.push(r,S,f,f+1)}}else s=Eg(i,e,u,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let y=g.length;if(y)for(let p=0;p<y;p+=2){let f=g[p],S=g[p+1],I=e[f][S].subscribe(s),C=d.length;d.push(s,I),l&&l.push(r,i.index,C,-(C+1))}}}function bg(n,e,t,i){let r=st(null);try{return Zn(6,e,t),t(i)!==!1}catch(s){return xy(n,s),!1}finally{Zn(7,e,t),st(r)}}function Eg(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?br(n.index,e):e;bh(a);let c=bg(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=bg(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function Zy(n,e,t){fT(n,e,t)}function Ah(n){let e=wt(),t=ti(),i=fv();ih(i+1);let r=Th(t,i);if(n.dirty&&Kw(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=gT(e,i);n.reset(s,Lb),n.notifyOnChanges()}return!0}return!1}function Dh(){return dT(wt(),fv())}function $c(n,e=""){let t=wt(),i=ti(),r=n+En,s=i.firstCreatePass?_h(i,r,1,e,null):i.data[r],o=Jy(i,t,s,e,n);t[r]=o,Mv()&&ny(i,t,o,s),Pc(s,!1)}var Jy=(n,e,t,i,r)=>(ii(!0),ph(e[yt],i));function tC(n,e,t,i,r){let s=e[kn],o=!s||Oo()||Bo(t)||Fc(s,r);return ii(o),o?ph(e[yt],i):zc(s,n,e,t)}function nC(){Jy=tC}function Ih(n,e,t){let i=wt(),r=xT(i,n,e,t);return r!==Vi&&cS(i,Er(),r),Ih}var iC=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=$g(!1,i.type),s=r.length>0?Ch([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Re({token:e,providedIn:"environment",factory:()=>new e(tt(wn))});let n=e;return n})();function Gi(n){Uo("NgStandalone"),n.getStandaloneInjector=e=>e.get(iC).getOrCreateStandaloneInjector(n)}var qc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var Ky=new We("");function zo(n){return!!n&&typeof n.then=="function"}function Qy(n){return!!n&&typeof n.subscribe=="function"}var e0=new We(""),t0=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=se(e0,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(zo(o))i.push(o);else if(Qy(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),xs=new We("");function rC(){gm(()=>{throw new Ee(600,!1)})}function sC(n){return n.isBoundToModule}function oC(n,e,t){try{let i=t();return zo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Wi=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=se(Ov),this.afterRenderEffectManager=se(Ny),this.externalTestViews=new Set,this.beforeRender=new $t,this.afterTick=new $t,this.componentTypes=[],this.components=[],this.isStable=se(ko).hasPendingTasks.pipe(Ze(i=>!i)),this._injector=se(wn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof yc;if(!this._injector.get(t0).done){let m=!s&&Hg(i),g=!1;throw new Ee(405,g)}let a;s?a=i:a=this._injector.get(Gc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=sC(a)?void 0:this._injector.get(Ui),l=r||a.selector,u=a.create(Sr.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(Ky,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),ed(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new Ee(101,!1);let r=st(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,st(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===Sy)throw new Ee(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)aC(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Wd(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Wd(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;ed(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(xs,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>ed(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Ee(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function ed(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Qa;function Rh(n){Qa??=new WeakMap;let e=Qa.get(n);if(e)return e;let t=n.isStable.pipe(Ln(i=>i)).toPromise().then(()=>{});return Qa.set(n,t),n.onDestroy(()=>Qa?.delete(n)),t}function aC(n,e,t){!e&&!Wd(n)||cC(n,t,e)}function Wd(n){return nh(n)}function cC(n,e,t){let i;t?(i=0,n[we]|=1024):n[we]&64?i=0:i=1,Ty(n,e,i)}var jd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Ph=(()=>{let e=class e{compileModuleSync(i){return new Vd(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=Gg(i),o=Jv(s.declarations).reduce((a,c)=>{let l=vr(c);return l&&a.push(new Co(l)),a},[]);return new jd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var lC=(()=>{let e=class e{constructor(){this.zone=se(vt),this.applicationRef=se(Wi)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function uC(n){return[{provide:vt,useFactory:n},{provide:gr,multi:!0,useFactory:()=>{let e=se(lC,{optional:!0});return()=>e.initialize()}},{provide:gr,multi:!0,useFactory:()=>{let e=se(pC);return()=>{e.initialize()}}},{provide:Ov,useFactory:dC}]}function dC(){let n=se(vt),e=se(mi);return t=>n.runOutsideAngular(()=>e.handleError(t))}function hC(n){let e=uC(()=>new vt(fC(n)));return wr([[],e])}function fC(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var pC=(()=>{let e=class e{constructor(){this.subscription=new Ct,this.initialized=!1,this.zone=se(vt),this.pendingTasks=se(ko)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{vt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{vt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function mC(){return typeof $localize<"u"&&$localize.locale||wc}var Nh=new We("",{providedIn:"root",factory:()=>se(Nh,$e.Optional|$e.SkipSelf)||mC()});var n0=new We("");var sc=null;function gC(n=[],e){return Sr.create({name:e,providers:[{provide:Dc,useValue:"platform"},{provide:n0,useValue:new Set([()=>sc=null])},...n]})}function vC(n=[]){if(sc)return sc;let e=gC(n);return sc=e,rC(),yC(e),e}function yC(n){n.get(ch,null)?.forEach(t=>t())}var Ho=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=_C;let n=e;return n})();function _C(n){return xC(ni(),wt(),(n&16)===16)}function xC(n,e,t){if(No(n)&&!t){let i=br(n.index,e);return new xr(i,i)}else if(n.type&47){let i=e[bn];return new xr(i,e)}return null}function i0(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=vC(i),s=[hC(),...t||[]],a=new xc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(vt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(mi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(n0);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),oC(l,c,()=>{let m=a.get(t0);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(Nh,wc);YT(g||wc);let y=a.get(Wi);return e!==void 0&&y.bootstrap(e),y})})})}catch(e){return Promise.reject(e)}}var Sg=!1,MC=!1;function wC(){Sg||(Sg=!0,Zb(),WT(),nC(),qT(),_T(),oT(),kS(),zE(),KT())}function bC(n,e){return Rh(n)}function r0(){return wr([{provide:Ya,useFactory:()=>{let n=!0;return Ja()&&(n=!!se(Cr,{optional:!0})?.get(Gv,null)),n&&Uo("NgHydration"),n}},{provide:gr,useValue:()=>{MC=!!se(tE,{optional:!0}),Ja()&&se(Ya)&&(EC(),wC())},multi:!0},{provide:qv,useFactory:()=>Ja()&&se(Ya)},{provide:xs,useFactory:()=>{if(Ja()&&se(Ya)){let n=se(Wi),e=se(Sr);return()=>{bC(n,e).then(()=>{vt.assertInAngularZone(),DS(n)})}}return()=>{}},multi:!0}])}function EC(){let n=Nc(),e;for(let t of n.body.childNodes)if(t.nodeType===Node.COMMENT_NODE&&t.textContent?.trim()===Xb){e=t;break}if(!e)throw new Ee(-507,!1)}var l0=null;function ws(){return l0}function u0(n){l0??=n}var Xc=class{};var An=new We(""),d0=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(AC),providedIn:"platform"});let n=e;return n})();var AC=(()=>{let e=class e extends d0{constructor(){super(),this._doc=se(An),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ws().getBaseHref(this._doc)}onPopState(i){let r=ws().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=ws().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function h0(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function s0(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Ar(n){return n&&n[0]!=="?"?"?"+n:n}var Zc=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(f0),providedIn:"root"});let n=e;return n})(),DC=new We(""),f0=(()=>{let e=class e extends Zc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??se(An).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return h0(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Ar(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Ar(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Ar(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(tt(d0),tt(DC,8))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Go=(()=>{let e=class e{constructor(i){this._subject=new Mn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=PC(s0(o0(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Ar(r))}normalize(i){return e.stripTrailingSlash(RC(this._basePath,o0(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Ar(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Ar(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Ar,e.joinWithSlash=h0,e.stripTrailingSlash=s0,e.\u0275fac=function(r){return new(r||e)(tt(Zc))},e.\u0275prov=Re({token:e,factory:()=>IC(),providedIn:"root"});let n=e;return n})();function IC(){return new Go(tt(Zc))}function RC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function o0(n){return n.replace(/\/index.html$/,"")}function PC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function p0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Lh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Ac({type:e}),e.\u0275inj=Sc({});let n=e;return n})(),Oh="browser",NC="server";function m0(n){return n===Oh}function Fh(n){return n===NC}var Yc=class{};var Kc=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var w0=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(w0||{}),Uh=class{constructor(e,t=b0.Ok,i="OK"){this.headers=e.headers||new Kc,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var Qc=class n extends Uh{constructor(e={}){super(e),this.type=w0.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var b0=function(n){return n[n.Continue=100]="Continue",n[n.SwitchingProtocols=101]="SwitchingProtocols",n[n.Processing=102]="Processing",n[n.EarlyHints=103]="EarlyHints",n[n.Ok=200]="Ok",n[n.Created=201]="Created",n[n.Accepted=202]="Accepted",n[n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",n[n.NoContent=204]="NoContent",n[n.ResetContent=205]="ResetContent",n[n.PartialContent=206]="PartialContent",n[n.MultiStatus=207]="MultiStatus",n[n.AlreadyReported=208]="AlreadyReported",n[n.ImUsed=226]="ImUsed",n[n.MultipleChoices=300]="MultipleChoices",n[n.MovedPermanently=301]="MovedPermanently",n[n.Found=302]="Found",n[n.SeeOther=303]="SeeOther",n[n.NotModified=304]="NotModified",n[n.UseProxy=305]="UseProxy",n[n.Unused=306]="Unused",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.PaymentRequired=402]="PaymentRequired",n[n.Forbidden=403]="Forbidden",n[n.NotFound=404]="NotFound",n[n.MethodNotAllowed=405]="MethodNotAllowed",n[n.NotAcceptable=406]="NotAcceptable",n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",n[n.RequestTimeout=408]="RequestTimeout",n[n.Conflict=409]="Conflict",n[n.Gone=410]="Gone",n[n.LengthRequired=411]="LengthRequired",n[n.PreconditionFailed=412]="PreconditionFailed",n[n.PayloadTooLarge=413]="PayloadTooLarge",n[n.UriTooLong=414]="UriTooLong",n[n.UnsupportedMediaType=415]="UnsupportedMediaType",n[n.RangeNotSatisfiable=416]="RangeNotSatisfiable",n[n.ExpectationFailed=417]="ExpectationFailed",n[n.ImATeapot=418]="ImATeapot",n[n.MisdirectedRequest=421]="MisdirectedRequest",n[n.UnprocessableEntity=422]="UnprocessableEntity",n[n.Locked=423]="Locked",n[n.FailedDependency=424]="FailedDependency",n[n.TooEarly=425]="TooEarly",n[n.UpgradeRequired=426]="UpgradeRequired",n[n.PreconditionRequired=428]="PreconditionRequired",n[n.TooManyRequests=429]="TooManyRequests",n[n.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",n[n.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",n[n.InternalServerError=500]="InternalServerError",n[n.NotImplemented=501]="NotImplemented",n[n.BadGateway=502]="BadGateway",n[n.ServiceUnavailable=503]="ServiceUnavailable",n[n.GatewayTimeout=504]="GatewayTimeout",n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported",n[n.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",n[n.InsufficientStorage=507]="InsufficientStorage",n[n.LoopDetected=508]="LoopDetected",n[n.NotExtended=510]="NotExtended",n[n.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",n}(b0||{});var OC=new We("");var g0="b",v0="h",y0="s",_0="st",x0="u",M0="rt",Jc=new We(""),FC=["GET","HEAD"];function UC(n,e){let u=se(Jc),{isCacheActive:t}=u,i=lm(u,["isCacheActive"]),{transferCache:r,method:s}=n;if(!t||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!FC.includes(s)||n.headers.has("authorization")||n.headers.has("proxy-authorization")||r===!1||i.filter?.(n)===!1)return e(n);let o=se(Cr),a=BC(n),c=o.get(a,null),l=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(l=r.includeHeaders),c){let{[g0]:d,[M0]:h,[v0]:m,[y0]:g,[_0]:y,[x0]:p}=c,f=d;switch(h){case"arraybuffer":f=new TextEncoder().encode(d).buffer;break;case"blob":f=new Blob([d]);break}let S=new Kc(m);return Te(new Qc({body:f,headers:S,status:g,statusText:y,url:p}))}return e(n).pipe(Dt(d=>{d instanceof Qc&&o.set(a,{[g0]:d.body,[v0]:kC(d.headers,l),[y0]:d.status,[_0]:d.statusText,[x0]:d.url||"",[M0]:n.responseType})}))}function kC(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function BC(n){let{params:e,method:t,responseType:i,url:r,body:s}=n,o=e.keys().sort().map(u=>`${u}=${e.getAll(u)}`).join("&"),c=[t,i,r,typeof s=="string"?s:"",o].join("|"),l=VC(c);return l}function VC(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function E0(n){return[{provide:Jc,useFactory:()=>(Uo("NgHttpTransferCache"),pe({isCacheActive:!0},n))},{provide:OC,useValue:UC,multi:!0,deps:[Cr,Jc]},{provide:xs,multi:!0,useFactory:()=>{let e=se(Wi),t=se(Jc);return()=>{Rh(e).then(()=>{t.isCacheActive=!1})}}}]}var Vh=class extends Xc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},zh=class n extends Vh{static makeCurrent(){u0(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=HC();return t==null?null:GC(t)}resetBaseElement(){Wo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return p0(document.cookie,e)}},Wo=null;function HC(){return Wo=Wo||document.querySelector("base"),Wo?Wo.getAttribute("href"):null}function GC(n){return new URL(n,document.baseURI).pathname}var WC=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Hh=new We(""),A0=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Ee(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(tt(Hh),tt(vt))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),el=class{constructor(e){this._doc=e}},kh="ng-app-id",D0=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Fh(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${kh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(kh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(kh,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(tt(An),tt(Lc),tt(lh,8),tt(zn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Bh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},jh=/%COMP%/g,I0="%COMP%",jC=`_nghost-${I0}`,$C=`_ngcontent-${I0}`,qC=!0,XC=new We("",{providedIn:"root",factory:()=>qC});function YC(n){return $C.replace(jh,n)}function ZC(n){return jC.replace(jh,n)}function R0(n,e){return e.map(t=>t.replace(jh,n))}var S0=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Fh(c),this.defaultRenderer=new jo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Kn.ShadowDom&&(r=Mt(pe({},r),{encapsulation:Kn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof tl?s.applyToHost(i):s instanceof $o&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Kn.Emulated:o=new tl(l,u,r,this.appId,d,a,c,h);break;case Kn.ShadowDom:return new Gh(l,u,i,r,a,c,this.nonce,h);default:o=new $o(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(tt(A0),tt(D0),tt(Lc),tt(XC),tt(An),tt(zn),tt(vt),tt(lh))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),jo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Bh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(T0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(T0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ee(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Bh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Bh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(gi.DashCase|gi.Important)?e.style.setProperty(t,i,r&gi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&gi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=ws().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function T0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Gh=class extends jo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=R0(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},$o=class extends jo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?R0(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},tl=class extends $o{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=YC(l),this.hostAttr=ZC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},JC=(()=>{let e=class e extends el{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(tt(An))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),C0=["alt","control","meta","shift"],KC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},QC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},eA=(()=>{let e=class e extends el{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ws().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),C0.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=KC[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),C0.forEach(a=>{if(a!==s){let c=QC[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(tt(An))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})();function P0(n,e){return i0(pe({rootComponent:n},tA(e)))}function tA(n){return{appProviders:[...oA,...n?.providers??[]],platformProviders:sA}}function nA(){zh.makeCurrent()}function iA(){return new mi}function rA(){return Bv(document),document}var sA=[{provide:zn,useValue:Oh},{provide:ch,useValue:nA,multi:!0},{provide:An,useFactory:rA,deps:[]}];var oA=[{provide:Dc,useValue:"root"},{provide:mi,useFactory:iA,deps:[]},{provide:Hh,useClass:JC,multi:!0,deps:[An,vt,zn]},{provide:Hh,useClass:eA,multi:!0,deps:[An]},S0,D0,A0,{provide:To,useExisting:S0},{provide:Yc,useClass:WC,deps:[]},[]];var N0=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(tt(An))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Wh=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(Wh||{});function L0(...n){let e=[],t=new Set,i=t.has(Wh.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of n)t.add(s),r.length&&e.push(r);return wr([[],r0(),t.has(Wh.NoHttpTransferCache)||i?[]:E0({}),e])}var Le="primary",aa=Symbol("RouteTitle"),Zh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Cs(n){return new Zh(n)}function cA(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function lA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ri(n[t],e[t]))return!1;return!0}function ri(n,e){let t=n?Jh(n):void 0,i=e?Jh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!V0(n[r],e[r]))return!1;return!0}function Jh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function V0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function z0(n){return n.length>0?n[n.length-1]:null}function qi(n){return Nu(n)?n:zo(n)?St(Promise.resolve(n)):Te(n)}var uA={exact:G0,subset:W0},H0={exact:dA,subset:hA,ignored:()=>!0};function O0(n,e,t){return uA[t.paths](n.root,e.root,t.matrixParams)&&H0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function dA(n,e){return ri(n,e)}function G0(n,e,t){if(!Ir(n.segments,e.segments)||!rl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!G0(n.children[i],e.children[i],t))return!1;return!0}function hA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>V0(n[t],e[t]))}function W0(n,e,t){return j0(n,e,e.segments,t)}function j0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ir(r,t)||e.hasChildren()||!rl(r,t,i))}else if(n.segments.length===t.length){if(!Ir(n.segments,t)||!rl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!W0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Ir(n.segments,r)||!rl(n.segments,r,i)||!n.children[Le]?!1:j0(n.children[Le],e,s,i)}}function rl(n,e,t){return e.every((i,r)=>H0[t](n[r].parameters,i.parameters))}var ji=class{constructor(e=new ot([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Cs(this.queryParams),this._queryParamMap}toString(){return mA.serialize(this)}},ot=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return sl(this)}},Dr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Cs(this.parameters),this._parameterMap}toString(){return q0(this)}};function fA(n,e){return Ir(n,e)&&n.every((t,i)=>ri(t.parameters,e[i].parameters))}function Ir(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function pA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Le&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Le&&(t=t.concat(e(r,i)))}),t}var Ef=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>new al,providedIn:"root"});let n=e;return n})(),al=class{parse(e){let t=new Qh(e);return new ji(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${qo(e.root,!0)}`,i=yA(e.queryParams),r=typeof e.fragment=="string"?`#${gA(e.fragment)}`:"";return`${t}${i}${r}`}},mA=new al;function sl(n){return n.segments.map(e=>q0(e)).join("/")}function qo(n,e){if(!n.hasChildren())return sl(n);if(e){let t=n.children[Le]?qo(n.children[Le],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Le&&i.push(`${r}:${qo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=pA(n,(i,r)=>r===Le?[qo(n.children[Le],!1)]:[`${r}:${qo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Le]!=null?`${sl(n)}/${t[0]}`:`${sl(n)}/(${t.join("//")})`}}function $0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function nl(n){return $0(n).replace(/%3B/gi,";")}function gA(n){return encodeURI(n)}function Kh(n){return $0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ol(n){return decodeURIComponent(n)}function F0(n){return ol(n.replace(/\+/g,"%20"))}function q0(n){return`${Kh(n.path)}${vA(n.parameters)}`}function vA(n){return Object.entries(n).map(([e,t])=>`;${Kh(e)}=${Kh(t)}`).join("")}function yA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${nl(t)}=${nl(r)}`).join("&"):`${nl(t)}=${nl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var _A=/^[^\/()?;#]+/;function $h(n){let e=n.match(_A);return e?e[0]:""}var xA=/^[^\/()?;=#]+/;function MA(n){let e=n.match(xA);return e?e[0]:""}var wA=/^[^=?&#]+/;function bA(n){let e=n.match(wA);return e?e[0]:""}var EA=/^[^&#]+/;function SA(n){let e=n.match(EA);return e?e[0]:""}var Qh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ot([],{}):new ot([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Le]=new ot(e,t)),i}parseSegment(){let e=$h(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ee(4009,!1);return this.capture(e),new Dr(ol(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=MA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=$h(this.remaining);r&&(i=r,this.capture(i))}e[ol(t)]=ol(i)}parseQueryParam(e){let t=bA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=SA(this.remaining);o&&(i=o,this.capture(i))}let r=F0(t),s=F0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=$h(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ee(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Le);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Le]:new ot([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ee(4011,!1)}};function X0(n){return n.segments.length>0?new ot([],{[Le]:n}):n}function Y0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Y0(r);if(i===Le&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ot(n.segments,e);return TA(t)}function TA(n){if(n.numberOfChildren===1&&n.children[Le]){let e=n.children[Le];return new ot(n.segments.concat(e.segments),e.children)}return n}function As(n){return n instanceof ji}function CA(n,e,t=null,i=null){let r=Z0(n);return J0(r,e,t,i)}function Z0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ot(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=X0(i);return e??r}function J0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return qh(r,r,r,t,i);let s=AA(e);if(s.toRoot())return qh(r,r,new ot([],{}),t,i);let o=DA(s,r,n),a=o.processChildren?Zo(o.segmentGroup,o.index,s.commands):Q0(o.segmentGroup,o.index,s.commands);return qh(r,o.segmentGroup,a,t,i)}function cl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Qo(n){return typeof n=="object"&&n!=null&&n.outlets}function qh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=K0(n,e,t);let a=X0(Y0(o));return new ji(a,s,r)}function K0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=K0(s,e,t)}),new ot(n.segments,i)}var ll=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&cl(i[0]))throw new Ee(4003,!1);let r=i.find(Qo);if(r&&r!==z0(i))throw new Ee(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function AA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new ll(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ll(t,e,i)}var Ss=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function DA(n,e,t){if(n.isAbsolute)return new Ss(e,!0,0);if(!t)return new Ss(e,!1,NaN);if(t.parent===null)return new Ss(t,!0,0);let i=cl(n.commands[0])?0:1,r=t.segments.length-1+i;return IA(t,r,n.numberOfDoubleDots)}function IA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ee(4005,!1);r=i.segments.length}return new Ss(i,!1,r-s)}function RA(n){return Qo(n[0])?n[0].outlets:{[Le]:n}}function Q0(n,e,t){if(n??=new ot([],{}),n.segments.length===0&&n.hasChildren())return Zo(n,e,t);let i=PA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ot(n.segments.slice(0,i.pathIndex),{});return s.children[Le]=new ot(n.segments.slice(i.pathIndex),n.children),Zo(s,0,r)}else return i.match&&r.length===0?new ot(n.segments,{}):i.match&&!n.hasChildren()?ef(n,e,t):i.match?Zo(n,0,r):ef(n,e,t)}function Zo(n,e,t){if(t.length===0)return new ot(n.segments,{});{let i=RA(t),r={};if(Object.keys(i).some(s=>s!==Le)&&n.children[Le]&&n.numberOfChildren===1&&n.children[Le].segments.length===0){let s=Zo(n.children[Le],e,t);return new ot(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Q0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ot(n.segments,r)}}function PA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Qo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!k0(c,l,o))return s;i+=2}else{if(!k0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ef(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Qo(s)){let c=NA(s.outlets);return new ot(i,c)}if(r===0&&cl(t[0])){let c=n.segments[e];i.push(new Dr(c.path,U0(t[0]))),r++;continue}let o=Qo(s)?s.outlets[Le]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&cl(a)?(i.push(new Dr(o,U0(a))),r+=2):(i.push(new Dr(o,{})),r++)}return new ot(i,{})}function NA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=ef(new ot([],{}),0,i))}),e}function U0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function k0(n,e,t){return n==t.path&&ri(e,t.parameters)}var Jo="imperative",Vt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Vt||{}),Dn=class{constructor(e,t){this.id=e,this.url=t}},ea=class extends Dn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Vt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Rr=class extends Dn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Vt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},hn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(hn||{}),tf=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(tf||{}),$i=class extends Dn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Vt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Pr=class extends Dn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Vt.NavigationSkipped}},ta=class extends Dn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Vt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ul=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Vt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nf=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Vt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rf=class extends Dn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Vt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},sf=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Vt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},of=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Vt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},af=class{constructor(e){this.route=e,this.type=Vt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},cf=class{constructor(e){this.route=e,this.type=Vt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},lf=class{constructor(e){this.snapshot=e,this.type=Vt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},uf=class{constructor(e){this.snapshot=e,this.type=Vt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},df=class{constructor(e){this.snapshot=e,this.type=Vt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hf=class{constructor(e){this.snapshot=e,this.type=Vt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var na=class{},ia=class{constructor(e){this.url=e}};var ff=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new gl,this.attachRef=null}},gl=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new ff,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),dl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=pf(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=pf(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=mf(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return mf(e,this._root).map(t=>t.value)}};function pf(n,e){if(n===e.value)return e;for(let t of e.children){let i=pf(n,t);if(i)return i}return null}function mf(n,e){if(n===e.value)return[e];for(let t of e.children){let i=mf(n,t);if(i.length)return i.unshift(e),i}return[]}var dn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Es(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var hl=class extends dl{constructor(e,t){super(e),this.snapshot=t,Tf(this,e)}toString(){return this.snapshot.toString()}};function e_(n){let e=LA(n),t=new Bt([new Dr("",{})]),i=new Bt({}),r=new Bt({}),s=new Bt({}),o=new Bt(""),a=new Ds(t,i,s,o,r,Le,n,e.root);return a.snapshot=e.root,new hl(new dn(a,[]),e)}function LA(n){let e={},t={},i={},r="",s=new ra([],e,i,r,t,Le,n,null,{});return new fl("",new dn(s,[]))}var Ds=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ze(l=>l[aa]))??Te(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ze(e=>Cs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ze(e=>Cs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Sf(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:pe(pe({},e.params),n.params),data:pe(pe({},e.data),n.data),resolve:pe(pe(pe(pe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:pe({},n.params),data:pe({},n.data),resolve:pe(pe({},n.data),n._resolvedData??{})},r&&n_(r)&&(i.resolve[aa]=r.title),i}var ra=class{get title(){return this.data?.[aa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Cs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Cs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},fl=class extends dl{constructor(e,t){super(t),this.url=e,Tf(this,t)}toString(){return t_(this._root)}};function Tf(n,e){e.value._routerState=n,e.children.forEach(t=>Tf(n,t))}function t_(n){let e=n.children.length>0?` { ${n.children.map(t_).join(", ")} } `:"";return`${n.value}${e}`}function Xh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ri(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ri(e.params,t.params)||n.paramsSubject.next(t.params),lA(e.url,t.url)||n.urlSubject.next(t.url),ri(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function gf(n,e){let t=ri(n.params,e.params)&&fA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||gf(n.parent,e.parent))}function n_(n){return typeof n.title=="string"||n.title===null}var OA=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Le,this.activateEvents=new Mn,this.deactivateEvents=new Mn,this.attachEvents=new Mn,this.detachEvents=new Mn,this.parentContexts=se(gl),this.location=se(_s),this.changeDetector=se(Ho),this.environmentInjector=se(wn),this.inputBinder=se(Cf,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ee(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ee(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ee(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Ee(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new vf(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=Jd({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Rc]});let n=e;return n})(),vf=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Ds?this.route:e===gl?this.childContexts:this.parent.get(e,t)}},Cf=new We("");function FA(n,e,t){let i=sa(n,e._root,t?t._root:void 0);return new hl(i,e)}function sa(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=UA(n,e,t);return new dn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>sa(n,a)),o}}let i=kA(e.value),r=e.children.map(s=>sa(n,s));return new dn(i,r)}}function UA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return sa(n,i,r);return sa(n,i)})}function kA(n){return new Ds(new Bt(n.url),new Bt(n.params),new Bt(n.queryParams),new Bt(n.fragment),new Bt(n.data),n.outlet,n.component,n)}var i_="ngNavigationCancelingError";function r_(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=As(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=s_(!1,hn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function s_(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[i_]=!0,t.cancellationCode=e,t}function BA(n){return o_(n)&&As(n.url)}function o_(n){return!!n&&n[i_]}var VA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ki({type:e,selectors:[["ng-component"]],standalone:!0,features:[Gi],decls:1,vars:0,template:function(r,s){r&1&&Cn(0,"router-outlet")},dependencies:[OA],encapsulation:2});let n=e;return n})();function zA(n,e){return n.providers&&!n._injector&&(n._injector=Ch(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Af(n){let e=n.children&&n.children.map(Af),t=e?Mt(pe({},n),{children:e}):pe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Le&&(t.component=VA),t}function si(n){return n.outlet||Le}function HA(n,e){let t=n.filter(i=>si(i)===e);return t.push(...n.filter(i=>si(i)!==e)),t}function ca(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var GA=(n,e,t,i)=>Ze(r=>(new yf(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),yf=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Xh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Es(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Es(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Es(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Es(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new hf(s.value.snapshot))}),e.children.length&&this.forwardEvent(new uf(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Xh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Xh(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=ca(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},pl=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ts=class{constructor(e,t){this.component=e,this.route=t}};function WA(n,e,t){let i=n._root,r=e?e._root:null;return Xo(i,r,t,[i.value])}function jA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Rs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Ag(n)?n:e.get(n):i}function Xo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Es(e);return n.children.forEach(o=>{$A(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ko(a,t.getContext(o),r)),r}function $A(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=qA(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new pl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Xo(n,e,a?a.children:null,i,r):Xo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ts(a.outlet.component,o))}else o&&Ko(e,a,r),r.canActivateChecks.push(new pl(i)),s.component?Xo(n,null,a?a.children:null,i,r):Xo(n,null,t,i,r);return r}function qA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Ir(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Ir(n.url,e.url)||!ri(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!gf(n,e)||!ri(n.queryParams,e.queryParams);case"paramsChange":default:return!gf(n,e)}}function Ko(n,e,t){let i=Es(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ko(o,e.children.getContext(s),t):Ko(o,null,t):Ko(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ts(e.outlet.component,r)):t.canDeactivateChecks.push(new Ts(null,r)):t.canDeactivateChecks.push(new Ts(null,r))}function la(n){return typeof n=="function"}function XA(n){return typeof n=="boolean"}function YA(n){return n&&la(n.canLoad)}function ZA(n){return n&&la(n.canActivate)}function JA(n){return n&&la(n.canActivateChild)}function KA(n){return n&&la(n.canDeactivate)}function QA(n){return n&&la(n.canMatch)}function a_(n){return n instanceof ui||n?.name==="EmptyError"}var il=Symbol("INITIAL_VALUE");function Is(){return yn(n=>$a(n.map(e=>e.pipe(di(1),ku(il)))).pipe(Ze(e=>{for(let t of e)if(t!==!0){if(t===il)return il;if(t===!1||t instanceof ji)return t}return!0}),vn(e=>e!==il),di(1)))}function eD(n,e){return At(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Te(Mt(pe({},t),{guardsResult:!0})):tD(o,i,r,n).pipe(At(a=>a&&XA(a)?nD(i,s,n,e):Te(a)),Ze(a=>Mt(pe({},t),{guardsResult:a})))})}function tD(n,e,t,i){return St(n).pipe(At(r=>aD(r.component,r.route,t,e,i)),Ln(r=>r!==!0,!0))}function nD(n,e,t,i){return St(e).pipe(fr(r=>rs(rD(r.route.parent,i),iD(r.route,i),oD(n,r.path,t),sD(n,r.route,t))),Ln(r=>r!==!0,!0))}function iD(n,e){return n!==null&&e&&e(new df(n)),Te(!0)}function rD(n,e){return n!==null&&e&&e(new lf(n)),Te(!0)}function sD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Te(!0);let r=i.map(s=>qa(()=>{let o=ca(e)??t,a=Rs(s,o),c=ZA(a)?a.canActivate(e,n):Bi(o,()=>a(e,n));return qi(c).pipe(Ln())}));return Te(r).pipe(Is())}function oD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>jA(o)).filter(o=>o!==null).map(o=>qa(()=>{let a=o.guards.map(c=>{let l=ca(o.node)??t,u=Rs(c,l),d=JA(u)?u.canActivateChild(i,n):Bi(l,()=>u(i,n));return qi(d).pipe(Ln())});return Te(a).pipe(Is())}));return Te(s).pipe(Is())}function aD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Te(!0);let o=s.map(a=>{let c=ca(e)??r,l=Rs(a,c),u=KA(l)?l.canDeactivate(n,e,t,i):Bi(c,()=>l(n,e,t,i));return qi(u).pipe(Ln())});return Te(o).pipe(Is())}function cD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Te(!0);let s=r.map(o=>{let a=Rs(o,n),c=YA(a)?a.canLoad(e,t):Bi(n,()=>a(e,t));return qi(c)});return Te(s).pipe(Is(),c_(i))}function c_(n){return Du(Dt(e=>{if(As(e))throw r_(n,e)}),Ze(e=>e===!0))}function lD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Te(!0);let s=r.map(o=>{let a=Rs(o,n),c=QA(a)?a.canMatch(e,t):Bi(n,()=>a(e,t));return qi(c)});return Te(s).pipe(Is(),c_(i))}var oa=class{constructor(e){this.segmentGroup=e||null}},ml=class extends Error{constructor(e){super(),this.urlTree=e}};function bs(n){return is(new oa(n))}function uD(n){return is(new Ee(4e3,!1))}function dD(n){return is(s_(!1,hn.GuardRejected))}var _f=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Te(i);if(r.numberOfChildren>1||!r.children[Le])return uD(e.redirectTo);r=r.children[Le]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new ml(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new ji(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ot(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ee(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},xf={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function hD(n,e,t,i,r){let s=Df(n,e,t);return s.matched?(i=zA(e,i),lD(i,e,t,r).pipe(Ze(o=>o===!0?s:pe({},xf)))):Te(s)}function Df(n,e,t){if(e.path==="**")return fD(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?pe({},xf):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||cA)(t,n,e);if(!r)return pe({},xf);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function fD(n){return{matched:!0,parameters:n.length>0?z0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function B0(n,e,t,i){return t.length>0&&gD(n,t,i)?{segmentGroup:new ot(e,mD(i,new ot(t,n.children))),slicedSegments:[]}:t.length===0&&vD(n,t,i)?{segmentGroup:new ot(n.segments,pD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ot(n.segments,n.children),slicedSegments:t}}function pD(n,e,t,i){let r={};for(let s of t)if(vl(n,e,s)&&!i[si(s)]){let o=new ot([],{});r[si(s)]=o}return pe(pe({},i),r)}function mD(n,e){let t={};t[Le]=e;for(let i of n)if(i.path===""&&si(i)!==Le){let r=new ot([],{});t[si(i)]=r}return t}function gD(n,e,t){return t.some(i=>vl(n,e,i)&&si(i)!==Le)}function vD(n,e,t){return t.some(i=>vl(n,e,i))}function vl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function yD(n,e,t,i){return si(n)!==i&&(i===Le||!vl(e,t,n))?!1:Df(e,n,t).matched}function _D(n,e,t){return e.length===0&&!n.children[t]}var Mf=class{};function xD(n,e,t,i,r,s,o="emptyOnly"){return new wf(n,e,t,i,r,o,s).recognize()}var MD=31,wf=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new _f(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Ee(4002,`'${e.segmentGroup}'`)}recognize(){let e=B0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Ze(t=>{let i=new ra([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Le,this.rootComponentType,null,{}),r=new dn(i,t),s=new fl("",r),o=CA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Le).pipe(Ri(i=>{if(i instanceof ml)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof oa?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Sf(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(Ze(s=>s instanceof dn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return St(r).pipe(fr(s=>{let o=i.children[s],a=HA(t,s);return this.processSegmentGroup(e,a,o,s)}),Uu((s,o)=>(s.push(...o),s)),Pi(null),Fu(),At(s=>{if(s===null)return bs(i);let o=l_(s);return wD(o),Te(o)}))}processSegment(e,t,i,r,s,o){return St(t).pipe(fr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Ri(c=>{if(c instanceof oa)return Te(null);throw c}))),Ln(a=>!!a),Ri(a=>{if(a_(a))return _D(i,r,s)?Te(new Mf):bs(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return yD(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):bs(r):bs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Df(t,r,s);if(!a)return bs(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>MD&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(At(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=hD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(yn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(yn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new ra(u,h,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,ED(i),si(i),i.component??i._loadedComponent??null,i,SD(i)),{segmentGroup:g,slicedSegments:y}=B0(t,u,d,c);if(y.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(Ze(f=>f===null?null:new dn(m,f)));if(c.length===0&&y.length===0)return Te(new dn(m,[]));let p=si(i)===s;return this.processSegment(l,c,g,y,p?Le:s,!0).pipe(Ze(f=>new dn(m,f instanceof dn?[f]:[])))}))):bs(t)))}getChildConfig(e,t,i){return t.children?Te({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Te({routes:t._loadedRoutes,injector:t._loadedInjector}):cD(e,t,i,this.urlSerializer).pipe(At(r=>r?this.configLoader.loadChildren(e,t).pipe(Dt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):dD(t))):Te({routes:[],injector:e})}};function wD(n){n.sort((e,t)=>e.value.outlet===Le?-1:t.value.outlet===Le?1:e.value.outlet.localeCompare(t.value.outlet))}function bD(n){let e=n.value.routeConfig;return e&&e.path===""}function l_(n){let e=[],t=new Set;for(let i of n){if(!bD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=l_(i.children);e.push(new dn(i.value,r))}return e.filter(i=>!t.has(i))}function ED(n){return n.data||{}}function SD(n){return n.resolve||{}}function TD(n,e,t,i,r,s){return At(o=>xD(n,e,t,i,o.extractedUrl,r,s).pipe(Ze(({state:a,tree:c})=>Mt(pe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function CD(n,e){return At(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Te(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of u_(c))o.add(l);let a=0;return St(o).pipe(fr(c=>s.has(c)?AD(c,i,n,e):(c.data=Sf(c,c.parent,n).resolve,Te(void 0))),Dt(()=>a++),os(1),At(c=>a===o.size?Te(t):ln))})}function u_(n){let e=n.children.map(t=>u_(t)).flat();return[n,...e]}function AD(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!n_(r)&&(s[aa]=r.title),DD(s,n,e,i).pipe(Ze(o=>(n._resolvedData=o,n.data=Sf(n,n.parent,t).resolve,null)))}function DD(n,e,t,i){let r=Jh(n);if(r.length===0)return Te({});let s={};return St(r).pipe(At(o=>ID(n[o],e,t,i).pipe(Ln(),Dt(a=>{s[o]=a}))),os(1),Ou(s),Ri(o=>a_(o)?ln:is(o)))}function ID(n,e,t,i){let r=ca(e)??i,s=Rs(n,r),o=s.resolve?s.resolve(e,t):Bi(r,()=>s(e,t));return qi(o)}function Yh(n){return yn(e=>{let t=n(e);return t?St(t).pipe(Ze(()=>e)):Te(e)})}var d_=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Le);return r}getResolvedTitleForRoute(i){return i.data[aa]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(RD),providedIn:"root"});let n=e;return n})(),RD=(()=>{let e=class e extends d_{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(tt(N0))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),If=new We("",{providedIn:"root",factory:()=>({})}),Rf=new We(""),PD=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=se(Ph)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Te(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=qi(i.loadComponent()).pipe(Ze(h_),Dt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),ss(()=>{this.componentLoaders.delete(i)})),s=new ns(r,()=>new $t).pipe(ts());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Te({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=ND(r,this.compiler,i,this.onLoadEndListener).pipe(ss(()=>{this.childrenLoaders.delete(r)})),a=new ns(o,()=>new $t).pipe(ts());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function ND(n,e,t,i){return qi(n.loadChildren()).pipe(Ze(h_),At(r=>r instanceof Ao||Array.isArray(r)?Te(r):St(e.compileModuleAsync(r))),Ze(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Rf,[],{optional:!0,self:!0}).flat()),{routes:o.map(Af),injector:s}}))}function LD(n){return n&&typeof n=="object"&&"default"in n}function h_(n){return LD(n)?n.default:n}var Pf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(OD),providedIn:"root"});let n=e;return n})(),OD=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),FD=new We("");var UD=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new $t,this.transitionAbortSubject=new $t,this.configLoader=se(PD),this.environmentInjector=se(wn),this.urlSerializer=se(Ef),this.rootContexts=se(gl),this.location=se(Go),this.inputBindingEnabled=se(Cf,{optional:!0})!==null,this.titleStrategy=se(d_),this.options=se(If,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=se(Pf),this.createViewTransition=se(FD,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Te(void 0),this.rootComponentType=null;let i=s=>this.events.next(new af(s)),r=s=>this.events.next(new cf(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(Mt(pe(pe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Bt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Jo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(vn(o=>o.id!==0),Ze(o=>Mt(pe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),yn(o=>{let a=!1,c=!1;return Te(o).pipe(yn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",hn.SupersededByNewNavigation),ln;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Mt(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Pr(l.id,this.urlSerializer.serialize(l.rawUrl),h,tf.IgnoredSameUrlNavigation)),l.resolve(null),ln}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Te(l).pipe(yn(h=>{let m=this.transitions?.getValue();return this.events.next(new ea(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?ln:Promise.resolve(h)}),TD(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Dt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Mt(pe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new ul(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:y,extras:p}=l,f=new ea(h,this.urlSerializer.serialize(m),g,y);this.events.next(f);let S=e_(this.rootComponentType).snapshot;return this.currentTransition=o=Mt(pe({},l),{targetSnapshot:S,urlAfterRedirects:m,extras:Mt(pe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Te(o)}else{let h="";return this.events.next(new Pr(l.id,this.urlSerializer.serialize(l.extractedUrl),h,tf.IgnoredByUrlHandlingStrategy)),l.resolve(null),ln}}),Dt(l=>{let u=new nf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Ze(l=>(this.currentTransition=o=Mt(pe({},l),{guards:WA(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),eD(this.environmentInjector,l=>this.events.next(l)),Dt(l=>{if(o.guardsResult=l.guardsResult,As(l.guardsResult))throw r_(this.urlSerializer,l.guardsResult);let u=new rf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),vn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",hn.GuardRejected),!1)),Yh(l=>{if(l.guards.canActivateChecks.length)return Te(l).pipe(Dt(u=>{let d=new sf(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),yn(u=>{let d=!1;return Te(u).pipe(CD(this.paramsInheritanceStrategy,this.environmentInjector),Dt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",hn.NoDataFromResolver)}}))}),Dt(u=>{let d=new of(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Yh(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Dt(m=>{d.component=m}),Ze(()=>{})));for(let m of d.children)h.push(...u(m));return h};return $a(u(l.targetSnapshot.root)).pipe(Pi(null),di(1))}),Yh(()=>this.afterPreactivation()),yn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?St(d).pipe(Ze(()=>o)):Te(o)}),Ze(l=>{let u=FA(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Mt(pe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Dt(()=>{this.events.next(new na)}),GA(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),di(1),Dt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Rr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Bu(this.transitionAbortSubject.pipe(Dt(l=>{throw l}))),ss(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",hn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ri(l=>{if(c=!0,o_(l))this.events.next(new $i(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),BA(l)?this.events.next(new ia(l.url)):o.resolve(!1);else{this.events.next(new ta(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return ln}))}))}cancelNavigationTransition(i,r,s){let o=new $i(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function kD(n){return n!==Jo}var BD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(VD),providedIn:"root"});let n=e;return n})(),bf=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},VD=(()=>{let e=class e extends bf{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ah(e)))(s||e)}})(),e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),f_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>se(zD),providedIn:"root"});let n=e;return n})(),zD=(()=>{let e=class e extends f_{constructor(){super(...arguments),this.location=se(Go),this.urlSerializer=se(Ef),this.options=se(If,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=se(Pf),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new ji,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=e_(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof ea)this.stateMemento=this.createStateMemento();else if(i instanceof Pr)this.rawUrlTree=r.initialUrl;else if(i instanceof ul){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof na?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof $i&&(i.code===hn.GuardRejected||i.code===hn.NoDataFromResolver)?this.restoreHistory(r):i instanceof ta?this.restoreHistory(r,!0):i instanceof Rr&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ah(e)))(s||e)}})(),e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Yo=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Yo||{});function HD(n,e){n.events.pipe(vn(t=>t instanceof Rr||t instanceof $i||t instanceof ta||t instanceof Pr),Ze(t=>t instanceof Rr||t instanceof Pr?Yo.COMPLETE:(t instanceof $i?t.code===hn.Redirect||t.code===hn.SupersededByNewNavigation:!1)?Yo.REDIRECTING:Yo.FAILED),vn(t=>t!==Yo.REDIRECTING),di(1)).subscribe(()=>{e()})}function GD(n){throw n}var WD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},p_=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=se(qc),this.stateManager=se(f_),this.options=se(If,{optional:!0})||{},this.pendingTasks=se(ko),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=se(UD),this.urlSerializer=se(Ef),this.location=se(Go),this.urlHandlingStrategy=se(Pf),this._events=new $t,this.errorHandler=this.options.errorHandler||GD,this.navigated=!1,this.routeReuseStrategy=se(BD),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=se(Rf,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!se(Cf,{optional:!0}),this.eventsSubscription=new Ct,this.isNgZoneEnabled=se(vt)instanceof vt&&vt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof $i&&r.code!==hn.Redirect&&r.code!==hn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Rr)this.navigated=!0;else if(r instanceof ia){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||kD(s.source)};this.scheduleNavigation(a,Jo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}qD(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Jo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=pe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Af),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=pe(pe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=Z0(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return J0(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=As(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Jo,null,r)}navigate(i,r={skipLocationChange:!1}){return $D(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=pe({},WD):r===!1?s=pe({},jD):s=r,As(i))return O0(this.currentUrlTree,i,s);let o=this.parseUrl(i);return O0(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return HD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function $D(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ee(4008,!1)}function qD(n){return!(n instanceof na)&&!(n instanceof ia)}var XD=new We("");function m_(n,...e){return wr([{provide:Rf,multi:!0,useValue:n},[],{provide:Ds,useFactory:YD,deps:[p_]},{provide:xs,multi:!0,useFactory:ZD},e.map(t=>t.\u0275providers)])}function YD(n){return n.routerState.root}function ZD(){let n=se(Sr);return e=>{let t=n.get(Wi);if(e!==t.components[0])return;let i=n.get(p_),r=n.get(JD);n.get(KD)===1&&i.initialNavigation(),n.get(QD,null,$e.Optional)?.setUpPreloading(),n.get(XD,null,$e.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var JD=new We("",{factory:()=>new $t}),KD=new We("",{providedIn:"root",factory:()=>1});var QD=new We("");var g_=[];var v_={providers:[m_(g_),L0()]};var $p="162";var eI=0,y_=1,tI=2;var Wx=1,nI=2,bi=3,rr=0,on=1,Si=2,ci=0,Ks=1,__=2,x_=3,M_=4,iI=5,Vr=100,rI=101,sI=102,w_=103,b_=104,oI=200,aI=201,cI=202,lI=203,hp=204,fp=205,uI=206,dI=207,hI=208,fI=209,pI=210,mI=211,gI=212,vI=213,yI=214,_I=0,xI=1,MI=2,Vl=3,wI=4,bI=5,EI=6,SI=7,jx=0,TI=1,CI=2,nr=0,AI=1,DI=2,II=3,RI=4,PI=5,NI=6,LI=7;var E_=300,to=301,no=302,pp=303,mp=304,cu=306,gp=1e3,jn=1001,vp=1002,Xt=1003,S_=1004;var ua=1005;var rn=1006,Nf=1007;var Hr=1008;var ir=1009,OI=1010,FI=1011,qp=1012,$x=1013,tr=1014,Ti=1015,jr=1016,qx=1017,Xx=1018,Gr=1020,UI=1021,$n=1023,kI=1024,BI=1025,Wr=1026,io=1027,VI=1028,Yx=1029,zI=1030,Zx=1031,Jx=1033,Lf=33776,Of=33777,Ff=33778,Uf=33779,T_=35840,C_=35841,A_=35842,D_=35843,Kx=36196,I_=37492,R_=37496,P_=37808,N_=37809,L_=37810,O_=37811,F_=37812,U_=37813,k_=37814,B_=37815,V_=37816,z_=37817,H_=37818,G_=37819,W_=37820,j_=37821,kf=36492,$_=36494,q_=36495,HI=36283,X_=36284,Y_=36285,Z_=36286;var zl=2300,Hl=2301,Bf=2302,J_=2400,K_=2401,Q_=2402;var GI=3200,WI=3201,jI=0,$I=1,er="",oi="srgb",ar="srgb-linear",Xp="display-p3",lu="display-p3-linear",Gl="linear",ft="srgb",Wl="rec709",jl="p3";var Ps=7680;var ex=519,qI=512,XI=513,YI=514,Qx=515,ZI=516,JI=517,KI=518,QI=519,tx=35044;var nx="300 es",yp=1035,Ci=2e3,$l=2001,sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vf=Math.PI/180,_p=180/Math.PI;function wa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function eR(n,e){return(n%e+e)%e}function zf(n,e,t){return(1-t)*n+t*e}function ix(n){return(n&n-1)===0&&n!==0}function xp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var it=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],y=r[0],p=r[3],f=r[6],S=r[1],M=r[4],b=r[7],I=r[2],C=r[5],T=r[8];return s[0]=o*y+a*S+c*I,s[3]=o*p+a*M+c*C,s[6]=o*f+a*b+c*T,s[1]=l*y+u*S+d*I,s[4]=l*p+u*M+d*C,s[7]=l*f+u*b+d*T,s[2]=h*y+m*S+g*I,s[5]=h*p+m*M+g*C,s[8]=h*f+m*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hf.makeScale(e,t)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hf=new ze;function eM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ql(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tR(){let n=ql("canvas");return n.style.display="block",n}var rx={};function nR(n){n in rx||(rx[n]=!0,console.warn(n))}var sx=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ox=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yl={[ar]:{transfer:Gl,primaries:Wl,toReference:n=>n,fromReference:n=>n},[oi]:{transfer:ft,primaries:Wl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lu]:{transfer:Gl,primaries:jl,toReference:n=>n.applyMatrix3(ox),fromReference:n=>n.applyMatrix3(sx)},[Xp]:{transfer:ft,primaries:jl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ox),fromReference:n=>n.applyMatrix3(sx).convertLinearToSRGB()}},iR=new Set([ar,lu]),lt={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=yl[e].toReference,r=yl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return yl[n].primaries},getTransfer:function(n){return n===er?Gl:yl[n].transfer}};function Qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,Xl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=ql("canvas")),Ns.width=e.width,Ns.height=e.height;let i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ql("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qs(t[i]/255)*255):t[i]=Qs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rR=0,Yl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wf(r[o].image)):s.push(Wf(r[o]))}else s=Wf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sR=0,Yr=(()=>{class n extends sr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=jn,s=jn,o=rn,a=Hr,c=$n,l=ir,u=n.DEFAULT_ANISOTROPY,d=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=wa(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gp:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case vp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gp:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case vp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=E_,n.DEFAULT_ANISOTROPY=1,n})(),zt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(m+1)/2,I=(f+1)/2,C=(u+h)/4,T=(d+y)/4,B=(g+p)/4;return M>b&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=T/i):b>I?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=B/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=T/s,r=B/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mp=class extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let s=new Yr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Yl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Mp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zl=class extends Yr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wp=class extends Yr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*y,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let I=Math.sqrt(M),C=Math.atan2(I,f*S);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}let b=a*S;if(c=c*p+h*b,l=l*p+m*b,u=u*p+g*b,d=d*p+y*b,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ax.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ax.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jf=new F,ax=new or,$r=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),xl.subVectors(this.max,ha),Ls.subVectors(e.a,ha),Os.subVectors(e.b,ha),Fs.subVectors(e.c,ha),Xi.subVectors(Os,Ls),Yi.subVectors(Fs,Os),Nr.subVectors(Ls,Fs);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Nr.z,Nr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Nr.z,0,-Nr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Nr.y,Nr.x,0];return!$f(t,Ls,Os,Fs,xl)||(t=[1,0,0,0,1,0,0,0,1],!$f(t,Ls,Os,Fs,xl))?!1:(Ml.crossVectors(Xi,Yi),t=[Ml.x,Ml.y,Ml.z],$f(t,Ls,Os,Fs,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yi=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,_l=new $r,Ls=new F,Os=new F,Fs=new F,Xi=new F,Yi=new F,Nr=new F,ha=new F,xl=new F,Ml=new F,Lr=new F;function $f(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Lr.fromArray(n,s);let a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=e.dot(Lr),l=t.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var oR=new $r,fa=new F,qf=new F,va=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):oR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(qf)),this.expandByPoint(fa.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new F,Xf=new F,wl=new F,Zi=new F,Yf=new F,bl=new F,Zf=new F,bp=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xf.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Xf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(wl),a=Zi.dot(this.direction),c=-Zi.dot(wl),l=Zi.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xf).addScaledVector(wl,h),m}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,s){Yf.subVectors(t,e),bl.subVectors(i,e),Zf.crossVectors(Yf,bl);let o=this.direction.dot(Zf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let c=a*this.direction.dot(bl.crossVectors(Zi,bl));if(c<0)return null;let l=a*this.direction.dot(Yf.cross(Zi));if(l<0||c+l>o)return null;let u=-a*Zi.dot(Zf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,y=l*d;t[0]=h+y*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aR,e,cR)}lookAt(e,t,i){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ji.crossVectors(i,fn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ji.crossVectors(i,fn)),Ji.normalize(),El.crossVectors(fn,Ji),r[0]=Ji.x,r[4]=El.x,r[8]=fn.x,r[1]=Ji.y,r[5]=El.y,r[9]=fn.y,r[2]=Ji.z,r[6]=El.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],y=i[6],p=i[10],f=i[14],S=i[3],M=i[7],b=i[11],I=i[15],C=r[0],T=r[4],B=r[8],K=r[12],_=r[1],E=r[5],ee=r[9],J=r[13],D=r[2],G=r[6],z=r[10],$=r[14],H=r[3],j=r[7],q=r[11],ie=r[15];return s[0]=o*C+a*_+c*D+l*H,s[4]=o*T+a*E+c*G+l*j,s[8]=o*B+a*ee+c*z+l*q,s[12]=o*K+a*J+c*$+l*ie,s[1]=u*C+d*_+h*D+m*H,s[5]=u*T+d*E+h*G+m*j,s[9]=u*B+d*ee+h*z+m*q,s[13]=u*K+d*J+h*$+m*ie,s[2]=g*C+y*_+p*D+f*H,s[6]=g*T+y*E+p*G+f*j,s[10]=g*B+y*ee+p*z+f*q,s[14]=g*K+y*J+p*$+f*ie,s[3]=S*C+M*_+b*D+I*H,s[7]=S*T+M*E+b*G+I*j,s[11]=S*B+M*ee+b*z+I*q,s[15]=S*K+M*J+b*$+I*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+y*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],S=d*p*l-y*h*l+y*c*m-a*p*m-d*c*f+a*h*f,M=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,b=u*y*l-g*d*l+g*a*m-o*y*m-u*a*f+o*d*f,I=g*d*c-u*y*c-g*a*h+o*y*h+u*a*p-o*d*p,C=t*S+i*M+r*b+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=S*T,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*s-y*c*s+y*r*l-i*p*l-a*r*f+i*c*f)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*T,e[4]=M*T,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*T,e[8]=b*T,e[9]=(g*d*s-u*y*s-g*i*m+t*y*m+u*i*f-t*d*f)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*f+t*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*T,e[12]=I*T,e[13]=(u*y*r-g*d*r+g*i*h-t*y*h-u*i*p+t*d*p)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,y=o*u,p=o*d,f=a*d,S=c*l,M=c*u,b=c*d,I=i.x,C=i.y,T=i.z;return r[0]=(1-(y+f))*I,r[1]=(m+b)*I,r[2]=(g-M)*I,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(h+f))*C,r[6]=(p+S)*C,r[7]=0,r[8]=(g+M)*T,r[9]=(p-S)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Us.set(r[0],r[1],r[2]).length(),o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);let l=1/s,u=1/o,d=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ci){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===Ci)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$l)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ci){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,y;if(a===Ci)g=(o+s)*d,y=-2*d;else if(a===$l)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new F,Gn=new Ft,aR=new F(0,0,0),cR=new F(1,1,1),Ji=new F,El=new F,fn=new F,cx=new Ft,lx=new or,ro=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return cx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return lx.setFromEuler(this),this.setFromQuaternion(lx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Jl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lR=0,ux=new F,ks=new or,xi=new Ft,Sl=new F,pa=new F,uR=new F,dR=new or,dx=new F(1,0,0),hx=new F(0,1,0),fx=new F(0,0,1),hR={type:"added"},fR={type:"removed"},Jf={type:"childadded",child:null},Kf={type:"childremoved",child:null},lo=(()=>{class n extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new ro,r=new or,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ze}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ks.setFromAxisAngle(t,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,i){return ks.setFromAxisAngle(t,i),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(dx,t)}rotateY(t){return this.rotateOnAxis(hx,t)}rotateZ(t){return this.rotateOnAxis(fx,t)}translateOnAxis(t,i){return ux.copy(t).applyQuaternion(this.quaternion),this.position.add(ux.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(dx,t)}translateY(t){return this.translateOnAxis(hx,t)}translateZ(t){return this.translateOnAxis(fx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Sl.copy(t):Sl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(pa,Sl,this.up):xi.lookAt(Sl,pa,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(xi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hR),Jf.child=t,this.dispatchEvent(Jf),Jf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fR),Kf.child=t,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,uR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,dR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Wn=new F,Mi=new F,Qf=new F,wi=new F,Bs=new F,Vs=new F,px=new F,ep=new F,tp=new F,np=new F,Xs=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Mi.subVectors(i,t),Qf.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(Mi),c=Wn.dot(Qf),l=Mi.dot(Mi),u=Mi.dot(Qf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Mi.subVectors(e,t),Wn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Wn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Bs.subVectors(r,i),Vs.subVectors(s,i),ep.subVectors(e,i);let c=Bs.dot(ep),l=Vs.dot(ep);if(c<=0&&l<=0)return t.copy(i);tp.subVectors(e,r);let u=Bs.dot(tp),d=Vs.dot(tp);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Bs,o);np.subVectors(e,s);let m=Bs.dot(np),g=Vs.dot(np);if(g>=0&&m<=g)return t.copy(s);let y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Vs,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return px.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(px,a);let f=1/(p+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(Bs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function ip(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=eR(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ip(o,s,e+1/3),this.g=ip(o,s,e),this.b=ip(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){let i=tM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=Gf(e.r),this.g=Gf(e.g),this.b=Gf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return lt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(sn(Wt.r*255,0,255))*65536+Math.round(sn(Wt.g*255,0,255))*256+Math.round(sn(Wt.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Wt.copy(this),t);let i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=oi){lt.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,r=Wt.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Tl);let i=zf(Ki.h,Tl.h,t),r=zf(Ki.s,Tl.s,t),s=zf(Ki.l,Tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new rt;rt.NAMES=tM;var pR=0,so=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Ks,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=fp,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hp&&(i.blendSrc=this.blendSrc),this.blendDst!==fp&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ex&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kl=class extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ro,this.combine=jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new F,Cl=new it,Rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nR("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=da(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=da(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=da(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tx&&(e.usage=this.usage),e}};var Ql=class extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var eu=class extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pn=class extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},mR=0,In=new Ft,rp=new lo,zs=new F,pn=new $r,ma=new $r,Ot=new F,Ai=class n extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eM(e)?eu:Ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return rp.lookAt(e),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(pn.min,ma.min),pn.expandByPoint(Ot),Ot.addVectors(pn.max,ma.max),pn.expandByPoint(Ot)):(pn.expandByPoint(ma.min),pn.expandByPoint(ma.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),Ot.add(zs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new F,c[B]=new F;let l=new F,u=new F,d=new F,h=new it,m=new it,g=new it,y=new F,p=new F;function f(B,K,_){l.fromBufferAttribute(i,B),u.fromBufferAttribute(i,K),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,B),m.fromBufferAttribute(s,K),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),m.sub(h),g.sub(h);let E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(E),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(E),a[B].add(y),a[K].add(y),a[_].add(y),c[B].add(p),c[K].add(p),c[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let B=0,K=S.length;B<K;++B){let _=S[B],E=_.start,ee=_.count;for(let J=E,D=E+ee;J<D;J+=3)f(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let M=new F,b=new F,I=new F,C=new F;function T(B){I.fromBufferAttribute(r,B),C.copy(I);let K=a[B];M.copy(K),M.sub(I.multiplyScalar(I.dot(K))).normalize(),b.crossVectors(C,K);let E=b.dot(c[B])<0?-1:1;o.setXYZW(B,M.x,M.y,M.z,E)}for(let B=0,K=S.length;B<K;++B){let _=S[B],E=_.start,ee=_.count;for(let J=E,D=E+ee;J<D;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mx=new Ft,Or=new bp,Al=new va,gx=new F,Hs=new F,Gs=new F,Ws=new F,sp=new F,Dl=new F,Il=new it,Rl=new it,Pl=new it,vx=new F,yx=new F,_x=new F,Nl=new F,Ll=new F,Zt=class extends lo{constructor(e=new Ai,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Dl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(sp.fromBufferAttribute(d,e),o?Dl.addScaledVector(sp,u):Dl.addScaledVector(sp.sub(t),u))}t.add(Dl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Al.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Al,gx)===null||Or.origin.distanceToSquared(gx)>(e.far-e.near)**2))&&(mx.copy(s).invert(),Or.copy(e.ray).applyMatrix4(mx),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,I=M;b<I;b+=3){let C=a.getX(b),T=a.getX(b+1),B=a.getX(b+2);r=Ol(this,f,e,i,l,u,d,C,T,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);r=Ol(this,o,e,i,l,u,d,S,M,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,I=M;b<I;b+=3){let C=b,T=b+1,B=b+2;r=Ol(this,f,e,i,l,u,d,C,T,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=p,M=p+1,b=p+2;r=Ol(this,o,e,i,l,u,d,S,M,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function gR(n,e,t,i,r,s,o,a){let c;if(e.side===on?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===rr,a),c===null)return null;Ll.copy(a),Ll.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ll);return l<t.near||l>t.far?null:{distance:l,point:Ll.clone(),object:n}}function Ol(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Hs),n.getVertexPosition(c,Gs),n.getVertexPosition(l,Ws);let u=gR(n,e,t,i,Hs,Gs,Ws,Nl);if(u){r&&(Il.fromBufferAttribute(r,a),Rl.fromBufferAttribute(r,c),Pl.fromBufferAttribute(r,l),u.uv=Xs.getInterpolation(Nl,Hs,Gs,Ws,Il,Rl,Pl,new it)),s&&(Il.fromBufferAttribute(s,a),Rl.fromBufferAttribute(s,c),Pl.fromBufferAttribute(s,l),u.uv1=Xs.getInterpolation(Nl,Hs,Gs,Ws,Il,Rl,Pl,new it)),o&&(vx.fromBufferAttribute(o,a),yx.fromBufferAttribute(o,c),_x.fromBufferAttribute(o,l),u.normal=Xs.getInterpolation(Nl,Hs,Gs,Ws,vx,yx,_x,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};Xs.getNormal(Hs,Gs,Ws,d.normal),u.face=d}return u}var ya=class n extends Ai{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pn(l,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(d,2));function g(y,p,f,S,M,b,I,C,T,B,K){let _=b/T,E=I/B,ee=b/2,J=I/2,D=C/2,G=T+1,z=B+1,$=0,H=0,j=new F;for(let q=0;q<z;q++){let ie=q*E-J;for(let de=0;de<G;de++){let Oe=de*_-ee;j[y]=Oe*S,j[p]=ie*M,j[f]=D,l.push(j.x,j.y,j.z),j[y]=0,j[p]=0,j[f]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(de/T),d.push(1-q/B),$+=1}}for(let q=0;q<B;q++)for(let ie=0;ie<T;ie++){let de=h+ie+G*q,Oe=h+ie+G*(q+1),k=h+(ie+1)+G*(q+1),Y=h+(ie+1)+G*q;c.push(de,Oe,Y),c.push(Oe,k,Y),H+=6}a.addGroup(m,H,K),m+=H,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function oo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=oo(n[t]);for(let r in i)e[r]=i[r]}return e}function vR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nM(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}var Yp={clone:oo,merge:qt},yR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_R=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yR,this.fragmentShader=_R,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=vR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},tu=class extends lo{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new F,xx=new it,Mx=new it,Yt=class extends tu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_p*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _p*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,xx,Mx),t.subVectors(Mx,xx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},js=-90,$s=1,Ep=class extends lo{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(js,$s,e,t);r.layers=this.layers,this.add(r);let s=new Yt(js,$s,e,t);s.layers=this.layers,this.add(s);let o=new Yt(js,$s,e,t);o.layers=this.layers,this.add(o);let a=new Yt(js,$s,e,t);a.layers=this.layers,this.add(a);let c=new Yt(js,$s,e,t);c.layers=this.layers,this.add(c);let l=new Yt(js,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nu=class extends Yr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:to,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sp=class extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ya(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ci});s.uniforms.tEquirect.value=t;let o=new Zt(r,s),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=rn),new Ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},op=new F,xR=new F,MR=new ze,Ei=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=op.subVectors(i,t).cross(xR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(op),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||MR.getNormalMatrix(e),r=this.coplanarPoint(op).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fr=new va,Fl=new F,iu=class{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],y=r[10],p=r[11],f=r[12],S=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-s,h-l,p-m,b-f).normalize(),i[1].setComponents(c+s,h+l,p+m,b+f).normalize(),i[2].setComponents(c+o,h+u,p+g,b+S).normalize(),i[3].setComponents(c-o,h-u,p-g,b-S).normalize(),i[4].setComponents(c-a,h-d,p-y,b-M).normalize(),t===Ci)i[5].setComponents(c+a,h+d,p+y,b+M).normalize();else if(t===$l)i[5].setComponents(a,d,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Fl.x=r.normal.x>0?e.max.x:e.min.x,Fl.y=r.normal.y>0?e.max.y:e.min.y,Fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function iM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wR(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){let f=g[y];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var ao=class n extends Ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],y=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let M=0;M<l;M++){let b=M*d-s;g.push(b,-S,0),y.push(0,0,1),p.push(M/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let M=S+l*f,b=S+l*(f+1),I=S+1+l*(f+1),C=S+1+l*f;m.push(M,b,C),m.push(b,I,C)}this.setIndex(m),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(y,3)),this.setAttribute("uv",new Pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},bR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ER=`#ifdef USE_ALPHAHASH
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
#endif`,SR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DR=`#ifdef USE_AOMAP
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
#endif`,IR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RR=`#ifdef USE_BATCHING
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
#endif`,PR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FR=`#ifdef USE_IRIDESCENCE
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
#endif`,UR=`#ifdef USE_BUMPMAP
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
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$R=`#define PI 3.141592653589793
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
} // validated`,qR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XR=`vec3 transformedNormal = objectNormal;
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
#endif`,YR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QR="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`
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
}`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
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
}`,d1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
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
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
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
#endif`,w1=`struct PhysicalMaterial {
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
}`,b1=`
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
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
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
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
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cP=`float getShadowMask() {
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
}`,lP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uP=`#ifdef USE_SKINNING
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
#endif`,dP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hP=`#ifdef USE_SKINNING
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
#endif`,fP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vP=`#ifdef USE_TRANSMISSION
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
#endif`,yP=`#ifdef USE_TRANSMISSION
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
#endif`,_P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EP=`uniform sampler2D t2D;
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
}`,SP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DP=`#include <common>
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
}`,IP=`#if DEPTH_PACKING == 3200
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
}`,RP=`#define DISTANCE
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
}`,PP=`#define DISTANCE
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
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OP=`uniform float scale;
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
}`,FP=`uniform vec3 diffuse;
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
}`,UP=`#include <common>
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
}`,kP=`uniform vec3 diffuse;
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
}`,BP=`#define LAMBERT
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
}`,VP=`#define LAMBERT
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
}`,zP=`#define MATCAP
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
}`,HP=`#define MATCAP
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
}`,GP=`#define NORMAL
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
}`,WP=`#define NORMAL
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
}`,jP=`#define PHONG
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
}`,$P=`#define PHONG
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
}`,qP=`#define STANDARD
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
}`,XP=`#define STANDARD
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
}`,YP=`#define TOON
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
}`,ZP=`#define TOON
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
}`,JP=`uniform float size;
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
}`,KP=`uniform vec3 diffuse;
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
}`,QP=`#include <common>
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
}`,eN=`uniform vec3 color;
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
}`,tN=`uniform float rotation;
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
}`,nN=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:bR,alphahash_pars_fragment:ER,alphamap_fragment:SR,alphamap_pars_fragment:TR,alphatest_fragment:CR,alphatest_pars_fragment:AR,aomap_fragment:DR,aomap_pars_fragment:IR,batching_pars_vertex:RR,batching_vertex:PR,begin_vertex:NR,beginnormal_vertex:LR,bsdfs:OR,iridescence_fragment:FR,bumpmap_pars_fragment:UR,clipping_planes_fragment:kR,clipping_planes_pars_fragment:BR,clipping_planes_pars_vertex:VR,clipping_planes_vertex:zR,color_fragment:HR,color_pars_fragment:GR,color_pars_vertex:WR,color_vertex:jR,common:$R,cube_uv_reflection_fragment:qR,defaultnormal_vertex:XR,displacementmap_pars_vertex:YR,displacementmap_vertex:ZR,emissivemap_fragment:JR,emissivemap_pars_fragment:KR,colorspace_fragment:QR,colorspace_pars_fragment:e1,envmap_fragment:t1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:g1,envmap_vertex:s1,fog_vertex:o1,fog_pars_vertex:a1,fog_fragment:c1,fog_pars_fragment:l1,gradientmap_pars_fragment:u1,lightmap_fragment:d1,lightmap_pars_fragment:h1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:v1,lights_toon_pars_fragment:y1,lights_phong_fragment:_1,lights_phong_pars_fragment:x1,lights_physical_fragment:M1,lights_physical_pars_fragment:w1,lights_fragment_begin:b1,lights_fragment_maps:E1,lights_fragment_end:S1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:A1,logdepthbuf_vertex:D1,map_fragment:I1,map_pars_fragment:R1,map_particle_fragment:P1,map_particle_pars_fragment:N1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:O1,morphinstance_vertex:F1,morphcolor_vertex:U1,morphnormal_vertex:k1,morphtarget_pars_vertex:B1,morphtarget_vertex:V1,normal_fragment_begin:z1,normal_fragment_maps:H1,normal_pars_fragment:G1,normal_pars_vertex:W1,normal_vertex:j1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:Y1,iridescence_pars_fragment:Z1,opaque_fragment:J1,packing:K1,premultiplied_alpha_fragment:Q1,project_vertex:eP,dithering_fragment:tP,dithering_pars_fragment:nP,roughnessmap_fragment:iP,roughnessmap_pars_fragment:rP,shadowmap_pars_fragment:sP,shadowmap_pars_vertex:oP,shadowmap_vertex:aP,shadowmask_pars_fragment:cP,skinbase_vertex:lP,skinning_pars_vertex:uP,skinning_vertex:dP,skinnormal_vertex:hP,specularmap_fragment:fP,specularmap_pars_fragment:pP,tonemapping_fragment:mP,tonemapping_pars_fragment:gP,transmission_fragment:vP,transmission_pars_fragment:yP,uv_pars_fragment:_P,uv_pars_vertex:xP,uv_vertex:MP,worldpos_vertex:wP,background_vert:bP,background_frag:EP,backgroundCube_vert:SP,backgroundCube_frag:TP,cube_vert:CP,cube_frag:AP,depth_vert:DP,depth_frag:IP,distanceRGBA_vert:RP,distanceRGBA_frag:PP,equirect_vert:NP,equirect_frag:LP,linedashed_vert:OP,linedashed_frag:FP,meshbasic_vert:UP,meshbasic_frag:kP,meshlambert_vert:BP,meshlambert_frag:VP,meshmatcap_vert:zP,meshmatcap_frag:HP,meshnormal_vert:GP,meshnormal_frag:WP,meshphong_vert:jP,meshphong_frag:$P,meshphysical_vert:qP,meshphysical_frag:XP,meshtoon_vert:YP,meshtoon_frag:ZP,points_vert:JP,points_frag:KP,shadow_vert:QP,shadow_frag:eN,sprite_vert:tN,sprite_frag:nN},ne={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ai={basic:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([ne.points,ne.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([ne.common,ne.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([ne.sprite,ne.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:qt([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:qt([ne.lights,ne.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ai.physical={uniforms:qt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ul={r:0,b:0,g:0},Ur=new ro,iN=new Ft;function rN(n,e,t,i,r,s,o){let a=new rt(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let S=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?y(a,c):M&&M.isColor&&(y(M,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===cu)?(u===void 0&&(u=new Zt(new ya(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:oo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ur.copy(f.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iN.makeRotationFromEuler(Ur)),u.material.toneMapped=lt.getTransfer(M.colorSpace)!==ft,(d!==M||h!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Zt(new ao(2,2),new Jt({name:"BackgroundMaterial",uniforms:oo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,f){p.getRGB(Ul,nM(n)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:g}}function sN(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(D,G,z,$,H){let j=!1;if(o){let q=y($,z,G);l!==q&&(l=q,m(l.object)),j=f(D,$,z,H),j&&S(D,$,z,H)}else{let q=G.wireframe===!0;(l.geometry!==$.id||l.program!==z.id||l.wireframe!==q)&&(l.geometry=$.id,l.program=z.id,l.wireframe=q,j=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,B(D,G,z,$),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,G,z){let $=z.wireframe===!0,H=a[D.id];H===void 0&&(H={},a[D.id]=H);let j=H[G.id];j===void 0&&(j={},H[G.id]=j);let q=j[$];return q===void 0&&(q=p(h()),j[$]=q),q}function p(D){let G=[],z=[],$=[];for(let H=0;H<r;H++)G[H]=0,z[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,G,z,$){let H=l.attributes,j=G.attributes,q=0,ie=z.getAttributes();for(let de in ie)if(ie[de].location>=0){let k=H[de],Y=j[de];if(Y===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),k===void 0||k.attribute!==Y||Y&&k.data!==Y.data)return!0;q++}return l.attributesNum!==q||l.index!==$}function S(D,G,z,$){let H={},j=G.attributes,q=0,ie=z.getAttributes();for(let de in ie)if(ie[de].location>=0){let k=j[de];k===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));let Y={};Y.attribute=k,k&&k.data&&(Y.data=k.data),H[de]=Y,q++}l.attributes=H,l.attributesNum=q,l.index=$}function M(){let D=l.newAttributes;for(let G=0,z=D.length;G<z;G++)D[G]=0}function b(D){I(D,0)}function I(D,G){let z=l.newAttributes,$=l.enabledAttributes,H=l.attributeDivisors;z[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),H[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),H[D]=G)}function C(){let D=l.newAttributes,G=l.enabledAttributes;for(let z=0,$=G.length;z<$;z++)G[z]!==D[z]&&(n.disableVertexAttribArray(z),G[z]=0)}function T(D,G,z,$,H,j,q){q===!0?n.vertexAttribIPointer(D,G,z,H,j):n.vertexAttribPointer(D,G,z,$,H,j)}function B(D,G,z,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let H=$.attributes,j=z.getAttributes(),q=G.defaultAttributeValues;for(let ie in j){let de=j[ie];if(de.location>=0){let Oe=H[ie];if(Oe===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Oe=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Oe=D.instanceColor)),Oe!==void 0){let k=Oe.normalized,Y=Oe.itemSize,ue=t.get(Oe);if(ue===void 0)continue;let Ce=ue.buffer,ve=ue.type,he=ue.bytesPerElement,at=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||Oe.gpuType===$x);if(Oe.isInterleavedBufferAttribute){let Ae=Oe.data,P=Ae.stride,Ut=Oe.offset;if(Ae.isInstancedInterleavedBuffer){for(let _e=0;_e<de.locationSize;_e++)I(de.location+_e,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let _e=0;_e<de.locationSize;_e++)b(de.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let _e=0;_e<de.locationSize;_e++)T(de.location+_e,Y/de.locationSize,ve,k,P*he,(Ut+Y/de.locationSize*_e)*he,at)}else{if(Oe.isInstancedBufferAttribute){for(let Ae=0;Ae<de.locationSize;Ae++)I(de.location+Ae,Oe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ae=0;Ae<de.locationSize;Ae++)b(de.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<de.locationSize;Ae++)T(de.location+Ae,Y/de.locationSize,ve,k,Y*he,Y/de.locationSize*Ae*he,at)}}else if(q!==void 0){let k=q[ie];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(de.location,k);break;case 3:n.vertexAttrib3fv(de.location,k);break;case 4:n.vertexAttrib4fv(de.location,k);break;default:n.vertexAttrib1fv(de.location,k)}}}}C()}function K(){ee();for(let D in a){let G=a[D];for(let z in G){let $=G[z];for(let H in $)g($[H].object),delete $[H];delete G[z]}delete a[D]}}function _(D){if(a[D.id]===void 0)return;let G=a[D.id];for(let z in G){let $=G[z];for(let H in $)g($[H].object),delete $[H];delete G[z]}delete a[D.id]}function E(D){for(let G in a){let z=a[G];if(z[D.id]===void 0)continue;let $=z[D.id];for(let H in $)g($[H].object),delete $[H];delete z[D.id]}}function ee(){J(),u=!0,l!==c&&(l=c,m(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:J,dispose:K,releaseStatesOfGeometry:_,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:b,disableUnusedAttributes:C}}function oN(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function aN(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,b=o||e.has("OES_texture_float"),I=M&&b,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:I,maxSamples:C}}function cN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ei,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,M=S*4,b=f.clippingState||null;c.value=b,b=u(g,h,M,m);for(let I=0;I!==M;++I)b[I]=t[I];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let f=m+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,b=m;M!==y;++M,b+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function lN(n){let e=new WeakMap;function t(o,a){return a===pp?o.mapping=to:a===mp&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===pp||a===mp)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var _a=class extends tu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ys=4,wx=[.125,.215,.35,.446,.526,.582],zr=20,ap=new _a,bx=new rt,cp=null,lp=0,up=0,Br=(1+Math.sqrt(5))/2,qs=1/Br,Ex=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Br,qs),new F(0,Br,-qs),new F(qs,0,Br),new F(-qs,0,Br),new F(Br,qs,0),new F(-Br,qs,0)],ru=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){cp=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cp,lp,up),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cp=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:jr,format:$n,colorSpace:ar,depthBuffer:!1},r=Sx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sx(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uN(s)),this._blurMaterial=dN(s,e,t)}return r}_compileMaterial(e){let t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,ap)}_sceneToCubeUV(e,t,i,r){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(bx),u.toneMapping=nr,u.autoClear=!1;let m=new Kl({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Zt(new ya,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(bx),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let M=this._cubeSize;kl(r,S*M,f>2?M:0,M,M),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;kl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ap)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ex[(r-1)%Ex.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Zt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zr-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):zr;p>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zr}`);let f=[],S=0;for(let T=0;T<zr;++T){let B=T/y,K=Math.exp(-B*B/2);f.push(K),T===0?S+=K:T<p&&(S+=2*K)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let b=this._sizeLods[r],I=3*b*(r>M-Ys?r-M+Ys:0),C=4*(this._cubeSize-b);kl(t,I,C,3*b,2*b),c.setRenderTarget(t),c.render(d,ap)}};function uN(n){let e=[],t=[],i=[],r=n,s=n-Ys+1+wx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ys?c=wx[o-n+Ys-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,f=1,S=new Float32Array(y*g*m),M=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,B=C>2?0:-1,K=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];S.set(K,y*g*C),M.set(h,p*g*C);let _=[C,C,C,C,C,C];b.set(_,f*g*C)}let I=new Ai;I.setAttribute("position",new Rn(S,y)),I.setAttribute("uv",new Rn(M,p)),I.setAttribute("faceIndex",new Rn(b,f)),e.push(I),r>Ys&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sx(n,e,t){let i=new qn(n,e,t);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dN(n,e,t){let i=new Float32Array(zr),r=new F(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zp(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Tx(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Cx(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Zp(){return`

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
	`}function hN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===pp||c===mp,u=c===to||c===no;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ru(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new ru(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pN(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let S=m.array;y=m.version;for(let M=0,b=S.length;M<b;M+=3){let I=S[M+0],C=S[M+1],T=S[M+2];h.push(I,C,C,T,T,I)}}else if(g!==void 0){let S=g.array;y=g.version;for(let M=0,b=S.length/3-1;M<b;M+=3){let I=M+0,C=M+1,T=M+2;h.push(I,C,C,T,T,I)}}else return;let p=new(eM(h)?eu:Ql)(h,1);p.version=y;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function mN(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,y){if(y===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,y),t.update(g,s,y)}function h(m,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,y);let f=0;for(let S=0;S<y;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function gN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vN(n,e){return n[0]-e[0]}function yN(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _N(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==y){let J=function(){E.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();let f=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],T=0;f===!0&&(T=1),S===!0&&(T=2),M===!0&&(T=3);let B=u.attributes.position.count*T,K=1;B>e.maxTextureSize&&(K=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);let _=new Float32Array(B*K*4*y),E=new Zl(_,B,K,y);E.type=Ti,E.needsUpdate=!0;let ee=T*4;for(let D=0;D<y;D++){let G=b[D],z=I[D],$=C[D],H=B*K*4*D;for(let j=0;j<G.count;j++){let q=j*ee;f===!0&&(o.fromBufferAttribute(G,j),_[H+q+0]=o.x,_[H+q+1]=o.y,_[H+q+2]=o.z,_[H+q+3]=0),S===!0&&(o.fromBufferAttribute(z,j),_[H+q+4]=o.x,_[H+q+5]=o.y,_[H+q+6]=o.z,_[H+q+7]=0),M===!0&&(o.fromBufferAttribute($,j),_[H+q+8]=o.x,_[H+q+9]=o.y,_[H+q+10]=o.z,_[H+q+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:E,size:new it(B,K)},s.set(u,p),u.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let f=0;for(let M=0;M<h.length;M++)f+=h[M];let S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let b=0;b<g;b++)y[b]=[b,0];i[u.id]=y}for(let b=0;b<g;b++){let I=y[b];I[0]=b,I[1]=h[b]}y.sort(yN);for(let b=0;b<8;b++)b<g&&y[b][1]?(a[b][0]=y[b][0],a[b][1]=y[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(vN);let p=u.morphAttributes.position,f=u.morphAttributes.normal,S=0;for(let b=0;b<8;b++){let I=a[b],C=I[0],T=I[1];C!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+b)!==p[C]&&u.setAttribute("morphTarget"+b,p[C]),f&&u.getAttribute("morphNormal"+b)!==f[C]&&u.setAttribute("morphNormal"+b,f[C]),r[b]=T,S+=T):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),f&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}let M=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function xN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var su=class extends Yr{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Wr,u!==Wr&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wr&&(i=tr),i===void 0&&u===io&&(i=Gr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rM=new Yr,sM=new su(1,1);sM.compareFunction=Qx;var oM=new Zl,aM=new wp,cM=new nu,Ax=[],Dx=[],Ix=new Float32Array(16),Rx=new Float32Array(9),Px=new Float32Array(4);function uo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Ax[r];if(s===void 0&&(s=new Float32Array(r),Ax[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uu(n,e){let t=Dx[e];t===void 0&&(t=new Int32Array(e),Dx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function bN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function EN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function SN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(It(t,i))return;Px.set(i),n.uniformMatrix2fv(this.addr,!1,Px),Rt(t,i)}}function TN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(It(t,i))return;Rx.set(i),n.uniformMatrix3fv(this.addr,!1,Rx),Rt(t,i)}}function CN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(It(t,i))return;Ix.set(i),n.uniformMatrix4fv(this.addr,!1,Ix),Rt(t,i)}}function AN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function IN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function RN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function PN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function LN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function ON(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function FN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?sM:rM;t.setTexture2D(e||s,r)}function UN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||aM,r)}function kN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cM,r)}function BN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||oM,r)}function VN(n){switch(n){case 5126:return MN;case 35664:return wN;case 35665:return bN;case 35666:return EN;case 35674:return SN;case 35675:return TN;case 35676:return CN;case 5124:case 35670:return AN;case 35667:case 35671:return DN;case 35668:case 35672:return IN;case 35669:case 35673:return RN;case 5125:return PN;case 36294:return NN;case 36295:return LN;case 36296:return ON;case 35678:case 36198:case 36298:case 36306:case 35682:return FN;case 35679:case 36299:case 36307:return UN;case 35680:case 36300:case 36308:case 36293:return kN;case 36289:case 36303:case 36311:case 36292:return BN}}function zN(n,e){n.uniform1fv(this.addr,e)}function HN(n,e){let t=uo(e,this.size,2);n.uniform2fv(this.addr,t)}function GN(n,e){let t=uo(e,this.size,3);n.uniform3fv(this.addr,t)}function WN(n,e){let t=uo(e,this.size,4);n.uniform4fv(this.addr,t)}function jN(n,e){let t=uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $N(n,e){let t=uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qN(n,e){let t=uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XN(n,e){n.uniform1iv(this.addr,e)}function YN(n,e){n.uniform2iv(this.addr,e)}function ZN(n,e){n.uniform3iv(this.addr,e)}function JN(n,e){n.uniform4iv(this.addr,e)}function KN(n,e){n.uniform1uiv(this.addr,e)}function QN(n,e){n.uniform2uiv(this.addr,e)}function eL(n,e){n.uniform3uiv(this.addr,e)}function tL(n,e){n.uniform4uiv(this.addr,e)}function nL(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rM,s[o])}function iL(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||aM,s[o])}function rL(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cM,s[o])}function sL(n,e,t){let i=this.cache,r=e.length,s=uu(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||oM,s[o])}function oL(n){switch(n){case 5126:return zN;case 35664:return HN;case 35665:return GN;case 35666:return WN;case 35674:return jN;case 35675:return $N;case 35676:return qN;case 5124:case 35670:return XN;case 35667:case 35671:return YN;case 35668:case 35672:return ZN;case 35669:case 35673:return JN;case 5125:return KN;case 36294:return QN;case 36295:return eL;case 36296:return tL;case 35678:case 36198:case 36298:case 36306:case 35682:return nL;case 35679:case 36299:case 36307:return iL;case 35680:case 36300:case 36308:case 36293:return rL;case 36289:case 36303:case 36311:case 36292:return sL}}var Tp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VN(t.type)}},Cp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oL(t.type)}},Ap=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},dp=/(\w+)(\])?(\[|\.)?/g;function Nx(n,e){n.seq.push(e),n.map[e.id]=e}function aL(n,e,t){let i=n.name,r=i.length;for(dp.lastIndex=0;;){let s=dp.exec(i),o=dp.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Nx(t,l===void 0?new Tp(a,n,e):new Cp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ap(a),Nx(t,d)),t=d}}}var eo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);aL(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Lx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var cL=37297,lL=0;function uL(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dL(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===jl&&t===Wl?i="LinearDisplayP3ToLinearSRGB":e===Wl&&t===jl&&(i="LinearSRGBToLinearDisplayP3"),n){case ar:case lu:return[i,"LinearTransferOETF"];case oi:case Xp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ox(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uL(n.getShaderSource(e),o)}else return r}function hL(n,e){let t=dL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fL(n,e){let t;switch(e){case AI:t="Linear";break;case DI:t="Reinhard";break;case II:t="OptimizedCineon";break;case RI:t="ACESFilmic";break;case NI:t="AgX";break;case LI:t="Neutral";break;case PI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zs).join(`
`)}function mL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function gL(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vL(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zs(n){return n!==""}function Fx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ux(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(n){return n.replace(yL,xL)}var _L=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xL(n,e){let t=Ve[e];if(t===void 0){let i=_L.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dp(t)}var ML=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(n){return n.replace(ML,wL)}function wL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nI?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function EL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function TL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jx:e="ENVMAP_BLENDING_MULTIPLY";break;case TI:e="ENVMAP_BLENDING_MIX";break;case CI:e="ENVMAP_BLENDING_ADD";break}return e}function CL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=bL(t),l=EL(t),u=SL(t),d=TL(t),h=CL(t),m=t.isWebGL2?"":pL(t),g=mL(t),y=gL(s),p=r.createProgram(),f,S,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Zs).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Zs).join(`
`),S.length>0&&(S+=`
`)):(f=[Bx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),S=[m,Bx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Ve.tonemapping_pars_fragment:"",t.toneMapping!==nr?fL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,hL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Dp(o),o=Fx(o,t),o=Ux(o,t),a=Dp(a),a=Fx(a,t),a=Ux(a,t),o=kx(o),a=kx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let b=M+f+o,I=M+S+a,C=Lx(r,r.VERTEX_SHADER,b),T=Lx(r,r.FRAGMENT_SHADER,I);r.attachShader(p,C),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B(ee){if(n.debug.checkShaderErrors){let J=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(T).trim(),z=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,T);else{let H=Ox(r,C,"vertex"),j=Ox(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+J+`
`+H+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||G==="")&&($=!1);$&&(ee.diagnostics={runnable:z,programLog:J,vertexShader:{log:D,prefix:f},fragmentShader:{log:G,prefix:S}})}r.deleteShader(C),r.deleteShader(T),K=new eo(r,p),_=vL(r,p)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let _;this.getAttributes=function(){return _===void 0&&B(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,cL)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lL++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=T,this}var DL=0,Ip=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Rp(e),t.set(e,i)),i}},Rp=class{constructor(e){this.id=DL++,this.code=e,this.usedTimes=0}};function IL(n,e,t,i,r,s,o){let a=new Jl,c=new Ip,l=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,E,ee,J,D){let G=J.fog,z=D.geometry,$=_.isMeshStandardMaterial?J.environment:null,H=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),j=H&&H.mapping===cu?H.image.height:null,q=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=ie!==void 0?ie.length:0,Oe=0;z.morphAttributes.position!==void 0&&(Oe=1),z.morphAttributes.normal!==void 0&&(Oe=2),z.morphAttributes.color!==void 0&&(Oe=3);let k,Y,ue,Ce;if(q){let dt=ai[q];k=dt.vertexShader,Y=dt.fragmentShader}else k=_.vertexShader,Y=_.fragmentShader,c.update(_),ue=c.getVertexShaderID(_),Ce=c.getFragmentShaderID(_);let ve=n.getRenderTarget(),he=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,Ae=!!_.map,P=!!_.matcap,Ut=!!H,_e=!!_.aoMap,je=!!_.lightMap,Me=!!_.bumpMap,Je=!!_.normalMap,He=!!_.displacementMap,qe=!!_.emissiveMap,_t=!!_.metalnessMap,w=!!_.roughnessMap,v=_.anisotropy>0,V=_.clearcoat>0,W=_.iridescence>0,Z=_.sheen>0,X=_.transmission>0,Fe=v&&!!_.anisotropyMap,be=V&&!!_.clearcoatMap,re=V&&!!_.clearcoatNormalMap,ae=V&&!!_.clearcoatRoughnessMap,Ue=W&&!!_.iridescenceMap,Q=W&&!!_.iridescenceThicknessMap,Et=Z&&!!_.sheenColorMap,Xe=Z&&!!_.sheenRoughnessMap,ye=!!_.specularMap,fe=!!_.specularColorMap,me=!!_.specularIntensityMap,Ke=X&&!!_.transmissionMap,Pe=X&&!!_.thicknessMap,pt=!!_.gradientMap,A=!!_.alphaMap,oe=_.alphaTest>0,L=!!_.alphaHash,te=!!_.extensions,ce=nr;_.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Ye={isWebGL2:d,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:Y,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:at,instancing:he,instancingColor:he&&D.instanceColor!==null,instancingMorph:he&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ar,alphaToCoverage:!!_.alphaToCoverage,map:Ae,matcap:P,envMap:Ut,envMapMode:Ut&&H.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:je,bumpMap:Me,normalMap:Je,displacementMap:m&&He,emissiveMap:qe,normalMapObjectSpace:Je&&_.normalMapType===$I,normalMapTangentSpace:Je&&_.normalMapType===jI,metalnessMap:_t,roughnessMap:w,anisotropy:v,anisotropyMap:Fe,clearcoat:V,clearcoatMap:be,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:W,iridescenceMap:Ue,iridescenceThicknessMap:Q,sheen:Z,sheenColorMap:Et,sheenRoughnessMap:Xe,specularMap:ye,specularColorMap:fe,specularIntensityMap:me,transmission:X,transmissionMap:Ke,thicknessMap:Pe,gradientMap:pt,opaque:_.transparent===!1&&_.blending===Ks&&_.alphaToCoverage===!1,alphaMap:A,alphaTest:oe,alphaHash:L,combine:_.combine,mapUv:Ae&&p(_.map.channel),aoMapUv:_e&&p(_.aoMap.channel),lightMapUv:je&&p(_.lightMap.channel),bumpMapUv:Me&&p(_.bumpMap.channel),normalMapUv:Je&&p(_.normalMap.channel),displacementMapUv:He&&p(_.displacementMap.channel),emissiveMapUv:qe&&p(_.emissiveMap.channel),metalnessMapUv:_t&&p(_.metalnessMap.channel),roughnessMapUv:w&&p(_.roughnessMap.channel),anisotropyMapUv:Fe&&p(_.anisotropyMap.channel),clearcoatMapUv:be&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(_.sheenRoughnessMap.channel),specularMapUv:ye&&p(_.specularMap.channel),specularColorMapUv:fe&&p(_.specularColorMap.channel),specularIntensityMapUv:me&&p(_.specularIntensityMap.channel),transmissionMapUv:Ke&&p(_.transmissionMap.channel),thicknessMapUv:Pe&&p(_.thicknessMap.channel),alphaMapUv:A&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ae||A),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Si,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:te&&_.extensions.derivatives===!0,extensionFragDepth:te&&_.extensions.fragDepth===!0,extensionDrawBuffers:te&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&_.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function S(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let ee in _.defines)E.push(ee),E.push(_.defines[ee]);return _.isRawShaderMaterial===!1&&(M(E,_),b(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function M(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.instancingMorph&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.normalMapObjectSpace&&a.enable(7),E.normalMapTangentSpace&&a.enable(8),E.clearcoat&&a.enable(9),E.iridescence&&a.enable(10),E.alphaTest&&a.enable(11),E.vertexColors&&a.enable(12),E.vertexAlphas&&a.enable(13),E.vertexUv1s&&a.enable(14),E.vertexUv2s&&a.enable(15),E.vertexUv3s&&a.enable(16),E.vertexTangents&&a.enable(17),E.anisotropy&&a.enable(18),E.alphaHash&&a.enable(19),E.batching&&a.enable(20),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){let E=y[_.type],ee;if(E){let J=ai[E];ee=Yp.clone(J.uniforms)}else ee=_.uniforms;return ee}function C(_,E){let ee;for(let J=0,D=u.length;J<D;J++){let G=u[J];if(G.cacheKey===E){ee=G,++ee.usedTimes;break}}return ee===void 0&&(ee=new AL(n,E,_,s),u.push(ee)),ee}function T(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function B(_){c.remove(_)}function K(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:I,acquireProgram:C,releaseProgram:T,releaseShaderCache:B,programs:u,dispose:K}}function RL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function PL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,y,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,h,m,g,y,p){let f=o(d,h,m,g,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,y,p){let f=o(d,h,m,g,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||PL),i.length>1&&i.sort(h||Vx),r.length>1&&r.sort(h||Vx)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function NL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new zx,n.set(i,[o])):r>=s.length?(o=new zx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new rt};break;case"SpotLight":t={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function OL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var FL=0;function UL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kL(n,e){let t=new LL,i=OL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let s=new F,o=new Ft,a=new Ft;function c(u,d){let h=0,m=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,p=0,f=0,S=0,M=0,b=0,I=0,C=0,T=0,B=0,K=0;u.sort(UL);let _=d===!0?Math.PI:1;for(let ee=0,J=u.length;ee<J;ee++){let D=u[ee],G=D.color,z=D.intensity,$=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*z*_,m+=G.g*z*_,g+=G.b*z*_;else if(D.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],z);K++}else if(D.isDirectionalLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*_),D.castShadow){let q=D.shadow,ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=D.shadow.matrix,b++}r.directional[y]=j,y++}else if(D.isSpotLight){let j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(z*_),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[f]=j;let q=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,q.updateMatrices(D),D.castShadow&&B++),r.spotLightMatrix[f]=q.matrix,D.castShadow){let ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.spotShadow[f]=ie,r.spotShadowMap[f]=H,C++}f++}else if(D.isRectAreaLight){let j=t.get(D);j.color.copy(G).multiplyScalar(z),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=j,S++}else if(D.isPointLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*_),j.distance=D.distance,j.decay=D.decay,D.castShadow){let q=D.shadow,ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=D.shadow.matrix,I++}r.point[p]=j,p++}else if(D.isHemisphereLight){let j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(z*_),j.groundColor.copy(D.groundColor).multiplyScalar(z*_),r.hemi[M]=j,M++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let E=r.hash;(E.directionalLength!==y||E.pointLength!==p||E.spotLength!==f||E.rectAreaLength!==S||E.hemiLength!==M||E.numDirectionalShadows!==b||E.numPointShadows!==I||E.numSpotShadows!==C||E.numSpotMaps!==T||E.numLightProbes!==K)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+T-B,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=K,E.directionalLength=y,E.pointLength=p,E.spotLength=f,E.rectAreaLength=S,E.hemiLength=M,E.numDirectionalShadows=b,E.numPointShadows=I,E.numSpotShadows=C,E.numSpotMaps=T,E.numLightProbes=K,r.version=FL++)}function l(u,d){let h=0,m=0,g=0,y=0,p=0,f=d.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){let b=u[S];if(b.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(b.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function Hx(n,e){let t=new kL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function BL(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new Hx(n,e),t.set(s,[c])):o>=a.length?(c=new Hx(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Pp=class extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Np=class extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},VL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zL=`uniform sampler2D shadow_pass;
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
}`;function HL(n,e,t){let i=new iu,r=new it,s=new it,o=new zt,a=new Pp({depthPacking:WI}),c=new Np,l={},u=t.maxTextureSize,d={[rr]:on,[on]:rr,[Si]:Si},h=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:VL,fragmentShader:zL}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ai;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Zt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wx;let f=this.type;this.render=function(C,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let K=n.getRenderTarget(),_=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(ci),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);let J=f!==bi&&this.type===bi,D=f===bi&&this.type!==bi;for(let G=0,z=C.length;G<z;G++){let $=C[G],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let j=H.getFrameExtents();if(r.multiply(j),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,H.mapSize.y=s.y)),H.map===null||J===!0||D===!0){let ie=this.type!==bi?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new qn(r.x,r.y,ie),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let q=H.getViewportCount();for(let ie=0;ie<q;ie++){let de=H.getViewport(ie);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),ee.viewport(o),H.updateMatrices($,ie),i=H.getFrustum(),b(T,B,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===bi&&S(H,B),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(K,_,E)};function S(C,T){let B=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qn(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,B,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,B,m,y,null)}function M(C,T,B,K){let _=null,E=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)_=E;else if(_=B.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let ee=_.uuid,J=T.uuid,D=l[ee];D===void 0&&(D={},l[ee]=D);let G=D[J];G===void 0&&(G=_.clone(),D[J]=G,T.addEventListener("dispose",I)),_=G}if(_.visible=T.visible,_.wireframe=T.wireframe,K===bi?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let ee=n.properties.get(_);ee.light=B}return _}function b(C,T,B,K,_){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);let J=e.update(C),D=C.material;if(Array.isArray(D)){let G=J.groups;for(let z=0,$=G.length;z<$;z++){let H=G[z],j=D[H.materialIndex];if(j&&j.visible){let q=M(C,j,K,_);C.onBeforeShadow(n,C,T,B,J,q,H),n.renderBufferDirect(B,null,J,q,C,H),C.onAfterShadow(n,C,T,B,J,q,H)}}}else if(D.visible){let G=M(C,D,K,_);C.onBeforeShadow(n,C,T,B,J,G,null),n.renderBufferDirect(B,null,J,G,C,null),C.onAfterShadow(n,C,T,B,J,G,null)}}let ee=C.children;for(let J=0,D=ee.length;J<D;J++)b(ee[J],T,B,K,_)}function I(C){C.target.removeEventListener("dispose",I);for(let B in l){let K=l[B],_=C.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}function GL(n,e,t){let i=t.isWebGL2;function r(){let A=!1,oe=new zt,L=null,te=new zt(0,0,0,0);return{setMask:function(ce){L!==ce&&!A&&(n.colorMask(ce,ce,ce,ce),L=ce)},setLocked:function(ce){A=ce},setClear:function(ce,Ye,dt,kt,mn){mn===!0&&(ce*=kt,Ye*=kt,dt*=kt),oe.set(ce,Ye,dt,kt),te.equals(oe)===!1&&(n.clearColor(ce,Ye,dt,kt),te.copy(oe))},reset:function(){A=!1,L=null,te.set(-1,0,0,0)}}}function s(){let A=!1,oe=null,L=null,te=null;return{setTest:function(ce){ce?he(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!A&&(n.depthMask(ce),oe=ce)},setFunc:function(ce){if(L!==ce){switch(ce){case _I:n.depthFunc(n.NEVER);break;case xI:n.depthFunc(n.ALWAYS);break;case MI:n.depthFunc(n.LESS);break;case Vl:n.depthFunc(n.LEQUAL);break;case wI:n.depthFunc(n.EQUAL);break;case bI:n.depthFunc(n.GEQUAL);break;case EI:n.depthFunc(n.GREATER);break;case SI:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}L=ce}},setLocked:function(ce){A=ce},setClear:function(ce){te!==ce&&(n.clearDepth(ce),te=ce)},reset:function(){A=!1,oe=null,L=null,te=null}}}function o(){let A=!1,oe=null,L=null,te=null,ce=null,Ye=null,dt=null,kt=null,mn=null;return{setTest:function(ht){A||(ht?he(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!A&&(n.stencilMask(ht),oe=ht)},setFunc:function(ht,jt,Yn){(L!==ht||te!==jt||ce!==Yn)&&(n.stencilFunc(ht,jt,Yn),L=ht,te=jt,ce=Yn)},setOp:function(ht,jt,Yn){(Ye!==ht||dt!==jt||kt!==Yn)&&(n.stencilOp(ht,jt,Yn),Ye=ht,dt=jt,kt=Yn)},setLocked:function(ht){A=ht},setClear:function(ht){mn!==ht&&(n.clearStencil(ht),mn=ht)},reset:function(){A=!1,oe=null,L=null,te=null,ce=null,Ye=null,dt=null,kt=null,mn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,M=null,b=null,I=null,C=null,T=null,B=null,K=new rt(0,0,0),_=0,E=!1,ee=null,J=null,D=null,G=null,z=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=j>=2);let ie=null,de={},Oe=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),Y=new zt().fromArray(Oe),ue=new zt().fromArray(k);function Ce(A,oe,L,te){let ce=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(A,Ye),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<L;dt++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(oe+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ye}let ve={};ve[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(n.DEPTH_TEST),c.setFunc(Vl),He(!1),qe(y_),he(n.CULL_FACE),Me(ci);function he(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function at(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function Ae(A,oe){return m[A]!==oe?(n.bindFramebuffer(A,oe),m[A]=oe,i&&(A===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=oe),A===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function P(A,oe){let L=y,te=!1;if(A){L=g.get(oe),L===void 0&&(L=[],g.set(oe,L));let ce=A.textures;if(L.length!==ce.length||L[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,dt=ce.length;Ye<dt;Ye++)L[Ye]=n.COLOR_ATTACHMENT0+Ye;L.length=ce.length,te=!0}}else L[0]!==n.BACK&&(L[0]=n.BACK,te=!0);if(te)if(t.isWebGL2)n.drawBuffers(L);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(L);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ut(A){return p!==A?(n.useProgram(A),p=A,!0):!1}let _e={[Vr]:n.FUNC_ADD,[rI]:n.FUNC_SUBTRACT,[sI]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[w_]=n.MIN,_e[b_]=n.MAX;else{let A=e.get("EXT_blend_minmax");A!==null&&(_e[w_]=A.MIN_EXT,_e[b_]=A.MAX_EXT)}let je={[oI]:n.ZERO,[aI]:n.ONE,[cI]:n.SRC_COLOR,[hp]:n.SRC_ALPHA,[pI]:n.SRC_ALPHA_SATURATE,[hI]:n.DST_COLOR,[uI]:n.DST_ALPHA,[lI]:n.ONE_MINUS_SRC_COLOR,[fp]:n.ONE_MINUS_SRC_ALPHA,[fI]:n.ONE_MINUS_DST_COLOR,[dI]:n.ONE_MINUS_DST_ALPHA,[mI]:n.CONSTANT_COLOR,[gI]:n.ONE_MINUS_CONSTANT_COLOR,[vI]:n.CONSTANT_ALPHA,[yI]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(A,oe,L,te,ce,Ye,dt,kt,mn,ht){if(A===ci){f===!0&&(at(n.BLEND),f=!1);return}if(f===!1&&(he(n.BLEND),f=!0),A!==iI){if(A!==S||ht!==E){if((M!==Vr||C!==Vr)&&(n.blendEquation(n.FUNC_ADD),M=Vr,C=Vr),ht)switch(A){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case __:n.blendFunc(n.ONE,n.ONE);break;case x_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case M_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case __:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case x_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case M_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,I=null,T=null,B=null,K.set(0,0,0),_=0,S=A,E=ht}return}ce=ce||oe,Ye=Ye||L,dt=dt||te,(oe!==M||ce!==C)&&(n.blendEquationSeparate(_e[oe],_e[ce]),M=oe,C=ce),(L!==b||te!==I||Ye!==T||dt!==B)&&(n.blendFuncSeparate(je[L],je[te],je[Ye],je[dt]),b=L,I=te,T=Ye,B=dt),(kt.equals(K)===!1||mn!==_)&&(n.blendColor(kt.r,kt.g,kt.b,mn),K.copy(kt),_=mn),S=A,E=!1}function Je(A,oe){A.side===Si?at(n.CULL_FACE):he(n.CULL_FACE);let L=A.side===on;oe&&(L=!L),He(L),A.blending===Ks&&A.transparent===!1?Me(ci):Me(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let te=A.stencilWrite;l.setTest(te),te&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),w(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(A){ee!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),ee=A)}function qe(A){A!==eI?(he(n.CULL_FACE),A!==J&&(A===y_?n.cullFace(n.BACK):A===tI?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),J=A}function _t(A){A!==D&&(H&&n.lineWidth(A),D=A)}function w(A,oe,L){A?(he(n.POLYGON_OFFSET_FILL),(G!==oe||z!==L)&&(n.polygonOffset(oe,L),G=oe,z=L)):at(n.POLYGON_OFFSET_FILL)}function v(A){A?he(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function V(A){A===void 0&&(A=n.TEXTURE0+$-1),ie!==A&&(n.activeTexture(A),ie=A)}function W(A,oe,L){L===void 0&&(ie===null?L=n.TEXTURE0+$-1:L=ie);let te=de[L];te===void 0&&(te={type:void 0,texture:void 0},de[L]=te),(te.type!==A||te.texture!==oe)&&(ie!==L&&(n.activeTexture(L),ie=L),n.bindTexture(A,oe||ve[A]),te.type=A,te.texture=oe)}function Z(){let A=de[ie];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Xe(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(A){Y.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Y.copy(A))}function me(A){ue.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ue.copy(A))}function Ke(A,oe){let L=d.get(oe);L===void 0&&(L=new WeakMap,d.set(oe,L));let te=L.get(A);te===void 0&&(te=n.getUniformBlockIndex(oe,A.name),L.set(A,te))}function Pe(A,oe){let te=d.get(oe).get(A);u.get(oe)!==te&&(n.uniformBlockBinding(oe,te,A.__bindingPointIndex),u.set(oe,te))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,de={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,M=null,b=null,I=null,C=null,T=null,B=null,K=new rt(0,0,0),_=0,E=!1,ee=null,J=null,D=null,G=null,z=null,Y.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:at,bindFramebuffer:Ae,drawBuffers:P,useProgram:Ut,setBlending:Me,setMaterial:Je,setFlipSided:He,setCullFace:qe,setLineWidth:_t,setPolygonOffset:w,setScissorTest:v,activeTexture:V,bindTexture:W,unbindTexture:Z,compressedTexImage2D:X,compressedTexImage3D:Fe,texImage2D:Xe,texImage3D:ye,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:Q,texStorage3D:Et,texSubImage2D:be,texSubImage3D:re,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ue,scissor:fe,viewport:me,reset:pt}}function WL(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,d=new WeakMap,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,v){return g?new OffscreenCanvas(w,v):ql("canvas")}function p(w,v,V,W){let Z=1,X=_t(w);if((X.width>W||X.height>W)&&(Z=W/Math.max(X.width,X.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Fe=v?xp:Math.floor,be=Fe(Z*X.width),re=Fe(Z*X.height);h===void 0&&(h=y(be,re));let ae=V?y(be,re):h;return ae.width=be,ae.height=re,ae.getContext("2d").drawImage(w,0,0,be,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+be+"x"+re+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function f(w){let v=_t(w);return ix(v.width)&&ix(v.height)}function S(w){return a?!1:w.wrapS!==jn||w.wrapT!==jn||w.minFilter!==Xt&&w.minFilter!==rn}function M(w,v){return w.generateMipmaps&&v&&w.minFilter!==Xt&&w.minFilter!==rn}function b(w){n.generateMipmap(w)}function I(w,v,V,W,Z=!1){if(a===!1)return v;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===n.RED&&(V===n.FLOAT&&(X=n.R32F),V===n.HALF_FLOAT&&(X=n.R16F),V===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.R8UI),V===n.UNSIGNED_SHORT&&(X=n.R16UI),V===n.UNSIGNED_INT&&(X=n.R32UI),V===n.BYTE&&(X=n.R8I),V===n.SHORT&&(X=n.R16I),V===n.INT&&(X=n.R32I)),v===n.RG&&(V===n.FLOAT&&(X=n.RG32F),V===n.HALF_FLOAT&&(X=n.RG16F),V===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RG8UI),V===n.UNSIGNED_SHORT&&(X=n.RG16UI),V===n.UNSIGNED_INT&&(X=n.RG32UI),V===n.BYTE&&(X=n.RG8I),V===n.SHORT&&(X=n.RG16I),V===n.INT&&(X=n.RG32I)),v===n.RGBA){let Fe=Z?Gl:lt.getTransfer(W);V===n.FLOAT&&(X=n.RGBA32F),V===n.HALF_FLOAT&&(X=n.RGBA16F),V===n.UNSIGNED_BYTE&&(X=Fe===ft?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function C(w,v,V){return M(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==Xt&&w.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){return w===Xt||w===S_||w===ua?n.NEAREST:n.LINEAR}function B(w){let v=w.target;v.removeEventListener("dispose",B),_(v),v.isVideoTexture&&d.delete(v)}function K(w){let v=w.target;v.removeEventListener("dispose",K),ee(v)}function _(w){let v=i.get(w);if(v.__webglInit===void 0)return;let V=w.source,W=m.get(V);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(w),Object.keys(W).length===0&&m.delete(V)}i.remove(w)}function E(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let V=w.source,W=m.get(V);delete W[v.__cacheKey],o.memory.textures--}function ee(w){let v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=w.textures;for(let W=0,Z=V.length;W<Z;W++){let X=i.get(V[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(V[W])}i.remove(w)}let J=0;function D(){J=0}function G(){let w=J;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),J+=1,w}function z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function $(w,v){let V=i.get(w);if(w.isVideoTexture&&He(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,w,v);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function H(w,v){let V=i.get(w);if(w.version>0&&V.__version!==w.version){ue(V,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function j(w,v){let V=i.get(w);if(w.version>0&&V.__version!==w.version){ue(V,w,v);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function q(w,v){let V=i.get(w);if(w.version>0&&V.__version!==w.version){Ce(V,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}let ie={[gp]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[vp]:n.MIRRORED_REPEAT},de={[Xt]:n.NEAREST,[S_]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Nf]:n.LINEAR_MIPMAP_NEAREST,[Hr]:n.LINEAR_MIPMAP_LINEAR},Oe={[qI]:n.NEVER,[QI]:n.ALWAYS,[XI]:n.LESS,[Qx]:n.LEQUAL,[YI]:n.EQUAL,[KI]:n.GEQUAL,[ZI]:n.GREATER,[JI]:n.NOTEQUAL};function k(w,v,V){if(v.type===Ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===Nf||v.magFilter===ua||v.magFilter===Hr||v.minFilter===rn||v.minFilter===Nf||v.minFilter===ua||v.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(n.texParameteri(w,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ie[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,de[v.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==jn||v.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Xt&&v.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==ua&&v.minFilter!==Hr||v.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===jr&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(w,v){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",B));let W=v.source,Z=m.get(W);Z===void 0&&(Z={},m.set(W,Z));let X=z(v);if(X!==w.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[X].usedTimes++;let Fe=Z[w.__cacheKey];Fe!==void 0&&(Z[w.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(v)),w.__cacheKey=X,w.__webglTexture=Z[X].texture}return V}function ue(w,v,V){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Z=Y(w,v),X=v.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+V);let Fe=i.get(X);if(X.version!==Fe.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);let be=lt.getPrimaries(lt.workingColorSpace),re=v.colorSpace===er?null:lt.getPrimaries(v.colorSpace),ae=v.colorSpace===er||be===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Ue=S(v)&&f(v.image)===!1,Q=p(v.image,Ue,!1,r.maxTextureSize);Q=qe(v,Q);let Et=f(Q)||a,Xe=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),fe=I(v.internalFormat,Xe,ye,v.colorSpace,v.isVideoTexture);k(W,v,Et);let me,Ke=v.mipmaps,Pe=a&&v.isVideoTexture!==!0&&fe!==Kx,pt=Fe.__version===void 0||Z===!0,A=X.dataReady,oe=C(v,Q,Et);if(v.isDepthTexture)fe=n.DEPTH_COMPONENT,a?v.type===Ti?fe=n.DEPTH_COMPONENT32F:v.type===tr?fe=n.DEPTH_COMPONENT24:v.type===Gr?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:v.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Wr&&fe===n.DEPTH_COMPONENT&&v.type!==qp&&v.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=tr,ye=s.convert(v.type)),v.format===io&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,v.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Gr,ye=s.convert(v.type))),pt&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,Xe,ye,null));else if(v.isDataTexture)if(Ke.length>0&&Et){Pe&&pt&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Ke[0].width,Ke[0].height);for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],Pe?A&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,me.width,me.height,Xe,ye,me.data):t.texImage2D(n.TEXTURE_2D,L,fe,me.width,me.height,0,Xe,ye,me.data);v.generateMipmaps=!1}else Pe?(pt&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Q.width,Q.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Xe,ye,Q.data)):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,Xe,ye,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,fe,Ke[0].width,Ke[0].height,Q.depth);for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],v.format!==$n?Xe!==null?Pe?A&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,me.width,me.height,Q.depth,Xe,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,L,fe,me.width,me.height,Q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,me.width,me.height,Q.depth,Xe,ye,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,L,fe,me.width,me.height,Q.depth,0,Xe,ye,me.data)}else{Pe&&pt&&t.texStorage2D(n.TEXTURE_2D,oe,fe,Ke[0].width,Ke[0].height);for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],v.format!==$n?Xe!==null?Pe?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,L,0,0,me.width,me.height,Xe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,L,fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?A&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,me.width,me.height,Xe,ye,me.data):t.texImage2D(n.TEXTURE_2D,L,fe,me.width,me.height,0,Xe,ye,me.data)}else if(v.isDataArrayTexture)Pe?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,fe,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xe,ye,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,Xe,ye,Q.data);else if(v.isData3DTexture)Pe?(pt&&t.texStorage3D(n.TEXTURE_3D,oe,fe,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xe,ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,Xe,ye,Q.data);else if(v.isFramebufferTexture){if(pt)if(Pe)t.texStorage2D(n.TEXTURE_2D,oe,fe,Q.width,Q.height);else{let L=Q.width,te=Q.height;for(let ce=0;ce<oe;ce++)t.texImage2D(n.TEXTURE_2D,ce,fe,L,te,0,Xe,ye,null),L>>=1,te>>=1}}else if(Ke.length>0&&Et){if(Pe&&pt){let L=_t(Ke[0]);t.texStorage2D(n.TEXTURE_2D,oe,fe,L.width,L.height)}for(let L=0,te=Ke.length;L<te;L++)me=Ke[L],Pe?A&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,Xe,ye,me):t.texImage2D(n.TEXTURE_2D,L,fe,Xe,ye,me);v.generateMipmaps=!1}else if(Pe){if(pt){let L=_t(Q);t.texStorage2D(n.TEXTURE_2D,oe,fe,L.width,L.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,fe,Xe,ye,Q);M(v,Et)&&b(W),Fe.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ce(w,v,V){if(v.image.length!==6)return;let W=Y(w,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+V);let X=i.get(Z);if(Z.version!==X.__version||W===!0){t.activeTexture(n.TEXTURE0+V);let Fe=lt.getPrimaries(lt.workingColorSpace),be=v.colorSpace===er?null:lt.getPrimaries(v.colorSpace),re=v.colorSpace===er||Fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let L=0;L<6;L++)!ae&&!Ue?Q[L]=p(v.image[L],!1,!0,r.maxCubemapSize):Q[L]=Ue?v.image[L].image:v.image[L],Q[L]=qe(v,Q[L]);let Et=Q[0],Xe=f(Et)||a,ye=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),me=I(v.internalFormat,ye,fe,v.colorSpace),Ke=a&&v.isVideoTexture!==!0,Pe=X.__version===void 0||W===!0,pt=Z.dataReady,A=C(v,Et,Xe);k(n.TEXTURE_CUBE_MAP,v,Xe);let oe;if(ae){Ke&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,A,me,Et.width,Et.height);for(let L=0;L<6;L++){oe=Q[L].mipmaps;for(let te=0;te<oe.length;te++){let ce=oe[te];v.format!==$n?ye!==null?Ke?pt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,0,0,ce.width,ce.height,ye,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,0,0,ce.width,ce.height,ye,fe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te,me,ce.width,ce.height,0,ye,fe,ce.data)}}}else{if(oe=v.mipmaps,Ke&&Pe){oe.length>0&&A++;let L=_t(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,A,me,L.width,L.height)}for(let L=0;L<6;L++)if(Ue){Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Q[L].width,Q[L].height,ye,fe,Q[L].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,me,Q[L].width,Q[L].height,0,ye,fe,Q[L].data);for(let te=0;te<oe.length;te++){let Ye=oe[te].image[L].image;Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,0,0,Ye.width,Ye.height,ye,fe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,me,Ye.width,Ye.height,0,ye,fe,Ye.data)}}else{Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ye,fe,Q[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,me,ye,fe,Q[L]);for(let te=0;te<oe.length;te++){let ce=oe[te];Ke?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,0,0,ye,fe,ce.image[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,te+1,me,ye,fe,ce.image[L])}}}M(v,Xe)&&b(n.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ve(w,v,V,W,Z,X){let Fe=s.convert(V.format,V.colorSpace),be=s.convert(V.type),re=I(V.internalFormat,Fe,be,V.colorSpace);if(!i.get(v).__hasExternalTextures){let Ue=Math.max(1,v.width>>X),Q=Math.max(1,v.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,re,Ue,Q,v.depth,0,Fe,be,null):t.texImage2D(Z,X,re,Ue,Q,0,Fe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,i.get(V).__webglTexture,0,Me(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,i.get(V).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(w,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let W=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||Je(v)){let Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Ti?W=n.DEPTH_COMPONENT32F:Z.type===tr&&(W=n.DEPTH_COMPONENT24));let X=Me(v);Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,W,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,W,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let W=Me(v);V&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,v.width,v.height):Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let X=W[Z],Fe=s.convert(X.format,X.colorSpace),be=s.convert(X.type),re=I(X.internalFormat,Fe,be,X.colorSpace),ae=Me(v);V&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,re,v.width,v.height):Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);let W=i.get(v.depthTexture).__webglTexture,Z=Me(v);if(v.depthTexture.format===Wr)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===io)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ae(w){let v=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");at(v.__webglFramebuffer,w)}else if(V){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]=n.createRenderbuffer(),he(v.__webglDepthbuffer[W],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(w,v,V){let W=i.get(w);v!==void 0&&ve(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ae(w)}function Ut(w){let v=w.texture,V=i.get(w),W=i.get(v);w.addEventListener("dispose",K);let Z=w.textures,X=w.isWebGLCubeRenderTarget===!0,Fe=Z.length>1,be=f(w)||a;if(Fe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),X){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let ae=0;ae<v.mipmaps.length;ae++)V.__webglFramebuffer[re][ae]=n.createFramebuffer()}else V.__webglFramebuffer[re]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)V.__webglFramebuffer[re]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Fe)if(r.drawBuffers)for(let re=0,ae=Z.length;re<ae;re++){let Ue=i.get(Z[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Je(w)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){let ae=Z[re];V.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[re]);let Ue=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),Et=I(ae.internalFormat,Ue,Q,ae.colorSpace,w.isXRRenderTarget===!0),Xe=Me(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Et,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,V.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),he(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),k(n.TEXTURE_CUBE_MAP,v,be);for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)ve(V.__webglFramebuffer[re][ae],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else ve(V.__webglFramebuffer[re],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);M(v,be)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let re=0,ae=Z.length;re<ae;re++){let Ue=Z[re],Q=i.get(Ue);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),k(n.TEXTURE_2D,Ue,be),ve(V.__webglFramebuffer,w,Ue,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),M(Ue,be)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?re=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,W.__webglTexture),k(re,v,be),a&&v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)ve(V.__webglFramebuffer[ae],w,v,n.COLOR_ATTACHMENT0,re,ae);else ve(V.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,re,0);M(v,be)&&b(re),t.unbindTexture()}w.depthBuffer&&Ae(w)}function _e(w){let v=f(w)||a,V=w.textures;for(let W=0,Z=V.length;W<Z;W++){let X=V[W];if(M(X,v)){let Fe=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(X).__webglTexture;t.bindTexture(Fe,be),b(Fe),t.unbindTexture()}}}function je(w){if(a&&w.samples>0&&Je(w)===!1){let v=w.textures,V=w.width,W=w.height,Z=n.COLOR_BUFFER_BIT,X=[],Fe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(w),re=v.length>1;if(re)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){X.push(n.COLOR_ATTACHMENT0+ae),w.depthBuffer&&X.push(Fe);let Ue=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Ue===!1&&(w.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ae]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),re){let Q=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,W,0,0,V,W,Z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,be.__webglColorRenderbuffer[ae]);let Ue=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Me(w){return Math.min(r.maxSamples,w.samples)}function Je(w){let v=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function He(w){let v=o.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function qe(w,v){let V=w.colorSpace,W=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===yp||V!==ar&&V!==er&&(lt.getTransfer(V)===ft?a===!1?e.has("EXT_sRGB")===!0&&W===$n?(w.format=yp,w.minFilter=rn,w.generateMipmaps=!1):v=Xl.sRGBToLinear(v):(W!==$n||Z!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=P,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Je}function jL(n,e,t){let i=t.isWebGL2;function r(s,o=er){let a,c=lt.getTransfer(o);if(s===ir)return n.UNSIGNED_BYTE;if(s===qx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Xx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===OI)return n.BYTE;if(s===FI)return n.SHORT;if(s===qp)return n.UNSIGNED_SHORT;if(s===$x)return n.INT;if(s===tr)return n.UNSIGNED_INT;if(s===Ti)return n.FLOAT;if(s===jr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===UI)return n.ALPHA;if(s===$n)return n.RGBA;if(s===kI)return n.LUMINANCE;if(s===BI)return n.LUMINANCE_ALPHA;if(s===Wr)return n.DEPTH_COMPONENT;if(s===io)return n.DEPTH_STENCIL;if(s===yp)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===VI)return n.RED;if(s===Yx)return n.RED_INTEGER;if(s===zI)return n.RG;if(s===Zx)return n.RG_INTEGER;if(s===Jx)return n.RGBA_INTEGER;if(s===Lf||s===Of||s===Ff||s===Uf)if(c===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ff)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Of)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ff)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===T_||s===C_||s===A_||s===D_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===T_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===C_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===A_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===D_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===I_||s===R_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===I_)return c===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===R_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===P_||s===N_||s===L_||s===O_||s===F_||s===U_||s===k_||s===B_||s===V_||s===z_||s===H_||s===G_||s===W_||s===j_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===P_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===N_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===L_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===O_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===F_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===U_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===k_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===B_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===V_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===z_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===H_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===G_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===W_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===j_)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kf||s===$_||s===q_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kf)return c===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===q_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===HI||s===X_||s===Y_||s===Z_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===kf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===X_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Y_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Z_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Lp=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Js=class extends lo{constructor(){super(),this.isGroup=!0,this.type="Group"}},$L={type:"move"},ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($L)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XL=`
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

}`,Op=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Yr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new Jt({extensions:{fragDepth:!0},vertexShader:qL,fragmentShader:XL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zt(new ao(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Fp=class extends sr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,y=new Op,p=t.getContextAttributes(),f=null,S=null,M=[],b=[],I=new it,C=null,T=new Yt;T.layers.enable(1),T.viewport=new zt;let B=new Yt;B.layers.enable(2),B.viewport=new zt;let K=[T,B],_=new Lp;_.layers.enable(1),_.layers.enable(2);let E=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=M[k];return Y===void 0&&(Y=new ga,M[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=M[k];return Y===void 0&&(Y=new ga,M[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=M[k];return Y===void 0&&(Y=new ga,M[k]=Y),Y.getHandSpace()};function J(k){let Y=b.indexOf(k.inputSource);if(Y===-1)return;let ue=M[Y];ue!==void 0&&(ue.update(k.inputSource,k.frame,l||o),ue.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",G);for(let k=0;k<M.length;k++){let Y=b[k];Y!==null&&(b[k]=null,M[k].disconnect(Y))}E=null,ee=null,y.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(k){return Ca(this,null,function*(){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",D),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new qn(m.framebufferWidth,m.framebufferHeight,{format:$n,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ue=null,Ce=null;p.depth&&(Ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?io:Wr,ue=p.stencil?Gr:tr);let ve={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new qn(h.textureWidth,h.textureHeight,{format:$n,type:ir,depthTexture:new su(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let he=e.properties.get(S);he.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(k){for(let Y=0;Y<k.removed.length;Y++){let ue=k.removed[Y],Ce=b.indexOf(ue);Ce>=0&&(b[Ce]=null,M[Ce].disconnect(ue))}for(let Y=0;Y<k.added.length;Y++){let ue=k.added[Y],Ce=b.indexOf(ue);if(Ce===-1){for(let he=0;he<M.length;he++)if(he>=b.length){b.push(ue),Ce=he;break}else if(b[he]===null){b[he]=ue,Ce=he;break}if(Ce===-1)break}let ve=M[Ce];ve&&ve.connect(ue)}}let z=new F,$=new F;function H(k,Y,ue){z.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);let Ce=z.distanceTo($),ve=Y.projectionMatrix.elements,he=ue.projectionMatrix.elements,at=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),P=(ve[9]+1)/ve[5],Ut=(ve[9]-1)/ve[5],_e=(ve[8]-1)/ve[0],je=(he[8]+1)/he[0],Me=at*_e,Je=at*je,He=Ce/(-_e+je),qe=He*-_e;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qe),k.translateZ(He),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let _t=at+He,w=Ae+He,v=Me-qe,V=Je+(Ce-qe),W=P*Ae/w*_t,Z=Ut*Ae/w*_t;k.projectionMatrix.makePerspective(v,V,W,Z,_t,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.texture!==null&&(k.near=y.depthNear,k.far=y.depthFar),_.near=B.near=T.near=k.near,_.far=B.far=T.far=k.far,(E!==_.near||ee!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,ee=_.far,T.near=E,T.far=ee,B.near=E,B.far=ee,T.updateProjectionMatrix(),B.updateProjectionMatrix(),k.updateProjectionMatrix());let Y=k.parent,ue=_.cameras;j(_,Y);for(let Ce=0;Ce<ue.length;Ce++)j(ue[Ce],Y);ue.length===2?H(_,T,B):_.projectionMatrix.copy(T.projectionMatrix),q(k,_,Y)};function q(k,Y,ue){ue===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(ue.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=_p*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(k){c=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function de(k,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,Ce=!0);for(let he=0;he<ue.length;he++){let at=ue[he],Ae=null;if(m!==null)Ae=m.getViewport(at);else{let Ut=d.getViewSubImage(h,at);Ae=Ut.viewport,he===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,h.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(S))}let P=K[he];P===void 0&&(P=new Yt,P.layers.enable(he),P.viewport=new zt,K[he]=P),P.matrix.fromArray(at.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(at.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),he===0&&(_.matrix.copy(P.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ce===!0&&_.cameras.push(P)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let he=d.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&y.init(e,he,r.renderState)}}for(let ue=0;ue<M.length;ue++){let Ce=b[ue],ve=M[ue];Ce!==null&&ve!==void 0&&ve.update(Ce,Y,l||o)}y.render(e,_),ie&&ie(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let Oe=new iM;Oe.setAnimationLoop(de),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}},kr=new ro,YL=new Ft;function ZL(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,nM(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===on&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===on&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f),M=S.envMap,b=S.envMapRotation;if(M&&(p.envMap.value=M,kr.copy(b),kr.x*=-1,kr.y*=-1,kr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),p.envMapRotation.value.setFromMatrix4(YL.makeRotationFromEuler(kr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let I=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*I,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JL(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,M){let b=M.program;i.uniformBlockBinding(S,b)}function l(S,M){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",p));let I=M.program;i.updateUBOMapping(S,I);let C=e.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){let M=d();S.__bindingPointIndex=M;let b=n.createBuffer(),I=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],b=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,T=b.length;C<T;C++){let B=Array.isArray(b[C])?b[C]:[b[C]];for(let K=0,_=B.length;K<_;K++){let E=B[K];if(m(E,C,K,I)===!0){let ee=E.__offset,J=Array.isArray(E.value)?E.value:[E.value],D=0;for(let G=0;G<J.length;G++){let z=J[G],$=y(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,ee+D,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,b,I){let C=S.value,T=M+"_"+b;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{let B=I[T];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return I[T]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(S){let M=S.uniforms,b=0,I=16;for(let T=0,B=M.length;T<B;T++){let K=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,E=K.length;_<E;_++){let ee=K[_],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let D=0,G=J.length;D<G;D++){let z=J[D],$=y(z),H=b%I;H!==0&&I-H<$.boundary&&(b+=I-H),ee.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=b,b+=$.storage}}}let C=b%I;return C>0&&(b+=I-C),S.__size=b,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){let M=S.target;M.removeEventListener("dispose",p);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var xa=class{constructor(e={}){let{canvas:t=tR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;let M=this,b=!1,I=0,C=0,T=null,B=-1,K=null,_=new zt,E=new zt,ee=null,J=new rt(0),D=0,G=t.width,z=t.height,$=1,H=null,j=null,q=new zt(0,0,G,z),ie=new zt(0,0,G,z),de=!1,Oe=new iu,k=!1,Y=!1,ue=null,Ce=new Ft,ve=new it,he=new F,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?$:1}let P=i;function Ut(x,R){for(let O=0;O<x.length;O++){let U=x[O],N=t.getContext(U,R);if(N!==null)return N}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$p}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){let R=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&R.shift(),P=Ut(R,x),P===null)throw Ut(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,je,Me,Je,He,qe,_t,w,v,V,W,Z,X,Fe,be,re,ae,Ue,Q,Et,Xe,ye,fe,me;function Ke(){_e=new fN(P),je=new aN(P,_e,e),_e.init(je),ye=new jL(P,_e,je),Me=new GL(P,_e,je),Je=new gN(P),He=new RL,qe=new WL(P,_e,Me,He,je,ye,Je),_t=new lN(M),w=new hN(M),v=new wR(P,je),fe=new sN(P,_e,v,je),V=new pN(P,v,Je,fe),W=new xN(P,V,v,Je),Q=new _N(P,je,qe),re=new cN(He),Z=new IL(M,_t,w,_e,je,fe,re),X=new ZL(M,He),Fe=new NL,be=new BL(_e,je),Ue=new rN(M,_t,w,Me,W,h,c),ae=new HL(M,W,je),me=new JL(P,Je,je,Me),Et=new oN(P,_e,Je,je),Xe=new mN(P,_e,Je,je),Je.programs=Z.programs,M.capabilities=je,M.extensions=_e,M.properties=He,M.renderLists=Fe,M.shadowMap=ae,M.state=Me,M.info=Je}Ke();let Pe=new Fp(M,P);this.xr=Pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(G,z,!1))},this.getSize=function(x){return x.set(G,z)},this.setSize=function(x,R,O=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,z=R,t.width=Math.floor(x*$),t.height=Math.floor(R*$),O===!0&&(t.style.width=x+"px",t.style.height=R+"px"),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(G*$,z*$).floor()},this.setDrawingBufferSize=function(x,R,O){G=x,z=R,$=O,t.width=Math.floor(x*O),t.height=Math.floor(R*O),this.setViewport(0,0,x,R)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,R,O,U){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,R,O,U),Me.viewport(_.copy(q).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(ie)},this.setScissor=function(x,R,O,U){x.isVector4?ie.set(x.x,x.y,x.z,x.w):ie.set(x,R,O,U),Me.scissor(E.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(x){Me.setScissorTest(de=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){j=x},this.getClearColor=function(x){return x.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(x=!0,R=!0,O=!0){let U=0;if(x){let N=!1;if(T!==null){let le=T.texture.format;N=le===Jx||le===Zx||le===Yx}if(N){let le=T.texture.type,ge=le===ir||le===tr||le===qp||le===Gr||le===qx||le===Xx,xe=Ue.getClearColor(),Se=Ue.getClearAlpha(),Ge=xe.r,Ie=xe.g,Ne=xe.b;ge?(m[0]=Ge,m[1]=Ie,m[2]=Ne,m[3]=Se,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ge,g[1]=Ie,g[2]=Ne,g[3]=Se,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}R&&(U|=P.DEPTH_BUFFER_BIT),O&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Fe.dispose(),be.dispose(),He.dispose(),_t.dispose(),w.dispose(),W.dispose(),fe.dispose(),me.dispose(),Z.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",mn),Pe.removeEventListener("sessionend",ht),ue&&(ue.dispose(),ue=null),jt.stop()};function pt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let x=Je.autoReset,R=ae.enabled,O=ae.autoUpdate,U=ae.needsUpdate,N=ae.type;Ke(),Je.autoReset=x,ae.enabled=R,ae.autoUpdate=O,ae.needsUpdate=U,ae.type=N}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function L(x){let R=x.target;R.removeEventListener("dispose",L),te(R)}function te(x){ce(x),He.remove(x)}function ce(x){let R=He.get(x).programs;R!==void 0&&(R.forEach(function(O){Z.releaseProgram(O)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,O,U,N,le){R===null&&(R=at);let ge=N.isMesh&&N.matrixWorld.determinant()<0,xe=pM(x,R,O,U,N);Me.setMaterial(U,ge);let Se=O.index,Ge=1;if(U.wireframe===!0){if(Se=V.getWireframeAttribute(O),Se===void 0)return;Ge=2}let Ie=O.drawRange,Ne=O.attributes.position,xt=Ie.start*Ge,an=(Ie.start+Ie.count)*Ge;le!==null&&(xt=Math.max(xt,le.start*Ge),an=Math.min(an,(le.start+le.count)*Ge)),Se!==null?(xt=Math.max(xt,0),an=Math.min(an,Se.count)):Ne!=null&&(xt=Math.max(xt,0),an=Math.min(an,Ne.count));let Pt=an-xt;if(Pt<0||Pt===1/0)return;fe.setup(N,U,xe,O,Se);let li,gt=Et;if(Se!==null&&(li=v.get(Se),gt=Xe,gt.setIndex(li)),N.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*Ae()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(N.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),Me.setLineWidth(ke*Ae()),N.isLineSegments?gt.setMode(P.LINES):N.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else N.isPoints?gt.setMode(P.POINTS):N.isSprite&&gt.setMode(P.TRIANGLES);if(N.isBatchedMesh)gt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)gt.renderInstances(xt,Pt,N.count);else if(O.isInstancedBufferGeometry){let ke=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gu=Math.min(O.instanceCount,ke);gt.renderInstances(xt,Pt,gu)}else gt.render(xt,Pt)};function Ye(x,R,O){x.transparent===!0&&x.side===Si&&x.forceSinglePass===!1?(x.side=on,x.needsUpdate=!0,Sa(x,R,O),x.side=rr,x.needsUpdate=!0,Sa(x,R,O),x.side=Si):Sa(x,R,O)}this.compile=function(x,R,O=null){O===null&&(O=x),p=be.get(O),p.init(),S.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(M._useLegacyLights);let U=new Set;return x.traverse(function(N){let le=N.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){let xe=le[ge];Ye(xe,O,N),U.add(xe)}else Ye(le,O,N),U.add(le)}),S.pop(),p=null,U},this.compileAsync=function(x,R,O=null){let U=this.compile(x,R,O);return new Promise(N=>{function le(){if(U.forEach(function(ge){He.get(ge).currentProgram.isReady()&&U.delete(ge)}),U.size===0){N(x);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let dt=null;function kt(x){dt&&dt(x)}function mn(){jt.stop()}function ht(){jt.start()}let jt=new iM;jt.setAnimationLoop(kt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(x){dt=x,Pe.setAnimationLoop(x),x===null?jt.stop():jt.start()},Pe.addEventListener("sessionstart",mn),Pe.addEventListener("sessionend",ht),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(R),R=Pe.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,R,T),p=be.get(x,S.length),p.init(),S.push(p),Ce.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Oe.setFromProjectionMatrix(Ce),Y=this.localClippingEnabled,k=re.init(this.clippingPlanes,Y),y=Fe.get(x,f.length),y.init(),f.push(y),Yn(x,R,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(H,j),this.info.render.frame++,k===!0&&re.beginShadows();let O=p.state.shadowsArray;if(ae.render(O,x,R),k===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Ue.render(y,x),p.setupLights(M._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let N=0,le=U.length;N<le;N++){let ge=U[N];em(y,x,ge,ge.viewport)}}else em(y,x,R);T!==null&&(qe.updateMultisampleRenderTarget(T),qe.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(M,x,R),fe.resetDefaultState(),B=-1,K=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Yn(x,R,O,U){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Oe.intersectsSprite(x)){U&&he.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ce);let ge=W.update(x),xe=x.material;xe.visible&&y.push(x,ge,xe,O,he.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Oe.intersectsObject(x))){let ge=W.update(x),xe=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),he.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),he.copy(ge.boundingSphere.center)),he.applyMatrix4(x.matrixWorld).applyMatrix4(Ce)),Array.isArray(xe)){let Se=ge.groups;for(let Ge=0,Ie=Se.length;Ge<Ie;Ge++){let Ne=Se[Ge],xt=xe[Ne.materialIndex];xt&&xt.visible&&y.push(x,ge,xt,O,he.z,Ne)}}else xe.visible&&y.push(x,ge,xe,O,he.z,null)}}let le=x.children;for(let ge=0,xe=le.length;ge<xe;ge++)Yn(le[ge],R,O,U)}function em(x,R,O,U){let N=x.opaque,le=x.transmissive,ge=x.transparent;p.setupLightsView(O),k===!0&&re.setGlobalState(M.clippingPlanes,O),le.length>0&&fM(N,le,R,O),U&&Me.viewport(_.copy(U)),N.length>0&&Ea(N,R,O),le.length>0&&Ea(le,R,O),ge.length>0&&Ea(ge,R,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function fM(x,R,O,U){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let le=je.isWebGL2;ue===null&&(ue=new qn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?jr:ir,minFilter:Hr,samples:le?4:0})),M.getDrawingBufferSize(ve),le?ue.setSize(ve.x,ve.y):ue.setSize(xp(ve.x),xp(ve.y));let ge=M.getRenderTarget();M.setRenderTarget(ue),M.getClearColor(J),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();let xe=M.toneMapping;M.toneMapping=nr,Ea(x,O,U),qe.updateMultisampleRenderTarget(ue),qe.updateRenderTargetMipmap(ue);let Se=!1;for(let Ge=0,Ie=R.length;Ge<Ie;Ge++){let Ne=R[Ge],xt=Ne.object,an=Ne.geometry,Pt=Ne.material,li=Ne.group;if(Pt.side===Si&&xt.layers.test(U.layers)){let gt=Pt.side;Pt.side=on,Pt.needsUpdate=!0,tm(xt,O,U,an,Pt,li),Pt.side=gt,Pt.needsUpdate=!0,Se=!0}}Se===!0&&(qe.updateMultisampleRenderTarget(ue),qe.updateRenderTargetMipmap(ue)),M.setRenderTarget(ge),M.setClearColor(J,D),M.toneMapping=xe}function Ea(x,R,O){let U=R.isScene===!0?R.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){let ge=x[N],xe=ge.object,Se=ge.geometry,Ge=U===null?ge.material:U,Ie=ge.group;xe.layers.test(O.layers)&&tm(xe,R,O,Se,Ge,Ie)}}function tm(x,R,O,U,N,le){x.onBeforeRender(M,R,O,U,N,le),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,R,O,U,x,le),N.transparent===!0&&N.side===Si&&N.forceSinglePass===!1?(N.side=on,N.needsUpdate=!0,M.renderBufferDirect(O,R,U,N,x,le),N.side=rr,N.needsUpdate=!0,M.renderBufferDirect(O,R,U,N,x,le),N.side=Si):M.renderBufferDirect(O,R,U,N,x,le),x.onAfterRender(M,R,O,U,N,le)}function Sa(x,R,O){R.isScene!==!0&&(R=at);let U=He.get(x),N=p.state.lights,le=p.state.shadowsArray,ge=N.state.version,xe=Z.getParameters(x,N.state,le,R,O),Se=Z.getProgramCacheKey(xe),Ge=U.programs;U.environment=x.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(x.isMeshStandardMaterial?w:_t).get(x.envMap||U.environment),U.envMapRotation=U.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,Ge===void 0&&(x.addEventListener("dispose",L),Ge=new Map,U.programs=Ge);let Ie=Ge.get(Se);if(Ie!==void 0){if(U.currentProgram===Ie&&U.lightsStateVersion===ge)return im(x,xe),Ie}else xe.uniforms=Z.getUniforms(x),x.onBuild(O,xe,M),x.onBeforeCompile(xe,M),Ie=Z.acquireProgram(xe,Se),Ge.set(Se,Ie),U.uniforms=xe.uniforms;let Ne=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ne.clippingPlanes=re.uniform),im(x,xe),U.needsLights=gM(x),U.lightsStateVersion=ge,U.needsLights&&(Ne.ambientLightColor.value=N.state.ambient,Ne.lightProbe.value=N.state.probe,Ne.directionalLights.value=N.state.directional,Ne.directionalLightShadows.value=N.state.directionalShadow,Ne.spotLights.value=N.state.spot,Ne.spotLightShadows.value=N.state.spotShadow,Ne.rectAreaLights.value=N.state.rectArea,Ne.ltc_1.value=N.state.rectAreaLTC1,Ne.ltc_2.value=N.state.rectAreaLTC2,Ne.pointLights.value=N.state.point,Ne.pointLightShadows.value=N.state.pointShadow,Ne.hemisphereLights.value=N.state.hemi,Ne.directionalShadowMap.value=N.state.directionalShadowMap,Ne.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ne.spotShadowMap.value=N.state.spotShadowMap,Ne.spotLightMatrix.value=N.state.spotLightMatrix,Ne.spotLightMap.value=N.state.spotLightMap,Ne.pointShadowMap.value=N.state.pointShadowMap,Ne.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Ie,U.uniformsList=null,Ie}function nm(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=eo.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function im(x,R){let O=He.get(x);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.instancingMorph=R.instancingMorph,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function pM(x,R,O,U,N){R.isScene!==!0&&(R=at),qe.resetTextureUnits();let le=R.fog,ge=U.isMeshStandardMaterial?R.environment:null,xe=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ar,Se=(U.isMeshStandardMaterial?w:_t).get(U.envMap||ge),Ge=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ie=!!O.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ne=!!O.morphAttributes.position,xt=!!O.morphAttributes.normal,an=!!O.morphAttributes.color,Pt=nr;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=M.toneMapping);let li=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=li!==void 0?li.length:0,ke=He.get(U),gu=p.state.lights;if(k===!0&&(Y===!0||x!==K)){let gn=x===K&&U.id===B;re.setState(U,x,gn)}let mt=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==gu.state.version||ke.outputColorSpace!==xe||N.isBatchedMesh&&ke.batching===!1||!N.isBatchedMesh&&ke.batching===!0||N.isInstancedMesh&&ke.instancing===!1||!N.isInstancedMesh&&ke.instancing===!0||N.isSkinnedMesh&&ke.skinning===!1||!N.isSkinnedMesh&&ke.skinning===!0||N.isInstancedMesh&&ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ke.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ke.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ke.instancingMorph===!1&&N.morphTexture!==null||ke.envMap!==Se||U.fog===!0&&ke.fog!==le||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==re.numPlanes||ke.numIntersection!==re.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Ie||ke.morphTargets!==Ne||ke.morphNormals!==xt||ke.morphColors!==an||ke.toneMapping!==Pt||je.isWebGL2===!0&&ke.morphTargetsCount!==gt)&&(mt=!0):(mt=!0,ke.__version=U.version);let cr=ke.currentProgram;mt===!0&&(cr=Sa(U,R,N));let rm=!1,ho=!1,vu=!1,Ht=cr.getUniforms(),lr=ke.uniforms;if(Me.useProgram(cr.program)&&(rm=!0,ho=!0,vu=!0),U.id!==B&&(B=U.id,ho=!0),rm||K!==x){Ht.setValue(P,"projectionMatrix",x.projectionMatrix),Ht.setValue(P,"viewMatrix",x.matrixWorldInverse);let gn=Ht.map.cameraPosition;gn!==void 0&&gn.setValue(P,he.setFromMatrixPosition(x.matrixWorld)),je.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),K!==x&&(K=x,ho=!0,vu=!0)}if(N.isSkinnedMesh){Ht.setOptional(P,N,"bindMatrix"),Ht.setOptional(P,N,"bindMatrixInverse");let gn=N.skeleton;gn&&(je.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ht.setValue(P,"boneTexture",gn.boneTexture,qe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Ht.setOptional(P,N,"batchingTexture"),Ht.setValue(P,"batchingTexture",N._matricesTexture,qe));let yu=O.morphAttributes;if((yu.position!==void 0||yu.normal!==void 0||yu.color!==void 0&&je.isWebGL2===!0)&&Q.update(N,O,cr),(ho||ke.receiveShadow!==N.receiveShadow)&&(ke.receiveShadow=N.receiveShadow,Ht.setValue(P,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(lr.envMap.value=Se,lr.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),ho&&(Ht.setValue(P,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&mM(lr,vu),le&&U.fog===!0&&X.refreshFogUniforms(lr,le),X.refreshMaterialUniforms(lr,U,$,z,ue),eo.upload(P,nm(ke),lr,qe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(eo.upload(P,nm(ke),lr,qe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ht.setValue(P,"center",N.center),Ht.setValue(P,"modelViewMatrix",N.modelViewMatrix),Ht.setValue(P,"normalMatrix",N.normalMatrix),Ht.setValue(P,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let gn=U.uniformsGroups;for(let _u=0,vM=gn.length;_u<vM;_u++)if(je.isWebGL2){let sm=gn[_u];me.update(sm,cr),me.bind(sm,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function mM(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function gM(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,R,O){He.get(x.texture).__webglTexture=R,He.get(x.depthTexture).__webglTexture=O;let U=He.get(x);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,R){let O=He.get(x);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,O=0){T=x,I=R,C=O;let U=!0,N=null,le=!1,ge=!1;if(x){let Se=He.get(x);Se.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):Se.__webglFramebuffer===void 0?qe.setupRenderTarget(x):Se.__hasExternalTextures&&qe.rebindTextures(x,He.get(x.texture).__webglTexture,He.get(x.depthTexture).__webglTexture);let Ge=x.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);let Ie=He.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[R])?N=Ie[R][O]:N=Ie[R],le=!0):je.isWebGL2&&x.samples>0&&qe.useMultisampledRTT(x)===!1?N=He.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[O]:N=Ie,_.copy(x.viewport),E.copy(x.scissor),ee=x.scissorTest}else _.copy(q).multiplyScalar($).floor(),E.copy(ie).multiplyScalar($).floor(),ee=de;if(Me.bindFramebuffer(P.FRAMEBUFFER,N)&&je.drawBuffers&&U&&Me.drawBuffers(x,N),Me.viewport(_),Me.scissor(E),Me.setScissorTest(ee),le){let Se=He.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,Se.__webglTexture,O)}else if(ge){let Se=He.get(x.texture),Ge=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,O||0,Ge)}B=-1},this.readRenderTargetPixels=function(x,R,O,U,N,le,ge){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=He.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Me.bindFramebuffer(P.FRAMEBUFFER,xe);try{let Se=x.texture,Ge=Se.format,Ie=Se.type;if(Ge!==$n&&ye.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=Ie===jr&&(_e.has("EXT_color_buffer_half_float")||je.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ie!==ir&&ye.convert(Ie)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Ti&&(je.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-U&&O>=0&&O<=x.height-N&&P.readPixels(R,O,U,N,ye.convert(Ge),ye.convert(Ie),le)}finally{let Se=T!==null?He.get(T).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(x,R,O=0){let U=Math.pow(2,-O),N=Math.floor(R.image.width*U),le=Math.floor(R.image.height*U);qe.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,x.x,x.y,N,le),Me.unbindTexture()},this.copyTextureToTexture=function(x,R,O,U=0){let N=R.image.width,le=R.image.height,ge=ye.convert(O.format),xe=ye.convert(O.type);qe.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,N,le,ge,xe,R.image.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,x.x,x.y,R.mipmaps[0].width,R.mipmaps[0].height,ge,R.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,ge,xe,R.image),U===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(x,R,O,U,N=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=Math.round(x.max.x-x.min.x),ge=Math.round(x.max.y-x.min.y),xe=x.max.z-x.min.z+1,Se=ye.convert(U.format),Ge=ye.convert(U.type),Ie;if(U.isData3DTexture)qe.setTexture3D(U,0),Ie=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)qe.setTexture2DArray(U,0),Ie=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Ne=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),an=P.getParameter(P.UNPACK_SKIP_PIXELS),Pt=P.getParameter(P.UNPACK_SKIP_ROWS),li=P.getParameter(P.UNPACK_SKIP_IMAGES),gt=O.isCompressedTexture?O.mipmaps[N]:O.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,x.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,x.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?P.texSubImage3D(Ie,N,R.x,R.y,R.z,le,ge,xe,Se,Ge,gt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,N,R.x,R.y,R.z,le,ge,xe,Se,gt.data):P.texSubImage3D(Ie,N,R.x,R.y,R.z,le,ge,xe,Se,Ge,gt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,an),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,li),N===0&&U.generateMipmaps&&P.generateMipmap(Ie),Me.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?qe.setTextureCube(x,0):x.isData3DTexture?qe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?qe.setTexture2DArray(x,0):qe.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Xp?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===lu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Up=class extends xa{};Up.prototype.isWebGL1Renderer=!0;var ou=class extends lo{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ro,this.environmentRotation=new ro,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};function Bl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function KL(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var co=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kp=class extends co{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:J_,endingEnd:J_}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case K_:s=e,a=2*t-i;break;case Q_:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case K_:o=e,c=2*i-t;break;case Q_:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),y=g*g,p=y*g,f=-h*p+2*h*y-h*g,S=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-m)*p+(1.5+m)*y+.5*g,b=m*p-m*y;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+S*o[l+I]+M*o[c+I]+b*o[d+I];return s}},Bp=class extends co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Vp=class extends co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zl:t=this.InterpolantFactoryMethodDiscrete;break;case Hl:t=this.InterpolantFactoryMethodLinear;break;case Bf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zl;case this.InterpolantFactoryMethodLinear:return Hl;case this.InterpolantFactoryMethodSmooth:return Bf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&KL(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Bf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Hl;var qr=class extends Xn{};qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=zl;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var zp=class extends Xn{};zp.prototype.ValueTypeName="color";var Hp=class extends Xn{};Hp.prototype.ValueTypeName="number";var Gp=class extends co{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)or.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ma=class extends Xn{InterpolantFactoryMethodLinear(e){return new Gp(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.DefaultInterpolation=Hl;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends Xn{};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=zl;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wp=class extends Xn{};Wp.prototype.ValueTypeName="vector";var au=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gx(){return(typeof performance>"u"?Date:performance).now()}var Jp="\\[\\]\\.:\\/",QL=new RegExp("["+Jp+"]","g"),Kp="[^"+Jp+"]",eO="[^"+Jp.replace("\\.","")+"]",tO=/((?:WC+[\/:])*)/.source.replace("WC",Kp),nO=/(WCOD+)?/.source.replace("WCOD",eO),iO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kp),rO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kp),sO=new RegExp("^"+tO+nO+iO+rO+"$"),oO=["material","materials","bones","map"],jp=class{constructor(e,t,i){let r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(QL,"")}static parseTrackName(t){let i=sO.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);oO.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=jp,n})();bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BV=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);var lM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cO=new _a(-1,1,1,-1,0,1),Qp=class extends Ai{constructor(){super(),this.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pn([0,2,0,0,2,0],2))}},lO=new Qp,du=class{constructor(e){this._mesh=new Zt(lO,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cO)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var hu=class extends Di{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yp.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new du(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ba=class extends Di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},fu=class extends Di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var pu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new it);this._width=i.width,this._height=i.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hu(lM),this.copyPass.material.blending=ci,this.clock=new au}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ba!==void 0&&(o instanceof ba?i=!0:o instanceof fu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mu=class extends Di{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var uO=["shaderContainer"],uM=(()=>{let e=class e{constructor(i){this.platformId=i,this.baseSize=2}ngOnInit(){if(m0(this.platformId)==!1)return;this.scene=new ou,this.camera=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new xa({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.containerRef.nativeElement.appendChild(this.renderer.domElement);let i=new pu(this.renderer);i.addPass(new mu(this.scene,this.camera));let r=new Jt({uniforms:{time:{value:0},ratio:{value:window.innerWidth/window.innerHeight},ratiofrag:{value:window.innerWidth/window.innerHeight}},vertexShader:`
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
      `});var s=window.innerWidth/window.innerHeight;let o=new ao(this.baseSize*s,this.baseSize,1,1),a=new Zt(o,r);this.scene.add(a),this.camera.position.set(0,0,1),this.camera.aspect=s,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio);let c=Date.now(),l=()=>{requestAnimationFrame(l);let u=(Date.now()-c)*1e-5;r.uniforms.time.value=u,i.render()};l()}onResize(){var i=window.innerWidth/window.innerHeight;this.camera.aspect=i,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}};e.\u0275fac=function(r){return new(r||e)(Fo(zn))},e.\u0275cmp=ki({type:e,selectors:[["app-shader-background"]],viewQuery:function(r,s){if(r&1&&Zy(uO,7),r&2){let o;Ah(o=Dh())&&(s.containerRef=o.first)}},hostBindings:function(r,s){r&1&&Hi("resize",function(){return s.onResize()},!1,Zv)},standalone:!0,features:[Gi],decls:2,vars:0,consts:[["shaderContainer",""]],template:function(r,s){r&1&&Cn(0,"div",null,0)},styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;height:100%}"]});let n=e;return n})();var dM=(()=>{let e=class e{constructor(){this.buttonText="Button",this.buttonColor="blue",this.buttonOpacity=1,this.iconClass="",this.onClick=()=>{}}handleClick(i){this.onClick(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ki({type:e,selectors:[["app-horizontal-button"]],inputs:{buttonText:"buttonText",buttonColor:"buttonColor",buttonOpacity:"buttonOpacity",iconClass:"iconClass"},outputs:{onClick:"onClick"},standalone:!0,features:[Gi],decls:5,vars:5,consts:[["id","container"],["id","block"],["id","text"]],template:function(r,s){r&1&&(Tn(0,"div",0),Cn(1,"div",1),Tn(2,"div",2),Cn(3,"i"),$c(4),vi()()),r&2&&(zi(),jc("background-color",s.buttonColor),zi(2),Gy(s.iconClass),zi(),Ih("\xA0\xA0\xA0",s.buttonText," "))},styles:["#container[_ngcontent-%COMP%]{--padding-horizontal: 2vw;--padding-vertical: 4vw;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:var(--padding-horizontal) var(--padding-vertical);border:none;position:relative}#block[_ngcontent-%COMP%]{width:24vw;margin:auto;background-color:c_white;opacity:.6;border-radius:2vw;position:absolute;inset:0;transition:transform .2s,opacity .2s}#container[_ngcontent-%COMP%]:hover   #block[_ngcontent-%COMP%]{transform:scale(1.05);opacity:1}#container[_ngcontent-%COMP%]:not(:hover)   #block[_ngcontent-%COMP%]{transition:transform .5s,opacity .5s}#text[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:flex;justify-content:left;align-items:left;text-align:left;gap:2vw;z-index:1}"]});let n=e;return n})();var hM=(()=>{let e=class e{constructor(){this.title="PersonalPortfolioSite"}onClickLinkedIn(i){window.open("https://www.linkedin.com/in/aidan-cusack-74406728b/","_blank")}onClickGitHub(i){window.open("https://github.com/Ilverism/","_blank")}onClickYouTube(i){window.open("https://www.youtube.com/@IlverismOST/","_blank")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ki({type:e,selectors:[["app-root"]],standalone:!0,features:[Gi],decls:12,vars:9,consts:[["rel","stylesheet","href",Xv`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`],[1,"fullscreen-container"],[1,"overlay-content"],[1,"grid-container"],["iconClass","fab fa-linkedin",2,"margin","0 auto","margin-block","1vw",3,"click","buttonText","buttonColor","buttonOpacity"],["iconClass","fab fa-github",2,"margin","0 auto","margin-block","1vw",3,"click","buttonText","buttonColor","buttonOpacity"],["iconClass","fab fa-youtube",2,"margin","0 auto","margin-block","1vw",3,"click","buttonText","buttonColor","buttonOpacity"]],template:function(r,s){r&1&&(Cn(0,"link",0),Tn(1,"div",1),Cn(2,"app-shader-background"),Tn(3,"div",2),Cn(4,"section"),Tn(5,"div",3)(6,"h1"),$c(7,"Ilverism."),vi(),Tn(8,"div",3)(9,"app-horizontal-button",4),Hi("click",function(a){return s.onClickLinkedIn(a)}),vi(),Tn(10,"app-horizontal-button",5),Hi("click",function(a){return s.onClickGitHub(a)}),vi(),Tn(11,"app-horizontal-button",6),Hi("click",function(a){return s.onClickYouTube(a)}),vi()()()()()),r&2&&(zi(9),Vo("buttonText","LinkedIn")("buttonColor","rgba(0, 123, 181, 1.00)")("buttonOpacity",0),zi(),Vo("buttonText","GitHub")("buttonColor","rgba(36, 41, 46, 1.00)")("buttonOpacity",0),zi(),Vo("buttonText","Music")("buttonColor","rgba(255, 0, 0, 1.00)")("buttonOpacity",0))},dependencies:[Lh,uM,dM],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;height:10%}app-shader-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.overlay-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:1;color:#fff;font:3vw sans-serif}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1vw;align-content:left}"]});let n=e;return n})();P0(hM,v_).catch(n=>console.error(n));
