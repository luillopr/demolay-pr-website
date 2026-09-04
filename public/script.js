const btn=document.getElementById("lang");
if(btn){
  btn.addEventListener("click",()=>{
    const path=window.location.pathname;
    const isEnglish=path==="/en"||path.startsWith("/en/");
    let target;
    if(isEnglish){ target=path.replace(/^\/en(?=\/|$)/,"")||"/"; }
    else { target=path==="/"?"/en/":"/en"+path; }
    window.location.href=target+window.location.search+window.location.hash;
  });
}

const menu=document.querySelector(".menu"),nav=document.querySelector(".site-header nav");
if(menu&&nav){
  menu.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}

const form=document.getElementById("interestForm");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const youth=document.getElementById("youthName").value.trim();
    const age=document.getElementById("age").value.trim();
    const municipality=document.getElementById("municipality").value.trim();
    const guardian=document.getElementById("guardianName").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const source=document.getElementById("source").value.trim();
    const isEnglish=window.location.pathname==="/en"||window.location.pathname.startsWith("/en/");
    const subject=encodeURIComponent(isEnglish?`Interest in DeMolay Puerto Rico - ${youth}`:`Interés en DeMolay Puerto Rico - ${youth}`);
    const body=encodeURIComponent(isEnglish?
`Hello,

I would like information about DeMolay Puerto Rico.

Young man's name: ${youth}
Age: ${age}
Municipality: ${municipality}
Parent/Guardian: ${guardian}
Email: ${email}
Phone: ${phone || "Not provided"}
How they heard about DeMolay: ${source || "Not indicated"}

Thank you.`:
`Saludos,

Deseo recibir información sobre DeMolay Puerto Rico.

Nombre del joven: ${youth}
Edad: ${age}
Municipio: ${municipality}
Padre/Madre/Tutor: ${guardian}
Correo: ${email}
Teléfono: ${phone || "No provisto"}
Cómo conoció DeMolay: ${source || "No indicado"}

Gracias.`);
    window.location.href=`mailto:info@demolaypr.org?subject=${subject}&body=${body}`;
  });
}

const lightbox=document.getElementById('lightbox');
if(lightbox){
  const lightboxImg=lightbox.querySelector('img');
  document.querySelectorAll('.gallery-photo img').forEach((img)=>{
    img.closest('button').addEventListener('click',()=>{
      lightboxImg.src=img.src; lightboxImg.alt=img.alt; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
    });
  });
  const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src='';};
  lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',(e)=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape')closeLightbox();});
}
