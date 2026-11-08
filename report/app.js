const R='../img/',IM='../img/';
const Z="font-family: 'Zen Kaku Gothic New', sans-serif; font-weight: 900";
const O="font-family: 'Outfit', sans-serif";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hdr=(l,n,bg)=>`<div style="display: flex; justify-content: space-between; ${O}; font-size: 11px; font-weight: 700; letter-spacing: 0.24em"><span${bg?' style="background: rgba(255,255,255,0.85); padding: 3px 8px"':''}>${l}</span><span${bg?' style="background: rgba(255,255,255,0.85); padding: 3px 8px"':''}>${n}</span></div>`;
const tag=t=>`<span style="align-self: flex-start; background: #e8417a; color: #ffffff; font-size: 12px; font-weight: 900; letter-spacing: 0.14em; padding: 4px 10px">${t}</span>`;
const PAGE=(inner,extra='')=>`<section class="sheet"><div class="pg" style="${extra}">${inner}</div></section>`;
const others=g=>ORDER.filter(x=>x!==g);

function cover(r){
 const lab=(lbl,g)=>`<div style="display: flex; flex-direction: column; border-top: 4px solid ${TT[g].c}; padding-top: 8px"><span style="font-size: 11px; font-weight: 700; color: #5b6476">${lbl}</span><span style="${Z}; font-size: 20px; color: ${TT[g].d}">${TT[g].n}タイプ</span></div>`;
 const who=(r.name?esc(r.name)+'さん　':'')+`${r.y}年${r.m}月${r.d}日生まれのあなたへ`;
 return PAGE(`
  <img src="${R}m_cover.jpg" alt="カフェのテラスで楽しそうに話す3人" style="position: absolute; left: 0; top: 0; width: 794px; height: 1123px; object-fit: cover; object-position: 50% 70%">
  <div style="position: absolute; left: 34px; top: 30px; right: 34px; display: flex; justify-content: space-between; ${O}; font-size: 12px; font-weight: 700; letter-spacing: 0.22em"><span>PERSONAL ISSUE ${new Date().getFullYear()}</span><span>FOR YOU ONLY</span></div>
  <div style="position: absolute; left: 26px; top: 46px; ${O}; font-weight: 900; font-size: 150px; line-height: 1; letter-spacing: -0.045em">tsutawaru</div>
  <div style="position: absolute; left: 34px; top: 206px; font-size: 14px; font-weight: 700; letter-spacing: 0.1em">言葉のクセがわかる、あなただけの一冊</div>
  <div style="position: absolute; right: 40px; top: 244px; writing-mode: vertical-rl; ${Z}; font-size: 52px; line-height: 1.25; letter-spacing: 0.04em">あなたの中の<br>三人の自分</div>
  <div style="position: absolute; right: 172px; top: 252px; writing-mode: vertical-rl; background: #e8417a; color: #ffffff; font-weight: 900; font-size: 15px; letter-spacing: 0.2em; padding: 12px 6px">大特集</div>
  <div style="position: absolute; left: 34px; top: 262px; display: flex; flex-direction: column; gap: 10px; width: 300px">
   <div style="display: flex; flex-direction: column; gap: 2px"><span style="align-self: flex-start; background: #1b2440; color: #ffffff; font-size: 12px; font-weight: 700; padding: 2px 8px">保存版</span><span style="${Z}; font-size: 26px; line-height: 1.3">まわりに渡せる<br>「わたしの取扱説明書」</span></div>
   <div style="display: flex; flex-direction: column; gap: 2px; margin-top: 8px"><span style="${O}; font-weight: 900; font-size: 34px; color: #2f6fd6; line-height: 1">12</span><span style="${Z}; font-size: 18px; line-height: 1.4">職場と家族で使える<br>言い換えBEFORE→AFTER</span></div>
  </div>
  <div style="position: absolute; left: 34px; bottom: 98px; background: #ffffff; padding: 6px 12px; font-size: 12px; font-weight: 700">${who}</div>
  <div style="position: absolute; left: 0; right: 0; bottom: 0; background: #ffffff; padding: 18px 34px 22px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px">${lab('ふだんのあなたは',r.core)}${lab('人前でのあなたは',r.surf)}${lab('決める時のあなたは',r.dec)}</div>`,'position: relative; overflow: hidden; background: #dbeaf7');
}

function contents(r){
 const row=(n,t,s,c)=>`<div style="display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 10px; padding: 15px 0; border-bottom: 1px solid #e4e7ee"><span style="${O}; font-weight: 800; font-size: 30px; line-height: 1${c?'; color: '+c:''}">${n}</span><div style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 16px">${t}</span><span style="font-size: 12px; color: #5b6476">${s}</span></div></div>`;
 const nb=s=>s.replace(/<br>/g,'');
 const kinds=new Set([r.core,r.surf,r.dec]).size;
 return PAGE(`
  ${hdr('TSUTAWARU ／ FOR YOU','02')}
  <div style="display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 32px">
   <div style="display: flex; flex-direction: column; gap: 18px">
    <div style="${O}; font-weight: 800; font-size: 100px; line-height: 0.9; letter-spacing: -0.02em">CON<br>TENTS</div>
    <div style="display: flex; flex-direction: column; border-top: 2px solid #1b2440">
     ${row('03','あなたの組み合わせ',ADJ[r.surf]+NOUN[r.core])}
     ${row('04','ふだんの自分　'+TT[r.core].n+'タイプ',nb(LAYER.core[r.core].sub),TT[r.core].c)}
     ${row('05','疲れ方と回復のしかた',`「${MU[r.core]}」に早めに気づく`,TT[r.core].c)}
     ${row('06','人前での自分　'+TT[r.surf].n+'タイプ',nb(LAYER.surf[r.surf].sub),TT[r.surf].c)}
     ${row('07','決める時の自分　'+TT[r.dec].n+'タイプ',nb(LAYER.dec[r.dec].sub),TT[r.dec].c)}
     ${row('08','相手のタイプ別の伝え方','ひと言だけ足す')}
     ${row('09','言い換え　職場編・家族編','BEFORE → AFTER 12例')}
     ${row('11','保存版　わたしの取扱説明書','まわりの人に渡すページ')}
     ${row('12','今日からの7日間チャレンジ','読んで終わりにしない')}
    </div>
   </div>
   <div style="display: flex; flex-direction: column; gap: 8px">
    <img src="${R}three.jpg" alt="一人の人の後ろに3つの姿が重なっているイラスト" style="width: 300px; height: 700px; object-fit: cover; display: block">
    <span style="font-size: 11.5px; line-height: 1.6; color: #5b6476">人には、ふだん・人前・決める時の3つの顔がある。${kinds===3?'あなたは3つとも違うタイプの「3色そろい」。':kinds===2?'あなたは2つのタイプを使い分ける人。':'あなたは3つとも同じ、ブレない人。'}</span>
   </div>
  </div>
  <div style="border-top: 2px solid #1b2440; padding-top: 14px; display: grid; grid-template-columns: 150px minmax(0, 1fr) minmax(0, 1fr); gap: 22px; margin-top: auto">
   <div style="display: flex; flex-direction: column"><span style="${O}; font-weight: 800; font-size: 13px; letter-spacing: 0.18em">EDITOR'S NOTE</span><span style="${Z}; font-size: 20px; margin-top: 4px">はじめに</span></div>
   <p style="margin: 0; font-size: 13px; line-height: 1.85">人は場面によって別の顔が出ます。くつろいでいる時、初対面の人と話す時、大事なことを決める時。この3つは同じタイプとは限りません。</p>
   <p style="margin: 0; font-size: 13px; line-height: 1.85">人によって印象が違うと言われるのは、そのためかもしれません。この一冊は、3人の自分と、まわりとのすれ違いの減らし方をまとめたものです。</p>
  </div>`,'padding: 44px 52px 40px; display: flex; flex-direction: column; gap: 22px');
}

function combo(r){
 const kinds=new Set([r.core,r.surf,r.dec]).size;
 const face=(lbl,g)=>`<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0 12px 16px; border-left: 1px solid #e4e7ee"><img src="${R}p_${g}.jpg" alt="" style="width: 112px; height: 112px; border-radius: 50%; object-fit: cover; background: ${TT[g].l}"><div style="display: flex; flex-direction: column"><span style="font-size: 11.5px; color: #5b6476">${lbl}</span><span style="${Z}; font-size: 28px; color: ${TT[g].d}">${TT[g].n}</span></div></div>`;
 const p1=`だんのあなたは、${CORE_DESC[r.core]}${TT[r.core].n}タイプ。人前に出ると、${SURF_DESC[r.surf]}${TT[r.surf].n}タイプの顔になります。そして大事な場面では、${DEC_DESC[r.dec]}${TT[r.dec].n}タイプが顔を出す。${kinds===3?'3つの顔がすべて違う、めずらしい組み合わせです。':kinds===2?'2つの顔を使い分ける組み合わせです。':'どの場面でもブレない、まっすぐな組み合わせです。'}`;
 const p2=r.core===r.surf?`まわりから見えるあなたと、ふだんのあなたにはズレが少なめ。だからこそ、ほかのタイプの人には伝わり方がまっすぐすぎることも。相手のタイプに合わせて入口だけ変えれば、誤解はぐっと減らせます。`:`まわりからは「${SURF_IMG[r.surf]}」と思われやすい一方で、素のあなたは${CORE_REAL[r.core]}。そのギャップが、あなたの魅力でもあり、誤解されやすいところでもあります。伝え方を少し変えるだけで、誤解はぐっと減らせます。`;
 const q=r.core===r.surf?`「${TT[r.core].n}タイプらしさ」がまっすぐ出る。<br>それが、あなたのいちばんの魅力。`:`「${QA[r.surf]}のに、${QB[r.core]}」。<br>それは、いくつもの顔を持つ人のいちばんの魅力。`;
 const icons=['i_hand','i_bulb','i_star'];
 const st=['surf','core','dec'].map((k,i)=>`<div style="display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 10px; align-items: start"><img src="${R}${icons[i]}.jpg" alt="" style="width: 40px; height: 40px"><span style="font-size: 14px; line-height: 1.75"><b>${STR[k][r[k]][0]}</b>　${STR[k][r[k]][1]}</span></div>`).join('');
 const ca=['core','surf','dec'].map((k,i)=>`<div style="display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 10px; align-items: start"><span style="${O}; font-weight: 800; font-size: 24px; color: ${TT[r[k]].c}; line-height: 1.2">${i+1}</span><span style="font-size: 14px; line-height: 1.75"><b>${CAU[k][r[k]][0]}</b>　${CAU[k][r[k]][1]}</span></div>`).join('');
 return PAGE(`
  ${hdr('FEATURE ／ YOUR COMBINATION','03')}
  <div style="display: flex; flex-direction: column; gap: 6px">
   <span style="font-size: 14px; font-weight: 700">特集　あなたの中の3人の自分</span>
   <div style="${Z}; font-size: 72px; line-height: 1.12">${ADJ[r.surf]}、<br>${NOUN[r.core]}。</div>
  </div>
  <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 2px solid #1b2440; border-bottom: 1px solid #1b2440; margin-left: -16px">${face('ふだん',r.core)}${face('人前',r.surf)}${face('決める時',r.dec)}</div>
  <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px">
   <p style="margin: 0; font-size: 14px; line-height: 2"><span style="${Z}; font-size: 40px; line-height: 1; float: left; margin: 4px 8px 0 0">ふ</span>${p1}</p>
   <p style="margin: 0; font-size: 14px; line-height: 2">${p2}</p>
  </div>
  <div style="${Z}; font-size: 28px; line-height: 1.5; border-left: 6px solid #e8417a; padding: 4px 0 4px 20px">${q}</div>
  <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; margin-top: auto">
   <div style="display: flex; flex-direction: column; gap: 10px"><span style="${O}; font-weight: 800; font-size: 13px; letter-spacing: 0.18em; border-bottom: 2px solid #1b2440; padding-bottom: 6px">STRENGTHS ／ 強み</span>${st}</div>
   <div style="display: flex; flex-direction: column; gap: 10px"><span style="${O}; font-weight: 800; font-size: 13px; letter-spacing: 0.18em; border-bottom: 2px solid #1b2440; padding-bottom: 6px">CAUTION ／ 誤解されやすいところ</span>${ca}</div>
  </div>`,'padding: 44px 52px 40px; display: flex; flex-direction: column; gap: 30px');
}

function typePage(layer,g,no,ch,pct){
 const t=LAYER[layer][g],c=TT[g].c,d=TT[g].d;
 const sc=t.sc.map((s,i)=>`<div style="display: flex; flex-direction: column; gap: 3px; padding: 12px 14px 0 ${i?14:0}px;${i?' border-left: 1px solid #e4e7ee;':''}"><span style="${O}; font-weight: 800; font-size: 11px; letter-spacing: 0.16em; color: ${c}">${s[0]}</span><span style="font-weight: 700; font-size: 13.5px">${s[1]}</span><span style="font-size: 12px; line-height: 1.6; color: #3d4556">${s[2]}</span></div>`).join('');
 return PAGE(`
  <img src="${R}${SCENE[g]}.jpg" alt="${ALT[g]}" style="position: absolute; left: 0; top: 0; width: 794px; height: 670px; object-fit: cover; object-position: 50% 32%">
  <div style="position: absolute; left: 36px; right: 36px; top: 30px">${hdr(ch,no,true)}</div>
  <div style="position: absolute; right: 40px; top: 70px; display: flex; flex-direction: row-reverse; gap: 12px; align-items: flex-start">
   <div style="writing-mode: vertical-rl; ${Z}; font-size: 76px; line-height: 1; color: #ffffff; background: ${d}; padding: 16px 10px; letter-spacing: 0.06em">${TT[g].n}タイプ</div>
   <div style="writing-mode: vertical-rl; ${Z}; font-size: 21px; line-height: 1.5; letter-spacing: 0.1em; background: #ffffff; padding: 12px 6px">${t.sub}</div>
  </div>
  <div style="position: absolute; left: 36px; top: 64px; background: ${c}; color: #ffffff; font-size: 13px; font-weight: 900; letter-spacing: 0.12em; padding: 6px 12px">${pct}</div>
  <div style="position: absolute; left: 36px; top: 622px; background: #ffffff; ${Z}; font-size: 22px; padding: 10px 18px; border-left: 6px solid ${c}">${t.quote}</div>
  <div style="position: absolute; left: 0; right: 0; top: 670px; bottom: 0; padding: 28px 36px; display: flex; flex-direction: column; gap: 18px">
   <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 150px; gap: 24px">
    <div style="display: flex; flex-direction: column; gap: 10px"><p style="margin: 0; ${Z}; font-size: 19px; line-height: 1.6">${t.lead}</p><p style="margin: 0; font-size: 12.5px; line-height: 1.95; color: #3d4556">${t.body}</p></div>
    <div style="display: flex; flex-direction: column; gap: 12px">
     <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; font-weight: 900; color: ${c}; letter-spacing: 0.1em">${t.k1}</span><span style="${Z}; font-size: 16.5px; line-height: 1.65">${t.v1}</span></div>
     <div style="display: flex; flex-direction: column; gap: 4px; border-top: 1px solid #1b2440; padding-top: 10px"><span style="font-size: 12px; font-weight: 900; color: #5b6476; letter-spacing: 0.1em">${t.k2}</span><span style="font-size: 12.5px; line-height: 1.85; color: #3d4556">${t.v2}</span></div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 6px"><img src="${IM}${TT[g].img}.jpg" alt="${TT[g].n}タイプの診断カード" style="width: 150px; height: 188px; object-fit: cover; display: block; box-shadow: 0 6px 18px rgba(27,36,64,0.18)"><span style="font-size: 10.5px; line-height: 1.5; color: #5b6476">診断カード。保存して、伝える時のヒントに。</span></div>
   </div>
   <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 2px solid #1b2440; margin-top: auto">${sc}</div>
  </div>`,'position: relative; overflow: hidden');
}

function tired(r){
 const T=TIRED[r.core],c=TT[r.core].c;
 const mu=['ムダ','ムリ','ムラ'].map(m=>m===MU[r.core]?`<span style="font-size: 52px; color: ${c}">${m}</span>`:`<span style="font-size: 30px; color: #d5d9e0">${m}</span>`).join('');
 const ul=a=>`<ul style="margin: 0; padding-left: 1.2em; font-size: 12px; line-height: 1.75">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
 return PAGE(`
  <div style="position: relative; height: 560px; flex: none">
   <img src="${R}tired.jpg" alt="書類の山を前に疲れている姿と、窓辺でくつろぐ姿" style="width: 794px; height: 560px; object-fit: cover; display: block">
   <div style="position: absolute; left: 36px; right: 36px; top: 30px">${hdr('CHAPTER 1 ／ SELF CARE','05',true)}</div>
   <div style="position: absolute; left: 36px; bottom: 24px"><span style="background: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; color: #5b6476">BEFORE ／ がんばりすぎの日</span></div>
   <div style="position: absolute; right: 36px; bottom: 24px"><span style="background: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; color: ${c}">AFTER ／ ひと息ついた日</span></div>
  </div>
  <div style="padding: 26px 40px 32px; display: flex; flex-direction: column; gap: 16px; flex: 1">
   <div style="display: grid; grid-template-columns: minmax(0, 1fr) 190px; gap: 20px; align-items: end">
    <div style="${Z}; font-size: 32px; line-height: 1.3">${T.t}</div>
    <div style="display: flex; gap: 14px; align-items: baseline; justify-content: flex-end; ${Z}">${mu}</div>
   </div>
   <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px">
    <p style="margin: 0; font-size: 12.5px; line-height: 1.9">3つのタイプには、それぞれ疲れやすいクセがあります。人柄タイプは気をつかいすぎる「ムダ」、直感タイプは気分の波が出る「ムラ」、結果タイプはがんばりすぎる「ムリ」。${TT[r.core].n}タイプのあなたは「${MU[r.core]}」に注意です。</p>
    <p style="margin: 0; font-size: 12.5px; line-height: 1.9">${T.p}</p>
   </div>
   <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 2px solid #1b2440; margin-top: auto">
    <div style="padding: 14px 20px 0 0; display: flex; flex-direction: column; gap: 6px"><span style="${O}; font-weight: 800; font-size: 13px; letter-spacing: 0.16em">SIGN ／ 要注意のサイン</span>${ul(T.sign)}</div>
    <div style="padding: 14px 0 0 20px; border-left: 1px solid #e4e7ee; display: flex; flex-direction: column; gap: 6px"><span style="${O}; font-weight: 800; font-size: 13px; letter-spacing: 0.16em; color: ${c}">RECOVER ／ 回復のしかた</span>${ul(T.rec)}</div>
   </div>
  </div>`,'display: flex; flex-direction: column; overflow: hidden');
}

function guide(r){
 const ct=CAUTION[r.core];
 const bg=g=>g===ct?`; background: ${TT[ct].l}`:'';
 const head=ORDER.map(g=>`<div style="padding: 14px 12px; border-bottom: 1px solid #1b2440; display: flex; flex-direction: column; align-items: center; gap: 6px${bg(g)}"><img src="${R}p_${g}.jpg" alt="" style="width: 128px; height: 128px; border-radius: 50%; object-fit: cover; background: ${g===ct?'#ffffff':TT[g].l}"><span style="${Z}; font-size: 20px; color: ${TT[g].d}">${TT[g].n}タイプ</span><span style="font-size: 11px; font-weight: 700; color: ${g===r.core?'#5b6476':g===ct?TT[g].d:'#5b6476'}">${g===r.core?'あなたと同じ':g===ct?'いちばん注意':'　'}</span></div>`).join('');
 const rowc=(lbl,f,style,last)=>`<div style="padding: 20px 0; border-bottom: 1px solid ${last?'#1b2440':'#e4e7ee'}; font-size: 12px; font-weight: 700; color: #5b6476">${lbl}</div>`+ORDER.map(g=>`<div style="padding: 20px 12px; border-bottom: 1px solid ${last?'#1b2440':'#e4e7ee'}; ${style(g)}${bg(g)}">${f(g)}</div>`).join('');
 const A=ARUARU[r.core];
 return PAGE(`
  ${hdr('GUIDE ／ HOW TO SAY IT','08')}
  <div style="display: grid; grid-template-columns: minmax(0, 1fr) 230px; gap: 24px; align-items: end">
   <div style="display: flex; flex-direction: column; gap: 6px"><span style="font-size: 14px; font-weight: 700">保存版　相手のタイプ別早見表</span><div style="${Z}; font-size: 58px; line-height: 1.2">ひと言だけ、<br>足せばいい。</div></div>
   <p style="margin: 0; font-size: 13px; line-height: 1.85; color: #3d4556">${MYSTYLE[r.core]}</p>
  </div>
  <div style="display: grid; grid-template-columns: 112px repeat(3, minmax(0, 1fr)); border-top: 2px solid #1b2440">
   <div style="border-bottom: 1px solid #1b2440"></div>${head}
   ${rowc('大事に<br>していること',g=>VALUE[g],()=>'font-size: 14px; font-weight: 700')}
   ${rowc('あなたが<br>足すこと',g=>g===r.core?'いつものままでOK':ADD[g],g=>`${Z}; font-size: 19px; line-height: 1.5; color: ${TT[g].d}`)}
   ${rowc('避けたいこと',g=>AVOID[g],()=>'font-size: 13.5px',true)}
  </div>
  <div style="display: grid; grid-template-columns: 176px minmax(0, 1fr); gap: 24px; align-items: center">
   <img src="${IM}aruaru-${TT[r.core].img}.jpg" alt="${TT[r.core].n}タイプの掛け違いあるあるカード" style="width: 176px; height: 220px; object-fit: cover; display: block; border: 1px solid #e4e7ee">
   <div style="display: flex; flex-direction: column; gap: 8px"><span style="${Z}; font-size: 26px; line-height: 1.45">${A[0]}</span><p style="margin: 0; font-size: 13px; line-height: 1.85">${A[1]}</p></div>
  </div>
  <div style="border-top: 3px solid #1b2440; border-bottom: 1px solid #1b2440; padding: 16px 4px; display: grid; grid-template-columns: 150px repeat(3, minmax(0, 1fr)); gap: 14px; align-items: center; margin-top: auto">
   <span style="${Z}; font-size: 16px; line-height: 1.5">タイプが<br>分からない時は</span>
   <div style="display: flex; gap: 8px; align-items: baseline"><span style="${O}; font-weight: 800; font-size: 26px; color: #d6457f">1</span><span style="font-size: 13px">「ありがとう」をひと言</span></div>
   <div style="display: flex; gap: 8px; align-items: baseline"><span style="${O}; font-weight: 800; font-size: 26px; color: #2f6fd6">2</span><span style="font-size: 13px">結論を一文で</span></div>
   <div style="display: flex; gap: 8px; align-items: baseline"><span style="${O}; font-weight: 800; font-size: 26px; color: #e08a00">3</span><span style="font-size: 13px">「これで〜になるね」</span></div>
  </div>`,'padding: 44px 52px 40px; display: flex; flex-direction: column; gap: 20px');
}

function caseBlock(n,cs,core){
 const q=g=>`<div style="display: flex; flex-direction: column; gap: 4px; border-left: 3px solid ${TT[g].c}; padding-left: 12px"><span style="font-size: 11px; font-weight: 900; letter-spacing: 0.08em; color: ${TT[g].d}">${TT[g].n}タイプの人へ</span><span style="${Z.replace('900','700')}; font-size: 16px; line-height: 1.75">「${cs.a[g]}」</span></div>`;
 return `<div style="display: grid; grid-template-columns: 74px minmax(0, 1fr); gap: 14px; border-top: 1px solid #1b2440; padding-top: 14px">
  <span style="${O}; font-weight: 800; font-size: 52px; line-height: 0.9; letter-spacing: -0.03em">${n}</span>
  <div style="display: flex; flex-direction: column; gap: 10px">
   <div style="display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap"><span style="${Z}; font-size: 21px">${cs.t}</span><span style="font-size: 13px; color: #8a91a0"><span style="${O}; font-weight: 700; font-size: 10.5px; letter-spacing: 0.14em; margin-right: 6px">BEFORE</span><span style="text-decoration: line-through; text-decoration-color: #e8417a">${cs.b[core]}</span></span></div>
   <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px">${others(core).map(q).join('')}</div>
  </div></div>`;
}
function rewriteWork(r){
 const [a,b]=others(r.core);
 return PAGE(`
  ${hdr('REWRITE ／ AT WORK','09')}
  <div style="position: relative; height: 300px">
   <div style="${O}; font-weight: 900; font-size: 118px; line-height: 0.86; letter-spacing: -0.05em; color: #dbeaf7">BEFORE<br>→AFTER</div>
   <div style="position: absolute; left: 0; bottom: 4px; display: flex; flex-direction: column; gap: 8px">${tag('保存版　職場編')}<h2 style="margin: 0; ${Z}; font-size: 54px; line-height: 1.15">その一文、<br>入口だけ変えよう。</h2></div>
   <p style="position: absolute; right: 0; bottom: 6px; width: 220px; margin: 0; font-size: 12.5px; line-height: 1.9; color: #3d4556">内容は同じ。${TT[a].n}タイプには<b style="color: ${TT[a].d}">${ENTRY[a]}</b>から、${TT[b].n}タイプには<b style="color: ${TT[b].d}">${ENTRY[b]}</b>から入るだけで、お願いの通り方が変わります。</p>
  </div>
  <div style="display: flex; flex-direction: column; flex: 1; justify-content: space-between">${CASES.slice(0,3).map((c,i)=>caseBlock('0'+(i+1),c,r.core)).join('')}</div>
  <div style="border-top: 3px solid #1b2440; padding-top: 12px; display: flex; justify-content: space-between; align-items: baseline"><span style="${Z}; font-size: 18px">赤線が「いつもの書き方」。変えるのは、いつも最初の一文です。</span><span style="${O}; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: #5b6476">NEXT → AT HOME</span></div>`,'padding: 36px 40px 34px; display: flex; flex-direction: column; gap: 18px; overflow: hidden');
}
function rewriteHome(r){
 return PAGE(`
  <img src="${R}m_home.jpg" alt="夕方のリビングで家族と笑い合う人" style="position: absolute; left: 0; top: 0; width: 794px; height: 400px; object-fit: cover; object-position: 50% 40%">
  <div style="position: absolute; left: 40px; right: 40px; top: 30px">${hdr('REWRITE ／ AT HOME','10',true)}</div>
  <div style="position: absolute; left: 40px; top: 300px; background: #ffffff; padding: 18px 22px 16px; display: flex; flex-direction: column; gap: 6px">${tag('保存版　家族・パートナー編')}<h2 style="margin: 0; ${Z}; font-size: 46px; line-height: 1.2">近い人ほど、<br>ひと言を足す。</h2></div>
  <p style="position: absolute; right: 40px; top: 418px; width: 270px; margin: 0; font-size: 12.5px; line-height: 1.9; color: #3d4556">仲がいい相手ほど、ふだんの${TT[r.core].n}タイプがそのまま出ます。悪気はなくても、受け取る側はさみしくなるもの。</p>
  <div style="position: absolute; left: 40px; right: 40px; top: 520px; bottom: 34px; display: flex; flex-direction: column; gap: 26px">
   ${CASES.slice(3).map((c,i)=>caseBlock('0'+(i+4),c,r.core)).join('')}
   <div style="margin-top: auto; border-top: 3px solid #1b2440; padding-top: 12px; display: flex; gap: 14px; align-items: center"><span style="${Z}; font-size: 17px">相手の生年月日で、相手専用のレポートも作れます。</span><span style="font-size: 12px; color: #5b6476">タイプが分かると、言い換えはもっと楽に。</span></div>
  </div>`,'position: relative; overflow: hidden');
}

function manual(r){
 const li=(c,a)=>a.map(x=>`<div style="display: flex; gap: 10px; align-items: baseline; border-bottom: 1px solid #e4e7ee; padding: 11px 0"><span style="color: ${c}; font-weight: 900">—</span><span style="font-size: 14.5px; font-weight: 700">${x}</span></div>`).join('');
 const nt=[['core'],['surf'],['dec']].map(([k],i)=>`<div style="display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 10px; align-items: start; border-top: 1px solid #1b2440; padding-top: 14px"><span style="${O}; font-weight: 800; font-size: 40px; line-height: 0.9; color: ${TT[r[k]].c}">0${i+1}</span><p style="margin: 0; font-size: 15px; line-height: 1.85">${NOTE[k][r[k]]}</p></div>`).join('');
 const g=r.core;
 return PAGE(`
  ${hdr('KEEP THIS PAGE ／ 保存版','11')}
  <div style="display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: 16px; align-items: end">
   <div style="display: flex; flex-direction: column; gap: 10px">${tag('まわりの人に渡すページ')}<h2 style="margin: 0; ${Z}; font-size: 64px; line-height: 1.1">${r.name?esc(r.name)+'の':'わたしの'}<br>取扱説明書</h2><p style="margin: 0; font-size: 13px; line-height: 1.8; color: #3d4556">家族や同僚、パートナーに。点線の内側をスクショして、そのまま送ってください。</p></div>
   <img src="${R}hand.jpg" alt="カードを手渡す二人のイラスト" style="width: 280px; height: 200px; object-fit: contain; display: block">
  </div>
  <div style="position: relative; border-top: 2px dashed #1b2440; border-bottom: 2px dashed #1b2440; padding: 26px 0 18px; display: flex; flex-direction: column; gap: 18px; flex: 1">
   <span style="position: absolute; left: 0; top: -11px; background: #ffffff; padding-right: 10px; ${O}; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: #5b6476">✂ CUT HERE ／ ここからスクショ</span>
   <div style="display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 22px; align-items: center">
    <img src="${R}p_${g}.jpg" alt="${TT[g].n}タイプのキャラクター" style="width: 170px; height: 170px; object-fit: cover; display: block; background: ${TT[g].l}">
    <div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 14px; font-weight: 700; color: #5b6476">わたしは、ふだんは</span><span style="${Z}; font-size: 52px; line-height: 1.15; color: ${TT[g].d}">${TT[g].n}タイプ<span style="font-size: 24px; color: #1b2440">です。</span></span><span style="font-size: 13px; color: #3d4556">人前では<b style="color: ${TT[r.surf].d}">${TT[r.surf].n}タイプ</b>、決める時は<b style="color: ${TT[r.dec].d}">${TT[r.dec].n}タイプ</b>が出ます。</span></div>
   </div>
   <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px">
    <div><div style="${Z}; font-size: 18px; color: ${TT[g].d}; border-bottom: 3px solid ${TT[g].c}; padding-bottom: 6px">こうしてもらえるとうれしい</div>${li(TT[g].c,LIKE[g])}</div>
    <div><div style="${Z}; font-size: 18px; color: #5b6476; border-bottom: 3px solid #b6bcc8; padding-bottom: 6px">ちょっと苦手</div>${li('#8a91a0',DISLIKE[g])}</div>
   </div>
   <div style="display: flex; flex-direction: column; gap: 12px"><span style="${Z}; font-size: 20px">知っておいてほしいこと</span>${nt}</div>
   <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #5b6476"><span style="${O}; font-weight: 700; letter-spacing: 0.2em">tsutawaru ／ MY MANUAL</span><span>あなたの診断は <b style="color: #1b2440">shindan.skeleton-inc.jp</b></span></div>
  </div>`,'padding: 36px 40px 30px; display: flex; flex-direction: column; gap: 16px; overflow: hidden');
}

function challenge(r){
 const [a,b]=others(r.core);
 const days=['家族か身近な人の生年月日で、相手のタイプを調べる',TIP[a],TIP[b],DAY4[r.core],DAY5[r.dec],'「わたしの取扱説明書」を、誰か1人に見せる','相手の反応がいちばん変わった場面を振り返る'];
 const cols=['#2f6fd6','#d6457f','#e08a00','#2f6fd6','#e08a00','#d6457f','#1b2440'];
 const dr=days.map((d,i)=>`<div style="display: grid; grid-template-columns: 92px minmax(0, 1fr) 30px; gap: 14px; align-items: center; border-top: 1px solid ${i?'#e4e7ee':'#1b2440'}; padding: 17px 0"><span style="display: flex; align-items: baseline; gap: 4px"><span style="${O}; font-size: 11px; font-weight: 700; letter-spacing: 0.14em">DAY</span><span style="${O}; font-weight: 800; font-size: 38px; line-height: 1; color: ${cols[i]}">0${i+1}</span></span><span style="font-size: 15.5px; font-weight: 700; line-height: 1.6">${d}</span><span style="width: 24px; height: 24px; border: 2px solid #1b2440; display: block"></span></div>`).join('');
 return PAGE(`
  ${hdr('7 DAYS CHALLENGE','12')}
  <div style="display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 16px; align-items: end">
   <div style="display: flex; flex-direction: column; gap: 10px">${tag('今日から')}<div style="${O}; font-weight: 900; font-size: 92px; line-height: 0.9; letter-spacing: -0.04em; color: #dbeaf7">7 DAYS</div><h2 style="margin: 0; ${Z}; font-size: 46px; line-height: 1.2">読んで終わりに<br>しないために。</h2></div>
   <img src="${R}week.jpg" alt="卓上カレンダーにチェックを入れる人のイラスト" style="width: 300px; height: 220px; object-fit: contain; display: block">
  </div>
  <p style="margin: 0; font-size: 13.5px; line-height: 1.8; color: #3d4556">1日1つ、小さく試してみてください。できたら右の□にチェックを。</p>
  <div style="display: flex; flex-direction: column; border-bottom: 1px solid #1b2440">${dr}</div>
  <div style="margin-top: auto; border: 1.5px solid #1b2440; padding: 18px 22px; display: grid; grid-template-columns: 80px minmax(0, 1fr); gap: 18px; align-items: center; position: relative">
   <span style="position: absolute; left: 16px; top: -9px; background: #ffffff; padding: 0 8px; ${O}; font-size: 10px; font-weight: 700; letter-spacing: 0.24em; color: #5b6476">INFORMATION</span>
   <img src="${R}i_phone.jpg" alt="" style="width: 80px; height: 80px; display: block">
   <div style="display: flex; flex-direction: column; gap: 6px"><span style="${Z}; font-size: 22px">毎回考えなくても、伝わる言葉に。<span style="color: #047a3a">つたわるキー</span></span><p style="margin: 0; font-size: 13px; line-height: 1.8">相手の生年月日を一度登録すれば、言いたいことを打ってタイプのボタンを押すだけ。入力欄の文章が、相手に伝わる言い方に変わるキーボードアプリです。LINEにもChatworkにも。</p><span style="font-size: 13px; font-weight: 900; color: #047a3a">このレポートをお持ちの方は、無料期間を延長してお使いいただけます。</span></div>
  </div>
  <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: #5b6476"><span>大切な人の分も、その人専用のレポートを作れます。</span><span>このレポートは生年月日の統計にもとづく傾向です。</span></div>`,'padding: 36px 40px 30px; display: flex; flex-direction: column; gap: 14px; overflow: hidden');
}

function buildReport(Y,M,Dd,name){
 const c=calc(Y,M,Dd); if(!c) return null;
 const r={core:GROUP[c.hon],surf:GROUP[c.omote],dec:GROUP[c.ishi],y:Y,m:M,d:Dd,name:(name||'').trim().slice(0,20)};
 return {r,html:[cover(r),contents(r),combo(r),
  typePage('core',r.core,'04','CHAPTER 1 ／ ふだんの自分','ふだんのあなた　約50％'),
  tired(r),
  typePage('surf',r.surf,'06','CHAPTER 2 ／ 人前での自分','人前でのあなた　約35％'),
  typePage('dec',r.dec,'07','CHAPTER 3 ／ 決める時の自分','決める時のあなた　約15％'),
  guide(r),rewriteWork(r),rewriteHome(r),manual(r),challenge(r)].join('')};
}
