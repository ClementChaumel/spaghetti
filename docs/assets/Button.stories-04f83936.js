import{j as z,a as m,I as p}from"./Icon-09a89334.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const R=({variant:s="primary",isOutline:i=!1,size:V="medium",label:_,onClick:j,prefix:u,suffix:c,...B})=>{const l={primary:{solid:{buttonClasses:"text-white bg-orange-600 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500",iconColor:"stroke-white"},outline:{buttonClasses:"text-orange-600 bg-transparent border-2 border-orange-600 hover:bg-orange-50 focus:bg-orange-50 active:bg-orange-100",iconColor:"stroke-orange-600"}},secondary:{solid:{buttonClasses:"text-white bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-500",iconColor:"stroke-white"},outline:{buttonClasses:"text-blue-600 bg-transparent border-2 border-blue-600 hover:bg-blue-50 focus:bg-blue-50 active:bg-blue-100",iconColor:"stroke-blue-600"}},positive:{solid:{buttonClasses:"text-white bg-green-600 hover:bg-green-500 focus:bg-green-500 active:bg-green-500",iconColor:"stroke-white"},outline:{buttonClasses:"text-green-600 bg-transparent border-2 border-green-600 hover:bg-green-50 focus:bg-green-50 active:bg-green-100",iconColor:"stroke-green-600"}}},L={small:"py-2 px-3 text-sm",medium:"py-3 px-5 text-base",large:"py-4 px-6 text-lg"};return z("button",{type:"button",className:`flex transition-colors transition-shadows shadow-sm hover:shadow-md focus:shadow-md active:shadow-sm ${l[s][i?"outline":"solid"].buttonClasses} ${L[V]} rounded-md`,onClick:j,...B,children:[u?m(p,{name:u,className:"mr-2",color:l[s][i?"outline":"solid"].iconColor}):null,_,c?m(p,{name:c,className:"ml-2",color:l[s][i?"outline":"solid"].iconColor}):null]})};R.__docgenInfo={description:"Super bouton trop génial",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "positive"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"positive"'}]},description:"Variante du bouton",defaultValue:{value:'"primary"',computed:!1}},isOutline:{required:!1,tsType:{name:"boolean"},description:"Définit si le bouton est outline ou pas",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Taille du bouton",defaultValue:{value:'"medium"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Label du bouton"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Fonction appelée au clic"},prefix:{required:!1,tsType:{name:'IconProps["name"]',raw:'IconProps["name"]'},description:"Icone Prefixe"},suffix:{required:!1,tsType:{name:'IconProps["name"]',raw:'IconProps["name"]'},description:"Icone Suffixe"}}};const F={title:"Spaghetti/Button",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{variant:"primary",label:"Continuer"}},r={args:{variant:"secondary",label:"Continuer"}},a={args:{variant:"positive",label:"Continuer"}},o={args:{variant:"primary",isOutline:!0,label:"Continuer"}},n={args:{variant:"primary",label:"Continuer",suffix:"arrowRight"}},t={args:{variant:"primary",label:"Retour",prefix:"arrowLeft"}};var d,g,b;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Continuer"
  }
}`,...(b=(g=e.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Continuer"
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var C,h,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    label: "Continuer"
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,I,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    isOutline: true,
    label: "Continuer"
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var P,k,T;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Continuer",
    suffix: "arrowRight"
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var q,N,O;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Retour",
    prefix: "arrowLeft"
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const A=["Primary","Secondary","Positive","Outline","withSuffixIcon","withPrefixIcon"];export{o as Outline,a as Positive,e as Primary,r as Secondary,A as __namedExportsOrder,F as default,t as withPrefixIcon,n as withSuffixIcon};
//# sourceMappingURL=Button.stories-04f83936.js.map
