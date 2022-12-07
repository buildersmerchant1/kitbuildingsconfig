import{_ as L,d as $,F as I,r as k,o as r,b as a,a as s,n as m,e as l,f as v,g as w,h as z,w as C,j as A,c as V,t as F,k as y,v as M,l as j,i as q}from"./index.21dd1e3f.js";import{E as U,S as O,C as b,A as H,V as p,H as P,G as W,a as T,T as G,c as Z,b as S,d as N,e as Q,M as J,P as K}from"./stlFileLoader.32cd1417.js";import{M as X,P as Y,S as _,C as ee,c as E,a as oe,_ as te}from"./colors.4cef3cf1.js";const se=$({emits:["colorScroll"],components:{Modal:X,PrimaryButton:Y,SnapSpan:_,ColorButton:ee,FontAwesomeIcon:I},props:{mainColor:{type:String,default:"#ffffff"},lineColor:{type:String,default:"#eeeeee"}},data(){return{modalTransition:{"enter-active-class":"transition duration-200 ease-in-out transform","enter-from-class":"translate-y-full","enter-to-class":"translate-y-0","leave-active-class":"transition duration-200 ease-in-out transform","leave-to-class":"translate-y-full","leave-from-class":"translate-y-0"},additions:!1,emailModal:!1,quoteModal:!1,imageModal:!1,email:"",quote:{name:"",email:"",company:"",phone:""},scene:void 0,camera:void 0,logoPlane:void 0,fullscreen:!1,buildingMaterial:void 0,baseColor:"#a0a5a8",widths:[6,8,10,15],lengths:[9.2,11,15],length:11,width:15,height:12,buildingSide:"",doorsNumbers:{main:{front:0,back:0},personnel:{front:0,back:0}},mainDoors:["Manual Roll Up PVC Door","Sliding Rail Door"],presonnelDoors:["Metal Door","PVC Door"],extras:["PE inner fabric to help with condensation"],colors:E,colorCategories:oe,colorCategory:"All",snaps:[],submenus:{len:!1,doors:!1,mainDoors:!1,personnelDoors:!1,snapshot:!1,colors:!1},rootMesh:void 0,doorMeshes:{main:{front:[],back:[]},personnel:{front:[],back:[]}}}},computed:{doorsText(){let e,o,i;return this.doorsNumbers.main[this.buildingSide]>1||this.doorsNumbers.main[this.buildingSide]===0?(e=" are ",o="s"):(e=" is ",o=""),this.doorsNumbers.personnel[this.buildingSide]>1||this.doorsNumbers.personnel[this.buildingSide]===0?i="s":i="","There"+e+"currently "+this.doorsNumbers.main[this.buildingSide].toString()+" main door"+o+" and "+this.doorsNumbers.personnel[this.buildingSide].toString()+" personnel door"+i+" on this side of the building."}},mounted(){window.addEventListener("resize",c=>{document.fullscreenElement&&document.fullscreenElement!==null||document.webkitFullscreenElement&&document.webkitFullscreenElement!==null||document.mozFullScreenElement&&document.mozFullScreenElement!==null||document.msFullscreenElement&&document.msFullscreenElement!==null?this.fullscreen=!0:this.fullscreen=!1});const e=document.getElementsByClassName("canvas")[0];e.getContext("webgl",{preserveDrawingBuffer:!0});const o=new U(e);let i=new O(o);i.clearColor=new b.FromHexString(this.mainColor);let n=new H("camera",Math.PI/2,Math.PI/2,2,new p(0,0,-10),i);n.useAutoRotationBehavior=!0,n.autoRotationBehavior.idleRotationSpinupTime=.02,n.autoRotationBehavior.idleRotationSpeed=.02,n.autoRotationBehavior.idleRotationWaitTime=.01,n.upperBetaLimit=1.4,n.lowerBetaLimit=.6,n.radius=3,n.alpha=-.1,n.rotationOffset=0,n.heightOffset=.5,n.maxCameraSpeed=.5,n.upperRadiusLimit=4,n.lowerRadiusLimit=2,n.attachControl(e,!0);let R=new P("light",new p(2-1,2),i),B=new P("light",new p(2,1,1),i),f=new P("light",new p(-2,0,-2),i);R.intensity=.5,B.intensity=.5,f.intensity=.5;let d=new W("grid",i);d.mainColor=new b.FromHexString(this.mainColor),d.lineColor=new b.FromHexString(this.lineColor),d.gridRatio=.25;let x=new T("color",i);x.diffuseColor=new b.FromHexString(this.baseColor),x.specularColor=new b.FromHexString(this.baseColor);let g=new T("logoMaterial",i);g.diffuseTexture=g.opacityTexture=new G("./images/shared/kit-buildings-logo-gray.png",i),g.specularColor=new b(0,0,0),g.backFaceCulling=!1;let h=Z.CreatePlane("logoPlane",.5,i);h.scaling=new p(1.5,.6569,.1),h.rotation.x=Math.PI/2,h.rotation.z=Math.PI/2,h.position.y=.0011,h.position.x=5*this.length/200+.4,h.material=g;let t=S.ImportMesh("","./models/buildings/container-canopy/","container-canopy.gltf",i,c=>{c[0].scaling=new p(5*this.length/10,5*this.height/10,5*this.width/10),c[0].position.y=0,c[3].material=x,this.rootMesh=c[0],n.lockedTarget=c[0],this.buildingMaterial=c[3];for(var D=1;D<3;D++)c[D].actionManager=new N(i),c[D].actionManager.registerAction(new Q(N.OnPickTrigger,this.pickBuilding))});t.OPTIMIZE_WITH_UV=!0,t.IMPORT_VERTEX_COLORS=!0,t.COMPUTE_NORMALS=!0,t.OPTIMIZE_NORMALS=!0;let u=J.CreateDisc("ground",{radius:5},i);u.rotation.x=Math.PI/2,u.material=d,o.runRenderLoop(()=>{i.render()}),this.scene=i,this.camera=n,this.logoPlane=h},methods:{pickBuilding(e){this.camera.useAutoRotationBehavior=!1;let o=e.meshUnderPointer;this.buildingSide=o.name,this.submenus.doors||this.submenu("doors"),setTimeout(()=>{this.camera.useAutoRotationBehavior=!0},1e3)},removeDoors(){for(const e in this.doorMeshes){this.doorsNumbers[e][this.buildingSide]=0;for(let o=0;o<this.doorMeshes[e][this.buildingSide].length;o++)this.doorMeshes[e][this.buildingSide][o].dispose()}},positionDoor(e){switch(e.addBehavior(new K({dragAxis:new p(0,0,1)})),e.scaling=new p(1,1.5*4,1.5*3.5),e.position.y=0,this.buildingSide){case"front":e.position.x=5*this.length/200+.0011;break;case"back":e.position.x=-(5*this.length/200+.0011);break}},positionPersonnelDoor(e){switch(this.buildingSide){case"front":e.position.z=5*this.width/300+.0011;break;case"back":e.position.z=-(5*this.width/300+.0011);break}},addDoor(e,o){let i=this.scene;switch(o){case"main":switch(this.doorsNumbers.main[this.buildingSide]=this.doorsNumbers.main[this.buildingSide]+1,e){case"Manual Roll Up PVC Door":S.ImportMesh("","./models/doors/manual-roll-up-pvc-door/","manual-roll-up-pvc-door.gltf",i,n=>{setTimeout(()=>{this.doorMeshes.main[this.buildingSide].push(n[0])},300),this.positionDoor(n[0])});break;case"Sliding Rail Door":S.ImportMesh("","./models/doors/sliding-rail-door/","sliding-rail-door.gltf",i,n=>{setTimeout(()=>{this.doorMeshes.main[this.buildingSide].push(n[0])},300),this.positionDoor(n[0])});break}break;case"personnel":this.doorsNumbers.personnel[this.buildingSide]=this.doorsNumbers.personnel[this.buildingSide]+1,e==="Metal Door"?S.ImportMesh("","./models/doors/personnel-metal-door/","personnel-metal-door.gltf",i,n=>{setTimeout(()=>{this.doorMeshes.personnel[this.buildingSide].push(n[0])},300),this.positionDoor(n[0]),this.positionPersonnelDoor(n[0])}):S.ImportMesh("","./models/doors/personnel-pvc-door/","personnel-pvc-door.gltf",i,n=>{setTimeout(()=>{this.doorMeshes.personnel[this.buildingSide].push(n[0])},300),this.positionDoor(n[0]),this.positionPersonnelDoor(n[0])});break}},toggleFullscreen(){const e=document.getElementsByTagName("body")[0];this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()},submenu(e){this.submenus.len!==this.submenus[e]&&(this.submenus.len=!1),this.submenus.doors!==this.submenus[e]&&(this.submenus.doors=!1),this.submenus.mainDoors!==this.submenus[e]&&(this.submenus.mainDoors=!1),this.submenus.personnelDoors!==this.submenus[e]&&(this.submenus.personnelDoors=!1),this.submenus.colors!==this.submenus[e]&&(this.submenus.colors=!1),this.submenus.snapshot!==this.submenus[e]&&(this.submenus.snapshot=!1),this.submenus[e]=!this.submenus[e]},colorChange(e){this.baseColor=e;let o=new T("color",this.scene);o.diffuseColor=new b.FromHexString(e),o.specularColor=new b.FromHexString(e),this.buildingMaterial.material=o},selectCategory(e){this.colorCategory=e,e==="All"?this.colors=E:(this.colors=E,this.colors=this.colors.filter(o=>o.category===e))},scroller(e){let o=document.getElementsByClassName("colors-container")[0];switch(e){case"left":o.scrollLeft!==0&&(o.scrollLeft=o.scrollLeft-502);break;case"right":o.scrollLeft=o.scrollLeft+502;break}},confirmEmail(){this.emailModal=!1},confirmQuote(){this.quoteModal=!1},dimensionChange(e,o){switch(o){case"len":this.length=e,this.lengthWarning&&this.removeSideDoors("z-axis"),this.moveDoors("x-axis");break}this.rootMesh.scaling=new p(5*this.length/10,5*this.height/10,5*this.width/10),this.logoPlane.position.x=5*this.length/200+.4},moveDoors(e){switch(e){case"x-axis":for(const o in this.doorMeshes){for(let i=0;i<this.doorMeshes[o].front.length;i++){let n=this.doorMeshes[o].front[i];n.position.x=5*this.length/200+.0011}for(let i=0;i<this.doorMeshes[o].back.length;i++){let n=this.doorMeshes[o].back[i];n.position.x=-(5*this.length/200+.0011)}}break}},removeSideDoors(e){switch(e){case"x-axis":for(const o in this.doorMeshes){this.doorsNumbers[o].front=0,this.doorsNumbers[o].back=0;for(let i=0;i<this.doorMeshes[o].front.length;i++)this.doorMeshes[o].front[i].dispose();for(let i=0;i<this.doorMeshes[o].back.length;i++)this.doorMeshes[o].back[i].dispose()}break}},takeSnapshot(){let o=document.getElementsByClassName("canvas")[0].toDataURL();this.snaps.push(o)},trashSnapshot(e){const o=this.snaps.indexOf(e);o>-1&&this.snaps.splice(o,1)},zoomSnapshot(e){this.imageModal=!0;let o=document.getElementsByClassName("modal-image")[0];o.src=e},downloadSnapshot(e){let o=document.createElement("a");o.download="Storage Building",o.href=e,document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}),ie={class:"relative w-full h-full"},ne={class:"fixed flex"},le=s("img",{src:te,alt:"Colors"},null,-1),re=[le],ae=["onClick"],de={class:"relative flex scroll-smooth mt-7"},ue={class:"relative flex scroll-smooth"},me={class:"relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh]"},he=s("p",{class:"text-sm font-semibold mb-5"},"Pick a door which you would like to add.",-1),ce={class:"flex flex-col items-start"},pe=["onClick"],fe=["src","alt"],be={class:"text-sm font-semibold ml-px mt-2"},ge={class:"relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh]"},ve=s("p",{class:"text-sm font-semibold mb-5"},"Pick a door which you would like to add.",-1),we={class:"flex flex-col items-start"},ye=["onClick"],xe=["src","alt"],ke={class:"text-sm font-semibold ml-px mt-2"},Ce=s("canvas",{class:"canvas"},null,-1),Me=q("Great!"),Se=s("p",{class:"text-sm ml-1"},"We'll send the configuration to your email.",-1),De=s("img",{class:"object-cover modal-image"},null,-1),ze=q("Brilliant!"),Fe=s("p",{class:"text-sm ml-1"},"We'll get back to you soon.",-1),Pe={class:"relative w-5/6 mt-2 block mx-[1px]"},Te={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Ee={class:"relative w-5/6 mt-2 block mx-[1px]"},Re={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Be={class:"relative w-5/6 mt-2 block mx-[1px]"},Ve={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Ne={class:"relative w-5/6 mt-2 block mx-[1px]"},qe={class:"absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white"},Le={class:"text-sm font-semibold"};function $e(e,o,i,n,R,B){const f=k("primary-button"),d=k("font-awesome-icon"),x=k("color-button"),g=k("snap-span"),h=k("modal");return r(),a(v,null,[s("div",ie,[s("div",{class:m(["w-full flex py-3 absolute inset-x-0 z-50 px-14 bg-white",e.fullscreen?"top-[40px]":"top-[100px]"])},[l(f,{text:"PVC Color",onClick:o[0]||(o[0]=t=>e.submenu("colors")),active:e.submenus.colors,class:"ml-0 mr-auto"},null,8,["active"]),l(f,{icon:"camera",onClick:o[1]||(o[1]=t=>e.submenu("snapshot")),active:e.submenus.snapshot},null,8,["active"]),l(f,{icon:"envelope",onClick:o[2]||(o[2]=t=>e.emailModal=!0),active:e.emailModal},null,8,["active"]),l(f,{icon:e.fullscreen?"compress":"expand",onClick:e.toggleFullscreen,active:e.fullscreen},null,8,["icon","onClick","active"])],2),e.submenus.colors?(r(),a("div",{key:0,class:m(["scroll-smooth overflow-hidden flex flex-col pt-1 pb-3 absolute inset-x-0 z-50 bg-white colors-container w-[92%] ml-14 animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[s("div",ne,[s("div",{class:m(["rounded-full h-5 w-5 cursor-pointer border-2 mr-2",e.colorCategory==="All"&&"border-primary"]),onClick:o[3]||(o[3]=t=>e.selectCategory("All"))},re,2),(r(!0),a(v,null,w(e.colorCategories,t=>(r(),a("div",{key:t.id,class:m(["rounded-full h-5 w-5 cursor-pointer border-2 mr-2",e.colorCategory===t.category&&"border-primary"]),onClick:u=>e.selectCategory(t.category),style:A({backgroundColor:t.hex})},null,14,ae))),128))]),s("div",de,[s("div",{class:m(["self-center z-50 left-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[4]||(o[4]=t=>e.scroller("left"))},[l(d,{icon:"chevron-left","fixed-width":"",size:"xl"})],2),(r(!0),a(v,null,w(e.colors,t=>(r(),V(x,{key:t.code,data:t,hex:t.hex,margin:t.code!==9018?"mr-3":"mr-0",active:t.hex===e.baseColor,onClick:u=>e.colorChange(t.hex)},null,8,["data","hex","margin","active","onClick"]))),128)),s("div",{class:m(["self-center z-50 right-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[5]||(o[5]=t=>e.scroller("right"))},[l(d,{icon:"chevron-right","fixed-width":"",size:"xl"})],2)])],2)):z("",!0),e.submenus.snapshot?(r(),a("div",{key:1,class:m(["scroll-smooth overflow-hidden min-h-[100px] flex py-3 absolute inset-x-0 z-50 bg-white colors-container w-[89%] ml-14 animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[s("div",ue,[s("div",{class:m(["self-center z-50 left-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[6]||(o[6]=t=>e.scroller("left"))},[l(d,{icon:"chevron-left","fixed-width":"",size:"xl"})],2),(r(!0),a(v,null,w(e.snaps,(t,u)=>(r(),V(g,{key:u,data:t,margin:u!==e.snaps.length?"mr-3":"mr-0",onTrash:e.trashSnapshot,onZoom:e.zoomSnapshot,onDownload:e.downloadSnapshot},null,8,["data","margin","onTrash","onZoom","onDownload"]))),128)),s("div",{class:m(["self-center z-50 right-12 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[7]||(o[7]=t=>e.takeSnapshot())},[l(d,{icon:"plus","fixed-width":"",size:"xl"})],2),s("div",{class:m(["self-center z-50 right-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md",e.fullscreen?"top-22":"top-44"]),onClick:o[8]||(o[8]=t=>e.scroller("right"))},[l(d,{icon:"chevron-right","fixed-width":"",size:"xl"})],2)])],2)):z("",!0),e.submenus.mainDoors?(r(),a("div",{key:2,class:m(["scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[s("div",me,[he,s("div",ce,[(r(!0),a(v,null,w(e.mainDoors,(t,u)=>(r(),a("div",{key:u,onClick:c=>e.addDoor(t,"main"),class:"flex flex-col cursor-pointer justify-start items-start mb-4"},[s("img",{src:"images/doors/"+t+".jpg",alt:t,class:"w-auto h-24 object-cover"},null,8,fe),s("p",be,F(t),1)],8,pe))),128)),l(f,{text:"Back",onClick:o[9]||(o[9]=t=>e.submenu("doors")),class:"ml-0 mt-5"})])])],2)):z("",!0),e.submenus.personnelDoors?(r(),a("div",{key:3,class:m(["scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top",e.fullscreen?"animate-top-small":"animate-top-large"])},[s("div",ge,[ve,s("div",we,[(r(!0),a(v,null,w(e.presonnelDoors,(t,u)=>(r(),a("div",{key:u,onClick:c=>e.addDoor(t,"personnel"),class:"flex flex-col cursor-pointer justify-start items-start mb-4"},[s("img",{src:"images/doors/Personnel "+t+".jpg",alt:t,class:"w-auto h-44 object-cover"},null,8,xe),s("p",ke,F(t),1)],8,ye))),128)),l(f,{text:"Back",onClick:o[10]||(o[10]=t=>e.submenu("doors")),class:"ml-0 mt-5"})])])],2)):z("",!0),Ce,s("div",{class:m(["quote-button",e.fullscreen?"bottom-14":"bottom-10"]),onClick:o[11]||(o[11]=t=>e.quoteModal=!0)}," Get A Quote ",2)]),l(h,{modelValue:e.emailModal,"onUpdate:modelValue":o[13]||(o[13]=t=>e.emailModal=t),onConfirm:e.confirmEmail,confirmText:"Send",transition:e.modalTransition},{title:C(()=>[Me]),default:C(()=>[Se,y(s("input",{type:"email","onUpdate:modelValue":o[12]||(o[12]=t=>e.email=t),placeholder:"john@doe.com",class:"mt-2 mx-[1px] w-5/6 text-sm px-2 border-2 border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[M,e.email]])]),_:1},8,["modelValue","onConfirm","transition"]),l(h,{modelValue:e.imageModal,"onUpdate:modelValue":o[14]||(o[14]=t=>e.imageModal=t),transition:e.modalTransition,wide:!0},{default:C(()=>[De]),_:1},8,["modelValue","transition"]),l(h,{modelValue:e.quoteModal,"onUpdate:modelValue":o[20]||(o[20]=t=>e.quoteModal=t),onConfirm:e.confirmQuote,confirmText:"Send",transition:e.modalTransition},{title:C(()=>[ze]),default:C(()=>[Fe,s("label",Pe,[s("div",Te,[l(d,{icon:"user","fixed-width":"",size:"xl"})]),y(s("input",{type:"text","onUpdate:modelValue":o[15]||(o[15]=t=>e.quote.name=t),placeholder:"John Doe",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[M,e.quote.name]])]),s("label",Ee,[s("div",Re,[l(d,{icon:"envelope","fixed-width":"",size:"xl"})]),y(s("input",{type:"email","onUpdate:modelValue":o[16]||(o[16]=t=>e.quote.email=t),placeholder:"john@doe.com",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[M,e.quote.email]])]),s("label",Be,[s("div",Ve,[l(d,{icon:"building","fixed-width":"",size:"xl"})]),y(s("input",{type:"text","onUpdate:modelValue":o[17]||(o[17]=t=>e.quote.company=t),placeholder:"Kit building Systems",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[M,e.quote.company]])]),s("label",Ne,[s("div",qe,[l(d,{icon:"mobile-alt","fixed-width":"",size:"xl"})]),y(s("input",{type:"text","onUpdate:modelValue":o[18]||(o[18]=t=>e.quote.phone=t),placeholder:"020 8617 8606",class:"text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition"},null,512),[[M,e.quote.phone]])]),(r(!0),a(v,null,w(e.extras,t=>(r(),a("label",{key:t,class:"relative w-5/6 mt-5 flex items-center mx-[1px]"},[y(s("input",{type:"checkbox","onUpdate:modelValue":o[19]||(o[19]=u=>e.additions=u),class:"mr-3 ml-1"},null,512),[[j,e.additions]]),s("p",Le,F(t),1)]))),128))]),_:1},8,["modelValue","onConfirm","transition"])],64)}const Ue=L(se,[["render",$e]]);export{Ue as default};
