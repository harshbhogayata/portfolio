// Build the existing simulator as an isolated component. Curator's source stays untouched.
const fs = require('fs');
const path = require('path');
const source = 'C:/Users/harsh/Desktop/Curator/Launchcountdown-Curator';
const esbuild = require(path.join(source, 'node_modules/esbuild'));
const ts = require(path.join(source, 'node_modules/typescript'));
const sourcePath = path.join(source,'src/pages/ComingSoon.tsx');
const raw = fs.readFileSync(sourcePath,'utf8');
const ast = ts.createSourceFile(sourcePath,raw,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
let component,phone,rootReturn;
function visit(node){
  if(ts.isFunctionDeclaration(node)&&node.name?.text==='ComingSoon')component=node;
  if(ts.isJsxElement(node)&&node.openingElement.attributes.properties.some(p=>p.name?.text==='className'&&p.initializer?.text?.includes('h-[620px] w-[300px]')))phone=node;
  ts.forEachChild(node,visit);
}
visit(ast);
if(component)rootReturn=component.body.statements.find(ts.isReturnStatement);
if(!phone||!rootReturn)throw Error('Simulator component changed; inspect source before rebuilding.');
// Reuse state, handlers, seeded content and the entire phone subtree, excluding the landing page.
const isolated=raw.slice(0,rootReturn.getStart(ast))+'return ('+phone.getText(ast)+');'+raw.slice(rootReturn.end);
esbuild.build({stdin:{contents:`import React from 'react';import {createRoot} from 'react-dom/client';import {ComingSoon} from './src/pages/ComingSoon';createRoot(document.getElementById('root')).render(<ComingSoon/>);`,resolveDir:source,loader:'tsx'},plugins:[{name:'isolate-simulator',setup(build){build.onLoad({filter:/ComingSoon\.tsx$/},()=>({contents:isolated,loader:'tsx',resolveDir:path.dirname(sourcePath)}))}}],bundle:true,format:'iife',jsx:'automatic',minify:true,define:{'process.env.NODE_ENV':'"production"','import.meta.env':'{}'},outfile:path.join(__dirname,'assets/curator-simulator.js')}).then(()=>{
fs.copyFileSync(path.join(source,'dist/assets/index-9pryIMbk.css'),path.join(__dirname,'assets/curator-simulator.css'));
fs.writeFileSync(path.join(__dirname,'curator-simulator.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Curator — Interactive simulator</title><link rel="stylesheet" href="assets/curator-simulator.css"><style>html,body,#root{margin:0;width:100%;height:100%;background:#fcfaf6;overflow:hidden}#root>div{width:100%;height:100dvh;border:0;border-radius:0;box-shadow:none}button:focus-visible,a:focus-visible,input:focus-visible{outline:2px solid #3155ed;outline-offset:-3px}.hide-scrollbar{scrollbar-width:none}.hide-scrollbar::-webkit-scrollbar{display:none}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.animate-fade-in{animation:fadeIn .18s ease-out}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}}</style></head><body><div id="root"></div><script src="assets/curator-simulator.js"></script></body></html>`);
console.log('Built isolated Curator simulator from original component ('+phone.getText(ast).length+' characters).');
}).catch(e=>{console.error(e);process.exitCode=1});
