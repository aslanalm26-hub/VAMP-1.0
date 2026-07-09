
const VAMP = {
  get(k, fallback){ try{return JSON.parse(localStorage.getItem(k)) ?? fallback}catch(e){return fallback}},
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)) },
  user(){ return this.get('vamp_user', null) },
  login(email, name, role='pilot'){ this.set('vamp_user', {email,name,role,pilotId: role==='admin'?'ADM001':'PV0002', rank: role==='admin'?'Admin':'Cadet Pilot'}); location.href='dashboard.html' },
  logout(){ localStorage.removeItem('vamp_user'); location.href='index.html' },
  apps(){ return this.get('vamp_apps', []) },
  saveApp(app){ const apps=this.apps(); apps.unshift({...app,id:Date.now(),status:'pending',created:new Date().toLocaleString()}); this.set('vamp_apps', apps); },
  updateApp(id,status){ const apps=this.apps().map(a=>a.id==id?{...a,status}:a); this.set('vamp_apps', apps); },
  bookings(){ return this.get('vamp_bookings', []) },
  book(f){ const u=this.user()||{name:'Guest Pilot'}; const b={...f,id:Date.now(),pilot:u.name,status:'booked',created:new Date().toLocaleString()}; const arr=this.bookings(); arr.unshift(b); this.set('vamp_bookings',arr); alert('Flight booked: '+f.flight); },
};
function nav(){
 document.write(`<nav class="nav"><div class="navin"><a class="brand" href="index.html"><div class="logo">V</div><div>VAMP<br><span class="muted" style="font-size:11px;letter-spacing:.14em">VIRTUAL AVIATION MANAGEMENT PLATFORM</span></div></a><div class="navlinks"><a href="airlines.html">Airlines</a><a href="dispatch.html">Dispatch</a><a href="apply.html">Apply</a><a href="founder.html">Founder</a><a href="admin.html">Admin</a></div><div id="authBtns"></div></div></nav>`);
 setTimeout(()=>{const u=VAMP.user(); const el=document.getElementById('authBtns'); if(!el)return; el.innerHTML=u?`<button class="btn" onclick="VAMP.logout()">Logout</button>`:`<a class="btn" href="login.html">Login</a>`},0)
}
function ep(n=4){return `<div class="ep">${Array.from({length:n}).map(()=>'<div class="stripe"></div>').join('')}</div>`}
