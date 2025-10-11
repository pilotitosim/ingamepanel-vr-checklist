// Variable global
var IngamePanelJDChecklistPanelLoaded = false;

// Event listener
document.addEventListener('beforeunload', function () {
    IngamePanelJDChecklistPanelLoaded = false;
}, false);

// Definición de la clase del Custom Element
class IngamePanelJDChecklistPanel extends HTMLElement {
    constructor() {
        super();
        console.log('IngamePanelJDChecklistPanel - constructor');

        // Establecer el src del iframe directamente
        const iframe = document.querySelector("#JDChecklistPanelIframe");
        if (iframe) {
            iframe.src = "https://www.perseoairlinesva.com/checklists/pdf-list.html"; // <- tu URL personalizada aquí
        }
    }

    connectedCallback() {
        console.log('IngamePanelJDChecklistPanel - connectedCallback');

        // Ocultar los elementos no utilizados
        this.m_MainDisplay = document.querySelector("#MainDisplay");
        if (this.m_MainDisplay) this.m_MainDisplay.classList.add("hidden");

        this.m_Footer = document.querySelector("#Footer");
        if (this.m_Footer) this.m_Footer.classList.add("hidden");

        // Asegurar que el iframe tenga la URL correcta
        const iframe = document.querySelector("#JDChecklistPanelIframe");
        if (iframe) {
            iframe.src = "https://www.perseoairlinesva.com/checklists/pdf-list.html"; // <- tu URL personalizada aquí también
        }
    }

    updateImage() {
        // No usamos imágenes, así que esto queda vacío
    }
}

// Define el custom element
window.customElements.define("ingamepanel-jdchecklist", IngamePanelJDChecklistPanel);

// Llamar a checkAutoload si está definido
console.log("Definición del elemento completada. Llamando a checkAutoload si existe.");
if (typeof checkAutoload === 'function') { 
    checkAutoload(); 
} else { 
    console.warn("La función checkAutoload no está definida."); 
}
