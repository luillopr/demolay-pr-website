
const btn=document.getElementById("lang");
let lang=localStorage.getItem("demolayLang")||"es";
function applyLang(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-es]").forEach(el=>{
    const value=el.dataset[lang];
    if(value) el.textContent=value;
  });
  if(btn) btn.textContent=lang==="es"?"EN":"ES";
}
applyLang();
if(btn) btn.addEventListener("click",()=>{lang=lang==="es"?"en":"es";localStorage.setItem("demolayLang",lang);applyLang();});

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
    const subject=encodeURIComponent(`Interés en DeMolay Puerto Rico - ${youth}`);
    const body=encodeURIComponent(
`Saludos,

Deseo recibir información sobre DeMolay Puerto Rico.

Nombre del joven: ${youth}
Edad: ${age}
Municipio: ${municipality}
Padre/Madre/Tutor: ${guardian}
Correo: ${email}
Teléfono: ${phone || "No provisto"}
Cómo conoció DeMolay: ${source || "No indicado"}

Gracias.`
    );
    window.location.href=`mailto:info@demolaypr.org?subject=${subject}&body=${body}`;
  });
}
