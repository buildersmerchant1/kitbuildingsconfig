import{_ as L,d as $,F as I,r as C,o as n,b as a,a as i,n as m,e as r,f as g,g as w,h as M,w as S,j as A,c as D,t as P,k as y,v as z,l as j,i as q}from"./index.21dd1e3f.js";import{E as U,S as O,C as b,A as H,V as f,H as T,G as W,a as E,T as G,c as Z,b as x,d as N,e as Q,M as J,P as K}from"./stlFileLoader.32cd1417.js";import{M as X,P as Y,S as _,C as ee,c as R,a as oe,_ as te}from"./colors.4cef3cf1.js";const se=$({emits:["colorScroll"],components:{Modal:X,PrimaryButton:Y,SnapSpan:_,ColorButton:ee,FontAwesomeIcon:I},props:{mainColor:{type:String,default:"#ffffff"},lineColor:{type:String,default:"#eeeeee"}},data(){return{modalTransition:{"enter-active-class":"transition duration-200 ease-in-out transform","enter-from-class":"translate-y-full","enter-to-class":"translate-y-0","leave-active-class":"transition duration-200 ease-in-out transform","leave-to-class":"translate-y-full","leave-from-class":"translate-y-0"},additions:!1,emailModal:!1,quoteModal:!1,imageModal:!1,email:"",quote:{name:"",email:"",company:"",phone:""},scene:void 0,camera:void 0,logoPlane:void 0,fullscreen:!1,buildingMaterial:void 0,baseColor:"#835641",lengths:[9.2,11,15],length:11,width:14,height:15,zoomFactor:6,heightOffset:10,buildingSide:"",doorsNumbers:{main:{front:0,back:0},personnel:{front:0,back:0}},mainDoors:["Manual Roll Up PVC Door","Sliding Rail Door"],presonnelDoors:["Metal Door","PVC Door"],extras:["PE inner fabric to help with condensation"],colors:R,colorCategories:oe,colorCategory:"All",snaps:[],submenus:{len:!1,doors:!1,mainDoors:!1,personnelDoors:!1,snapshot:!1,colors:!1},rootMesh:void 0,doorMeshes:{main:{front:[],back:[]},personnel:{front:[],back:[]}}}},computed:{doorsText(){let e,o,s;return this.doorsNumbers.main[this.buildingSide]>1||this.doorsNumbers.main[this.buildingSide]===0?(e=" are ",o="s"):(e=" is ",o=""),this.doorsNumbers.personnel[this.buildingSide]>1||this.doorsNumbers.personnel[this.buildingSide]===0?s="s":s="","There"+e+"currently "+this.doorsNumbers.main[this.buildingSide].toString()+" main door"+o+" and "+this.doorsNumbers.personnel[this.buildingSide].toString()+" personnel door"+s+" on this side of the building."}},mounted(){window.addEventListener("resize",h=>{document.fullscreenElement&&document.fullscreenElement!==null||document.webkitFullscreenElement&&document.webkitFullscreenElement!==null||document.mozFullScreenElement&&document.mozFullScreenElement!==null||document.msFullscreenElement&&document.msFullscreenElement!==null?this.fullscreen=!0:this.fullscreen=!1});const e=document.getElementsByClassName("canvas")[0];e.getContext("webgl",{preserveDrawingBuffer:!0});const o=new U(e);let s=new O(o);s.clearColor=new b.FromHexString(this.mainColor);let l=new H("camera",Math.PI/2,Math.PI/2,2,new f(0,0,-10),s);l.useAutoRotationBehavior=!0,l.autoRotationBehavior.idleRotationSpinupTime=.02,l.autoRotationBehavior.idleRotationSpeed=.02,l.autoRotationBehavior.idleRotationWaitTime=.01,l.upperBetaLimit=1.4,l.lowerBetaLimit=.6,l.radius=3,l.alpha=-.1,l.rotationOffset=0,l.heightOffset=.5,l.maxCameraSpeed=.5,l.upperRadiusLimit=4,l.lowerRadiusLimit=2,l.attachControl(e,!0);let B=new T("light",new f(2-1,2),s),V=new T("light",new f(2,1,1),s),p=new T("light",new f(-2,0,-2),s);B.intensity=.5,V.intensity=.5,p.intensity=.5;let u=new W("grid",s);u.mainColor=new b.FromHexString(this.mainColor),u.lineColor=new b.FromHexString(this.lineColor),u.gridRatio=.25;let k=new E("color",s);k.diffuseColor=new b.FromHexString(this.baseColor),k.specularColor=new b.FromHexString(this.baseColor);let v=new E("logoMaterial",s);v.diffuseTexture=v.opacityTexture=new G("./images/shared/kit-buildings-logo-gray.png",s),v.specularColor=new b(0,0,0),v.backFaceCulling=!1;let c=Z.CreatePlane("logoPlane",.5,s);c.scaling=new f(1.5,.6569,.1),c.rotation.x=Math.PI/2,c.rotation.z=Math.PI/2,c.position.y=.0011,c.position.x=this.zoomFactor*this.length/200+.4,c.material=v;let t=x.ImportMesh("","./models/buildings/aircraft-hangar/","aircraft-hangar.gltf",s,h=>{h[0].scaling=new f(this.zoomFactor*this.length/10,this.zoomFactor*this.height/this.heightOffset,this.zoomFactor*this.width/10),h[0].position.y=0,h[3].material=k,this.rootMesh=h[0],l.lockedTarget=h[0],this.buildingMaterial=h[3];for(var F=1;F<3;F++)h[F].actionManager=new N(s),h[F].actionManager.registerAction(new Q(N.OnPickTrigger,this.pickBuilding))});x.ImportMesh("","./models/airplane/","airplane.gltf",s,h=>{h[0].position.x=.1}),t.OPTIMIZE_WITH_UV=!0,t.IMPORT_VERTEX_COLORS=!0,t.COMPUTE_NORMALS=!0,t.OPTIMIZE_NORMALS=!0;let d=J.CreateDisc("ground",{radius:5},s);d.rotation.x=Math.PI/2,d.material=u,o.runRenderLoop(()=>{s.render()}),this.scene=s,this.camera=l,this.logoPlane=c},methods:{pickBuilding(e){this.camera.useAutoRotationBehavior=!1;let o=e.meshUnderPointer;this.buildingSide=o.name,this.submenus.doors||this.submenu("doors"),setTimeout(()=>{this.camera.useAutoRotationBehavior=!0},1e3)},removeDoors(){for(const e in this.doorMeshes){this.doorsNumbers[e][this.buildingSide]=0;for(let o=0;o<this.doorMeshes[e][this.buildingSide].length;o++)this.doorMeshes[e][this.buildingSide][o].dispose()}},positionDoor(e){switch(e.addBehavior(new K({dragAxis:new f(0,0,1)})),e.scaling=new f(1,1.5*4,1.5*3.5),e.position.y=0,this.buildingSide){case"front":e.position.x=this.zoomFactor*this.length/200+.0011;break;case"back":e.position.x=-(this.zoomFactor*this.length/200+.0011);break}},positionPersonnelDoor(e){switch(this.buildingSide){case"front":e.position.z=this.zoomFactor*this.width/300+.0011;break;case"back":e.position.z=-(this.zoomFactor*this.width/300+.0011);break}},addDoor(e,o){let s=this.scene;switch(o){case"main":switch(this.doorsNumbers.main[this.buildingSide]=this.doorsNumbers.main[this.buildingSide]+1,e){case"Manual Roll Up PVC Door":x.ImportMesh("","./models/doors/manual-roll-up-pvc-door/","manual-roll-up-pvc-door.gltf",s,l=>{setTimeout(()=>{this.doorMeshes.main[this.buildingSide].push(l[0])},300),this.positionDoor(l[0])});break;case"Sliding Rail Door":x.ImportMesh("","./models/doors/sliding-rail-door/","sliding-rail-door.gltf",s,l=>{setTimeout(()=>{this.doorMeshes.main[this.buildingSide].push(l[0])},300),this.positionDoor(l[0])});break}break;case"personnel":this.doorsNumbers.personnel[this.buildingSide]=this.doorsNumbers.personnel[this.buildingSide]+1,e==="Metal Door"?x.ImportMesh("","./models/doors/personnel-metal-door/","personnel-metal-door.gltf",s,l=>{setTimeout(()=>{this.doorMeshes.personnel[this.buildingSide].push(l[0])},300),this.positionDoor(l[0]),this.positionPersonnelDoor(l[0])}):x.ImportMesh("","./models/doors/personnel-pvc-door/","personnel-pvc-door.gltf",s,l=>{setTimeout(()=>{this.doorMeshes.personnel[this.buildingSide].push(l[0])},300),this.positionDoor(l[0]),this.positionPersonnelDoor(l[0])});break}},toggleFullscreen(){const e=document.getElementsByTagName("body")[0];this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()},submenu(e){this.submenus.len!==this.submenus[e]&&(this.submenus.len=!1),this.submenus.doors!==this.submenus[e]&&(this.submenus.doors=!1),this.submenus.mainDoors!==this.submenus[e]&&(this.submenus.mainDoors=!1),this.submenus.personnelDoors!==this.submenus[e]&&(this.submenus.personnelDoors=!1),this.submenus.colors!==this.submenus[e]&&(this.submenus.colors=!1),this.submenus.snapshot!==this.submenus[e]&&(this.submenus.snapshot=!1),this.submenus[e]=!this.submenus[e]},colorChange(e){this.baseColor=e;let o=new E("color",this.scene);o.diffuseColor=new b.FromHexString(e),o.specularColor=new b.FromHexString(e),this.buildingMaterial.material=o},selectCategory(e){this.colorCategory=e,e==="All"?this.colors=R:(this.colors=R,this.colors=this.colors.filter(o=>o.category===e))},scroller(e){let o=document.getElementsByClassName("colors-container")[0];switch(e){case"left":o.scrollLeft!==0&&(o.scrollLeft=o.scrollLeft-502);break;case"right":o.scrollLeft=o.scrollLeft+502;break}},confirmEmail(){this.emailModal=!1},confirmQuote(){this.quoteModal=!1},dimensionChange(e,o){switch(o){case"len":this.length=e,this.lengthWarning&&this.removeSideDoors("z-axis"),this.moveDoors("x-axis");break}this.rootMesh.scaling=new f(this.zoomFactor*this.length/10,this.zoomFactor*this.height/this.heightOffset,this.zoomFactor*this.width/10),this.logoPlane.position.x=this.zoomFactor*this.length/200+.4},moveDoors(e){switch(e){case"x-axis":for(const o in this.doorMeshes){for(let s=0;s<this.doorMeshes[o].front.length;s++){let l=this.doorMeshes[o].front[s];l.position.x=this.zoomFactor*this.length/200+.0011}for(let s=0;s<this.doorMeshes[o].back.length;s++){let l=this.doorMeshes[o].back[s];l.position.x=-(this.zoomFactor*this.length/200+.0011)}}break}},removeSideDoors(e){switch(e){case"x-axis":for(const o in this.doorMeshes){this.doorsNumbers[o].front=0,this.doorsNumbers[o].back=0;for(let s=0;s<this.doorMeshes[o].front.length;s++)this.doorMeshes[o].front[s].dispose();for(let s=0;s<this.doorMeshes[o].back.length;s++)this.doorMeshes[o].back[s].dispose()}break}},takeSnapshot(){let o=document.getElementsByClassName("canvas")[0].toDataURL();this.snaps.push(o)},trashSnapshot(e){const o=this.snaps.indexOf(e);o>-1&&this.snaps.splice(o,1)},zoomSnapshot(e){this.imageModal=!0;let o=document.getElementsByClassName("modal-image")[0];o.src=e},downloadSnapshot(e){let o=document.createElement("a");o.download="Storage Building",o.href=e,document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}),ie={class:"relative w-full h-full"},le={class:"fixed flex"},ne=i("img",{src:te,alt:"Colors"},null,-1),re=[ne],ae=["onClick"],de={class:"relative flex scroll-smooth mt-7"},me={class:"relative flex scroll-smooth"},ue={class:"relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh]"},he=i("p",{class:"text-sm font-semibold mb-5"},"Pick a door which you would like to add.",-1),ce={class:"flex flex-col items-start"},pe=["onClick"],fe=["src","alt"],ge={class:"text-sm font-semibold ml-px mt-2"},be={class:"relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh]"},ve=i("p",{class:"text-sm font-semibold mb-5"},"Pick a door which you would like to add.",-1),we={class:"flex flex-col items-start"},ye=["onClick"],xe=["src","alt"],ke={class:"text-sm font-semibold ml-px mt-2"},Ce=i("canvas",{class:"canvas"},null,-1),Me=q("Great!"),Se=i("p",{class:"text-sm ml-1"},"We'll send the configuration to your email.",-1),ze=i("img",{class:"object-cover modal-image"},null,-1),Fe=q("Brilliant!"),De=i("p",{class:"text-sm ml-1"},"We'll get back to you soon.",-1),Pe={class:"relative w-5/6 mt-2 block mx-[1px]"},Te={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Ee={class:"relative w-5/6 mt-2 block mx-[1px]"},Re={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Be={class:"relative w-5/6 mt-2 block mx-[1px]"},Ve={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Ne={class:"relative w-5/6 mt-2 block mx-[1px]"},qe={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Le={class:"text-sm font-semibold"};function $e(e,o,s,l,B,V){const p=C("primary-button"),u=C("font-awesome-icon"),k=C("color-button"),v=C("snap-span"),c=C("modal");return n(),a(g,null,[i("div",ie,[i("div",{class:m(["w-full flex py-3 absolute inset-x-0 z-50 px-14 bg-white",e.fullscreen?"top-[40px]":"top-[100px]"])},[r(p,{text:"Length",onClick:o[0]||(o[0]=t=>e.submenu("len")),active:e.submenus.len,class:"ml-0"},null,8,["active"]),r(p,{text:"PVC Color",onClick:o[1]||(o[1]=t=>e.submenu("colors")),active:e.submenus.colors,class:"mr-auto"},null,8,["active"]),r(p,{icon:"camera",onClick:o[2]||(o[2]=t=>e.submenu("snapshot")),active:e.submenus.snapshot},null,8,["active"]),r(p,{icon:"envelope",onClick:o[3]||(o[3]=t=>e.emailModal=!0),active:e.emailModal},null,8,["active"]),r(p,{icon:e.fullscreen?"compress":"expand",onClick:e.toggleFullscreen,active:e.fullscreen},null,8,["icon","onClick","active"])],2),e.submenus.colors?(n(),a("div",{key:0,class:m(["scroll-smooth overflow-hidden flex flex-col pt-1 pb-3 absolute inset-x-0 z-50 bg-white colors-container w-[92%] ml-14 animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[i("div",le,[i("div",{class:m(["rounded-full h-5 w-5 cursor-pointer border-2 mr-2",e.colorCategory==="All"&&"border-primary"]),onClick:o[4]||(o[4]=t=>e.selectCategory("All"))},re,2),(n(!0),a(g,null,w(e.colorCategories,t=>(n(),a("div",{key:t.id,class:m(["rounded-full h-5 w-5 cursor-pointer border-2 mr-2",e.colorCategory===t.category&&"border-primary"]),onClick:d=>e.selectCategory(t.category),style:A({backgroundColor:t.hex})},null,14,ae))),128))]),i("div",de,[i("div",{class:m(["self-center z-50 left-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[5]||(o[5]=t=>e.scroller("left"))},[r(u,{icon:"chevron-left","fixed-width":"",size:"xl"})],2),(n(!0),a(g,null,w(e.colors,t=>(n(),D(k,{key:t.code,data:t,hex:t.hex,margin:t.code!==9018?"mr-3":"mr-0",active:t.hex===e.baseColor,onClick:d=>e.colorChange(t.hex)},null,8,["data","hex","margin","active","onClick"]))),128)),i("div",{class:m(["self-center z-50 right-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[6]||(o[6]=t=>e.scroller("right"))},[r(u,{icon:"chevron-right","fixed-width":"",size:"xl"})],2)])],2)):M("",!0),e.submenus.snapshot?(n(),a("div",{key:1,class:m(["scroll-smooth overflow-hidden min-h-[100px] flex py-3 absolute inset-x-0 z-50 bg-white colors-container w-[89%] ml-14 animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[i("div",me,[i("div",{class:m(["self-center z-50 left-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[7]||(o[7]=t=>e.scroller("left"))},[r(u,{icon:"chevron-left","fixed-width":"",size:"xl"})],2),(n(!0),a(g,null,w(e.snaps,(t,d)=>(n(),D(v,{key:d,data:t,margin:d!==e.snaps.length?"mr-3":"mr-0",onTrash:e.trashSnapshot,onZoom:e.zoomSnapshot,onDownload:e.downloadSnapshot},null,8,["data","margin","onTrash","onZoom","onDownload"]))),128)),i("div",{class:m(["self-center z-50 right-12 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[8]||(o[8]=t=>e.takeSnapshot())},[r(u,{icon:"plus","fixed-width":"",size:"xl"})],2),i("div",{class:m(["self-center z-50 right-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[9]||(o[9]=t=>e.scroller("right"))},[r(u,{icon:"chevron-right","fixed-width":"",size:"xl"})],2)])],2)):M("",!0),e.submenus.len?(n(),a("div",{key:2,class:m(["scroll-smooth overflow-hidden flex py-3 absolute inset-x-0 z-50 bg-white colors-container pl-14 mr-auto animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[(n(!0),a(g,null,w(e.lengths,(t,d)=>(n(),D(p,{key:t,text:t+" meters",onClick:h=>e.dimensionChange(t,"len"),active:t===e.length,class:m(d===0&&"ml-0")},null,8,["text","onClick","active","class"]))),128))],2)):M("",!0),e.submenus.mainDoors?(n(),a("div",{key:3,class:m(["scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[i("div",ue,[he,i("div",ce,[(n(!0),a(g,null,w(e.mainDoors,(t,d)=>(n(),a("div",{key:d,onClick:h=>e.addDoor(t,"main"),class:"flex flex-col cursor-pointer justify-start items-start mb-4"},[i("img",{src:"images/doors/"+t+".jpg",alt:t,class:"w-auto h-24 object-cover"},null,8,fe),i("p",ge,P(t),1)],8,pe))),128)),r(p,{text:"Back",onClick:o[10]||(o[10]=t=>e.submenu("doors")),class:"ml-0 mt-5"})])])],2)):M("",!0),e.submenus.personnelDoors?(n(),a("div",{key:4,class:m(["scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[i("div",be,[ve,i("div",we,[(n(!0),a(g,null,w(e.presonnelDoors,(t,d)=>(n(),a("div",{key:d,onClick:h=>e.addDoor(t,"personnel"),class:"flex flex-col cursor-pointer justify-start items-start mb-4"},[i("img",{src:"images/doors/Personnel "+t+".jpg",alt:t,class:"w-auto h-44 object-cover"},null,8,xe),i("p",ke,P(t),1)],8,ye))),128)),r(p,{text:"Back",onClick:o[11]||(o[11]=t=>e.submenu("doors")),class:"ml-0 mt-5"})])])],2)):M("",!0),Ce,i("div",{class:m(["quote-button",e.fullscreen?"bottom-14":"bottom-10"]),onClick:o[12]||(o[12]=t=>e.quoteModal=!0)}," Get A Quote ",2)]),r(c,{modelValue:e.emailModal,"onUpdate:modelValue":o[14]||(o[14]=t=>e.emailModal=t),onConfirm:e.confirmEmail,confirmText:"Send",transition:e.modalTransition},{title:S(()=>[Me]),default:S(()=>[Se,y(i("input",{type:"email","onUpdate:modelValue":o[13]||(o[13]=t=>e.email=t),placeholder:"john@doe.com",class:"mt-2 mx-[1px] w-5/6 text-sm px-2 border-2 border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[z,e.email]])]),_:1},8,["modelValue","onConfirm","transition"]),r(c,{modelValue:e.imageModal,"onUpdate:modelValue":o[15]||(o[15]=t=>e.imageModal=t),transition:e.modalTransition,wide:!0},{default:S(()=>[ze]),_:1},8,["modelValue","transition"]),r(c,{modelValue:e.quoteModal,"onUpdate:modelValue":o[21]||(o[21]=t=>e.quoteModal=t),onConfirm:e.confirmQuote,confirmText:"Send",transition:e.modalTransition},{title:S(()=>[Fe]),default:S(()=>[De,i("label",Pe,[i("div",Te,[r(u,{icon:"user","fixed-width":"",size:"xl"})]),y(i("input",{type:"text","onUpdate:modelValue":o[16]||(o[16]=t=>e.quote.name=t),placeholder:"John Doe",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[z,e.quote.name]])]),i("label",Ee,[i("div",Re,[r(u,{icon:"envelope","fixed-width":"",size:"xl"})]),y(i("input",{type:"email","onUpdate:modelValue":o[17]||(o[17]=t=>e.quote.email=t),placeholder:"john@doe.com",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[z,e.quote.email]])]),i("label",Be,[i("div",Ve,[r(u,{icon:"building","fixed-width":"",size:"xl"})]),y(i("input",{type:"text","onUpdate:modelValue":o[18]||(o[18]=t=>e.quote.company=t),placeholder:"Kit building Systems",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[z,e.quote.company]])]),i("label",Ne,[i("div",qe,[r(u,{icon:"mobile-alt","fixed-width":"",size:"xl"})]),y(i("input",{type:"text","onUpdate:modelValue":o[19]||(o[19]=t=>e.quote.phone=t),placeholder:"020 8617 8606",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[z,e.quote.phone]])]),(n(!0),a(g,null,w(e.extras,t=>(n(),a("label",{key:t,class:"relative w-5/6 mt-5 flex items-center mx-[1px]"},[y(i("input",{type:"checkbox","onUpdate:modelValue":o[20]||(o[20]=d=>e.additions=d),class:"mr-3 ml-1"},null,512),[[j,e.additions]]),i("p",Le,P(t),1)]))),128))]),_:1},8,["modelValue","onConfirm","transition"])],64)}const Ue=L(se,[["render",$e]]);export{Ue as default};