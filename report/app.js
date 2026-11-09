/* つたわる 個人レポート（実用誌スタイル） */
const IM='../img/';
const T='#2e9c9a',Y='#ffe14d',INK='#2b2b2b',G='#efefef';
const TCOL={earth:'#2f6fd6',moon:'#d6457f',sun:'#e08a00'};
const ZIMG={earth:'z_earth',moon:'z_moon',sun:'z_sun'};
const MARU="font-family: 'Zen Maru Gothic', sans-serif; font-weight: 900";
const HANDF="font-family: 'Yusei Magic', sans-serif";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const teal=t=>`<span style="color: ${T}">${t}</span>`;
const mark=t=>`<span style="background: linear-gradient(transparent 55%, ${Y} 55%)">${t}</span>`;
const fT=s=>s.replace(/\{(.+?)\}/g,(_,a)=>teal(a));
const fM=s=>s.replace(/\{(.+?)\}/g,(_,a)=>mark(a));
const others=g=>ORDER.filter(x=>x!==g);

const tab=(small,big,top=36,h=600)=>`<div style="position: absolute; right: 0; top: ${top}px; width: 78px; height: ${h}px; background: ${Y}; border-radius: 16px 0 0 16px; display: flex; flex-direction: row-reverse; justify-content: center; gap: 4px; padding-top: 24px; box-sizing: border-box"><div style="writing-mode: vertical-rl; ${MARU}; font-size: 13px; letter-spacing: 0.08em">${small}</div><div style="writing-mode: vertical-rl; ${MARU}; font-size: 36px; line-height: 1.05; color: ${T}; letter-spacing: 0.04em">${big}</div></div>`;
const panelBg=()=>`<div style="position: absolute; left: 20px; top: 20px; width: 688px; height: 1083px; background: #ffffff; border-radius: 18px"></div>`;
const header=(label,sub,title,size=38,right=112)=>`<div style="position: absolute; left: 40px; top: 40px; right: ${right}px; display: flex; flex-direction: column; align-items: center; gap: 10px"><div style="display: flex; align-items: center; gap: 8px; ${MARU}; font-size: 15px; flex-wrap: wrap; justify-content: center"><span style="border: 2px solid ${INK}; background: #fff7c2; padding: 3px 12px">${label}</span>${sub?`<span>▶ ${sub}</span>`:''}</div><div style="position: relative; padding: 6px 28px"><span style="position: absolute; left: 0; top: 0; width: 14px; height: 100%; border: 3px solid ${INK}; border-right: none"></span><span style="position: absolute; right: 0; top: 0; width: 14px; height: 100%; border: 3px solid ${INK}; border-left: none"></span><div style="${MARU}; font-size: ${size}px; line-height: 1.25; text-align: center">${title}</div></div></div>`;
const pill=(t,c)=>`<span style="position: absolute; left: 50%; top: -13px; transform: translateX(-50%); background: ${c||T}; color: #ffffff; border-radius: 999px; padding: 4px 16px; font-size: 12.5px; font-weight: 900; white-space: nowrap">${t}</span>`;
const otag=t=>`<span style="align-self: flex-start; border: 1.5px solid ${INK}; font-size: 11.5px; font-weight: 900; padding: 1px 8px; background: #fff">${t}</span>`;
const ttag=t=>`<span style="background: ${T}; color: #fff; font-size: 11.5px; font-weight: 700; padding: 2px 8px">${t}</span>`;
const num=(n,c=INK)=>`<span style="background: ${c}; color: #fff; border-radius: 50%; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; font-weight: 900; font-size: 12px; flex: none">${n}</span>`;
const hand=(t,x,y,rot=-6,size=18,color=INK)=>`<div style="position: absolute; left: ${x}px; top: ${y}px; ${HANDF}; font-size: ${size}px; color: ${color}; transform: rotate(${rot}deg); line-height: 1.3; white-space: nowrap">${t}</div>`;
const pic=(name,x,y,w,h,alt)=>`<img src="${IM}${name}.jpg" alt="${alt}" style="position: absolute; left: ${x}px; top: ${y}px; width: ${w}px; height: ${h}px; object-fit: contain; mix-blend-mode: multiply">`;
const gpanel=(x,y,w,h,pl,inner,pc,pad='30px 18px 16px')=>`<div style="position: absolute; left: ${x}px; top: ${y}px; width: ${w}px; height: ${h}px; background: ${G}; border-radius: 14px; padding: ${pad}; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px">${pl?pill(pl,pc):''}${inner}</div>`;
const sticker=(t,x,y,d=78,bg=T,col='#fff',fs=13)=>`<div style="position: absolute; left: ${x}px; top: ${y}px; width: ${d}px; height: ${d}px; border-radius: 50%; background: ${bg}; color: ${col}; display: flex; align-items: center; justify-content: center; text-align: center; ${MARU}; font-size: ${fs}px; line-height: 1.3; z-index: 2">${t}</div>`;
const H2=(t,s=21)=>`<div style="${MARU}; font-size: ${s}px; line-height: 1.45; text-align: center">${t}</div>`;
const TXT=(t,s=12)=>`<p style="margin: 0; font-size: ${s}px; line-height: 1.8; color: #444">${t}</p>`;
const PAGE=(no,inner)=>`<section class="sheet"><div class="pg" style="background: #cfe7ea; overflow: hidden; color: ${INK}">${inner}<div style="position: absolute; left: 30px; bottom: 6px; font-size: 10px; color: #4a6b6e">${String(no).padStart(2,'0')}</div></div></section>`;

function cover(r){
 const lab=(l,g)=>`<div style="background: ${G}; border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column"><span style="font-size: 11.5px; font-weight: 700; color: #555">${l}</span><span style="${MARU}; font-size: 22px; color: ${TCOL[g]}">${TT[g].n}タイプ</span></div>`;
 const who=(r.name?esc(r.name)+'さん　':'')+`${r.y}年${r.m}月${r.d}日生まれのあなたへ`;
 return `<div style="position: absolute; left: 20px; top: 20px; width: 754px; height: 1083px; background: #ffffff; border-radius: 18px"></div>
 <div style="position: absolute; left: 44px; top: 40px; right: 44px; display: flex; justify-content: space-between; ${MARU}; font-size: 12px; letter-spacing: 0.12em"><span>PERSONAL ISSUE ${new Date().getFullYear()}</span><span>あなた専用</span></div>
 <div style="position: absolute; left: 0; right: 0; top: 60px; text-align: center; ${MARU}; font-size: 96px; letter-spacing: -0.02em; color: ${T}; line-height: 1">tsutawaru</div>
 <div style="position: absolute; left: 0; right: 0; top: 168px; text-align: center; font-weight: 900; font-size: 15px; letter-spacing: 0.1em">言葉のクセがわかる、あなただけの一冊</div>
 <div style="position: absolute; left: 0; right: 0; top: 206px; display: flex; justify-content: center"><div style="padding: 8px 34px; background: ${Y}; ${MARU}; font-size: 40px; line-height: 1.25; text-align: center">同じ言葉でも、<br>伝わり方は${teal('3通り')}</div></div>
 ${sticker('大特集<br>3人の<br>自分',600,214,96,T,'#fff',16)}
 ${pic('z_cover',60,330,674,450,'カフェのテーブルで楽しそうに話す3人の線画イラスト')}
 ${hand('わかる〜！',70,330,-10,22,T)}${hand('そういうこと！',590,350,8,20)}
 <div style="position: absolute; left: 44px; top: 790px; width: 330px; border: 2px dashed #9a9a9a; border-radius: 6px; padding: 18px 16px 14px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px">${otag('保存版')}<div style="${MARU}; font-size: 22px; line-height: 1.35">まわりに渡せる<br>${mark('「わたしの取扱説明書」')}</div></div>
 <div style="position: absolute; left: 394px; top: 790px; width: 356px; background: ${G}; border-radius: 14px; padding: 16px 18px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px"><div style="${MARU}; font-size: 17px; line-height: 1.4"><span style="color: ${T}; font-size: 30px">${TEMPLATES.length*3}</span> の文例集　＋　言い換え12例</div><div style="${MARU}; font-size: 17px">${r.partners.length?`<span style="color: ${T}; font-size: 30px">${r.partners.length}人</span> への伝え方ページつき`:'あなたのコード解説つき'}</div></div>
 <div style="position: absolute; left: 44px; top: 920px; right: 44px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px">${lab('ふだんのあなたは',r.core)}${lab('人前でのあなたは',r.surf)}${lab('決める時のあなたは',r.dec)}</div>
 <div style="position: absolute; left: 0; right: 0; top: 1020px; text-align: center; font-size: 13px; font-weight: 700">${who}</div>`;
}

function contents(r,plan){
 const rows=plan.filter(p=>p.no>2).map(p=>`<div style="display: flex; gap: 10px; align-items: center; padding: ${plan.length>15?5:7}px 0; border-bottom: 1.5px dotted #b5b5b5"><span style="width: 30px; height: 30px; border-radius: 50%; background: ${p.c?TCOL[p.c]:T}; color: #fff; display: inline-flex; align-items: center; justify-content: center; ${MARU}; font-size: 13px; flex: none">${String(p.no).padStart(2,'0')}</span><div style="display: flex; flex-direction: column"><span style="${MARU}; font-size: 15px">${p.t}</span><span style="font-size: 11px; color: #555">${p.s}</span></div></div>`).join('');
 return tab('この一冊でわかること','もくじ',36,420)+panelBg()+header('CONTENTS',`あなた専用の${plan.length}ページ`,'読む前に、'+teal('ここだけ')+'チェック',34)
 +`<div style="position: absolute; left: 44px; top: 160px; width: 390px; display: flex; flex-direction: column">${rows}</div>`
 +pic('z_hand',440,190,260,174,'カードを手渡す二人の線画イラスト')+hand('大切な人にも<br>見せてね',500,370,-6,18,T)
 +gpanel(450,470,238,330,'はじめに',TXT('人は場面によって別の顔が出ます。くつろいでいる時、初対面の人と話す時、大事なことを決める時。この3つは同じタイプとは限りません。',12.5)+TXT('この一冊は、3人の自分と、まわりとのすれ違いの減らし方をまとめたものです。生年月日をもとにした独自の分類で、伝え方を考えるヒントとしてお使いください。',12.5))
 +`<div style="position: absolute; left: 450px; top: 830px; width: 238px; border: 2px dashed #9a9a9a; border-radius: 6px; padding: 18px 14px 12px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px">${sticker('読み<br>方',180,-30,60,Y,INK,13)}<div style="${MARU}; font-size: 15px">3人の自分の${mark('割合')}</div><div style="font-size: 12px; line-height: 1.9">${otag('ふだん 約50％')} 素の顔<br>${otag('人前 約35％')} 初対面・仕事<br>${otag('決める時 約15％')} 大事な判断</div></div>`;
}

function combo(r){
 const kinds=new Set([r.core,r.surf,r.dec]).size;
 const card=(x,g,l,p)=>`<div style="position: absolute; left: ${x}px; top: 196px; width: 200px; height: 300px; background: ${G}; border-radius: 14px">${pill(l+' '+p,TCOL[g])}${pic(ZIMG[g],10,22,180,220,TT[g].n+'タイプの線画イラスト')}<div style="position: absolute; left: 0; right: 0; bottom: 14px; text-align: center; ${MARU}; font-size: 22px; color: ${TCOL[g]}">${TT[g].n}タイプ</div></div>`;
 const p1=`ふだんのあなたは、${CORE_DESC[r.core]}${TT[r.core].n}タイプ。人前に出ると、${SURF_DESC[r.surf]}${TT[r.surf].n}タイプの顔になります。そして大事な場面では、${DEC_DESC[r.dec]}${TT[r.dec].n}タイプが顔を出します。${kinds===3?'3つの顔がすべて違う、めずらしい組み合わせです。':kinds===2?'2つの顔を使い分ける組み合わせです。':'どの場面でもブレない、まっすぐな組み合わせです。'}`;
 const p2=r.core===r.surf?'まわりから見えるあなたと、ふだんのあなたにはズレが少なめ。だからこそ、ほかのタイプの人には伝わり方がまっすぐすぎることも。相手のタイプに合わせて入口だけ変えれば、誤解はぐっと減らせます。':`まわりからは「${SURF_IMG[r.surf]}」と思われやすい一方で、素のあなたは${CORE_REAL[r.core]}。そのギャップが魅力でもあり、誤解されやすいところでもあります。伝え方を少し変えるだけで、誤解はぐっと減らせます。`;
 const q=r.core===r.surf?`「${TT[r.core].n}タイプらしさ」が${mark('まっすぐ')}出る。<br>それが、あなたのいちばんの魅力。`:`「${QA[r.surf]}のに、${mark(QB[r.core])}」。<br>それが、いくつもの顔を持つあなたの魅力。`;
 const li=(arr,c)=>'<div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px">'+arr.map((x,i)=>`<div style="display: flex; gap: 8px; align-items: baseline">${num(i+1,c)}<span><b>${x[0]}</b>　${x[1]}</span></div>`).join('')+'</div>';
 return tab('特集','あなたの中の<span style="color: #2b2b2b">3人</span>',36,520)+panelBg()+header('特集','あなたの組み合わせは',fT(`${ADJ[r.surf]}、{${NOUN[r.core]}}。`),40)
 +card(44,r.core,'ふだん','約50％')+card(266,r.surf,'人前','約35％')+card(488,r.dec,'決める時','約15％')
 +`<div style="position: absolute; left: 44px; top: 524px; width: 644px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px">${TXT(p1,13)}${TXT(p2,13)}</div>
 <div style="position: absolute; left: 44px; top: 708px; width: 644px; text-align: center; ${MARU}; font-size: 23px; line-height: 1.5">${q}</div>`+hand('ここが魅力！',560,690,8,18,T)
 +gpanel(40,830,312,246,'強み',li(['surf','core','dec'].map(k=>STR[k][r[k]]),T))+gpanel(372,830,316,246,'誤解されやすいところ',li(['core','surf','dec'].map(k=>CAU[k][r[k]]),INK));
}

function typePage(layer,g,label,pct){
 const L=LAYER[layer][g],M=MAG[layer][g],c=TCOL[g];
 const tabS={core:'素のあなたに注目！',surf:'人前のあなたに注目！',dec:'決める瞬間に注目！'}[layer];
 return tab(tabS,M.tabb)+panelBg()+header(`${label}は<span style="color: ${T}">${pct}</span>この顔`,`${TT[g].n}タイプさんの`,fT(M.title),36)
 +`<div style="position: absolute; left: 44px; top: 178px; width: 300px; border: 2px dashed #9a9a9a; border-radius: 6px; padding: 30px 16px 16px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px">${sticker('とくに<br>これが<br>響く',240,-26)}${otag(L.k1)}<div style="${MARU}; font-size: 15px; line-height: 1.6">${L.v1}</div>${otag(L.k2)}<div style="font-size: 13px; line-height: 1.7">${L.v2}</div></div>
 <div style="position: absolute; left: 44px; top: 470px; width: 300px; display: flex; flex-direction: column; gap: 4px"><span style="${MARU}; font-size: 17px">${L.lead.replace(/<br>/g,'')}</span>${TXT(L.body)}</div>`
 +pic(ZIMG[g],400,168,220,330,TT[g].n+'タイプの線画イラスト')+hand(M.n[0],352,252,-8,20,T)+hand(M.n[1],600,290,6,17)+hand(M.n[2],590,420,-4,16)
 +gpanel(40,600,312,226,'強みが出る場面',H2(fM(M.A.h))+TXT(M.A.t)+'<div style="display: flex; gap: 6px; flex-wrap: wrap">'+M.A.tags.map(ttag).join('')+'</div>')
 +gpanel(372,600,316,226,'気をつけたいクセ',H2(fM(M.B.h))+TXT(M.B.t)+'<div style="display: flex; flex-direction: column; gap: 4px; font-size: 12px">'+M.B.rows.map(([k,v])=>`<div><span style="border: 1.5px solid ${INK}; font-weight: 900; padding: 0 6px; margin-right: 6px; background: #fff">${k}</span>${v}</div>`).join('')+'</div>')
 +`<div style="position: absolute; left: 40px; top: 852px; width: 648px; height: 224px; background: ${G}; border-radius: 14px">${pill(M.C.pill)}${pic(M.C.img,12,26,282,188,'場面の線画イラスト')}<div style="position: absolute; left: 300px; top: 30px; right: 20px; display: flex; flex-direction: column; gap: 8px"><div style="${MARU}; font-size: 19px; line-height: 1.45">${fM(M.C.h)}</div>${M.C.items.map((x,i)=>`<div style="display: flex; gap: 8px; align-items: baseline; font-size: 13px">${num(i+1)}<span>${x}</span></div>`).join('')}</div>${hand(M.C.note,400,180,-6,17,T)}</div>`;
}

function codePage(r){
 const code=r.code,C=CODEINFO[code],g=r.core;
 const chips=STAGE_ORDER.map(k=>{const on=k===code;return `<div style="display: flex; flex-direction: column; align-items: center; gap: 3px; width: 48px"><span style="width: 40px; height: 40px; border-radius: 50%; ${on?`background: ${T}; color: #fff;`:`background: #fff; border: 1.5px solid #bbb; color: #888;`} display: inline-flex; align-items: center; justify-content: center; ${MARU}; font-size: 12px">${k}</span><span style="font-size: 9.5px; color: ${on?INK:'#999'}; font-weight: ${on?900:400}; text-align: center; line-height: 1.2">${CODEINFO[k].stage}</span></div>`}).join('');
 return tab('もっと深く','あなたの<span style="color: #2b2b2b">コード</span>',36,500)+panelBg()+header('12タイプのうち、あなたは',`${TT[g].n}タイプの中の`,`コード${teal(code)}　${C.title}`,32)
 +`<div style="position: absolute; left: 44px; top: 168px; width: 644px">${TXT(`同じ${TT[g].n}タイプの中にも、4つの違いがあります。あなたのコードは「${code}」。人生を12の段階にたとえた暦の考え方（十二運）では「${C.stage}」の段階にあたります。数字の大きさに優劣はなく、エネルギーの使い方の違いです。`,13)}</div>`
 +`<div style="position: absolute; left: 40px; top: 238px; width: 648px; background: ${G}; border-radius: 14px; padding: 26px 12px 14px; box-sizing: border-box">${pill('人生の12段階で見たあなたの位置')}<div style="display: flex; justify-content: space-between">${chips}</div></div>`
 +pic(ZIMG[g],40,380,240,360,TT[g].n+'タイプの線画イラスト')+hand(C.kuse,60,760,-6,18,T)
 +gpanel(300,400,388,150,'あなたの強み',H2(fM(`{${C.title}}`),19)+TXT(C.str,13))
 +gpanel(300,576,388,110,'口ぐせになりやすい言葉',H2(C.kuse,20))
 +gpanel(300,712,388,110,'ちょっと苦手なこと',`<div style="font-size: 14px; font-weight: 700; text-align: center">${C.nigate}</div>`)
 +`<div style="position: absolute; left: 40px; top: 852px; width: 648px; border: 2px dashed #9a9a9a; border-radius: 6px; padding: 24px 20px 16px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px">${sticker('これが<br>響く',560,-30,68,Y,INK,13)}<div style="${MARU}; font-size: 16px">まわりの人へ：コード${code}の人に一番届くひと言</div><div style="${MARU}; font-size: 26px; text-align: center">${mark(C.one)}</div>${TXT('このページは、まわりの人に見せても使えます。',12)}</div>`;
}

function tired(r){
 const T5=TIRED[r.core];
 const mu=['ムダ','ムリ','ムラ'].map(m=>m===MU[r.core]?`<span style="${MARU}; font-size: 44px; color: ${T}">${m}</span>`:`<span style="${MARU}; font-size: 26px; color: #c9c9c9">${m}</span>`).join('');
 return tab('疲れる前に読んで！','回復の<span style="color: #2b2b2b">コツ</span>',36,460)+panelBg()+header('セルフケア',`${TT[r.core].n}タイプさんの`,fT(T5.t.replace(/「(.+?)」/,'「{$1}」')),32)
 +pic('z_tired',60,200,600,400,'頑張りすぎる姿とひと息つく姿の線画イラスト')+hand('もう限界…',80,220,-8,18)+hand('ひと息！',560,230,6,20,T)
 +`<div style="position: absolute; left: 44px; top: 610px; width: 644px; display: flex; align-items: center; gap: 18px"><div style="display: flex; gap: 10px; align-items: baseline; flex: none; white-space: nowrap">${mu}</div>${TXT(T5.p,12.5)}</div>`
 +gpanel(40,740,312,250,'要注意のサイン','<div style="display: flex; flex-direction: column; gap: 7px; font-size: 13px">'+T5.sign.map(x=>`<div style="display: flex; gap: 8px; align-items: center"><span style="width: 16px; height: 16px; border: 2px solid ${INK}; background: #fff; flex: none"></span><span>${x}</span></div>`).join('')+'</div>'+H2('2つ以上なら'+mark('黄色信号'),16))
 +gpanel(372,740,316,250,'回復のしかた','<div style="display: flex; flex-direction: column; gap: 7px; font-size: 13px">'+T5.rec.map((x,i)=>`<div style="display: flex; gap: 8px; align-items: baseline">${num(i+1,T)}<span>${x}</span></div>`).join('')+'</div>')
 +`<div style="position: absolute; left: 44px; top: 1010px; width: 644px; background: #fff7c2; border: 2px solid ${INK}; border-radius: 10px; padding: 12px 16px; box-sizing: border-box; ${MARU}; font-size: 14px; line-height: 1.5">疲れている時ほど、最初に${mark('ひと言だけ')}相手への言葉を足す。それだけで、すれ違いはぐっと減ります。</div>`;
}

function guide(r){
 const ct=CAUTION[r.core],A=ARUARU[r.core];
 const col=(x,g)=>{const hl=g===ct;return `<div style="position: absolute; left: ${x}px; top: 190px; width: 204px; height: 470px; background: ${hl?'#fff7c2':G}; border-radius: 14px; ${hl?`border: 2px solid ${INK};`:''} box-sizing: border-box">${pill(TT[g].n+'タイプ',TCOL[g])}${pic(ZIMG[g],32,20,140,170,TT[g].n+'タイプの線画イラスト')}${g===r.core||hl?`<div style="position: absolute; left: 0; right: 0; top: 192px; text-align: center"><span style="background: ${INK}; color: #fff; font-size: 11.5px; font-weight: 900; padding: 2px 8px">${g===r.core?'あなたと同じ':'いちばん注意'}</span></div>`:''}<div style="position: absolute; left: 14px; right: 14px; top: 226px; display: flex; flex-direction: column; gap: 8px">${otag('大事にしていること')}<div style="font-size: 13px; font-weight: 700">${VALUE[g]}</div>${otag('あなたが足すこと')}<div style="${MARU}; font-size: 18px; line-height: 1.4; color: ${TCOL[g]}">${g===r.core?'いつものままでOK':ADD[g]}</div>${otag('避けたいこと')}<div style="font-size: 12.5px">${AVOID[g]}</div></div></div>`;};
 return tab('保存版','相手別<span style="color: #2b2b2b">早見表</span>',36,500)+panelBg()+header('保存版　相手のタイプ別早見表','','ひと言だけ、'+teal('足せばいい'),38)
 +col(40,'earth')+col(262,'moon')+col(484,'sun')
 +`<div style="position: absolute; left: 40px; top: 690px; width: 648px; height: 240px; background: ${G}; border-radius: 14px">${pill('掛け違いあるある')}<img src="${IM}aruaru-${TT[r.core].img}.jpg" alt="掛け違いあるあるカード" style="position: absolute; left: 20px; top: 26px; width: 160px; height: 200px; object-fit: cover; border: 1px solid #ddd"><div style="position: absolute; left: 200px; top: 34px; right: 20px; display: flex; flex-direction: column; gap: 10px"><div style="${MARU}; font-size: 19px; line-height: 1.5">${A[0].replace(/「([^」]+)」$/,(m)=>mark(m))}</div>${TXT(A[1],13)}</div></div>
 <div style="position: absolute; left: 40px; top: 956px; width: 648px; border: 2px dashed #9a9a9a; border-radius: 6px; padding: 18px 18px 14px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px">${sticker('迷ったら<br>コレ',560,-30,64,Y,INK,12)}<div style="${MARU}; font-size: 17px">相手のタイプが分からない時は</div><div style="display: flex; gap: 18px; font-size: 13px; flex-wrap: wrap"><span style="display: flex; gap: 6px; align-items: center">${num(1,TCOL.moon)}「ありがとう」をひと言</span><span style="display: flex; gap: 6px; align-items: center">${num(2,TCOL.earth)}結論を一文で</span><span style="display: flex; gap: 6px; align-items: center">${num(3,TCOL.sun)}「これで〜になるね」</span></div></div>`;
}

function rewrite(r,home){
 const [a,b]=others(r.core),cs=home?CASES.slice(3):CASES.slice(0,3);
 const box=(g,t)=>`<div style="background: #fff; border: 2px solid ${TCOL[g]}; border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; gap: 4px"><span style="font-size: 11.5px; font-weight: 900; color: ${TCOL[g]}">AFTER ▶ ${TT[g].n}タイプの人へ</span><span style="${MARU}; font-size: 14px; line-height: 1.6">「${t}」</span></div>`;
 const kase=(y,n,c,h)=>`<div style="position: absolute; left: 40px; top: ${y}px; width: 648px; height: ${h}px; background: ${G}; border-radius: 14px; padding: 26px 18px 14px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px">${pill('ケース'+n+'　'+c.t)}<div style="display: flex; align-items: center; gap: 10px"><span style="background: #9a9a9a; color: #fff; font-size: 11.5px; font-weight: 900; padding: 2px 8px; flex: none">BEFORE</span><span style="font-size: 13.5px; color: #777; text-decoration: line-through; text-decoration-color: #e8417a; text-decoration-thickness: 2px">${c.b[r.core]}</span></div><div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">${box(a,c.a[a])}${box(b,c.a[b])}</div></div>`;
 if(!home) return tab('職場で使える！','言い換え<span style="color: #2b2b2b">術</span>',36,460)+panelBg()+header('保存版　職場編 BEFORE→AFTER','','その一文、'+teal('入口だけ')+'変えよう',36)
  +`<div style="position: absolute; left: 44px; top: 160px; width: 420px">${TXT(`内容は同じ。${TT[a].n}タイプには<b>${ENTRY[a]}</b>から、${TT[b].n}タイプには<b>${ENTRY[b]}</b>から入るだけで、お願いの通り方が変わります。赤線が「いつもの書き方」です。`,13)}</div>`+pic('z_gap',470,140,220,147,'すれ違いの場面の線画イラスト')
  +kase(310,1,cs[0],212)+kase(546,2,cs[1],212)+kase(782,3,cs[2],212)+`<div style="position: absolute; left: 44px; top: 1016px; width: 644px; ${MARU}; font-size: 16px; text-align: center">変えるのは、いつも${mark('最初の一文')}だけ。</div>`+hand('入口だけでOK！',540,1006,-6,17,T);
 return tab('家族にも効く！','近い人<span style="color: #2b2b2b">ほど</span>',36,460)+panelBg()+header('保存版　家族・パートナー編','','近い人ほど、'+teal('ひと言')+'を足す',36)
  +pic('z_home',150,130,420,280,'家の中でメッセージをやりとりする二人の線画イラスト')+hand('短すぎた？',70,180,-8,18)+hand('うれしい♪',590,190,6,18,T)
  +kase(420,1,cs[0],200)+kase(640,2,cs[1],200)+kase(860,3,cs[2],200)+`<div style="position: absolute; left: 44px; top: 1072px; width: 644px; font-size: 12px; text-align: center; font-weight: 700">仲がいい相手ほど、ふだんの${TT[r.core].n}タイプがそのまま出ます。</div>`;
}

function templatesPage(r,part){
 const list=TEMPLATES.slice(part*5,part*5+5);
 const row=(t,i)=>`<div style="position: absolute; left: 40px; top: ${210+i*172}px; width: 648px; height: 158px; background: ${G}; border-radius: 14px; padding: 24px 14px 12px; box-sizing: border-box">${pill(`場面${part*5+i+1}　${t.s}`)}<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">${ORDER.map(g=>`<div style="background: #fff; border: 2px solid ${g===r.core?'#cfcfcf':TCOL[g]}; border-radius: 10px; padding: 8px 10px; display: flex; flex-direction: column; gap: 3px"><span style="font-size: 11px; font-weight: 900; color: ${TCOL[g]}">${TT[g].n}タイプへ${g===r.core?'（同じタイプ）':''}</span><span style="font-size: 12px; line-height: 1.6">${t[g]}</span></div>`).join('')}</div></div>`;
 return tab('コピペでOK','文例集<span style="color: #2b2b2b">'+(part+1)+'</span>',36,460)+panelBg()+header(`保存版　そのまま使える文例集 ${part+1}/2`,'','◯◯を変えるだけで'+teal('すぐ送れる'),34)
  +`<div style="position: absolute; left: 44px; top: 158px; width: 640px">${TXT(`相手のタイプの列をそのまま使ってください。◯◯の部分だけ、名前や日付に書き換えればOKです。あなた（${TT[r.core].n}タイプ）が苦手になりやすいのは、${TT[CAUTION[r.core]].n}タイプへの言い方です。`,12.5)}</div>`
  +list.map(row).join('');
}

function partnerPage(r,p){
 const g=p.core,dg=p.dec,C=CODEINFO[p.code];
 const key=r.core+'>'+g;
 let dir,tip;
 if(r.core===g){dir='同じタイプ。気が合う相手';tip='考え方が近いぶん、もめると長引きがち。意見が割れたら、いったん時間をおく';}
 else if(FLOW[r.core]===g){dir='伝わりやすい向き';tip=FLOW_TIP[key];}
 else{dir='少し伝わりにくい向き';tip=FLOW_TIP[key];}
 const pick=s=>TEMPLATES.find(t=>t.s===s)[g];
 const nm=esc(p.name||'相手')+'さん';
 return tab(esc(p.rel||'大切な人')+'への','伝え方<span style="color: #2b2b2b">ノート</span>',36,500)+panelBg()+header(`${esc(p.rel||'大切な人')}　${p.y}年${p.m}月${p.d}日生まれ`,'',`${nm}への${teal('伝え方')}`,36)
 +`<div style="position: absolute; left: 40px; top: 168px; width: 200px; height: 300px; background: ${G}; border-radius: 14px">${pill('ふだん '+TT[g].n+'タイプ',TCOL[g])}${pic(ZIMG[g],10,22,180,220,TT[g].n+'タイプの線画イラスト')}<div style="position: absolute; left: 0; right: 0; bottom: 12px; text-align: center; font-size: 12px; font-weight: 700">決める時は<span style="color: ${TCOL[dg]}">${TT[dg].n}タイプ</span></div></div>`
 +`<div style="position: absolute; left: 262px; top: 168px; width: 426px; border: 2px dashed #9a9a9a; border-radius: 6px; padding: 26px 16px 14px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px">${sticker('この人<br>には',350,-28,64)}${otag('コード'+p.code)}<div style="${MARU}; font-size: 19px">${C.title}</div>${otag('響く言葉')}<div style="${MARU}; font-size: 14px; line-height: 1.6">${TYPE[g].good}</div>${otag('地雷になりやすい')}<div style="font-size: 13px; line-height: 1.6">${TYPE[g].ng}</div></div>`
 +gpanel(40,496,312,190,`あなた → ${nm}`,H2(mark(dir),19)+TXT(tip,13))
 +gpanel(372,496,316,190,'送る前のひと言',H2(fM(`{${C.one}}`),18)+TXT(`${nm}は「${TYPE[g].key}」。最初の一文をこの方向に寄せるだけで伝わり方が変わります。`,12))
 +`<div style="position: absolute; left: 40px; top: 712px; width: 648px; height: 360px; background: ${G}; border-radius: 14px; padding: 28px 18px 14px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px">${pill(nm+'に、そのまま使える3つの文')}${['仕事を頼む','謝る','お礼を言う'].map((s,i)=>`<div style="background: #fff; border-radius: 10px; padding: 10px 14px; display: flex; gap: 10px; align-items: baseline">${num(i+1,TCOL[g])}<div style="display: flex; flex-direction: column; gap: 2px"><span style="font-size: 11.5px; font-weight: 900; color: ${TCOL[g]}">${s}</span><span style="${MARU}; font-size: 14px; line-height: 1.6">「${pick(s)}」</span></div></div>`).join('')}${hand('コピペOK！',540,320,-6,17,T)}</div>`;
}

function manual(r){
 const g=r.core;
 const li=(c,a)=>a.map(x=>`<div style="display: flex; gap: 8px; align-items: baseline; padding: 6px 0; border-bottom: 1.5px dotted #c9c9c9; font-size: 14px; font-weight: 700"><span style="color: ${c}">●</span>${x}</div>`).join('');
 const notes=[['core',NOTE.core[r.core]],['surf',NOTE.surf[r.surf]],['dec',NOTE.dec[r.dec]]];
 return tab('スクショして送ろう','取扱<span style="color: #2b2b2b">説明書</span>',36,460)+panelBg()+header('保存版　まわりの人に渡すページ','',(r.name?esc(r.name)+'の':'わたしの')+teal('取扱説明書'),40)
 +pic('z_hand',470,140,220,147,'カードを手渡す二人の線画イラスト')+`<div style="position: absolute; left: 44px; top: 170px; width: 410px">${TXT('家族や同僚、パートナーに。点線の内側をスクショして、そのまま送ってください。',13)}</div>`
 +`<div style="position: absolute; left: 40px; top: 300px; width: 648px; height: 776px; border: 3px dashed ${INK}; border-radius: 18px; background: #fff; padding: 30px 26px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px"><span style="position: absolute; left: 24px; top: -13px; background: #fff; padding: 0 8px; ${MARU}; font-size: 13px">✂ ここから</span>
  <div style="display: flex; gap: 18px; align-items: center"><div style="width: 130px; height: 150px; background: ${G}; border-radius: 14px; position: relative; flex: none">${pic(ZIMG[g],10,6,110,138,'線画イラスト')}</div><div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 14px; font-weight: 700; color: #555">わたしは、ふだんは</span><span style="${MARU}; font-size: 38px; line-height: 1.2"><span style="color: ${TCOL[g]}">${TT[g].n}タイプ</span>です。</span><span style="font-size: 13px">人前では<b style="color: ${TCOL[r.surf]}">${TT[r.surf].n}タイプ</b>、決める時は<b style="color: ${TCOL[r.dec]}">${TT[r.dec].n}タイプ</b>が出ます。</span></div></div>
  <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px"><div style="background: ${G}; border-radius: 12px; padding: 22px 14px 12px; position: relative">${pill('こうしてもらえるとうれしい')}${li(T,LIKE[g])}</div><div style="background: ${G}; border-radius: 12px; padding: 22px 14px 12px; position: relative">${pill('ちょっと苦手','#8a8a8a')}${li('#8a8a8a',DISLIKE[g])}</div></div>
  <div style="${MARU}; font-size: 19px">知っておいてほしいこと</div>
  ${notes.map(([k,t],i)=>`<div style="display: flex; gap: 10px; align-items: baseline; font-size: 14px; line-height: 1.7">${num(i+1,TCOL[r[k]])}<span>${t}</span></div>`).join('')}
  <div style="margin-top: auto; display: flex; justify-content: space-between; font-size: 12px; color: #555"><span style="${MARU}; color: ${T}">tsutawaru</span><span>あなたの診断は <b style="color: ${INK}">shindan.skeleton-inc.jp</b></span></div></div>`+hand('よろしくね！',560,250,-6,18,T);
}

function challenge(r){
 const [a,b]=others(r.core);
 const days=['家族か身近な人の生年月日で、相手のタイプを調べる',TIP[a],TIP[b],DAY4[r.core],DAY5[r.dec],'「わたしの取扱説明書」を、誰か1人に見せる','相手の反応がいちばん変わった場面を振り返る'];
 const dl=days.map((d,i)=>`<div style="display: flex; gap: 12px; align-items: center; padding: 9px 0; border-bottom: 1.5px dotted #b5b5b5"><span style="background: ${i%2?Y:T}; color: ${i%2?INK:'#fff'}; ${MARU}; font-size: 13px; padding: 4px 10px; border-radius: 999px; flex: none">DAY${i+1}</span><span style="font-size: 14px; font-weight: 700; flex: 1">${d}</span><span style="width: 22px; height: 22px; border: 2px solid ${INK}; border-radius: 4px; flex: none"></span></div>`).join('');
 return tab('今日からやってみよう','7日間<span style="color: #2b2b2b">チャレンジ</span>',36,520)+panelBg()+header('読んで終わりにしない','1日1つでOK','今日からの'+teal('7日間')+'チャレンジ',36)
 +pic('z_cal',480,150,200,200,'カレンダーにチェックを入れる女性の線画イラスト')+hand('できたら<br>チェック！',420,300,-8,18,T)
 +`<div style="position: absolute; left: 44px; top: 170px; width: 420px">${TXT('小さく試すほど、続きます。1日1つ、できたら右の□にチェックを入れてください。',13)}</div><div style="position: absolute; left: 44px; top: 370px; width: 644px; display: flex; flex-direction: column">${dl}</div>
 <div style="position: absolute; left: 40px; top: 860px; width: 648px; height: 200px; background: ${G}; border-radius: 14px; padding: 30px 22px 16px; box-sizing: border-box; display: flex; gap: 18px; align-items: center">${pill('INFORMATION')}${sticker('レポート<br>購入者<br>特典',560,-30,74,Y,INK,12)}<img src="${IM}i_phone.jpg" alt="" style="width: 80px; height: 80px; flex: none; mix-blend-mode: multiply"><div style="display: flex; flex-direction: column; gap: 6px"><span style="${MARU}; font-size: 20px">毎回考えなくても、伝わる言葉に。${teal('つたわるキー')}</span>${TXT('相手の生年月日を一度登録すれば、言いたいことを打ってタイプのボタンを押すだけ。入力欄の文章が、相手に伝わる言い方に変わるキーボードアプリです。',12.5)}<span style="font-size: 13px; font-weight: 900">${mark('このレポートをお持ちの方は、無料期間を延長してお使いいただけます。')}</span></div></div>
 <div style="position: absolute; left: 44px; top: 1072px; right: 112px; display: flex; justify-content: space-between; font-size: 11px; color: #555"><span>大切な人の分も、その人専用のレポートを作れます。</span><span>生年月日をもとにした独自の分類です。</span></div>`;
}

function person(Y,M,D){const c=calc(Y,M,D);if(!c)return null;return {core:GROUP[c.hon],surf:GROUP[c.omote],dec:GROUP[c.ishi],code:c.hon,y:Y,m:M,d:D};}

function buildReport(Y,M,Dd,name,partners){
 const me=person(Y,M,Dd);if(!me)return null;
 const r=Object.assign(me,{name:(name||'').trim().slice(0,20),partners:[]});
 (partners||[]).slice(0,3).forEach(p=>{const q=person(p.y,p.m,p.d);if(q)r.partners.push(Object.assign(q,{name:(p.name||'').trim().slice(0,12),rel:p.rel||''}));});
 const C=CODEINFO[r.code];
 const plan=[
  {key:'cover',f:()=>cover(r)},
  {key:'contents',f:null},
  {key:'combo',t:'あなたの組み合わせ',s:ADJ[r.surf]+NOUN[r.core],f:()=>combo(r)},
  {key:'core',t:'ふだんの自分　'+TT[r.core].n+'タイプ',s:fT(MAG.core[r.core].title).replace(/<[^>]+>/g,''),c:r.core,f:()=>typePage('core',r.core,'ふだんのあなた','約50％')},
  {key:'code',t:'あなたのコード　'+r.code,s:C.title,c:r.core,f:()=>codePage(r)},
  {key:'tired',t:'疲れ方と回復のしかた',s:`「${MU[r.core]}」に早めに気づく`,c:r.core,f:()=>tired(r)},
  {key:'surf',t:'人前での自分　'+TT[r.surf].n+'タイプ',s:fT(MAG.surf[r.surf].title).replace(/<[^>]+>/g,''),c:r.surf,f:()=>typePage('surf',r.surf,'人前でのあなた','約35％')},
  {key:'dec',t:'決める時の自分　'+TT[r.dec].n+'タイプ',s:fT(MAG.dec[r.dec].title).replace(/<[^>]+>/g,''),c:r.dec,f:()=>typePage('dec',r.dec,'決める時のあなた','約15％')},
  {key:'guide',t:'相手のタイプ別の伝え方',s:'ひと言だけ、足せばいい',f:()=>guide(r)},
  {key:'work',t:'言い換え　職場編',s:'その一文、入口だけ変えよう',f:()=>rewrite(r,false)},
  {key:'home',t:'言い換え　家族・パートナー編',s:'近い人ほど、ひと言を足す',f:()=>rewrite(r,true)},
  {key:'tpl1',t:'そのまま使える文例集 1',s:'頼む・急ぎ・断る・謝る・お礼',f:()=>templatesPage(r,0)},
  {key:'tpl2',t:'そのまま使える文例集 2',s:'催促・誘う・反対・ほめる・悪い知らせ',f:()=>templatesPage(r,1)},
  ...r.partners.map((p,i)=>({key:'p'+i,t:esc(p.name||'相手')+'さんへの伝え方',s:esc(p.rel||'大切な人')+'・'+TT[p.core].n+'タイプ',c:p.core,f:()=>partnerPage(r,p)})),
  {key:'manual',t:'保存版　わたしの取扱説明書',s:'まわりの人に渡すページ',f:()=>manual(r)},
  {key:'challenge',t:'今日からの7日間チャレンジ',s:'読んで終わりにしない',f:()=>challenge(r)}
 ];
 plan.forEach((p,i)=>p.no=i+1);
 plan[1].f=()=>contents(r,plan);
 const pages=plan.map(p=>PAGE(p.no,p.f()));
 const byKey={};plan.forEach((p,i)=>byKey[p.key]=pages[i]);
 return {r,pages,byKey,count:pages.length,html:pages.join('')};
}
