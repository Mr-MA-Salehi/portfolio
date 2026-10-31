const s=p=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const I={
github:s('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
linkedin:s('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
facebook:s('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'),
instagram:s('<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'),
mail:s('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/>'),
phone:s('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
user:s('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
bolt:s('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'),
cube:s('<path d="m21 16-9 5-9-5V8l9-5 9 5z"/><path d="m3 8 9 5 9-5M12 13v8"/>'),
award:s('<circle cx="12" cy="8" r="6"/><path d="m15.5 13.5 1.5 8.5-5-3-5 3 1.5-8.5"/>'),
book:s('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),
send:s('<path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/>')};
const L=[["index.html","Home"],["about.html","About"],["services.html","Services"],["project.html","Project"],["community.html","Community"],["certificates.html","Certificates"],["contact.html","Contact"]];
const P=document.body.dataset.page;
document.body.insertAdjacentHTML("afterbegin",`<header class="wrap"><nav class="glass" aria-label="Main"><a class="brand" href="index.html">Mohammad Arif Salehi</a><ul>${L.map(([h,t])=>`<li><a href="${h}"${h.startsWith(P)?' aria-current="page"':''}>${t}</a></li>`).join("")}</ul></nav></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer class="wrap glass"><span>© 2026 Mohammad Arif Salehi · Mazar-i-Sharif, Afghanistan</span><div class="s"><a href="https://github.com/Mr-MA-Salehi" aria-label="GitHub" target="_blank" rel="noopener">${I.github}</a><a href="https://www.linkedin.com/in/mr-m-a-salehi" aria-label="LinkedIn" target="_blank" rel="noopener">${I.linkedin}</a><a href="https://www.instagram.com/mr.m.a.salehi" aria-label="Instagram" target="_blank" rel="noopener">${I.instagram}</a><a href="https://www.facebook.com/mr.m.a.salehi" aria-label="Facebook" target="_blank" rel="noopener">${I.facebook}</a><a href="mailto:m.arif.salehi@gmail.com" aria-label="Email">${I.mail}</a></div></footer>`);
document.querySelectorAll("[data-icon]").forEach(e=>e.insertAdjacentHTML("afterbegin",I[e.dataset.icon]));

(function(){const lb=document.createElement("div");lb.className="lb";lb.hidden=true;lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","Certificate viewer");
lb.innerHTML='<div class="lb-box glass"><div class="lb-bar"><strong></strong><button class="lb-x" type="button" aria-label="Close viewer">&times;</button></div><div class="lb-body"></div></div>';document.body.append(lb);
let last=null;const q=s=>lb.querySelector(s);
function open(a){last=a;q("strong").textContent=a.dataset.title||"";const b=q(".lb-body");b.textContent="";
 if(a.dataset.frame){const f=document.createElement("iframe");f.src=a.href;f.title=a.dataset.title||"Certificate";b.append(f)}
 else{const i=document.createElement("img");i.src=a.getAttribute("href");i.alt="Certificate: "+(a.dataset.title||"");b.append(i)}
 lb.hidden=false;document.body.style.overflow="hidden";q(".lb-x").focus()}
function close(){lb.hidden=true;q(".lb-body").textContent="";document.body.style.overflow="";if(last)last.focus()}
document.addEventListener("click",e=>{const a=e.target.closest("a.view");if(a){e.preventDefault();open(a);return}if(e.target.closest(".lb-x")||e.target===lb)close()});
addEventListener("keydown",e=>{if(e.key==="Escape"&&!lb.hidden)close()})})();
