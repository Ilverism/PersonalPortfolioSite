var gC=Object.defineProperty,vC=Object.defineProperties;var MC=Object.getOwnPropertyDescriptors;var k6=Object.getOwnPropertySymbols;var A9=Object.prototype.hasOwnProperty,T9=Object.prototype.propertyIsEnumerable;var V9=(t,e,n)=>e in t?gC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l1=(t,e)=>{for(var n in e||={})A9.call(e,n)&&V9(t,n,e[n]);if(k6)for(var n of k6(e))T9.call(e,n)&&V9(t,n,e[n]);return t},Me=(t,e)=>vC(t,MC(e));var D9=(t,e)=>{var n={};for(var i in t)A9.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&k6)for(var i of k6(t))e.indexOf(i)<0&&T9.call(t,i)&&(n[i]=t[i]);return n};var pn=(t,e,n)=>new Promise((i,r)=>{var s=c=>{try{o(n.next(c))}catch(l){r(l)}},a=c=>{try{o(n.throw(c))}catch(l){r(l)}},o=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,a);o((n=n.apply(t,e)).next())});function N9(t,e){return Object.is(t,e)}var Ke=null,tr=!1,O6=1,Tt=Symbol("SIGNAL");function ce(t){let e=Ke;return Ke=t,e}function CC(){return tr}var ir={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function U6(t){if(tr)throw new Error("");if(Ke===null)return;Ke.consumerOnSignalRead(t);let e=Ke.nextProducerIndex++;if(mn(Ke),e<Ke.producerNode.length&&Ke.producerNode[e]!==t&&nr(Ke)){let n=Ke.producerNode[e];j6(n,Ke.producerIndexOfThis[e])}Ke.producerNode[e]!==t&&(Ke.producerNode[e]=t,Ke.producerIndexOfThis[e]=nr(Ke)?O9(t,Ke,e):0),Ke.producerLastReadVersion[e]=t.version}function yC(){O6++}function I9(t){if(!(nr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===O6)){if(!t.producerMustRecompute(t)&&!W6(t)){t.dirty=!1,t.lastCleanEpoch=O6;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=O6}}function R9(t){if(t.liveConsumerNode===void 0)return;let e=tr;tr=!0;try{for(let n of t.liveConsumerNode)n.dirty||k9(n)}finally{tr=e}}function P9(){return Ke?.consumerAllowSignalWrites!==!1}function k9(t){t.dirty=!0,R9(t),t.consumerMarkedDirty?.(t)}function B6(t){return t&&(t.nextProducerIndex=0),ce(t)}function G6(t,e){if(ce(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(nr(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)j6(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function W6(t){mn(t);for(let e=0;e<t.producerNode.length;e++){let n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(I9(n),i!==n.version))return!0}return!1}function To(t){if(mn(t),nr(t))for(let e=0;e<t.producerNode.length;e++)j6(t.producerNode[e],t.producerIndexOfThis[e]);t.producerNode.length=t.producerLastReadVersion.length=t.producerIndexOfThis.length=0,t.liveConsumerNode&&(t.liveConsumerNode.length=t.liveConsumerIndexOfThis.length=0)}function O9(t,e,n){if(F9(t),mn(t),t.liveConsumerNode.length===0)for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=O9(t.producerNode[i],t,i);return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function j6(t,e){if(F9(t),mn(t),t.liveConsumerNode.length===1)for(let i=0;i<t.producerNode.length;i++)j6(t.producerNode[i],t.producerIndexOfThis[i]);let n=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[n],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[n],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){let i=t.liveConsumerIndexOfThis[e],r=t.liveConsumerNode[e];mn(r),r.producerIndexOfThis[i]=e}}function nr(t){return t.consumerIsAlwaysLive||(t?.liveConsumerNode?.length??0)>0}function mn(t){t.producerNode??=[],t.producerIndexOfThis??=[],t.producerLastReadVersion??=[]}function F9(t){t.liveConsumerNode??=[],t.liveConsumerIndexOfThis??=[]}function U9(t){let e=Object.create(xC);e.computation=t;let n=()=>{if(I9(e),U6(e),e.value===F6)throw e.error;return e.value};return n[Tt]=e,n}var Eo=Symbol("UNSET"),Vo=Symbol("COMPUTING"),F6=Symbol("ERRORED"),xC=Me(l1({},ir),{value:Eo,dirty:!0,error:null,equal:N9,producerMustRecompute(t){return t.value===Eo||t.value===Vo},producerRecomputeValue(t){if(t.value===Vo)throw new Error("Detected cycle in computations.");let e=t.value;t.value=Vo;let n=B6(t),i;try{i=t.computation()}catch(r){i=F6,t.error=r}finally{G6(t,n)}if(e!==Eo&&e!==F6&&i!==F6&&t.equal(e,i)){t.value=e;return}t.value=i,t.version++}});function bC(){throw new Error}var B9=bC;function G9(){B9()}function W9(t){B9=t}var zC=null;function j9(t){let e=Object.create(Do);e.value=t;let n=()=>(U6(e),e.value);return n[Tt]=e,n}function q6(t,e){P9()||G9(),t.equal(t.value,e)||(t.value=e,_C(t))}function q9(t,e){P9()||G9(),q6(t,e(t.value))}var Do=Me(l1({},ir),{equal:N9,value:void 0});function _C(t){t.version++,yC(),R9(t),zC?.()}function $9(t,e,n){let i=Object.create(wC);n&&(i.consumerAllowSignalWrites=!0),i.fn=t,i.schedule=e;let r=c=>{i.cleanupFn=c};function s(c){return c.fn===null&&c.schedule===null}function a(c){s(c)||(To(c),c.cleanupFn(),c.fn=null,c.schedule=null,c.cleanupFn=Ao)}let o=()=>{if(i.fn===null)return;if(CC())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(i.dirty=!1,i.hasRun&&!W6(i))return;i.hasRun=!0;let c=B6(i);try{i.cleanupFn(),i.cleanupFn=Ao,i.fn(r)}finally{G6(i,c)}};return i.ref={notify:()=>k9(i),run:o,cleanup:()=>i.cleanupFn(),destroy:()=>a(i),[Tt]:i},i.ref}var Ao=()=>{},wC=Me(l1({},ir),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:t=>{t.schedule!==null&&t.schedule(t.ref)},hasRun:!1,cleanupFn:Ao});function _1(t){return typeof t=="function"}function gn(t){let n=t(i=>{Error.call(i),i.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var $6=gn(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function y4(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ne=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let s of n)s.remove(this);else n.remove(this);let{initialTeardown:i}=this;if(_1(i))try{i()}catch(s){e=s instanceof $6?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{X9(s)}catch(a){e=e??[],a instanceof $6?e=[...e,...a.errors]:e.push(a)}}if(e)throw new $6(e)}}add(e){var n;if(e&&e!==this)if(this.closed)X9(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&y4(n,e)}remove(e){let{_finalizers:n}=this;n&&y4(n,e),e instanceof t&&e._removeParent(this)}};Ne.EMPTY=(()=>{let t=new Ne;return t.closed=!0,t})();var No=Ne.EMPTY;function X6(t){return t instanceof Ne||t&&"closed"in t&&_1(t.remove)&&_1(t.add)&&_1(t.unsubscribe)}function X9(t){_1(t)?t():t.unsubscribe()}var ft={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var vn={setTimeout(t,e,...n){let{delegate:i}=vn;return i?.setTimeout?i.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=vn;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Y6(t){vn.setTimeout(()=>{let{onUnhandledError:e}=ft;if(e)e(t);else throw t})}function x4(){}var Y9=Io("C",void 0,void 0);function Z9(t){return Io("E",void 0,t)}function J9(t){return Io("N",t,void 0)}function Io(t,e,n){return{kind:t,value:e,error:n}}var b4=null;function Mn(t){if(ft.useDeprecatedSynchronousErrorHandling){let e=!b4;if(e&&(b4={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:i}=b4;if(b4=null,n)throw i}}else t()}function K9(t){ft.useDeprecatedSynchronousErrorHandling&&b4&&(b4.errorThrown=!0,b4.error=t)}var z4=class extends Ne{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,X6(e)&&e.add(this)):this.destination=LC}static create(e,n,i){return new Cn(e,n,i)}next(e){this.isStopped?Po(J9(e),this):this._next(e)}error(e){this.isStopped?Po(Z9(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Po(Y9,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},SC=Function.prototype.bind;function Ro(t,e){return SC.call(t,e)}var ko=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(i){Z6(i)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(i){Z6(i)}else Z6(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Z6(n)}}},Cn=class extends z4{constructor(e,n,i){super();let r;if(_1(e)||!e)r={next:e??void 0,error:n??void 0,complete:i??void 0};else{let s;this&&ft.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ro(e.next,s),error:e.error&&Ro(e.error,s),complete:e.complete&&Ro(e.complete,s)}):r=e}this.destination=new ko(r)}};function Z6(t){ft.useDeprecatedSynchronousErrorHandling?K9(t):Y6(t)}function HC(t){throw t}function Po(t,e){let{onStoppedNotification:n}=ft;n&&vn.setTimeout(()=>n(t,e))}var LC={closed:!0,next:x4,error:HC,complete:x4};var yn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function F2(t){return t}function Oo(...t){return Fo(t)}function Fo(t){return t.length===0?F2:t.length===1?t[0]:function(n){return t.reduce((i,r)=>r(i),n)}}var J1=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let i=new t;return i.source=this,i.operator=n,i}subscribe(n,i,r){let s=VC(n)?n:new Cn(n,i,r);return Mn(()=>{let{operator:a,source:o}=this;s.add(a?a.call(s,o):o?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(n){try{return this._subscribe(n)}catch(i){n.error(i)}}forEach(n,i){return i=Q9(i),new i((r,s)=>{let a=new Cn({next:o=>{try{n(o)}catch(c){s(c),a.unsubscribe()}},error:s,complete:r});this.subscribe(a)})}_subscribe(n){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(n)}[yn](){return this}pipe(...n){return Fo(n)(this)}toPromise(n){return n=Q9(n),new n((i,r)=>{let s;this.subscribe(a=>s=a,a=>r(a),()=>i(s))})}}return t.create=e=>new t(e),t})();function Q9(t){var e;return(e=t??ft.Promise)!==null&&e!==void 0?e:Promise}function EC(t){return t&&_1(t.next)&&_1(t.error)&&_1(t.complete)}function VC(t){return t&&t instanceof z4||EC(t)&&X6(t)}function Uo(t){return _1(t?.lift)}function q1(t){return e=>{if(Uo(e))return e.lift(function(n){try{return t(n,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function F1(t,e,n,i,r){return new Bo(t,e,n,i,r)}var Bo=class extends z4{constructor(e,n,i,r,s,a){super(e),this.onFinalize=s,this.shouldUnsubscribe=a,this._next=n?function(o){try{n(o)}catch(c){e.error(c)}}:super._next,this._error=r?function(o){try{r(o)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(o){e.error(o)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function xn(){return q1((t,e)=>{let n=null;t._refCount++;let i=F1(e,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){n=null;return}let r=t._connection,s=n;n=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});t.subscribe(i),i.closed||(n=t.connect())})}var bn=class extends J1{constructor(e,n){super(),this.source=e,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Uo(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ne;let n=this.getSubject();e.add(this.source.subscribe(F1(n,void 0,()=>{this._teardown(),n.complete()},i=>{this._teardown(),n.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ne.EMPTY)}return e}refCount(){return xn()(this)}};var zn={schedule(t){let e=requestAnimationFrame,n=cancelAnimationFrame,{delegate:i}=zn;i&&(e=i.requestAnimationFrame,n=i.cancelAnimationFrame);let r=e(s=>{n=void 0,t(s)});return new Ne(()=>n?.(r))},requestAnimationFrame(...t){let{delegate:e}=zn;return(e?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:e}=zn;return(e?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var ef=gn(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var s2=(()=>{class t extends J1{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let i=new J6(this,this);return i.operator=n,i}_throwIfClosed(){if(this.closed)throw new ef}next(n){Mn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(n)}})}error(n){Mn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:i}=this;for(;i.length;)i.shift().error(n)}})}complete(){Mn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:i,isStopped:r,observers:s}=this;return i||r?No:(this.currentObservers=null,s.push(n),new Ne(()=>{this.currentObservers=null,y4(s,n)}))}_checkFinalizedStatuses(n){let{hasError:i,thrownError:r,isStopped:s}=this;i?n.error(r):s&&n.complete()}asObservable(){let n=new J1;return n.source=this,n}}return t.create=(e,n)=>new J6(e,n),t})(),J6=class extends s2{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)}error(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:No}};var a2=class extends s2{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:i}=this;if(e)throw n;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Go={now(){return(Go.delegate||Date).now()},delegate:void 0};var K6=class extends Ne{constructor(e,n){super()}schedule(e,n=0){return this}};var rr={setInterval(t,e,...n){let{delegate:i}=rr;return i?.setInterval?i.setInterval(t,e,...n):setInterval(t,e,...n)},clearInterval(t){let{delegate:e}=rr;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};var _n=class extends K6{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){var i;if(this.closed)return this;this.state=e;let r=this.id,s=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(s,r,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(s,this.id,n),this}requestAsyncId(e,n,i=0){return rr.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,n,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&rr.clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(e,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let i=!1,r;try{this.work(e)}catch(s){i=!0,r=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:e,scheduler:n}=this,{actions:i}=n;this.work=this.state=this.scheduler=null,this.pending=!1,y4(i,this),e!=null&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,super.unsubscribe()}}};var wn=class t{constructor(e,n=t.now){this.schedulerActionCtor=e,this.now=n}schedule(e,n=0,i){return new this.schedulerActionCtor(this,e).schedule(i,n)}};wn.now=Go.now;var Sn=class extends wn{constructor(e,n=wn.now){super(e,n),this.actions=[],this._active=!1}flush(e){let{actions:n}=this;if(this._active){n.push(e);return}let i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,i){for(;e=n.shift();)e.unsubscribe();throw i}}};var _4=new Sn(_n),tf=_4;var Q6=class extends _n{constructor(e,n){super(e,n),this.scheduler=e,this.work=n}requestAsyncId(e,n,i=0){return i!==null&&i>0?super.requestAsyncId(e,n,i):(e.actions.push(this),e._scheduled||(e._scheduled=zn.requestAnimationFrame(()=>e.flush(void 0))))}recycleAsyncId(e,n,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(e,n,i);let{actions:s}=e;n!=null&&((r=s[s.length-1])===null||r===void 0?void 0:r.id)!==n&&(zn.cancelAnimationFrame(n),e._scheduled=void 0)}};var es=class extends Sn{flush(e){this._active=!0;let n=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;e=e||i.shift();do if(r=e.execute(e.state,e.delay))break;while((e=i[0])&&e.id===n&&i.shift());if(this._active=!1,r){for(;(e=i[0])&&e.id===n&&i.shift();)e.unsubscribe();throw r}}};var Wo=new es(Q6);var o2=new J1(t=>t.complete());function ts(t){return t&&_1(t.schedule)}function jo(t){return t[t.length-1]}function nf(t){return _1(jo(t))?t.pop():void 0}function Dt(t){return ts(jo(t))?t.pop():void 0}function rf(t,e){return typeof jo(t)=="number"?t.pop():e}function af(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(f){try{l(i.next(f))}catch(u){a(u)}}function c(f){try{l(i.throw(f))}catch(u){a(u)}}function l(f){f.done?s(f.value):r(f.value).then(o,c)}l((i=i.apply(t,e||[])).next())})}function sf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function w4(t){return this instanceof w4?(this.v=t,this):new w4(t)}function of(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(t,e||[]),r,s=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(h){i[h]&&(r[h]=function(m){return new Promise(function(g,v){s.push([h,m,g,v])>1||o(h,m)})})}function o(h,m){try{c(i[h](m))}catch(g){u(s[0][3],g)}}function c(h){h.value instanceof w4?Promise.resolve(h.value.v).then(l,f):u(s[0][2],h)}function l(h){o("next",h)}function f(h){o("throw",h)}function u(h,m){h(m),s.shift(),s.length&&o(s[0][0],s[0][1])}}function cf(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof sf=="function"?sf(t):t[Symbol.iterator](),n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n);function i(s){n[s]=t[s]&&function(a){return new Promise(function(o,c){a=t[s](a),r(o,c,a.done,a.value)})}}function r(s,a,o,c){Promise.resolve(c).then(function(l){s({value:l,done:o})},a)}}var Hn=t=>t&&typeof t.length=="number"&&typeof t!="function";function ns(t){return _1(t?.then)}function is(t){return _1(t[yn])}function rs(t){return Symbol.asyncIterator&&_1(t?.[Symbol.asyncIterator])}function ss(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function AC(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var as=AC();function os(t){return _1(t?.[as])}function cs(t){return of(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:i,done:r}=yield w4(n.read());if(r)return yield w4(void 0);yield yield w4(i)}}finally{n.releaseLock()}})}function ls(t){return _1(t?.getReader)}function _e(t){if(t instanceof J1)return t;if(t!=null){if(is(t))return TC(t);if(Hn(t))return DC(t);if(ns(t))return Ln(t);if(rs(t))return lf(t);if(os(t))return NC(t);if(ls(t))return IC(t)}throw ss(t)}function TC(t){return new J1(e=>{let n=t[yn]();if(_1(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function DC(t){return new J1(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Ln(t){return new J1(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,Y6)})}function NC(t){return new J1(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function lf(t){return new J1(e=>{RC(t,e).catch(n=>e.error(n))})}function IC(t){return lf(cs(t))}function RC(t,e){var n,i,r,s;return af(this,void 0,void 0,function*(){try{for(n=cf(t);i=yield n.next(),!i.done;){let a=i.value;if(e.next(a),e.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(s=n.return)&&(yield s.call(n))}finally{if(r)throw r.error}}e.complete()})}function T2(t,e,n,i=0,r=!1){let s=e.schedule(function(){n(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(s),!r)return s}function fs(t,e=0){return q1((n,i)=>{n.subscribe(F1(i,r=>T2(i,t,()=>i.next(r),e),()=>T2(i,t,()=>i.complete(),e),r=>T2(i,t,()=>i.error(r),e)))})}function us(t,e=0){return q1((n,i)=>{i.add(t.schedule(()=>n.subscribe(i),e))})}function ff(t,e){return _e(t).pipe(us(e),fs(e))}function uf(t,e){return _e(t).pipe(us(e),fs(e))}function hf(t,e){return new J1(n=>{let i=0;return e.schedule(function(){i===t.length?n.complete():(n.next(t[i++]),n.closed||this.schedule())})})}function df(t,e){return new J1(n=>{let i;return T2(n,e,()=>{i=t[as](),T2(n,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(a){n.error(a);return}s?n.complete():n.next(r)},0,!0)}),()=>_1(i?.return)&&i.return()})}function hs(t,e){if(!t)throw new Error("Iterable cannot be null");return new J1(n=>{T2(n,e,()=>{let i=t[Symbol.asyncIterator]();T2(n,e,()=>{i.next().then(r=>{r.done?n.complete():n.next(r.value)})},0,!0)})})}function pf(t,e){return hs(cs(t),e)}function mf(t,e){if(t!=null){if(is(t))return ff(t,e);if(Hn(t))return hf(t,e);if(ns(t))return uf(t,e);if(rs(t))return hs(t,e);if(os(t))return df(t,e);if(ls(t))return pf(t,e)}throw ss(t)}function Ie(t,e){return e?mf(t,e):_e(t)}function H1(...t){let e=Dt(t);return Ie(t,e)}function En(t,e){let n=_1(t)?t:()=>t,i=r=>r.error(n());return new J1(e?r=>e.schedule(i,0,r):i)}function qo(t){return!!t&&(t instanceof J1||_1(t.lift)&&_1(t.subscribe))}var e3=gn(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function gf(t){return t instanceof Date&&!isNaN(t)}function L1(t,e){return q1((n,i)=>{let r=0;n.subscribe(F1(i,s=>{i.next(t.call(e,s,r++))}))})}var{isArray:PC}=Array;function kC(t,e){return PC(e)?t(...e):t(e)}function ds(t){return L1(e=>kC(t,e))}var{isArray:OC}=Array,{getPrototypeOf:FC,prototype:UC,keys:BC}=Object;function vf(t){if(t.length===1){let e=t[0];if(OC(e))return{args:e,keys:null};if(GC(e)){let n=BC(e);return{args:n.map(i=>e[i]),keys:n}}}return{args:t,keys:null}}function GC(t){return t&&typeof t=="object"&&FC(t)===UC}function Mf(t,e){return t.reduce((n,i,r)=>(n[i]=e[r],n),{})}function ps(...t){let e=Dt(t),n=nf(t),{args:i,keys:r}=vf(t);if(i.length===0)return Ie([],e);let s=new J1(WC(i,e,r?a=>Mf(r,a):F2));return n?s.pipe(ds(n)):s}function WC(t,e,n=F2){return i=>{Cf(e,()=>{let{length:r}=t,s=new Array(r),a=r,o=r;for(let c=0;c<r;c++)Cf(e,()=>{let l=Ie(t[c],e),f=!1;l.subscribe(F1(i,u=>{s[c]=u,f||(f=!0,o--),o||i.next(n(s.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Cf(t,e,n){t?T2(n,t,e):e()}function yf(t,e,n,i,r,s,a,o){let c=[],l=0,f=0,u=!1,h=()=>{u&&!c.length&&!l&&e.complete()},m=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let p=!1;_e(n(v,f++)).subscribe(F1(e,d=>{r?.(d),s?m(d):e.next(d)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let d=c.shift();a?T2(e,a,()=>g(d)):g(d)}h()}catch(d){e.error(d)}}))};return t.subscribe(F1(e,m,()=>{u=!0,h()})),()=>{o?.()}}function Re(t,e,n=1/0){return _1(e)?Re((i,r)=>L1((s,a)=>e(i,s,r,a))(_e(t(i,r))),n):(typeof e=="number"&&(n=e),q1((i,r)=>yf(i,r,t,n)))}function sr(t=1/0){return Re(F2,t)}function xf(){return sr(1)}function V3(...t){return xf()(Ie(t,Dt(t)))}function ms(t){return new J1(e=>{_e(t()).subscribe(e)})}var jC=["addListener","removeListener"],qC=["addEventListener","removeEventListener"],$C=["on","off"];function Qe(t,e,n,i){if(_1(n)&&(i=n,n=void 0),i)return Qe(t,e,n).pipe(ds(i));let[r,s]=ZC(t)?qC.map(a=>o=>t[a](e,o,n)):XC(t)?jC.map(bf(t,e)):YC(t)?$C.map(bf(t,e)):[];if(!r&&Hn(t))return Re(a=>Qe(a,e,n))(_e(t));if(!r)throw new TypeError("Invalid event target");return new J1(a=>{let o=(...c)=>a.next(1<c.length?c:c[0]);return r(o),()=>s(o)})}function bf(t,e){return n=>i=>t[n](e,i)}function XC(t){return _1(t.addListener)&&_1(t.removeListener)}function YC(t){return _1(t.on)&&_1(t.off)}function ZC(t){return _1(t.addEventListener)&&_1(t.removeEventListener)}function Vn(t=0,e,n=tf){let i=-1;return e!=null&&(ts(e)?n=e:i=e),new J1(r=>{let s=gf(t)?+t-n.now():t;s<0&&(s=0);let a=0;return n.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},s)})}function $o(t=0,e=_4){return t<0&&(t=0),Vn(t,t,e)}function An(...t){let e=Dt(t),n=rf(t,1/0),i=t;return i.length?i.length===1?_e(i[0]):sr(n)(Ie(i,e)):o2}function U2(t,e){return q1((n,i)=>{let r=0;n.subscribe(F1(i,s=>t.call(e,s,r++)&&i.next(s)))})}function A3(t){return q1((e,n)=>{let i=null,r=!1,s;i=e.subscribe(F1(n,void 0,void 0,a=>{s=_e(t(a,A3(t)(e))),i?(i.unsubscribe(),i=null,s.subscribe(n)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(n))})}function zf(t,e,n,i,r){return(s,a)=>{let o=n,c=e,l=0;s.subscribe(F1(a,f=>{let u=l++;c=o?t(c,f,u):(o=!0,f),i&&a.next(c)},r&&(()=>{o&&a.next(c),a.complete()})))}}function T3(t,e){return _1(e)?Re(t,e,1):Re(t,1)}function D3(t){return q1((e,n)=>{let i=!1;e.subscribe(F1(n,r=>{i=!0,n.next(r)},()=>{i||n.next(t),n.complete()}))})}function z2(t){return t<=0?()=>o2:q1((e,n)=>{let i=0;e.subscribe(F1(n,r=>{++i<=t&&(n.next(r),t<=i&&n.complete())}))})}function _f(){return q1((t,e)=>{t.subscribe(F1(e,x4))})}function ar(t){return L1(()=>t)}function Xo(t,e){return e?n=>V3(e.pipe(z2(1),_f()),n.pipe(Xo(t))):Re((n,i)=>_e(t(n,i)).pipe(z2(1),ar(n)))}function gs(t,e=_4){let n=Vn(t,e);return Xo(()=>n)}function vs(t=JC){return q1((e,n)=>{let i=!1;e.subscribe(F1(n,r=>{i=!0,n.next(r)},()=>i?n.complete():n.error(t())))})}function JC(){return new e3}function ut(t){return q1((e,n)=>{try{e.subscribe(n)}finally{n.add(t)}})}function ht(t,e){let n=arguments.length>=2;return i=>i.pipe(t?U2((r,s)=>t(r,s,i)):F2,z2(1),n?D3(e):vs(()=>new e3))}function Tn(t){return t<=0?()=>o2:q1((e,n)=>{let i=[];e.subscribe(F1(n,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)n.next(r);n.complete()},void 0,()=>{i=null}))})}function Yo(t,e){let n=arguments.length>=2;return i=>i.pipe(t?U2((r,s)=>t(r,s,i)):F2,Tn(1),n?D3(e):vs(()=>new e3))}function Zo(t,e){return q1(zf(t,e,arguments.length>=2,!0))}function Dn(...t){let e=Dt(t);return q1((n,i)=>{(e?V3(t,n,e):V3(t,n)).subscribe(i)})}function He(t,e){return q1((n,i)=>{let r=null,s=0,a=!1,o=()=>a&&!r&&i.complete();n.subscribe(F1(i,c=>{r?.unsubscribe();let l=0,f=s++;_e(t(c,f)).subscribe(r=F1(i,u=>i.next(e?e(c,u,f,l++):u),()=>{r=null,o()}))},()=>{a=!0,o()}))})}function dt(t){return q1((e,n)=>{_e(t).subscribe(F1(n,()=>n.complete(),x4)),!n.closed&&e.subscribe(n)})}function Nn(t,e=!1){return q1((n,i)=>{let r=0;n.subscribe(F1(i,s=>{let a=t(s,r++);(a||e)&&i.next(s),!a&&i.complete()}))})}function le(t,e,n){let i=_1(t)||e||n?{next:t,error:e,complete:n}:t;return i?q1((r,s)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let o=!0;r.subscribe(F1(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;o=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;o=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;o&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):F2}function wf(t,e){return q1((n,i)=>{let{leading:r=!0,trailing:s=!1}=e??{},a=!1,o=null,c=null,l=!1,f=()=>{c?.unsubscribe(),c=null,s&&(m(),l&&i.complete())},u=()=>{c=null,l&&i.complete()},h=g=>c=_e(t(g)).subscribe(F1(i,f,u)),m=()=>{if(a){a=!1;let g=o;o=null,i.next(g),!l&&h(g)}};n.subscribe(F1(i,g=>{a=!0,o=g,!(c&&!c.closed)&&(r?m():h(g))},()=>{l=!0,!(s&&a&&c&&!c.closed)&&i.complete()}))})}function Jo(t,e=_4,n){let i=Vn(t,e);return wf(()=>i,n)}var du="https://g.co/ng/security#xss",v1=class extends Error{constructor(e,n){super(na(e,n)),this.code=e}};function na(t,e){return`${`NG0${Math.abs(t)}`}${e?": "+e:""}`}var pu=Symbol("InputSignalNode#UNSET"),KC=Me(l1({},Do),{transformFn:void 0,applyValueToInputSignal(t,e){q6(t,e)}});function mu(t,e){let n=Object.create(KC);n.value=t,n.transformFn=e?.transform;function i(){if(U6(n),n.value===pu)throw new v1(-950,!1);return n.value}return i[Tt]=n,i}function yr(t){return{toString:t}.toString()}var Ms="__parameters__";function QC(t){return function(...n){if(t){let i=t(...n);for(let r in i)this[r]=i[r]}}}function gu(t,e,n){return yr(()=>{let i=QC(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let a=new r(...s);return o.annotation=a,o;function o(c,l,f){let u=c.hasOwnProperty(Ms)?c[Ms]:Object.defineProperty(c,Ms,{value:[]})[Ms];for(;u.length<=f;)u.push(null);return(u[f]=u[f]||[]).push(a),c}}return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=t,r.annotationCls=r,r})}var t3=globalThis;function xe(t){for(let e in t)if(t[e]===xe)return e;throw Error("Could not find renamed property on target object.")}function ey(t,e){for(let n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function w2(t){if(typeof t=="string")return t;if(Array.isArray(t))return"["+t.map(w2).join(", ")+"]";if(t==null)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n===-1?e:e.substring(0,n)}function pc(t,e){return t==null||t===""?e===null?"":e:e==null||e===""?t:t+" "+e}var ty=xe({__forward_ref__:xe});function vu(t){return t.__forward_ref__=vu,t.toString=function(){return w2(this())},t}function c2(t){return Mu(t)?t():t}function Mu(t){return typeof t=="function"&&t.hasOwnProperty(ty)&&t.__forward_ref__===vu}function d1(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function nt(t){return{providers:t.providers||[],imports:t.imports||[]}}function ia(t){return Sf(t,yu)||Sf(t,xu)}function Cu(t){return ia(t)!==null}function Sf(t,e){return t.hasOwnProperty(e)?t[e]:null}function ny(t){let e=t&&(t[yu]||t[xu]);return e||null}function Hf(t){return t&&(t.hasOwnProperty(Lf)||t.hasOwnProperty(iy))?t[Lf]:null}var yu=xe({\u0275prov:xe}),Lf=xe({\u0275inj:xe}),xu=xe({ngInjectableDef:xe}),iy=xe({ngInjectorDef:xe}),C1=class{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=d1({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function bu(t){return t&&!!t.\u0275providers}var ry=xe({\u0275cmp:xe}),sy=xe({\u0275dir:xe}),ay=xe({\u0275pipe:xe}),oy=xe({\u0275mod:xe}),Ns=xe({\u0275fac:xe}),or=xe({__NG_ELEMENT_ID__:xe}),Ef=xe({__NG_ENV_ID__:xe});function xr(t){return typeof t=="string"?t:t==null?"":String(t)}function cy(t){return typeof t=="function"?t.name||t.toString():typeof t=="object"&&t!=null&&typeof t.type=="function"?t.type.name||t.type.toString():xr(t)}function ly(t,e){let n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new v1(-200,t)}function x8(t,e){throw new v1(-201,!1)}var Q1=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}(Q1||{}),mc;function zu(){return mc}function et(t){let e=mc;return mc=t,e}function _u(t,e,n){let i=ia(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(n&Q1.Optional)return null;if(e!==void 0)return e;x8(t,"Injector")}var fy={},cr=fy,gc="__NG_DI_FLAG__",Is="ngTempTokenPath",uy="ngTokenPath",hy=/\n/gm,dy="\u0275",Vf="__source",kn;function py(){return kn}function N3(t){let e=kn;return kn=t,e}function my(t,e=Q1.Default){if(kn===void 0)throw new v1(-203,!1);return kn===null?_u(t,void 0,e):kn.get(t,e&Q1.Optional?null:void 0,e)}function V1(t,e=Q1.Default){return(zu()||my)(c2(t),e)}function G(t,e=Q1.Default){return V1(t,ra(e))}function ra(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function vc(t){let e=[];for(let n=0;n<t.length;n++){let i=c2(t[n]);if(Array.isArray(i)){if(i.length===0)throw new v1(900,!1);let r,s=Q1.Default;for(let a=0;a<i.length;a++){let o=i[a],c=gy(o);typeof c=="number"?c===-1?r=o.token:s|=c:r=o}e.push(V1(r,s))}else e.push(V1(i))}return e}function wu(t,e){return t[gc]=e,t.prototype[gc]=e,t}function gy(t){return t[gc]}function vy(t,e,n,i){let r=t[Is];throw e[Vf]&&r.unshift(e[Vf]),t.message=My(`
`+t.message,r,n,i),t[uy]=r,t[Is]=null,t}function My(t,e,n,i=null){t=t&&t.charAt(0)===`
`&&t.charAt(1)==dy?t.slice(2):t;let r=w2(e);if(Array.isArray(e))r=e.map(w2).join(" -> ");else if(typeof e=="object"){let s=[];for(let a in e)if(e.hasOwnProperty(a)){let o=e[a];s.push(a+":"+(typeof o=="string"?JSON.stringify(o):w2(o)))}r=`{${s.join(", ")}}`}return`${n}${i?"("+i+")":""}[${r}]: ${t.replace(hy,`
  `)}`}var b8=wu(gu("Optional"),8);var Su=wu(gu("SkipSelf"),4);function Fn(t,e){let n=t.hasOwnProperty(Ns);return n?t[Ns]:null}function Cy(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],s=e[i];if(n&&(r=n(r),s=n(s)),s!==r)return!1}return!0}function yy(t){return t.flat(Number.POSITIVE_INFINITY)}function z8(t,e){t.forEach(n=>Array.isArray(n)?z8(n,e):e(n))}function Hu(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Rs(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function xy(t,e){let n=[];for(let i=0;i<t;i++)n.push(e);return n}function by(t,e,n,i){let r=t.length;if(r==e)t.push(n,i);else if(r===1)t.push(i,t[0]),t[0]=n;else{for(r--,t.push(t[r-1],t[r]);r>e;){let s=r-2;t[r]=t[s],r--}t[e]=n,t[e+1]=i}}function _8(t,e,n){let i=br(t,e);return i>=0?t[i|1]=n:(i=~i,by(t,i,e,n)),i}function Ko(t,e){let n=br(t,e);if(n>=0)return t[n|1]}function br(t,e){return zy(t,e,1)}function zy(t,e,n){let i=0,r=t.length>>n;for(;r!==i;){let s=i+(r-i>>1),a=t[s<<n];if(e===a)return s<<n;a>e?r=s:i=s+1}return~(r<<n)}var i3={},_2=[],H4=new C1(""),Lu=new C1("",-1),Eu=new C1(""),Ps=class{get(e,n=cr){if(n===cr){let i=new Error(`NullInjectorError: No provider for ${w2(e)}!`);throw i.name="NullInjectorError",i}return n}},Vu=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}(Vu||{}),Rt=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}(Rt||{}),g2=function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t}(g2||{});function _y(t,e,n){let i=t.length;for(;;){let r=t.indexOf(e,n);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||t.charCodeAt(r+s)<=32)return r}n=r+1}}function Mc(t,e,n){let i=0;for(;i<n.length;){let r=n[i];if(typeof r=="number"){if(r!==0)break;i++;let s=n[i++],a=n[i++],o=n[i++];t.setAttribute(e,a,o,s)}else{let s=r,a=n[++i];Sy(s)?t.setProperty(e,s,a):t.setAttribute(e,s,a),i++}}return i}function wy(t){return t===3||t===4||t===6}function Sy(t){return t.charCodeAt(0)===64}function lr(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?n=r:n===0||(n===-1||n===2?Af(t,n,r,null,e[++i]):Af(t,n,r,null,null))}}return t}function Af(t,e,n,i,r){let s=0,a=t.length;if(e===-1)a=-1;else for(;s<t.length;){let o=t[s++];if(typeof o=="number"){if(o===e){a=-1;break}else if(o>e){a=s-1;break}}}for(;s<t.length;){let o=t[s];if(typeof o=="number")break;if(o===n){if(i===null){r!==null&&(t[s+1]=r);return}else if(i===t[s+1]){t[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}a!==-1&&(t.splice(a,0,e),s=a+1),t.splice(s++,0,n),i!==null&&t.splice(s++,0,i),r!==null&&t.splice(s++,0,r)}var Au="ng-template";function Hy(t,e,n,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&_y(e[r+1].toLowerCase(),n,0)!==-1)return!0}else if(w8(t))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===n)return!0}return!1}function w8(t){return t.type===4&&t.value!==Au}function Ly(t,e,n){let i=t.type===4&&!n?Au:t.value;return e===i}function Ey(t,e,n){let i=4,r=t.attrs,s=r!==null?Ty(r):0,a=!1;for(let o=0;o<e.length;o++){let c=e[o];if(typeof c=="number"){if(!a&&!pt(i)&&!pt(c))return!1;if(a&&pt(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!Ly(t,c,n)||c===""&&e.length===1){if(pt(i))return!1;a=!0}}else if(i&8){if(r===null||!Hy(t,r,c,n)){if(pt(i))return!1;a=!0}}else{let l=e[++o],f=Vy(c,r,w8(t),n);if(f===-1){if(pt(i))return!1;a=!0;continue}if(l!==""){let u;if(f>s?u="":u=r[f+1].toLowerCase(),i&2&&l!==u){if(pt(i))return!1;a=!0}}}}return pt(i)||a}function pt(t){return(t&1)===0}function Vy(t,e,n,i){if(e===null)return-1;let r=0;if(i||!n){let s=!1;for(;r<e.length;){let a=e[r];if(a===t)return r;if(a===3||a===6)s=!0;else if(a===1||a===2){let o=e[++r];for(;typeof o=="string";)o=e[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=s?1:2}return-1}else return Dy(e,t)}function Tu(t,e,n=!1){for(let i=0;i<e.length;i++)if(Ey(t,e[i],n))return!0;return!1}function Ay(t){let e=t.attrs;if(e!=null){let n=e.indexOf(5);if(!(n&1))return e[n+1]}return null}function Ty(t){for(let e=0;e<t.length;e++){let n=t[e];if(wy(n))return e}return t.length}function Dy(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){let i=t[n];if(typeof i=="number")return-1;if(i===e)return n;n++}return-1}function Ny(t,e){e:for(let n=0;n<e.length;n++){let i=e[n];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Tf(t,e){return t?":not("+e.trim()+")":e}function Iy(t){let e=t[0],n=1,i=2,r="",s=!1;for(;n<t.length;){let a=t[n];if(typeof a=="string")if(i&2){let o=t[++n];r+="["+a+(o.length>0?'="'+o+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!pt(a)&&(e+=Tf(s,r),r=""),i=a,s=s||!pt(i);n++}return r!==""&&(e+=Tf(s,r)),e}function Ry(t){return t.map(Iy).join(",")}function Py(t){let e=[],n=[],i=1,r=2;for(;i<t.length;){let s=t[i];if(typeof s=="string")r===2?s!==""&&e.push(s,t[++i]):r===8&&n.push(s);else{if(!pt(r))break;r=s}i++}return{attrs:e,classes:n}}function Pe(t){return yr(()=>{let e=Ru(t),n=Me(l1({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Vu.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Rt.Emulated,styles:t.styles||_2,_:null,schemas:t.schemas||null,tView:null,id:""});Pu(n);let i=t.dependencies;return n.directiveDefs=Nf(i,!1),n.pipeDefs=Nf(i,!0),n.id=Fy(n),n})}function ky(t){return L4(t)||S8(t)}function Oy(t){return t!==null}function it(t){return yr(()=>({type:t.type,bootstrap:t.bootstrap||_2,declarations:t.declarations||_2,imports:t.imports||_2,exports:t.exports||_2,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Df(t,e){if(t==null)return i3;let n={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],s,a,o=g2.None;Array.isArray(r)?(o=r[0],s=r[1],a=r[2]??s):(s=r,a=r),e?(n[s]=o!==g2.None?[i,o]:i,e[s]=a):n[s]=i}return n}function ke(t){return yr(()=>{let e=Ru(t);return Pu(e),e})}function L4(t){return t[ry]||null}function S8(t){return t[sy]||null}function Du(t){return t[ay]||null}function Nu(t){let e=L4(t)||S8(t)||Du(t);return e!==null?e.standalone:!1}function Iu(t,e){let n=t[oy]||null;if(!n&&e===!0)throw new Error(`Type ${w2(t)} does not have '\u0275mod' property.`);return n}function Ru(t){let e={};return{type:t.type,providersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:t.inputs||i3,exportAs:t.exportAs||null,standalone:t.standalone===!0,signals:t.signals===!0,selectors:t.selectors||_2,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Df(t.inputs,e),outputs:Df(t.outputs),debugInfo:null}}function Pu(t){t.features?.forEach(e=>e(t))}function Nf(t,e){if(!t)return null;let n=e?Du:ky;return()=>(typeof t=="function"?t():t).map(i=>n(i)).filter(Oy)}function Fy(t){let e=0,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,t.consts,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery].join("|");for(let r of n)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function k3(t){return{\u0275providers:t}}function Uy(...t){return{\u0275providers:ku(!0,t),\u0275fromNgModule:!0}}function ku(t,...e){let n=[],i=new Set,r,s=a=>{n.push(a)};return z8(e,a=>{let o=a;Cc(o,s,[],i)&&(r||=[],r.push(o))}),r!==void 0&&Ou(r,s),n}function Ou(t,e){for(let n=0;n<t.length;n++){let{ngModule:i,providers:r}=t[n];H8(r,s=>{e(s,i)})}}function Cc(t,e,n,i){if(t=c2(t),!t)return!1;let r=null,s=Hf(t),a=!s&&L4(t);if(!s&&!a){let c=t.ngModule;if(s=Hf(c),s)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let o=i.has(r);if(a){if(o)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)Cc(l,e,n,i)}}else if(s){if(s.imports!=null&&!o){i.add(r);let l;try{z8(s.imports,f=>{Cc(f,e,n,i)&&(l||=[],l.push(f))})}finally{}l!==void 0&&Ou(l,e)}if(!o){let l=Fn(r)||(()=>new r);e({provide:r,useFactory:l,deps:_2},r),e({provide:Eu,useValue:r,multi:!0},r),e({provide:H4,useValue:()=>V1(r),multi:!0},r)}let c=s.providers;if(c!=null&&!o){let l=t;H8(c,f=>{e(f,l)})}}else return!1;return r!==t&&t.providers!==void 0}function H8(t,e){for(let n of t)bu(n)&&(n=n.\u0275providers),Array.isArray(n)?H8(n,e):e(n)}var By=xe({provide:String,useValue:xe});function Fu(t){return t!==null&&typeof t=="object"&&By in t}function Gy(t){return!!(t&&t.useExisting)}function Wy(t){return!!(t&&t.useFactory)}function Un(t){return typeof t=="function"}function jy(t){return!!t.useClass}var sa=new C1(""),Hs={},qy={},Qo;function L8(){return Qo===void 0&&(Qo=new Ps),Qo}var D2=class{},fr=class extends D2{get destroyed(){return this._destroyed}constructor(e,n,i,r){super(),this.parent=n,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,xc(e,a=>this.processProvider(a)),this.records.set(Lu,In(void 0,this)),r.has("environment")&&this.records.set(D2,In(void 0,this));let s=this.records.get(sa);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Eu,_2,Q1.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=ce(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of n)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ce(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let n=N3(this),i=et(void 0),r;try{return e()}finally{N3(n),et(i)}}get(e,n=cr,i=Q1.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Ef))return e[Ef](this);i=ra(i);let r,s=N3(this),a=et(void 0);try{if(!(i&Q1.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Jy(e)&&ia(e);l&&this.injectableDefInScope(l)?c=In(yc(e),Hs):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let o=i&Q1.Self?L8():this.parent;return n=i&Q1.Optional&&n===cr?null:n,o.get(e,n)}catch(o){if(o.name==="NullInjectorError"){if((o[Is]=o[Is]||[]).unshift(w2(e)),s)throw o;return vy(o,e,"R3InjectorError",this.source)}else throw o}finally{et(a),N3(s)}}resolveInjectorInitializers(){let e=ce(null),n=N3(this),i=et(void 0),r;try{let s=this.get(H4,_2,Q1.Self);for(let a of s)a()}finally{N3(n),et(i),ce(e)}}toString(){let e=[],n=this.records;for(let i of n.keys())e.push(w2(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new v1(205,!1)}processProvider(e){e=c2(e);let n=Un(e)?e:c2(e&&e.provide),i=Xy(e);if(!Un(e)&&e.multi===!0){let r=this.records.get(n);r||(r=In(void 0,Hs,!0),r.factory=()=>vc(r.multi),this.records.set(n,r)),n=e,r.multi.push(e)}this.records.set(n,i)}hydrate(e,n){let i=ce(null);try{return n.value===Hs&&(n.value=qy,n.value=n.factory()),typeof n.value=="object"&&n.value&&Zy(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{ce(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let n=c2(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};function yc(t){let e=ia(t),n=e!==null?e.factory:Fn(t);if(n!==null)return n;if(t instanceof C1)throw new v1(204,!1);if(t instanceof Function)return $y(t);throw new v1(204,!1)}function $y(t){if(t.length>0)throw new v1(204,!1);let n=ny(t);return n!==null?()=>n.factory(t):()=>new t}function Xy(t){if(Fu(t))return In(void 0,t.useValue);{let e=Uu(t);return In(e,Hs)}}function Uu(t,e,n){let i;if(Un(t)){let r=c2(t);return Fn(r)||yc(r)}else if(Fu(t))i=()=>c2(t.useValue);else if(Wy(t))i=()=>t.useFactory(...vc(t.deps||[]));else if(Gy(t))i=()=>V1(c2(t.useExisting));else{let r=c2(t&&(t.useClass||t.provide));if(Yy(t))i=()=>new r(...vc(t.deps));else return Fn(r)||yc(r)}return i}function In(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Yy(t){return!!t.deps}function Zy(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function Jy(t){return typeof t=="function"||typeof t=="object"&&t instanceof C1}function xc(t,e){for(let n of t)Array.isArray(n)?xc(n,e):n&&bu(n)?xc(n.\u0275providers,e):e(n)}function rt(t,e){t instanceof fr&&t.assertNotDestroyed();let n,i=N3(t),r=et(void 0);try{return e()}finally{N3(i),et(r)}}function Bu(){return zu()!==void 0||py()!=null}function E8(t){if(!Bu())throw new v1(-203,!1)}function Ky(t){return typeof t=="function"}var B2=0,R1=1,E1=2,e2=3,gt=4,W2=5,tt=6,ur=7,vt=8,Bn=9,Mt=10,we=11,hr=12,If=13,jn=14,G2=15,zr=16,Rn=17,r3=18,aa=19,Gu=20,I3=21,Ls=22,E4=23,v2=25,Wu=1,dr=6,s3=7,ks=8,Gn=9,S2=10,V8=function(t){return t[t.None=0]="None",t[t.HasTransplantedViews=2]="HasTransplantedViews",t}(V8||{});function n3(t){return Array.isArray(t)&&typeof t[Wu]=="object"}function kt(t){return Array.isArray(t)&&t[Wu]===!0}function ju(t){return(t.flags&4)!==0}function _r(t){return t.componentOffset>-1}function A8(t){return(t.flags&1)===1}function R3(t){return!!t.template}function qu(t){return(t[E1]&512)!==0}var bc=class{constructor(e,n,i){this.previousValue=e,this.currentValue=n,this.firstChange=i}isFirstChange(){return this.firstChange}};function $u(t,e,n,i){e!==null?e.applyValueToInputSignal(e,i):t[n]=i}function O3(){return Xu}function Xu(t){return t.type.prototype.ngOnChanges&&(t.setInput=ex),Qy}O3.ngInherit=!0;function Qy(){let t=Zu(this),e=t?.current;if(e){let n=t.previous;if(n===i3)t.previous=e;else for(let i in e)n[i]=e[i];t.current=null,this.ngOnChanges(e)}}function ex(t,e,n,i,r){let s=this.declaredInputs[i],a=Zu(t)||tx(t,{previous:i3,current:null}),o=a.current||(a.current={}),c=a.previous,l=c[s];o[s]=new bc(l&&l.currentValue,n,c===i3),$u(t,e,r,n)}var Yu="__ngSimpleChanges__";function Zu(t){return t[Yu]||null}function tx(t,e){return t[Yu]=e}var Rf=null;var Nt=function(t,e,n){Rf?.(t,e,n)},Ju="svg",nx="math",ix=!1;function rx(){return ix}function Ct(t){for(;Array.isArray(t);)t=t[B2];return t}function Ku(t,e){return Ct(e[t])}function j2(t,e){return Ct(e[t.index])}function T8(t,e){return t.data[e]}function F3(t,e){let n=e[t];return n3(n)?n:n[B2]}function sx(t){return(t[E1]&4)===4}function D8(t){return(t[E1]&128)===128}function ax(t){return kt(t[e2])}function Os(t,e){return e==null?null:t[e]}function Qu(t){t[Rn]=0}function ox(t){t[E1]&1024||(t[E1]|=1024,D8(t)&&pr(t))}function cx(t,e){for(;t>0;)e=e[jn],t--;return e}function N8(t){return!!(t[E1]&9216||t[E4]?.dirty)}function zc(t){t[Mt].changeDetectionScheduler?.notify(1),N8(t)?pr(t):t[E1]&64&&(rx()?(t[E1]|=1024,pr(t)):t[Mt].changeDetectionScheduler?.notify())}function pr(t){t[Mt].changeDetectionScheduler?.notify();let e=mr(t);for(;e!==null&&!(e[E1]&8192||(e[E1]|=8192,!D8(e)));)e=mr(e)}function eh(t,e){if((t[E1]&256)===256)throw new v1(911,!1);t[I3]===null&&(t[I3]=[]),t[I3].push(e)}function lx(t,e){if(t[I3]===null)return;let n=t[I3].indexOf(e);n!==-1&&t[I3].splice(n,1)}function mr(t){let e=t[e2];return kt(e)?e[e2]:e}var ne={lFrame:lh(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function fx(){return ne.lFrame.elementDepthCount}function ux(){ne.lFrame.elementDepthCount++}function hx(){ne.lFrame.elementDepthCount--}function th(){return ne.bindingsEnabled}function qn(){return ne.skipHydrationRootTNode!==null}function dx(t){return ne.skipHydrationRootTNode===t}function px(t){ne.skipHydrationRootTNode=t}function mx(){ne.skipHydrationRootTNode=null}function fe(){return ne.lFrame.lView}function l2(){return ne.lFrame.tView}function q2(){let t=nh();for(;t!==null&&t.type===64;)t=t.parent;return t}function nh(){return ne.lFrame.currentTNode}function gx(){let t=ne.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function wr(t,e){let n=ne.lFrame;n.currentTNode=t,n.isParent=e}function ih(){return ne.lFrame.isParent}function rh(){ne.lFrame.isParent=!1}function vx(t){return ne.lFrame.bindingIndex=t}function Sr(){return ne.lFrame.bindingIndex++}function sh(t){let e=ne.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function Mx(){return ne.lFrame.inI18n}function Cx(t,e){let n=ne.lFrame;n.bindingIndex=n.bindingRootIndex=t,_c(e)}function yx(){return ne.lFrame.currentDirectiveIndex}function _c(t){ne.lFrame.currentDirectiveIndex=t}function xx(t){let e=ne.lFrame.currentDirectiveIndex;return e===-1?null:t[e]}function ah(){return ne.lFrame.currentQueryIndex}function I8(t){ne.lFrame.currentQueryIndex=t}function bx(t){let e=t[R1];return e.type===2?e.declTNode:e.type===1?t[W2]:null}function oh(t,e,n){if(n&Q1.SkipSelf){let r=e,s=t;for(;r=r.parent,r===null&&!(n&Q1.Host);)if(r=bx(s),r===null||(s=s[jn],r.type&10))break;if(r===null)return!1;e=r,t=s}let i=ne.lFrame=ch();return i.currentTNode=e,i.lView=t,!0}function R8(t){let e=ch(),n=t[R1];ne.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function ch(){let t=ne.lFrame,e=t===null?null:t.child;return e===null?lh(t):e}function lh(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function fh(){let t=ne.lFrame;return ne.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var uh=fh;function P8(){let t=fh();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function zx(t){return(ne.lFrame.contextLView=cx(t,ne.lFrame.contextLView))[vt]}function R4(){return ne.lFrame.selectedIndex}function V4(t){ne.lFrame.selectedIndex=t}function k8(){let t=ne.lFrame;return T8(t.tView,t.selectedIndex)}function hh(){ne.lFrame.currentNamespace=Ju}function dh(){return ne.lFrame.currentNamespace}var ph=!0;function O8(){return ph}function Ot(t){ph=t}function _x(t,e,n){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let a=Xu(e);(n.preOrderHooks??=[]).push(t,a),(n.preOrderCheckHooks??=[]).push(t,a)}r&&(n.preOrderHooks??=[]).push(0-t,r),s&&((n.preOrderHooks??=[]).push(t,s),(n.preOrderCheckHooks??=[]).push(t,s))}function F8(t,e){for(let n=e.directiveStart,i=e.directiveEnd;n<i;n++){let s=t.data[n].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:o,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:f}=s;a&&(t.contentHooks??=[]).push(-n,a),o&&((t.contentHooks??=[]).push(n,o),(t.contentCheckHooks??=[]).push(n,o)),c&&(t.viewHooks??=[]).push(-n,c),l&&((t.viewHooks??=[]).push(n,l),(t.viewCheckHooks??=[]).push(n,l)),f!=null&&(t.destroyHooks??=[]).push(n,f)}}function Es(t,e,n){mh(t,e,3,n)}function Vs(t,e,n,i){(t[E1]&3)===n&&mh(t,e,n,i)}function ec(t,e){let n=t[E1];(n&3)===e&&(n&=16383,n+=1,t[E1]=n)}function mh(t,e,n,i){let r=i!==void 0?t[Rn]&65535:0,s=i??-1,a=e.length-1,o=0;for(let c=r;c<a;c++)if(typeof e[c+1]=="number"){if(o=e[c],i!=null&&o>=i)break}else e[c]<0&&(t[Rn]+=65536),(o<s||s==-1)&&(wx(t,n,e,c),t[Rn]=(t[Rn]&4294901760)+c+2),c++}function Pf(t,e){Nt(4,t,e);let n=ce(null);try{e.call(t)}finally{ce(n),Nt(5,t,e)}}function wx(t,e,n,i){let r=n[i]<0,s=n[i+1],a=r?-n[i]:n[i],o=t[a];r?t[E1]>>14<t[Rn]>>16&&(t[E1]&3)===e&&(t[E1]+=16384,Pf(o,s)):Pf(o,s)}var On=-1,A4=class{constructor(e,n,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=i}};function Sx(t){return t instanceof A4}function Hx(t){return(t.flags&8)!==0}function Lx(t){return(t.flags&16)!==0}function gh(t){return t!==On}function Fs(t){return t&32767}function Ex(t){return t>>16}function Us(t,e){let n=Ex(t),i=e;for(;n>0;)i=i[jn],n--;return i}var wc=!0;function kf(t){let e=wc;return wc=t,e}var Vx=256,vh=Vx-1,Mh=5,Ax=0,It={};function Tx(t,e,n){let i;typeof n=="string"?i=n.charCodeAt(0)||0:n.hasOwnProperty(or)&&(i=n[or]),i==null&&(i=n[or]=Ax++);let r=i&vh,s=1<<r;e.data[t+(r>>Mh)]|=s}function Bs(t,e){let n=Ch(t,e);if(n!==-1)return n;let i=e[R1];i.firstCreatePass&&(t.injectorIndex=e.length,tc(i.data,t),tc(e,null),tc(i.blueprint,null));let r=U8(t,e),s=t.injectorIndex;if(gh(r)){let a=Fs(r),o=Us(r,e),c=o[R1].data;for(let l=0;l<8;l++)e[s+l]=o[a+l]|c[a+l]}return e[s+8]=r,s}function tc(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Ch(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function U8(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,i=null,r=e;for(;r!==null;){if(i=_h(r),i===null)return On;if(n++,r=r[jn],i.injectorIndex!==-1)return i.injectorIndex|n<<16}return On}function Sc(t,e,n){Tx(t,e,n)}function yh(t,e,n){if(n&Q1.Optional||t!==void 0)return t;x8(e,"NodeInjector")}function xh(t,e,n,i){if(n&Q1.Optional&&i===void 0&&(i=null),!(n&(Q1.Self|Q1.Host))){let r=t[Bn],s=et(void 0);try{return r?r.get(e,i,n&Q1.Optional):_u(e,i,n&Q1.Optional)}finally{et(s)}}return yh(i,e,n)}function bh(t,e,n,i=Q1.Default,r){if(t!==null){if(e[E1]&2048&&!(i&Q1.Self)){let a=Rx(t,e,n,i,It);if(a!==It)return a}let s=zh(t,e,n,i,It);if(s!==It)return s}return xh(e,n,i,r)}function zh(t,e,n,i,r){let s=Nx(n);if(typeof s=="function"){if(!oh(e,t,i))return i&Q1.Host?yh(r,n,i):xh(e,n,i,r);try{let a;if(a=s(i),a==null&&!(i&Q1.Optional))x8(n);else return a}finally{uh()}}else if(typeof s=="number"){let a=null,o=Ch(t,e),c=On,l=i&Q1.Host?e[G2][W2]:null;for((o===-1||i&Q1.SkipSelf)&&(c=o===-1?U8(t,e):e[o+8],c===On||!Ff(i,!1)?o=-1:(a=e[R1],o=Fs(c),e=Us(c,e)));o!==-1;){let f=e[R1];if(Of(s,o,f.data)){let u=Dx(o,e,n,a,i,l);if(u!==It)return u}c=e[o+8],c!==On&&Ff(i,e[R1].data[o+8]===l)&&Of(s,o,e)?(a=f,o=Fs(c),e=Us(c,e)):o=-1}}return r}function Dx(t,e,n,i,r,s){let a=e[R1],o=a.data[t+8],c=i==null?_r(o)&&wc:i!=a&&(o.type&3)!==0,l=r&Q1.Host&&s===o,f=As(o,a,n,c,l);return f!==null?T4(e,a,f,o):It}function As(t,e,n,i,r){let s=t.providerIndexes,a=e.data,o=s&1048575,c=t.directiveStart,l=t.directiveEnd,f=s>>20,u=i?o:o+f,h=r?o+f:l;for(let m=u;m<h;m++){let g=a[m];if(m<c&&n===g||m>=c&&g.type===n)return m}if(r){let m=a[c];if(m&&R3(m)&&m.type===n)return c}return null}function T4(t,e,n,i){let r=t[n],s=e.data;if(Sx(r)){let a=r;a.resolving&&ly(cy(s[n]));let o=kf(a.canSeeViewProviders);a.resolving=!0;let c,l=a.injectImpl?et(a.injectImpl):null,f=oh(t,i,Q1.Default);try{r=t[n]=a.factory(void 0,s,t,i),e.firstCreatePass&&n>=i.directiveStart&&_x(n,s[n],e)}finally{l!==null&&et(l),kf(o),a.resolving=!1,uh()}}return r}function Nx(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(or)?t[or]:void 0;return typeof e=="number"?e>=0?e&vh:Ix:e}function Of(t,e,n){let i=1<<t;return!!(n[e+(t>>Mh)]&i)}function Ff(t,e){return!(t&Q1.Self)&&!(t&Q1.Host&&e)}var S4=class{constructor(e,n){this._tNode=e,this._lView=n}get(e,n,i){return bh(this._tNode,this._lView,e,ra(i),n)}};function Ix(){return new S4(q2(),fe())}function yt(t){return yr(()=>{let e=t.prototype.constructor,n=e[Ns]||Hc(e),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let s=r[Ns]||Hc(r);if(s&&s!==n)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Hc(t){return Mu(t)?()=>{let e=Hc(c2(t));return e&&e()}:Fn(t)}function Rx(t,e,n,i,r){let s=t,a=e;for(;s!==null&&a!==null&&a[E1]&2048&&!(a[E1]&512);){let o=zh(s,a,n,i|Q1.Self,It);if(o!==It)return o;let c=s.parent;if(!c){let l=a[Gu];if(l){let f=l.get(n,It,i);if(f!==It)return f}c=_h(a),a=a[jn]}s=c}return r}function _h(t){let e=t[R1],n=e.type;return n===2?e.declTNode:n===1?t[W2]:null}function Uf(t,e=null,n=null,i){let r=wh(t,e,n,i);return r.resolveInjectorInitializers(),r}function wh(t,e=null,n=null,i,r=new Set){let s=[n||_2,Uy(t)];return i=i||(typeof t=="object"?void 0:w2(t)),new fr(s,e||L8(),i||null,r)}var st=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Uf({name:""},r,i,"");{let s=i.name??"";return Uf({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=cr,e.NULL=new Ps,e.\u0275prov=d1({token:e,providedIn:"any",factory:()=>V1(Lu)}),e.__NG_ELEMENT_ID__=-1;let t=e;return t})();var Px="ngOriginalError";function nc(t){return t[Px]}var Pt=class{constructor(){this._console=console}handleError(e){let n=this._findOriginalError(e);this._console.error("ERROR",e),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(e){let n=e&&nc(e);for(;n&&nc(n);)n=nc(n);return n||null}},Sh=new C1("",{providedIn:"root",factory:()=>G(Pt).handleError.bind(void 0)}),$n=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=kx,e.__NG_ENV_ID__=i=>i;let t=e;return t})(),Lc=class extends $n{constructor(e){super(),this._lView=e}onDestroy(e){return eh(this._lView,e),()=>lx(this._lView,e)}};function kx(){return new Lc(fe())}function Bf(t,e){return mu(t,e)}function Ox(t){return mu(pu,t)}var P4=(Bf.required=Ox,Bf);function Fx(){return Xn(q2(),fe())}function Xn(t,e){return new M2(j2(t,e))}var M2=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Fx;let t=e;return t})();function Ux(t){return t instanceof M2?t.nativeElement:t}var Ec=class extends s2{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,Bu()&&(this.destroyRef=G($n,{optional:!0})??void 0)}emit(e){let n=ce(null);try{super.next(e)}finally{ce(n)}}subscribe(e,n,i){let r=e,s=n||(()=>null),a=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(s=ic(s),r&&(r=ic(r)),a&&(a=ic(a)));let o=super.subscribe({next:r,error:s,complete:a});return e instanceof Ne&&e.add(o),o}};function ic(t){return e=>{setTimeout(t,void 0,e)}}var qe=Ec;function Bx(){return this._results[Symbol.iterator]()}var Vc=class t{get changes(){return this._changes??=new qe}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let n=t.prototype;n[Symbol.iterator]||(n[Symbol.iterator]=Bx)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){this.dirty=!1;let i=yy(e);(this._changesDetected=!Cy(this._results,i,n))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}},Gx="ngSkipHydration",Wx="ngskiphydration";function Hh(t){let e=t.mergedAttrs;if(e===null)return!1;for(let n=0;n<e.length;n+=2){let i=e[n];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===Wx)return!0}return!1}function Lh(t){return t.hasAttribute(Gx)}function Gs(t){return(t.flags&128)===128}function jx(t){if(Gs(t))return!0;let e=t.parent;for(;e;){if(Gs(t)||Hh(e))return!0;e=e.parent}return!1}var Eh=new Map,qx=0;function $x(){return qx++}function Xx(t){Eh.set(t[aa],t)}function Yx(t){Eh.delete(t[aa])}var Gf="__ngContext__";function D4(t,e){n3(e)?(t[Gf]=e[aa],Xx(e)):t[Gf]=e}function Vh(t){return Th(t[hr])}function Ah(t){return Th(t[gt])}function Th(t){for(;t!==null&&!kt(t);)t=t[gt];return t}var Ac;function Dh(t){Ac=t}function Hr(){if(Ac!==void 0)return Ac;if(typeof document<"u")return document;throw new v1(210,!1)}var oa=new C1("",{providedIn:"root",factory:()=>Zx}),Zx="ng",B8=new C1(""),C2=new C1("",{providedIn:"platform",factory:()=>"unknown"});var G8=new C1("",{providedIn:"root",factory:()=>Hr().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Jx(){let t=new k4;return G(C2)==="browser"&&(t.store=Kx(Hr(),G(oa))),t}var k4=(()=>{let e=class e{constructor(){this.store={},this.onSerializeCallbacks={}}get(i,r){return this.store[i]!==void 0?this.store[i]:r}set(i,r){this.store[i]=r}remove(i){delete this.store[i]}hasKey(i){return this.store.hasOwnProperty(i)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(i,r){this.onSerializeCallbacks[i]=r}toJson(){for(let i in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(i))try{this.store[i]=this.onSerializeCallbacks[i]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}};e.\u0275prov=d1({token:e,providedIn:"root",factory:Jx});let t=e;return t})();function Kx(t,e){let n=t.getElementById(e+"-state");if(n?.textContent)try{return JSON.parse(n.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var Nh="h",Ih="b",Tc=function(t){return t.FirstChild="f",t.NextSibling="n",t}(Tc||{}),Qx="e",eb="t",W8="c",Rh="x",Ws="r",tb="i",nb="n",ib="d",rb="__nghData__",Ph=rb,rc="ngh",sb="nghm",kh=()=>null;function ab(t,e,n=!1){let i=t.getAttribute(rc);if(i==null)return null;let[r,s]=i.split("|");if(i=n?s:r,!i)return null;let a=s?`|${s}`:"",o=n?r:a,c={};if(i!==""){let f=e.get(k4,null,{optional:!0});f!==null&&(c=f.get(Ph,[])[Number(i)])}let l={data:c,firstChild:t.firstChild??null};return n&&(l.firstChild=t,ca(l,0,t.nextSibling)),o?t.setAttribute(rc,o):t.removeAttribute(rc),l}function ob(){kh=ab}function j8(t,e,n=!1){return kh(t,e,n)}function cb(t){let e=t._lView;return e[R1].type===2?null:(qu(e)&&(e=e[v2]),e)}function lb(t){return t.textContent?.replace(/\s/gm,"")}function fb(t){let e=Hr(),n=e.createNodeIterator(t,NodeFilter.SHOW_COMMENT,{acceptNode(s){let a=lb(s);return a==="ngetn"||a==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=n.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function ca(t,e,n){t.segmentHeads??={},t.segmentHeads[e]=n}function Dc(t,e){return t.segmentHeads?.[e]??null}function ub(t,e){let n=t.data,i=n[Qx]?.[e]??null;return i===null&&n[W8]?.[e]&&(i=q8(t,e)),i}function Oh(t,e){return t.data[W8]?.[e]??null}function q8(t,e){let n=Oh(t,e)??[],i=0;for(let r of n)i+=r[Ws]*(r[Rh]??1);return i}function la(t,e){if(typeof t.disconnectedNodes>"u"){let n=t.data[ib];t.disconnectedNodes=n?new Set(n):null}return!!t.disconnectedNodes?.has(e)}var Cs=new C1(""),Fh=!1,Uh=new C1("",{providedIn:"root",factory:()=>Fh}),hb=new C1(""),ys;function db(){if(ys===void 0&&(ys=null,t3.trustedTypes))try{ys=t3.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return ys}function fa(t){return db()?.createHTML(t)||t}var xs;function pb(){if(xs===void 0&&(xs=null,t3.trustedTypes))try{xs=t3.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return xs}function Wf(t){return pb()?.createHTML(t)||t}var a3=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${du})`}},Nc=class extends a3{getTypeName(){return"HTML"}},Ic=class extends a3{getTypeName(){return"Style"}},Rc=class extends a3{getTypeName(){return"Script"}},Pc=class extends a3{getTypeName(){return"URL"}},kc=class extends a3{getTypeName(){return"ResourceURL"}};function xt(t){return t instanceof a3?t.changingThisBreaksApplicationSecurity:t}function U3(t,e){let n=mb(t);if(n!=null&&n!==e){if(n==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${n} (see ${du})`)}return n===e}function mb(t){return t instanceof a3&&t.getTypeName()||null}function Bh(t){return new Nc(t)}function Gh(t){return new Ic(t)}function Wh(t){return new Rc(t)}function jh(t){return new Pc(t)}function qh(t){return new kc(t)}function gb(t){let e=new Fc(t);return vb()?new Oc(e):e}var Oc=class{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let n=new window.DOMParser().parseFromString(fa(e),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(e):(n.removeChild(n.firstChild),n)}catch{return null}}},Fc=class{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let n=this.inertDocument.createElement("template");return n.innerHTML=fa(e),n}};function vb(){try{return!!new window.DOMParser().parseFromString(fa(""),"text/html")}catch{return!1}}var Mb=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function ua(t){return t=String(t),t.match(Mb)?t:"unsafe:"+t}function l3(t){let e={};for(let n of t.split(","))e[n]=!0;return e}function Lr(...t){let e={};for(let n of t)for(let i in n)n.hasOwnProperty(i)&&(e[i]=!0);return e}var $h=l3("area,br,col,hr,img,wbr"),Xh=l3("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Yh=l3("rp,rt"),Cb=Lr(Yh,Xh),yb=Lr(Xh,l3("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),xb=Lr(Yh,l3("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),jf=Lr($h,yb,xb,Cb),Zh=l3("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),bb=l3("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),zb=l3("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),_b=Lr(Zh,bb,zb),wb=l3("script,style,template"),Uc=class{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let n=e.firstChild,i=!0,r=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?i=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,i&&n.firstChild){r.push(n),n=Lb(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let s=Hb(n);if(s){n=s;break}n=r.pop()}}return this.buf.join("")}startElement(e){let n=qf(e).toLowerCase();if(!jf.hasOwnProperty(n))return this.sanitizedSomething=!0,!wb.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);let i=e.attributes;for(let r=0;r<i.length;r++){let s=i.item(r),a=s.name,o=a.toLowerCase();if(!_b.hasOwnProperty(o)){this.sanitizedSomething=!0;continue}let c=s.value;Zh[o]&&(c=ua(c)),this.buf.push(" ",a,'="',$f(c),'"')}return this.buf.push(">"),!0}endElement(e){let n=qf(e).toLowerCase();jf.hasOwnProperty(n)&&!$h.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(e){this.buf.push($f(e))}};function Sb(t,e){return(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Hb(t){let e=t.nextSibling;if(e&&t!==e.previousSibling)throw Jh(e);return e}function Lb(t){let e=t.firstChild;if(e&&Sb(t,e))throw Jh(e);return e}function qf(t){let e=t.nodeName;return typeof e=="string"?e:"FORM"}function Jh(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var Eb=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Vb=/([^\#-~ |!])/g;function $f(t){return t.replace(/&/g,"&amp;").replace(Eb,function(e){let n=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((n-55296)*1024+(i-56320)+65536)+";"}).replace(Vb,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var bs;function $8(t,e){let n=null;try{bs=bs||gb(t);let i=e?String(e):"";n=bs.getInertBodyElement(i);let r=5,s=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=s,s=n.innerHTML,n=bs.getInertBodyElement(i)}while(i!==s);let o=new Uc().sanitizeChildren(Xf(n)||n);return fa(o)}finally{if(n){let i=Xf(n)||n;for(;i.firstChild;)i.removeChild(i.firstChild)}}}function Xf(t){return"content"in t&&Ab(t)?t.content:null}function Ab(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var Ft=function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t}(Ft||{});function Kh(t){let e=Qh();return e?Wf(e.sanitize(Ft.HTML,t)||""):U3(t,"HTML")?Wf(xt(t)):$8(Hr(),xr(t))}function ha(t){let e=Qh();return e?e.sanitize(Ft.URL,t)||"":U3(t,"URL")?xt(t):ua(xr(t))}function Qh(){let t=fe();return t&&t[Mt].sanitizer}var Tb=/^>|^->|<!--|-->|--!>|<!-$/g,Db=/(<|>)/g,Nb="\u200B$1\u200B";function Ib(t){return t.replace(Tb,e=>e.replace(Db,Nb))}function da(t){return t.ownerDocument.defaultView}function Rb(t){return t.ownerDocument.body}function ed(t){return t instanceof Function?t():t}function zs(t){return(t??G(st)).get(C2)==="browser"}var o3=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}(o3||{}),Pb;function X8(t,e){return Pb(t,e)}function Pn(t,e,n,i,r){if(i!=null){let s,a=!1;kt(i)?s=i:n3(i)&&(a=!0,i=i[B2]);let o=Ct(i);t===0&&n!==null?r==null?rd(e,n,o):qs(e,n,o,r||null,!0):t===1&&n!==null?qs(e,n,o,r||null,!0):t===2?e5(e,o,a):t===3&&e.destroyNode(o),s!=null&&Kb(e,t,s,n,r)}}function Y8(t,e){return t.createText(e)}function kb(t,e,n){t.setValue(e,n)}function Z8(t,e){return t.createComment(Ib(e))}function pa(t,e,n){return t.createElement(e,n)}function Ob(t,e){td(t,e),e[B2]=null,e[W2]=null}function Fb(t,e,n,i,r,s){i[B2]=r,i[W2]=e,ma(t,i,n,1,r,s)}function td(t,e){e[Mt].changeDetectionScheduler?.notify(1),ma(t,e,e[we],2,null,null)}function Ub(t){let e=t[hr];if(!e)return sc(t[R1],t);for(;e;){let n=null;if(n3(e))n=e[hr];else{let i=e[S2];i&&(n=i)}if(!n){for(;e&&!e[gt]&&e!==t;)n3(e)&&sc(e[R1],e),e=e[e2];e===null&&(e=t),n3(e)&&sc(e[R1],e),n=e&&e[gt]}e=n}}function Bb(t,e,n,i){let r=S2+i,s=n.length;i>0&&(n[r-1][gt]=e),i<s-S2?(e[gt]=n[r],Hu(n,S2+i,e)):(n.push(e),e[gt]=null),e[e2]=n;let a=e[zr];a!==null&&n!==a&&Gb(a,e);let o=e[r3];o!==null&&o.insertView(t),zc(e),e[E1]|=128}function Gb(t,e){let n=t[Gn],r=e[e2][e2][G2];e[G2]!==r&&(t[E1]|=V8.HasTransplantedViews),n===null?t[Gn]=[e]:n.push(e)}function nd(t,e){let n=t[Gn],i=n.indexOf(e);n.splice(i,1)}function js(t,e){if(t.length<=S2)return;let n=S2+e,i=t[n];if(i){let r=i[zr];r!==null&&r!==t&&nd(r,i),e>0&&(t[n-1][gt]=i[gt]);let s=Rs(t,S2+e);Ob(i[R1],i);let a=s[r3];a!==null&&a.detachView(s[R1]),i[e2]=null,i[gt]=null,i[E1]&=-129}return i}function J8(t,e){if(!(e[E1]&256)){let n=e[we];n.destroyNode&&ma(t,e,n,3,null,null),Ub(e)}}function sc(t,e){if(e[E1]&256)return;let n=ce(null);try{e[E1]&=-129,e[E1]|=256,e[E4]&&To(e[E4]),jb(t,e),Wb(t,e),e[R1].type===1&&e[we].destroy();let i=e[zr];if(i!==null&&kt(e[e2])){i!==e[e2]&&nd(i,e);let r=e[r3];r!==null&&r.detachView(t)}Yx(e)}finally{ce(n)}}function Wb(t,e){let n=t.cleanup,i=e[ur];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[n[s+1]];n[s].call(a)}i!==null&&(e[ur]=null);let r=e[I3];if(r!==null){e[I3]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}}function jb(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let i=0;i<n.length;i+=2){let r=e[n[i]];if(!(r instanceof A4)){let s=n[i+1];if(Array.isArray(s))for(let a=0;a<s.length;a+=2){let o=r[s[a]],c=s[a+1];Nt(4,o,c);try{c.call(o)}finally{Nt(5,o,c)}}else{Nt(4,r,s);try{s.call(r)}finally{Nt(5,r,s)}}}}}function id(t,e,n){return qb(t,e.parent,n)}function qb(t,e,n){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return n[B2];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=t.data[i.directiveStart+r];if(s===Rt.None||s===Rt.Emulated)return null}return j2(i,n)}}function qs(t,e,n,i,r){t.insertBefore(e,n,i,r)}function rd(t,e,n){t.appendChild(e,n)}function Yf(t,e,n,i,r){i!==null?qs(t,e,n,i,r):rd(t,e,n)}function $b(t,e,n,i){t.removeChild(e,n,i)}function K8(t,e){return t.parentNode(e)}function Xb(t,e){return t.nextSibling(e)}function sd(t,e,n){return Zb(t,e,n)}function Yb(t,e,n){return t.type&40?j2(t,n):null}var Zb=Yb,Zf;function Q8(t,e,n,i){let r=id(t,i,e),s=e[we],a=i.parent||e[W2],o=sd(a,i,e);if(r!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)Yf(s,r,n[c],o,!1);else Yf(s,r,n,o,!1);Zf!==void 0&&Zf(s,i,e,n,r)}function Ts(t,e){if(e!==null){let n=e.type;if(n&3)return j2(e,t);if(n&4)return Bc(-1,t[e.index]);if(n&8){let i=e.child;if(i!==null)return Ts(t,i);{let r=t[e.index];return kt(r)?Bc(-1,r):Ct(r)}}else{if(n&32)return X8(e,t)()||Ct(t[e.index]);{let i=ad(t,e);if(i!==null){if(Array.isArray(i))return i[0];let r=mr(t[G2]);return Ts(r,i)}else return Ts(t,e.next)}}}return null}function ad(t,e){if(e!==null){let i=t[G2][W2],r=e.projection;return i.projection[r]}return null}function Bc(t,e){let n=S2+t+1;if(n<e.length){let i=e[n],r=i[R1].firstChild;if(r!==null)return Ts(i,r)}return e[s3]}function e5(t,e,n){let i=K8(t,e);i&&$b(t,i,e,n)}function od(t){t.textContent=""}function t5(t,e,n,i,r,s,a){for(;n!=null;){let o=i[n.index],c=n.type;if(a&&e===0&&(o&&D4(Ct(o),i),n.flags|=2),(n.flags&32)!==32)if(c&8)t5(t,e,n.child,i,r,s,!1),Pn(e,t,r,o,s);else if(c&32){let l=X8(n,i),f;for(;f=l();)Pn(e,t,r,f,s);Pn(e,t,r,o,s)}else c&16?cd(t,e,i,n,r,s):Pn(e,t,r,o,s);n=a?n.projectionNext:n.next}}function ma(t,e,n,i,r,s){t5(n,i,t.firstChild,e,r,s,!1)}function Jb(t,e,n){let i=e[we],r=id(t,n,e),s=n.parent||e[W2],a=sd(s,n,e);cd(i,0,e,n,r,a)}function cd(t,e,n,i,r,s){let a=n[G2],c=a[W2].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let f=c[l];Pn(e,t,r,f,s)}else{let l=c,f=a[e2];Gs(i)&&(l.flags|=128),t5(t,e,l,f,r,s,!0)}}function Kb(t,e,n,i,r){let s=n[s3],a=Ct(n);s!==a&&Pn(e,t,i,s,r);for(let o=S2;o<n.length;o++){let c=n[o];ma(c[R1],c,t,e,i,s)}}function Qb(t,e,n,i,r){if(e)r?t.addClass(n,i):t.removeClass(n,i);else{let s=i.indexOf("-")===-1?void 0:o3.DashCase;r==null?t.removeStyle(n,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=o3.Important),t.setStyle(n,i,r,s))}}function ez(t,e,n){t.setAttribute(e,"style",n)}function ld(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function fd(t,e,n){let{mergedAttrs:i,classes:r,styles:s}=n;i!==null&&Mc(t,e,i),r!==null&&ld(t,e,r),s!==null&&ez(t,e,s)}var B3={};function re(t=1){ud(l2(),fe(),R4()+t,!1)}function ud(t,e,n,i){if(!i)if((e[E1]&3)===3){let s=t.preOrderCheckHooks;s!==null&&Es(e,s,n)}else{let s=t.preOrderHooks;s!==null&&Vs(e,s,0,n)}V4(n)}function ge(t,e=Q1.Default){let n=fe();if(n===null)return V1(t,e);let i=q2();return bh(i,n,c2(t),e)}function hd(t,e,n,i,r,s){let a=ce(null);try{let o=null;r&g2.SignalBased&&(o=e[i][Tt]),o!==null&&o.transformFn!==void 0&&(s=o.transformFn(s)),r&g2.HasDecoratorInputTransform&&(s=t.inputTransforms[i].call(e,s)),t.setInput!==null?t.setInput(e,o,s,n,i):$u(e,o,i,s)}finally{ce(a)}}function tz(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let i=0;i<n.length;i++){let r=n[i];if(r<0)V4(~r);else{let s=r,a=n[++i],o=n[++i];Cx(a,s);let c=e[s];o(2,c)}}}finally{V4(-1)}}function ga(t,e,n,i,r,s,a,o,c,l,f){let u=e.blueprint.slice();return u[B2]=r,u[E1]=i|4|128|8|64,(l!==null||t&&t[E1]&2048)&&(u[E1]|=2048),Qu(u),u[e2]=u[jn]=t,u[vt]=n,u[Mt]=a||t&&t[Mt],u[we]=o||t&&t[we],u[Bn]=c||t&&t[Bn]||null,u[W2]=s,u[aa]=$x(),u[tt]=f,u[Gu]=l,u[G2]=e.type==2?t[G2]:u,u}function Er(t,e,n,i,r){let s=t.data[e];if(s===null)s=nz(t,e,n,i,r),Mx()&&(s.flags|=32);else if(s.type&64){s.type=n,s.value=i,s.attrs=r;let a=gx();s.injectorIndex=a===null?-1:a.injectorIndex}return wr(s,!0),s}function nz(t,e,n,i,r){let s=nh(),a=ih(),o=a?s:s&&s.parent,c=t.data[e]=lz(t,o,n,e,i,r);return t.firstChild===null&&(t.firstChild=c),s!==null&&(a?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function dd(t,e,n,i){if(n===0)return-1;let r=e.length;for(let s=0;s<n;s++)e.push(i),t.blueprint.push(i),t.data.push(null);return r}function pd(t,e,n,i,r){let s=R4(),a=i&2;try{V4(-1),a&&e.length>v2&&ud(t,e,v2,!1),Nt(a?2:0,r),n(i,r)}finally{V4(s),Nt(a?3:1,r)}}function md(t,e,n){if(ju(e)){let i=ce(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let a=r;a<s;a++){let o=t.data[a];if(o.contentQueries){let c=n[a];o.contentQueries(1,c,a)}}}finally{ce(i)}}}function gd(t,e,n){th()&&(mz(t,e,n,j2(n,e)),(n.flags&64)===64&&zd(t,e,n))}function vd(t,e,n=j2){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let a=i[s+1],o=a===-1?n(e,t):t[a];t[r++]=o}}}function Md(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=n5(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function n5(t,e,n,i,r,s,a,o,c,l,f){let u=v2+i,h=u+r,m=iz(u,h),g=typeof l=="function"?l():l;return m[R1]={type:t,blueprint:m,template:n,queries:null,viewQuery:o,declTNode:e,data:m.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:f}}function iz(t,e){let n=[];for(let i=0;i<e;i++)n.push(i<t?null:B3);return n}function rz(t,e,n,i){let s=i.get(Uh,Fh)||n===Rt.ShadowDom,a=t.selectRootElement(e,s);return sz(a),a}function sz(t){Cd(t)}var Cd=()=>null;function az(t){Lh(t)?od(t):fb(t)}function oz(){Cd=az}function cz(t,e,n,i){let r=Sd(e);r.push(n),t.firstCreatePass&&Hd(t).push(i,r.length-1)}function lz(t,e,n,i,r,s){let a=e?e.injectorIndex:-1,o=0;return qn()&&(o|=128),{type:n,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:o,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Jf(t,e,n,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let a=e[s];if(a===void 0)continue;i??={};let o,c=g2.None;Array.isArray(a)?(o=a[0],c=a[1]):o=a;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}t===0?Kf(i,n,l,o,c):Kf(i,n,l,o)}return i}function Kf(t,e,n,i,r){let s;t.hasOwnProperty(n)?(s=t[n]).push(e,i):s=t[n]=[e,i],r!==void 0&&s.push(r)}function fz(t,e,n){let i=e.directiveStart,r=e.directiveEnd,s=t.data,a=e.attrs,o=[],c=null,l=null;for(let f=i;f<r;f++){let u=s[f],h=n?n.get(u):null,m=h?h.inputs:null,g=h?h.outputs:null;c=Jf(0,u.inputs,f,c,m),l=Jf(1,u.outputs,f,l,g);let v=c!==null&&a!==null&&!w8(e)?Sz(c,f,a):null;o.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=o,e.inputs=c,e.outputs=l}function uz(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function yd(t,e,n,i,r,s,a,o){let c=j2(e,n),l=e.inputs,f;!o&&l!=null&&(f=l[i])?(i5(t,n,f,i,r),_r(e)&&hz(n,e.index)):e.type&3?(i=uz(i),r=a!=null?a(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function hz(t,e){let n=F3(e,t);n[E1]&16||(n[E1]|=64)}function xd(t,e,n,i){if(th()){let r=i===null?null:{"":-1},s=vz(t,n),a,o;s===null?a=o=null:[a,o]=s,a!==null&&bd(t,e,n,a,r,o),r&&Mz(n,i,r)}n.mergedAttrs=lr(n.mergedAttrs,n.attrs)}function bd(t,e,n,i,r,s){for(let l=0;l<i.length;l++)Sc(Bs(n,e),t,i[l].type);yz(n,t.data.length,i.length);for(let l=0;l<i.length;l++){let f=i[l];f.providersResolver&&f.providersResolver(f)}let a=!1,o=!1,c=dd(t,e,i.length,null);for(let l=0;l<i.length;l++){let f=i[l];n.mergedAttrs=lr(n.mergedAttrs,f.hostAttrs),xz(t,n,e,c,f),Cz(c,f,r),f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let u=f.type.prototype;!a&&(u.ngOnChanges||u.ngOnInit||u.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),a=!0),!o&&(u.ngOnChanges||u.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),o=!0),c++}fz(t,n,s)}function dz(t,e,n,i,r){let s=r.hostBindings;if(s){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let o=~e.index;pz(a)!=o&&a.push(o),a.push(n,i,s)}}function pz(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function mz(t,e,n,i){let r=n.directiveStart,s=n.directiveEnd;_r(n)&&bz(e,n,t.data[r+n.componentOffset]),t.firstCreatePass||Bs(n,e),D4(i,e);let a=n.initialInputs;for(let o=r;o<s;o++){let c=t.data[o],l=T4(e,t,o,n);if(D4(l,e),a!==null&&wz(e,o-r,l,c,n,a),R3(c)){let f=F3(n.index,e);f[vt]=T4(e,t,o,n)}}}function zd(t,e,n){let i=n.directiveStart,r=n.directiveEnd,s=n.index,a=yx();try{V4(s);for(let o=i;o<r;o++){let c=t.data[o],l=e[o];_c(o),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&gz(c,l)}}finally{V4(-1),_c(a)}}function gz(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function vz(t,e){let n=t.directiveRegistry,i=null,r=null;if(n)for(let s=0;s<n.length;s++){let a=n[s];if(Tu(e,a.selectors,!1))if(i||(i=[]),R3(a))if(a.findHostDirectiveDefs!==null){let o=[];r=r||new Map,a.findHostDirectiveDefs(a,o,r),i.unshift(...o,a);let c=o.length;Gc(t,e,c)}else i.unshift(a),Gc(t,e,0);else r=r||new Map,a.findHostDirectiveDefs?.(a,i,r),i.push(a)}return i===null?null:[i,r]}function Gc(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function Mz(t,e,n){if(e){let i=t.localNames=[];for(let r=0;r<e.length;r+=2){let s=n[e[r+1]];if(s==null)throw new v1(-301,!1);i.push(e[r],s)}}}function Cz(t,e,n){if(n){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)n[e.exportAs[i]]=t;R3(e)&&(n[""]=t)}}function yz(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function xz(t,e,n,i,r){t.data[i]=r;let s=r.factory||(r.factory=Fn(r.type,!0)),a=new A4(s,R3(r),ge);t.blueprint[i]=a,n[i]=a,dz(t,e,i,dd(t,n,r.hostVars,B3),r)}function bz(t,e,n){let i=j2(e,t),r=Md(n),s=t[Mt].rendererFactory,a=16;n.signals?a=4096:n.onPush&&(a=64);let o=va(t,ga(t,r,null,a,i,e,null,s.createRenderer(i,n),null,null,null));t[e.index]=o}function zz(t,e,n,i,r,s){let a=j2(t,e);_z(e[we],a,s,t.value,n,i,r)}function _z(t,e,n,i,r,s,a){if(s==null)t.removeAttribute(e,r,n);else{let o=a==null?xr(s):a(s,i||"",r);t.setAttribute(e,r,o,n)}}function wz(t,e,n,i,r,s){let a=s[e];if(a!==null)for(let o=0;o<a.length;){let c=a[o++],l=a[o++],f=a[o++],u=a[o++];hd(i,n,c,l,f,u)}}function Sz(t,e,n){let i=null,r=0;for(;r<n.length;){let s=n[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(t.hasOwnProperty(s)){i===null&&(i=[]);let a=t[s];for(let o=0;o<a.length;o+=3)if(a[o]===e){i.push(s,a[o+1],a[o+2],n[r+1]);break}}r+=2}return i}function _d(t,e,n,i){return[t,!0,0,e,null,i,null,n,null,null]}function wd(t,e){let n=t.contentQueries;if(n!==null){let i=ce(null);try{for(let r=0;r<n.length;r+=2){let s=n[r],a=n[r+1];if(a!==-1){let o=t.data[a];I8(s),o.contentQueries(2,e[a],a)}}}finally{ce(i)}}}function va(t,e){return t[hr]?t[If][gt]=e:t[hr]=e,t[If]=e,e}function Wc(t,e,n){I8(0);let i=ce(null);try{e(t,n)}finally{ce(i)}}function Sd(t){return t[ur]||(t[ur]=[])}function Hd(t){return t.cleanup||(t.cleanup=[])}function Ld(t,e){let n=t[Bn],i=n?n.get(Pt,null):null;i&&i.handleError(e)}function i5(t,e,n,i,r){for(let s=0;s<n.length;){let a=n[s++],o=n[s++],c=n[s++],l=e[a],f=t.data[a];hd(f,l,i,o,c,r)}}function Hz(t,e,n){let i=Ku(e,t);kb(t[we],i,n)}function Lz(t,e){let n=F3(e,t),i=n[R1];Ez(i,n);let r=n[B2];r!==null&&n[tt]===null&&(n[tt]=j8(r,n[Bn])),r5(i,n,n[vt])}function Ez(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function r5(t,e,n){R8(e);try{let i=t.viewQuery;i!==null&&Wc(1,i,n);let r=t.template;r!==null&&pd(t,e,r,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[r3]?.finishViewCreation(t),t.staticContentQueries&&wd(t,e),t.staticViewQueries&&Wc(2,t.viewQuery,n);let s=t.components;s!==null&&Vz(e,s)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{e[E1]&=-5,P8()}}function Vz(t,e){for(let n=0;n<e.length;n++)Lz(t,e[n])}function Ed(t,e,n,i){let r=ce(null);try{let s=e.tView,o=t[E1]&4096?4096:16,c=ga(t,s,n,o,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[e.index];c[zr]=l;let f=t[r3];return f!==null&&(c[r3]=f.createEmbeddedView(s)),r5(s,c,n),c}finally{ce(r)}}function Az(t,e){let n=S2+e;if(n<t.length)return t[n]}function jc(t,e){return!e||e.firstChild===null||Gs(t)}function Vd(t,e,n,i=!0){let r=e[R1];if(Bb(r,e,t,n),i){let a=Bc(n,t),o=e[we],c=K8(o,t[s3]);c!==null&&Fb(r,t[W2],o,e,c,a)}let s=e[tt];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Tz(t,e){let n=js(t,e);return n!==void 0&&J8(n[R1],n),n}function $s(t,e,n,i,r=!1){for(;n!==null;){let s=e[n.index];s!==null&&i.push(Ct(s)),kt(s)&&Dz(s,i);let a=n.type;if(a&8)$s(t,e,n.child,i);else if(a&32){let o=X8(n,e),c;for(;c=o();)i.push(c)}else if(a&16){let o=ad(e,n);if(Array.isArray(o))i.push(...o);else{let c=mr(e[G2]);$s(c[R1],c,o,i,!0)}}n=r?n.projectionNext:n.next}return i}function Dz(t,e){for(let n=S2;n<t.length;n++){let i=t[n],r=i[R1].firstChild;r!==null&&$s(i[R1],i,r,e)}t[s3]!==t[B2]&&e.push(t[s3])}var Ad=[];function Nz(t){return t[E4]??Iz(t)}function Iz(t){let e=Ad.pop()??Object.create(Pz);return e.lView=t,e}function Rz(t){t.lView[E4]!==t&&(t.lView=null,Ad.push(t))}var Pz=Me(l1({},ir),{consumerIsAlwaysLive:!0,consumerMarkedDirty:t=>{pr(t.lView)},consumerOnSignalRead(){this.lView[E4]=this}}),Td=100;function Dd(t,e=!0,n=0){let i=t[Mt],r=i.rendererFactory,s=!1;s||r.begin?.();try{kz(t,n)}catch(a){throw e&&Ld(t,a),a}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function kz(t,e){qc(t,e);let n=0;for(;N8(t);){if(n===Td)throw new v1(103,!1);n++,qc(t,1)}}function Oz(t,e,n,i){let r=e[E1];if((r&256)===256)return;let s=!1;!s&&e[Mt].inlineEffectRunner?.flush(),R8(e);let a=null,o=null;!s&&Fz(t)&&(o=Nz(e),a=B6(o));try{Qu(e),vx(t.bindingStartIndex),n!==null&&pd(t,e,n,2,i);let c=(r&3)===3;if(!s)if(c){let u=t.preOrderCheckHooks;u!==null&&Es(e,u,null)}else{let u=t.preOrderHooks;u!==null&&Vs(e,u,0,null),ec(e,0)}if(Uz(e),Nd(e,0),t.contentQueries!==null&&wd(t,e),!s)if(c){let u=t.contentCheckHooks;u!==null&&Es(e,u)}else{let u=t.contentHooks;u!==null&&Vs(e,u,1),ec(e,1)}tz(t,e);let l=t.components;l!==null&&Rd(e,l,0);let f=t.viewQuery;if(f!==null&&Wc(2,f,i),!s)if(c){let u=t.viewCheckHooks;u!==null&&Es(e,u)}else{let u=t.viewHooks;u!==null&&Vs(e,u,2),ec(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[Ls]){for(let u of e[Ls])u();e[Ls]=null}s||(e[E1]&=-73)}catch(c){throw pr(e),c}finally{o!==null&&(G6(o,a),Rz(o)),P8()}}function Fz(t){return t.type!==2}function Nd(t,e){for(let n=Vh(t);n!==null;n=Ah(n))for(let i=S2;i<n.length;i++){let r=n[i];Id(r,e)}}function Uz(t){for(let e=Vh(t);e!==null;e=Ah(e)){if(!(e[E1]&V8.HasTransplantedViews))continue;let n=e[Gn];for(let i=0;i<n.length;i++){let r=n[i],s=r[e2];ox(r)}}}function Bz(t,e,n){let i=F3(e,t);Id(i,n)}function Id(t,e){D8(t)&&qc(t,e)}function qc(t,e){let i=t[R1],r=t[E1],s=t[E4],a=!!(e===0&&r&16);if(a||=!!(r&64&&e===0),a||=!!(r&1024),a||=!!(s?.dirty&&W6(s)),s&&(s.dirty=!1),t[E1]&=-9217,a)Oz(i,t,i.template,t[vt]);else if(r&8192){Nd(t,1);let o=i.components;o!==null&&Rd(t,o,1)}}function Rd(t,e,n){for(let i=0;i<e.length;i++)Bz(t,e[i],n)}function s5(t){for(t[Mt].changeDetectionScheduler?.notify();t;){t[E1]|=64;let e=mr(t);if(qu(t)&&!e)return t;t=e}return null}var N4=class{get rootNodes(){let e=this._lView,n=e[R1];return $s(n,e,n.firstChild,[])}constructor(e,n,i=!0){this._lView=e,this._cdRefInjectingView=n,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[vt]}set context(e){this._lView[vt]=e}get destroyed(){return(this._lView[E1]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[e2];if(kt(e)){let n=e[ks],i=n?n.indexOf(this):-1;i>-1&&(js(e,i),Rs(n,i))}this._attachedToViewContainer=!1}J8(this._lView[R1],this._lView)}onDestroy(e){eh(this._lView,e)}markForCheck(){s5(this._cdRefInjectingView||this._lView)}detach(){this._lView[E1]&=-129}reattach(){zc(this._lView),this._lView[E1]|=128}detectChanges(){this._lView[E1]|=1024,Dd(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new v1(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,td(this._lView[R1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new v1(902,!1);this._appRef=e,zc(this._lView)}},c3=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=jz;let t=e;return t})(),Gz=c3,Wz=class extends Gz{constructor(e,n,i){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,i){let r=Ed(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:i});return new N4(r)}};function jz(){return a5(q2(),fe())}function a5(t,e){return t.type&4?new Wz(e,t,Xn(t,e)):null}function Pd(t){let e=t[dr]??[],i=t[e2][we];for(let r of e)qz(r,i);t[dr]=_2}function qz(t,e){let n=0,i=t.firstChild;if(i){let r=t.data[Ws];for(;n<r;){let s=i.nextSibling;e5(e,i,!1),i=s,n++}}}function kd(t){Pd(t);for(let e=S2;e<t.length;e++)Xs(t[e])}function $z(t){let e=t[tt]?.i18nNodes;if(e){let n=t[we];for(let i of e.values())e5(n,i,!1);t[tt].i18nNodes=void 0}}function Xs(t){$z(t);let e=t[R1];for(let n=v2;n<e.bindingStartIndex;n++)if(kt(t[n])){let i=t[n];kd(i)}else n3(t[n])&&Xs(t[n])}function Xz(t){let e=t._views;for(let n of e){let i=cb(n);if(i!==null&&i[B2]!==null)if(n3(i))Xs(i);else{let r=i[B2];Xs(r),kd(i)}}}var Yz=new RegExp(`^(\\d+)*(${Ih}|${Nh})*(.*)`);function Zz(t){let e=t.match(Yz),[n,i,r,s]=e,a=i?parseInt(i,10):r,o=[];for(let[c,l,f]of s.matchAll(/(f|n)(\d*)/g)){let u=parseInt(f,10)||1;o.push(l,u)}return[a,...o]}function Jz(t){return!t.prev&&t.parent?.type===8}function ac(t){return t.index-v2}function Kz(t,e){let n=t.i18nNodes;if(n){let i=n.get(e);return i&&n.delete(e),i}return null}function Ma(t,e,n,i){let r=ac(i),s=Kz(t,r);if(!s){let a=t.data[nb];if(a?.[r])s=e_(a[r],n);else if(e.firstChild===i)s=t.firstChild;else{let o=i.prev===null,c=i.prev??i.parent;if(Jz(i)){let l=ac(i.parent);s=Dc(t,l)}else{let l=j2(c,n);if(o)s=l.firstChild;else{let f=ac(c),u=Dc(t,f);if(c.type===2&&u){let m=q8(t,f)+1;s=Ca(m,u)}else s=l.nextSibling}}}}return s}function Ca(t,e){let n=e;for(let i=0;i<t;i++)n=n.nextSibling;return n}function Qz(t,e){let n=t;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let a=0;a<s;a++)switch(r){case Tc.FirstChild:n=n.firstChild;break;case Tc.NextSibling:n=n.nextSibling;break}}return n}function e_(t,e){let[n,...i]=Zz(t),r;if(n===Nh)r=e[G2][B2];else if(n===Ih)r=Rb(e[G2][B2]);else{let s=Number(n);r=Ct(e[s+v2])}return Qz(r,i)}function t_(t,e){let n=[];for(let i of e)for(let r=0;r<(i[Rh]??1);r++){let s={data:i,firstChild:null};i[Ws]>0&&(s.firstChild=t,t=Ca(i[Ws],t)),n.push(s)}return[t,n]}var Od=()=>null;function n_(t,e){let n=t[dr];return!e||n===null||n.length===0?null:n[0].data[tb]===e?n.shift():(Pd(t),null)}function i_(){Od=n_}function $c(t,e){return Od(t,e)}var Xc=class{},Yc=class{},Ys=class{};function r_(t){let e=Error(`No component factory found for ${w2(t)}.`);return e[s_]=t,e}var s_="ngComponent";var Zc=class{resolveComponentFactory(e){throw r_(e)}},ya=(()=>{let e=class e{};e.NULL=new Zc;let t=e;return t})(),gr=class{},Yn=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>a_();let t=e;return t})();function a_(){let t=fe(),e=q2(),n=F3(e.index,t);return(n3(n)?n:t)[we]}var o_=(()=>{let e=class e{};e.\u0275prov=d1({token:e,providedIn:"root",factory:()=>null});let t=e;return t})(),oc={};var Qf=new Set;function f3(t){Qf.has(t)||(Qf.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}function eu(...t){}function c_(){let t=typeof t3.requestAnimationFrame=="function",e=t3[t?"requestAnimationFrame":"setTimeout"],n=t3[t?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&n){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=n[Zone.__symbol__("OriginalDelegate")];r&&(n=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:n}}var ye=class t{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new qe(!1),this.onMicrotaskEmpty=new qe(!1),this.onStable=new qe(!1),this.onError=new qe(!1),typeof Zone>"u")throw new v1(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&n,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=c_().nativeRequestAnimationFrame,u_(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new v1(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new v1(909,!1)}run(e,n,i){return this._inner.run(e,n,i)}runTask(e,n,i,r){let s=this._inner,a=s.scheduleEventTask("NgZoneEvent: "+r,e,l_,eu,eu);try{return s.runTask(a,n,i)}finally{s.cancelTask(a)}}runGuarded(e,n,i){return this._inner.runGuarded(e,n,i)}runOutsideAngular(e){return this._outer.run(e)}},l_={};function o5(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function f_(t){t.isCheckStableRunning||t.lastRequestAnimationFrameId!==-1||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(t3,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Jc(t),t.isCheckStableRunning=!0,o5(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Jc(t))}function u_(t){let e=()=>{f_(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,i,r,s,a,o)=>{if(h_(o))return n.invokeTask(r,s,a,o);try{return tu(t),n.invokeTask(r,s,a,o)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),nu(t)}},onInvoke:(n,i,r,s,a,o,c)=>{try{return tu(t),n.invoke(r,s,a,o,c)}finally{t.shouldCoalesceRunChangeDetection&&e(),nu(t)}},onHasTask:(n,i,r,s)=>{n.hasTask(r,s),i===r&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Jc(t),o5(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,i,r,s)=>(n.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Jc(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.lastRequestAnimationFrameId!==-1?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function tu(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function nu(t){t._nesting--,o5(t)}function h_(t){return!Array.isArray(t)||t.length!==1?!1:t[0].data?.__ignore_ng_zone__===!0}var Fd=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=d1({token:e,providedIn:"root",factory:()=>new e});let t=e;return t})();function Kc(t,e,n){let i=n?t.styles:null,r=n?t.classes:null,s=0;if(e!==null)for(let a=0;a<e.length;a++){let o=e[a];if(typeof o=="number")s=o;else if(s==1)r=pc(r,o);else if(s==2){let c=o,l=e[++a];i=pc(i,c+": "+l+";")}}n?t.styles=i:t.stylesWithoutHost=i,n?t.classes=r:t.classesWithoutHost=r}var Zs=class extends ya{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let n=L4(e);return new vr(n,this.ngModule)}};function iu(t){let e=[];for(let n in t){if(!t.hasOwnProperty(n))continue;let i=t[n];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:n})}return e}function d_(t){let e=t.toLowerCase();return e==="svg"?Ju:e==="math"?nx:null}var Qc=class{constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,i){i=ra(i);let r=this.injector.get(e,oc,i);return r!==oc||n===oc?r:this.parentInjector.get(e,n,i)}},vr=class extends Ys{get inputs(){let e=this.componentDef,n=e.inputTransforms,i=iu(e.inputs);if(n!==null)for(let r of i)n.hasOwnProperty(r.propName)&&(r.transform=n[r.propName]);return i}get outputs(){return iu(this.componentDef.outputs)}constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=Ry(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}create(e,n,i,r){let s=ce(null);try{r=r||this.ngModule;let a=r instanceof D2?r:r?.injector;a&&this.componentDef.getStandaloneInjector!==null&&(a=this.componentDef.getStandaloneInjector(a)||a);let o=a?new Qc(e,a):e,c=o.get(gr,null);if(c===null)throw new v1(407,!1);let l=o.get(o_,null),f=o.get(Fd,null),u=o.get(Xc,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:f,changeDetectionScheduler:u},m=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",v=i?rz(m,i,this.componentDef.encapsulation,o):pa(m,g,d_(g)),p=512;this.componentDef.signals?p|=4096:this.componentDef.onPush||(p|=16);let d=null;v!==null&&(d=j8(v,o,!0));let _=n5(0,null,null,1,0,null,null,null,null,null,null),y=ga(null,_,null,p,null,null,h,m,o,null,d);R8(y);let b,L;try{let H=this.componentDef,S,k=null;H.findHostDirectiveDefs?(S=[],k=new Map,H.findHostDirectiveDefs(H,S,k),S.push(H)):S=[H];let Z=p_(y,v),C=m_(Z,v,H,S,y,h,m);L=T8(_,v2),v&&M_(m,H,v,i),n!==void 0&&C_(L,this.ngContentSelectors,n),b=v_(C,H,S,k,y,[y_]),r5(_,y,null)}finally{P8()}return new e8(this.componentType,b,Xn(L,y),y,L)}finally{ce(s)}}},e8=class extends Yc{constructor(e,n,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new N4(r,void 0,!1),this.componentType=e}setInput(e,n){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let s=this._rootLView;i5(s[R1],s,r,e,n),this.previousInputValues.set(e,n);let a=F3(this._tNode.index,s);s5(a)}}get injector(){return new S4(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function p_(t,e){let n=t[R1],i=v2;return t[i]=e,Er(n,i,2,"#host",null)}function m_(t,e,n,i,r,s,a){let o=r[R1];g_(i,t,e,a);let c=null;e!==null&&(c=j8(e,r[Bn]));let l=s.rendererFactory.createRenderer(e,n),f=16;n.signals?f=4096:n.onPush&&(f=64);let u=ga(r,Md(n),null,f,r[t.index],t,s,l,null,null,c);return o.firstCreatePass&&Gc(o,t,i.length-1),va(r,u),r[t.index]=u}function g_(t,e,n,i){for(let r of t)e.mergedAttrs=lr(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Kc(e,e.mergedAttrs,!0),n!==null&&fd(i,n,e))}function v_(t,e,n,i,r,s){let a=q2(),o=r[R1],c=j2(a,r);bd(o,r,a,n,null,i);for(let f=0;f<n.length;f++){let u=a.directiveStart+f,h=T4(r,o,u,a);D4(h,r)}zd(o,r,a),c&&D4(c,r);let l=T4(r,o,a.directiveStart+a.componentOffset,a);if(t[vt]=r[vt]=l,s!==null)for(let f of s)f(l,e);return md(o,a,r),l}function M_(t,e,n,i){if(i)Mc(t,n,["ng-version","17.3.1"]);else{let{attrs:r,classes:s}=Py(e.selectors[0]);r&&Mc(t,n,r),s&&s.length>0&&ld(t,n,s.join(" "))}}function C_(t,e,n){let i=t.projection=[];for(let r=0;r<e.length;r++){let s=n[r];i.push(s!=null?Array.from(s):null)}}function y_(){let t=q2();F8(fe()[R1],t)}var Ut=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=x_;let t=e;return t})();function x_(){let t=q2();return Bd(t,fe())}var b_=Ut,Ud=class extends b_{constructor(e,n,i){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=i}get element(){return Xn(this._hostTNode,this._hostLView)}get injector(){return new S4(this._hostTNode,this._hostLView)}get parentInjector(){let e=U8(this._hostTNode,this._hostLView);if(gh(e)){let n=Us(e,this._hostLView),i=Fs(e),r=n[R1].data[i+8];return new S4(r,n)}else return new S4(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let n=ru(this._lContainer);return n!==null&&n[e]||null}get length(){return this._lContainer.length-S2}createEmbeddedView(e,n,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let a=$c(this._lContainer,e.ssrId),o=e.createEmbeddedViewImpl(n||{},s,a);return this.insertImpl(o,r,jc(this._hostTNode,a)),o}createComponent(e,n,i,r,s){let a=e&&!Ky(e),o;if(a)o=n;else{let g=n||{};o=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=a?e:new vr(L4(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(a?l:this.parentInjector).get(D2,null);v&&(s=v)}let f=L4(c.componentType??{}),u=$c(this._lContainer,f?.id??null),h=u?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,o,jc(this._hostTNode,u)),m}insert(e,n){return this.insertImpl(e,n,!0)}insertImpl(e,n,i){let r=e._lView;if(ax(r)){let o=this.indexOf(e);if(o!==-1)this.detach(o);else{let c=r[e2],l=new Ud(c,c[W2],c[e2]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(n),a=this._lContainer;return Vd(a,r,s,i),e.attachToViewContainerRef(),Hu(cc(a),s,e),e}move(e,n){return this.insert(e,n)}indexOf(e){let n=ru(this._lContainer);return n!==null?n.indexOf(e):-1}remove(e){let n=this._adjustIndex(e,-1),i=js(this._lContainer,n);i&&(Rs(cc(this._lContainer),n),J8(i[R1],i))}detach(e){let n=this._adjustIndex(e,-1),i=js(this._lContainer,n);return i&&Rs(cc(this._lContainer),n)!=null?new N4(i):null}_adjustIndex(e,n=0){return e??this.length+n}};function ru(t){return t[ks]}function cc(t){return t[ks]||(t[ks]=[])}function Bd(t,e){let n,i=e[t.index];return kt(i)?n=i:(n=_d(i,e,null,t),e[t.index]=n,va(e,n)),Gd(n,e,t,i),new Ud(n,t,e)}function z_(t,e){let n=t[we],i=n.createComment(""),r=j2(e,t),s=K8(n,r);return qs(n,s,i,Xb(n,r),!1),i}var Gd=Wd,c5=()=>!1;function __(t,e,n){return c5(t,e,n)}function Wd(t,e,n,i){if(t[s3])return;let r;n.type&8?r=Ct(i):r=z_(e,n),t[s3]=r}function w_(t,e,n){if(t[s3]&&t[dr])return!0;let i=n[tt],r=e.index-v2;if(!i||jx(e)||la(i,r))return!1;let a=Dc(i,r),o=i.data[W8]?.[r],[c,l]=t_(a,o);return t[s3]=c,t[dr]=l,!0}function S_(t,e,n,i){c5(t,n,e)||Wd(t,e,n,i)}function H_(){Gd=S_,c5=w_}var t8=class t{constructor(e){this.queryList=e,this.matches=null}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},n8=class t{constructor(e=[]){this.queries=e}createEmbeddedView(e){let n=e.queries;if(n!==null){let i=e.contentQueries!==null?e.contentQueries[0]:n.length,r=[];for(let s=0;s<i;s++){let a=n.getByIndex(s),o=this.queries[a.indexInDeclarationView];r.push(o.clone())}return new t(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)l5(e,n).matches!==null&&this.queries[n].setDirty()}},Js=class{constructor(e,n,i=null){this.flags=n,this.read=i,typeof e=="string"?this.predicate=I_(e):this.predicate=e}},i8=class t{constructor(e=[]){this.queries=e}elementStart(e,n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let i=0;i<this.length;i++){let r=n!==null?n.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,n!==null?n.push(s):n=[s])}return n!==null?new t(n):null}template(e,n){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},r8=class t{constructor(e,n=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new t(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==n;)i=i.parent;return n===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,n){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,n,L_(n,s)),this.matchTNodeWithReadOption(e,n,As(n,e,s,!1,!1))}else i===c3?n.type&4&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,As(n,e,i,!1,!1))}matchTNodeWithReadOption(e,n,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===M2||r===Ut||r===c3&&n.type&4)this.addMatch(n.index,-2);else{let s=As(n,e,r,!1,!1);s!==null&&this.addMatch(n.index,s)}else this.addMatch(n.index,i)}}addMatch(e,n){this.matches===null?this.matches=[e,n]:this.matches.push(e,n)}};function L_(t,e){let n=t.localNames;if(n!==null){for(let i=0;i<n.length;i+=2)if(n[i]===e)return n[i+1]}return null}function E_(t,e){return t.type&11?Xn(t,e):t.type&4?a5(t,e):null}function V_(t,e,n,i){return n===-1?E_(e,t):n===-2?A_(t,e,i):T4(t,t[R1],n,e)}function A_(t,e,n){if(n===M2)return Xn(e,t);if(n===c3)return a5(e,t);if(n===Ut)return Bd(e,t)}function jd(t,e,n,i){let r=e[r3].queries[i];if(r.matches===null){let s=t.data,a=n.matches,o=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)o.push(null);else{let f=s[l];o.push(V_(e,f,a[c+1],n.metadata.read))}}r.matches=o}return r.matches}function s8(t,e,n,i){let r=t.queries.getByIndex(n),s=r.matches;if(s!==null){let a=jd(t,e,r,n);for(let o=0;o<s.length;o+=2){let c=s[o];if(c>0)i.push(a[o/2]);else{let l=s[o+1],f=e[-c];for(let u=S2;u<f.length;u++){let h=f[u];h[zr]===h[e2]&&s8(h[R1],h,l,i)}if(f[Gn]!==null){let u=f[Gn];for(let h=0;h<u.length;h++){let m=u[h];s8(m[R1],m,l,i)}}}}}return i}function T_(t,e){return t[r3].queries[e].queryList}function qd(t,e,n){let i=new Vc((n&4)===4);return cz(t,e,i,i.destroy),(e[r3]??=new n8).queries.push(new t8(i))-1}function D_(t,e,n){let i=l2();return i.firstCreatePass&&($d(i,new Js(t,e,n),-1),(e&2)===2&&(i.staticViewQueries=!0)),qd(i,fe(),e)}function N_(t,e,n,i){let r=l2();if(r.firstCreatePass){let s=q2();$d(r,new Js(e,n,i),s.index),R_(r,t),(n&2)===2&&(r.staticContentQueries=!0)}return qd(r,fe(),n)}function I_(t){return t.split(",").map(e=>e.trim())}function $d(t,e,n){t.queries===null&&(t.queries=new i8),t.queries.track(new r8(e,n))}function R_(t,e){let n=t.contentQueries||(t.contentQueries=[]),i=n.length?n[n.length-1]:-1;e!==i&&n.push(t.queries.length-1,e)}function l5(t,e){return t.queries.getByIndex(e)}function P_(t,e){let n=t[R1],i=l5(n,e);return i.crossesNgTemplate?s8(n,t,e,[]):jd(n,t,i,e)}function G3(t,e){f3("NgSignals");let n=j9(t),i=n[Tt];return e?.equal&&(i.equal=e.equal),n.set=r=>q6(i,r),n.update=r=>q9(i,r),n.asReadonly=k_.bind(n),n}function k_(){let t=this[Tt];if(t.readonlyFn===void 0){let e=()=>this();e[Tt]=t,t.readonlyFn=e}return t.readonlyFn}function O_(t){return Object.getPrototypeOf(t.prototype).constructor}function H2(t){let e=O_(t.type),n=!0,i=[t];for(;e;){let r;if(R3(t))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new v1(903,!1);r=e.\u0275dir}if(r){if(n){i.push(r);let a=t;a.inputs=_s(t.inputs),a.inputTransforms=_s(t.inputTransforms),a.declaredInputs=_s(t.declaredInputs),a.outputs=_s(t.outputs);let o=r.hostBindings;o&&W_(t,o);let c=r.viewQuery,l=r.contentQueries;if(c&&B_(t,c),l&&G_(t,l),F_(t,r),ey(t.outputs,r.outputs),R3(r)&&r.data.animation){let f=t.data;f.animation=(f.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let a=0;a<s.length;a++){let o=s[a];o&&o.ngInherit&&o(t),o===H2&&(n=!1)}}e=Object.getPrototypeOf(e)}U_(i)}function F_(t,e){for(let n in e.inputs){if(!e.inputs.hasOwnProperty(n)||t.inputs.hasOwnProperty(n))continue;let i=e.inputs[n];if(i!==void 0&&(t.inputs[n]=i,t.declaredInputs[n]=e.declaredInputs[n],e.inputTransforms!==null)){let r=Array.isArray(i)?i[0]:i;if(!e.inputTransforms.hasOwnProperty(r))continue;t.inputTransforms??={},t.inputTransforms[r]=e.inputTransforms[r]}}}function U_(t){let e=0,n=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=e+=r.hostVars,r.hostAttrs=lr(r.hostAttrs,n=lr(n,r.hostAttrs))}}function _s(t){return t===i3?{}:t===_2?[]:t}function B_(t,e){let n=t.viewQuery;n?t.viewQuery=(i,r)=>{e(i,r),n(i,r)}:t.viewQuery=e}function G_(t,e){let n=t.contentQueries;n?t.contentQueries=(i,r,s)=>{e(i,r,s),n(i,r,s)}:t.contentQueries=e}function W_(t,e){let n=t.hostBindings;n?t.hostBindings=(i,r)=>{e(i,r),n(i,r)}:t.hostBindings=e}function Xd(t){let e=n=>{let i=(Array.isArray(t)?t:t()).map(r=>typeof r=="function"?{directive:c2(r),inputs:i3,outputs:i3}:{directive:c2(r.directive),inputs:su(r.inputs),outputs:su(r.outputs)});n.hostDirectives===null?(n.findHostDirectiveDefs=Yd,n.hostDirectives=i):n.hostDirectives.unshift(...i)};return e.ngInherit=!0,e}function Yd(t,e,n){if(t.hostDirectives!==null)for(let i of t.hostDirectives){let r=S8(i.directive);j_(r.declaredInputs,i.inputs),Yd(r,e,n),n.set(r,i),e.push(r)}}function su(t){if(t===void 0||t.length===0)return i3;let e={};for(let n=0;n<t.length;n+=2)e[t[n]]=t[n+1];return e}function j_(t,e){for(let n in e)if(e.hasOwnProperty(n)){let i=e[n],r=t[n];t[i]=r}}function xa(t){let e=t.inputConfig,n={};for(let i in e)if(e.hasOwnProperty(i)){let r=e[i];Array.isArray(r)&&r[3]&&(n[i]=r[3])}t.inputTransforms=n}var P3=class{},Mr=class{};var a8=class extends P3{constructor(e,n,i){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Zs(this);let r=Iu(e);this._bootstrapComponents=ed(r.bootstrap),this._r3Injector=wh(e,n,[{provide:P3,useValue:this},{provide:ya,useValue:this.componentFactoryResolver},...i],w2(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},o8=class extends Mr{constructor(e){super(),this.moduleType=e}create(e){return new a8(this.moduleType,e,[])}};var Ks=class extends P3{constructor(e){super(),this.componentFactoryResolver=new Zs(this),this.instance=null;let n=new fr([...e.providers,{provide:P3,useValue:this},{provide:ya,useValue:this.componentFactoryResolver}],e.parent||L8(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function f5(t,e,n=null){return new Ks({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}var W3=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new a2(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Zd(t){return $_(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function q_(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{let n=t[Symbol.iterator](),i;for(;!(i=n.next()).done;)e(i.value)}}function $_(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function O4(t,e,n){let i=t[e];return Object.is(i,n)?!1:(t[e]=n,!0)}function Vr(t){return(t.flags&32)===32}function X_(t,e,n,i,r,s,a,o,c){let l=e.consts,f=Er(e,t,4,a||null,Os(l,o));xd(e,n,f,Os(l,c)),F8(e,f);let u=f.tView=n5(2,f,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,f),u.queries=e.queries.embeddedTView(f)),f}function N2(t,e,n,i,r,s,a,o){let c=fe(),l=l2(),f=t+v2,u=l.firstCreatePass?X_(f,l,c,e,n,i,r,s,a):l.data[f];wr(u,!1);let h=Jd(l,c,u,t);O8()&&Q8(l,c,h,u),D4(h,c);let m=_d(h,c,h,u);return c[f]=m,va(c,m),__(m,u,c),A8(u)&&gd(l,c,u),a!=null&&vd(c,u,o),N2}var Jd=Kd;function Kd(t,e,n,i){return Ot(!0),e[we].createComment("")}function Y_(t,e,n,i){let r=e[tt],s=!r||qn()||Vr(n)||la(r,i);if(Ot(s),s)return Kd(t,e,n,i);let a=r.data[eb]?.[i]??null;a!==null&&n.tView!==null&&n.tView.ssrId===null&&(n.tView.ssrId=a);let o=Ma(r,t,e,n);ca(r,i,o);let c=q8(r,i);return Ca(c,o)}function Z_(){Jd=Y_}function j3(t,e,n,i){let r=fe(),s=Sr();if(O4(r,s,e)){let a=l2(),o=k8();zz(o,r,t,e,n,i)}return j3}function Qd(t,e,n,i){return O4(t,Sr(),n)?e+xr(n)+i:B3}function ws(t,e){return t<<17|e<<2}function I4(t){return t>>17&32767}function J_(t){return(t&2)==2}function K_(t,e){return t&131071|e<<17}function c8(t){return t|2}function Wn(t){return(t&131068)>>2}function lc(t,e){return t&-131069|e<<2}function Q_(t){return(t&1)===1}function l8(t){return t|1}function ew(t,e,n,i,r,s){let a=s?e.classBindings:e.styleBindings,o=I4(a),c=Wn(a);t[i]=n;let l=!1,f;if(Array.isArray(n)){let u=n;f=u[1],(f===null||br(u,f)>0)&&(l=!0)}else f=n;if(r)if(c!==0){let h=I4(t[o+1]);t[i+1]=ws(h,o),h!==0&&(t[h+1]=lc(t[h+1],i)),t[o+1]=K_(t[o+1],i)}else t[i+1]=ws(o,0),o!==0&&(t[o+1]=lc(t[o+1],i)),o=i;else t[i+1]=ws(c,0),o===0?o=i:t[c+1]=lc(t[c+1],i),c=i;l&&(t[i+1]=c8(t[i+1])),au(t,f,i,!0),au(t,f,i,!1),tw(e,f,t,i,s),a=ws(o,c),s?e.classBindings=a:e.styleBindings=a}function tw(t,e,n,i,r){let s=r?t.residualClasses:t.residualStyles;s!=null&&typeof e=="string"&&br(s,e)>=0&&(n[i+1]=l8(n[i+1]))}function au(t,e,n,i){let r=t[n+1],s=e===null,a=i?I4(r):Wn(r),o=!1;for(;a!==0&&(o===!1||s);){let c=t[a],l=t[a+1];nw(c,e)&&(o=!0,t[a+1]=i?l8(l):c8(l)),a=i?I4(l):Wn(l)}o&&(t[n+1]=i?c8(r):l8(r))}function nw(t,e){return t===null||e==null||(Array.isArray(t)?t[1]:t)===e?!0:Array.isArray(t)&&typeof e=="string"?br(t,e)>=0:!1}var mt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function iw(t){return t.substring(mt.key,mt.keyEnd)}function rw(t){return sw(t),ep(t,tp(t,0,mt.textEnd))}function ep(t,e){let n=mt.textEnd;return n===e?-1:(e=mt.keyEnd=aw(t,mt.key=e,n),tp(t,e,n))}function sw(t){mt.key=0,mt.keyEnd=0,mt.value=0,mt.valueEnd=0,mt.textEnd=t.length}function tp(t,e,n){for(;e<n&&t.charCodeAt(e)<=32;)e++;return e}function aw(t,e,n){for(;e<n&&t.charCodeAt(e)>32;)e++;return e}function Se(t,e,n){let i=fe(),r=Sr();if(O4(i,r,e)){let s=l2(),a=k8();yd(s,a,i,t,e,i[we],n,!1)}return Se}function f8(t,e,n,i,r){let s=e.inputs,a=r?"class":"style";i5(t,n,s[a],a,i)}function ba(t,e,n){return np(t,e,n,!1),ba}function za(t,e){return np(t,e,null,!0),za}function ow(t,e){for(let n=rw(e);n>=0;n=ep(e,n))_8(t,iw(e),!0)}function np(t,e,n,i){let r=fe(),s=l2(),a=sh(2);if(s.firstUpdatePass&&rp(s,t,a,i),e!==B3&&O4(r,a,e)){let o=s.data[R4()];sp(s,o,r,r[we],t,r[a+1]=mw(e,n),i,a)}}function cw(t,e,n,i){let r=l2(),s=sh(2);r.firstUpdatePass&&rp(r,null,s,i);let a=fe();if(n!==B3&&O4(a,s,n)){let o=r.data[R4()];if(ap(o,i)&&!ip(r,s)){let c=i?o.classesWithoutHost:o.stylesWithoutHost;c!==null&&(n=pc(c,n||"")),f8(r,o,a,n,i)}else pw(r,o,a,a[we],a[s+1],a[s+1]=dw(t,e,n),i,s)}}function ip(t,e){return e>=t.expandoStartIndex}function rp(t,e,n,i){let r=t.data;if(r[n+1]===null){let s=r[R4()],a=ip(t,n);ap(s,i)&&e===null&&!a&&(e=!1),e=lw(r,s,e,i),ew(r,s,e,n,a,i)}}function lw(t,e,n,i){let r=xx(t),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(n=fc(null,t,e,n,i),n=Cr(n,e.attrs,i),s=null);else{let a=e.directiveStylingLast;if(a===-1||t[a]!==r)if(n=fc(r,t,e,n,i),s===null){let c=fw(t,e,i);c!==void 0&&Array.isArray(c)&&(c=fc(null,t,e,c[1],i),c=Cr(c,e.attrs,i),uw(t,e,i,c))}else s=hw(t,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),n}function fw(t,e,n){let i=n?e.classBindings:e.styleBindings;if(Wn(i)!==0)return t[I4(i)]}function uw(t,e,n,i){let r=n?e.classBindings:e.styleBindings;t[I4(r)]=i}function hw(t,e,n){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let a=t[s].hostAttrs;i=Cr(i,a,n)}return Cr(i,e.attrs,n)}function fc(t,e,n,i,r){let s=null,a=n.directiveEnd,o=n.directiveStylingLast;for(o===-1?o=n.directiveStart:o++;o<a&&(s=e[o],i=Cr(i,s.hostAttrs,r),s!==t);)o++;return t!==null&&(n.directiveStylingLast=o),i}function Cr(t,e,n){let i=n?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),_8(t,a,n?!0:e[++s]))}return t===void 0?null:t}function dw(t,e,n){if(n==null||n==="")return _2;let i=[],r=xt(n);if(Array.isArray(r))for(let s=0;s<r.length;s++)t(i,r[s],!0);else if(typeof r=="object")for(let s in r)r.hasOwnProperty(s)&&t(i,s,r[s]);else typeof r=="string"&&e(i,r);return i}function pw(t,e,n,i,r,s,a,o){r===B3&&(r=_2);let c=0,l=0,f=0<r.length?r[0]:null,u=0<s.length?s[0]:null;for(;f!==null||u!==null;){let h=c<r.length?r[c+1]:void 0,m=l<s.length?s[l+1]:void 0,g=null,v;f===u?(c+=2,l+=2,h!==m&&(g=u,v=m)):u===null||f!==null&&f<u?(c+=2,g=f):(l+=2,g=u,v=m),g!==null&&sp(t,e,n,i,g,v,a,o),f=c<r.length?r[c]:null,u=l<s.length?s[l]:null}}function sp(t,e,n,i,r,s,a,o){if(!(e.type&3))return;let c=t.data,l=c[o+1],f=Q_(l)?ou(c,e,n,r,Wn(l),a):void 0;if(!Qs(f)){Qs(s)||J_(l)&&(s=ou(c,null,n,r,o,a));let u=Ku(R4(),n);Qb(i,a,u,r,s)}}function ou(t,e,n,i,r,s){let a=e===null,o;for(;r>0;){let c=t[r],l=Array.isArray(c),f=l?c[1]:c,u=f===null,h=n[r+1];h===B3&&(h=u?_2:void 0);let m=u?Ko(h,i):f===i?h:void 0;if(l&&!Qs(m)&&(m=Ko(c,i)),Qs(m)&&(o=m,a))return o;let g=t[r+1];r=a?I4(g):Wn(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(o=Ko(c,i))}return o}function Qs(t){return t!==void 0}function mw(t,e){return t==null||t===""||(typeof e=="string"?t=t+e:typeof t=="object"&&(t=w2(xt(t)))),t}function ap(t,e){return(t.flags&(e?8:16))!==0}function u3(t,e,n){let i=fe(),r=Qd(i,t,e,n);cw(_8,ow,r,!0)}function Ar(t,e,n){f3("NgControlFlow");let i=fe(),r=Sr(),s=gw(i,v2+t),a=0;if(O4(i,r,e)){let o=ce(null);try{if(Tz(s,a),e!==-1){let c=vw(i[R1],v2+e),l=$c(s,c.tView.ssrId),f=Ed(i,c,n,{dehydratedView:l});Vd(s,f,a,jc(c,l))}}finally{ce(o)}}else{let o=Az(s,a);o!==void 0&&(o[vt]=n)}}function gw(t,e){return t[e]}function vw(t,e){return T8(t,e)}function Mw(t,e,n,i,r,s){let a=e.consts,o=Os(a,r),c=Er(e,t,2,i,o);return xd(e,n,c,Os(a,s)),c.attrs!==null&&Kc(c,c.attrs,!1),c.mergedAttrs!==null&&Kc(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function he(t,e,n,i){let r=fe(),s=l2(),a=v2+t,o=r[we],c=s.firstCreatePass?Mw(a,s,r,e,n,i):s.data[a],l=op(s,r,c,o,e,t);r[a]=l;let f=A8(c);return wr(c,!0),fd(o,l,c),!Vr(c)&&O8()&&Q8(s,r,l,c),fx()===0&&D4(l,r),ux(),f&&(gd(s,r,c),md(s,c,r)),i!==null&&vd(r,c),he}function de(){let t=q2();ih()?rh():(t=t.parent,wr(t,!1));let e=t;dx(e)&&mx(),hx();let n=l2();return n.firstCreatePass&&(F8(n,t),ju(t)&&n.queries.elementEnd(t)),e.classesWithoutHost!=null&&Hx(e)&&f8(n,e,fe(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Lx(e)&&f8(n,e,fe(),e.stylesWithoutHost,!1),de}function ve(t,e,n,i){return he(t,e,n,i),de(),ve}var op=(t,e,n,i,r,s)=>(Ot(!0),pa(i,r,dh()));function Cw(t,e,n,i,r,s){let a=e[tt],o=!a||qn()||Vr(n)||la(a,s);if(Ot(o),o)return pa(i,r,dh());let c=Ma(a,t,e,n);return Oh(a,s)&&ca(a,s,c.nextSibling),a&&(Hh(n)||Lh(c))&&_r(n)&&(px(n),od(c)),c}function yw(){op=Cw}var xw=(t,e,n,i)=>(Ot(!0),Z8(e[we],""));function bw(t,e,n,i){let r,s=e[tt],a=!s||qn()||Vr(n);if(Ot(a),a)return Z8(e[we],"");let o=Ma(s,t,e,n),c=ub(s,i);return ca(s,i,o),r=Ca(c,o),r}function zw(){xw=bw}function u5(t,e,n){let i=fe(),r=Sr();if(O4(i,r,e)){let s=l2(),a=k8();yd(s,a,i,t,e,i[we],n,!0)}return u5}var ea="en-US";var _w=ea;function ww(t){typeof t=="string"&&(_w=t.toLowerCase().replace(/_/g,"-"))}function cp(t,e,n){let i=t[we];switch(n){case Node.COMMENT_NODE:return Z8(i,e);case Node.TEXT_NODE:return Y8(i,e);case Node.ELEMENT_NODE:return pa(i,e,null)}}var Sw=(t,e,n,i)=>(Ot(!0),cp(t,n,i));function Hw(t,e,n,i){return Ot(!0),cp(t,n,i)}function Lw(){Sw=Hw}function L2(t,e,n,i){let r=fe(),s=l2(),a=q2();return Vw(s,r,r[we],a,t,e,i),L2}function Ew(t,e,n,i){let r=t.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let a=r[s];if(a===n&&r[s+1]===i){let o=e[ur],c=r[s+2];return o.length>c?o[c]:null}typeof a=="string"&&(s+=2)}return null}function Vw(t,e,n,i,r,s,a){let o=A8(i),l=t.firstCreatePass&&Hd(t),f=e[vt],u=Sd(e),h=!0;if(i.type&3||a){let v=j2(i,e),p=a?a(v):v,d=u.length,_=a?b=>a(Ct(b[i.index])):i.index,y=null;if(!a&&o&&(y=Ew(t,e,r,i.index)),y!==null){let b=y.__ngLastListenerFn__||y;b.__ngNextListenerFn__=s,y.__ngLastListenerFn__=s,h=!1}else{s=lu(i,e,f,s,!1);let b=n.listen(p,r,s);u.push(s,b),l&&l.push(r,_,d,d+1)}}else s=lu(i,e,f,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let v=g.length;if(v)for(let p=0;p<v;p+=2){let d=g[p],_=g[p+1],L=e[d][_].subscribe(s),H=u.length;u.push(s,L),l&&l.push(r,i.index,H,-(H+1))}}}function cu(t,e,n,i){let r=ce(null);try{return Nt(6,e,n),n(i)!==!1}catch(s){return Ld(t,s),!1}finally{Nt(7,e,n),ce(r)}}function lu(t,e,n,i,r){return function s(a){if(a===Function)return i;let o=t.componentOffset>-1?F3(t.index,e):e;s5(o);let c=cu(e,n,i,a),l=s.__ngNextListenerFn__;for(;l;)c=cu(e,n,l,a)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&a.preventDefault(),c}}function bt(t=1){return zx(t)}function Aw(t,e){let n=null,i=Ay(t);for(let r=0;r<e.length;r++){let s=e[r];if(s==="*"){n=r;continue}if(i===null?Tu(t,s,!0):Ny(i,s))return r}return n}function _a(t){let e=fe()[G2][W2];if(!e.projection){let n=t?t.length:1,i=e.projection=xy(n,null),r=i.slice(),s=e.child;for(;s!==null;){let a=t?Aw(s,t):0;a!==null&&(r[a]?r[a].projectionNext=s:i[a]=s,r[a]=s),s=s.next}}}function wa(t,e=0,n){let i=fe(),r=l2(),s=Er(r,v2+t,16,null,n||null);s.projection===null&&(s.projection=e),rh(),(!i[tt]||qn())&&(s.flags&32)!==32&&Jb(r,i,s)}function h5(t,e,n,i){N_(t,e,n,i)}function q3(t,e,n){D_(t,e,n)}function Bt(t){let e=fe(),n=l2(),i=ah();I8(i+1);let r=l5(n,i);if(t.dirty&&sx(e)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let s=P_(e,i);t.reset(s,Ux),t.notifyOnChanges()}return!0}return!1}function Gt(){return T_(fe(),ah())}function Wt(t,e=""){let n=fe(),i=l2(),r=t+v2,s=i.firstCreatePass?Er(i,r,1,e,null):i.data[r],a=lp(i,n,s,e,t);n[r]=a,O8()&&Q8(i,n,a,s),wr(s,!1)}var lp=(t,e,n,i,r)=>(Ot(!0),Y8(e[we],i));function Tw(t,e,n,i,r){let s=e[tt],a=!s||qn()||Vr(n)||la(s,r);return Ot(a),a?Y8(e[we],i):Ma(s,t,e,n)}function Dw(){lp=Tw}function Tr(t){return Zn("",t,""),Tr}function Zn(t,e,n){let i=fe(),r=Qd(i,t,e,n);return r!==B3&&Hz(i,R4(),r),Zn}function Nw(t,e,n){let i=l2();if(i.firstCreatePass){let r=R3(t);u8(n,i.data,i.blueprint,r,!0),u8(e,i.data,i.blueprint,r,!1)}}function u8(t,e,n,i,r){if(t=c2(t),Array.isArray(t))for(let s=0;s<t.length;s++)u8(t[s],e,n,i,r);else{let s=l2(),a=fe(),o=q2(),c=Un(t)?t:c2(t.provide),l=Uu(t),f=o.providerIndexes&1048575,u=o.directiveStart,h=o.providerIndexes>>20;if(Un(t)||!t.multi){let m=new A4(l,r,ge),g=hc(c,e,r?f:f+h,u);g===-1?(Sc(Bs(o,a),s,c),uc(s,t,e.length),e.push(c),o.directiveStart++,o.directiveEnd++,r&&(o.providerIndexes+=1048576),n.push(m),a.push(m)):(n[g]=m,a[g]=m)}else{let m=hc(c,e,f+h,u),g=hc(c,e,f,f+h),v=m>=0&&n[m],p=g>=0&&n[g];if(r&&!p||!r&&!v){Sc(Bs(o,a),s,c);let d=Pw(r?Rw:Iw,n.length,r,i,l);!r&&p&&(n[g].providerFactory=d),uc(s,t,e.length,0),e.push(c),o.directiveStart++,o.directiveEnd++,r&&(o.providerIndexes+=1048576),n.push(d),a.push(d)}else{let d=fp(n[r?g:m],l,!r&&i);uc(s,t,m>-1?m:g,d)}!r&&i&&p&&n[g].componentProviders++}}}function uc(t,e,n,i){let r=Un(e),s=jy(e);if(r||s){let c=(s?c2(e.useClass):e).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&e.multi){let f=l.indexOf(n);f===-1?l.push(n,[i,c]):l[f+1].push(i,c)}else l.push(n,c)}}}function fp(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function hc(t,e,n,i){for(let r=n;r<i;r++)if(e[r]===t)return r;return-1}function Iw(t,e,n,i){return h8(this.multi,[])}function Rw(t,e,n,i){let r=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,o=T4(n,n[R1],this.providerFactory.index,i);s=o.slice(0,a),h8(r,s);for(let c=a;c<o.length;c++)s.push(o[c])}else s=[],h8(r,s);return s}function h8(t,e){for(let n=0;n<t.length;n++){let i=t[n];e.push(i())}return e}function Pw(t,e,n,i,r){let s=new A4(t,n,ge);return s.multi=[],s.index=e,s.componentProviders=0,fp(s,r,i&&!n),s}function jt(t,e=[]){return n=>{n.providersResolver=(i,r)=>Nw(i,r?r(t):t,e)}}var kw=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=ku(!1,i.type),s=r.length>0?f5([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=d1({token:e,providedIn:"environment",factory:()=>new e(V1(D2))});let t=e;return t})();function Oe(t){f3("NgStandalone"),t.getStandaloneInjector=e=>e.get(kw).getOrCreateStandaloneInjector(t)}var Sa=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();var up=new C1("");function Dr(t){return!!t&&typeof t.then=="function"}function hp(t){return!!t&&typeof t.subscribe=="function"}var dp=new C1(""),pp=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=G(dp,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let a=s();if(Dr(a))i.push(a);else if(hp(a)){let o=new Promise((c,l)=>{a.subscribe({complete:c,error:l})});i.push(o)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Jn=new C1("");function Ow(){W9(()=>{throw new v1(600,!1)})}function Fw(t){return t.isBoundToModule}function Uw(t,e,n){try{let i=n();return Dr(i)?i.catch(r=>{throw e.runOutsideAngular(()=>t.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>t.handleError(i)),i}}var h3=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=G(Sh),this.afterRenderEffectManager=G(Fd),this.externalTestViews=new Set,this.beforeRender=new s2,this.afterTick=new s2,this.componentTypes=[],this.components=[],this.isStable=G(W3).hasPendingTasks.pipe(L1(i=>!i)),this._injector=G(D2)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof Ys;if(!this._injector.get(pp).done){let m=!s&&Nu(i),g=!1;throw new v1(405,g)}let o;s?o=i:o=this._injector.get(ya).resolveComponentFactory(i),this.componentTypes.push(o.componentType);let c=Fw(o)?void 0:this._injector.get(P3),l=r||o.selector,f=o.create(st.NULL,[],l,c),u=f.location.nativeElement,h=f.injector.get(up,null);return h?.registerApplication(u),f.onDestroy(()=>{this.detachView(f.hostView),dc(this.components,f),h?.unregisterApplication(u)}),this._loadComponent(f),f}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new v1(101,!1);let r=ce(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,ce(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===Td)throw new v1(103,!1);if(i){let a=r===0;this.beforeRender.next(a);for(let{_lView:o,notifyErrorHandler:c}of this._views)Bw(o,a,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:a})=>d8(a))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:a})=>d8(a))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;dc(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(Jn,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>dc(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new v1(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function dc(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}var Ss;function d5(t){Ss??=new WeakMap;let e=Ss.get(t);if(e)return e;let n=t.isStable.pipe(ht(i=>i)).toPromise().then(()=>{});return Ss.set(t,n),t.onDestroy(()=>Ss?.delete(t)),n}function Bw(t,e,n){!e&&!d8(t)||Gw(t,n,e)}function d8(t){return N8(t)}function Gw(t,e,n){let i;n?(i=0,t[E1]|=1024):t[E1]&64?i=0:i=1,Dd(t,e,i)}var p8=class{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}},p5=(()=>{let e=class e{compileModuleSync(i){return new o8(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=Iu(i),a=ed(s.declarations).reduce((o,c)=>{let l=L4(c);return l&&o.push(new vr(l)),o},[]);return new p8(r,a)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ww=(()=>{let e=class e{constructor(){this.zone=G(ye),this.applicationRef=G(h3)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function jw(t){return[{provide:ye,useFactory:t},{provide:H4,multi:!0,useFactory:()=>{let e=G(Ww,{optional:!0});return()=>e.initialize()}},{provide:H4,multi:!0,useFactory:()=>{let e=G(Yw);return()=>{e.initialize()}}},{provide:Sh,useFactory:qw}]}function qw(){let t=G(ye),e=G(Pt);return n=>t.runOutsideAngular(()=>e.handleError(n))}function $w(t){let e=jw(()=>new ye(Xw(t)));return k3([[],e])}function Xw(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var Yw=(()=>{let e=class e{constructor(){this.subscription=new Ne,this.initialized=!1,this.zone=G(ye),this.pendingTasks=G(W3)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{ye.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{ye.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Zw(){return typeof $localize<"u"&&$localize.locale||ea}var m5=new C1("",{providedIn:"root",factory:()=>G(m5,Q1.Optional|Q1.SkipSelf)||Zw()});var mp=new C1("");var Ds=null;function Jw(t=[],e){return st.create({name:e,providers:[{provide:sa,useValue:"platform"},{provide:mp,useValue:new Set([()=>Ds=null])},...t]})}function Kw(t=[]){if(Ds)return Ds;let e=Jw(t);return Ds=e,Ow(),Qw(e),e}function Qw(t){t.get(B8,null)?.forEach(n=>n())}var Kn=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=eS;let t=e;return t})();function eS(t){return tS(q2(),fe(),(t&16)===16)}function tS(t,e,n){if(_r(t)&&!n){let i=F3(t.index,e);return new N4(i,i)}else if(t.type&47){let i=e[G2];return new N4(i,e)}return null}var m8=class{constructor(){}supports(e){return Zd(e)}create(e){return new g8(e)}},nS=(t,e)=>e,g8=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||nS}forEachItem(e){let n;for(n=this._itHead;n!==null;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,i=this._removalsHead,r=0,s=null;for(;n||i;){let a=!i||n&&n.currentIndex<fu(i,r,s)?n:i,o=fu(a,r,s),c=a.currentIndex;if(a===i)r--,i=i._nextRemoved;else if(n=n._next,a.previousIndex==null)r++;else{s||(s=[]);let l=o-r,f=c-r;if(l!=f){for(let h=0;h<l;h++){let m=h<s.length?s[h]:s[h]=0,g=m+h;f<=g&&g<l&&(s[h]=m+1)}let u=a.previousIndex;s[u]=f-l}}o!==c&&e(a,o,c)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;n!==null;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;n!==null;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;n!==null;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;n!==null;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;n!==null;n=n._nextIdentityChange)e(n)}diff(e){if(e==null&&(e=[]),!Zd(e))throw new v1(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._itHead,i=!1,r,s,a;if(Array.isArray(e)){this.length=e.length;for(let o=0;o<this.length;o++)s=e[o],a=this._trackByFn(o,s),n===null||!Object.is(n.trackById,a)?(n=this._mismatch(n,s,a,o),i=!0):(i&&(n=this._verifyReinsertion(n,s,a,o)),Object.is(n.item,s)||this._addIdentityChange(n,s)),n=n._next}else r=0,q_(e,o=>{a=this._trackByFn(r,o),n===null||!Object.is(n.trackById,a)?(n=this._mismatch(n,o,a,r),i=!0):(i&&(n=this._verifyReinsertion(n,o,a,r)),Object.is(n.item,o)||this._addIdentityChange(n,o)),n=n._next,r++}),this.length=r;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,s,r)):e=this._addAfter(new v8(n,i),s,r)),e}_verifyReinsertion(e,n,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let n=e._next;this._addToRemovals(this._unlink(e)),e=n}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,n,i),this._addToMoves(e,i),e}_moveAfter(e,n,i){return this._unlink(e),this._insertAfter(e,n,i),this._addToMoves(e,i),e}_addAfter(e,n,i){return this._insertAfter(e,n,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,n,i){let r=n===null?this._itHead:n._next;return e._next=r,e._prev=n,r===null?this._itTail=e:r._prev=e,n===null?this._itHead=e:n._next=e,this._linkedRecords===null&&(this._linkedRecords=new ta),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let n=e._prev,i=e._next;return n===null?this._itHead=i:n._next=i,i===null?this._itTail=n:i._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ta),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},v8=class{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},M8=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let i;for(i=this._head;i!==null;i=i._nextDup)if((n===null||n<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let n=e._prevDup,i=e._nextDup;return n===null?this._head=i:n._nextDup=i,i===null?this._tail=n:i._prevDup=n,this._head===null}},ta=class{constructor(){this.map=new Map}put(e){let n=e.trackById,i=this.map.get(n);i||(i=new M8,this.map.set(n,i)),i.add(e)}get(e,n){let i=e,r=this.map.get(i);return r?r.get(e,n):null}remove(e){let n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function fu(t,e,n){let i=t.previousIndex;if(i===null)return i;let r=0;return n&&i<n.length&&(r=n[i]),i+e+r}function uu(){return new g5([new m8])}var g5=(()=>{let e=class e{constructor(i){this.factories=i}static create(i,r){if(r!=null){let s=r.factories.slice();i=i.concat(s)}return new e(i)}static extend(i){return{provide:e,useFactory:r=>e.create(i,r||uu()),deps:[[e,new Su,new b8]]}}find(i){let r=this.factories.find(s=>s.supports(i));if(r!=null)return r;throw new v1(901,!1)}};e.\u0275prov=d1({token:e,providedIn:"root",factory:uu});let t=e;return t})();function gp(t){try{let{rootComponent:e,appProviders:n,platformProviders:i}=t,r=Kw(i),s=[$w(),...n||[]],o=new Ks({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=o.get(ye);return c.run(()=>{o.resolveInjectorInitializers();let l=o.get(Pt,null),f;c.runOutsideAngular(()=>{f=c.onError.subscribe({next:m=>{l.handleError(m)}})});let u=()=>o.destroy(),h=r.get(mp);return h.add(u),o.onDestroy(()=>{f.unsubscribe(),h.delete(u)}),Uw(l,c,()=>{let m=o.get(pp);return m.runInitializers(),m.donePromise.then(()=>{let g=o.get(m5,ea);ww(g||ea);let v=o.get(h3);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}var hu=!1,iS=!1;function rS(){hu||(hu=!0,ob(),yw(),Dw(),zw(),Z_(),H_(),i_(),oz(),Lw())}function sS(t,e){return d5(t)}function vp(){return k3([{provide:Cs,useFactory:()=>{let t=!0;return zs()&&(t=!!G(k4,{optional:!0})?.get(Ph,null)),t&&f3("NgHydration"),t}},{provide:H4,useValue:()=>{iS=!!G(hb,{optional:!0}),zs()&&G(Cs)&&(aS(),rS())},multi:!0},{provide:Uh,useFactory:()=>zs()&&G(Cs)},{provide:Jn,useFactory:()=>{if(zs()&&G(Cs)){let t=G(h3),e=G(st);return()=>{sS(t,e).then(()=>{ye.assertInAngularZone(),Xz(t)})}}return()=>{}},multi:!0}])}function aS(){let t=Hr(),e;for(let n of t.body.childNodes)if(n.nodeType===Node.COMMENT_NODE&&n.textContent?.trim()===sb){e=n;break}if(!e)throw new v1(-507,!1)}function Qn(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ha(t,e=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):e}function $3(t,e){f3("NgSignals");let n=U9(t);return e?.equal&&(n[Tt].equal=e.equal),n}var oS=new C1("",{providedIn:"root",factory:()=>G(cS)}),cS=(()=>{let e=class e{};e.\u0275prov=d1({token:e,providedIn:"root",factory:()=>new C8});let t=e;return t})(),C8=class{constructor(){this.queuedEffectCount=0,this.queues=new Map,this.pendingTasks=G(W3),this.taskId=null}scheduleEffect(e){if(this.enqueue(e),this.taskId===null){let n=this.taskId=this.pendingTasks.add();queueMicrotask(()=>{this.flush(),this.pendingTasks.remove(n),this.taskId=null})}}enqueue(e){let n=e.creationZone;this.queues.has(n)||this.queues.set(n,new Set);let i=this.queues.get(n);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,n]of this.queues)e===null?this.flushQueue(n):e.run(()=>this.flushQueue(n))}flushQueue(e){for(let n of e)e.delete(n),this.queuedEffectCount--,n.run()}},y8=class{constructor(e,n,i,r,s,a){this.scheduler=e,this.effectFn=n,this.creationZone=i,this.injector=s,this.watcher=$9(o=>this.runEffect(o),()=>this.schedule(),a),this.unregisterOnDestroy=r?.onDestroy(()=>this.destroy())}runEffect(e){try{this.effectFn(e)}catch(n){this.injector.get(Pt,null,{optional:!0})?.handleError(n)}}run(){this.watcher.run()}schedule(){this.scheduler.scheduleEffect(this)}destroy(){this.watcher.destroy(),this.unregisterOnDestroy?.()}};function qt(t,e){f3("NgSignals"),!e?.injector&&E8(qt);let n=e?.injector??G(st),i=e?.manualCleanup!==!0?n.get($n):null,r=new y8(n.get(oS),t,typeof Zone>"u"?null:Zone.current,i,n,e?.allowSignalWrites??!1),s=n.get(Kn,null,{optional:!0});return!s||!(s._lView[E1]&8)?r.watcher.notify():(s._lView[Ls]??=[]).push(r.watcher.notify),r}var zp=null;function ei(){return zp}function _p(t){zp??=t}var La=class{};var Fe=new C1(""),wp=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>G(uS),providedIn:"platform"});let t=e;return t})();var uS=(()=>{let e=class e extends wp{constructor(){super(),this._doc=G(Fe),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ei().getBaseHref(this._doc)}onPopState(i){let r=ei().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=ei().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function Sp(t,e){if(t.length==0)return e;if(e.length==0)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,n==2?t+e.substring(1):n==1?t+e:t+"/"+e}function Mp(t){let e=t.match(/#|\?|$/),n=e&&e.index||t.length,i=n-(t[n-1]==="/"?1:0);return t.slice(0,i)+t.slice(n)}function F4(t){return t&&t[0]!=="?"?"?"+t:t}var Va=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>G(Hp),providedIn:"root"});let t=e;return t})(),hS=new C1(""),Hp=(()=>{let e=class e extends Va{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??G(Fe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Sp(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+F4(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,a){let o=this.prepareExternalUrl(s+F4(a));this._platformLocation.pushState(i,r,o)}replaceState(i,r,s,a){let o=this.prepareExternalUrl(s+F4(a));this._platformLocation.replaceState(i,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(V1(wp),V1(hS,8))},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Nr=(()=>{let e=class e{constructor(i){this._subject=new qe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=mS(Mp(Cp(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+F4(r))}normalize(i){return e.stripTrailingSlash(pS(this._basePath,Cp(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+F4(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+F4(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=F4,e.joinWithSlash=Sp,e.stripTrailingSlash=Mp,e.\u0275fac=function(r){return new(r||e)(V1(Va))},e.\u0275prov=d1({token:e,factory:()=>dS(),providedIn:"root"});let t=e;return t})();function dS(){return new Nr(V1(Va))}function pS(t,e){if(!t||!e.startsWith(t))return e;let n=e.substring(t.length);return n===""||["/",";","?","#"].includes(n[0])?n:e}function Cp(t){return t.replace(/\/index.html$/,"")}function mS(t){if(new RegExp("^(https?:)?//").test(t)){let[,n]=t.split(/\/\/[^\/]+/);return n}return t}function Aa(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let i=n.indexOf("="),[r,s]=i==-1?[n,""]:[n.slice(0,i),n.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var v5=class{constructor(e,n,i,r){this.$implicit=e,this.ngForOf=n,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Lp=(()=>{let e=class e{set ngForOf(i){this._ngForOf=i,this._ngForOfDirty=!0}set ngForTrackBy(i){this._trackByFn=i}get ngForTrackBy(){return this._trackByFn}constructor(i,r,s){this._viewContainer=i,this._template=r,this._differs=s,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(i){i&&(this._template=i)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let i=this._ngForOf;if(!this._differ&&i)if(0)try{}catch{}else this._differ=this._differs.find(i).create(this.ngForTrackBy)}if(this._differ){let i=this._differ.diff(this._ngForOf);i&&this._applyChanges(i)}}_applyChanges(i){let r=this._viewContainer;i.forEachOperation((s,a,o)=>{if(s.previousIndex==null)r.createEmbeddedView(this._template,new v5(s.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(a===null?void 0:a);else if(a!==null){let c=r.get(a);r.move(c,o),yp(c,s)}});for(let s=0,a=r.length;s<a;s++){let c=r.get(s).context;c.index=s,c.count=a,c.ngForOf=this._ngForOf}i.forEachIdentityChange(s=>{let a=r.get(s.currentIndex);yp(a,s)})}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(ge(Ut),ge(c3),ge(g5))},e.\u0275dir=ke({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function yp(t,e){t.context.$implicit=e.item}var Ta=(()=>{let e=class e{constructor(i,r){this._viewContainer=i,this._context=new M5,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(i){this._context.$implicit=this._context.ngIf=i,this._updateView()}set ngIfThen(i){xp("ngIfThen",i),this._thenTemplateRef=i,this._thenViewRef=null,this._updateView()}set ngIfElse(i){xp("ngIfElse",i),this._elseTemplateRef=i,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(ge(Ut),ge(c3))},e.\u0275dir=ke({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),M5=class{constructor(){this.$implicit=null,this.ngIf=null}};function xp(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${w2(e)}'.`)}var gS=!0,Ea=class{constructor(e,n){this._viewContainerRef=e,this._templateRef=n,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}},Da=(()=>{let e=class e{constructor(){this._defaultViews=[],this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(i){this._ngSwitch=i,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(i){this._defaultViews.push(i)}_matchCase(i){let r=gS?i===this._ngSwitch:i==this._ngSwitch;return this._lastCasesMatched||=r,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),r}_updateDefaultCases(i){if(this._defaultViews.length>0&&i!==this._defaultUsed){this._defaultUsed=i;for(let r of this._defaultViews)r.enforceState(i)}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});let t=e;return t})(),Ep=(()=>{let e=class e{constructor(i,r,s){this.ngSwitch=s,s._addCase(),this._view=new Ea(i,r)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}};e.\u0275fac=function(r){return new(r||e)(ge(Ut),ge(c3),ge(Da,9))},e.\u0275dir=ke({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});let t=e;return t})(),Vp=(()=>{let e=class e{constructor(i,r,s){s._addDefault(new Ea(i,r))}};e.\u0275fac=function(r){return new(r||e)(ge(Ut),ge(c3),ge(Da,9))},e.\u0275dir=ke({type:e,selectors:[["","ngSwitchDefault",""]],standalone:!0});let t=e;return t})();var d3=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=it({type:e}),e.\u0275inj=nt({});let t=e;return t})(),C5="browser",vS="server";function ni(t){return t===C5}function y5(t){return t===vS}var ti=class{};var Pr=class{},Ra=class{},Y3=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let i=n.indexOf(":");if(i>0){let r=n.slice(0,i),s=r.toLowerCase(),a=n.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,i)=>{this.setHeaderEntries(i,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,i])=>{this.setHeaderEntries(n,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){let n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,n);let r=(e.op==="a"?this.headers.get(n):void 0)||[];r.push(...i),this.headers.set(n,r);break;case"d":let s=e.value;if(!s)this.headers.delete(n),this.normalizedNames.delete(n);else{let a=this.headers.get(n);if(!a)return;a=a.filter(o=>s.indexOf(o)===-1),a.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,a)}break}}setHeaderEntries(e,n){let i=(Array.isArray(n)?n:[n]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var b5=class{encodeKey(e){return Ap(e)}encodeValue(e){return Ap(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function CS(t,e){let n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[a,o]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],c=n.get(a)||[];c.push(o),n.set(a,c)}),n}var yS=/%(\d[a-f0-9])/gi,xS={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ap(t){return encodeURIComponent(t).replace(yS,(e,n)=>xS[n]??e)}function Na(t){return`${t}`}var X3=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new b5,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=CS(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let i=e.fromObject[n],r=Array.isArray(i)?i.map(Na):[Na(i)];this.map.set(n,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(s=>{n.push({param:i,value:s,op:"a"})}):n.push({param:i,value:r,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(i=>n+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=(e.op==="a"?this.map.get(e.param):void 0)||[];n.push(Na(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(Na(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var z5=class{constructor(){this.map=new Map}set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function bS(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Tp(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Dp(t){return typeof Blob<"u"&&t instanceof Blob}function Np(t){return typeof FormData<"u"&&t instanceof FormData}function zS(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Rr=class t{constructor(e,n,i,r){this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(bS(this.method)||r?(this.body=i!==void 0?i:null,s=r):s=i,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new Y3,this.context??=new z5,!this.params)this.params=new X3,this.urlWithParams=n;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=n;else{let o=n.indexOf("?"),c=o===-1?"?":o<n.length-1?"&":"";this.urlWithParams=n+c+a}}}serializeBody(){return this.body===null?null:Tp(this.body)||Dp(this.body)||Np(this.body)||zS(this.body)||typeof this.body=="string"?this.body:this.body instanceof X3?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Np(this.body)?null:Dp(this.body)?this.body.type||null:Tp(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof X3?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let n=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,s=e.body!==void 0?e.body:this.body,a=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,o=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,c=e.headers||this.headers,l=e.params||this.params,f=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((u,h)=>u.set(h,e.setHeaders[h]),c)),e.setParams&&(l=Object.keys(e.setParams).reduce((u,h)=>u.set(h,e.setParams[h]),l)),new t(n,i,s,{params:l,headers:c,context:f,reportProgress:o,responseType:r,withCredentials:a})}},ii=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(ii||{}),kr=class{constructor(e,n=ka.Ok,i="OK"){this.headers=e.headers||new Y3,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},_5=class t extends kr{constructor(e={}){super(e),this.type=ii.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ri=class t extends kr{constructor(e={}){super(e),this.type=ii.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Pa=class extends kr{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},ka=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(ka||{});function x5(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Or=(()=>{let e=class e{constructor(i){this.handler=i}request(i,r,s={}){let a;if(i instanceof Rr)a=i;else{let l;s.headers instanceof Y3?l=s.headers:l=new Y3(s.headers);let f;s.params&&(s.params instanceof X3?f=s.params:f=new X3({fromObject:s.params})),a=new Rr(i,r,s.body!==void 0?s.body:null,{headers:l,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=H1(a).pipe(T3(l=>this.handler.handle(l)));if(i instanceof Rr||s.observe==="events")return o;let c=o.pipe(U2(l=>l instanceof ri));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe(L1(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return c.pipe(L1(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return c.pipe(L1(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return c.pipe(L1(l=>l.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(i,r={}){return this.request("DELETE",i,r)}get(i,r={}){return this.request("GET",i,r)}head(i,r={}){return this.request("HEAD",i,r)}jsonp(i,r){return this.request("JSONP",i,{params:new X3().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(i,r={}){return this.request("OPTIONS",i,r)}patch(i,r,s={}){return this.request("PATCH",i,x5(s,r))}post(i,r,s={}){return this.request("POST",i,x5(s,r))}put(i,r,s={}){return this.request("PUT",i,x5(s,r))}};e.\u0275fac=function(r){return new(r||e)(V1(Pr))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})();function Wp(t,e){return e(t)}function _S(t,e){return(n,i)=>e.intercept(n,{handle:r=>t(r,i)})}function wS(t,e,n){return(i,r)=>rt(n,()=>e(i,s=>t(s,r)))}var SS=new C1(""),w5=new C1(""),jp=new C1(""),HS=new C1("");function LS(){let t=null;return(e,n)=>{t===null&&(t=(G(SS,{optional:!0})??[]).reduceRight(_S,Wp));let i=G(W3),r=i.add();return t(e,n).pipe(ut(()=>i.remove(r)))}}var Ip=(()=>{let e=class e extends Pr{constructor(i,r){super(),this.backend=i,this.injector=r,this.chain=null,this.pendingTasks=G(W3);let s=G(HS,{optional:!0});this.backend=s??i}handle(i){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(w5),...this.injector.get(jp,[])]));this.chain=s.reduceRight((a,o)=>wS(a,o,this.injector),Wp)}let r=this.pendingTasks.add();return this.chain(i,s=>this.backend.handle(s)).pipe(ut(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(V1(Ra),V1(D2))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})();var ES=/^\)\]\}',?\n/;function VS(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var Rp=(()=>{let e=class e{constructor(i){this.xhrFactory=i}handle(i){if(i.method==="JSONP")throw new v1(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Ie(r.\u0275loadImpl()):H1(null)).pipe(He(()=>new J1(a=>{let o=r.build();if(o.open(i.method,i.urlWithParams),i.withCredentials&&(o.withCredentials=!0),i.headers.forEach((p,d)=>o.setRequestHeader(p,d.join(","))),i.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!i.headers.has("Content-Type")){let p=i.detectContentTypeHeader();p!==null&&o.setRequestHeader("Content-Type",p)}if(i.responseType){let p=i.responseType.toLowerCase();o.responseType=p!=="json"?p:"text"}let c=i.serializeBody(),l=null,f=()=>{if(l!==null)return l;let p=o.statusText||"OK",d=new Y3(o.getAllResponseHeaders()),_=VS(o)||i.url;return l=new _5({headers:d,status:o.status,statusText:p,url:_}),l},u=()=>{let{headers:p,status:d,statusText:_,url:y}=f(),b=null;d!==ka.NoContent&&(b=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=b?ka.Ok:0);let L=d>=200&&d<300;if(i.responseType==="json"&&typeof b=="string"){let H=b;b=b.replace(ES,"");try{b=b!==""?JSON.parse(b):null}catch(S){b=H,L&&(L=!1,b={error:S,text:b})}}L?(a.next(new ri({body:b,headers:p,status:d,statusText:_,url:y||void 0})),a.complete()):a.error(new Pa({error:b,headers:p,status:d,statusText:_,url:y||void 0}))},h=p=>{let{url:d}=f(),_=new Pa({error:p,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});a.error(_)},m=!1,g=p=>{m||(a.next(f()),m=!0);let d={type:ii.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(d.total=p.total),i.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),a.next(d)},v=p=>{let d={type:ii.UploadProgress,loaded:p.loaded};p.lengthComputable&&(d.total=p.total),a.next(d)};return o.addEventListener("load",u),o.addEventListener("error",h),o.addEventListener("timeout",h),o.addEventListener("abort",h),i.reportProgress&&(o.addEventListener("progress",g),c!==null&&o.upload&&o.upload.addEventListener("progress",v)),o.send(c),a.next({type:ii.Sent}),()=>{o.removeEventListener("error",h),o.removeEventListener("abort",h),o.removeEventListener("load",u),o.removeEventListener("timeout",h),i.reportProgress&&(o.removeEventListener("progress",g),c!==null&&o.upload&&o.upload.removeEventListener("progress",v)),o.readyState!==o.DONE&&o.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(V1(ti))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})(),qp=new C1(""),AS="XSRF-TOKEN",TS=new C1("",{providedIn:"root",factory:()=>AS}),DS="X-XSRF-TOKEN",NS=new C1("",{providedIn:"root",factory:()=>DS}),Oa=class{},IS=(()=>{let e=class e{constructor(i,r,s){this.doc=i,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let i=this.doc.cookie||"";return i!==this.lastCookieString&&(this.parseCount++,this.lastToken=Aa(i,this.cookieName),this.lastCookieString=i),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(V1(Fe),V1(C2),V1(TS))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})();function RS(t,e){let n=t.url.toLowerCase();if(!G(qp)||t.method==="GET"||t.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return e(t);let i=G(Oa).getToken(),r=G(NS);return i!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,i)})),e(t)}var $p=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}($p||{});function PS(t,e){return{\u0275kind:t,\u0275providers:e}}function kS(...t){let e=[Or,Rp,Ip,{provide:Pr,useExisting:Ip},{provide:Ra,useExisting:Rp},{provide:w5,useValue:RS,multi:!0},{provide:qp,useValue:!0},{provide:Oa,useClass:IS}];for(let n of t)e.push(...n.\u0275providers);return k3(e)}var Pp=new C1("");function OS(){return PS($p.LegacyInterceptors,[{provide:Pp,useFactory:LS},{provide:w5,useExisting:Pp,multi:!0}])}var Fa=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=it({type:e}),e.\u0275inj=nt({providers:[kS(OS())]});let t=e;return t})();var kp="b",Op="h",Fp="s",Up="st",Bp="u",Gp="rt",Ia=new C1(""),FS=["GET","HEAD"];function US(t,e){let f=G(Ia),{isCacheActive:n}=f,i=D9(f,["isCacheActive"]),{transferCache:r,method:s}=t;if(!n||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!FS.includes(s)||t.headers.has("authorization")||t.headers.has("proxy-authorization")||r===!1||i.filter?.(t)===!1)return e(t);let a=G(k4),o=GS(t),c=a.get(o,null),l=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(l=r.includeHeaders),c){let{[kp]:u,[Gp]:h,[Op]:m,[Fp]:g,[Up]:v,[Bp]:p}=c,d=u;switch(h){case"arraybuffer":d=new TextEncoder().encode(u).buffer;break;case"blob":d=new Blob([u]);break}let _=new Y3(m);return H1(new ri({body:d,headers:_,status:g,statusText:v,url:p}))}return e(t).pipe(le(u=>{u instanceof ri&&a.set(o,{[kp]:u.body,[Op]:BS(u.headers,l),[Fp]:u.status,[Up]:u.statusText,[Bp]:u.url||"",[Gp]:t.responseType})}))}function BS(t,e){if(!e)return{};let n={};for(let i of e){let r=t.getAll(i);r!==null&&(n[i]=r)}return n}function GS(t){let{params:e,method:n,responseType:i,url:r,body:s}=t,a=e.keys().sort().map(f=>`${f}=${e.getAll(f)}`).join("&"),c=[n,i,r,typeof s=="string"?s:"",a].join("|"),l=WS(c);return l}function WS(t){let e=0;for(let n of t)e=Math.imul(31,e)+n.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Xp(t){return[{provide:Ia,useFactory:()=>(f3("NgHttpTransferCache"),l1({isCacheActive:!0},t))},{provide:jp,useValue:US,multi:!0,deps:[k4,Ia]},{provide:Jn,multi:!0,useFactory:()=>{let e=G(h3),n=G(Ia);return()=>{d5(e).then(()=>{n.isCacheActive=!1})}}}]}var L5=class extends La{constructor(){super(...arguments),this.supportsDOMEvents=!0}},E5=class t extends L5{static makeCurrent(){_p(new t)}onAndCancel(e,n,i){return e.addEventListener(n,i),()=>{e.removeEventListener(n,i)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=jS();return n==null?null:qS(n)}resetBaseElement(){Fr=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Aa(document.cookie,e)}},Fr=null;function jS(){return Fr=Fr||document.querySelector("base"),Fr?Fr.getAttribute("href"):null}function qS(t){return new URL(t,document.baseURI).pathname}var $S=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})(),V5=new C1(""),Qp=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(a=>a.supports(i)),!r)throw new v1(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(V1(V5),V1(ye))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})(),Ua=class{constructor(e){this._doc=e}},S5="ng-app-id",em=(()=>{let e=class e{constructor(i,r,s,a={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=y5(a),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${S5}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let a=s.get(i);return a.usage+=r,a.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,a=s?.get(r);if(a?.parentNode===i)return s.delete(r),a.removeAttribute(S5),a;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=r,this.platformIsServer&&o.setAttribute(S5,this.appId),i.appendChild(o),o}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),a=this.styleRef,o=a.get(r)?.elements;o?o.push(s):a.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(V1(Fe),V1(oa),V1(G8,8),V1(C2))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})(),H5={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},D5=/%COMP%/g,tm="%COMP%",XS=`_nghost-${tm}`,YS=`_ngcontent-${tm}`,ZS=!0,JS=new C1("",{providedIn:"root",factory:()=>ZS});function KS(t){return YS.replace(D5,t)}function QS(t){return XS.replace(D5,t)}function nm(t,e){return e.map(n=>n.replace(D5,t))}var Zp=(()=>{let e=class e{constructor(i,r,s,a,o,c,l,f=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=a,this.doc=o,this.platformId=c,this.ngZone=l,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=y5(c),this.defaultRenderer=new Ur(i,o,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Rt.ShadowDom&&(r=Me(l1({},r),{encapsulation:Rt.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Ba?s.applyToHost(i):s instanceof Br&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,a=s.get(r.id);if(!a){let o=this.doc,c=this.ngZone,l=this.eventManager,f=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Rt.Emulated:a=new Ba(l,f,r,this.appId,u,o,c,h);break;case Rt.ShadowDom:return new A5(l,f,i,r,o,c,this.nonce,h);default:a=new Br(l,f,r,u,o,c,h);break}s.set(r.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(V1(Qp),V1(em),V1(oa),V1(JS),V1(Fe),V1(C2),V1(ye),V1(G8))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})(),Ur=class{constructor(e,n,i,r){this.eventManager=e,this.doc=n,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,n){return n?this.doc.createElementNS(H5[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(Jp(e)?e.content:e).appendChild(n)}insertBefore(e,n,i){e&&(Jp(e)?e.content:e).insertBefore(n,i)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new v1(-5104,!1);return n||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,i,r){if(r){n=r+":"+n;let s=H5[r];s?e.setAttributeNS(s,n,i):e.setAttribute(n,i)}else e.setAttribute(n,i)}removeAttribute(e,n,i){if(i){let r=H5[i];r?e.removeAttributeNS(r,n):e.removeAttribute(`${i}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,i,r){r&(o3.DashCase|o3.Important)?e.style.setProperty(n,i,r&o3.Important?"important":""):e.style[n]=i}removeStyle(e,n,i){i&o3.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,i){e!=null&&(e[n]=i)}setValue(e,n){e.nodeValue=n}listen(e,n,i){if(typeof e=="string"&&(e=ei().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${n}`);return this.eventManager.addEventListener(e,n,this.decoratePreventDefault(i))}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(n)):e(n))===!1&&n.preventDefault()}}};function Jp(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var A5=class extends Ur{constructor(e,n,i,r,s,a,o,c){super(e,s,a,c),this.sharedStylesHost=n,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=nm(r.id,r.styles);for(let f of l){let u=document.createElement("style");o&&u.setAttribute("nonce",o),u.textContent=f,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,i){return super.insertBefore(this.nodeOrShadowRoot(e),n,i)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Br=class extends Ur{constructor(e,n,i,r,s,a,o,c){super(e,s,a,o),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=r,this.styles=c?nm(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Ba=class extends Br{constructor(e,n,i,r,s,a,o,c){let l=r+"-"+i.id;super(e,n,i,s,a,o,c,l),this.contentAttr=KS(l),this.hostAttr=QS(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let i=super.createElement(e,n);return super.setAttribute(i,this.contentAttr,""),i}},eH=(()=>{let e=class e extends Ua{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(V1(Fe))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})(),Kp=["alt","control","meta","shift"],tH={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},nH={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},iH=(()=>{let e=class e extends Ua{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let a=e.parseEventName(r),o=e.eventCallback(a.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ei().onAndCancel(i,a.domEventName,o))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let a=e._normalizeKey(r.pop()),o="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),o="code."),Kp.forEach(f=>{let u=r.indexOf(f);u>-1&&(r.splice(u,1),o+=f+".")}),o+=a,r.length!=0||a.length===0)return null;let l={};return l.domEventName=s,l.fullKey=o,l}static matchEventFullKeyCode(i,r){let s=tH[i.key]||i.key,a="";return r.indexOf("code.")>-1&&(s=i.code,a="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Kp.forEach(o=>{if(o!==s){let c=nH[o];c(i)&&(a+=o+".")}}),a+=s,a===r)}static eventCallback(i,r,s){return a=>{e.matchEventFullKeyCode(a,i)&&s.runGuarded(()=>r(a))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(V1(Fe))},e.\u0275prov=d1({token:e,factory:e.\u0275fac});let t=e;return t})();function im(t,e){return gp(l1({rootComponent:t},rH(e)))}function rH(t){return{appProviders:[...lH,...t?.providers??[]],platformProviders:cH}}function sH(){E5.makeCurrent()}function aH(){return new Pt}function oH(){return Dh(document),document}var cH=[{provide:C2,useValue:C5},{provide:B8,useValue:sH,multi:!0},{provide:Fe,useFactory:oH,deps:[]}];var lH=[{provide:sa,useValue:"root"},{provide:Pt,useFactory:aH,deps:[]},{provide:V5,useClass:eH,multi:!0,deps:[Fe,ye,C2]},{provide:V5,useClass:iH,multi:!0,deps:[Fe]},Zp,em,Qp,{provide:gr,useExisting:Zp},{provide:ti,useClass:$S,deps:[]},[]];var rm=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(V1(Fe))},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var N5=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:function(r){let s=null;return r?s=new(r||e):s=V1(fH),s},providedIn:"root"});let t=e;return t})(),fH=(()=>{let e=class e extends N5{constructor(i){super(),this._doc=i}sanitize(i,r){if(r==null)return null;switch(i){case Ft.NONE:return r;case Ft.HTML:return U3(r,"HTML")?xt(r):$8(this._doc,String(r)).toString();case Ft.STYLE:return U3(r,"Style")?xt(r):r;case Ft.SCRIPT:if(U3(r,"Script"))return xt(r);throw new v1(5200,!1);case Ft.URL:return U3(r,"URL")?xt(r):ua(String(r));case Ft.RESOURCE_URL:if(U3(r,"ResourceURL"))return xt(r);throw new v1(5201,!1);default:throw new v1(5202,!1)}}bypassSecurityTrustHtml(i){return Bh(i)}bypassSecurityTrustStyle(i){return Gh(i)}bypassSecurityTrustScript(i){return Wh(i)}bypassSecurityTrustUrl(i){return jh(i)}bypassSecurityTrustResourceUrl(i){return qh(i)}};e.\u0275fac=function(r){return new(r||e)(V1(Fe))},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),T5=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t}(T5||{});function sm(...t){let e=[],n=new Set,i=n.has(T5.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of t)n.add(s),r.length&&e.push(r);return k3([[],vp(),n.has(T5.NoHttpTransferCache)||i?[]:Xp({}),e])}var U1="primary",i6=Symbol("RouteTitle"),O5=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n[0]:n}return null}getAll(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function li(t){return new O5(t)}function uH(t,e,n){let i=n.path.split("/");if(i.length>t.length||n.pathMatch==="full"&&(e.hasChildren()||i.length<t.length))return null;let r={};for(let s=0;s<i.length;s++){let a=i[s],o=t[s];if(a.startsWith(":"))r[a.substring(1)]=o;else if(a!==o.path)return null}return{consumed:t.slice(0,i.length),posParams:r}}function hH(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!$t(t[n],e[n]))return!1;return!0}function $t(t,e){let n=t?F5(t):void 0,i=e?F5(e):void 0;if(!n||!i||n.length!=i.length)return!1;let r;for(let s=0;s<n.length;s++)if(r=n[s],!hm(t[r],e[r]))return!1;return!0}function F5(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function hm(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let n=[...t].sort(),i=[...e].sort();return n.every((r,s)=>i[s]===r)}else return t===e}function dm(t){return t.length>0?t[t.length-1]:null}function K3(t){return qo(t)?t:Dr(t)?Ie(Promise.resolve(t)):H1(t)}var dH={exact:mm,subset:gm},pm={exact:pH,subset:mH,ignored:()=>!0};function om(t,e,n){return dH[n.paths](t.root,e.root,n.matrixParams)&&pm[n.queryParams](t.queryParams,e.queryParams)&&!(n.fragment==="exact"&&t.fragment!==e.fragment)}function pH(t,e){return $t(t,e)}function mm(t,e,n){if(!B4(t.segments,e.segments)||!ja(t.segments,e.segments,n)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!t.children[i]||!mm(t.children[i],e.children[i],n))return!1;return!0}function mH(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>hm(t[n],e[n]))}function gm(t,e,n){return vm(t,e,e.segments,n)}function vm(t,e,n,i){if(t.segments.length>n.length){let r=t.segments.slice(0,n.length);return!(!B4(r,n)||e.hasChildren()||!ja(r,n,i))}else if(t.segments.length===n.length){if(!B4(t.segments,n)||!ja(t.segments,n,i))return!1;for(let r in e.children)if(!t.children[r]||!gm(t.children[r],e.children[r],i))return!1;return!0}else{let r=n.slice(0,t.segments.length),s=n.slice(t.segments.length);return!B4(t.segments,r)||!ja(t.segments,r,i)||!t.children[U1]?!1:vm(t.children[U1],e,s,i)}}function ja(t,e,n){return e.every((i,r)=>pm[n](t[r].parameters,i.parameters))}var Z3=class{constructor(e=new pe([],{}),n={},i=null){this.root=e,this.queryParams=n,this.fragment=i}get queryParamMap(){return this._queryParamMap??=li(this.queryParams),this._queryParamMap}toString(){return MH.serialize(this)}},pe=class{constructor(e,n){this.segments=e,this.children=n,this.parent=null,Object.values(n).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qa(this)}},U4=class{constructor(e,n){this.path=e,this.parameters=n}get parameterMap(){return this._parameterMap??=li(this.parameters),this._parameterMap}toString(){return Cm(this)}};function gH(t,e){return B4(t,e)&&t.every((n,i)=>$t(n.parameters,e[i].parameters))}function B4(t,e){return t.length!==e.length?!1:t.every((n,i)=>n.path===e[i].path)}function vH(t,e){let n=[];return Object.entries(t.children).forEach(([i,r])=>{i===U1&&(n=n.concat(e(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==U1&&(n=n.concat(e(r,i)))}),n}var h7=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>new Xa,providedIn:"root"});let t=e;return t})(),Xa=class{parse(e){let n=new B5(e);return new Z3(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(e){let n=`/${Gr(e.root,!0)}`,i=xH(e.queryParams),r=typeof e.fragment=="string"?`#${CH(e.fragment)}`:"";return`${n}${i}${r}`}},MH=new Xa;function qa(t){return t.segments.map(e=>Cm(e)).join("/")}function Gr(t,e){if(!t.hasChildren())return qa(t);if(e){let n=t.children[U1]?Gr(t.children[U1],!1):"",i=[];return Object.entries(t.children).forEach(([r,s])=>{r!==U1&&i.push(`${r}:${Gr(s,!1)}`)}),i.length>0?`${n}(${i.join("//")})`:n}else{let n=vH(t,(i,r)=>r===U1?[Gr(t.children[U1],!1)]:[`${r}:${Gr(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[U1]!=null?`${qa(t)}/${n[0]}`:`${qa(t)}/(${n.join("//")})`}}function Mm(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ga(t){return Mm(t).replace(/%3B/gi,";")}function CH(t){return encodeURI(t)}function U5(t){return Mm(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $a(t){return decodeURIComponent(t)}function cm(t){return $a(t.replace(/\+/g,"%20"))}function Cm(t){return`${U5(t.path)}${yH(t.parameters)}`}function yH(t){return Object.entries(t).map(([e,n])=>`;${U5(e)}=${U5(n)}`).join("")}function xH(t){let e=Object.entries(t).map(([n,i])=>Array.isArray(i)?i.map(r=>`${Ga(n)}=${Ga(r)}`).join("&"):`${Ga(n)}=${Ga(i)}`).filter(n=>n);return e.length?`?${e.join("&")}`:""}var bH=/^[^\/()?;#]+/;function I5(t){let e=t.match(bH);return e?e[0]:""}var zH=/^[^\/()?;=#]+/;function _H(t){let e=t.match(zH);return e?e[0]:""}var wH=/^[^=?&#]+/;function SH(t){let e=t.match(wH);return e?e[0]:""}var HH=/^[^&#]+/;function LH(t){let e=t.match(HH);return e?e[0]:""}var B5=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new pe([],{}):new pe([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(n).length>0)&&(i[U1]=new pe(e,n)),i}parseSegment(){let e=I5(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new v1(4009,!1);return this.capture(e),new U4($a(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let n=_H(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let r=I5(this.remaining);r&&(i=r,this.capture(i))}e[$a(n)]=$a(i)}parseQueryParam(e){let n=SH(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let a=LH(this.remaining);a&&(i=a,this.capture(i))}let r=cm(n),s=cm(i);if(e.hasOwnProperty(r)){let a=e[r];Array.isArray(a)||(a=[a],e[r]=a),a.push(s)}else e[r]=s}parseParens(e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=I5(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new v1(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=U1);let a=this.parseChildren();n[s]=Object.keys(a).length===1?a[U1]:new pe([],a),this.consumeOptional("//")}return n}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new v1(4011,!1)}};function ym(t){return t.segments.length>0?new pe([],{[U1]:t}):t}function xm(t){let e={};for(let[i,r]of Object.entries(t.children)){let s=xm(r);if(i===U1&&s.segments.length===0&&s.hasChildren())for(let[a,o]of Object.entries(s.children))e[a]=o;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let n=new pe(t.segments,e);return EH(n)}function EH(t){if(t.numberOfChildren===1&&t.children[U1]){let e=t.children[U1];return new pe(t.segments.concat(e.segments),e.children)}return t}function fi(t){return t instanceof Z3}function VH(t,e,n=null,i=null){let r=bm(t);return zm(r,e,n,i)}function bm(t){let e;function n(s){let a={};for(let c of s.children){let l=n(c);a[c.outlet]=l}let o=new pe(s.url,a);return s===t&&(e=o),o}let i=n(t.root),r=ym(i);return e??r}function zm(t,e,n,i){let r=t;for(;r.parent;)r=r.parent;if(e.length===0)return R5(r,r,r,n,i);let s=AH(e);if(s.toRoot())return R5(r,r,new pe([],{}),n,i);let a=TH(s,r,t),o=a.processChildren?qr(a.segmentGroup,a.index,s.commands):wm(a.segmentGroup,a.index,s.commands);return R5(r,a.segmentGroup,o,n,i)}function Ya(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Yr(t){return typeof t=="object"&&t!=null&&t.outlets}function R5(t,e,n,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(f=>`${f}`):`${l}`});let a;t===e?a=n:a=_m(t,e,n);let o=ym(xm(a));return new Z3(o,s,r)}function _m(t,e,n){let i={};return Object.entries(t.children).forEach(([r,s])=>{s===e?i[r]=n:i[r]=_m(s,e,n)}),new pe(t.segments,i)}var Za=class{constructor(e,n,i){if(this.isAbsolute=e,this.numberOfDoubleDots=n,this.commands=i,e&&i.length>0&&Ya(i[0]))throw new v1(4003,!1);let r=i.find(Yr);if(r&&r!==dm(i))throw new v1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function AH(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Za(!0,0,t);let e=0,n=!1,i=t.reduce((r,s,a)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let o={};return Object.entries(s.outlets).forEach(([c,l])=>{o[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:o}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:a===0?(s.split("/").forEach((o,c)=>{c==0&&o==="."||(c==0&&o===""?n=!0:o===".."?e++:o!=""&&r.push(o))}),r):[...r,s]},[]);return new Za(n,e,i)}var oi=class{constructor(e,n,i){this.segmentGroup=e,this.processChildren=n,this.index=i}};function TH(t,e,n){if(t.isAbsolute)return new oi(e,!0,0);if(!n)return new oi(e,!1,NaN);if(n.parent===null)return new oi(n,!0,0);let i=Ya(t.commands[0])?0:1,r=n.segments.length-1+i;return DH(n,r,t.numberOfDoubleDots)}function DH(t,e,n){let i=t,r=e,s=n;for(;s>r;){if(s-=r,i=i.parent,!i)throw new v1(4005,!1);r=i.segments.length}return new oi(i,!1,r-s)}function NH(t){return Yr(t[0])?t[0].outlets:{[U1]:t}}function wm(t,e,n){if(t??=new pe([],{}),t.segments.length===0&&t.hasChildren())return qr(t,e,n);let i=IH(t,e,n),r=n.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let s=new pe(t.segments.slice(0,i.pathIndex),{});return s.children[U1]=new pe(t.segments.slice(i.pathIndex),t.children),qr(s,0,r)}else return i.match&&r.length===0?new pe(t.segments,{}):i.match&&!t.hasChildren()?G5(t,e,n):i.match?qr(t,0,r):G5(t,e,n)}function qr(t,e,n){if(n.length===0)return new pe(t.segments,{});{let i=NH(n),r={};if(Object.keys(i).some(s=>s!==U1)&&t.children[U1]&&t.numberOfChildren===1&&t.children[U1].segments.length===0){let s=qr(t.children[U1],e,n);return new pe(t.segments,s.children)}return Object.entries(i).forEach(([s,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[s]=wm(t.children[s],e,a))}),Object.entries(t.children).forEach(([s,a])=>{i[s]===void 0&&(r[s]=a)}),new pe(t.segments,r)}}function IH(t,e,n){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=n.length)return s;let a=t.segments[r],o=n[i];if(Yr(o))break;let c=`${o}`,l=i<n.length-1?n[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!fm(c,l,a))return s;i+=2}else{if(!fm(c,{},a))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function G5(t,e,n){let i=t.segments.slice(0,e),r=0;for(;r<n.length;){let s=n[r];if(Yr(s)){let c=RH(s.outlets);return new pe(i,c)}if(r===0&&Ya(n[0])){let c=t.segments[e];i.push(new U4(c.path,lm(n[0]))),r++;continue}let a=Yr(s)?s.outlets[U1]:`${s}`,o=r<n.length-1?n[r+1]:null;a&&o&&Ya(o)?(i.push(new U4(a,lm(o))),r+=2):(i.push(new U4(a,{})),r++)}return new pe(i,{})}function RH(t){let e={};return Object.entries(t).forEach(([n,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[n]=G5(new pe([],{}),0,i))}),e}function lm(t){let e={};return Object.entries(t).forEach(([n,i])=>e[n]=`${i}`),e}function fm(t,e,n){return t==n.path&&$t(e,n.parameters)}var $r="imperative",f2=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(f2||{}),at=class{constructor(e,n){this.id=e,this.url=n}},Zr=class extends at{constructor(e,n,i="imperative",r=null){super(e,n),this.type=f2.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},G4=class extends at{constructor(e,n,i){super(e,n),this.urlAfterRedirects=i,this.type=f2.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},X2=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(X2||{}),W5=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(W5||{}),J3=class extends at{constructor(e,n,i,r){super(e,n),this.reason=i,this.code=r,this.type=f2.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},W4=class extends at{constructor(e,n,i,r){super(e,n),this.reason=i,this.code=r,this.type=f2.NavigationSkipped}},Jr=class extends at{constructor(e,n,i,r){super(e,n),this.error=i,this.target=r,this.type=f2.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ja=class extends at{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=f2.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},j5=class extends at{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=f2.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},q5=class extends at{constructor(e,n,i,r,s){super(e,n),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=f2.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},$5=class extends at{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=f2.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},X5=class extends at{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=f2.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Y5=class{constructor(e){this.route=e,this.type=f2.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Z5=class{constructor(e){this.route=e,this.type=f2.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},J5=class{constructor(e){this.snapshot=e,this.type=f2.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},K5=class{constructor(e){this.snapshot=e,this.type=f2.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Q5=class{constructor(e){this.snapshot=e,this.type=f2.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},e7=class{constructor(e){this.snapshot=e,this.type=f2.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Kr=class{},Qr=class{constructor(e){this.url=e}};var t7=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new i0,this.attachRef=null}},i0=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new t7,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ka=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let n=this.pathFromRoot(e);return n.length>1?n[n.length-2]:null}children(e){let n=n7(e,this._root);return n?n.children.map(i=>i.value):[]}firstChild(e){let n=n7(e,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(e){let n=i7(e,this._root);return n.length<2?[]:n[n.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return i7(e,this._root).map(n=>n.value)}};function n7(t,e){if(t===e.value)return e;for(let n of e.children){let i=n7(t,n);if(i)return i}return null}function i7(t,e){if(t===e.value)return[e];for(let n of e.children){let i=i7(t,n);if(i.length)return i.unshift(e),i}return[]}var $2=class{constructor(e,n){this.value=e,this.children=n}toString(){return`TreeNode(${this.value})`}};function ai(t){let e={};return t&&t.children.forEach(n=>e[n.value.outlet]=n),e}var Qa=class extends Ka{constructor(e,n){super(e),this.snapshot=n,p7(this,e)}toString(){return this.snapshot.toString()}};function Sm(t){let e=PH(t),n=new a2([new U4("",{})]),i=new a2({}),r=new a2({}),s=new a2({}),a=new a2(""),o=new ui(n,i,s,a,r,U1,t,e.root);return o.snapshot=e.root,new Qa(new $2(o,[]),e)}function PH(t){let e={},n={},i={},r="",s=new e6([],e,i,r,n,U1,t,null,{});return new e0("",new $2(s,[]))}var ui=class{constructor(e,n,i,r,s,a,o,c){this.urlSubject=e,this.paramsSubject=n,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=a,this.component=o,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(L1(l=>l[i6]))??H1(void 0),this.url=e,this.params=n,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L1(e=>li(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L1(e=>li(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function d7(t,e,n="emptyOnly"){let i,{routeConfig:r}=t;return e!==null&&(n==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:l1(l1({},e.params),t.params),data:l1(l1({},e.data),t.data),resolve:l1(l1(l1(l1({},t.data),e.data),r?.data),t._resolvedData)}:i={params:l1({},t.params),data:l1({},t.data),resolve:l1(l1({},t.data),t._resolvedData??{})},r&&Lm(r)&&(i.resolve[i6]=r.title),i}var e6=class{get title(){return this.data?.[i6]}constructor(e,n,i,r,s,a,o,c,l){this.url=e,this.params=n,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=a,this.component=o,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=li(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=li(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${n}')`}},e0=class extends Ka{constructor(e,n){super(n),this.url=e,p7(this,n)}toString(){return Hm(this._root)}};function p7(t,e){e.value._routerState=t,e.children.forEach(n=>p7(t,n))}function Hm(t){let e=t.children.length>0?` { ${t.children.map(Hm).join(", ")} } `:"";return`${t.value}${e}`}function P5(t){if(t.snapshot){let e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,$t(e.queryParams,n.queryParams)||t.queryParamsSubject.next(n.queryParams),e.fragment!==n.fragment&&t.fragmentSubject.next(n.fragment),$t(e.params,n.params)||t.paramsSubject.next(n.params),hH(e.url,n.url)||t.urlSubject.next(n.url),$t(e.data,n.data)||t.dataSubject.next(n.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function r7(t,e){let n=$t(t.params,e.params)&&gH(t.url,e.url),i=!t.parent!=!e.parent;return n&&!i&&(!t.parent||r7(t.parent,e.parent))}function Lm(t){return typeof t.title=="string"||t.title===null}var kH=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=U1,this.activateEvents=new qe,this.deactivateEvents=new qe,this.attachEvents=new qe,this.detachEvents=new qe,this.parentContexts=G(i0),this.location=G(Ut),this.changeDetector=G(Kn),this.environmentInjector=G(D2),this.inputBinder=G(m7,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new v1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new v1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new v1(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new v1(4013,!1);this._activatedRoute=i;let s=this.location,o=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new s7(i,c,s.injector);this.activated=s.createComponent(o,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[O3]});let t=e;return t})(),s7=class{constructor(e,n,i){this.route=e,this.childContexts=n,this.parent=i}get(e,n){return e===ui?this.route:e===i0?this.childContexts:this.parent.get(e,n)}},m7=new C1("");function OH(t,e,n){let i=t6(t,e._root,n?n._root:void 0);return new Qa(i,e)}function t6(t,e,n){if(n&&t.shouldReuseRoute(e.value,n.value.snapshot)){let i=n.value;i._futureSnapshot=e.value;let r=FH(t,e,n);return new $2(i,r)}else{if(t.shouldAttach(e.value)){let s=t.retrieve(e.value);if(s!==null){let a=s.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(o=>t6(t,o)),a}}let i=UH(e.value),r=e.children.map(s=>t6(t,s));return new $2(i,r)}}function FH(t,e,n){return e.children.map(i=>{for(let r of n.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return t6(t,i,r);return t6(t,i)})}function UH(t){return new ui(new a2(t.url),new a2(t.params),new a2(t.queryParams),new a2(t.fragment),new a2(t.data),t.outlet,t.component,t)}var Em="ngNavigationCancelingError";function Vm(t,e){let{redirectTo:n,navigationBehaviorOptions:i}=fi(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Am(!1,X2.Redirect);return r.url=n,r.navigationBehaviorOptions=i,r}function Am(t,e){let n=new Error(`NavigationCancelingError: ${t||""}`);return n[Em]=!0,n.cancellationCode=e,n}function BH(t){return Tm(t)&&fi(t.url)}function Tm(t){return!!t&&t[Em]}var GH=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["ng-component"]],standalone:!0,features:[Oe],decls:1,vars:0,template:function(r,s){r&1&&ve(0,"router-outlet")},dependencies:[kH],encapsulation:2});let t=e;return t})();function WH(t,e){return t.providers&&!t._injector&&(t._injector=f5(t.providers,e,`Route: ${t.path}`)),t._injector??e}function g7(t){let e=t.children&&t.children.map(g7),n=e?Me(l1({},t),{children:e}):l1({},t);return!n.component&&!n.loadComponent&&(e||n.loadChildren)&&n.outlet&&n.outlet!==U1&&(n.component=GH),n}function Xt(t){return t.outlet||U1}function jH(t,e){let n=t.filter(i=>Xt(i)===e);return n.push(...t.filter(i=>Xt(i)!==e)),n}function r6(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let e=t.parent;e;e=e.parent){let n=e.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var qH=(t,e,n,i)=>L1(r=>(new a7(e,r.targetRouterState,r.currentRouterState,n,i).activate(t),r)),a7=class{constructor(e,n,i,r,s){this.routeReuseStrategy=e,this.futureState=n,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let n=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,i,e),P5(this.futureState.root),this.activateChildRoutes(n,i,e)}deactivateChildRoutes(e,n,i){let r=ai(n);e.children.forEach(s=>{let a=s.value.outlet;this.deactivateRoutes(s,r[a],i),delete r[a]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,n,i){let r=e.value,s=n?n.value:null;if(r===s)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(e,n,a.children)}else this.deactivateChildRoutes(e,n,i);else s&&this.deactivateRouteAndItsChildren(n,i)}deactivateRouteAndItsChildren(e,n){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,n):this.deactivateRouteAndOutlet(e,n)}detachAndStoreRouteSubtree(e,n){let i=n.getContext(e.value.outlet),r=i&&e.value.component?i.children:n,s=ai(e);for(let a of Object.values(s))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),o=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:a,route:e,contexts:o})}}deactivateRouteAndOutlet(e,n){let i=n.getContext(e.value.outlet),r=i&&e.value.component?i.children:n,s=ai(e);for(let a of Object.values(s))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,n,i){let r=ai(n);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new e7(s.value.snapshot))}),e.children.length&&this.forwardEvent(new K5(e.value.snapshot))}activateRoutes(e,n,i){let r=e.value,s=n?n.value:null;if(P5(r),r===s)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,n,a.children)}else this.activateChildRoutes(e,n,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let o=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(o.contexts),a.attachRef=o.componentRef,a.route=o.route.value,a.outlet&&a.outlet.attach(o.componentRef,o.route.value),P5(o.route.value),this.activateChildRoutes(e,null,a.children)}else{let o=r6(r.snapshot);a.attachRef=null,a.route=r,a.injector=o,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(e,null,a.children)}}else this.activateChildRoutes(e,null,i)}},t0=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ci=class{constructor(e,n){this.component=e,this.route=n}};function $H(t,e,n){let i=t._root,r=e?e._root:null;return Wr(i,r,n,[i.value])}function XH(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function di(t,e){let n=Symbol(),i=e.get(t,n);return i===n?typeof t=="function"&&!Cu(t)?t:e.get(t):i}function Wr(t,e,n,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ai(e);return t.children.forEach(a=>{YH(a,s[a.value.outlet],n,i.concat([a.value]),r),delete s[a.value.outlet]}),Object.entries(s).forEach(([a,o])=>Xr(o,n.getContext(a),r)),r}function YH(t,e,n,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=t.value,a=e?e.value:null,o=n?n.getContext(t.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){let c=ZH(a,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new t0(i)):(s.data=a.data,s._resolvedData=a._resolvedData),s.component?Wr(t,e,o?o.children:null,i,r):Wr(t,e,n,i,r),c&&o&&o.outlet&&o.outlet.isActivated&&r.canDeactivateChecks.push(new ci(o.outlet.component,a))}else a&&Xr(e,o,r),r.canActivateChecks.push(new t0(i)),s.component?Wr(t,null,o?o.children:null,i,r):Wr(t,null,n,i,r);return r}function ZH(t,e,n){if(typeof n=="function")return n(t,e);switch(n){case"pathParamsChange":return!B4(t.url,e.url);case"pathParamsOrQueryParamsChange":return!B4(t.url,e.url)||!$t(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!r7(t,e)||!$t(t.queryParams,e.queryParams);case"paramsChange":default:return!r7(t,e)}}function Xr(t,e,n){let i=ai(t),r=t.value;Object.entries(i).forEach(([s,a])=>{r.component?e?Xr(a,e.children.getContext(s),n):Xr(a,null,n):Xr(a,e,n)}),r.component?e&&e.outlet&&e.outlet.isActivated?n.canDeactivateChecks.push(new ci(e.outlet.component,r)):n.canDeactivateChecks.push(new ci(null,r)):n.canDeactivateChecks.push(new ci(null,r))}function s6(t){return typeof t=="function"}function JH(t){return typeof t=="boolean"}function KH(t){return t&&s6(t.canLoad)}function QH(t){return t&&s6(t.canActivate)}function eL(t){return t&&s6(t.canActivateChild)}function tL(t){return t&&s6(t.canDeactivate)}function nL(t){return t&&s6(t.canMatch)}function Dm(t){return t instanceof e3||t?.name==="EmptyError"}var Wa=Symbol("INITIAL_VALUE");function hi(){return He(t=>ps(t.map(e=>e.pipe(z2(1),Dn(Wa)))).pipe(L1(e=>{for(let n of e)if(n!==!0){if(n===Wa)return Wa;if(n===!1||n instanceof Z3)return n}return!0}),U2(e=>e!==Wa),z2(1)))}function iL(t,e){return Re(n=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:a}}=n;return a.length===0&&s.length===0?H1(Me(l1({},n),{guardsResult:!0})):rL(a,i,r,t).pipe(Re(o=>o&&JH(o)?sL(i,s,t,e):H1(o)),L1(o=>Me(l1({},n),{guardsResult:o})))})}function rL(t,e,n,i){return Ie(t).pipe(Re(r=>fL(r.component,r.route,n,e,i)),ht(r=>r!==!0,!0))}function sL(t,e,n,i){return Ie(e).pipe(T3(r=>V3(oL(r.route.parent,i),aL(r.route,i),lL(t,r.path,n),cL(t,r.route,n))),ht(r=>r!==!0,!0))}function aL(t,e){return t!==null&&e&&e(new Q5(t)),H1(!0)}function oL(t,e){return t!==null&&e&&e(new J5(t)),H1(!0)}function cL(t,e,n){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return H1(!0);let r=i.map(s=>ms(()=>{let a=r6(e)??n,o=di(s,a),c=QH(o)?o.canActivate(e,t):rt(a,()=>o(e,t));return K3(c).pipe(ht())}));return H1(r).pipe(hi())}function lL(t,e,n){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(a=>XH(a)).filter(a=>a!==null).map(a=>ms(()=>{let o=a.guards.map(c=>{let l=r6(a.node)??n,f=di(c,l),u=eL(f)?f.canActivateChild(i,t):rt(l,()=>f(i,t));return K3(u).pipe(ht())});return H1(o).pipe(hi())}));return H1(s).pipe(hi())}function fL(t,e,n,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return H1(!0);let a=s.map(o=>{let c=r6(e)??r,l=di(o,c),f=tL(l)?l.canDeactivate(t,e,n,i):rt(c,()=>l(t,e,n,i));return K3(f).pipe(ht())});return H1(a).pipe(hi())}function uL(t,e,n,i){let r=e.canLoad;if(r===void 0||r.length===0)return H1(!0);let s=r.map(a=>{let o=di(a,t),c=KH(o)?o.canLoad(e,n):rt(t,()=>o(e,n));return K3(c)});return H1(s).pipe(hi(),Nm(i))}function Nm(t){return Oo(le(e=>{if(fi(e))throw Vm(t,e)}),L1(e=>e===!0))}function hL(t,e,n,i){let r=e.canMatch;if(!r||r.length===0)return H1(!0);let s=r.map(a=>{let o=di(a,t),c=nL(o)?o.canMatch(e,n):rt(t,()=>o(e,n));return K3(c)});return H1(s).pipe(hi(),Nm(i))}var n6=class{constructor(e){this.segmentGroup=e||null}},n0=class extends Error{constructor(e){super(),this.urlTree=e}};function si(t){return En(new n6(t))}function dL(t){return En(new v1(4e3,!1))}function pL(t){return En(Am(!1,X2.GuardRejected))}var o7=class{constructor(e,n){this.urlSerializer=e,this.urlTree=n}lineralizeSegments(e,n){let i=[],r=n.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return H1(i);if(r.numberOfChildren>1||!r.children[U1])return dL(e.redirectTo);r=r.children[U1]}}applyRedirectCommands(e,n,i){let r=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),e,i);if(n.startsWith("/"))throw new n0(r);return r}applyRedirectCreateUrlTree(e,n,i,r){let s=this.createSegmentGroup(e,n.root,i,r);return new Z3(s,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(e,n){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let o=s.substring(1);i[r]=n[o]}else i[r]=s}),i}createSegmentGroup(e,n,i,r){let s=this.createSegments(e,n.segments,i,r),a={};return Object.entries(n.children).forEach(([o,c])=>{a[o]=this.createSegmentGroup(e,c,i,r)}),new pe(s,a)}createSegments(e,n,i,r){return n.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,n,i){let r=i[n.path.substring(1)];if(!r)throw new v1(4001,!1);return r}findOrReturn(e,n){let i=0;for(let r of n){if(r.path===e.path)return n.splice(i),r;i++}return e}},c7={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function mL(t,e,n,i,r){let s=v7(t,e,n);return s.matched?(i=WH(e,i),hL(i,e,n,r).pipe(L1(a=>a===!0?s:l1({},c7)))):H1(s)}function v7(t,e,n){if(e.path==="**")return gL(n);if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||n.length>0)?l1({},c7):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let r=(e.matcher||uH)(n,t,e);if(!r)return l1({},c7);let s={};Object.entries(r.posParams??{}).forEach(([o,c])=>{s[o]=c.path});let a=r.consumed.length>0?l1(l1({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:n.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function gL(t){return{matched:!0,parameters:t.length>0?dm(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function um(t,e,n,i){return n.length>0&&CL(t,n,i)?{segmentGroup:new pe(e,ML(i,new pe(n,t.children))),slicedSegments:[]}:n.length===0&&yL(t,n,i)?{segmentGroup:new pe(t.segments,vL(t,n,i,t.children)),slicedSegments:n}:{segmentGroup:new pe(t.segments,t.children),slicedSegments:n}}function vL(t,e,n,i){let r={};for(let s of n)if(r0(t,e,s)&&!i[Xt(s)]){let a=new pe([],{});r[Xt(s)]=a}return l1(l1({},i),r)}function ML(t,e){let n={};n[U1]=e;for(let i of t)if(i.path===""&&Xt(i)!==U1){let r=new pe([],{});n[Xt(i)]=r}return n}function CL(t,e,n){return n.some(i=>r0(t,e,i)&&Xt(i)!==U1)}function yL(t,e,n){return n.some(i=>r0(t,e,i))}function r0(t,e,n){return(t.hasChildren()||e.length>0)&&n.pathMatch==="full"?!1:n.path===""}function xL(t,e,n,i){return Xt(t)!==i&&(i===U1||!r0(e,n,t))?!1:v7(e,t,n).matched}function bL(t,e,n){return e.length===0&&!t.children[n]}var l7=class{};function zL(t,e,n,i,r,s,a="emptyOnly"){return new f7(t,e,n,i,r,a,s).recognize()}var _L=31,f7=class{constructor(e,n,i,r,s,a,o){this.injector=e,this.configLoader=n,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=a,this.urlSerializer=o,this.applyRedirects=new o7(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new v1(4002,`'${e.segmentGroup}'`)}recognize(){let e=um(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(L1(n=>{let i=new e6([],Object.freeze({}),Object.freeze(l1({},this.urlTree.queryParams)),this.urlTree.fragment,{},U1,this.rootComponentType,null,{}),r=new $2(i,n),s=new e0("",r),a=VH(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(a),this.inheritParamsAndData(s._root,null),{state:s,tree:a}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,U1).pipe(A3(i=>{if(i instanceof n0)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof n6?this.noMatchError(i):i}))}inheritParamsAndData(e,n){let i=e.value,r=d7(i,n,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,n,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,n,i):this.processSegment(e,n,i,i.segments,r,!0).pipe(L1(s=>s instanceof $2?[s]:[]))}processChildren(e,n,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return Ie(r).pipe(T3(s=>{let a=i.children[s],o=jH(n,s);return this.processSegmentGroup(e,o,a,s)}),Zo((s,a)=>(s.push(...a),s)),D3(null),Yo(),Re(s=>{if(s===null)return si(i);let a=Im(s);return wL(a),H1(a)}))}processSegment(e,n,i,r,s,a){return Ie(n).pipe(T3(o=>this.processSegmentAgainstRoute(o._injector??e,n,o,i,r,s,a).pipe(A3(c=>{if(c instanceof n6)return H1(null);throw c}))),ht(o=>!!o),A3(o=>{if(Dm(o))return bL(i,r,s)?H1(new l7):si(i);throw o}))}processSegmentAgainstRoute(e,n,i,r,s,a,o){return xL(i,r,s,a)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,a):this.allowRedirects&&o?this.expandSegmentAgainstRouteUsingRedirect(e,r,n,i,s,a):si(r):si(r)}expandSegmentAgainstRouteUsingRedirect(e,n,i,r,s,a){let{matched:o,consumedSegments:c,positionalParamSegments:l,remainingSegments:f}=v7(n,r,s);if(!o)return si(n);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>_L&&(this.allowRedirects=!1));let u=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,u).pipe(Re(h=>this.processSegment(e,i,n,h.concat(f),a,!1)))}matchSegmentAgainstRoute(e,n,i,r,s){let a=mL(n,i,r,e,this.urlSerializer);return i.path==="**"&&(n.children={}),a.pipe(He(o=>o.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(He(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:f,remainingSegments:u,parameters:h}=o,m=new e6(f,h,Object.freeze(l1({},this.urlTree.queryParams)),this.urlTree.fragment,HL(i),Xt(i),i.component??i._loadedComponent??null,i,LL(i)),{segmentGroup:g,slicedSegments:v}=um(n,f,u,c);if(v.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(L1(d=>d===null?null:new $2(m,d)));if(c.length===0&&v.length===0)return H1(new $2(m,[]));let p=Xt(i)===s;return this.processSegment(l,c,g,v,p?U1:s,!0).pipe(L1(d=>new $2(m,d instanceof $2?[d]:[])))}))):si(n)))}getChildConfig(e,n,i){return n.children?H1({routes:n.children,injector:e}):n.loadChildren?n._loadedRoutes!==void 0?H1({routes:n._loadedRoutes,injector:n._loadedInjector}):uL(e,n,i,this.urlSerializer).pipe(Re(r=>r?this.configLoader.loadChildren(e,n).pipe(le(s=>{n._loadedRoutes=s.routes,n._loadedInjector=s.injector})):pL(n))):H1({routes:[],injector:e})}};function wL(t){t.sort((e,n)=>e.value.outlet===U1?-1:n.value.outlet===U1?1:e.value.outlet.localeCompare(n.value.outlet))}function SL(t){let e=t.value.routeConfig;return e&&e.path===""}function Im(t){let e=[],n=new Set;for(let i of t){if(!SL(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),n.add(r)):e.push(i)}for(let i of n){let r=Im(i.children);e.push(new $2(i.value,r))}return e.filter(i=>!n.has(i))}function HL(t){return t.data||{}}function LL(t){return t.resolve||{}}function EL(t,e,n,i,r,s){return Re(a=>zL(t,e,n,i,a.extractedUrl,r,s).pipe(L1(({state:o,tree:c})=>Me(l1({},a),{targetSnapshot:o,urlAfterRedirects:c}))))}function VL(t,e){return Re(n=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=n;if(!r.length)return H1(n);let s=new Set(r.map(c=>c.route)),a=new Set;for(let c of s)if(!a.has(c))for(let l of Rm(c))a.add(l);let o=0;return Ie(a).pipe(T3(c=>s.has(c)?AL(c,i,t,e):(c.data=d7(c,c.parent,t).resolve,H1(void 0))),le(()=>o++),Tn(1),Re(c=>o===a.size?H1(n):o2))})}function Rm(t){let e=t.children.map(n=>Rm(n)).flat();return[t,...e]}function AL(t,e,n,i){let r=t.routeConfig,s=t._resolve;return r?.title!==void 0&&!Lm(r)&&(s[i6]=r.title),TL(s,t,e,i).pipe(L1(a=>(t._resolvedData=a,t.data=d7(t,t.parent,n).resolve,null)))}function TL(t,e,n,i){let r=F5(t);if(r.length===0)return H1({});let s={};return Ie(r).pipe(Re(a=>DL(t[a],e,n,i).pipe(ht(),le(o=>{s[a]=o}))),Tn(1),ar(s),A3(a=>Dm(a)?o2:En(a)))}function DL(t,e,n,i){let r=r6(e)??i,s=di(t,r),a=s.resolve?s.resolve(e,n):rt(r,()=>s(e,n));return K3(a)}function k5(t){return He(e=>{let n=t(e);return n?Ie(n).pipe(L1(()=>e)):H1(e)})}var Pm=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(a=>a.outlet===U1);return r}getResolvedTitleForRoute(i){return i.data[i6]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>G(NL),providedIn:"root"});let t=e;return t})(),NL=(()=>{let e=class e extends Pm{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(V1(rm))},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),M7=new C1("",{providedIn:"root",factory:()=>({})}),C7=new C1(""),IL=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=G(p5)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return H1(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=K3(i.loadComponent()).pipe(L1(km),le(a=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a}),ut(()=>{this.componentLoaders.delete(i)})),s=new bn(r,()=>new s2).pipe(xn());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return H1({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let a=RL(r,this.compiler,i,this.onLoadEndListener).pipe(ut(()=>{this.childrenLoaders.delete(r)})),o=new bn(a,()=>new s2).pipe(xn());return this.childrenLoaders.set(r,o),o}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function RL(t,e,n,i){return K3(t.loadChildren()).pipe(L1(km),Re(r=>r instanceof Mr||Array.isArray(r)?H1(r):Ie(e.compileModuleAsync(r))),L1(r=>{i&&i(t);let s,a,o=!1;return Array.isArray(r)?(a=r,o=!0):(s=r.create(n).injector,a=s.get(C7,[],{optional:!0,self:!0}).flat()),{routes:a.map(g7),injector:s}}))}function PL(t){return t&&typeof t=="object"&&"default"in t}function km(t){return PL(t)?t.default:t}var y7=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>G(kL),providedIn:"root"});let t=e;return t})(),kL=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),OL=new C1("");var FL=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new s2,this.transitionAbortSubject=new s2,this.configLoader=G(IL),this.environmentInjector=G(D2),this.urlSerializer=G(h7),this.rootContexts=G(i0),this.location=G(Nr),this.inputBindingEnabled=G(m7,{optional:!0})!==null,this.titleStrategy=G(Pm),this.options=G(M7,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=G(y7),this.createViewTransition=G(OL,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>H1(void 0),this.rootComponentType=null;let i=s=>this.events.next(new Y5(s)),r=s=>this.events.next(new Z5(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(Me(l1(l1({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new a2({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:$r,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(U2(a=>a.id!==0),L1(a=>Me(l1({},a),{extractedUrl:this.urlHandlingStrategy.extract(a.rawUrl)})),He(a=>{let o=!1,c=!1;return H1(a).pipe(He(l=>{if(this.navigationId>a.id)return this.cancelNavigationTransition(a,"",X2.SupersededByNewNavigation),o2;this.currentTransition=a,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Me(l1({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let f=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!f&&u!=="reload"){let h="";return this.events.next(new W4(l.id,this.urlSerializer.serialize(l.rawUrl),h,W5.IgnoredSameUrlNavigation)),l.resolve(null),o2}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return H1(l).pipe(He(h=>{let m=this.transitions?.getValue();return this.events.next(new Zr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?o2:Promise.resolve(h)}),EL(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),le(h=>{a.targetSnapshot=h.targetSnapshot,a.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Me(l1({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new Ja(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(f&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:v,extras:p}=l,d=new Zr(h,this.urlSerializer.serialize(m),g,v);this.events.next(d);let _=Sm(this.rootComponentType).snapshot;return this.currentTransition=a=Me(l1({},l),{targetSnapshot:_,urlAfterRedirects:m,extras:Me(l1({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,H1(a)}else{let h="";return this.events.next(new W4(l.id,this.urlSerializer.serialize(l.extractedUrl),h,W5.IgnoredByUrlHandlingStrategy)),l.resolve(null),o2}}),le(l=>{let f=new j5(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)}),L1(l=>(this.currentTransition=a=Me(l1({},l),{guards:$H(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),a)),iL(this.environmentInjector,l=>this.events.next(l)),le(l=>{if(a.guardsResult=l.guardsResult,fi(l.guardsResult))throw Vm(this.urlSerializer,l.guardsResult);let f=new q5(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(f)}),U2(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",X2.GuardRejected),!1)),k5(l=>{if(l.guards.canActivateChecks.length)return H1(l).pipe(le(f=>{let u=new $5(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(u)}),He(f=>{let u=!1;return H1(f).pipe(VL(this.paramsInheritanceStrategy,this.environmentInjector),le({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(f,"",X2.NoDataFromResolver)}}))}),le(f=>{let u=new X5(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(u)}))}),k5(l=>{let f=u=>{let h=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(u.routeConfig).pipe(le(m=>{u.component=m}),L1(()=>{})));for(let m of u.children)h.push(...f(m));return h};return ps(f(l.targetSnapshot.root)).pipe(D3(null),z2(1))}),k5(()=>this.afterPreactivation()),He(()=>{let{currentSnapshot:l,targetSnapshot:f}=a,u=this.createViewTransition?.(this.environmentInjector,l.root,f.root);return u?Ie(u).pipe(L1(()=>a)):H1(a)}),L1(l=>{let f=OH(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=a=Me(l1({},l),{targetRouterState:f}),this.currentNavigation.targetRouterState=f,a}),le(()=>{this.events.next(new Kr)}),qH(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),z2(1),le({next:l=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new G4(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{o=!0}}),dt(this.transitionAbortSubject.pipe(le(l=>{throw l}))),ut(()=>{!o&&!c&&this.cancelNavigationTransition(a,"",X2.SupersededByNewNavigation),this.currentTransition?.id===a.id&&(this.currentNavigation=null,this.currentTransition=null)}),A3(l=>{if(c=!0,Tm(l))this.events.next(new J3(a.id,this.urlSerializer.serialize(a.extractedUrl),l.message,l.cancellationCode)),BH(l)?this.events.next(new Qr(l.url)):a.resolve(!1);else{this.events.next(new Jr(a.id,this.urlSerializer.serialize(a.extractedUrl),l,a.targetSnapshot??void 0));try{a.resolve(i.errorHandler(l))}catch(f){this.options.resolveNavigationPromiseOnError?a.resolve(!1):a.reject(f)}}return o2}))}))}cancelNavigationTransition(i,r,s){let a=new J3(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(a),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function UL(t){return t!==$r}var BL=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>G(GL),providedIn:"root"});let t=e;return t})(),u7=class{shouldDetach(e){return!1}store(e,n){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,n){return e.routeConfig===n.routeConfig}},GL=(()=>{let e=class e extends u7{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Om=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:()=>G(WL),providedIn:"root"});let t=e;return t})(),WL=(()=>{let e=class e extends Om{constructor(){super(...arguments),this.location=G(Nr),this.urlSerializer=G(h7),this.options=G(M7,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=G(y7),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Z3,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Sm(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof Zr)this.stateMemento=this.createStateMemento();else if(i instanceof W4)this.rawUrlTree=r.initialUrl;else if(i instanceof Ja){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof Kr?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof J3&&(i.code===X2.GuardRejected||i.code===X2.NoDataFromResolver)?this.restoreHistory(r):i instanceof Jr?this.restoreHistory(r,!0):i instanceof G4&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let a=this.browserPageId,o=l1(l1({},r.extras.state),this.generateNgRouterState(r.id,a));this.location.replaceState(s,"",o)}else{let a=l1(l1({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",a)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,a=this.currentPageId-s;a!==0?this.location.historyGo(a):this.currentUrlTree===i.finalUrl&&a===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),jr=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(jr||{});function jL(t,e){t.events.pipe(U2(n=>n instanceof G4||n instanceof J3||n instanceof Jr||n instanceof W4),L1(n=>n instanceof G4||n instanceof W4?jr.COMPLETE:(n instanceof J3?n.code===X2.Redirect||n.code===X2.SupersededByNewNavigation:!1)?jr.REDIRECTING:jr.FAILED),U2(n=>n!==jr.REDIRECTING),z2(1)).subscribe(()=>{e()})}function qL(t){throw t}var $L={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},XL={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Fm=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=G(Sa),this.stateManager=G(Om),this.options=G(M7,{optional:!0})||{},this.pendingTasks=G(W3),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=G(FL),this.urlSerializer=G(h7),this.location=G(Nr),this.urlHandlingStrategy=G(y7),this._events=new s2,this.errorHandler=this.options.errorHandler||qL,this.navigated=!1,this.routeReuseStrategy=G(BL),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=G(C7,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!G(m7,{optional:!0}),this.eventsSubscription=new Ne,this.isNgZoneEnabled=G(ye)instanceof ye&&ye.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,a=this.navigationTransitions.currentNavigation;if(s!==null&&a!==null){if(this.stateManager.handleRouterEvent(r,a),r instanceof J3&&r.code!==X2.Redirect&&r.code!==X2.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof G4)this.navigated=!0;else if(r instanceof Qr){let o=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||UL(s.source)};this.scheduleNavigation(o,$r,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}ZL(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),$r,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let a={replaceUrl:!0},o=s?.navigationId?s:null;if(s){let l=l1({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(a.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,o,a)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(g7),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:a,fragment:o,queryParamsHandling:c,preserveFragment:l}=r,f=l?this.currentUrlTree.fragment:o,u=null;switch(c){case"merge":u=l1(l1({},this.currentUrlTree.queryParams),a);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=a||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=bm(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return zm(h,i,u,f??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=fi(i)?i:this.parseUrl(i),a=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(a,$r,null,r)}navigate(i,r={skipLocationChange:!1}){return YL(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=l1({},$L):r===!1?s=l1({},XL):s=r,fi(i))return om(this.currentUrlTree,i,s);let a=this.parseUrl(i);return om(this.currentUrlTree,a,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,a])=>(a!=null&&(r[s]=a),r),{})}scheduleNavigation(i,r,s,a,o){if(this.disposed)return Promise.resolve(!1);let c,l,f;o?(c=o.resolve,l=o.reject,f=o.promise):f=new Promise((h,m)=>{c=h,l=m});let u=this.pendingTasks.add();return jL(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:a,resolve:c,reject:l,promise:f,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),f.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function YL(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new v1(4008,!1)}function ZL(t){return!(t instanceof Kr)&&!(t instanceof Qr)}var JL=new C1("");function Um(t,...e){return k3([{provide:C7,multi:!0,useValue:t},[],{provide:ui,useFactory:KL,deps:[Fm]},{provide:Jn,multi:!0,useFactory:QL},e.map(n=>n.\u0275providers)])}function KL(t){return t.routerState.root}function QL(){let t=G(st);return e=>{let n=t.get(h3);if(e!==n.components[0])return;let i=t.get(Fm),r=t.get(eE);t.get(tE)===1&&i.initialNavigation(),t.get(nE,null,Q1.Optional)?.setUpPreloading(),t.get(JL,null,Q1.Optional)?.init(),i.resetRootComponentType(n.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var eE=new C1("",{factory:()=>new s2}),tE=new C1("",{providedIn:"root",factory:()=>1});var nE=new C1("");var Bm=[];var Gm={providers:[Um(Bm),sm()]};var Nl="162";var iE=0,Wm=1,rE=2;var gv=1,sE=2,C3=3,l4=0,k2=1,x3=2,Jt=0,Ni=1,jm=2,qm=3,$m=4,aE=5,K4=100,oE=101,cE=102,Xm=103,Ym=104,lE=200,fE=201,uE=202,hE=203,el=204,tl=205,dE=206,pE=207,mE=208,gE=209,vE=210,ME=211,CE=212,yE=213,xE=214,bE=0,zE=1,_E=2,H0=3,wE=4,SE=5,HE=6,LE=7,vv=0,EE=1,VE=2,o4=0,AE=1,TE=2,DE=3,NE=4,IE=5,RE=6,PE=7;var Zm=300,Pi=301,ki=302,nl=303,il=304,X0=306,rl=1e3,St=1001,sl=1002,A2=1003,Jm=1004;var a6=1005;var R2=1006,x7=1007;var en=1008;var c4=1009,kE=1010,OE=1011,Il=1012,Mv=1013,a4=1014,b3=1015,rn=1016,Cv=1017,yv=1018,tn=1020,FE=1021,Ht=1023,UE=1024,BE=1025,nn=1026,Oi=1027,GE=1028,xv=1029,WE=1030,bv=1031,zv=1033,b7=33776,z7=33777,_7=33778,w7=33779,Km=35840,Qm=35841,eg=35842,tg=35843,_v=36196,ng=37492,ig=37496,rg=37808,sg=37809,ag=37810,og=37811,cg=37812,lg=37813,fg=37814,ug=37815,hg=37816,dg=37817,pg=37818,mg=37819,gg=37820,vg=37821,S7=36492,Mg=36494,Cg=36495,jE=36283,yg=36284,xg=36285,bg=36286;var L0=2300,E0=2301,H7=2302,zg=2400,_g=2401,wg=2402;var qE=3200,$E=3201,XE=0,YE=1,s4="",Yt="srgb",d4="srgb-linear",Rl="display-p3",Y0="display-p3-linear",V0="linear",Le="srgb",A0="rec709",T0="p3";var pi=7680;var Sg=519,ZE=512,JE=513,KE=514,wv=515,QE=516,eV=517,tV=518,nV=519,Hg=35044;var Lg="300 es",al=1035,z3=2e3,D0=2001,f4=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},y2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var L7=Math.PI/180,ol=180/Math.PI;function v6(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(y2[t&255]+y2[t>>8&255]+y2[t>>16&255]+y2[t>>24&255]+"-"+y2[e&255]+y2[e>>8&255]+"-"+y2[e>>16&15|64]+y2[e>>24&255]+"-"+y2[n&63|128]+y2[n>>8&255]+"-"+y2[n>>16&255]+y2[n>>24&255]+y2[i&255]+y2[i>>8&255]+y2[i>>16&255]+y2[i>>24&255]).toLowerCase()}function P2(t,e,n){return Math.max(e,Math.min(n,t))}function iV(t,e){return(t%e+e)%e}function E7(t,e,n){return(1-n)*t+n*e}function Eg(t){return(t&t-1)===0&&t!==0}function cl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function o6(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function I2(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var oe=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(P2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},X1=class t{constructor(e,n,i,r,s,a,o,c,l){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){let f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],u=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],d=r[6],_=r[1],y=r[4],b=r[7],L=r[2],H=r[5],S=r[8];return s[0]=a*v+o*_+c*L,s[3]=a*p+o*y+c*H,s[6]=a*d+o*b+c*S,s[1]=l*v+f*_+u*L,s[4]=l*p+f*y+u*H,s[7]=l*d+f*b+u*S,s[2]=h*v+m*_+g*L,s[5]=h*p+m*y+g*H,s[8]=h*d+m*b+g*S,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return n*a*f-n*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,h=o*c-f*s,m=l*s-a*c,g=n*u+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*l-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(f*n-r*c)*v,e[5]=(r*s-o*n)*v,e[6]=m*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(V7.makeScale(e,n)),this}rotate(e){return this.premultiply(V7.makeRotation(-e)),this}translate(e,n){return this.premultiply(V7.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},V7=new X1;function Sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function N0(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rV(){let t=N0("canvas");return t.style.display="block",t}var Vg={};function sV(t){t in Vg||(Vg[t]=!0,console.warn(t))}var Ag=new X1().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tg=new X1().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),s0={[d4]:{transfer:V0,primaries:A0,toReference:t=>t,fromReference:t=>t},[Yt]:{transfer:Le,primaries:A0,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Y0]:{transfer:V0,primaries:T0,toReference:t=>t.applyMatrix3(Tg),fromReference:t=>t.applyMatrix3(Ag)},[Rl]:{transfer:Le,primaries:T0,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Tg),fromReference:t=>t.applyMatrix3(Ag).convertLinearToSRGB()}},aV=new Set([d4,Y0]),Ce={enabled:!0,_workingColorSpace:d4,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!aV.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=s0[e].toReference,r=s0[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return s0[t].primaries},getTransfer:function(t){return t===s4?V0:s0[t].transfer}};function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function A7(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var mi,I0=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=N0("canvas")),mi.width=e.width,mi.height=e.height;let i=mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=mi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=N0("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oV=0,R0=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oV++}),this.uuid=v6(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(T7(r[a].image)):s.push(T7(r[a]))}else s=T7(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function T7(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?I0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cV=0,ln=(()=>{class t extends f4{constructor(n=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,r=St,s=St,a=R2,o=en,c=Ht,l=c4,f=t.DEFAULT_ANISOTROPY,u=s4){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cV++}),this.uuid=v6(),this.name="",this.source=new R0(n),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){let i=n===void 0||typeof n=="string";if(!i&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(n.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==Zm)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case rl:n.x=n.x-Math.floor(n.x);break;case St:n.x=n.x<0?0:1;break;case sl:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case rl:n.y=n.y-Math.floor(n.y);break;case St:n.y=n.y<0?0:1;break;case sl:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}}return t.DEFAULT_IMAGE=null,t.DEFAULT_MAPPING=Zm,t.DEFAULT_ANISOTROPY=1,t})(),h2=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],m=c[5],g=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(l+1)/2,b=(m+1)/2,L=(d+1)/2,H=(f+h)/4,S=(u+v)/4,k=(g+p)/4;return y>b&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=H/i,s=S/i):b>L?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=H/r,s=k/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=S/s,r=k/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-v)/_,this.z=(h-f)/_,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ll=class extends f4{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new h2(0,0,e,n),this.scissorTest=!1,this.viewport=new h2(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:R2,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new R0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends ll{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},P0=class extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=A2,this.minFilter=A2,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fl=class extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=A2,this.minFilter=A2,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var u4=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],u=i[r+3],h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=f,e[n+3]=u;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(u!==v||c!==h||l!==m||f!==g){let p=1-o,d=c*h+l*m+f*g+u*v,_=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let L=Math.sqrt(y),H=Math.atan2(L,d*_);p=Math.sin(p*H)/L,o=Math.sin(o*H)/L}let b=o*_;if(c=c*p+h*b,l=l*p+m*b,f=f*p+g*b,u=u*p+v*b,p===1-o){let L=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=L,l*=L,f*=L,u*=L}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],u=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+f*u+c*m-l*h,e[n+1]=c*g+f*h+l*u-o*m,e[n+2]=l*g+f*m+o*h-c*u,e[n+3]=f*g-o*u-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),u=o(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*f*u+l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u-h*m*g;break;case"YXZ":this._x=h*f*u+l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u+h*m*g;break;case"ZXY":this._x=h*f*u-l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u-h*m*g;break;case"ZYX":this._x=h*f*u-l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u+h*m*g;break;case"YZX":this._x=h*f*u+l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u-h*m*g;break;case"XZY":this._x=h*f*u-l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],f=n[6],u=n[10],h=i+o+u;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(P2(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}let l=Math.sqrt(c),f=Math.atan2(l,o),u=Math.sin((1-n)*f)/l,h=Math.sin(n*f)/l;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dg.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+c*l+a*u-o*f,this.y=i+c*f+o*l-s*u,this.z=r+c*u+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return D7.copy(this).projectOnVector(e),this.sub(D7)}reflect(e){return this.sub(D7.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(P2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},D7=new R,Dg=new u4,sn=class{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=zt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),a0.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),a0.copy(i.boundingBox)),a0.applyMatrix4(e.matrixWorld),this.union(a0)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(c6),o0.subVectors(this.max,c6),gi.subVectors(e.a,c6),vi.subVectors(e.b,c6),Mi.subVectors(e.c,c6),Q3.subVectors(vi,gi),e4.subVectors(Mi,vi),j4.subVectors(gi,Mi);let n=[0,-Q3.z,Q3.y,0,-e4.z,e4.y,0,-j4.z,j4.y,Q3.z,0,-Q3.x,e4.z,0,-e4.x,j4.z,0,-j4.x,-Q3.y,Q3.x,0,-e4.y,e4.x,0,-j4.y,j4.x,0];return!N7(n,gi,vi,Mi,o0)||(n=[1,0,0,0,1,0,0,0,1],!N7(n,gi,vi,Mi,o0))?!1:(c0.crossVectors(Q3,e4),n=[c0.x,c0.y,c0.z],N7(n,gi,vi,Mi,o0))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(p3[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),p3[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),p3[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),p3[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),p3[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),p3[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),p3[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),p3[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(p3),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},p3=[new R,new R,new R,new R,new R,new R,new R,new R],zt=new R,a0=new sn,gi=new R,vi=new R,Mi=new R,Q3=new R,e4=new R,j4=new R,c6=new R,o0=new R,c0=new R,q4=new R;function N7(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){q4.fromArray(t,s);let o=r.x*Math.abs(q4.x)+r.y*Math.abs(q4.y)+r.z*Math.abs(q4.z),c=e.dot(q4),l=n.dot(q4),f=i.dot(q4);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}var lV=new sn,l6=new R,I7=new R,d6=class{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):lV.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;l6.subVectors(e,this.center);let n=l6.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(l6,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(I7.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(l6.copy(e.center).add(I7)),this.expandByPoint(l6.copy(e.center).sub(I7))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},m3=new R,R7=new R,l0=new R,t4=new R,P7=new R,f0=new R,k7=new R,ul=class{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,m3)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=m3.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(m3.copy(this.origin).addScaledVector(this.direction,n),m3.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){R7.copy(e).add(n).multiplyScalar(.5),l0.copy(n).sub(e).normalize(),t4.copy(this.origin).sub(R7);let s=e.distanceTo(n)*.5,a=-this.direction.dot(l0),o=t4.dot(this.direction),c=-t4.dot(l0),l=t4.lengthSq(),f=Math.abs(1-a*a),u,h,m,g;if(f>0)if(u=a*c-o,h=a*o-c,g=s*f,u>=0)if(h>=-g)if(h<=g){let v=1/f;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(R7).addScaledVector(l0,h),m}intersectSphere(e,n){m3.subVectors(e.center,this.origin);let i=m3.dot(this.direction),r=m3.dot(m3)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c,l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,m3)!==null}intersectTriangle(e,n,i,r,s){P7.subVectors(n,e),f0.subVectors(i,e),k7.crossVectors(P7,f0);let a=this.direction.dot(k7),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;t4.subVectors(this.origin,e);let c=o*this.direction.dot(f0.crossVectors(t4,f0));if(c<0)return null;let l=o*this.direction.dot(P7.cross(t4));if(l<0||c+l>a)return null;let f=-o*t4.dot(k7);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},n2=class t{constructor(e,n,i,r,s,a,o,c,l,f,u,h,m,g,v,p){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,f,u,h,m,g,v,p)}set(e,n,i,r,s,a,o,c,l,f,u,h,m,g,v,p){let d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=u,d[14]=h,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=a*f,m=a*u,g=o*f,v=o*u;n[0]=c*f,n[4]=-c*u,n[8]=l,n[1]=m+g*l,n[5]=h-v*l,n[9]=-o*c,n[2]=v-h*l,n[6]=g+m*l,n[10]=a*c}else if(e.order==="YXZ"){let h=c*f,m=c*u,g=l*f,v=l*u;n[0]=h+v*o,n[4]=g*o-m,n[8]=a*l,n[1]=a*u,n[5]=a*f,n[9]=-o,n[2]=m*o-g,n[6]=v+h*o,n[10]=a*c}else if(e.order==="ZXY"){let h=c*f,m=c*u,g=l*f,v=l*u;n[0]=h-v*o,n[4]=-a*u,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*f,n[9]=v-h*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){let h=a*f,m=a*u,g=o*f,v=o*u;n[0]=c*f,n[4]=g*l-m,n[8]=h*l+v,n[1]=c*u,n[5]=v*l+h,n[9]=m*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){let h=a*c,m=a*l,g=o*c,v=o*l;n[0]=c*f,n[4]=v-h*u,n[8]=g*u+m,n[1]=u,n[5]=a*f,n[9]=-o*f,n[2]=-l*f,n[6]=m*u+g,n[10]=h-v*u}else if(e.order==="XZY"){let h=a*c,m=a*l,g=o*c,v=o*l;n[0]=c*f,n[4]=-u,n[8]=l*f,n[1]=h*u+v,n[5]=a*f,n[9]=m*u-g,n[2]=g*u-m,n[6]=o*f,n[10]=v*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fV,e,uV)}lookAt(e,n,i){let r=this.elements;return Y2.subVectors(e,n),Y2.lengthSq()===0&&(Y2.z=1),Y2.normalize(),n4.crossVectors(i,Y2),n4.lengthSq()===0&&(Math.abs(i.z)===1?Y2.x+=1e-4:Y2.z+=1e-4,Y2.normalize(),n4.crossVectors(i,Y2)),n4.normalize(),u0.crossVectors(Y2,n4),r[0]=n4.x,r[4]=u0.x,r[8]=Y2.x,r[1]=n4.y,r[5]=u0.y,r[9]=Y2.y,r[2]=n4.z,r[6]=u0.z,r[10]=Y2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],u=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],_=i[3],y=i[7],b=i[11],L=i[15],H=r[0],S=r[4],k=r[8],Z=r[12],C=r[1],w=r[5],t1=r[9],Q=r[13],V=r[2],W=r[6],U=r[10],$=r[14],B=r[3],q=r[7],X=r[11],r1=r[15];return s[0]=a*H+o*C+c*V+l*B,s[4]=a*S+o*w+c*W+l*q,s[8]=a*k+o*t1+c*U+l*X,s[12]=a*Z+o*Q+c*$+l*r1,s[1]=f*H+u*C+h*V+m*B,s[5]=f*S+u*w+h*W+m*q,s[9]=f*k+u*t1+h*U+m*X,s[13]=f*Z+u*Q+h*$+m*r1,s[2]=g*H+v*C+p*V+d*B,s[6]=g*S+v*w+p*W+d*q,s[10]=g*k+v*t1+p*U+d*X,s[14]=g*Z+v*Q+p*$+d*r1,s[3]=_*H+y*C+b*V+L*B,s[7]=_*S+y*w+b*W+L*q,s[11]=_*k+y*t1+b*U+L*X,s[15]=_*Z+y*Q+b*$+L*r1,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+s*c*u-r*l*u-s*o*h+i*l*h+r*o*m-i*c*m)+v*(+n*c*m-n*l*h+s*a*h-r*a*m+r*l*f-s*c*f)+p*(+n*l*u-n*o*m-s*a*u+i*a*m+s*o*f-i*l*f)+d*(-r*o*f-n*c*u+n*o*h+r*a*u-i*a*h+i*c*f)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],_=u*p*l-v*h*l+v*c*m-o*p*m-u*c*d+o*h*d,y=g*h*l-f*p*l-g*c*m+a*p*m+f*c*d-a*h*d,b=f*v*l-g*u*l+g*o*m-a*v*m-f*o*d+a*u*d,L=g*u*c-f*v*c-g*o*h+a*v*h+f*o*p-a*u*p,H=n*_+i*y+r*b+s*L;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/H;return e[0]=_*S,e[1]=(v*h*s-u*p*s-v*r*m+i*p*m+u*r*d-i*h*d)*S,e[2]=(o*p*s-v*c*s+v*r*l-i*p*l-o*r*d+i*c*d)*S,e[3]=(u*c*s-o*h*s-u*r*l+i*h*l+o*r*m-i*c*m)*S,e[4]=y*S,e[5]=(f*p*s-g*h*s+g*r*m-n*p*m-f*r*d+n*h*d)*S,e[6]=(g*c*s-a*p*s-g*r*l+n*p*l+a*r*d-n*c*d)*S,e[7]=(a*h*s-f*c*s+f*r*l-n*h*l-a*r*m+n*c*m)*S,e[8]=b*S,e[9]=(g*u*s-f*v*s-g*i*m+n*v*m+f*i*d-n*u*d)*S,e[10]=(a*v*s-g*o*s+g*i*l-n*v*l-a*i*d+n*o*d)*S,e[11]=(f*o*s-a*u*s-f*i*l+n*u*l+a*i*m-n*o*m)*S,e[12]=L*S,e[13]=(f*v*r-g*u*r+g*i*h-n*v*h-f*i*p+n*u*p)*S,e[14]=(g*o*r-a*v*r-g*i*c+n*v*c+a*i*p-n*o*p)*S,e[15]=(a*u*r-f*o*r+f*i*c-n*u*c-a*i*h+n*o*h)*S,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,f=a+a,u=o+o,h=s*l,m=s*f,g=s*u,v=a*f,p=a*u,d=o*u,_=c*l,y=c*f,b=c*u,L=i.x,H=i.y,S=i.z;return r[0]=(1-(v+d))*L,r[1]=(m+b)*L,r[2]=(g-y)*L,r[3]=0,r[4]=(m-b)*H,r[5]=(1-(h+d))*H,r[6]=(p+_)*H,r[7]=0,r[8]=(g+y)*S,r[9]=(p-_)*S,r[10]=(1-(h+v))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Ci.set(r[0],r[1],r[2]).length(),a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_t.copy(this);let l=1/s,f=1/a,u=1/o;return _t.elements[0]*=l,_t.elements[1]*=l,_t.elements[2]*=l,_t.elements[4]*=f,_t.elements[5]*=f,_t.elements[6]*=f,_t.elements[8]*=u,_t.elements[9]*=u,_t.elements[10]*=u,n.setFromRotationMatrix(_t),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=z3){let c=this.elements,l=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),h=(i+r)/(i-r),m,g;if(o===z3)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===D0)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=z3){let c=this.elements,l=1/(n-e),f=1/(i-r),u=1/(a-s),h=(n+e)*l,m=(i+r)*f,g,v;if(o===z3)g=(a+s)*u,v=-2*u;else if(o===D0)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ci=new R,_t=new n2,fV=new R(0,0,0),uV=new R(1,1,1),n4=new R,u0=new R,Y2=new R,Ng=new n2,Ig=new u4,Fi=(()=>{class t{constructor(n=0,i=0,r=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,i,r,s=this._order){return this._x=n,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,i=this._order,r=!0){let s=n.elements,a=s[0],o=s[4],c=s[8],l=s[1],f=s[5],u=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(P2(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-P2(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(P2(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-P2(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(P2(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-P2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(n,i,r){return Ng.makeRotationFromQuaternion(n),this.setFromRotationMatrix(Ng,i,r)}setFromVector3(n,i=this._order){return this.set(n.x,n.y,n.z,i)}reorder(n){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],i=0){return n[i]=this._x,n[i+1]=this._y,n[i+2]=this._z,n[i+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return t.DEFAULT_ORDER="XYZ",t})(),k0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hV=0,Rg=new R,yi=new u4,g3=new n2,h0=new R,f6=new R,dV=new R,pV=new u4,Pg=new R(1,0,0),kg=new R(0,1,0),Og=new R(0,0,1),mV={type:"added"},gV={type:"removed"},O7={type:"childadded",child:null},F7={type:"childremoved",child:null},ji=(()=>{class t extends f4{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hV++}),this.uuid=v6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let n=new R,i=new Fi,r=new u4,s=new R(1,1,1);function a(){r.setFromEuler(i,!1)}function o(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new n2},normalMatrix:{value:new X1}}),this.matrix=new n2,this.matrixWorld=new n2,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,i){this.quaternion.setFromAxisAngle(n,i)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,i){return yi.setFromAxisAngle(n,i),this.quaternion.multiply(yi),this}rotateOnWorldAxis(n,i){return yi.setFromAxisAngle(n,i),this.quaternion.premultiply(yi),this}rotateX(n){return this.rotateOnAxis(Pg,n)}rotateY(n){return this.rotateOnAxis(kg,n)}rotateZ(n){return this.rotateOnAxis(Og,n)}translateOnAxis(n,i){return Rg.copy(n).applyQuaternion(this.quaternion),this.position.add(Rg.multiplyScalar(i)),this}translateX(n){return this.translateOnAxis(Pg,n)}translateY(n){return this.translateOnAxis(kg,n)}translateZ(n){return this.translateOnAxis(Og,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(g3.copy(this.matrixWorld).invert())}lookAt(n,i,r){n.isVector3?h0.copy(n):h0.set(n,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),f6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?g3.lookAt(f6,h0,this.up):g3.lookAt(h0,f6,this.up),this.quaternion.setFromRotationMatrix(g3),s&&(g3.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(g3),this.quaternion.premultiply(yi.invert()))}add(n){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(mV),O7.child=n,this.dispatchEvent(O7),O7.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(n);return i!==-1&&(n.parent=null,this.children.splice(i,1),n.dispatchEvent(gV),F7.child=n,this.dispatchEvent(F7),F7.child=null),this}removeFromParent(){let n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),g3.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),g3.multiply(n.parent.matrixWorld)),n.applyMatrix4(g3),this.add(n),n.updateWorldMatrix(!1,!0),this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,i){if(this[n]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let o=this.children[r].getObjectByProperty(n,i);if(o!==void 0)return o}}getObjectsByProperty(n,i,r=[]){this[n]===i&&r.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(n,i,r);return r}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(f6,n,dV),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(f6,pV,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return n.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(n){n(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(n)}traverseAncestors(n){let i=this.parent;i!==null&&(n(i),i.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let a=i[r];(a.matrixWorldAutoUpdate===!0||n===!0)&&a.updateMatrixWorld(n)}}updateWorldMatrix(n,i){let r=this.parent;if(n===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++){let c=s[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(n){let i=n===void 0||typeof n=="string",r={};i&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(n),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(n)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(n.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){let h=l[f];a(n.shapes,h)}else a(n.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(n.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,f=this.material.length;l<f;l++)c.push(a(n.materials,this.material[l]));s.material=c}else s.material=a(n.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(n).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(a(n.animations,l))}}if(i){let c=o(n.geometries),l=o(n.materials),f=o(n.textures),u=o(n.images),h=o(n.shapes),m=o(n.skeletons),g=o(n.animations),v=o(n.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),f.length>0&&(r.textures=f),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function o(c){let l=[];for(let f in c){let u=c[f];delete u.metadata,l.push(u)}return l}}clone(n){return new this.constructor().copy(this,n)}copy(n,i=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),i===!0)for(let r=0;r<n.children.length;r++){let s=n.children[r];this.add(s.clone())}return this}}return t.DEFAULT_UP=new R(0,1,0),t.DEFAULT_MATRIX_AUTO_UPDATE=!0,t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,t})(),wt=new R,v3=new R,U7=new R,M3=new R,xi=new R,bi=new R,Fg=new R,B7=new R,G7=new R,W7=new R,Vi=class t{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wt.subVectors(e,n),r.cross(wt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wt.subVectors(r,n),v3.subVectors(i,n),U7.subVectors(e,n);let a=wt.dot(wt),o=wt.dot(v3),c=wt.dot(U7),l=v3.dot(v3),f=v3.dot(U7),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let h=1/u,m=(l*c-o*f)*h,g=(a*f-o*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,M3)===null?!1:M3.x>=0&&M3.y>=0&&M3.x+M3.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,M3)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,M3.x),c.addScaledVector(a,M3.y),c.addScaledVector(o,M3.z),c)}static isFrontFacing(e,n,i,r){return wt.subVectors(i,n),v3.subVectors(e,n),wt.cross(v3).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wt.subVectors(this.c,this.b),v3.subVectors(this.a,this.b),wt.cross(v3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,a,o;xi.subVectors(r,i),bi.subVectors(s,i),B7.subVectors(e,i);let c=xi.dot(B7),l=bi.dot(B7);if(c<=0&&l<=0)return n.copy(i);G7.subVectors(e,r);let f=xi.dot(G7),u=bi.dot(G7);if(f>=0&&u<=f)return n.copy(r);let h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(xi,a);W7.subVectors(e,s);let m=xi.dot(W7),g=bi.dot(W7);if(g>=0&&m<=g)return n.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(bi,o);let p=f*g-m*u;if(p<=0&&u-f>=0&&m-g>=0)return Fg.subVectors(s,r),o=(u-f)/(u-f+(m-g)),n.copy(r).addScaledVector(Fg,o);let d=1/(p+v+h);return a=v*d,o=h*d,n.copy(i).addScaledVector(xi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},i4={h:0,s:0,l:0},d0={h:0,s:0,l:0};function j7(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ue=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ce.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ce.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ce.workingColorSpace){if(e=iV(e,1),n=P2(n,0,1),i=P2(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=j7(a,s,e+1/3),this.g=j7(a,s,e),this.b=j7(a,s,e-1/3)}return Ce.toWorkingColorSpace(this,r),this}setStyle(e,n=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yt){let i=Hv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=A7(e.r),this.g=A7(e.g),this.b=A7(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ce.fromWorkingColorSpace(x2.copy(this),e),Math.round(P2(x2.r*255,0,255))*65536+Math.round(P2(x2.g*255,0,255))*256+Math.round(P2(x2.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ce.workingColorSpace){Ce.fromWorkingColorSpace(x2.copy(this),n);let i=x2.r,r=x2.g,s=x2.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,f=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,n=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(x2.copy(this),n),e.r=x2.r,e.g=x2.g,e.b=x2.b,e}getStyle(e=Yt){Ce.fromWorkingColorSpace(x2.copy(this),e);let n=x2.r,i=x2.g,r=x2.b;return e!==Yt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(i4),this.setHSL(i4.h+e,i4.s+n,i4.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(i4),e.getHSL(d0);let i=E7(i4.h,d0.h,n),r=E7(i4.s,d0.s,n),s=E7(i4.l,d0.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},x2=new ue;ue.NAMES=Hv;var vV=0,Ui=class extends f4{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vV++}),this.uuid=v6(),this.name="",this.type="Material",this.blending=Ni,this.side=l4,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=K4,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=H0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==l4&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==K4&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==H0&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},O0=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $e=new R,p0=new oe,ct=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=b3,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sV("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)p0.fromBufferAttribute(this,n),p0.applyMatrix3(e),this.setXY(n,p0.x,p0.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix3(e),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix4(e),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyNormalMatrix(e),this.setXYZ(n,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.transformDirection(e),this.setXYZ(n,$e.x,$e.y,$e.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=o6(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=I2(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=o6(n,this.array)),n}setX(e,n){return this.normalized&&(n=I2(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=o6(n,this.array)),n}setY(e,n){return this.normalized&&(n=I2(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=o6(n,this.array)),n}setZ(e,n){return this.normalized&&(n=I2(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=o6(n,this.array)),n}setW(e,n){return this.normalized&&(n=I2(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=I2(n,this.array),i=I2(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=I2(n,this.array),i=I2(i,this.array),r=I2(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=I2(n,this.array),i=I2(i,this.array),r=I2(r,this.array),s=I2(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hg&&(e.usage=this.usage),e}};var F0=class extends ct{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var U0=class extends ct{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var lt=class extends ct{constructor(e,n,i){super(new Float32Array(e),n,i)}},MV=0,ot=new n2,q7=new ji,zi=new R,Z2=new sn,u6=new sn,t2=new R,_3=class t extends f4{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MV++}),this.uuid=v6(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?U0:F0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new X1().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ot.makeRotationFromQuaternion(e),this.applyMatrix4(ot),this}rotateX(e){return ot.makeRotationX(e),this.applyMatrix4(ot),this}rotateY(e){return ot.makeRotationY(e),this.applyMatrix4(ot),this}rotateZ(e){return ot.makeRotationZ(e),this.applyMatrix4(ot),this}translate(e,n,i){return ot.makeTranslation(e,n,i),this.applyMatrix4(ot),this}scale(e,n,i){return ot.makeScale(e,n,i),this.applyMatrix4(ot),this}lookAt(e){return q7.lookAt(e),q7.updateMatrix(),this.applyMatrix4(q7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Z2.setFromBufferAttribute(s),this.morphTargetsRelative?(t2.addVectors(this.boundingBox.min,Z2.min),this.boundingBox.expandByPoint(t2),t2.addVectors(this.boundingBox.max,Z2.max),this.boundingBox.expandByPoint(t2)):(this.boundingBox.expandByPoint(Z2.min),this.boundingBox.expandByPoint(Z2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new d6);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Z2.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){let o=n[s];u6.setFromBufferAttribute(o),this.morphTargetsRelative?(t2.addVectors(Z2.min,u6.min),Z2.expandByPoint(t2),t2.addVectors(Z2.max,u6.max),Z2.expandByPoint(t2)):(Z2.expandByPoint(u6.min),Z2.expandByPoint(u6.max))}Z2.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)t2.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(t2));if(n)for(let s=0,a=n.length;s<a;s++){let o=n[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)t2.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),t2.add(zi)),r=Math.max(r,i.distanceToSquared(t2))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<i.count;k++)o[k]=new R,c[k]=new R;let l=new R,f=new R,u=new R,h=new oe,m=new oe,g=new oe,v=new R,p=new R;function d(k,Z,C){l.fromBufferAttribute(i,k),f.fromBufferAttribute(i,Z),u.fromBufferAttribute(i,C),h.fromBufferAttribute(s,k),m.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,C),f.sub(l),u.sub(l),m.sub(h),g.sub(h);let w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(w),o[k].add(v),o[Z].add(v),o[C].add(v),c[k].add(p),c[Z].add(p),c[C].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,Z=_.length;k<Z;++k){let C=_[k],w=C.start,t1=C.count;for(let Q=w,V=w+t1;Q<V;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}let y=new R,b=new R,L=new R,H=new R;function S(k){L.fromBufferAttribute(r,k),H.copy(L);let Z=o[k];y.copy(Z),y.sub(L.multiplyScalar(L.dot(Z))).normalize(),b.crossVectors(H,Z);let w=b.dot(c[k])<0?-1:1;a.setXYZW(k,y.x,y.y,y.z,w)}for(let k=0,Z=_.length;k<Z;++k){let C=_[k],w=C.start,t1=C.count;for(let Q=w,V=w+t1;Q<V;Q+=3)S(e.getX(Q+0)),S(e.getX(Q+1)),S(e.getX(Q+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ct(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new R,s=new R,a=new R,o=new R,c=new R,l=new R,f=new R,u=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,p),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(f),c.add(f),l.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)t2.fromBufferAttribute(e,n),t2.normalize(),e.setXYZ(n,t2.x,t2.y,t2.z)}toNonIndexed(){function e(o,c){let l=o.array,f=o.itemSize,u=o.normalized,h=new l.constructor(c.length*f),m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*f;for(let d=0;d<f;d++)h[g++]=l[m++]}return new ct(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);n.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){let h=l[f],m=e(h,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){let m=l[u];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let l in r){let f=r[l];this.setAttribute(l,f.clone(n))}let s=e.morphAttributes;for(let l in s){let f=[],u=s[l];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(n));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,f=a.length;l<f;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ug=new n2,$4=new ul,m0=new d6,Bg=new R,_i=new R,wi=new R,Si=new R,$7=new R,g0=new R,v0=new oe,M0=new oe,C0=new oe,Gg=new R,Wg=new R,jg=new R,y0=new R,x0=new R,d2=class extends ji{constructor(e=new _3,n=new O0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){g0.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let f=o[c],u=s[c];f!==0&&($7.fromBufferAttribute(u,e),a?g0.addScaledVector($7,f):g0.addScaledVector($7.sub(n),f))}n.add(g0)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),m0.copy(i.boundingSphere),m0.applyMatrix4(s),$4.copy(e.ray).recast(e.near),!(m0.containsPoint($4.origin)===!1&&($4.intersectSphere(m0,Bg)===null||$4.origin.distanceToSquared(Bg)>(e.far-e.near)**2))&&(Ug.copy(s).invert(),$4.copy(e.ray).applyMatrix4(Ug),!(i.boundingBox!==null&&$4.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$4)))}_computeIntersections(e,n,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],d=a[p.materialIndex],_=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,L=y;b<L;b+=3){let H=o.getX(b),S=o.getX(b+1),k=o.getX(b+2);r=b0(this,d,e,i,l,f,u,H,S,k),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let _=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);r=b0(this,a,e,i,l,f,u,_,y,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],d=a[p.materialIndex],_=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,L=y;b<L;b+=3){let H=b,S=b+1,k=b+2;r=b0(this,d,e,i,l,f,u,H,S,k),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let _=p,y=p+1,b=p+2;r=b0(this,a,e,i,l,f,u,_,y,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}};function CV(t,e,n,i,r,s,a,o){let c;if(e.side===k2?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===l4,o),c===null)return null;x0.copy(o),x0.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(x0);return l<n.near||l>n.far?null:{distance:l,point:x0.clone(),object:t}}function b0(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,_i),t.getVertexPosition(c,wi),t.getVertexPosition(l,Si);let f=CV(t,e,n,i,_i,wi,Si,y0);if(f){r&&(v0.fromBufferAttribute(r,o),M0.fromBufferAttribute(r,c),C0.fromBufferAttribute(r,l),f.uv=Vi.getInterpolation(y0,_i,wi,Si,v0,M0,C0,new oe)),s&&(v0.fromBufferAttribute(s,o),M0.fromBufferAttribute(s,c),C0.fromBufferAttribute(s,l),f.uv1=Vi.getInterpolation(y0,_i,wi,Si,v0,M0,C0,new oe)),a&&(Gg.fromBufferAttribute(a,o),Wg.fromBufferAttribute(a,c),jg.fromBufferAttribute(a,l),f.normal=Vi.getInterpolation(y0,_i,wi,Si,Gg,Wg,jg,new R),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new R,materialIndex:0};Vi.getNormal(_i,wi,Si,u.normal),f.face=u}return f}var p6=class t extends _3{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],f=[],u=[],h=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(u,2));function g(v,p,d,_,y,b,L,H,S,k,Z){let C=b/S,w=L/k,t1=b/2,Q=L/2,V=H/2,W=S+1,U=k+1,$=0,B=0,q=new R;for(let X=0;X<U;X++){let r1=X*w-Q;for(let p1=0;p1<W;p1++){let B1=p1*C-t1;q[v]=B1*_,q[p]=r1*y,q[d]=V,l.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[d]=H>0?1:-1,f.push(q.x,q.y,q.z),u.push(p1/S),u.push(1-X/k),$+=1}}for(let X=0;X<k;X++)for(let r1=0;r1<S;r1++){let p1=h+r1+W*X,B1=h+r1+W*(X+1),O=h+(r1+1)+W*(X+1),J=h+(r1+1)+W*X;c.push(p1,B1,J),c.push(B1,O,J),B+=6}o.addGroup(m,B,Z),m+=B,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function V2(t){let e={};for(let n=0;n<t.length;n++){let i=Bi(t[n]);for(let r in i)e[r]=i[r]}return e}function yV(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lv(t){return t.getRenderTarget()===null?t.outputColorSpace:Ce.workingColorSpace}var Pl={clone:Bi,merge:V2},xV=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bV=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,p2=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xV,this.fragmentShader=bV,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=yV(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},B0=class extends ji{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new n2,this.projectionMatrix=new n2,this.projectionMatrixInverse=new n2,this.coordinateSystem=z3}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},r4=new R,qg=new oe,$g=new oe,u2=class extends B0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(L7*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(L7*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){r4.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(r4.x,r4.y).multiplyScalar(-e/r4.z),r4.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(r4.x,r4.y).multiplyScalar(-e/r4.z)}getViewSize(e,n){return this.getViewBounds(e,qg,$g),n.subVectors($g,qg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(L7*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Hi=-90,Li=1,hl=class extends ji{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new u2(Hi,Li,e,n);r.layers=this.layers,this.add(r);let s=new u2(Hi,Li,e,n);s.layers=this.layers,this.add(s);let a=new u2(Hi,Li,e,n);a.layers=this.layers,this.add(a);let o=new u2(Hi,Li,e,n);o.layers=this.layers,this.add(o);let c=new u2(Hi,Li,e,n);c.layers=this.layers,this.add(c);let l=new u2(Hi,Li,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(let l of n)this.remove(l);if(e===z3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===D0)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(u,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},G0=class extends ln{constructor(e,n,i,r,s,a,o,c,l,f){e=e!==void 0?e:[],n=n!==void 0?n:Pi,super(e,n,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dl=class extends Lt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new G0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:R2}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new p6(5,5,5),s=new p2({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:k2,blending:Jt});s.uniforms.tEquirect.value=n;let a=new d2(r,s),o=n.minFilter;return n.minFilter===en&&(n.minFilter=R2),new hl(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}},X7=new R,zV=new R,_V=new X1,y3=class{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=X7.subVectors(i,n).cross(zV.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(X7),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||_V.getNormalMatrix(e),r=this.coplanarPoint(X7).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},X4=new d6,z0=new R,W0=class{constructor(e=new y3,n=new y3,i=new y3,r=new y3,s=new y3,a=new y3){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=z3){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],f=r[5],u=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],d=r[12],_=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-s,h-l,p-m,b-d).normalize(),i[1].setComponents(c+s,h+l,p+m,b+d).normalize(),i[2].setComponents(c+a,h+f,p+g,b+_).normalize(),i[3].setComponents(c-a,h-f,p-g,b-_).normalize(),i[4].setComponents(c-o,h-u,p-v,b-y).normalize(),n===z3)i[5].setComponents(c+o,h+u,p+v,b+y).normalize();else if(n===D0)i[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),X4.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),X4.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(X4)}intersectsSprite(e){return X4.center.set(0,0,0),X4.radius=.7071067811865476,X4.applyMatrix4(e.matrixWorld),this.intersectsSphere(X4)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(z0.x=r.normal.x>0?e.max.x:e.min.x,z0.y=r.normal.y>0?e.max.y:e.min.y,z0.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(z0)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ev(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wV(t,e){let n=e.isWebGL2,i=new WeakMap;function r(l,f){let u=l.array,h=l.usage,m=u.byteLength,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,u,h),l.onUploadCallback();let v;if(u instanceof Float32Array)v=t.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=t.SHORT;else if(u instanceof Uint32Array)v=t.UNSIGNED_INT;else if(u instanceof Int32Array)v=t.INT;else if(u instanceof Int8Array)v=t.BYTE;else if(u instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,f,u){let h=f.array,m=f._updateRange,g=f.updateRanges;if(t.bindBuffer(u,l),m.count===-1&&g.length===0&&t.bufferSubData(u,0,h),g.length!==0){for(let v=0,p=g.length;v<p;v++){let d=g[v];n?t.bufferSubData(u,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(u,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let f=i.get(l);f&&(t.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,r(l,f));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,f),u.version=l.version}}return{get:a,remove:o,update:c}}var h4=class t extends _3{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,u=e/o,h=n/c,m=[],g=[],v=[],p=[];for(let d=0;d<f;d++){let _=d*h-a;for(let y=0;y<l;y++){let b=y*u-s;g.push(b,-_,0),v.push(0,0,1),p.push(y/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let y=_+l*d,b=_+l*(d+1),L=_+1+l*(d+1),H=_+1+l*d;m.push(y,b,H),m.push(b,L,H)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},SV=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HV=`#ifdef USE_ALPHAHASH
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
#endif`,LV=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EV=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VV=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AV=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TV=`#ifdef USE_AOMAP
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
#endif`,DV=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NV=`#ifdef USE_BATCHING
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
#endif`,IV=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,RV=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PV=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kV=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OV=`#ifdef USE_IRIDESCENCE
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
#endif`,FV=`#ifdef USE_BUMPMAP
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
#endif`,UV=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BV=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GV=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WV=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jV=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qV=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$V=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,XV=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,YV=`#define PI 3.141592653589793
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
} // validated`,ZV=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JV=`vec3 transformedNormal = objectNormal;
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
#endif`,KV=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QV=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nA="gl_FragColor = linearToOutputTexel( gl_FragColor );",iA=`
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
}`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aA=`#ifdef USE_ENVMAP
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
#endif`,oA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dA=`#ifdef USE_GRADIENTMAP
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
}`,pA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
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
#endif`,CA=`#ifdef USE_ENVMAP
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
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
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
#endif`,wA=`struct PhysicalMaterial {
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
}`,SA=`
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
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
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,DA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RA=`#if defined( USE_POINTS_UV )
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
#endif`,PA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UA=`#ifdef USE_MORPHNORMALS
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
#endif`,BA=`#ifdef USE_MORPHTARGETS
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
#endif`,GA=`#ifdef USE_MORPHTARGETS
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
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YA=`#ifdef USE_NORMALMAP
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
#endif`,ZA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uT=`float getShadowMask() {
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
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,xT=`#ifdef USE_TRANSMISSION
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
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
}`,DT=`#if DEPTH_PACKING == 3200
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
}`,NT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`uniform float scale;
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
}`,OT=`uniform vec3 diffuse;
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
}`,FT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,BT=`#define LAMBERT
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
}`,GT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,jT=`#define MATCAP
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
}`,qT=`#define NORMAL
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
}`,$T=`#define NORMAL
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
}`,XT=`#define PHONG
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
}`,YT=`#define PHONG
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
}`,ZT=`#define STANDARD
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
}`,JT=`#define STANDARD
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
}`,KT=`#define TOON
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
}`,QT=`#define TOON
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
}`,eD=`uniform float size;
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
}`,tD=`uniform vec3 diffuse;
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
}`,nD=`#include <common>
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
}`,iD=`uniform vec3 color;
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
}`,rD=`uniform float rotation;
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
}`,sD=`uniform vec3 diffuse;
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
}`,$1={alphahash_fragment:SV,alphahash_pars_fragment:HV,alphamap_fragment:LV,alphamap_pars_fragment:EV,alphatest_fragment:VV,alphatest_pars_fragment:AV,aomap_fragment:TV,aomap_pars_fragment:DV,batching_pars_vertex:NV,batching_vertex:IV,begin_vertex:RV,beginnormal_vertex:PV,bsdfs:kV,iridescence_fragment:OV,bumpmap_pars_fragment:FV,clipping_planes_fragment:UV,clipping_planes_pars_fragment:BV,clipping_planes_pars_vertex:GV,clipping_planes_vertex:WV,color_fragment:jV,color_pars_fragment:qV,color_pars_vertex:$V,color_vertex:XV,common:YV,cube_uv_reflection_fragment:ZV,defaultnormal_vertex:JV,displacementmap_pars_vertex:KV,displacementmap_vertex:QV,emissivemap_fragment:eA,emissivemap_pars_fragment:tA,colorspace_fragment:nA,colorspace_pars_fragment:iA,envmap_fragment:rA,envmap_common_pars_fragment:sA,envmap_pars_fragment:aA,envmap_pars_vertex:oA,envmap_physical_pars_fragment:CA,envmap_vertex:cA,fog_vertex:lA,fog_pars_vertex:fA,fog_fragment:uA,fog_pars_fragment:hA,gradientmap_pars_fragment:dA,lightmap_fragment:pA,lightmap_pars_fragment:mA,lights_lambert_fragment:gA,lights_lambert_pars_fragment:vA,lights_pars_begin:MA,lights_toon_fragment:yA,lights_toon_pars_fragment:xA,lights_phong_fragment:bA,lights_phong_pars_fragment:zA,lights_physical_fragment:_A,lights_physical_pars_fragment:wA,lights_fragment_begin:SA,lights_fragment_maps:HA,lights_fragment_end:LA,logdepthbuf_fragment:EA,logdepthbuf_pars_fragment:VA,logdepthbuf_pars_vertex:AA,logdepthbuf_vertex:TA,map_fragment:DA,map_pars_fragment:NA,map_particle_fragment:IA,map_particle_pars_fragment:RA,metalnessmap_fragment:PA,metalnessmap_pars_fragment:kA,morphinstance_vertex:OA,morphcolor_vertex:FA,morphnormal_vertex:UA,morphtarget_pars_vertex:BA,morphtarget_vertex:GA,normal_fragment_begin:WA,normal_fragment_maps:jA,normal_pars_fragment:qA,normal_pars_vertex:$A,normal_vertex:XA,normalmap_pars_fragment:YA,clearcoat_normal_fragment_begin:ZA,clearcoat_normal_fragment_maps:JA,clearcoat_pars_fragment:KA,iridescence_pars_fragment:QA,opaque_fragment:eT,packing:tT,premultiplied_alpha_fragment:nT,project_vertex:iT,dithering_fragment:rT,dithering_pars_fragment:sT,roughnessmap_fragment:aT,roughnessmap_pars_fragment:oT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:lT,shadowmap_vertex:fT,shadowmask_pars_fragment:uT,skinbase_vertex:hT,skinning_pars_vertex:dT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:vT,tonemapping_fragment:MT,tonemapping_pars_fragment:CT,transmission_fragment:yT,transmission_pars_fragment:xT,uv_pars_fragment:bT,uv_pars_vertex:zT,uv_vertex:_T,worldpos_vertex:wT,background_vert:ST,background_frag:HT,backgroundCube_vert:LT,backgroundCube_frag:ET,cube_vert:VT,cube_frag:AT,depth_vert:TT,depth_frag:DT,distanceRGBA_vert:NT,distanceRGBA_frag:IT,equirect_vert:RT,equirect_frag:PT,linedashed_vert:kT,linedashed_frag:OT,meshbasic_vert:FT,meshbasic_frag:UT,meshlambert_vert:BT,meshlambert_frag:GT,meshmatcap_vert:WT,meshmatcap_frag:jT,meshnormal_vert:qT,meshnormal_frag:$T,meshphong_vert:XT,meshphong_frag:YT,meshphysical_vert:ZT,meshphysical_frag:JT,meshtoon_vert:KT,meshtoon_frag:QT,points_vert:eD,points_frag:tD,shadow_vert:nD,shadow_frag:iD,sprite_vert:rD,sprite_frag:sD},i1={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X1},alphaMap:{value:null},alphaMapTransform:{value:new X1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X1}},envmap:{envMap:{value:null},envMapRotation:{value:new X1},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X1},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X1},alphaTest:{value:0},uvTransform:{value:new X1}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X1},alphaMap:{value:null},alphaMapTransform:{value:new X1},alphaTest:{value:0}}},Zt={basic:{uniforms:V2([i1.common,i1.specularmap,i1.envmap,i1.aomap,i1.lightmap,i1.fog]),vertexShader:$1.meshbasic_vert,fragmentShader:$1.meshbasic_frag},lambert:{uniforms:V2([i1.common,i1.specularmap,i1.envmap,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.fog,i1.lights,{emissive:{value:new ue(0)}}]),vertexShader:$1.meshlambert_vert,fragmentShader:$1.meshlambert_frag},phong:{uniforms:V2([i1.common,i1.specularmap,i1.envmap,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.fog,i1.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:$1.meshphong_vert,fragmentShader:$1.meshphong_frag},standard:{uniforms:V2([i1.common,i1.envmap,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.roughnessmap,i1.metalnessmap,i1.fog,i1.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$1.meshphysical_vert,fragmentShader:$1.meshphysical_frag},toon:{uniforms:V2([i1.common,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.gradientmap,i1.fog,i1.lights,{emissive:{value:new ue(0)}}]),vertexShader:$1.meshtoon_vert,fragmentShader:$1.meshtoon_frag},matcap:{uniforms:V2([i1.common,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.fog,{matcap:{value:null}}]),vertexShader:$1.meshmatcap_vert,fragmentShader:$1.meshmatcap_frag},points:{uniforms:V2([i1.points,i1.fog]),vertexShader:$1.points_vert,fragmentShader:$1.points_frag},dashed:{uniforms:V2([i1.common,i1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$1.linedashed_vert,fragmentShader:$1.linedashed_frag},depth:{uniforms:V2([i1.common,i1.displacementmap]),vertexShader:$1.depth_vert,fragmentShader:$1.depth_frag},normal:{uniforms:V2([i1.common,i1.bumpmap,i1.normalmap,i1.displacementmap,{opacity:{value:1}}]),vertexShader:$1.meshnormal_vert,fragmentShader:$1.meshnormal_frag},sprite:{uniforms:V2([i1.sprite,i1.fog]),vertexShader:$1.sprite_vert,fragmentShader:$1.sprite_frag},background:{uniforms:{uvTransform:{value:new X1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$1.background_vert,fragmentShader:$1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X1}},vertexShader:$1.backgroundCube_vert,fragmentShader:$1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$1.cube_vert,fragmentShader:$1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$1.equirect_vert,fragmentShader:$1.equirect_frag},distanceRGBA:{uniforms:V2([i1.common,i1.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$1.distanceRGBA_vert,fragmentShader:$1.distanceRGBA_frag},shadow:{uniforms:V2([i1.lights,i1.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:$1.shadow_vert,fragmentShader:$1.shadow_frag}};Zt.physical={uniforms:V2([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X1},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X1},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X1},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X1},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X1},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X1},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X1}}]),vertexShader:$1.meshphysical_vert,fragmentShader:$1.meshphysical_frag};var _0={r:0,b:0,g:0},Y4=new Fi,aD=new n2;function oD(t,e,n,i,r,s,a){let o=new ue(0),c=s===!0?0:1,l,f,u=null,h=0,m=null;function g(p,d){let _=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?n:e).get(y)),y===null?v(o,c):y&&y.isColor&&(v(y,1),_=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===X0)?(f===void 0&&(f=new d2(new p6(1,1,1),new p2({name:"BackgroundCubeMaterial",uniforms:Bi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:k2,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,H,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Y4.copy(d.backgroundRotation),Y4.x*=-1,Y4.y*=-1,Y4.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Y4.y*=-1,Y4.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(aD.makeRotationFromEuler(Y4)),f.material.toneMapped=Ce.getTransfer(y.colorSpace)!==Le,(u!==y||h!==y.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new d2(new h4(2,2),new p2({name:"BackgroundMaterial",uniforms:Bi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:l4,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(y.colorSpace)!==Le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,m=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){p.getRGB(_0,Lv(t)),i.buffers.color.setClear(_0.r,_0.g,_0.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:g}}function cD(t,e,n,i){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=p(null),l=c,f=!1;function u(V,W,U,$,B){let q=!1;if(a){let X=v($,U,W);l!==X&&(l=X,m(l.object)),q=d(V,$,U,B),q&&_(V,$,U,B)}else{let X=W.wireframe===!0;(l.geometry!==$.id||l.program!==U.id||l.wireframe!==X)&&(l.geometry=$.id,l.program=U.id,l.wireframe=X,q=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(q||f)&&(f=!1,k(V,W,U,$),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(V){return i.isWebGL2?t.bindVertexArray(V):s.bindVertexArrayOES(V)}function g(V){return i.isWebGL2?t.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function v(V,W,U){let $=U.wireframe===!0,B=o[V.id];B===void 0&&(B={},o[V.id]=B);let q=B[W.id];q===void 0&&(q={},B[W.id]=q);let X=q[$];return X===void 0&&(X=p(h()),q[$]=X),X}function p(V){let W=[],U=[],$=[];for(let B=0;B<r;B++)W[B]=0,U[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:U,attributeDivisors:$,object:V,attributes:{},index:null}}function d(V,W,U,$){let B=l.attributes,q=W.attributes,X=0,r1=U.getAttributes();for(let p1 in r1)if(r1[p1].location>=0){let O=B[p1],J=q[p1];if(J===void 0&&(p1==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),p1==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;X++}return l.attributesNum!==X||l.index!==$}function _(V,W,U,$){let B={},q=W.attributes,X=0,r1=U.getAttributes();for(let p1 in r1)if(r1[p1].location>=0){let O=q[p1];O===void 0&&(p1==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),p1==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));let J={};J.attribute=O,O&&O.data&&(J.data=O.data),B[p1]=J,X++}l.attributes=B,l.attributesNum=X,l.index=$}function y(){let V=l.newAttributes;for(let W=0,U=V.length;W<U;W++)V[W]=0}function b(V){L(V,0)}function L(V,W){let U=l.newAttributes,$=l.enabledAttributes,B=l.attributeDivisors;U[V]=1,$[V]===0&&(t.enableVertexAttribArray(V),$[V]=1),B[V]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),B[V]=W)}function H(){let V=l.newAttributes,W=l.enabledAttributes;for(let U=0,$=W.length;U<$;U++)W[U]!==V[U]&&(t.disableVertexAttribArray(U),W[U]=0)}function S(V,W,U,$,B,q,X){X===!0?t.vertexAttribIPointer(V,W,U,B,q):t.vertexAttribPointer(V,W,U,$,B,q)}function k(V,W,U,$){if(i.isWebGL2===!1&&(V.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let B=$.attributes,q=U.getAttributes(),X=W.defaultAttributeValues;for(let r1 in q){let p1=q[r1];if(p1.location>=0){let B1=B[r1];if(B1===void 0&&(r1==="instanceMatrix"&&V.instanceMatrix&&(B1=V.instanceMatrix),r1==="instanceColor"&&V.instanceColor&&(B1=V.instanceColor)),B1!==void 0){let O=B1.normalized,J=B1.itemSize,h1=n.get(B1);if(h1===void 0)continue;let N1=h1.buffer,b1=h1.type,m1=h1.bytesPerElement,me=i.isWebGL2===!0&&(b1===t.INT||b1===t.UNSIGNED_INT||B1.gpuType===Mv);if(B1.isInterleavedBufferAttribute){let I1=B1.data,T=I1.stride,i2=B1.offset;if(I1.isInstancedInterleavedBuffer){for(let w1=0;w1<p1.locationSize;w1++)L(p1.location+w1,I1.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=I1.meshPerAttribute*I1.count)}else for(let w1=0;w1<p1.locationSize;w1++)b(p1.location+w1);t.bindBuffer(t.ARRAY_BUFFER,N1);for(let w1=0;w1<p1.locationSize;w1++)S(p1.location+w1,J/p1.locationSize,b1,O,T*m1,(i2+J/p1.locationSize*w1)*m1,me)}else{if(B1.isInstancedBufferAttribute){for(let I1=0;I1<p1.locationSize;I1++)L(p1.location+I1,B1.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=B1.meshPerAttribute*B1.count)}else for(let I1=0;I1<p1.locationSize;I1++)b(p1.location+I1);t.bindBuffer(t.ARRAY_BUFFER,N1);for(let I1=0;I1<p1.locationSize;I1++)S(p1.location+I1,J/p1.locationSize,b1,O,J*m1,J/p1.locationSize*I1*m1,me)}}else if(X!==void 0){let O=X[r1];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(p1.location,O);break;case 3:t.vertexAttrib3fv(p1.location,O);break;case 4:t.vertexAttrib4fv(p1.location,O);break;default:t.vertexAttrib1fv(p1.location,O)}}}}H()}function Z(){t1();for(let V in o){let W=o[V];for(let U in W){let $=W[U];for(let B in $)g($[B].object),delete $[B];delete W[U]}delete o[V]}}function C(V){if(o[V.id]===void 0)return;let W=o[V.id];for(let U in W){let $=W[U];for(let B in $)g($[B].object),delete $[B];delete W[U]}delete o[V.id]}function w(V){for(let W in o){let U=o[W];if(U[V.id]===void 0)continue;let $=U[V.id];for(let B in $)g($[B].object),delete $[B];delete U[V.id]}}function t1(){Q(),f=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:t1,resetDefaultState:Q,dispose:Z,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:b,disableUnusedAttributes:H}}function lD(t,e,n,i){let r=i.isWebGL2,s;function a(f){s=f}function o(f,u){t.drawArrays(s,f,u),n.update(u,s,1)}function c(f,u,h){if(h===0)return;let m,g;if(r)m=t,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,f,u,h),n.update(u,s,h)}function l(f,u,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(f[g],u[g]);else{m.multiDrawArraysWEBGL(s,f,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];n.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function fD(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext",o=n.precision!==void 0?n.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,b=a||e.has("OES_texture_float"),L=y&&b,H=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:H}}function uD(t){let e=this,n=null,i=0,r=!1,s=!1,a=new y3,o=new X1,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let m=u.length!==0||h||i!==0||r;return r=h,i=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=t.get(u);if(!r||g===null||g.length===0||s&&!p)s?f(null):l();else{let _=s?0:i,y=_*4,b=d.clippingState||null;c.value=b,b=f(g,h,y,m);for(let L=0;L!==y;++L)b[L]=n[L];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let d=m+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,b=m;y!==v;++y,b+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function hD(t){let e=new WeakMap;function n(a,o){return o===nl?a.mapping=Pi:o===il&&(a.mapping=ki),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===nl||o===il)if(e.has(a)){let c=e.get(a).texture;return n(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new dl(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var m6=class extends B0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Ai=4,Xg=[.125,.215,.35,.446,.526,.582],Q4=20,Y7=new m6,Yg=new ue,Z7=null,J7=0,K7=0,J4=(1+Math.sqrt(5))/2,Ei=1/J4,Zg=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,J4,Ei),new R(0,J4,-Ei),new R(Ei,0,J4),new R(-Ei,0,J4),new R(J4,Ei,0),new R(-J4,Ei,0)],j0=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Z7=this._renderer.getRenderTarget(),J7=this._renderer.getActiveCubeFace(),K7=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Z7,J7,K7),e.scissorTest=!1,w0(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Pi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Z7=this._renderer.getRenderTarget(),J7=this._renderer.getActiveCubeFace(),K7=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:R2,minFilter:R2,generateMipmaps:!1,type:rn,format:Ht,colorSpace:d4,depthBuffer:!1},r=Jg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dD(s)),this._blurMaterial=pD(s,e,n)}return r}_compileMaterial(e){let n=new d2(this._lodPlanes[0],e);this._renderer.compile(n,Y7)}_sceneToCubeUV(e,n,i,r){let o=new u2(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Yg),f.toneMapping=o4,f.autoClear=!1;let m=new O0({name:"PMREM.Background",side:k2,depthWrite:!1,depthTest:!1}),g=new d2(new p6,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Yg),v=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let y=this._cubeSize;w0(r,_*y,d>2?y:0,y,y),f.setRenderTarget(r),v&&f.render(g,o),f.render(e,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Pi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new d2(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;w0(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Y7)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zg[(r-1)%Zg.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,u=new d2(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Q4-1),v=s/g,p=isFinite(s)?1+Math.floor(f*v):Q4;p>Q4&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Q4}`);let d=[],_=0;for(let S=0;S<Q4;++S){let k=S/v,Z=Math.exp(-k*k/2);d.push(Z),S===0?_+=Z:S<p&&(_+=2*Z)}for(let S=0;S<d.length;S++)d[S]=d[S]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;let b=this._sizeLods[r],L=3*b*(r>y-Ai?r-y+Ai:0),H=4*(this._cubeSize-b);w0(n,L,H,3*b,2*b),c.setRenderTarget(n),c.render(u,Y7)}};function dD(t){let e=[],n=[],i=[],r=t,s=t-Ai+1+Xg.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);n.push(o);let c=1/o;a>t-Ai?c=Xg[a-t+Ai-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,g=6,v=3,p=2,d=1,_=new Float32Array(v*g*m),y=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let H=0;H<m;H++){let S=H%3*2/3-1,k=H>2?0:-1,Z=[S,k,0,S+2/3,k,0,S+2/3,k+1,0,S,k,0,S+2/3,k+1,0,S,k+1,0];_.set(Z,v*g*H),y.set(h,p*g*H);let C=[H,H,H,H,H,H];b.set(C,d*g*H)}let L=new _3;L.setAttribute("position",new ct(_,v)),L.setAttribute("uv",new ct(y,p)),L.setAttribute("faceIndex",new ct(b,d)),e.push(L),r>Ai&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jg(t,e,n){let i=new Lt(t,e,n);return i.texture.mapping=X0,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function w0(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pD(t,e,n){let i=new Float32Array(Q4),r=new R(0,1,0);return new p2({name:"SphericalGaussianBlur",defines:{n:Q4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Kg(){return new p2({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Qg(){return new p2({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function mD(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===nl||c===il,f=c===Pi||c===ki;if(l||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return n===null&&(n=new j0(t)),u=l?n.fromEquirectangular(o,u):n.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||f&&u&&r(u)){n===null&&(n=new j0(t));let h=l?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0,l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gD(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vD(t,e,n,i){let r={},s=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(u){let h=u.attributes;for(let g in h)e.update(h[g],t.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],t.ARRAY_BUFFER)}}function l(u){let h=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let _=m.array;v=m.version;for(let y=0,b=_.length;y<b;y+=3){let L=_[y+0],H=_[y+1],S=_[y+2];h.push(L,H,H,S,S,L)}}else if(g!==void 0){let _=g.array;v=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let L=y+0,H=y+1,S=y+2;h.push(L,H,H,S,S,L)}}else return;let p=new(Sv(h)?U0:F0)(h,1);p.version=v;let d=s.get(u);d&&e.remove(d),s.set(u,p)}function f(u){let h=s.get(u);if(h){let m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function MD(t,e,n,i){let r=i.isWebGL2,s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function f(m,g){t.drawElements(s,g,o,m*c),n.update(g,s,1)}function u(m,g,v){if(v===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,o,m*c,v),n.update(g,s,v)}function h(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,o,m,0,v);let d=0;for(let _=0;_<v;_++)d+=g[_];n.update(d,s,1)}}this.setMode=a,this.setIndex=l,this.render=f,this.renderInstances=u,this.renderMultiDraw=h}function CD(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yD(t,e){return t[0]-e[0]}function xD(t,e){return Math.abs(e[1])-Math.abs(t[1])}function bD(t,e,n){let i={},r=new Float32Array(8),s=new WeakMap,a=new h2,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,f,u){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0,p=s.get(f);if(p===void 0||p.count!==v){let Q=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",Q)};var m=Q;p!==void 0&&p.texture.dispose();let d=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],H=f.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),y===!0&&(S=3);let k=f.attributes.position.count*S,Z=1;k>e.maxTextureSize&&(Z=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let C=new Float32Array(k*Z*4*v),w=new P0(C,k,Z,v);w.type=b3,w.needsUpdate=!0;let t1=S*4;for(let V=0;V<v;V++){let W=b[V],U=L[V],$=H[V],B=k*Z*4*V;for(let q=0;q<W.count;q++){let X=q*t1;d===!0&&(a.fromBufferAttribute(W,q),C[B+X+0]=a.x,C[B+X+1]=a.y,C[B+X+2]=a.z,C[B+X+3]=0),_===!0&&(a.fromBufferAttribute(U,q),C[B+X+4]=a.x,C[B+X+5]=a.y,C[B+X+6]=a.z,C[B+X+7]=0),y===!0&&(a.fromBufferAttribute($,q),C[B+X+8]=a.x,C[B+X+9]=a.y,C[B+X+10]=a.z,C[B+X+11]=$.itemSize===4?a.w:1)}}p={count:v,texture:w,size:new oe(k,Z)},s.set(f,p),f.addEventListener("dispose",Q)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let d=0;for(let y=0;y<h.length;y++)d+=h[y];let _=f.morphTargetsRelative?1:1-d;u.getUniforms().setValue(t,"morphTargetBaseInfluence",_),u.getUniforms().setValue(t,"morphTargetInfluences",h)}u.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,v=i[f.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];i[f.id]=v}for(let b=0;b<g;b++){let L=v[b];L[0]=b,L[1]=h[b]}v.sort(xD);for(let b=0;b<8;b++)b<g&&v[b][1]?(o[b][0]=v[b][0],o[b][1]=v[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(yD);let p=f.morphAttributes.position,d=f.morphAttributes.normal,_=0;for(let b=0;b<8;b++){let L=o[b],H=L[0],S=L[1];H!==Number.MAX_SAFE_INTEGER&&S?(p&&f.getAttribute("morphTarget"+b)!==p[H]&&f.setAttribute("morphTarget"+b,p[H]),d&&f.getAttribute("morphNormal"+b)!==d[H]&&f.setAttribute("morphNormal"+b,d[H]),r[b]=S,_+=S):(p&&f.hasAttribute("morphTarget"+b)===!0&&f.deleteAttribute("morphTarget"+b),d&&f.hasAttribute("morphNormal"+b)===!0&&f.deleteAttribute("morphNormal"+b),r[b]=0)}let y=f.morphTargetsRelative?1:1-_;u.getUniforms().setValue(t,"morphTargetBaseInfluence",y),u.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function zD(t,e,n,i){let r=new WeakMap;function s(c){let l=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}var q0=class extends ln{constructor(e,n,i,r,s,a,o,c,l,f){if(f=f!==void 0?f:nn,f!==nn&&f!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===nn&&(i=a4),i===void 0&&f===Oi&&(i=tn),super(null,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:A2,this.minFilter=c!==void 0?c:A2,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Vv=new ln,Av=new q0(1,1);Av.compareFunction=wv;var Tv=new P0,Dv=new fl,Nv=new G0,ev=[],tv=[],nv=new Float32Array(16),iv=new Float32Array(9),rv=new Float32Array(4);function qi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=ev[r];if(s===void 0&&(s=new Float32Array(r),ev[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Xe(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ye(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Z0(t,e){let n=tv[e];n===void 0&&(n=new Int32Array(e),tv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _D(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xe(n,e))return;t.uniform2fv(this.addr,e),Ye(n,e)}}function SD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xe(n,e))return;t.uniform3fv(this.addr,e),Ye(n,e)}}function HD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xe(n,e))return;t.uniform4fv(this.addr,e),Ye(n,e)}}function LD(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xe(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ye(n,e)}else{if(Xe(n,i))return;rv.set(i),t.uniformMatrix2fv(this.addr,!1,rv),Ye(n,i)}}function ED(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xe(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ye(n,e)}else{if(Xe(n,i))return;iv.set(i),t.uniformMatrix3fv(this.addr,!1,iv),Ye(n,i)}}function VD(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xe(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ye(n,e)}else{if(Xe(n,i))return;nv.set(i),t.uniformMatrix4fv(this.addr,!1,nv),Ye(n,i)}}function AD(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xe(n,e))return;t.uniform2iv(this.addr,e),Ye(n,e)}}function DD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xe(n,e))return;t.uniform3iv(this.addr,e),Ye(n,e)}}function ND(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xe(n,e))return;t.uniform4iv(this.addr,e),Ye(n,e)}}function ID(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xe(n,e))return;t.uniform2uiv(this.addr,e),Ye(n,e)}}function PD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xe(n,e))return;t.uniform3uiv(this.addr,e),Ye(n,e)}}function kD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xe(n,e))return;t.uniform4uiv(this.addr,e),Ye(n,e)}}function OD(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s=this.type===t.SAMPLER_2D_SHADOW?Av:Vv;n.setTexture2D(e||s,r)}function FD(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dv,r)}function UD(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nv,r)}function BD(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Tv,r)}function GD(t){switch(t){case 5126:return _D;case 35664:return wD;case 35665:return SD;case 35666:return HD;case 35674:return LD;case 35675:return ED;case 35676:return VD;case 5124:case 35670:return AD;case 35667:case 35671:return TD;case 35668:case 35672:return DD;case 35669:case 35673:return ND;case 5125:return ID;case 36294:return RD;case 36295:return PD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return OD;case 35679:case 36299:case 36307:return FD;case 35680:case 36300:case 36308:case 36293:return UD;case 36289:case 36303:case 36311:case 36292:return BD}}function WD(t,e){t.uniform1fv(this.addr,e)}function jD(t,e){let n=qi(e,this.size,2);t.uniform2fv(this.addr,n)}function qD(t,e){let n=qi(e,this.size,3);t.uniform3fv(this.addr,n)}function $D(t,e){let n=qi(e,this.size,4);t.uniform4fv(this.addr,n)}function XD(t,e){let n=qi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YD(t,e){let n=qi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZD(t,e){let n=qi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JD(t,e){t.uniform1iv(this.addr,e)}function KD(t,e){t.uniform2iv(this.addr,e)}function QD(t,e){t.uniform3iv(this.addr,e)}function eN(t,e){t.uniform4iv(this.addr,e)}function tN(t,e){t.uniform1uiv(this.addr,e)}function nN(t,e){t.uniform2uiv(this.addr,e)}function iN(t,e){t.uniform3uiv(this.addr,e)}function rN(t,e){t.uniform4uiv(this.addr,e)}function sN(t,e,n){let i=this.cache,r=e.length,s=Z0(n,r);Xe(i,s)||(t.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Vv,s[a])}function aN(t,e,n){let i=this.cache,r=e.length,s=Z0(n,r);Xe(i,s)||(t.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Dv,s[a])}function oN(t,e,n){let i=this.cache,r=e.length,s=Z0(n,r);Xe(i,s)||(t.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Nv,s[a])}function cN(t,e,n){let i=this.cache,r=e.length,s=Z0(n,r);Xe(i,s)||(t.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Tv,s[a])}function lN(t){switch(t){case 5126:return WD;case 35664:return jD;case 35665:return qD;case 35666:return $D;case 35674:return XD;case 35675:return YD;case 35676:return ZD;case 5124:case 35670:return JD;case 35667:case 35671:return KD;case 35668:case 35672:return QD;case 35669:case 35673:return eN;case 5125:return tN;case 36294:return nN;case 36295:return iN;case 36296:return rN;case 35678:case 36198:case 36298:case 36306:case 35682:return sN;case 35679:case 36299:case 36307:return aN;case 35680:case 36300:case 36308:case 36293:return oN;case 36289:case 36303:case 36311:case 36292:return cN}}var pl=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GD(n.type)}},ml=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lN(n.type)}},gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,n[o.id],i)}}},Q7=/(\w+)(\])?(\[|\.)?/g;function sv(t,e){t.seq.push(e),t.map[e.id]=e}function fN(t,e,n){let i=t.name,r=i.length;for(Q7.lastIndex=0;;){let s=Q7.exec(i),a=Q7.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){sv(n,l===void 0?new pl(o,t,e):new ml(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new gl(o),sv(n,u)),n=u}}}var Ri=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);fN(s,a,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){let o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in n&&i.push(a)}return i}};function av(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var uN=37297,hN=0;function dN(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function pN(t){let e=Ce.getPrimaries(Ce.workingColorSpace),n=Ce.getPrimaries(t),i;switch(e===n?i="":e===T0&&n===A0?i="LinearDisplayP3ToLinearSRGB":e===A0&&n===T0&&(i="LinearSRGBToLinearDisplayP3"),t){case d4:case Y0:return[i,"LinearTransferOETF"];case Yt:case Rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ov(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dN(t.getShaderSource(e),a)}else return r}function mN(t,e){let n=pN(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gN(t,e){let n;switch(e){case AE:n="Linear";break;case TE:n="Reinhard";break;case DE:n="OptimizedCineon";break;case NE:n="ACESFilmic";break;case RE:n="AgX";break;case PE:n="Neutral";break;case IE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function vN(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function MN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function CN(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yN(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),a=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ti(t){return t!==""}function cv(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xN=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(t){return t.replace(xN,zN)}var bN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zN(t,e){let n=$1[e];if(n===void 0){let i=bN.get(e);if(i!==void 0)n=$1[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vl(n)}var _N=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(t){return t.replace(_N,wN)}function wN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===C3&&(e="SHADOWMAP_TYPE_VSM"),e}function HN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Pi:case ki:e="ENVMAP_TYPE_CUBE";break;case X0:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function EN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vv:e="ENVMAP_BLENDING_MULTIPLY";break;case EE:e="ENVMAP_BLENDING_MIX";break;case VE:e="ENVMAP_BLENDING_ADD";break}return e}function VN(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AN(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,c=SN(n),l=HN(n),f=LN(n),u=EN(n),h=VN(n),m=n.isWebGL2?"":vN(n),g=MN(n),v=CN(s),p=r.createProgram(),d,_,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ti).join(`
`),d.length>0&&(d+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ti).join(`
`),_.length>0&&(_+=`
`)):(d=[uv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),_=[m,uv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==o4?"#define TONE_MAPPING":"",n.toneMapping!==o4?$1.tonemapping_pars_fragment:"",n.toneMapping!==o4?gN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$1.colorspace_pars_fragment,mN("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ti).join(`
`)),a=vl(a),a=cv(a,n),a=lv(a,n),o=vl(o),o=cv(o,n),o=lv(o,n),a=fv(a),o=fv(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=y+d+a,L=y+_+o,H=av(r,r.VERTEX_SHADER,b),S=av(r,r.FRAGMENT_SHADER,L);r.attachShader(p,H),r.attachShader(p,S),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function k(t1){if(t.debug.checkShaderErrors){let Q=r.getProgramInfoLog(p).trim(),V=r.getShaderInfoLog(H).trim(),W=r.getShaderInfoLog(S).trim(),U=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,H,S);else{let B=ov(r,H,"vertex"),q=ov(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+t1.name+`
Material Type: `+t1.type+`

Program Info Log: `+Q+`
`+B+`
`+q)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(V===""||W==="")&&($=!1);$&&(t1.diagnostics={runnable:U,programLog:Q,vertexShader:{log:V,prefix:d},fragmentShader:{log:W,prefix:_}})}r.deleteShader(H),r.deleteShader(S),Z=new Ri(r,p),C=yN(r,p)}let Z;this.getUniforms=function(){return Z===void 0&&k(this),Z};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(p,uN)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hN++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=H,this.fragmentShader=S,this}var TN=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Cl(e),n.set(e,i)),i}},Cl=class{constructor(e){this.id=TN++,this.code=e,this.usedTimes=0}};function DN(t,e,n,i,r,s,a){let o=new k0,c=new Ml,l=new Set,f=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(C){return l.add(C),C===0?"uv":`uv${C}`}function d(C,w,t1,Q,V){let W=Q.fog,U=V.geometry,$=C.isMeshStandardMaterial?Q.environment:null,B=(C.isMeshStandardMaterial?n:e).get(C.envMap||$),q=B&&B.mapping===X0?B.image.height:null,X=v[C.type];C.precision!==null&&(g=r.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));let r1=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,p1=r1!==void 0?r1.length:0,B1=0;U.morphAttributes.position!==void 0&&(B1=1),U.morphAttributes.normal!==void 0&&(B1=2),U.morphAttributes.color!==void 0&&(B1=3);let O,J,h1,N1;if(X){let be=Zt[X];O=be.vertexShader,J=be.fragmentShader}else O=C.vertexShader,J=C.fragmentShader,c.update(C),h1=c.getVertexShaderID(C),N1=c.getFragmentShaderID(C);let b1=t.getRenderTarget(),m1=V.isInstancedMesh===!0,me=V.isBatchedMesh===!0,I1=!!C.map,T=!!C.matcap,i2=!!B,w1=!!C.aoMap,K1=!!C.lightMap,A1=!!C.bumpMap,se=!!C.normalMap,Y1=!!C.displacementMap,ee=!!C.emissiveMap,Be=!!C.metalnessMap,z=!!C.roughnessMap,M=C.anisotropy>0,F=C.clearcoat>0,j=C.iridescence>0,K=C.sheen>0,Y=C.transmission>0,G1=M&&!!C.anisotropyMap,T1=F&&!!C.clearcoatMap,s1=F&&!!C.clearcoatNormalMap,o1=F&&!!C.clearcoatRoughnessMap,W1=j&&!!C.iridescenceMap,e1=j&&!!C.iridescenceThicknessMap,je=K&&!!C.sheenColorMap,te=K&&!!C.sheenRoughnessMap,z1=!!C.specularMap,M1=!!C.specularColorMap,y1=!!C.specularIntensityMap,ae=Y&&!!C.transmissionMap,k1=Y&&!!C.thicknessMap,Ae=!!C.gradientMap,E=!!C.alphaMap,a1=C.alphaTest>0,N=!!C.alphaHash,n1=!!C.extensions,c1=o4;C.toneMapped&&(b1===null||b1.isXRRenderTarget===!0)&&(c1=t.toneMapping);let ie={isWebGL2:u,shaderID:X,shaderType:C.type,shaderName:C.name,vertexShader:O,fragmentShader:J,defines:C.defines,customVertexShaderID:h1,customFragmentShaderID:N1,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:me,instancing:m1,instancingColor:m1&&V.instanceColor!==null,instancingMorph:m1&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:b1===null?t.outputColorSpace:b1.isXRRenderTarget===!0?b1.texture.colorSpace:d4,alphaToCoverage:!!C.alphaToCoverage,map:I1,matcap:T,envMap:i2,envMapMode:i2&&B.mapping,envMapCubeUVHeight:q,aoMap:w1,lightMap:K1,bumpMap:A1,normalMap:se,displacementMap:m&&Y1,emissiveMap:ee,normalMapObjectSpace:se&&C.normalMapType===YE,normalMapTangentSpace:se&&C.normalMapType===XE,metalnessMap:Be,roughnessMap:z,anisotropy:M,anisotropyMap:G1,clearcoat:F,clearcoatMap:T1,clearcoatNormalMap:s1,clearcoatRoughnessMap:o1,iridescence:j,iridescenceMap:W1,iridescenceThicknessMap:e1,sheen:K,sheenColorMap:je,sheenRoughnessMap:te,specularMap:z1,specularColorMap:M1,specularIntensityMap:y1,transmission:Y,transmissionMap:ae,thicknessMap:k1,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===Ni&&C.alphaToCoverage===!1,alphaMap:E,alphaTest:a1,alphaHash:N,combine:C.combine,mapUv:I1&&p(C.map.channel),aoMapUv:w1&&p(C.aoMap.channel),lightMapUv:K1&&p(C.lightMap.channel),bumpMapUv:A1&&p(C.bumpMap.channel),normalMapUv:se&&p(C.normalMap.channel),displacementMapUv:Y1&&p(C.displacementMap.channel),emissiveMapUv:ee&&p(C.emissiveMap.channel),metalnessMapUv:Be&&p(C.metalnessMap.channel),roughnessMapUv:z&&p(C.roughnessMap.channel),anisotropyMapUv:G1&&p(C.anisotropyMap.channel),clearcoatMapUv:T1&&p(C.clearcoatMap.channel),clearcoatNormalMapUv:s1&&p(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:o1&&p(C.clearcoatRoughnessMap.channel),iridescenceMapUv:W1&&p(C.iridescenceMap.channel),iridescenceThicknessMapUv:e1&&p(C.iridescenceThicknessMap.channel),sheenColorMapUv:je&&p(C.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(C.sheenRoughnessMap.channel),specularMapUv:z1&&p(C.specularMap.channel),specularColorMapUv:M1&&p(C.specularColorMap.channel),specularIntensityMapUv:y1&&p(C.specularIntensityMap.channel),transmissionMapUv:ae&&p(C.transmissionMap.channel),thicknessMapUv:k1&&p(C.thicknessMap.channel),alphaMapUv:E&&p(C.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(se||M),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!U.attributes.uv&&(I1||E),fog:!!W,useFog:C.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:p1,morphTextureStride:B1,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&t1.length>0,shadowMapType:t.shadowMap.type,toneMapping:c1,useLegacyLights:t._useLegacyLights,decodeVideoTexture:I1&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Le,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===x3,flipSided:C.side===k2,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:n1&&C.extensions.derivatives===!0,extensionFragDepth:n1&&C.extensions.fragDepth===!0,extensionDrawBuffers:n1&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:n1&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:n1&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:n1&&C.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function _(C){let w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(let t1 in C.defines)w.push(t1),w.push(C.defines[t1]);return C.isRawShaderMaterial===!1&&(y(w,C),b(w,C),w.push(t.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function y(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function b(C,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.instancingMorph&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.normalMapObjectSpace&&o.enable(7),w.normalMapTangentSpace&&o.enable(8),w.clearcoat&&o.enable(9),w.iridescence&&o.enable(10),w.alphaTest&&o.enable(11),w.vertexColors&&o.enable(12),w.vertexAlphas&&o.enable(13),w.vertexUv1s&&o.enable(14),w.vertexUv2s&&o.enable(15),w.vertexUv3s&&o.enable(16),w.vertexTangents&&o.enable(17),w.anisotropy&&o.enable(18),w.alphaHash&&o.enable(19),w.batching&&o.enable(20),C.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),C.push(o.mask)}function L(C){let w=v[C.type],t1;if(w){let Q=Zt[w];t1=Pl.clone(Q.uniforms)}else t1=C.uniforms;return t1}function H(C,w){let t1;for(let Q=0,V=f.length;Q<V;Q++){let W=f[Q];if(W.cacheKey===w){t1=W,++t1.usedTimes;break}}return t1===void 0&&(t1=new AN(t,w,C,s),f.push(t1)),t1}function S(C){if(--C.usedTimes===0){let w=f.indexOf(C);f[w]=f[f.length-1],f.pop(),C.destroy()}}function k(C){c.remove(C)}function Z(){c.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:L,acquireProgram:H,releaseProgram:S,releaseShaderCache:k,programs:f,dispose:Z}}function NN(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function IN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dv(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u,h,m,g,v,p){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function o(u,h,m,g,v,p){let d=a(u,h,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function c(u,h,m,g,v,p){let d=a(u,h,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function l(u,h){n.length>1&&n.sort(u||IN),i.length>1&&i.sort(h||hv),r.length>1&&r.sort(h||hv)}function f(){for(let u=e,h=t.length;u<h;u++){let m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function RN(){let t=new WeakMap;function e(i,r){let s=t.get(i),a;return s===void 0?(a=new dv,t.set(i,[a])):r>=s.length?(a=new dv,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function PN(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new ue};break;case"SpotLight":n={position:new R,direction:new R,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function kN(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var ON=0;function FN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UN(t,e){let n=new PN,i=kN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new R);let s=new R,a=new n2,o=new n2;function c(f,u){let h=0,m=0,g=0;for(let t1=0;t1<9;t1++)r.probe[t1].set(0,0,0);let v=0,p=0,d=0,_=0,y=0,b=0,L=0,H=0,S=0,k=0,Z=0;f.sort(FN);let C=u===!0?Math.PI:1;for(let t1=0,Q=f.length;t1<Q;t1++){let V=f[t1],W=V.color,U=V.intensity,$=V.distance,B=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=W.r*U*C,m+=W.g*U*C,g+=W.b*U*C;else if(V.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(V.sh.coefficients[q],U);Z++}else if(V.isDirectionalLight){let q=n.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity*C),V.castShadow){let X=V.shadow,r1=i.get(V);r1.shadowBias=X.bias,r1.shadowNormalBias=X.normalBias,r1.shadowRadius=X.radius,r1.shadowMapSize=X.mapSize,r.directionalShadow[v]=r1,r.directionalShadowMap[v]=B,r.directionalShadowMatrix[v]=V.shadow.matrix,b++}r.directional[v]=q,v++}else if(V.isSpotLight){let q=n.get(V);q.position.setFromMatrixPosition(V.matrixWorld),q.color.copy(W).multiplyScalar(U*C),q.distance=$,q.coneCos=Math.cos(V.angle),q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),q.decay=V.decay,r.spot[d]=q;let X=V.shadow;if(V.map&&(r.spotLightMap[S]=V.map,S++,X.updateMatrices(V),V.castShadow&&k++),r.spotLightMatrix[d]=X.matrix,V.castShadow){let r1=i.get(V);r1.shadowBias=X.bias,r1.shadowNormalBias=X.normalBias,r1.shadowRadius=X.radius,r1.shadowMapSize=X.mapSize,r.spotShadow[d]=r1,r.spotShadowMap[d]=B,H++}d++}else if(V.isRectAreaLight){let q=n.get(V);q.color.copy(W).multiplyScalar(U),q.halfWidth.set(V.width*.5,0,0),q.halfHeight.set(0,V.height*.5,0),r.rectArea[_]=q,_++}else if(V.isPointLight){let q=n.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity*C),q.distance=V.distance,q.decay=V.decay,V.castShadow){let X=V.shadow,r1=i.get(V);r1.shadowBias=X.bias,r1.shadowNormalBias=X.normalBias,r1.shadowRadius=X.radius,r1.shadowMapSize=X.mapSize,r1.shadowCameraNear=X.camera.near,r1.shadowCameraFar=X.camera.far,r.pointShadow[p]=r1,r.pointShadowMap[p]=B,r.pointShadowMatrix[p]=V.shadow.matrix,L++}r.point[p]=q,p++}else if(V.isHemisphereLight){let q=n.get(V);q.skyColor.copy(V.color).multiplyScalar(U*C),q.groundColor.copy(V.groundColor).multiplyScalar(U*C),r.hemi[y]=q,y++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=i1.LTC_FLOAT_1,r.rectAreaLTC2=i1.LTC_FLOAT_2):(r.rectAreaLTC1=i1.LTC_HALF_1,r.rectAreaLTC2=i1.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=i1.LTC_FLOAT_1,r.rectAreaLTC2=i1.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=i1.LTC_HALF_1,r.rectAreaLTC2=i1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let w=r.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==d||w.rectAreaLength!==_||w.hemiLength!==y||w.numDirectionalShadows!==b||w.numPointShadows!==L||w.numSpotShadows!==H||w.numSpotMaps!==S||w.numLightProbes!==Z)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=_,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=H,r.spotShadowMap.length=H,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=H+S-k,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=Z,w.directionalLength=v,w.pointLength=p,w.spotLength=d,w.rectAreaLength=_,w.hemiLength=y,w.numDirectionalShadows=b,w.numPointShadows=L,w.numSpotShadows=H,w.numSpotMaps=S,w.numLightProbes=Z,r.version=ON++)}function l(f,u){let h=0,m=0,g=0,v=0,p=0,d=u.matrixWorldInverse;for(let _=0,y=f.length;_<y;_++){let b=f[_];if(b.isDirectionalLight){let L=r.directional[h];L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),h++}else if(b.isSpotLight){let L=r.spot[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),g++}else if(b.isRectAreaLight){let L=r.rectArea[v];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let L=r.point[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let L=r.hemi[p];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:r}}function pv(t,e){let n=new UN(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function o(u){r.push(u)}function c(u){n.setup(i,u)}function l(u){n.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function BN(t,e){let n=new WeakMap;function i(s,a=0){let o=n.get(s),c;return o===void 0?(c=new pv(t,e),n.set(s,[c])):a>=o.length?(c=new pv(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}var yl=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},GN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WN=`uniform sampler2D shadow_pass;
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
}`;function jN(t,e,n){let i=new W0,r=new oe,s=new oe,a=new h2,o=new yl({depthPacking:$E}),c=new xl,l={},f=n.maxTextureSize,u={[l4]:k2,[k2]:l4,[x3]:x3},h=new p2({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:GN,fragmentShader:WN}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new _3;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new d2(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gv;let d=this.type;this.render=function(H,S,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||H.length===0)return;let Z=t.getRenderTarget(),C=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),t1=t.state;t1.setBlending(Jt),t1.buffers.color.setClear(1,1,1,1),t1.buffers.depth.setTest(!0),t1.setScissorTest(!1);let Q=d!==C3&&this.type===C3,V=d===C3&&this.type!==C3;for(let W=0,U=H.length;W<U;W++){let $=H[W],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let q=B.getFrameExtents();if(r.multiply(q),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null||Q===!0||V===!0){let r1=this.type!==C3?{minFilter:A2,magFilter:A2}:{};B.map!==null&&B.map.dispose(),B.map=new Lt(r.x,r.y,r1),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();let X=B.getViewportCount();for(let r1=0;r1<X;r1++){let p1=B.getViewport(r1);a.set(s.x*p1.x,s.y*p1.y,s.x*p1.z,s.y*p1.w),t1.viewport(a),B.updateMatrices($,r1),i=B.getFrustum(),b(S,k,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===C3&&_(B,k),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(Z,C,w)};function _(H,S){let k=e.update(v);h.defines.VSM_SAMPLES!==H.blurSamples&&(h.defines.VSM_SAMPLES=H.blurSamples,m.defines.VSM_SAMPLES=H.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Lt(r.x,r.y)),h.uniforms.shadow_pass.value=H.map.texture,h.uniforms.resolution.value=H.mapSize,h.uniforms.radius.value=H.radius,t.setRenderTarget(H.mapPass),t.clear(),t.renderBufferDirect(S,null,k,h,v,null),m.uniforms.shadow_pass.value=H.mapPass.texture,m.uniforms.resolution.value=H.mapSize,m.uniforms.radius.value=H.radius,t.setRenderTarget(H.map),t.clear(),t.renderBufferDirect(S,null,k,m,v,null)}function y(H,S,k,Z){let C=null,w=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(w!==void 0)C=w;else if(C=k.isPointLight===!0?c:o,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let t1=C.uuid,Q=S.uuid,V=l[t1];V===void 0&&(V={},l[t1]=V);let W=V[Q];W===void 0&&(W=C.clone(),V[Q]=W,S.addEventListener("dispose",L)),C=W}if(C.visible=S.visible,C.wireframe=S.wireframe,Z===C3?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:u[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let t1=t.properties.get(C);t1.light=k}return C}function b(H,S,k,Z,C){if(H.visible===!1)return;if(H.layers.test(S.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===C3)&&(!H.frustumCulled||i.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);let Q=e.update(H),V=H.material;if(Array.isArray(V)){let W=Q.groups;for(let U=0,$=W.length;U<$;U++){let B=W[U],q=V[B.materialIndex];if(q&&q.visible){let X=y(H,q,Z,C);H.onBeforeShadow(t,H,S,k,Q,X,B),t.renderBufferDirect(k,null,Q,X,H,B),H.onAfterShadow(t,H,S,k,Q,X,B)}}}else if(V.visible){let W=y(H,V,Z,C);H.onBeforeShadow(t,H,S,k,Q,W,null),t.renderBufferDirect(k,null,Q,W,H,null),H.onAfterShadow(t,H,S,k,Q,W,null)}}let t1=H.children;for(let Q=0,V=t1.length;Q<V;Q++)b(t1[Q],S,k,Z,C)}function L(H){H.target.removeEventListener("dispose",L);for(let k in l){let Z=l[k],C=H.target.uuid;C in Z&&(Z[C].dispose(),delete Z[C])}}}function qN(t,e,n){let i=n.isWebGL2;function r(){let E=!1,a1=new h2,N=null,n1=new h2(0,0,0,0);return{setMask:function(c1){N!==c1&&!E&&(t.colorMask(c1,c1,c1,c1),N=c1)},setLocked:function(c1){E=c1},setClear:function(c1,ie,be,r2,K2){K2===!0&&(c1*=r2,ie*=r2,be*=r2),a1.set(c1,ie,be,r2),n1.equals(a1)===!1&&(t.clearColor(c1,ie,be,r2),n1.copy(a1))},reset:function(){E=!1,N=null,n1.set(-1,0,0,0)}}}function s(){let E=!1,a1=null,N=null,n1=null;return{setTest:function(c1){c1?m1(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(c1){a1!==c1&&!E&&(t.depthMask(c1),a1=c1)},setFunc:function(c1){if(N!==c1){switch(c1){case bE:t.depthFunc(t.NEVER);break;case zE:t.depthFunc(t.ALWAYS);break;case _E:t.depthFunc(t.LESS);break;case H0:t.depthFunc(t.LEQUAL);break;case wE:t.depthFunc(t.EQUAL);break;case SE:t.depthFunc(t.GEQUAL);break;case HE:t.depthFunc(t.GREATER);break;case LE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}N=c1}},setLocked:function(c1){E=c1},setClear:function(c1){n1!==c1&&(t.clearDepth(c1),n1=c1)},reset:function(){E=!1,a1=null,N=null,n1=null}}}function a(){let E=!1,a1=null,N=null,n1=null,c1=null,ie=null,be=null,r2=null,K2=null;return{setTest:function(ze){E||(ze?m1(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(ze){a1!==ze&&!E&&(t.stencilMask(ze),a1=ze)},setFunc:function(ze,b2,At){(N!==ze||n1!==b2||c1!==At)&&(t.stencilFunc(ze,b2,At),N=ze,n1=b2,c1=At)},setOp:function(ze,b2,At){(ie!==ze||be!==b2||r2!==At)&&(t.stencilOp(ze,b2,At),ie=ze,be=b2,r2=At)},setLocked:function(ze){E=ze},setClear:function(ze){K2!==ze&&(t.clearStencil(ze),K2=ze)},reset:function(){E=!1,a1=null,N=null,n1=null,c1=null,ie=null,be=null,r2=null,K2=null}}}let o=new r,c=new s,l=new a,f=new WeakMap,u=new WeakMap,h={},m={},g=new WeakMap,v=[],p=null,d=!1,_=null,y=null,b=null,L=null,H=null,S=null,k=null,Z=new ue(0,0,0),C=0,w=!1,t1=null,Q=null,V=null,W=null,U=null,$=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=q>=2);let r1=null,p1={},B1=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),J=new h2().fromArray(B1),h1=new h2().fromArray(O);function N1(E,a1,N,n1){let c1=new Uint8Array(4),ie=t.createTexture();t.bindTexture(E,ie),t.texParameteri(E,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(E,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<N;be++)i&&(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)?t.texImage3D(a1,0,t.RGBA,1,1,n1,0,t.RGBA,t.UNSIGNED_BYTE,c1):t.texImage2D(a1+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,c1);return ie}let b1={};b1[t.TEXTURE_2D]=N1(t.TEXTURE_2D,t.TEXTURE_2D,1),b1[t.TEXTURE_CUBE_MAP]=N1(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(b1[t.TEXTURE_2D_ARRAY]=N1(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),b1[t.TEXTURE_3D]=N1(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),m1(t.DEPTH_TEST),c.setFunc(H0),Y1(!1),ee(Wm),m1(t.CULL_FACE),A1(Jt);function m1(E){h[E]!==!0&&(t.enable(E),h[E]=!0)}function me(E){h[E]!==!1&&(t.disable(E),h[E]=!1)}function I1(E,a1){return m[E]!==a1?(t.bindFramebuffer(E,a1),m[E]=a1,i&&(E===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=a1),E===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=a1)),!0):!1}function T(E,a1){let N=v,n1=!1;if(E){N=g.get(a1),N===void 0&&(N=[],g.set(a1,N));let c1=E.textures;if(N.length!==c1.length||N[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,be=c1.length;ie<be;ie++)N[ie]=t.COLOR_ATTACHMENT0+ie;N.length=c1.length,n1=!0}}else N[0]!==t.BACK&&(N[0]=t.BACK,n1=!0);if(n1)if(n.isWebGL2)t.drawBuffers(N);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function i2(E){return p!==E?(t.useProgram(E),p=E,!0):!1}let w1={[K4]:t.FUNC_ADD,[oE]:t.FUNC_SUBTRACT,[cE]:t.FUNC_REVERSE_SUBTRACT};if(i)w1[Xm]=t.MIN,w1[Ym]=t.MAX;else{let E=e.get("EXT_blend_minmax");E!==null&&(w1[Xm]=E.MIN_EXT,w1[Ym]=E.MAX_EXT)}let K1={[lE]:t.ZERO,[fE]:t.ONE,[uE]:t.SRC_COLOR,[el]:t.SRC_ALPHA,[vE]:t.SRC_ALPHA_SATURATE,[mE]:t.DST_COLOR,[dE]:t.DST_ALPHA,[hE]:t.ONE_MINUS_SRC_COLOR,[tl]:t.ONE_MINUS_SRC_ALPHA,[gE]:t.ONE_MINUS_DST_COLOR,[pE]:t.ONE_MINUS_DST_ALPHA,[ME]:t.CONSTANT_COLOR,[CE]:t.ONE_MINUS_CONSTANT_COLOR,[yE]:t.CONSTANT_ALPHA,[xE]:t.ONE_MINUS_CONSTANT_ALPHA};function A1(E,a1,N,n1,c1,ie,be,r2,K2,ze){if(E===Jt){d===!0&&(me(t.BLEND),d=!1);return}if(d===!1&&(m1(t.BLEND),d=!0),E!==aE){if(E!==_||ze!==w){if((y!==K4||H!==K4)&&(t.blendEquation(t.FUNC_ADD),y=K4,H=K4),ze)switch(E){case Ni:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jm:t.blendFunc(t.ONE,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $m:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Ni:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $m:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}b=null,L=null,S=null,k=null,Z.set(0,0,0),C=0,_=E,w=ze}return}c1=c1||a1,ie=ie||N,be=be||n1,(a1!==y||c1!==H)&&(t.blendEquationSeparate(w1[a1],w1[c1]),y=a1,H=c1),(N!==b||n1!==L||ie!==S||be!==k)&&(t.blendFuncSeparate(K1[N],K1[n1],K1[ie],K1[be]),b=N,L=n1,S=ie,k=be),(r2.equals(Z)===!1||K2!==C)&&(t.blendColor(r2.r,r2.g,r2.b,K2),Z.copy(r2),C=K2),_=E,w=!1}function se(E,a1){E.side===x3?me(t.CULL_FACE):m1(t.CULL_FACE);let N=E.side===k2;a1&&(N=!N),Y1(N),E.blending===Ni&&E.transparent===!1?A1(Jt):A1(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),o.setMask(E.colorWrite);let n1=E.stencilWrite;l.setTest(n1),n1&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),z(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?m1(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y1(E){t1!==E&&(E?t.frontFace(t.CW):t.frontFace(t.CCW),t1=E)}function ee(E){E!==iE?(m1(t.CULL_FACE),E!==Q&&(E===Wm?t.cullFace(t.BACK):E===rE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),Q=E}function Be(E){E!==V&&(B&&t.lineWidth(E),V=E)}function z(E,a1,N){E?(m1(t.POLYGON_OFFSET_FILL),(W!==a1||U!==N)&&(t.polygonOffset(a1,N),W=a1,U=N)):me(t.POLYGON_OFFSET_FILL)}function M(E){E?m1(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function F(E){E===void 0&&(E=t.TEXTURE0+$-1),r1!==E&&(t.activeTexture(E),r1=E)}function j(E,a1,N){N===void 0&&(r1===null?N=t.TEXTURE0+$-1:N=r1);let n1=p1[N];n1===void 0&&(n1={type:void 0,texture:void 0},p1[N]=n1),(n1.type!==E||n1.texture!==a1)&&(r1!==N&&(t.activeTexture(N),r1=N),t.bindTexture(E,a1||b1[E]),n1.type=E,n1.texture=a1)}function K(){let E=p1[r1];E!==void 0&&E.type!==void 0&&(t.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function G1(){try{t.compressedTexImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function T1(){try{t.texSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function s1(){try{t.texSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function o1(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function W1(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function e1(){try{t.texStorage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function je(){try{t.texStorage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function te(){try{t.texImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function z1(){try{t.texImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function M1(E){J.equals(E)===!1&&(t.scissor(E.x,E.y,E.z,E.w),J.copy(E))}function y1(E){h1.equals(E)===!1&&(t.viewport(E.x,E.y,E.z,E.w),h1.copy(E))}function ae(E,a1){let N=u.get(a1);N===void 0&&(N=new WeakMap,u.set(a1,N));let n1=N.get(E);n1===void 0&&(n1=t.getUniformBlockIndex(a1,E.name),N.set(E,n1))}function k1(E,a1){let n1=u.get(a1).get(E);f.get(a1)!==n1&&(t.uniformBlockBinding(a1,n1,E.__bindingPointIndex),f.set(a1,n1))}function Ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},r1=null,p1={},m={},g=new WeakMap,v=[],p=null,d=!1,_=null,y=null,b=null,L=null,H=null,S=null,k=null,Z=new ue(0,0,0),C=0,w=!1,t1=null,Q=null,V=null,W=null,U=null,J.set(0,0,t.canvas.width,t.canvas.height),h1.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:m1,disable:me,bindFramebuffer:I1,drawBuffers:T,useProgram:i2,setBlending:A1,setMaterial:se,setFlipSided:Y1,setCullFace:ee,setLineWidth:Be,setPolygonOffset:z,setScissorTest:M,activeTexture:F,bindTexture:j,unbindTexture:K,compressedTexImage2D:Y,compressedTexImage3D:G1,texImage2D:te,texImage3D:z1,updateUBOMapping:ae,uniformBlockBinding:k1,texStorage2D:e1,texStorage3D:je,texSubImage2D:T1,texSubImage3D:s1,compressedTexSubImage2D:o1,compressedTexSubImage3D:W1,scissor:M1,viewport:y1,reset:Ae}}function $N(t,e,n,i,r,s,a){let o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new oe,u=new WeakMap,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(z,M){return g?new OffscreenCanvas(z,M):N0("canvas")}function p(z,M,F,j){let K=1,Y=Be(z);if((Y.width>j||Y.height>j)&&(K=j/Math.max(Y.width,Y.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let G1=M?cl:Math.floor,T1=G1(K*Y.width),s1=G1(K*Y.height);h===void 0&&(h=v(T1,s1));let o1=F?v(T1,s1):h;return o1.width=T1,o1.height=s1,o1.getContext("2d").drawImage(z,0,0,T1,s1),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+T1+"x"+s1+")."),o1}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),z;return z}function d(z){let M=Be(z);return Eg(M.width)&&Eg(M.height)}function _(z){return o?!1:z.wrapS!==St||z.wrapT!==St||z.minFilter!==A2&&z.minFilter!==R2}function y(z,M){return z.generateMipmaps&&M&&z.minFilter!==A2&&z.minFilter!==R2}function b(z){t.generateMipmap(z)}function L(z,M,F,j,K=!1){if(o===!1)return M;if(z!==null){if(t[z]!==void 0)return t[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Y=M;if(M===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),M===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),M===t.RGBA){let G1=K?V0:Ce.getTransfer(j);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=G1===Le?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function H(z,M,F){return y(z,F)===!0||z.isFramebufferTexture&&z.minFilter!==A2&&z.minFilter!==R2?Math.log2(Math.max(M.width,M.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?M.mipmaps.length:1}function S(z){return z===A2||z===Jm||z===a6?t.NEAREST:t.LINEAR}function k(z){let M=z.target;M.removeEventListener("dispose",k),C(M),M.isVideoTexture&&u.delete(M)}function Z(z){let M=z.target;M.removeEventListener("dispose",Z),t1(M)}function C(z){let M=i.get(z);if(M.__webglInit===void 0)return;let F=z.source,j=m.get(F);if(j){let K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(z),Object.keys(j).length===0&&m.delete(F)}i.remove(z)}function w(z){let M=i.get(z);t.deleteTexture(M.__webglTexture);let F=z.source,j=m.get(F);delete j[M.__cacheKey],a.memory.textures--}function t1(z){let M=i.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let K=0;K<M.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(M.__webglFramebuffer[j][K]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=z.textures;for(let j=0,K=F.length;j<K;j++){let Y=i.get(F[j]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(F[j])}i.remove(z)}let Q=0;function V(){Q=0}function W(){let z=Q;return z>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+r.maxTextures),Q+=1,z}function U(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function $(z,M){let F=i.get(z);if(z.isVideoTexture&&Y1(z),z.isRenderTargetTexture===!1&&z.version>0&&F.__version!==z.version){let j=z.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{h1(F,z,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function B(z,M){let F=i.get(z);if(z.version>0&&F.__version!==z.version){h1(F,z,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function q(z,M){let F=i.get(z);if(z.version>0&&F.__version!==z.version){h1(F,z,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function X(z,M){let F=i.get(z);if(z.version>0&&F.__version!==z.version){N1(F,z,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}let r1={[rl]:t.REPEAT,[St]:t.CLAMP_TO_EDGE,[sl]:t.MIRRORED_REPEAT},p1={[A2]:t.NEAREST,[Jm]:t.NEAREST_MIPMAP_NEAREST,[a6]:t.NEAREST_MIPMAP_LINEAR,[R2]:t.LINEAR,[x7]:t.LINEAR_MIPMAP_NEAREST,[en]:t.LINEAR_MIPMAP_LINEAR},B1={[ZE]:t.NEVER,[nV]:t.ALWAYS,[JE]:t.LESS,[wv]:t.LEQUAL,[KE]:t.EQUAL,[tV]:t.GEQUAL,[QE]:t.GREATER,[eV]:t.NOTEQUAL};function O(z,M,F){if(M.type===b3&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===R2||M.magFilter===x7||M.magFilter===a6||M.magFilter===en||M.minFilter===R2||M.minFilter===x7||M.minFilter===a6||M.minFilter===en)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),F?(t.texParameteri(z,t.TEXTURE_WRAP_S,r1[M.wrapS]),t.texParameteri(z,t.TEXTURE_WRAP_T,r1[M.wrapT]),(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)&&t.texParameteri(z,t.TEXTURE_WRAP_R,r1[M.wrapR]),t.texParameteri(z,t.TEXTURE_MAG_FILTER,p1[M.magFilter]),t.texParameteri(z,t.TEXTURE_MIN_FILTER,p1[M.minFilter])):(t.texParameteri(z,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(z,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY)&&t.texParameteri(z,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==St||M.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(z,t.TEXTURE_MAG_FILTER,S(M.magFilter)),t.texParameteri(z,t.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==A2&&M.minFilter!==R2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(z,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(z,t.TEXTURE_COMPARE_FUNC,B1[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===A2||M.minFilter!==a6&&M.minFilter!==en||M.type===b3&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===rn&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(z,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(z,M){let F=!1;z.__webglInit===void 0&&(z.__webglInit=!0,M.addEventListener("dispose",k));let j=M.source,K=m.get(j);K===void 0&&(K={},m.set(j,K));let Y=U(M);if(Y!==z.__cacheKey){K[Y]===void 0&&(K[Y]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[Y].usedTimes++;let G1=K[z.__cacheKey];G1!==void 0&&(K[z.__cacheKey].usedTimes--,G1.usedTimes===0&&w(M)),z.__cacheKey=Y,z.__webglTexture=K[Y].texture}return F}function h1(z,M,F){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);let K=J(z,M),Y=M.source;n.bindTexture(j,z.__webglTexture,t.TEXTURE0+F);let G1=i.get(Y);if(Y.version!==G1.__version||K===!0){n.activeTexture(t.TEXTURE0+F);let T1=Ce.getPrimaries(Ce.workingColorSpace),s1=M.colorSpace===s4?null:Ce.getPrimaries(M.colorSpace),o1=M.colorSpace===s4||T1===s1?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,o1);let W1=_(M)&&d(M.image)===!1,e1=p(M.image,W1,!1,r.maxTextureSize);e1=ee(M,e1);let je=d(e1)||o,te=s.convert(M.format,M.colorSpace),z1=s.convert(M.type),M1=L(M.internalFormat,te,z1,M.colorSpace,M.isVideoTexture);O(j,M,je);let y1,ae=M.mipmaps,k1=o&&M.isVideoTexture!==!0&&M1!==_v,Ae=G1.__version===void 0||K===!0,E=Y.dataReady,a1=H(M,e1,je);if(M.isDepthTexture)M1=t.DEPTH_COMPONENT,o?M.type===b3?M1=t.DEPTH_COMPONENT32F:M.type===a4?M1=t.DEPTH_COMPONENT24:M.type===tn?M1=t.DEPTH24_STENCIL8:M1=t.DEPTH_COMPONENT16:M.type===b3&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===nn&&M1===t.DEPTH_COMPONENT&&M.type!==Il&&M.type!==a4&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=a4,z1=s.convert(M.type)),M.format===Oi&&M1===t.DEPTH_COMPONENT&&(M1=t.DEPTH_STENCIL,M.type!==tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=tn,z1=s.convert(M.type))),Ae&&(k1?n.texStorage2D(t.TEXTURE_2D,1,M1,e1.width,e1.height):n.texImage2D(t.TEXTURE_2D,0,M1,e1.width,e1.height,0,te,z1,null));else if(M.isDataTexture)if(ae.length>0&&je){k1&&Ae&&n.texStorage2D(t.TEXTURE_2D,a1,M1,ae[0].width,ae[0].height);for(let N=0,n1=ae.length;N<n1;N++)y1=ae[N],k1?E&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,y1.width,y1.height,te,z1,y1.data):n.texImage2D(t.TEXTURE_2D,N,M1,y1.width,y1.height,0,te,z1,y1.data);M.generateMipmaps=!1}else k1?(Ae&&n.texStorage2D(t.TEXTURE_2D,a1,M1,e1.width,e1.height),E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,e1.width,e1.height,te,z1,e1.data)):n.texImage2D(t.TEXTURE_2D,0,M1,e1.width,e1.height,0,te,z1,e1.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k1&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,a1,M1,ae[0].width,ae[0].height,e1.depth);for(let N=0,n1=ae.length;N<n1;N++)y1=ae[N],M.format!==Ht?te!==null?k1?E&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,y1.width,y1.height,e1.depth,te,y1.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,N,M1,y1.width,y1.height,e1.depth,0,y1.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k1?E&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,y1.width,y1.height,e1.depth,te,z1,y1.data):n.texImage3D(t.TEXTURE_2D_ARRAY,N,M1,y1.width,y1.height,e1.depth,0,te,z1,y1.data)}else{k1&&Ae&&n.texStorage2D(t.TEXTURE_2D,a1,M1,ae[0].width,ae[0].height);for(let N=0,n1=ae.length;N<n1;N++)y1=ae[N],M.format!==Ht?te!==null?k1?E&&n.compressedTexSubImage2D(t.TEXTURE_2D,N,0,0,y1.width,y1.height,te,y1.data):n.compressedTexImage2D(t.TEXTURE_2D,N,M1,y1.width,y1.height,0,y1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k1?E&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,y1.width,y1.height,te,z1,y1.data):n.texImage2D(t.TEXTURE_2D,N,M1,y1.width,y1.height,0,te,z1,y1.data)}else if(M.isDataArrayTexture)k1?(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,a1,M1,e1.width,e1.height,e1.depth),E&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,e1.width,e1.height,e1.depth,te,z1,e1.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,M1,e1.width,e1.height,e1.depth,0,te,z1,e1.data);else if(M.isData3DTexture)k1?(Ae&&n.texStorage3D(t.TEXTURE_3D,a1,M1,e1.width,e1.height,e1.depth),E&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,e1.width,e1.height,e1.depth,te,z1,e1.data)):n.texImage3D(t.TEXTURE_3D,0,M1,e1.width,e1.height,e1.depth,0,te,z1,e1.data);else if(M.isFramebufferTexture){if(Ae)if(k1)n.texStorage2D(t.TEXTURE_2D,a1,M1,e1.width,e1.height);else{let N=e1.width,n1=e1.height;for(let c1=0;c1<a1;c1++)n.texImage2D(t.TEXTURE_2D,c1,M1,N,n1,0,te,z1,null),N>>=1,n1>>=1}}else if(ae.length>0&&je){if(k1&&Ae){let N=Be(ae[0]);n.texStorage2D(t.TEXTURE_2D,a1,M1,N.width,N.height)}for(let N=0,n1=ae.length;N<n1;N++)y1=ae[N],k1?E&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,te,z1,y1):n.texImage2D(t.TEXTURE_2D,N,M1,te,z1,y1);M.generateMipmaps=!1}else if(k1){if(Ae){let N=Be(e1);n.texStorage2D(t.TEXTURE_2D,a1,M1,N.width,N.height)}E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te,z1,e1)}else n.texImage2D(t.TEXTURE_2D,0,M1,te,z1,e1);y(M,je)&&b(j),G1.__version=Y.version,M.onUpdate&&M.onUpdate(M)}z.__version=M.version}function N1(z,M,F){if(M.image.length!==6)return;let j=J(z,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+F);let Y=i.get(K);if(K.version!==Y.__version||j===!0){n.activeTexture(t.TEXTURE0+F);let G1=Ce.getPrimaries(Ce.workingColorSpace),T1=M.colorSpace===s4?null:Ce.getPrimaries(M.colorSpace),s1=M.colorSpace===s4||G1===T1?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,s1);let o1=M.isCompressedTexture||M.image[0].isCompressedTexture,W1=M.image[0]&&M.image[0].isDataTexture,e1=[];for(let N=0;N<6;N++)!o1&&!W1?e1[N]=p(M.image[N],!1,!0,r.maxCubemapSize):e1[N]=W1?M.image[N].image:M.image[N],e1[N]=ee(M,e1[N]);let je=e1[0],te=d(je)||o,z1=s.convert(M.format,M.colorSpace),M1=s.convert(M.type),y1=L(M.internalFormat,z1,M1,M.colorSpace),ae=o&&M.isVideoTexture!==!0,k1=Y.__version===void 0||j===!0,Ae=K.dataReady,E=H(M,je,te);O(t.TEXTURE_CUBE_MAP,M,te);let a1;if(o1){ae&&k1&&n.texStorage2D(t.TEXTURE_CUBE_MAP,E,y1,je.width,je.height);for(let N=0;N<6;N++){a1=e1[N].mipmaps;for(let n1=0;n1<a1.length;n1++){let c1=a1[n1];M.format!==Ht?z1!==null?ae?Ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1,0,0,c1.width,c1.height,z1,c1.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1,y1,c1.width,c1.height,0,c1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1,0,0,c1.width,c1.height,z1,M1,c1.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1,y1,c1.width,c1.height,0,z1,M1,c1.data)}}}else{if(a1=M.mipmaps,ae&&k1){a1.length>0&&E++;let N=Be(e1[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,E,y1,N.width,N.height)}for(let N=0;N<6;N++)if(W1){ae?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,e1[N].width,e1[N].height,z1,M1,e1[N].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,y1,e1[N].width,e1[N].height,0,z1,M1,e1[N].data);for(let n1=0;n1<a1.length;n1++){let ie=a1[n1].image[N].image;ae?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1+1,0,0,ie.width,ie.height,z1,M1,ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1+1,y1,ie.width,ie.height,0,z1,M1,ie.data)}}else{ae?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,z1,M1,e1[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,y1,z1,M1,e1[N]);for(let n1=0;n1<a1.length;n1++){let c1=a1[n1];ae?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1+1,0,0,z1,M1,c1.image[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,n1+1,y1,z1,M1,c1.image[N])}}}y(M,te)&&b(t.TEXTURE_CUBE_MAP),Y.__version=K.version,M.onUpdate&&M.onUpdate(M)}z.__version=M.version}function b1(z,M,F,j,K,Y){let G1=s.convert(F.format,F.colorSpace),T1=s.convert(F.type),s1=L(F.internalFormat,G1,T1,F.colorSpace);if(!i.get(M).__hasExternalTextures){let W1=Math.max(1,M.width>>Y),e1=Math.max(1,M.height>>Y);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,Y,s1,W1,e1,M.depth,0,G1,T1,null):n.texImage2D(K,Y,s1,W1,e1,0,G1,T1,null)}n.bindFramebuffer(t.FRAMEBUFFER,z),se(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,i.get(F).__webglTexture,0,A1(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,i.get(F).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function m1(z,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,z),M.depthBuffer&&!M.stencilBuffer){let j=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||se(M)){let K=M.depthTexture;K&&K.isDepthTexture&&(K.type===b3?j=t.DEPTH_COMPONENT32F:K.type===a4&&(j=t.DEPTH_COMPONENT24));let Y=A1(M);se(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,j,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,j,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,j,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,z)}else if(M.depthBuffer&&M.stencilBuffer){let j=A1(M);F&&se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,M.width,M.height):se(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,z)}else{let j=M.textures;for(let K=0;K<j.length;K++){let Y=j[K],G1=s.convert(Y.format,Y.colorSpace),T1=s.convert(Y.type),s1=L(Y.internalFormat,G1,T1,Y.colorSpace),o1=A1(M);F&&se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,o1,s1,M.width,M.height):se(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,o1,s1,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,s1,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(z,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let j=i.get(M.depthTexture).__webglTexture,K=A1(M);if(M.depthTexture.format===nn)se(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(M.depthTexture.format===Oi)se(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function I1(z){let M=i.get(z),F=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,z)}else if(F){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=t.createRenderbuffer(),m1(M.__webglDepthbuffer[j],z,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),m1(M.__webglDepthbuffer,z,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function T(z,M,F){let j=i.get(z);M!==void 0&&b1(j.__webglFramebuffer,z,z.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&I1(z)}function i2(z){let M=z.texture,F=i.get(z),j=i.get(M);z.addEventListener("dispose",Z);let K=z.textures,Y=z.isWebGLCubeRenderTarget===!0,G1=K.length>1,T1=d(z)||o;if(G1||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let s1=0;s1<6;s1++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[s1]=[];for(let o1=0;o1<M.mipmaps.length;o1++)F.__webglFramebuffer[s1][o1]=t.createFramebuffer()}else F.__webglFramebuffer[s1]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let s1=0;s1<M.mipmaps.length;s1++)F.__webglFramebuffer[s1]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(G1)if(r.drawBuffers)for(let s1=0,o1=K.length;s1<o1;s1++){let W1=i.get(K[s1]);W1.__webglTexture===void 0&&(W1.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&z.samples>0&&se(z)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let s1=0;s1<K.length;s1++){let o1=K[s1];F.__webglColorRenderbuffer[s1]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[s1]);let W1=s.convert(o1.format,o1.colorSpace),e1=s.convert(o1.type),je=L(o1.internalFormat,W1,e1,o1.colorSpace,z.isXRRenderTarget===!0),te=A1(z);t.renderbufferStorageMultisample(t.RENDERBUFFER,te,je,z.width,z.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+s1,t.RENDERBUFFER,F.__webglColorRenderbuffer[s1])}t.bindRenderbuffer(t.RENDERBUFFER,null),z.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),m1(F.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),O(t.TEXTURE_CUBE_MAP,M,T1);for(let s1=0;s1<6;s1++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let o1=0;o1<M.mipmaps.length;o1++)b1(F.__webglFramebuffer[s1][o1],z,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+s1,o1);else b1(F.__webglFramebuffer[s1],z,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+s1,0);y(M,T1)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(G1){for(let s1=0,o1=K.length;s1<o1;s1++){let W1=K[s1],e1=i.get(W1);n.bindTexture(t.TEXTURE_2D,e1.__webglTexture),O(t.TEXTURE_2D,W1,T1),b1(F.__webglFramebuffer,z,W1,t.COLOR_ATTACHMENT0+s1,t.TEXTURE_2D,0),y(W1,T1)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let s1=t.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(o?s1=z.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(s1,j.__webglTexture),O(s1,M,T1),o&&M.mipmaps&&M.mipmaps.length>0)for(let o1=0;o1<M.mipmaps.length;o1++)b1(F.__webglFramebuffer[o1],z,M,t.COLOR_ATTACHMENT0,s1,o1);else b1(F.__webglFramebuffer,z,M,t.COLOR_ATTACHMENT0,s1,0);y(M,T1)&&b(s1),n.unbindTexture()}z.depthBuffer&&I1(z)}function w1(z){let M=d(z)||o,F=z.textures;for(let j=0,K=F.length;j<K;j++){let Y=F[j];if(y(Y,M)){let G1=z.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,T1=i.get(Y).__webglTexture;n.bindTexture(G1,T1),b(G1),n.unbindTexture()}}}function K1(z){if(o&&z.samples>0&&se(z)===!1){let M=z.textures,F=z.width,j=z.height,K=t.COLOR_BUFFER_BIT,Y=[],G1=z.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,T1=i.get(z),s1=M.length>1;if(s1)for(let o1=0;o1<M.length;o1++)n.bindFramebuffer(t.FRAMEBUFFER,T1.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+o1,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,T1.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+o1,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,T1.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,T1.__webglFramebuffer);for(let o1=0;o1<M.length;o1++){Y.push(t.COLOR_ATTACHMENT0+o1),z.depthBuffer&&Y.push(G1);let W1=T1.__ignoreDepthValues!==void 0?T1.__ignoreDepthValues:!1;if(W1===!1&&(z.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),z.stencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),s1&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,T1.__webglColorRenderbuffer[o1]),W1===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[G1]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[G1])),s1){let e1=i.get(M[o1]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e1,0)}t.blitFramebuffer(0,0,F,j,0,0,F,j,K,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Y)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),s1)for(let o1=0;o1<M.length;o1++){n.bindFramebuffer(t.FRAMEBUFFER,T1.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+o1,t.RENDERBUFFER,T1.__webglColorRenderbuffer[o1]);let W1=i.get(M[o1]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,T1.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+o1,t.TEXTURE_2D,W1,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,T1.__webglMultisampledFramebuffer)}}function A1(z){return Math.min(r.maxSamples,z.samples)}function se(z){let M=i.get(z);return o&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y1(z){let M=a.render.frame;u.get(z)!==M&&(u.set(z,M),z.update())}function ee(z,M){let F=z.colorSpace,j=z.format,K=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===al||F!==d4&&F!==s4&&(Ce.getTransfer(F)===Le?o===!1?e.has("EXT_sRGB")===!0&&j===Ht?(z.format=al,z.minFilter=R2,z.generateMipmaps=!1):M=I0.sRGBToLinear(M):(j!==Ht||K!==c4)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Be(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(f.width=z.naturalWidth||z.width,f.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(f.width=z.displayWidth,f.height=z.displayHeight):(f.width=z.width,f.height=z.height),f}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=T,this.setupRenderTarget=i2,this.updateRenderTargetMipmap=w1,this.updateMultisampleRenderTarget=K1,this.setupDepthRenderbuffer=I1,this.setupFrameBufferTexture=b1,this.useMultisampledRTT=se}function XN(t,e,n){let i=n.isWebGL2;function r(s,a=s4){let o,c=Ce.getTransfer(a);if(s===c4)return t.UNSIGNED_BYTE;if(s===Cv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===yv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===kE)return t.BYTE;if(s===OE)return t.SHORT;if(s===Il)return t.UNSIGNED_SHORT;if(s===Mv)return t.INT;if(s===a4)return t.UNSIGNED_INT;if(s===b3)return t.FLOAT;if(s===rn)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===FE)return t.ALPHA;if(s===Ht)return t.RGBA;if(s===UE)return t.LUMINANCE;if(s===BE)return t.LUMINANCE_ALPHA;if(s===nn)return t.DEPTH_COMPONENT;if(s===Oi)return t.DEPTH_STENCIL;if(s===al)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===GE)return t.RED;if(s===xv)return t.RED_INTEGER;if(s===WE)return t.RG;if(s===bv)return t.RG_INTEGER;if(s===zv)return t.RGBA_INTEGER;if(s===b7||s===z7||s===_7||s===w7)if(c===Le)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===b7)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===z7)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_7)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===w7)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===b7)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===z7)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_7)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===w7)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Km||s===Qm||s===eg||s===tg)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Km)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eg)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tg)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_v)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ng||s===ig)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ng)return c===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ig)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rg||s===sg||s===ag||s===og||s===cg||s===lg||s===fg||s===ug||s===hg||s===dg||s===pg||s===mg||s===gg||s===vg)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ag)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===og)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ug)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vg)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===S7||s===Mg||s===Cg)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===S7)return c===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mg)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cg)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jE||s===yg||s===xg||s===bg)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===S7)return o.COMPRESSED_RED_RGTC1_EXT;if(s===yg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bg)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tn?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}var bl=class extends u2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Di=class extends ji{constructor(){super(),this.isGroup=!0,this.type="Group"}},YN={type:"move"},h6=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let p=n.getJointPose(v,i),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YN)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},ZN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JN=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){let i=n.cameras[0].viewport,r=new p2({extensions:{fragDepth:!0},vertexShader:ZN,fragmentShader:JN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new d2(new h4(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}},_l=class extends f4{constructor(e,n){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,h=null,m=null,g=null,v=new zl,p=n.getContextAttributes(),d=null,_=null,y=[],b=[],L=new oe,H=null,S=new u2;S.layers.enable(1),S.viewport=new h2;let k=new u2;k.layers.enable(2),k.viewport=new h2;let Z=[S,k],C=new bl;C.layers.enable(1),C.layers.enable(2);let w=null,t1=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=y[O];return J===void 0&&(J=new h6,y[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=y[O];return J===void 0&&(J=new h6,y[O]=J),J.getGripSpace()},this.getHand=function(O){let J=y[O];return J===void 0&&(J=new h6,y[O]=J),J.getHandSpace()};function Q(O){let J=b.indexOf(O.inputSource);if(J===-1)return;let h1=y[J];h1!==void 0&&(h1.update(O.inputSource,O.frame,l||a),h1.dispatchEvent({type:O.type,data:O.inputSource}))}function V(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let O=0;O<y.length;O++){let J=b[O];J!==null&&(b[O]=null,y[O].disconnect(J))}w=null,t1=null,v.reset(),e.setRenderTarget(d),m=null,h=null,u=null,r=null,_=null,B1.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(O){return pn(this,null,function*(){if(r=O,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&(yield n.makeXRCompatible()),H=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Lt(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:c4,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,h1=null,N1=null;p.depth&&(N1=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=p.stencil?Oi:nn,h1=p.stencil?tn:a4);let b1={colorFormat:n.RGBA8,depthFormat:N1,scaleFactor:s};u=new XRWebGLBinding(r,n),h=u.createProjectionLayer(b1),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Lt(h.textureWidth,h.textureHeight,{format:Ht,type:c4,depthTexture:new q0(h.textureWidth,h.textureHeight,h1,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let m1=e.properties.get(_);m1.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=yield r.requestReferenceSpace(o),B1.setContext(r),B1.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(O){for(let J=0;J<O.removed.length;J++){let h1=O.removed[J],N1=b.indexOf(h1);N1>=0&&(b[N1]=null,y[N1].disconnect(h1))}for(let J=0;J<O.added.length;J++){let h1=O.added[J],N1=b.indexOf(h1);if(N1===-1){for(let m1=0;m1<y.length;m1++)if(m1>=b.length){b.push(h1),N1=m1;break}else if(b[m1]===null){b[m1]=h1,N1=m1;break}if(N1===-1)break}let b1=y[N1];b1&&b1.connect(h1)}}let U=new R,$=new R;function B(O,J,h1){U.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(h1.matrixWorld);let N1=U.distanceTo($),b1=J.projectionMatrix.elements,m1=h1.projectionMatrix.elements,me=b1[14]/(b1[10]-1),I1=b1[14]/(b1[10]+1),T=(b1[9]+1)/b1[5],i2=(b1[9]-1)/b1[5],w1=(b1[8]-1)/b1[0],K1=(m1[8]+1)/m1[0],A1=me*w1,se=me*K1,Y1=N1/(-w1+K1),ee=Y1*-w1;J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ee),O.translateZ(Y1),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let Be=me+Y1,z=I1+Y1,M=A1-ee,F=se+(N1-ee),j=T*I1/z*Be,K=i2*I1/z*Be;O.projectionMatrix.makePerspective(M,F,j,K,Be,z),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function q(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;v.texture!==null&&(O.near=v.depthNear,O.far=v.depthFar),C.near=k.near=S.near=O.near,C.far=k.far=S.far=O.far,(w!==C.near||t1!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),w=C.near,t1=C.far,S.near=w,S.far=t1,k.near=w,k.far=t1,S.updateProjectionMatrix(),k.updateProjectionMatrix(),O.updateProjectionMatrix());let J=O.parent,h1=C.cameras;q(C,J);for(let N1=0;N1<h1.length;N1++)q(h1[N1],J);h1.length===2?B(C,S,k):C.projectionMatrix.copy(S.projectionMatrix),X(O,C,J)};function X(O,J,h1){h1===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(h1.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ol*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(O){c=O,h!==null&&(h.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null};let r1=null;function p1(O,J){if(f=J.getViewerPose(l||a),g=J,f!==null){let h1=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let N1=!1;h1.length!==C.cameras.length&&(C.cameras.length=0,N1=!0);for(let m1=0;m1<h1.length;m1++){let me=h1[m1],I1=null;if(m!==null)I1=m.getViewport(me);else{let i2=u.getViewSubImage(h,me);I1=i2.viewport,m1===0&&(e.setRenderTargetTextures(_,i2.colorTexture,h.ignoreDepthValues?void 0:i2.depthStencilTexture),e.setRenderTarget(_))}let T=Z[m1];T===void 0&&(T=new u2,T.layers.enable(m1),T.viewport=new h2,Z[m1]=T),T.matrix.fromArray(me.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(me.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(I1.x,I1.y,I1.width,I1.height),m1===0&&(C.matrix.copy(T.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),N1===!0&&C.cameras.push(T)}let b1=r.enabledFeatures;if(b1&&b1.includes("depth-sensing")){let m1=u.getDepthInformation(h1[0]);m1&&m1.isValid&&m1.texture&&v.init(e,m1,r.renderState)}}for(let h1=0;h1<y.length;h1++){let N1=b[h1],b1=y[h1];N1!==null&&b1!==void 0&&b1.update(N1,J,l||a)}v.render(e,C),r1&&r1(O,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let B1=new Ev;B1.setAnimationLoop(p1),this.setAnimationLoop=function(O){r1=O},this.dispose=function(){}}},Z4=new Fi,KN=new n2;function QN(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Lv(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,_,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,_,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===k2&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===k2&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _=e.get(d),y=_.envMap,b=_.envMapRotation;if(y&&(p.envMap.value=y,Z4.copy(b),Z4.x*=-1,Z4.y*=-1,Z4.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Z4.y*=-1,Z4.z*=-1),p.envMapRotation.value.setFromMatrix4(KN.makeRotationFromEuler(Z4)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let L=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*L,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,_,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=y*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===k2&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let _=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eI(t,e,n,i){let r={},s={},a=[],o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){let b=y.program;i.uniformBlockBinding(_,b)}function l(_,y){let b=r[_.id];b===void 0&&(g(_),b=f(_),r[_.id]=b,_.addEventListener("dispose",p));let L=y.program;i.updateUBOMapping(_,L);let H=e.render.frame;s[_.id]!==H&&(h(_),s[_.id]=H)}function f(_){let y=u();_.__bindingPointIndex=y;let b=t.createBuffer(),L=_.__size,H=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,L,H),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let y=r[_.id],b=_.uniforms,L=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let H=0,S=b.length;H<S;H++){let k=Array.isArray(b[H])?b[H]:[b[H]];for(let Z=0,C=k.length;Z<C;Z++){let w=k[Z];if(m(w,H,Z,L)===!0){let t1=w.__offset,Q=Array.isArray(w.value)?w.value:[w.value],V=0;for(let W=0;W<Q.length;W++){let U=Q[W],$=v(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,t1+V,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,t1,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,y,b,L){let H=_.value,S=y+"_"+b;if(L[S]===void 0)return typeof H=="number"||typeof H=="boolean"?L[S]=H:L[S]=H.clone(),!0;{let k=L[S];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return L[S]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function g(_){let y=_.uniforms,b=0,L=16;for(let S=0,k=y.length;S<k;S++){let Z=Array.isArray(y[S])?y[S]:[y[S]];for(let C=0,w=Z.length;C<w;C++){let t1=Z[C],Q=Array.isArray(t1.value)?t1.value:[t1.value];for(let V=0,W=Q.length;V<W;V++){let U=Q[V],$=v(U),B=b%L;B!==0&&L-B<$.boundary&&(b+=L-B),t1.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),t1.__offset=b,b+=$.storage}}}let H=b%L;return H>0&&(b+=L-H),_.__size=b,_.__cache={},this}function v(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(let _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}var an=class{constructor(e={}){let{canvas:n=rV(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=o4,this.toneMappingExposure=1;let y=this,b=!1,L=0,H=0,S=null,k=-1,Z=null,C=new h2,w=new h2,t1=null,Q=new ue(0),V=0,W=n.width,U=n.height,$=1,B=null,q=null,X=new h2(0,0,W,U),r1=new h2(0,0,W,U),p1=!1,B1=new W0,O=!1,J=!1,h1=null,N1=new n2,b1=new oe,m1=new R,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function I1(){return S===null?$:1}let T=i;function i2(x,A){for(let I=0;I<x.length;I++){let P=x[I],D=n.getContext(P,A);if(D!==null)return D}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nl}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",E,!1),n.addEventListener("webglcontextcreationerror",a1,!1),T===null){let A=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&A.shift(),T=i2(A,x),T===null)throw i2(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&T instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let w1,K1,A1,se,Y1,ee,Be,z,M,F,j,K,Y,G1,T1,s1,o1,W1,e1,je,te,z1,M1,y1;function ae(){w1=new gD(T),K1=new fD(T,w1,e),w1.init(K1),z1=new XN(T,w1,K1),A1=new qN(T,w1,K1),se=new CD(T),Y1=new NN,ee=new $N(T,w1,A1,Y1,K1,z1,se),Be=new hD(y),z=new mD(y),M=new wV(T,K1),M1=new cD(T,w1,M,K1),F=new vD(T,M,se,M1),j=new zD(T,F,M,se),e1=new bD(T,K1,ee),s1=new uD(Y1),K=new DN(y,Be,z,w1,K1,M1,s1),Y=new QN(y,Y1),G1=new RN,T1=new BN(w1,K1),W1=new oD(y,Be,z,A1,j,h,c),o1=new jN(y,j,K1),y1=new eI(T,se,K1,A1),je=new lD(T,w1,se,K1),te=new MD(T,w1,se,K1),se.programs=K.programs,y.capabilities=K1,y.extensions=w1,y.properties=Y1,y.renderLists=G1,y.shadowMap=o1,y.state=A1,y.info=se}ae();let k1=new _l(y,T);this.xr=k1,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let x=w1.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=w1.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(W,U,!1))},this.getSize=function(x){return x.set(W,U)},this.setSize=function(x,A,I=!0){if(k1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,U=A,n.width=Math.floor(x*$),n.height=Math.floor(A*$),I===!0&&(n.style.width=x+"px",n.style.height=A+"px"),this.setViewport(0,0,x,A)},this.getDrawingBufferSize=function(x){return x.set(W*$,U*$).floor()},this.setDrawingBufferSize=function(x,A,I){W=x,U=A,$=I,n.width=Math.floor(x*I),n.height=Math.floor(A*I),this.setViewport(0,0,x,A)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(X)},this.setViewport=function(x,A,I,P){x.isVector4?X.set(x.x,x.y,x.z,x.w):X.set(x,A,I,P),A1.viewport(C.copy(X).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(r1)},this.setScissor=function(x,A,I,P){x.isVector4?r1.set(x.x,x.y,x.z,x.w):r1.set(x,A,I,P),A1.scissor(w.copy(r1).multiplyScalar($).round())},this.getScissorTest=function(){return p1},this.setScissorTest=function(x){A1.setScissorTest(p1=x)},this.setOpaqueSort=function(x){B=x},this.setTransparentSort=function(x){q=x},this.getClearColor=function(x){return x.copy(W1.getClearColor())},this.setClearColor=function(){W1.setClearColor.apply(W1,arguments)},this.getClearAlpha=function(){return W1.getClearAlpha()},this.setClearAlpha=function(){W1.setClearAlpha.apply(W1,arguments)},this.clear=function(x=!0,A=!0,I=!0){let P=0;if(x){let D=!1;if(S!==null){let f1=S.texture.format;D=f1===zv||f1===bv||f1===xv}if(D){let f1=S.texture.type,x1=f1===c4||f1===a4||f1===Il||f1===tn||f1===Cv||f1===yv,S1=W1.getClearColor(),D1=W1.getClearAlpha(),Z1=S1.r,P1=S1.g,O1=S1.b;x1?(m[0]=Z1,m[1]=P1,m[2]=O1,m[3]=D1,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Z1,g[1]=P1,g[2]=O1,g[3]=D1,T.clearBufferiv(T.COLOR,0,g))}else P|=T.COLOR_BUFFER_BIT}A&&(P|=T.DEPTH_BUFFER_BIT),I&&(P|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",E,!1),n.removeEventListener("webglcontextcreationerror",a1,!1),G1.dispose(),T1.dispose(),Y1.dispose(),Be.dispose(),z.dispose(),j.dispose(),M1.dispose(),y1.dispose(),K.dispose(),k1.dispose(),k1.removeEventListener("sessionstart",K2),k1.removeEventListener("sessionend",ze),h1&&(h1.dispose(),h1=null),b2.stop()};function Ae(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function E(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let x=se.autoReset,A=o1.enabled,I=o1.autoUpdate,P=o1.needsUpdate,D=o1.type;ae(),se.autoReset=x,o1.enabled=A,o1.autoUpdate=I,o1.needsUpdate=P,o1.type=D}function a1(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function N(x){let A=x.target;A.removeEventListener("dispose",N),n1(A)}function n1(x){c1(x),Y1.remove(x)}function c1(x){let A=Y1.get(x).programs;A!==void 0&&(A.forEach(function(I){K.releaseProgram(I)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,A,I,P,D,f1){A===null&&(A=me);let x1=D.isMesh&&D.matrixWorld.determinant()<0,S1=hC(x,A,I,P,D);A1.setMaterial(P,x1);let D1=I.index,Z1=1;if(P.wireframe===!0){if(D1=F.getWireframeAttribute(I),D1===void 0)return;Z1=2}let P1=I.drawRange,O1=I.attributes.position,Ge=P1.start*Z1,O2=(P1.start+P1.count)*Z1;f1!==null&&(Ge=Math.max(Ge,f1.start*Z1),O2=Math.min(O2,(f1.start+f1.count)*Z1)),D1!==null?(Ge=Math.max(Ge,0),O2=Math.min(O2,D1.count)):O1!=null&&(Ge=Math.max(Ge,0),O2=Math.min(O2,O1.count));let Je=O2-Ge;if(Je<0||Je===1/0)return;M1.setup(D,P,S1,I,D1);let Qt,De=je;if(D1!==null&&(Qt=M.get(D1),De=te,De.setIndex(Qt)),D.isMesh)P.wireframe===!0?(A1.setLineWidth(P.wireframeLinewidth*I1()),De.setMode(T.LINES)):De.setMode(T.TRIANGLES);else if(D.isLine){let j1=P.linewidth;j1===void 0&&(j1=1),A1.setLineWidth(j1*I1()),D.isLineSegments?De.setMode(T.LINES):D.isLineLoop?De.setMode(T.LINE_LOOP):De.setMode(T.LINE_STRIP)}else D.isPoints?De.setMode(T.POINTS):D.isSprite&&De.setMode(T.TRIANGLES);if(D.isBatchedMesh)De.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)De.renderInstances(Ge,Je,D.count);else if(I.isInstancedBufferGeometry){let j1=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,wo=Math.min(I.instanceCount,j1);De.renderInstances(Ge,Je,wo)}else De.render(Ge,Je)};function ie(x,A,I){x.transparent===!0&&x.side===x3&&x.forceSinglePass===!1?(x.side=k2,x.needsUpdate=!0,P6(x,A,I),x.side=l4,x.needsUpdate=!0,P6(x,A,I),x.side=x3):P6(x,A,I)}this.compile=function(x,A,I=null){I===null&&(I=x),p=T1.get(I),p.init(),_.push(p),I.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),x!==I&&x.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(y._useLegacyLights);let P=new Set;return x.traverse(function(D){let f1=D.material;if(f1)if(Array.isArray(f1))for(let x1=0;x1<f1.length;x1++){let S1=f1[x1];ie(S1,I,D),P.add(S1)}else ie(f1,I,D),P.add(f1)}),_.pop(),p=null,P},this.compileAsync=function(x,A,I=null){let P=this.compile(x,A,I);return new Promise(D=>{function f1(){if(P.forEach(function(x1){Y1.get(x1).currentProgram.isReady()&&P.delete(x1)}),P.size===0){D(x);return}setTimeout(f1,10)}w1.get("KHR_parallel_shader_compile")!==null?f1():setTimeout(f1,10)})};let be=null;function r2(x){be&&be(x)}function K2(){b2.stop()}function ze(){b2.start()}let b2=new Ev;b2.setAnimationLoop(r2),typeof self<"u"&&b2.setContext(self),this.setAnimationLoop=function(x){be=x,k1.setAnimationLoop(x),x===null?b2.stop():b2.start()},k1.addEventListener("sessionstart",K2),k1.addEventListener("sessionend",ze),this.render=function(x,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k1.enabled===!0&&k1.isPresenting===!0&&(k1.cameraAutoUpdate===!0&&k1.updateCamera(A),A=k1.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,A,S),p=T1.get(x,_.length),p.init(),_.push(p),N1.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),B1.setFromProjectionMatrix(N1),J=this.localClippingEnabled,O=s1.init(this.clippingPlanes,J),v=G1.get(x,d.length),v.init(),d.push(v),At(x,A,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(B,q),this.info.render.frame++,O===!0&&s1.beginShadows();let I=p.state.shadowsArray;if(o1.render(I,x,A),O===!0&&s1.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k1.enabled===!1||k1.isPresenting===!1||k1.hasDepthSensing()===!1)&&W1.render(v,x),p.setupLights(y._useLegacyLights),A.isArrayCamera){let P=A.cameras;for(let D=0,f1=P.length;D<f1;D++){let x1=P[D];_9(v,x,x1,x1.viewport)}}else _9(v,x,A);S!==null&&(ee.updateMultisampleRenderTarget(S),ee.updateRenderTargetMipmap(S)),x.isScene===!0&&x.onAfterRender(y,x,A),M1.resetDefaultState(),k=-1,Z=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function At(x,A,I,P){if(x.visible===!1)return;if(x.layers.test(A.layers)){if(x.isGroup)I=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(A);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||B1.intersectsSprite(x)){P&&m1.setFromMatrixPosition(x.matrixWorld).applyMatrix4(N1);let x1=j.update(x),S1=x.material;S1.visible&&v.push(x,x1,S1,I,m1.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||B1.intersectsObject(x))){let x1=j.update(x),S1=x.material;if(P&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),m1.copy(x.boundingSphere.center)):(x1.boundingSphere===null&&x1.computeBoundingSphere(),m1.copy(x1.boundingSphere.center)),m1.applyMatrix4(x.matrixWorld).applyMatrix4(N1)),Array.isArray(S1)){let D1=x1.groups;for(let Z1=0,P1=D1.length;Z1<P1;Z1++){let O1=D1[Z1],Ge=S1[O1.materialIndex];Ge&&Ge.visible&&v.push(x,x1,Ge,I,m1.z,O1)}}else S1.visible&&v.push(x,x1,S1,I,m1.z,null)}}let f1=x.children;for(let x1=0,S1=f1.length;x1<S1;x1++)At(f1[x1],A,I,P)}function _9(x,A,I,P){let D=x.opaque,f1=x.transmissive,x1=x.transparent;p.setupLightsView(I),O===!0&&s1.setGlobalState(y.clippingPlanes,I),f1.length>0&&uC(D,f1,A,I),P&&A1.viewport(C.copy(P)),D.length>0&&R6(D,A,I),f1.length>0&&R6(f1,A,I),x1.length>0&&R6(x1,A,I),A1.buffers.depth.setTest(!0),A1.buffers.depth.setMask(!0),A1.buffers.color.setMask(!0),A1.setPolygonOffset(!1)}function uC(x,A,I,P){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;let f1=K1.isWebGL2;h1===null&&(h1=new Lt(1,1,{generateMipmaps:!0,type:w1.has("EXT_color_buffer_half_float")?rn:c4,minFilter:en,samples:f1?4:0})),y.getDrawingBufferSize(b1),f1?h1.setSize(b1.x,b1.y):h1.setSize(cl(b1.x),cl(b1.y));let x1=y.getRenderTarget();y.setRenderTarget(h1),y.getClearColor(Q),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear();let S1=y.toneMapping;y.toneMapping=o4,R6(x,I,P),ee.updateMultisampleRenderTarget(h1),ee.updateRenderTargetMipmap(h1);let D1=!1;for(let Z1=0,P1=A.length;Z1<P1;Z1++){let O1=A[Z1],Ge=O1.object,O2=O1.geometry,Je=O1.material,Qt=O1.group;if(Je.side===x3&&Ge.layers.test(P.layers)){let De=Je.side;Je.side=k2,Je.needsUpdate=!0,w9(Ge,I,P,O2,Je,Qt),Je.side=De,Je.needsUpdate=!0,D1=!0}}D1===!0&&(ee.updateMultisampleRenderTarget(h1),ee.updateRenderTargetMipmap(h1)),y.setRenderTarget(x1),y.setClearColor(Q,V),y.toneMapping=S1}function R6(x,A,I){let P=A.isScene===!0?A.overrideMaterial:null;for(let D=0,f1=x.length;D<f1;D++){let x1=x[D],S1=x1.object,D1=x1.geometry,Z1=P===null?x1.material:P,P1=x1.group;S1.layers.test(I.layers)&&w9(S1,A,I,D1,Z1,P1)}}function w9(x,A,I,P,D,f1){x.onBeforeRender(y,A,I,P,D,f1),x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(y,A,I,P,x,f1),D.transparent===!0&&D.side===x3&&D.forceSinglePass===!1?(D.side=k2,D.needsUpdate=!0,y.renderBufferDirect(I,A,P,D,x,f1),D.side=l4,D.needsUpdate=!0,y.renderBufferDirect(I,A,P,D,x,f1),D.side=x3):y.renderBufferDirect(I,A,P,D,x,f1),x.onAfterRender(y,A,I,P,D,f1)}function P6(x,A,I){A.isScene!==!0&&(A=me);let P=Y1.get(x),D=p.state.lights,f1=p.state.shadowsArray,x1=D.state.version,S1=K.getParameters(x,D.state,f1,A,I),D1=K.getProgramCacheKey(S1),Z1=P.programs;P.environment=x.isMeshStandardMaterial?A.environment:null,P.fog=A.fog,P.envMap=(x.isMeshStandardMaterial?z:Be).get(x.envMap||P.environment),P.envMapRotation=P.environment!==null&&x.envMap===null?A.environmentRotation:x.envMapRotation,Z1===void 0&&(x.addEventListener("dispose",N),Z1=new Map,P.programs=Z1);let P1=Z1.get(D1);if(P1!==void 0){if(P.currentProgram===P1&&P.lightsStateVersion===x1)return H9(x,S1),P1}else S1.uniforms=K.getUniforms(x),x.onBuild(I,S1,y),x.onBeforeCompile(S1,y),P1=K.acquireProgram(S1,D1),Z1.set(D1,P1),P.uniforms=S1.uniforms;let O1=P.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(O1.clippingPlanes=s1.uniform),H9(x,S1),P.needsLights=pC(x),P.lightsStateVersion=x1,P.needsLights&&(O1.ambientLightColor.value=D.state.ambient,O1.lightProbe.value=D.state.probe,O1.directionalLights.value=D.state.directional,O1.directionalLightShadows.value=D.state.directionalShadow,O1.spotLights.value=D.state.spot,O1.spotLightShadows.value=D.state.spotShadow,O1.rectAreaLights.value=D.state.rectArea,O1.ltc_1.value=D.state.rectAreaLTC1,O1.ltc_2.value=D.state.rectAreaLTC2,O1.pointLights.value=D.state.point,O1.pointLightShadows.value=D.state.pointShadow,O1.hemisphereLights.value=D.state.hemi,O1.directionalShadowMap.value=D.state.directionalShadowMap,O1.directionalShadowMatrix.value=D.state.directionalShadowMatrix,O1.spotShadowMap.value=D.state.spotShadowMap,O1.spotLightMatrix.value=D.state.spotLightMatrix,O1.spotLightMap.value=D.state.spotLightMap,O1.pointShadowMap.value=D.state.pointShadowMap,O1.pointShadowMatrix.value=D.state.pointShadowMatrix),P.currentProgram=P1,P.uniformsList=null,P1}function S9(x){if(x.uniformsList===null){let A=x.currentProgram.getUniforms();x.uniformsList=Ri.seqWithValue(A.seq,x.uniforms)}return x.uniformsList}function H9(x,A){let I=Y1.get(x);I.outputColorSpace=A.outputColorSpace,I.batching=A.batching,I.instancing=A.instancing,I.instancingColor=A.instancingColor,I.instancingMorph=A.instancingMorph,I.skinning=A.skinning,I.morphTargets=A.morphTargets,I.morphNormals=A.morphNormals,I.morphColors=A.morphColors,I.morphTargetsCount=A.morphTargetsCount,I.numClippingPlanes=A.numClippingPlanes,I.numIntersection=A.numClipIntersection,I.vertexAlphas=A.vertexAlphas,I.vertexTangents=A.vertexTangents,I.toneMapping=A.toneMapping}function hC(x,A,I,P,D){A.isScene!==!0&&(A=me),ee.resetTextureUnits();let f1=A.fog,x1=P.isMeshStandardMaterial?A.environment:null,S1=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:d4,D1=(P.isMeshStandardMaterial?z:Be).get(P.envMap||x1),Z1=P.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,P1=!!I.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),O1=!!I.morphAttributes.position,Ge=!!I.morphAttributes.normal,O2=!!I.morphAttributes.color,Je=o4;P.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Je=y.toneMapping);let Qt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,De=Qt!==void 0?Qt.length:0,j1=Y1.get(P),wo=p.state.lights;if(O===!0&&(J===!0||x!==Z)){let Q2=x===Z&&P.id===k;s1.setState(P,x,Q2)}let Te=!1;P.version===j1.__version?(j1.needsLights&&j1.lightsStateVersion!==wo.state.version||j1.outputColorSpace!==S1||D.isBatchedMesh&&j1.batching===!1||!D.isBatchedMesh&&j1.batching===!0||D.isInstancedMesh&&j1.instancing===!1||!D.isInstancedMesh&&j1.instancing===!0||D.isSkinnedMesh&&j1.skinning===!1||!D.isSkinnedMesh&&j1.skinning===!0||D.isInstancedMesh&&j1.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&j1.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&j1.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&j1.instancingMorph===!1&&D.morphTexture!==null||j1.envMap!==D1||P.fog===!0&&j1.fog!==f1||j1.numClippingPlanes!==void 0&&(j1.numClippingPlanes!==s1.numPlanes||j1.numIntersection!==s1.numIntersection)||j1.vertexAlphas!==Z1||j1.vertexTangents!==P1||j1.morphTargets!==O1||j1.morphNormals!==Ge||j1.morphColors!==O2||j1.toneMapping!==Je||K1.isWebGL2===!0&&j1.morphTargetsCount!==De)&&(Te=!0):(Te=!0,j1.__version=P.version);let M4=j1.currentProgram;Te===!0&&(M4=P6(P,A,D));let L9=!1,er=!1,So=!1,m2=M4.getUniforms(),C4=j1.uniforms;if(A1.useProgram(M4.program)&&(L9=!0,er=!0,So=!0),P.id!==k&&(k=P.id,er=!0),L9||Z!==x){m2.setValue(T,"projectionMatrix",x.projectionMatrix),m2.setValue(T,"viewMatrix",x.matrixWorldInverse);let Q2=m2.map.cameraPosition;Q2!==void 0&&Q2.setValue(T,m1.setFromMatrixPosition(x.matrixWorld)),K1.logarithmicDepthBuffer&&m2.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&m2.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),Z!==x&&(Z=x,er=!0,So=!0)}if(D.isSkinnedMesh){m2.setOptional(T,D,"bindMatrix"),m2.setOptional(T,D,"bindMatrixInverse");let Q2=D.skeleton;Q2&&(K1.floatVertexTextures?(Q2.boneTexture===null&&Q2.computeBoneTexture(),m2.setValue(T,"boneTexture",Q2.boneTexture,ee)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}D.isBatchedMesh&&(m2.setOptional(T,D,"batchingTexture"),m2.setValue(T,"batchingTexture",D._matricesTexture,ee));let Ho=I.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&K1.isWebGL2===!0)&&e1.update(D,I,M4),(er||j1.receiveShadow!==D.receiveShadow)&&(j1.receiveShadow=D.receiveShadow,m2.setValue(T,"receiveShadow",D.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(C4.envMap.value=D1,C4.flipEnvMap.value=D1.isCubeTexture&&D1.isRenderTargetTexture===!1?-1:1),er&&(m2.setValue(T,"toneMappingExposure",y.toneMappingExposure),j1.needsLights&&dC(C4,So),f1&&P.fog===!0&&Y.refreshFogUniforms(C4,f1),Y.refreshMaterialUniforms(C4,P,$,U,h1),Ri.upload(T,S9(j1),C4,ee)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Ri.upload(T,S9(j1),C4,ee),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&m2.setValue(T,"center",D.center),m2.setValue(T,"modelViewMatrix",D.modelViewMatrix),m2.setValue(T,"normalMatrix",D.normalMatrix),m2.setValue(T,"modelMatrix",D.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let Q2=P.uniformsGroups;for(let Lo=0,mC=Q2.length;Lo<mC;Lo++)if(K1.isWebGL2){let E9=Q2[Lo];y1.update(E9,M4),y1.bind(E9,M4)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return M4}function dC(x,A){x.ambientLightColor.needsUpdate=A,x.lightProbe.needsUpdate=A,x.directionalLights.needsUpdate=A,x.directionalLightShadows.needsUpdate=A,x.pointLights.needsUpdate=A,x.pointLightShadows.needsUpdate=A,x.spotLights.needsUpdate=A,x.spotLightShadows.needsUpdate=A,x.rectAreaLights.needsUpdate=A,x.hemisphereLights.needsUpdate=A}function pC(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(x,A,I){Y1.get(x.texture).__webglTexture=A,Y1.get(x.depthTexture).__webglTexture=I;let P=Y1.get(x);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=I===void 0,P.__autoAllocateDepthBuffer||w1.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,A){let I=Y1.get(x);I.__webglFramebuffer=A,I.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(x,A=0,I=0){S=x,L=A,H=I;let P=!0,D=null,f1=!1,x1=!1;if(x){let D1=Y1.get(x);D1.__useDefaultFramebuffer!==void 0?(A1.bindFramebuffer(T.FRAMEBUFFER,null),P=!1):D1.__webglFramebuffer===void 0?ee.setupRenderTarget(x):D1.__hasExternalTextures&&ee.rebindTextures(x,Y1.get(x.texture).__webglTexture,Y1.get(x.depthTexture).__webglTexture);let Z1=x.texture;(Z1.isData3DTexture||Z1.isDataArrayTexture||Z1.isCompressedArrayTexture)&&(x1=!0);let P1=Y1.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(P1[A])?D=P1[A][I]:D=P1[A],f1=!0):K1.isWebGL2&&x.samples>0&&ee.useMultisampledRTT(x)===!1?D=Y1.get(x).__webglMultisampledFramebuffer:Array.isArray(P1)?D=P1[I]:D=P1,C.copy(x.viewport),w.copy(x.scissor),t1=x.scissorTest}else C.copy(X).multiplyScalar($).floor(),w.copy(r1).multiplyScalar($).floor(),t1=p1;if(A1.bindFramebuffer(T.FRAMEBUFFER,D)&&K1.drawBuffers&&P&&A1.drawBuffers(x,D),A1.viewport(C),A1.scissor(w),A1.setScissorTest(t1),f1){let D1=Y1.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+A,D1.__webglTexture,I)}else if(x1){let D1=Y1.get(x.texture),Z1=A||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,D1.__webglTexture,I||0,Z1)}k=-1},this.readRenderTargetPixels=function(x,A,I,P,D,f1,x1){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let S1=Y1.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&x1!==void 0&&(S1=S1[x1]),S1){A1.bindFramebuffer(T.FRAMEBUFFER,S1);try{let D1=x.texture,Z1=D1.format,P1=D1.type;if(Z1!==Ht&&z1.convert(Z1)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let O1=P1===rn&&(w1.has("EXT_color_buffer_half_float")||K1.isWebGL2&&w1.has("EXT_color_buffer_float"));if(P1!==c4&&z1.convert(P1)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&!(P1===b3&&(K1.isWebGL2||w1.has("OES_texture_float")||w1.has("WEBGL_color_buffer_float")))&&!O1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=x.width-P&&I>=0&&I<=x.height-D&&T.readPixels(A,I,P,D,z1.convert(Z1),z1.convert(P1),f1)}finally{let D1=S!==null?Y1.get(S).__webglFramebuffer:null;A1.bindFramebuffer(T.FRAMEBUFFER,D1)}}},this.copyFramebufferToTexture=function(x,A,I=0){let P=Math.pow(2,-I),D=Math.floor(A.image.width*P),f1=Math.floor(A.image.height*P);ee.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,I,0,0,x.x,x.y,D,f1),A1.unbindTexture()},this.copyTextureToTexture=function(x,A,I,P=0){let D=A.image.width,f1=A.image.height,x1=z1.convert(I.format),S1=z1.convert(I.type);ee.setTexture2D(I,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,P,x.x,x.y,D,f1,x1,S1,A.image.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,P,x.x,x.y,A.mipmaps[0].width,A.mipmaps[0].height,x1,A.mipmaps[0].data):T.texSubImage2D(T.TEXTURE_2D,P,x.x,x.y,x1,S1,A.image),P===0&&I.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),A1.unbindTexture()},this.copyTextureToTexture3D=function(x,A,I,P,D=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let f1=Math.round(x.max.x-x.min.x),x1=Math.round(x.max.y-x.min.y),S1=x.max.z-x.min.z+1,D1=z1.convert(P.format),Z1=z1.convert(P.type),P1;if(P.isData3DTexture)ee.setTexture3D(P,0),P1=T.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)ee.setTexture2DArray(P,0),P1=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let O1=T.getParameter(T.UNPACK_ROW_LENGTH),Ge=T.getParameter(T.UNPACK_IMAGE_HEIGHT),O2=T.getParameter(T.UNPACK_SKIP_PIXELS),Je=T.getParameter(T.UNPACK_SKIP_ROWS),Qt=T.getParameter(T.UNPACK_SKIP_IMAGES),De=I.isCompressedTexture?I.mipmaps[D]:I.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,De.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,De.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,x.min.x),T.pixelStorei(T.UNPACK_SKIP_ROWS,x.min.y),T.pixelStorei(T.UNPACK_SKIP_IMAGES,x.min.z),I.isDataTexture||I.isData3DTexture?T.texSubImage3D(P1,D,A.x,A.y,A.z,f1,x1,S1,D1,Z1,De.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(P1,D,A.x,A.y,A.z,f1,x1,S1,D1,De.data):T.texSubImage3D(P1,D,A.x,A.y,A.z,f1,x1,S1,D1,Z1,De),T.pixelStorei(T.UNPACK_ROW_LENGTH,O1),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ge),T.pixelStorei(T.UNPACK_SKIP_PIXELS,O2),T.pixelStorei(T.UNPACK_SKIP_ROWS,Je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Qt),D===0&&P.generateMipmaps&&T.generateMipmap(P1),A1.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?ee.setTextureCube(x,0):x.isData3DTexture?ee.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ee.setTexture2DArray(x,0):ee.setTexture2D(x,0),A1.unbindTexture()},this.resetState=function(){L=0,H=0,S=null,A1.reset(),M1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return z3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",n.unpackColorSpace=Ce.workingColorSpace===Y0?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wl=class extends an{};wl.prototype.isWebGL1Renderer=!0;var Gi=class extends ji{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}};function S0(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function tI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Wi=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){let o=n[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends Wi{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zg,endingEnd:zg}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _g:s=e,o=2*n-i;break;case wg:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case _g:a=e,c=2*i-n;break;case wg:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=n}let l=(i-n)*.5,f=this.valueSize;this._weightPrev=l/(n-o),this._weightNext=l/(c-i),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-n)/(r-n),v=g*g,p=v*g,d=-h*p+2*h*v-h*g,_=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,y=(-1-m)*p+(1.5+m)*v+.5*g,b=m*p-m*v;for(let L=0;L!==o;++L)s[L]=d*a[f+L]+_*a[l+L]+y*a[c+L]+b*a[u+L];return s}},Hl=class extends Wi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=(i-n)/(r-n),u=1-f;for(let h=0;h!==o;++h)s[h]=a[l+h]*u+a[c+h]*f;return s}},Ll=class extends Wi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Et=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=S0(n,this.TimeBufferType),this.values=S0(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:S0(e.times,Array),values:S0(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case L0:n=this.InterpolantFactoryMethodDiscrete;break;case E0:n=this.InterpolantFactoryMethodLinear;break;case H7:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return L0;case this.InterpolantFactoryMethodLinear:return E0;case this.InterpolantFactoryMethodSmooth:return H7}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&tI(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===H7,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],f=e[o+1];if(l!==f&&(o!==1||l!==e[0]))if(r)c=!0;else{let u=o*i,h=u-i,m=u+i;for(let g=0;g!==i;++g){let v=n[u+g];if(v!==n[h+g]||v!==n[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,h=a*i;for(let m=0;m!==i;++m)n[h+m]=n[u+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)n[c+l]=n[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Et.prototype.TimeBufferType=Float32Array;Et.prototype.ValueBufferType=Float32Array;Et.prototype.DefaultInterpolation=E0;var on=class extends Et{};on.prototype.ValueTypeName="bool";on.prototype.ValueBufferType=Array;on.prototype.DefaultInterpolation=L0;on.prototype.InterpolantFactoryMethodLinear=void 0;on.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Et{};El.prototype.ValueTypeName="color";var Vl=class extends Et{};Vl.prototype.ValueTypeName="number";var Al=class extends Wi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-n)/(r-n),l=e*o;for(let f=l+o;l!==f;l+=4)u4.slerpFlat(s,0,a,l-o,a,l,c);return s}},g6=class extends Et{InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};g6.prototype.ValueTypeName="quaternion";g6.prototype.DefaultInterpolation=E0;g6.prototype.InterpolantFactoryMethodSmooth=void 0;var cn=class extends Et{};cn.prototype.ValueTypeName="string";cn.prototype.ValueBufferType=Array;cn.prototype.DefaultInterpolation=L0;cn.prototype.InterpolantFactoryMethodLinear=void 0;cn.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Et{};Tl.prototype.ValueTypeName="vector";var $0=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=mv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function mv(){return(typeof performance>"u"?Date:performance).now()}var Ol="\\[\\]\\.:\\/",nI=new RegExp("["+Ol+"]","g"),Fl="[^"+Ol+"]",iI="[^"+Ol.replace("\\.","")+"]",rI=/((?:WC+[\/:])*)/.source.replace("WC",Fl),sI=/(WCOD+)?/.source.replace("WCOD",iI),aI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),oI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),cI=new RegExp("^"+rI+sI+aI+oI+"$"),lI=["material","materials","bones","map"],Dl=class{constructor(e,n,i){let r=i||We.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},We=(()=>{class t{constructor(n,i,r){this.path=i,this.parsedPath=r||t.parseTrackName(i),this.node=t.findNode(n,this.parsedPath.nodeName),this.rootNode=n,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(n,i,r){return n&&n.isAnimationObjectGroup?new t.Composite(n,i,r):new t(n,i,r)}static sanitizeNodeName(n){return n.replace(/\s/g,"_").replace(nI,"")}static parseTrackName(n){let i=cI.exec(n);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+n);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=r.nodeName.substring(s+1);lI.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return r}static findNode(n,i){if(i===void 0||i===""||i==="."||i===-1||i===n.name||i===n.uuid)return n;if(n.skeleton){let r=n.skeleton.getBoneByName(i);if(r!==void 0)return r}if(n.children){let r=function(a){for(let o=0;o<a.length;o++){let c=a[o];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(n.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(n,i){n[i]=this.targetObject[this.propertyName]}_getValue_array(n,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)n[i++]=r[s]}_getValue_arrayElement(n,i){n[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(n,i){this.resolvedProperty.toArray(n,i)}_setValue_direct(n,i){this.targetObject[this.propertyName]=n[i]}_setValue_direct_setNeedsUpdate(n,i){this.targetObject[this.propertyName]=n[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(n,i){this.targetObject[this.propertyName]=n[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(n,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=n[i++]}_setValue_array_setNeedsUpdate(n,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=n[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(n,i){let r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=n[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(n,i){this.resolvedProperty[this.propertyIndex]=n[i]}_setValue_arrayElement_setNeedsUpdate(n,i){this.resolvedProperty[this.propertyIndex]=n[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(n,i){this.resolvedProperty[this.propertyIndex]=n[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(n,i){this.resolvedProperty.fromArray(n,i)}_setValue_fromArray_setNeedsUpdate(n,i){this.resolvedProperty.fromArray(n,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(n,i){this.resolvedProperty.fromArray(n,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(n,i){this.bind(),this.getValue(n,i)}_setValue_unbound(n,i){this.bind(),this.setValue(n,i)}bind(){let n=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,a=i.propertyIndex;if(n||(n=t.findNode(this.rootNode,i.nodeName),this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let f=i.objectIndex;switch(r){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let u=0;u<n.length;u++)if(n[u].name===f){f=u;break}break;case"map":if("map"in n){n=n.map;break}if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}n=n.material.map;break;default:if(n[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[r]}if(f!==void 0){if(n[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[f]}}let o=n[s];if(o===void 0){let f=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",n);return}let c=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[a]!==void 0&&(a=n.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return t.Composite=Dl,t})();We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iq=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);var Rv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var w3=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},fI=new m6(-1,1,1,-1,0,1),Ul=class extends _3{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},uI=new Ul,J0=class{constructor(e){this._mesh=new d2(uI,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var K0=class extends w3{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof p2?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pl.clone(e.uniforms),this.material=new p2({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new J0(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var M6=class extends w3{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Q0=class extends w3{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $i=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,n=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new K0(Rv),this.copyPass.material.blending=Jt,this.clock=new $0}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}M6!==void 0&&(a instanceof M6?i=!0:a instanceof Q0&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){let n=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xi=class extends w3{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,n,i){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var hI=["shaderContainer"],Pv=(()=>{let e=class e{constructor(i,r){this.platformId=i,this.http=r}ngOnInit(){if(ni(this.platformId)==!1)return;Promise.all([this.loadShader("/assets/shaders/shd_Nihilism.vert"),this.loadShader("/assets/shaders/shd_Nihilism.frag")]).then(([s,a])=>{this.initThree(s,a)}).catch(s=>console.error("Error loading shaders:",s))}loadShader(i){return this.http.get(i,{responseType:"text"}).toPromise().then(r=>r||"")}initThree(i,r){this.scene=new Gi,this.camera=new u2(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new an({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.containerRef.nativeElement.appendChild(this.renderer.domElement);let s=new $i(this.renderer);s.addPass(new Xi(this.scene,this.camera));let a=new p2({uniforms:{time:{value:0},ratio:{value:window.innerWidth/window.innerHeight}},vertexShader:i,fragmentShader:r}),o=new h4(2*(window.innerWidth/window.innerHeight),2,1,1),c=new d2(o,a);this.scene.add(c),this.camera.position.set(0,0,1),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.animate(s,a)}animate(i,r){let s=Date.now(),a=()=>{requestAnimationFrame(a);let o=(Date.now()-s)*1e-5;r.uniforms.time.value=o,i.render()};a()}onResize(){let i=window.innerWidth/window.innerHeight;this.camera.aspect=i,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}};e.\u0275fac=function(r){return new(r||e)(ge(C2),ge(Or))},e.\u0275cmp=Pe({type:e,selectors:[["app-shader-background"]],viewQuery:function(r,s){if(r&1&&q3(hI,7),r&2){let a;Bt(a=Gt())&&(s.containerRef=a.first)}},hostBindings:function(r,s){r&1&&L2("resize",function(){return s.onResize()},!1,da)},standalone:!0,features:[Oe],decls:2,vars:0,consts:[["shaderContainer",""]],template:function(r,s){r&1&&ve(0,"div",null,0)},dependencies:[Fa],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;height:100%}"]});let t=e;return t})();function kv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function u1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kv(Object(n),!0).forEach(function(i){Ze(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function uo(t){"@babel/helpers - typeof";return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uo(t)}function dI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ov(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function pI(t,e,n){return e&&Ov(t.prototype,e),n&&Ov(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ze(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i9(t,e){return gI(t)||MI(t,e)||fM(t,e)||yI()}function H6(t){return mI(t)||vI(t)||fM(t)||CI()}function mI(t){if(Array.isArray(t))return ql(t)}function gI(t){if(Array.isArray(t))return t}function vI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function MI(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,a,o;try{for(n=n.call(t);!(r=(a=n.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(c){s=!0,o=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw o}}return i}}function fM(t,e){if(t){if(typeof t=="string")return ql(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ql(t,e)}}function ql(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function CI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fv=function(){},r9={},uM={},hM=null,dM={mark:Fv,measure:Fv};try{typeof window<"u"&&(r9=window),typeof document<"u"&&(uM=document),typeof MutationObserver<"u"&&(hM=MutationObserver),typeof performance<"u"&&(dM=performance)}catch{}var xI=r9.navigator||{},Uv=xI.userAgent,Bv=Uv===void 0?"":Uv,m4=r9,Ve=uM,Gv=hM,eo=dM,u$=!!m4.document,E3=!!Ve.documentElement&&!!Ve.head&&typeof Ve.addEventListener=="function"&&typeof Ve.createElement=="function",pM=~Bv.indexOf("MSIE")||~Bv.indexOf("Trident/"),to,no,io,ro,so,S3="___FONT_AWESOME___",$l=16,mM="fa",gM="svg-inline--fa",hn="data-fa-i2svg",Xl="data-fa-pseudo-element",bI="data-fa-pseudo-element-pending",s9="data-prefix",a9="data-icon",Wv="fontawesome-i2svg",zI="async",_I=["HTML","HEAD","STYLE","SCRIPT"],vM=function(){try{return!0}catch{return!1}}(),Ee="classic",Ue="sharp",o9=[Ee,Ue];function L6(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Ee]}})}var b6=L6((to={},Ze(to,Ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ze(to,Ue,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),to)),z6=L6((no={},Ze(no,Ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ze(no,Ue,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),no)),_6=L6((io={},Ze(io,Ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ze(io,Ue,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),io)),wI=L6((ro={},Ze(ro,Ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ze(ro,Ue,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ro)),SI=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,MM="fa-layers-text",HI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,LI=L6((so={},Ze(so,Ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ze(so,Ue,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),so)),CM=[1,2,3,4,5,6,7,8,9,10],EI=CM.concat([11,12,13,14,15,16,17,18,19,20]),VI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w6=new Set;Object.keys(z6[Ee]).map(w6.add.bind(w6));Object.keys(z6[Ue]).map(w6.add.bind(w6));var AI=[].concat(o9,H6(w6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fn.GROUP,fn.SWAP_OPACITY,fn.PRIMARY,fn.SECONDARY]).concat(CM.map(function(t){return"".concat(t,"x")})).concat(EI.map(function(t){return"w-".concat(t)})),y6=m4.FontAwesomeConfig||{};function TI(t){var e=Ve.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function DI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ve&&typeof Ve.querySelector=="function"&&(jv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],jv.forEach(function(t){var e=i9(t,2),n=e[0],i=e[1],r=DI(TI(n));r!=null&&(y6[i]=r)}));var jv,yM={styleDefault:"solid",familyDefault:"classic",cssPrefix:mM,replacementClass:gM,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};y6.familyPrefix&&(y6.cssPrefix=y6.familyPrefix);var Ki=u1(u1({},yM),y6);Ki.autoReplaceSvg||(Ki.observeMutations=!1);var g1={};Object.keys(yM).forEach(function(t){Object.defineProperty(g1,t,{enumerable:!0,set:function(n){Ki[t]=n,x6.forEach(function(i){return i(g1)})},get:function(){return Ki[t]}})});Object.defineProperty(g1,"familyPrefix",{enumerable:!0,set:function(e){Ki.cssPrefix=e,x6.forEach(function(n){return n(g1)})},get:function(){return Ki.cssPrefix}});m4.FontAwesomeConfig=g1;var x6=[];function NI(t){return x6.push(t),function(){x6.splice(x6.indexOf(t),1)}}var p4=$l,Kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function II(t){if(!(!t||!E3)){var e=Ve.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ve.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return Ve.head.insertBefore(e,i),t}}var RI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S6(){for(var t=12,e="";t-- >0;)e+=RI[Math.random()*62|0];return e}function Qi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function c9(t){return t.classList?Qi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xM(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function PI(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(xM(t[n]),'" ')},"").trim()}function mo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function l9(t){return t.size!==Kt.size||t.x!==Kt.x||t.y!==Kt.y||t.rotate!==Kt.rotate||t.flipX||t.flipY}function kI(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:l}}function OI(t){var e=t.transform,n=t.width,i=n===void 0?$l:n,r=t.height,s=r===void 0?$l:r,a=t.startCentered,o=a===void 0?!1:a,c="";return o&&pM?c+="translate(".concat(e.x/p4-i/2,"em, ").concat(e.y/p4-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(e.x/p4,"em), calc(-50% + ").concat(e.y/p4,"em)) "):c+="translate(".concat(e.x/p4,"em, ").concat(e.y/p4,"em) "),c+="scale(".concat(e.size/p4*(e.flipX?-1:1),", ").concat(e.size/p4*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var FI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function bM(){var t=mM,e=gM,n=g1.cssPrefix,i=g1.replacementClass,r=FI;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return r}var qv=!1;function Bl(){g1.autoAddCss&&!qv&&(II(bM()),qv=!0)}var UI={mixout:function(){return{dom:{css:bM,insertCss:Bl}}},hooks:function(){return{beforeDOMElementCreation:function(){Bl()},beforeI2svg:function(){Bl()}}}},H3=m4||{};H3[S3]||(H3[S3]={});H3[S3].styles||(H3[S3].styles={});H3[S3].hooks||(H3[S3].hooks={});H3[S3].shims||(H3[S3].shims=[]);var Vt=H3[S3],zM=[],BI=function t(){Ve.removeEventListener("DOMContentLoaded",t),ho=1,zM.map(function(e){return e()})},ho=!1;E3&&(ho=(Ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ve.readyState),ho||Ve.addEventListener("DOMContentLoaded",BI));function GI(t){E3&&(ho?setTimeout(t,0):zM.push(t))}function E6(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?xM(t):"<".concat(e," ").concat(PI(i),">").concat(s.map(E6).join(""),"</").concat(e,">")}function $v(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var WI=function(e,n){return function(i,r,s,a){return e.call(n,i,r,s,a)}},Gl=function(e,n,i,r){var s=Object.keys(e),a=s.length,o=r!==void 0?WI(n,r):n,c,l,f;for(i===void 0?(c=1,f=e[s[0]]):(c=0,f=i);c<a;c++)l=s[c],f=o(f,e[l],l,e);return f};function jI(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Yl(t){var e=jI(t);return e.length===1?e[0].toString(16):null}function qI(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Xv(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Zl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Xv(e);typeof Vt.hooks.addPack=="function"&&!r?Vt.hooks.addPack(t,Xv(e)):Vt.styles[t]=u1(u1({},Vt.styles[t]||{}),s),t==="fas"&&Zl("fa",e)}var ao,oo,co,Yi=Vt.styles,$I=Vt.shims,XI=(ao={},Ze(ao,Ee,Object.values(_6[Ee])),Ze(ao,Ue,Object.values(_6[Ue])),ao),f9=null,_M={},wM={},SM={},HM={},LM={},YI=(oo={},Ze(oo,Ee,Object.keys(b6[Ee])),Ze(oo,Ue,Object.keys(b6[Ue])),oo);function ZI(t){return~AI.indexOf(t)}function JI(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!ZI(r)?r:null}var EM=function(){var e=function(s){return Gl(Yi,function(a,o,c){return a[c]=Gl(o,s,{}),a},{})};_M=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){r[c.toString(16)]=a})}return r}),wM=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){r[c]=a})}return r}),LM=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(c){r[c]=a}),r});var n="far"in Yi||g1.autoFetchSvg,i=Gl($I,function(r,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});SM=i.names,HM=i.unicodes,f9=go(g1.styleDefault,{family:g1.familyDefault})};NI(function(t){f9=go(t.styleDefault,{family:g1.familyDefault})});EM();function u9(t,e){return(_M[t]||{})[e]}function KI(t,e){return(wM[t]||{})[e]}function un(t,e){return(LM[t]||{})[e]}function VM(t){return SM[t]||{prefix:null,iconName:null}}function QI(t){var e=HM[t],n=u9("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function g4(){return f9}var h9=function(){return{prefix:null,iconName:null,rest:[]}};function go(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Ee:n,r=b6[i][t],s=z6[i][t]||z6[i][r],a=t in Vt.styles?t:null;return s||a||null}var Yv=(co={},Ze(co,Ee,Object.keys(_6[Ee])),Ze(co,Ue,Object.keys(_6[Ue])),co);function vo(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},Ze(e,Ee,"".concat(g1.cssPrefix,"-").concat(Ee)),Ze(e,Ue,"".concat(g1.cssPrefix,"-").concat(Ue)),e),a=null,o=Ee;(t.includes(s[Ee])||t.some(function(l){return Yv[Ee].includes(l)}))&&(o=Ee),(t.includes(s[Ue])||t.some(function(l){return Yv[Ue].includes(l)}))&&(o=Ue);var c=t.reduce(function(l,f){var u=JI(g1.cssPrefix,f);if(Yi[f]?(f=XI[o].includes(f)?wI[o][f]:f,a=f,l.prefix=f):YI[o].indexOf(f)>-1?(a=f,l.prefix=go(f,{family:o})):u?l.iconName=u:f!==g1.replacementClass&&f!==s[Ee]&&f!==s[Ue]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var h=a==="fa"?VM(l.iconName):{},m=un(l.prefix,l.iconName);h.prefix&&(a=null),l.iconName=h.iconName||m||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Yi.far&&Yi.fas&&!g1.autoFetchSvg&&(l.prefix="fas")}return l},h9());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===Ue&&(Yi.fass||g1.autoFetchSvg)&&(c.prefix="fass",c.iconName=un(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=g4()||"fas"),c}var eR=function(){function t(){dI(this,t),this.definitions={}}return pI(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=u1(u1({},n.definitions[o]||{}),a[o]),Zl(o,a[o]);var c=_6[Ee][o];c&&Zl(c,a[o]),EM()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,c=a.iconName,l=a.icon,f=l[2];n[o]||(n[o]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[o][u]=l)}),n[o][c]=l}),n}}]),t}(),Zv=[],Zi={},Ji={},tR=Object.keys(Ji);function nR(t,e){var n=e.mixoutsTo;return Zv=t,Zi={},Object.keys(Ji).forEach(function(i){tR.indexOf(i)===-1&&delete Ji[i]}),Zv.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(n[a]=r[a]),uo(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=r[a][o]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(a){Zi[a]||(Zi[a]=[]),Zi[a].push(s[a])})}i.provides&&i.provides(Ji)}),n}function Jl(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Zi[t]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function dn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Zi[t]||[];r.forEach(function(s){s.apply(null,n)})}function L3(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ji[t]?Ji[t].apply(null,e):void 0}function Kl(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||g4();if(e)return e=un(n,e)||e,$v(AM.definitions,n,e)||$v(Vt.styles,n,e)}var AM=new eR,iR=function(){g1.autoReplaceSvg=!1,g1.observeMutations=!1,dn("noAuto")},rR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E3?(dn("beforeI2svg",e),L3("pseudoElements2svg",e),L3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;g1.autoReplaceSvg===!1&&(g1.autoReplaceSvg=!0),g1.observeMutations=!0,GI(function(){aR({autoReplaceSvgRoot:n}),dn("watch",e)})}},sR={icon:function(e){if(e===null)return null;if(uo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:un(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=go(e[0]);return{prefix:i,iconName:un(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(g1.cssPrefix,"-"))>-1||e.match(SI))){var r=vo(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||g4(),iconName:un(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=g4();return{prefix:s,iconName:un(s,e)||e}}}},J2={noAuto:iR,config:g1,dom:rR,parse:sR,library:AM,findIconDefinition:Kl,toHtml:E6},aR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Ve:n;(Object.keys(Vt.styles).length>0||g1.autoFetchSvg)&&E3&&g1.autoReplaceSvg&&J2.dom.i2svg({node:i})};function Mo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return E6(i)})}}),Object.defineProperty(t,"node",{get:function(){if(E3){var i=Ve.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function oR(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,a=t.transform;if(l9(a)&&n.found&&!i.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};r.style=mo(u1(u1({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function cR(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,a=s===!0?"".concat(e,"-").concat(g1.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u1(u1({},r),{},{id:a}),children:i}]}]}function d9(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,a=t.transform,o=t.symbol,c=t.title,l=t.maskId,f=t.titleId,u=t.extra,h=t.watchable,m=h===void 0?!1:h,g=i.found?i:n,v=g.width,p=g.height,d=r==="fak",_=[g1.replacementClass,s?"".concat(g1.cssPrefix,"-").concat(s):""].filter(function(Z){return u.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(u.classes).join(" "),y={children:[],attributes:u1(u1({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(p)})},b=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/p*16*.0625,"em")}:{};m&&(y.attributes[hn]=""),c&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||S6())},children:[c]}),delete y.attributes.title);var L=u1(u1({},y),{},{prefix:r,iconName:s,main:n,mask:i,maskId:l,transform:a,symbol:o,styles:u1(u1({},b),u.styles)}),H=i.found&&n.found?L3("generateAbstractMask",L)||{children:[],attributes:{}}:L3("generateAbstractIcon",L)||{children:[],attributes:{}},S=H.children,k=H.attributes;return L.children=S,L.attributes=k,o?cR(L):oR(L)}function Jv(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,a=t.extra,o=t.watchable,c=o===void 0?!1:o,l=u1(u1(u1({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[hn]="");var f=u1({},a.styles);l9(r)&&(f.transform=OI({transform:r,startCentered:!0,width:n,height:i}),f["-webkit-transform"]=f.transform);var u=mo(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function lR(t){var e=t.content,n=t.title,i=t.extra,r=u1(u1(u1({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=mo(i.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Wl=Vt.styles;function Ql(t){var e=t[0],n=t[1],i=t.slice(4),r=i9(i,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(g1.cssPrefix,"-").concat(fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g1.cssPrefix,"-").concat(fn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(g1.cssPrefix,"-").concat(fn.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:a}}var fR={found:!1,width:512,height:512};function uR(t,e){!vM&&!g1.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function e9(t,e){var n=e;return e==="fa"&&g1.styleDefault!==null&&(e=g4()),new Promise(function(i,r){var s={found:!1,width:512,height:512,icon:L3("missingIconAbstract")||{}};if(n==="fa"){var a=VM(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Wl[e]&&Wl[e][t]){var o=Wl[e][t];return i(Ql(o))}uR(t,e),i(u1(u1({},fR),{},{icon:g1.showMissingIcons&&t?L3("missingIconAbstract")||{}:{}}))})}var Kv=function(){},t9=g1.measurePerformance&&eo&&eo.mark&&eo.measure?eo:{mark:Kv,measure:Kv},C6='FA "6.5.2"',hR=function(e){return t9.mark("".concat(C6," ").concat(e," begins")),function(){return TM(e)}},TM=function(e){t9.mark("".concat(C6," ").concat(e," ends")),t9.measure("".concat(C6," ").concat(e),"".concat(C6," ").concat(e," begins"),"".concat(C6," ").concat(e," ends"))},p9={begin:hR,end:TM},lo=function(){};function Qv(t){var e=t.getAttribute?t.getAttribute(hn):null;return typeof e=="string"}function dR(t){var e=t.getAttribute?t.getAttribute(s9):null,n=t.getAttribute?t.getAttribute(a9):null;return e&&n}function pR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g1.replacementClass)}function mR(){if(g1.autoReplaceSvg===!0)return fo.replace;var t=fo[g1.autoReplaceSvg];return t||fo.replace}function gR(t){return Ve.createElementNS("http://www.w3.org/2000/svg",t)}function vR(t){return Ve.createElement(t)}function DM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?gR:vR:n;if(typeof t=="string")return Ve.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(a){r.setAttribute(a,t.attributes[a])});var s=t.children||[];return s.forEach(function(a){r.appendChild(DM(a,{ceFn:i}))}),r}function MR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var fo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(DM(r),n)}),n.getAttribute(hn)===null&&g1.keepOriginalSource){var i=Ve.createComment(MR(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~c9(n).indexOf(g1.replacementClass))return fo.replace(e);var r=new RegExp("".concat(g1.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(o,c){return c===g1.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=i.map(function(o){return E6(o)}).join(`
`);n.setAttribute(hn,""),n.innerHTML=a}};function eM(t){t()}function NM(t,e){var n=typeof e=="function"?e:lo;if(t.length===0)n();else{var i=eM;g1.mutateApproach===zI&&(i=m4.requestAnimationFrame||eM),i(function(){var r=mR(),s=p9.begin("mutate");t.map(r),s(),n()})}}var m9=!1;function IM(){m9=!0}function n9(){m9=!1}var po=null;function tM(t){if(Gv&&g1.observeMutations){var e=t.treeCallback,n=e===void 0?lo:e,i=t.nodeCallback,r=i===void 0?lo:i,s=t.pseudoElementsCallback,a=s===void 0?lo:s,o=t.observeMutationsRoot,c=o===void 0?Ve:o;po=new Gv(function(l){if(!m9){var f=g4();Qi(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Qv(u.addedNodes[0])&&(g1.searchPseudoElements&&a(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&g1.searchPseudoElements&&a(u.target.parentNode),u.type==="attributes"&&Qv(u.target)&&~VI.indexOf(u.attributeName))if(u.attributeName==="class"&&dR(u.target)){var h=vo(c9(u.target)),m=h.prefix,g=h.iconName;u.target.setAttribute(s9,m||f),g&&u.target.setAttribute(a9,g)}else pR(u.target)&&r(u.target)})}}),E3&&po.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CR(){po&&po.disconnect()}function yR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function xR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=vo(c9(t));return r.prefix||(r.prefix=g4()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=KI(r.prefix,t.innerText)||u9(r.prefix,Yl(t.innerText))),!r.iconName&&g1.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function bR(t){var e=Qi(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return g1.autoA11y&&(n?e["aria-labelledby"]="".concat(g1.replacementClass,"-title-").concat(i||S6()):(e["aria-hidden"]="true",e.focusable="false")),e}function zR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xR(t),i=n.iconName,r=n.prefix,s=n.rest,a=bR(t),o=Jl("parseNodeAttributes",{},t),c=e.styleParser?yR(t):[];return u1({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var _R=Vt.styles;function RM(t){var e=g1.autoReplaceSvg==="nest"?nM(t,{styleParser:!1}):nM(t);return~e.extra.classes.indexOf(MM)?L3("generateLayersText",t,e):L3("generateSvgReplacementMutation",t,e)}var v4=new Set;o9.map(function(t){v4.add("fa-".concat(t))});Object.keys(b6[Ee]).map(v4.add.bind(v4));Object.keys(b6[Ue]).map(v4.add.bind(v4));v4=H6(v4);function iM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E3)return Promise.resolve();var n=Ve.documentElement.classList,i=function(u){return n.add("".concat(Wv,"-").concat(u))},r=function(u){return n.remove("".concat(Wv,"-").concat(u))},s=g1.autoFetchSvg?v4:o9.map(function(f){return"fa-".concat(f)}).concat(Object.keys(_R));s.includes("fa")||s.push("fa");var a=[".".concat(MM,":not([").concat(hn,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(hn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Qi(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var c=p9.begin("onTree"),l=o.reduce(function(f,u){try{var h=RM(u);h&&f.push(h)}catch(m){vM||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){NM(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(h){c(),u(h)})})}function wR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;RM(t).then(function(n){n&&NM([n],e)})}function SR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Kl(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Kl(r||{})),t(i,u1(u1({},n),{},{mask:r}))}}var HR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Kt:i,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,f=l===void 0?null:l,u=n.title,h=u===void 0?null:u,m=n.titleId,g=m===void 0?null:m,v=n.classes,p=v===void 0?[]:v,d=n.attributes,_=d===void 0?{}:d,y=n.styles,b=y===void 0?{}:y;if(e){var L=e.prefix,H=e.iconName,S=e.icon;return Mo(u1({type:"icon"},e),function(){return dn("beforeDOMElementCreation",{iconDefinition:e,params:n}),g1.autoA11y&&(h?_["aria-labelledby"]="".concat(g1.replacementClass,"-title-").concat(g||S6()):(_["aria-hidden"]="true",_.focusable="false")),d9({icons:{main:Ql(S),mask:c?Ql(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:H,transform:u1(u1({},Kt),r),symbol:a,title:h,maskId:f,titleId:g,extra:{attributes:_,styles:b,classes:p}})})}},LR={mixout:function(){return{icon:SR(HR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=iM,n.nodeCallback=wR,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Ve:i,s=n.callback,a=s===void 0?function(){}:s;return iM(r,a)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,a=i.titleId,o=i.prefix,c=i.transform,l=i.symbol,f=i.mask,u=i.maskId,h=i.extra;return new Promise(function(m,g){Promise.all([e9(r,o),f.iconName?e9(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var p=i9(v,2),d=p[0],_=p[1];m([n,d9({icons:{main:d,mask:_},prefix:o,iconName:r,transform:c,symbol:l,maskId:u,title:s,titleId:a,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,a=n.transform,o=n.styles,c=mo(o);c.length>0&&(r.style=c);var l;return l9(a)&&(l=L3("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),i.push(l||s.icon),{children:i,attributes:r}}}},ER={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Mo({type:"layer"},function(){dn("beforeDOMElementCreation",{assembler:n,params:i});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(g1.cssPrefix,"-layers")].concat(H6(s)).join(" ")},children:a}]})}}}},VR={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,a=i.classes,o=a===void 0?[]:a,c=i.attributes,l=c===void 0?{}:c,f=i.styles,u=f===void 0?{}:f;return Mo({type:"counter",content:n},function(){return dn("beforeDOMElementCreation",{content:n,params:i}),lR({content:n.toString(),title:s,extra:{attributes:l,styles:u,classes:["".concat(g1.cssPrefix,"-layers-counter")].concat(H6(o))}})})}}}},AR={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Kt:r,a=i.title,o=a===void 0?null:a,c=i.classes,l=c===void 0?[]:c,f=i.attributes,u=f===void 0?{}:f,h=i.styles,m=h===void 0?{}:h;return Mo({type:"text",content:n},function(){return dn("beforeDOMElementCreation",{content:n,params:i}),Jv({content:n,transform:u1(u1({},Kt),s),title:o,extra:{attributes:u,styles:m,classes:["".concat(g1.cssPrefix,"-layers-text")].concat(H6(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,a=i.extra,o=null,c=null;if(pM){var l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();o=f.width/l,c=f.height/l}return g1.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Jv({content:n.innerHTML,width:o,height:c,transform:s,title:r,extra:a,watchable:!0})])}}},TR=new RegExp('"',"ug"),rM=[1105920,1112319];function DR(t){var e=t.replace(TR,""),n=qI(e,0),i=n>=rM[0]&&n<=rM[1],r=e.length===2?e[0]===e[1]:!1;return{value:Yl(r?e[0]:e),isSecondary:i||r}}function sM(t,e){var n="".concat(bI).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Qi(t.children),a=s.filter(function(S){return S.getAttribute(Xl)===e})[0],o=m4.getComputedStyle(t,e),c=o.getPropertyValue("font-family").match(HI),l=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&f!=="none"&&f!==""){var u=o.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?Ue:Ee,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?z6[h][c[2].toLowerCase()]:LI[h][l],g=DR(u),v=g.value,p=g.isSecondary,d=c[0].startsWith("FontAwesome"),_=u9(m,v),y=_;if(d){var b=QI(v);b.iconName&&b.prefix&&(_=b.iconName,m=b.prefix)}if(_&&!p&&(!a||a.getAttribute(s9)!==m||a.getAttribute(a9)!==y)){t.setAttribute(n,y),a&&t.removeChild(a);var L=zR(),H=L.extra;H.attributes[Xl]=e,e9(_,m).then(function(S){var k=d9(u1(u1({},L),{},{icons:{main:S,mask:h9()},prefix:m,iconName:y,extra:H,watchable:!0})),Z=Ve.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Z,t.firstChild):t.appendChild(Z),Z.outerHTML=k.map(function(C){return E6(C)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function NR(t){return Promise.all([sM(t,"::before"),sM(t,"::after")])}function IR(t){return t.parentNode!==document.head&&!~_I.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function aM(t){if(E3)return new Promise(function(e,n){var i=Qi(t.querySelectorAll("*")).filter(IR).map(NR),r=p9.begin("searchPseudoElements");IM(),Promise.all(i).then(function(){r(),n9(),e()}).catch(function(){r(),n9(),n()})})}var RR={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=aM,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Ve:i;g1.searchPseudoElements&&aM(r)}}},oM=!1,PR={mixout:function(){return{dom:{unwatch:function(){IM(),oM=!0}}}},hooks:function(){return{bootstrap:function(){tM(Jl("mutationObserverCallbacks",{}))},noAuto:function(){CR()},watch:function(n){var i=n.observeMutationsRoot;oM?n9():tM(Jl("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},cM=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return i.flipX=!0,i;if(a&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(a){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},n)},kR={mixout:function(){return{parse:{transform:function(n){return cM(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=cM(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(c," ").concat(l," ").concat(f)},h={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:u,path:h};return{tag:"g",attributes:u1({},m.outer),children:[{tag:"g",attributes:u1({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:u1(u1({},i.icon.attributes),m.path)}]}]}}}},jl={x:0,y:0,width:"100%",height:"100%"};function lM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function OR(t){return t.tag==="g"?t.children:[t]}var FR={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?vo(r.split(" ").map(function(a){return a.trim()})):h9();return s.prefix||(s.prefix=g4()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,f=s.icon,u=a.width,h=a.icon,m=kI({transform:c,containerWidth:u,iconWidth:l}),g={tag:"rect",attributes:u1(u1({},jl),{},{fill:"white"})},v=f.children?{children:f.children.map(lM)}:{},p={tag:"g",attributes:u1({},m.inner),children:[lM(u1({tag:f.tag,attributes:u1(u1({},f.attributes),m.path)},v))]},d={tag:"g",attributes:u1({},m.outer),children:[p]},_="mask-".concat(o||S6()),y="clip-".concat(o||S6()),b={tag:"mask",attributes:u1(u1({},jl),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,d]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:OR(h)},b]};return i.push(L,{tag:"rect",attributes:u1({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},jl)}),{children:i,attributes:r}}}},UR={provides:function(e){var n=!1;m4.matchMedia&&(n=m4.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:u1(u1({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=u1(u1({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:u1(u1({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:u1(u1({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u1(u1({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:u1(u1({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u1(u1({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:u1(u1({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u1(u1({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},BR={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},GR=[UI,LR,ER,VR,AR,RR,PR,kR,FR,UR,BR];nR(GR,{mixoutsTo:J2});var h$=J2.noAuto,d$=J2.config,p$=J2.library,m$=J2.dom,PM=J2.parse,g$=J2.findIconDefinition,v$=J2.toHtml,kM=J2.icon,M$=J2.layer,WR=J2.text,jR=J2.counter;var qR=["*"],$R=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},XR=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},YR=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},ZR=t=>t.prefix!==void 0&&t.iconName!==void 0,JR=(t,e)=>ZR(t)?t:typeof t=="string"?{prefix:e,iconName:t}:{prefix:t[0],iconName:t[1]},KR=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),QR=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...i){for(let r of i){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...i){for(let r of i){let s=Object.keys(r).map(a=>r[a]);this.addIcons(...s)}}getIconDefinition(i,r){return i in this.definitions&&r in this.definitions[i]?this.definitions[i][r]:null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),eP=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[O3]});let t=e;return t})(),tP=(()=>{let e=class e{constructor(i,r){this.renderer=i,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};e.\u0275fac=function(r){return new(r||e)(ge(Yn),ge(M2))},e.\u0275cmp=Pe({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[O3,Oe],ngContentSelectors:qR,decls:1,vars:0,template:function(r,s){r&1&&(_a(),wa(0))},encapsulation:2});let t=e;return t})(),OM=(()=>{let e=class e{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,r,s,a,o){this.sanitizer=i,this.config=r,this.iconLibrary=s,this.stackItem=a,this.classes=[],o!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){XR();return}if(i){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let a=this.buildParams();this.renderIcon(s,a)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let r=JR(i,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??($R(r),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?PM.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...YR(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,r){let s=kM(i,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};e.\u0275fac=function(r){return new(r||e)(ge(N5),ge(KR),ge(QR),ge(eP,8),ge(tP,8))},e.\u0275cmp=Pe({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(u5("innerHTML",s.renderedIconHTML,Kh),j3("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[O3,Oe],decls:0,vars:0,template:function(r,s){},encapsulation:2});let t=e;return t})();var Co=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=it({type:e}),e.\u0275inj=nt({});let t=e;return t})();var FM={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var iP={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},UM=iP;function rP(t,e){if(t&1&&ve(0,"fa-icon",4),t&2){let n=bt();Se("icon",n.iconDef)}}function sP(t,e){if(t&1&&ve(0,"img",5),t&2){let n=bt();Se("src",n.iconUrl,ha)}}function aP(t,e){t&1&&(he(0,"div",6),Wt(1,"\u2B08"),de())}function oP(t,e){t&1&&(he(0,"div",6),Wt(1,"\u25BB"),de())}var BM=(()=>{let e=class e{constructor(){this.clickEvent=()=>{},this.panelText="",this.panelTextOut=new qe,this.name="Tab",this.iconDef=UM,this.iconUrl="",this.buttonColor="blue",this.isExternalLink=!1,this.tabID=e.tabIDCounter++,this.outputTabID=new qe}onTabClick(){this.clickEvent(),this.emitTabID(),this.emitPanelText()}emitPanelText(){this.panelTextOut.emit(this.panelText)}emitTabID(){console.log("Emitting Tab ID: "+this.tabID),this.outputTabID.emit(String(this.tabID))}};e.tabIDCounter=0,e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["app-tab"]],inputs:{clickEvent:"clickEvent",panelText:"panelText",name:"name",iconDef:"iconDef",iconUrl:"iconUrl",buttonColor:"buttonColor",isExternalLink:"isExternalLink",tabID:"tabID"},outputs:{panelTextOut:"panelTextOut",outputTabID:"outputTabID"},standalone:!0,features:[Oe],decls:8,vars:7,consts:[["id","container",1,"app-tab",3,"click"],["id","block"],[3,"ngIf"],["id","text"],["id","icon",3,"icon"],["id","iconImage",3,"src"],["id","fold-arrow"]],template:function(r,s){r&1&&(he(0,"div",0),L2("click",function(){return s.emitTabID()})("click",function(){return s.onTabClick()}),ve(1,"div",1),N2(2,rP,1,1,"ng-template",2)(3,sP,1,1,"ng-template",2),he(4,"div",3),Wt(5),de(),N2(6,aP,2,0,"ng-template",2)(7,oP,2,0,"ng-template",2),de()),r&2&&(re(),ba("background-color",s.buttonColor),re(),Se("ngIf",s.iconUrl===""),re(),Se("ngIf",s.iconUrl!==""),re(2),Tr(s.name),re(),Se("ngIf",s.isExternalLink===!0),re(),Se("ngIf",s.isExternalLink===!1))},dependencies:[d3,Ta,Co,OM],styles:["#container[_ngcontent-%COMP%]{--padding-horizontal: 1.5vw;--padding-vertical: 2vw;cursor:pointer;display:flex;align-items:center;padding:var(--padding-vertical) var(--padding-horizontal);border:none;position:relative;width:50%;margin-top:1vw;margin-left:2vw}#block[_ngcontent-%COMP%]{margin:auto;opacity:.6;border-radius:2vw;position:absolute;inset:0;transition:transform .2s,opacity .2s;z-index:0}#container[_ngcontent-%COMP%]:hover   #block[_ngcontent-%COMP%]{transform:scale(1.05);opacity:1}#container[_ngcontent-%COMP%]:not(:hover)   #block[_ngcontent-%COMP%]{transition:transform .5s,opacity .5s}#icon[_ngcontent-%COMP%], #text[_ngcontent-%COMP%], #fold-arrow[_ngcontent-%COMP%], #iconImage[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;flex:1;display:flex;align-items:center;z-index:1}#icon[_ngcontent-%COMP%]{justify-content:flex-start}#iconImage[_ngcontent-%COMP%]{width:1.5vw;height:3.5vw;margin-right:1vw}#text[_ngcontent-%COMP%]{justify-content:center;text-align:center;white-space:nowrap}#fold-arrow[_ngcontent-%COMP%]{justify-content:flex-end;text-align:right}"]});let t=e;return t})();var g9;try{g9=typeof Intl<"u"&&Intl.v8BreakIterator}catch{g9=!1}var GM=(()=>{let e=class e{constructor(i){this._platformId=i,this.isBrowser=this._platformId?ni(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||g9)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(r){return new(r||e)(V1(C2))},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var cP=new C1("cdk-dir-doc",{providedIn:"root",factory:lP});function lP(){return G(Fe)}var fP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function uP(t){let e=t?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?fP.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var WM=(()=>{let e=class e{constructor(i){if(this.value="ltr",this.change=new qe,i){let r=i.body?i.body.dir:null,s=i.documentElement?i.documentElement.dir:null;this.value=uP(r||s||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(r){return new(r||e)(V1(cP,8))},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function v9(t,e){let n=!e?.manualCleanup;n&&!e?.injector&&E8(v9);let i=n?e?.injector?.get($n)??G($n):null,r;e?.requireSync?r=G3({kind:0}):r=G3({kind:1,value:e?.initialValue});let s=t.subscribe({next:a=>r.set({kind:1,value:a}),error:a=>{if(e?.rejectErrors)throw a;r.set({kind:2,error:a})}});return i?.onDestroy(s.unsubscribe.bind(s)),$3(()=>{let a=r();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new v1(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function jM(t){return t instanceof M2?t.nativeElement:t}var hP=4,dP=.001,pP=1e-7,mP=10,V6=11,yo=1/(V6-1),gP=typeof Float32Array=="function";function qM(t,e){return 1-3*e+3*t}function $M(t,e){return 3*e-6*t}function XM(t){return 3*t}function xo(t,e,n){return((qM(e,n)*t+$M(e,n))*t+XM(e))*t}function YM(t,e,n){return 3*qM(e,n)*t*t+2*$M(e,n)*t+XM(e)}function vP(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=xo(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>pP&&++o<mP);return a}function MP(t,e,n,i){for(let r=0;r<hP;++r){let s=YM(e,n,i);if(s===0)return e;let a=xo(e,n,i)-t;e-=a/s}return e}function CP(t){return t}function yP(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return CP;let r=gP?new Float32Array(V6):new Array(V6);for(let a=0;a<V6;++a)r[a]=xo(a*yo,t,n);function s(a){let o=0,c=1,l=V6-1;for(;c!==l&&r[c]<=a;++c)o+=yo;--c;let f=(a-r[c])/(r[c+1]-r[c]),u=o+f*yo,h=YM(u,t,n);return h>=dP?MP(a,u,t,n):h===0?u:vP(a,o,o+yo,t,n)}return function(o){return o===0?0:o===1?1:xo(s(o),e,i)}}var xP=new C1("SMOOTH_SCROLL_OPTIONS");var ZM=(()=>{let e=class e{constructor(){this.document=G(Fe),this.zone=G(ye),this._defaultOptions=l1({duration:468,easing:{x1:.42,y1:0,x2:.58,y2:1}},G(xP,{optional:!0})),this.onGoingScrolls=new Map}get now(){return this.document.defaultView.performance?.now?.bind(this.document.defaultView.performance)||Date.now}scrollElement(i,r,s){i.scrollLeft=r,i.scrollTop=s}getElement(i,r){return typeof i=="string"?(r||this.document).querySelector(i):jM(i)}getScrollDestroyerRef(i){return this.onGoingScrolls.has(i)&&this.onGoingScrolls.get(i).next(),this.onGoingScrolls.set(i,new s2).get(i)}step(i){return new J1(r=>{let s=(this.now()-i.startTime)/i.duration;s=s>1?1:s;let a=i.easing(s);i.currentX=i.startX+(i.x-i.startX)*a,i.currentY=i.startY+(i.y-i.startY)*a,this.scrollElement(i.scrollable,i.currentX,i.currentY),requestAnimationFrame(()=>{r.next(),r.complete()})})}isReached(i,r){return i.currentX===i.x&&i.currentY===i.y?(r.next(),!0):!1}scrolling(i,r){return this.step(i).pipe(Nn(()=>!this.isReached(i,r)),He(()=>this.scrolling(i,r)))}onScrollReached(i,r,s){s.complete(),this.onGoingScrolls.delete(i),this.zone.run(()=>r())}interrupted(i,r){return An(Qe(i,"wheel",{passive:!0,capture:!0}),Qe(i,"touchmove",{passive:!0,capture:!0}),r).pipe(z2(1))}applyScrollToOptions(i,r){return r.duration?new Promise(s=>{this.zone.runOutsideAngular(()=>{let a=this.getScrollDestroyerRef(i),o={scrollable:i,startTime:this.now(),startX:i.scrollLeft,startY:i.scrollTop,x:r.left==null?i.scrollLeft:~~r.left,y:r.top==null?i.scrollTop:~~r.top,duration:r.duration,easing:yP(r.easing.x1,r.easing.y1,r.easing.x2,r.easing.y2)};this.scrolling(o,a).pipe(dt(this.interrupted(i,a)),ut(()=>this.onScrollReached(i,s,a))).subscribe()})}):(this.scrollElement(i,r.left,r.top),Promise.resolve())}scrollTo(i,r){let s=this.getElement(i),a=getComputedStyle(s).direction==="rtl",o=Me(l1(l1({},this._defaultOptions),r),{left:r.left==null?a?r.end:r.start:r.left,right:r.right==null?a?r.start:r.end:r.right});return o.bottom!=null&&(o.top=s.scrollHeight-s.clientHeight-o.bottom),a?(o.left!=null&&(o.right=s.scrollWidth-s.clientWidth-o.left),o.left=o.right?-o.right:o.right):o.right!=null&&(o.left=s.scrollWidth-s.clientWidth-o.right),this.applyScrollToOptions(s,o)}scrollToElement(i,r,s={}){let a=this.getElement(i),o=this.getElement(r,a),c=o.getBoundingClientRect(),l=Me(l1({},s),{left:c.left+(s.left||0),top:c.top+(s.top||0)});return o?this.scrollTo(a,l):Promise.resolve()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var bP=["scrollbarButton",""];function zP(t,e){if(t&1&&ve(0,"button",5)(1,"button",6),t&2){let n=bt();u3("ng-scrollbar-button ",n.cmp.buttonClass,""),re(),u3("ng-scrollbar-button ",n.cmp.buttonClass,"")}}function _P(t,e){if(t&1&&ve(0,"button",5)(1,"button",6),t&2){let n=bt();u3("ng-scrollbar-button ",n.cmp.buttonClass,""),re(),u3("ng-scrollbar-button ",n.cmp.buttonClass,"")}}var wP="[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);transition:var(--scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--scrollbar-track-color);border-radius:var(--scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}";function SP(t,e){t&1&&ve(0,"scrollbar-y")}function HP(t,e){t&1&&ve(0,"scrollbar-x")}var LP=["contentWrapper"],EP=["*"];var VP=(()=>{let e=class e{constructor(){this.nativeElement=G(M2).nativeElement}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,selectors:[["","scrollViewport",""]],standalone:!0});let t=e;return t})(),T6=function(t){return t.AfterInit="AfterInit",t.Resized="ResizeObserver",t}(T6||{}),AP=new C1("NG_SCROLLBAR_OPTIONS"),TP=new C1("NG_SCROLLBAR_POLYFILL");function QM({element:t,contentWrapper:e,throttleDuration:n}){let i=T6.AfterInit,r,s=new J1(a=>(r=new ResizeObserver(()=>{a.next(i),i=T6.Resized}),r.observe(t),e&&r.observe(e),()=>{r?.disconnect()}));return n?s.pipe(Jo(n,null,{leading:!0,trailing:!0})):s}function y9(t){return le(()=>t.onselectstart=()=>!1)}function x9(t){return le(()=>t.onselectstart=null)}function A6(){return le(t=>{t.preventDefault(),t.stopPropagation()})}var M9=function(t){return t.Viewport="ng-scroll-viewport",t.Content="ng-scroll-content",t}(M9||{}),C9=class{constructor(){this.initialized=G3(!1)}get offsetHeight(){return this.nativeElement.offsetHeight}get offsetWidth(){return this.nativeElement.offsetWidth}get scrollTop(){return this.nativeElement.scrollTop}get scrollLeft(){return this.nativeElement.scrollLeft}get contentHeight(){return this.contentWrapperElement.offsetHeight}get contentWidth(){return this.contentWrapperElement.offsetWidth}get scrollMaxX(){return this.contentWidth-this.offsetWidth}get scrollMaxY(){return this.contentHeight-this.offsetHeight}init(e,n,i){e.classList.add(M9.Viewport),this.nativeElement=e,n.classList.add(M9.Content),i?(i.style.position="relative",this.contentWrapperElement=i):this.contentWrapperElement=n,this.initialized.set(!0)}scrollYTo(e){this.nativeElement.scrollTop=e}scrollXTo(e){this.nativeElement.scrollLeft=e}},I6=new C1("NG_SCROLLBAR"),JM={trackClass:"",thumbClass:"",buttonClass:"",orientation:"auto",appearance:"native",visibility:"native",position:"native",trackScrollDuration:50,sensorThrottleTime:0,disableSensor:!1,disableInteraction:!1,buttons:!1},DP=(()=>{let e=class e{constructor(){this.injectedOptions=G(AP,{optional:!0}),this.options=this.injectedOptions?l1(l1({},JM),this.injectedOptions):JM,this.zone=G(ye),this.platform=G(GM),this.injector=G(st),this.isMobile=this.platform.IOS||this.platform.ANDROID,this.dir=G(WM),this.smoothScroll=G(ZM),this.nativeElement=G(M2).nativeElement,this.dragging=G3("none"),this.orientation=P4(this.options.orientation),this.visibility=P4(this.options.visibility),this.buttons=P4(this.options.buttons,{transform:Qn}),this.disableInteraction=P4(this.options.disableInteraction,{transform:Qn}),this.disableSensor=P4(this.options.disableSensor,{transform:Qn}),this.sensorThrottleTime=P4(this.options.sensorThrottleTime,{transform:Ha}),this.viewportDimension=G3({contentHeight:0,contentWidth:0,offsetHeight:0,offsetWidth:0}),this.state=$3(()=>{let i=!1,r=!1,s=!1,a=!1,o=this.orientation(),c=this.visibility(),l=this.viewportDimension();return(o==="auto"||o==="vertical")&&(s=l.contentHeight>l.offsetHeight,i=c==="visible"||s),(o==="auto"||o==="horizontal")&&(a=l.contentWidth>l.offsetWidth,r=c==="visible"||a),{verticalUsed:i,horizontalUsed:r,isVerticallyScrollable:s,isHorizontallyScrollable:a}}),this.isVerticallyScrollable=$3(()=>this.state().isVerticallyScrollable),this.isHorizontallyScrollable=$3(()=>this.state().isHorizontallyScrollable),this.verticalUsed=$3(()=>this.state().verticalUsed),this.horizontalUsed=$3(()=>this.state().horizontalUsed),this.trackScrollDuration=this.options.trackScrollDuration,this.appearance=this.options.appearance,this.position=this.options.position,this.trackClass=this.options.trackClass,this.thumbClass=this.options.thumbClass,this.buttonClass=this.options.thumbClass,this.afterInit=new qe,this.afterUpdate=new qe,this.viewport=new C9}ngOnInit(){rt(this.injector,()=>{this.direction=v9(this.dir.change.pipe(L1(()=>this.dir.value)),{initialValue:this.dir.value}),qt(i=>{this.disableSensor()?this.sizeChangeSub?.unsubscribe():this.platform.isBrowser&&this.viewport.initialized()&&(this.sizeChangeSub?.unsubscribe(),this.zone.runOutsideAngular(()=>{this.sizeChangeSub=QM({element:this.viewport.nativeElement,contentWrapper:this.viewport.contentWrapperElement,throttleDuration:this.sensorThrottleTime()}).pipe(le(r=>this.update(r))).subscribe()})),i(()=>this.sizeChangeSub?.unsubscribe())})})}ngAfterViewInit(){this.platform.isBrowser&&this.disableSensor()&&requestAnimationFrame(()=>{this.update(T6.AfterInit)})}update(i){this.updateCSSVariables(),this.zone.run(()=>{this.viewportDimension.set({contentHeight:this.viewport.contentHeight,contentWidth:this.viewport.contentWidth,offsetHeight:this.viewport.offsetHeight,offsetWidth:this.viewport.offsetWidth}),i===T6.AfterInit?this.afterInit.emit():this.afterUpdate.emit()})}scrollTo(i){return this.smoothScroll.scrollTo(this.viewport.nativeElement,i)}scrollToElement(i,r){return this.smoothScroll.scrollToElement(this.viewport.nativeElement,i,r)}updateCSSVariables(){this.nativeElement.style.setProperty("--content-height",`${this.viewport.contentHeight}`),this.nativeElement.style.setProperty("--content-width",`${this.viewport.contentWidth}`),this.nativeElement.style.setProperty("--viewport-height",`${this.viewport.offsetHeight}`),this.nativeElement.style.setProperty("--viewport-width",`${this.viewport.offsetWidth}`)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,hostVars:14,hostBindings:function(r,s){r&2&&(j3("verticalUsed",s.verticalUsed())("horizontalUsed",s.horizontalUsed())("isVerticallyScrollable",s.isVerticallyScrollable())("isHorizontallyScrollable",s.isHorizontallyScrollable())("mobile",s.isMobile)("dir",s.direction())("position",s.position)("dragging",s.dragging())("appearance",s.appearance)("visibility",s.visibility())("orientation",s.orientation())("disableInteraction",s.disableInteraction()),za("ng-scrollbar",!0))},inputs:{orientation:[g2.SignalBased,"orientation"],visibility:[g2.SignalBased,"visibility"],buttons:[g2.SignalBased,"buttons"],disableInteraction:[g2.SignalBased,"disableInteraction"],disableSensor:[g2.SignalBased,"disableSensor"],sensorThrottleTime:[g2.SignalBased,"sensorThrottleTime"],trackScrollDuration:[g2.HasDecoratorInputTransform,"trackScrollDuration","trackScrollDuration",Ha],appearance:"appearance",position:"position",trackClass:"trackClass",thumbClass:"thumbClass",buttonClass:"buttonClass"},outputs:{afterInit:"afterInit",afterUpdate:"afterUpdate"},features:[jt([{provide:I6,useExisting:e}]),xa]});let t=e;return t})(),NP="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js",eC=(()=>{let e=class e{constructor(){this.isBrowser=ni(G(C2)),this._polyfillUrl=G(TP,{optional:!0})||NP,this.document=G(Fe),this.window=this.document.defaultView,this.scrollTimelinePolyfill=G3(null),this.isBrowser&&(!this.window.ScrollTimeline||!CSS.supports("animation-timeline","scroll()"))&&this.initPolyfill()}initPolyfill(){return pn(this,null,function*(){try{let i=this.document.createElement("script");i.src=this._polyfillUrl,yield new Promise((r,s)=>{i.onload=r,i.onerror=s,this.document.head.appendChild(i)}),this.window.ScrollTimeline?this.scrollTimelinePolyfill.set(this.window.ScrollTimeline):console.error("[NgScrollbar]: ScrollTimeline is not attached to the window object.")}catch(i){console.error("[NgScrollbar]: Error loading ScrollTimeline script:",i)}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=d1({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),b9=new C1("SCROLLBAR_CONTROL"),tC=(()=>{let e=class e{constructor(){this.cmp=G(I6)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e});let t=e;return t})(),z9=(()=>{let e=class e{constructor(){this.cmp=G(I6),this.control=G(b9),this.document=G(Fe),this.zone=G(ye),this.nativeElement=G(M2).nativeElement,qt(i=>{this.cmp.disableInteraction()?this._pointerEventsSub?.unsubscribe():this.zone.runOutsideAngular(()=>{this._pointerEventsSub=this.pointerEvents.subscribe()}),i(()=>this._pointerEventsSub?.unsubscribe())})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e});let t=e;return t})(),D6=(()=>{let e=class e extends z9{get size(){return this.nativeElement[this.control.sizeProperty]}get trackMax(){return this.track.size-this.size}get pointerEvents(){return Qe(this.nativeElement,"pointerdown").pipe(A6(),y9(this.document),He(i=>{let r,s,a=H1(i).pipe(le(()=>{r=this.trackMax,s=this.control.viewportScrollMax,this.setDragging(this.control.axis)})),o=Qe(this.document,"pointermove").pipe(A6()),c=Qe(this.document,"pointerup",{capture:!0}).pipe(A6(),x9(this.document),le(()=>this.setDragging("none")));return a.pipe(L1(l=>l[this.control.offsetProperty]),He(l=>o.pipe(L1(f=>f[this.control.clientProperty]),L1(f=>f-this.track.offset),L1(f=>s*(f-l)/r),le(f=>this.control.instantScrollTo(f,s)),dt(c))))}))}constructor(){qt(()=>{let i=this.manager.scrollTimelinePolyfill();i&&!this._animation&&(this._animation=IP(i,this.nativeElement,this.cmp.viewport.nativeElement,this.control.axis))}),super(),this.manager=G(eC),this.track=G(N6)}setDragging(i){this.zone.run(()=>this.cmp.dragging.set(i))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,features:[H2]});let t=e;return t})();function IP(t,e,n,i){return e.animate({translate:["var(--_scrollbar-thumb-transform-from)","var(--_scrollbar-thumb-transform-to)"]},{fill:"both",easing:"linear",timeline:new t({source:n,axis:i})})}var N6=(()=>{let e=class e extends z9{get viewportSize(){return this.cmp.viewport[this.control.sizeProperty]}get clientRect(){return this.nativeElement.getBoundingClientRect()}get offset(){return this.clientRect[this.control.clientRectProperty]}get size(){return this.nativeElement[this.control.sizeProperty]}get pointerEvents(){let i=Qe(this.nativeElement,"pointerdown").pipe(A6(),y9(this.document)),r=Qe(this.document,"pointerup",{passive:!0}).pipe(x9(this.document)),s=Qe(this.nativeElement,"pointerover",{passive:!0}).pipe(le(l=>this.currMousePosition=l[this.control.offsetProperty]),L1(()=>!0)),a=Qe(this.nativeElement,"pointerout",{passive:!0}).pipe(L1(()=>!1)),o=An(s,a).pipe(Dn(!0)),c=Qe(this.nativeElement,"pointermove",{passive:!0}).pipe(le(l=>this.currMousePosition=l[this.control.offsetProperty]));return i.pipe(He(l=>(c.pipe(dt(r)).subscribe(),this.onTrackFirstClick(l).pipe(gs(200),He(()=>o.pipe(He(f=>{let u=this.getScrollDirection(this.currMousePosition),h=this.scrollDirection===u;return f&&h?this.onTrackOngoingMousedown():o2}))),dt(r)))))}constructor(){qt(i=>{this.cmp.disableSensor()?(this.update(),this.sizeChangeSub?.unsubscribe()):this.zone.runOutsideAngular(()=>{this.sizeChangeSub=QM({element:this.nativeElement,throttleDuration:this.cmp.sensorThrottleTime()}).pipe(le(()=>this.update())).subscribe()}),i(()=>this.sizeChangeSub?.unsubscribe())}),super()}update(){this.cmp.nativeElement.style.setProperty(this.cssLengthProperty,`${this.size}`)}onTrackFirstClick(i){return this.currMousePosition=i[this.control.offsetProperty],this.scrollDirection=this.getScrollDirection(this.currMousePosition),this.scrollMax=this.control.viewportScrollMax,this.scrollTo(this.nextStep())}nextStep(){if(this.scrollDirection==="forward"){let r=this.getScrollForwardStep();return r>=this.scrollMax?this.scrollMax:r}let i=this.getScrollBackwardStep();return i<=0?0:i}onTrackOngoingMousedown(){let i=this.nextStep();return this.scrollTo(i).pipe(Nn(()=>!this.isReached(i)),He(()=>this.onTrackOngoingMousedown()))}isReached(i){return this.scrollDirection==="forward"?i>=this.scrollMax:i<=0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,contentQueries:function(r,s,a){if(r&1&&h5(a,D6,5),r&2){let o;Bt(o=Gt())&&(s.thumb=o.first)}},features:[H2]});let t=e;return t})(),RP=(()=>{let e=class e extends N6{get viewportScrollSize(){return this.cmp.viewport.contentWidth}constructor(){qt(()=>{this.cmp.direction()==="rtl"?(this.getCurrPosition=()=>(this.viewportScrollSize-this.viewportSize-this.control.viewportScrollOffset)*this.size/this.viewportScrollSize,this.getScrollDirection=i=>i<this.getCurrPosition()?"forward":"backward"):(this.getCurrPosition=()=>this.control.viewportScrollOffset*this.size/this.viewportScrollSize,this.getScrollDirection=i=>i>this.getCurrPosition()?"forward":"backward")}),super(),this.cssLengthProperty="--track-x-length"}scrollTo(i){return Ln(this.cmp.scrollTo({start:i,duration:this.cmp.trackScrollDuration}))}getScrollForwardStep(){return this.control.viewportScrollOffset+this.viewportSize}getScrollBackwardStep(){return this.control.viewportScrollOffset-this.viewportSize}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,selectors:[["","scrollbarTrackX",""]],standalone:!0,features:[jt([{provide:N6,useExisting:e}]),H2]});let t=e;return t})(),PP=(()=>{let e=class e extends N6{constructor(){super(...arguments),this.cssLengthProperty="--track-y-length"}get viewportScrollSize(){return this.cmp.viewport.contentHeight}getCurrPosition(){return this.control.viewportScrollOffset*this.size/this.viewportScrollSize}getScrollDirection(i){return i>this.getCurrPosition()?"forward":"backward"}scrollTo(i){return Ln(this.cmp.scrollTo({top:i,duration:this.cmp.trackScrollDuration}))}getScrollForwardStep(){return this.control.viewportScrollOffset+this.viewportSize}getScrollBackwardStep(){return this.control.viewportScrollOffset-this.viewportSize}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275dir=ke({type:e,selectors:[["","scrollbarTrackY",""]],standalone:!0,features:[jt([{provide:N6,useExisting:e}]),H2]});let t=e;return t})(),kP=(()=>{let e=class e extends D6{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275dir=ke({type:e,selectors:[["","scrollbarThumbX",""]],standalone:!0,features:[jt([{provide:D6,useExisting:e}]),H2]});let t=e;return t})(),OP=(()=>{let e=class e extends D6{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275dir=ke({type:e,selectors:[["","scrollbarThumbY",""]],standalone:!0,features:[jt([{provide:D6,useExisting:e}]),H2]});let t=e;return t})(),nC=(()=>{let e=class e extends z9{constructor(){super(...arguments),this.injector=G(st),this.afterFirstClickDelay=120,this.firstClickDuration=100,this.scrollBy=50,this.onGoingScrollBy=12,this.canScrollFunc={forward:(i,r)=>i<r,backward:i=>i>0},this.scrollStepFunc={forward:(i,r)=>r+i,backward:(i,r)=>r-i},this.horizontalScrollStepFunc={rtl:{forward:(i,r,s)=>s-r-i,backward:(i,r,s)=>s-r+i},ltr:this.scrollStepFunc}}get pointerEvents(){let i=Qe(this.nativeElement,"pointerdown").pipe(A6(),y9(this.document)),r=Qe(this.document,"pointerup",{passive:!0}).pipe(x9(this.document)),s=Qe(this.nativeElement,"pointerleave",{passive:!0}),a=An(r,s);return i.pipe(He(()=>this.firstScrollStep().pipe(gs(this.afterFirstClickDelay),He(()=>this.onOngoingPointerdown()),dt(a))))}ngOnInit(){this.canScroll=this.canScrollFunc[this.scrollDirection],this.control.axis==="x"?rt(this.injector,()=>{qt(()=>{let i=this.cmp.direction();this.nextStep=this.horizontalScrollStepFunc[i][this.scrollDirection]})}):this.nextStep=this.scrollStepFunc[this.scrollDirection]}firstScrollStep(){let i=this.nextStep(this.scrollBy,this.control.viewportScrollOffset,this.control.viewportScrollMax);return this.control.scrollTo(i,this.firstClickDuration)}onGoingScrollStep(){let i=this.control.viewportScrollMax,r=this.nextStep(this.onGoingScrollBy,this.control.viewportScrollOffset,i);this.control.instantScrollTo(r,i)}onOngoingPointerdown(){return $o(0,Wo).pipe(Nn(()=>this.canScroll(this.control.viewportScrollOffset,this.control.viewportScrollMax)),le(()=>this.onGoingScrollStep()))}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275cmp=Pe({type:e,selectors:[["button","scrollbarButton",""]],inputs:{scrollbarButton:"scrollbarButton",scrollDirection:"scrollDirection"},standalone:!0,features:[H2,Oe],attrs:bP,decls:3,vars:0,consts:[[1,"ng-scrollbar-button-icon"],["width","var(--scrollbar-button-size)","height","var(--scrollbar-button-size)","viewBox","0 0 512 512","xmlns","http://www.w3.org/2000/svg"],["d","M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"]],template:function(r,s){r&1&&(he(0,"div",0),hh(),he(1,"svg",1),ve(2,"path",2),de()())},styles:["[_nghost-%COMP%]{--scrollbar-button-size: 20px;position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--scrollbar-button-color)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:var(--scrollbar-button-fill)}[_nghost-%COMP%]:hover{background:var(--scrollbar-button-hover-color)}[_nghost-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:var(--scrollbar-button-hover-fill)}[_nghost-%COMP%]:active{background:var(--scrollbar-button-active-color)}[_nghost-%COMP%]:active   svg[_ngcontent-%COMP%]{fill:var(--scrollbar-button-active-fill)}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=start][_nghost-%COMP%]{order:1}[scrollbarButton=bottom][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{order:3}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=bottom][_nghost-%COMP%]{width:100%;height:var(--scrollbar-button-size)}[scrollbarButton=start][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{width:var(--scrollbar-button-size);height:100%}[scrollbarButton=bottom][_nghost-%COMP%]{--_button-rotate: 180deg}[scrollbarButton=start][_nghost-%COMP%]{--_button-rotate: -90deg}[scrollbarButton=start][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-lr}[scrollbarButton=end][_nghost-%COMP%]{--_button-rotate: 90deg}[scrollbarButton=end][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-rl}.ng-scrollbar-button-icon[_ngcontent-%COMP%]{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}"],changeDetection:0});let t=e;return t})(),FP=(()=>{let e=class e extends tC{constructor(){super(...arguments),this.clientRectProperty="top",this.sizeProperty="offsetHeight",this.clientProperty="clientY",this.offsetProperty="offsetY",this.axis="y"}get viewportScrollMax(){return this.cmp.viewport.scrollMaxY}get viewportScrollOffset(){return this.cmp.viewport.scrollTop}scrollTo(i,r){return Ln(this.cmp.scrollTo({top:i,duration:r}))}instantScrollTo(i){this.cmp.viewport.scrollYTo(i)}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275cmp=Pe({type:e,selectors:[["scrollbar-y"]],standalone:!0,features:[jt([{provide:b9,useExisting:e}]),H2,Oe],decls:6,vars:7,consts:[["sticky",""],[1,"ng-scrollbar-sticky"],[1,"ng-scrollbar-track-wrapper"],["scrollbarTrackY",""],["scrollbarThumbY",""],["scrollbarButton","top","scrollDirection","backward"],["scrollbarButton","bottom","scrollDirection","forward"]],template:function(r,s){r&1&&(he(0,"div",1,0)(2,"div",2)(3,"div",3),ve(4,"div",4),de(),N2(5,zP,2,6),de()()),r&2&&(re(3),u3("ng-scrollbar-track ",s.cmp.trackClass,""),re(),u3("ng-scrollbar-thumb ",s.cmp.thumbClass,""),re(),Ar(5,s.cmp.buttons()?5:-1))},dependencies:[PP,OP,nC],styles:["[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);transition:var(--scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--scrollbar-track-color);border-radius:var(--scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}","[_nghost-%COMP%]{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--_thumb-height: calc(var(--thumb-y-length) * 1px);--_thumb-width: 100%;--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]:hover{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}"],changeDetection:0});let t=e;return t})(),UP=(()=>{let e=class e extends tC{get viewportScrollMax(){return this.cmp.viewport.scrollMaxX}get viewportScrollOffset(){return Math.abs(this.cmp.viewport.scrollLeft)}constructor(){qt(()=>{this.cmp.direction()==="rtl"?this.handlePosition=(i,r)=>-(r-i):this.handlePosition=i=>i}),super(),this.manager=G(eC),this.clientRectProperty="left",this.sizeProperty="offsetWidth",this.clientProperty="clientX",this.offsetProperty="offsetX",this.axis="x"}scrollTo(i,r){return Ln(this.cmp.scrollTo({left:i,duration:r}))}instantScrollTo(i,r){this.cmp.viewport.scrollXTo(this.handlePosition(i,r))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["scrollbar-x"]],hostVars:1,hostBindings:function(r,s){r&2&&j3("dir",s.cmp.direction())},standalone:!0,features:[jt([{provide:b9,useExisting:e}]),H2,Oe],decls:6,vars:7,consts:[["sticky",""],[1,"ng-scrollbar-sticky"],[1,"ng-scrollbar-track-wrapper"],["scrollbarTrackX",""],["scrollbarThumbX",""],["scrollbarButton","start","scrollDirection","backward"],["scrollbarButton","end","scrollDirection","forward"]],template:function(r,s){r&1&&(he(0,"div",1,0)(2,"div",2)(3,"div",3),ve(4,"div",4),de(),N2(5,_P,2,6),de()()),r&2&&(re(3),u3("ng-scrollbar-track ",s.cmp.trackClass,""),re(),u3("ng-scrollbar-thumb ",s.cmp.thumbClass,""),re(),Ar(5,s.cmp.buttons()?5:-1))},dependencies:[RP,kP,nC],styles:[wP,"[_nghost-%COMP%]{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-x-length) * 1px);--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{_--button-rotate:90}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{_--button-rotate:-90}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{--_button-rotate: 90deg}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]:hover{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes _ngcontent-%COMP%_scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}"],changeDetection:0});let t=e;return t})(),KM=(()=>{let e=class e{constructor(){this.cmp=G(I6)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["scrollbars"]],standalone:!0,features:[Oe],decls:2,vars:2,template:function(r,s){r&1&&N2(0,SP,1,0,"scrollbar-y")(1,HP,1,0,"scrollbar-x"),r&2&&(Ar(0,s.cmp.verticalUsed()?0:-1),re(),Ar(1,s.cmp.horizontalUsed()?1:-1))},dependencies:[UP,FP],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0});let t=e;return t})(),bo=(()=>{let e=class e extends DP{ngOnInit(){this.viewport.init(this.nativeElement,this.contentWrapper.nativeElement),super.ngOnInit()}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=yt(e)))(s||e)}})(),e.\u0275cmp=Pe({type:e,selectors:[["ng-scrollbar",3,"externalViewport",""]],viewQuery:function(r,s){if(r&1&&(q3(LP,7),q3(KM,7)),r&2){let a;Bt(a=Gt())&&(s.contentWrapper=a.first),Bt(a=Gt())&&(s._scrollbars=a.first)}},exportAs:["ngScrollbar"],standalone:!0,features:[jt([{provide:I6,useExisting:e}]),Xd([VP]),H2,Oe],ngContentSelectors:EP,decls:4,vars:0,consts:[["contentWrapper",""]],template:function(r,s){r&1&&(_a(),he(0,"div",null,0),wa(2),ve(3,"scrollbars"),de())},dependencies:[KM],styles:["[_nghost-%COMP%]{display:block;position:relative;max-height:100%;max-width:100%;--scrollbar-border-radius: 0px;--scrollbar-thickness: 5;--scrollbar-offset: 0;--scrollbar-track-wrapper-transition: width 60ms linear, height 60ms linear;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgb(0 0 0 / 20%);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-button-color: var(--scrollbar-thumb-color);--scrollbar-button-hover-color: var(--scrollbar-button-color);--scrollbar-button-active-color: var(--scrollbar-button-hover-color);--scrollbar-button-fill: white;--scrollbar-button-hover-fill: var(--scrollbar-button-fill);--scrollbar-button-active-fill: var(--scrollbar-button-hover-fill);--scrollbar-hover-opacity-transition-enter-duration: 0;--scrollbar-hover-opacity-transition-leave-duration: .4s;--scrollbar-hover-opacity-transition-leave-delay: 1s;--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;--_scrollbar-thickness: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--scrollbar-thumb-color);--_thumb-y-color: var(--scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none!important}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none!important}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=native][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=native][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--scrollbar-hover-opacity-transition-leave-duration) var(--scrollbar-hover-opacity-transition-leave-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--scrollbar-hover-opacity-transition-enter-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element, [_nghost-%COMP%]     .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end], [_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom], [_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[_ngcontent-%COMP%]{background:#00f}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{left:0;right:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{top:0;bottom:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%]{top:0;height:var(--dropped-offset-top)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{bottom:0;height:var(--dropped-offset-bottom)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%]{width:var(--dropped-offset-start)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{width:var(--dropped-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[horizontalUsed=true][_nghost-%COMP%]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--scrollbar-thumb-min-size))}[verticalUsed=true][_nghost-%COMP%]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--scrollbar-thumb-min-size))}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior)}"],changeDetection:0});let t=e;return t})();var zo=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=it({type:e}),e.\u0275inj=nt({});let t=e;return t})();var _o=(()=>{let e=class e{constructor(){this.panelText=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["app-panel"]],inputs:{panelText:"panelText"},standalone:!0,features:[Oe],decls:3,vars:1,consts:[[1,"panel-face"],[1,"panel-text",2,"white-space","pre-wrap"]],template:function(r,s){r&1&&(he(0,"div",0)(1,"div",1),Wt(2),de()()),r&2&&(re(2),Tr(s.panelText))},styles:[".panel-face[_ngcontent-%COMP%]{color:#fff;background-color:#000000e5;border-radius:10px;margin-top:5dvh;margin-bottom:5dvh;width:60dvw;height:90dvh}.panel-text[_ngcontent-%COMP%]{padding-top:.5dvw;padding-left:2dvw;margin-right:1dvw;color:#e6e6e6;text-align:left;-webkit-user-select:none;user-select:none}"]});let t=e;return t})();var rC={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]};var sC={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var aC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var oC={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var BP=["shaderViewport"],GP=["shaderCanvas"];function WP(t,e){if(t&1&&ve(0,"img",5),t&2){let n=bt();Se("src",n.previewImageSrc,ha)}}var cC=(()=>{let e=class e{constructor(i){this.http=i,this.name="[Unknown Shader!]",this.vertexShaderFilepath="",this.fragmentShaderFilepath="",this.previewImageSrc="",this.isAnimating=!1,this.requestId=-1}ngAfterViewInit(){Promise.all([this.loadShader(this.vertexShaderFilepath),this.loadShader(this.fragmentShaderFilepath)]).then(([i,r])=>{this.initThree(i,r)}).catch(i=>console.error("Error loading shaders:",i)),this.shaderViewport.nativeElement.addEventListener("mouseenter",this.startAnimation.bind(this)),this.shaderViewport.nativeElement.addEventListener("mouseleave",this.stopAnimation.bind(this))}startAnimation(){this.isAnimating==!1&&(this.isAnimating=!0,this.animate(this.composer,this.material))}stopAnimation(){this.requestId&&(cancelAnimationFrame(this.requestId),this.requestId=-1),this.isAnimating=!1}loadShader(i){return this.http.get(i,{responseType:"text"}).toPromise().then(r=>r||"")}onResize(){let r=2.5*(window.innerWidth/window.innerHeight);this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth,this.shaderCanvas.nativeElement.clientHeight),this.material.uniforms.ratio.value=.5*(1/.2)*(window.innerWidth/window.innerHeight)}initThree(i,r){this.renderer=new an({canvas:this.shaderCanvas.nativeElement,alpha:!1,antialias:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth,this.shaderCanvas.nativeElement.clientHeight);let s=.2;this.scene=new Gi,this.camera=new u2(75,s*this.shaderCanvas.nativeElement.clientWidth/this.shaderCanvas.nativeElement.clientHeight,.1,1e3),this.camera.position.z=1,this.composer=new $i(this.renderer),this.composer.addPass(new Xi(this.scene,this.camera)),this.material=new p2({uniforms:{time:{value:0},ratio:{value:1/s/2*window.innerWidth/window.innerHeight}},vertexShader:i,fragmentShader:r});let a=new h4(2,2),o=new d2(a,this.material);this.scene.add(o),this.animate(this.composer,this.material),this.capturePreview()}animate(i,r){if(this.requestId<0){let s=Date.now(),a=()=>{if(this.isAnimating){this.requestId=requestAnimationFrame(a);let o=(Date.now()-s)*1e-5;r.uniforms.time.value=o,i.render()}else cancelAnimationFrame(this.requestId),this.requestId=-1};a()}}capturePreview(){let r=2.5*(window.innerWidth/window.innerHeight);this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth,this.shaderCanvas.nativeElement.clientHeight),this.material.uniforms.ratio.value=.5*(1/.2)*(window.innerWidth/window.innerHeight);let s=new Image;this.renderer.render(this.scene,this.camera),s.src=this.renderer.domElement.toDataURL(),this.previewImageSrc=s.src}};e.\u0275fac=function(r){return new(r||e)(ge(Or))},e.\u0275cmp=Pe({type:e,selectors:[["app-shader-nub"]],viewQuery:function(r,s){if(r&1&&(q3(BP,5),q3(GP,5)),r&2){let a;Bt(a=Gt())&&(s.shaderViewport=a.first),Bt(a=Gt())&&(s.shaderCanvas=a.first)}},hostBindings:function(r,s){r&1&&L2("resize",function(){return s.onResize()},!1,da)},inputs:{name:"name",vertexShaderFilepath:"vertexShaderFilepath",fragmentShaderFilepath:"fragmentShaderFilepath"},standalone:!0,features:[Oe],decls:7,vars:2,consts:[["shaderViewport",""],["shaderCanvas",""],[1,"shader-container"],["id","text"],["class","preview-image","alt"," ",3,"src",4,"ngIf"],["alt"," ",1,"preview-image",3,"src"]],template:function(r,s){r&1&&(he(0,"div",2,0)(2,"div",3),Wt(3),de(),N2(4,WP,1,1,"img",4),ve(5,"canvas",null,1),de()),r&2&&(re(3),Zn(" ",s.name," "),re(),Se("ngIf",!s.isAnimating))},dependencies:[d3,Ta,Fa],styles:[".shader-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:3vw;overflow:hidden;background-color:#000;width:100%;height:20vh;position:relative;z-index:0;box-shadow:0 4px 8px 4px #111;--blur-intensity: 3px}.preview-image[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%]{transition:filter .25s ease-in-out;width:100%;height:20vh;position:absolute;filter:blur(var(--blur-intensity))}#text[_ngcontent-%COMP%]{transition:opacity .25s ease-in-out;opacity:1;font-size:2vw;color:#fff;text-align:center;margin:0;z-index:2;position:absolute;text-shadow:0px 0px 10px black,0px 0px 10px black,0px 0px 10px black,0px 0px 10px black,0px 0px 10px black,0px 0px 10px black}.shader-container[_ngcontent-%COMP%]:hover > #text[_ngcontent-%COMP%]{opacity:0}.shader-container[_ngcontent-%COMP%]:hover{--blur-intensity: 0px}canvas[_ngcontent-%COMP%]{pointer-events:auto}"]});let t=e;return t})();function jP(t,e){if(t&1&&(he(0,"div",4),ve(1,"app-shader-nub",5)(2,"br"),de()),t&2){let n=e.$implicit;re(),Se("name",n.name)("vertexShaderFilepath",n.vertexShaderFilepath)("fragmentShaderFilepath",n.fragmentShaderFilepath)}}var lC=(()=>{let e=class e extends _o{constructor(){super(),this.nubs=[{name:"N I H I L I S M",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Nihilism.frag"},{name:"I N N E R - F I R E",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_InnerFire.frag"},{name:"T H R U S T E R S",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Thrusters.frag"},{name:"R O C K E T",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Rocket.frag"},{name:"P S I - D R U M",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_PsiDrum.frag"},{name:"S C A N N E R",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Scanner.frag"},{name:"M A T T E R F L O W E R",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Matterflower.frag"},{name:"L A T T I C E",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Lattice.frag"},{name:"G A L A C T I C - S E A M",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_GalacticSeam.frag"},{name:"T U R B U L E N C E",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Turbulence.frag"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["app-panel-shader"]],standalone:!0,features:[H2,Oe],decls:5,vars:2,consts:[[1,"panel-face"],[1,"panel-text",2,"white-space","pre-wrap"],[1,"scrollable-content"],["style","scale:0.90",4,"ngFor","ngForOf"],[2,"scale","0.90"],[3,"name","vertexShaderFilepath","fragmentShaderFilepath"]],template:function(r,s){r&1&&(he(0,"div",0)(1,"div",1),Wt(2),he(3,"ng-scrollbar",2),N2(4,jP,3,3,"div",3),de()()()),r&2&&(re(2),Zn(" ",s.panelText," "),re(2),Se("ngForOf",s.nubs))},dependencies:[d3,Lp,cC,zo,bo],styles:[".scrollable-content[_ngcontent-%COMP%]{max-height:80dvh;overflow-y:auto}ng-scrollbar[_ngcontent-%COMP%]{visibility:always;width:100%;height:100%;--scrollbar-border-radius: 20px;--scrollbar-thickness: 10;--scrollbar-offset: 5;--scrollbar-track-wrapper-transition: width 60ms linear, height 60ms linear;--scrollbar-track-color: rgb(0 0 0 / 75%);--scrollbar-thumb-color: rgb(255 255 255 / 80%);--scrollbar-thumb-hover-colorIn: rgb(255 255 255 / 100%);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-colorIn);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-button-color: var(--scrollbar-thumb-color);--scrollbar-button-hover-color: var(--scrollbar-button-color);--scrollbar-button-active-color: var(--scrollbar-button-hover-color);--scrollbar-button-fill: white;--scrollbar-button-hover-fill: var(--scrollbar-button-fill);--scrollbar-button-active-fill: var(--scrollbar-button-hover-fill);--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;-webkit-mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%)}",".panel-face[_ngcontent-%COMP%]{color:#fff;background-color:#000000e5;border-radius:10px;margin-top:5dvh;margin-bottom:5dvh;width:60dvw;height:90dvh}.panel-text[_ngcontent-%COMP%]{padding-top:.5dvw;padding-left:2dvw;margin-right:1dvw;color:#e6e6e6;text-align:left;-webkit-user-select:none;user-select:none}"]});let t=e;return t})();function qP(t,e){if(t&1&&ve(0,"app-panel-shader",11),t&2){let n=bt();Se("panelText",n.panelText)}}function $P(t,e){if(t&1&&ve(0,"app-panel",11),t&2){let n=bt();Se("panelText",n.panelText)}}var fC=(()=>{let e=class e{constructor(){this.faUser=FM,this.faSteam=rC,this.faLinkedin=sC,this.faGithub=aC,this.faYoutube=oC,this.title="PersonalPortfolioSite",this.panelTypeTargetName="Default",this.panelText=`Hello! Welcome to my website!

Click the buttons on the left to view additional information and content.

Buttons marked with (\u2197) will open a new tab in your browser.`,this.tabIDSelected=0,this.hovering=!1,this.onClickShaders=this.onClickShaders.bind(this)}onMouseEnter(){this.hovering=!0}onMouseLeave(){this.hovering=!1}handlePanelTextEvent(i){this.panelText=i}onClickShaders(i){this.panelTypeTargetName="shaderPanel"}onClickRingWar(i){window.open("https://store.steampowered.com/app/1909650/Ring_War/","_blank")}onClickLinkedIn(i){window.open("https://www.linkedin.com/in/aidan-cusack-74406728b/","_blank")}onClickGitHub(i){window.open("https://github.com/Ilverism/","_blank")}onClickYouTube(i){window.open("https://www.youtube.com/@IlverismOST/","_blank")}handleTabIDEvent(i){console.log("Received Tab ID: "+i),this.tabIDSelected=parseInt(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Pe({type:e,selectors:[["app-root"]],standalone:!0,features:[Oe],decls:16,vars:35,consts:[[1,"fullscreen-container"],[1,"overlay-content",2,"scale","0.90"],[3,"position","appearance"],[1,"scrollbar-elements"],[2,"display","block","margin","5.0dvh 0"],[3,"panelTextOut","outputTabID","name","panelText","iconDef","buttonColor","isExternalLink"],[3,"panelTextOut","outputTabID","name","panelText","iconUrl","buttonColor","isExternalLink","clickEvent"],[3,"outputTabID","name","iconDef","buttonColor","isExternalLink","clickEvent"],[3,"ngSwitch"],[3,"panelText",4,"ngSwitchCase"],[3,"panelText",4,"ngSwitchDefault"],[3,"panelText"]],template:function(r,s){r&1&&(he(0,"div",0),ve(1,"app-shader-background"),he(2,"div",1)(3,"ng-scrollbar",2)(4,"div",3),ve(5,"br",4),he(6,"app-tab",5),L2("panelTextOut",function(o){return s.handlePanelTextEvent(o)})("outputTabID",function(o){return s.handleTabIDEvent(o)}),de(),he(7,"app-tab",6),L2("panelTextOut",function(o){return s.handlePanelTextEvent(o)})("outputTabID",function(o){return s.handleTabIDEvent(o)}),de(),he(8,"app-tab",7),L2("outputTabID",function(o){return s.handleTabIDEvent(o)}),de(),he(9,"app-tab",7),L2("outputTabID",function(o){return s.handleTabIDEvent(o)}),de(),he(10,"app-tab",7),L2("outputTabID",function(o){return s.handleTabIDEvent(o)}),de(),he(11,"app-tab",7),L2("outputTabID",function(o){return s.handleTabIDEvent(o)}),de(),ve(12,"br",4),de()(),he(13,"div",8),N2(14,qP,1,1,"app-panel-shader",9)(15,$P,1,1,"app-panel",10),de()()()),r&2&&(re(3),Se("position","invertY")("appearance","compact"),re(3),Se("name","About")("panelText","[TODO: Display About Page...]")("iconDef",s.faUser)("buttonColor","lightgray")("isExternalLink",!1),re(),Se("name","Shaders")("panelText","")("iconUrl","assets/images/ShaderIconAlt.png")("buttonColor","gray")("isExternalLink",!1)("clickEvent",s.onClickShaders),re(),Se("name","Ring War")("iconDef",s.faSteam)("buttonColor","#171a21")("isExternalLink",!0)("clickEvent",s.onClickRingWar),re(),Se("name","LinkedIn")("iconDef",s.faLinkedin)("buttonColor","rgba(0, 123, 181, 1.00)")("isExternalLink",!0)("clickEvent",s.onClickLinkedIn),re(),Se("name","GitHub")("iconDef",s.faGithub)("buttonColor","#333")("isExternalLink",!0)("clickEvent",s.onClickGitHub),re(),Se("name","Music")("iconDef",s.faYoutube)("buttonColor","rgba(255, 0, 0, 1.00)")("isExternalLink",!0)("clickEvent",s.onClickYouTube),re(2),Se("ngSwitch",s.panelTypeTargetName),re(),Se("ngSwitchCase","shaderPanel"))},dependencies:[d3,Da,Ep,Vp,Pv,BM,zo,bo,_o,lC,Co],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;height:10%}app-shader-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.overlay-content[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;color:#fff;font:3vw sans-serif;margin-left:1vw}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1vw;align-content:start;overflow-y:hidden;max-height:80vh;padding:5vw}ng-scrollbar[_ngcontent-%COMP%]{visibility:always;width:40%;height:100%;--scrollbar-border-radius: 20px;--scrollbar-thickness: 20;--scrollbar-offset: 5;--scrollbar-track-wrapper-transition: width 60ms linear, height 60ms linear;--scrollbar-track-color: rgb(0 0 0 / 75%);--scrollbar-thumb-color: rgb(255 255 255 / 80%);--scrollbar-thumb-hover-colorIn: rgb(255 255 255 / 100%);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-colorIn);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-button-color: var(--scrollbar-thumb-color);--scrollbar-button-hover-color: var(--scrollbar-button-color);--scrollbar-button-active-color: var(--scrollbar-button-hover-color);--scrollbar-button-fill: white;--scrollbar-button-hover-fill: var(--scrollbar-button-fill);--scrollbar-button-active-fill: var(--scrollbar-button-hover-fill);--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;-webkit-mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%);mask-border:url("./media/TriangleBorder-6N7FN5WN.svg") 30 repeat}.scrollbar-elements[_ngcontent-%COMP%]{padding-left:2vw}']});let t=e;return t})();im(fC,Gm).catch(t=>console.error(t));
